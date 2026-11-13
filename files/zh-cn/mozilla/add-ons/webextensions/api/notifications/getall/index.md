---
title: notifications.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/getAll
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

获取由当前扩展创建的所有当前活动通知。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingAll = browser.notifications.getAll()
```

### 参数

无。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，将会以一个对象兑现。所有的活动通知都会是该对象的一个属性，其中属性名为通知 ID 而属性值为描述该通知的 {{WebExtAPIRef("notifications.NotificationOptions")}} 对象。

需要注意，你可以通过将 ID 传递给 {{WebExtAPIRef("notifications.create()")}} 来显式定义通知的 ID。如果你不这样做，浏览器会生成一个 ID。显式指定的 ID 是字符串，而生成的 ID 是数字。

## 浏览器兼容性

{{Compat}}

## 示例

下属示例在用户点击浏览器操作时显示一个通知（如果通知已经在显示了则会清除这一通知）。它使用 `getAll()` 来判断通知是否正在显示：

```js
const myNotification = "my-notification";

function toggleAlarm(all) {
  const ids = Object.keys(all);
  if (ids.includes(myNotification)) {
    browser.notifications.clear(myNotification);
  } else {
    console.log("显示");

    browser.notifications.create(myNotification, {
      type: "basic",
      title: "一个令人印象深刻的标题",
      message: "一些有意思的文本内容",
    });
  }
}

function handleClick() {
  console.log("被点击");
  browser.notifications.getAll().then(toggleAlarm);
}

browser.browserAction.onClicked.addListener(handleClick);
```

下述示例则打印所有活动通知的标题：

```js
function logNotifications(all) {
  for (const id in all) {
    console.log(`标题：${all[id].title}`);
  }
}

browser.notifications.getAll().then(logNotifications);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.notifications`](https://developer.chrome.google.cn/docs/extensions/reference/api/notifications) API。
