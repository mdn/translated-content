---
title: Document
slug: Web/API/Document
---

{{APIRef}}

**`Document`** 介面代表所有在瀏覽器中載入的網頁，也是作為網頁內容 [DOM 樹](/zh-TW/docs/Using_the_W3C_DOM_Level_1_Core)（包含如 {{HTMLElement("body")}}、{{HTMLElement("table")}} 與其它的{{domxref("Element", "元素")}}）的進入點。`Document` 提供了網頁文件所需的通用函式，例如取得頁面 URL 或是建立網頁文件中新的元素節點等。

{{inheritanceDiagram}}

`Document` 介面描述了各種類型文件的共同屬性與方法。根據文件的類型（如 [HTML](/zh-TW/docs/HTML)、[XML](/zh-TW/docs/XML)、SVG 等），也會擁有各自的 API：HTML 文件（content type 為 `text/html`）實作了 {{domxref("HTMLDocument")}} 介面，而 XML 及 SVG 文件實作了 {{domxref("XMLDocument")}} 介面。

請注意 `window.document` 物件為 `HTMLDocument` 所建構。

## 屬性

_這個介面繼承了 {{domxref("Node")}} 以及 {{domxref("EventTarget")}} 介面。_

- {{domxref("Document.all")}} {{Deprecated_inline}} {{non-standard_inline}}
  - : Provides access to all elements with an `id`. This is a legacy, non-standard interface and you should use the {{domxref("document.getElementById()")}} method instead.
- {{domxref("Document.async")}} {{Deprecated_inline}}
  - : Used with {{domxref("Document.load")}} to indicate an asynchronous request.
- {{domxref("Document.characterSet")}} {{readonlyinline}}
  - : Returns the character set being used by the document.
- {{domxref("Document.charset")}} {{readonlyinline}} {{Deprecated_inline}}
  - : Alias of {{domxref("Document.characterSet")}}. Use this property instead.
- {{domxref("Document.compatMode")}} {{readonlyinline}} {{experimental_inline}}
  - : Indicates whether the document is rendered in _quirks_ or _strict_ mode.
- {{domxref("Document.contentType")}} {{readonlyinline}} {{experimental_inline}}
  - : Returns the Content-Type from the MIME Header of the current document.
- {{domxref("Document.doctype")}} {{readonlyinline}}
  - : 回傳目前文件的 Document Type Definition（DTD）。
- {{domxref("Document.documentElement")}} {{readonlyinline}}
  - : 回傳當前文件 {{domxref("Document")}} 的根元素。以 HTML documents 為例：它會回傳 {{HTMLElement("html")}} 這項元素。
- {{domxref("Document.documentURI")}} {{readonlyinline}}
  - : Returns the document location as a string.
- {{domxref("Document.domConfig")}} {{Deprecated_inline}}
  - : Should return a {{domxref("DOMConfiguration")}} object.
- {{domxref("Document.fullscreen")}} {{Deprecated_Inline}}
  - : `true` when the document is in {{domxref("Using_full-screen_mode","full-screen mode")}}.
- {{domxref("Document.hidden")}} {{readonlyinline}}
  - : …
- {{domxref("Document.implementation")}} {{readonlyinline}}
  - : Returns the DOM implementation associated with the current document.
- {{domxref("Document.inputEncoding")}} {{readonlyinline}} {{Deprecated_inline}}
  - : Alias of {{domxref("Document.characterSet")}}. Use this property instead.
- {{domxref("Document.lastStyleSheetSet")}} {{readonlyinline}}
  - : Returns the name of the style sheet set that was last enabled. Has the value `null` until the style sheet is changed by setting the value of {{domxref("document.selectedStyleSheetSet","selectedStyleSheetSet")}}.
- {{domxref("Document.mozSyntheticDocument")}} {{non-standard_inline}}
  - : Returns a {{jsxref("Boolean")}} that is `true` only if this document is synthetic, such as a standalone image, video, audio file, or the like.
- {{domxref("Document.mozFullScreenElement")}} {{readonlyinline}} {{non-standard_inline}}
  - : The element that's currently in full screen mode for this document.
- {{domxref("Document.mozFullScreenEnabled")}} {{readonlyinline}} {{non-standard_inline}}
  - : `true` if calling {{domxref("Element.mozRequestFullscreen()")}} would succeed in the curent document.
