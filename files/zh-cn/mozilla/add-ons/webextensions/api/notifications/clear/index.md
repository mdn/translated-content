---
title: notifications.clear()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/clear
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

清除给定 ID 的通知。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let clearing = browser.notifications.clear(
  id                            // 字符串
)
```

### 参数

- `id`
  - : `string`，要清除的通知 ID。这与传递给 {{WebExtAPIRef('notifications.create()')}} 的回调函数的 ID 相同。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，将会用一个布尔值兑现：如果通知被清除，则为 `true`，否则为 `false`（例如 `id` 所指代的通知不存在）。

## 浏览器兼容性

{{Compat}}

## 示例

下述示例在用户点击浏览器操作时显示一个通知（如果通知已经在显示了则会清除这一通知）：

```js
let myNotification = "my-notification";

function toggleAlarm(all) {
  if (myNotification in all) {
    browser.notifications.clear(myNotification);
  } else {
    browser.notifications.create(myNotification, {
      type: "basic",
      iconUrl: browser.runtime.getURL("icons/cake-48.png"),
      title: "一段标题",
      message: "一些有意思的内容文本",
    });
  }
}

function handleClick() {
  let gettingAll = browser.notifications.getAll();
  gettingAll.then(toggleAlarm);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.notifications`](https://developer.chrome.google.cn/docs/extensions/reference/api/notifications) API。
