---
title: Command
slug: Mozilla/Add-ons/WebExtensions/API/commands/Command
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

有关命令的信息。这包含在 [`commands` manifest.json 键](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)中指定的命令信息。

调用 {{WebExtAPIRef('commands.getAll()')}} 将返回包含这些对象的数组。

## 类型

这些类型的值是对象。它们包含以下属性：

- `name` {{optional_inline}}
  - : `string`。命令的名称。这将传递给 {{WebExtAPIRef('commands.onCommand')}} 事件监听器。
- `description` {{optional_inline}}
  - : `string`。命令的描述。主要用于向用户解释该命令的作用。
- `shortcut` {{optional_inline}}
  - : `string`。用于执行此命令的键，指定为类似“Ctrl+Shift+Y”的字符串。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.commands`](https://developer.chrome.google.cn/docs/extensions/reference/api/commands) API。
