---
title: alarms.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/getAll
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

获取扩展的所有活动闹钟。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let getAlarms = browser.alarms.getAll()
```

### 参数

无。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个 [`Alarm`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/alarms/Alarm) 对象数组。每个对象代表属于扩展的一个活动闹钟。如果没有活动闹钟，则数组将为空。

## 示例

```js
function gotAll(alarms) {
  for (const alarm of alarms) {
    console.log(alarm.name);
  }
}

browser.alarms.getAll().then(gotAll);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.alarms`](https://developer.chrome.google.cn/docs/extensions/reference/api/alarms) API。
