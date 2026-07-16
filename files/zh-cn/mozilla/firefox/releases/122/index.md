---
title: Firefox 122 的开发者说明
slug: Mozilla/Firefox/Releases/122
l10n:
  sourceCommit: 6f56b2dbc0229d381a5e63cf763a77883ee23906
---

本文提供了有关 Firefox 122 中影响开发者的变更信息。Firefox 122 于 [2024 年 1 月 23 日](https://whattrainisitnow.com/release/?version=122)发布。

## 为 Web 开发者带来的变化

### HTML

- {{HTMLElement("hr")}} 元素现在允许作为 {{HTMLElement("select")}} 元素的子元素。这是一个可以提高具有多个选项的选择列表的可读性的新特性。（[Firefox bug 1830909](https://bugzil.la/1830909)）。
- 将 HTML {{HTMLElement("ol")}} 的 `type` 属性设置为 `none`、`disc`、`circle` 或 `square` 时，不再产生效果。将 HTML {{HTMLElement("ul")}} 的 `type` 属性设置为 `1`、`a`、`A`、`i` 或 `I` 时，也不再产生效果。`<ul>` 和 `<ol>` 列表的 `type` 属性已被弃用，应使用 {{CSSxref("list-style-type")}} CSS 属性来设置样式。（[Firefox bug 1868087](https://bugzil.la/1868087)）。

### CSS

- CSS {{cssxref("offset-position")}} 属性现在默认可用。它定义了元素在路径上的初始位置。（[Firefox bug 1598152](https://bugzil.la/1598152)）
- 用于定义 CSS {{cssxref("offset-path")}} 的多个方法——包括 [`<basic-shape>`](/zh-CN/docs/Web/CSS/Reference/Properties/offset-path#basic-shape)、[`<coord-box>`](/zh-CN/docs/Web/CSS/Reference/Properties/offset-path#coord-box) 和 [`url()`](/zh-CN/docs/Web/CSS/Reference/Properties/offset-path#url)——现在默认可用。（[Firefox bug 1598159](https://bugzil.la/1598159)）
- CSS {{cssxref("ray")}} 函数现在默认可用。你可以使用该函数来将 {{cssxref("offset-path")}} 定义为从 {{cssxref("offset-position")}} 开始并沿指定角度延伸的线段。（[Firefox bug 1598151](https://bugzil.la/1598151)）
- {{CSSxref("clip-path")}} 和 {{CSSxref("offset-path")}} 属性现在支持 [`rect()`](/zh-CN/docs/Web/CSS/Reference/Values/basic-shape/rect) 和 [`xywh()`](/zh-CN/docs/Web/CSS/Reference/Values/basic-shape/xywh) 形状函数。这些 {{CSSXref("basic-shape")}} 值允许使用离元素边缘的距离定义的矩形（`rect()`）或坐标和尺寸（`xywh()`）来裁剪和偏移元素。（[Firefox bug 1868722](https://bugzil.la/1868722)）。

### JavaScript

- {{jsxref("ArrayBuffer.prototype.transfer()")}} 和 {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} 方法现在可将一个 {{jsxref("ArrayBuffer")}} 的内存[所有权转移](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#传输_arraybuffer)到另一个。转移后，原始缓冲区将与其原始内存中分离而变得不再可用；可以使用 {{jsxref("ArrayBuffer.prototype.detached")}} 来检查其状态。（有关更多详细信息，请参见 [Firefox bug 1865103](https://bugzil.la/1865103)。）
- 为了与其他浏览器保持一致，[`Date.parse()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) 和 [`Date()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)在解析[非标准日期字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#非标准日期字符串)时，只考虑指定月份的前三个字母。以前只接受完整月份名称以三个或更多字符截断后的值（有关更多详细信息，请参见 [Firefox bug 1862910](https://bugzil.la/1862910)。）

### SVG

#### 移除

- 移除在 SVG `<use>` 元素中使用 `data:` URL 的支持，从而防止通过 [`SVGUseElement`](/zh-CN/docs/Web/API/SVGUseElement) 接口实现 [XSS](/zh-CN/docs/Glossary/Cross-site_scripting) 攻击。可以通过将 `svg.use-element.data-url-href.allowed` 首选项设置为 `true` 来重新启用这些旧功能，但出于安全原因，不建议这样做。（[Firefox bug 1806964](https://bugzil.la/1806964)）。

### API

- 现已支持 [LargestContentfulPaint API](/zh-CN/docs/Web/API/LargestContentfulPaint)。该 API 属于[性能 API](/zh-CN/docs/Web/API/Performance_API)，并提供了有关用户与网页交互之前最大图像或文本绘制的时间信息。（[Firefox bug 1866266](https://bugzil.la/1866266)）。

#### DOM

- 现已支持 {{domxref("HTMLSelectElement.showPicker()")}} 方法，允许在用户交互触发时，以编程方式启动 {{HTMLElement("select")}} 元素的浏览器选择器。（[Firefox bug 1865207](https://bugzil.la/1865207)）。

#### 移除

- 移除对 CSS [`-moz-user-focus`](/zh-CN/docs/Web/CSS/Reference/Properties/-moz-user-focus) 属性的支持（[Firefox bug 1871745](https://bugzil.la/1871745) 和 [Firefox bug 1868552](https://bugzil.la/1868552)）。

### WebDriver 一致性（WebDriver BiDi、Marionette）

#### 常规

- 修复了阻止[执行动作](https://w3c.github.io/webdriver/#perform-actions)正确合成 `mouse` 输入源的双击和其他多次点击事件的错误。（[Firefox bug 1864614](https://bugzil.la/1864614)）。此外，这些事件只在自上次点击操作以来实际鼠标位置未发生变化时才会被触发（[Firefox bug 1681076](https://bugzil.la/1681076)）。
- 更新了 `Pause` 和 `Equal`（数字键盘区域）键的定义，以与 WebDriver 规范保持一致（[Firefox bug 1863687](https://bugzil.la/1863687)）。

#### WebDriver BiDi

- `WindowProxy` 远程对象的序列化现在也可以正确处理外部进程中的 iframe（[Firefox bug 1867667](https://bugzil.la/1867667)）。
- [browsingContext.setViewport](https://w3c.github.io/webdriver-bidi/#command-browsingContext-setViewport) 命令现在区分作为 `viewport` 参数的 `undefined` 和 `null` 值。如果设置为 `undefined`，则表示视口应保持不变，而使用 `null` 将重置为其原始尺寸（[Firefox bug 1865618](https://bugzil.la/1865618)）。
- 引入了对 [browsingContext.traverseHistory](https://w3c.github.io/webdriver-bidi/#command-browsingContext-traverseHistory) 命令的支持，允许在浏览器历史记录中向后和向前导航（[Firefox bug 1841018](https://bugzil.la/1841018)）。
- 修复了所有受支持的网络事件中的一个错误：`context` id 始终报告顶级浏览上下文，即使导航发生在 iframe 中也是如此（[Firefox bug 1869735](https://bugzil.la/1869735)）。

#### Marionette

- 修复了[获取元素文本](https://w3c.github.io/webdriver/#dfn-get-element-text)命令的一个错误，当元素位于影子根（ShadowRoot）的槽（slot）中时，该命令会错误地返回空文本（[Firefox bug 1824664](https://bugzil.la/1824664)）。

## 实验性 Web 特性

这些特性是 Firefox 122 中新添加的，但在默认情况下是禁用的。要尝试这些特性，请在 `about:config` 页面上搜索相应的首选项，并将其设置为 `true`。你可以在[实验性特性](/zh-CN/docs/Mozilla/Firefox/Experimental_features)页面上找到更多这样的特性。

- **声明式影子 DOM**：`dom.webcomponents.shadowdom.declarative.enabled`。

  {{htmlelement("template")}} 元素现在支持 `shadowrootmode` 属性，其可以被设置为 `open` 或 `close`，与 {{domxref("Element.attachShadow()", "attachShadow()")}} 方法的 `mode` 选项相同。这允许声明式地创建一棵影子 DOM 子树。（[Firefox bug 1712140](https://bugzil.la/1712140)）

- **影子 DOM 的可克隆选项和属性。**
  - {{domxref("Element.attachShadow()")}} 方法现在支持 `clonable` 布尔选项，用于指定创建的影子根是否可以克隆：默认值为 `false`，而当设置为 `true` 时，使用 {{domxref("Node.cloneNode()")}} 或 {{domxref("Document.importNode()")}} 克隆的影子宿主将包括副本中的影子根。
  - {{domxref("ShadowRoot")}} 接口现在支持 {{domxref("ShadowRoot.clonable", "clonable")}} 只读属性。若影子根可克隆，则返回 `true`，否则返回 `false`。对于通过声明式影子 DOM 创建的影子根，它始终返回 `true`。

  当通过声明式影子 DOM 创建影子根时，默认情况下 `clonable` 选项被设置为 `true`，并且 `clonable` 属性返回 `true`。（[Firefox bug 1712140](https://bugzil.la/1868428)）

- **Popover API**：`dom.element.popover.enabled`。

  现在支持通过 HTML 属性或 JavaScript API 来在页面内容上方显示弹出窗口，包括使用 CSS [`:popover-open`](/zh-CN/docs/Web/CSS/Reference/Selectors/:popover-open) 伪类设置样式，以及对 [`::backdrop`](/zh-CN/docs/Web/CSS/Reference/Selectors/::backdrop) 伪元素的扩展支持。有关更多详细信息，请参见 [Popover API](/zh-CN/docs/Web/API/Popover_API) 参考文档。（[Firefox bug 1823757](https://bugzil.la/1823757)）

- **剪切板读写**：`dom.events.asyncClipboard.clipboardItem`、`dom.events.asyncClipboard.readText` 和 `dom.events.asyncClipboard.writeText`。

  现在完全支持异步 {{domxref('Clipboard API')}}，包括 [`read()`](/zh-CN/docs/Web/API/Clipboard/read)、[`readText()`](/zh-CN/docs/Web/API/Clipboard/readText) 和 [`write()`](/zh-CN/docs/Web/API/Clipboard/write) 方法以及 {{domxref('ClipboardItem')}} 接口。当读取非同源页面提供的剪贴板数据时，将出现粘贴上下文菜单供用户确认。（[Firefox bug 1809106](https://bugzil.la/1809106)）

- **`Intl.Segmenter`**：仅在 Firefox Nightly 默认启用。

  {{jsxref("Intl.Segmenter")}} 兑现允许使用准确的区域设置来对字符串进行文本分割。例如，要将不使用空格分隔语言的文本分割为单词：`Intl.Segmenter("ja-JP", { granularity: "word" })`。（[Firefox bug 1423593](https://bugzil.la/1423593)）

## 更早期的版本

{{Firefox_for_developers}}
