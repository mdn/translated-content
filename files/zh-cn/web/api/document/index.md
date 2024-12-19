---
title: Document
slug: Web/API/Document
---

{{APIRef("DOM")}}

**`Document`** 接口表示任何在浏览器中载入的网页，并作为网页内容的入口，也就是 [DOM 树](/zh-CN/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model)。

DOM 树包含了像 {{HTMLElement("body")}}、{{HTMLElement("table")}} 这样的元素，以及[大量其他元素](/zh-CN/docs/Web/HTML/Element)。它向网页文档本身提供了全局操作功能，能解决如何获取页面的 URL，如何在文档中创建一个新的元素这样的问题。

{{inheritanceDiagram}}

`Document` 接口描述了任何类型的文档的通用属性与方法。根据不同的文档类型（例如 [HTML](/zh-CN/docs/Web/HTML)、[XML](/zh-CN/docs/Web/XML)、[SVG](/zh-CN/docs/Web/SVG)，...），还能使用更多 API：使用 `"text/html"` 作为内容类型（content type）的 HTML 文档，还实现了 {{DOMxRef("HTMLDocument")}} 接口，而 XML 和 SVG 文档则（额外）实现了 {{DOMxRef("XMLDocument")}} 接口。

## 构造函数

- {{DOMxRef("Document.Document", "Document()")}}
  - : 创建一个新的 `Document` 对象。

## 属性

_此接口也继承自 {{DOMxRef("Node")}} 和 {{DOMxRef("EventTarget")}} 接口。_

- {{DOMxRef("Document.activeElement")}} {{ReadOnlyInline}}
  - : 返回一个目前处于聚焦状态的 {{DOMxRef('Element')}}。
- {{DOMxRef("Document.adoptedStyleSheets")}}
  - : 设置用于构造文档样式表的数组。这些样式表也可与同一文档的 shadow DOM 子树共享。
- {{DOMxRef("Document.body")}}
  - : 返回当前文档的 {{HTMLElement("body")}} 或 {{htmlelement("frameset")}} 节点。
- {{DOMxRef("Document.characterSet")}} {{ReadOnlyInline}}
  - : 返回文档正在使用的字符集。
- {{domxref("Document.childElementCount")}} {{ReadOnlyInline}}
  - : 返回文档正在使用的子元素的数量。
- {{domxref("Document.children")}} {{ReadOnlyInline}}
  - : 返回当前文档的子元素。
- {{DOMxRef("Document.compatMode")}} {{ReadOnlyInline}}
  - : 指示文档是否以*怪异模式*（quirks）或*严格模式*（strict）渲染。
- {{DOMxRef("Document.contentType")}} {{ReadOnlyInline}}
  - : 根据当前文档的 MIME 标头，返回它的 Content-Type。
