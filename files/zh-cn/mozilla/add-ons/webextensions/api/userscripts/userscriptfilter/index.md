---
title: userScripts.UserScriptFilter
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/UserScriptFilter
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

要由 {{WebExtAPIRef("userScripts.getScripts()")}} 或 {{WebExtAPIRef("userScripts.unregister()")}} 处理的用户脚本列表。

## 类型

此类型的值是一个包含以下属性的对象：

- `ids` {{optional_inline}}
  - : `string` 的数组（`array`）。要由 {{WebExtAPIRef("userScripts.getScripts()")}} 和 {{WebExtAPIRef("userScripts.unregister()")}} 处理的用户脚本的 ID。这些 ID 应与 {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} 的 `id` 字段相匹配。如果未指定，则将匹配所有用户脚本。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
