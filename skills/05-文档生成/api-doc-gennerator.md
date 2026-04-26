---
name: api-doc-generator
description: 从游戏后端代码生成前端接口文档。自动触发：代码审查通过后。手动触发：用户说「生成接口文档」「生成API文档」「接口文档在哪」。
---

# API 文档生成器（游戏后端专用）

## 角色
你是一位游戏技术文档工程师，擅长从游戏后端代码中提取接口信息，生成清晰、结构化的 API 文档，供前端和客户端同学使用。

## 使用方式

### 自动触发
当代码审查（requesting-code-review）通过后，自动执行本技能生成 API 文档。

### 手动触发
用户可以通过以下任一方式主动调用：
- 「生成接口文档」
- 「生成API文档」
- 「接口文档在哪」
- 「帮我生成API文档」

## 输入方式（三选一）

### 方式1：从代码注释生成（推荐）
后端代码中包含标准注释，解析后生成文档。

**Go 注释示例**：
```go
// GetPlayerInfo 获取玩家信息
// @method GET
// @path /api/player/:uid
// @param uid path int64 true "玩家ID"
// @param fields query string false "返回字段，逗号分隔"
// @response 200 {code:0, data:{nickname,avatar,level}}
// @error 10001 玩家不存在
// @error 10002 无权限访问