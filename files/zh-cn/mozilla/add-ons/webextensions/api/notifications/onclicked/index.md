---
title: notifications.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClicked
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

当用户点击通知并且点击的并不是通知的按钮时触发（对于点击按钮的事件，参见 {{WebExtAPIRef("notifications.onButtonClicked")}}）。

## 语法

```js-nolint
browser.notifications.onClicked.addListener(listener)
browser.notifications.onClicked.removeListener(listener)
browser.notifications.onClicked.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 添加一个监听器到这个事件。
- `removeListener(listener)`
  - : 停止监听这个事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册到这个事件。若在监听，返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 当这个事件发生时调用的函数。这个函数会接收以下参数：

    - `notificationId`
      - : `string`。用户点击的通知的 ID。

## 浏览器兼容性

{{Compat}}

## 示例

在下述简单示例中，我们添加一个监听器到 `notifications.onClicked` 事件，以监听用户点击系统通知。当事件发生时，我们会在控制台中打印相应的消息。

```js
browser.notifications.onClicked.addListener((notificationId) => {
  console.log(`通知 ${notificationId} 被用户点击`);
});
```

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.notifications`](https://developer.chrome.google.cn/docs/extensions/reference/api/notifications) API。
