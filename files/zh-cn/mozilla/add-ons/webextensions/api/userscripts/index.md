---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

使用此 API 注册用户脚本，即那些设计用于操作网页或提供新功能的第三方脚本。注册用户脚本会指示浏览器将脚本附加到在注册期间指定的 URL 模式匹配的页面上。

> [!NOTE]
> 本文档针对的是旧版 API，仅适用于 Firefox 中的 Manifest V2。一种新的 API 已经设计完毕，参见 [WECG issue 279](https://github.com/w3c/webextensions/issues/279)。新版 API 将适用于 Firefox 中的 Manifest V3。开发进度可在 [Firefox bug 1875475](https://bugzil.la/1875475) 处跟踪。Chrome 已包含了这一[新 API 的实现](https://developer.chrome.google.cn/docs/extensions/reference/api/userScripts)。同时，当使用 Manifest V3 或更高版本时，请使用 {{WebExtAPIRef("scripting.registerContentScripts()")}} 来注册脚本。

此 API 提供类似 {{WebExtAPIRef("contentScripts")}} 的功能，但包含一些专为处理第三方脚本而设计的特性：

- 在隔离的沙箱中执行：每个用户脚本都在网页内容进程中的隔离沙箱中运行，避免脚本之间的意外或故意干扰。
- 访问与附加了用户脚本的网页相关的 `window` 和 `document` 全局值。
- 不可访问 WebExtension API 以及授予扩展的相关权限：API 脚本继承扩展的权限，可以向注册的用户脚本提供打包的 WebExtension API。API 脚本需要在扩展的清单文件中通过“user_scripts”键声明。

> [!WARNING]
> 即使未指定 API 脚本，此 API 仍需要在 manifest.json 中包含“user_scripts”键。例如：`user_scripts: {}`。

要使用该 API，请调用 `{{WebExtAPIRef("userScripts.register","register()")}}` 方法，传入一个定义要注册的脚本的对象。该方法将返回一个 Promise，其将以 `{{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}` 对象的形式兑现。

> [!NOTE]
> 用户脚本在相关的扩展页面（从中注册了用户脚本）被卸载时会被注销，因此应该从至少与用户脚本的有效期相当的扩展页面注册用户脚本。

## 类型

- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : {{WebExtAPIRef("userScripts.register","register()")}} 方法返回的对象表示已注册的用户脚本，并可用于取消注册用户脚本。

## 方法

- {{WebExtAPIRef("userScripts.register()")}}
  - : 注册用户脚本。

## 事件

- {{WebExtAPIRef("userScripts.onBeforeScript")}}
  - : 可用于 API 脚本的事件，在 [`"user_scripts"`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) 中注册，并将在用户脚本执行前执行。该事件可用来触发 API 脚本提供的附加 API 的导出，以便用户脚本访问这些 API。

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 `userScripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/Working_with_userScripts)
- {{WebExtAPIRef("contentScripts","browser.contentScripts")}}
