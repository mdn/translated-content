---
title: proxy
slug: Mozilla/Add-ons/WebExtensions/API/proxy
---

> [!WARNING]
> 不推荐使用 {{WebExtAPIRef("proxy.register()")}} 或者 {{WebExtAPIRef("proxy.unregister()")}} 方法使用 [Proxy Auto-Configuration (PAC) file](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/proxy/register#pac_file_specification). 这个 API 将会在 Firefox 68 中废弃并且在 Firefox 71 中删除。

使用 proxy API 来代理 web 请求。你可以使用 **{{WebExtAPIRef("proxy.onRequest")}}** 事件监听器来拦截 web 请求，并且返回一个可以描述是否代理并且怎样代理它们的对象。

{{WebExtAPIRef("proxy.onRequest")}}的好处在于，用于实现你拦截策略的代码在你的扩展的后台脚本运行，所以，它可以让 **`WebExtension APIs`** 能够完全的访问你的扩展 (举例来说，可以访问你扩展的`storage`和像 dns 等类似的网络 api)

除了这个 api，扩展也能够使用**[`browserSettings.proxyConfig`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)**属性来重新编辑你全局的`proxy`设置

Chrome 浏览器提供了一个叫做`'proxy'的`api 扩展，它的功能跟这个 api 类似，在 chrome 的 api 中也可以用来实现一个拦截策略。然而，Chrome 的 API 的设计跟这个 API 设计完全不同。因为这个 API 跟谷歌的`proxy`的 API 完全不同，这个 API 只能通过'browser'命名空间访问

如果你想用这个 API 你需要得到'`proxy`'的[permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).并且，如果你想拦截一个请求，你同样也需要当前拦截请求的 url 的 [host permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## Types

- {{WebExtAPIRef("proxy.ProxyInfo")}}
  - : Describes a proxy.
- {{WebExtAPIRef("proxy.RequestDetails")}}
  - : Contains information about a web request that the browser is about to make.

## Properties

- {{WebExtAPIRef("proxy.settings")}}
  - : Get and set proxy settings.

## Functions

- {{WebExtAPIRef("proxy.register()")}} {{Deprecated_Inline}}
  - : Registers the given proxy script.
- {{WebExtAPIRef("proxy.unregister()")}} {{Deprecated_Inline}}
  - : Unregisters the proxy script.

## Events

- {{WebExtAPIRef("proxy.onError")}}
  - : Fired when the system encounters an error running the PAC script or the `onRequest` listener.
- {{WebExtAPIRef("proxy.onRequest")}}
  - : Fired when a web request is about to be made, giving the extension an opportunity to proxy it.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
