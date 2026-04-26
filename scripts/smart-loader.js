#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SmartSkillLoader {
  constructor() {
    this.skillCache = new Map();
    this.usageStats = new Map();
    this.skillIndex = this.loadSkillIndex();
    this.gameTypesConfig = this.loadGameTypesConfig();
    this.maxTokensPerRequest = 10000;
  }

  loadSkillIndex() {
    try {
      const indexPath = path.join(__dirname, '../skills/index.json');
      const indexContent = fs.readFileSync(indexPath, 'utf8');
      return JSON.parse(indexContent);
    } catch (error) {
      console.error('Failed to load skill index:', error.message);
      return null;
    }
  }

  loadGameTypesConfig() {
    try {
      const configPath = path.join(__dirname, '../skills/config/game-types.json');
      const configContent = fs.readFileSync(configPath, 'utf8');
      return JSON.parse(configContent);
    } catch (error) {
      console.error('Failed to load game types config:', error.message);
      return null;
    }
  }

  extractKeywords(userInput) {
    const keywords = [];
    
    // 从配置文件中获取游戏类型关键词
    if (this.gameTypesConfig && this.gameTypesConfig.gameTypes) {
      Object.keys(this.gameTypesConfig.gameTypes).forEach(gameType => {
        const config = this.gameTypesConfig.gameTypes[gameType];
        const gameTypeKeywords = {
          type: 'gameType',
          value: gameType,
          priority: config.priority || 3,
          marketShare: config.marketShare || 'unknown'
        };

        // 使用配置文件中的关键词
        if (config.subTypes && Array.isArray(config.subTypes)) {
          config.subTypes.forEach(subType => {
            if (userInput.includes(subType)) {
              keywords.push({
                ...gameTypeKeywords,
                keyword: subType,
                subType: subType
              });
            }
          });
        }

        // 添加游戏类型名称作为关键词
        if (userInput.includes(gameType) || userInput.includes(config.name)) {
          keywords.push({
            ...gameTypeKeywords,
            keyword: gameType
          });
        }
      });
    }

    const techStackKeywords = {
      'Go': ['Go', 'Golang', 'goroutine', 'channel'],
      'C++': ['C++', 'cpp', '指针', 'STL'],
      'Java': ['Java', 'JVM', 'Spring', 'Maven'],
      'Unity': ['Unity', 'C#', 'MonoBehaviour'],
      'Cocos Creator': ['Cocos Creator', 'TypeScript', 'cc.'],
      'Cocos Lua': ['Cocos', 'Lua', '脚本'],
      'Unreal': ['Unreal', 'UE', 'Unreal Engine', '蓝图', 'Blueprint', 'C++'],
      'Python': ['Python', 'Pygame', 'Arcade', 'Ren\'Py'],
      'Node.js': ['Node.js', 'Nodejs', 'Express', 'Koa', 'NestJS', 'WebSocket']
    };

    const domainKeywords = {
      '后端': ['后端', '服务器', 'API', '数据库', '接口', '协议', '数据结构', '存储', '缓存', '并发'],
      '前端': ['前端', 'UI', '界面', '交互', '按钮', '弹窗', '动画', '显示', '隐藏'],
      '设计': ['设计', '架构', '方案', '规划'],
      '代码': ['代码', '实现', '开发', '编程'],
      '测试': ['测试', 'QA', '验证', '检查'],
      '文档': ['文档', '说明', '指南', '手册'],
      '配置表': ['配置表', 'Excel', 'CSV', 'JSON', 'XML', 'YAML', '配置', '数据表', '关联表', '外键'],
      '策划案': ['策划案', '策划', '需求', '需求文档', '设计文档', '游戏设计', '游戏策划']
    };

    for (const [type, typeKeywords] of Object.entries(gameTypeKeywords)) {
      for (const keyword of typeKeywords) {
        if (userInput.includes(keyword)) {
          keywords.push({ type: 'gameType', value: type, keyword });
        }
      }
    }

    for (const [stack, stackKeywords] of Object.entries(techStackKeywords)) {
      for (const keyword of stackKeywords) {
        if (userInput.includes(keyword)) {
          keywords.push({ type: 'techStack', value: stack, keyword });
        }
      }
    }

    for (const [domain, domainKeywords] of Object.entries(domainKeywords)) {
      for (const keyword of domainKeywords) {
        if (userInput.includes(keyword)) {
          keywords.push({ type: 'domain', value: domain, keyword });
        }
      }
    }

    return keywords;
  }

  matchSkills(keywords) {
    if (!this.skillIndex) {
      return [];
    }

    const matchedSkills = new Map();

    for (const keyword of keywords) {
      for (const skill of this.skillIndex.skills) {
        const skillKeywords = skill.keywords || [];
        const skillName = skill.name.toLowerCase();
        const skillDesc = skill.description.toLowerCase();

        for (const skillKeyword of skillKeywords) {
          if (keyword.keyword === skillKeyword || 
              skillName.includes(keyword.keyword.toLowerCase()) ||
              skillDesc.includes(keyword.keyword.toLowerCase())) {
            
            if (!matchedSkills.has(skill.id)) {
              matchedSkills.set(skill.id, {
                ...skill,
                matchScore: this.calculateMatchScore(skill, keyword),
                matchedKeywords: [keyword]
              });
            } else {
              const existing = matchedSkills.get(skill.id);
              existing.matchScore += this.calculateMatchScore(skill, keyword);
              existing.matchedKeywords.push(keyword);
            }
          }
        }
      }
    }

    return Array.from(matchedSkills.values())
      .sort((a, b) => b.matchScore - a.matchScore);
  }

  calculateMatchScore(skill, keyword) {
    let score = 0;

    if (skill.name.toLowerCase().includes(keyword.keyword.toLowerCase())) {
      score += 10;
    }
    if (skill.description.toLowerCase().includes(keyword.keyword.toLowerCase())) {
      score += 5;
    }
    if (skill.keywords && skill.keywords.includes(keyword.keyword)) {
      score += 8;
    }

    switch (keyword.type) {
      case 'gameType':
        // 游戏类型优先级权重
        const priorityWeight = {
          1: 15,  // 最高优先级 (RPG, FPS)
          2: 10,  // 高优先级 (MOBA, SLG, MMO)
          3: 5    // 中优先级 (棋牌竞技, 休闲, 模拟)
        };
        score += priorityWeight[keyword.priority] || 5;
        
        // 市场份额权重
        const marketShareWeight = {
          'highest': 8,
          'fastestGrowing': 10,
          'high': 7,
          'stable': 6,
          'niche': 4
        };
        score += marketShareWeight[keyword.marketShare] || 5;
        break;
      case 'techStack':
        score += 6;
        break;
      case 'domain':
        score += 5;
        break;
    }

    score += (5 - skill.priority) * 2;

    return score;
  }

  selectOptimalSkills(matchedSkills, maxTokens = this.maxTokensPerRequest) {
    const selectedSkills = [];
    let totalTokens = 0;

    for (const skill of matchedSkills) {
      if (totalTokens + skill.size <= maxTokens) {
        selectedSkills.push(skill);
        totalTokens += skill.size;

        if (selectedSkills.length >= 5) {
          break;
        }
      }
    }

    return selectedSkills;
  }

  async loadSkill(skillId) {
    if (this.skillCache.has(skillId)) {
      this.updateUsageStats(skillId);
      return this.skillCache.get(skillId);
    }

    const skillInfo = this.skillIndex.skills.find(s => s.id === skillId);
    if (!skillInfo) {
      throw new Error(`Skill not found: ${skillId}`);
    }

    const skillPath = path.join(__dirname, '../skills', skillInfo.file);
    try {
      const skillContent = fs.readFileSync(skillPath, 'utf8');
      this.skillCache.set(skillId, skillContent);
      this.updateUsageStats(skillId);
      return skillContent;
    } catch (error) {
      throw new Error(`Failed to load skill ${skillId}: ${error.message}`);
    }
  }

  updateUsageStats(skillId) {
    if (!this.usageStats.has(skillId)) {
      this.usageStats.set(skillId, {
        count: 0,
        lastUsed: null
      });
    }

    const stats = this.usageStats.get(skillId);
    stats.count++;
    stats.lastUsed = new Date();
  }

  getUsageStats() {
    const sortedStats = Array.from(this.usageStats.entries())
      .map(([skillId, stats]) => {
        const skillInfo = this.skillIndex.skills.find(s => s.id === skillId);
        return {
          skillId,
          skillName: skillInfo ? skillInfo.name : skillId,
          ...stats
        };
      })
      .sort((a, b) => b.count - a.count);

    return {
      totalUsage: sortedStats.reduce((sum, s) => sum + s.count, 0),
      topSkills: sortedStats.slice(0, 10),
      allSkills: sortedStats
    };
  }

  async loadSkillsForRequest(userInput, maxTokens = this.maxTokensPerRequest) {
    console.log(`
╔═══════════════════════════════════════════════════════════════╗
║     🎮 Smart Skill Loader v1.0.0 - Intelligent Loading          ║
╚═══════════════════════════════════════════════════════════════╝

  🔍 Analyzing user request...
    `);

    const keywords = this.extractKeywords(userInput);
    console.log(`  📝 Extracted keywords: ${keywords.map(k => k.keyword).join(', ')}`);

    const matchedSkills = this.matchSkills(keywords);
    console.log(`  🎯 Matched ${matchedSkills.length} skills`);

    const selectedSkills = this.selectOptimalSkills(matchedSkills, maxTokens);
    console.log(`  ✅ Selected ${selectedSkills.length} skills for loading`);

    let totalTokens = selectedSkills.reduce((sum, s) => sum + s.size, 0);
    console.log(`  📊 Total tokens: ${totalTokens} / ${maxTokens} (${((totalTokens/maxTokens)*100).toFixed(1)}%)`);

    if (selectedSkills.length === 0) {
      console.log(`  ⚠️  No specific skills matched, loading entry skill`);
      const entrySkill = this.skillIndex.skills.find(s => s.id === 'entry-review');
      if (entrySkill) {
        const content = await this.loadSkill('entry-review');
        return [entrySkill, content];
      }
    }

    const loadedSkills = [];
    for (const skill of selectedSkills) {
      console.log(`  📄 Loading: ${skill.name} (${skill.size} tokens)`);
      try {
        const content = await this.loadSkill(skill.id);
        loadedSkills.push({ skill, content });
      } catch (error) {
        console.error(`  ❌ Failed to load ${skill.name}: ${error.message}`);
      }
    }

    console.log(`
╔═══════════════════════════════════════════════════════════════╗
║  📊 Loading Summary                                          ║
╚═══════════════════════════════════════════════════════════════╝
  `);

    console.log(`  ✅ Successfully loaded ${loadedSkills.length} skills`);
    console.log(`  💾 Cache size: ${this.skillCache.size} skills`);
    console.log(`  📈 Total usage: ${this.getUsageStats().totalUsage} times`);

    return loadedSkills;
  }

  clearCache() {
    this.skillCache.clear();
    console.log('  🗑️  Skill cache cleared');
  }

  getOptimizationSuggestions() {
    const stats = this.getUsageStats();
    const suggestions = [];

    if (stats.totalUsage > 100) {
      suggestions.push({
        type: 'cache',
        message: 'High usage detected. Consider implementing persistent cache.',
        priority: 'medium'
      });
    }

    const avgTokens = this.skillIndex.skills.reduce((sum, s) => sum + s.size, 0) / this.skillIndex.skills.length;
    if (avgTokens > 4000) {
      suggestions.push({
        type: 'size',
        message: 'Average skill size is large. Consider modularizing skills.',
        priority: 'high'
      });
    }

    if (this.skillCache.size > 20) {
      suggestions.push({
        type: 'memory',
        message: 'Cache size is large. Consider implementing LRU cache.',
        priority: 'low'
      });
    }

    return suggestions;
  }
}

