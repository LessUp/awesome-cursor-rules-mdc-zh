# Awesome Cursor Rules (MDC) - 中文版

[![GitHub Stars](https://img.shields.io/github/stars/LessUp/awesome-cursor-rules-mdc-zh?style=social)](https://github.com/LessUp/awesome-cursor-rules-mdc-zh/stargazers) [![许可证](https://img.shields.io/github/license/LessUp/awesome-cursor-rules-mdc-zh?color=blue)](LICENSE) [![贡献者](https://img.shields.io/github/contributors/LessUp/awesome-cursor-rules-mdc-zh)](https://github.com/LessUp/awesome-cursor-rules-mdc-zh/graphs/contributors) [![最后提交](https://img.shields.io/github/last-commit/LessUp/awesome-cursor-rules-mdc-zh)](https://github.com/LessUp/awesome-cursor-rules-mdc-zh/commits/main) [![GitHub issues](https://img.shields.io/github/issues/LessUp/awesome-cursor-rules-mdc-zh)](https://github.com/LessUp/awesome-cursor-rules-mdc-zh/issues)

**专为中文开发者打造的 [Cursor](https://cursor.sh/) 编码规范大全，让 AI 更懂你的代码。**

这是一个由中文开发者社区驱动的开源项目，我们致力于将优秀的 [awesome-cursor-rules-mdc](https://github.com/sanjeed5/awesome-cursor-rules-mdc) 项目进行全面且高质量的汉化，为广大的中文开发者提供一套更易于理解、更贴近使用习惯的编码规范与最佳实践。

---

## 🌟 项目特色

- 🌏 **专为中文优化**: 遵循中文技术社区的语言习惯和术语，让规范更易读、更亲切。
- 📚 **覆盖广泛**: 涵盖前端、后端、数据库、DevOps、AI/ML 等全方位技术栈。
- 🚀 **开箱即用**: 只需一条命令，即可将行业最佳实践集成到您的 Cursor 编辑器中。
- 🤝 **社区驱动**: 欢迎每一位开发者参与贡献，共同打造最适合中文开发者的规范库。

## 🚀 快速开始

将规范文件复制到 Cursor 的规则目录即可生效。重启 Cursor 后，AI 将根据这些中文规范提供建议。

### 方式一：安装所有中文规范 (推荐)

```bash
# 创建目录 (如果不存在)
mkdir -p ~/.cursor/rules

# 复制所有规范文件
cp -r rules-mdc-zh/* ~/.cursor/rules/
```

### 方式二：按需安装特定规范

```bash
# 示例：仅安装前端和 Python 相关的规范
mkdir -p ~/.cursor/rules
cp rules-mdc-zh/react.mdc ~/.cursor/rules/
cp rules-mdc-zh/typescript.mdc ~/.cursor/rules/
cp rules-mdc-zh/python.mdc ~/.cursor/rules/
```

> **提示**: 您也可以在项目根目录创建 `.cursor/rules` 文件夹，实现项目级别的规范隔离。

## 🤝 如何贡献

**我们热烈欢迎您的贡献，共同完善这个项目！** 无论您是修复一个错字，还是翻译一篇全新的规范，您的努力都将帮助到成千上万的中文开发者。

参与贡献非常简单：

1.  **Fork** 本项目。
2.  **创建**一个新的分支 (`git checkout -b feature/translate-xxx`)。
3.  **翻译或修改**相关文件。
4.  **提交**您的更改并发起一个 Pull Request。

我们准备了详细的 **[贡献指南 (CONTRIBUTING.md)](CONTRIBUTING.md)** 来帮助您顺利开始。如果您有任何疑问，随时可以创建 [Issue](https://github.com/LessUp/awesome-cursor-rules-mdc-zh/issues) 与我们交流。

## ⭐ 支持项目

如果您认为这个项目对您有帮助，请不吝给我们一个 Star ⭐！您的支持是激励我们不断完善项目的最大动力，也能帮助更多开发者发现和使用它。

---

## 📄 许可证

本项目遵循 **[CC0 1.0 Universal](LICENSE)** 许可证，与源项目保持一致。

## 🙏 致谢

- 本项目基于优秀的 [**awesome-cursor-rules-mdc**](https://github.com/sanjeed5/awesome-cursor-rules-mdc) 项目，感谢原作者及社区的卓越工作。
- 感谢所有为本项目付出的[**贡献者**](https://github.com/LessUp/awesome-cursor-rules-mdc-zh/graphs/contributors)，是你们让这个项目变得更好。