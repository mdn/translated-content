---
title: browserSettings.webNotificationsDisabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/webNotificationsDisabled
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

一个 {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} 对象，可用于阻止网站使用 [`Notifications`](/zh-CN/docs/Web/API/Notifications_API) Web API 显示通知。

`Notifications` API 用于向用户显示桌面通知。通知有三个级别的权限：_允许_、*拒绝*和*提示*。用户可以为每个站点设置此权限。如果用户没有为特定站点设置权限，则浏览器将回退到全局权限，其默认值为*提示*。

把 `browserSettings.webNotificationsDisabled` 设置为 `true` 以将全局权限切换为*拒绝*。

请注意，这不会影响用户已经设置了站点首选项的站点。例如，如果用户将 <https://example.org> 设置为*允许*，然后扩展程序将 `browserSettings.webNotificationsDisabled` 设置为 `true`，那么 [https://example.org](https://example.org) 下的页面仍将被允许显示通知。

把 `browserSettings.webNotificationsDisabled` 设置为 `false` 以将全局默认值恢复为其默认值。

请注意，此设置对使用 [`notifications`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API 创建的扩展程序通知没有影响。

## 浏览器兼容性

{{Compat}}

## 示例

切换设置：

```js
async function toggleWebNotifications() {
  let current = await browser.browserSettings.webNotificationsDisabled.get({});
  console.log(`当前值：${current.value}`);
  browser.browserSettings.webNotificationsDisabled.set({
    value: !current.value,
  });
}

browser.browserAction.onClicked.addListener(() => {
  toggleWebNotifications();
});
```

{{WebExtExamples}}
