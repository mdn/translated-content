---
title: alarms
slug: Mozilla/Add-ons/WebExtensions/API/alarms
l10n:
  sourceCommit: eec174a08a5003da32f53e694c45eda3377b4d18
---

{{AddonSidebar}}

在未来一个特定的时间运行的计划任务代码。这很像 [`setTimeout()`](/zh-CN/docs/Web/API/WindowTimers/setTimeout) 和 [`setInterval()`](/zh-CN/docs/Web/API/WindowTimers/setInterval)，不过这些函数仅可以按需使用而不能在后台页面工作。

闹钟不会在浏览器会话之间持续存在。它们在单个扩展的所有上下文中全局创建。例如，在后台脚本中创建的闹钟将在后台脚本、选项页面、弹出页面和扩展标签页中触发 [`onAlarm`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm) 事件（反之亦然）。闹钟 API 在[内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis)中不可用。

想要使用这个 API，你需要获取"alarms"的[permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 类型

- {{WebExtAPIRef("alarms.Alarm")}}
  - : 关于特定闹钟的信息。

## 方法

- {{WebExtAPIRef("alarms.clear()")}}
  - : 清除指定名称的 alarm。
- {{WebExtAPIRef("alarms.clearAll()")}}
  - : 清除所有的 alarm。
- {{WebExtAPIRef("alarms.create()")}}
  - : 创建新的 alarm。
- {{WebExtAPIRef("alarms.get()")}}
  - : 通过名称获取指定的 alarm。
- {{WebExtAPIRef("alarms.getAll()")}}
  - : 获取所有的 alarm。

## 事件

- {{WebExtAPIRef("alarms.onAlarm")}}
  - : 当 alarm 发生的时候触发。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}

> **备注：** 这个API是基于 Chromium 的[`chrome.alarms`](https://developer.chrome.com/extensions/alarms) API。