- {{domxref("Document.pointerLockElement")}} {{readonlyinline}} {{experimental_inline}}
  - : Returns the element set as the target for mouse events while the pointer is locked. `null` if lock is pending, pointer is unlocked, or if the target is in another document.
- {{domxref("Document.preferredStyleSheetSet")}} {{readonlyinline}}
  - : Returns the preferred style sheet set as specified by the page author.
- {{domxref("Document.scrollingElement")}} {{experimental_inline}} {{readonlyinline}}
  - : Returns a reference to the {{domxref("Element")}} that scrolls the document.
- {{domxref("Document.selectedStyleSheetSet")}}
  - : Returns which style sheet set is currently in use.
- {{domxref("Document.styleSheets")}} {{readonlyinline}}
  - : Returns a list of the style sheet objects on the current document.
- {{domxref("Document.styleSheetSets")}} {{readonlyinline}}
  - : Returns a list of the style sheet sets available on the document.
- {{domxref("Document.timeline")}} {{readonlyinline}}
  - : …
- {{domxref("Document.undoManager")}} {{readonlyinline}} {{experimental_inline}}
  - : …
- {{domxref("Document.visibilityState")}} {{readonlyinline}}
  - : Returns a `string` denoting the visibility state of the document. Possible values are `visible`, `hidden`, `prerender`, and `unloaded`.
- {{domxref("Document.xmlEncoding")}} {{Deprecated_inline}}
  - : Returns the encoding as determined by the XML declaration.
- {{domxref("Document.xmlStandalone")}} {{Deprecated_Inline}}
  - : Returns `true` if the XML declaration specifies the document to be standalone (_e.g.,_ An external part of the DTD affects the document's content), else `false`.
- {{domxref("Document.xmlVersion")}} {{Deprecated_Inline}}
  - : Returns the version number as specified in the XML declaration or `"1.0"` if the declaration is absent.

The `Document` interface is extended with the {{domxref("ParentNode")}} interface:

{{page("/en-US/docs/Web/API/ParentNode","Properties")}}

### HTML 文件擴充

_**`window.document`** 物件的部分屬性繼承自 HTML 文件的 {{domxref("HTMLDocument")}} 介面，或是來自 `Document` 從 HTML5 之後擴充的屬性。_

- {{domxref("Document.activeElement")}} {{readonlyinline}}
  - : Returns the currently focused element.
- {{domxref("Document.alinkColor")}} {{Deprecated_inline}}
  - : Returns or sets the color of active links in the document body.
- {{domxref("Document.anchors")}}
  - : Returns a list of all of the anchors in the document.
- {{domxref("Document.applets")}} {{Deprecated_inline}}
  - : Returns an ordered list of the applets within a document.
- {{domxref("Document.bgColor")}} {{Deprecated_inline}}
  - : Gets/sets the background color of the current document.
- {{domxref("Document.body")}}
  - : Returns the {{HTMLElement("body")}} element of the current document.
- {{domxref("Document.cookie")}}
  - : Returns a semicolon-separated list of the cookies for that document or sets a single cookie.
- {{domxref("Document.defaultView")}} {{readonlyinline}}
  - : Returns a reference to the window object.
- {{domxref("Document.designMode")}}
  - : Gets/sets the ability to edit the whole document.
- {{domxref("Document.dir")}} {{readonlyinline}}
  - : Gets/sets directionality (rtl/ltr) of the document.
- {{domxref("Document.domain")}} {{readonlyinline}}
  - : Returns the domain of the current document.
- {{domxref("Document.embeds")}} {{readonlyinline}}
  - : Returns a list of the embedded {{HTMLElement('embed')}} elements within the current document.
- {{domxref("document.fgColor")}} {{Deprecated_inline}}
  - : Gets/sets the foreground color, or text color, of the current document.
- {{domxref("Document.forms")}} {{readonlyinline}}
  - : Returns a list of the {{HTMLElement("form")}} elements within the current document.
- {{domxref("Document.head")}} {{readonlyinline}}
  - : Returns the {{HTMLElement("head")}} element of the current document.
- {{domxref("Document.height")}} {{non-standard_inline}} {{Deprecated_Inline}}
  - : Gets/sets the height of the current document.
- {{domxref("Document.images")}} {{readonlyinline}}
  - : Returns a list of the images in the current document.
- {{domxref("Document.lastModified")}} {{readonlyinline}}
  - : Returns the date on which the document was last modified.
- {{domxref("Document.linkColor")}} {{Deprecated_inline}}
  - : Gets/sets the color of hyperlinks in the document.
- {{domxref("Document.links")}} {{readonlyinline}}
  - : Returns a list of all the hyperlinks in the document.
- {{domxref("Document.location")}} {{readonlyinline}}
  - : Returns the URI of the current document.
- {{domxref("Document.plugins")}} {{readonlyinline}}
  - : Returns a list of the available plugins.
- {{domxref("Document.readyState")}} {{readonlyinline}}
  - : Returns loading status of the document.
- {{domxref("Document.referrer")}} {{readonlyinline}}
  - : Returns the URI of the page that linked to this page.
- {{domxref("Document.scripts")}} {{readonlyinline}}
  - : Returns all the {{HTMLElement("script")}} elements on the document.
- {{domxref("Document.title")}}
  - : Sets or gets title of the current document.
- {{domxref("Document.URL")}} {{readonlyInline}}
  - : Returns the document location as a string.
- {{domxref("Document.vlinkColor")}} {{Deprecated_inline}}
  - : Gets/sets the color of visited hyperlinks.
- {{domxref("Document.width")}} {{non-standard_inline}} {{Deprecated_Inline}}
  - : Returns the width of the current document.

### 事件處理器

- {{domxref("Document.onafterscriptexecute")}} {{non-standard_inline}}
  - : Represents the event handling code for the {{event("afterscriptexecute")}} event.
- {{domxref("Document.onbeforescriptexecute")}} {{non-standard_inline}}
  - : Represents the event handling code for the {{event("beforescriptexecute")}} event.
- {{domxref("Document.oncopy")}} {{non-standard_inline}}
  - : Represents the event handling code for the {{event("copy")}} event.
- {{domxref("Document.oncut")}} {{non-standard_inline}}
  - : Represents the event handling code for the {{event("cut")}} event.
- {{domxref("Document.onfullscreenchange")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("fullscreenchange")}} event is raised.
- {{domxref("Document.onfullscreenerror")}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("fullscreenerror")}} event is raised.
- {{domxref("Document.onpaste")}} {{non-standard_inline}}
  - : Represents the event handling code for the {{event("paste")}} event.
