---
title: userScripts.RegisteredUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
l10n:
  sourceCommit: 3d283cb0a0c6f36ad09ca95f751a30bd3a1fcf4d
---

表示已注册用户脚本的对象。由 {{WebExtAPIRef("userScripts.getScripts","userScripts.getScripts()")}} 返回，并用作 {{WebExtAPIRef("userScripts.register","userScripts.register()")}} 和 {{WebExtAPIRef("userScripts.update","userScripts.update()")}} 的输入。

## 类型

此类型的值是包含以下属性的对象：

- `allFrames` {{optional_inline}}
  - : `boolean`。如果 `allFrames` 为 `true`，脚本将注入到页面的所有框架中。默认情况下为 `false`，此时脚本仅注入到顶层框架中。
- `id`
  - : `string`。用户脚本的 ID。该属性不得以“\_”开头，因为它是为生成的脚本保留的脚本 ID 的前缀。
- `js` 对于 {{WebExtAPIRef("userScripts.update()")}} 是 {{optional_inline}} 的，而对于 {{WebExtAPIRef("userScripts.register()")}} 是必需的
  - : {{WebExtAPIRef("userScripts.ScriptSource")}} 的数组（`array`）。要注入到匹配页面的脚本。
- `matches` {{optional_inline}}
  - : `string` 的数组（`array`）。用于匹配执行脚本的页面的[匹配模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)。在 {{WebExtAPIRef("userScripts.register()")}} 调用中必须指定 `matches` 或 `includeGlobs` 其中之一。
- `excludeMatches` {{optional_inline}}
  - : `string` 的数组（`array`）。用于匹配不应让脚本执行的页面的[匹配模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)。
- `includeGlobs` {{optional_inline}}
  - : `string`。用于匹配执行脚本的页面的 [glob 模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#glob)。在 {{WebExtAPIRef("userScripts.register()")}} 调用中必须指定 `matches` 或 `includeGlobs` 其中之一。
- `excludeGlobs` {{optional_inline}}
  - : `string`。用于匹配不应让脚本执行的页面的 [glob 模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#glob)。
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}。脚本注入到标签页的最早时间。默认为 `"document_idle"`。
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.ExecutionWorld")}}。运行脚本的执行环境。默认为 `"USER_SCRIPT"`。
- `worldId` {{optional_inline}}
  - : `string`。脚本执行的用户脚本环境的 ID。仅当 `world` 为 `USER_SCRIPT` 或省略时有效。如果省略 `worldId`，脚本将在默认的 `USER_SCRIPT` 环境（`""`）中执行。以下划线（`_`）开头的值是保留的。最大长度为 256 个字符。一个环境可以被多个脚本用作其执行环境。要配置环境的行为，请在第一个脚本在该环境中执行之前，将其 `worldId` 传入 {{WebExtAPIRef("userScripts.configureWorld")}}。

## 浏览器兼容性

{{Compat}}