async function main() {
  const loader = new SmartSkillLoader();

  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case 'analyze':
      if (args[1]) {
        const userInput = args.slice(1).join(' ');
        await loader.loadSkillsForRequest(userInput);
      } else {
        console.error('Usage: node smart-loader.js analyze <user input>');
        process.exit(1);
      }
      break;

    case 'stats':
      console.log(`
╔═══════════════════════════════════════════════════════════════╗
║     🎮 Smart Skill Loader v1.0.0 - Usage Statistics         ║
╚═══════════════════════════════════════════════════════════════╝
      `);
      const stats = loader.getUsageStats();
      console.log(`  📊 Total usage: ${stats.totalUsage} times`);
      console.log(`  🏆 Top skills:`);
      stats.topSkills.forEach((skill, index) => {
        console.log(`     ${index + 1}. ${skill.skillName}: ${skill.count} times`);
      });
      break;

    case 'optimize':
      console.log(`
╔═══════════════════════════════════════════════════════════════╗
║     🎮 Smart Skill Loader v1.0.0 - Optimization Tips        ║
╚═══════════════════════════════════════════════════════════════╝
      `);
      const suggestions = loader.getOptimizationSuggestions();
      if (suggestions.length === 0) {
        console.log('  ✅ No optimization suggestions at this time.');
      } else {
        console.log('  💡 Optimization suggestions:');
        suggestions.forEach((s, index) => {
          console.log(`     ${index + 1}. [${s.type.toUpperCase()}] ${s.message} (Priority: ${s.priority})`);
        });
      }
      break;

    case 'clear-cache':
      loader.clearCache();
      break;

    default:
      console.log(`
╔═══════════════════════════════════════════════════════════════╗
║     🎮 Smart Skill Loader v1.0.0                              ║
╚═══════════════════════════════════════════════════════════════╝

Usage:
  node smart-loader.js analyze <user input>    Analyze and load optimal skills
  node smart-loader.js stats                   Show usage statistics
  node smart-loader.js optimize                Show optimization suggestions
  node smart-loader.js clear-cache             Clear skill cache

Examples:
  node smart-loader.js analyze "审查卡牌RPG游戏后端策划案"
  node smart-loader.js stats
  node smart-loader.js optimize
      `);
  }
}

if (require.main === module) {
  main();
}

module.exports = SmartSkillLoader;