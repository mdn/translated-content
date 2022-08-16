---
title: Document
slug: Web/API/Document
---
{{APIRef("DOM")}}

**`Document`** 接口表示任何在浏览器中载入的网页，并作为网页内容的入口，也就是[DOM 树](/zh-CN/docs/Using_the_W3C_DOM_Level_1_Core)。DOM 树包含了像 {{HTMLElement("body")}} 、{{HTMLElement("table")}} 这样的元素，以及[大量其他元素](/zh-CN/docs/Web/HTML/Element)。它向网页文档本身提供了全局操作功能，能解决如何获取页面的 URL ，如何在文档中创建一个新的元素这样的问题。

{{inheritanceDiagram}}

`Document` 接口描述了任何类型的文档的通用属性与方法。根据不同的文档类型（例如[HTML](/zh-CN/docs/HTML)、[XML](/zh-CN/docs/XML)、[SVG](/zh-CN/docs/Web/SVG)，...），还能使用更多 API：使用 `"text/html"` 作为内容类型（content type）的 HTML 文档，还实现了 {{DOMxRef("HTMLDocument")}} 接口，而 XML 和 SVG 文档则（额外）实现了 {{DOMxRef("XMLDocument")}} 接口。

## 构造器

- {{DOMxRef("Document.Document","Document()")}}
  - : 创建一个新的 `Document` 对象。

## 属性

_此接口也继承自 {{DOMxRef("Node")}} 和 {{DOMxRef("EventTarget")}} 接口。_

