---
title: notifications.onShown
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onShown
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

当通知显示后立即触发。

## 语法

```js-nolint
browser.notifications.onShown.addListener(listener)
browser.notifications.onShown.removeListener(listener)
browser.notifications.onShown.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 为此事件添加一个监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否已为此事件注册了 `listener`。若正在监听，返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 当此事件发生时调用的函数。该函数传入此参数：

    - `notificationId`
      - : `string`。已显示的通知的 ID。

## 浏览器兼容性

{{Compat}}

## 示例

为 `notifications.onShown` 事件添加一个监听器并记录其详细信息：

```js
function logShown(itemId) {
  console.log(`消息已显示：${itemId}`);
  browser.notifications.getAll().then((all) => {
    console.log(all[itemId]);
  });
}

browser.notifications.onShown.addListener(logShown);
```

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.notifications`](https://developer.chrome.google.cn/docs/extensions/reference/api/notifications) API。