- {{domxref("Document.onpointerlockchange")}} {{experimental_inline}}
  - : Represents the event handling code for the {{event("pointerlockchange")}} event.
- {{domxref("Document.onpointerlockerror")}} {{experimental_inline}}
  - : Represetnts the event handling code for the {{event("pointerlockerror")}} event.
- {{domxref("Document.onreadystatechange")}}
  - : Represents the event handling code for the {{event("readystatechange")}} event.
- {{domxref("Document.onselectionchange")}} {{experimental_inline}}
  - : Is an {{event("Event_handlers", "event handler")}} representing the code to be called when the {{event("selectionchange")}} event is raised.
- {{domxref("Document.onwheel")}} {{non-standard_inline}}
  - : Represents the event handling code for the {{event("wheel")}} event.

_此介面繼承了 {{domxref("GlobalEventHandlers")}} 的事件處理器：_

{{Page("/zh-TW/docs/Web/API/GlobalEventHandlers", "屬性")}}

## 方法

_This interface also inherits from the {{domxref("Node")}} and {{domxref("EventTarget")}} interfaces._

- {{domxref("Document.adoptNode()")}}
  - : Adopt node from an external document.
- {{domxref("Document.captureEvents()")}} {{Deprecated_inline}}
  - : See {{domxref("Window.captureEvents")}}.
- {{domxref("Document.caretPositionFromPoint()")}}{{experimental_inline}}
  - : Gets the {{domxref("CaretPosition")}} at or near the specified coordinates.
- {{domxref("Document.caretRangeFromPoint()")}}{{non-standard_inline}}
  - : Gets a {{Domxref("Range")}} object for the document fragment under the specified coordinates.
- {{domxref("Document.createAttribute()")}}
  - : Creates a new {{domxref("Attr")}} object and returns it.
- {{domxref("Document.createAttributeNS()")}}
  - : Creates a new attribute node in a given namespace and returns it.
- {{domxref("Document.createCDATASection()")}}
  - : Creates a new CDATA node and returns it.
