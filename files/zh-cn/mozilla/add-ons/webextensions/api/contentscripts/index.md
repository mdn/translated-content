---
title: contentScripts
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts
l10n:
  sourceCommit: eec174a08a5003da32f53e694c45eda3377b4d18
---

{{AddonSidebar}}

使用此 API 注册内容脚本。注册内容脚本会指示浏览器将给定的内容脚本插入到与给定 URL 模式匹配的页面中。

> [!NOTE]
> 使用 Manifest V3 或更高版本时，请使用 {{WebExtAPIRef("scripting.registerContentScripts()")}} 注册脚本。

此 API 与 [`"content_scripts"`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) [`manifest.json`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 键非常相似，不同之处在于，使用 `"content_scripts"` 时，内容脚本和相关模式集自拓展安装之后就是固定的。而使用 `contentScripts` API，扩展程序可以在运行时注册和取消注册脚本。

要使用此 API，请调用 {{WebExtAPIRef("contentScripts.register()")}}，传入一个定义要注册的脚本、URL 模式和其他选项的对象。这会返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现为一个 {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} 对象。

`RegisteredContentScript` 对象表示这是在 `register()` 调用中注册的脚本。它定义了一个 `unregister()` 方法，你可以使用它来取消注册内容脚本。当创建它们的页面被销毁时，内容脚本也会自动取消注册。例如，如果它们是从背景页注册的，当背景页被销毁时，它们会自动取消注册；如果它们是从侧边栏或弹出窗口注册的，当侧边栏或弹出窗口关闭时，它们会自动取消注册。

没有与 `contentScripts` API 相关联的权限，但是拓展必须拥有与其试图通过 `register()` 注册的脚本的匹配模式相对应的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)。

## 类型

- {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}
  - : {{WebExtAPIRef("contentScripts.register()")}} 函数会返回一个持有此类型的对象。它表示被通过调用此函数注册的内容脚本，可被用于取消注册对应的内容脚本。

## 函数

- {{WebExtAPIRef("contentScripts.register()")}}
  - : 注册给定的内容脚本。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}
