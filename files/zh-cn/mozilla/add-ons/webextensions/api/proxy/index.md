---
title: proxy
slug: Mozilla/Add-ons/WebExtensions/API/proxy
l10n:
  sourceCommit: 83b221d2955a42bed9b87a5206a7953d1b57d8a9
---

使用 proxy API 代理 Web 请求。你可以使用 {{WebExtAPIRef("proxy.onRequest")}} 事件监听器拦截 Web 请求，并返回一个对象，说明是否以及如何代理这些请求。

{{WebExtAPIRef("proxy.onRequest")}} 这种方式的好处是：实现代理策略的代码运行在扩展的后台脚本中，因此可以完整使用扩展可用的 WebExtension API（例如扩展的 [`storage`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/storage) 和 [`dns`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/dns) 这类网络 API）。

除了本 API，扩展还可以使用 [`browserSettings.proxyConfig`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) 属性配置全局代理设置。

> [!NOTE]
> Chrome、Edge 和 Opera 也有一个[同样名为“proxy”的扩展 API](https://developer.chrome.google.cn/docs/extensions/reference/api/proxy)，功能上与本 API 类似，扩展可以用它实现代理策略。不过 Chrome 的 API 与本 API 完全不同。

要使用本 API，你需要拥有 "proxy" [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。另外，若要拦截请求，还需要对被拦截请求的 URL 拥有[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)。

"proxy" 权限要求将 `"strict_min_version"` 设为 "91.1.0" 或更高。要使用此权限，请在 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 中添加或更新 [`"browser_specific_settings"`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) 键，以指定最低 Firefox 版本。更多信息见[为 Firefox 附加组件加固 proxy API](https://blog.mozilla.org/security/2021/10/25/securing-the-proxy-api-for-firefox-add-ons/)。

> [!NOTE]
> 浏览器可以进行推测性连接，即判定某个 URI 的请求可能即将到来。这类连接不提供有效的标签页信息，因此 `tabId`、`frameId`、`parentFrameId` 等请求详情并不准确。这些连接的 {{WebExtAPIRef("webRequest.ResourceType")}} 为 `speculative`。

## 类型

- {{WebExtAPIRef("proxy.ProxyInfo")}}
  - : 描述一个代理。
- {{WebExtAPIRef("proxy.RequestDetails")}}
  - : 包含浏览器即将发出的 Web 请求的信息。

## 属性

- {{WebExtAPIRef("proxy.settings")}}
  - : 获取和设置代理设置。

## 事件

- {{WebExtAPIRef("proxy.onError")}}
  - : 系统在运行 PAC 脚本或 `onRequest` 监听器时出错时触发。
- {{WebExtAPIRef("proxy.onRequest")}}
  - : 即将发出 Web 请求时触发，让扩展有机会代理该请求。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
