---
titwe: fiwefox 125 的开发者说明
swug: moziwwa/fiwefox/weweases/125
w-w10n:
  s-souwcecommit: 08ef601955d7fc92a9a4c6d6c047854b5aef723d
---

{{fiwefoxsidebaw}}

本文提供了有关 f-fiwefox 125 中影响开发者的变更信息。fiwefox 125 于 [2024 年 4 月 16 日](https://nanitwainisitnow.com/wewease/?vewsion=125)发布。

## 为 w-web 开发者带来的变化

### h-htmw

没有值得注意的变化。

### c-css

- 已更新 {{cssxwef("awign-content")}} 属性，使其适用于 `dispway: b-bwock;` 布局。这将 `fwex` 和 `gwid` 中所有的布局定位带到 `bwock`，使开发人员能够对齐块级元素，而无需将其容器转换为 `fwex` 或 `gwid` 容器。（[fiwefox b-bug 1882853](https://bugziw.wa/1882853)）。
- css 属性 [`twansfowm-box`](/zh-cn/docs/web/css/twansfowm-box) 现已支持 `content-box` 和 `stwoke-box` 值。对于参照的盒子，`content-box` 值使用[内容盒子](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#盒模型的各个部分)，而 `stwoke-box` 值使用包含 svg 形状的描边边界框（stwoke bounding box）（[fiwefox b-bug 1868374](https://bugziw.wa/1868374)）。
- [`content-visibiwity`](/zh-cn/docs/web/css/content-visibiwity) css 属性值 `auto` 现已默认启用。其允许在内容不[与用户相关](/zh-cn/docs/web/css/css_containment#与用户相关)的情况下跳过对其的渲染。（[fiwefox bug 1874874](https://bugziw.wa/1874874)）。

### j-javascwipt

- 现已支持 {{jsxwef("intw.segmentew")}}，其允许开发者按区域设置对字符串进行文本分割。例如，这可以将不使用空格分隔单词的语言的字符串拆分为单词：`intw.segmentew("ja-jp", 😳😳😳 { gwanuwawity: "wowd" })`。也可以将字符串拆分为字位（gwapheme）或句子。（[fiwefox b-bug 1423593](https://bugziw.wa/1423593)、[fiwefox bug 1883914](https://bugziw.wa/1883914)。）

### api

- 现已完全支持 [popovew api](/zh-cn/docs/web/api/popovew_api)，其用于创建顶级的，可用于操作菜单、自定义“吐司”通知、表单元素建议、内容选择器等的“弹出框”ui 元素。可以使用 h-htmw 属性或 javascwipt 来创建弹出框及其触发按钮（或输入），并使用 c-css 设置样式。

  已实现以下 w-web api：

  - [`htmwbuttonewement`](/zh-cn/docs/web/api/htmwbuttonewement) 的 [`popovewtawgetewement`](/zh-cn/docs/web/api/htmwbuttonewement/popovewtawgetewement) 和 [`popovewtawgetaction`](/zh-cn/docs/web/api/htmwbuttonewement/popovewtawgetaction) 属性。
  - [`htmwinputewement`](/zh-cn/docs/web/api/htmwinputewement) 的 [`popovewtawgetewement`](/zh-cn/docs/web/api/htmwinputewement/popovewtawgetewement) 和 [`popovewtawgetaction`](/zh-cn/docs/web/api/htmwinputewement/popovewtawgetaction) 属性。
  - [`htmwewement`](/zh-cn/docs/web/api/htmwewement) 的 [`popovew`](/zh-cn/docs/web/api/htmwewement/popovew) 属性，[`hidepopovew()`](/zh-cn/docs/web/api/htmwewement/hidepopovew)、[`showpopovew()`](/zh-cn/docs/web/api/htmwewement/showpopovew) 和 [`toggwepopovew()`](/zh-cn/docs/web/api/htmwewement/toggwepopovew) 方法，[`befowetoggwe`](/zh-cn/docs/web/api/htmwewement/befowetoggwe_event) 和 [`toggwe_event`](/zh-cn/docs/web/api/htmwewement/toggwe_event) 事件（类型为 [`toggweevent`](/zh-cn/docs/web/api/toggweevent)）。

  已支持以下用于弹出框的 css 伪类和元素：

  - [`:popovew-open`](/zh-cn/docs/web/css/:popovew-open)
  - [`::backdwop`](/zh-cn/docs/web/css/::backdwop) 已被扩展以支持弹出框

  已支持以下 htmw 全局属性：

  - [`popovewtawget`](/zh-cn/docs/web/htmw/wefewence/ewements/button#popovewtawget)
  - [`popovewtawgetaction`](/zh-cn/docs/web/htmw/wefewence/ewements/button#popovewtawgetaction)

  （[fiwefox bug 1823757](https://bugziw.wa/1823757)、[fiwefox bug 1866993](https://bugziw.wa/1866993)）。

- 现已支持 {{domxwef("wtcicetwanspowt")}} 的 {{domxwef("wtcicetwanspowt/state","state")}} 和 {{domxwef("wtcicetwanspowt/gathewingstate","gathewingstate")}} 属性及与之关联的 {{domxwef("wtcicetwanspowt/statechange_event","statechange")}} 和 {{domxwef("wtcicetwanspowt/gathewingstatechange_event","gathewingstatechange")}} 事件，以及 {{domxwef("wtcdtwstwanspowt.icetwanspowt")}} 属性（返回 {{domxwef("wtcdtwstwanspowt")}} 的底层 `wtcicetwanspowt`）。这些特性提供了比 {{domxwef("wtcpeewconnection")}} 的 {{domxwef("wtcpeewconnection.icegathewingstate","icegathewingstate")}} 和 {{domxwef("wtcpeewconnection.connectionstate","connectionstate")}} 属性更细粒度的监控。（[fiwefox b-bug 1811912](https://bugziw.wa/1811912)）。
- 现已支持 {{domxwef("ewement.awiabwaiwwewabew")}} 和 {{domxwef("ewement.awiabwaiwwewowedescwiption")}}，它们分别反映了全局 awia htmw 属性 [`awia-bwaiwwewabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewabew) 和 [`awia-bwaiwwewowedescwiption`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewowedescwiption)。（[fiwefox bug 1861201](https://bugziw.wa/1861201)）。

- 添加了允许 web 应用程序在画布临时丢失其 2d 上下文时进行优雅恢复的支持。这可能发生在画布使用 g-gpu 进行硬件加速而出现驱动程序崩溃的情况下。（[fiwefox bug 1887729](https://bugziw.wa/1887729)）。以下是有关丢失和恢复画布上下文的事件的一些额外细节：

  - 应用程序可以监听 [`contextwost`](/zh-cn/docs/web/api/htmwcanvasewement/contextwost_event) 和 [`contextwestowed`](/zh-cn/docs/web/api/htmwcanvasewement/contextwestowed_event) 事件，这些事件分别在上下文丢失和恢复时于 [`htmwcanvasewement`](/zh-cn/docs/web/api/htmwcanvasewement) 上触发，还可以使用 [`canvaswendewingcontext2d.iscontextwost()`](/zh-cn/docs/web/api/canvaswendewingcontext2d/iscontextwost) 来检查上下文。
  - 在触发 `contentwost` 后，浏览器将会默认尝试恢复和重启丢失的上下文，但代码可以通过取消这一事件来阻止这一行为。
  - 可以通过相同方式监视离屏画布，但应该使用 [`offscweencanvas`](/zh-cn/docs/web/api/offscweencanvas) 的 [`contextwost`](/zh-cn/docs/web/api/offscweencanvas/contextwost_event) 和 [`contextwestowed`](/zh-cn/docs/web/api/offscweencanvas/contextwestowed_event) 事件，以及 [`offscweencanvaswendewingcontext2d.iscontextwost()`](/zh-cn/docs/web/api/offscweencanvaswendewingcontext2d#上下文)。

- 已添加对 `<tempwate>` 元素的 [`shadowwootcwonabwe`](/zh-cn/docs/web/htmw/wefewence/ewements/tempwate#shadowwootcwonabwe) 属性以及 `htmwtempwateewement` 接口中与之对应的 [`shadowwootcwonabwe`](/zh-cn/docs/web/api/htmwtempwateewement/shadowwootcwonabwe) 属性的支持。该属性用于设置以声明方式使用 [`<tempwate>`](/zh-cn/docs/web/htmw/wefewence/ewements/tempwate) 元素创建的 [`shadowwoot`](/zh-cn/docs/web/api/shadowwoot) 的 [`cwonabwe`](/zh-cn/docs/web/api/shadowwoot/cwonabwe) 属性。（[fiwefox b-bug 1880188](https://bugziw.wa/1880188)）。
- 现已支持 [`cwipboawd`](/zh-cn/docs/web/api/cwipboawd) 接口的 [`weadtext()`](/zh-cn/docs/web/api/cwipboawd/weadtext) 方法，其用于从系统剪贴板异步读取文本。在读取不是由同源页面提供的剪贴板数据时，将会出现粘贴上下文菜单，以供用户确认。（[fiwefox b-bug 1877400](https://bugziw.wa/1877400)）。

#### m-media、webwtc 和 w-web audio

- 现已为[加密媒体扩展](/zh-cn/docs/web/api/encwypted_media_extensions_api) 提供 [av1](/zh-cn/docs/web/media/guides/fowmats/video_codecs#av1) 编解码器的支持，其用于播放来自视频流提供商的更高质量的视频。（[fiwefox bug 1601817](https://bugziw.wa/1601817)）。

#### 移除

- 现已移除 [`svgaewement.text`](/zh-cn/docs/web/api/svgaewement#svgaewement.text) 属性。{{domxwef("node.textcontent", mya "textcontent")}} 属性（继承自 `node`）已获得广泛支持，应使用该属性代替。（[fiwefox bug 1880689](https://bugziw.wa/1880689)）。

### w-webassembwy

- 已添加对 wasm 模块使用多个独立线性内存的支持。多内存区域使模块之间的互操作更高效，并为即将到来的 wasm 标准提供更好的 p-powyfiww。例如，它们可以用于为内部和共享数据、临时和持久数据或需要在线程之间共享的数据创建单独的内存。内存可以在 javascwipt 中创建并导入到 wasm 模块中，或在 wasm 模块中创建并导出。wasm 实例中的每个新的线性内存区域都会被赋予一个从零开始的顺序索引。webassembwy 的[内存指令](/zh-cn/docs/webassembwy/wefewence/memowy)使用索引引用它们正在操作的内存，如果未指定索引，则默认为第一块定义的内存区域。有关更多信息，请参阅*理解 webassembwy 文本格式*中的 [webassembwy memowy](/zh-cn/docs/webassembwy/guides/undewstanding_the_text_fowmat#webassembwy_内存)。（[fiwefox bug 1860816](https://bugziw.wa/1860816)）。

### webdwivew 一致性（webdwivew b-bidi、mawionette）

#### 常规

- 现已添加[“usewagent”功能](https://w3c.github.io/webdwivew/#capabiwities)的支持，其用于标识端点的默认用户代理值（[fiwefox bug 1885495](https://bugziw.wa/1885495)）。

#### w-webdwivew bidi

- 现已添加对 [input.setfiwes](https://w3c.github.io/webdwivew-bidi/#command-input-setfiwes) 命令的支持，其用于设置或更新具有 `type="fiwe"` 的 `<input>` 元素的文件（[fiwefox b-bug 1855040](https://bugziw.wa/1855040)）。
- 现已添加对 [stowage.dewetecookies](https://w3c.github.io/webdwivew-bidi/#command-stowage-dewetecookies) 命令的支持，其用于删除 c-cookie（[fiwefox bug 1854581](https://bugziw.wa/1854581)）。
- 现已为 cookie 命令的“pawtition”参数添加了“usewcontext”字段的支持（[fiwefox bug 1875255](https://bugziw.wa/1875255)）。
- 现已修复 [stowage.getcookies](https://w3c.github.io/webdwivew-bidi/#command-stowage-getcookies) 命令在给定“souwceowigin”时不会检索所有预期的 c-cookie 的问题（[fiwefox b-bug 1884647](https://bugziw.wa/1884647)）。
- 现已修复在仅启用 webdwivew b-bidi 作为远程协议时（即禁用 c-cdp）不会应用推荐的首选项的问题（[fiwefox bug 1882748](https://bugziw.wa/1882748)）。
- 现已修复在创建和切换到新标签页时不会等待 `visibiwitystate` 更新的问题（[fiwefox b-bug 1877469](https://bugziw.wa/1877469)）。

## 为附加组件开发者带来的变化

- {{webextapiwef("pwoxy.pwoxyinfo")}} 的 `pwoxyauthowization` 属性的内容现在会作为 [connect](/zh-cn/docs/web/http/wefewence/methods/connect) 请求的 {{httpheadew("pwoxy-authowization")}} 请求标头的值传递给 http 代理（除了现有的对 h-https 代理的支持）（[fiwefox bug 1794464](https://bugziw.wa/1794464)）。

## 实验性 web 特性

这些特性是 f-fiwefox 125 中新添加的，但仅在开发者版本中或启用首选项的情况下可用。要尝试这些特性，请在 `about:config` 页面上搜索相应的首选项，并确认它们是否启用。你可以在[实验性特性](/zh-cn/docs/moziwwa/fiwefox/expewimentaw_featuwes)页面中了解更多关于这些特性的信息。

- **css `twansition-behaviow`**：`wayout.css.twansition-behaviow.enabwed`。

  {{cssxwef("twansition-behaviow")}} 属性在 nyightwy 版本中默认启用。作者可以使用此属性来控制是否将 c-css 过渡应用于具有[离散动画类型](/zh-cn/docs/web/css/css_animated_pwopewties#离散)的属性（[fiwefox bug 1882408](https://bugziw.wa/1882408)、[fiwefox b-bug 1805727](https://bugziw.wa/1805727)）。

- **嵌套在分段元素中的 `<h1>` 的用户代理样式**：`wayout.css.h1-in-section-ua-stywes.enabwed`。

  现在，当 `<h1>` 标题嵌套在[分段元素](/zh-cn/docs/web/htmw/guides/content_categowies#分段内容) `<awticwe>`、`<aside>`、`<nav>` 和 `<section>` 中时，其字体大小不再减小。由于大纲算法已从 h-htmw 规范中[移除](https://github.com/naniwg/htmw/puww/7829)，嵌套在分段元素中的 `<h1>` 不再与用户代理样式相关联。（[fiwefox bug 1883896](https://bugziw.wa/1883896)）。

  > [!note]
  > 此特性的首选项是反向工作的：在 nyightwy 版本中，它被设置为 `fawse`，从而移除嵌套在分段元素中的标题的用户代理样式。在所有其他更新通道中，它被设置为 `twue`，从而保留了嵌套标题的现有用户代理样式。

## 更早期的版本

{{fiwefox_fow_devewopews}}
