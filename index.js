// ==UserScript==
// @name         📚【超星学习通智能刷题助手升级版】集成AI智能答题功能，支持全自动完成学习通平台的各类学习任务。具备章节测验自动答题、视频音频自动播放、作业考试智能解答、全网题库答案检索等核心功能，大幅提升学习效率。
// @namespace    chaoxing-fysh
// @version      2.1.6
// @author       fysh
// @description  📚 超星学习通智能刷题助手升级版，集成AI智能答题功能，支持全自动完成学习通平台的各类学习任务。具备章节测验自动答题、视频音频自动播放、作业考试智能解答、全网题库答案检索等核心功能，大幅提升学习效率。
// @icon         https://www.google.com/s2/favicons?domain=chaoxing.com
// @icon         https://www.google.com/s2/favicons?domain=chaoxing.com
// @icon         https://www.google.com/s2/favicons?domain=chaoxing.com
// @match        *://*.chaoxing.com/*
// @match        *://*.edu.cn/*
// @match        *://*.nbdlib.cn/*
// @match        *://*.hnsyu.net/*
// @match        *://*.gdhkmooc.com/*
// @require      https://cdn.staticfile.org/vue/3.3.4/vue.global.prod.js
// @require      https://cdn.staticfile.org/vue-demi/0.14.0/index.iife.min.js
// @require      https://cdn.staticfile.org/element-plus-icons-vue/2.1.0/global.iife.min.js
// @require      data:application/javascript,window.Vue%3DVue%3B
// @require      https://cdn.staticfile.org/pinia/2.1.6/pinia.iife.prod.js
// @require      https://cdn.staticfile.org/element-plus/2.3.12/index.full.min.js
// @require      https://cdn.staticfile.org/blueimp-md5/2.19.0/js/md5.min.js
// @require      https://cdn.staticfile.org/jquery/3.7.1/jquery.min.js
// @resource     element-plus  https://cdn.staticfile.org/element-plus/2.3.12/index.css
// @resource     ttf           https://www.forestpolice.org/ttf/2.0/table.json
// @connect      cx.icodef.com
// @connect      tk.enncy.cn
// @connect      api.muketool.com
// @connect      api.tikuhai.com
// @connect      api.openai.com
// @connect      api.deepseek.com
// @connect      dashscope.aliyuncs.com
// @connect      api-inference.modelscope.cn
// @connect      open.bigmodel.cn
// @connect      *
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-end
// @antifeature  ads      脚本可能包含第三方接口广告
// @antifeature  payment  脚本存在第三方答题接口付费功能
// @downloadURL https://update.greasyfork.org/scripts/436994/%F0%9F%92%AF%E3%80%90%E8%B6%85%E6%98%9F%E5%AD%A6%E4%B9%A0%E9%80%9A%E6%BB%A1%E5%88%86%E5%8A%A9%E6%89%8B%E3%80%91%E6%94%AF%E6%8C%81%E4%BB%BB%E5%8A%A1%E7%82%B9%E8%87%AA%E5%8A%A8%E8%B7%B3%E8%BD%AC%7C%E7%AB%A0%E8%8A%82%E6%B5%8B%E9%AA%8C%E3%80%81%E4%BD%9C%E4%B8%9A%E3%80%81%E8%80%83%E8%AF%95%E5%85%A8%E7%BD%91%E6%A3%80%E7%B4%A2%E7%AD%94%E6%A1%88%EF%BC%8C%E7%AE%80%E7%AD%94%E9%A2%98%E6%94%AF%E6%8C%81chatgpt%E5%AF%B9%E6%8E%A5%7C%E9%9F%B3%E9%A2%91%E3%80%81%E8%A7%86%E9%A2%91%E5%85%A8%E8%87%AA%E5%8A%A8%E9%9D%99%E9%9F%B3%E6%92%AD%E6%94%BE%7C%E5%8F%AF%E8%A7%86%E5%8C%96%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE.user.js
// @updateURL https://update.greasyfork.org/scripts/436994/%F0%9F%92%AF%E3%80%90%E8%B6%85%E6%98%9F%E5%AD%A6%E4%B9%A0%E9%80%9A%E6%BB%A1%E5%88%86%E5%8A%A9%E6%89%8B%E3%80%91%E6%94%AF%E6%8C%81%E4%BB%BB%E5%8A%A1%E7%82%B9%E8%87%AA%E5%8A%A8%E8%B7%B3%E8%BD%AC%7C%E7%AB%A0%E8%8A%82%E6%B5%8B%E9%AA%8C%E3%80%81%E4%BD%9C%E4%B8%9A%E3%80%81%E8%80%83%E8%AF%95%E5%85%A8%E7%BD%91%E6%A3%80%E7%B4%A2%E7%AD%94%E6%A1%88%EF%BC%8C%E7%AE%80%E7%AD%94%E9%A2%98%E6%94%AF%E6%8C%81chatgpt%E5%AF%B9%E6%8E%A5%7C%E9%9F%B3%E9%A2%91%E3%80%81%E8%A7%86%E9%A2%91%E5%85%A8%E8%87%AA%E5%8A%A8%E9%9D%99%E9%9F%B3%E6%92%AD%E6%94%BE%7C%E5%8F%AF%E8%A7%86%E5%8C%96%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE.meta.js
// ==/UserScript==

(t => { if (typeof GM_addStyle === "function") { GM_addStyle(t); return } const i = document.createElement("style"); i.textContent = t, document.head.append(i) })(" @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } } .dialog-footer button[data-v-6ed29f7f]:first-child{margin-right:10px}#csbutton[data-v-6ed29f7f]{position:fixed;bottom:20px;right:20px;z-index:99999;transition:all 0.3s ease;box-shadow: 0 4px 8px rgba(0,0,0,0.1);border-radius: 50%;width: 50px;height: 50px;display: flex;align-items: center;justify-content: center;}#csbutton[data-v-6ed29f7f]:hover{transform: scale(1.1);box-shadow: 0 6px 12px rgba(0,0,0,0.15);}#zeokdjg[data-v-c3c6b09f]{position:fixed;left:10px;bottom:50vh;z-index:9999;transition: all 0.3s ease;background: rgba(255,255,255,0.95);backdrop-filter: blur(10px);border-radius: 20px;padding: 10px 20px;box-shadow: 0 4px 12px rgba(0,0,0,0.15);display: flex;align-items: center;gap: 8px;}.question_btn[data-v-c3c6b09f]{width:40px;height:40px;border-radius:10px;margin:5px;transition: all 0.2s ease;font-weight: 600;box-shadow: 0 2px 4px rgba(0,0,0,0.1);}.question_btn[data-v-c3c6b09f]:hover{transform: translateY(-2px);box-shadow: 0 4px 8px rgba(0,0,0,0.15);}.question_btn[data-v-c3c6b09f].primary{background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);color: white;}.question_btn[data-v-c3c6b09f].danger{background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);color: white;}.question_btn[data-v-c3c6b09f].info{background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);color: #333;}#zeokdjg[data-v-c3c6b09f]:hover{transform: translateY(-2px);box-shadow: 0 6px 16px rgba(0,0,0,0.2);}.question_div[data-v-c3c6b09f]{height:200px}.question_ti[data-v-c3c6b09f]{margin:10px 0 20px;font-weight: 600;}.cx_log[data-v-c3c6b09f]{margin:2px 0;padding: 4px 8px;border-radius: 4px;transition: background 0.2s ease;}.cx_log[data-v-c3c6b09f]:hover{background: rgba(0,0,0,0.05);}.status_log[data-v-c3c6b09f]{margin-top:10px}.dialog-footer button[data-v-c3c6b09f]:first-child{margin-right:10px}#askbutton[data-v-c3c6b09f]{position:fixed;bottom:20px;right:20px;z-index:99999}.el-dialog[data-v-6ed29f7f], .el-dialog[data-v-c3c6b09f]{border-radius: 12px;box-shadow: 0 8px 32px rgba(0,0,0,0.2);overflow: hidden;}.el-dialog__header[data-v-6ed29f7f], .el-dialog__header[data-v-c3c6b09f]{background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);color: white;}.el-dialog__title[data-v-6ed29f7f], .el-dialog__title[data-v-c3c6b09f]{color: white;font-weight: 600;}.el-dialog__body[data-v-6ed29f7f], .el-dialog__body[data-v-c3c6b09f]{padding: 24px;}.el-tabs__item[data-v-6ed29f7f]:hover, .el-tabs__item[data-v-c3c6b09f]:hover{color: #667eea !important;}.el-tabs__item.is-active[data-v-6ed29f7f], .el-tabs__item.is-active[data-v-c3c6b09f]{color: #667eea !important;font-weight: 600;}.el-card[data-v-c3c6b09f]{border-radius: 12px;box-shadow: 0 4px 12px rgba(0,0,0,0.1);transition: all 0.3s ease;}.el-card[data-v-c3c6b09f]:hover{transform: translateY(-2px);box-shadow: 0 6px 16px rgba(0,0,0,0.15);}.el-alert[data-v-c3c6b09f]{border-radius: 12px;margin-bottom: 16px;}.el-tag[data-v-c3c6b09f]{border-radius: 8px;background: linear-gradient(135deg, #409eff 0%, #67c23a 100%);color: white;border: none;padding: 6px 14px;font-weight: 500;}.el-button[data-v-c3c6b09f]{border-radius: 8px;transition: all 0.2s ease;}.el-button[data-v-c3c6b09f]:hover{transform: translateY(-1px);box-shadow: 0 4px 8px rgba(0,0,0,0.1);}.el-scrollbar[data-v-c3c6b09f]{border-radius: 8px;}.el-divider[data-v-c3c6b09f]{margin: 16px 0;}.el-tabs__nav-wrap::after[data-v-c3c6b09f]{height: 2px;}.el-tabs__active-bar[data-v-c3c6b09f]{height: 3px;background: linear-gradient(90deg, #409eff 0%, #67c23a 100%);}");

