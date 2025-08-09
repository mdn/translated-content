---
title: UserScripts.UserScriptOptions（旧版）
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/UserScriptOptions
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

> [!WARNING]
> 本文档针对旧版 `userScripts` API 编写，适用于 Firefox Manifest V2 版本。如希望在 Manifest V3 中使用用户脚本功能，可参见新的 {{WebExtAPIRef("userScripts")}} API。

UserScriptOptions 对象表示要注册的内容脚本。它具有与 browser.contentScripts.register 支持的 contentScript 选项类似的语法。不同之处在于：

- 它不支持 CSS 属性（使用 browser.contentScripts.register 动态注册/注销样式表）
- 它支持一个可选的 scriptMetadata 属性（作为一个普通的 JSON 对象，其中包含与注册的 userScripts 关联的一些元数据属性）

UserScriptOptions 对象具有以下属性：

- `allFrames` {{optional_inline}}
  - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `all_frames` 相同。
- `excludeGlobs` {{optional_inline}}
  - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `exclude_globs` 相同。
- `excludeMatches` {{optional_inline}}
  - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `exclude_matches` 相同。
- `includeGlobs` {{optional_inline}}
  - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `include_globs` 相同。
- `js` {{optional_inline}}
  - : 一个对象数组。每个对象都有一个名为 `file` 且值为一个从扩展的 manifest.json 开始指向要注册的 JavaScript 文件的 URL 的属性，或者是一个名为 `code` 且包含要注册的一些 JavaScript 代码的属性。
- `matchAboutBlank` {{optional_inline}}
  - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `match_about_blank` 相同。
- `matches`
  - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `matches` 相同。
- `runAt` {{optional_inline}}
  - : 与 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键中的 `run_at` 相同。
- `scriptMetadata` {{optional_inline}}
  - : 一个用户脚本元数据值

它具有与 browser.contentScripts.register 支持的 contentScript 选项类似的语法。
