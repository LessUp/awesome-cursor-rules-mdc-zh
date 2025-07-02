#!/usr/bin/env node

/**
 * 修复 MDC 文件中的 YAML 格式问题
 * 主要修复 globs 字段中缺少引号的问题
 */

const fs = require('fs');
const path = require('path');

class YAMLFixer {
    constructor() {
        this.fixedFiles = [];
        this.errors = [];
    }

    /**
     * 修复单个文件的 YAML 格式
     */
    fixFile(filePath) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const fileName = path.basename(filePath);
            
            console.log(`修复文件: ${fileName}`);
            
            // 检查文件是否以 YAML 前置元数据开始
            if (!content.startsWith('---\n')) {
                this.addError(fileName, '文件不以 YAML 前置元数据开始');
                return false;
            }

            // 分离 YAML 前置元数据和 Markdown 内容
            const parts = content.split('---\n');
            if (parts.length < 3) {
                this.addError(fileName, 'YAML 前置元数据格式错误');
                return false;
            }

            let yamlContent = parts[1];
            const markdownContent = parts.slice(2).join('---\n');

            // 修复 globs 字段 - 添加引号
            yamlContent = yamlContent.replace(
                /^globs:\s*(.+)$/gm,
                (match, globsValue) => {
                    // 如果已经有引号，不需要修改
                    if (globsValue.trim().startsWith('"') && globsValue.trim().endsWith('"')) {
                        return match;
                    }
                    // 添加引号
                    return `globs: "${globsValue.trim()}"`;
                }
            );

            // 重新组合文件内容
            const fixedContent = `---\n${yamlContent}---\n${markdownContent}`;

            // 写回文件
            fs.writeFileSync(filePath, fixedContent, 'utf8');
            
            this.fixedFiles.push(fileName);
            console.log(`✅ ${fileName} 修复完成`);
            return true;

        } catch (error) {
            this.addError(path.basename(filePath), `文件处理错误: ${error.message}`);
            return false;
        }
    }

    /**
     * 修复目录中的所有 MDC 文件
     */
    fixDirectory(dirPath) {
        console.log(`开始修复目录: ${dirPath}\n`);

        if (!fs.existsSync(dirPath)) {
            console.error(`❌ 目录不存在: ${dirPath}`);
            return false;
        }

        const files = fs.readdirSync(dirPath)
            .filter(file => file.endsWith('.mdc'))
            .map(file => path.join(dirPath, file));

        if (files.length === 0) {
            console.log('📁 目录中没有找到 .mdc 文件');
            return true;
        }

        console.log(`找到 ${files.length} 个 .mdc 文件\n`);

        files.forEach(file => {
            this.fixFile(file);
            console.log(''); // 空行分隔
        });

        return this.errors.length === 0;
    }

    /**
     * 添加错误
     */
    addError(fileName, message) {
        this.errors.push({ file: fileName, message });
        console.log(`❌ ${fileName}: ${message}`);
    }

    /**
     * 打印修复结果
     */
    printResults() {
        console.log('\n' + '='.repeat(60));
        console.log('📊 YAML 格式修复结果');
        console.log('='.repeat(60));
        console.log(`修复的文件数: ${this.fixedFiles.length}`);
        console.log(`错误数量: ${this.errors.length}`);

        if (this.fixedFiles.length > 0) {
            console.log('\n✅ 已修复的文件:');
            this.fixedFiles.forEach(file => {
                console.log(`  - ${file}`);
            });
        }

        if (this.errors.length > 0) {
            console.log('\n❌ 错误详情:');
            this.errors.forEach(error => {
                console.log(`  - ${error.file}: ${error.message}`);
            });
        }

        const success = this.errors.length === 0;
        console.log(`\n${success ? '✅ 所有文件修复成功!' : '❌ 存在修复失败的文件!'}`);
        
        return success;
    }
}

// 主函数
function main() {
    const fixer = new YAMLFixer();
    const rulesDir = path.join(__dirname, '..', 'rules-mdc-zh');
    
    console.log('🔧 MDC 文件 YAML 格式修复器');
    console.log('='.repeat(60));
    
    const success = fixer.fixDirectory(rulesDir);
    const finalResult = fixer.printResults();
    
    process.exit(finalResult ? 0 : 1);
}

// 如果直接运行此脚本
if (require.main === module) {
    main();
}

module.exports = { YAMLFixer };
