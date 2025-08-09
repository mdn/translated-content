---
title: scripting.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

该对象包含要注册或已注册的脚本的详细信息。

## 类型

该类型的取值为对象。它包含以下属性：

- `allFrames` {{optional_inline}}
  - : `boolean`。若设置为 `true`，则该脚本将被注入到所有框架中（即便该框架不是标签页中最顶层的框架）。各框架将相互独立地检查 URL 要求；如果不满足 URL 要求，则不会注入到子框架中。默认设为 `false`，即只会匹配最顶层的框架。
- `css` {{optional_inline}}
  - : `string` 数组（`array`）。要注入到匹配页面的 CSS 文件列表。将按照数组中的顺序注入。
- `excludeMatches` {{optional_inline}}
  - : `string` 数组（`array`）。此内容脚本排除而不注入的页面列表。
- `id`
  - : `string`。在 API 调用中指定的内容脚本的 ID。
- `js` {{optional_inline}}
  - : `string` 数组（`array`）。要注入到匹配页面的扩展包中的 JavaScript 文件的路径。将按照数组中的顺序注入脚本。
- `matches` {{optional_inline}}
  - : `string` 数组（`array`）。内容脚本将要注入的页面。必须在 {{WebExtAPIRef("scripting.registerContentScripts()")}} 中指定。
- `matchOriginAsFallback` {{optional_inline}}
  - : `boolean`。当页面的来源与 `matches` 中的模式匹配时，是否将代码注入到 `about:`、`data:` 和 `blob:` 页面中，即使文档来源是不透明的（由于 CSP 或 iframe 沙箱）。`matches` 中的匹配模式必须指定通配符路径 glob。默认为 `false`。
- `persistAcrossSessions` {{optional_inline}}
  - : `boolean`。指定此内容脚本是否在浏览器重新启动和更新以及扩展重新启动时保留。默认为 `true`。
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}。指定 JavaScript 文件注入到网页的时间。默认值为 `document_idle`。在 Firefox 中，`runAt` 也会影响 CSS 的插入点。在 Chrome 中，`runAt` 不会影响 CSS 的插入点。
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ExecutionWorld")}}。脚本执行的执行环境。默认为 `ISOLATED`。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.scripting`](https://developer.chrome.google.cn/docs/extensions/reference/api/scripting#type-RegisteredContentScript) API。
