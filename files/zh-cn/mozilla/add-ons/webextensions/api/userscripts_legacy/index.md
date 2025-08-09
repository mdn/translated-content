---
title: userScripts（旧版）
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

> [!WARNING]
> 本文档针对旧版 `userScripts` API 编写，适用于 Firefox Manifest V2 版本。如希望在 Manifest V3 中使用用户脚本功能，可参见新的 {{WebExtAPIRef("userScripts")}} API。

使用此 API 注册用户脚本，即那些设计用于操作网页或提供新功能的第三方脚本。注册用户脚本会指示浏览器将脚本附加到与注册期间指定的 URL 模式匹配的页面上。

此 API 提供类似 {{WebExtAPIRef("contentScripts")}} 的功能，但包含一些专为处理第三方脚本而设计的特性：

- 在隔离的沙箱中执行：每个用户脚本都在 web 内容进程的隔离沙箱中运行，避免脚本之间的意外或故意干扰。
- 访问与附加了用户脚本的网页相关的 `window` 和 `document` 全局值。
- 不可访问 WebExtension API 以及授予扩展的相关权限：API 脚本继承扩展的权限，可以向注册的用户脚本提供打包的 WebExtension API。API 脚本需要在扩展的清单文件中通过“user_scripts”键声明。

> [!WARNING]
> 即使未指定 API 脚本，此 API 仍需要在 manifest.json 中包含 [`user_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) 键。例如：`user_scripts: {}`。

要使用该 API，请调用 {{WebExtAPIRef("userScripts_legacy.register","register()")}} 方法，传入一个定义要注册的脚本的对象。该方法将返回一个 Promise，其将以 {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}} 对象的形式兑现。

> [!NOTE]
> 当与用户脚本相关联的扩展页面（注册了这一用户脚本的页面）被卸载时，用户脚本将被自动注销。因此，你应该在一个页面存在时间至少与你希望用户脚本保持注册的时间一样长的扩展页面中注册该用户脚本。

## 类型

- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript")}}
  - : {{WebExtAPIRef("userScripts_legacy.register","register()")}} 方法返回的对象（`object`）。其表示已注册的用户脚本，并可用于取消注册用户脚本。

## 方法

- {{WebExtAPIRef("userScripts_legacy.register()")}}
  - : 注册用户脚本。

## 事件

- {{WebExtAPIRef("userScripts_legacy.onBeforeScript")}}
  - : 可用于 API 脚本的事件，在 [`"user_scripts"`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) 中注册，并将在用户脚本执行前执行。该事件可用来触发 API 脚本提供的附加 API 的导出，以便用户脚本访问这些 API。

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 `userScripts`（旧版）](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/Working_with_userScripts)
- {{WebExtAPIRef("contentScripts","browser.contentScripts")}}
