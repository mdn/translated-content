---
title: Firefox 125 的开发者说明
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: 08ef601955d7fc92a9a4c6d6c047854b5aef723d
---

{{FirefoxSidebar}}

本文提供了有关 Firefox 125 中影响开发者的变更信息。Firefox 125 于 [2024 年 4 月 16 日](https://whattrainisitnow.com/release/?version=125)发布。

## 为 Web 开发者带来的变化

### HTML

没有值得注意的变化。

### CSS

- 已更新 {{cssxref("align-content")}} 属性，使其适用于 `display: block;` 布局。这将 `flex` 和 `grid` 中所有的布局定位带到 `block`，使开发人员能够对齐块级元素，而无需将其容器转换为 `flex` 或 `grid` 容器。（[Firefox bug 1882853](https://bugzil.la/1882853)）。
- CSS 属性 [`transform-box`](/zh-CN/docs/Web/CSS/transform-box) 现已支持 `content-box` 和 `stroke-box` 值。对于参照的盒子，`content-box` 值使用[内容盒子](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Box_model#盒模型的各个部分)，而 `stroke-box` 值使用包含 SVG 形状的描边边界框（stroke bounding box）（[Firefox bug 1868374](https://bugzil.la/1868374)）。
- [`content-visibility`](/zh-CN/docs/Web/CSS/content-visibility) CSS 属性值 `auto` 现已默认启用。其允许在内容不[与用户相关](/zh-CN/docs/Web/CSS/CSS_containment#与用户相关)的情况下跳过对其的渲染。（[Firefox bug 1874874](https://bugzil.la/1874874)）。

### JavaScript

- 现已支持 {{jsxref("Intl.Segmenter")}}，其允许开发者按区域设置对字符串进行文本分割。例如，这可以将不使用空格分隔单词的语言的字符串拆分为单词：`Intl.Segmenter("ja-JP", { granularity: "word" })`。也可以将字符串拆分为字位（grapheme）或句子。（[Firefox bug 1423593](https://bugzil.la/1423593)、[Firefox bug 1883914](https://bugzil.la/1883914)。）

### API

- 现已完全支持 [Popover API](/zh-CN/docs/Web/API/Popover_API)，其用于创建顶级的，可用于操作菜单、自定义“吐司”通知、表单元素建议、内容选择器等的“弹出框”UI 元素。可以使用 HTML 属性或 JavaScript 来创建弹出框及其触发按钮（或输入），并使用 CSS 设置样式。

  已实现以下 Web API：

  - [`HTMLButtonElement`](/zh-CN/docs/Web/API/HTMLButtonElement) 的 [`popoverTargetElement`](/zh-CN/docs/Web/API/HTMLButtonElement/popoverTargetElement) 和 [`popoverTargetAction`](/zh-CN/docs/Web/API/HTMLButtonElement/popoverTargetAction) 属性。
  - [`HTMLInputElement`](/zh-CN/docs/Web/API/HTMLInputElement) 的 [`popoverTargetElement`](/zh-CN/docs/Web/API/HTMLInputElement/popoverTargetElement) 和 [`popoverTargetAction`](/zh-CN/docs/Web/API/HTMLInputElement/popoverTargetAction) 属性。
  - [`HTMLElement`](/zh-CN/docs/Web/API/HTMLElement) 的 [`popover`](/zh-CN/docs/Web/API/HTMLElement/popover) 属性，[`hidePopover()`](/zh-CN/docs/Web/API/HTMLElement/hidePopover)、[`showPopover()`](/zh-CN/docs/Web/API/HTMLElement/showPopover) 和 [`togglePopover()`](/zh-CN/docs/Web/API/HTMLElement/togglePopover) 方法，[`beforetoggle`](/zh-CN/docs/Web/API/HTMLElement/beforetoggle_event) 和 [`toggle_event`](/zh-CN/docs/Web/API/HTMLElement/toggle_event) 事件（类型为 [`ToggleEvent`](/zh-CN/docs/Web/API/ToggleEvent)）。

  已支持以下用于弹出框的 CSS 伪类和元素：

  - [`:popover-open`](/zh-CN/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/zh-CN/docs/Web/CSS/::backdrop) 已被扩展以支持弹出框

  已支持以下 HTML 全局属性：

  - [`popovertarget`](/zh-CN/docs/Web/HTML/Element/button#popovertarget)
  - [`popovertargetaction`](/zh-CN/docs/Web/HTML/Element/button#popovertargetaction)

  （[Firefox bug 1823757](https://bugzil.la/1823757)、[Firefox bug 1866993](https://bugzil.la/1866993)）。

- 现已支持 {{domxref("RTCIceTransport")}} 的 {{domxref("RTCIceTransport/state","state")}} 和 {{domxref("RTCIceTransport/gatheringState","gatheringState")}} 属性及与之关联的 {{domxref("RTCIceTransport/statechange_event","statechange")}} 和 {{domxref("RTCIceTransport/gatheringstatechange_event","gatheringstatechange")}} 事件，以及 {{domxref("RTCDtlsTransport.iceTransport")}} 属性（返回 {{domxref("RTCDtlsTransport")}} 的底层 `RTCIceTransport`）。这些特性提供了比 {{domxref("RTCPeerConnection")}} 的 {{domxref("RTCPeerConnection.iceGatheringState","iceGatheringState")}} 和 {{domxref("RTCPeerConnection.connectionState","connectionState")}} 属性更细粒度的监控。（[Firefox bug 1811912](https://bugzil.la/1811912)）。
- 现已支持 {{domxref("Element.ariaBrailleLabel")}} 和 {{domxref("Element.ariaBrailleRoleDescription")}}，它们分别反映了全局 ARIA HTML 属性 [`aria-braillelabel`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) 和 [`aria-brailleroledescription`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription)。（[Firefox bug 1861201](https://bugzil.la/1861201)）。

- 添加了允许 Web 应用程序在画布临时丢失其 2D 上下文时进行优雅恢复的支持。这可能发生在画布使用 GPU 进行硬件加速而出现驱动程序崩溃的情况下。（[Firefox bug 1887729](https://bugzil.la/1887729)）。以下是有关丢失和恢复画布上下文的事件的一些额外细节：

  - 应用程序可以监听 [`contextlost`](/zh-CN/docs/Web/API/HTMLCanvasElement/contextlost_event) 和 [`contextrestored`](/zh-CN/docs/Web/API/HTMLCanvasElement/contextrestored_event) 事件，这些事件分别在上下文丢失和恢复时于 [`HTMLCanvasElement`](/zh-CN/docs/Web/API/HTMLCanvasElement) 上触发，还可以使用 [`CanvasRenderingContext2D.isContextLost()`](/zh-CN/docs/Web/API/CanvasRenderingContext2D/isContextLost) 来检查上下文。
  - 在触发 `contentlost` 后，浏览器将会默认尝试恢复和重启丢失的上下文，但代码可以通过取消这一事件来阻止这一行为。
  - 可以通过相同方式监视离屏画布，但应该使用 [`OffScreenCanvas`](/zh-CN/docs/Web/API/OffscreenCanvas) 的 [`contextlost`](/zh-CN/docs/Web/API/OffscreenCanvas/contextlost_event) 和 [`contextrestored`](/zh-CN/docs/Web/API/OffscreenCanvas/contextrestored_event) 事件，以及 [`OffscreenCanvasRenderingContext2D.isContextLost()`](/zh-CN/docs/Web/API/OffscreenCanvasRenderingContext2D#上下文)。

- 已添加对 `<template>` 元素的 [`shadowrootclonable`](/zh-CN/docs/Web/HTML/Element/template#shadowrootclonable) 属性以及 `HTMLTemplateElement` 接口中与之对应的 [`shadowRootClonable`](/zh-CN/docs/Web/API/HTMLTemplateElement/shadowRootClonable) 属性的支持。该属性用于设置以声明方式使用 [`<template>`](/zh-CN/docs/Web/HTML/Element/template) 元素创建的 [`ShadowRoot`](/zh-CN/docs/Web/API/ShadowRoot) 的 [`clonable`](/zh-CN/docs/Web/API/ShadowRoot/clonable) 属性。（[Firefox bug 1880188](https://bugzil.la/1880188)）。
- 现已支持 [`Clipboard`](/zh-CN/docs/Web/API/Clipboard) 接口的 [`readText()`](/zh-CN/docs/Web/API/Clipboard/readText) 方法，其用于从系统剪贴板异步读取文本。在读取不是由同源页面提供的剪贴板数据时，将会出现粘贴上下文菜单，以供用户确认。（[Firefox bug 1877400](https://bugzil.la/1877400)）。

#### Media、WebRTC 和 Web Audio

- 现已为[加密媒体扩展](/zh-CN/docs/Web/API/Encrypted_Media_Extensions_API) 提供 [AV1](/zh-CN/docs/Web/Media/Guides/Formats/Video_codecs#av1) 编解码器的支持，其用于播放来自视频流提供商的更高质量的视频。（[Firefox bug 1601817](https://bugzil.la/1601817)）。

#### 移除

- 现已移除 [`SVGAElement.text`](/zh-CN/docs/Web/API/SVGAElement#svgaelement.text) 属性。{{domxref("Node.textContent", "textContent")}} 属性（继承自 `Node`）已获得广泛支持，应使用该属性代替。（[Firefox bug 1880689](https://bugzil.la/1880689)）。

### WebAssembly

- 已添加对 Wasm 模块使用多个独立线性内存的支持。多内存区域使模块之间的互操作更高效，并为即将到来的 Wasm 标准提供更好的 polyfill。例如，它们可以用于为内部和共享数据、临时和持久数据或需要在线程之间共享的数据创建单独的内存。内存可以在 JavaScript 中创建并导入到 Wasm 模块中，或在 Wasm 模块中创建并导出。Wasm 实例中的每个新的线性内存区域都会被赋予一个从零开始的顺序索引。WebAssembly 的[内存指令](/zh-CN/docs/WebAssembly/Reference/Memory)使用索引引用它们正在操作的内存，如果未指定索引，则默认为第一块定义的内存区域。有关更多信息，请参阅*理解 WebAssembly 文本格式*中的 [WebAssembly Memory](/zh-CN/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_内存)。（[Firefox bug 1860816](https://bugzil.la/1860816)）。

### WebDriver 一致性（WebDriver BiDi、Marionette）

#### 常规

- 现已添加[“userAgent”功能](https://w3c.github.io/webdriver/#capabilities)的支持，其用于标识端点的默认用户代理值（[Firefox bug 1885495](https://bugzil.la/1885495)）。

#### WebDriver BiDi

- 现已添加对 [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles) 命令的支持，其用于设置或更新具有 `type="file"` 的 `<input>` 元素的文件（[Firefox bug 1855040](https://bugzil.la/1855040)）。
- 现已添加对 [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies) 命令的支持，其用于删除 cookie（[Firefox bug 1854581](https://bugzil.la/1854581)）。
- 现已为 cookie 命令的“partition”参数添加了“userContext”字段的支持（[Firefox bug 1875255](https://bugzil.la/1875255)）。
- 现已修复 [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) 命令在给定“sourceOrigin”时不会检索所有预期的 cookie 的问题（[Firefox bug 1884647](https://bugzil.la/1884647)）。
- 现已修复在仅启用 WebDriver BiDi 作为远程协议时（即禁用 CDP）不会应用推荐的首选项的问题（[Firefox bug 1882748](https://bugzil.la/1882748)）。
- 现已修复在创建和切换到新标签页时不会等待 `visibilityState` 更新的问题（[Firefox bug 1877469](https://bugzil.la/1877469)）。

## 为附加组件开发者带来的变化

- {{WebExtAPIRef("proxy.ProxyInfo")}} 的 `proxyAuthorization` 属性的内容现在会作为 [CONNECT](/zh-CN/docs/Web/HTTP/Methods/CONNECT) 请求的 {{httpheader("Proxy-Authorization")}} 请求标头的值传递给 HTTP 代理（除了现有的对 HTTPS 代理的支持）（[Firefox bug 1794464](https://bugzil.la/1794464)）。

## 实验性 Web 特性

这些特性是 Firefox 125 中新添加的，但仅在开发者版本中或启用首选项的情况下可用。要尝试这些特性，请在 `about:config` 页面上搜索相应的首选项，并确认它们是否启用。你可以在[实验性特性](/zh-CN/docs/Mozilla/Firefox/Experimental_features)页面中了解更多关于这些特性的信息。

- **CSS `transition-behavior`**：`layout.css.transition-behavior.enabled`。

  {{cssxref("transition-behavior")}} 属性在 Nightly 版本中默认启用。作者可以使用此属性来控制是否将 CSS 过渡应用于具有[离散动画类型](/zh-CN/docs/Web/CSS/CSS_animated_properties#离散)的属性（[Firefox bug 1882408](https://bugzil.la/1882408)、[Firefox bug 1805727](https://bugzil.la/1805727)）。

- **嵌套在分段元素中的 `<h1>` 的用户代理样式**：`layout.css.h1-in-section-ua-styles.enabled`。

  现在，当 `<h1>` 标题嵌套在[分段元素](/zh-CN/docs/Web/HTML/Content_categories#分段内容) `<article>`、`<aside>`、`<nav>` 和 `<section>` 中时，其字体大小不再减小。由于大纲算法已从 HTML 规范中[移除](https://github.com/whatwg/html/pull/7829)，嵌套在分段元素中的 `<h1>` 不再与用户代理样式相关联。（[Firefox bug 1883896](https://bugzil.la/1883896)）。

  > [!NOTE]
  > 此特性的首选项是反向工作的：在 Nightly 版本中，它被设置为 `false`，从而移除嵌套在分段元素中的标题的用户代理样式。在所有其他更新通道中，它被设置为 `true`，从而保留了嵌套标题的现有用户代理样式。

## 更早期的版本

{{Firefox_for_developers}}