- {{DOMxRef("Document.all")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个以文档节点为根节点的 {{DOMxRef('HTMLAllCollection')}} 集合。换句话说，它能返回页面的完整内容。
- {{DOMxRef("Document.anchors")}} {{ReadOnlyInline}}
  - : 返回文档中所有锚点元素的列表。
- {{DOMxRef("Document.body")}}
  - : 返回当前文档的 {{HTMLElement("body")}} 或 {{htmlelement("frameset")}} 节点。
- {{DOMxRef("Document.characterSet")}} {{ReadOnlyInline}}
  - : 返回文档正在使用的字符集。
- {{DOMxRef("Document.compatMode")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 指示文档是否以 _quirks_ 怪异模式或 _strict_ 严格模式呈现。
- {{DOMxRef("Document.contentType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 根据当前文档的 MIME Header，返回它的 Content-Type。
- {{DOMxRef("Document.doctype")}} {{ReadOnlyInline}}
  - : 返回当前文档的文档类型定义（Document Type Definition, DTD）。
- {{DOMxRef("Document.documentElement")}} {{ReadOnlyInline}}
  - : 返回当前文档的直接子节点。对于 HTML 文档，{{DOMxRef("HTMLHtmlElement")}} 对象一般代表该文档的{{HTMLElement("html")}} 元素。
- {{DOMxRef("Document.documentURI")}} {{ReadOnlyInline}}
  - : 以字符串的类型，返回当前文档的路径。
- {{DOMxRef("Document.embeds")}} {{ReadOnlyInline}}
  - : 以列表 (list) 的类型，返回当前文档的嵌入式的元素 {{HTMLElement('embed')}} 。
- {{DOMxRef("Document.fonts")}}
  - : 返回当前文档的 {{DOMxRef("FontFaceSet")}} 接口。
- {{DOMxRef("Document.forms")}} {{ReadOnlyInline}}
  - : 返回一个包含当前文档中所有表单元素 {{HTMLElement("form")}} 的列表。
- {{DOMxRef("Document.head")}} {{ReadOnlyInline}}
  - : 返回当前文档的 {{HTMLElement("head")}} 元素。
- {{DOMxRef("Document.hidden")}} {{ReadOnlyInline}}
  - : 返回一个布尔值，表明当前页面是否隐藏。
- {{DOMxRef("Document.images")}} {{ReadOnlyInline}}
  - : 返回当前文档中所包含的图片的列表。
- {{DOMxRef("Document.implementation")}} {{ReadOnlyInline}}
  - : 返回与当前文档相关联的 DOM 实现。
- {{DOMxRef("Document.lastStyleSheetSet")}} {{ReadOnlyInline}}
  - : 返回最后启用样式表的名字。在设置{{DOMxRef("document.selectedStyleSheetSet","selectedStyleSheetSet")}} 前值都为 `null` 。
- {{DOMxRef("Document.links")}} {{ReadOnlyInline}}
  - : 返回一个包含文档中所有超链接的列表。
- {{DOMxRef("Document.mozSyntheticDocument")}} {{Non-standard_Inline}}
  - : 返回 {{JSxRef("Boolean")}} ，仅当此文件是合成的（例如独立图像，视频，音频文件等）时才为 `true` 。
- {{DOMxRef("Document.plugins")}} {{ReadOnlyInline}}
  - : 返回一个可用插件列表。
- {{DOMxRef("Document.featurePolicy")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回 {{DOMxRef("FeaturePolicy")}} interface which provides a simple API for introspecting the feature policies applied to a specific document.
- {{DOMxRef("Document.preferredStyleSheetSet")}} {{ReadOnlyInline}}
  - : 返回 preferred style sheet set as specified by the page author.
- {{DOMxRef("Document.scripts")}} {{ReadOnlyInline}}
  - : 返回文档中所有的 {{HTMLElement("script")}} 元素。
- {{DOMxRef("Document.scrollingElement")}} {{ReadOnlyInline}}
  - : 返回对文档 {{DOMxRef("Element")}} 元素的引用。
- {{DOMxRef("Document.selectedStyleSheetSet")}}
  - : 返回当前正使用的样式表集。
- {{DOMxRef("Document.styleSheetSets")}} {{ReadOnlyInline}}
  - : 返回文档上可用样式表的列表。
- {{DOMxRef("Document.timeline")}} {{ReadOnlyInline}}
  - : 返回 {{domxref("DocumentTimeline")}} 的一个实例，该实例是在页面加载时自动创建的。
- {{DOMxRef("Document.undoManager")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : …
- {{DOMxRef("Document.visibilityState")}} {{ReadOnlyInline}}
  - : 返回 `string` 表明当前文档的可见性。可能的取值有 `visible`, `hidden`, `prerender`, and `unloaded 。`

`Document` 接口继承自 {{DOMxRef("ParentNode")}} 的接口：

{{page("/en-US/docs/Web/API/ParentNode","Properties")}}

### HTMLDocument 的扩展

_HTML 文件的 `Document` 接口继承自_ _{{DOMxRef("HTMLDocument")}} 接口（从 HTML5 扩展）：_

- {{DOMxRef("Document.cookie")}}
  - : 返回一个使用分号分隔的 cookie 列表，或设置（写入）一个 cookie。
- {{DOMxRef("Document.defaultView")}} {{ReadOnlyInline}}
  - : 返回一个对（当前）`window` 对象的引用。
- {{DOMxRef("Document.designMode")}}
  - : 获取或设置（让用户）编辑整个文档的能力。
- {{DOMxRef("Document.dir")}} {{ReadOnlyInline}}
  - : 获取或设置文档的文字方向（rtl 或 ltr）。
- {{DOMxRef("Document.domain")}}
  - : 获取或设置当前文档的域名。
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

### DocumentOrShadowRoot 包含的属性

_`Document` 接口混入（mixin）{{DOMxRef("DocumentOrShadowRoot")}} 包含的属性。请注意，这些属性目前仅有 Chrome 实现；其他浏览器仍在 {{DOMxRef("Document")}} 接口上直接实现它们。._

- {{DOMxRef("DocumentOrShadowRoot.activeElement")}} {{ReadOnlyInline}}
  - : 返回阴影树内聚焦的 {{DOMxRef('Element')}} 。
- {{DOMxRef("Document.fullscreenElement")}} {{ReadOnlyInline}}
  - : 当前文档处于全屏模式下的元素。
- {{DOMxRef("DocumentOrShadowRoot.pointerLockElement")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回 element set as the target for mouse events while the pointer is locked. `null` if lock is pending, pointer is unlocked, or if the target is in another document.
- {{DOMxRef("DocumentOrShadowRoot.styleSheets")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef('StyleSheetList')}} of {{DOMxRef('CSSStyleSheet')}} objects for stylesheets explicitly linked into, or embedded in a document.

### Event handlers

- {{DOMxRef("Document.onafterscriptexecute")}} {{Non-standard_Inline}}
  - : Represents the event handling code for the {{event("afterscriptexecute")}} event.
- {{DOMxRef("Document.onbeforescriptexecute")}} {{Non-standard_Inline}}
  - : Represents the event handling code for the {{event("beforescriptexecute")}} event.
- {{DOMxRef("Document.oncopy")}} {{Non-standard_Inline}}
  - : Represents the event handling code for the {{event("copy")}} event.
- {{DOMxRef("Document.oncut")}} {{Non-standard_Inline}}
  - : Represents the event handling code for the {{event("cut")}} event.
- {{DOMxRef("Document.onfullscreenchange")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("fullscreenchange")}} event is raised.
- {{DOMxRef("Document.onfullscreenerror")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("fullscreenerror")}} event is raised.
- {{DOMxRef("Document.onpaste")}} {{Non-standard_Inline}}
  - : Represents the event handling code for the {{event("paste")}} event.
- {{DOMxRef("Document.onreadystatechange")}}
  - : Represents the event handling code for the {{event("readystatechange")}} event.
- {{DOMxRef("Document.onselectionchange")}} {{Experimental_Inline}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("selectionchange")}} event is raised.
- {{DOMxRef("Document.onvisibilitychange")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("visibilitychange")}} event is raised.

The `Document` interface is extended with the {{DOMxRef("GlobalEventHandlers")}} interface:

{{Page("/en-US/docs/Web/API/GlobalEventHandlers", "Properties")}}

### Deprecated properties

- {{DOMxRef("Document.alinkColor")}} {{Deprecated_Inline}}
  - : Returns or sets the color of active links in the document body.
- {{DOMxRef("Document.all")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Provides access to all elements in the document. This is a legacy, non-standard property and should not be used.
- {{DOMxRef("Document.applets")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Returns an ordered list of the applets within a document.
- {{DOMxRef("Document.bgColor")}} {{Deprecated_Inline}}
  - : 获取或设置 the background color of 当前文档。
- {{DOMxRef("Document.charset")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Alias of {{DOMxRef("Document.characterSet")}}. Use this property instead.
- {{DOMxRef("Document.domConfig")}} {{Deprecated_Inline}}
  - : Should return a {{DOMxRef("DOMConfiguration")}} 对象。
- {{DOMxRef("document.fgColor")}} {{Deprecated_Inline}}
  - : 获取或设置 the foreground color, or text color, of 当前文档。
- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}
  - : `true` when the document is in {{DOMxRef("Using_full-screen_mode","full-screen mode")}}.
- {{DOMxRef("Document.height")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 获取或设置 the height of 当前文档。
- {{DOMxRef("Document.inputEncoding")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Alias of {{DOMxRef("Document.characterSet")}}. Use this property instead.
- {{DOMxRef("Document.linkColor")}} {{Deprecated_Inline}}
  - : 获取或设置 the color of hyperlinks in the document.
- {{DOMxRef("Document.vlinkColor")}} {{Deprecated_Inline}}
  - : 获取或设置 the color of visited hyperlinks.
- {{DOMxRef("Document.width")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 返回 width of 当前文档。
- {{DOMxRef("Document.xmlEncoding")}} {{Deprecated_Inline}}
  - : 返回 encoding as determined by the XML declaration.
- {{DOMxRef("Document.xmlStandalone")}} {{Deprecated_Inline}}
  - : Returns `true` if the XML declaration specifies the document to be standalone (_e.g.,_ An external part of the DTD affects the document's content), else `false`.
- {{DOMxRef("Document.xmlVersion")}} {{Deprecated_Inline}}
  - : 返回 version number as specified in the XML declaration or `"1.0"` if the declaration is absent.

## Methods

_该接口同样继承了 {{DOMxRef("Node")}} 和 {{DOMxRef("EventTarget")}} 接口。_

- {{DOMxRef("Document.adoptNode()")}}
  - : 从外部文档中采用节点。
- {{DOMxRef("Document.captureEvents()")}} {{Deprecated_Inline}}
  - : 参见 {{DOMxRef("Window.captureEvents")}}。
- {{DOMxRef("Document.caretRangeFromPoint()")}} {{Non-standard_Inline}}
  - : Gets a {{DOMxRef("Range")}} object for the document fragment under the specified coordinates.
- {{DOMxRef("Document.createAttribute()")}}
  - : 创建一个新的 {{DOMxRef("Attr")}} 对象并返回。
- {{DOMxRef("Document.createAttributeNS()")}}
  - : 在给定命名空间创建一个新的属性节点并返回。
- {{DOMxRef("Document.createCDATASection()")}}
  - : 创建一个新的数据节点（CDATA node）并返回。
- {{DOMxRef("Document.createComment()")}}
  - : 创建一个新的注释节点并返回。
- {{DOMxRef("Document.createDocumentFragment()")}}
  - : 创建一个新的文档片段。
- {{DOMxRef("Document.createElement()")}}
  - : 用给定标签名 tagName 创建一个新的元素。
- {{DOMxRef("Document.createElementNS()")}}
  - : 用给定标签名 tagName 和命名空间创建一个新的元素。
- {{DOMxRef("Document.createEntityReference()")}} {{Deprecated_Inline}}
  - : 创建一个 new entity reference object and returns it.
- {{DOMxRef("Document.createEvent()")}}
  - : 创建一个 event 对象。
- {{DOMxRef("Document.createNodeIterator()")}}
  - : 创建一个 {{DOMxRef("NodeIterator")}} 对象。
- {{DOMxRef("Document.createProcessingInstruction()")}}
  - : 创建一个 new {{DOMxRef("ProcessingInstruction")}} 对象。
- {{DOMxRef("Document.createRange()")}}
  - : 创建一个 {{DOMxRef("Range")}} 对象。
- {{DOMxRef("Document.createTextNode()")}}
  - : 创建一个 text node.
- {{DOMxRef("Document.createTouch()")}} {{Deprecated_Inline}}
  - : 创建一个 {{DOMxRef("Touch")}} 对象。
- {{DOMxRef("Document.createTouchList()")}}
  - : 创建一个 {{DOMxRef("TouchList")}} 对象。
- {{DOMxRef("Document.createTreeWalker()")}}
  - : 创建一个 {{DOMxRef("TreeWalker")}} 对象。
- {{DOMxRef("Document.enableStyleSheetsForSet()")}}
  - : Enables the style sheets for the specified style sheet set.
- {{DOMxRef("Document.exitPointerLock()")}} {{Experimental_Inline}}
  - : Release the pointer lock.
- {{DOMxRef("Document.getAnimations()")}} {{Experimental_Inline}}
  - : Returns an array of all {{DOMxRef("Animation")}} objects currently in effect, whose target elements are descendants of the `document`.
- {{DOMxRef("Document.getElementsByClassName()")}}
  - : Returns a list of elements with the given class name.
- {{DOMxRef("Document.getElementsByTagName()")}}
  - : Returns a list of elements with the given tag name.
- {{DOMxRef("Document.getElementsByTagNameNS()")}}
  - : Returns a list of elements with the given tag name and namespace.
- {{DOMxRef("Document.hasStorageAccess()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a boolean value indicating whether the document has access to its first-party storage.
- {{DOMxRef("Document.importNode()")}}
  - : Returns a clone of a node from an external document.
- {{DOMxRef("Document.normalizeDocument()")}} {{Deprecated_Inline}}
  - : Replaces entities, normalizes text nodes, etc.
- {{DOMxRef("Document.releaseCapture()")}} {{Non-standard_Inline}}
  - : Releases the current mouse capture if it's on an element in this document.
- {{DOMxRef("Document.releaseEvents()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 详见 {{DOMxRef("Window.releaseEvents()")}}。
- {{DOMxRef("Document.requestStorageAccess()")}}
  - : Returns a {{jsxref("Promise")}} that resolves if the access to first-party storage was granted, and rejects if access was denied.
- {{DOMxRef("Document.routeEvent()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : See {{DOMxRef("Window.routeEvent()")}}.
- {{DOMxRef("Document.mozSetImageElement()")}} {{Non-standard_Inline}}
  - : Allows you to change the element being used as the background image for a specified element ID.

The `Document` interface is extended with the {{DOMxRef("ParentNode")}} interface:

- {{DOMxRef("document.getElementById","document.getElementById(String id)")}}
  - : Returns an object reference to the identified element.
- {{DOMxRef("document.querySelector()")}}
  - : 返回 first Element node within the document, in document order, that matches the specified selectors.
- {{DOMxRef("document.querySelectorAll()")}}
  - : Returns a list of all the Element nodes within the document that match the specified selectors.

The `Document` interface is extended with the {{DOMxRef("XPathEvaluator")}} interface:

- {{DOMxRef("document.createExpression()")}}
  - : Compiles an [`XPathExpression`](/en-US/docs/XPathExpression) which can then be used for (repeated) evaluations.
- {{DOMxRef("document.createNSResolver()")}}
  - : 创建一个 {{DOMxRef("XPathNSResolver")}} 对象。
- {{DOMxRef("document.evaluate()")}}
  - : Evaluates an XPath expression.

### Extension for HTML documents

The `Document` interface for HTML documents inherit from the {{DOMxRef("HTMLDocument")}} interface or, since HTML5, is extended for such documents:

- {{DOMxRef("document.clear()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : In majority of modern browsers, including recent versions of Firefox and Internet Explorer, this method does nothing.
- {{DOMxRef("document.close()")}}
  - : Closes a document stream for writing.
- {{DOMxRef("document.execCommand()")}}
  - : On an editable document, executes a formating command.
- {{DOMxRef("document.getElementsByName()")}}
  - : Returns a list of elements with the given name.
- {{DOMxRef("document.hasFocus()")}}
  - : Returns `true` if the focus is currently located anywhere inside the specified document.
- {{DOMxRef("document.open()")}}
  - : Opens a document stream for writing.
- {{DOMxRef("document.queryCommandEnabled()")}}
  - : Returns true if the formating command can be executed on the current range.
- {{DOMxRef("document.queryCommandIndeterm()")}}
  - : Returns true if the formating command is in an indeterminate state on the current range.
- {{DOMxRef("document.queryCommandState()")}}
  - : Returns true if the formating command has been executed on the current range.
- {{DOMxRef("document.queryCommandSupported()")}}
  - : Returns true if the formating command is supported on the current range.
- {{DOMxRef("document.queryCommandValue()")}}
  - : 返回 current value of the current range for a formating command.
- {{DOMxRef("document.write()")}}
  - : Writes text in a document.
- {{DOMxRef("document.writeln()")}}
  - : Writes a line of text in a document.

### Methods included from DocumentOrShadowRoot

_The `Document` interface includes the following methods defined on the {{DOMxRef("DocumentOrShadowRoot")}} mixin. Note that this is currently only implemented by Chrome; other browsers still implement them on the {{DOMxRef("Document")}} interface._

- {{DOMxRef("DocumentOrShadowRoot.getSelection()")}}
  - : Returns a {{DOMxRef('Selection')}} object representing the range of text selected by the user, or the current position of the caret.
- {{DOMxRef("DocumentOrShadowRoot.elementFromPoint()")}}
  - : 返回 topmost element at the specified coordinates.
- {{DOMxRef("DocumentOrShadowRoot.elementsFromPoint()")}}
  - : Returns an array of all elements at the specified coordinates.
- {{DOMxRef("DocumentOrShadowRoot.caretPositionFromPoint()")}}
  - : Returns a {{DOMxRef('CaretPosition')}} object containing the DOM node containing the caret, and caret's character offset within that node.

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- {{DOMxRef("Document/scroll_event", "scroll")}}
  - : Fired when the document view or an element has been scrolled.
    Also available via the {{DOMxRef("GlobalEventHandlers.onscroll", "onscroll")}} 属性。
- {{DOMxRef("Document/visibilitychange_event", "visibilitychange")}}
  - : Fired when the content of a tab has become visible or has been hidden.
    Also available via the {{DOMxRef("Document.onvisibilitychange", "onvisibilitychange")}} 属性。
- {{DOMxRef("Document/wheel_event","wheel")}}
  - : Fired when the user rotates a wheel button on a pointing device (typically a mouse).
    Also available via the {{DOMxRef("GlobalEventHandlers.onwheel", "onwheel")}} 属性。

### Animation events

- {{domxref("Document/animationcancel_event", "animationcancel")}}
  - : Fired when an animation unexpectedly aborts.
    Also available via the {{domxref("GlobalEventHandlers/onanimationcancel", "onanimationcancel")}} 属性。
- {{domxref("Document/animationend_event", "animationend")}}
  - : Fired when an animation has completed normally.
    Also available via the {{domxref("GlobalEventHandlers/onanimationend", "onanimationend")}} 属性。
- {{domxref("Document/animationiteration_event", "animationiteration")}}
  - : Fired when an animation iteration has completed.
    Also available via the {{domxref("GlobalEventHandlers/onanimationiteration", "onanimationiteration")}} 属性。
- {{domxref("Document/animationstart_event", "animationstart")}}
  - : Fired when an animation starts.
    Also available via the {{domxref("GlobalEventHandlers/onanimationstart", "onanimationstart")}} 属性。

### Clipboard events

- {{domxref("Document/copy_event", "copy")}}
  - : Fired when the user initiates a copy action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/oncopy", "oncopy")}} 属性。
- {{domxref("Document/cut_event", "cut")}}
  - : Fired when the user initiates a cut action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/oncut", "oncut")}} 属性。
- {{domxref("Document/paste_event", "paste")}}
  - : Fired when the user initiates a paste action through the browser's user interface.
    Also available via the {{domxref("HTMLElement/onpaste", "onpaste")}} 属性。

### Drag & drop events

- {{domxref("Document/drag_event", "drag")}}
  - : Fired every few hundred milliseconds as an element or text selection is being dragged by the user.
    Also available via the {{domxref("GlobalEventHandlers/ondrag", "ondrag")}} 属性。
- {{domxref("Document/dragend_event", "dragend")}}
  - : Fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).
    Also available via the {{domxref("GlobalEventHandlers/ondragend", "ondragend")}} 属性。
- {{domxref("Document/dragenter_event", "dragenter")}}
  - : Fired when a dragged element or text selection enters a valid drop target.
    Also available via the {{domxref("GlobalEventHandlers/ondragenter", "ondragenter")}} 属性。
- {{domxref("Document/dragexit_event", "dragexit")}}
  - : Fired when an element is no longer the drag operation's immediate selection target.
    Also available via the {{domxref("GlobalEventHandlers/ondragexit", "ondragexit")}} 属性。
- {{domxref("Document/dragleave_event", "dragleave")}}
  - : Fired when a dragged element or text selection leaves a valid drop target.
    Also available via the {{domxref("GlobalEventHandlers/ondragleave", "ondragleave")}} 属性。
- {{domxref("Document/dragover_event", "dragover")}}
  - : Fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).
    Also available via the {{domxref("GlobalEventHandlers/ondragover", "ondragover")}} 属性。
- {{domxref("Document/dragstart_event", "dragstart")}}
  - : Fired when the user starts dragging an element or text selection.
    Also available via the {{domxref("GlobalEventHandlers/ondragstart", "ondragstart")}} 属性。
- {{domxref("Document/drop_event", "drop")}}
  - : Fired when an element or text selection is dropped on a valid drop target.
    Also available via the {{domxref("GlobalEventHandlers/ondrop", "ondrop")}} 属性。

### Fullscreen events

- {{domxref("Document/fullscreenchange_event", "fullscreenchange")}}
  - : Fired when the `Document` transitions into or out of [full-screen](/zh-CN/docs/Web/API/Fullscreen_API/Guide) mode.
    Also available via the `{{DOMxRef("Document.onfullscreenchange", "onfullscreenchange")}}` 属性。
- [`fullscreenerror`](/en-US/docs/Web/Events/fullscreenerror)
  - : Fired if an error occurs while attempting to switch into or out of [full-screen](/zh-CN/docs/Web/API/Fullscreen_API/Guide) mode.
    Also available via the {{DOMxRef("Document.onfullscreenerror", "onfullscreenerror")}} 属性。
- ### Keyboard events

  `{{DOMxRef("Document/keydown_event", "keydown")}}`

  - : Fired when a key is pressed.
    Also available via the {{DOMxRef("GlobalEventHandlers/onkeydown", "onkeydown")}} 属性。

- `{{DOMxRef("Document/keypress_event", "keypress")}}`
  - : Fired when a key that produces a character value is pressed down. {{Deprecated_Inline}}
    Also available via the {{DOMxRef("GlobalEventHandlers/onkeypress", "onkeypress")}} 属性。
- `{{DOMxRef("Document/keyup_event", "keyup")}}`
  - : Fired when a key is released.
    Also available via the {{DOMxRef("GlobalEventHandlers/onkeyup", "onkeyup")}} 属性。

### Load & unload events

- {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - : Fired when the document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
- {{domxref("Document/readystatechange_event", "readystatechange")}}
  - : Fired when the {{domxref("Document/readyState", "readyState")}} attribute of a document has changed.
    Also available via the `onreadystatechange` 属性。

### Pointer events

- {{domxref("Document/gotpointercapture_event", "gotpointercapture")}}
  - : Fired when when an element captures a pointer using [`setPointerCapture()`](/en-US/docs/Web/API/Element/setPointerCapture).
    Also available via the {{domxref("GlobalEventHandlers/ongotpointercapture", "ongotpointercapture")}} 属性。
- {{domxref("Document/lostpointercapture_event", "lostpointercapture")}}
  - : Fired when a [captured pointer](/zh-CN/docs/Web/API/Pointer_events#Pointer_capture) is released.
    Also available via the {{domxref("GlobalEventHandlers/onlostpointercapture", "onlostpointercapture")}} 属性。
- {{domxref("Document/pointercancel_event", "pointercancel")}}
  - : Fired when a pointer event is canceled.
    Also available via the {{domxref("GlobalEventHandlers/onpointercancel", "onpointercancel")}} 属性。
- {{domxref("Document/pointerdown_event", "pointerdown")}}
  - : Fired when a pointer becomes active.
    Also available via the {{domxref("GlobalEventHandlers/onpointerdown", "onpointerdown")}} 属性。
- {{domxref("Document/pointerenter_event", "pointerenter")}}
  - : Fired when a pointer is moved into the hit test boundaries of an element or one of its descendants.
    Also available via the {{domxref("GlobalEventHandlers/onpointerenter", "onpointerenter")}} 属性。
- {{domxref("Document/pointerleave_event", "pointerleave")}}
  - : Fired when a pointer is moved out of the hit test boundaries of an element.
    Also available via the {{domxref("GlobalEventHandlers/onpointerleave", "onpointerleave")}} 属性。
- {{domxref("Document/pointerlockchange_event", "pointerlockchange")}}
  - : Fired when the pointer is locked/unlocked.
    Also available via the {{domxref("GlobalEventHandlers/onpointerlockchange", "onpointerlockchange")}} 属性。
- {{domxref("Document/pointerlockerror_event", "pointerlockerror")}}
  - : Fired when locking the pointer failed.
    Also available via the {{domxref("GlobalEventHandlers/onpointerlockerror", "onpointerlockerror")}} 属性。
- {{domxref("Document/pointermove_event", "pointermove")}}
  - : Fired when a pointer changes coordinates.
    Also available via the {{domxref("GlobalEventHandlers/onpointermove", "onpointermove")}} 属性。
- {{domxref("Document/pointerout_event", "pointerout")}}
  - : Fired when a pointer is moved out of the _hit test_ boundaries of an element (among other reasons).
    Also available via the {{domxref("GlobalEventHandlers/onpointerout", "onpointerout")}} 属性。
- {{domxref("Document/pointerover_event", "pointerover")}}
  - : Fired when a pointer is moved into an element's hit test boundaries.
    Also available via the {{domxref("GlobalEventHandlers/onpointerover", "onpointerover")}} 属性。
- {{domxref("Document/pointerup_event", "pointerup")}}
  - : Fired when a pointer is no longer active.
    Also available via the {{domxref("GlobalEventHandlers/onpointerup", "onpointerup")}} 属性。

### Selection events

- `{{DOMxRef("Document/selectionchange_event", "selectionchange")}}`
  - : Fired when the current text selection on a document is changed.
    Also available via the {{DOMxRef("GlobalEventHandlers/onselectionchange", "onselectionchange")}} 属性。
- {{DOMxRef("Document/selectstart_event", "selectstart")}}
  - : Fired when the user begins a new selection.
    Also available via the {{DOMxRef("GlobalEventHandlers/onselectstart", "onselectstart")}} 属性。

### Touch events

- {{domxref("Document/touchcancel_event", "touchcancel")}}
  - : Fired when one or more touch points have been disrupted in an implementation-specific manner (for example, too many touch points are created).
    Also available via the {{domxref("GlobalEventHandlers/ontouchcancel", "ontouchcancel")}} 属性。
- {{domxref("Document/touchend_event", "touchend")}}
  - : Fired when one or more touch points are removed from the touch surface.
    Also available via the {{domxref("GlobalEventHandlers/ontouchend", "ontouchend")}} property
- {{domxref("Document/touchmove_event", "touchmove")}}
  - : Fired when one or more touch points are moved along the touch surface.
    Also available via the {{domxref("GlobalEventHandlers/ontouchmove", "ontouchmove")}} property
- {{domxref("Document/touchstart_event", "touchstart")}}
  - : Fired when one or more touch points are placed on the touch surface.
    Also available via the {{domxref("GlobalEventHandlers/ontouchstart", "ontouchstart")}} property
- ### Transition events

  {{domxref("Document/transitioncancel_event", "transitioncancel")}}

  - : Fired when a [CSS transition](/zh-CN/docs/CSS/Using_CSS_transitions) is canceled.
    Also available via the {{domxref("GlobalEventHandlers/ontransitioncancel", "ontransitioncancel")}} 属性。

- {{domxref("Document/transitionend_event", "transitionend")}}
  - : Fired when a [CSS transition](/zh-CN/docs/CSS/Using_CSS_transitions) has completed.
    Also available via the {{domxref("GlobalEventHandlers/ontransitionend", "ontransitionend")}} 属性。
- {{domxref("Document/transitionrun_event", "transitionrun")}}
  - : Fired when a [CSS transition](/zh-CN/docs/CSS/Using_CSS_transitions) is first created.
    Also available via the {{domxref("GlobalEventHandlers/ontransitionrun", "ontransitionrun")}} 属性。
- {{domxref("Document/transitionstart_event", "transitionstart")}}
  - : Fired when a [CSS transition](/zh-CN/docs/CSS/Using_CSS_transitions) has actually started.
    Also available via the {{domxref("GlobalEventHandlers/ontransitionstart", "ontransitionstart")}} 属性。

## Non-standard extensions {{Non-standard_Inline}}

{{non-standard_header}}

### Firefox notes

Mozilla defines a set of non-standard properties made only for XUL content:

- {{DOMxRef("document.currentScript")}} {{Non-standard_Inline}}
  - : 返回 {{HTMLElement("script")}} element that is currently executing.
- {{DOMxRef("document.documentURIObject")}}
  - : (**Mozilla add-ons only!**) 返回 `nsIURI` object representing the URI of the document. This property only has special meaning in privileged JavaScript code (with UniversalXPConnect privileges).
- {{DOMxRef("document.popupNode")}}
  - : 返回 node upon which a popup was invoked.
- {{DOMxRef("document.tooltipNode")}}
  - : 返回 node which is the target of the current tooltip.

Mozilla also define some non-standard methods:

- {{DOMxRef("document.execCommandShowHelp")}} {{Deprecated_Inline}}
  - : This method never did anything and always threw an exception, so it was removed in Gecko 14.0 {{geckoRelease("14.0")}}.
- {{DOMxRef("document.getBoxObjectFor")}} {{Deprecated_Inline}}
  - : Use the {{DOMxRef("Element.getBoundingClientRect()")}} method instead.
- {{DOMxRef("document.loadOverlay")}}
  - : Loads a [XUL overlay](/zh-CN/docs/XUL_Overlays) dynamically. This only works in XUL documents.
- {{DOMxRef("document.queryCommandText")}} {{Deprecated_Inline}}
  - : This method never did anything but throw an exception, and was removed in Gecko 14.0 {{geckoRelease("14.0")}}.

### Internet Explorer notes

Microsoft defines some non-standard properties:

- {{DOMxRef("document.fileSize")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Returns size in bytes of the document. Starting with Internet Explorer 11, that property is no longer supported. See [MSDN](http://msdn.microsoft.com/en-us/library/ms533752%28v=VS.85%29.aspx).

Internet Explorer does not support all methods from the `Node` interface in the `Document` interface:

- {{DOMxRef("document.contains")}}
  - : As a work-around, `document.body.contains()` can be used.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.Document")}}
