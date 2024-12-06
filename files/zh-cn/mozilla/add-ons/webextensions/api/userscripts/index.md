---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

使用该 API 以注册旨在操控网页或提供新功能的用户脚本与第三方脚本。注册用户脚本会指示浏览器将脚本附加到与注册期间指定的 URL 模式匹配的页面上。

> [!NOTE]
> 这是适用于 Manifest V2 的 Firefox 中的旧 API 版本的文档。我们已经设计了新的 API，参见 [WECG issue 279](https://github.com/w3c/webextensions/issues/279)。新版 API 将适用于在 Firefox 中使用 Manifest V3。开发已在 [Firefox bug 1875475](https://bugzil.la/1875475) 中跟踪。Chrome 包含了[新 API 的实现](https://developer.chrome.google.cn/docs/extensions/reference/api/userScripts)。同时，当使用 Manifest V3 或更高版本时，请使用 {{WebExtAPIRef("scripting.registerContentScripts()")}} 来注册脚本。

该 API 提供了类似于 {{WebExtAPIRef("contentScripts")}} 的功能，但具有适合处理第三方脚本的特性：

- 在隔离的沙箱中执行：每个用户脚本都在网页内容进程中的隔离沙箱中运行，防止脚本之间的意外或故意干扰。
- 访问与用户脚本附加到的网页相关的 `window` 和 `document` 全局值。
- 不可访问 WebExtension API 以及授予扩展的相关权限：继承扩展权限的 API 脚本可以向注册的用户脚本提供打包的 WebExtension API。API 脚本需在扩展的清单文件中使用“user_scripts”清单键声明。

> [!WARNING]
> 该 API 需要在 manifest.json 中包含 [`user_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) 键，即使没有指定 API 脚本，如 `user_scripts: {}`。


要使用该 API，请调用 `{{WebExtAPIRef("userScripts.register","register()")}}`，传入一个定义要注册的脚本的对象。该方法返回一个 Promise，其将以 `{{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}` 对象的形式兑现。

> [!NOTE]
> 用户脚本在相关的扩展页面（从中注册了用户脚本）卸载时会被注销，因此你应该从至少持续与你希望用户脚本保持注册的时间一样长的扩展页面中注册用户脚本。

## 类型

- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : {{WebExtAPIRef("userScripts.register","register()")}} 方法返回的对象。它代表了已注册的用户脚本，并用于注销用户脚本。

## 方法

- {{WebExtAPIRef("userScripts.register()")}}
  - : 注册用户脚本

## 事件

- {{WebExtAPIRef("userScripts.onBeforeScript")}}
  - : 在 [`"user_scripts"`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) 中注册，将在一个用户脚本执行前执行的对 API 可用的事件。使用该事件来触发由 API 脚本提供的附加 API 的导出，以便它们对用户脚本可用。

## 浏览器兼容性

{{Compat}}

## See also

- [使用 `userScripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/Working_with_userScripts)
- {{WebExtAPIRef("contentScripts","browser.contentScripts")}}
