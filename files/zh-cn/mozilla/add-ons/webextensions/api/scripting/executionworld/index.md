---
title: scripting.ExecutionWorld
slug: Mozilla/Add-ons/WebExtensions/API/scripting/ExecutionWorld
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

指定通过 {{WebExtAPIRef("scripting.executeScript()")}} 插入或通过 {{WebExtAPIRef("scripting.registerContentScripts()")}} 注册的脚本的执行环境。

## 类型

该类型的取值是字符串，可能取值包括：

- `ISOLATED`

  [内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)的默认执行环境。该环境与页面上下文隔离：虽然它们共享同一个文档，但全局作用域和可用的 API 不同。

- `MAIN`

  网页执行环境。该环境与网页共享而没有隔离。在该环境中的脚本无法访问仅供内容脚本使用的 API。

  > [!WARNING]
  > 由于缺乏隔离，网页可以检测并干扰执行的代码。除非网页可以读取、访问或修改通过执行的代码流动的逻辑或数据，否则不要使用 `MAIN` 环境。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.scripting`](https://developer.chrome.google.cn/docs/extensions/reference/api/scripting#type-ExecutionWorld) API。
