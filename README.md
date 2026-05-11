# 🤖 AI Agent 开发大师 - 交互式学习平台

一个系统化的 AI Agent 学习平台，提供 24 周完整学习路线、每日任务清单、智能 Prompt 生成器和核心算法可视化拆解。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Platform](https://img.shields.io/badge/platform-Web-brightgreen.svg)
![Tech](https://img.shields.io/badge/tech-HTML%2FCSS%2FJS-orange.svg)

## ✨ 核心功能

### 📚 六阶段学习路线
- **阶段一：基础夯实期** (Week 1-4) - Python 进阶 / LLM 基础 / API 调用 / RAG 入门
- **阶段二：核心能力期** (Week 5-8) - Agent 架构 / 记忆系统 / 工具使用 / 规划能力
- **阶段三：框架精通期** (Week 9-12) - LangChain / LlamaIndex / 高级模式
- **阶段四：Multi-Agent 编排** (Week 13-16) - 多 Agent 协作 / CrewAI / LangGraph
- **阶段五：工程化与产品化** (Week 17-20) - 性能优化 / 安全对齐 / 可观测性
- **阶段六：领域专精与前沿** (Week 21-24) - 领域深入 / 开源贡献 / 建立影响力

### 🎯 智能 Prompt 生成器
- 根据学习阶段自动生成保姆级学习 Prompt
- 支持多种学习风格：详细拆解型、实战项目型、理论深入型、面试准备型
- 可自定义每日学习时长（2/4/6/8 小时）
- 一键复制，直接发送给 AI 助手

### 🔬 核心算法可视化
- **Transformer 架构** - Self-Attention 机制完全图解
- **Attention 数学推导** - Q/K/V 矩阵计算分步详解
- **ReAct 循环** - Reasoning + Acting 流程图
- **RAG 流程** - 检索增强生成完整链路
- **Multi-Agent 协作** - 多 Agent 通信与编排拓扑
- **Adam 优化器** - 自适应学习率算法详解

### 📊 学习进度管理
- 本地存储学习进度（LocalStorage）
- 每日任务打卡系统
- 进度百分比统计
- 学习计划导出（Markdown 格式）

## 🚀 快速开始

### 方式一：直接打开
直接在浏览器中打开 `index.html` 文件即可使用。

```bash
# 克隆仓库
git clone git@github.com:DamianZayne/-AI_Agent_Master.git

# 进入项目目录
cd -AI_Agent_Master

# 用浏览器打开
open index.html
```

### 方式二：本地服务器（推荐）
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# 然后访问 http://localhost:8000
```

## 📁 项目结构

```
agent-learning-platform/
├── index.html          # 主页面
├── app.js              # 核心 JavaScript 逻辑
├── styles.css          # 样式文件
├── .gitignore          # Git 忽略配置
└── README.md           # 项目说明
```

## 🛠️ 技术栈

- **前端框架**：原生 HTML5 + CSS3 + JavaScript (ES6+)
- **动画效果**：GSAP + ScrollTrigger
- **图表绘制**：Mermaid.js
- **公式渲染**：MathJax 3
- **数据存储**：LocalStorage（本地持久化）

## 📖 使用指南

### 1. 浏览学习路线
- 点击首页「开始学习之旅」按钮
- 查看六阶段学习卡片
- 点击任意阶段展开详细每日任务清单

### 2. 生成学习 Prompt
- 导航到「Prompt 生成器」页面
- 选择学习阶段、学习风格、每日时长
- 点击「生成完整 Prompt」
- 复制生成的 Prompt 发送给 ChatGPT/Claude 等 AI 助手

### 3. 查看可视化拆解
- 导航到「可视化拆解」页面
- 点击感兴趣的算法卡片
- 查看完整的架构图、流程图和数学推导

### 4. 跟踪学习进度
- 在每日任务清单中勾选已完成的任务
- 进度会自动保存到浏览器本地
- 可随时导出学习报告

## 🎯 学习路线概览

| 阶段 | 周期 | 核心内容 | 产出物 |
|------|------|----------|--------|
| 基础夯实期 | Week 1-4 | Python 异步编程、LLM 原理、API 调用、RAG 入门 | 异步 HTTP 客户端、Prompt 模板库 |
| 核心能力期 | Week 5-8 | Agent 架构、记忆系统、工具使用、ReAct | 功能完整的 AI Agent |
| 框架精通期 | Week 9-12 | LangChain、LlamaIndex、高级设计模式 | 基于框架的复杂应用 |
| Multi-Agent | Week 13-16 | 多 Agent 协作、CrewAI、LangGraph | 多 Agent 协作系统 |
| 工程化 | Week 17-20 | 性能优化、安全对齐、可观测性、部署 | 生产级 Agent 系统 |
| 领域专精 | Week 21-24 | 代码 Agent、研究 Agent、开源贡献 | 领域专家级项目 |

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证开源。

## 🙏 致谢

- 感谢所有开源社区的贡献者
- 特别感谢 LangChain、LlamaIndex 等优秀框架的开发者

---

<p align="center">
  <strong>AI Agent 开发大师学习平台 · 2026 Edition</strong><br>
  <em>逻辑闭环 · 每日清单 · 自动生成 · 可视化拆解</em>
</p>
