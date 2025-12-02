---
title: Firefox 65 的开发者说明
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

本文提供了有关 Firefox 65 中影响开发者的变更信息。Firefox 65 于 2019 年 1 月 29 日发布。

## 为 Web 开发者带来的变化

### 开发者工具

- 现已默认启用 [Flexbox 检查器](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html)。
- 现已添加 [JavaScript 调试器](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)的 XHR 断点支持（[Firefox bug 821610](https://bugzil.la/821610)）。
- 从无障碍环境查看器右键单击无障碍树中的项目，可将其[以 JSON 格式打印](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json)到 JSON 查看器。
- 无障碍选取器的[颜色对比度](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast)显示已更新，如果文本背景复杂（如渐变或复杂图像），则会显示一系列颜色对比度值。
- [网络监控器](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) 的“标头”标签页现在会显示所选请求的 referrer 策略（[Firefox bug 1496742](https://bugzil.la/1496742)）。
- 在显示堆栈跟踪时（例如在控制台日志或 JavaScript 调试器中），对框架方法的调用会被识别出来并默认折叠，这样就能更轻松地锁定代码。
- 现在，你可以使用与本地终端相同的反向搜索方式查找 JavaScript 控制台历史记录中的条目（Windows/Linux 上使用 `F9` 或 macOS 上使用 `Ctrl` + `R`，然后键入搜索词，接着使用 `Ctrl` + `R`/`Ctrl` + `S` 来切换搜索结果）。
- JavaScript 控制台的 `$0` 快捷键（引用页面上当前检查的元素）现在可以使用自动补全功能，例如，可以键入 `$0.te` 以获得 `$0.textContent` 等属性的自动补全建议。
- Inspector 中“规则”视图中作出的编辑会在“更改”面板中列出（[Firefox bug 1503920](https://bugzil.la/1503920)）。

### HTML

- 现在会对禁用 HTML 元素（即设置了 `disabled` 属性的 {{htmlelement("button")}}、{{htmlelement("fieldset")}}、{{htmlelement("input")}}、{{htmlelement("select")}} 和 {{htmlelement("textarea")}} 元素）派发事件（[Firefox bug 329509](https://bugzil.la/329509)）。
- 移除 {{htmlelement("iframe")}} 元素的 `src` 属性后，`about:blank` 会被加载到该元素中，从而与 Chrome 和 Safari 保持一致（[Firefox bug 1507842](https://bugzil.la/1507842)）。以前，删除 `src` 对 `iframe` 内容没有任何影响。
- 已在 {{htmlelement("script")}} 元素上添加了对 [`referrerpolicy`](/zh-CN/docs/Web/HTML/Reference/Elements/script#referrerpolicy) 属性的支持（[Firefox bug 1460920](https://bugzil.la/1460920)）。

### CSS

- {{cssxref("image-rendering")}} 属性的 `crisp-edges` 值现已取消前缀化（[Firefox bug 1496617](https://bugzil.la/1496617)）。
- {{cssxref("scrollbar-color")}} 的 `auto` 值现已解析为 `auto`，而不是两种颜色（[Firefox bug 1501418](https://bugzil.la/1501418)）。
- 现一实现 `break-*` 属性，且遗留的 `page-break-*` 属性已经成为它们的别名（[Firefox bug 775618](https://bugzil.la/775618)）：
  - {{cssxref("break-before")}} 现在是 {{cssxref("page-break-before")}} 的别名。
  - {{cssxref("break-after")}} 现在是 {{cssxref("page-break-after")}} 的别名。
  - {{cssxref("break-inside")}} 现在是 {{cssxref("page-break-inside")}} 的别名。

- 现已实现 {{cssxref("overflow-wrap")}} 属性的 `anywhere` 值（[Firefox bug 1505786](https://bugzil.la/1505786)）。
- 现已实现 [`steps()` 时间函数](/zh-CN/docs/Web/CSS/Reference/Values/easing-function/steps)中使用的新步骤位置关键字 `jump-start`、`jump-end`、`jump-none` 和 `jump-both`（[Firefox bug 1496619](https://bugzil.la/1496619)）。这也与 `frames()` 定时函数的移除不谋而合，该函数是以前实现此类功能的方法，现已弃用。
- 为了与其他浏览器兼容，新增了一些新的 {{cssxref("appearance", "-webkit-appearance")}} 值，特别是：
  - `meter`，现在用作 UA 样式表中 {{htmlelement("meter")}} 元素的默认值。现有值 `meterbar` 现在是 `meter` 的别名（[Firefox bug 1501483](https://bugzil.la/1501483)）。
  - `progress-bar`，现在用作 UA 样式表中 {{htmlelement("progress")}} 元素的默认值。现有值 `progressbar` 现在是 `progress-bar` 的别名（[Firefox bug 1501506](https://bugzil.la/1501506)）。
  - `textarea`，现在用作 UA 样式表中 {{htmlelement("textarea")}} 元素的默认值。现有值 `textfield-multiline` 现在是 `textarea` 的别名（[Firefox bug 1507905](https://bugzil.la/1507905)）。

- 已更改 {{cssxref("user-select")}} 的行为，使其更符合其他浏览器的要求（[Firefox bug 1506547](https://bugzil.la/1506547)）。具体如下：
  - 在元素上设置的 `user-select: all` 不再覆盖在该元素的子元素上设置的其他 `user-select` 值。因此，例如在以下代码段中：

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    设置了 `none` 的 `<div>` 现在不可选择。以前，该值会被父元素上设置的 `all` 值覆盖。

  - 嵌套在 `contenteditable` 元素内的非 `contenteditable` 元素现在可以选择。
  - `user-select` 现在在影子 DOM 内外表现一致。
  - 删除了专有的 `-moz-text` 值。

- 已实现 CSS 环境变量（{{cssxref("env", "env()")}} 函数）（[Firefox bug 1462233](https://bugzil.la/1462233)）。

#### 移除

- 已移除 `layout.css.shape-outside.enabled` 首选项；不再能通过 `about:config` 禁用 {{cssxref("shape-outside")}}、{{cssxref("shape-margin")}} 和 {{cssxref("shape-image-threshold")}}（[Firefox bug 1504387](https://bugzil.la/1504387)）。
- 删除了 {{cssxref("user-select")}} 属性中几个仅适用于 Firefox 的值——`moz-all`、`moz-text`、`tri-state`、`element`、`elements` 和 `toggle`。请参见 [Firefox bug 1492958](https://bugzil.la/1492958) 和 [Firefox bug 1506547](https://bugzil.la/1506547)。
- 如上所述，`frames()` 时间函数已被删除（[Firefox bug 1496619](https://bugzil.la/1496619)）。

### SVG

_无变化。_

### JavaScript

- 现已支持 {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}（[Firefox bug 1504334](https://bugzil.la/1504334)）。
- 字符串的最大{{jsxref("String/length","长度","", 1)}}现为 `2**30 - 2`（\~1GB），而不是 `2**28 - 1`（\~256MB）（[Firefox bug 1509542](https://bugzil.la/1509542)）。
- 已实现始终指向顶层全局对象的 {{jsxref("globalThis")}} 属性（[Firefox bug 1317422](https://bugzil.la/1317422)）。

### API

#### 新的 API

- 已默认启用{{domxref("Streams_API/Using_readable_streams", "可读流", "", "1")}}（[Firefox bug 1505122](https://bugzil.la/1505122)）。
- 已默认启用{{domxref("Storage_Access_API", "存储访问 API", "", "1")}}（[Firefox bug 1513021](https://bugzil.la/1513021)）。

#### DOM

- 已向 {{domxref("Web_Workers_API", "Web Worker", "", "1")}} 暴露 {{domxref("Performance.toJSON()")}} 方法（[Firefox bug 1504958](https://bugzil.la/1504958)）。
- 如果 {{domxref("XMLHttpRequest")}} 请求的内容类型为 `Blob`，且请求方法不是 `GET`，现在请求会抛出 `NetworkError`（[Firefox bug 1502599](https://bugzil.la/1502599)）。
- 已弃用许多 {{domxref("Fullscreen API", "", "", "1")}} 特性的 `-moz` 前缀版本，当遇到这些版本时会在 JavaScript 控制台中显示弃用警告（[Firefox bug 1504946](https://bugzil.la/1504946)）。
- {{domxref("Window.createImageBitmap()")}} 和 {{domxref("WorkerGlobalScope.createImageBitmap()")}} 现支持将 SVG 图像（{{domxref("SVGImageElement")}}）作为图像源（[Firefox bug 1500768](https://bugzil.la/1500768)）。

#### DOM 事件

- 更进一步地，每个事件中仅可调用一次 {{domxref("Window.open()")}}（[Firefox bug 675574](https://bugzil.la/675574)）。
- [`keyup`](/zh-CN/docs/Web/API/Element/keyup_event) 和 [`keydown`](/zh-CN/docs/Web/API/Element/keydown_event) 事件现在会在 IME 合成时触发，以改善东亚语言用户的跨浏览器兼容性（[Firefox bug 354358](https://bugzil.la/354358)）。

#### Web worker

- {{domxref("SharedWorkerGlobalScope.connect_event", "SharedWorkerGlobalScope.connect")}} 的事件对象是 {{domxref("MessageEvent")}} 的实例——其 `data` 属性现在是空字符串值，而不是 `null`（[Firefox bug 1508824](https://bugzil.la/1508824)）。

#### Fetch 和 Service worker

- 如果第一个参数指定了无效的 URL，{{domxref("Response.redirect_static", "Response.redirect()")}} 方法现在会正确地抛出 `TypeError`（[Firefox bug 1503276](https://bugzil.la/1503276)）。
- Service worker 使用的 {{domxref("ServiceWorkerContainer.register()")}} 和 {{domxref("WorkerGlobalScope.importScripts()")}} 方法现将接受任何具有有效 [JavaScript MIME 类型](/zh-CN/docs/Web/HTTP/Guides/MIME_types#textjavascript)的文件（[Firefox bug 1354577](https://bugzil.la/1354577)）。
- 现支持 {{domxref("FetchEvent.replacesClientId")}} 和 {{domxref("FetchEvent.resultingClientId")}} 属性（[Firefox bug 1264177](https://bugzil.la/1264177)）。
- 现已实现 {{domxref("ServiceWorkerGlobalScope.messageerror_event", "ServiceWorkerGlobalScope.onmessageerror")}} 和 {{domxref("ServiceWorkerContainer.messageerror_event", "ServiceWorkerContainer.onmessageerror")}} 事件处理器属性（[Firefox bug 1399446](https://bugzil.la/1399446)）。
- 方法为 {{HTTPMethod("HEAD")}} 或 {{HTTPMethod("GET")}} 的 Fetch 请求不再设置 {{httpheader("Origin")}} 标头（[Firefox bug 1508661](https://bugzil.la/1508661)）。

#### Media、Web Audio 和 WebRTC

- {{domxref("WebRTC API", "WebRTC", "", "1")}} {{domxref("RTCIceCandidateStats")}} 字典已根据最新的规范变更进行了更新（[Firefox bug 1324788](https://bugzil.la/1324788)、[Firefox bug 1489040](https://bugzil.la/1489040)；RTCIceCandidateStats 已更新为最新规范，可详细了解具体的更改内容）。
- 现以实现 {{domxref("MediaRecorder")}} 的 `pause` 和 `resume` 事件（和对应的事件处理器属性）。以前并未实现，尽管兼容性表格声称它们已经实现（[Firefox bug 1458538](https://bugzil.la/1458538)、[Firefox bug 1514016](https://bugzil.la/1514016)）。

#### Canvas 和 WebGL

- {{domxref("WebGL API", "WebGL", "", "1")}} 的 {{domxref("EXT_texture_compression_bptc")}} 和 {{domxref("EXT_texture_compression_rgtc")}} 纹理压缩扩展已经暴露至 WebGL1 和 WebGL2 上下文（[Firefox bug 1507263](https://bugzil.la/1507263)）。

#### 移除

- 已禁用影子树中的[变更事件](/zh-CN/docs/Web/API/MutationEvent)（[Firefox bug 1489858](https://bugzil.la/1489858)）。
- 已移除 {{domxref("MediaStream")}} 非标准的 `currentTime` 属性（[Firefox bug 1502927](https://bugzil.la/1502927)）。
- 已移除 `dom.webcomponents.shadowdom.enabled` 和 `dom.webcomponents.customelements.enabled` 首选项——将不再能够通过 `about:config` 禁用影子 DOM 和自定义元素（[Firefox bug 1503019](https://bugzil.la/1503019)）。
- 已移除非标准 DOM `text` 事件，该事件用于通知浏览器编辑器用户界面 IME 合成字符串数据和选择范围（[Firefox bug 1288640](https://bugzil.la/1288640)）。
- {{domxref("Element/keypress_event", "keypress")}} 事件不再为除了 `Enter` 键、`Shift` + `Enter` 和 `Ctrl` + `Enter` 键组合以外的[不可打印按键](/zh-CN/docs/Web/API/KeyboardEvent/keyCode#不可打印键（功能键）) 触发（[Firefox bug 968056](https://bugzil.la/968056)）（保留它们的原因是为了实现跨浏览器兼容）。

### 安全

- 现在对允许的请求头执行了额外的 CORS 限制（[Firefox bug 1483815](https://bugzil.la/1483815)，另请参阅 [whatwg fetch issue 382：CORS 安全列表请求标头应根据 RFC 7231 进行限制](https://github.com/whatwg/fetch/issues/382)了解更多详情）。

### 网络

_无变化。_

### 插件

_无变化。_

### WebDriver 一致性（Marionette）

#### API 变化

- `WebDriver:ElementSendKeys` 现在可以更轻松地处理 `<input type=file>` 交互性检查，并允许隐藏这些元素而不再引发 `not interactable` 错误。如果希望进行严格的交互性检查，则可使用 `strictFileInteractability` 功能（[Firefox bug 1502864](https://bugzil.la/1502864)）。

#### Bug 修复

- 窗口操作命令 `WebDriver:FullscreenWindow`、`WebDriver:MinimizeWindow`、`WebDriver:MaximizeWindow` 和 `WebDriver:SetWindowRect` 变得更加稳定（[Firefox bug 1492499](https://bugzil.la/1492499)）。这意味着在特殊情况下，它们不会再导致无限挂起，而是在无法达到所请求的窗口状态时在 5 秒后超时（[Firefox bug 1521527](https://bugzil.la/1521527)）。
- `WebDriver:ElementClick` 现在能正确计算要点击的元素的中心点，从而允许尺寸为 1x1 像素的交互（[Firefox bug 1499360](https://bugzil.la/1499360)）。

#### 其他

- 对于 `unexpected alert open` 错误，会提供更多信息（[Firefox bug 1502268](https://bugzil.la/1502268)）。

### 其他

- 已添加对 [WebP](/zh-CN/docs/Glossary/WebP) 图像的支持（[Firefox bug 1294490](https://bugzil.la/1294490)）。
  - 此外，为了在某些情况下促进跨浏览器兼容性，WebP MIMEType（`image/webp`）已被添加到 HTML 文件的标准 HTTP 请求 {{httpheader("Accept")}} 标头中（[Firefox bug 1507691](https://bugzil.la/1507691)）。

- Windows 现已默认支持 AV1 编解码器（[Firefox bug 1452146](https://bugzil.la/1452146)）。

## 为附加组件开发者带来的变化

### API 变化

#### Tabs

- {{WebExtAPIRef("tabs", "Tabs API", "", "1")}} 已得到增强，可支持标签页的后继标签页——标签页可分配一个后继标签页，即关闭后将激活的标签页的 ID（[Firefox bug 1500479](https://bugzil.la/1500479)，更多信息请参阅[本博文](https://qiita.com/piroor/items/ea7e727735631c45a366)）。特别是：
  - {{WebExtAPIRef("tabs.Tab")}} 类型现拥有 `successorId` 属性，可用于存储/读取标签页后续标签页的 ID。
  - {{WebExtAPIRef("tabs.onActivated")}} 事件监听器的回调现拥有一个新参数 `previousTabId`，其中包含前一个已激活标签页的 ID（如果该标签页仍处于打开状态）。
  - {{WebExtAPIRef("tabs.update()")}} 函数的 `updateProperties` 对象新增了一个可选属性 `successorTabId`，可用于更新。
  - `successorTabId` 也会通过 {{WebExtAPIRef("tabs.get()")}} 和 {{WebExtAPIRef("tabs.query()")}} 等函数返回。
  - 新函数 `tabs.moveInSuccession()` 允许批量操作标签页的后续标签页。

### Manifest 变化

_无变化。_

### 其他

- Firefox for Android 现在支持 [WebExtension 主题](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)的 `headerURL`/`theme_frame` 属性（[Firefox bug 1429488](https://bugzil.la/1429488)）。

## 参见

- Hacks 发布博文：[Firefox 65：WebP 支持、Flexbox 检查器、新的工具和平台更新](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)

## 更早期的版本

{{Firefox_for_developers}}
