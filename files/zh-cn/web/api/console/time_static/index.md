---
title: console：time() 静态方法
slug: Web/API/console/time_static
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

你可以启动一个计时器来跟踪某一个操作的占用时长。每一个计时器必须拥有唯一的名字，页面中最多能同时运行 10,000 个计时器。当以此计时器名字为参数调用 {{ domxref("console.timeEnd()") }} 时，浏览器将以毫秒为单位，输出对应计时器所经过的时间。

关于[计时器](/zh-CN/docs/Web/API/console#计时器)的细节和示例请参考文档 {{ domxref("console") }}。

## 语法

```js-nolint
time()
time(label)
```

## 参数

- `label`
  - : 新计时器的名字。用来标记这个计时器，作为参数调用 {{domxref("console.timeEnd()")}} 可以停止计时并将经过的时间在终端中打印出来。

### 返回值

无（{{jsxref("undefined")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
- {{domxref("console/timeLog_static", "console.timeLog()")}}
- [微软 Edge 浏览器关于 `console.time()` 的文档](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#time)
- [Node.JS 关于 `console.time()` 的文档](https://nodejs.org/docs/latest/api/console.html#consoletimelabel)
- [谷歌 Chrome 浏览器关于 `console.time()` 的文档](https://developer.chrome.google.cn/docs/devtools/console/api#time)
