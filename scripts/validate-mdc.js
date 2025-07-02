#!/usr/bin/env node

/**
 * MDC 文件格式验证脚本
 * 验证翻译文件的格式正确性和完整性
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

class MDCValidator {
    constructor() {
        this.errors = [];
        this.warnings = [];
        this.stats = {
            totalFiles: 0,
            validFiles: 0,
            invalidFiles: 0
        };
    }

    /**
     * 验证单个 MDC 文件
     */
    validateFile(filePath) {
        console.log(`验证文件: ${filePath}`);
        this.stats.totalFiles++;

        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const fileName = path.basename(filePath);
            
            // 检查文件是否以 YAML 前置元数据开始
            if (!content.startsWith('---\n')) {
                this.addError(fileName, '文件必须以 YAML 前置元数据开始 (---)');
                return false;
            }

            // 分离 YAML 前置元数据和 Markdown 内容
            const parts = content.split('---\n');
            if (parts.length < 3) {
                this.addError(fileName, 'YAML 前置元数据格式错误');
                return false;
            }

            const yamlContent = parts[1];
            const markdownContent = parts.slice(2).join('---\n');

            // 验证 YAML 前置元数据
            if (!this.validateYAML(fileName, yamlContent)) {
                return false;
            }

            // 验证 Markdown 内容
            if (!this.validateMarkdown(fileName, markdownContent)) {
                return false;
            }

            this.stats.validFiles++;
            console.log(`✅ ${fileName} 验证通过`);
            return true;

        } catch (error) {
            this.addError(path.basename(filePath), `文件读取错误: ${error.message}`);
            return false;
        }
    }

    /**
     * 验证 YAML 前置元数据
     */
    validateYAML(fileName, yamlContent) {
        try {
            const metadata = yaml.load(yamlContent);
            
            // 检查必需字段
            if (!metadata.description) {
                this.addError(fileName, 'YAML 前置元数据缺少 description 字段');
                return false;
            }

            if (!metadata.globs) {
                this.addError(fileName, 'YAML 前置元数据缺少 globs 字段');
                return false;
            }

            // 检查 description 是否为中文
            if (!/[\u4e00-\u9fa5]/.test(metadata.description)) {
                this.addWarning(fileName, 'description 字段应该包含中文内容');
            }

            // 检查 globs 格式
            if (typeof metadata.globs !== 'string') {
                this.addError(fileName, 'globs 字段应该是字符串格式');
                return false;
            }

            return true;

        } catch (error) {
            this.addError(fileName, `YAML 解析错误: ${error.message}`);
            return false;
        }
    }

    /**
     * 验证 Markdown 内容
     */
    validateMarkdown(fileName, markdownContent) {
        // 检查是否有内容
        if (!markdownContent.trim()) {
            this.addError(fileName, 'Markdown 内容不能为空');
            return false;
        }

        // 检查是否有中文内容
        if (!/[\u4e00-\u9fa5]/.test(markdownContent)) {
            this.addWarning(fileName, 'Markdown 内容应该包含中文翻译');
        }

        // 检查是否有标题
        if (!markdownContent.includes('#')) {
            this.addWarning(fileName, 'Markdown 内容应该包含标题');
        }

        return true;
    }

    /**
     * 验证目录中的所有 MDC 文件
     */
    validateDirectory(dirPath) {
        console.log(`开始验证目录: ${dirPath}\n`);

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
            if (!this.validateFile(file)) {
                this.stats.invalidFiles++;
            }
            console.log(''); // 空行分隔
        });

        return this.stats.invalidFiles === 0;
    }

    /**
     * 添加错误
     */
    addError(fileName, message) {
        this.errors.push({ file: fileName, message });
        console.log(`❌ ${fileName}: ${message}`);
    }

    /**
     * 添加警告
     */
    addWarning(fileName, message) {
        this.warnings.push({ file: fileName, message });
        console.log(`⚠️  ${fileName}: ${message}`);
    }

    /**
     * 打印验证结果
     */
    printResults() {
        console.log('\n' + '='.repeat(60));
        console.log('📊 验证结果统计');
        console.log('='.repeat(60));
        console.log(`总文件数: ${this.stats.totalFiles}`);
        console.log(`有效文件: ${this.stats.validFiles}`);
        console.log(`无效文件: ${this.stats.invalidFiles}`);
        console.log(`错误数量: ${this.errors.length}`);
        console.log(`警告数量: ${this.warnings.length}`);

        if (this.errors.length > 0) {
            console.log('\n❌ 错误详情:');
            this.errors.forEach(error => {
                console.log(`  - ${error.file}: ${error.message}`);
            });
        }

        if (this.warnings.length > 0) {
            console.log('\n⚠️  警告详情:');
            this.warnings.forEach(warning => {
                console.log(`  - ${warning.file}: ${warning.message}`);
            });
        }

        const success = this.stats.invalidFiles === 0;
        console.log(`\n${success ? '✅ 所有文件验证通过!' : '❌ 存在验证失败的文件!'}`);
        
        return success;
    }
}

// 主函数
function main() {
    const validator = new MDCValidator();
    const rulesDir = path.join(__dirname, '..', 'rules-mdc-zh');
    
    console.log('🔍 MDC 文件格式验证器');
    console.log('='.repeat(60));
    
    const success = validator.validateDirectory(rulesDir);
    const finalResult = validator.printResults();
    
    process.exit(finalResult ? 0 : 1);
}

// 如果直接运行此脚本
if (require.main === module) {
    main();
}

module.exports = { MDCValidator };
