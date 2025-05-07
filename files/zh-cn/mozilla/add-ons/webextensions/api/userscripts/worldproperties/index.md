---
title: userScripts.WorldProperties
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/WorldProperties
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

`USER_SCRIPT` 执行环境的配置。用于 {{WebExtAPIRef("userScripts.configureWorld")}} 和 {{WebExtAPIRef("userScripts.getWorldConfigurations")}}。

## 类型

此类型的值是一个包含以下属性的对象：

- `worldId` {{optional_inline}}
  - : `string`。世界的标识符。以下划线 (`_`) 开头的值是保留的。最大长度为 256 个字符。默认为默认的 `USER_SCRIPT` 世界 ("")。要在此世界中运行用户脚本，请在注册或更新用户脚本时将此值作为 {{WebExtAPIRef("userScripts.RegisteredUserScript")}} 的 `worldId` 属性传递。
- `csp` {{optional_inline}}
  - : `string`。世界的内容安全策略 (CSP)。默认为[内容脚本的默认 CSP](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts)，该策略禁止动态代码执行，例如 `eval()`。
- `messaging` {{optional_inline}}
  - : `boolean`。是否向用户脚本世界公开 {{WebExtAPIRef("runtime.sendMessage")}} 和 {{WebExtAPIRef("runtime.connect")}} 方法。默认为隐藏这些消息传递 API。当调用这些方法时，会触发 {{WebExtAPIRef("runtime.onUserScriptMessage")}} 和 {{WebExtAPIRef("runtime.onUserScriptConnect")}} 事件处理程序。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
