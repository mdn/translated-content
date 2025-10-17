---
title: alarms.onAlarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

当扩展设置的任何闹钟触发时触发。

## 语法

```js-nolint
browser.alarms.onAlarm.addListener(listener)
browser.alarms.onAlarm.removeListener(listener)
browser.alarms.onAlarm.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 向此事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否已为此事件注册了 `listener`。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`
  - : 在此事件发生时调用的函数。此函数接收以下参数：
    - `alarm`
      - : {{WebExtAPIRef('alarms.Alarm')}}。触发的闹钟。使用 `Alarm.name` 来确定触发了哪个闹钟。

## 示例

处理闹钟触发事件：

```js
function handleAlarm(alarmInfo) {
  console.log(`on alarm: ${alarmInfo.name}`);
}

browser.alarms.onAlarm.addListener(handleAlarm);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.alarms`](https://developer.chrome.google.cn/docs/extensions/reference/api/alarms) API。
