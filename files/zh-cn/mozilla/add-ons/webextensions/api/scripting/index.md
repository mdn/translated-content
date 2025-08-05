---
title: scripting
slug: Mozilla/Add-ons/WebExtensions/API/scripting
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

向网站中注入 JavaScript 与 CSS。该 API 提供了两种注入内容的方法：

- 用于一次性注入的 {{WebExtAPIRef("scripting.executeScript()")}}、{{WebExtAPIRef("scripting.insertCSS()")}} 和 {{WebExtAPIRef("scripting.removeCSS()")}} 方法。
- 用于用于动态注册内容脚本的 {{WebExtAPIRef("scripting.registerContentScripts()")}} 方法，随后你将可以使用 {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} 获取、使用 {{WebExtAPIRef("scripting.unregisterContentScripts()")}} 注销注入的脚本。

> [!NOTE]
> Chrome 限制该 API 仅在 Manifest V3 中可用。Firefox 和 Safari 在 Manifest V2 和 V3 中均支持该 API。

此 API 需要 `"scripting"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)以及要将 JavaScript 或 CSS 注入到的标签页目标的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)。

或者，你也可以通过请求 [`"activeTab"` 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#活动标签权限)临时地在活动标签页中获取权限，并且仅能在一个明确的用户操作的返回中使用该 API。不过你仍然需要 `"scripting"` 权限。

## 类型

- {{WebExtAPIRef("scripting.ContentScriptFilter")}}
  - : 指定通过 {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} 检索或通过 {{WebExtAPIRef("scripting.unregisterContentScripts()")}} 注销的脚本的 ID。
- {{WebExtAPIRef("scripting.ExecutionWorld")}}
  - : 指定通过 {{WebExtAPIRef("scripting.executeScript()")}} 注入或通过 {{WebExtAPIRef("scripting.registerContentScripts()")}} 注册的脚本的执行环境。
- {{WebExtAPIRef("scripting.InjectionTarget")}}
  - : 注入目标的详细信息。
- {{WebExtAPIRef("scripting.RegisteredContentScript")}}
  - : 需要注册或已注册的内容脚本的详细信息。

### 函数

- {{WebExtAPIRef("scripting.executeScript()")}}
  - : 将 JavaScript 代码注入页面。
- {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}}
  - : 获取已注册的内容脚本的列表。
- {{WebExtAPIRef("scripting.insertCSS()")}}
  - : 将 CSS 注入页面。
- {{WebExtAPIRef("scripting.registerContentScripts()")}}
  - : 为未来的页面加载注册内容脚本。
- {{WebExtAPIRef("scripting.removeCSS()")}}
  - : 移除之前通过 {{WebExtAPIRef("scripting.insertCSS()")}} 注入的 CSS。
- {{WebExtAPIRef("scripting.updateContentScripts()")}}
  - : 更新已注册的一个或多个内容脚本。
- {{WebExtAPIRef("scripting.unregisterContentScripts()")}}
  - : 注销一个或多个内容脚本。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.scripting`](https://developer.chrome.google.cn/docs/extensions/reference/api/scripting) API。