(async function (vue, pinia$1, ElementPlus, md5, $$1) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  ((e) => {
    const t = GM_getResourceText(e);
    GM_addStyle(t);
  })("element-plus");
  var _GM_getResourceText = (() => "undefined" != typeof GM_getResourceText ? GM_getResourceText : void 0)(), _GM_getValue = (() => "undefined" != typeof GM_getValue ? GM_getValue : void 0)(), _GM_info = (() => "undefined" != typeof GM_info ? GM_info : void 0)(), _GM_setValue = (() => "undefined" != typeof GM_setValue ? GM_setValue : void 0)(), _GM_xmlhttpRequest = (() => "undefined" != typeof GM_xmlhttpRequest ? GM_xmlhttpRequest : void 0)(), _unsafeWindow = (() => "undefined" != typeof unsafeWindow ? unsafeWindow : void 0)();
  const getConfig = () => {
    const config = _GM_getValue("config");
    return config || defaultConfig$1;
  }, defaultConfig$1 = { debugger: false, autoAnswer: true, autoVideo: true, autoJump: true, autoSubmit: true, thtoken: "", yztoken: "", gptKey: "", gptModel: "gpt-3.5-turbo", gpt: false, gptType: ["0", "1", "2", "3", "4", "5", "6", "7"], interval: 3, llmAnswerInterval: 3, minAccuracy: 0.8, autoExam: true, hideExam: false, notice: "本脚本仅供学习交流使用，严禁用于商业用途，否则后果自负！", useLLM: false, llmApiUrl: "http://127.0.0.1:3301/api/v1/workspace/llm/chat", llmApiKey: "", llmModel: "gpt-3.5-turbo", llmRetries: 2, videoSpeed: 16, useCustomPrompt: false, useKnowledgeBase: false, enableBackground: false }, userConfig = [{ name: "base", label: "基础配置", config: [{ name: "interval", label: "通用间隔(秒)", type: "number", value: defaultConfig$1.interval, desc: "通用间隔，用于脚本运行切换" }, { name: "llmAnswerInterval", label: "大模型回答后间隔(秒)", type: "number", value: defaultConfig$1.llmAnswerInterval, desc: "大模型回答后等待多少秒再进行答题" }, { name: "videoSpeed", label: "视频倍速", type: "select", value: defaultConfig$1.videoSpeed, desc: "视频播放速度，倍速有风险", options: [{ label: "1倍速", value: 1 }, { label: "2倍速", value: 2 }, { label: "3倍速", value: 3 }, { label: "4倍速", value: 4 }, { label: "8倍速", value: 8 }, { label: "16倍速", value: 16 }, { label: "32倍速", value: 32 }] }, { name: "enableBackground", label: "启用挂机模式", type: "switch", value: defaultConfig$1.enableBackground, desc: "开启后，支持后台挂机运行" }] }, { name: "llm", label: "大模型配置", config: [{ name: "useLLM", label: "启用大模型答题", type: "switch", value: defaultConfig$1.useLLM, desc: "开启后，优先使用大模型生成答案" }, { name: "llmApiUrl", label: "大模型API地址", type: "input", value: defaultConfig$1.llmApiUrl, desc: "例如: https://api.openai.com/v1/chat/completions" }, { name: "llmApiKey", label: "大模型API密钥", type: "input", value: defaultConfig$1.llmApiKey, desc: "填写您的API Key" }, { name: "llmModel", label: "大模型名称", type: "input", value: defaultConfig$1.llmModel, desc: "例如: gpt-3.5-turbo, gpt-4等" }, { name: "llmRetries", label: "请求失败重试次数", type: "select", value: defaultConfig$1.llmRetries, desc: "API请求失败后的重试次数", options: [{ label: "不重试", value: 0 }, { label: "重试1次", value: 1 }, { label: "重试2次", value: 2 }, { label: "重试3次", value: 3 }, { label: "重试5次", value: 5 }] }, { name: "useCustomPrompt", label: "使用自定义提示词", type: "switch", value: defaultConfig$1.useCustomPrompt, desc: "开启后，将不使用脚本生成的提示词，直接发送题目给大模型" }] }, { name: "chapter", label: "章节配置", config: [{ name: "autoAnswer", label: "自动答题", type: "switch", value: defaultConfig$1.autoAnswer, desc: "开启后，会自动答题" }, { name: "autoVideo", label: "自动视频", type: "switch", value: defaultConfig$1.autoVideo, desc: "开启后，会自动观看视频" }, { name: "autoJump", label: "自动切换", type: "switch", value: defaultConfig$1.autoVideo, desc: "开启后，会自动切换章节" }, { name: "autoSubmit", label: "自动提交", type: "switch", value: defaultConfig$1.autoSubmit, desc: "开启后，会自动提交答案" }, { name: "minAccuracy", label: "最低正确率", type: "input", value: defaultConfig$1.minAccuracy, desc: "不满足最低正确率则不会自动提交答案" }] }, { name: "exam", label: "作业/考试配置", config: [{ name: "autoExam", label: "考试自动切换", type: "switch", value: defaultConfig$1.autoExam, desc: "开启后，会考试会自动切换" }] }], useformStore = pinia$1.defineStore({
    id: "formstore", state: () => ({ forminput: getConfig(), dialogV: false, activeName: "base" }), actions: {
      saveConfig(forminput) {
        _GM_setValue("config", forminput);
      }
    }
  });
  var export_helper_default = (sfc, props) => {
    let target = sfc.__vccOpts || sfc;
    for (let [key, val] of props)
      target[key] = val;
    return target;
  }, aim_vue_vue_type_script_lang_default = { name: "Aim" }, _hoisted_12$1 = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" }, _hoisted_42 = [vue.createElementVNode("path", { fill: "currentColor", d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z" }, null, -1), vue.createElementVNode("path", { fill: "currentColor", d: "M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z" }, null, -1)];
  var aim_default = export_helper_default(aim_vue_vue_type_script_lang_default, [["render", function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_12$1, _hoisted_42);
  }], ["__file", "aim.vue"]]), setting_vue_vue_type_script_lang_default = { name: "Setting" }, _hoisted_1231 = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" }, _hoisted_3230 = [vue.createElementVNode("path", { fill: "currentColor", d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z" }, null, -1)];
  var setting_default = export_helper_default(setting_vue_vue_type_script_lang_default, [["render", function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1231, _hoisted_3230);
  }], ["__file", "setting.vue"]]);
  // ==== added: utilities for retry, logging, and caching ====
  const shouldDebug = () => {
    try { const cfg = getConfig(); return !!cfg && !!cfg.debugger; } catch (_) { return false; }
  };

  // 统一的控制台日志格式化函数
  const formatConsoleLog = (message, level = "info", module = "") => {
    const time = new Date().toLocaleTimeString();
    const colors = {
      info: "color: #409EFF",
      success: "color: #67C23A",
      warning: "color: #E6A23C",
      error: "color: #F56C6C",
      debug: "color: #909399"
    };
    const icons = {
      info: "ℹ️",
      success: "✅",
      warning: "⚠️",
      error: "❌",
      debug: "🔍"
    };
    const icon = icons[level] || icons.info;
    const color = colors[level] || colors.info;
    const modulePrefix = module ? `[${module}] ` : "";
    console.log(`%c[${time}] ${icon} ${modulePrefix}${message}`, color);
  };
  const maskKey = (key) => {
    if (!key || typeof key !== "string") return "";
    if (key.length <= 8) return key.slice(0, 2) + "***";
    return key.slice(0, 4) + "***" + key.slice(-3);
  };
  async function withRetry(fn, { retries = 3, baseDelayMs = 1000, maxDelayMs = 10000, exponentialBase = 2, onRetry = null, context = "" } = {}) {
    let lastErr;
    for (let i = 0; i <= retries; i++) {
      try {
        return await fn();
      } catch (e) {
        lastErr = e;
        if (i === retries) break;

        const delay = Math.min(baseDelayMs * Math.pow(exponentialBase, i), maxDelayMs);
        const jitter = Math.random() * 0.1 * delay;
        const actualDelay = Math.floor(delay + jitter);

        const retryMsg = context
          ? `${context}请求失败，${actualDelay / 1000}秒后第${i + 1}次重试...`
          : `请求失败，${actualDelay / 1000}秒后第${i + 1}次重试...`;

        console.log(`🔄 ${retryMsg}`, e.message || e);

        if (onRetry && typeof onRetry === 'function') {
          onRetry(i + 1, retries, actualDelay, e);
        }

        await new Promise(r => setTimeout(r, actualDelay));
      }
    }
    throw lastErr;
  }
  // 基于题目数据生成稳定缓存 key（题干+选项+题型）
  function getAnswerCacheKey(md5, questionData) {
    try {
      const payload = {
        q: questionData && questionData.question || "",
        o: questionData && questionData.options || [],
        t: questionData && questionData.type || ""
      };
      return md5(JSON.stringify(payload));
    } catch (_) {
      return "";
    }
  }
  // ============ 优化3：增强的缓存机制，支持置信度、访问次数和来源追踪 ============
  // 缓存统计信息
  const cacheStats = {
    hits: 0,
    misses: 0,
    total: 0,
    getHitRate() {
      return this.total > 0 ? (this.hits / this.total * 100).toFixed(2) : 0;
    }
  };

  /**
   * 获取缓存的答案，增加访问次数和置信度检查
   * @param {string} key - 缓存键
   * @param {number} minConfidence - 最小置信度阈值（0-1），默认0.7
   * @returns {object|undefined} - 缓存项或undefined
   */
  function getCachedAnswer(key, minConfidence = 0.7) {
    try {
      cacheStats.total++;
      const cache = _GM_getValue("answerCache") || {};
      const item = cache[key];
      if (!item) {
        cacheStats.misses++;
        return undefined;
      }

      // 检查是否过期（默认缓存1小时）
      const now = Date.now();
      const ttl = item.ttl || 3600000; // 1小时
      if (now - item.timestamp > ttl) {
        // 过期则删除
        delete cache[key];
        _GM_setValue("answerCache", cache);
        cacheStats.misses++;
        return undefined;
      }

      // 检查置信度是否满足要求
      const confidence = item.confidence || 0.8; // 默认置信度0.8
      if (confidence < minConfidence) {
        shouldDebug() && console.log("⚠️ 缓存置信度不足", { key, confidence, minConfidence });
        cacheStats.misses++;
        return undefined;
      }

      // 更新访问信息
      item.accessCount = (item.accessCount || 0) + 1;
      item.lastAccess = now;
      cache[key] = item;
      _GM_setValue("answerCache", cache);

      cacheStats.hits++;
      shouldDebug() && console.log("✅ 缓存命中", {
        key,
        confidence: confidence.toFixed(2),
        accessCount: item.accessCount,
        age: Math.floor((now - item.timestamp) / 1000) + 's',
        hitRate: cacheStats.getHitRate() + '%'
      });

      return item;
    } catch (_) {
      cacheStats.misses++;
      return undefined;
    }
  }

  /**
   * 设置缓存答案，支持置信度、来源和访问次数
   * @param {string} key - 缓存键
   * @param {string|array} value - 答案值
   * @param {number} ttl - 过期时间（毫秒）
   * @param {number} confidence - 答案置信度（0-1）
   * @param {string} source - 答案来源
   */
  function setCachedAnswer(key, value, ttl = 3600000, confidence = 0.8, source = "unknown") {
    try {
      if (!key) return;
      const cache = _GM_getValue("answerCache") || {};

      // 提高缓存容量上限（优化后支持更多缓存）
      const maxCacheSize = 200;
      const keys = Object.keys(cache);
      if (keys.length >= maxCacheSize) {
        // 智能删除策略：优先删除低置信度、低访问次数、较旧的缓存项
        const sortedKeys = keys.sort((a, b) => {
          const itemA = cache[a];
          const itemB = cache[b];
          const scoreA = (itemA.confidence || 0.5) * (itemA.accessCount || 1) - (Date.now() - itemA.timestamp) / 3600000;
          const scoreB = (itemB.confidence || 0.5) * (itemB.accessCount || 1) - (Date.now() - itemB.timestamp) / 3600000;
          return scoreA - scoreB; // 分数低的优先删除
        });
        // 删除最低分的10%缓存项
        const deleteCount = Math.max(1, Math.floor(maxCacheSize * 0.1));
        for (let i = 0; i < deleteCount; i++) {
          delete cache[sortedKeys[i]];
        }
      }

      // 如果已有缓存，检查是否需要更新（置信度更高则更新）
      const existingItem = cache[key];
      if (existingItem) {
        const existingConfidence = existingItem.confidence || 0.5;
        if (confidence < existingConfidence) {
          shouldDebug() && console.log("⚠️ 新缓存置信度较低，保持原缓存", {
            key,
            existingConfidence: existingConfidence.toFixed(2),
            newConfidence: confidence.toFixed(2)
          });
          return;
        }
      }

      cache[key] = {
        value: value,
        timestamp: Date.now(),
        ttl: ttl,
        confidence: Math.min(1.0, Math.max(0.0, confidence)), // 限制在0-1范围
        source: source,
        accessCount: existingItem ? existingItem.accessCount : 0,
        lastAccess: Date.now()
      };
      _GM_setValue("answerCache", cache);

      shouldDebug() && console.log("💾 缓存已保存", {
        key,
        confidence: confidence.toFixed(2),
        source,
        ttl: (ttl / 1000) + 's'
      });
    } catch (_) { /* ignore */ }
  }

  /**
   * 获取缓存统计信息（供UI显示）
   */
  function getCacheStats() {
    try {
      const cache = _GM_getValue("answerCache") || {};
      const keys = Object.keys(cache);
      const now = Date.now();

      const stats = {
        totalItems: keys.length,
        hits: cacheStats.hits,
        misses: cacheStats.misses,
        hitRate: cacheStats.getHitRate(),
        avgConfidence: 0,
        topSources: {}
      };

      if (keys.length > 0) {
        let totalConfidence = 0;
        keys.forEach(key => {
          const item = cache[key];
          totalConfidence += item.confidence || 0.8;
          const source = item.source || "unknown";
          stats.topSources[source] = (stats.topSources[source] || 0) + 1;
        });
        stats.avgConfidence = (totalConfidence / keys.length).toFixed(2);
      }

      return stats;
    } catch (_) {
      return { totalItems: 0, hits: 0, misses: 0, hitRate: 0, avgConfidence: 0, topSources: {} };
    }
  }
  // ============ 优化3结束 ============
  // ==== end added utilities ====

  // ============ 优化4：答案匹配逻辑增强 ============
  /**
   * 计算两个字符串的Levenshtein距离（编辑距离）
   * @param {string} str1 - 第一个字符串
   * @param {string} str2 - 第二个字符串
   * @returns {number} - 编辑距离
   */
  // 优化的 Levenshtein 距离算法（使用一维数组优化空间复杂度）
  function levenshteinDistance(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;

    if (len1 === 0) return len2;
    if (len2 === 0) return len1;

    // 使用一维数组优化空间复杂度，从 O(n*m) 降至 O(min(n,m))
    if (len1 < len2) {
      [str1, str2] = [str2, str1];
      [len1, len2] = [len2, len1];
    }

    let previousRow = Array(len2 + 1).fill(0);
    for (let j = 0; j <= len2; j++) {
      previousRow[j] = j;
    }

    for (let i = 1; i <= len1; i++) {
      let currentRow = [i];
      for (let j = 1; j <= len2; j++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        currentRow[j] = Math.min(
          currentRow[j - 1] + 1,      // 插入
          previousRow[j] + 1,          // 删除
          previousRow[j - 1] + cost    // 替换
        );
      }
      previousRow = currentRow;
    }

    return previousRow[len2];
  }

  /**
   * 计算两个字符串的相似度（0-1）
   * @param {string} str1 - 第一个字符串
   * @param {string} str2 - 第二个字符串
   * @returns {number} - 相似度（0-1）
   */
  function stringSimilarity(str1, str2) {
    if (!str1 || !str2) return 0;
    if (str1 === str2) return 1.0;

    const maxLen = Math.max(str1.length, str2.length);
    if (maxLen === 0) return 1.0;

    const distance = levenshteinDistance(str1, str2);
    return 1.0 - (distance / maxLen);
  }

  /**
   * 清理字符串，移除HTML标签、空格、标点符号等
   * @param {string} str - 原始字符串
   * @returns {string} - 清理后的字符串
   */
  function normalizeString(str) {
    if (!str || typeof str !== "string") return "";
    return str
      .toLowerCase()                          // 转小写
      .replace(/<[^>]*>/g, "")                // 移除HTML标签
      .replace(/&nbsp;/gi, " ")              // 替换HTML空格
      .replace(/&[a-z]+;/gi, "")             // 移除其他HTML实体
      .replace(/[\s\u3000]+/g, "")           // 移除所有空格（包括中文空格）
      .replace(/[\.,;:，。；：“”‘’]/g, "") // 移除标点符号
      .trim();
  }

  /**
   * 使用多种策略匹配答案和选项
   * @param {string} answer - 答案字符串
   * @param {string} option - 选项字符串
   * @param {number} threshold - 相似度阈值（0-1），默认0.8
   * @returns {object} - { match: boolean, similarity: number, method: string }
   */
  function fuzzyMatch(answer, option, threshold = 0.8) {
    // 策略1：精确匹配（最高优先级）
    if (answer === option) {
      return { match: true, similarity: 1.0, method: "exact" };
    }

    // 清理字符串
    const normalizedAnswer = normalizeString(answer);
    const normalizedOption = normalizeString(option);

    // 策略2：清理后精确匹配
    if (normalizedAnswer === normalizedOption) {
      return { match: true, similarity: 1.0, method: "normalized_exact" };
    }

    // 策略3：包含关系匹配（答案包含选项或选项包含答案）
    if (normalizedAnswer.includes(normalizedOption) || normalizedOption.includes(normalizedAnswer)) {
      const ratio = Math.min(normalizedAnswer.length, normalizedOption.length) /
        Math.max(normalizedAnswer.length, normalizedOption.length);
      if (ratio >= 0.7) { // 长度比例 >= 70%
        return { match: true, similarity: 0.95, method: "contains" };
      }
    }

    // 策略4：模糊匹配（基于编辑距离）
    if (normalizedAnswer.length > 0 && normalizedOption.length > 0) {
      const similarity = stringSimilarity(normalizedAnswer, normalizedOption);
      if (similarity >= threshold) {
        return { match: true, similarity: similarity, method: "fuzzy" };
      }
    }

    // 未匹配
    return { match: false, similarity: 0, method: "none" };
  }
  // ============ 优化4结束 ============

  // ============ 优化5+6+8：LLM提示词优化+配置验证+错误处理 ============

  /**
   * 学科领域检测（基于关键词）
   */
  function detectSubject(question) {
    const subjects = {
      '计算机': ['编程', '算法', '数据结构', '数据库', '网络', '操作系统', 'Java', 'Python', 'C++', 'SQL'],
      '数学': ['函数', '导数', '积分', '矩阵', '方程', '概率', '统计', '线性', '代数'],
      '英语': ['translate', 'grammar', 'vocabulary', 'reading', 'the', 'is', 'are', 'was', 'were'],
      '物理': ['力', '加速度', '能量', '动能', '势能', '电路', '磁场', '电场', '波'],
      '化学': ['化学式', '反应', '元素', '化合物', '氧化', '还原', '电子', '原子'],
      '生物': ['细胞', 'DNA', 'RNA', '基因', '蛋白质', '遗传', '进化', '生态'],
      '历史': ['朝代', '皇帝', '战争', '革命', '改革', '古代', '近代', '现代'],
      '政治': ['马克思', '毛泽东', '郓小平', '党', '政策', '主义', '思想', '理论'],
      '经济': ['经济', '市场', '供给', '需求', '价格', '货币', 'GDP', '通货膨胀'],
      '文学': ['诗', '词', '小说', '散文', '作者', '作品', '文学', '艺术']
    };

    const questionLower = question.toLowerCase();
    let bestMatch = { subject: '通用', score: 0 };

    for (const [subject, keywords] of Object.entries(subjects)) {
      let score = 0;
      for (const keyword of keywords) {
        if (questionLower.includes(keyword.toLowerCase())) {
          score++;
        }
      }
      if (score > bestMatch.score) {
        bestMatch = { subject, score };
      }
    }

    return bestMatch.score >= 2 ? bestMatch.subject : '通用';
  }

  /**
   * 根据学科和题型生成优化的提示词
   */
  function generateLLMPrompt(questionData) {
    const questionTypeMap = {
      "0": "单选题", "1": "多选题", "2": "填空题",
      "3": "判断题", "4": "简答题", "5": "名词解释",
      "6": "论述题", "7": "计算题"
    };
    const typeText = questionTypeMap[questionData.type] || "未知题型";
    const subject = detectSubject(questionData.question);

    let prompt = `【紧急警告】你必须严格按照以下格式要求回答，否则系统将拒绝你的答案并要求重新回答！\n\n`;
    prompt += `═══════════════════════════════════════\n`;
    prompt += `【题目信息】\n`;
    prompt += `═══════════════════════════════════════\n`;
    prompt += `题型：${typeText}\n`;
    prompt += `学科：${subject}\n`;
    prompt += `题目：${questionData.question}\n\n`;

    // 检测图片
    if (questionData.images && questionData.images.length > 0) {
      prompt += `【图片列表】\n`;
      questionData.images.forEach((imgUrl, idx) => {
        prompt += `${idx + 1}. ${imgUrl}\n`;
      });
      prompt += `\n请注意：这是一个图片题目，请仔细观察图片内容并结合选项进行回答\n\n`;
    }

    if (questionData.options && questionData.options.length > 0) {
      prompt += `【选项列表】\n`;
      questionData.options.forEach((opt, idx) => {
        prompt += `${String.fromCharCode(65 + idx)}. ${opt}\n`;
      });
      prompt += `\n`;
    }

    prompt += `═══════════════════════════════════════\n`;
    prompt += `【强制性回答规则 - 必须100%遵守】\n`;
    prompt += `═══════════════════════════════════════\n`;
    prompt += `⚠️ 生死攸关的规则：\n`;
    prompt += `1. 必须回答，绝对不能返回空值、"不知道"、"暂无答案"、"付费题库"等任何无效内容\n`;
    prompt += `2. 如果不确定，必须选择你认为最可能的答案，不能拒绝回答\n`;
    prompt += `3. 只输出答案内容，不要输出任何解释、分析或额外文字\n`;
    prompt += `4. 答案格式必须完全符合下面的要求，格式错误将被视为无效答案\n`;
    prompt += `5. 绝对不要重复输出同一个答案，每个答案只输出一次\n`;
    prompt += `6. 答案必须从给定的选项中选择（选择题），不能自创答案\n`;
    prompt += `7. 严禁输出重复的字符或词语，如"鳃呼吸鳃呼吸"这样的重复内容\n\n`;

    if (questionData.type === "0") {
      prompt += `【单选题回答格式】\n`;
      prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      prompt += `✅ 正确做法：\n`;
      prompt += `   - 只返回正确选项的完整文字内容\n`;
      prompt += `   - 答案必须与某个选项的文字完全一致\n`;
      prompt += `   - 不要包含选项字母(A/B/C/D)\n\n`;
      prompt += `❌ 错误示例（绝对不要这样输出）：\n`;
      prompt += `   × "C.北京" - 不要包含字母\n`;
      prompt += `   × "答案是北京" - 不要添加前缀\n`;
      prompt += `   × "我选择北京" - 不要添加解释\n`;
      prompt += `   × "北京，因为..." - 不要添加解释\n`;
      prompt += `   × "A" - 不要只输出字母\n\n`;
      prompt += `✅ 正确示例：\n`;
      prompt += `   如果选项是：A.北京 B.上海 C.广州 D.深圳\n`;
      prompt += `   正确答案是A，你应该输出：北京\n\n`;
      prompt += `【你的答案】：`;
    } else if (questionData.type === "1") {
      prompt += `【多选题回答格式】\n`;
      prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      prompt += `✅ 正确做法：\n`;
      prompt += `   - 返回所有正确选项的完整文字内容\n`;
      prompt += `   - 多个答案之间用 # 符号分隔\n`;
      prompt += `   - 每个答案必须与选项文字完全一致\n`;
      prompt += `   - 不要包含选项字母(A/B/C/D)\n\n`;
      prompt += `❌ 错误示例（绝对不要这样输出）：\n`;
      prompt += `   × "A#B#D" - 不要输出字母\n`;
      prompt += `   × "A、B、D" - 不要用顿号分隔\n`;
      prompt += `   × "北京、上海、重庆" - 不要用顿号分隔\n`;
      prompt += `   × "答案是北京、上海、重庆" - 不要添加前缀\n`;
      prompt += `   × "北京,上海,重庆" - 不要用逗号分隔\n`;
      prompt += `   × "北京#北京#上海" - 不要重复同一个答案\n\n`;
      prompt += `✅ 正确示例：\n`;
      prompt += `   如果选项是：A.北京 B.上海 C.广州 D.重庆\n`;
      prompt += `   正确答案是A、B、D，你应该输出：北京#上海#重庆\n\n`;
      prompt += `【你的答案】：`;
    } else if (questionData.type === "3") {
      prompt += `【判断题回答格式】\n`;
      prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      prompt += `✅ 正确做法：\n`;
      prompt += `   - 只输出"正确"或"错误"这两个字\n`;
      prompt += `   - 或者只输出"对"或"错"这两个字\n`;
      prompt += `   - 不要输出任何其他内容\n\n`;
      prompt += `❌ 错误示例（绝对不要这样输出）：\n`;
      prompt += `   × "这句话是正确的" - 不要添加解释\n`;
      prompt += `   × "A.正确" - 不要包含字母\n`;
      prompt += `   × "我认为是对的" - 不要添加前缀\n`;
      prompt += `   × "正确，因为..." - 不要添加解释\n`;
      prompt += `   × "√" - 请用文字表示\n`;
      prompt += `   × "×" - 请用文字表示\n\n`;
      prompt += `✅ 正确示例：\n`;
      prompt += `   题目正确时输出：正确\n`;
      prompt += `   题目错误时输出：错误\n`;
      prompt += `   或者：对 / 错\n\n`;
      prompt += `【你的答案】：`;
    } else if (questionData.type === "2") {
      prompt += `【填空题回答格式】\n`;
      prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      prompt += `⚠️ 紧急：这是填空题，请直接填写括号中的答案！\n`;
      prompt += `✅ 正确做法：\n`;
      prompt += `   - 直接给出答案内容，不要添加任何前缀\n`;
      prompt += `   - 多个空用 # 符号分隔\n`;
      prompt += `   - 答案要准确简洁，不要添加解释\n`;
      prompt += `   - 如果题目是"分为()"这样的形式，请直接填写分类名称\n\n`;
      prompt += `❌ 错误示例（绝对不要这样输出）：\n`;
      prompt += `   × "第一空：北京，第二空：上海" - 不要添加前缀\n`;
      prompt += `   × "1.北京 2.上海" - 不要添加序号\n`;
      prompt += `   × "答案是：无孔类、双孔类、合孔类" - 不要添加"答案是："\n`;
      prompt += `   × "暂无答案" - 绝对不能这样回答\n\n`;
      prompt += `✅ 正确示例：\n`;
      prompt += `   题目：爬行动物以颞孔的位置和数量分为()。\n`;
      prompt += `   正确答案应该输出：无孔类#双孔类#合孔类\n\n`;
      prompt += `   题目：北京是中国的()。\n`;
      prompt += `   正确答案应该输出：首都\n\n`;
      prompt += `【你的答案】：`;
    } else if (["4", "5", "6", "7"].includes(questionData.type)) {
      prompt += `【主观题回答格式】\n`;
      prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      prompt += `✅ 正确做法：\n`;
      prompt += `   - 直接给出答案内容\n`;
      prompt += `   - 答案要简洁准确\n`;
      prompt += `   - 不要添加过多解释\n\n`;
      prompt += `【你的答案】：`;
    }

    return { prompt, subject, typeText };
  }

  /**
   * 验证LLM API配置
   */
  function validateLLMConfig(config) {
    const errors = [];

    if (!config.llmApiUrl) {
      errors.push('缺少大模型API地址');
    } else {
      // 验证URL格式
      try {
        new URL(config.llmApiUrl);
        if (!/^https?:\/\//i.test(config.llmApiUrl)) {
          errors.push('API地址必须以http://或https://开头');
        }
      } catch (e) {
        errors.push('API地址格式不正确');
      }
    }

    if (!config.llmApiKey) {
      errors.push('缺少API密钥');
    } else if (config.llmApiKey.length < 10) {
      errors.push('API密钥长度过短，可能不正确');
    }

    if (!config.llmModel) {
      errors.push('缺少模型名称');
    }

    return {
      valid: errors.length === 0,
      errors: errors
    };
  }

  /**
   * 统一的错误处理函数
   */
  function handleError(error, context = '', notify = true) {
    const errorInfo = {
      time: new Date().toLocaleTimeString(),
      context: context,
      message: error.message || String(error),
      type: error.name || 'Error'
    };

    // 记录到控制台
    console.error(`❌ ${context}:`, error);

    // 根据错误类型给出友好的提示
    let userMessage = '';
    if (error.message && error.message.includes('timeout')) {
      userMessage = '请求超时，请检查网络连接';
    } else if (error.message && error.message.includes('Network')) {
      userMessage = '网络错误，请稍后重试';
    } else if (error.message && error.message.includes('401')) {
      userMessage = 'API密钥错误，请检查配置';
    } else if (error.message && error.message.includes('403')) {
      userMessage = '没有权限，请检查API密钥';
    } else if (error.message && error.message.includes('429')) {
      userMessage = '请求过于频繁，请稍后重试';
    } else if (error.message && error.message.includes('500')) {
      userMessage = '服务器错误，请稍后重试';
    } else {
      userMessage = `${context}失败: ${error.message || '未知错误'}`;
    }

    // 显示通知
    if (notify && typeof ElementPlus !== 'undefined') {
      ElementPlus.ElNotification({
        title: '错误提示',
        message: userMessage,
        type: 'error',
        duration: 5000
      });
    }

    return errorInfo;
  }

  // ============ 优化5+6+8结束 ============
  const _sfc_main$1 = vue.defineComponent({
    components: {}, setup() {
      const formstoreObj = useformStore(), { forminput, dialogV, activeName } = pinia$1.storeToRefs(formstoreObj), ruleFormRef = vue.ref(), rules = vue.reactive({
        interval: [{ required: true, message: "间隔时间不能为空" }, { type: "number", message: "间隔时间必须为数字" }, { validator: (rule, value) => value >= 1 ? Promise.resolve() : Promise.reject("间隔时间必须大于等于1") }], llmAnswerInterval: [{ required: true, message: "大模型回答间隔不能为空" }, { type: "number", message: "大模型回答间隔必须为数字" }, { validator: (rule, value) => value >= 1 ? Promise.resolve() : Promise.reject("大模型回答间隔必须大于等于1") }], token: [{
          validator: (rule, value) => {
            if (value) {
              return /^[a-zA-Z0-9]{6,}$/.test(value) ? Promise.resolve() : Promise.reject("token格式错误");
            }
            return Promise.resolve();
          }
        }]
      });
      return {
        dialogV, activeName, ruleFormRef, forminput, rules, submitForm: async (formEl) => {
          formEl && await formEl.validate((valid, fields) => {
            valid && (formstoreObj.saveConfig(forminput.value), ElementPlus.ElNotification({ title: "Success", message: "配置保存成功,请自行刷新页面", type: "success" }), dialogV.value = false);
          });
        }, userConfig, Setting: setting_default
      };
    }
  }), _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props)
      target[key] = val;
    return target;
  }, _hoisted_1$1 = { class: "dialog-footer" };
  const App = _export_sfc(_sfc_main$1, [["render", function (_ctx, _cache, $props, $setup, $data, $options) {
    const _component_el_button = vue.resolveComponent("el-button"), _component_el_switch = vue.resolveComponent("el-switch"), _component_el_input = vue.resolveComponent("el-input"), _component_el_input_number = vue.resolveComponent("el-input-number"), _component_el_option = vue.resolveComponent("el-option"), _component_el_select = vue.resolveComponent("el-select"), _component_el_checkbox = vue.resolveComponent("el-checkbox"), _component_el_checkbox_group = vue.resolveComponent("el-checkbox-group"), _component_el_tooltip = vue.resolveComponent("el-tooltip"), _component_el_form_item = vue.resolveComponent("el-form-item"), _component_el_tab_pane = vue.resolveComponent("el-tab-pane"), _component_el_tabs = vue.resolveComponent("el-tabs"), _component_el_form = vue.resolveComponent("el-form"), _component_el_dialog = vue.resolveComponent("el-dialog");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createVNode(_component_el_button, { type: "primary", id: "askbutton", icon: _ctx.Setting, circle: "", onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dialogV = !_ctx.dialogV) }, null, 8, ["icon"]), vue.createVNode(_component_el_dialog, { modelValue: _ctx.dialogV, "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.dialogV = $event), title: "📚超星学习通智能刷题助手升级版", width: "580px", modal: true, center: "", draggable: "", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }, { footer: vue.withCtx(() => [vue.createElementVNode("span", _hoisted_1$1, [vue.createVNode(_component_el_button, { onClick: _cache[2] || (_cache[2] = ($event) => _ctx.dialogV = false) }, { default: vue.withCtx(() => [vue.createTextVNode("取消")]), _: 1 }), vue.createVNode(_component_el_button, { type: "primary", onClick: _cache[3] || (_cache[3] = ($event) => _ctx.submitForm(_ctx.ruleFormRef)) }, { default: vue.withCtx(() => [vue.createTextVNode("保存")]), _: 1 })])]), default: vue.withCtx(() => [vue.createVNode(_component_el_form, { ref: "ruleFormRef", rules: _ctx.rules, model: _ctx.forminput, class: "demo-ruleForm", style: { "min-height": "360px" } }, { default: vue.withCtx(() => [vue.createVNode(_component_el_tabs, { class: "demo-tabs", modelValue: _ctx.activeName, "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.activeName = $event) }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.userConfig, (item) => (vue.openBlock(), vue.createBlock(_component_el_tab_pane, { key: item.name, label: item.label, name: item.name }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.config, (item1) => (vue.openBlock(), vue.createBlock(_component_el_form_item, { label: item1.label, prop: item1.name }, { default: vue.withCtx(() => [vue.createVNode(_component_el_tooltip, { class: "box-item", effect: "dark", content: item1.desc || "", placement: "top" }, { default: vue.withCtx(() => ["switch" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_switch, { key: 0, modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event }, null, 8, ["modelValue", "onUpdate:modelValue"])) : "input" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_input, { key: 1, modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event }, null, 8, ["modelValue", "onUpdate:modelValue"])) : "number" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_input_number, { key: 2, modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event }, null, 8, ["modelValue", "onUpdate:modelValue"])) : "select" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_select, { key: 3, modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event, placeholder: "请选择" }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item1.options, (item2) => (vue.openBlock(), vue.createBlock(_component_el_option, { key: item2.value, label: item2.label, value: item2.value }, null, 8, ["label", "value"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue"])) : "checkbox" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_checkbox_group, { key: 4, modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item1.options, (item2) => (vue.openBlock(), vue.createBlock(_component_el_checkbox, { key: item2.value, label: item2.value, name: item2.value }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(item2.label), 1)]), _: 2 }, 1032, ["label", "name"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue"])) : vue.createCommentVNode("", true)]), _: 2 }, 1032, ["content"])]), _: 2 }, 1032, ["label", "prop"]))), 256))]), _: 2 }, 1032, ["label", "name"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["rules", "model"])]), _: 1 }, 8, ["modelValue"])], 64);
  }], ["__scopeId", "data-v-6ed29f7f"]]);
  let defaultConfig = getConfig();
  class ServerApi {
    constructor(window2 = _unsafeWindow) {
      __publicField(this, "api1", "http://api.tikuhai.com");
      __publicField(this, "api2", "http://cx.icodef.com/wyn-nb?v=4");
      __publicField(this, "api3", "https://tk.enncy.cn/query");
      __publicField(this, "api4", "https://api.muketool.com/cx/v2/query");
      __publicField(this, "windowz", _unsafeWindow);
      this.windowz = window2;
    }
    async defaultRequest(url, method, data = {}, headers = {}, type = false, timeout = 10000) {
      var _a;
      return type && (headers = { "Content-Type": "POST" == method ? "application/json" : "text/plain", Referer: this.windowz.location.href, v: _GM_info.script.version, key: defaultConfig.thtoken || "", uid: _unsafeWindow.uid || ((_a = _unsafeWindow == null ? void 0 : _unsafeWindow.getCookie) == null ? void 0 : _a.call(_unsafeWindow, "_uid")) || "", ...headers }), withRetry(() => new Promise((resolve, reject) => {
        formatConsoleLog(`${method} ${url}`, "info", "API请求");
        if (data.question) {
          formatConsoleLog(`题目: ${data.question.substring(0, 30)}...`, "info", "API请求");
        }
        _GM_xmlhttpRequest({
          method, url, data: JSON.stringify(data), headers, timeout, onload: (res) => {
            if (res.status >= 200 && res.status < 300) {
              formatConsoleLog(`${url} 状态码: ${res.status}`, "success", "API响应");
              resolve(res);
            } else if (res.status >= 400 && res.status < 500) {
              console.error(`❌ [API错误] ${url} 客户端错误: ${res.status} ${res.statusText}`);
              reject(new Error(`Client error: ${res.status} ${res.statusText}`));
            } else {
              console.error(`❌ [API错误] ${url} 服务器错误: ${res.status} ${res.statusText}`);
              reject(new Error(`Request failed: ${res.status} ${res.statusText}`));
            }
          }, ontimeout: () => {
            console.error(`⏱️ [API超时] ${url} 超过${timeout}ms`);
            reject(new Error("Request timeout"));
          }, onerror: (err) => {
            console.error(`❌ [API网络错误] ${url}`, err);
            reject(new Error(`Network error: ${err}`));
          }
        });
      }), { retries: 2, baseDelayMs: 1000, context: "API请求" });
    }
    async getAnswer(questionData) {
      return defaultConfig = getConfig(), new Promise((resolve) => {
        try {
          const cacheKey = getAnswerCacheKey(md5, questionData);
          const cached = getCachedAnswer(cacheKey, 0.7);
          if (cached && cached.value) {
            formatConsoleLog(`缓存命中: ${cached.value.substring(0, 50)}...`, "success", "题库海");
            resolve({ form: "缓存(题库海)", answer: cached.value });
            return;
          }
        } catch (_) { }
        questionData = { key: defaultConfig.thtoken || "", ...questionData }, this.defaultRequest(`${this.api1}/search`, "POST", questionData, {}, true, 15000)
          .then((res) => {
            const data = JSON.parse(res.responseText);
            if (data.code === 1 && (data.data && data.data.answer || data.msg)) {
              const ans = data.data && data.data.answer || data.msg || "";
              formatConsoleLog(`获取答案成功: ${ans.substring(0, 50)}${ans.length > 50 ? '...' : ''}`, "success", "题库海");
              try {
                const cacheKey = getAnswerCacheKey(md5, questionData);
                ans && setCachedAnswer(cacheKey, ans, 7200000, 0.85, "题库海");
              } catch (_) { }
              resolve({
                form: "题库海",
                answer: ans,
                num: data.data && data.data.num || "",
                usenum: data.data && data.data.usenum || ""
              });
            } else {
              console.warn(`⚠️ [题库海] 无答案: ${data.msg || '未知错误'}`);
              try {
                const cacheKey = getAnswerCacheKey(md5, questionData);
                setCachedAnswer(cacheKey, "", 600000, 0.3, "题库海");
              } catch (_) { }
              resolve({ form: "题库海", answer: data.msg || "" });
            }
          }).catch((e) => {
            console.error(`❌ [题库海] 请求失败:`, e.message);
            try {
              const cacheKey = getAnswerCacheKey(md5, questionData);
              setCachedAnswer(cacheKey, "", 300000, 0.2, "题库海");
            } catch (_) { }
            resolve({ form: "题库海", answer: "" });
          });
      });
    }
    async getAnswer2(questionData) {
      let ip = Array.from({ length: 4 }, () => Math.floor(255 * Math.random())).join(".");
      return new Promise((resolve) => {
        try {
          const cacheKey = getAnswerCacheKey(md5, questionData);
          const cached = getCachedAnswer(cacheKey, 0.7);
          if (cached && cached.value) {
            formatConsoleLog(`缓存命中: ${cached.value.substring(0, 50)}...`, "success", "一之题库");
            resolve({ form: "缓存(一之题库)", answer: cached.value });
            return;
          }
        } catch (_) { }

        let ques = { question: questionData.question };
        this.defaultRequest(this.api2, "POST", ques, {
          "Content-Type": "application/json",
          Authorization: defaultConfig.yztoken,
          "X-Forwarded-For": ip,
          "X-Real-IP": ip
        }, false, 12000)
          .then((response) => {
            const res = JSON.parse(response.responseText);
            let answer = "";
            if (1 === res.code) {
              let data = res.data.replace(/javascript:void\(0\);/g, "").trim().replace(/\n/g, "");
              if (!data.includes("叛逆") &&
                !data.includes("公众号") &&
                !data.includes("李恒雅") &&
                !data.includes("一之") &&
                !data.includes("关注") &&
                !data.includes("微信") &&
                data.length > 0) {
                answer = data.split("#");
                const answerStr = Array.isArray(answer) ? answer.join(', ') : answer;
                formatConsoleLog(`获取答案成功: ${answerStr.substring(0, 50)}${answerStr.length > 50 ? '...' : ''}`, "success", "一之题库");
                try {
                  const cacheKey = getAnswerCacheKey(md5, questionData);
                  Array.isArray(answer) ?
                    setCachedAnswer(cacheKey, answer.join('#'), 7200000, 0.75, "一之题库") :
                    setCachedAnswer(cacheKey, answer, 7200000, 0.75, "一之题库");
                } catch (_) { }
              } else {
                console.warn(`⚠️ [一之题库] 答案被过滤(含广告): ${data.substring(0, 30)}...`);
              }
            } else {
              console.warn(`⚠️ [一之题库] 无答案: code=${res.code}`);
              try {
                const cacheKey = getAnswerCacheKey(md5, questionData);
                setCachedAnswer(cacheKey, "", 600000, 0.3, "一之题库");
              } catch (_) { }
            }
            resolve({ form: "一之题库", answer });
          }).catch((e) => {
            console.error(`❌ [一之题库] 请求失败:`, e.message);
            try {
              const cacheKey = getAnswerCacheKey(md5, questionData);
              setCachedAnswer(cacheKey, "", 300000, 0.2, "一之题库");
            } catch (_) { }
            resolve({ form: "一之题库", answer: "" });
          });
      });
    }
    async getAnswer3(questionData) {
      return new Promise((resolve) => {
        try {
          const cacheKey = getAnswerCacheKey(md5, questionData);
          const cached = getCachedAnswer(cacheKey, 0.65);
          if (cached && cached.value) {
            formatConsoleLog(`缓存命中: ${cached.value.substring(0, 50)}...`, "success", "言溪题库");
            resolve({ form: "缓存(言溪题库)", answer: cached.value });
            return;
          }
        } catch (_) { }

        const ques = { token: defaultConfig.enncytoken, title: questionData.question };
        this.defaultRequest(this.api3, "POST", ques, {}, false, 12000)
          .then((response) => {
            const res = JSON.parse(response.responseText);
            let answer = "";
            if (1 === res.code && res.data && res.data.answer) {
              answer = res.data.answer;
              formatConsoleLog(`获取答案成功: ${answer.substring(0, 50)}${answer.length > 50 ? '...' : ''}`, "success", "言溪题库");
              try {
                const cacheKey = getAnswerCacheKey(md5, questionData);
                setCachedAnswer(cacheKey, answer, 7200000, 0.7, "言溪题库");
              } catch (_) { }
            } else {
              console.warn(`⚠️ [言溪题库] 无答案: code=${res.code}`);
              try {
                const cacheKey = getAnswerCacheKey(md5, questionData);
                setCachedAnswer(cacheKey, "", 600000, 0.3, "言溪题库");
              } catch (_) { }
            }
            resolve({ form: "言溪题库", answer });
          }).catch((e) => {
            console.error(`❌ [言溪题库] 请求失败:`, e.message);
            try {
              const cacheKey = getAnswerCacheKey(md5, questionData);
              setCachedAnswer(cacheKey, "", 300000, 0.2, "言溪题库");
            } catch (_) { }
            resolve({ form: "言溪题库", answer: "" });
          });
      });
    }

    async getAnswer4(questionData) {
      return new Promise((resolve) => {
        try {
          const cacheKey = getAnswerCacheKey(md5, questionData);
          const cached = getCachedAnswer(cacheKey, 0.65);
          if (cached && cached.value) {
            formatConsoleLog(`缓存命中: ${cached.value.substring(0, 50)}...`, "success", "free4题库");
            resolve({ form: "缓存(free4)", answer: cached.value });
            return;
          }
        } catch (_) { }

        const ques = { question: questionData.question, type: parseInt(questionData.type) };
        this.defaultRequest(this.api4, "POST", ques, { "Content-Type": "application/json" }, false, 12000)
          .then((response) => {
            const res = JSON.parse(response.responseText);
            let answer = "";
            if (1 === res.code && res.data) {
              answer = res.data.split("#");
              const answerStr = Array.isArray(answer) ? answer.join(', ') : answer;
              formatConsoleLog(`获取答案成功: ${answerStr.substring(0, 50)}${answerStr.length > 50 ? '...' : ''}`, "success", "free4题库");
              try {
                const cacheKey = getAnswerCacheKey(md5, questionData);
                Array.isArray(answer) ?
                  setCachedAnswer(cacheKey, answer.join('#'), 7200000, 0.7, "free4") :
                  setCachedAnswer(cacheKey, answer, 7200000, 0.7, "free4");
              } catch (_) { }
            } else {
              console.warn(`⚠️ [free4] 无答案: code=${res.code}`);
              try {
                const cacheKey = getAnswerCacheKey(md5, questionData);
                setCachedAnswer(cacheKey, "", 600000, 0.3, "free4");
              } catch (_) { }
            }
            resolve({ form: "free4", answer });
          }).catch((e) => {
            console.error(`❌ [free4] 请求失败:`, e.message);
            try {
              const cacheKey = getAnswerCacheKey(md5, questionData);
              setCachedAnswer(cacheKey, "", 300000, 0.2, "free4");
            } catch (_) { }
            resolve({ form: "free4", answer: "" });
          });
      });
    }
    async getLLMAnswer(questionData) {
      formatConsoleLog("开始处理题目", "info", "大模型");
      formatConsoleLog(`题目: ${questionData.question}`, "info", "大模型");
      formatConsoleLog(`题型: ${questionData.type}`, "info", "大模型");
      formatConsoleLog(`选项数量: ${questionData.options?.length || 0}`, "info", "大模型");
      if (questionData.options && questionData.options.length > 0) {
        formatConsoleLog(`选项列表: ${JSON.stringify(questionData.options)}`, "debug", "大模型");
      }
      formatConsoleLog(`图片数量: ${questionData.images?.length || 0}`, "info", "大模型");
      if (questionData.images && questionData.images.length > 0) {
        formatConsoleLog(`图片列表: ${JSON.stringify(questionData.images)}`, "debug", "大模型");
      }

      const config = getConfig();
      if (!config.useLLM || !config.llmApiUrl || !config.llmApiKey) {
        formatConsoleLog("未启用或配置不完整，跳过", "warning", "大模型");
        return { form: "大模型", answer: "" };
      }

      const validation = validateLLMConfig(config);
      if (!validation.valid) {
        const errorMsg = '大模型配置错误: ' + validation.errors.join(', ');
        console.error(`❌ [大模型] 配置验证失败: ${errorMsg}`);
        handleError(new Error(errorMsg), '大模型API配置', true);
        return { form: "大模型", answer: "" };
      }

      const retryConfig = {
        retries: config.llmRetries || 3,
        baseDelayMs: 3000,
        maxDelayMs: 30000,
        exponentialBase: 1.5,
        context: "大模型API"
      };

      let attempt = 0;

      return withRetry(async () => {
        attempt++;
        formatConsoleLog(`开始第 ${attempt} 次请求`, "info", "大模型");

        let prompt;
        let subject;
        let typeText;

        if (config.useCustomPrompt) {
          // 使用自定义提示词，直接发送题目内容
          formatConsoleLog("使用自定义提示词模式", "info", "大模型");

          // 题型映射
          const questionTypeMap = {
            "0": "单选题", "1": "多选题", "2": "填空题",
            "3": "判断题", "4": "简答题", "5": "名词解释",
            "6": "论述题", "7": "计算题"
          };
          const typeTextCustom = questionTypeMap[questionData.type] || "未知题型";

          // 根据题型添加不同的提示
          if (questionData.type === "2") {
            // 填空题增强提示
            prompt = `【紧急提示】这是${typeTextCustom}，请直接填写括号中的答案！不要添加任何前缀或解释。\n\n题目：${questionData.question}\n\n请直接输出答案：`;
          } else if (questionData.type === "0" || questionData.type === "1" || questionData.type === "3") {
            // 单选、多选、判断题
            prompt = `【紧急提示】这是${typeTextCustom}，请从选项中选择正确答案！\n\n题目：${questionData.question}\n\n`;
          } else {
            // 其他题型
            prompt = `【紧急提示】这是${typeTextCustom}。\n\n题目：${questionData.question}\n\n`;
          }

          // 检测图片
          if (questionData.images && questionData.images.length > 0) {
            prompt += `\n\n图片：\n`;
            questionData.images.forEach((imgUrl, idx) => {
              prompt += `${idx + 1}. ${imgUrl}\n`;
            });
          }

          if (questionData.options && questionData.options.length > 0) {
            prompt += `\n\n选项：\n`;
            questionData.options.forEach((opt, idx) => {
              prompt += `${String.fromCharCode(65 + idx)}. ${opt}\n`;
            });
          }
          subject = "自定义";
          typeText = typeTextCustom;
        } else {
          // 使用脚本生成的提示词
          ({ prompt, subject, typeText } = generateLLMPrompt(questionData));
          formatConsoleLog(`生成提示词 - 科目: ${subject}, 题型: ${typeText}`, "info", "大模型");

          // 如果是重试，加强一下提示
          if (attempt > 1) {
            formatConsoleLog(`加强提示词（第 ${attempt} 次尝试）`, "warning", "大模型");
            prompt = `【重要：这是第${attempt}次尝试，请务必准确回答，绝对不能返回空答案！】\n\n` + prompt;
          }
        }

        formatConsoleLog(`准备请求 - 科目: ${subject}, 题型: ${typeText}, 尝试: ${attempt}/${retryConfig.retries}`, "info", "大模型");
        formatConsoleLog(`API地址: ${config.llmApiUrl}, 模型: ${config.llmModel}`, "debug", "大模型");

        // 检查prompt是否为空
        if (!prompt || prompt.trim().length === 0) {
          const errorMsg = "提示词内容为空，无法发送请求";
          console.error(`❌ [大模型] ${errorMsg}`);
          throw new Error(errorMsg);
        }

        // 检查是否为 AnythingLLM API
        const isAnythingLLM = config.llmApiUrl.includes("workspace") && config.llmApiUrl.includes("chat");

        let requestData = {};
        let requestMethod = "POST";
        let requestUrl = config.llmApiUrl;

        if (isAnythingLLM) {
          formatConsoleLog("检测到 AnythingLLM API，使用 POST 请求", "info", "大模型");
          requestData = {
            message: prompt,
            mode: "chat",
            workspace: "default"
          };
        } else {
          requestData = {
            model: config.llmModel,
            messages: [{ role: "user", content: prompt }],
            temperature: 0.0,          // 最低温度，完全确定性输出
            max_tokens: 1000,          // 增加token上限，确保完整回答
            top_p: 0.01,              // 极低top_p，只考虑最可能的结果
            top_k: 1,                 // 只考虑top-1最可能的token
            frequency_penalty: 0.0,    // 不惩罚重复词
            presence_penalty: 0.0,     // 不鼓励新词
            stop: ["<|end_of_solution|>", "<|eos|>"]  // 停止词
          };
        }

        if (!isAnythingLLM) {
          console.log(`🤖 [大模型] 请求参数 - temperature: ${requestData.temperature}, max_tokens: ${requestData.max_tokens}, top_p: ${requestData.top_p}, top_k: ${requestData.top_k}`);
        } else {
          console.log(`🤖 [大模型] 请求参数 - POST请求，提示词长度: ${prompt.length}字符, model: ${requestData.model}`);
        }

        if (!/^https:\/\//i.test(config.llmApiUrl)) {
          console.warn("⚠️ [大模型] 建议使用 HTTPS 的 LLM API 地址:", config.llmApiUrl);
        }

        return new Promise((resolve, reject) => {
          console.log(`🤖 [大模型] 发送${requestMethod}请求到: ${requestUrl}`);
          _GM_xmlhttpRequest({
            method: requestMethod,
            url: requestUrl,
            data: requestMethod === "POST" ? JSON.stringify(requestData) : null,
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${config.llmApiKey}`
            },
            timeout: 120000,
            onload: (res) => {
              try {
                console.log(`🤖 [大模型] 收到响应 - 状态码: ${res.status}`);

                if (res.status < 200 || res.status >= 300) {
                  let errorDetail = res.responseText ? res.responseText.substring(0, 200) : res.statusText;

                  // 尝试解析错误信息
                  try {
                    const errorData = JSON.parse(res.responseText);
                    if (errorData.error) {
                      errorDetail = errorData.error;
                    }
                  } catch (_) { }

                  const errorMsg = `HTTP ${res.status}: ${res.statusText} - ${errorDetail}`;
                  console.error(`❌ [大模型] HTTP错误: ${errorMsg}`);
                  throw new Error(errorMsg);
                }

                const data = JSON.parse(res.responseText);
                console.log(`🤖 [大模型] 响应数据解析成功`);

                let answer = "";

                if (isAnythingLLM) {
                  // 处理 AnythingLLM 响应格式
                  console.log(`🤖 [大模型] 处理 AnythingLLM 响应`);
                  console.log(`🤖 [大模型] 完整响应数据:`, JSON.stringify(data));

                  // 多字段尝试提取答案
                  let rawAnswer = "";

                  // 尝试从不同字段提取答案
                  if (data.textResponse) {
                    rawAnswer = data.textResponse.trim();
                    console.log(`🤖 [大模型] 从 textResponse 字段获取答案`);
                  } else if (data.response) {
                    rawAnswer = data.response.trim();
                    console.log(`🤖 [大模型] 从 response 字段获取答案`);
                  } else if (data.message) {
                    rawAnswer = data.message.trim();
                    console.log(`🤖 [大模型] 从 message 字段获取答案`);
                  } else if (data.content) {
                    rawAnswer = data.content.trim();
                    console.log(`🤖 [大模型] 从 content 字段获取答案`);
                  } else if (data.choices && data.choices[0] && data.choices[0].text) {
                    rawAnswer = data.choices[0].text.trim();
                    console.log(`🤖 [大模型] 从 choices[0].text 字段获取答案`);
                  } else if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
                    rawAnswer = data.choices[0].message.content.trim();
                    console.log(`🤖 [大模型] 从 choices[0].message.content 字段获取答案`);
                  }

                  if (rawAnswer) {
                    // 过滤掉 <think> 标签中的思考过程
                    rawAnswer = rawAnswer.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
                    // 过滤掉其他可能的思考标签
                    rawAnswer = rawAnswer.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
                    rawAnswer = rawAnswer.replace(/<reasoning>[\s\S]*?<\/reasoning>/g, '').trim();
                    answer = rawAnswer;
                    console.log(`🤖 [大模型] 提取后答案: ${answer.substring(0, 100)}${answer.length > 100 ? '...' : ''}`);
                  } else {
                    console.error("❌ [大模型] 响应中未找到答案字段");
                    console.error("🤖 [大模型] 可用字段:", Object.keys(data));
                    throw new Error("No answer found in response");
                  }
                } else {
                  // 处理标准 OpenAI 格式响应
                  if (data.choices && data.choices[0] && data.choices[0].message) {
                    answer = data.choices[0].message.content.trim();
                    console.log(`🤖 [大模型] 原始答案: ${answer.substring(0, 100)}${answer.length > 100 ? '...' : ''}`);
                  } else {
                    console.error("❌ [大模型] 响应格式错误，未找到答案");
                    throw new Error("Invalid response format");
                  }
                }

                console.log(`🤖 [大模型] 开始清理答案格式`);

                // 如果答案为空，尝试从原始数据中重新提取
                if (!answer || answer.trim().length === 0) {
                  console.log(`⚠️ [大模型] 答案为空，尝试重新提取`);
                  if (isAnythingLLM && data) {
                    // 重新扫描所有可能的字段
                    const possibleFields = ['textResponse', 'response', 'message', 'content', 'text'];
                    for (const field of possibleFields) {
                      if (data[field] && data[field].trim().length > 0) {
                        answer = data[field].trim();
                        console.log(`🔄 [大模型] 从 ${field} 字段重新提取答案: ${answer.substring(0, 50)}...`);
                        break;
                      }
                    }
                  }
                }

                // 多层清理：先清理前缀，再清理后缀，最后清理换行符
                const prefixPatterns = [
                  /^答案[：:]\s*/, /^[【答案】]\s*/, /^答[：:]\s*/, /^选择[：:]\s*/,
                  /^正确答案[：:]\s*/, /^答案是\s*/, /^答案为\s*/, /^应该选择\s*/,
                  /^我选择\s*/, /^我认为答案是\s*/, /^本题答案[：:]\s*/, /^正确选项[：:]\s*/,
                  /^选项[：:]\s*/, /^[A-Z][、,，.]\s*/, /^[0-9]+[、,，.]\s*/
                ];

                const suffixPatterns = [
                  /["'"「」『』]$/, /\.$/, /。$/, /!$/, /\?$/, /\s+$/,
                  /\s*（.*）$/, /\s*\[.*\]$/, /\s*<.*>$/
                ];

                // 应用前缀清理
                for (const pattern of prefixPatterns) {
                  const originalAnswer = answer;
                  answer = answer.replace(pattern, '').trim();
                  if (answer !== originalAnswer) {
                    console.log(`🔧 [大模型] 应用前缀清理: ${pattern}`);
                  }
                }

                // 应用后缀清理
                for (const pattern of suffixPatterns) {
                  const originalAnswer = answer;
                  answer = answer.replace(pattern, '').trim();
                  if (answer !== originalAnswer) {
                    console.log(`🔧 [大模型] 应用后缀清理: ${pattern}`);
                  }
                }

                // 清理换行符和多余空格
                answer = answer.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();

                console.log(`🤖 [大模型] 清理后答案: ${answer}`);

                if (questionData.type === "3") {
                  console.log(`🤖 [大模型] 处理判断题答案`);
                  if (answer.includes("正确") || answer.includes("是对的") || answer.includes("是正确的") || answer.toLowerCase().includes("true")) {
                    answer = "正确";
                  } else if (answer.includes("错误") || answer.includes("不对") || answer.includes("是错的") || answer.toLowerCase().includes("false")) {
                    answer = "错误";
                  } else if (answer === "对" || answer === "√" || answer === "T" || answer === "t") {
                    answer = "正确";
                  } else if (answer === "错" || answer === "×" || answer === "F" || answer === "f") {
                    answer = "错误";
                  }
                  console.log(`🤖 [大模型] 标准化判断题答案: ${answer}`);
                }

                if ((questionData.type === "0" || questionData.type === "1") && questionData.options) {
                  if (questionData.type === "1") {
                    console.log(`🤖 [大模型] 处理多选题答案`);
                    const multiLetterMatch = answer.match(/^[A-Z]([、,，\s]+[A-Z])+$/);
                    if (multiLetterMatch) {
                      console.log(`🤖 [大模型] 检测到多字母格式: ${answer}`);
                      const letters = answer.match(/[A-Z]/g);
                      const matchedOptions = [];
                      letters.forEach(letter => {
                        const index = letter.charCodeAt(0) - 65;
                        if (index >= 0 && index < questionData.options.length) {
                          matchedOptions.push(questionData.options[index]);
                        }
                      });
                      if (matchedOptions.length > 0) {
                        answer = matchedOptions.join('#');
                        console.log(`🤖 [大模型] 多字母转选项: ${answer}`);
                      }
                    } else {
                      const allLetters = answer.match(/[A-Z]/g);
                      if (allLetters && allLetters.length >= 2) {
                        console.log(`🤖 [大模型] 从文本提取多字母: ${allLetters.join(',')}`);
                        const matchedOptions = [];
                        allLetters.forEach(letter => {
                          const index = letter.charCodeAt(0) - 65;
                          if (index >= 0 && index < questionData.options.length) {
                            matchedOptions.push(questionData.options[index]);
                          }
                        });
                        if (matchedOptions.length >= 2) {
                          answer = matchedOptions.join('#');
                          console.log(`🤖 [大模型] 从文本提取多字母转选项: ${answer}`);
                        }
                      }
                    }
                  }

                  if (questionData.type === "0" || !answer.includes("#")) {
                    console.log(`🤖 [大模型] 处理单选题答案`);
                    let letterMatch = answer.match(/^[A-Z]$/);

                    if (!letterMatch) {
                      letterMatch = answer.match(/[A-Z](?=[^A-Z]*$)/);
                      if (letterMatch) {
                        answer = letterMatch[0];
                        console.log(`🤖 [大模型] 从文本中提取字母: ${answer}`);
                      }
                    }

                    if (letterMatch) {
                      const index = answer.charCodeAt(0) - 65;
                      if (index >= 0 && index < questionData.options.length) {
                        answer = questionData.options[index];
                        console.log(`🤖 [大模型] 字母转选项: ${answer}`);
                      }
                    }
                  }
                }

                console.log(`🤖 [大模型] 最终答案: ${Array.isArray(answer) ? answer.join(', ') : answer}`);
                if (typeof answer === 'string' && answer.includes('#')) {
                  console.log(`🤖 [大模型] 去重处理`);
                  const parts = answer.split('#').map(a => a.trim()).filter(a => a.length > 0);
                  const deduped = [...new Set(parts)];
                  if (deduped.length < parts.length) {
                    answer = deduped.join('#');
                    console.log(`🤖 [大模型] 去重后答案: ${answer}`);
                  }
                }
                console.log(`🤖 [大模型] 答案处理完成`);
                resolve({ form: "大模型", answer });
              } catch (e) {
                console.error(`❌ [大模型] 响应解析失败:`, e.message);
                handleError(e, '大模型响应解析', false);
                reject(e);
              }
            },
            ontimeout: () => {
              const error = new Error("请求超时(120秒)");
              console.error(`⏱️ [大模型] 请求超时`);
              handleError(error, '大模型API请求超时', false);
              reject(error);
            },
            onerror: (err) => {
              const error = new Error(`网络错误: ${err.error || err.statusText || '未知错误'}`);
              console.error(`❌ [大模型] 网络错误:`, err.error || err.statusText || '未知错误');
              handleError(error, '大模型API网络错误', false);
              reject(error);
            }
          });
        });
      }, retryConfig);
    }

    async s(questionList, url) {
      return new Promise(async (resolve) => {
        const ques = { questionList, url };
        await this.defaultRequest(`${this.api1}/save1`, "POST", ques, { "Content-Type": "application/json" }).then((response) => {
          resolve();
        }).catch((e) => {
          resolve();
        });
      });
    }
    async s2(data) {
      data.url && this.defaultRequest(data.url, "GET", null, {}).then(async (response) => {
        const html = response.responseText;
        let document1, questionList, questionListHtml;
        document1 = new DOMParser().parseFromString(html, "text/html"), questionList = document1.getElementsByClassName("Py-mian1"), questionListHtml = [];
        for (let i = 0; i < questionList.length; i++)
          try {
            if (0 === i)
              continue;
            let questionTitle = removeHtml(questionList[i].getElementsByClassName("Py-m1-title")[0].innerHTML), questionType$1 = questionTitle.match(/\[(.*?)\]/)[1];
            if ("单选题" === questionType$1 || "多选题" === questionType$1) {
              questionTitle = questionTitle.replace(/[0-9]{1,3}.\s/gi, "").replace(/(^\s*)|(\s*$)/g, "").replace(/^【.*?】\s*/, "").replace(/\[(.*?)\]\s*/, "").replace(/\s*（\d+\.\d+分）$/, "");
              let optionHtml = $(questionList[i]).find("ul.answerList li.clearfix"), optionText = [];
              optionHtml.each(function (index, item) {
                let abcd = String.fromCharCode(65 + index) + ".", optionTemp = removeHtml(item.innerHTML);
                0 == optionTemp.indexOf(abcd) && (optionTemp = optionTemp.replace(abcd, "").trim()), optionText.push(optionTemp);
              }), questionListHtml.push({ question: questionTitle, type: questionType[questionType$1], options: optionText, questionData: questionList[i].innerHTML });
            }
          } catch (e) {
            continue;
          }
        let postData = { questionList: questionListHtml, url: data.url };
        await this.defaultRequest(data.url1, "POST", postData, {}, true).then().catch();
      }).catch();
    }
  }
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
  }
  var Typr = {
    parse: function (buff) {
      var bin = Typr._bin, data = new Uint8Array(buff), offset = 0;
      bin.readFixed(data, offset), offset += 4;
      var numTables = bin.readUshort(data, offset);
      offset += 2, bin.readUshort(data, offset), offset += 2, bin.readUshort(data, offset), offset += 2, bin.readUshort(data, offset), offset += 2;
      for (var tags = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GPOS", "GSUB", "SVG "], obj = { _data: data }, tabs = {}, i = 0; i < numTables; i++) {
        var tag = bin.readASCII(data, offset, 4);
        offset += 4, bin.readUint(data, offset), offset += 4;
        var toffset = bin.readUint(data, offset);
        offset += 4;
        var length = bin.readUint(data, offset);
        offset += 4, tabs[tag] = { offset: toffset, length };
      }
      for (i = 0; i < tags.length; i++) {
        var t = tags[i];
        tabs[t] && (obj[t.trim()] = Typr[t.trim()].parse(data, tabs[t].offset, tabs[t].length, obj));
      }
      return obj;
    }, _tabOffset: function (data, tab) {
      for (var bin = Typr._bin, numTables = bin.readUshort(data, 4), offset = 12, i = 0; i < numTables; i++) {
        var tag = bin.readASCII(data, offset, 4);
        offset += 4, bin.readUint(data, offset), offset += 4;
        var toffset = bin.readUint(data, offset);
        if (offset += 4, bin.readUint(data, offset), offset += 4, tag == tab)
          return toffset;
      }
      return 0;
    }
  };
  Typr._bin = {
    readFixed: function (data, o) {
      return (data[o] << 8 | data[o + 1]) + (data[o + 2] << 8 | data[o + 3]) / 65540;
    }, readF2dot14: function (data, o) {
      return Typr._bin.readShort(data, o) / 16384;
    }, readInt: function (buff, p) {
      var a = Typr._bin.t.uint8;
      return a[0] = buff[p + 3], a[1] = buff[p + 2], a[2] = buff[p + 1], a[3] = buff[p], Typr._bin.t.int32[0];
    }, readInt8: function (buff, p) {
      return Typr._bin.t.uint8[0] = buff[p], Typr._bin.t.int8[0];
    }, readShort: function (buff, p) {
      var a = Typr._bin.t.uint8;
      return a[1] = buff[p], a[0] = buff[p + 1], Typr._bin.t.int16[0];
    }, readUshort: function (buff, p) {
      return buff[p] << 8 | buff[p + 1];
    }, readUshorts: function (buff, p, len) {
      for (var arr = [], i = 0; i < len; i++)
        arr.push(Typr._bin.readUshort(buff, p + 2 * i));
      return arr;
    }, readUint: function (buff, p) {
      var a = Typr._bin.t.uint8;
      return a[3] = buff[p], a[2] = buff[p + 1], a[1] = buff[p + 2], a[0] = buff[p + 3], Typr._bin.t.uint32[0];
    }, readUint64: function (buff, p) {
      return 4294967296 * Typr._bin.readUint(buff, p) + Typr._bin.readUint(buff, p + 4);
    }, readASCII: function (buff, p, l) {
      for (var s = "", i = 0; i < l; i++)
        s += String.fromCharCode(buff[p + i]);
      return s;
    }, readUnicode: function (buff, p, l) {
      for (var s = "", i = 0; i < l; i++) {
        var c = buff[p++] << 8 | buff[p++];
        s += String.fromCharCode(c);
      }
      return s;
    }, _tdec: window.TextDecoder ? new window.TextDecoder() : null, readUTF8: function (buff, p, l) {
      var tdec = Typr._bin._tdec;
      return tdec && 0 == p && l == buff.length ? tdec.decode(buff) : Typr._bin.readASCII(buff, p, l);
    }, readBytes: function (buff, p, l) {
      for (var arr = [], i = 0; i < l; i++)
        arr.push(buff[p + i]);
      return arr;
    }, readASCIIArray: function (buff, p, l) {
      for (var s = [], i = 0; i < l; i++)
        s.push(String.fromCharCode(buff[p + i]));
      return s;
    }
  }, Typr._bin.t = { buff: new ArrayBuffer(8) }, Typr._bin.t.int8 = new Int8Array(Typr._bin.t.buff), Typr._bin.t.uint8 = new Uint8Array(Typr._bin.t.buff), Typr._bin.t.int16 = new Int16Array(Typr._bin.t.buff), Typr._bin.t.uint16 = new Uint16Array(Typr._bin.t.buff), Typr._bin.t.int32 = new Int32Array(Typr._bin.t.buff), Typr._bin.t.uint32 = new Uint32Array(Typr._bin.t.buff), Typr._lctf = {}, Typr._lctf.parse = function (data, offset, length, font, subt) {
    var bin = Typr._bin, obj = {}, offset0 = offset;
    bin.readFixed(data, offset), offset += 4;
    var offScriptList = bin.readUshort(data, offset);
    offset += 2;
    var offFeatureList = bin.readUshort(data, offset);
    offset += 2;
    var offLookupList = bin.readUshort(data, offset);
    return offset += 2, obj.scriptList = Typr._lctf.readScriptList(data, offset0 + offScriptList), obj.featureList = Typr._lctf.readFeatureList(data, offset0 + offFeatureList), obj.lookupList = Typr._lctf.readLookupList(data, offset0 + offLookupList, subt), obj;
  }, Typr._lctf.readLookupList = function (data, offset, subt) {
    var bin = Typr._bin, offset0 = offset, obj = [], count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var noff = bin.readUshort(data, offset);
      offset += 2;
      var lut = Typr._lctf.readLookupTable(data, offset0 + noff, subt);
      obj.push(lut);
    }
    return obj;
  }, Typr._lctf.readLookupTable = function (data, offset, subt) {
    var bin = Typr._bin, offset0 = offset, obj = { tabs: [] };
    obj.ltype = bin.readUshort(data, offset), offset += 2, obj.flag = bin.readUshort(data, offset), offset += 2;
    var cnt = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < cnt; i++) {
      var noff = bin.readUshort(data, offset);
      offset += 2;
      var tab = subt(data, obj.ltype, offset0 + noff);
      obj.tabs.push(tab);
    }
    return obj;
  }, Typr._lctf.numOfOnes = function (n) {
    for (var num = 0, i = 0; i < 32; i++)
      0 != (n >>> i & 1) && num++;
    return num;
  }, Typr._lctf.readClassDef = function (data, offset) {
    var bin = Typr._bin, obj = [], format = bin.readUshort(data, offset);
    if (offset += 2, 1 == format) {
      var startGlyph = bin.readUshort(data, offset);
      offset += 2;
      var glyphCount = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < glyphCount; i++)
        obj.push(startGlyph + i), obj.push(startGlyph + i), obj.push(bin.readUshort(data, offset)), offset += 2;
    }
    if (2 == format) {
      var count = bin.readUshort(data, offset);
      offset += 2;
      for (i = 0; i < count; i++)
        obj.push(bin.readUshort(data, offset)), offset += 2, obj.push(bin.readUshort(data, offset)), offset += 2, obj.push(bin.readUshort(data, offset)), offset += 2;
    }
    return obj;
  }, Typr._lctf.getInterval = function (tab, val) {
    for (var i = 0; i < tab.length; i += 3) {
      var start = tab[i], end = tab[i + 1];
      if (tab[i + 2], start <= val && val <= end)
        return i;
    }
    return -1;
  }, Typr._lctf.readValueRecord = function (data, offset, valFmt) {
    var bin = Typr._bin, arr = [];
    return arr.push(1 & valFmt ? bin.readShort(data, offset) : 0), offset += 1 & valFmt ? 2 : 0, arr.push(2 & valFmt ? bin.readShort(data, offset) : 0), offset += 2 & valFmt ? 2 : 0, arr.push(4 & valFmt ? bin.readShort(data, offset) : 0), offset += 4 & valFmt ? 2 : 0, arr.push(8 & valFmt ? bin.readShort(data, offset) : 0), offset += 8 & valFmt ? 2 : 0, arr;
  }, Typr._lctf.readCoverage = function (data, offset) {
    var bin = Typr._bin, cvg = {};
    cvg.fmt = bin.readUshort(data, offset), offset += 2;
    var count = bin.readUshort(data, offset);
    return offset += 2, 1 == cvg.fmt && (cvg.tab = bin.readUshorts(data, offset, count)), 2 == cvg.fmt && (cvg.tab = bin.readUshorts(data, offset, 3 * count)), cvg;
  }, Typr._lctf.coverageIndex = function (cvg, val) {
    var tab = cvg.tab;
    if (1 == cvg.fmt)
      return tab.indexOf(val);
    if (2 == cvg.fmt) {
      var ind = Typr._lctf.getInterval(tab, val);
      if (-1 != ind)
        return tab[ind + 2] + (val - tab[ind]);
    }
    return -1;
  }, Typr._lctf.readFeatureList = function (data, offset) {
    var bin = Typr._bin, offset0 = offset, obj = [], count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var noff = bin.readUshort(data, offset);
      offset += 2, obj.push({ tag: tag.trim(), tab: Typr._lctf.readFeatureTable(data, offset0 + noff) });
    }
    return obj;
  }, Typr._lctf.readFeatureTable = function (data, offset) {
    var bin = Typr._bin;
    bin.readUshort(data, offset), offset += 2;
    var lookupCount = bin.readUshort(data, offset);
    offset += 2;
    for (var indices = [], i = 0; i < lookupCount; i++)
      indices.push(bin.readUshort(data, offset + 2 * i));
    return indices;
  }, Typr._lctf.readScriptList = function (data, offset) {
    var bin = Typr._bin, offset0 = offset, obj = {}, count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var noff = bin.readUshort(data, offset);
      offset += 2, obj[tag.trim()] = Typr._lctf.readScriptTable(data, offset0 + noff);
    }
    return obj;
  }, Typr._lctf.readScriptTable = function (data, offset) {
    var bin = Typr._bin, offset0 = offset, obj = {}, defLangSysOff = bin.readUshort(data, offset);
    offset += 2, obj.default = Typr._lctf.readLangSysTable(data, offset0 + defLangSysOff);
    var langSysCount = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < langSysCount; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var langSysOff = bin.readUshort(data, offset);
      offset += 2, obj[tag.trim()] = Typr._lctf.readLangSysTable(data, offset0 + langSysOff);
    }
    return obj;
  }, Typr._lctf.readLangSysTable = function (data, offset) {
    var bin = Typr._bin, obj = {};
    bin.readUshort(data, offset), offset += 2, obj.reqFeature = bin.readUshort(data, offset), offset += 2;
    var featureCount = bin.readUshort(data, offset);
    return offset += 2, obj.features = bin.readUshorts(data, offset, featureCount), obj;
  }, Typr.CFF = {}, Typr.CFF.parse = function (data, offset, length) {
    var bin = Typr._bin;
    (data = new Uint8Array(data.buffer, offset, length))[offset = 0], data[++offset], data[++offset], data[++offset], offset++;
    var ninds = [];
    offset = Typr.CFF.readIndex(data, offset, ninds);
    for (var names = [], i = 0; i < ninds.length - 1; i++)
      names.push(bin.readASCII(data, offset + ninds[i], ninds[i + 1] - ninds[i]));
    offset += ninds[ninds.length - 1];
    var tdinds = [];
    offset = Typr.CFF.readIndex(data, offset, tdinds);
    var topDicts = [];
    for (i = 0; i < tdinds.length - 1; i++)
      topDicts.push(Typr.CFF.readDict(data, offset + tdinds[i], offset + tdinds[i + 1]));
    offset += tdinds[tdinds.length - 1];
    var topdict = topDicts[0], sinds = [];
    offset = Typr.CFF.readIndex(data, offset, sinds);
    var strings = [];
    for (i = 0; i < sinds.length - 1; i++)
      strings.push(bin.readASCII(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
    if (offset += sinds[sinds.length - 1], Typr.CFF.readSubrs(data, offset, topdict), topdict.CharStrings) {
      offset = topdict.CharStrings;
      sinds = [];
      offset = Typr.CFF.readIndex(data, offset, sinds);
      var cstr = [];
      for (i = 0; i < sinds.length - 1; i++)
        cstr.push(bin.readBytes(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
      topdict.CharStrings = cstr;
    }
    topdict.Encoding && (topdict.Encoding = Typr.CFF.readEncoding(data, topdict.Encoding, topdict.CharStrings.length)), topdict.charset && (topdict.charset = Typr.CFF.readCharset(data, topdict.charset, topdict.CharStrings.length)), topdict.Private && (offset = topdict.Private[1], topdict.Private = Typr.CFF.readDict(data, offset, offset + topdict.Private[0]), topdict.Private.Subrs && Typr.CFF.readSubrs(data, offset + topdict.Private.Subrs, topdict.Private));
    var obj = {};
    for (var p in topdict)
      -1 != ["FamilyName", "FullName", "Notice", "version", "Copyright"].indexOf(p) ? obj[p] = strings[topdict[p] - 426 + 35] : obj[p] = topdict[p];
    return obj;
  }, Typr.CFF.readSubrs = function (data, offset, obj) {
    var bin = Typr._bin, gsubinds = [];
    offset = Typr.CFF.readIndex(data, offset, gsubinds);
    var bias, nSubrs = gsubinds.length;
    bias = nSubrs < 1240 ? 107 : nSubrs < 33900 ? 1131 : 32768, obj.Bias = bias, obj.Subrs = [];
    for (var i = 0; i < gsubinds.length - 1; i++)
      obj.Subrs.push(bin.readBytes(data, offset + gsubinds[i], gsubinds[i + 1] - gsubinds[i]));
  }, Typr.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0], Typr.CFF.glyphByUnicode = function (cff, code) {
    for (var i = 0; i < cff.charset.length; i++)
      if (cff.charset[i] == code)
        return i;
    return -1;
  }, Typr.CFF.glyphBySE = function (cff, charcode) {
    return charcode < 0 || charcode > 255 ? -1 : Typr.CFF.glyphByUnicode(cff, Typr.CFF.tableSE[charcode]);
  }, Typr.CFF.readEncoding = function (data, offset, num) {
    Typr._bin;
    var array = [".notdef"], format = data[offset];
    if (offset++, 0 != format)
      throw "error: unknown encoding format: " + format;
    var nCodes = data[offset];
    offset++;
    for (var i = 0; i < nCodes; i++)
      array.push(data[offset + i]);
    return array;
  }, Typr.CFF.readCharset = function (data, offset, num) {
    var bin = Typr._bin, charset = [".notdef"], format = data[offset];
    if (offset++, 0 == format)
      for (var i = 0; i < num; i++) {
        var first = bin.readUshort(data, offset);
        offset += 2, charset.push(first);
      }
    else {
      if (1 != format && 2 != format)
        throw "error: format: " + format;
      for (; charset.length < num;) {
        first = bin.readUshort(data, offset);
        offset += 2;
        var nLeft = 0;
        1 == format ? (nLeft = data[offset], offset++) : (nLeft = bin.readUshort(data, offset), offset += 2);
        for (i = 0; i <= nLeft; i++)
          charset.push(first), first++;
      }
    }
    return charset;
  }, Typr.CFF.readIndex = function (data, offset, inds) {
    var bin = Typr._bin, count = bin.readUshort(data, offset), offsize = data[offset += 2];
    if (offset++, 1 == offsize)
      for (var i = 0; i < count + 1; i++)
        inds.push(data[offset + i]);
    else if (2 == offsize)
      for (i = 0; i < count + 1; i++)
        inds.push(bin.readUshort(data, offset + 2 * i));
    else if (3 == offsize)
      for (i = 0; i < count + 1; i++)
        inds.push(16777215 & bin.readUint(data, offset + 3 * i - 1));
    else if (0 != count)
      throw "unsupported offset size: " + offsize + ", count: " + count;
    return (offset += (count + 1) * offsize) - 1;
  }, Typr.CFF.getCharString = function (data, offset, o) {
    var bin = Typr._bin, b0 = data[offset], b1 = data[offset + 1];
    data[offset + 2], data[offset + 3], data[offset + 4];
    var vs = 1, op = null, val = null;
    b0 <= 20 && (op = b0, vs = 1), 12 == b0 && (op = 100 * b0 + b1, vs = 2), 21 <= b0 && b0 <= 27 && (op = b0, vs = 1), 28 == b0 && (val = bin.readShort(data, offset + 1), vs = 3), 29 <= b0 && b0 <= 31 && (op = b0, vs = 1), 32 <= b0 && b0 <= 246 && (val = b0 - 139, vs = 1), 247 <= b0 && b0 <= 250 && (val = 256 * (b0 - 247) + b1 + 108, vs = 2), 251 <= b0 && b0 <= 254 && (val = 256 * -(b0 - 251) - b1 - 108, vs = 2), 255 == b0 && (val = bin.readInt(data, offset + 1) / 65535, vs = 5), o.val = null != val ? val : "o" + op, o.size = vs;
  }, Typr.CFF.readCharString = function (data, offset, length) {
    for (var end = offset + length, bin = Typr._bin, arr = []; offset < end;) {
      var b0 = data[offset], b1 = data[offset + 1];
      data[offset + 2], data[offset + 3], data[offset + 4];
      var vs = 1, op = null, val = null;
      b0 <= 20 && (op = b0, vs = 1), 12 == b0 && (op = 100 * b0 + b1, vs = 2), 19 != b0 && 20 != b0 || (op = b0, vs = 2), 21 <= b0 && b0 <= 27 && (op = b0, vs = 1), 28 == b0 && (val = bin.readShort(data, offset + 1), vs = 3), 29 <= b0 && b0 <= 31 && (op = b0, vs = 1), 32 <= b0 && b0 <= 246 && (val = b0 - 139, vs = 1), 247 <= b0 && b0 <= 250 && (val = 256 * (b0 - 247) + b1 + 108, vs = 2), 251 <= b0 && b0 <= 254 && (val = 256 * -(b0 - 251) - b1 - 108, vs = 2), 255 == b0 && (val = bin.readInt(data, offset + 1) / 65535, vs = 5), arr.push(null != val ? val : "o" + op), offset += vs;
    }
    return arr;
  }, Typr.CFF.readDict = function (data, offset, end) {
    for (var bin = Typr._bin, dict = {}, carr = []; offset < end;) {
      var b0 = data[offset], b1 = data[offset + 1];
      data[offset + 2], data[offset + 3], data[offset + 4];
      var vs = 1, key = null, val = null;
      if (28 == b0 && (val = bin.readShort(data, offset + 1), vs = 3), 29 == b0 && (val = bin.readInt(data, offset + 1), vs = 5), 32 <= b0 && b0 <= 246 && (val = b0 - 139, vs = 1), 247 <= b0 && b0 <= 250 && (val = 256 * (b0 - 247) + b1 + 108, vs = 2), 251 <= b0 && b0 <= 254 && (val = 256 * -(b0 - 251) - b1 - 108, vs = 2), 255 == b0)
        throw val = bin.readInt(data, offset + 1) / 65535, vs = 5, "unknown number";
      if (30 == b0) {
        var nibs = [];
        for (vs = 1; ;) {
          var b = data[offset + vs];
          vs++;
          var nib0 = b >> 4, nib1 = 15 & b;
          if (15 != nib0 && nibs.push(nib0), 15 != nib1 && nibs.push(nib1), 15 == nib1)
            break;
        }
        for (var s = "", chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"], i = 0; i < nibs.length; i++)
          s += chars[nibs[i]];
        val = parseFloat(s);
      }
      if (b0 <= 21) {
        if (key = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"][b0], vs = 1, 12 == b0)
          key = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"][b1], vs = 2;
      }
      null != key ? (dict[key] = 1 == carr.length ? carr[0] : carr, carr = []) : carr.push(val), offset += vs;
    }
    return dict;
  }, Typr.cmap = {}, Typr.cmap.parse = function (data, offset, length) {
    data = new Uint8Array(data.buffer, offset, length), offset = 0;
    var bin = Typr._bin, obj = {};
    bin.readUshort(data, offset), offset += 2;
    var numTables = bin.readUshort(data, offset);
    offset += 2;
    var offs = [];
    obj.tables = [];
    for (var i = 0; i < numTables; i++) {
      var platformID = bin.readUshort(data, offset);
      offset += 2;
      var encodingID = bin.readUshort(data, offset);
      offset += 2;
      var noffset = bin.readUint(data, offset);
      offset += 4;
      var id = "p" + platformID + "e" + encodingID, tind = offs.indexOf(noffset);
      if (-1 == tind) {
        var subt;
        tind = obj.tables.length, offs.push(noffset);
        var format = bin.readUshort(data, noffset);
        0 == format ? subt = Typr.cmap.parse0(data, noffset) : 4 == format ? subt = Typr.cmap.parse4(data, noffset) : 6 == format ? subt = Typr.cmap.parse6(data, noffset) : 12 == format ? subt = Typr.cmap.parse12(data, noffset) : console.log("unknown format: " + format, platformID, encodingID, noffset), obj.tables.push(subt);
      }
      if (null != obj[id])
        throw "multiple tables for one platform+encoding";
      obj[id] = tind;
    }
    return obj;
  }, Typr.cmap.parse0 = function (data, offset) {
    var bin = Typr._bin, obj = {};
    obj.format = bin.readUshort(data, offset), offset += 2;
    var len = bin.readUshort(data, offset);
    offset += 2, bin.readUshort(data, offset), offset += 2, obj.map = [];
    for (var i = 0; i < len - 6; i++)
      obj.map.push(data[offset + i]);
    return obj;
  }, Typr.cmap.parse4 = function (data, offset) {
    var bin = Typr._bin, offset0 = offset, obj = {};
    obj.format = bin.readUshort(data, offset), offset += 2;
    var length = bin.readUshort(data, offset);
    offset += 2, bin.readUshort(data, offset), offset += 2;
    var segCountX2 = bin.readUshort(data, offset);
    offset += 2;
    var segCount = segCountX2 / 2;
    obj.searchRange = bin.readUshort(data, offset), offset += 2, obj.entrySelector = bin.readUshort(data, offset), offset += 2, obj.rangeShift = bin.readUshort(data, offset), offset += 2, obj.endCount = bin.readUshorts(data, offset, segCount), offset += 2 * segCount, offset += 2, obj.startCount = bin.readUshorts(data, offset, segCount), offset += 2 * segCount, obj.idDelta = [];
    for (var i = 0; i < segCount; i++)
      obj.idDelta.push(bin.readShort(data, offset)), offset += 2;
    for (obj.idRangeOffset = bin.readUshorts(data, offset, segCount), offset += 2 * segCount, obj.glyphIdArray = []; offset < offset0 + length;)
      obj.glyphIdArray.push(bin.readUshort(data, offset)), offset += 2;
    return obj;
  }, Typr.cmap.parse6 = function (data, offset) {
    var bin = Typr._bin, obj = {};
    obj.format = bin.readUshort(data, offset), offset += 2, bin.readUshort(data, offset), offset += 2, bin.readUshort(data, offset), offset += 2, obj.firstCode = bin.readUshort(data, offset), offset += 2;
    var entryCount = bin.readUshort(data, offset);
    offset += 2, obj.glyphIdArray = [];
    for (var i = 0; i < entryCount; i++)
      obj.glyphIdArray.push(bin.readUshort(data, offset)), offset += 2;
    return obj;
  }, Typr.cmap.parse12 = function (data, offset) {
    var bin = Typr._bin, obj = {};
    obj.format = bin.readUshort(data, offset), offset += 2, offset += 2, bin.readUint(data, offset), offset += 4, bin.readUint(data, offset), offset += 4;
    var nGroups = bin.readUint(data, offset);
    offset += 4, obj.groups = [];
    for (var i = 0; i < nGroups; i++) {
      var off = offset + 12 * i, startCharCode = bin.readUint(data, off + 0), endCharCode = bin.readUint(data, off + 4), startGlyphID = bin.readUint(data, off + 8);
      obj.groups.push([startCharCode, endCharCode, startGlyphID]);
    }
    return obj;
  }, Typr.glyf = {}, Typr.glyf.parse = function (data, offset, length, font) {
    for (var obj = [], g = 0; g < font.maxp.numGlyphs; g++)
      obj.push(null);
    return obj;
  }, Typr.glyf._parseGlyf = function (font, g) {
    var bin = Typr._bin, data = font._data, offset = Typr._tabOffset(data, "glyf") + font.loca[g];
    if (font.loca[g] == font.loca[g + 1])
      return null;
    var gl = {};
    if (gl.noc = bin.readShort(data, offset), offset += 2, gl.xMin = bin.readShort(data, offset), offset += 2, gl.yMin = bin.readShort(data, offset), offset += 2, gl.xMax = bin.readShort(data, offset), offset += 2, gl.yMax = bin.readShort(data, offset), offset += 2, gl.xMin >= gl.xMax || gl.yMin >= gl.yMax)
      return null;
    if (gl.noc > 0) {
      gl.endPts = [];
      for (var i = 0; i < gl.noc; i++)
        gl.endPts.push(bin.readUshort(data, offset)), offset += 2;
      var instructionLength = bin.readUshort(data, offset);
      if (offset += 2, data.length - offset < instructionLength)
        return null;
      gl.instructions = bin.readBytes(data, offset, instructionLength), offset += instructionLength;
      var crdnum = gl.endPts[gl.noc - 1] + 1;
      gl.flags = [];
      for (i = 0; i < crdnum; i++) {
        var flag = data[offset];
        if (offset++, gl.flags.push(flag), 0 != (8 & flag)) {
          var rep = data[offset];
          offset++;
          for (var j = 0; j < rep; j++)
            gl.flags.push(flag), i++;
        }
      }
      gl.xs = [];
      for (i = 0; i < crdnum; i++) {
        var i8 = 0 != (2 & gl.flags[i]), same = 0 != (16 & gl.flags[i]);
        i8 ? (gl.xs.push(same ? data[offset] : -data[offset]), offset++) : same ? gl.xs.push(0) : (gl.xs.push(bin.readShort(data, offset)), offset += 2);
      }
      gl.ys = [];
      for (i = 0; i < crdnum; i++) {
        i8 = 0 != (4 & gl.flags[i]), same = 0 != (32 & gl.flags[i]);
        i8 ? (gl.ys.push(same ? data[offset] : -data[offset]), offset++) : same ? gl.ys.push(0) : (gl.ys.push(bin.readShort(data, offset)), offset += 2);
      }
      var x = 0, y = 0;
      for (i = 0; i < crdnum; i++)
        x += gl.xs[i], y += gl.ys[i], gl.xs[i] = x, gl.ys[i] = y;
    } else {
      var flags;
      gl.parts = [];
      do {
        flags = bin.readUshort(data, offset), offset += 2;
        var part = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
        if (gl.parts.push(part), part.glyphIndex = bin.readUshort(data, offset), offset += 2, 1 & flags) {
          var arg1 = bin.readShort(data, offset);
          offset += 2;
          var arg2 = bin.readShort(data, offset);
          offset += 2;
        } else {
          arg1 = bin.readInt8(data, offset);
          offset++;
          arg2 = bin.readInt8(data, offset);
          offset++;
        }
        2 & flags ? (part.m.tx = arg1, part.m.ty = arg2) : (part.p1 = arg1, part.p2 = arg2), 8 & flags ? (part.m.a = part.m.d = bin.readF2dot14(data, offset), offset += 2) : 64 & flags ? (part.m.a = bin.readF2dot14(data, offset), offset += 2, part.m.d = bin.readF2dot14(data, offset), offset += 2) : 128 & flags && (part.m.a = bin.readF2dot14(data, offset), offset += 2, part.m.b = bin.readF2dot14(data, offset), offset += 2, part.m.c = bin.readF2dot14(data, offset), offset += 2, part.m.d = bin.readF2dot14(data, offset), offset += 2);
      } while (32 & flags);
      if (256 & flags) {
        var numInstr = bin.readUshort(data, offset);
        offset += 2, gl.instr = [];
        for (i = 0; i < numInstr; i++)
          gl.instr.push(data[offset]), offset++;
      }
    }
    return gl;
  }, Typr.GPOS = {}, Typr.GPOS.parse = function (data, offset, length, font) {
    return Typr._lctf.parse(data, offset, length, font, Typr.GPOS.subt);
  }, Typr.GPOS.subt = function (data, ltype, offset) {
    if (2 != ltype)
      return null;
    var bin = Typr._bin, offset0 = offset, tab = {};
    tab.format = bin.readUshort(data, offset), offset += 2;
    var covOff = bin.readUshort(data, offset);
    offset += 2, tab.coverage = Typr._lctf.readCoverage(data, covOff + offset0), tab.valFmt1 = bin.readUshort(data, offset), offset += 2, tab.valFmt2 = bin.readUshort(data, offset), offset += 2;
    var ones1 = Typr._lctf.numOfOnes(tab.valFmt1), ones2 = Typr._lctf.numOfOnes(tab.valFmt2);
    if (1 == tab.format) {
      tab.pairsets = [];
      var count = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < count; i++) {
        var psoff = bin.readUshort(data, offset);
        offset += 2, psoff += offset0;
        var pvcount = bin.readUshort(data, psoff);
        psoff += 2;
        for (var arr = [], j = 0; j < pvcount; j++) {
          var gid2 = bin.readUshort(data, psoff);
          psoff += 2, 0 != tab.valFmt1 && (value1 = Typr._lctf.readValueRecord(data, psoff, tab.valFmt1), psoff += 2 * ones1), 0 != tab.valFmt2 && (value2 = Typr._lctf.readValueRecord(data, psoff, tab.valFmt2), psoff += 2 * ones2), arr.push({ gid2, val1: value1, val2: value2 });
        }
        tab.pairsets.push(arr);
      }
    }
    if (2 == tab.format) {
      var classDef1 = bin.readUshort(data, offset);
      offset += 2;
      var classDef2 = bin.readUshort(data, offset);
      offset += 2;
      var class1Count = bin.readUshort(data, offset);
      offset += 2;
      var class2Count = bin.readUshort(data, offset);
      offset += 2, tab.classDef1 = Typr._lctf.readClassDef(data, offset0 + classDef1), tab.classDef2 = Typr._lctf.readClassDef(data, offset0 + classDef2), tab.matrix = [];
      for (i = 0; i < class1Count; i++) {
        var row = [];
        for (j = 0; j < class2Count; j++) {
          var value1 = null, value2 = null;
          0 != tab.valFmt1 && (value1 = Typr._lctf.readValueRecord(data, offset, tab.valFmt1), offset += 2 * ones1), 0 != tab.valFmt2 && (value2 = Typr._lctf.readValueRecord(data, offset, tab.valFmt2), offset += 2 * ones2), row.push({ val1: value1, val2: value2 });
        }
        tab.matrix.push(row);
      }
    }
    return tab;
  }, Typr.GSUB = {}, Typr.GSUB.parse = function (data, offset, length, font) {
    return Typr._lctf.parse(data, offset, length, font, Typr.GSUB.subt);
  }, Typr.GSUB.subt = function (data, ltype, offset) {
    var bin = Typr._bin, offset0 = offset, tab = {};
    if (1 != ltype && 4 != ltype && 5 != ltype)
      return null;
    tab.fmt = bin.readUshort(data, offset), offset += 2;
    var covOff = bin.readUshort(data, offset);
    if (offset += 2, tab.coverage = Typr._lctf.readCoverage(data, covOff + offset0), 1 == ltype) {
      if (1 == tab.fmt)
        tab.delta = bin.readShort(data, offset), offset += 2;
      else if (2 == tab.fmt) {
        var cnt = bin.readUshort(data, offset);
        offset += 2, tab.newg = bin.readUshorts(data, offset, cnt), offset += 2 * tab.newg.length;
      }
    } else if (4 == ltype) {
      tab.vals = [];
      cnt = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < cnt; i++) {
        var loff = bin.readUshort(data, offset);
        offset += 2, tab.vals.push(Typr.GSUB.readLigatureSet(data, offset0 + loff));
      }
    } else if (5 == ltype)
      if (2 == tab.fmt) {
        var cDefOffset = bin.readUshort(data, offset);
        offset += 2, tab.cDef = Typr._lctf.readClassDef(data, offset0 + cDefOffset), tab.scset = [];
        var subClassSetCount = bin.readUshort(data, offset);
        offset += 2;
        for (i = 0; i < subClassSetCount; i++) {
          var scsOff = bin.readUshort(data, offset);
          offset += 2, tab.scset.push(0 == scsOff ? null : Typr.GSUB.readSubClassSet(data, offset0 + scsOff));
        }
      } else
        console.log("unknown table format", tab.fmt);
    return tab;
  }, Typr.GSUB.readSubClassSet = function (data, offset) {
    var rUs = Typr._bin.readUshort, offset0 = offset, lset = [], cnt = rUs(data, offset);
    offset += 2;
    for (var i = 0; i < cnt; i++) {
      var loff = rUs(data, offset);
      offset += 2, lset.push(Typr.GSUB.readSubClassRule(data, offset0 + loff));
    }
    return lset;
  }, Typr.GSUB.readSubClassRule = function (data, offset) {
    var rUs = Typr._bin.readUshort, rule = {}, gcount = rUs(data, offset), scount = rUs(data, offset += 2);
    offset += 2, rule.input = [];
    for (var i = 0; i < gcount - 1; i++)
      rule.input.push(rUs(data, offset)), offset += 2;
    return rule.substLookupRecords = Typr.GSUB.readSubstLookupRecords(data, offset, scount), rule;
  }, Typr.GSUB.readSubstLookupRecords = function (data, offset, cnt) {
    for (var rUs = Typr._bin.readUshort, out = [], i = 0; i < cnt; i++)
      out.push(rUs(data, offset), rUs(data, offset + 2)), offset += 4;
    return out;
  }, Typr.GSUB.readChainSubClassSet = function (data, offset) {
    var bin = Typr._bin, offset0 = offset, lset = [], cnt = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < cnt; i++) {
      var loff = bin.readUshort(data, offset);
      offset += 2, lset.push(Typr.GSUB.readChainSubClassRule(data, offset0 + loff));
    }
    return lset;
  }, Typr.GSUB.readChainSubClassRule = function (data, offset) {
    for (var bin = Typr._bin, rule = {}, pps = ["backtrack", "input", "lookahead"], pi = 0; pi < pps.length; pi++) {
      var cnt = bin.readUshort(data, offset);
      offset += 2, 1 == pi && cnt--, rule[pps[pi]] = bin.readUshorts(data, offset, cnt), offset += 2 * rule[pps[pi]].length;
    }
    cnt = bin.readUshort(data, offset);
    return offset += 2, rule.subst = bin.readUshorts(data, offset, 2 * cnt), offset += 2 * rule.subst.length, rule;
  }, Typr.GSUB.readLigatureSet = function (data, offset) {
    var bin = Typr._bin, offset0 = offset, lset = [], lcnt = bin.readUshort(data, offset);
    offset += 2;
    for (var j = 0; j < lcnt; j++) {
      var loff = bin.readUshort(data, offset);
      offset += 2, lset.push(Typr.GSUB.readLigature(data, offset0 + loff));
    }
    return lset;
  }, Typr.GSUB.readLigature = function (data, offset) {
    var bin = Typr._bin, lig = { chain: [] };
    lig.nglyph = bin.readUshort(data, offset), offset += 2;
    var ccnt = bin.readUshort(data, offset);
    offset += 2;
    for (var k = 0; k < ccnt - 1; k++)
      lig.chain.push(bin.readUshort(data, offset)), offset += 2;
    return lig;
  }, Typr.head = {}, Typr.head.parse = function (data, offset, length) {
    var bin = Typr._bin, obj = {};
    return bin.readFixed(data, offset), offset += 4, obj.fontRevision = bin.readFixed(data, offset), offset += 4, bin.readUint(data, offset), offset += 4, bin.readUint(data, offset), offset += 4, obj.flags = bin.readUshort(data, offset), offset += 2, obj.unitsPerEm = bin.readUshort(data, offset), offset += 2, obj.created = bin.readUint64(data, offset), offset += 8, obj.modified = bin.readUint64(data, offset), offset += 8, obj.xMin = bin.readShort(data, offset), offset += 2, obj.yMin = bin.readShort(data, offset), offset += 2, obj.xMax = bin.readShort(data, offset), offset += 2, obj.yMax = bin.readShort(data, offset), offset += 2, obj.macStyle = bin.readUshort(data, offset), offset += 2, obj.lowestRecPPEM = bin.readUshort(data, offset), offset += 2, obj.fontDirectionHint = bin.readShort(data, offset), offset += 2, obj.indexToLocFormat = bin.readShort(data, offset), offset += 2, obj.glyphDataFormat = bin.readShort(data, offset), offset += 2, obj;
  }, Typr.hhea = {}, Typr.hhea.parse = function (data, offset, length) {
    var bin = Typr._bin, obj = {};
    return bin.readFixed(data, offset), offset += 4, obj.ascender = bin.readShort(data, offset), offset += 2, obj.descender = bin.readShort(data, offset), offset += 2, obj.lineGap = bin.readShort(data, offset), offset += 2, obj.advanceWidthMax = bin.readUshort(data, offset), offset += 2, obj.minLeftSideBearing = bin.readShort(data, offset), offset += 2, obj.minRightSideBearing = bin.readShort(data, offset), offset += 2, obj.xMaxExtent = bin.readShort(data, offset), offset += 2, obj.caretSlopeRise = bin.readShort(data, offset), offset += 2, obj.caretSlopeRun = bin.readShort(data, offset), offset += 2, obj.caretOffset = bin.readShort(data, offset), offset += 2, offset += 8, obj.metricDataFormat = bin.readShort(data, offset), offset += 2, obj.numberOfHMetrics = bin.readUshort(data, offset), offset += 2, obj;
  }, Typr.hmtx = {}, Typr.hmtx.parse = function (data, offset, length, font) {
    for (var bin = Typr._bin, obj = { aWidth: [], lsBearing: [] }, aw = 0, lsb = 0, i = 0; i < font.maxp.numGlyphs; i++)
      i < font.hhea.numberOfHMetrics && (aw = bin.readUshort(data, offset), offset += 2, lsb = bin.readShort(data, offset), offset += 2), obj.aWidth.push(aw), obj.lsBearing.push(lsb);
    return obj;
  }, Typr.kern = {}, Typr.kern.parse = function (data, offset, length, font) {
    var bin = Typr._bin, version = bin.readUshort(data, offset);
    if (offset += 2, 1 == version)
      return Typr.kern.parseV1(data, offset - 2, length, font);
    var nTables = bin.readUshort(data, offset);
    offset += 2;
    for (var map = { glyph1: [], rval: [] }, i = 0; i < nTables; i++) {
      offset += 2;
      length = bin.readUshort(data, offset);
      offset += 2;
      var coverage = bin.readUshort(data, offset);
      offset += 2;
      var format = coverage >>> 8;
      if (0 != (format &= 15))
        throw "unknown kern table format: " + format;
      offset = Typr.kern.readFormat0(data, offset, map);
    }
    return map;
  }, Typr.kern.parseV1 = function (data, offset, length, font) {
    var bin = Typr._bin;
    bin.readFixed(data, offset), offset += 4;
    var nTables = bin.readUint(data, offset);
    offset += 4;
    for (var map = { glyph1: [], rval: [] }, i = 0; i < nTables; i++) {
      bin.readUint(data, offset), offset += 4;
      var coverage = bin.readUshort(data, offset);
      offset += 2, bin.readUshort(data, offset), offset += 2;
      var format = coverage >>> 8;
      if (0 != (format &= 15))
        throw "unknown kern table format: " + format;
      offset = Typr.kern.readFormat0(data, offset, map);
    }
    return map;
  }, Typr.kern.readFormat0 = function (data, offset, map) {
    var bin = Typr._bin, pleft = -1, nPairs = bin.readUshort(data, offset);
    offset += 2, bin.readUshort(data, offset), offset += 2, bin.readUshort(data, offset), offset += 2, bin.readUshort(data, offset), offset += 2;
    for (var j = 0; j < nPairs; j++) {
      var left = bin.readUshort(data, offset);
      offset += 2;
      var right = bin.readUshort(data, offset);
      offset += 2;
      var value = bin.readShort(data, offset);
      offset += 2, left != pleft && (map.glyph1.push(left), map.rval.push({ glyph2: [], vals: [] }));
      var rval = map.rval[map.rval.length - 1];
      rval.glyph2.push(right), rval.vals.push(value), pleft = left;
    }
    return offset;
  }, Typr.loca = {}, Typr.loca.parse = function (data, offset, length, font) {
    var bin = Typr._bin, obj = [], ver = font.head.indexToLocFormat, len = font.maxp.numGlyphs + 1;
    if (0 == ver)
      for (var i = 0; i < len; i++)
        obj.push(bin.readUshort(data, offset + (i << 1)) << 1);
    if (1 == ver)
      for (i = 0; i < len; i++)
        obj.push(bin.readUint(data, offset + (i << 2)));
    return obj;
  }, Typr.maxp = {}, Typr.maxp.parse = function (data, offset, length) {
    var bin = Typr._bin, obj = {}, ver = bin.readUint(data, offset);
    return offset += 4, obj.numGlyphs = bin.readUshort(data, offset), offset += 2, 65536 == ver && (obj.maxPoints = bin.readUshort(data, offset), offset += 2, obj.maxContours = bin.readUshort(data, offset), offset += 2, obj.maxCompositePoints = bin.readUshort(data, offset), offset += 2, obj.maxCompositeContours = bin.readUshort(data, offset), offset += 2, obj.maxZones = bin.readUshort(data, offset), offset += 2, obj.maxTwilightPoints = bin.readUshort(data, offset), offset += 2, obj.maxStorage = bin.readUshort(data, offset), offset += 2, obj.maxFunctionDefs = bin.readUshort(data, offset), offset += 2, obj.maxInstructionDefs = bin.readUshort(data, offset), offset += 2, obj.maxStackElements = bin.readUshort(data, offset), offset += 2, obj.maxSizeOfInstructions = bin.readUshort(data, offset), offset += 2, obj.maxComponentElements = bin.readUshort(data, offset), offset += 2, obj.maxComponentDepth = bin.readUshort(data, offset), offset += 2), obj;
  }, Typr.name = {}, Typr.name.parse = function (data, offset, length) {
    var bin = Typr._bin, obj = {};
    bin.readUshort(data, offset), offset += 2;
    var count = bin.readUshort(data, offset);
    offset += 2, bin.readUshort(data, offset);
    for (var tname, offset0 = offset += 2, i = 0; i < count; i++) {
      var platformID = bin.readUshort(data, offset);
      offset += 2;
      var encodingID = bin.readUshort(data, offset);
      offset += 2;
      var languageID = bin.readUshort(data, offset);
      offset += 2;
      var nameID = bin.readUshort(data, offset);
      offset += 2;
      length = bin.readUshort(data, offset);
      offset += 2;
      var noffset = bin.readUshort(data, offset);
      offset += 2;
      var plat = "p" + platformID;
      null == obj[plat] && (obj[plat] = {});
      var str, cname = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"][nameID], soff = offset0 + 12 * count + noffset;
      if (0 == platformID)
        str = bin.readUnicode(data, soff, length / 2);
      else if (3 == platformID && 0 == encodingID)
        str = bin.readUnicode(data, soff, length / 2);
      else if (0 == encodingID)
        str = bin.readASCII(data, soff, length);
      else if (1 == encodingID)
        str = bin.readUnicode(data, soff, length / 2);
      else if (3 == encodingID)
        str = bin.readUnicode(data, soff, length / 2);
      else {
        if (1 != platformID)
          throw "unknown encoding " + encodingID + ", platformID: " + platformID;
        str = bin.readASCII(data, soff, length), console.log("reading unknown MAC encoding " + encodingID + " as ASCII");
      }
      obj[plat][cname] = str, obj[plat]._lang = languageID;
    }
    for (var p in obj)
      if (null != obj[p].postScriptName && 1033 == obj[p]._lang)
        return obj[p];
    for (var p in obj)
      if (null != obj[p].postScriptName && 3084 == obj[p]._lang)
        return obj[p];
    for (var p in obj)
      if (null != obj[p].postScriptName)
        return obj[p];
    for (var p in obj) {
      tname = p;
      break;
    }
    return console.log("returning name table with languageID " + obj[tname]._lang), obj[tname];
  }, Typr["OS/2"] = {}, Typr["OS/2"].parse = function (data, offset, length) {
    var ver = Typr._bin.readUshort(data, offset);
    offset += 2;
    var obj = {};
    if (0 == ver)
      Typr["OS/2"].version0(data, offset, obj);
    else if (1 == ver)
      Typr["OS/2"].version1(data, offset, obj);
    else if (2 == ver || 3 == ver || 4 == ver)
      Typr["OS/2"].version2(data, offset, obj);
    else {
      if (5 != ver)
        throw "unknown OS/2 table version: " + ver;
      Typr["OS/2"].version5(data, offset, obj);
    }
    return obj;
  }, Typr["OS/2"].version0 = function (data, offset, obj) {
    var bin = Typr._bin;
    return obj.xAvgCharWidth = bin.readShort(data, offset), offset += 2, obj.usWeightClass = bin.readUshort(data, offset), offset += 2, obj.usWidthClass = bin.readUshort(data, offset), offset += 2, obj.fsType = bin.readUshort(data, offset), offset += 2, obj.ySubscriptXSize = bin.readShort(data, offset), offset += 2, obj.ySubscriptYSize = bin.readShort(data, offset), offset += 2, obj.ySubscriptXOffset = bin.readShort(data, offset), offset += 2, obj.ySubscriptYOffset = bin.readShort(data, offset), offset += 2, obj.ySuperscriptXSize = bin.readShort(data, offset), offset += 2, obj.ySuperscriptYSize = bin.readShort(data, offset), offset += 2, obj.ySuperscriptXOffset = bin.readShort(data, offset), offset += 2, obj.ySuperscriptYOffset = bin.readShort(data, offset), offset += 2, obj.yStrikeoutSize = bin.readShort(data, offset), offset += 2, obj.yStrikeoutPosition = bin.readShort(data, offset), offset += 2, obj.sFamilyClass = bin.readShort(data, offset), offset += 2, obj.panose = bin.readBytes(data, offset, 10), offset += 10, obj.ulUnicodeRange1 = bin.readUint(data, offset), offset += 4, obj.ulUnicodeRange2 = bin.readUint(data, offset), offset += 4, obj.ulUnicodeRange3 = bin.readUint(data, offset), offset += 4, obj.ulUnicodeRange4 = bin.readUint(data, offset), offset += 4, obj.achVendID = [bin.readInt8(data, offset), bin.readInt8(data, offset + 1), bin.readInt8(data, offset + 2), bin.readInt8(data, offset + 3)], offset += 4, obj.fsSelection = bin.readUshort(data, offset), offset += 2, obj.usFirstCharIndex = bin.readUshort(data, offset), offset += 2, obj.usLastCharIndex = bin.readUshort(data, offset), offset += 2, obj.sTypoAscender = bin.readShort(data, offset), offset += 2, obj.sTypoDescender = bin.readShort(data, offset), offset += 2, obj.sTypoLineGap = bin.readShort(data, offset), offset += 2, obj.usWinAscent = bin.readUshort(data, offset), offset += 2, obj.usWinDescent = bin.readUshort(data, offset), offset += 2;
  }, Typr["OS/2"].version1 = function (data, offset, obj) {
    var bin = Typr._bin;
    return offset = Typr["OS/2"].version0(data, offset, obj), obj.ulCodePageRange1 = bin.readUint(data, offset), offset += 4, obj.ulCodePageRange2 = bin.readUint(data, offset), offset += 4;
  }, Typr["OS/2"].version2 = function (data, offset, obj) {
    var bin = Typr._bin;
    return offset = Typr["OS/2"].version1(data, offset, obj), obj.sxHeight = bin.readShort(data, offset), offset += 2, obj.sCapHeight = bin.readShort(data, offset), offset += 2, obj.usDefault = bin.readUshort(data, offset), offset += 2, obj.usBreak = bin.readUshort(data, offset), offset += 2, obj.usMaxContext = bin.readUshort(data, offset), offset += 2;
  }, Typr["OS/2"].version5 = function (data, offset, obj) {
    var bin = Typr._bin;
    return offset = Typr["OS/2"].version2(data, offset, obj), obj.usLowerOpticalPointSize = bin.readUshort(data, offset), offset += 2, obj.usUpperOpticalPointSize = bin.readUshort(data, offset), offset += 2;
  }, Typr.post = {}, Typr.post.parse = function (data, offset, length) {
    var bin = Typr._bin, obj = {};
    return obj.version = bin.readFixed(data, offset), offset += 4, obj.italicAngle = bin.readFixed(data, offset), offset += 4, obj.underlinePosition = bin.readShort(data, offset), offset += 2, obj.underlineThickness = bin.readShort(data, offset), offset += 2, obj;
  }, Typr.SVG = {}, Typr.SVG.parse = function (data, offset, length) {
    var bin = Typr._bin, obj = { entries: [] }, offset0 = offset;
    bin.readUshort(data, offset), offset += 2;
    var svgDocIndexOffset = bin.readUint(data, offset);
    offset += 4, bin.readUint(data, offset), offset += 4, offset = svgDocIndexOffset + offset0;
    var numEntries = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < numEntries; i++) {
      var startGlyphID = bin.readUshort(data, offset);
      offset += 2;
      var endGlyphID = bin.readUshort(data, offset);
      offset += 2;
      var svgDocOffset = bin.readUint(data, offset);
      offset += 4;
      var svgDocLength = bin.readUint(data, offset);
      offset += 4;
      for (var sbuf = new Uint8Array(data.buffer, offset0 + svgDocOffset + svgDocIndexOffset, svgDocLength), svg = bin.readUTF8(sbuf, 0, sbuf.length), f = startGlyphID; f <= endGlyphID; f++)
        obj.entries[f] = svg;
    }
    return obj;
  }, Typr.SVG.toPath = function (str) {
    var pth = { cmds: [], crds: [] };
    if (null == str)
      return pth;
    for (var svg = new DOMParser().parseFromString(str, "image/svg+xml").firstChild; "svg" != svg.tagName;)
      svg = svg.nextSibling;
    var vb = svg.getAttribute("viewBox");
    vb = vb ? vb.trim().split(" ").map(parseFloat) : [0, 0, 1e3, 1e3], Typr.SVG._toPath(svg.children, pth);
    for (var i = 0; i < pth.crds.length; i += 2) {
      var x = pth.crds[i], y = pth.crds[i + 1];
      x -= vb[0], y = -(y -= vb[1]), pth.crds[i] = x, pth.crds[i + 1] = y;
    }
    return pth;
  }, Typr.SVG._toPath = function (nds, pth, fill) {
    for (var ni = 0; ni < nds.length; ni++) {
      var nd = nds[ni], tn = nd.tagName, cfl = nd.getAttribute("fill");
      if (null == cfl && (cfl = fill), "g" == tn)
        Typr.SVG._toPath(nd.children, pth, cfl);
      else if ("path" == tn) {
        pth.cmds.push(cfl || "#000000");
        var d = nd.getAttribute("d"), toks = Typr.SVG._tokens(d);
        Typr.SVG._toksToPath(toks, pth), pth.cmds.push("X");
      } else
        "defs" == tn || console.log(tn, nd);
    }
  }, Typr.SVG._tokens = function (d) {
    for (var ts = [], off = 0, rn = false, cn = ""; off < d.length;) {
      var cc = d.charCodeAt(off), ch = d.charAt(off);
      off++;
      var isNum = 48 <= cc && cc <= 57 || "." == ch || "-" == ch;
      rn ? "-" == ch ? (ts.push(parseFloat(cn)), cn = ch) : isNum ? cn += ch : (ts.push(parseFloat(cn)), "," != ch && " " != ch && ts.push(ch), rn = false) : isNum ? (cn = ch, rn = true) : "," != ch && " " != ch && ts.push(ch);
    }
    return rn && ts.push(parseFloat(cn)), ts;
  }, Typr.SVG._toksToPath = function (ts, pth) {
    for (var i = 0, x = 0, y = 0, ox = 0, oy = 0, pc = { M: 2, L: 2, H: 1, V: 1, S: 4, C: 6 }, cmds = pth.cmds, crds = pth.crds; i < ts.length;) {
      var cmd = ts[i];
      if (i++, "z" == cmd)
        cmds.push("Z"), x = ox, y = oy;
      else
        for (var cmu = cmd.toUpperCase(), ps = pc[cmu], reps = Typr.SVG._reps(ts, i, ps), j = 0; j < reps; j++) {
          var xi = 0, yi = 0;
          if (cmd != cmu && (xi = x, yi = y), "M" == cmu)
            x = xi + ts[i++], y = yi + ts[i++], cmds.push("M"), crds.push(x, y), ox = x, oy = y;
          else if ("L" == cmu)
            x = xi + ts[i++], y = yi + ts[i++], cmds.push("L"), crds.push(x, y);
          else if ("H" == cmu)
            x = xi + ts[i++], cmds.push("L"), crds.push(x, y);
          else if ("V" == cmu)
            y = yi + ts[i++], cmds.push("L"), crds.push(x, y);
          else if ("C" == cmu) {
            var x1 = xi + ts[i++], y1 = yi + ts[i++], x2 = xi + ts[i++], y2 = yi + ts[i++], x3 = xi + ts[i++], y3 = yi + ts[i++];
            cmds.push("C"), crds.push(x1, y1, x2, y2, x3, y3), x = x3, y = y3;
          } else if ("S" == cmu) {
            var co = Math.max(crds.length - 4, 0);
            x1 = x + x - crds[co], y1 = y + y - crds[co + 1], x2 = xi + ts[i++], y2 = yi + ts[i++], x3 = xi + ts[i++], y3 = yi + ts[i++];
            cmds.push("C"), crds.push(x1, y1, x2, y2, x3, y3), x = x3, y = y3;
          } else
            console.log("Unknown SVG command " + cmd);
        }
    }
  }, Typr.SVG._reps = function (ts, off, ps) {
    for (var i = off; i < ts.length && "string" != typeof ts[i];)
      i += ps;
    return (i - off) / ps;
  }, null == Typr && (Typr = {}), null == Typr.U && (Typr.U = {}), Typr.U.codeToGlyph = function (font, code) {
    var cmap = font.cmap, tind = -1;
    if (null != cmap.p0e4 ? tind = cmap.p0e4 : null != cmap.p3e1 ? tind = cmap.p3e1 : null != cmap.p1e0 && (tind = cmap.p1e0), -1 == tind)
      throw "no familiar platform and encoding!";
    var tab = cmap.tables[tind];
    if (0 == tab.format)
      return code >= tab.map.length ? 0 : tab.map[code];
    if (4 == tab.format) {
      for (var sind = -1, i = 0; i < tab.endCount.length; i++)
        if (code <= tab.endCount[i]) {
          sind = i;
          break;
        }
      if (-1 == sind)
        return 0;
      if (tab.startCount[sind] > code)
        return 0;
      return 65535 & (0 != tab.idRangeOffset[sind] ? tab.glyphIdArray[code - tab.startCount[sind] + (tab.idRangeOffset[sind] >> 1) - (tab.idRangeOffset.length - sind)] : code + tab.idDelta[sind]);
    }
    if (12 == tab.format) {
      if (code > tab.groups[tab.groups.length - 1][1])
        return 0;
      for (i = 0; i < tab.groups.length; i++) {
        var grp = tab.groups[i];
        if (grp[0] <= code && code <= grp[1])
          return grp[2] + (code - grp[0]);
      }
      return 0;
    }
    throw "unknown cmap table format " + tab.format;
  }, Typr.U.glyphToPath = function (font, gid) {
    var path = { cmds: [], crds: [] };
    if (font.SVG && font.SVG.entries[gid]) {
      var p = font.SVG.entries[gid];
      return null == p ? path : ("string" == typeof p && (p = Typr.SVG.toPath(p), font.SVG.entries[gid] = p), p);
    }
    if (font.CFF) {
      var state = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: false, width: font.CFF.Private ? font.CFF.Private.defaultWidthX : 0, open: false };
      Typr.U._drawCFF(font.CFF.CharStrings[gid], state, font.CFF, path);
    } else
      font.glyf && Typr.U._drawGlyf(gid, font, path);
    return path;
  }, Typr.U._drawGlyf = function (gid, font, path) {
    var gl = font.glyf[gid];
    null == gl && (gl = font.glyf[gid] = Typr.glyf._parseGlyf(font, gid)), null != gl && (gl.noc > -1 ? Typr.U._simpleGlyph(gl, path) : Typr.U._compoGlyph(gl, font, path));
  }, Typr.U._simpleGlyph = function (gl, p) {
    for (var c = 0; c < gl.noc; c++) {
      for (var i0 = 0 == c ? 0 : gl.endPts[c - 1] + 1, il = gl.endPts[c], i = i0; i <= il; i++) {
        var pr = i == i0 ? il : i - 1, nx = i == il ? i0 : i + 1, onCurve = 1 & gl.flags[i], prOnCurve = 1 & gl.flags[pr], nxOnCurve = 1 & gl.flags[nx], x = gl.xs[i], y = gl.ys[i];
        if (i == i0)
          if (onCurve) {
            if (!prOnCurve) {
              Typr.U.P.moveTo(p, x, y);
              continue;
            }
            Typr.U.P.moveTo(p, gl.xs[pr], gl.ys[pr]);
          } else
            prOnCurve ? Typr.U.P.moveTo(p, gl.xs[pr], gl.ys[pr]) : Typr.U.P.moveTo(p, (gl.xs[pr] + x) / 2, (gl.ys[pr] + y) / 2);
        onCurve ? prOnCurve && Typr.U.P.lineTo(p, x, y) : nxOnCurve ? Typr.U.P.qcurveTo(p, x, y, gl.xs[nx], gl.ys[nx]) : Typr.U.P.qcurveTo(p, x, y, (x + gl.xs[nx]) / 2, (y + gl.ys[nx]) / 2);
      }
      Typr.U.P.closePath(p);
    }
  }, Typr.U._compoGlyph = function (gl, font, p) {
    for (var j = 0; j < gl.parts.length; j++) {
      var path = { cmds: [], crds: [] }, prt = gl.parts[j];
      Typr.U._drawGlyf(prt.glyphIndex, font, path);
      for (var m = prt.m, i = 0; i < path.crds.length; i += 2) {
        var x = path.crds[i], y = path.crds[i + 1];
        p.crds.push(x * m.a + y * m.b + m.tx), p.crds.push(x * m.c + y * m.d + m.ty);
      }
      for (i = 0; i < path.cmds.length; i++)
        p.cmds.push(path.cmds[i]);
    }
  }, Typr.U._getGlyphClass = function (g, cd) {
    var intr = Typr._lctf.getInterval(cd, g);
    return -1 == intr ? 0 : cd[intr + 2];
  }, Typr.U.getPairAdjustment = function (font, g1, g2) {
    if (font.GPOS) {
      for (var ltab = null, i = 0; i < font.GPOS.featureList.length; i++) {
        var fl = font.GPOS.featureList[i];
        if ("kern" == fl.tag)
          for (var j = 0; j < fl.tab.length; j++)
            2 == font.GPOS.lookupList[fl.tab[j]].ltype && (ltab = font.GPOS.lookupList[fl.tab[j]]);
      }
      if (ltab)
        for (i = 0; i < ltab.tabs.length; i++) {
          var tab = ltab.tabs[i], ind = Typr._lctf.coverageIndex(tab.coverage, g1);
          if (-1 != ind) {
            if (1 == tab.format) {
              var right = tab.pairsets[ind];
              for (j = 0; j < right.length; j++)
                right[j].gid2 == g2 && (adj = right[j]);
              if (null == adj)
                continue;
            } else if (2 == tab.format)
              var c1 = Typr.U._getGlyphClass(g1, tab.classDef1), c2 = Typr.U._getGlyphClass(g2, tab.classDef2), adj = tab.matrix[c1][c2];
            return adj.val1[2];
          }
        }
    }
    if (font.kern) {
      var ind1 = font.kern.glyph1.indexOf(g1);
      if (-1 != ind1) {
        var ind2 = font.kern.rval[ind1].glyph2.indexOf(g2);
        if (-1 != ind2)
          return font.kern.rval[ind1].vals[ind2];
      }
    }
    return 0;
  }, Typr.U.stringToGlyphs = function (font, str) {
    for (var gls = [], i = 0; i < str.length; i++) {
      var cc = str.codePointAt(i);
      cc > 65535 && i++, gls.push(Typr.U.codeToGlyph(font, cc));
    }
    var gsub = font.GSUB;
    if (null == gsub)
      return gls;
    for (var llist = gsub.lookupList, flist = gsub.featureList, wsep = '\n	" ,.:;!?()  ،', R = "آأؤإاةدذرزوٱٲٳٵٶٷڈډڊڋڌڍڎڏڐڑڒړڔڕږڗژڙۀۃۄۅۆۇۈۉۊۋۍۏےۓەۮۯܐܕܖܗܘܙܞܨܪܬܯݍݙݚݛݫݬݱݳݴݸݹࡀࡆࡇࡉࡔࡧࡩࡪࢪࢫࢬࢮࢱࢲࢹૅેૉ૊૎૏ૐ૑૒૝ૡ૤૯஁ஃ஄அஉ஌எஏ஑னப஫஬", ci = 0; ci < gls.length; ci++) {
      var gl = gls[ci], slft = 0 == ci || -1 != wsep.indexOf(str[ci - 1]), srgt = ci == gls.length - 1 || -1 != wsep.indexOf(str[ci + 1]);
      slft || -1 == R.indexOf(str[ci - 1]) || (slft = true), srgt || -1 == R.indexOf(str[ci]) || (srgt = true), srgt || -1 == "ꡲ્૗".indexOf(str[ci + 1]) || (srgt = true), slft || -1 == "ꡲ્૗".indexOf(str[ci]) || (slft = true);
      var feat = null;
      feat = slft ? srgt ? "isol" : "init" : srgt ? "fina" : "medi";
      for (var fi = 0; fi < flist.length; fi++)
        if (flist[fi].tag == feat)
          for (var ti = 0; ti < flist[fi].tab.length; ti++) {
            1 == (tab = llist[flist[fi].tab[ti]]).ltype && Typr.U._applyType1(gls, ci, tab);
          }
    }
    var cligs = ["rlig", "liga", "mset"];
    for (ci = 0; ci < gls.length; ci++) {
      gl = gls[ci];
      var rlim = Math.min(3, gls.length - ci - 1);
      for (fi = 0; fi < flist.length; fi++) {
        var fl = flist[fi];
        if (-1 != cligs.indexOf(fl.tag)) {
          for (ti = 0; ti < fl.tab.length; ti++)
            for (var tab = llist[fl.tab[ti]], j = 0; j < tab.tabs.length; j++)
              if (null != tab.tabs[j]) {
                var ind = Typr._lctf.coverageIndex(tab.tabs[j].coverage, gl);
                if (-1 != ind) {
                  if (4 == tab.ltype)
                    for (var vals = tab.tabs[j].vals[ind], k = 0; k < vals.length; k++) {
                      var lig = vals[k], rl = lig.chain.length;
                      if (!(rl > rlim)) {
                        for (var good = true, l = 0; l < rl; l++)
                          lig.chain[l] != gls[ci + (1 + l)] && (good = false);
                        if (good) {
                          gls[ci] = lig.nglyph;
                          for (l = 0; l < rl; l++)
                            gls[ci + l + 1] = -1;
                        }
                      }
                    }
                  else if (5 == tab.ltype) {
                    var ltab = tab.tabs[j];
                    if (2 != ltab.fmt)
                      continue;
                    var cind = Typr._lctf.getInterval(ltab.cDef, gl), cls = ltab.cDef[cind + 2], scs = ltab.scset[cls];
                    for (i = 0; i < scs.length; i++) {
                      var sc = scs[i], inp = sc.input;
                      if (!(inp.length > rlim)) {
                        for (good = true, l = 0; l < inp.length; l++) {
                          var cind2 = Typr._lctf.getInterval(ltab.cDef, gls[ci + 1 + l]);
                          if (-1 == cind && ltab.cDef[cind2 + 2] != inp[l]) {
                            good = false;
                            break;
                          }
                        }
                        if (good) {
                          var lrs = sc.substLookupRecords;
                          for (k = 0; k < lrs.length; k += 2)
                            lrs[k], lrs[k + 1];
                        }
                      }
                    }
                  }
                }
              }
        }
      }
    }
    return gls;
  }, Typr.U._applyType1 = function (gls, ci, tab) {
    for (var gl = gls[ci], j = 0; j < tab.tabs.length; j++) {
      var ttab = tab.tabs[j], ind = Typr._lctf.coverageIndex(ttab.coverage, gl);
      -1 != ind && (1 == ttab.fmt ? gls[ci] = gls[ci] + ttab.delta : gls[ci] = ttab.newg[ind]);
    }
  }, Typr.U.glyphsToPath = function (font, gls, clr) {
    for (var tpath = { cmds: [], crds: [] }, x = 0, i = 0; i < gls.length; i++) {
      var gid = gls[i];
      if (-1 != gid) {
        for (var gid2 = i < gls.length - 1 && -1 != gls[i + 1] ? gls[i + 1] : 0, path = Typr.U.glyphToPath(font, gid), j = 0; j < path.crds.length; j += 2)
          tpath.crds.push(path.crds[j] + x), tpath.crds.push(path.crds[j + 1]);
        clr && tpath.cmds.push(clr);
        for (j = 0; j < path.cmds.length; j++)
          tpath.cmds.push(path.cmds[j]);
        clr && tpath.cmds.push("X"), x += font.hmtx.aWidth[gid], i < gls.length - 1 && (x += Typr.U.getPairAdjustment(font, gid, gid2));
      }
    }
    return tpath;
  }, Typr.U.pathToSVG = function (path, prec) {
    null == prec && (prec = 5);
    for (var out = [], co = 0, lmap = { M: 2, L: 2, Q: 4, C: 6 }, i = 0; i < path.cmds.length; i++) {
      var cmd = path.cmds[i], cn = co + (lmap[cmd] ? lmap[cmd] : 0);
      for (out.push(cmd); co < cn;) {
        var c = path.crds[co++];
        out.push(parseFloat(c.toFixed(prec)) + (co == cn ? "" : " "));
      }
    }
    return out.join("");
  }, Typr.U.pathToContext = function (path, ctx) {
    for (var c = 0, crds = path.crds, j = 0; j < path.cmds.length; j++) {
      var cmd = path.cmds[j];
      "M" == cmd ? (ctx.moveTo(crds[c], crds[c + 1]), c += 2) : "L" == cmd ? (ctx.lineTo(crds[c], crds[c + 1]), c += 2) : "C" == cmd ? (ctx.bezierCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3], crds[c + 4], crds[c + 5]), c += 6) : "Q" == cmd ? (ctx.quadraticCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3]), c += 4) : "#" == cmd.charAt(0) ? (ctx.beginPath(), ctx.fillStyle = cmd) : "Z" == cmd ? ctx.closePath() : "X" == cmd && ctx.fill();
    }
  }, Typr.U.P = {}, Typr.U.P.moveTo = function (p, x, y) {
    p.cmds.push("M"), p.crds.push(x, y);
  }, Typr.U.P.lineTo = function (p, x, y) {
    p.cmds.push("L"), p.crds.push(x, y);
  }, Typr.U.P.curveTo = function (p, a, b, c, d, e, f) {
    p.cmds.push("C"), p.crds.push(a, b, c, d, e, f);
  }, Typr.U.P.qcurveTo = function (p, a, b, c, d) {
    p.cmds.push("Q"), p.crds.push(a, b, c, d);
  }, Typr.U.P.closePath = function (p) {
    p.cmds.push("Z");
  }, Typr.U._drawCFF = function (cmds, state, font, p) {
    for (var stack = state.stack, nStems = state.nStems, haveWidth = state.haveWidth, width = state.width, open = state.open, i = 0, x = state.x, y = state.y, c1x = 0, c1y = 0, c2x = 0, c2y = 0, c3x = 0, c3y = 0, c4x = 0, c4y = 0, jpx = 0, jpy = 0, o = { val: 0, size: 0 }; i < cmds.length;) {
      Typr.CFF.getCharString(cmds, i, o);
      var v = o.val;
      if (i += o.size, "o1" == v || "o18" == v)
        stack.length % 2 != 0 && !haveWidth && (width = stack.shift() + font.Private.nominalWidthX), nStems += stack.length >> 1, stack.length = 0, haveWidth = true;
      else if ("o3" == v || "o23" == v) {
        stack.length % 2 != 0 && !haveWidth && (width = stack.shift() + font.Private.nominalWidthX), nStems += stack.length >> 1, stack.length = 0, haveWidth = true;
      } else if ("o4" == v)
        stack.length > 1 && !haveWidth && (width = stack.shift() + font.Private.nominalWidthX, haveWidth = true), open && Typr.U.P.closePath(p), y += stack.pop(), Typr.U.P.moveTo(p, x, y), open = true;
      else if ("o5" == v)
        for (; stack.length > 0;)
          x += stack.shift(), y += stack.shift(), Typr.U.P.lineTo(p, x, y);
      else if ("o6" == v || "o7" == v)
        for (var count = stack.length, isX = "o6" == v, j = 0; j < count; j++) {
          var sval = stack.shift();
          isX ? x += sval : y += sval, isX = !isX, Typr.U.P.lineTo(p, x, y);
        }
      else if ("o8" == v || "o24" == v) {
        count = stack.length;
        for (var index = 0; index + 6 <= count;)
          c1x = x + stack.shift(), c1y = y + stack.shift(), c2x = c1x + stack.shift(), c2y = c1y + stack.shift(), x = c2x + stack.shift(), y = c2y + stack.shift(), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y), index += 6;
        "o24" == v && (x += stack.shift(), y += stack.shift(), Typr.U.P.lineTo(p, x, y));
      } else {
        if ("o11" == v)
          break;
        if ("o1234" == v || "o1235" == v || "o1236" == v || "o1237" == v)
          "o1234" == v && (c1y = y, c2x = (c1x = x + stack.shift()) + stack.shift(), jpy = c2y = c1y + stack.shift(), c3y = c2y, c4y = y, x = (c4x = (c3x = (jpx = c2x + stack.shift()) + stack.shift()) + stack.shift()) + stack.shift(), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy), Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y)), "o1235" == v && (c1x = x + stack.shift(), c1y = y + stack.shift(), c2x = c1x + stack.shift(), c2y = c1y + stack.shift(), jpx = c2x + stack.shift(), jpy = c2y + stack.shift(), c3x = jpx + stack.shift(), c3y = jpy + stack.shift(), c4x = c3x + stack.shift(), c4y = c3y + stack.shift(), x = c4x + stack.shift(), y = c4y + stack.shift(), stack.shift(), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy), Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y)), "o1236" == v && (c1x = x + stack.shift(), c1y = y + stack.shift(), c2x = c1x + stack.shift(), jpy = c2y = c1y + stack.shift(), c3y = c2y, c4x = (c3x = (jpx = c2x + stack.shift()) + stack.shift()) + stack.shift(), c4y = c3y + stack.shift(), x = c4x + stack.shift(), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy), Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y)), "o1237" == v && (c1x = x + stack.shift(), c1y = y + stack.shift(), c2x = c1x + stack.shift(), c2y = c1y + stack.shift(), jpx = c2x + stack.shift(), jpy = c2y + stack.shift(), c3x = jpx + stack.shift(), c3y = jpy + stack.shift(), c4x = c3x + stack.shift(), c4y = c3y + stack.shift(), Math.abs(c4x - x) > Math.abs(c4y - y) ? x = c4x + stack.shift() : y = c4y + stack.shift(), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy), Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y));
        else if ("o14" == v) {
          if (stack.length > 0 && !haveWidth && (width = stack.shift() + font.nominalWidthX, haveWidth = true), 4 == stack.length) {
            var adx = stack.shift(), ady = stack.shift(), bchar = stack.shift(), achar = stack.shift(), bind = Typr.CFF.glyphBySE(font, bchar), aind = Typr.CFF.glyphBySE(font, achar);
            Typr.U._drawCFF(font.CharStrings[bind], state, font, p), state.x = adx, state.y = ady, Typr.U._drawCFF(font.CharStrings[aind], state, font, p);
          }
          open && (Typr.U.P.closePath(p), open = false);
        } else if ("o19" == v || "o20" == v) {
          stack.length % 2 != 0 && !haveWidth && (width = stack.shift() + font.Private.nominalWidthX), nStems += stack.length >> 1, stack.length = 0, haveWidth = true, i += nStems + 7 >> 3;
        } else if ("o21" == v)
          stack.length > 2 && !haveWidth && (width = stack.shift() + font.Private.nominalWidthX, haveWidth = true), y += stack.pop(), x += stack.pop(), open && Typr.U.P.closePath(p), Typr.U.P.moveTo(p, x, y), open = true;
        else if ("o22" == v)
          stack.length > 1 && !haveWidth && (width = stack.shift() + font.Private.nominalWidthX, haveWidth = true), x += stack.pop(), open && Typr.U.P.closePath(p), Typr.U.P.moveTo(p, x, y), open = true;
        else if ("o25" == v) {
          for (; stack.length > 6;)
            x += stack.shift(), y += stack.shift(), Typr.U.P.lineTo(p, x, y);
          c1x = x + stack.shift(), c1y = y + stack.shift(), c2x = c1x + stack.shift(), c2y = c1y + stack.shift(), x = c2x + stack.shift(), y = c2y + stack.shift(), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
        } else if ("o26" == v)
          for (stack.length % 2 && (x += stack.shift()); stack.length > 0;)
            c1x = x, c1y = y + stack.shift(), x = c2x = c1x + stack.shift(), y = (c2y = c1y + stack.shift()) + stack.shift(), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
        else if ("o27" == v)
          for (stack.length % 2 && (y += stack.shift()); stack.length > 0;)
            c1y = y, c2x = (c1x = x + stack.shift()) + stack.shift(), c2y = c1y + stack.shift(), x = c2x + stack.shift(), y = c2y, Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
        else if ("o10" == v || "o29" == v) {
          var obj = "o10" == v ? font.Private : font;
          if (0 == stack.length)
            console.log("error: empty stack");
          else {
            var ind = stack.pop(), subr = obj.Subrs[ind + obj.Bias];
            state.x = x, state.y = y, state.nStems = nStems, state.haveWidth = haveWidth, state.width = width, state.open = open, Typr.U._drawCFF(subr, state, font, p), x = state.x, y = state.y, nStems = state.nStems, haveWidth = state.haveWidth, width = state.width, open = state.open;
          }
        } else if ("o30" == v || "o31" == v) {
          var count1 = stack.length, alternate = (index = 0, "o31" == v);
          for (index += count1 - (count = -3 & count1); index < count;)
            alternate ? (c1y = y, c2x = (c1x = x + stack.shift()) + stack.shift(), y = (c2y = c1y + stack.shift()) + stack.shift(), count - index == 5 ? (x = c2x + stack.shift(), index++) : x = c2x, alternate = false) : (c1x = x, c1y = y + stack.shift(), c2x = c1x + stack.shift(), c2y = c1y + stack.shift(), x = c2x + stack.shift(), count - index == 5 ? (y = c2y + stack.shift(), index++) : y = c2y, alternate = true), Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y), index += 4;
        } else {
          if ("o" == (v + "").charAt(0))
            throw console.log("Unknown operation: " + v, cmds), v;
          stack.push(v);
        }
      }
    }
    state.x = x, state.y = y, state.nStems = nStems, state.haveWidth = haveWidth, state.width = width, state.open = open;
  };
  const Typr$1 = getDefaultExportFromCjs(Typr), questionType = { "单选题": "0", "多选题": "1", "填空题": "2", "判断题": "3", "简答题": "4", "名词解释": "5", "论述题": "6", "计算题": "7" }, log = (data, type = "info") => {
    var _a;
    const style = `color: ${{ info: "orange", success: "green", error: "red" }[type]}; font-weight: bold;`;
    if (Array.isArray(data) || "object" == typeof data ? console.log(`%c${JSON.stringify(data, null, 2)}`, style) : console.log(`%c${data}`, style), defaultConfig$1.debugger) {
      const caller = (((_a = new Error().stack) == null ? void 0 : _a.split("\n")) || [])[2].trim();
      console.log(`${caller}`);
    }
  }, sleep = (time) => new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1e3 * time);
  }), waitIframeLoaded = (iframe, timeout = 30000) => new Promise((resolve) => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      var _a;
      if (Date.now() - startTime > timeout) {
        clearInterval(timer);
        console.warn(`⏱️ waitIframeLoaded 超时(${timeout / 1000}秒)，继续执行`);
        resolve();
        return;
      }
      iframe.contentDocument && "complete" === ((_a = iframe.contentDocument) == null ? void 0 : _a.readyState) ? (clearInterval(timer), resolve()) : iframe.addEventListener("load", () => {
        clearInterval(timer), resolve();
      });
    }, 100);
  }), waitElementLoaded = (iframeWindow, selector, timeout = 30000) => new Promise((resolve) => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      if (Date.now() - startTime > timeout) {
        clearInterval(timer);
        console.warn(`⏱️ waitElementLoaded 超时(${timeout / 1000}秒)，继续执行，选择器: ${selector}`);
        resolve();
        return;
      }
      iframeWindow.document.querySelector(selector) && (clearInterval(timer), resolve());
    }, 100);
  }), removeHtml = (html) => null == html ? "" : html.replace(/<((?!img|sub|sup|br)[^>]+)>/g, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").replace(/<br\s*\/?>/g, "\n").replace(/<img.*?src="(.*?)".*?>/g, '<img src="$1"/>').trim(), cl = (str) => str.replace(/^【.*?】\s*/, "").replace(/\s*（\d+\.\d+分）$/, ""), getQuestion = (type, html) => {
    try {
      let questionHtml, questionText, questionTypeId, optionHtml, tokenHtml, workType, optionText, index, images, imageUrls;
      switch (type) {
        case "1":
          workType = "zj";
          questionHtml = Array.from(html.querySelectorAll(".clearfix .fontLabel"));
          if (!questionHtml || questionHtml.length === 0) return null;
          questionText = cl(removeHtml(questionHtml[0].innerHTML));
          const answerTypeInput = html.querySelectorAll("input[name^=answertype]")[0];
          if (!answerTypeInput) return null;
          questionTypeId = answerTypeInput.value;
          optionHtml = [];
          tokenHtml = html.innerHTML;
          optionText = [];

          // 尝试多种方式获取选项
          let ulElement = html.querySelectorAll("ul")[0];
          if (ulElement) {
            optionHtml = Array.from(ulElement.querySelectorAll("li .after"));
          }

          if (optionHtml.length === 0) {
            optionHtml = Array.from(html.querySelectorAll(".answer_p"));
          }

          if (optionHtml.length === 0) {
            optionHtml = Array.from(html.querySelectorAll(".tkTopic"));
          }

          optionHtml.forEach(function (item) {
            optionText.push(removeHtml(item.innerHTML));
          });

          // 检测图片
          images = Array.from(html.querySelectorAll("img"));
          imageUrls = [];
          if (images.length > 0) {
            images.forEach(img => {
              const src = img.src;
              if (src) {
                imageUrls.push(src);
              }
            });
            console.log(`🔍 [getQuestion] case "1" 检测到图片数量: ${imageUrls.length}`);
          }

          console.log(`🔍 [getQuestion] case "1" 获取到选项数量: ${optionText.length}`);
          return { question: questionText, options: optionText, type: questionTypeId, questionData: tokenHtml, workType, images: imageUrls };
        case "2":
          workType = "zy";
          questionHtml = Array.from(html.querySelectorAll(".mark_name"));
          if (!questionHtml || questionHtml.length === 0) return null;
          index = questionHtml[0].innerHTML.indexOf("</span>");
          questionText = cl(removeHtml(questionHtml[0].innerHTML.substring(index + 7)));
          const spanElement = questionHtml[0].getElementsByTagName("span")[0];
          if (spanElement) {
            spanElement.innerHTML.replace("(", "").replace(")", "").split(",")[0];
          }
          const answerTypeInput2 = html.querySelectorAll("input[name^=answertype]")[0];
          if (!answerTypeInput2) return null;
          questionTypeId = answerTypeInput2.value;
          optionHtml = Array.from(html.querySelectorAll(".answer_p"));
          tokenHtml = html.innerHTML;
          optionText = [];
          for (let i = 0; i < optionHtml.length; i++)
            optionText.push(removeHtml(optionHtml[i].innerHTML));

          // 检测图片
          images = Array.from(html.querySelectorAll("img"));
          imageUrls = [];
          if (images.length > 0) {
            images.forEach(img => {
              const src = img.src;
              if (src) {
                imageUrls.push(src);
              }
            });
            console.log(`🔍 [getQuestion] case "2" 检测到图片数量: ${imageUrls.length}`);
          }

          return { question: questionText, options: optionText, type: questionTypeId, questionData: tokenHtml, workType, images: imageUrls };
        case "3":
          workType = "ks";
          questionHtml = Array.from(html.getElementsByClassName("mark_name colorDeep"));
          if (!questionHtml || questionHtml.length === 0) return null;
          index = questionHtml[0].innerHTML.indexOf("</span>");
          questionText = cl(removeHtml(questionHtml[0].innerHTML.substring(index + 7)));
          const spanElement2 = questionHtml[0].getElementsByTagName("span")[0];
          if (spanElement2) {
            spanElement2.innerHTML.replace("(", "").replace(")", "").split(",")[0];
          }
          const typeInputs = html.querySelectorAll("input[name^=type]");
          if (!typeInputs || typeInputs.length < 2) return null;
          questionTypeId = typeInputs[1].value;
          optionHtml = Array.from(html.getElementsByClassName("answer_p"));
          const markTable = html.getElementsByClassName("mark_table")[0];
          if (!markTable) return null;
          tokenHtml = markTable.innerHTML;
          optionText = [];
          for (let i = 0; i < optionHtml.length; i++)
            optionText.push(removeHtml(optionHtml[i].innerHTML));

          // 检测图片
          images = Array.from(html.querySelectorAll("img"));
          imageUrls = [];
          if (images.length > 0) {
            images.forEach(img => {
              const src = img.src;
              if (src) {
                imageUrls.push(src);
              }
            });
            console.log(`🔍 [getQuestion] case "3" 检测到图片数量: ${imageUrls.length}`);
          }

          return { question: questionText, options: optionText, type: questionTypeId, questionData: tokenHtml, workType, images: imageUrls };
      }
      return null;
    } catch (e) {
      console.warn("❌ [getQuestion] 解析题目失败:", e.message);
      return null;
    }
  }, decode = (iframeWindow) => {
    var _a;
    const styleElements = iframeWindow.document.querySelectorAll("style");
    let tipElement = null;
    if (styleElements.forEach((styleElement) => {
      var _a2;
      -1 !== ((_a2 = styleElement.textContent) == null ? void 0 : _a2.indexOf("font-cxsecret")) && (tipElement = styleElement);
    }), !tipElement)
      return;
    const fontMatch = (_a = tipElement.textContent) == null ? void 0 : _a.match(/base64,([\w\W]+?)'/);
    if (!fontMatch)
      return;
    const fontData = ((base64) => {
      const decodedData = atob(base64), array = new Uint8Array(decodedData.length);
      for (let i = 0; i < decodedData.length; i++)
        array[i] = decodedData.charCodeAt(i);
      return array;
    })(fontMatch[1]), font = Typr$1.parse(fontData), table = JSON.parse(_GM_getResourceText("ttf"));
    let text = {};
    for (let i = 19968; i < 40870; i++) {
      let t = Typr$1.U.codeToGlyph(font, i);
      t && (t = Typr$1.U.glyphToPath(font, t), t = md5(JSON.stringify(t)).slice(24), text[i] = table[t]);
    }
    iframeWindow.document.querySelectorAll(".font-cxsecret").forEach((fontElement) => {
      let html = fontElement.innerHTML;
      Object.keys(text).forEach((key) => {
        const regex = new RegExp(String.fromCharCode(key), "g");
        html = html.replace(regex, String.fromCharCode(text[key]));
      }), fontElement.innerHTML = html, fontElement.classList.remove("font-cxsecret");
    });
  }, getAnswers = async (questionData, windowz = _unsafeWindow) => {
    let server = new ServerApi(windowz);
    const config = getConfig();

    console.log("🤖 [getAnswers] 开始获取答案");
    console.log("🤖 [getAnswers] 题目:", questionData.question?.substring(0, 50));
    console.log("🤖 [getAnswers] 题型:", questionData.type);
    console.log("🤖 [getAnswers] 选项数量:", questionData.options?.length);
    console.log("🤖 [getAnswers] 大模型配置: useLLM=", config.useLLM, ", llmApiUrl=", config.llmApiUrl ? "已配置" : "未配置", ", llmApiKey=", config.llmApiKey ? "已配置" : "未配置");

    if (!config.useLLM || !config.llmApiUrl || !config.llmApiKey) {
      console.log("❌ [getAnswers] 大模型未配置或未启用");
      return [{ form: "错误", answer: "请先配置大模型API" }];
    }

    const maxRetries = config.llmRetries || 5;
    let attempt = 0;
    let useChatMode = false; // 是否使用聊天模式

    while (attempt < maxRetries) {
      attempt++;
      console.log(`🤖 [getAnswers] 第 ${attempt} 次尝试调用大模型`);
      console.log(`🤖 [getAnswers] 当前模式: ${useChatMode ? "聊天模式" : "查询模式"}`);

      try {
        console.log("🤖 [getAnswers] 正在调用大模型...");

        // 如果是聊天模式，修改配置临时启用自定义提示词
        const originalUseCustomPrompt = config.useCustomPrompt;
        if (useChatMode) {
          config.useCustomPrompt = true;
          console.log("🤖 [getAnswers] 切换到聊天模式（使用自定义提示词）");
        }

        const llmAnswer = await server.getLLMAnswer(questionData);
        console.log("🤖 [getAnswers] 大模型返回:", llmAnswer);

        // 恢复原始配置
        config.useCustomPrompt = originalUseCustomPrompt;

        // 检查是否返回"no"或无效答案
        const isInvalidAnswer = !llmAnswer.answer ||
          llmAnswer.answer.includes("付费题库") ||
          llmAnswer.answer.includes("暂无答案") ||
          llmAnswer.answer.includes("no") ||
          llmAnswer.answer === "略" ||
          llmAnswer.answer.length === 0;

        if (!isInvalidAnswer) {
          // 检查答案是否重复
          if (typeof llmAnswer.answer === 'string') {
            const parts = llmAnswer.answer.split('');
            const uniqueChars = new Set(parts);
            if (uniqueChars.size < parts.length / 2) {
              console.log(`⚠️ [getAnswers] 检测到重复答案: ${llmAnswer.answer}`);
              console.log(`🤖 [getAnswers] 等待1秒后重试...`);
              await sleep(1);
              continue;
            }
          }

          try {
            const cacheKey = getAnswerCacheKey(md5, questionData);
            setCachedAnswer(cacheKey, llmAnswer.answer, 7200000, 1.0, "大模型");
          } catch (_) { }

          console.log("✅ [getAnswers] 成功获取答案:", llmAnswer.answer);
          return [llmAnswer];
        } else {
          console.log("⚠️ [getAnswers] 大模型返回无效答案:", llmAnswer.answer);

          // 如果是查询模式返回无效答案，切换到聊天模式
          if (!useChatMode && attempt < maxRetries - 1) {
            console.log("🔄 [getAnswers] 查询模式返回无效答案，切换到聊天模式");
            useChatMode = true;
            continue; // 立即重试，使用聊天模式
          }

          if (attempt < maxRetries) {
            console.log(`🤖 [getAnswers] 等待1秒后重试...`);
            await sleep(1);
          }
        }
      } catch (e) {
        console.log("❌ [getAnswers] 大模型调用失败:", e.message);
        if (attempt < maxRetries) {
          console.log(`🤖 [getAnswers] 等待1秒后重试...`);
          await sleep(1);
        }
      }
    }

    console.log(`❌ [getAnswers] 达到最大重试次数 ${maxRetries}，返回无效答案`);
    return [{ form: "大模型", answer: "暂无答案" }];
  }, fillAnswer = (answer, questionData, html, iframeWindow) => {
    console.log("📝 [fillAnswer] 开始处理答案");
    console.log("📝 [fillAnswer] 原始答案:", answer);
    console.log("📝 [fillAnswer] 题型:", questionData.type);
    console.log("📝 [fillAnswer] 选项:", questionData.options);
    shouldDebug() && this.askStore.log(`🔍 fillAnswer开始 - 答案数量: ${answer.length}`, "debug");

    answer = answer.filter((item) => item.answer.length > 0), shouldDebug() && console.log("fillAnswer:", answer);
    shouldDebug() && this.askStore.log(`🔍 过滤后答案数量: ${answer.length}`, "debug");

    if (answer.length === 0) {
      console.log("❌ [fillAnswer] 没有有效答案");
      shouldDebug() && this.askStore.log(`❌ 没有有效答案`, "debug");
      return false;
    }

    // 标准化判断题答案 - 双向转换
    shouldDebug() && this.askStore.log(`🔄 开始标准化判断题答案`, "debug");
    for (let i = 0; i < answer.length; i++) {
      if ("string" == typeof answer[i].answer && questionData.type === "3") {
        let ansText = answer[i].answer.trim();
        shouldDebug() && this.askStore.log(`🔍 标准化判断题答案: ${ansText}`, "debug");
        // 双向转换：正确 ↔ 对，错误 ↔ 错
        if (ansText === "对") {
          answer[i].answer = "正确";
          shouldDebug() && this.askStore.log(`✅ 标准化为: 正确`, "debug");
        } else if (ansText === "错") {
          answer[i].answer = "错误";
          shouldDebug() && this.askStore.log(`✅ 标准化为: 错误`, "debug");
        } else if (ansText === "正确") {
          answer[i].answer = "正确";
        } else if (ansText === "错误") {
          answer[i].answer = "错误";
        }
      }
    }

    for (let i = 0; i < answer.length; i++) {
      if ("string" == typeof answer[i].answer) {
        if (-1 !== answer[i].answer.indexOf("付费题库") || -1 !== answer[i].answer.indexOf("暂无答案") || "略" == answer[i].answer) {
          shouldDebug() && this.askStore.log(`⚠️ 跳过无效答案: ${answer[i].answer}`, "debug");
          continue;
        }
        let ans = answer[i].answer;
        shouldDebug() && this.askStore.log(`🔍 处理答案[${i}]: ${ans}`, "debug");

        if (questionData.type === "0") {
          shouldDebug() && this.askStore.log(`🔍 单选题整体匹配尝试`, "debug");
          let directMatch = matchAnswer([ans], questionData.options, questionData.question);
          if (directMatch.length > 0) {
            console.log("📝 [fillAnswer] 单选题整体匹配成功，不分割");
            shouldDebug() && this.askStore.log(`✅ 单选题整体匹配成功: ${directMatch.join(", ")}`, "debug");
            answer[i].answer = [ans];
            let tmp = setAnswer(answer[i].answer, questionData, html, iframeWindow);
            if (tmp) return tmp;
          } else {
            shouldDebug() && this.askStore.log(`❌ 单选题整体匹配失败`, "debug");
          }
        }

        shouldDebug() && this.askStore.log(`🔍 开始分割答案`, "debug");
        if (ans.includes("#")) {
          ans = ans.split("#").map(a => a.trim()).filter(a => a.length > 0);
          shouldDebug() && this.askStore.log(`🔍 使用#分割: ${ans.join(", ")}`, "debug");
        } else if (ans.includes("；")) {
          ans = ans.split("；").map(a => a.trim()).filter(a => a.length > 0);
          shouldDebug() && this.askStore.log(`🔍 使用；分割: ${ans.join(", ")}`, "debug");
        } else if (ans.includes(";")) {
          ans = ans.split(";").map(a => a.trim()).filter(a => a.length > 0);
          shouldDebug() && this.askStore.log(`🔍 使用;分割: ${ans.join(", ")}`, "debug");
        } else if (ans.includes("、") && questionData.type === "1") {
          ans = ans.split("、").map(a => a.trim()).filter(a => a.length > 0);
        } else if (ans.includes("，") && questionData.type === "1") {
          ans = ans.split("，").map(a => a.trim()).filter(a => a.length > 0);
        } else if (ans.includes(",") && questionData.type === "1") {
          ans = ans.split(",").map(a => a.trim()).filter(a => a.length > 0);
        } else {
          ans = [ans];
        }
        ans = [...new Set(ans)];
        answer[i].answer = ans;
        shouldDebug() && console.log("答案分割后:", ans, "题型:", questionData.type);
      }
      let tmp = setAnswer(answer[i].answer, questionData, html, iframeWindow);
      if (tmp)
        return tmp;
    }
    return false;
  }, setAnswer = (answer, questionData, html, iframeWindow) => {
    console.log("🎯 [setAnswer] 开始选择答案");
    console.log("🎯 [setAnswer] 答案:", answer);
    console.log("🎯 [setAnswer] 题型:", questionData.type);

    switch (questionData.type) {
      case "0":
      case "1":
        console.log("🎯 [setAnswer] 处理单选/多选题");
        const matchArr = matchAnswer(answer, questionData.options, questionData.question);
        console.log("🎯 [setAnswer] 匹配结果:", matchArr);

        if (matchArr.length === 0) {
          console.log("❌ [setAnswer] 没有找到匹配的答案");
          return false;
        }

        console.log("🎯 [setAnswer] 清除当前选择");
        matchArr.length > 0 && clearCurrent(html, iframeWindow);

        const tkOptionsUl = html.querySelector(".tkItem_ul");
        if (tkOptionsUl) {
          formatConsoleLog("处理视频弹题选项", "info", "视频弹题");
          for (var i = 0; i < matchArr.length; i++) {
            formatConsoleLog(`选择选项索引: ${matchArr[i]}`, "info", "视频弹题");
            const optionLi = tkOptionsUl.querySelectorAll("li")[matchArr[i]];
            if (optionLi) {
              console.log("🎯 [setAnswer] 找到选项元素:", optionLi.textContent.trim());
              const simulateClick = (el) => {
                if (!el) return;
                const events = ['mousedown', 'mouseup', 'click'];
                events.forEach(eventType => {
                  const event = new MouseEvent(eventType, {
                    bubbles: true,
                    cancelable: true,
                    view: iframeWindow || window
                  });
                  el.dispatchEvent(event);
                });
              };

              console.log("🎯 [setAnswer] 模拟点击选项");
              simulateClick(optionLi);

              const tkRadio = optionLi.querySelector(".tkRadio");
              if (tkRadio) {
                console.log("🎯 [setAnswer] 点击tkRadio");
                simulateClick(tkRadio);
              }

              const label = optionLi.querySelector("label");
              if (label) {
                console.log("🎯 [setAnswer] 点击label");
                simulateClick(label);
              }

              const inputRadio = optionLi.querySelector("input[type='radio']");
              if (inputRadio) {
                console.log("🎯 [setAnswer] 设置radio选中状态");
                inputRadio.checked = true;
                inputRadio.dispatchEvent(new Event('change', { bubbles: true }));
                inputRadio.dispatchEvent(new Event('click', { bubbles: true }));
              }

              const inputCheckbox = optionLi.querySelector("input[type='checkbox']");
              if (inputCheckbox) {
                console.log("🎯 [setAnswer] 设置checkbox选中状态");
                inputCheckbox.checked = true;
                inputCheckbox.dispatchEvent(new Event('change', { bubbles: true }));
                inputCheckbox.dispatchEvent(new Event('click', { bubbles: true }));
              }

              const quizOpt = optionLi.querySelector(".ans-videoquiz-opt");
              if (quizOpt) {
                formatConsoleLog("点击quizOpt", "info", "视频弹题");
                simulateClick(quizOpt);
              }

              const tkCheck = optionLi.querySelector(".tkCheck");
              if (tkCheck) {
                console.log("🎯 [setAnswer] 点击tkCheck");
                simulateClick(tkCheck);
              }

              console.log("🎯 [setAnswer] 选项点击完成");
            }
          }
        } else {
          console.log("🎯 [setAnswer] 处理普通题目选项");
          for (var i = 0; i < matchArr.length; i++)
            console.log("🎯 [setAnswer] 选择选项索引:", matchArr[i]), $$1(html).find("ul:eq(0) li :radio,:checkbox,textarea").eq(matchArr[i]).click(), $$1(html).find(".answerBg").eq(matchArr[i]).click(), $$1(html).find("li").eq(matchArr[i]).click();
        }
        console.log("🎯 [setAnswer] 答案选择完成");
        return matchArr.length > 0 ? answer : false;
      case "3":
        console.log("🎯 [setAnswer] 处理判断题");
        // 标准化判断题答案
        let normalizedAnswer = answer;
        if (answer instanceof Array && answer.length > 0) {
          normalizedAnswer = answer[0];
        }
        if (typeof normalizedAnswer === 'string') {
          normalizedAnswer = normalizedAnswer.trim();
          if (normalizedAnswer === '对') normalizedAnswer = '正确';
          if (normalizedAnswer === '错') normalizedAnswer = '错误';
        }
        console.log("🎯 [setAnswer] 标准化后的答案:", normalizedAnswer);

        console.log("🎯 [setAnswer] 清除当前选择");
        return clearCurrent(html, iframeWindow), $$1(html).find("ul:eq(0) li :radio,:checkbox,textarea").each(function () {
          "true" == $$1(this).val() ? normalizedAnswer.match(/(^|,)(True|true|正确|是|对|√|T|ri)(,|$)/) && ($$1(this).click(), console.log("🎯 [setAnswer] 选择正确选项")) : normalizedAnswer.match(/(^|,)(False|false|错误|否|错|×|F|wr)(,|$)/) && ($$1(this).click(), console.log("🎯 [setAnswer] 选择错误选项"));
        }), $$1(html).find(".answerBg").each(function () {
          "true" == $$1(this).find(".num_option").attr("data") ? normalizedAnswer.match(/(^|,)(True|true|正确|是|对|√|T|ri)(,|$)/) && $$1(this).click() : normalizedAnswer.match(/(^|,)(False|false|错误|否|错|×|F|wr)(,|$)/) && $$1(this).click();
        }), !!($$1(html).find("ul:eq(0) li :radio,:checkbox,textarea").is(":checked") || $$1(html).find(".check_answer").length > 0 || $$1(html).find(".check_answer_dx").length > 0) && answer;
      case "2":
      case "9":
      case "4":
      case "5":
      case "6":
      case "7":
        console.log("🎯 [setAnswer] 处理主观题/填空题");
        return $$1(html).find("textarea").length == answer.length && (clearCurrent(html, iframeWindow), $$1(html).find("textarea").each(function (index) {
          console.log("🎯 [setAnswer] 填充第", index + 1, "个文本框");
          iframeWindow.UE.getEditor($$1(this).attr("name")).ready(function () {
            this.setContent(answer[index].replace(/第.空:/g, ""));
          });
        }), answer);
      default:
        console.log("❌ [setAnswer] 未知题型:", questionData.type);
        return false;
    }
  }, matchAnswer = (answer, options, question = "") => {
    // 匹配结果缓存，用于优化性能
    const matchCache = new Map();
    console.log("🔍 matchAnswer - 答案:", answer, "选项:", options, "问题:", question);

    const normQuestion = normalizeString(question);

    answer = ((answer2) => {
      if (answer2 instanceof Array) {
        answer2 = answer2.filter(function (item) {
          return null !== item;
        });
        for (let i2 = 0; i2 < answer2.length; i2++)
          answer2[i2] = removeHtml(answer2[i2]);
      } else
        "string" == typeof answer2 && (answer2 = cl(answer2));
      return answer2;
    })(answer);

    const matchArr = [];
    const matched = new Set();

    // 第一阶段：精确匹配（最高优先级）
    for (let i = 0; i < answer.length; i++) {
      const ans = answer[i];

      // 检查缓存
      const cacheKey = `${ans}_${options.join('|')}`;
      if (matchCache.has(cacheKey)) {
        const cachedResult = matchCache.get(cacheKey);
        if (cachedResult !== -1 && !matched.has(cachedResult)) {
          matchArr.push(cachedResult);
          matched.add(cachedResult);
          console.log("✅ 缓存匹配 - 答案:", ans, "选项索引:", cachedResult);
          continue;
        }
      }

      const normAnswer = normalizeString(ans);

      if (normQuestion && normAnswer.includes(normQuestion) && normAnswer.length <= normQuestion.length + 5) {
        console.log("⚠️ 跳过问题本身作为答案:", ans);
        continue;
      }

      for (let j = 0; j < options.length; j++) {
        if (matched.has(j)) continue;

        const opt = options[j];
        const normOption = normalizeString(opt);

        if (normQuestion && normOption.includes(normQuestion) && normOption.length <= normQuestion.length + 5) {
          console.log("⚠️ 跳过问题本身作为选项:", opt);
          continue;
        }

        let exactMatch = false;
        if (ans == opt) {
          exactMatch = true;
        } else {
          const ansText = ans.trim();
          const optText = opt.trim();
          if ((ansText === "对" && optText === "正确") ||
            (ansText === "正确" && optText === "对") ||
            (ansText === "错" && optText === "错误") ||
            (ansText === "错误" && optText === "错") ||
            (ansText === "对" && optText === "√") ||
            (ansText === "错" && optText === "×") ||
            (ansText === "正确" && optText === "√") ||
            (ansText === "错误" && optText === "×")) {
            exactMatch = true;
          }
        }

        if (exactMatch) {
          matchArr.push(j);
          matched.add(j);
          matchCache.set(cacheKey, j); // 缓存结果
          console.log("✅ 精确匹配 - 答案:", ans, "选项索引:", j);
          break;
        }
      }
    }

    if (matchArr.length === answer.length) {
      console.log("✅ 精确匹配全部成功", matchArr);
      return matchArr;
    }

    // 第二阶段：包含匹配
    for (let i = 0; i < answer.length; i++) {
      if (matched.has(i)) continue;

      const ans = answer[i];
      const normAnswer = normalizeString(ans);

      for (let j = 0; j < options.length; j++) {
        if (matched.has(j)) continue;

        const opt = options[j];
        const normOption = normalizeString(opt);

        if (normAnswer.includes(normOption) && normOption.length >= 2) {
          matchArr.push(j);
          matched.add(j);
          console.log("✅ 包含匹配 - 答案包含选项 - 答案:", ans, "选项:", opt, "索引:", j);
          break;
        }

        if (normOption.includes(normAnswer) && normAnswer.length >= 2) {
          matchArr.push(j);
          matched.add(j);
          console.log("✅ 包含匹配 - 选项包含答案 - 答案:", ans, "选项:", opt, "索引:", j);
          break;
        }
      }
    }

    if (matchArr.length === answer.length) {
      console.log("✅ 包含匹配全部成功", matchArr);
      return matchArr;
    }

    // 第三阶段：模糊匹配（性能优化：只对未匹配的答案进行模糊匹配）
    const fuzzyMatches = [];

    for (let i = 0; i < answer.length; i++) {
      if (matched.has(i)) continue;

      const ans = answer[i];
      let bestMatch = { optionIndex: -1, similarity: 0, method: "none" };

      for (let j = 0; j < options.length; j++) {
        if (matched.has(j)) continue;

        const opt = options[j];
        const result = fuzzyMatch(ans, opt, 0.4);

        if (result.match && result.similarity > bestMatch.similarity) {
          bestMatch = {
            optionIndex: j,
            similarity: result.similarity,
            method: result.method
          };
        }
      }

      if (bestMatch.optionIndex !== -1) {
        fuzzyMatches.push({
          answerIndex: i,
          optionIndex: bestMatch.optionIndex,
          similarity: bestMatch.similarity,
          method: bestMatch.method
        });
        console.log("🔍 找到模糊匹配 - 答案:", ans, "选项:", options[bestMatch.optionIndex], "相似度:", bestMatch.similarity.toFixed(2));
      } else {
        console.log("⚠️ 未找到匹配 - 答案:", ans);
      }
    }

    fuzzyMatches.sort((a, b) => b.similarity - a.similarity);

    const usedOptions = new Set(matched);
    for (const match of fuzzyMatches) {
      if (!usedOptions.has(match.optionIndex)) {
        matchArr.push(match.optionIndex);
        usedOptions.add(match.optionIndex);
      }
    }

    console.log("✅ 最终匹配结果 - 总答案:", answer.length, "已匹配:", matchArr.length, "索引:", matchArr);

    return matchArr;
  }, clearCurrent = (item, iframeWindow) => {
    $$1(item).find(".answerBg, .textDIV, .eidtDiv").each(function () {
      ($$1(this).find(".check_answer").length || $$1(this).find(".check_answer_dx").length) && $$1(this).click();
    }), $$1(item).find("textarea").each(function () {
      iframeWindow.UE.getEditor($$1(this).attr("name")).ready(function () {
        this.setContent("");
      });
    }), $$1(item).find(":radio, :checkbox").prop("checked", false), $$1(item).find("textarea").each(function () {
      iframeWindow.UE.getEditor($$1(this).attr("name")).ready(function () {
        this.setContent("");
      });
    });
  }, useAskStore = pinia$1.defineStore({
    id: "ask", state: () => ({ dialogVisible: false, count: 0, questionList: [], task: { name: "暂未加载", work: { questionList: [], inx: 0 }, video: [], log: [], status: "" } }), actions: {
      reset() {
        this.task.name = "暂未加载", this.task.work = { questionList: [], inx: 0 }, this.task.video = [], this.task.status = "", this.count = 0;
      }, select(index) {
        this.task.work.questionList[index].selected = true, this.task.work.inx = index;
        try {
          this.task.work.questionList[index].dom.scrollIntoView({ block: "center" });
        } catch (e) {
          log(e, "error");
        }
      }, get(index) {
        return this.task.work.questionList[index];
      }, insert(question) {
        this.task.work.questionList.push(question);
      }, update(index, question) {
        this.task.work.questionList[index] = question;
      }, log(msg, level = "info") {
        const time = (/* @__PURE__ */ new Date()).toLocaleTimeString();
        const formattedMsg = this.formatLogMessage(msg, level);
        this.task.log.length > 20 && this.task.log.shift(), this.task.log.push({ time, msg: formattedMsg, type: level });

        // 同时输出到控制台
        this.consoleLog(msg, level, time);
      }, formatLogMessage(msg, level) {
        const icons = {
          info: "ℹ️",
          success: "✅",
          warning: "⚠️",
          error: "❌",
          debug: "🔍"
        };
        const icon = icons[level] || icons.info;
        return `${icon} ${msg}`;
      }, consoleLog(msg, level, time) {
        const colors = {
          info: "color: #409EFF",
          success: "color: #67C23A",
          warning: "color: #E6A23C",
          error: "color: #F56C6C",
          debug: "color: #909399"
        };
        const color = colors[level] || colors.info;
        console.log(`%c[${time}] ${msg}`, color);
      }, msg(msg) {
        this.task.status = msg;
      }
    }
  }), _sfc_main = vue.defineComponent({
    setup() {
      const askstore = useAskStore(), { dialogVisible, count, questionList, task } = pinia$1.storeToRefs(askstore), askActiveName = vue.ref("first"), askActiveNames = vue.ref(["1"]), msg = vue.ref("<h3>本脚本仅用于学习交流，请24h内删除</h3><br><p style='color:red;'>禁止用于各种非法用途，否则后果自负</p><br><p>本脚本题库接口均来源于网络以及用户反馈添加，不对题库准确率以及可用性负责，请自行判断、评估是否使用。</p>"), formstoreObj = useformStore(), { forminput, dialogV, activeName } = pinia$1.storeToRefs(formstoreObj), ruleFormRef = vue.ref(), rules = vue.reactive({
        interval: [{ required: true, message: "间隔时间不能为空" }, { type: "number", message: "间隔时间必须为数字" }, { validator: (rule, value) => value >= 1 ? Promise.resolve() : Promise.reject("间隔时间必须大于等于1") }], llmAnswerInterval: [{ required: true, message: "大模型回答间隔不能为空" }, { type: "number", message: "大模型回答间隔必须为数字" }, { validator: (rule, value) => value >= 1 ? Promise.resolve() : Promise.reject("大模型回答间隔必须大于等于1") }], token: [{
          validator: (rule, value) => {
            if (value) {
              return /^[a-zA-Z0-9]{6,}$/.test(value) ? Promise.resolve() : Promise.reject("token格式错误");
            }
            return Promise.resolve();
          }
        }]
      });
      return {
        count, dialogVisible, questionList, askActiveName, askActiveNames, task, msg, Aim: aim_default, handleClick: (e) => {
          askstore.select(e);
        }, dialogV, activeName, ruleFormRef, forminput, rules, submitForm: async (formEl) => {
          formEl && await formEl.validate((valid, fields) => {
            valid && (formstoreObj.saveConfig(forminput.value), ElementPlus.ElNotification({ title: "Success", message: "配置保存成功,请自行刷新页面", type: "success" }), dialogV.value = false);
          });
        }, userConfig, Setting: setting_default
      };
    }
  }), _hoisted_1 = { class: "dialog-footer" }, _hoisted_2 = { key: 0 }, _hoisted_3 = { class: "question_div" }, _hoisted_4 = { class: "question_ti" }, _hoisted_5 = { key: 0 }, _hoisted_6 = { key: 1 }, _hoisted_7 = { key: 2 }, _hoisted_8 = ["innerHTML"], _hoisted_9 = { key: 0, style: { "margin-top": "20px" } }, _hoisted_10 = { key: 1 }, _hoisted_11 = { key: 2 }, _hoisted_12 = { height: "100px" }, _hoisted_13 = ["innerHTML"];
  const Ask = _export_sfc(_sfc_main, [["render", function (_ctx, _cache, $props, $setup, $data, $options) {
    const _component_el_button = vue.resolveComponent("el-button"), _component_el_switch = vue.resolveComponent("el-switch"), _component_el_input = vue.resolveComponent("el-input"), _component_el_input_number = vue.resolveComponent("el-input-number"), _component_el_option = vue.resolveComponent("el-option"), _component_el_select = vue.resolveComponent("el-select"), _component_el_checkbox = vue.resolveComponent("el-checkbox"), _component_el_checkbox_group = vue.resolveComponent("el-checkbox-group"), _component_el_tooltip = vue.resolveComponent("el-tooltip"), _component_el_form_item = vue.resolveComponent("el-form-item"), _component_el_tab_pane = vue.resolveComponent("el-tab-pane"), _component_el_tabs = vue.resolveComponent("el-tabs"), _component_el_form = vue.resolveComponent("el-form"), _component_el_dialog = vue.resolveComponent("el-dialog"), _component_el_text = vue.resolveComponent("el-text"), _component_el_skeleton = vue.resolveComponent("el-skeleton"), _component_el_card = vue.resolveComponent("el-card"), _component_el_divider = vue.resolveComponent("el-divider"), _component_el_col = vue.resolveComponent("el-col"), _component_el_row = vue.resolveComponent("el-row"), _component_el_scrollbar = vue.resolveComponent("el-scrollbar"), _component_el_tag = vue.resolveComponent("el-tag"), _component_el_alert = vue.resolveComponent("el-alert"), _component_el_empty = vue.resolveComponent("el-empty");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createVNode(_component_el_button, { type: "primary", id: "askbutton", icon: _ctx.Setting, circle: "", onClick: _cache[0] || (_cache[0] = ($event) => _ctx.dialogV = !_ctx.dialogV) }, null, 8, ["icon"]), vue.createVNode(_component_el_dialog, { modelValue: _ctx.dialogV, "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.dialogV = $event), title: "📚醒醒该刷课了", width: "420px", modal: true, center: "", draggable: "", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }, { footer: vue.withCtx(() => [vue.createElementVNode("span", _hoisted_1$1, [vue.createVNode(_component_el_button, { onClick: _cache[2] || (_cache[2] = ($event) => _ctx.dialogV = false) }, { default: vue.withCtx(() => [vue.createTextVNode("取消")]), _: 1 }), vue.createVNode(_component_el_button, { type: "primary", onClick: _cache[3] || (_cache[3] = ($event) => _ctx.submitForm(_ctx.ruleFormRef)) }, { default: vue.withCtx(() => [vue.createTextVNode("保存")]), _: 1 })])]), default: vue.withCtx(() => [vue.createVNode(_component_el_form, { ref: "ruleFormRef", rules: _ctx.rules, model: _ctx.forminput, class: "demo-ruleForm" }, { default: vue.withCtx(() => [vue.createVNode(_component_el_tabs, { class: "demo-tabs", modelValue: _ctx.activeName, "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.activeName = $event) }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.userConfig, (item) => (vue.openBlock(), vue.createBlock(_component_el_tab_pane, { key: item.name, label: item.label, name: item.name }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.config, (item1) => (vue.openBlock(), vue.createBlock(_component_el_form_item, { label: item1.label, prop: item1.name }, { default: vue.withCtx(() => [vue.createVNode(_component_el_tooltip, { class: "box-item", effect: "dark", content: item1.desc || "", placement: "top" }, { default: vue.withCtx(() => ["switch" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_switch, { key: 0, modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event }, null, 8, ["modelValue", "onUpdate:modelValue"])) : "input" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_input, { key: 1, modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event }, null, 8, ["modelValue", "onUpdate:modelValue"])) : "number" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_input_number, { key: 2, modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event }, null, 8, ["modelValue", "onUpdate:modelValue"])) : "select" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_select, { key: 3, modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event, placeholder: "请选择" }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item1.options, (item2) => (vue.openBlock(), vue.createBlock(_component_el_option, { key: item2.value, label: item2.label, value: item2.value }, null, 8, ["label", "value"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue"])) : "checkbox" === item1.type ? (vue.openBlock(), vue.createBlock(_component_el_checkbox_group, { key: 4, modelValue: _ctx.forminput[item1.name], "onUpdate:modelValue": ($event) => _ctx.forminput[item1.name] = $event }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item1.options, (item2) => (vue.openBlock(), vue.createBlock(_component_el_checkbox, { key: item2.value, label: item2.value, name: item2.value }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(item2.label), 1)]), _: 2 }, 1032, ["label", "name"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue"])) : vue.createCommentVNode("", true)]), _: 2 }, 1032, ["content"])]), _: 2 }, 1032, ["label", "prop"]))), 256))]), _: 2 }, 1032, ["label", "name"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["rules", "model"])]), _: 1 }, 8, ["modelValue"]), (vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [vue.createVNode(_component_el_button, { id: "zeokdjg", type: "success", plain: "", round: "", icon: _ctx.Aim, onClick: _cache[5] || (_cache[5] = ($event) => _ctx.dialogVisible = !_ctx.dialogVisible) }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString("暂未加载" == _ctx.task.name ? "等待任务加载" : "正在完成:" + _ctx.task.name), 1)]), _: 1 }, 8, ["icon"]), vue.createVNode(_component_el_dialog, { modelValue: _ctx.dialogVisible, "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.dialogVisible = $event), width: "400px", title: "📚醒醒该刷课了", modal: false, "append-to-body": false, "lock-scroll": false, center: "", draggable: "" }, { default: vue.withCtx(() => [vue.createElementVNode("div", { style: { "display": "flex", "align-items": "center", "justify-content": "center", "gap": "16px", "margin-bottom": "20px" } }, [vue.createVNode(_component_el_button, { type: "primary", onClick: _cache[6] || (_cache[6] = ($event) => _ctx.dialogV = !_ctx.dialogV), plain: "" }, { default: vue.withCtx(() => [vue.createTextVNode("打开配置")]), _: 1 }), vue.createVNode(_component_el_text, { class: "mx-1", size: "large", type: "danger", style: { "font-weight": "600", "animation": "pulse 2s infinite" } }, { default: vue.withCtx(() => [vue.createTextVNode("配置大模型，请点击这个按钮")]), _: 1 })]), vue.createVNode(_component_el_tabs, { modelValue: _ctx.askActiveName, "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.askActiveName = $event), class: "demo-tabs" }, { default: vue.withCtx(() => [vue.createVNode(_component_el_tab_pane, { label: "运行框", name: "first" }, { default: vue.withCtx(() => [_ctx.task.work.questionList.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [vue.createElementVNode("div", _hoisted_3, [vue.createVNode(_component_el_card, { shadow: "hover" }, { default: vue.withCtx(() => [vue.createElementVNode("h1", _hoisted_4, [vue.createVNode(_component_el_text, { size: "large", truncated: "", style: { "font-weight": "600", "color": "#333" } }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.task.work.inx + 1 + "." + _ctx.task.work.questionList[_ctx.task.work.inx].question), 1)]), _: 1 })]), _ctx.task.work.questionList[_ctx.task.work.inx].answer ? (vue.openBlock(), vue.createElementBlock("p", _hoisted_6, [vue.createElementVNode("p", { style: { "background": "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", "padding": "12px", "border-radius": "8px", "margin": "8px 0", "box-shadow": "0 2px 4px rgba(0,0,0,0.1)" } }, [vue.createElementVNode("pre", { style: { "margin": "0", "font-family": "inherit", "font-size": "14px", "line-height": "1.5" } }, vue.toDisplayString(_ctx.task.work.questionList[_ctx.task.work.inx].answer), 1)])])) : (vue.openBlock(), vue.createElementBlock("p", _hoisted_5, [vue.createVNode(_component_el_skeleton, { rows: 3, animated: "" })]))]), _: 1 })]), "考试" != _ctx.task.name ? (vue.openBlock(), vue.createBlock(_component_el_divider, { key: 0 }, { default: vue.withCtx(() => [vue.createTextVNode(" 题号 ")]), _: 1 })) : vue.createCommentVNode("", true), "考试" != _ctx.task.name ? (vue.openBlock(), vue.createBlock(_component_el_scrollbar, { key: 1, height: "100px" }, { default: vue.withCtx(() => [vue.createVNode(_component_el_row, null, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.task.work.questionList, (item, index) => (vue.openBlock(), vue.createBlock(_component_el_col, { span: 4, key: index }, { default: vue.withCtx(() => [vue.createVNode(_component_el_button, { type: item.status || "info", plain: "", class: "question_btn", onClick: ($event) => _ctx.handleClick(index), style: { "transform": "scale(1)", "transition": "all 0.2s ease" } }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(index + 1), 1)]), _: 2 }, 1032, ["type", "onClick"])]), _: 2 }, 1024))), 128))]), _: 1 })]), _: 1 })) : vue.createCommentVNode("", true), _ctx.task.work.questionList[_ctx.task.work.inx].allAnswer ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7, [vue.createVNode(_component_el_divider, null, { default: vue.withCtx(() => [vue.createTextVNode(" 接口返回 ")]), _: 1 }), vue.createVNode(_component_el_tabs, { "tab-position": "left", style: { height: "200px" }, class: "demo-tabs" }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.task.work.questionList[_ctx.task.work.inx].allAnswer, (item, index) => (vue.openBlock(), vue.createBlock(_component_el_tab_pane, { label: item.form }, { default: vue.withCtx(() => [vue.createElementVNode("div", null, [vue.createElementVNode("div", { innerHTML: (item.answer || "暂无答案") + "<br><p style = 'color:red;'>ai生成仅供参考</p>" }, null, 8, _hoisted_8), null != item.num ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9, [vue.createElementVNode("div", null, [vue.createVNode(_component_el_tag, { class: "ml-2", type: "info" }, { default: vue.withCtx(() => [vue.createTextVNode("已用次数:" + vue.toDisplayString(item.usenum), 1)]), _: 2 }, 1024)]), vue.createElementVNode("div", null, [vue.createVNode(_component_el_tag, { class: "ml-2", type: "success" }, { default: vue.withCtx(() => [vue.createTextVNode("剩余次数:" + vue.toDisplayString(item.num), 1)]), _: 2 }, 1024)])])) : vue.createCommentVNode("", true)])]), _: 2 }, 1032, ["label"]))), 256))]), _: 1 })])) : vue.createCommentVNode("", true)])) : _ctx.task.video.status ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10, [vue.createVNode(_component_el_alert, { title: "倍速有风险，挂科两行泪", type: "error", center: "", "show-icon": "" }), vue.createVNode(_component_el_text, { class: "mx-1", size: "large", type: "danger", style: { "font-weight": "600", "background": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent", "background-clip": "text" } }, { default: vue.withCtx(() => [vue.createTextVNode(" 正在完成视频任务 ")]), _: 1 })])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_11, [vue.createElementVNode("div", _hoisted_12, [vue.createVNode(_component_el_empty, { description: _ctx.task.name }, null, 8, ["description"])])]))]), _: 1 }), vue.createVNode(_component_el_tab_pane, { label: "运行日志", name: "second" }, { default: vue.withCtx(() => [vue.createVNode(_component_el_scrollbar, { height: "200px" }, { default: vue.withCtx(() => [vue.createVNode(_component_el_row, null, { default: vue.withCtx(() => [vue.createVNode(_component_el_col, { span: 24 }, { default: vue.withCtx(() => [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.task.log, (item, index) => (vue.openBlock(), vue.createElementBlock("p", { key: index, class: "cx_log" }, [vue.createVNode(_component_el_text, { size: "small", type: "info", class: "mx-1", style: { "font-weight": "500" } }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(item.time), 1)]), _: 2 }, 1024), vue.createVNode(_component_el_text, { class: "mx-1", type: "info" == item.type ? "" : item.type, style: "success" == item.type ? { "color": "#67c23a", "font-weight": "500" } : "error" == item.type ? { "color": "#f56c6c", "font-weight": "500" } : "warning" == item.type ? { "color": "#e6a23c", "font-weight": "500" } : { "font-weight": "500" } }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(" " + item.msg), 1)]), _: 2 }, 1032, ["type"])]))), 128))]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }), vue.createVNode(_component_el_tab_pane, { label: "公告", name: "msg" }, { default: vue.withCtx(() => [vue.createVNode(_component_el_card, { shadow: "hover" }, { default: vue.withCtx(() => [vue.createElementVNode("div", { innerHTML: _ctx.msg }, null, 8, _hoisted_13)]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["modelValue"]), vue.createElementVNode("p", null, [_ctx.task.status ? (vue.openBlock(), vue.createBlock(_component_el_tag, { key: 0, style: { "background": "linear-gradient(135deg, #667eea 0%, #38b2ac 100%)", "color": "white", "border-radius": "12px", "padding": "4px 12px", "font-weight": "600" } }, { default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.task.status), 1)]), _: 1 })) : vue.createCommentVNode("", true)])]), _: 1 }, 8, ["modelValue"])]))], 64);
  }], ["__scopeId", "data-v-c3c6b09f"]]);
  class Cx {
    static instance = null;
    static askStoreInstance = null;

    constructor() {
      __publicField(this, "app");
      __publicField(this, "askStore");
      __publicField(this, "ServerApi");
      __publicField(this, "defaultConfig");

      if (Cx.instance) {
        this.app = Cx.instance.app;
        this.askStore = Cx.instance.askStore;
        this.ServerApi = Cx.instance.ServerApi;
        this.defaultConfig = Cx.instance.defaultConfig;
        return Cx.instance;
      }

      const existingDiv = _unsafeWindow.top.document.getElementById("xxxxzx");
      if (existingDiv) {
        return Cx.instance;
      }

      this.app = vue.createApp(Ask).use(ElementPlus).use(pinia$1.createPinia()), this.askStore = useAskStore(), this.ServerApi = new ServerApi(), this.defaultConfig = getConfig(), this.app.mount((() => {
        const div = _unsafeWindow.top.document.createElement("div");
        return div.id = "xxxxzx", _unsafeWindow.top.document.body.append(div), div;
      })());

      Cx.instance = this;
    }
    innerbook() {
    }
    async audio(iframeWindow) {
      this.askStore.reset(), this.askStore.task.name = "视频音频";
      const audio = iframeWindow.document.getElementById("audio_html5_api");
      const audioStartTime = Date.now();
      const maxAudioDuration = 1 * 60 * 60 * 1000;
      return audio.muted = true, audio.autoplay = true, audio.volume = 0, audio.play().then(function () {
      }).catch(function (error) {
        "NotAllowedError" === error.name ? ElementPlus.ElMessageBox.alert("由于自动播放需要用户点击过浏览器，请确认即可", "温馨提示", {
          confirmButtonText: "确认", callback: () => {
            audio.play();
          }
        }) : null;
      }), new Promise((resolve) => {
        const intervalId = setInterval(() => {
          if (Date.now() - audioStartTime > maxAudioDuration) {
            clearInterval(intervalId);
            console.warn("⏱️ 音频播放超时（1小时），自动继续");
            resolve();
            return;
          }
          audio.ended ? (clearInterval(intervalId), resolve()) : audio.paused && audio.play();
        }, 1e3);
        audio.addEventListener("ended", function () {
          audio.pause(), clearInterval(intervalId), resolve();
        });
      });
    }
    async video(iframeWindow) {
      this.askStore.reset();
      this.askStore.task.name = "视频";
      this.askStore.task.video.status = 1;

      const videoStartTime = Date.now();
      const maxVideoDuration = 2 * 60 * 60 * 1000;

      await waitElementLoaded(iframeWindow, "#video_html5_api");

      const player = iframeWindow.videojs("video_html5_api");
      const playerButton = iframeWindow.document.querySelector(".vjs-big-play-button");

      const config = getConfig();
      const videoSpeed = config.videoSpeed || 16;

      player.muted(true);
      player.playbackRate(videoSpeed);
      player.play();

      shouldDebug() && this.askStore.log(`🎬 视频开始播放 - 速度: ${videoSpeed}x`, "debug");
      shouldDebug() && this.askStore.log(`📊 初始视频时长: ${player.duration()}s`, "debug");

      let lastProgress = 0;
      let stuckCount = 0;
      let lastLoggedPercent = -1;
      let isProcessingPopupQuestion = false;
      let popupHandledSuccessfully = false;
      const pauseBase = player.pause;

      this.askStore.log(`视频开始播放 @ ${videoSpeed}倍速`, "info");

      const detectPopupQuestion = (win) => {
        // 1. 优先检测 .tkTopic，并且一定要有 .tkItem_title 和 .tkItem_ul
        try {
          const tkTopics = win.document.querySelectorAll(".tkTopic");
          if (tkTopics.length > 0) {
            for (const tkTopic of tkTopics) {
              if (tkTopic && tkTopic.offsetParent !== null) {
                const tkTitle = tkTopic.querySelector(".tkItem_title");
                const tkOptions = tkTopic.querySelector(".tkItem_ul");

                if (tkTitle && tkOptions) {
                  this.askStore.log(`找到有效弹题！tkTitle 和 tkOptions 都存在`, "success");
                  this.askStore.log(`题目: ${tkTitle.innerText.substring(0, 30)}...`, "info");
                  return { container: tkTopic, question: tkTopic, win: win };
                }
              }
            }
          }
        } catch (e) {
          shouldDebug() && this.askStore.log(`❌ 检测 .tkTopic 时出错: ${e.message}`, "debug");
        }

        const selectors = [
          ".testPop",
          ".popBox",
          ".questionDiv",
          ".layui-layer",
          ".ext-quiz-popup",
          "[class*='question'][class*='popup']",
          "[class*='quiz'][class*='popup']",
          ".ans-cc",
          ".ans-job-finish",
          ".jobFinish",
          ".layer",
          ".popups",
          ".dialog",
          ".modal",
          "[class*='pop'][class*='test']",
          "[class*='exam'][class*='pop']",
          ".xubox_layer",
          ".layui-layer-shade",
          ".popDiv",
          ".test_pop",
          ".videoQuiz",
          ".quiz-pop",
          ".ans-insert-quiz"
        ];

        shouldDebug() && this.askStore.log(`🔍 开始使用 ${selectors.length} 个备用选择器检测弹题`, "debug");
        for (const selector of selectors) {
          try {
            const elements = win.document.querySelectorAll(selector);
            shouldDebug() && this.askStore.log(`🔍 选择器 ${selector} 找到 ${elements.length} 个元素`, "debug");

            for (const element of elements) {
              if (element && element.offsetParent !== null) {
                shouldDebug() && this.askStore.log(`🔍 检查元素: ${element.className}`, "debug");
                const tkTitle = element.querySelector(".tkItem_title");
                const tkOptions = element.querySelector(".tkItem_ul");

                if (tkTitle && tkOptions) {
                  this.askStore.log(`通过 ${selector} 找到有效弹题！`, "success");
                  this.askStore.log(`题目: ${tkTitle.innerText.substring(0, 30)}...`, "info");
                  shouldDebug() && this.askStore.log(`📦 返回弹题容器信息`, "debug");
                  return { container: element, question: element, win: win };
                }

                const questionElement = element.querySelector(".TiMu") ||
                  element.querySelector(".fontLabel") ||
                  element.querySelector(".Zy_TItle") ||
                  element.querySelector(".mark_name") ||
                  element.querySelector("[class*='title']") ||
                  element.querySelector("[class*='question']") ||
                  element.querySelector(".afterHtml");
                if (questionElement) {
                  shouldDebug() && this.askStore.log(`✅ 找到问题元素: ${questionElement.className}`, "debug");
                  shouldDebug() && this.askStore.log(`📦 返回弹题容器信息`, "debug");
                  return { container: element, question: questionElement, win: win };
                }
              } else {
                shouldDebug() && this.askStore.log(`⚠️ 元素不可见 (offsetParent === null)`, "debug");
              }
            }
          } catch (e) {
            shouldDebug() && this.askStore.log(`❌ 选择器 ${selector} 检测出错: ${e.message}`, "debug");
            continue;
          }
        }

        shouldDebug() && this.askStore.log(`🔍 开始使用 fallback 方法检测弹题`, "debug");
        const allDivs = win.document.querySelectorAll("div[style*='display: block'], div[style*='display:block'], div:not([style*='display: none'])");
        shouldDebug() && this.askStore.log(`🔍 找到 ${allDivs.length} 个可见div元素`, "debug");

        for (const div of allDivs) {
          try {
            if (div.offsetParent !== null && div.querySelector("ul li")) {
              shouldDebug() && this.askStore.log(`🔍 检查div元素: ${div.className}`, "debug");
              const text = div.innerText || "";
              const hasQuestionType = text.includes("单选题") || text.includes("多选题") ||
                text.includes("判断题") || text.includes("填空题");
              const hasQuestionMark = text.includes("？") || text.includes("?");
              const hasOptions = div.querySelectorAll("ul li").length >= 2;

              shouldDebug() && this.askStore.log(`🔍 检查条件 - hasQuestionType:${hasQuestionType}, hasQuestionMark:${hasQuestionMark}, hasOptions:${hasOptions}`, "debug");
              if (hasQuestionType && (hasQuestionMark || hasOptions)) {
                this.askStore.log(`通过fallback检测到弹题容器`, "info");
                shouldDebug() && this.askStore.log(`📦 返回弹题容器信息`, "debug");
                return { container: div, question: div, win: win };
              }
            }
          } catch (e) {
            shouldDebug() && this.askStore.log(`❌ fallback检测出错: ${e.message}`, "debug");
            continue;
          }
        }

        shouldDebug() && this.askStore.log(`❌ 未检测到任何弹题`, "debug");
        return null;
      };

      const detectPopupQuestionInAllWindows = () => {
        shouldDebug() && this.askStore.log(`🔍 开始在所有窗口检测弹题`, "debug");
        let result = null;

        shouldDebug() && this.askStore.log(`🔍 检测 iframeWindow`, "debug");
        result = detectPopupQuestion(iframeWindow);
        if (result) {
          shouldDebug() && this.askStore.log(`✅ 在 iframeWindow 找到弹题`, "debug");
          return result;
        }

        try {
          if (iframeWindow.parent && iframeWindow.parent !== iframeWindow) {
            shouldDebug() && this.askStore.log(`🔍 检测 iframeWindow.parent`, "debug");
            result = detectPopupQuestion(iframeWindow.parent);
            if (result) {
              shouldDebug() && this.askStore.log(`✅ 在 iframeWindow.parent 找到弹题`, "debug");
              return result;
            }
          }
        } catch (e) {
          shouldDebug() && this.askStore.log(`❌ 检测 iframeWindow.parent 出错: ${e.message}`, "debug");
        }

        try {
          if (iframeWindow.top && iframeWindow.top !== iframeWindow) {
            shouldDebug() && this.askStore.log(`🔍 检测 iframeWindow.top`, "debug");
            result = detectPopupQuestion(iframeWindow.top);
            if (result) {
              shouldDebug() && this.askStore.log(`✅ 在 iframeWindow.top 找到弹题`, "debug");
              return result;
            }
          }
        } catch (e) {
          shouldDebug() && this.askStore.log(`❌ 检测 iframeWindow.top 出错: ${e.message}`, "debug");
        }

        try {
          shouldDebug() && this.askStore.log(`🔍 检测所有子iframe`, "debug");
          const allFrames = iframeWindow.parent.document.querySelectorAll("iframe");
          shouldDebug() && this.askStore.log(`🔍 找到 ${allFrames.length} 个子iframe`, "debug");

          for (const frame of allFrames) {
            try {
              if (frame.contentWindow && frame.contentWindow !== iframeWindow) {
                result = detectPopupQuestion(frame.contentWindow);
                if (result) return result;
              }
            } catch (e) {
              continue;
            }
          }
        } catch (e) { }

        return null;
      };

      const handlePopupQuestion = async (questionInfo) => {
        if (isProcessingPopupQuestion) return false;
        isProcessingPopupQuestion = true;

        try {
          this.askStore.log("检测到视频弹题，正在处理...", "warning");
          popupHandledSuccessfully = false;
          if (pauseBase) {
            pauseBase.call(player);
          } else {
            player.pause();
          }

          const container = questionInfo.container;
          const questionWin = questionInfo.win || iframeWindow;

          // 解密弹题中的加密字体
          decode(questionWin);
          this.askStore.log("✅ 已解密弹题中的加密字体", "success");

          this.askStore.log(`容器: ${container.className}`, "debug");

          let questionElements = [];

          // 优先使用 detectPopupQuestion 已经验证过的 container 本身
          const containerTkTitle = container.querySelector(".tkItem_title");
          const containerTkOptions = container.querySelector(".tkItem_ul");
          if (containerTkTitle && containerTkOptions) {
            questionElements = [container];
            this.askStore.log(`直接使用已验证的容器作为题目元素`, "success");
          }

          if (questionElements.length === 0) {
            const tkTopics = container.querySelectorAll(".tkTopic");
            if (tkTopics.length > 0) {
              questionElements = Array.from(tkTopics);
              this.askStore.log(`检测到 ${tkTopics.length} 个视频弹题`, "info");
            }
          }

          if (questionElements.length === 0) {
            questionElements = container.querySelectorAll(".TiMu");
          }

          if (questionElements.length === 0) {
            questionElements = container.querySelectorAll(".Zy_TItle");
          }
          if (questionElements.length === 0) {
            questionElements = container.querySelectorAll(".mark_name");
          }
          if (questionElements.length === 0) {
            questionElements = container.querySelectorAll("[class*='question']");
          }
          if (questionElements.length === 0) {
            questionElements = container.querySelectorAll(".afterHtml");
          }
          if (questionElements.length === 0) {
            const questionText = container.querySelector(".fontLabel") ||
              container.querySelector("[class*='title']") ||
              container.querySelector("h1, h2, h3, h4");
            if (questionText) {
              questionElements = [questionText];
            }
          }

          // 如果在 container 中找不到题目，尝试在 questionWin 中重新搜索
          if (questionElements.length === 0) {
            this.askStore.log(`在container中未找到题目，尝试在questionWin中重新搜索...`, "info");
            try {
              const winTkTopics = questionWin.document.querySelectorAll(".tkTopic");
              for (const tkTopic of winTkTopics) {
                if (tkTopic && tkTopic.offsetParent !== null) {
                  const tkTitle = tkTopic.querySelector(".tkItem_title");
                  const tkOptions = tkTopic.querySelector(".tkItem_ul");
                  if (tkTitle && tkOptions) {
                    questionElements = [tkTopic];
                    this.askStore.log(`在questionWin中重新找到有效弹题！`, "success");
                    break;
                  }
                }
              }
            } catch (e) {
              this.askStore.log(`在questionWin中搜索失败: ${e.message}`, "warning");
            }
          }

          if (questionElements.length === 0) {
            const options = container.querySelectorAll("ul li, .option, [class*='option'], .answerList li");
            if (options.length > 0) {
              const randomIndex = Math.floor(Math.random() * options.length);
              options[randomIndex].click();
              this.askStore.log("弹题随机选择答案", "warning");

              await sleep(1);

              const submitBtn = findSubmitButton(container);
              if (submitBtn) {
                submitBtn.click();
                this.askStore.log("弹题已提交", "success");
              }
            }

            return true;
          }

          this.askStore.log(`最终找到 ${questionElements.length} 个题目元素`, "debug");

          let answeredCount = 0;
          const totalQuestions = questionElements.length;
          let allQuestionData = [];

          this.askStore.log(`开始处理 ${questionElements.length} 个题目元素...`, "info");

          for (let i = 0; i < questionElements.length; i++) {
            const timu = questionElements[i];
            try {
              let questionData = null;

              this.askStore.log(`处理第 ${i + 1} 个题目元素...`, "info");

              const tkTitle = timu.querySelector(".tkItem_title");
              const tkOptions = timu.querySelector(".tkItem_ul");

              this.askStore.log(`  tkTitle: ${tkTitle ? "找到了" : "没找到"}, tkOptions: ${tkOptions ? "找到了" : "没找到"}`, "info");

              if (tkTitle && tkOptions) {
                const questionText = removeHtml(tkTitle.innerHTML);
                const optionElements = tkOptions.querySelectorAll("li");
                const optionTexts = [];

                optionElements.forEach(opt => {
                  const text = removeHtml(opt.innerHTML);
                  if (text.trim()) {
                    optionTexts.push(text);
                  }
                });

                this.askStore.log(`  题目: ${questionText.substring(0, 50)}...`, "info");
                this.askStore.log(`  选项数量: ${optionTexts.length}`, "info");

                let questionType = "0";

                const tkTopicTitle = timu.querySelector(".tkTopic_title");
                if (tkTopicTitle) {
                  const titleText = tkTopicTitle.innerText || tkTopicTitle.textContent || "";
                  this.askStore.log(`  tkTopic_title: ${titleText}`, "info");
                  if (titleText.includes("多选题")) {
                    questionType = "1";
                  } else if (titleText.includes("判断题")) {
                    questionType = "3";
                  } else if (titleText.includes("单选题")) {
                    questionType = "0";
                  }
                }

                if (questionType === "0" && (questionText.startsWith("单选题") || questionText.includes("【单选题】") || questionText.includes("（单选题）"))) {
                  questionType = "0";
                } else if (questionType === "0" && (questionText.startsWith("多选题") || questionText.includes("【多选题】") || questionText.includes("（多选题）"))) {
                  questionType = "1";
                } else if (questionType === "0" && (questionText.startsWith("判断题") || questionText.includes("【判断题】") || questionText.includes("（判断题）"))) {
                  questionType = "3";
                }

                if (questionType === "3" || (optionTexts.length === 2 &&
                  (optionTexts[0].includes("对") || optionTexts[0].includes("正确") || optionTexts[0].includes("√")) &&
                  (optionTexts[1].includes("错") || optionTexts[1].includes("错误") || optionTexts[1].includes("×")))) {
                  questionType = "3";
                }

                questionData = {
                  question: questionText,
                  options: optionTexts,
                  type: questionType,
                  dom: timu
                };
                allQuestionData.push({ data: questionData, timu });
                this.askStore.log(`检测到视频弹题格式 - 题型: ${questionType === "0" ? "单选" : questionType === "1" ? "多选" : "判断"}`, "info");
              }

              if (!questionData) {
                try {
                  this.askStore.log(`  尝试使用 getQuestion("1")...`, "info");
                  questionData = getQuestion("1", timu);
                  if (questionData) {
                    this.askStore.log(`  getQuestion("1") 成功！`, "info");
                    allQuestionData.push({ data: questionData, timu });
                  }
                } catch (e) {
                  this.askStore.log(`  getQuestion("1") 失败: ${e.message}`, "warning");
                }
              }

              if (!questionData || !questionData.question) {
                this.askStore.log(`  尝试备用检测方式...`, "info");
                // 备用检测方式也优先找正确的题目内容
                let questionText = "";
                const tkTitle2 = timu.querySelector(".tkItem_title");
                if (tkTitle2) {
                  questionText = removeHtml(tkTitle2.innerHTML);
                } else {
                  // 如果还是没找到，再 fallback 用整个元素文本（但去掉题型关键词）
                  questionText = timu.innerText || timu.textContent || "";
                  // 去掉开头的题型关键词
                  if (questionText.startsWith("单选题")) questionText = questionText.substring(3).trim();
                  if (questionText.startsWith("多选题")) questionText = questionText.substring(3).trim();
                  if (questionText.startsWith("判断题")) questionText = questionText.substring(3).trim();
                }

                this.askStore.log(`  备用检测题目: ${questionText.substring(0, 50)}...`, "info");

                const isQuestion = questionText.includes("？") || questionText.includes("?") ||
                  questionText.includes("是什么") || questionText.includes("是指") ||
                  questionText.includes("以下") || questionText.includes("属于");

                if (!isQuestion) {
                  this.askStore.log(`  不是有效题目，跳过`, "warning");
                  continue;
                }

                const options = container.querySelectorAll("ul li, .option, [class*='option'], .answerList li");
                const optionTexts = [];
                const invalidKeywords = ['字幕', '关闭', '公网', '线路', '清晰度', '赞同', '不赞同', '感动', '听不懂', '讲得好', '鼓掌', '有趣', '好难', '视频摘要', '知识点', '思维导图', '设置', '播放', '暂停'];

                options.forEach(opt => {
                  const text = (opt.innerText || opt.textContent || "").trim();
                  if (!text) return;

                  const hasInvalidKeyword = invalidKeywords.some(keyword => text.includes(keyword));
                  if (hasInvalidKeyword) return;

                  const isValidOption = /^[A-Z][、.．]/.test(text) || /^[0-9][、.．]/.test(text) || text.length > 2;
                  if (isValidOption) {
                    optionTexts.push(text);
                  }
                });

                this.askStore.log(`  备用检测选项数量: ${optionTexts.length}`, "info");

                if (optionTexts.length === 0) {
                  this.askStore.log(`  没有找到有效选项，跳过`, "warning");
                  continue;
                }

                let questionType2 = "0";

                const tkTopicTitle2 = timu.querySelector(".tkTopic_title");
                if (tkTopicTitle2) {
                  const titleText = tkTopicTitle2.innerText || tkTopicTitle2.textContent || "";
                  this.askStore.log(`  备用检测 tkTopic_title: ${titleText}`, "info");
                  if (titleText.includes("多选题")) {
                    questionType2 = "1";
                  } else if (titleText.includes("判断题")) {
                    questionType2 = "3";
                  } else if (titleText.includes("单选题")) {
                    questionType2 = "0";
                  }
                }

                if (questionType2 === "0") {
                  const fullText = timu.innerText || timu.textContent || "";
                  if (fullText.startsWith("多选题") || fullText.includes("【多选题】") || fullText.includes("（多选题）")) {
                    questionType2 = "1";
                  } else if (fullText.startsWith("判断题") || fullText.includes("【判断题】") || fullText.includes("（判断题）")) {
                    questionType2 = "3";
                  } else if (fullText.startsWith("单选题") || fullText.includes("【单选题】") || fullText.includes("（单选题）")) {
                    questionType2 = "0";
                  }
                }

                if (questionType2 === "3" || (optionTexts.length === 2 &&
                  (optionTexts[0].includes("对") || optionTexts[0].includes("正确") || optionTexts[0].includes("√")) &&
                  (optionTexts[1].includes("错") || optionTexts[1].includes("错误") || optionTexts[1].includes("×")))) {
                  questionType2 = "3";
                }

                questionData = {
                  question: questionText,
                  options: optionTexts,
                  type: questionType2
                };
                allQuestionData.push({ data: questionData, timu });
                this.askStore.log(`备用检测成功 - 题型: ${questionType2 === "0" ? "单选" : questionType2 === "1" ? "多选" : "判断"}`, "info");
              }
            } catch (e) {
              this.askStore.log(`弹题处理失败: ${e.message}`, "error");
            }
          }

          this.askStore.log(`最终找到 ${allQuestionData.length} 个有效题目`, "info");

          if (allQuestionData.length === 0) {
            this.askStore.log("未找到有效题目", "warning");
            return false;
          }

          for (const { data, timu } of allQuestionData) {
            this.askStore.log(`弹题: ${data.question.substring(0, 30)}...`, "info");
            this.askStore.log(`正在获取答案...`, "info");

            const answers = await getAnswers(data, questionWin);

            this.askStore.log(`答案获取结果: ${JSON.stringify(answers)}`, "debug");

            let filled = null;
            try {
              filled = fillAnswer(answers, data, timu, questionWin);
              this.askStore.log(`fillAnswer返回: ${filled}`, "debug");
            } catch (e) {
              this.askStore.log(`fillAnswer异常: ${e.message}`, "error");
            }

            if (!filled) {
              await sleep(0.5);
              for (let retry = 0; retry < 3; retry++) {
                this.askStore.log(`答案选择重试第 ${retry + 1} 次...`, "info");
                try {
                  filled = fillAnswer(answers, data, timu, questionWin);
                  if (filled) {
                    this.askStore.log(`重试成功选择答案`, "success");
                    break;
                  }
                } catch (e) {
                  this.askStore.log(`重试异常: ${e.message}`, "warning");
                }
                await sleep(0.5);
              }
            }

            if (filled) {
              this.askStore.log(`弹题已作答: ${Array.isArray(filled) ? filled.join(", ") : filled}`, "success");
              answeredCount++;
            } else {
              this.askStore.log("弹题暂无答案", "warning");
              this.askStore.log(`答案匹配失败，原始答案: ${JSON.stringify(answers)}`, "debug");
              this.askStore.log(`选项列表: ${JSON.stringify(data.options)}`, "debug");
            }
          }

          if (answeredCount < allQuestionData.length) {
            this.askStore.log(`有弹题未完全作答（${answeredCount}/${allQuestionData.length}），开始尝试依次提交`, "warning");
          }

          // 检查所有答案是否真的被选中了
          let actualAnswered = 0;
          for (let i = 0; i < allQuestionData.length; i++) {
            const { data, timu } = allQuestionData[i];
            // 检查单选/多选是否有选中的
            const hasCheckedRadio = timu.querySelector('input[type="radio"]:checked');
            const hasCheckedCheckbox = timu.querySelector('input[type="checkbox"]:checked');
            const hasCheckAnswer = timu.querySelector('.check_answer') || timu.querySelector('.check_answer_dx');
            const hasTkRadioActive = timu.querySelector('.tkRadio.active') || timu.querySelector('.tkRadio.checked') || timu.querySelector('.tkRadio[class*="active"]') || timu.querySelector('.tkRadio[class*="checked"]');

            // 检查 li 是否有选中样式
            const liElements = timu.querySelectorAll('li');
            let hasSelectedLi = false;
            liElements.forEach(li => {
              if (li.classList.contains('selected') || li.classList.contains('active') || li.classList.contains('checked')) {
                hasSelectedLi = true;
              }
            });

            if (hasCheckedRadio || hasCheckedCheckbox || hasCheckAnswer || hasTkRadioActive || hasSelectedLi) {
              actualAnswered++;
            } else {
              this.askStore.log(`第 ${i + 1} 题没有选中答案`, "warning");
            }
          }

          if (actualAnswered < allQuestionData.length) {
            // 再等一下让页面更新
            await sleep(0.5);

            // 再检查一遍
            actualAnswered = 0;
            for (let i = 0; i < allQuestionData.length; i++) {
              const { data, timu } = allQuestionData[i];
              const hasCheckedRadio = timu.querySelector('input[type="radio"]:checked');
              const hasCheckedCheckbox = timu.querySelector('input[type="checkbox"]:checked');
              const hasCheckAnswer = timu.querySelector('.check_answer') || timu.querySelector('.check_answer_dx');
              const hasTkRadioActive = timu.querySelector('.tkRadio.active') || timu.querySelector('.tkRadio.checked');

              const liElements = timu.querySelectorAll('li');
              let hasSelectedLi = false;
              liElements.forEach(li => {
                if (li.classList.contains('selected') || li.classList.contains('active') || li.classList.contains('checked')) {
                  hasSelectedLi = true;
                }
              });

              if (hasCheckedRadio || hasCheckedCheckbox || hasCheckAnswer || hasTkRadioActive || hasSelectedLi) {
                actualAnswered++;
              }
            }

            if (actualAnswered < allQuestionData.length) {
              this.askStore.log(`有弹题未真的选中答案（${actualAnswered}/${allQuestionData.length}），跳过提交`, "warning");
              return false;
            }
          }

          let submitSuccess = false;
          let retryCount = 0;
          const maxRetries = 5;

          while (!submitSuccess && retryCount < maxRetries) {
            await sleep(1);
            const submitBtn = findSubmitButton(container);
            if (submitBtn) {
              this.askStore.log(`第 ${retryCount + 1} 次提交...`, "info");
              submitBtn.click();

              await sleep(2);

              const isStillVisible = container.offsetParent !== null;
              const hasError = container.querySelector(".spanNot") || container.querySelector(".error");

              if (!isStillVisible || !hasError) {
                submitSuccess = true;
                this.askStore.log("弹题提交成功", "success");
                break;
              }

              this.askStore.log("弹题提交失败，尝试下一个答案...", "warning");
              retryCount++;

              if (retryCount < maxRetries) {
                for (let i = 0; i < allQuestionData.length; i++) {
                  const { data, timu } = allQuestionData[i];
                  const tkOptions = timu.querySelector(".tkItem_ul");
                  if (tkOptions) {
                    const optionElements = tkOptions.querySelectorAll("li");
                    const nextOptionIndex = retryCount % optionElements.length;
                    const optionLi = optionElements[nextOptionIndex];

                    // 多种方式确保选中
                    optionLi.click();
                    const tkRadio = optionLi.querySelector(".tkRadio");
                    if (tkRadio) tkRadio.click();
                    const label = optionLi.querySelector("label");
                    if (label) label.click();
                    const inputRadio = optionLi.querySelector("input[type='radio']");
                    if (inputRadio) {
                      inputRadio.checked = true;
                      const event = new Event('change', { bubbles: true });
                      inputRadio.dispatchEvent(event);
                    }
                    const quizOpt = optionLi.querySelector(".ans-videoquiz-opt");
                    if (quizOpt) quizOpt.click();

                    this.askStore.log(`尝试选择选项 ${nextOptionIndex + 1}`, "info");
                  }
                }
              }
            } else {
              this.askStore.log("未找到弹题提交按钮", "warning");
              break;
            }
          }

          if (!submitSuccess) {
            this.askStore.log("弹题多次提交失败，跳过", "error");
          }

          await sleep(1);
          popupHandledSuccessfully = submitSuccess;
          return submitSuccess;
        } catch (e) {
          this.askStore.log(`弹题处理异常: ${e.message}`, "error");
          return false;
        } finally {
          isProcessingPopupQuestion = false;
          if (popupHandledSuccessfully) {
            player.play();
            if (playerButton) playerButton.click();
          }
        }
      };

      const findSubmitButton = (container) => {
        const submitSelectors = [
          ".jb_btn",
          ".submitBtn",
          ".layui-layer-btn0",
          ".layui-layer-btn a",
          "button[type='submit']",
          ".btn-submit",
          ".ans-videoquiz-submit",
          ".videoQuizSubmit",
          "[class*='submit']",
          ".btn",
          "button",
          "a.btn",
          ".popBtn",
          ".layer-btn",
          ".dialog-btn",
          ".tkBtn",
          ".tkBtn-submit"
        ];

        for (const selector of submitSelectors) {
          try {
            const buttons = container.querySelectorAll(selector);
            for (const btn of buttons) {
              if (btn && btn.offsetParent !== null) {
                const text = (btn.innerText || btn.textContent || "").trim();
                if (text.includes("提交") || text.includes("确定") || text.includes("继续") || text.includes("保存") || text.includes("确认")) {
                  return btn;
                }
              }
            }
          } catch (e) {
            continue;
          }
        }

        const allButtons = container.querySelectorAll("button, .btn, [role='button'], input[type='button'], input[type='submit'], a");
        for (const btn of allButtons) {
          try {
            if (btn && btn.offsetParent !== null) {
              const text = (btn.innerText || btn.textContent || btn.value || "").trim();
              if (text.includes("提交") || text.includes("确定") || text.includes("继续") || text.includes("保存") || text.includes("确认")) {
                return btn;
              }
            }
          } catch (e) {
            continue;
          }
        }

        return null;
      };

      await new Promise((resolve) => {
        this.askStore.log("🎬 开始视频播放主循环", "info");

        // 页面可见性监听
        const handleVisibilityChange = () => {
          const config = getConfig();
          if (document.hidden && config.enableBackground) {
            // 页面隐藏时维持视频播放
            if (player.paused()) {
              player.play();
              if (playerButton) playerButton.click();
              shouldDebug() && this.askStore.log("📌 页面隐藏，维持视频播放", "debug");
            }
          }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // 初始化视频时间变量
        let lastValidTime = 0;
        let lastValidDuration = 0;

        const intervalId = setInterval(async () => {
          shouldDebug() && this.askStore.log("🔄 视频播放循环迭代开始", "debug");

          if (isProcessingPopupQuestion) {
            shouldDebug() && this.askStore.log("⏸️ 检测到弹题处理中，跳过常规检查", "debug");
            let currentTime = player.currentTime();
            let duration = player.duration();

            // 修复视频时间显示问题
            if (isNaN(duration) || duration <= 0) {
              duration = lastValidDuration || 0;
            } else {
              lastValidDuration = duration;
            }

            if (isNaN(currentTime) || currentTime < 0) {
              currentTime = lastValidTime || 0;
            } else {
              lastValidTime = currentTime;
            }

            if (duration && duration > 0) {
              const percent = Math.floor((currentTime / duration) * 100);
              const timeStr = `${Math.floor(currentTime)}s/${Math.floor(duration)}s`;
              this.askStore.task.status = `弹题处理中 ${percent}% (${timeStr} @ ${videoSpeed}x)`;
              shouldDebug() && this.askStore.log(`⏱️ 弹题处理中 - 当前进度: ${percent}%`, "debug");
            }
            return;
          }

          if (Date.now() - videoStartTime > maxVideoDuration) {
            this.askStore.log("⏱️ 视频播放超时（2小时），自动继续", "warning");
            this.askStore.task.status = "视频超时，自动继续";
            clearInterval(intervalId);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            resolve();
            return;
          }

          let currentTime = player.currentTime();
          let duration = player.duration();

          // 修复视频时间显示问题
          if (isNaN(duration) || duration <= 0) {
            shouldDebug() && this.askStore.log(`⚠️ 视频时长无效，使用上次有效时长`, "debug");
            duration = lastValidDuration || 0;
          } else {
            lastValidDuration = duration;
          }

          if (isNaN(currentTime) || currentTime < 0) {
            shouldDebug() && this.askStore.log(`⚠️ 当前时间无效，使用上次有效时间`, "debug");
            currentTime = lastValidTime || 0;
          } else {
            lastValidTime = currentTime;
          }

          shouldDebug() && this.askStore.log(`📊 视频进度计算 - currentTime: ${currentTime}s, duration: ${duration}s`, "debug");

          if (duration && duration > 0) {
            const percent = Math.floor((currentTime / duration) * 100);
            const timeStr = `${Math.floor(currentTime)}s/${Math.floor(duration)}s`;
            this.askStore.task.status = `视频播放中 ${percent}% (${timeStr} @ ${videoSpeed}x)`;

            if (percent >= lastLoggedPercent + 10 && percent % 10 === 0) {
              this.askStore.log(`📊 视频播放进度: ${percent}%`, "info");
              lastLoggedPercent = percent;
            }
          } else {
            shouldDebug() && this.askStore.log(`⚠️ 视频时长无效: duration=${duration}, currentTime=${currentTime}`, "debug");
          }

          const popupQuestion = detectPopupQuestionInAllWindows();
          if (popupQuestion) {
            this.askStore.log("✅ 检测到弹题容器，等待DOM加载...", "info");
            await sleep(1.5);
            const handled = await handlePopupQuestion(popupQuestion);
            if (handled) {
              await sleep(1);
              player.play();
              if (playerButton) playerButton.click();
            }
          }

          if (Math.abs(currentTime - lastProgress) < 0.5) {
            stuckCount++;
            shouldDebug() && this.askStore.log(`⏸️ 视频卡顿检测: 连续${stuckCount}次进度无变化`, "debug");
            if (stuckCount > 3) {
              shouldDebug() && this.askStore.log(`🔧 视频卡顿，尝试恢复播放`, "debug");
              const hasPopup = detectPopupQuestionInAllWindows();
              if (!hasPopup) {
                player.play();
                if (playerButton) playerButton.click();
                shouldDebug() && this.askStore.log(`✅ 已恢复视频播放`, "debug");
              } else {
                shouldDebug() && this.askStore.log(`⚠️ 检测到弹窗，跳过恢复播放`, "debug");
              }
              stuckCount = 0;
            }
          } else {
            stuckCount = 0;
            shouldDebug() && this.askStore.log(`✅ 视频播放正常，进度更新: ${lastProgress} -> ${currentTime}`, "debug");
          }
          lastProgress = currentTime;

          shouldDebug() && this.askStore.log("🔍 检查视频播放状态", "debug");
          if ("isUnFinishJob" in iframeWindow && iframeWindow.isUnFinishJob()) {
            shouldDebug() && this.askStore.log(`🔧 isUnFinishJob=true，检查视频是否暂停`, "debug");
            if (player.paused()) {
              const hasPopup = detectPopupQuestionInAllWindows();
              if (!hasPopup && playerButton) {
                shouldDebug() && this.askStore.log(`▶️ 视频暂停，点击播放按钮恢复`, "debug");
                playerButton.click();
              } else {
                shouldDebug() && this.askStore.log(`⚠️ 检测到弹窗或无播放按钮，跳过恢复`, "debug");
              }
            } else {
              shouldDebug() && this.askStore.log(`✅ 视频正在播放，无需恢复`, "debug");
            }
          } else {
            shouldDebug() && this.askStore.log(`🔧 isUnFinishJob=false，检查视频是否完成`, "debug");
            if (isProcessingPopupQuestion) {
              shouldDebug() && this.askStore.log(`⏸️ 正在处理弹题，跳过视频完成检查`, "debug");
            } else if (duration > 0 && currentTime >= duration - 1) {
              shouldDebug() && this.askStore.log(`✅ 视频播放完成: ${currentTime}s >= ${duration - 1}s`, "debug");
              clearInterval(intervalId);
              document.removeEventListener('visibilitychange', handleVisibilityChange);
              this.askStore.task.status = "视频播放完成";
              this.askStore.log("🎬 视频播放完成 100%", "success");
              resolve();
            } else if (duration <= 0 || isNaN(duration)) {
              shouldDebug() && this.askStore.log(`⚠️ 视频时长异常，视为播放完成: duration=${duration}`, "debug");
              clearInterval(intervalId);
              document.removeEventListener('visibilitychange', handleVisibilityChange);
              this.askStore.task.status = "视频播放完成";
              this.askStore.log("🎬 视频播放完成", "success");
              resolve();
            } else {
              shouldDebug() && this.askStore.log(`▶️ 视频继续播放: ${currentTime}s/${duration}s`, "debug");
            }
          }

          shouldDebug() && this.askStore.log("🔄 视频播放循环迭代结束", "debug");
        }, 1000);

        player.pause = function () {
          if (isProcessingPopupQuestion) {
            pauseBase.call(player);
            return;
          }
          if (player.currentTime() >= player.duration()) {
            player.pause = pauseBase;
            resolve();
          }
        };

        player.on("ended", () => {
          player.pause = pauseBase;
          player.pause();
          clearInterval(intervalId);
          document.removeEventListener('visibilitychange', handleVisibilityChange);
          resolve();
        });
      });
    }
    work(iframeWindow, isExam = true) {
      return new Promise(async (resolve) => {
        decode(iframeWindow);
        const Timu = iframeWindow.document.querySelectorAll(".TiMu");
        if (!Timu)
          return void resolve();
        let ques = [], succ = 0;
        const taskType = isExam ? "章节测验" : "作业";
        this.askStore.log(`检测到 ${Timu.length} 道题目，任务类型: ${taskType}，isExam: ${isExam}`, "info");
        for (let i = 0; i < Timu.length; i++) {
          let data = getQuestion("1", Timu[i]);
          if (data) {
            ques.push(data);
          } else {
            this.askStore.log(`第 ${i + 1} 题解析失败，跳过`, "warning");
          }
        }
        this.askStore.reset(), this.askStore.count = ques.length, this.askStore.task.name = taskType;
        for (let i = 0; i < ques.length; i++) {
          await sleep(this.defaultConfig.llmAnswerInterval), this.askStore.insert(ques[i]), this.askStore.task.work.inx = i;
          this.askStore.log(`正在获取第 ${i + 1}/${ques.length} 题答案...`, "info");
          let data = await getAnswers(ques[i], iframeWindow);
          const questionItem = this.askStore.get(i);
          if (questionItem) {
            questionItem.allAnswer = data;
            let tmp = fillAnswer(data, ques[i], Timu[i], iframeWindow);
            if (tmp) {
              questionItem.status = "primary", questionItem.answer = tmp, succ++;
              this.askStore.log(`第 ${i + 1} 题已作答: ${Array.isArray(tmp) ? tmp.join(', ') : tmp}`, "success");
            } else {
              questionItem.status = "danger", questionItem.answer = "暂无答案";
              this.askStore.log(`第 ${i + 1} 题暂无答案`, "warning");
            }
            questionItem.dom = Timu[i];
          } else {
            this.askStore.log(`第 ${i + 1} 题数据异常，跳过`, "warning");
            fail++;
            continue;
          }
        }

        // 实际检查有多少题真的被选中了答案
        let actualAnswered = 0;
        for (let i = 0; i < Timu.length; i++) {
          const timu = Timu[i];
          const hasCheckedRadio = timu.querySelector('input[type="radio"]:checked');
          const hasCheckedCheckbox = timu.querySelector('input[type="checkbox"]:checked');
          const hasCheckAnswer = timu.querySelector('.check_answer') || timu.querySelector('.check_answer_dx');
          if (hasCheckedRadio || hasCheckedCheckbox || hasCheckAnswer) {
            actualAnswered++;
          }
        }

        this.askStore.log(`实际已答题: ${actualAnswered}/${ques.length}，标记已答题: ${succ}/${ques.length}`, "info");

        // 使用实际已答题数
        const finalSucc = Math.min(actualAnswered, succ);

        this.defaultConfig.autoSubmit ? (finalSucc < ques.length ? (this.askStore.log("有题目暂无答案，暂不提交", "error"), iframeWindow.alert = function (e) {
        }, iframeWindow.noSubmit()) : finalSucc / ques.length < this.defaultConfig.minAccuracy ? (this.askStore.log("正确率不足，暂存", "error"), iframeWindow.alert = function (e) {
        }, iframeWindow.noSubmit()) : (iframeWindow.btnBlueSubmit(), await sleep(3), iframeWindow.submitCheckTimes(), this.askStore.log("已提交", "success")), this.askStore.task.status = `${taskType}已完成，正确率:${finalSucc}/${ques.length}`, resolve()) : (this.askStore.log("已完成答题，等待手动提交", "success"), this.askStore.task.status = `等待手动提交,正确率:${finalSucc}/${ques.length}`);
      });
    }
    homework() {
      return new Promise(async (resolve) => {
        const Timu = _unsafeWindow.document.querySelectorAll(".questionLi");
        if (!Timu)
          return void resolve();
        let ques = [];
        this.askStore.log(`检测到 ${Timu.length} 道题目`, "info");
        for (let i = 0; i < Timu.length; i++) {
          let data = getQuestion("2", Timu[i]);
          if (data) {
            ques.push(data);
          } else {
            this.askStore.log(`第 ${i + 1} 题解析失败，跳过`, "warning");
          }
        }
        this.askStore.reset(), this.askStore.count = ques.length, this.askStore.task.name = "作业";
        for (let i = 0; i < ques.length; i++) {
          await sleep(this.defaultConfig.llmAnswerInterval), this.askStore.insert(ques[i]), this.askStore.task.work.inx = i;
          this.askStore.log(`正在获取第 ${i + 1}/${ques.length} 题答案...`, "info");
          let data = await getAnswers(ques[i], _unsafeWindow);
          const questionItem = this.askStore.get(i);
          if (questionItem) {
            questionItem.allAnswer = data;
          } else {
            this.askStore.log(`第 ${i + 1} 题数据异常，跳过`, "warning");
            continue;
          }
          let tmp = fillAnswer(data, ques[i], Timu[i], _unsafeWindow);
          if (tmp) {
            this.askStore.get(i).status = "primary", this.askStore.get(i).answer = tmp;
            this.askStore.log(`第 ${i + 1} 题已作答`, "success");
          } else {
            this.askStore.get(i).status = "danger", this.askStore.get(i).answer = "暂无答案";
            this.askStore.log(`第 ${i + 1} 题暂无答案`, "warning");
          }
          this.askStore.get(i).dom = Timu[i];
        }
        resolve();
      });
    }
    exam() {
      return new Promise(async (resolve) => {
        this.askStore.reset(), this.askStore.count = 1, this.askStore.task.name = "考试";
        this.askStore.log("开始答题", "info");

        // 解密考试页面中的加密字体
        decode(_unsafeWindow);
        this.askStore.log("✅ 已解密考试页面中的加密字体", "success");

        let data = getQuestion("3", _unsafeWindow.document.body);
        if (!data) {
          this.askStore.log("考试题目解析失败", "error");
          this.askStore.task.status = "考试题目解析失败";
          resolve();
          return;
        }
        this.askStore.insert(data), this.askStore.task.work.inx = 0;
        let data1 = await getAnswers(data, _unsafeWindow);
        const questionItem = this.askStore.get(0);
        if (questionItem) {
          questionItem.allAnswer = data1;
          let tmp = fillAnswer(data1, data, document.getElementsByClassName("mark_table")[0], _unsafeWindow);
          if (tmp) {
            questionItem.status = "primary", questionItem.answer = tmp;
            this.askStore.log("已作答", "success");
          } else {
            questionItem.status = "danger", questionItem.answer = "暂无答案";
            this.askStore.log("暂无答案", "warning");
          }
        } else {
          this.askStore.log("考试题目数据异常", "error");
          this.askStore.task.status = "考试题目数据异常";
        }
        if (this.defaultConfig.autoExam) {
          await sleep(this.defaultConfig.llmAnswerInterval);
          const nextButton = $('.nextDiv .jb_btn:contains("下一题")');
          nextButton ? (nextButton.click(), this.askStore.log("切换到下一题", "info")) : (this.askStore.log("已完成答题，请自行检查答案填写后自行提交", "success"), this.askStore.task.status = "已完成答题，请自行检查答案填写后自行提交");
        } else {
          this.askStore.task.status = "未开启自动切换，等待手动切换";
        }
        resolve();
      });
    }
    pdf(iframeWindow) {
      return new Promise(async (resolve) => {
        try {
          const panView = iframeWindow.document.querySelector("#panView");
          if (panView && panView.contentWindow) {
            const contentWindow = panView.contentWindow;
            contentWindow.scrollTo(0, contentWindow.document.body.scrollHeight);
          }
        } catch (e) {
          console.warn("PDF滚动失败:", e);
        }
        resolve();
      });
    }
    async s(iframeWindow) {
      const questionList = $(iframeWindow.document).find(".TiMu").map(function (index, element) {
        try {
          let questionHtml, questionText, questionType$1, questionAnswer, questionOption = [], questionAnalysis = "";
          switch (questionHtml = $(element).find(".Zy_TItle .clearfix"), questionText = removeHtml(questionHtml[0].innerHTML), questionType$1 = questionText.match(/^\【(.+?)\】/)[1], questionText = questionText.replace(questionText.match(/^\【(.+?)\】/)[0], ""), questionType$1) {
            case "单选题":
            case "多选题":
              return questionOption = $(element).find("ul>li").map(function (inx, item) {
                return removeHtml($(item).find("a").html());
              }).get(), null;
            case "判断题":
              if (questionAnalysis = removeHtml($(element).find(".Py_addpy:eq(0)").html() || ""), element.innerHTML.includes("正确答案"))
                questionAnswer = removeHtml($(element).find(".Py_answer.clearfix>span").html());
              else {
                const match = $(element).find(".Py_answer.clearfix").html().match(/^(.*?)(?=<i class="fr (dui|cuo)"><\/i>)/s), result = match ? match[1] : "";
                questionAnswer = removeHtml(result);
              }
              if (questionAnswer.includes("正确答案"))
                questionAnswer = questionAnswer.replace("正确答案：", "").trim();
              else if ($(element).find(".fr.dui").length > 0)
                questionAnswer = questionAnswer.replace("我的答案：", "").trim();
              else {
                if (!questionAnswer.replace("我的答案：", "").trim().includes("√") && !questionAnswer.replace("我的答案：", "").trim().includes("×"))
                  return null;
                questionAnswer = "√" == questionAnswer.replace("我的答案：", "").trim() ? "×" : "√";
              }
              break;
            case "填空题":
              if (questionAnswer = $("span.font14", $(element)).map(function (inx, item) {
                return removeHtml($(item).html()).replace(/^第.空：/, "").trim();
              }).get(), 0 == questionAnswer.length) {
                if (questionAnswer = $(element).find(".Py_answer.clearfix>div>div[class='font14']"), !(questionAnswer.length = $(element).find(".Py_answer.clearfix>div>div[class='font14']>>.fr.dui").length))
                  return null;
                questionAnswer = questionAnswer.map(function (inx, item) {
                  return removeHtml($(item).html()).replace(/^第.空：/, "").trim();
                }).get();
              }
              break;
            default:
              return null;
          }
          return { question: questionText, options: questionOption, type: questionType[questionType$1], answer: questionAnswer };
        } catch {
          return null;
        }
      }).get();
      // 根据配置决定是否调用知识库
      const config = getConfig();
      if (config.useKnowledgeBase) {
        await this.ServerApi.s(questionList, iframeWindow.location.href);
      }
    }
  }
  // 移除多余的 app.mount，防止出现两个弹窗
  // const pinia = pinia$1.createPinia(), app = vue.createApp(App).use(ElementPlus).use(pinia), _self = _unsafeWindow, top = _self.top, formStore = useformStore();
  const _self = _unsafeWindow, top = _self.top;
  var iframeCom = null;
  // 添加用户选择样式
  (() => {
    document.body.oncopy = null, document.body.oncut = null, document.body.onpaste = null, document.body.onselectstart = null, document.body.ondragstart = null;
    const style = document.createElement("style");
    style.innerHTML = "\n       * {\n           -webkit-user-select: auto !important;\n           -moz-user-select: auto !important;\n           -o-user-select: auto !important;\n           user-select: auto !important;\n       }\n   ", document.head.appendChild(style);
  })();
  // 移除 app.mount，只使用 Cx 类的 Ask 组件
  switch (_self.location.pathname) {
    case "/work/doHomeWorkNew":
    case "/mooc-ans/work/doHomeWorkNew":
    case "/mooc2-ans/work/doHomeWorkNew":
      if (location.href.includes("mooc2=1")) {
        location.href = location.href.replace(/&mooc2=1/g, "");
      } else {
        const cxModelWork = new Cx();
        cxModelWork.askStore.log("脚本初始化成功！检测到章节测验/作业", "success");
        await (cxModelWork.homework());
      }
      break;
    case "/mycourse/studentstudy":
    case "/mooc-ans/mycourse/studentstudy":
    case "/mooc2-ans/mycourse/studentstudy":
      if (!_self.location.href.match(/mooc2=1/)) {
        ElementPlus.ElNotification({ title: "Auto Ask", message: "暂不支持旧版章节，尝试切换至新版", type: "error" }), _self.location.href = _self.location.href + "&mooc2=1";
        break;
      }
      const cxModel = new Cx();
      cxModel.askStore.log("脚本初始化成功！", "success");
      const startWork = async () => {
        var _a, _b, _c, _d, _e;
        await waitElementLoaded(_self, "#iframe");
        const cardsIframe = _self.document.querySelector("#iframe");
        await waitIframeLoaded(cardsIframe);
        const _self1 = cardsIframe.contentWindow;
        top.scroll2Job();
        let jobList = _self1.document.querySelectorAll(".ans-job-icon") || [];
        for (let i = 0; i < jobList.length; i++) {
          const item = jobList[i];
          if ((_a = item.parentElement) == null ? void 0 : _a.classList.contains("ans-job-finished")) {
            const iframe = (_b = item.parentElement) == null ? void 0 : _b.querySelector("iframe");
            if (iframe == null ? void 0 : iframe.src.match(/\/ananas\/modules\/work\/index.html/)) {
              await waitIframeLoaded(iframe), JSON.parse(iframe.getAttribute("data"));
              const workIframe = (_c = iframe.contentWindow) == null ? void 0 : _c.document.querySelector("iframe");
              const config = getConfig();
              if (config.useKnowledgeBase && workIframe) {
                await waitIframeLoaded(workIframe), cxModel.s(workIframe.contentWindow);
              }
            }
            cxModel.askStore.log("已完成的任务点,跳过");
          } else {
            const iframe = (_d = item.parentElement) == null ? void 0 : _d.querySelector("iframe");
            if (!iframe) {
              cxModel.askStore.log("未找到iframe，跳过任务点", "warning");
              continue;
            }

            // 增加try-catch以捕获跨域等错误
            try {
              await waitIframeLoaded(iframe);
              const otherInfo = JSON.parse(iframe.getAttribute("data"));

              if (cxModel.askStore.log(`正在完成任务:${otherInfo.name || otherInfo.title}`), iframe == null ? void 0 : iframe.src.match(/\/ananas\/modules\/video\/index\.html/)) {
                if (!cxModel.defaultConfig.autoVideo) {
                  cxModel.askStore.log("视频任务已跳过", "success");
                  continue;
                }
                await cxModel.video(iframe.contentWindow), cxModel.askStore.log("视频任务已完成", "success");
              } else if (iframe == null ? void 0 : iframe.src.match(/\/ananas\/modules\/work\/index.html/)) {
                const taskName = otherInfo.name || otherInfo.title || "";
                const property = otherInfo.property || {};

                let isExam = false;

                const workIframe = (_e = iframe.contentWindow) == null ? void 0 : _e.document.querySelector("iframe");
                if (workIframe) {
                  await waitIframeLoaded(workIframe);
                  const iframeDoc = workIframe.contentWindow.document;
                  const bodyText = iframeDoc.body.innerText || "";
                  const hasExamTab = iframeDoc.querySelector('div[class*="章节测验"], div[class*="测验"], .tab.active') ||
                    bodyText.includes("章节测验") ||
                    bodyText.includes("章节检测") ||
                    bodyText.includes("单元测验") ||
                    bodyText.includes("单元测试") ||
                    bodyText.includes("随堂测验") ||
                    bodyText.includes("课堂测验");
                  if (hasExamTab) {
                    isExam = true;
                  }
                }

                if (!isExam) {
                  isExam = taskName.includes("测验") ||
                    taskName.includes("考试") ||
                    taskName.includes("章节测验") ||
                    taskName.includes("章节检测") ||
                    taskName.includes("单元测验") ||
                    taskName.includes("单元检测") ||
                    taskName.includes("单元测试") ||
                    taskName.includes("随堂测验") ||
                    taskName.includes("课堂测验") ||
                    taskName.includes("测试") ||
                    taskName.includes("检测") ||
                    property.exam === true ||
                    property.type === "exam" ||
                    iframe.src.includes("exam") ||
                    // 检查iframe URL是否包含章节测验相关路径
                    (workIframe && workIframe.src && (
                      workIframe.src.includes("quiz") ||
                      workIframe.src.includes("test") ||
                      workIframe.src.includes("exam") ||
                      workIframe.src.includes("assessment")
                    ));
                }

                cxModel.askStore.log(`任务名称: ${taskName}，属性: ${JSON.stringify(property)}，isExam: ${isExam}`, "info");
                cxModel.askStore.log(isExam ? "开始章节测验" : "开始作业", "info");
                workIframe && (await cxModel.work(workIframe.contentWindow, isExam), cxModel.askStore.log(isExam ? "章节测验完成" : "作业完成", "success"));
              } else if (iframe == null ? void 0 : iframe.src.match(/\/ananas\/modules\/audio\/index.html/)) {
                if (!cxModel.defaultConfig.autoVideo) {
                  cxModel.askStore.log("音频任务已跳过", "success");
                  continue;
                }
                iframe && (await waitIframeLoaded(iframe), await cxModel.audio(iframe.contentWindow), cxModel.askStore.log("音频任务已完成", "success"));
              } else
                (iframe == null ? void 0 : iframe.src.match(/\/ananas\/modules\/pdf\/index.html/)) ? (iframe && (await waitIframeLoaded(iframe), await cxModel.pdf(iframe.contentWindow), cxModel.askStore.log("pdf任务已完成", "success"))) : cxModel.askStore.log("未知任务跳过", "success");
            } catch (e) {
              cxModel.askStore.log("处理当前任务点失败，已跳过", "error");
            }
          }
        }
        // 等待配置的间隔时间
        await sleep(cxModel.defaultConfig.interval);

        // 检查是否开启自动切换
        if (!cxModel.defaultConfig.autoJump) {
          cxModel.askStore.log("所有任务点已完成，未开启自动切换", "warning");
          cxModel.askStore.msg("由于未开启自动切换,请手动切换");
        } else {
          // 开启了自动切换
          const nextButton = top == null ? void 0 : top.document.querySelector(".nextChapter");
          if (nextButton) {
            cxModel.askStore.log("准备自动切换到下一章节", "info");
            nextButton.click();
          } else {
            cxModel.askStore.log("未找到下一章节按钮，可能已是最后一章", "warning");
          }
        }
      };
      setInterval(async () => {
        await waitElementLoaded(_self, "#iframe");
        const cardsIframe = _self.document.querySelector("#iframe");
        await waitIframeLoaded(cardsIframe);
        const _self1 = cardsIframe.contentWindow;
        iframeCom != _self1.location.href && (iframeCom = _self1.location.href, cxModel.askStore.reset(), startWork());
      }, 2e3);
      break;
    case "/mooc2-ans/mycourse/stu":
    case "/mooc-ans/mycourse/stu":
    case "/mycourse/stu":
      ElementPlus.ElNotification({ title: "Auto Ask", message: "此页面无任务，请自行进入章节页面", type: "error" });
      break;
    case "/work/selectWorkQuestionYiPiYue":
    case "/knowledge/cards":
      break;
    case "/mooc2/work/dowork":
    case "/mooc-ans/mooc2/work/dowork":
    case "/mooc2-ans/mooc2/work/dowork":
      const cxModel1 = new Cx();
      cxModel1.askStore.log("脚本初始化成功！", "success"), await (cxModel1.homework());
      break;
    case "/exam-ans/exam/test/reVersionTestStartNew":
      const cxModel2 = new Cx();
      await (cxModel2.exam()), cxModel2.askStore.log("脚本初始化成功！", "success");
  }

})(Vue, Pinia, ElementPlus, md5, $);







