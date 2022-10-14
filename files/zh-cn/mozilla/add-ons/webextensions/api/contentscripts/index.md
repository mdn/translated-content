---
title: contentScripts
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts
---

{{AddonSidebar}}

使用此 API 以注册内容脚本。“注册内容脚本”意味着浏览器会将给定的内容脚本插入到每个与给定的 URL 模式相匹配的页面中。

此 API 与 [`manifest.json`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 的 [`"content_scripts"`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 键非常相似，但 `"content_scripts"` 键所能注册的内容脚本是固定的，自拓展安装后便不可更改。但通过 `contentScripts` API，拓展可以在运行时动态地注册或取消注册脚本。

To use the API, call {{WebExtAPIRef("contentScripts.register()")}} passing in an object defining the scripts to register, the URL patterns, and other options. This returns a [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is resolved with a {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} object.

The `RegisteredContentScript` object represents the scripts that were registered in the `register()` call. It defines an `unregister()` method that you can use to unregister the content scripts. Content scripts are also unregistered automatically when the page that created them is destroyed. For example, if they are registered from the background page they will be unregistered automatically when the background page is destroyed, and if they are registered from a sidebar or a popup, they will be unregistered automatically when the sidebar or popup is closed.

没有与 `contentScripts` API 相关联的权限，但是拓展必须拥有与其试图通过 `register()` 注册的脚本的匹配模式相对应的[主机权限](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions)，才能实现注入。

## 类型

- {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}
  - : {{WebExtAPIRef("contentScripts.register()")}} 函数会返回一个持有此类型的对象。它表示被通过调用此函数注册的内容脚本，可被用于取消注册对应的内容脚本。

## 函数

- {{WebExtAPIRef("contentScripts.register()")}}
  - : 注册给定的内容脚本。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}
