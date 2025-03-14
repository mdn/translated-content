---
title: notifications.update()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/update
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

更新给定 ID 的通知。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let updating = browser.notifications.update(
  id,                            // 字符串
  options                        // NotificationOptions
)
```

### 参数

- `id`
  - : `string`。要更新的通知的 ID。与传递给 {{WebExtAPIRef('notifications.create()')}} 的回调函数的 ID 相同。
- `options`
  - : {{WebExtAPIRef('notifications.NotificationOptions')}}，定义通知的新内容和新行为。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，将会以一个布尔值兑现：如果通知被更新，则为 `true`，否则为 `false`（例如 `id` 指代的通知不存在）。

## 浏览器兼容性

{{Compat}}

## 示例

这个示例使用 `update()` 来更新一个进度通知。点击浏览器操作按钮会显示通知并启动一个 {{WebExtAPIRef("alarms", "alarm")}}。我们将使用它来更新通知的进度指示器。

请注意，你需要“alarms”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)来创建闹钟（以及“notifications”权限来创建通知）。还请注意，Firefox 不支持 `progress` 属性。

```js
let cakeNotification = "cake-notification";

/*

在本例中，CAKE_INTERVAL 被设定为 0.3 秒。我们选定这一较短的时间是为了使扩展的行为更加明显，但在实际应用中不推荐这样做。
请注意，在 Chrome 中，无法设置小于一分钟的定时器。

*/
let CAKE_PREP_INTERVAL = 0.005;

let progress = 0;

browser.alarms.onAlarm.addListener((alarm) => {
  progress += 10;
  if (progress > 100) {
    browser.notifications.clear(cakeNotification);
    browser.alarms.clear("cake-progress");
  } else {
    browser.notifications.update(cakeNotification, { progress });
  }
});

browser.browserAction.onClicked.addListener(() => {
  browser.notifications.getAll((all) => {
    if (all.length > 0) {
      browser.notifications.clear(cakeNotification);
      return;
    }
    progress = 0;
    browser.notifications.create(cakeNotification, {
      type: "progress",
      iconUrl: browser.extension.getURL("icons/cake-48.png"),
      title: "正在准备你的蛋糕……",
      message: "一些蛋糕",
      progress,
    });
    browser.alarms.create("cake-progress", {
      periodInMinutes: CAKE_PREP_INTERVAL,
    });
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.notifications`](https://developer.chrome.google.cn/docs/extensions/reference/api/notifications) API。
