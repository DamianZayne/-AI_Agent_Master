/**
 * AI Agent 开发大师 - 交互式学习平台
 * 核心功能：阶段展开、Prompt生成、可视化展示、进度保存
 */

// ============================================
// 数据定义
// ============================================

const phaseData = {
    1: {
        title: "基础夯实期",
        weeks: "Week 1-4",
        description: "Python进阶 / LLM基础 / API调用 / RAG入门",
        dailyPrompts: {
            1: {
                topic: "异步编程基础",
                tasks: [
                    "学习asyncio核心概念：事件循环、协程、任务",
                    "阅读官方文档：asyncio — Asynchronous I/O",
                    "完成练习：编写第一个async/await函数"
                ],
                output: "一个基础的异步HTTP请求脚本",
                resources: ["Python Asyncio完全指南", "异步设计模式"]
            },
            2: {
                topic: "并发执行与Gather",
                tasks: [
                    "学习asyncio.gather()批量执行协程",
                    "理解并发 vs 并行的区别",
                    "实践：并发下载多个网页"
                ],
                output: "并发网页爬虫（5个URL同时下载）"
            }
        }
    },
    2: {
        title: "核心能力期",
        weeks: "Week 5-8",
        description: "Agent架构 / 记忆系统 / 工具使用 / 规划能力"
    },
    3: {
        title: "框架精通期",
        weeks: "Week 9-12",
        description: "LangChain / LlamaIndex / 高级模式 / 框架对比"
    },
    4: {
        title: "Multi-Agent编排",
        weeks: "Week 13-16",
        description: "多Agent协作 / CrewAI / LangGraph / 设计模式"
    },
    5: {
        title: "工程化与产品化",
        weeks: "Week 17-20",
        description: "性能优化 / 安全对齐 / 可观测性 / 部署运维"
    },
    6: {
        title: "领域专精与前沿",
        weeks: "Week 21-24",
        description: "领域深入 / 前沿跟进 / 开源贡献 / 建立影响力"
    }
};

