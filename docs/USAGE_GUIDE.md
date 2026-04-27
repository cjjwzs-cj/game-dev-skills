# Usage Guide

This guide provides comprehensive instructions on how to use the game-dev-skills library effectively.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Skill Usage](#skill-usage)
- [Usage Examples](#usage-examples)
- [Error Handling](#error-handling)
- [Output Format](#output-format)
- [Smart Loading](#smart-loading)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Installation

### Using Installer (Recommended)

```bash
# Install using npx (no installation required)
npx game-dev-skills-installer

# Or install globally
npm install -g game-dev-skills-installer
game-dev-skills-installer
```

### Manual Installation

```bash
# Clone the repository
git clone https://github.com/cjjwzs-cj/game-dev-skills.git
cd game-dev-skills

# Copy skills manually
cp -r skills/* ~/.claude/skills/
# Or for Trae: cp -r skills/* ~/.trae/skills/
# Or for Codex: cp -r skills/* ~/.codex/skills/
```

After installation, skills are available in your AI tool's skills directory.

## Quick Start

### For AI Coding Assistants

```bash
# Install skills
npm install game-dev-skills

# Open your AI tool (Claude Code, Trae, Codex, etc.)
claude

# Use a skill
> /skills
> Use backend planning review to review docs/策划案.md
```

### For Trae

```bash
npm install game-dev-skills
AI_TOOL=.trae npm install game-dev-skills
```

### For Codex

```bash
npm install game-dev-skills
AI_TOOL=.codex npm install game-dev-skills
```

## Skill Usage

### Basic Usage

You can use skills in English or Chinese:

**English:**
```text
/skills
Use backend planning review to review docs/策划案.md
```

**Chinese:**
```text
/skills
用游戏后端策划案评审审阅 docs/策划案.md
```

### Auto-Routing

Use the entry skill for automatic routing:

**English:**
```text
/skills
Use game planning review to review docs/策划案.md
```

**Chinese:**
```text
/skills
用游戏策划案总审阅审阅 docs/策划案.md
```

The AI will automatically analyze the content and route to the appropriate skills.

## Usage Examples

### Example 1: Review Backend Planning Document

**Input (English):**
```
Please review this backend planning document for an FPS game
```

**Input (Chinese):**
```
请审查这个FPS游戏的后端策划案
```

**System Action:**
- Automatically loads: Backend Planning Review + Backend FPS Plugin
- Total tokens: ~7,000
- Processing time: 5-10 seconds

**Output (English):**
```
✅ Backend Planning Document Review Passed

Checked modules:
- ✅ Architecture design
- ✅ Database design
- ✅ API design
- ✅ Performance considerations
- ✅ Security design

Overall assessment: The planning document is well-structured and suitable for FPS game development.
```

**Output (Chinese):**
```
✅ 后端策划案审查通过

已检查模块：
- ✅ 架构设计
- ✅ 数据库设计
- ✅ API设计
- ✅ 性能考虑
- ✅ 安全设计

整体评价：策划案结构完善，适合FPS游戏开发。
```

### Example 2: Detect Configuration Table Errors

**Input (English):**
```
Detect errors in this configuration table file
```

**Input (Chinese):**
```
检测这个配置表文件的错误
```

**System Action:**
- Automatically loads: Config Table Detection
- Total tokens: ~4,500
- Processing time: 2-5 seconds

**Output (English):**
```
⚠️ Configuration Table Issues Found

| Priority | Issue | Severity | Module | Description | Suggestion |
|----------|-------|----------|--------|-------------|------------|
| P0 | Missing primary key | Critical | Items table | No primary key defined | Add primary key column |
| P1 | Invalid data type | High | Items table | Price column should be integer | Change price to integer type |
| P2 | Missing validation | Medium | Items table | No validation for quantity | Add quantity validation rules |

Total issues: 3 (1 Critical, 1 High, 1 Medium)
```

**Output (Chinese):**
```
⚠️ 发现配置表问题

| 优先级 | 问题 | 严重程度 | 模块 | 问题描述 | 建议 |
|--------|------|----------|------|----------|------|
| P0 | 缺少主键 | 严重 | 物品表 | 未定义主键 | 添加主键列 |
| P1 | 数据类型无效 | 高 | 物品表 | 价格列应该是整数 | 将价格改为整数类型 |
| P2 | 缺少验证 | 中 | 物品表 | 没有数量验证 | 添加数量验证规则 |

问题总数：3个（1个严重，1个高，1个中）
```

### Example 3: Review Complete Game Planning Document

**Input (English):**
```
Please review this complete game planning document for a card RPG game
```

**Input (Chinese):**
```
请审查这个卡牌RPG游戏的完整策划案
```

**System Action:**
- Automatically loads: Game Planning Review + Backend/Frontend Planning Review + RPG Plugins
- Total tokens: ~16,000
- Processing time: 10-20 seconds

**Output (English):**
```
✅ Complete Game Planning Document Review Passed

Backend Review:
- ✅ Architecture design
- ✅ Database design
- ✅ API design
- ✅ Performance considerations
- ✅ Security design

Frontend Review:
- ✅ UI/UX design
- ✅ Gameplay mechanics
- ✅ Performance optimization
- ✅ Asset management

RPG-Specific Review:
- ✅ Card system design
- ✅ Battle system design
- ✅ Economy system design
- ✅ Progression system design

Overall assessment: The planning document is comprehensive and well-structured, suitable for card RPG game development.
```

**Output (Chinese):**
```
✅ 完整游戏策划案审查通过

后端审查：
- ✅ 架构设计
- ✅ 数据库设计
- ✅ API设计
- ✅ 性能考虑
- ✅ 安全设计

前端审查：
- ✅ UI/UX设计
- ✅ 游戏机制
- ✅ 性能优化
- ✅ 资源管理

RPG专项审查：
- ✅ 卡牌系统设计
- ✅ 战斗系统设计
- ✅ 经济系统设计
- ✅ 成长系统设计

整体评价：策划案全面且结构完善，适合卡牌RPG游戏开发。
```

## Error Handling

All skills include comprehensive error handling mechanisms:

### Input Validation
- **Empty content**: Returns error message "Please provide planning document content"
- **Format exceptions**: Returns error message "Planning document format is invalid, please check document format"
- **Incomplete content**: Returns error message "Planning document is incomplete, missing [specific missing part]"

### Execution Errors
- **Skill loading failure**: Returns error message "Planning review skill failed to load, please check skill configuration"
- **Analysis failure**: Returns error message "Planning analysis failed, please check requirements document or contact planning team"
- **Unknown error**: Returns error message "System exception, please try again later"

### Boundary Cases
- **Unclear planning objectives**: Returns warning "Planning objectives are not clear enough, suggest supplementing [specific missing information]"
- **Missing performance indicators**: Returns warning "Missing performance indicators, unable to design performance testing plan"
- **Missing user scale estimation**: Returns warning "Missing user scale estimation, unable to design load testing"

## Output Format

All skills follow standardized output formats:

### Standard Output Format

| Priority | Issue | Severity | Module | Description | Suggestion |
|----------|-------|----------|--------|-------------|------------|
| P0 | [Issue] | Critical | [Module] | [Detailed description] | [Specific suggestion] |
| P1 | [Issue] | High | [Module] | [Detailed description] | [Specific suggestion] |
| P2 | [Issue] | Medium | [Module] | [Detailed description] | [Specific suggestion] |

### No-Problem Format

**English:**
```
✅ [Skill Name] Review Passed

Checked modules:
- ✅ [Module 1]
- ✅ [Module 2]
- ✅ [Module 3]

Overall assessment: [Assessment text]
```

**Chinese:**
```
✅ [技能名称]审查通过

已检查模块：
- ✅ [模块1]
- ✅ [模块2]
- ✅ [模块3]

整体评价：[评价文本]
```

## Smart Loading

The project includes an intelligent skill loading system that:

- **Analyzes User Input**: Extracts keywords and matches relevant skills
- **Optimizes Token Usage**: Loads only necessary skills (2-5 skills per request)
- **Caches Frequently Used Skills**: Reduces loading time for common operations
- **Provides Usage Statistics**: Tracks skill usage patterns for optimization
- **Suggests Optimizations**: Identifies opportunities for further improvement

### Smart Loading Commands

```bash
# Analyze and load optimal skills
npm run smart-load analyze "review card RPG game backend planning"

# View usage statistics
npm run smart-load stats

# Get optimization suggestions
npm run smart-load optimize

# Clear skill cache
npm run smart-load clear-cache
```

### Performance Benefits

| Scenario | Traditional | Smart Loading | Savings |
|----------|-------------|----------------|----------|
| **Single skill** | 150,000 tokens | 4,500 tokens | 97% |
| **2-3 skills** | 150,000 tokens | 10,000 tokens | 93% |
| **5-8 skills** | 150,000 tokens | 20,000 tokens | 87% |
| **Average** | 150,000 tokens | 12,000 tokens | 92% |

## Best Practices

### 1. Use Specific Skills

For better results, use specific skills when possible:

**Good:**
```text
Use backend planning review to review docs/策划案.md
```

**Better:**
```text
Use backend planning review with RPG plugin to review docs/策划案.md
```

### 2. Provide Clear Context

Always provide clear context about what you want to review:

**Good:**
```
Review this planning document
```

**Better:**
```
Review this backend planning document for a card RPG game
```

### 3. Use Auto-Routing for Complex Documents

For complex documents with multiple aspects, use the entry skill:

```text
Use game planning review to review docs/完整策划案.md
```

The AI will automatically route to all relevant skills.

### 4. Check Output Priority

Always check the priority of issues found:

- **P0 (Critical)**: Must fix immediately
- **P1 (High)**: Should fix soon
- **P2 (Medium)**: Can fix later

### 5. Follow Suggestions

The skills provide specific suggestions for each issue. Follow these suggestions for best results.

## Troubleshooting

### Skill Not Found

**Problem:**
```
Error: Skill not found
```

**Solution:**
1. Check if the skill is installed: `npm run status`
2. Reinstall if necessary: `npm run install`
3. Verify skill name in [SKILL_LIST.md](SKILL_LIST.md)

### Analysis Failed

**Problem:**
```
Error: Analysis failed
```

**Solution:**
1. Check if the input document is valid
2. Verify the document format is correct
3. Check for missing or incomplete sections
4. Try with a simpler document first

### Token Limit Exceeded

**Problem:**
```
Error: Token limit exceeded
```

**Solution:**
1. Use specific skills instead of general ones
2. Break large documents into smaller parts
3. Use smart loading: `npm run smart-load analyze "your query"`

### Slow Performance

**Problem:**
```
Analysis takes too long
```

**Solution:**
1. Clear skill cache: `npm run smart-load clear-cache`
2. Use smart loading to optimize skill selection
3. Check system resources
4. Try with a smaller document first

## Additional Resources

- [Skill List](SKILL_LIST.md) - Complete list of all skills
- [Changelog](CHANGELOG.md) - Version history and changes
- [Contributing Guide](../CONTRIBUTING.md) - How to contribute
- [GitHub Issues](https://github.com/cjjwzs-cj/game-dev-skills/issues) - Report bugs and request features

## Support

If you encounter any issues or have questions:

1. Check this usage guide
2. Review the [troubleshooting section](#troubleshooting)
3. Search [existing issues](https://github.com/cjjwzs-cj/game-dev-skills/issues)
4. [Open a new issue](https://github.com/cjjwzs-cj/game-dev-skills/issues/new)

---

**Happy game developing!** 🎮