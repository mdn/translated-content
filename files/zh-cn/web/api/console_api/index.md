---
title: Console API
slug: Web/API/Console_API
---

{{DefaultAPISidebar("Console API")}}

Console API 提供了允许开发人员执行调试任务的功能，例如在代码中的某个位置记录消息或变量值，或者计算任务完成所需的时间。

## 概念和用法

Console API 最初是一个专有的 API，不同的浏览器以自己的实现方式来实现它。[Console API](https://console.spec.whatwg.org/) 规范统一了这个 API 的行为，并且所有现代浏览器最终都决定实现这种行为 — 尽管一些实现仍然有自己的附加专有功能。了解这些请查看：

- [Google Chrome DevTools implementation](https://developers.google.com/chrome-developer-tools/docs/console-api)
- [Safari DevTools implementation](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html)

用法非常简单 — {{domxref("console")}} 对象 — 可以通过{{domxref("window.console")}}获取到，在 workers 里面使用{{domxref("WorkerGlobalScope.console")}}获取，`console` — 包含许多方法，您可以调用它们来执行基本的调试任务，通常专注于将各种值记录到浏览器中 [WEB 控制台](/zh-CN/docs/Tools/Web_Console).

到目前为止，最常用的方法是 console.log，它用于记录特定变量中包含的当前值。

## 接口

- {{domxref("console")}}
  - : 提供基本的调试功能，包括日志记录，堆栈跟踪，计时器和计数器。

## 示例

```js
let myString = "Hello world";

// Output "Hello world" to the console
console.log(myString);
```

到[Console reference page](/zh-CN/docs/Web/API/Console#Usage)查看更多示例

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Tools](/zh-CN/docs/Tools)
- [Web Console](/zh-CN/docs/Tools/Web_Console) — how the Web Console in Firefox handles console API calls
- [Remote debugging](/zh-CN/docs/Tools/Remote_Debugging) — how to see console output when the debugging target is a mobile device