// 可视化内容数据
const vizContent = {
    transformer: {
        title: "Transformer架构完全图解",
        content: `
            <div class="viz-full">
                <div class="mermaid">
graph TD
    A[Input Tokens] --> B[Input Embedding]
    B --> C[Positional Encoding]
    C --> D[Multi-Head Attention]
    D --> E[Add & Norm]
    E --> F[Feed Forward]
    F --> G[Add & Norm]
    G --> H[Output]
    
    D -.->|Q, K, V| I[Scaled Dot-Product Attention]
    I -.->|Softmax| J[Attention Weights]
    J -.->|×V| K[Output]
                </div>
                <div class="viz-explanation">
                    <h4>核心组件解析</h4>
                    <div class="component-grid">
                        <div class="component-card">
                            <h5>1. Input Embedding</h5>
                            <p>将输入token转换为向量表示，维度通常为512或768</p>
                            <code>embedding = EmbeddingLayer(token_ids)</code>
                        </div>
                        <div class="component-card">
                            <h5>2. Positional Encoding</h5>
                            <p>注入位置信息，使用正弦/余弦函数</p>
                            <code>PE(pos, 2i) = sin(pos/10000^(2i/d_model))</code>
                        </div>
                        <div class="component-card">
                            <h5>3. Multi-Head Attention</h5>
                            <p>并行计算多组Attention，捕获不同子空间信息</p>
                            <code>MultiHead(Q,K,V) = Concat(head_1,...,head_h)W^O</code>
                        </div>
                        <div class="component-card">
                            <h5>4. Feed Forward</h5>
                            <p>两层全连接网络，中间使用ReLU激活</p>
                            <code>FFN(x) = max(0, xW_1 + b_1)W_2 + b_2</code>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "attention-math": {
        title: "Attention机制数学推导",
        content: `
            <div class="math-derivation">
                <h4>Step 1: 计算Query, Key, Value矩阵</h4>
                <div class="formula-step">
                    <div class="formula-display">
                        $$Q = XW^Q, \\quad K = XW^K, \\quad V = XW^V$$
                    </div>
                    <div class="formula-explain">
                        <p>其中 $X \\in R^{n \\times d_{model}}$ 是输入序列</p>
                        <p>$W^Q, W^K \\in R^{d_{model} \\times d_k}$, $W^V \\in R^{d_{model} \\times d_v}$</p>
                    </div>
                </div>
                
                <h4>Step 2: 计算Attention分数</h4>
                <div class="formula-step">
                    <div class="formula-display">
                        $$\\text{scores} = \\frac{QK^T}{\\sqrt{d_k}}$$
                    </div>
                    <div class="formula-explain">
                        <p>除以 $\\sqrt{d_k}$ 是为了防止点积过大导致softmax梯度消失</p>
                        <p>当 $d_k$ 较大时，点积的方差会增大</p>
                    </div>
                </div>
                
                <h4>Step 3: Softmax归一化</h4>
                <div class="formula-step">
                    <div class="formula-display">
                        $$\\text{attention\\_weights} = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)$$
                    </div>
                    <div class="formula-explain">
                        <p>将分数转换为概率分布，每行和为1</p>
                    </div>
                </div>
                
                <h4>Step 4: 加权求和得到输出</h4>
                <div class="formula-step">
                    <div class="formula-display">
                        $$\\text{Attention}(Q,K,V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$$
                    </div>
                    <div class="formula-explain">
                        <p>最终输出是Value向量的加权组合</p>
                        <p>权重由Query和Key的相似度决定</p>
                    </div>
                </div>
                
                <div class="visual-demo">
                    <h4>直观理解</h4>
                    <div class="demo-grid">
                        <div class="demo-item">
                            <div class="demo-label">Query</div>
                            <div class="demo-desc">当前要查询的信息（我关注什么）</div>
                        </div>
                        <div class="demo-item">
                            <div class="demo-label">Key</div>
                            <div class="demo-desc">索引标签（我有什么）</div>
                        </div>
                        <div class="demo-item">
                            <div class="demo-label">Value</div>
                            <div class="demo-desc">实际内容（信息本身）</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    react: {
        title: "ReAct循环：推理与行动",
        content: `
            <div class="react-flow">
                <div class="mermaid">
graph LR
    A[Observation] --> B[Thought]
    B --> C[Action]
    C --> D[Observation]
    D --> B
    B -->|Answer| E[Final Answer]
    
    style A fill:#e1f5fe
    style B fill:#fff3e0
    style C fill:#e8f5e9
    style E fill:#fce4ec
                </div>
                <div class="react-explanation">
                    <h4>ReAct循环详解</h4>
                    <div class="cycle-steps">
                        <div class="cycle-step">
                            <div class="step-num">1</div>
                            <div class="step-content">
                                <h5>Observation（观察）</h5>
                                <p>接收环境反馈或工具执行结果</p>
                                <code class="example">Observation: 当前温度是25°C</code>
                            </div>
                        </div>
                        <div class="cycle-step">
                            <div class="step-num">2</div>
                            <div class="step-content">
                                <h5>Thought（思考）</h5>
                                <p>基于观察进行推理，决定下一步</p>
                                <code class="example">Thought: 温度适宜，不需要开空调</code>
                            </div>
                        </div>
                        <div class="cycle-step">
                            <div class="step-num">3</div>
                            <div class="step-content">
                                <h5>Action（行动）</h5>
                                <p>执行工具调用或输出答案</p>
                                <code class="example">Action: send_message("温度适宜")</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    rag: {
        title: "RAG：检索增强生成",
        content: `
            <div class="rag-flow">
                <div class="mermaid">
graph TD
    A[用户Query] --> B[Query Embedding]
    B --> C[向量检索]
    C --> D[Top-K文档]
    D --> E[上下文组装]
    E --> F[LLM生成]
    F --> G[最终回答]
    
    H[文档库] --> I[文档切分]
    I --> J[Embedding模型]
    J --> K[向量数据库]
    K --> C
                </div>
                <div class="rag-components">
                    <h4>RAG核心组件</h4>
                    <div class="component-list">
                        <div class="rag-component">
                            <h5>🔍 Retriever（检索器）</h5>
                            <ul>
                                <li>稠密检索：基于Embedding相似度</li>
                                <li>稀疏检索：BM25、TF-IDF</li>
                                <li>混合检索：结合两者优势</li>
                            </ul>
                        </div>
                        <div class="rag-component">
                            <h5>📝 Generator（生成器）</h5>
                            <ul>
                                <li>上下文窗口管理</li>
                                <li>Prompt模板设计</li>
                                <li>引用溯源机制</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "multi-agent": {
        title: "Multi-Agent协作架构",
        content: `
            <div class="multi-agent-arch">
                <div class="mermaid">
graph TD
    S[Supervisor<br/>调度者] --> R[Researcher<br/>研究员]
    S --> C[Coder<br/>编码者]
    S --> W[Writer<br/>撰写者]
    S --> Re[Reviewer<br/>审查者]
    
    R --> S
    C --> S
    W --> S
    Re --> S
    
    S -->|Final| O[输出结果]
                </div>
                <div class="topology-types">
                    <h4>常见协作拓扑</h4>
                    <div class="topology-grid">
                        <div class="topology-card">
                            <h5>👑 Supervisor</h5>
                            <p>中央调度器分配任务给各Agent</p>
                            <span class="use-case">适用：任务分配明确</span>
                        </div>
                        <div class="topology-card">
                            <h5>🐝 Swarm</h5>
                            <p>平等协作，通过消息传递协调</p>
                            <span class="use-case">适用：分布式问题</span>
                        </div>
                        <div class="topology-card">
                            <h5>🏢 Hierarchical</h5>
                            <p>层级结构，Manager-Worker模式</p>
                            <span class="use-case">适用：复杂项目</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    adam: {
        title: "Adam优化器算法详解",
        content: `
            <div class="adam-algo">
                <h4>Adam算法步骤</h4>
                <div class="algo-steps">
                    <div class="algo-step">
                        <div class="step-header">初始化</div>
                        <div class="step-code">
<code>m_0 = 0, v_0 = 0</code>
<code>t = 0</code>
                        </div>
                    </div>
                    <div class="algo-step">
                        <div class="step-header">Step 1: 计算梯度</div>
                        <div class="step-formula">
                            $$g_t = \\nabla_\\theta f_t(\\theta_{t-1})$$
                        </div>
                    </div>
                    <div class="algo-step">
                        <div class="step-header">Step 2: 更新一阶矩（动量）</div>
                        <div class="step-formula">
                            $$m_t = \\beta_1 \\cdot m_{t-1} + (1 - \\beta_1) \\cdot g_t$$
                        </div>
                    </div>
                    <div class="algo-step">
                        <div class="step-header">Step 3: 更新二阶矩（自适应学习率）</div>
                        <div class="step-formula">
                            $$v_t = \\beta_2 \\cdot v_{t-1} + (1 - \\beta_2) \\cdot g_t^2$$
                        </div>
                    </div>
                    <div class="algo-step">
                        <div class="step-header">Step 4: 偏差修正</div>
                        <div class="step-formula">
                            $$\\hat{m}_t = \\frac{m_t}{1 - \\beta_1^t}, \\quad \\hat{v}_t = \\frac{v_t}{1 - \\beta_2^t}$$
                        </div>
                    </div>
                    <div class="algo-step">
                        <div class="step-header">Step 5: 参数更新</div>
                        <div class="step-formula">
                            $$\\theta_t = \\theta_{t-1} - \\frac{\\alpha \\cdot \\hat{m}_t}{\\sqrt{\\hat{v}_t} + \\epsilon}$$
                        </div>
                    </div>
                </div>
                <div class="hyperparams">
                    <h4>超参数说明</h4>
                    <table>
                        <tr><th>参数</th><th>典型值</th><th>作用</th></tr>
                        <tr><td>α</td><td>0.001</td><td>学习率</td></tr>
                        <tr><td>β₁</td><td>0.9</td><td>一阶矩衰减率</td></tr>
                        <tr><td>β₂</td><td>0.999</td><td>二阶矩衰减率</td></tr>
                        <tr><td>ε</td><td>10⁻⁸</td><td>数值稳定性</td></tr>
                    </table>
                </div>
            </div>
        `
    }
};

// ============================================
// 初始化
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // 初始化Mermaid
    mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
        }
    });
    
    // 加载保存的进度
    loadProgress();
    
    // 初始化Prompt预览
    updatePromptPreview();
    
    // 添加滚动动画
    initScrollAnimations();
});

// ============================================
// 阶段展开/收起
// ============================================

function togglePhase(phaseNum) {
    const detailEl = document.getElementById(`phase-detail-${phaseNum}`);
    const allDetails = document.querySelectorAll('.phase-detail');
    
    // 关闭其他已展开的阶段
    allDetails.forEach(el => {
        if (el !== detailEl) {
            el.classList.remove('active');
        }
    });
    
    // 切换当前阶段
    detailEl.classList.toggle('active');
    
    // 如果展开了，滚动到该位置
    if (detailEl.classList.contains('active')) {
        setTimeout(() => {
            detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

function toggleWeek(headerEl) {
    const contentEl = headerEl.nextElementSibling;
    headerEl.classList.toggle('active');
    contentEl.classList.toggle('collapsed');
}

// ============================================
// Prompt生成器
// ============================================

function generatePrompt(phaseNum, event) {
    if (event) event.stopPropagation();
    
    const phase = phaseData[phaseNum];
    const style = document.getElementById('prompt-style')?.value || 'detailed';
    const hours = document.getElementById('prompt-hours')?.value || '4';
    
    const prompt = generatePromptText(phase, style, hours);
    
    document.getElementById('generated-prompt').textContent = prompt;
    document.getElementById('prompt-modal').classList.add('active');
}

function generateDayPrompt(phaseNum, dayNum, event) {
    if (event) event.stopPropagation();
    
    const phase = phaseData[phaseNum];
    const dayData = phase.dailyPrompts?.[dayNum];
    
    if (!dayData) {
        alert('该日期的详细Prompt正在开发中...');
        return;
    }
    
    const prompt = generateDayPromptText(phase, dayData);
    document.getElementById('generated-prompt').textContent = prompt;
    document.getElementById('prompt-modal').classList.add('active');
}

function generatePromptText(phase, style, hours) {
    const styleTemplates = {
        detailed: `你是一位资深的AI Agent开发导师。我需要学习"${phase.title}"（${phase.weeks}）。

请为我制定一份详细的${hours}小时/天学习计划，包含：

## 学习目标
- 明确本阶段结束时应掌握的核心能力
- 列出需要完成的具体技能点

## 每日任务分解
请按天列出学习任务，每天包含：
1. 理论学习（阅读材料、视频课程）
2. 代码实践（编程练习、小项目）
3. 复习总结（笔记整理、概念梳理）

## 推荐资源
- 必读文档/论文
- 推荐视频课程
- 练习项目建议

## 产出物要求
- 每个Week的交付物
- 阶段结束时的综合项目

## 学习建议
- 常见 pitfalls 和如何避免
- 高效学习技巧
- 自测方法

请用中文回答，内容要具体、可执行。`,

        'hands-on': `你是一位实战派AI Agent开发工程师。我需要通过项目实战学习"${phase.title}"。

请设计一个渐进式的项目实战路线：

## 项目总览
- 最终要完成什么项目？
- 项目的技术栈和架构

## 里程碑分解
将项目拆解为可执行的里程碑，每个里程碑包含：
- 具体要实现的功能
- 预计耗时
- 验收标准

## 每日任务
按天安排编码任务，包括：
- 要写的代码模块
- 需要调研的技术点
- 测试用例设计

## 代码规范
- 项目结构建议
- 代码风格要求
- 文档编写规范

请提供可直接执行的指导。`,

        theory: `你是一位AI研究科学家。我需要深入理解"${phase.title}"的理论基础。

请帮我梳理核心理论：

## 核心概念
- 每个概念的定义和数学表达
- 概念之间的联系
- 直观理解方式

## 数学推导
- 关键公式的推导过程
- 假设条件和适用范围
- 与其他方法的对比

## 论文精读
- 必读的3-5篇论文
- 每篇论文的核心贡献
- 阅读顺序建议

## 深入问题
- 该领域的前沿问题
- 尚未解决的挑战
- 可能的研究方向

请用严谨的学术风格回答。`,

        interview: `你是一位AI大厂面试官。我需要准备"${phase.title}"相关的面试。

请帮我准备面试内容：

## 核心知识点
- 高频面试题及答案
- 易混淆概念辨析
- 深度追问方向

## 手撕代码
- 常考算法题
- 代码实现要点
- 复杂度分析

## 项目讲解
- 如何介绍相关项目
- 亮点提炼方法
- 常见问题应对

## 系统设计
- 相关系统设计题
- 架构设计要点
- 扩展性考虑

请从面试官视角给出建议。`
    };
    
    return styleTemplates[style] || styleTemplates.detailed;
}

function generateDayPromptText(phase, dayData) {
    return `你是一位耐心的编程导师。今天我要学习：${dayData.topic}

## 今日学习目标
${dayData.tasks.map((t, i) => `${i + 1}. ${t}`).join('\n')}

## 详细指导需求
请为我提供：

### 1. 概念讲解
- 核心概念是什么？
- 为什么需要这个技术？
- 与替代方案相比有什么优势？

### 2. 代码示例
- 提供完整的可运行代码
- 每行代码添加详细注释
- 展示常见错误和正确写法

### 3. 练习任务
- 3个由易到难的练习题
- 每个练习的解题思路提示
- 参考答案（可折叠）

### 4. 知识检验
- 5个自测问题
- 答案和解析

### 5. 延伸学习
- 如果提前完成，可以学什么进阶内容？
- 相关资源推荐

## 今日产出要求
${dayData.output}

请用中文回答，代码用Python，确保内容对初学者友好。`;
}

function updatePromptPreview() {
    const phaseNum = document.getElementById('prompt-phase')?.value || '1';
    const phase = phaseData[phaseNum];
    const previewEl = document.getElementById('prompt-preview-content');
    
    if (previewEl && phase) {
        previewEl.textContent = generatePromptPreview(phase);
    }
}

function generatePromptPreview(phase) {
    return `// Prompt预览 - ${phase.title}
// ================================

角色：AI Agent开发导师
阶段：${phase.title} (${phase.weeks})
内容：${phase.description}

该Prompt将生成：
✓ 详细的学习路线图
✓ 每日任务清单
✓ 推荐学习资源
✓ 产出物要求
✓ 学习建议

点击"生成完整Prompt"获取可复制的完整版本...`;
}

function generateFullPrompt() {
    const phaseNum = document.getElementById('prompt-phase').value;
    generatePrompt(phaseNum);
}

function copyPrompt() {
    const content = document.getElementById('prompt-preview-content').textContent;
    copyToClipboard(content);
}

function copyGeneratedPrompt() {
    const content = document.getElementById('generated-prompt').textContent;
    copyToClipboard(content);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('已复制到剪贴板！');
    }).catch(err => {
        console.error('复制失败:', err);
        // 降级方案
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showNotification('已复制到剪贴板！');
    });
}

function openAIChat() {
    window.open('https://chat.openai.com', '_blank');
}

// ============================================
// 可视化展示
// ============================================

function showVisualization(vizKey) {
    const viz = vizContent[vizKey];
    if (!viz) return;
    
    document.getElementById('viz-title').textContent = viz.title;
    document.getElementById('viz-body').innerHTML = viz.content;
    document.getElementById('viz-modal').classList.add('active');
    
    // 渲染Mermaid图表
    setTimeout(() => {
        mermaid.init(undefined, document.querySelectorAll('.mermaid'));
        // 渲染MathJax公式
        if (window.MathJax) {
            MathJax.typesetPromise();
        }
    }, 100);
}

function showDerivation(topic) {
    showVisualization('attention-math');
}

function showResource(resourceId) {
    const resources = {
        'asyncio-guide': 'https://docs.python.org/3/library/asyncio.html',
        'async-patterns': 'https://superfastpython.com/asynchronous-programming-patterns/'
    };
    
    const url = resources[resourceId];
    if (url) {
        window.open(url, '_blank');
    }
}

// ============================================
// 进度管理
// ============================================

function saveProgress() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const progress = {};
    
    checkboxes.forEach(cb => {
        progress[cb.id] = cb.checked;
    });
    
    localStorage.setItem('agent-learning-progress', JSON.stringify(progress));
    updateProgressUI();
}

function loadProgress() {
    const saved = localStorage.getItem('agent-learning-progress');
    if (!saved) return;
    
    try {
        const progress = JSON.parse(saved);
        Object.entries(progress).forEach(([id, checked]) => {
            const cb = document.getElementById(id);
            if (cb) cb.checked = checked;
        });
        updateProgressUI();
    } catch (e) {
        console.error('加载进度失败:', e);
    }
}

function updateProgressUI() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checked = document.querySelectorAll('input[type="checkbox"]:checked');
    const percent = Math.round((checked.length / checkboxes.length) * 100);
    
    // 更新进度显示（如果有的话）
    const progressEls = document.querySelectorAll('.progress-percent');
    progressEls.forEach(el => el.textContent = `${percent}%`);
}

function resetProgress() {
    if (confirm('确定要重置所有学习进度吗？此操作不可恢复。')) {
        localStorage.removeItem('agent-learning-progress');
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
        });
        updateProgressUI();
        showNotification('进度已重置');
    }
}

function exportPlan() {
    const plan = generateExportPlan();
    const blob = new Blob([plan], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AI-Agent-Learning-Plan.md';
    a.click();
    URL.revokeObjectURL(url);
    showNotification('学习计划已导出');
}

function generateExportPlan() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const completed = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.id);
    
    return `# AI Agent 开发大师学习计划

生成时间：${new Date().toLocaleString()}

## 学习进度
已完成任务：${completed.length} / ${checkboxes.length}

## 已完成任务清单
${completed.map(id => `- [x] ${getTaskLabel(id)}`).join('\n')}

## 待完成任务清单
${Array.from(checkboxes).filter(cb => !cb.checked).map(cb => `- [ ] ${getTaskLabel(cb.id)}`).join('\n')}

---
*Exported from AI Agent Master Learning Platform*
`;
}

function getTaskLabel(id) {
    const label = document.querySelector(`label[for="${id}"]`);
    return label ? label.textContent : id;
}

// ============================================
// 模态框控制
// ============================================

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// 点击模态框外部关闭
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

// ESC键关闭模态框
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// 导航和滚动
// ============================================

function scrollToRoadmap() {
    document.getElementById('roadmap').scrollIntoView({ behavior: 'smooth' });
}

function initScrollAnimations() {
    // 使用GSAP添加滚动动画
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // 阶段卡片动画
        gsap.utils.toArray('.phase-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                x: -50,
                duration: 0.6,
                delay: i * 0.1
            });
        });
        
        // 可视化卡片动画
        gsap.utils.toArray('.viz-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 30,
                duration: 0.5,
                delay: i * 0.08
            });
        });
    }
}

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(30, 39, 97, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// 通知系统
// ============================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: var(--primary);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(30, 39, 97, 0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ============================================
// 全局函数暴露
// ============================================

window.togglePhase = togglePhase;
window.toggleWeek = toggleWeek;
window.generatePrompt = generatePrompt;
window.generateDayPrompt = generateDayPrompt;
window.generateFullPrompt = generateFullPrompt;
window.updatePromptPreview = updatePromptPreview;
window.copyPrompt = copyPrompt;
window.copyGeneratedPrompt = copyGeneratedPrompt;
window.openAIChat = openAIChat;
window.showVisualization = showVisualization;
window.showDerivation = showDerivation;
window.showResource = showResource;
window.saveProgress = saveProgress;
window.resetProgress = resetProgress;
window.exportPlan = exportPlan;
window.closeModal = closeModal;
window.scrollToRoadmap = scrollToRoadmap;
