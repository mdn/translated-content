---
title: userScripts.UserScriptFilter
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/UserScriptFilter
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

要由 {{WebExtAPIRef("userScripts.getScripts()")}} 或 {{WebExtAPIRef("userScripts.unregister()")}} 处理的用户脚本列表。

## 类型

此类型的值是一个包含以下属性的对象：

- `ids` {{optional_inline}}
  - : `string` 的 `array`。要由 {{WebExtAPIRef("userScripts.getScripts()")}} 和 {{WebExtAPIRef("userScripts.unregister()")}} 处理的用户脚本 ID。这些 ID 与 {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} 的 `id` 字段匹配。如果未指定，则匹配所有用户脚本。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