- {{DOMxRef("Document.currentScript")}} {{ReadOnlyInline}}
  - : 返回目前正在处理且[不是 JavaScript 模块](https://github.com/whatwg/html/issues/997)的 {{HTMLElement("script")}} 元素。
- {{DOMxRef("Document.doctype")}} {{ReadOnlyInline}}
  - : 返回当前文档的文档类型定义（Document Type Definition，DTD）。
- {{DOMxRef("Document.documentElement")}} {{ReadOnlyInline}}
  - : 返回当前文档的直接子节点。对于 HTML 文档，{{DOMxRef("HTMLHtmlElement")}} 对象一般代表该文档的{{HTMLElement("html")}} 元素。
- {{DOMxRef("Document.documentURI")}} {{ReadOnlyInline}}
  - : 以字符串的类型，返回当前文档的路径。
- {{DOMxRef("Document.embeds")}} {{ReadOnlyInline}}
  - : 返回一个包含当前文档的嵌入式的元素 {{HTMLElement('embed')}} 的 {{DOMxRef("HTMLCollection")}}。
- {{domxref("Document.firstElementChild")}} {{ReadOnlyInline}}
  - : 返回当前文档的第一个子元素。
- {{DOMxRef("Document.fonts")}}
  - : 返回当前文档的 {{DOMxRef("FontFaceSet")}} 接口。
- {{DOMxRef("Document.forms")}} {{ReadOnlyInline}}
  - : 返回一个包含当前文档中所有表单元素 {{HTMLElement("form")}} 的 {{DOMxRef("HTMLCollection")}}。
- {{DOMxRef("Document.fullscreenElement")}} {{ReadOnlyInline}}
  - : 返回文档中正处于全屏模式的元素。
- {{DOMxRef("Document.head")}} {{ReadOnlyInline}}
  - : 返回当前文档的 {{HTMLElement("head")}} 元素。
- {{DOMxRef("Document.hidden")}} {{ReadOnlyInline}}
  - : 返回一个布尔值，表明当前页面是否隐藏。
- {{DOMxRef("Document.images")}} {{ReadOnlyInline}}
  - : 返回当前文档中所包含的图片的 {{DOMxRef("HTMLCollection")}}。
- {{DOMxRef("Document.implementation")}} {{ReadOnlyInline}}
  - : 返回与当前文档相关联的 DOM 实现。
- {{domxref("Document.lastElementChild")}} {{ReadOnlyInline}}
  - : 返回当前文档的最后一个子元素。
- {{DOMxRef("Document.links")}} {{ReadOnlyInline}}
  - : 返回一个包含文档中所有超链接的 {{DOMxRef("HTMLCollection")}}。
- {{DOMxRef("Document.pictureInPictureElement")}} {{ReadOnlyInline}}
  - : 返回文档中正处于画中画模式的 {{DOMxRef('Element')}}。
- {{DOMxRef("Document.pictureInPictureEnabled")}} {{ReadOnlyInline}}
  - : 若画中画特性可用，则返回 `true`。
- {{DOMxRef("Document.plugins")}} {{ReadOnlyInline}}
  - : 返回一个包含可用插件的 {{DOMxRef("HTMLCollection")}}。
- {{DOMxRef("Document.pointerLockElement")}} {{ReadOnlyInline}}
  - : 当指针被锁定时，返回鼠标事件的目标的元素集合。若锁定正处于等待状态、指针已被解锁，或是目标正处于另一个文档中，则返回 `null`。
- {{DOMxRef("Document.featurePolicy")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 返回一个 {{DOMxRef("FeaturePolicy")}} 接口，该结构为应用于特定文档的特性策略提供了一个简单的 API。
- {{DOMxRef("Document.scripts")}} {{ReadOnlyInline}}
  - : 返回包含文档中所有的 {{HTMLElement("script")}} 元素的 {{DOMxRef("HTMLCollection")}}。
- {{DOMxRef("Document.scrollingElement")}} {{ReadOnlyInline}}
  - : 返回对滚动文档的 {{DOMxRef("Element")}} 的引用。
- {{DOMxRef("Document.styleSheets")}} {{ReadOnlyInline}}
  - : 返回一个包含显式链接或嵌入到文档中的 {{DOMxRef('CSSStyleSheet')}} 对象的 {{DOMxRef('StyleSheetList')}}。
- {{DOMxRef("Document.timeline")}} {{ReadOnlyInline}}
  - : 返回 {{domxref("DocumentTimeline")}} 的一个实例，该实例是在页面加载时自动创建的。
- {{DOMxRef("Document.visibilityState")}} {{ReadOnlyInline}}
  - : 返回一个 `string`，表明当前文档的可见性。可能的取值有 `visible`、`hidden`、`prerender` 和 `unloaded`。

### HTMLDocument 的扩展

_HTML 文件的 `Document` 接口继承自 {{DOMxRef("HTMLDocument")}} 接口，或扩展了这些方法：_

- {{DOMxRef("Document.cookie")}}
  - : 返回一个使用分号分隔的 cookie 列表，或设置（写入）一个 cookie。
- {{DOMxRef("Document.defaultView")}} {{ReadOnlyInline}}
  - : 返回一个对 `window` 对象的引用。
- {{DOMxRef("Document.designMode")}}
  - : 获取或设置编辑整个文档的能力。
- {{DOMxRef("Document.dir")}}
  - : 获取或设置文档的文字方向（rtl 或 ltr）。
- {{DOMxRef("Document.domain")}} {{Deprecated_Inline}}
  - : 获取或设置当前文档的域。
- {{DOMxRef("Document.lastModified")}} {{ReadOnlyInline}}
  - : 返回文档最后修改的时间。
- {{DOMxRef("Document.location")}} {{ReadOnlyInline}}
  - : 返回当前文档的 URI。
- {{DOMxRef("Document.readyState")}} {{ReadOnlyInline}}
  - : 返回当前文档的加载状态。
- {{DOMxRef("Document.referrer")}} {{ReadOnlyInline}}
  - : 返回来源页面的 URI。
- {{DOMxRef("Document.title")}}
  - : 获取或设置当前文档的标题。
- {{DOMxRef("Document.URL")}} {{ReadOnlyInline}}
  - : 以字符串形式返回文档的地址栏链接。

### 已弃用的属性

- {{DOMxRef("Document.alinkColor")}} {{Deprecated_Inline}}
  - : 获取或设置文档正文部分启用的链接的颜色。
- {{DOMxRef("Document.all")}} {{Deprecated_Inline}}
  - : 返回一个以文档节点为根节点的 {{DOMxRef('HTMLAllCollection')}} 集合，以访问文档中所有的元素。这是遗留的非标准属性，不应使用。
- {{DOMxRef("Document.anchors")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 返回文档中所有锚点元素的列表。
- {{DOMxRef("Document.applets")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 返回文档中 `applet` 对象的有序列表。
- {{DOMxRef("Document.bgColor")}} {{Deprecated_Inline}}
  - : 获取或设置当前文档的背景颜色。
- {{DOMxRef("Document.characterSet","Document.charset")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : {{DOMxRef("Document.characterSet")}} 的别名，请使用原始属性替换。
- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}
  - : 若文档处于[全屏模式](/zh-CN/docs/Web/API/Fullscreen_API)，则返回 `true`。
- {{DOMxRef("Document.height")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 获取或设置当前文档的高度。
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
- {{DOMxRef("Document.width")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 返回当前文档的宽度。
- {{DOMxRef("Document.xmlEncoding")}} {{Deprecated_Inline}}
  - : 返回由 XML 声明的编码类型。
- {{DOMxRef("Document.xmlStandalone")}} {{Deprecated_Inline}}
  - : 若 XML 声明指定的文档是独立的（例如：文档类型定义的外部内容会影响文档的内容），则返回 `true`，否则返回 `false`。
- {{DOMxRef("Document.xmlVersion")}} {{Deprecated_Inline}}
  - : 返回 XML 声明中指定的版本号，若声明不存在则为 `"1.0"`。

## 方法

_该接口同样继承了 {{DOMxRef("Node")}} 和 {{DOMxRef("EventTarget")}} 接口。_

- {{DOMxRef("Document.adoptNode()")}}
  - : 从外部文档中采用的节点。
- {{DOMxRef("Document.append()")}}
  - : 在文档的最后一个子节点后插入一个 {{domxref("Node")}} 对象或字符串对象的集合。
- {{DOMxRef("Document.captureEvents()")}} {{Deprecated_Inline}}
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
- {{DOMxRef("Document.createEntityReference()")}} {{Deprecated_Inline}}
  - : 创建一个新的实体引用对象并返回。
- {{DOMxRef("Document.createEvent()")}}
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
- {{DOMxRef("Document.exitPictureInPicture()")}}
  - : 从浮动的画中画窗口中移除视频，并返回到它的原始容器。
- {{DOMxRef("Document.exitPointerLock()")}}
  - : 释放指针锁。
- {{DOMxRef("Document.getAnimations()")}}
  - : 返回包含所有目前有效的 {{DOMxRef("Animation")}} 对象（其目标元素为 `document`）的数组。
- {{domxref("Document.getBoxQuads()")}} {{Experimental_Inline}}
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
- {{DOMxRef("Document.hasStorageAccess()")}}
  - : 返回一个 {{jsxref("Promise")}}，会兑现一个布尔值，用于表示文档是否有访问第一方储存的权限。
- {{DOMxRef("Document.importNode()")}}
  - : 返回外部文档的节点的拷贝。
- {{DOMxRef("Document.normalizeDocument()")}} {{Deprecated_Inline}}
  - : 替换实体、规范化文本节点，等待。
- {{DOMxRef("Document.prepend()")}}
  - : 在文档的第一个子节点前插入一个 {{domxref("Node")}} 对象或字符串对象的集合。
- {{DOMxRef("Document.querySelector()")}}
  - : 返回文档中与指定的选择器匹配的第一个元素节点。
- {{DOMxRef("Document.querySelectorAll()")}}
  - : 返回包含文档中与指定的选择器匹配的所有元素节点的列表。
- {{DOMxRef("Document.releaseCapture()")}} {{Non-standard_Inline}}
  - : 若鼠标在当前文档的某一个元素之上，则释放当前的鼠标捕获。
- {{DOMxRef("Document.releaseEvents()")}} {{Deprecated_Inline}}
  - : 参见 {{DOMxRef("Window.releaseEvents()")}}。
- {{DOMxRef("Document.replaceChildren()")}}
  - : 用一哥指定的新的子节点集合替换替换文档中现有的子节点。
- {{DOMxRef("Document.requestStorageAccess()")}}
  - : 返回一个 {{jsxref("Promise")}}，若第一方存储权限可用，则兑现，否则拒绝。
- {{DOMxRef("Document.mozSetImageElement()")}} {{Non-standard_Inline}}
  - : 允许你使用具有给定 ID 的元素作为背景图片。

`Document` 接口使用 {{DOMxRef("XPathEvaluator")}} 接口扩展：

- {{DOMxRef("Document.createExpression()")}}
  - : 编译一个 [`XPathExpression`](/zh-CN/docs/Web/API/XPathExpression)，以用于（重复）执行。
- {{DOMxRef("Document.createNSResolver()")}}
  - : 创建一个 {{DOMxRef("XPathNSResolver")}} 对象。
- {{DOMxRef("Document.evaluate()")}}
  - : 执行一个 XPath 表达式。

### HTML 文档的扩展

HTML 文档的 `Document` 接口继承自 {{DOMxRef("HTMLDocument")}} 接口，或扩展了这些方法：

- {{DOMxRef("Document.clear()")}} {{Deprecated_Inline}}
  - : 在大多数现代浏览器中，包括最新版本的 Firefox 和 Internet Explorer，这个方法没有任何作用。
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
- {{DOMxRef("Document.queryCommandIndeterm()")}} {{Deprecated_Inline}}
  - : 若格式化命令在当前范围内处于不确定的状态，则返回 `true`。
- {{DOMxRef("Document.queryCommandState()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 若格式化命令已在当前范围内执行，则返回 `true`。
- {{DOMxRef("Document.queryCommandSupported()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 若当前范围支持格式化命令，则返回 `true`。
- {{DOMxRef("Document.queryCommandValue()")}} {{Deprecated_Inline}}
  - : 返回格式化命令当前的范围。
- {{DOMxRef("Document.write()")}}
  - : 向文档写入文本。
- {{DOMxRef("Document.writeln()")}}
  - : 向文档写入一行文本。

## 事件

列出了使用 `addEventListener()` 或为接口的事件处理器属性 `oneventname` 赋值的方式来监听的事件。

- {{DOMxRef("Document.afterscriptexecute_event", "afterscriptexecute")}} {{Non-standard_Inline}}
  - : 在静态的 {{HTMLElement("script")}} 元素执行完其中的脚本时触发。
- {{DOMxRef("Document.beforescriptexecute_event", "beforescriptexecute")}}
  - : 在静态的 {{HTMLElement("script")}} 开始执行脚本时触发。
- {{DOMxRef("Document/scroll_event", "scroll")}}
  - : 在滚动文档视图或元素时触发。
- {{DOMxRef("Document/visibilitychange_event", "visibilitychange")}}
  - : 在变前的内容变为可见、隐藏时触发。
- {{DOMxRef("Document/wheel_event","wheel")}}
  - : 在用户在点击设备（通常为鼠标）上转动滚轮时触发。

### 动画事件

- {{DOMxRef("Document/animationcancel_event", "animationcancel")}}
  - : 在动画意外中止时触发。
- {{DOMxRef("Document/animationend_event", "animationend")}}
  - : 在动画正常完成时触发。
- {{DOMxRef("Document/animationiteration_event", "animationiteration")}}
  - : 在动画迭代完成时触发。
- {{DOMxRef("Document/animationstart_event", "animationstart")}}
  - : 在动画开始时触发。

### 剪切板事件

- {{DOMxRef("Document/copy_event", "copy")}}
  - : 在用户通过浏览器的用户界面使用复制操作时触发。
- {{DOMxRef("Document/cut_event", "cut")}}
  - : 在用户通过浏览器的用户界面使用剪切操作时触发。
- {{DOMxRef("Document/paste_event", "paste")}}
  - : 在用户通过浏览器的用户界面使用粘贴操作时触发。

### 拖放事件

- {{DOMxRef("Document/drag_event", "drag")}}
  - : 在用户拖动元素或选择的文本时每几百毫秒触发一次。
- {{DOMxRef("Document/dragend_event", "dragend")}}
  - : 在拖动操作结束（通过释放鼠标按钮或按下退出键））时触发。
- {{DOMxRef("Document/dragenter_event", "dragenter")}}
  - : 在拖动的元素或选择的文本进入有效的放置目标时触发。
- {{DOMxRef("Document/dragleave_event", "dragleave")}}
  - : 在拖动的元素或选择的文本离开有效的放置目标时触发。
- {{DOMxRef("Document/dragover_event", "dragover")}}
  - : 在拖动的元素或选择的文本在有效的放置目标时触发（每几百毫秒）。
- {{DOMxRef("Document/dragstart_event", "dragstart")}}
  - : 在用户开始拖动元素或选择的文本时触发。
- {{DOMxRef("Document/drop_event", "drop")}}
  - : 在元素或选择的文本被放置在有效的放置目标时触发。

### 全屏事件

- {{DOMxRef("Document/fullscreenchange_event", "fullscreenchange")}}
  - : 在 `Document` 进入或退出[全屏](/zh-CN/docs/Web/API/Fullscreen_API/Guide)模式时触发。
- {{DOMxRef("Document/fullscreenerror_event", "fullscreenerror")}}
  - : 在尝试进入或退出[全屏](/zh-CN/docs/Web/API/Fullscreen_API/Guide)模式而发生错误时触发。

### 键盘事件

- {{DOMxRef("Document/keydown_event", "keydown")}}
  - : 在某个键被按下时触发。
- {{DOMxRef("Document/keypress_event", "keypress")}} {{Deprecated_Inline}}
  - : 在按下产生字符值的键时触发。
- {{DOMxRef("Document/keyup_event", "keyup")}}
  - : 在释放按键时触发。

### 加载和卸载事件

- {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - : 在文档完全加载并解析后触发，无需等待样式表、图像和子框架完成加载。
- {{DOMxRef("Document/readystatechange_event", "readystatechange")}}
  - : 在文档的 {{DOMxRef("Document/readyState", "readyState")}} 属性发生变化时触发。

### 指针事件

- {{DOMxRef("Document/gotpointercapture_event", "gotpointercapture")}}
  - : 在使用 [`setPointerCapture()`](/zh-CN/docs/Web/API/Element/setPointerCapture) 捕获元素时触发。
- {{DOMxRef("Document/lostpointercapture_event", "lostpointercapture")}}
  - : 在[捕获指针](/zh-CN/docs/Web/API/Pointer_events#pointer_capture)释放时触发。
- {{DOMxRef("Document/pointercancel_event", "pointercancel")}}
  - : 在指针事件取消时触发。
- {{DOMxRef("Document/pointerdown_event", "pointerdown")}}
  - : 在指针变为活动状态时触发。
- {{DOMxRef("Document/pointerenter_event", "pointerenter")}}
  - : 在指针移入到元素或其子元素之一的命中测试边界时触发。
- {{DOMxRef("Document/pointerleave_event", "pointerleave")}}
  - : 在指针移出元素的命中测试边界时触发。
- {{DOMxRef("Document/pointerlockchange_event", "pointerlockchange")}}
  - : 在指针被锁定或解锁时触发。
- {{DOMxRef("Document/pointerlockerror_event", "pointerlockerror")}}
  - : 在指针锁定失败时触发。
- {{DOMxRef("Document/pointermove_event", "pointermove")}}
  - : 在指针坐标改变时触发。
- {{DOMxRef("Document/pointerout_event", "pointerout")}}
  - : 在指正移除元素的*命中测试*边界（或其他原因）时触发。
- {{DOMxRef("Document/pointerover_event", "pointerover")}}
  - : 在指针移入元素的命中测试边界时触发。
- {{DOMxRef("Document/pointerup_event", "pointerup")}}
  - : 在指针不再活动时触发。

### 选择事件

- {{DOMxRef("Document/selectionchange_event", "selectionchange")}}
  - : 在文档中的选中的文本发生改变时触发。

### 触摸事件

- {{DOMxRef("Document/touchcancel_event", "touchcancel")}}
  - : 在一个或多个接触点以特定于实现的方式中断（例如，创建了太多的接触点）时触发。
- {{DOMxRef("Document/touchend_event", "touchend")}}
  - : 在从接触面移除一个或多个接触点时触发。
- {{DOMxRef("Document/touchmove_event", "touchmove")}}
  - : 在一个或多个接触点沿接触面移动时触发。
- {{DOMxRef("Document/touchstart_event", "touchstart")}}
  - : 在向接触面放置一个或多个接触点时触发。

### 过渡事件

- {{DOMxRef("Document/transitioncancel_event", "transitioncancel")}}
  - : 在 [CSS 过渡](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)取消时触发。
- {{DOMxRef("Document/transitionend_event", "transitionend")}}
  - : 在 [CSS 过渡](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)完成时触发。
- {{DOMxRef("Document/transitionrun_event", "transitionrun")}}
  - : 在 [CSS 过渡](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)第一次创建时触发。
- {{DOMxRef("Document/transitionstart_event", "transitionstart")}}
  - : 在 [CSS 过渡](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)实际开始时触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
