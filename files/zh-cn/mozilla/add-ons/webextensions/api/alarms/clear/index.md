---
title: alarms.clear()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/clear
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

取消指定名称的闹钟。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let clearAlarm = browser.alarms.clear(
  name                       // string
)
```

### 参数

- `name` {{optional_inline}}
  - : `string`。要清除的闹钟的名称。如果未提供此参数，将使用空字符串 `""`。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个布尔值。如果闹钟被清除，则为 `true`，否则为 `false`。

## 示例

```js
function onCleared(wasCleared) {
  console.log(wasCleared); // true/false
}

let clearAlarm = browser.alarms.clear("my-periodic-alarm");
clearAlarm.then(onCleared);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.alarms`](https://developer.chrome.google.cn/docs/extensions/reference/api/alarms) API。
