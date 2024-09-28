---
title: alarms.Alarm
slug: Mozilla/Add-ons/WebExtensions/API/alarms/Alarm
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

有关单个闹钟的信息。此对象可以由 {{WebExtAPIRef('alarms.get()')}} 和 {{WebExtAPIRef('alarms.getAll()')}} 返回，也会被传递到 {{WebExtAPIRef('alarms.onAlarm')}} 监听器中。

## 类型

此类型的值是对象，包含以下属性：

- `name`
  - : `string`。此闹钟的名称。这是传递给创建此闹钟的 {{WebExtAPIRef('alarms.create()')}} 调用的名称。
- `scheduledTime`
  - : `double`。闹钟下次计划触发的时间，以[自纪元以来的毫秒数表示](https://zh.wikipedia.org/wiki/UNIX时间)。
- `periodInMinutes` {{optional_inline}}
  - : `double`。如果此值不为 `null`，则该闹钟是周期性的，这代表其周期（以分钟为单位）。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.alarms`](https://developer.chrome.google.cn/docs/extensions/reference/api/alarms) API。
