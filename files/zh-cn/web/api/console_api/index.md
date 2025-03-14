---
title: Console API
slug: Web/API/Console_API
---

{{DefaultAPISidebar("Console API")}}

Console API 提供了允许开发人员执行调试任务的功能，例如在代码中的某个位置记录消息或变量值，或者计算任务完成所需的时间。

## 概念和用法

Console API 最初是一个专有的 API，不同的浏览器以自己的实现方式来实现它。[Console API](https://console.spec.whatwg.org/) 规范统一了这个 API 的行为，并且所有现代浏览器最终都决定实现这种行为——尽管一些实现仍然有自己的附加专有功能。了解这些请查看：

- [Google Chrome 开发者工具实现](https://developer.chrome.google.cn/docs/devtools/console/api)
- [Safari 开发者工具实现](https://webkit.org/web-inspector/console-object-api/)

用法非常简单——{{domxref("console")}} 对象包含许多方法，你可以调用它们来执行基本的调试任务，通常专注于将各种值记录到浏览器的 [Web 控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)。

到目前为止，最常用的方法是 {{domxref("console/log_static", "console.log()")}}，它用于记录特定变量中包含的当前值。

## 接口

- {{domxref("console")}}
  - : 提供基本的调试功能，包括日志记录、堆栈跟踪、计时器和计数器。

## 示例

```js
let myString = "你好世界";

// 在控制台中输出“你好世界”
console.log(myString);
```

参见 [console](/zh-CN/docs/Web/API/console) 参考页面以获取更多示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [工具](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Web 控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)——Firefox 中的 Web 控制台是如何处理 console API 调用的
- [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html)——在调试目标为移动设备时如何查看控制台输出
