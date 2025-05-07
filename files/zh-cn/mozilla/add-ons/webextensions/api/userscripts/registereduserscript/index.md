---
title: userScripts.RegisteredUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

表示已注册用户脚本的对象。由 {{WebExtAPIRef("userScripts.getScripts","userScripts.getScripts()")}} 返回，并用作 {{WebExtAPIRef("userScripts.register","userScripts.register()")}} 和 {{WebExtAPIRef("userScripts.update","userScripts.update()")}} 的输入。

## 类型

此类型的值是包含以下属性的对象：

- `allFrames` {{optional_inline}}
  - : `boolean`。如果 `allFrames` 为 `true`，脚本将注入到页面的所有框架中。默认情况下为 `false`，脚本仅注入到顶层框架中。
- `id`
  - : `string`。用户脚本的 ID。此属性不得以 '\_' 开头，因为它是为生成的脚本 ID 保留的前缀。
- `js` {{optional_inline}} 用于 {{WebExtAPIRef("userScripts.update()")}} 调用，{{WebExtAPIRef("userScripts.register()")}} 调用时为必需
  - : {{WebExtAPIRef("userScripts.ScriptSource")}} 的 `array`。要注入到匹配页面的脚本。
- `matches` {{optional_inline}}
  - : `string` 的 `array`。[匹配模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)，用于运行脚本的页面。在 {{WebExtAPIRef("userScripts.register()")}} 调用中必须指定 `matches` 或 `includeGlobs`。
- `excludeMatches` {{optional_inline}}
  - : `string` 的 `array`。[匹配模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)，脚本不得运行的页面。
- `includeGlobs` {{optional_inline}}
  - : `string`。[Glob 模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#globs)，用于运行脚本的页面。在 {{WebExtAPIRef("userScripts.register()")}} 调用中必须指定 `matches` 或 `includeGlobs`。
- `excludeGlobs` {{optional_inline}}
  - : `string`。[Glob 模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#globs)，脚本不得运行的页面。
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}。脚本注入到标签页的最早时间。默认为 `"document_idle"`。
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.ExecutionWorld")}}。运行脚本的执行环境。默认为 `"USER_SCRIPT"`。
- `worldId` {{optional_inline}}
  - : `string`。脚本执行的用户脚本世界的 ID。仅当 `world` 为 `USER_SCRIPT` 或省略时有效。如果省略 `worldId`，脚本将在默认的 `USER_SCRIPT` 世界（""）中执行。以下划线 (`_`) 开头的值是保留的。最大长度为 256 个字符。一个世界可以被多个脚本用作其执行环境。要配置世界的行为，请在第一个脚本在该世界中执行之前，将其 `worldId` 传递给 {{WebExtAPIRef("userScripts.configureWorld")}}。

## 浏览器兼容性

{{Compat}}
