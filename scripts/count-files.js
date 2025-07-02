#!/usr/bin/env node

/**
 * 翻译进度统计脚本
 * 统计翻译完成情况并生成进度报告
 */

const fs = require('fs');
const path = require('path');

class ProgressTracker {
    constructor() {
        this.originalFiles = [];
        this.translatedFiles = [];
        this.stats = {
            total: 0,
            translated: 0,
            remaining: 0,
            percentage: 0
        };
        this.categories = {
            frontend: [],
            backend: [],
            mobile: [],
            database: [],
            devops: [],
            testing: [],
            ai_ml: [],
            tools: [],
            other: []
        };
    }

    /**
     * 扫描原项目文件
     */
    scanOriginalFiles(originalDir) {
        if (!fs.existsSync(originalDir)) {
            console.error(`❌ 原项目目录不存在: ${originalDir}`);
            return false;
        }

        this.originalFiles = fs.readdirSync(originalDir)
            .filter(file => file.endsWith('.mdc'))
            .map(file => file.replace('.mdc', ''));

        this.stats.total = this.originalFiles.length;
        console.log(`📁 原项目文件总数: ${this.stats.total}`);
        return true;
    }

    /**
     * 扫描已翻译文件
     */
    scanTranslatedFiles(translatedDir) {
        if (!fs.existsSync(translatedDir)) {
            console.error(`❌ 翻译目录不存在: ${translatedDir}`);
            return false;
        }

        this.translatedFiles = fs.readdirSync(translatedDir)
            .filter(file => file.endsWith('.mdc'))
            .map(file => file.replace('.mdc', ''));

        this.stats.translated = this.translatedFiles.length;
        this.stats.remaining = this.stats.total - this.stats.translated;
        this.stats.percentage = ((this.stats.translated / this.stats.total) * 100).toFixed(1);

        console.log(`✅ 已翻译文件数: ${this.stats.translated}`);
        console.log(`⏳ 待翻译文件数: ${this.stats.remaining}`);
        console.log(`📊 翻译完成度: ${this.stats.percentage}%`);
        return true;
    }

    /**
     * 分类文件
     */
    categorizeFiles() {
        // 前端技术
        const frontendKeywords = [
            'react', 'vue', 'angular', 'next-js', 'svelte', 'nuxt', 'remix', 'astro',
            'typescript', 'javascript', 'css', 'sass', 'scss', 'less',
            'tailwind', 'bootstrap', 'material-ui', 'ant-design', 'chakra-ui', 'shadcn',
            'vite', 'webpack', 'parcel', 'rollup', 'esbuild',
            'redux', 'mobx', 'zustand', 'recoil',
            'axios', 'd3', 'three-js', 'chart-js'
        ];

        // 后端技术
        const backendKeywords = [
            'python', 'go', 'rust', 'java', 'c-sharp', 'php', 'ruby', 'kotlin', 'scala',
            'fastapi', 'django', 'flask', 'express', 'nestjs', 'spring', 'laravel',
            'graphql', 'apollo-graphql', 'trpc', 'grpc',
            'socket-io', 'websocket'
        ];

        // 移动开发
        const mobileKeywords = [
            'react-native', 'flutter', 'expo', 'ionic',
            'android-sdk', 'ios-sdk', 'jetpack-compose', 'swiftui'
        ];

        // 数据库
        const databaseKeywords = [
            'postgresql', 'mysql', 'sqlite', 'mongodb', 'redis', 'elasticsearch',
            'neo4j', 'cassandra', 'dynamodb', 'firestore',
            'prisma', 'drizzle', 'sqlalchemy', 'django-orm', 'typeorm'
        ];

        // DevOps
        const devopsKeywords = [
            'docker', 'kubernetes', 'terraform', 'ansible', 'vagrant',
            'aws', 'azure', 'gcp', 'cloudflare',
            'jenkins', 'github-actions', 'gitlab-ci', 'circleci',
            'nginx', 'apache', 'traefik'
        ];

        // 测试
        const testingKeywords = [
            'jest', 'mocha', 'jasmine', 'vitest',
            'cypress', 'playwright', 'selenium', 'puppeteer',
            'pytest', 'unittest', 'rspec', 'junit'
        ];

        // AI/ML
        const aiMlKeywords = [
            'tensorflow', 'pytorch', 'keras', 'scikit-learn',
            'huggingface', 'transformers', 'langchain', 'llama-index',
            'autogen', 'crewai', 'openai', 'anthropic',
            'pandas', 'numpy', 'matplotlib', 'seaborn', 'plotly'
        ];

        // 工具
        const toolsKeywords = [
            'git', 'svn', 'mercurial',
            'eslint', 'prettier', 'black', 'pylint', 'mypy',
            'babel', 'postcss', 'autoprefixer',
            'storybook', 'chromatic'
        ];

        // 分类所有文件
        this.originalFiles.forEach(file => {
            const fileName = file.toLowerCase();
            
            if (frontendKeywords.some(keyword => fileName.includes(keyword))) {
                this.categories.frontend.push(file);
            } else if (backendKeywords.some(keyword => fileName.includes(keyword))) {
                this.categories.backend.push(file);
            } else if (mobileKeywords.some(keyword => fileName.includes(keyword))) {
                this.categories.mobile.push(file);
            } else if (databaseKeywords.some(keyword => fileName.includes(keyword))) {
                this.categories.database.push(file);
            } else if (devopsKeywords.some(keyword => fileName.includes(keyword))) {
                this.categories.devops.push(file);
            } else if (testingKeywords.some(keyword => fileName.includes(keyword))) {
                this.categories.testing.push(file);
            } else if (aiMlKeywords.some(keyword => fileName.includes(keyword))) {
                this.categories.ai_ml.push(file);
            } else if (toolsKeywords.some(keyword => fileName.includes(keyword))) {
                this.categories.tools.push(file);
            } else {
                this.categories.other.push(file);
            }
        });
    }

