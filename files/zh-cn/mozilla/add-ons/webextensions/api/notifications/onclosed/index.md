---
title: notifications.onClosed
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClosed
l10n:
  sourceCommit: 1c0dda60cb2b680a753264b538e2c46776ecd837
---

{{AddonSidebar}}

当通知被关闭（无论是系统关闭还是用户关闭）时触发。

## 语法

```js-nolint
browser.notifications.onClosed.addListener(listener)
browser.notifications.onClosed.removeListener(listener)
browser.notifications.onClosed.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 为此事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否已为此事件注册了 `listener`。若正在监听，返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 当此事件发生时调用的函数。该函数需要你传递下列参数：

    - `notificationId`
      - : `string`。被关闭的通知的 ID。
    - `byUser`
      - : `boolean`。如果通知是由用户关闭的，则为 `true`，如果是由系统关闭的，则为 `false`。在 Firefox 中该参数不受支持。

## 浏览器兼容性

{{Compat}}

## 示例

在这个简单的示例中，我们为 `notifications.onClosed` 事件添加一个监听器，以监听系统通知的关闭。当发生这种情况时，我们将打印一段适当的消息到控制台中。

```js
browser.notifications.onClosed.addListener((notificationId) => {
  console.log(`通知 ${notificationId} 被关闭。`);
});
```

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.notifications`](https://developer.chrome.google.cn/docs/extensions/reference/api/notifications) API。
