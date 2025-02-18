---
title: notifications.create()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

创建并显示一条通知。

你可以传递 {{WebExtAPIRef("notifications.NotificationOptions")}} 来定义通知的内容和行为。

你也可以为通知提供一个可选的 ID。如果省略 ID，则浏览器将为其生成一个 ID。你可以使用 ID 来{{WebExtAPIRef("notifications.update()", "更新", "", 1)}}或{{WebExtAPIRef("notifications.clear()", "清除", "", 1)}}通知。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

> [!WARNING]
> 如果你在短时间内多次调用 `notifications.create()`，Firefox 可能最终不会显示任何通知。

## 语法

```js-nolint
let creating = browser.notifications.create(
  id,                   // 可选的字符串
  options               // NotificationOptions
)
```

### 参数

- `id` {{optional_inline}}
  - : `string`，用于在 {{WebExtAPIRef('notifications.update()')}}、{{WebExtAPIRef('notifications.clear()')}} 和事件监听器中指代此通知的标识符。如果省略此参数或传递空字符串，则浏览器将为此通知生成一个新的 ID。如果提供的 ID 与此扩展的现有通知的 ID 匹配，则将清除另一个通知。
- `options`
  - : {{WebExtAPIRef('notifications.NotificationOptions')}}。定义通知的内容和行为。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在通知被创建以及显示进程开始之后（在通知实际显示给用户之前）兑现为一个代表通知 ID 的字符串。

## 示例

下述示例使用 {{WebExtAPIRef("alarms", "alarm")}} 定期显示通知。点击浏览器操作会关闭通知。你需要“alarms”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)创建定时器（以及“notifications”权限来创建通知）。

```js
let cakeNotification = "cake-notification";

/*

在本例中，CAKE_INTERVAL 被设定为 6 秒。我们选定这一较短的时间是为了使扩展的行为更加明显，但在实际应用中不推荐这样做。
请注意，在 Chrome 中，无法设置小于一分钟的定时器。

*/
let CAKE_INTERVAL = 0.1;

browser.alarms.create("", { periodInMinutes: CAKE_INTERVAL });

browser.alarms.onAlarm.addListener((alarm) => {
  browser.notifications.create(cakeNotification, {
    type: "basic",
    iconUrl: browser.runtime.getURL("icons/cake-96.png"),
    title: "是时候吃蛋糕了！",
    message: "一些有意思的蛋糕",
  });
});

browser.browserAction.onClicked.addListener(() => {
  const clearing = browser.notifications.clear(cakeNotification);
  clearing.then(() => {
    console.log("通知已被清除");
  });
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.notifications`](https://developer.chrome.google.cn/docs/extensions/reference/api/notifications#method-create) API。
