# 贡献指南

感谢您对 Awesome Cursor Rules MDC 中文版项目的关注！我们欢迎社区的贡献，无论是翻译改进、错误修复还是新功能建议。

## 🤝 如何贡献

### 报告问题
- 使用 [GitHub Issues](https://github.com/LessUp/awesome-cursor-rules-mdc-zh/issues) 报告翻译错误、技术问题或提出改进建议
- 请使用相应的 Issue 模板
- 提供详细的问题描述和重现步骤

### 提交翻译改进
1. **Fork 本仓库**
2. **创建特性分支**: `git checkout -b feature/improve-translation`
3. **进行修改**: 改进翻译质量或添加新的翻译文件
4. **提交更改**: `git commit -m "改进 React 规范的翻译质量"`
5. **推送分支**: `git push origin feature/improve-translation`
6. **创建 Pull Request**

### 翻译新文件
1. 从 [原项目](https://github.com/sanjeed5/awesome-cursor-rules-mdc) 选择未翻译的文件
2. 按照翻译质量标准进行翻译
3. 确保格式正确（YAML 前置元数据 + Markdown 内容）
4. 提交 Pull Request

## 📝 翻译质量标准

### 格式要求
- 保持原有的 YAML 前置元数据格式
- 翻译 `description` 字段为中文
- 保持 `globs` 字段为英文原文
- 保持所有 Markdown 格式和结构
- 保留所有代码块和语法高亮

### 翻译质量
- 使用标准的中文技术术语
- 确保翻译准确、自然，避免机械翻译痕迹
- 保持技术术语翻译的一致性
- 专业术语首次出现时可保留英文原文

### 技术准确性
- 确保技术内容准确无误
- 保持最佳实践的完整性
- 适当添加中文开发者相关的补充说明

## 🛠️ 开发环境设置

### 前置要求
- Git
- 文本编辑器（推荐 VS Code）
- Node.js（用于运行验证脚本）

### 本地开发
```bash
# 克隆仓库
git clone https://github.com/LessUp/awesome-cursor-rules-mdc-zh.git
cd awesome-cursor-rules-mdc-zh

# 安装依赖（如果有）
npm install

# 运行格式验证
npm run validate

# 运行翻译一致性检查
npm run check-translations
```

## 🔍 质量保证

### 自动化检查
- 所有 Pull Request 都会自动运行格式验证
- 检查 YAML 前置元数据的正确性
- 验证 Markdown 格式的完整性

### 人工审核
- 重要文件的翻译会进行人工审核
- 确保技术术语的一致性
- 验证翻译的准确性和自然性

## 📋 Pull Request 检查清单

在提交 Pull Request 之前，请确保：

- [ ] 翻译内容准确无误
- [ ] 保持了原文的格式和结构
- [ ] YAML 前置元数据格式正确
- [ ] 技术术语翻译一致
- [ ] 代码块保持英文原文
- [ ] 通过了自动化格式检查
- [ ] 提供了清晰的 PR 描述

## 🏷️ 提交信息规范

请使用清晰的提交信息：

- `feat: 添加 XXX 技术规范的中文翻译`
- `fix: 修复 XXX 文件中的翻译错误`
- `docs: 更新使用指南`
- `style: 修复格式问题`

## 🎯 优先级指导

### 高优先级
- 核心技术栈的翻译（React, Vue, Python, Go 等）
- 翻译错误的修复
- 格式问题的修复

### 中优先级
- 扩展技术栈的翻译
- 文档改进
- 使用指南完善

### 低优先级
- 小众技术的翻译
- 样式优化
- 额外功能添加

## 🤔 需要帮助？

如果您在贡献过程中遇到任何问题：

- 查看 [FAQ](docs/faq.md)
- 在 [GitHub Discussions](https://github.com/LessUp/awesome-cursor-rules-mdc-zh/discussions) 中提问
- 通过 Issue 寻求帮助

## 🙏 致谢

感谢所有为本项目做出贡献的开发者！您的努力让中国开发者社区受益匪浅。

---

**让我们一起为中国开发者社区构建最好的中文编码规范库！** 🚀
