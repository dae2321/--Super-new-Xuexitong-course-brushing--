# -超新学习通本地部署ai大模型刷课脚本二改-
可部署ollama本地大模型，支持AnythingLLm知识库，可刷视频弹题，ai自动刷题，AnythingLLm支持图片题，源脚本@chaoxing-script，地址：https://github.com/fysh1010/chaoxing-script

# 📚 超星学习通智能刷题助手升级版

> 集成AI智能答题功能，支持全自动完成学习通平台的各类学习任务

## 🚀 功能特性

### 核心功能
- **智能答题系统**：集成大模型AI自动答题，支持多种题型
- **全自动任务处理**：章节测验、作业、考试自动完成
- **视频音频播放**：支持静音自动播放，智能跳过已学内容
- **可视化配置**：直观的参数配置界面，支持自定义设置

### 支持的题型
- ✅ 单选题、多选题
- ✅ 视频弹窗题 
- ✅ 判断题
- ✅ 填空题
- ✅ 简答题（支持大模型生成）
- ✅ 图片题（支持OCR识别）

## 📦 安装说明

### 环境要求
- 支持的用户脚本管理器：Tampermonkey、Violentmonkey、Greasemonkey
- 支持的浏览器：Chrome、Firefox、Edge、Safari等现代浏览器

### 安装步骤
1. 安装用户脚本管理器（推荐Tampermonkey）
2. 打开脚本安装链接
3. 点击"安装"按钮
4. 访问超星学习通网站即可使用

## ⚙️ 配置说明

### 大模型配置
脚本支持多种大模型API接口：
🤖 大模型配置案例
1. OpenAI (GPT)
API地址: https://api.openai.com/v1/chat/completions
API密钥: sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
模型名称: gpt-3.5-turbo 或 gpt-4
2. DeepSeek
API地址: https://api.deepseek.com/v1/chat/completions
API密钥: sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
模型名称: deepseek-chat
3. 阿里云通义千问
API地址: https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
API密钥: sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
模型名称: qwen-turbo 或 qwen-plus
4. 魔搭社区
API地址: https://api-inference.modelscope.cn/v1/chat/completions
API密钥: sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
模型名称: Qwen/Qwen2.5-7B-Instruct
5. 智谱AI
API地址: https://open.bigmodel.cn/api/paas/v4/chat/completions
API密钥: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
模型名称: glm-4
6. Ollama
API地址: http://127.0.0.1:11/v1/chat/completions
API密钥: 可留空
模型名称: deepseek-r1等其它模型
5. AnythingLLm
API地址: http://127.0.0.1:11//api/v1/workspace/llm/chat
API密钥: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
模型名称: deepseek-r1等其它模型
大模型提示词优化
使用AnythingLLm可自定义知识库
脚本内置了针对教育考试场景优化的提示词模板：
# 配置参数
```javascript
{
  "llmApiUrl": "http://localhost:3001/api/v1/workspace/llm/chat",
  "llmModel": "deepseek-r1-8b",
  "llmRetries": 3,
  "llmAnswerInterval": 3,
  "enableBackground": true,
  "videoSpeed": 2.0
}
```


## 🔧 使用指南
### 前置要求
--使用现代浏览器安装 脚本猫 将脚本拖入安装即可

### 基本操作
1. **启动脚本**：访问超星学习通网站，脚本自动激活
2. **配置参数**：点击右下角悬浮按钮打开配置面板
3. **开始任务**：进入课程页面，脚本自动检测并开始任务

### 高级功能

#### 大模型答题
- 支持自定义提示词
- 智能答案格式清理
- 多字段答案提取
- 思考过程过滤

#### 视频处理
- 自动暂停/播放
- 智能进度跟踪
- 背景播放支持
- 速度调节

#### 弹题处理
- 实时弹题检测
- 自动暂停视频
- 智能答案匹配
- 多窗口支持

### 常见问题

#### 大模型API连接失败
- 检查API地址是否正确
- 验证网络连接
- 确认API密钥有效
- 查看控制台错误信息

#### 视频播放问题
- 检查浏览器权限
- 确认视频元素存在
- 查看控制台日志

#### 答题失败
- 检查大模型配置
- 验证提示词格式
- 查看答案提取日志

### 调试方法
1. 打开浏览器开发者工具
2. 查看控制台输出
3. 检查网络请求
4. 查看脚本日志

## 🔒 安全声明

### 使用条款
- 本脚本仅供学习交流使用
- 禁止用于非法用途
- 使用者需自行承担风险
- 请24小时内删除脚本

### 数据安全
- 不收集用户个人信息
- API密钥本地存储
- 网络请求加密传输
- 定期清理缓存数据

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进项目：

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 📞 技术支持

- **问题反馈**：2479190381@QQ.COM
- **功能建议**：2479190381@QQ.COM

### 最新版本 v2.1.6
- ✅ 优化大模型答案提取逻辑
- ✅ 增强错误重试机制
- ✅ 改进弹题处理性能
- ✅ 修复已知问题

---

**免责声明**：本脚本题答案均来源于网络及用户反馈，不对答题准确率及可用性负责，请自行判断评估是否使用。