    /**
     * 获取未翻译文件列表
     */
    getMissingFiles() {
        return this.originalFiles.filter(file => !this.translatedFiles.includes(file));
    }

    /**
     * 按优先级排序未翻译文件
     */
    prioritizeMissingFiles() {
        const missingFiles = this.getMissingFiles();
        
        // 定义优先级
        const priority1 = [
            'javascript', 'nodejs', 'html', 'bootstrap', 'material-ui', 'ant-design',
            'c-sharp', 'php', 'ruby', 'laravel', 'flask', 'mysql', 'sqlite'
        ];
        
        const priority2 = [
            'tensorflow', 'pytorch', 'pandas', 'numpy', 'scikit-learn',
            'aws', 'azure', 'gcp', 'github-actions', 'gitlab-ci'
        ];

        const categorized = {
            priority1: missingFiles.filter(file => priority1.includes(file)),
            priority2: missingFiles.filter(file => priority2.includes(file)),
            others: missingFiles.filter(file => !priority1.includes(file) && !priority2.includes(file))
        };

        return categorized;
    }

    /**
     * 生成详细报告
     */
    generateReport() {
        console.log('\n' + '='.repeat(80));
        console.log('📊 翻译进度详细报告');
        console.log('='.repeat(80));

        // 总体统计
        console.log('\n📈 总体进度:');
        console.log(`   总文件数: ${this.stats.total}`);
        console.log(`   已翻译: ${this.stats.translated} (${this.stats.percentage}%)`);
        console.log(`   待翻译: ${this.stats.remaining}`);

        // 分类统计
        console.log('\n📂 分类统计:');
        Object.entries(this.categories).forEach(([category, files]) => {
            const translated = files.filter(file => this.translatedFiles.includes(file)).length;
            const total = files.length;
            const percentage = total > 0 ? ((translated / total) * 100).toFixed(1) : '0.0';
            
            const categoryNames = {
                frontend: '前端技术',
                backend: '后端技术',
                mobile: '移动开发',
                database: '数据库',
                devops: 'DevOps',
                testing: '测试工具',
                ai_ml: 'AI/ML',
                tools: '开发工具',
                other: '其他'
            };

            console.log(`   ${categoryNames[category]}: ${translated}/${total} (${percentage}%)`);
        });

        // 优先级建议
        console.log('\n🎯 翻译优先级建议:');
        const prioritized = this.prioritizeMissingFiles();
        
        if (prioritized.priority1.length > 0) {
            console.log('\n   🥇 高优先级 (核心技术):');
            prioritized.priority1.forEach(file => console.log(`      - ${file}.mdc`));
        }
        
        if (prioritized.priority2.length > 0) {
            console.log('\n   🥈 中优先级 (扩展技术):');
            prioritized.priority2.slice(0, 10).forEach(file => console.log(`      - ${file}.mdc`));
            if (prioritized.priority2.length > 10) {
                console.log(`      ... 还有 ${prioritized.priority2.length - 10} 个文件`);
            }
        }

        // 最近翻译的文件
        console.log('\n✅ 最近翻译完成:');
        this.translatedFiles.slice(-5).forEach(file => {
            console.log(`   - ${file}.mdc`);
        });

        console.log('\n' + '='.repeat(80));
        console.log(`🎉 当前翻译进度: ${this.stats.percentage}% 完成`);
        console.log('='.repeat(80));
    }

    /**
     * 生成 JSON 报告
     */
    generateJSONReport(outputPath) {
        const report = {
            timestamp: new Date().toISOString(),
            stats: this.stats,
            categories: Object.fromEntries(
                Object.entries(this.categories).map(([key, files]) => [
                    key,
                    {
                        total: files.length,
                        translated: files.filter(file => this.translatedFiles.includes(file)).length,
                        files: files
                    }
                ])
            ),
            translated: this.translatedFiles,
            missing: this.getMissingFiles(),
            prioritized: this.prioritizeMissingFiles()
        };

        fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
        console.log(`\n📄 JSON 报告已保存到: ${outputPath}`);
    }
}

// 主函数
function main() {
    const tracker = new ProgressTracker();
    
    console.log('📊 翻译进度统计器');
    console.log('='.repeat(50));
    
    // 扫描文件
    const originalDir = path.join(__dirname, '..', '..', 'awesome-cursor-rules-mdc', 'rules-mdc');
    const translatedDir = path.join(__dirname, '..', 'rules-mdc-zh');
    
    if (!tracker.scanOriginalFiles(originalDir)) {
        process.exit(1);
    }
    
    if (!tracker.scanTranslatedFiles(translatedDir)) {
        process.exit(1);
    }
    
    // 分类文件
    tracker.categorizeFiles();
    
    // 生成报告
    tracker.generateReport();
    
    // 生成 JSON 报告
    const jsonReportPath = path.join(__dirname, '..', 'translation-progress.json');
    tracker.generateJSONReport(jsonReportPath);
}

// 如果直接运行此脚本
if (require.main === module) {
    main();
}

module.exports = { ProgressTracker };
