---
title: alarms.get()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/get
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

获取指定名称的闹钟。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let getAlarm = browser.alarms.get(
  name                   // 可选字符串
)
```

### 参数

- `name` {{optional_inline}}
  - : `string`。要获取的闹钟的名称。如果不提供此参数，将使用空字符串 `""`。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个 {{WebExtAPIRef('alarms.Alarm', "Alarm")}} 对象。这代表了名称与 `name` 匹配的闹钟。如果没有匹配的闹钟，则为 `undefined`。

## 示例

```js
function gotAlarm(alarm) {
  if (alarm) {
    console.log(alarm.name);
  }
}

let getAlarm = browser.alarms.get("my-periodic-alarm");
getAlarm.then(gotAlarm);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.alarms`](https://developer.chrome.google.cn/docs/extensions/reference/api/alarms) API。
