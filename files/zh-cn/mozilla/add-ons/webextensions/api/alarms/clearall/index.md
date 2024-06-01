---
title: alarms.clearAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clearAll
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

取消所有活跃的闹钟。

这是一个异步函数，返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 语法

```js-nolint
let clearAlarms = browser.alarms.clearAll()
```

### 参数

无。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，该 Promise 将实现为一个布尔值。如果有任何闹钟被清除，将为 `true`，否则为 `false`。注意，Chrome 总是传递 `true`。

## 示例

```js
function onClearedAll(wasCleared) {
  console.log(wasCleared); // true/false
}

let clearAlarms = browser.alarms.clearAll();
clearAlarms.then(onClearedAll);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> **备注：** 这个 API 是基于 Chromium 的 [`chrome.alarms`](https://developer.chrome.com/extensions/alarms) API。
