# 使用指南

本指南将帮助您充分利用 Awesome Cursor Rules MDC 中文版，提升开发效率和代码质量。

## 🎯 基本使用

### 启用规范
安装规范文件后，Cursor 编辑器会自动识别并应用相应的编码规范。

### 文件匹配
每个规范文件都有特定的文件匹配规则（globs），例如：
- `react.mdc`: 匹配 `*.js, *.jsx, *.ts, *.tsx`
- `python.mdc`: 匹配 `*.py`
- `css.mdc`: 匹配 `*.css, *.scss, *.sass`

### AI 助手集成
当您在编写代码时，Cursor 的 AI 助手会：
1. 根据文件类型自动应用相应的中文编码规范
2. 提供符合最佳实践的代码建议
3. 解释代码规范的原因和好处

## 🚀 高级功能

### 自定义规范组合

#### 场景1：React + TypeScript 项目
```bash
# 只安装前端相关规范
cp rules-mdc-zh/react.mdc .cursor/rules/
cp rules-mdc-zh/typescript.mdc .cursor/rules/
cp rules-mdc-zh/tailwind.mdc .cursor/rules/
cp rules-mdc-zh/vite.mdc .cursor/rules/
```

#### 场景2：Python Web 开发
```bash
# 安装 Python 后端技术栈
cp rules-mdc-zh/python.mdc .cursor/rules/
cp rules-mdc-zh/fastapi.mdc .cursor/rules/
cp rules-mdc-zh/postgresql.mdc .cursor/rules/
cp rules-mdc-zh/docker.mdc .cursor/rules/
```

#### 场景3：全栈开发
```bash
# 安装全栈开发规范
cp rules-mdc-zh/{react,python,fastapi,postgresql,docker,git}.mdc .cursor/rules/
```

### 团队协作

#### 统一团队规范
1. **项目级配置**：在项目根目录创建 `.cursor/rules/` 目录
2. **版本控制**：将规范文件提交到 Git 仓库
3. **团队同步**：团队成员拉取代码后自动获得相同规范

```bash
# 团队负责人设置
mkdir -p .cursor/rules
cp ~/awesome-cursor-rules-mdc-zh/rules-mdc-zh/react.mdc .cursor/rules/
cp ~/awesome-cursor-rules-mdc-zh/rules-mdc-zh/typescript.mdc .cursor/rules/
git add .cursor/
git commit -m "添加团队编码规范"
git push

# 团队成员同步
git pull
# Cursor 会自动识别项目级规范
```

#### 规范文档化
在项目 README 中说明使用的编码规范：

```markdown
## 编码规范

本项目使用以下编码规范：
- React 开发规范
- TypeScript 编码标准
- Tailwind CSS 样式指南

规范文件位于 `.cursor/rules/` 目录，Cursor 编辑器会自动应用。
```

## 📝 实际应用示例

### React 组件开发

**场景**：创建一个新的 React 组件

1. **创建文件**：`components/UserCard.tsx`
2. **AI 助手提示**：基于 React 中文规范提供组件结构建议
3. **代码生成**：遵循最佳实践的组件代码

```typescript
// AI 助手会建议这样的组件结构
import React from 'react';
import styles from './UserCard.module.css';

interface UserCardProps {
  user: {
    id: string;
    name: string;
    email: string;
  };
  onEdit?: (userId: string) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onEdit }) => {
  // 组件逻辑
};
```

### Python API 开发

**场景**：创建 FastAPI 路由

1. **创建文件**：`api/users.py`
2. **AI 助手提示**：基于 FastAPI 中文规范提供 API 结构
3. **代码生成**：符合最佳实践的 API 代码

```python
# AI 助手会建议这样的 API 结构
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List

router = APIRouter(prefix="/users", tags=["users"])

class UserCreate(BaseModel):
    name: str
    email: str

@router.post("/", response_model=User)
async def create_user(user: UserCreate):
    # API 逻辑
```

## 🔧 配置优化

### 性能优化

#### 选择性加载
只安装项目需要的规范文件，减少内存占用：

```bash
# 只安装当前项目使用的技术栈
cp rules-mdc-zh/react.mdc .cursor/rules/
cp rules-mdc-zh/typescript.mdc .cursor/rules/
# 不安装不需要的规范文件
```

#### 规范优先级
- **项目级规范** > **全局规范**
- **具体规范** > **通用规范**

### 自定义配置

#### 修改文件匹配规则
如果需要自定义文件匹配规则，可以编辑规范文件的 YAML 前置元数据：

```yaml
---
description: React 最佳实践的综合指南
globs: *.js,*.jsx,*.ts,*.tsx,*.mjs  # 添加 .mjs 支持
---
```

#### 添加项目特定规范
在项目规范基础上添加特定要求：

```markdown
# 项目特定补充规范

## 组件命名
- 所有组件必须以 `App` 为前缀
- 页面组件放在 `pages/` 目录
- 通用组件放在 `components/` 目录

## 状态管理
- 使用 Zustand 进行全局状态管理
- 本地状态优先使用 useState
```

## 📊 效果监控

### 代码质量提升

#### 指标监控
- **代码一致性**：团队代码风格统一度
- **最佳实践采用率**：规范建议的采用情况
- **错误减少率**：常见错误的减少情况

#### 团队反馈
定期收集团队对规范使用的反馈：
- 哪些规范最有用？
- 哪些规范需要调整？
- 是否需要添加新的规范？

### 持续改进

#### 规范更新
- 定期更新规范文件获取最新最佳实践
- 根据项目需求调整规范内容
- 关注技术发展趋势更新规范

#### 知识分享
- 在团队中分享规范使用经验
- 组织编码规范培训
- 建立最佳实践知识库

## 🛠️ 故障排除

### 常见问题

#### AI 助手没有应用规范
**检查项**：
1. 规范文件是否正确安装
2. 文件扩展名是否匹配规范的 globs
3. 是否重启了 Cursor 编辑器

#### 规范冲突
**解决方案**：
1. 检查是否有多个相似规范文件
2. 确认项目级和全局级规范的优先级
3. 删除不需要的规范文件

#### 中文显示问题
**解决方案**：
1. 确保文件编码为 UTF-8
2. 检查编辑器语言设置
3. 更新 Cursor 编辑器到最新版本

## 💡 最佳实践建议

### 团队使用
1. **统一规范**：团队使用相同的规范文件
2. **定期更新**：保持规范文件的最新状态
3. **培训新人**：为新团队成员提供规范使用培训

### 个人使用
1. **渐进采用**：从核心技术栈开始，逐步添加其他规范
2. **持续学习**：通过规范学习最佳实践
3. **反馈改进**：积极反馈使用体验，帮助改进规范

---

**通过合理使用这些中文编码规范，您将显著提升开发效率和代码质量！** 🚀
