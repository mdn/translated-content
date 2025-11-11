---
title: userScripts.WorldProperties
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/WorldProperties
l10n:
  sourceCommit: 3d283cb0a0c6f36ad09ca95f751a30bd3a1fcf4d
---

`USER_SCRIPT` 执行环境的配置。用于 {{WebExtAPIRef("userScripts.configureWorld")}} 和 {{WebExtAPIRef("userScripts.getWorldConfigurations")}}。

## 类型

此类型的值是一个包含以下属性的对象：

- `worldId` {{optional_inline}}
  - : `string`。环境的标识符。以下划线 (`_`) 开头的值是保留的。最大长度为 256 个字符。默认为默认的 `USER_SCRIPT` 环境 (`""`)。要在此环境中运行用户脚本，请在注册或更新用户脚本时将此值作为 {{WebExtAPIRef("userScripts.RegisteredUserScript")}} 的 `worldId` 属性传递。
- `csp` {{optional_inline}}
  - : `string`。环境的内容安全策略 (CSP)。默认为[内容脚本的默认内容安全策略](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#内容脚本的默认内容安全策略)，该策略禁止动态代码执行，例如 `eval()`。
- `messaging` {{optional_inline}}
  - : `boolean`。是否向用户脚本环境暴露 {{WebExtAPIRef("runtime.sendMessage")}} 和 {{WebExtAPIRef("runtime.connect")}} 方法。默认为隐藏这些消息传递 API。当调用这些方法时，会触发 {{WebExtAPIRef("runtime.onUserScriptMessage")}} 和 {{WebExtAPIRef("runtime.onUserScriptConnect")}} 事件处理器。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