- {{domxref("Document.createComment()")}}
  - : Creates a new comment node and returns it.
- {{domxref("Document.createDocumentFragment()")}}
  - : Creates a new document fragment.
- {{domxref("Document.createElement()")}}
  - : Creates a new element with the given tag name.
- {{domxref("Document.createElementNS()")}}
  - : Creates a new element with the given tag name and namespace URI.
- {{domxref("Document.createEntityReference()")}} {{Deprecated_Inline}}
  - : Creates a new entity reference object and returns it.
- {{domxref("Document.createEvent()")}}
  - : Creates an event object.
- {{domxref("Document.createNodeIterator()")}}
  - : Creates a {{domxref("NodeIterator")}} object.
- {{domxref("Document.createProcessingInstruction()")}}
  - : Creates a new {{domxref("ProcessingInstruction")}} object.
- {{domxref("Document.createRange()")}}
  - : Creates a {{domxref("Range")}} object.
- {{domxref("Document.createTextNode()")}}
  - : Creates a text node.
- {{domxref("Document.createTouch()")}}
  - : Creates a {{domxref("Touch")}} object.
- {{domxref("Document.createTouchList()")}}
  - : Creates a {{domxref("TouchList")}} object.
- {{domxref("Document.createTreeWalker()")}}
  - : Creates a {{domxref("TreeWalker")}} object.
- {{domxref("Document.elementFromPoint()")}}{{experimental_inline}}
  - : Returns the topmost element at the specified coordinates.
- {{domxref("Document.elementsFromPoint()")}}{{experimental_inline}}
  - : Returns an array of all elements at the specified coordinates.
- {{domxref("Document.enableStyleSheetsForSet()")}}
  - : Enables the style sheets for the specified style sheet set.
- {{domxref("Document.exitPointerLock()")}} {{experimental_inline}}
  - : Release the pointer lock.
- {{domxref("Document.getAnimations()")}} {{experimental_inline}}
  - : Returns an array of all {{domxref("Animation")}} objects currently in effect, whose target elements are descendants of the `document`.
- {{domxref("Document.getElementsByClassName()")}}
  - : Returns a list of elements with the given class name.
- {{domxref("Document.getElementsByTagName()")}}
  - : Returns a list of elements with the given tag name.
- {{domxref("Document.getElementsByTagNameNS()")}}
  - : Returns a list of elements with the given tag name and namespace.
- {{domxref("Document.importNode()")}}
  - : Returns a clone of a node from an external document.
- {{domxref("Document.normalizeDocument()")}} {{Deprecated_Inline}}
  - : Replaces entities, normalizes text nodes, etc.
- {{domxref("Document.registerElement()")}} {{experimental_inline}}
  - : Registers a web component.
- {{domxref("Document.releaseCapture()")}} {{non-standard_inline}}
  - : Releases the current mouse capture if it's on an element in this document.
- {{domxref("Document.releaseEvents()")}} {{non-standard_inline}} {{Deprecated_inline}}
  - : See {{domxref("Window.releaseEvents()")}}.
- {{domxref("Document.routeEvent()")}} {{non-standard_inline}} {{Deprecated_Inline}}
  - : See {{domxref("Window.routeEvent()")}}.
- {{domxref("Document.mozSetImageElement()")}} {{non-standard_inline}}
  - : Allows you to change the element being used as the background image for a specified element ID.

The `Document` interface is extended with the {{domxref("ParentNode")}} interface:

- {{domxref("document.getElementById","document.getElementById(String id)")}}
  - : Returns an object reference to the identified element.
- {{domxref("document.querySelector","document.querySelector(String selector)")}}
  - : Returns the first Element node within the document, in document order, that matches the specified selectors.
- {{domxref("document.querySelectorAll","document.querySelectorAll(String selector)")}}
  - : Returns a list of all the Element nodes within the document that match the specified selectors.

The `Document` interface is extended with the {{domxref("XPathEvaluator")}} interface:

- {{domxref("document.createExpression","document.createExpression(String expression, XPathNSResolver resolver)")}}
  - : Compiles an [`XPathExpression`](/zh-TW/docs/XPathExpression) which can then be used for (repeated) evaluations.
- {{domxref("document.createNSResolver","document.createNSResolver(Node resolver)")}}
  - : Creates an {{domxref("XPathNSResolver")}} object.
