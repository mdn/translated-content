---
title: userScripts.ScriptSource
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/ScriptSource
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

用户脚本的代码或源文件。这描述了 {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} 中 "js" 属性的对象值。

## 类型

此类型的值是一个包含以下属性的对象：

- `file` {{optional_inline}}
  - : `string`。包含用户脚本代码的文件路径。路径相对于扩展的根目录。
- `allFrames` {{optional_inline}}
  - : `code`。用户脚本的 JavaScript 代码。

`file` 或 `code` 必须指定一个，但不能同时指定。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
