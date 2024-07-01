---
title: Firefox 123 的开发者说明
slug: Mozilla/Firefox/Releases/123
l10n:
  sourceCommit: a9bd012040da7024cc05c00336aa7ebb42c5c227
---

{{FirefoxSidebar}}

本文提供了有关 Firefox 123 中影响开发者的变更信息。Firefox 123 于 [2024 年 2 月 20 日](https://whattrainisitnow.com/release/?version=122)发布。

## 为 Web 开发者带来的变化

### 开发者工具

### HTML

- {{htmlelement("template")}} 元素现已支持 `shadowrootmode` 属性，允许声明式创建影子 DOM 子树。该属性可以设置为 `open` 或 `closed`，分别对外部代码公开或隐藏影子 DOM 中的 JavaScript。其可设置的值与 `Element.attachShadow()` 方法的 `mode` 选项相同。（[Firefox bug 1870052](https://bugzil.la/1870052)）

### JavaScript

- 修复了 {{jsxref("Date.parse()")}} 全局对象的一系列错误，使其与其他浏览器解析传递的值的方式保持一致。
  - 月份中错误的日期（例如“31 April”）现在会跳到下一个月（例如“1 May”）。（[Firefox bug 1872333](https://bugzil.la/1872333)）。
  - 现在不再接受错误的时区（例如“1/1/70 gm”）或错误的上/下午（例如“1/1/70 10:00 a”）。（[Firefox bug 1870570](https://bugzil.la/1870570)）。
  - 现在接受单个数字表示的日期（例如 `Date.parse("0")` 现在返回 `946684800000`——2000 年 1 月 1 号星期六 00:00:00）。（[Firefox bug 1870434](https://bugzil.la/1870434)）。

### SVG

- {{SVGElement("linearGradient")}} 和 {{SVGElement("radialGradient")}} SVG 元素现已支持通过 {{SVGAttr("color-interpolation")}} 属性将颜色空间变更为 `linearRGB` 或 `sRGB`。也可以通过 {{CSSXref("color-interpolation")}} CSS 属性将其应用到 SVG 元素上。

### HTTP

- [`103 Early Hints`](/zh-CN/docs/Web/HTTP/Status/103) HTTP [信息响应](/zh-CN/docs/Web/HTTP/Status#信息响应)状态码现在可用于（当服务器仍在准备完整响应时页面可能需要的）[预加载](/zh-CN/docs/Web/HTML/Attributes/rel/preload)资源。这可以显著减少页面加载时间。请注意，对[预连接](/zh-CN/docs/Web/HTML/Attributes/rel/preconnect)使用 `103 Early Hints` 标头的支持已经在 [Firefox 120](/zh-CN/docs/Mozilla/Firefox/Releases/120#http) 中添加。详情请参见 [Firefox bug 1874445](https://bugzil.la/1874445)。

### API

- [Web Authentication API](/zh-CN/docs/Web/API/Web_Authentication_API) 现已支持跨源凭据创建。更具体地，如果顶层嵌入的 [`<iframe>`](/zh-CN/docs/Web/HTML/Element/iframe#allow) 的 [`Feature-Policy: publickey-credentials-create`](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-create) 允许，现在可以在从不同来源加载的嵌套浏览上下文中调用 [`navigator.credentials.create({publicKey})`](/zh-CN/docs/Web/API/CredentialsContainer/create)。（[Firefox bug 1870863](https://bugzil.la/1870863)）。

#### DOM

- 对 [IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 自定义区域设置的支持已被弃用，包括 `IDBObjectStore.createIndex()` 的 [`options.locale`](/zh-CN/docs/Web/API/IDBObjectStore/createIndex#locale) 参数，以及 `IDBIndex` 的 [`isAutoLocale`](/zh-CN/docs/Web/API/IDBIndex/isAutoLocale) 和 [`locale`](/zh-CN/docs/Web/API/IDBIndex/locale) 属性。（[Firefox bug 1872675](https://bugzil.la/1872675) 和 [Firefox bug 1730706](https://bugzil.la/1730706)）。

#### Media、WebRTC 和 Web Audio

#### 移除

`IDBLocaleAwareKeyRange` 接口已被移除（[Firefox bug 1730706](https://bugzil.la/1730706)）。

### WebDriver 一致性（WebDriver BiDi、Marionette）

#### WebDriver BiDi

- 现已添加 [network.fetchError](https://w3c.github.io/webdriver-bidi/#event-network-fetchError) 事件，当网络请求以错误结束时会触发该事件（[Firefox bug 1790375](https://bugzil.la/1790375)）。
- 已引入对 [browsingContext.locateNodes](https://w3c.github.io/webdriver-bidi/#commands-browsingcontextlocatenodes) 命令的支持，其用于在给定页面上查找元素的。目前支持的定位器有 `CssLocator`（[Firefox bug 1855023](https://bugzil.la/1855023)）和 `XPathLocator`（[Firefox bug 1869536](https://bugzil.la/1869536)）。
- 改进了 Android 上的 [browsingContext.create](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create) 命令，以便在 `type` 参数指定为 `window` 时无缝切换为打开新标签页（[Firefox bug 1875086](https://bugzil.la/1875086)）。
- 修复了 `DateRemoteValue` 反序列化过程的一个错误：非标准（ISO 8601）日期字符串（例如 `200009`）的存在不会引发错误（[Firefox bug 1872116](https://bugzil.la/1872116)）。
- 修复了 [script.evaluate](https://w3c.github.io/webdriver-bidi/#command-script-evaluate)、[script.callFunction](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) 和 [script.disown](https://w3c.github.io/webdriver-bidi/#command-script-disown) 命令中指定 `context` 和 `realm` 参数会导致 `invalid argument` 错误的问题，而不是像预期的那样忽略 `realm` 参数（[Firefox bug 1873688](https://bugzil.la/1873688)）。

#### Marionette

- 修复了[对元素发送按键事件](https://w3c.github.io/webdriver/#element-send-keys)时发送包含代理对的文本会失败的问题（[Firefox bug 1866431](https://bugzil.la/1866431)）。

## 为附加组件开发者带来的变化

- 添加了 {{WebExtAPIRef("contextualIdentities.move")}} 函数以允许移动上下文标识列表中的项目。此函数使扩展能够自定义上下文标识在 UI 中显示的顺序（[Firefox bug 1333395](https://bugzil.la/1333395)）。

## 实验性 Web 特性

这些特性是 Firefox 123 中新添加的，但在默认情况下是禁用的。要尝试这些特性，请在 `about:config` 页面上搜索相应的首选项，并将其设置为 `true`。你可以在[实验性特性](/zh-CN/docs/Mozilla/Firefox/Experimental_features)页面上找到更多这样的特性。

- **Web Codecs API**：`dom.media.webcodecs.enabled`。

  Linux 桌面的 Nightly 版本现已支持 [Web Codecs API](/zh-CN/docs/Web/API/WebCodecs_API) 的视频接口。包括：[`VideoEncoder`](/zh-CN/docs/Web/API/VideoEncoder)、[`VideoDecoder`](/zh-CN/docs/Web/API/VideoDecoder)、[`EncodedVideoChunk`](/zh-CN/docs/Web/API/EncodedVideoChunk)、[`VideoFrame`](/zh-CN/docs/Web/API/VideoFrame)、[`VideoColorSpace`](/zh-CN/docs/Web/API/VideoColorSpace)。（[Firefox bug 1874445](https://bugzil.la/1874445)）。

## 更早期的版本

{{Firefox_for_developers}}