- {{domxref("document.evaluate","document.evaluate(String expression, Node contextNode, XPathNSResolver resolver, Number type, Object result)")}}
  - : Evaluates an XPath expression.

### HTML 文件擴充

`Document` 物件的部分方法繼承自 HTML 文件的 {{domxref("HTMLDocument")}} 介面，或是來自 `Document` 從 HTML5 之後擴充的方法：

- {{domxref("document.clear()")}} {{non-standard_inline}} {{Deprecated_inline}}
  - : In majority of modern browsers, including recent versions of Firefox and Internet Explorer, this method does nothing.
- {{domxref("document.close()")}}
  - : Closes a document stream for writing.
- {{domxref("document.execCommand","document.execCommand(String command[, Boolean showUI[, String value]])")}}
  - : On an editable document, executes a formating command.
- {{domxref("document.getElementsByName","document.getElementsByName(String name)")}}
  - : Returns a list of elements with the given name.
- {{domxref("document.getSelection()")}}
  - : Returns a {{domxref("Selection")}} object related to text selected in the document.
- {{domxref("document.hasFocus()")}}
  - : Returns `true` if the focus is currently located anywhere inside the specified document.
- {{domxref("document.open()")}}
  - : Opens a document stream for writing.
- {{domxref("document.queryCommandEnabled","document.queryCommandEnabled(String command)")}}
  - : Returns true if the formating command can be executed on the current range.
- {{domxref("document.queryCommandIndeterm","document.queryCommandIndeterm(String command)")}}
  - : Returns true if the formating command is in an indeterminate state on the current range.
- {{domxref("document.queryCommandState","document.queryCommandState(String command)")}}
  - : Returns true if the formating command has been executed on the current range.
- {{domxref("document.queryCommandSupported","document.queryCommandSupported(String command)")}}
  - : Returns true if the formating command is supported on the current range.
- {{domxref("document.queryCommandValue","document.queryCommandValue(String command)")}}
  - : Returns the current value of the current range for a formating command.
- {{domxref("document.write","document.write(String text)")}}
  - : Writes text in a document.
- {{domxref("document.writeln","document.writeln(String text)")}}
  - : Writes a line of text in a document.

## 規範

{{Specifications}}

## 瀏覽器相容性備註

### Firefox notes

Mozilla defines a set of non-standard properties made only for XUL content:

- {{domxref("document.currentScript")}} {{non-standard_inline}}
  - : Returns the {{HTMLElement("script")}} element that is currently executing.
- {{domxref("document.documentURIObject")}}
  - : (**Mozilla add-ons only!**) Returns the `nsIURI` object representing the URI of the document. This property only has special meaning in privileged JavaScript code (with UniversalXPConnect privileges).
- {{domxref("document.popupNode")}}
  - : Returns the node upon which a popup was invoked.
- {{domxref("document.tooltipNode")}}
  - : Returns the node which is the target of the current tooltip.

Mozilla also define some non-standard methods:

- {{domxref("document.execCommandShowHelp")}} {{Deprecated_Inline}}
  - : This method never did anything and always threw an exception, so it was removed in Gecko 14.0 {{geckoRelease("14.0")}}.
- {{domxref("document.getBoxObjectFor")}} {{Deprecated_Inline}}
  - : Use the {{domxref("Element.getBoundingClientRect()")}} method instead.
- {{domxref("document.loadOverlay")}}
  - : Loads a [XUL overlay](/zh-TW/docs/XUL_Overlays) dynamically. This only works in XUL documents.
- {{domxref("document.queryCommandText")}} {{Deprecated_Inline}}
  - : This method never did anything but throw an exception, and was removed in Gecko 14.0 {{geckoRelease("14.0")}}.

### Internet Explorer notes

Microsoft defines some non-standard properties:

- {{domxref("document.fileSize")}} {{non-standard_inline}} {{Deprecated_Inline}}
  - : Returns size in bytes of the document. Starting with Internet Explorer 11, that property is no longer supported. See [MSDN](http://msdn.microsoft.com/en-us/library/ms533752%28v=VS.85%29.aspx). Internet Explorer does not support all methods from the `Node` interface in the `Document` interface:
- {{domxref("document.contains")}}
  - : As a work-around, `document.body.contains()` can be used.
