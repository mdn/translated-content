---
title: alarms
slug: Mozilla/Add-ons/WebExtensions/API/alarms
---

{{AddonSidebar}}

在未来一个特定的时间运行的计划任务代码。这很像[`setTimeout()`](/zh-CN/docs/Web/API/WindowTimers/setTimeout)和[`setInterval()`](/zh-CN/docs/Web/API/WindowTimers/setInterval)，不过这些函数仅可以按需使用而不能在后台页面工作。

想要使用这个 API，您需要获取"alarms"的[permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 类型

- {{WebExtAPIRef("alarms.Alarm")}}
  - : Information about a particular alarm.

## 方法

- {{WebExtAPIRef("alarms.create()")}}
  - : 创建新的 alarm.
- {{WebExtAPIRef("alarms.get()")}}
  - : 通过名称获取指定的 alarm.
- {{WebExtAPIRef("alarms.getAll()")}}
  - : 获取所有的 alarm.
- {{WebExtAPIRef("alarms.clear()")}}
  - : 清除指定名称的 alarm.
- {{WebExtAPIRef("alarms.clearAll()")}}
  - : 清除所有的 alarm.

## 事件

- {{WebExtAPIRef("alarms.onAlarm")}}
  - : 当 alarm 发生的时候触发。

## 浏览器兼容性

{{Compat}}

> **备注：** The "Chrome incompatibilities" section is included from [https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities](/zh-CN/Add-ons/WebExtensions/Chrome_incompatibilities) using the [WebExtChromeCompat](/zh-CN/docs/Template:WebExtChromeCompat) macro.
>
> If you need to update this content, edit [https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities](/zh-CN/Add-ons/WebExtensions/Chrome_incompatibilities), then shift-refresh this page to see your changes.

{{WebExtExamples("h2")}}

> **备注：** This API is based on Chromium's [`chrome.alarms`](https://developer.chrome.com/extensions/alarms) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
