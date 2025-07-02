# 安装指南

本指南将帮助您在 Cursor 编辑器中安装和配置 Awesome Cursor Rules MDC 中文版。

## 📋 系统要求

- **Cursor 编辑器**: 最新版本
- **操作系统**: Windows, macOS, Linux
- **Git**: 用于克隆仓库（可选）

## 🚀 安装方法

### 方法一：完整安装（推荐）

适合需要全面技术栈支持的开发者。

```bash
# 1. 克隆仓库
git clone https://github.com/your-username/awesome-cursor-rules-mdc-zh.git

# 2. 进入项目目录
cd awesome-cursor-rules-mdc-zh

# 3. 创建 Cursor 规则目录（如果不存在）
mkdir -p ~/.cursor/rules

# 4. 复制所有规范文件
cp -r rules-mdc-zh/* ~/.cursor/rules/

# 5. 重启 Cursor 编辑器
```

### 方法二：选择性安装

适合只需要特定技术栈的开发者。

#### 前端开发者
```bash
# 安装前端核心规范
cp rules-mdc-zh/react.mdc ~/.cursor/rules/
cp rules-mdc-zh/vue.mdc ~/.cursor/rules/
cp rules-mdc-zh/typescript.mdc ~/.cursor/rules/
cp rules-mdc-zh/css.mdc ~/.cursor/rules/
cp rules-mdc-zh/tailwind.mdc ~/.cursor/rules/
cp rules-mdc-zh/next-js.mdc ~/.cursor/rules/
```

#### 后端开发者
```bash
# 安装后端核心规范
cp rules-mdc-zh/python.mdc ~/.cursor/rules/
cp rules-mdc-zh/fastapi.mdc ~/.cursor/rules/
cp rules-mdc-zh/django.mdc ~/.cursor/rules/
cp rules-mdc-zh/go.mdc ~/.cursor/rules/
cp rules-mdc-zh/postgresql.mdc ~/.cursor/rules/
cp rules-mdc-zh/mongodb.mdc ~/.cursor/rules/
```

#### 全栈开发者
```bash
# 安装全栈开发规范
cp rules-mdc-zh/react.mdc ~/.cursor/rules/
cp rules-mdc-zh/python.mdc ~/.cursor/rules/
cp rules-mdc-zh/fastapi.mdc ~/.cursor/rules/
cp rules-mdc-zh/postgresql.mdc ~/.cursor/rules/
cp rules-mdc-zh/docker.mdc ~/.cursor/rules/
cp rules-mdc-zh/git.mdc ~/.cursor/rules/
```

### 方法三：项目级安装

适合团队协作，确保团队成员使用相同的编码规范。

```bash
# 1. 在项目根目录创建规则目录
mkdir -p .cursor/rules

# 2. 复制需要的规范文件
cp /path/to/awesome-cursor-rules-mdc-zh/rules-mdc-zh/react.mdc .cursor/rules/
cp /path/to/awesome-cursor-rules-mdc-zh/rules-mdc-zh/python.mdc .cursor/rules/

# 3. 提交到版本控制
git add .cursor/
git commit -m "添加项目编码规范"
git push
```

## 🔧 配置说明

### Cursor 编辑器配置

#### 全局配置
规范文件安装到 `~/.cursor/rules/` 目录后，将对所有项目生效。

#### 项目配置
规范文件安装到项目的 `.cursor/rules/` 目录后，仅对当前项目生效，且优先级高于全局配置。

### 规范文件说明

每个 `.mdc` 文件包含：
- **YAML 前置元数据**: 描述和文件匹配规则
- **Markdown 内容**: 详细的编码规范和最佳实践

示例文件结构：
```yaml
---
description: React 最佳实践的综合指南
globs: *.js,*.jsx,*.ts,*.tsx
---
# React 最佳实践：综合指南
...
```

## ✅ 验证安装

### 检查安装状态
```bash
# 检查全局规则目录
ls ~/.cursor/rules/

# 检查项目规则目录
ls .cursor/rules/
```

### 测试功能
1. 打开 Cursor 编辑器
2. 创建一个新的 React 文件（如 `test.jsx`）
3. 开始编写代码，观察是否有中文规范提示
4. 使用 AI 助手功能，检查是否应用了中文编码规范

## 🔄 更新规范

### 手动更新
```bash
# 1. 拉取最新版本
cd awesome-cursor-rules-mdc-zh
git pull origin main

# 2. 更新规范文件
cp -r rules-mdc-zh/* ~/.cursor/rules/

# 3. 重启 Cursor 编辑器
```

### 自动更新脚本
创建更新脚本 `update-rules.sh`：
```bash
#!/bin/bash
cd ~/awesome-cursor-rules-mdc-zh
git pull origin main
cp -r rules-mdc-zh/* ~/.cursor/rules/
echo "规范文件已更新，请重启 Cursor 编辑器"
```

## 🛠️ 故障排除

### 常见问题

#### 问题1：规范文件不生效
**解决方案**：
1. 确认文件路径正确
2. 重启 Cursor 编辑器
3. 检查文件权限

#### 问题2：中文显示乱码
**解决方案**：
1. 确保文件编码为 UTF-8
2. 检查编辑器字符编码设置

#### 问题3：规范冲突
**解决方案**：
1. 项目级规范优先于全局规范
2. 删除冲突的规范文件
3. 重新安装需要的规范

### 获取帮助

如果遇到安装问题：
1. 查看 [FAQ](faq.md)
2. 在 [GitHub Issues](https://github.com/your-username/awesome-cursor-rules-mdc-zh/issues) 中搜索相关问题
3. 创建新的 Issue 描述问题

## 📱 不同平台说明

### Windows
```powershell
# PowerShell 命令
New-Item -ItemType Directory -Path "$env:USERPROFILE\.cursor\rules" -Force
Copy-Item -Path "rules-mdc-zh\*" -Destination "$env:USERPROFILE\.cursor\rules\" -Recurse
```

### macOS/Linux
```bash
# Bash 命令
mkdir -p ~/.cursor/rules
cp -r rules-mdc-zh/* ~/.cursor/rules/
```

---

**安装完成后，您就可以享受中文编码规范带来的高效开发体验了！** 🎉
