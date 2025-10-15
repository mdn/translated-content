---
title: notifications.onButtonClicked
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

当用户点击通知的按钮时触发。

## 语法

```js-nolint
browser.notifications.onButtonClicked.addListener(listener)
browser.notifications.onButtonClicked.removeListener(listener)
browser.notifications.onButtonClicked.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 为此事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否已为此事件注册了 `listener`。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`
  - : 当这个事件发生时调用的函数。这个函数会接收以下参数：
    - `notificationId`
      - : `string`。被点击按钮的通知的 ID。
    - `buttonIndex`
      - : `integer`。被点击按钮的[从零开始](https://zh.wikipedia.org/wiki/從零開始的編號)的索引。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.notifications`](https://developer.chrome.google.cn/docs/extensions/reference/api/notifications) API。
