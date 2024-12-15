---
title: notifications.onClosed
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClosed
l10n:
  sourceCommit: 
---

{{AddonSidebar}}

当通知被关闭时触发（无论是系统关闭还是用户关闭）。

## 语法

```js-nolint
browser.notifications.onClosed.addListener(listener)
browser.notifications.onClosed.removeListener(listener)
browser.notifications.onClosed.hasListener(listener)
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

  - : 当这个事件发生时调用的函数。该函数需要你传递下列参数：

    - `notificationId`
      - : `string`。要监听关闭事件的通知的 ID。
    - `byUser`
      - : `boolean`。如果通知是由用户关闭的，则为 `true`，如果是由系统关闭的，则为 `false`。在 Firefox 中该参数不受支持。

## 浏览器兼容性

{{Compat}}

## 示例

在这个简单的示例中，我们添加一个监听器到 `notifications.onClosed` 事件，以监听系统通知被关闭。当发生这种情况时，我们将打印一段适当的消息到控制台中。

```js
browser.notifications.onClosed.addListener((notificationId) => {
  console.log(`通知 ${notificationId} 被关闭。`);
});
```

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.notifications`](https://developer.chrome.google.cn/docs/extensions/reference/api/notifications) API。
