---
title: userScripts.ScriptSource
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/ScriptSource
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

用户脚本的代码或源文件，描述了 {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} 中“js”属性的对象值。

## 类型

此类型的值是一个包含以下属性的对象：

- `file` {{optional_inline}}
  - : `string`。包含用户脚本代码的文件路径。路径应相对于扩展的根目录。
- `allFrames` {{optional_inline}}
  - : `code`。用户脚本的 JavaScript 代码。

`file` 或 `code` 必须指定其中之一。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
