---
title: Document
slug: Web/API/Document
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{APIRef("DOM")}}

**`Document`** 接口表示任何在浏览器中载入的 Web 页面，并作为 Web 页面内容的入口，也就是 [DOM 树](/zh-CN/docs/Web/API/Document_Object_Model#什么是_dom_树？)。

DOM 树包含了像 {{HTMLElement("body")}}、{{HTMLElement("table")}} 这样的元素，以及大量[其他元素](/zh-CN/docs/Web/HTML/Reference/Elements)。它向文档本身提供了全局操作功能，能解决如何获取页面的 URL，如何在文档中创建一个新的元素这样的问题。

{{InheritanceDiagram}}

`Document` 接口描述了任何类型的文档的通用属性与方法。根据不同的文档类型（例如 [HTML](/zh-CN/docs/Web/HTML)、[XML](/zh-CN/docs/Web/XML)、SVG……），还有更多可用的 API：使用 `"text/html"` 作为内容类型的 HTML 文档，还实现了 {{DOMxRef("HTMLDocument")}} 接口，而 XML 和 SVG 文档则实现了 {{DOMxRef("XMLDocument")}} 接口。

## 构造函数

- {{DOMxRef("Document.Document", "Document()")}}
  - : 创建一个新的 `Document` 对象。

## 实例属性

_此接口还继承了 {{DOMxRef("Node")}} 和 {{DOMxRef("EventTarget")}} 接口。_

- {{DOMxRef("Document.activeElement")}} {{ReadOnlyInline}}
  - : 返回目前处于聚焦状态的 {{DOMxRef('Element')}}。
- {{DOMxRef("Document.activeViewTransition")}} {{ReadOnlyInline}}
  - : 返回一个表示当前在文档上活动的[视图转换](/zh-CN/docs/Web/API/View_Transition_API)的 {{DOMxRef('ViewTransition')}} 实例，如果没有活动的视图转换则返回 `null`。
- {{DOMxRef("Document.adoptedStyleSheets")}}
  - : 添加用于构造文档样式表的数组。这些样式表也可与同一文档的影子 DOM 子树共享。
- {{DOMxRef("Document.body")}}
  - : 返回当前文档的 {{HTMLElement("body")}} 或 {{htmlelement("frameset")}} 节点。
- {{DOMxRef("Document.characterSet")}} {{ReadOnlyInline}}
  - : 返回文档正在使用的字符集。
- {{domxref("Document.childElementCount")}} {{ReadOnlyInline}}
  - : 返回当前文档的子元素数量。
- {{domxref("Document.children")}} {{ReadOnlyInline}}
  - : 返回当前文档的子元素。
- {{DOMxRef("Document.compatMode")}} {{ReadOnlyInline}}
  - : 指示文档是否以*怪异模式*（quirks）或*严格模式*（strict）渲染。
- {{DOMxRef("Document.contentType")}} {{ReadOnlyInline}}
  - : 根据当前文档的 MIME 标头，返回其内容类型（Content-Type）。
- {{DOMxRef("Document.currentScript")}} {{ReadOnlyInline}}
  - : 返回目前正在处理且[不是 JavaScript 模块](https://github.com/whatwg/html/issues/997)的 {{HTMLElement("script")}} 元素。
- {{DOMxRef("Document.doctype")}} {{ReadOnlyInline}}
  - : 返回当前文档的文档类型定义（Document Type Definition，DTD）。
- {{DOMxRef("Document.documentElement")}} {{ReadOnlyInline}}
  - : 返回当前文档的一个直接子节点{{DOMxRef("Element", "元素", "", 1)}}。对于 HTML 文档，一般为代表该文档的 {{HTMLElement("html")}} 元素的 {{DOMxRef("HTMLHtmlElement")}} 对象。
- {{DOMxRef("Document.documentURI")}} {{ReadOnlyInline}}
  - : 返回文档的位置（字符串形式）。
- {{DOMxRef("Document.embeds")}} {{ReadOnlyInline}}
  - : 返回包含文档中所有嵌入式元素 {{HTMLElement('embed')}} 的 {{DOMxRef("HTMLCollection")}}。
- {{DOMxRef("Document.featurePolicy")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 返回表示应用于文档的特性策略的 {{DOMxRef("FeaturePolicy")}} 接口。
- {{domxref("Document.firstElementChild")}} {{ReadOnlyInline}}
  - : 返回当前文档的第一个子元素。
- {{DOMxRef("Document.fonts")}}
  - : 返回当前文档的 {{DOMxRef("FontFaceSet")}} 接口。
- {{DOMxRef("Document.forms")}} {{ReadOnlyInline}}
  - : 返回包含文档中所有表单元素 {{HTMLElement("form")}} 的 {{DOMxRef("HTMLCollection")}}。
- {{DOMxRef("Document.fragmentDirective")}} {{ReadOnlyInline}}
  - : 返回当前文档的 {{domxref("FragmentDirective")}}。
- {{DOMxRef("Document.fullscreenElement")}} {{ReadOnlyInline}}
  - : 返回文档中正处于全屏模式的元素。
- {{DOMxRef("Document.head")}} {{ReadOnlyInline}}
  - : 返回当前文档的 {{HTMLElement("head")}} 元素。
- {{DOMxRef("Document.hidden")}} {{ReadOnlyInline}}
  - : 返回一个表明当前页面是否隐藏的布尔值。
- {{DOMxRef("Document.images")}} {{ReadOnlyInline}}
  - : 返回包含文档中所有图片的 {{DOMxRef("HTMLCollection")}}。
- {{DOMxRef("Document.implementation")}} {{ReadOnlyInline}}
  - : 返回与当前文档相关联的 DOM 实现。
- {{domxref("Document.lastElementChild")}} {{ReadOnlyInline}}
  - : 返回当前文档的最后一个子元素。
- {{DOMxRef("Document.links")}} {{ReadOnlyInline}}
  - : 返回包含文档中所有超链接的 {{DOMxRef("HTMLCollection")}}。
- {{DOMxRef("Document.pictureInPictureElement")}} {{ReadOnlyInline}}
  - : 返回文档中正处于画中画模式的{{DOMxRef('Element', '元素', '', 1)}}。
- {{DOMxRef("Document.pictureInPictureEnabled")}} {{ReadOnlyInline}}
  - : 若画中画特性可用，则返回 `true`。
- {{DOMxRef("Document.plugins")}} {{ReadOnlyInline}}
  - : 返回一个包含可用插件的 {{DOMxRef("HTMLCollection")}}。
- {{DOMxRef("Document.pointerLockElement")}} {{ReadOnlyInline}}
  - : 当指针被锁定时，返回鼠标事件的目标的元素集合。若锁定正处于等待状态、指针已被解锁，或是目标正处于另一个文档中，则返回 `null`。
- {{DOMxRef("Document.prerendering")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 返回一个表示文档当前是否处于预渲染过程（通过[推测规则 API](/zh-CN/docs/Web/API/Speculation_Rules_API) 启动）中的布尔值。
- {{DOMxRef("Document.scripts")}} {{ReadOnlyInline}}
  - : 返回包含文档中所有的 {{HTMLElement("script")}} 元素的 {{DOMxRef("HTMLCollection")}}。
- {{DOMxRef("Document.scrollingElement")}} {{ReadOnlyInline}}
  - : 返回对用于滚动文档的{{DOMxRef("Element", "元素", "", 1)}}的引用。
- {{DOMxRef("Document.styleSheets")}} {{ReadOnlyInline}}
  - : 返回一个包含显式链接或嵌入到文档中的 {{DOMxRef('CSSStyleSheet')}} 对象的 {{DOMxRef('StyleSheetList')}}。
- {{DOMxRef("Document.timeline")}} {{ReadOnlyInline}}
  - : 返回一个在页面加载时自动创建的特殊 {{domxref("DocumentTimeline")}} 实例。
- {{DOMxRef("Document.visibilityState")}} {{ReadOnlyInline}}
  - : 返回一个表明当前文档的可见性的字符串（`string`）。可能的取值有 `visible`、`hidden`、`prerender` 和 `unloaded`。

### HTMLDocument 的扩展

_HTML 文档的 `Document` 接口继承了 {{DOMxRef("HTMLDocument")}} 接口，或为文档进行了扩展：_

- {{DOMxRef("Document.cookie")}}
  - : 返回一个使用分号分隔的 cookie 列表，或设置单个 cookie。
- {{DOMxRef("Document.defaultView")}} {{ReadOnlyInline}}
  - : 返回一个对 window 对象的引用。
- {{DOMxRef("Document.designMode")}}
  - : 获取或设置编辑整个文档的能力。
- {{DOMxRef("Document.dir")}}
  - : 获取或设置文档的文字方向（rtl 或 ltr）。
- {{DOMxRef("Document.fullscreenEnabled")}} {{ReadOnlyInline}}
  - : 表示全屏模式是否可用。
- {{DOMxRef("Document.lastModified")}} {{ReadOnlyInline}}
  - : 返回文档最后修改的时间。
- {{DOMxRef("Document.location")}} {{ReadOnlyInline}}
  - : 返回当前文档的 URI。
- {{DOMxRef("Document.readyState")}} {{ReadOnlyInline}}
  - : 返回当前文档的加载状态。
- {{DOMxRef("Document.referrer")}} {{ReadOnlyInline}}
  - : 返回链接到此页的页面的 URI。
- {{DOMxRef("Document.title")}}
  - : 获取或设置当前文档的标题。
- {{DOMxRef("Document.URL")}} {{ReadOnlyInline}}
  - : 以字符串形式返回文档的位置。
- 具名属性
  - : 文档中的某些元素也以属性的形式暴露：
    - 对于每个 {{HTMLElement("embed")}}、{{HTMLElement("form")}}、{{HTMLElement("iframe")}}、{{HTMLElement("img")}} 和 {{HTMLElement("object")}} 元素，其 `name`（如果非空）都会被暴露出来。例如，如果文档包含 `<iframe name="my_form">`，那么 `document["my_form"]`（及其等价的 `document.my_form`）会返回对该元素的引用。
    - 对于每个 {{HTMLElement("form")}} 元素，其 `id`（如果非空）也会被暴露出来。
    - 对于每个具有非空 `name` 的 {{HTMLElement("img")}} 元素，其 `id`（如果非空）也会被暴露出来。

    如果某个属性对应单个元素，则直接返回该元素。如果该单个元素是一个 iframe，则返回其 {{domxref("HTMLIFrameElement/contentWindow", "contentWindow")}} 代替。如果该属性对应多个元素，则返回一个包含所有这些元素的 {{domxref("HTMLCollection")}}。

### 已弃用的属性

- {{DOMxRef("Document.alinkColor")}} {{Deprecated_Inline}}
  - : 返回或设置文档正文部分激活的链接的颜色。
- {{DOMxRef("Document.all")}} {{Deprecated_Inline}}
  - : 返回一个以文档节点为根节点的 {{DOMxRef('HTMLAllCollection')}} 集合，以访问文档中所有的元素。这是遗留的非标准属性，不应使用。
- {{DOMxRef("Document.anchors")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 返回文档中所有锚点元素的列表。
- {{DOMxRef("Document.applets")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 返回一个空的 {{domxref("HTMLCollection")}}。过去用于返回文档中的小应用程序（applet）列表的遗留属性。
- {{DOMxRef("Document.bgColor")}} {{Deprecated_Inline}}
  - : 获取或设置当前文档的背景颜色。
- {{DOMxRef("Document.characterSet","Document.charset")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : {{DOMxRef("Document.characterSet")}} 的别名，请使用原始属性替换。
- {{DOMxRef("Document.domain")}} {{Deprecated_Inline}}
  - : 获取或设置当前文档的域。
- {{DOMxRef("Document.fgColor")}} {{Deprecated_Inline}}
  - : 获取或设置当前文档的前景色或文本颜色。
- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}
  - : 若文档处于[全屏模式](/zh-CN/docs/Web/API/Fullscreen_API)，则返回 `true`。
- {{DOMxRef("Document.inputEncoding")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : {{DOMxRef("Document.characterSet")}} 的别名，请使用原始属性替换。
- {{DOMxRef("Document.lastStyleSheetSet")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 返回最后启用的样式表的名字。在设置 {{DOMxRef("document.selectedStyleSheetSet","selectedStyleSheetSet")}} 前，其值都为 `null`。
- {{DOMxRef("Document.linkColor")}} {{Deprecated_Inline}}
  - : 获取或设置文档中超链接的颜色。
- {{DOMxRef("Document.preferredStyleSheetSet")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 返回文档作者首选的样式表。
- {{DOMxRef("Document.rootElement")}} {{Deprecated_Inline}}
  - : 类似于 {{DOMxRef("Document.documentElement")}}，但其仅用于 {{SVGElement("svg")}} 根元素。请使用后者代替。
- {{DOMxRef("Document.selectedStyleSheetSet")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 返回当前正使用的样式表的集合。
- {{DOMxRef("Document.styleSheetSets")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 返回文档上可用样式表的集合。
- {{DOMxRef("Document.vlinkColor")}} {{Deprecated_Inline}}
  - : 获取或设置被访问的超链接的颜色。
- {{DOMxRef("Document.xmlEncoding")}} {{Deprecated_Inline}}
  - : 返回由 XML 声明的编码类型。
- `Document.xmlStandalone` {{Deprecated_Inline}}
  - : 若 XML 声明指定的文档是独立的（_例如_：文档类型定义的外部内容会影响文档的内容），则返回 `true`，否则返回 `false`。
- {{DOMxRef("Document.xmlVersion")}} {{Deprecated_Inline}}
  - : 返回 XML 声明中指定的版本号，若声明不存在则为 `"1.0"`。

## 实例方法

_该接口还继承了 {{DOMxRef("Node")}} 和 {{DOMxRef("EventTarget")}} 接口。_

- {{DOMxRef("Document.adoptNode()")}}
  - : 从外部文档中转移节点。
- {{DOMxRef("Document.append()")}}
  - : 在文档的最后一个子节点后插入一个 {{domxref("Node")}} 对象或字符串的集合。
- {{DOMxRef("Document.ariaNotify()")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : 指定屏幕阅读器应朗读给定的文本字符串。
- {{DOMxRef("Document.browsingTopics()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : 返回一个会兑现为对象数组（表示用户最近三个周期中的热门主题）的 promise。默认情况下，该方法还会使浏览器记录调用者观察到的当前页面访问信息，以便稍后在主题计算中使用页面的主机名。有关更多详细信息，请参阅[主题 API](/zh-CN/docs/Web/API/Topics_API)。
- `Document.captureEvents()` {{Deprecated_Inline}}
  - : 参见 {{DOMxRef("Window.captureEvents")}}。
- {{DOMxRef("Document.caretPositionFromPoint()")}}
  - : 返回一个包含 DOM 节点（包含插入符号以及该符号在节点中的字符偏移量）的 {{DOMxRef('CaretPosition')}} 对象。
- {{DOMxRef("Document.caretRangeFromPoint()")}} {{Non-standard_Inline}}
  - : 获取一个 {{DOMxRef("Range")}} 对象，其为指定坐标下的文档片段。
- {{DOMxRef("Document.createAttribute()")}}
  - : 创建一个新的 {{DOMxRef("Attr")}} 对象并返回。
- {{DOMxRef("Document.createAttributeNS()")}}
  - : 在给定命名空间创建一个新的属性节点并返回。
- {{DOMxRef("Document.createCDATASection()")}}
  - : 创建一个新的数据（CDATA）节点并返回。
- {{DOMxRef("Document.createComment()")}}
  - : 创建一个新的注释节点并返回。
- {{DOMxRef("Document.createDocumentFragment()")}}
  - : 创建一个新的文档片段。
- {{DOMxRef("Document.createElement()")}}
  - : 用给定标签名创建一个新的元素。
- {{DOMxRef("Document.createElementNS()")}}
  - : 用给定标签名和命名空间创建一个新的元素。
- {{DOMxRef("Document.createEvent()")}} {{deprecated_inline}}
  - : 创建一个事件对象。
- {{DOMxRef("Document.createNodeIterator()")}}
  - : 创建一个 {{DOMxRef("NodeIterator")}} 对象。
- {{DOMxRef("Document.createProcessingInstruction()")}}
  - : 创建一个新的 {{DOMxRef("ProcessingInstruction")}} 对象。
- {{DOMxRef("Document.createRange()")}}
  - : 创建一个 {{DOMxRef("Range")}} 对象。
- {{DOMxRef("Document.createTextNode()")}}
  - : 创建一个文本节点。
- {{DOMxRef("Document.createTouch()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 创建一个 {{DOMxRef("Touch")}} 对象。
- {{DOMxRef("Document.createTouchList()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 创建一个 {{DOMxRef("TouchList")}} 对象。
- {{DOMxRef("Document.createTreeWalker()")}}
  - : 创建一个 {{DOMxRef("TreeWalker")}} 对象。
- {{DOMxRef("Document.elementFromPoint()")}}
  - : 返回指定坐标最顶层的元素。
- {{DOMxRef("Document.elementsFromPoint()")}}
  - : 返回包含指定坐标下所有元素的数组。
- {{DOMxRef("Document.enableStyleSheetsForSet()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 启用指定的样式表集合。
- {{DOMxRef("Document.exitFullscreen()")}}
  - : 阻止文档的全屏元素以全屏模式显示。
- {{DOMxRef("Document.exitPictureInPicture()")}}
  - : 从浮动的画中画窗口中移除视频，并返回到它的原始容器。
- {{DOMxRef("Document.exitPointerLock()")}}
  - : 释放指针锁。
- {{DOMxRef("Document.getAnimations()")}}
  - : 返回包含所有目前有效的 {{DOMxRef("Animation")}} 对象（其目标元素为 `document` 的后代）的数组。
- `Document.getBoxQuads()` {{Experimental_Inline}}
  - : 返回一个 {{domxref("DOMQuad")}} 对象（表示节点中的 CSS 片段）的列表。
- {{DOMxRef("Document.getElementById", "Document.getElementById()")}}
  - : 返回标识元素的引用对象。
- {{DOMxRef("Document.getElementsByClassName()")}}
  - : 返回具有给定类名的元素列表。
- {{DOMxRef("Document.getElementsByTagName()")}}
  - : 返回具有给定标签名的元素列表。
- {{DOMxRef("Document.getElementsByTagNameNS()")}}
  - : 返回具有给定标签名和命名空间的元素列表。
- {{DOMxRef("Document.getSelection()")}}
  - : 返回一个 {{DOMxRef('Selection')}} 对象，表示用户选择的文本范围或是插入符号当前的位置。
- {{domxref("Document.hasPrivateToken()")}} {{experimental_inline}}
  - : 返回一个会兑现为用于表示浏览器是否有来自特定发行者的[私有状态令牌](/zh-CN/docs/Web/API/Private_State_Token_API)的布尔值的 {{jsxref("Promise")}}。
- {{domxref("Document.hasRedemptionRecord()")}} {{experimental_inline}}
  - : 返回一个会兑现为用于表示浏览器是否有来自特定发行者的[兑换记录](/zh-CN/docs/Web/API/Private_State_Token_API/Using#兑换令牌)的布尔值的 promise。
- {{DOMxRef("Document.hasStorageAccess()")}}
  - : 返回一个 {{jsxref("Promise")}}，其会兑现一个用于表示文档是否有未分区 cookie 访问权限的布尔值。
- {{DOMxRef("Document.hasUnpartitionedCookieAccess()")}}
  - : {{DOMxRef("Document.hasStorageAccess()")}} 的新名称。
- {{DOMxRef("Document.importNode()")}}
  - : 返回外部文档的节点的拷贝。
- {{DOMxRef("Document.moveBefore()")}}
  - : 将给定 {{domxref("Node")}} 移动到 `Document` DOM 节点内（作为直接子节点）的给定参考节点之前，而不通过先移除然后再插入的方式。
- {{DOMxRef("Document.mozSetImageElement()")}} {{Non-standard_Inline}}
  - : 允许你更改指定元素 ID 的背景图像所用的元素。
- {{DOMxRef("Document.prepend()")}}
  - : 在文档的第一个子节点前插入一个 {{domxref("Node")}} 对象或字符串的集合。
- {{DOMxRef("Document.querySelector()")}}
  - : 返回文档中与指定的选择器匹配的第一个元素节点。
- {{DOMxRef("Document.querySelectorAll()")}}
  - : 返回包含文档中与指定的选择器匹配的所有元素节点的列表。
- {{DOMxRef("Document.releaseCapture()")}} {{Non-standard_Inline}}
  - : 若鼠标在当前文档的某一个元素之上，则释放当前的鼠标捕获。
- `Document.releaseEvents()` {{Deprecated_Inline}}
  - : 参见 {{DOMxRef("Window.releaseEvents()")}}。
- {{DOMxRef("Document.replaceChildren()")}}
  - : 用一个指定的新的子节点集合替换替换文档中现有的子节点。
- {{DOMxRef("Document.requestStorageAccess()")}}
  - : 允许在第三方上下文中加载的文档（即嵌入在 {{htmlelement("iframe")}} 的）请求访问未分区 cookie，以便在默认情况下，用户代理可以通过阻止在第三方上下文中加载的网站访问未分区 cookie 来提高隐私性。
- {{DOMxRef("Document.requestStorageAccessFor()")}} {{experimental_inline}}
  - : 允许顶级站点代表来自同一[关联网站集合](/zh-CN/docs/Web/API/Storage_Access_API/Related_website_sets)中的其他站点的嵌入内容请求第三方 cookie 访问。
- {{domxref("Document.startViewTransition()")}}
  - : 启动新的{{domxref("View Transition API", "视图转换", "", "nocode")}}并返回一个表示它的 {{domxref("ViewTransition")}} 对象。

`Document` 接口使用 {{DOMxRef("XPathEvaluator")}} 接口扩展：

- {{DOMxRef("Document.createExpression()")}}
  - : 编译一个用于（重复）执行的 [`XPathExpression`](/zh-CN/docs/Web/API/XPathExpression)。
- {{DOMxRef("Document.createNSResolver()")}}
  - : 原样返回输入的节点。
- {{DOMxRef("Document.evaluate()")}}
  - : 执行一个 XPath 表达式。

### HTML 文档的扩展

HTML 文档的 `Document` 接口继承了 {{DOMxRef("HTMLDocument")}} 接口，或为文档进行了扩展：

- {{DOMxRef("Document.clear()")}} {{Deprecated_Inline}}
  - : 这个方法没有任何作用。
- {{DOMxRef("Document.close()")}}
  - : 关闭用于写入的文档流。
- {{DOMxRef("Document.execCommand()")}} {{Deprecated_Inline}}
  - : 在可编辑文档中执行格式化命令。
- {{DOMxRef("Document.getElementsByName()")}}
  - : 返回一个具有给定名称的元素的列表。
- {{DOMxRef("Document.hasFocus()")}}
  - : 若焦点目前位于给定的文档内，则返回 `true`。
- {{DOMxRef("Document.open()")}}
  - : 打开用于写入的文档流。
- {{DOMxRef("Document.queryCommandEnabled()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 若可在当前范围内执行格式化命令，则返回 `true`。
- `Document.queryCommandIndeterm()` {{Deprecated_Inline}}
  - : 若格式化命令在当前范围内处于不确定的状态，则返回 `true`。
- {{DOMxRef("Document.queryCommandState()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 若格式化命令已在当前范围内执行，则返回 `true`。
- {{DOMxRef("Document.queryCommandSupported()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 若当前范围支持格式化命令，则返回 `true`。
- `Document.queryCommandValue()` {{Deprecated_Inline}}
  - : 返回格式化命令当前的范围值。
- {{DOMxRef("Document.write()")}}
  - : 向文档写入文本。
- {{DOMxRef("Document.writeln()")}}
  - : 向文档写入一行文本。

## 静态方法

_此接口还继承了 {{DOMxRef("Node")}} 和 {{DOMxRef("EventTarget")}} 接口。_

- {{domxref("Document/parseHTML_static", "Document.parseHTML()")}} {{experimental_inline}}
  - : 以 XSS 安全的方式，通过对 HTML 字符串进行净化处理，创建一个新的 `Document` 对象。
- {{domxref("Document/parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
  - : 通过 HTML 字符串创建一个新的 `Document` 对象，而不执行任何清理操作。该字符串可能包含声明式影子根。

## 事件

可以使用 `addEventListener()` 或为该接口的事件处理器属性 `oneventname` 赋值的方式来监听这些事件。除了下面列出的事件之外，许多事件还可以在文档树中包含的{{domxref("Node", "节点", "", "nocode")}}冒泡。

- {{DOMxRef("Document.afterscriptexecute_event", "afterscriptexecute")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : 在静态的 {{HTMLElement("script")}} 元素执行完其中的脚本时触发。
- {{DOMxRef("Document.beforescriptexecute_event", "beforescriptexecute")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : 在静态的 {{HTMLElement("script")}} 开始执行脚本时触发。
- {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} {{experimental_inline}}
  - : 在预渲染文档被激活（即用户查看该页面）时触发。
- {{DOMxRef("Document.securitypolicyviolation_event", "securitypolicyviolation")}}
  - : 在违反内容安全策略时触发。
- {{DOMxRef("Document/visibilitychange_event", "visibilitychange")}}
  - : 在标签页内容变为可见或隐藏时触发。

### 全屏事件

- {{DOMxRef("Document/fullscreenchange_event", "fullscreenchange")}}
  - : 在 `Document` 进入或退出[全屏](/zh-CN/docs/Web/API/Fullscreen_API/Guide)模式时触发。
- {{DOMxRef("Document/fullscreenerror_event", "fullscreenerror")}}
  - : 在尝试进入或退出[全屏](/zh-CN/docs/Web/API/Fullscreen_API/Guide)模式而发生错误时触发。

### 加载和卸载事件

- {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - : 在文档完全加载并解析后触发，无需等待样式表、图像和子框架完成加载。
- {{DOMxRef("Document/readystatechange_event", "readystatechange")}}
  - : 在文档的 {{DOMxRef("Document/readyState", "readyState")}} 属性发生变化时触发。

### 指针锁定事件

- {{DOMxRef("Document/pointerlockchange_event", "pointerlockchange")}}
  - : 在指针被锁定或解锁时触发。
- {{DOMxRef("Document/pointerlockerror_event", "pointerlockerror")}}
  - : 在尝试锁定指针失败时触发。

### 滚动事件

- {{DOMxRef("Document/scroll_event", "scroll")}}
  - : 在文档视图或元素被滚动时触发。
- {{DOMxRef("Document/scrollend_event", "scrollend")}}
  - : 在文档视图或元素完成滚动时触发。
- {{domxref("Document/scrollsnapchange_event", "scrollsnapchange")}} {{experimental_inline}}
  - : 在滚动操作结束而选择了新的滚动捕捉目标时，在滚动容器上触发。
- {{domxref("Document/scrollsnapchanging_event", "scrollsnapchanging")}} {{experimental_inline}}
  - : 在浏览器确定有新的滚动捕捉目标待定（即若当前滚动手势结束，则会被选中）时，在滚动容器上触发。

### 选择事件

- {{DOMxRef("Document/selectionchange_event", "selectionchange")}}
  - : 在文档中的选中的文本发生改变时触发。

### 冒泡事件

并非所有冒泡事件都能到达 `Document` 对象。只有以下事件可以，并且可以在 `Document` 对象上监听：

- `abort`
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/beforeinput_event", "beforeinput")}}
- {{domxref("Element/beforematch_event", "beforematch")}}
- {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}}
- {{domxref("Element/blur_event", "blur")}}
- `cancel`
- {{domxref("HTMLMediaElement/canplay_event", "canplay")}}
- {{domxref("HTMLMediaElement/canplaythrough_event", "canplaythrough")}}
- {{domxref("HTMLElement/change_event", "change")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("HTMLDialogElement/close_event", "close")}}
- {{domxref("HTMLCanvasElement/contextlost_event", "contextlost")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("HTMLCanvasElement/contextrestored_event", "contextrestored")}}
- {{domxref("Element/copy_event", "copy")}}
- {{domxref("HTMLTrackElement/cuechange_event", "cuechange")}}
- {{domxref("Element/cut_event", "cut")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("HTMLElement/drag_event", "drag")}}
- {{domxref("HTMLElement/dragend_event", "dragend")}}
- {{domxref("HTMLElement/dragenter_event", "dragenter")}}
- {{domxref("HTMLElement/dragleave_event", "dragleave")}}
- {{domxref("HTMLElement/dragover_event", "dragover")}}
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
- {{domxref("HTMLElement/drop_event", "drop")}}
- {{domxref("HTMLMediaElement/durationchange_event", "durationchange")}}
- {{domxref("HTMLMediaElement/emptied_event", "emptied")}}
- {{domxref("HTMLMediaElement/ended_event", "ended")}}
- {{domxref("HTMLElement/error_event", "error")}}
- {{domxref("Element/focus_event", "focus")}}
- {{domxref("HTMLFormElement/formdata_event", "formdata")}}
- {{domxref("Element/input_event", "input")}}
- {{domxref("HTMLInputElement/invalid_event", "invalid")}}
- {{domxref("Element/keydown_event", "keydown")}}
- {{domxref("Element/keypress_event", "keypress")}}
- {{domxref("Element/keyup_event", "keyup")}}
- {{domxref("HTMLElement/load_event", "load")}}
- {{domxref("HTMLMediaElement/loadeddata_event", "loadeddata")}}
- {{domxref("HTMLMediaElement/loadedmetadata_event", "loadedmetadata")}}
- {{domxref("HTMLMediaElement/loadstart_event", "loadstart")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/paste_event", "paste")}}
- {{domxref("HTMLMediaElement/pause_event", "pause")}}
- {{domxref("HTMLMediaElement/play_event", "play")}}
- {{domxref("HTMLMediaElement/playing_event", "playing")}}
- {{domxref("HTMLMediaElement/progress_event", "progress")}}
- {{domxref("HTMLMediaElement/ratechange_event", "ratechange")}}
- {{domxref("HTMLFormElement/reset_event", "reset")}}
- {{domxref("HTMLVideoElement/resize_event", "resize")}}
- {{domxref("Element/scroll_event", "scroll")}}
- {{domxref("Element/scrollend_event", "scrollend")}}
- {{domxref("Element/securitypolicyviolation_event", "securitypolicyviolation")}}
- {{domxref("HTMLMediaElement/seeked_event", "seeked")}}
- {{domxref("HTMLMediaElement/seeking_event", "seeking")}}
- {{domxref("HTMLInputElement/select_event", "select")}}
- {{domxref("HTMLSlotElement/slotchange_event", "slotchange")}}
- {{domxref("HTMLMediaElement/stalled_event", "stalled")}}
- {{domxref("HTMLFormElement/submit_event", "submit")}}
- {{domxref("HTMLMediaElement/suspend_event", "suspend")}}
- {{domxref("HTMLMediaElement/timeupdate_event", "timeupdate")}}
- {{domxref("HTMLElement/toggle_event", "toggle")}}
- {{domxref("HTMLMediaElement/volumechange_event", "volumechange")}}
- {{domxref("HTMLMediaElement/waiting_event", "waiting")}}
- {{domxref("Element/wheel_event", "wheel")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
