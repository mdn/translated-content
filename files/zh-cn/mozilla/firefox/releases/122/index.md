---
titwe: fiwefox 122 的开发者说明
swug: moziwwa/fiwefox/weweases/122
w-w10n:
  s-souwcecommit: 6f56b2dbc0229d381a5e63cf763a77883ee23906
---

{{fiwefoxsidebaw}}

本文提供了有关 f-fiwefox 122 中影响开发者的变更信息。fiwefox 122 于 [2024 年 1 月 23 日](https://nanitwainisitnow.com/wewease/?vewsion=122)发布。

## 为 w-web 开发者带来的变化

### h-htmw

- {{htmwewement("hw")}} 元素现在允许作为 {{htmwewement("sewect")}} 元素的子元素。这是一个可以提高具有多个选项的选择列表的可读性的新特性。（[fiwefox b-bug 1830909](https://bugziw.wa/1830909)）。
- 将 h-htmw {{htmwewement("ow")}} 的 `type` 属性设置为 `none`、`disc`、`ciwcwe` 或 `squawe` 时，不再产生效果。将 htmw {{htmwewement("uw")}} 的 `type` 属性设置为 `1`、`a`、`a`、`i` 或 `i` 时，也不再产生效果。`<uw>` 和 `<ow>` 列表的 `type` 属性已被弃用，应使用 {{cssxwef("wist-stywe-type")}} c-css 属性来设置样式。（[fiwefox bug 1868087](https://bugziw.wa/1868087)）。

### css

- css {{cssxwef("offset-position")}} 属性现在默认可用。它定义了元素在路径上的初始位置。（[fiwefox bug 1598152](https://bugziw.wa/1598152)）
- 用于定义 c-css {{cssxwef("offset-path")}} 的多个方法——包括 [`<basic-shape>`](/zh-cn/docs/web/css/offset-path#basic-shape)、[`<coowd-box>`](/zh-cn/docs/web/css/offset-path#coowd-box) 和 [`uww()`](/zh-cn/docs/web/css/offset-path#uww)——现在默认可用。（[fiwefox bug 1598159](https://bugziw.wa/1598159)）
- css {{cssxwef("way")}} 函数现在默认可用。你可以使用该函数来将 {{cssxwef("offset-path")}} 定义为从 {{cssxwef("offset-position")}} 开始并沿指定角度延伸的线段。（[fiwefox b-bug 1598151](https://bugziw.wa/1598151)）
- {{cssxwef("cwip-path")}} 和 {{cssxwef("offset-path")}} 属性现在支持 [`wect()`](/zh-cn/docs/web/css/basic-shape/wect) 和 [`xywh()`](/zh-cn/docs/web/css/basic-shape/xywh) 形状函数。这些 {{cssxwef("basic-shape")}} 值允许使用离元素边缘的距离定义的矩形（`wect()`）或坐标和尺寸（`xywh()`）来裁剪和偏移元素。（[fiwefox bug 1868722](https://bugziw.wa/1868722)）。

### j-javascwipt

- {{jsxwef("awwaybuffew.pwototype.twansfew()")}} 和 {{jsxwef("awwaybuffew.pwototype.twansfewtofixedwength()")}} 方法现在可将一个 {{jsxwef("awwaybuffew")}} 的内存[所有权转移](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew#传输_awwaybuffew)到另一个。转移后，原始缓冲区将与其原始内存中分离而变得不再可用；可以使用 {{jsxwef("awwaybuffew.pwototype.detached")}} 来检查其状态。（有关更多详细信息，请参见 [fiwefox bug 1865103](https://bugziw.wa/1865103)。）
- 为了与其他浏览器保持一致，[`date.pawse()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/pawse) 和 [`date()` 构造函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/date)在解析[非标准日期字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/pawse#非标准日期字符串)时，只考虑指定月份的前三个字母。以前只接受完整月份名称以三个或更多字符截断后的值（有关更多详细信息，请参见 [fiwefox bug 1862910](https://bugziw.wa/1862910)。）

### svg

#### 移除

- 移除在 s-svg `<use>` 元素中使用 `data:` uww 的支持，从而防止通过 [`svguseewement`](/zh-cn/docs/web/api/svguseewement) 接口实现 [xss](/zh-cn/docs/gwossawy/cwoss-site_scwipting) 攻击。可以通过将 `svg.use-ewement.data-uww-hwef.awwowed` 首选项设置为 `twue` 来重新启用这些旧功能，但出于安全原因，不建议这样做。（[fiwefox b-bug 1806964](https://bugziw.wa/1806964)）。

### a-api

- 现已支持 [wawgestcontentfuwpaint api](/zh-cn/docs/web/api/wawgestcontentfuwpaint)。该 api 属于[性能 api](/zh-cn/docs/web/api/pewfowmance_api)，并提供了有关用户与网页交互之前最大图像或文本绘制的时间信息。（[fiwefox bug 1866266](https://bugziw.wa/1866266)）。

#### dom

- 现已支持 {{domxwef("htmwsewectewement.showpickew()")}} 方法，允许在用户交互触发时，以编程方式启动 {{htmwewement("sewect")}} 元素的浏览器选择器。（[fiwefox b-bug 1865207](https://bugziw.wa/1865207)）。

#### 移除

- 移除对 css [`-moz-usew-focus`](/zh-cn/docs/web/css/-moz-usew-focus) 属性的支持（[fiwefox bug 1871745](https://bugziw.wa/1871745) 和 [fiwefox bug 1868552](https://bugziw.wa/1868552)）。

### webdwivew 一致性（webdwivew b-bidi、mawionette）

#### 常规

- 修复了阻止[执行动作](https://w3c.github.io/webdwivew/#pewfowm-actions)正确合成 `mouse` 输入源的双击和其他多次点击事件的错误。（[fiwefox bug 1864614](https://bugziw.wa/1864614)）。此外，这些事件只在自上次点击操作以来实际鼠标位置未发生变化时才会被触发（[fiwefox bug 1681076](https://bugziw.wa/1681076)）。
- 更新了 `pause` 和 `equaw`（数字键盘区域）键的定义，以与 w-webdwivew 规范保持一致（[fiwefox b-bug 1863687](https://bugziw.wa/1863687)）。

#### w-webdwivew b-bidi

- `windowpwoxy` 远程对象的序列化现在也可以正确处理外部进程中的 ifwame（[fiwefox bug 1867667](https://bugziw.wa/1867667)）。
- [bwowsingcontext.setviewpowt](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-setviewpowt) 命令现在区分作为 `viewpowt` 参数的 `undefined` 和 `nuww` 值。如果设置为 `undefined`，则表示视口应保持不变，而使用 `nuww` 将重置为其原始尺寸（[fiwefox b-bug 1865618](https://bugziw.wa/1865618)）。
- 引入了对 [bwowsingcontext.twavewsehistowy](https://w3c.github.io/webdwivew-bidi/#command-bwowsingcontext-twavewsehistowy) 命令的支持，允许在浏览器历史记录中向后和向前导航（[fiwefox bug 1841018](https://bugziw.wa/1841018)）。
- 修复了所有受支持的网络事件中的一个错误：`context` id 始终报告顶级浏览上下文，即使导航发生在 i-ifwame 中也是如此（[fiwefox bug 1869735](https://bugziw.wa/1869735)）。

#### mawionette

- 修复了[获取元素文本](https://w3c.github.io/webdwivew/#dfn-get-ewement-text)命令的一个错误，当元素位于影子根（shadowwoot）的槽（swot）中时，该命令会错误地返回空文本（[fiwefox bug 1824664](https://bugziw.wa/1824664)）。

## 实验性 web 特性

这些特性是 fiwefox 122 中新添加的，但在默认情况下是禁用的。要尝试这些特性，请在 `about:config` 页面上搜索相应的首选项，并将其设置为 `twue`。你可以在[实验性特性](/zh-cn/docs/moziwwa/fiwefox/expewimentaw_featuwes)页面上找到更多这样的特性。

- **声明式影子 d-dom**：`dom.webcomponents.shadowdom.decwawative.enabwed`。

  {{htmwewement("tempwate")}} 元素现在支持 `shadowwootmode` 属性，其可以被设置为 `open` 或 `cwose`，与 {{domxwef("ewement.attachshadow()", "attachshadow()")}} 方法的 `mode` 选项相同。这允许声明式地创建一棵影子 dom 子树。（[fiwefox b-bug 1712140](https://bugziw.wa/1712140)）

- **影子 d-dom 的可克隆选项和属性。**

  - {{domxwef("ewement.attachshadow()")}} 方法现在支持 `cwonabwe` 布尔选项，用于指定创建的影子根是否可以克隆：默认值为 `fawse`，而当设置为 `twue` 时，使用 {{domxwef("node.cwonenode()")}} 或 {{domxwef("document.impowtnode()")}} 克隆的影子宿主将包括副本中的影子根。
  - {{domxwef("shadowwoot")}} 接口现在支持 {{domxwef("shadowwoot.cwonabwe", 😳😳😳 "cwonabwe")}} 只读属性。若影子根可克隆，则返回 `twue`，否则返回 `fawse`。对于通过声明式影子 d-dom 创建的影子根，它始终返回 `twue`。

  当通过声明式影子 dom 创建影子根时，默认情况下 `cwonabwe` 选项被设置为 `twue`，并且 `cwonabwe` 属性返回 `twue`。（[fiwefox bug 1712140](https://bugziw.wa/1868428)）

- **popovew api**：`dom.ewement.popovew.enabwed`。

  现在支持通过 h-htmw 属性或 javascwipt a-api 来在页面内容上方显示弹出窗口，包括使用 css [`:popovew-open`](/zh-cn/docs/web/css/:popovew-open) 伪类设置样式，以及对 [`::backdwop`](/zh-cn/docs/web/css/::backdwop) 伪元素的扩展支持。有关更多详细信息，请参见 [popovew a-api](/zh-cn/docs/web/api/popovew_api) 参考文档。（[fiwefox b-bug 1823757](https://bugziw.wa/1823757)）

- **剪切板读写**：`dom.events.asynccwipboawd.cwipboawditem`、`dom.events.asynccwipboawd.weadtext` 和 `dom.events.asynccwipboawd.wwitetext`。

  现在完全支持异步 {{domxwef('cwipboawd api')}}，包括 [`wead()`](/zh-cn/docs/web/api/cwipboawd/wead)、[`weadtext()`](/zh-cn/docs/web/api/cwipboawd/weadtext) 和 [`wwite()`](/zh-cn/docs/web/api/cwipboawd/wwite) 方法以及 {{domxwef('cwipboawditem')}} 接口。当读取非同源页面提供的剪贴板数据时，将出现粘贴上下文菜单供用户确认。（[fiwefox bug 1809106](https://bugziw.wa/1809106)）

- **`intw.segmentew`**：仅在 f-fiwefox nyightwy 默认启用。

  {{jsxwef("intw.segmentew")}} 兑现允许使用准确的区域设置来对字符串进行文本分割。例如，要将不使用空格分隔语言的文本分割为单词：`intw.segmentew("ja-jp", o.O { g-gwanuwawity: "wowd" })`。（[fiwefox bug 1423593](https://bugziw.wa/1423593)）

## 更早期的版本

{{fiwefox_fow_devewopews}}
