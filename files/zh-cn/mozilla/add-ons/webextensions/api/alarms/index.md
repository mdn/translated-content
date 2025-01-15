---
title: alarms
slug: Mozilla/Add-ons/WebExtensions/API/alarms
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{AddonSidebar}}

在未来一个特定的时间运行的计划任务代码。这很像 {{domxref("Window.setTimeout()")}}、{{domxref("Window.setInterval()")}}，不过这些函数仅可以按需使用而不能在后台页面工作。

闹钟不会在浏览器会话之间持续存在。它们在单个扩展的所有上下文中全局创建。例如，在后台脚本中创建的闹钟将在后台脚本、选项页面、弹出页面和扩展标签页中触发 [`onAlarm`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm) 事件（反之亦然）。闹钟 API 在[内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis)中不可用。

想要使用这个 API，你需要获取“alarms”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 类型

- {{WebExtAPIRef("alarms.Alarm")}}
  - : 关于特定闹钟的信息。

## 方法

- {{WebExtAPIRef("alarms.clear()")}}
  - : 清除指定名称的闹钟。
- {{WebExtAPIRef("alarms.clearAll()")}}
  - : 清除所有计划的闹钟。
- {{WebExtAPIRef("alarms.create()")}}
  - : 创建新的闹钟。
- {{WebExtAPIRef("alarms.get()")}}
  - : 通过名称获取指定的闹钟。
- {{WebExtAPIRef("alarms.getAll()")}}
  - : 获取所有计划的闹钟。

## 事件

- {{WebExtAPIRef("alarms.onAlarm")}}
  - : 当闹钟发生的时候触发。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.alarms`](https://developer.chrome.google.cn/docs/extensions/reference/api/alarms) API。
