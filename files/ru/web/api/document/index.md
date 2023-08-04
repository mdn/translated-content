---
title: Document
slug: Web/API/Document
---

{{ ApiRef("DOM") }}

Каждая веб-страница, которая загружается в браузер, имеет свой собственный объект **document**. Интерфейс документа служит точкой входа для получения содержимого веб-страницы (всего [DOM](/ru/docs/Using_the_W3C_DOM_Level_1_Core) - дерева, включая такие элементы как {{HTMLElement("body")}} и {{HTMLElement("table")}}), а также обеспечивает функциональность, которая является глобальной для документа, например, для получения URL-адреса страницы или создания новых элементов в документе).

Объект **document** может быть получен из разных API:

- Чаще всего используется прямой доступ к объекту **document** из сценариев [scripts](/ru/docs/HTML/Element/Script) которые подгружаются документом. (Этот же объект доступен как {{domxref("window.document")}}.)
- Через свойство [`contentDocument`](/ru/docs/Web/API/HTMLIFrameElement#Properties) объекта iframe.
- Как ответ [`responseXML`](/ru/docs/Web/API/XMLHttpRequest#responseXML) объекта [`XMLHttpRequest.`](/ru/docs/Web/API/XMLHttpRequest)
- Доступ к документу может быть получен из элемента или узла через свойство {{domxref("Node.ownerDocument","ownerDocument")}}.

В зависимости от вида документа (т.е. [HTML](/ru/docs/HTML) или [XML](/ru/docs/XML)) у объекта **document** могут быть доступны разные API.

- Все объекты документов реализуют интерфейс [`Document`](http://dom.spec.whatwg.org/#interface-document) (и следовательно {{domxref("Node")}} и {{domxref("EventTarget")}} интерфейсы). Таким образом основные свойства и методы, описанные на этой странице, доступны для всех видов документов.
- В современных браузерах некоторые документы (т.е. те, которые содержат контент `text/html`) также реализуют {{domxref("HTMLDocument")}} интерфейс.
- В современных браузерах SVG документы реализуют {{domxref("SVGDocument")}} интерфейс.

В будущем все эти интерфейсы будут сведены в один интерфейс - `Document`.

## Свойства

> **Примечание:** Интерфейс `Document` наследует также интерфейсы {{domxref("Node")}} и {{domxref("EventTarget")}}.

- {{domxref("Document.all")}} {{Deprecated_inline}} {{non-standard_inline}}
  - : Обеспечивает доступ ко всем элементам с идентификаторами (id). Это нестандартный интерфейс, вместо него рекомендуется использовать метод {{domxref("Document.getElementById()")}}.
- {{domxref("Document.async")}} {{Deprecated_inline}}
  - : Используется с {{domxref("document.load")}} чтобы обозначить асинхронный запрос.
- {{domxref("Document.characterSet")}} {{experimental_inline}}
  - : Возвращает кодировку документа.
- {{domxref("Document.compatMode")}} {{experimental_inline}}
  - : Указывает в каком режиме (Quirks или Strict) рендерился документ.
- {{domxref("Document.contentType")}} {{experimental_inline}}
  - : Возвращает Content-Type из MIME заголовка текущего документа.
- {{domxref("Document.doctype")}}
  - : Возвращает Document Type Definition (DTD) текущего документа .
- {{domxref("Document.documentElement")}}
  - : Возвращает Element, который является первым дочерним элементом документа. Для HTML документов это HTML-элемент.
- {{domxref("Document.documentURI")}}
  - : Возвращает URL документа.
- {{domxref("Document.domConfig")}} {{Deprecated_inline}}
  - : Должен вернуть {{domxref("DOMConfiguration")}} объект.
- {{domxref("Document.implementation")}}
  - : Возвращает DOM implementation связанную с текущим документом.
- {{domxref("Document.inputEncoding")}} {{Deprecated_inline}}
  - : Возвращает кодировку, которая использовалась во время парсинга документа.
- {{domxref("Document.lastStyleSheetSet")}}
  - : Возвращает имя последнего включённого набора таблиц стилей. Имеет значение `null` , пока таблица стилей не будет изменена путём установки значения {{domxref("Document.selectedStyleSheetSet","selectedStyleSheetSet")}}.
- {{domxref("Document.mozSyntheticDocument")}} {{non-standard_inline}}
  - : `true` если этот документ является синтетическим, например, отдельные изображения, видео, аудио файлы, или тому подобные.
- {{domxref("Document.mozFullScreen")}} {{non-standard_inline}}
  - : `true` когда документ находится в {{domxref("Using_full-screen_mode","full-screen mode")}}.
- {{domxref("Document.mozFullScreenElement")}} {{non-standard_inline}}
  - : Элемент, который в данный момент находится в полноэкранном режиме для этого документа.
- {{domxref("Document.mozFullScreenEnabled")}} {{non-standard_inline}}
  - : `true` if calling {{domxref("element.mozRequestFullscreen()")}} would succeed in the curent document.
- {{domxref("Document.pointerLockElement")}} {{experimental_inline}}
  - : Returns the element set as the target for mouse events while the pointer is locked. `null` if lock is pending, pointer is unlocked, or if the target is in another document.
- {{domxref("Document.preferredStyleSheetSet")}}
  - : Returns the preferred style sheet set as specified by the page author.
- {{domxref("Document.selectedStyleSheetSet")}}
  - : Returns which style sheet set is currently in use.
- {{domxref("Document.styleSheets")}}
  - : Returns a list of the style sheet objects on the current document.
- {{domxref("Document.styleSheetSets")}}
  - : Returns a list of the style sheet sets available on the document.
- {{domxref("Document.xmlEncoding")}} {{Deprecated_inline}}
  - : Returns the encoding as determined by the XML declaration.
- {{domxref("Document.xmlStandalone")}} {{Deprecated_inline}}
  - : Returns `true` if the XML declaration specifies the document to be standalone (_e.g.,_ An external part of the DTD affects the document's content), else `false`.
- {{domxref("Document.xmlVersion")}} {{Deprecated_inline}}
  - : Returns the version number as specified in the XML declaration or `"1.0"` if the declaration is absent.

The `Document` interface is extended with the {{domxref("ParentNode")}} interface:

{{page("/ru/docs/Web/API/ParentNode","Properties")}}

### Extension for HTML documents

The `Document` interface for HTML documents inherit from the {{domxref("HTMLDocument")}} interface or, since HTML5, is extended for such documents:

- {{domxref("Document.activeElement")}}
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
- {{domxref("Document.defaultView")}}
  - : Returns a reference to the window object.
- {{domxref("Document.designMode")}}
  - : Gets/sets the ability to edit the whole document.
- {{domxref("Document.dir")}}
  - : Gets/sets directionality (rtl/ltr) of the document.
- {{domxref("Document.domain")}}
  - : Returns the domain of the current document.
- {{domxref("Document.embeds")}}
  - : Returns a list of the embedded {{HTMLElement('embed')}} elements within the current document.
- {{domxref("Document.fgColor")}} {{Deprecated_inline}}
  - : Gets/sets the foreground color, or text color, of the current document.
- {{domxref("Document.forms")}}
  - : Returns a list of the {{HTMLElement("form")}} elements within the current document.
- {{domxref("Document.head")}}
  - : Returns the {{HTMLElement("head")}} element of the current document.
- {{domxref("Document.height")}} {{non-standard_inline}}
  - : Gets/sets the height of the current document.
- {{domxref("Document.images")}}
  - : Returns a list of the images in the current document.
- {{domxref("Document.lastModified")}}
  - : Returns the date on which the document was last modified.
- {{domxref("Document.linkColor")}} {{Deprecated_inline}}
  - : Gets/sets the color of hyperlinks in the document.
- {{domxref("Document.links")}}
  - : Returns a list of all the hyperlinks in the document.
- {{domxref("Document.location")}}
  - : Returns the URI of the current document.
- {{domxref("Document.plugins")}}
  - : Returns a list of the available plugins.
- {{domxref("Document.readyState")}}
  - : Returns loading status of the document.
- {{domxref("Document.referrer")}}
  - : Returns the URI of the page that linked to this page.
- {{domxref("Document.scripts")}}
  - : Returns all the {{HTMLElement("script")}} elements on the document.
- {{domxref("Document.title")}}
  - : Returns the title of the current document.
- {{domxref("Document.URL")}}
  - : Returns a string containing the URL of the current document.
- {{domxref("Document.vlinkColor")}} {{Deprecated_inline}}
  - : Gets/sets the color of visited hyperlinks.
- {{domxref("Document.width")}} {{non-standard_inline}}
  - : Returns the width of the current document.

### Event handlers

- {{domxref("Document.onpointerlockchange")}} {{experimental_inline}}
  - : Returns the event handling code for the {{event("pointerlockchange")}} event.
- {{domxref("Document.onpointerlockerror")}} {{experimental_inline}}
  - : Returns the event handling code for the {{event("pointerlockerror")}} event.
- {{domxref("Document.onreadystatechange")}}
  - : Returns the event handling code for the `readystatechange` event.

## Methods

> **Примечание:** The `Document` interface also inherits from the {{domxref("Node")}} and {{domxref("EventTarget")}} interfaces.

- {{domxref("Document.adoptNode","Document.adoptNode(Node node)")}}
  - : Adopt node from an external document.
- {{domxref("Document.captureEvents","Document.captureEvents(String eventName)")}} {{Deprecated_inline}}
  - : See {{domxref("window.captureEvents")}}.
- {{domxref("Document.caretPositionFromPoint","Document.caretPositionFromPoint(Number x, Number y)")}}
  - : Gets a {{domxref("CaretPosition")}} based on two coordinates.
- {{domxref("Document.createAttribute","Document.createAttribute(String name)")}}
  - : Creates a new {{domxref("Attr")}} object and returns it.
- {{domxref("Document.createAttributeNS","Document.createAttributeNS(String namespace, String name)")}}
  - : Creates a new attribute node in a given namespace and returns it.
- {{domxref("Document.createCDATASection","Document.createCDATASection(String data)")}}
  - : Creates a new CDATA node and returns it.
- {{domxref("Document.createComment","Document.createComment(String comment)")}}
  - : Creates a new comment node and returns it.
- {{domxref("Document.createDocumentFragment()")}}
  - : Creates a new document fragment.
- {{domxref("Document.createElement","Document.createElement(String name)")}}
  - : Creates a new element with the given tag name.
- {{domxref("Document.createElementNS","Document.createElementNS(String namespace, String name)")}}
  - : Creates a new element with the given tag name and namespace URI.
- {{domxref("Document.createEntityReference","Document.createEntityReference(String name)")}}
  - : Creates a new entity reference object and returns it.
- {{domxref("Document.createEvent","Document.createEvent(String interface)")}}
  - : Creates an event object.
- {{domxref("Document.createNodeIterator","Document.createNodeIterator(Node root[, Number whatToShow[, NodeFilter filter]])")}}
  - : Creates a {{domxref("NodeIterator")}} object.
- {{domxref("Document.createProcessingInstruction","Document.createProcessingInstruction(String target, String data)")}}
  - : Creates a new {{domxref("ProcessingInstruction")}} object.
- {{domxref("Document.createRange()")}}
  - : Creates a {{domxref("Range")}} object.
- {{domxref("Document.createTextNode","Document.createTextNode(String text)")}}
  - : Creates a text node.
- {{domxref("Document.createTreeWalker","Document.createTreeWalker(Node root[, Number whatToShow[, NodeFilter filter]])")}}
  - : Creates a {{domxref("TreeWalker")}} object.
- {{domxref("Document.elementFromPoint","Document.elementFromPoint(Number x, Number y)")}}
  - : Returns the element visible at the specified coordinates.
- {{domxref("Document.enableStyleSheetsForSet","Document.enableStyleSheetsForSet(String name)")}}
  - : Enables the style sheets for the specified style sheet set.
- {{domxref("Document.exitPointerLock()")}} {{experimental_inline}}
  - : Release the pointer lock.
- {{domxref("Document.getElementsByClassName","Document.getElementsByClassName(String className)")}}
  - : Returns a list of elements with the given class name.
- {{domxref("Document.getElementsByTagName","Document.getElementsByTagName(String tagName)")}}
  - : Returns a list of elements with the given tag name.
- {{domxref("Document.getElementsByTagNameNS","Document.getElementsByTagNameNS(String namespace, String tagName)")}}
  - : Returns a list of elements with the given tag name and namespace.
- {{domxref("Document.importNode","Document.importNode(Node node, Boolean deep)")}}
  - : Returns a clone of a node from an external document.
- {{domxref("document.mozSetImageElement")}} {{non-standard_inline}}
  - : Allows you to change the element being used as the background image for a specified element ID.
- {{domxref("Document.normalizeDocument()")}}
  - : Replaces entities, normalizes text nodes, etc.
- {{domxref("Document.releaseCapture()")}} {{non-standard_inline}}
  - : Releases the current mouse capture if it's on an element in this document.
- {{domxref("Document.releaseEvents")}} {{non-standard_inline}} {{Deprecated_inline}}
  - : See {{domxref("window.releaseEvents")}}.
- {{domxref("document.routeEvent")}} {{non-standard_inline}}
  - : See {{domxref("window.routeEvent")}}.

The `Document` interface is extended with the {{domxref("ParentNode")}} interface:

- {{domxref("Document.getElementById","Document.getElementById(String id)")}}
  - : Returns an object reference to the identified element.
- {{domxref("Document.querySelector","Document.querySelector(String selector)")}}
  - : Returns the first Element node within the document, in document order, that matches the specified selectors.
- {{domxref("Document.querySelectorAll","Document.querySelectorAll(String selector)")}}
  - : Returns a list of all the Element nodes within the document that match the specified selectors.

The `Document` interface is extended with the {{domxref("XPathEvaluator")}} interface:

- {{domxref("Document.createExpression","Document.createExpression(String expression, XPathNSResolver resolver)")}}
  - : Compiles an [`XPathExpression`](/ru/docs/XPathExpression) which can then be used for (repeated) evaluations.
- {{domxref("Document.createNSResolver","Document.createNSResolver(Node resolver)")}}
  - : Creates an {{domxref("XPathNSResolver")}} object.
- {{domxref("Document.evaluate","Document.evaluate(String expression, Node contextNode, XPathNSResolver resolver, Number type, Object result)")}}
  - : Evaluates an XPath expression.

### Extension for HTML documents

The `Document` interface for HTML documents inherit from the {{domxref("HTMLDocument")}} interface or, since HTML5, is extended for such documents:

- {{domxref("Document.clear()")}} {{non-standard_inline}} {{Deprecated_inline}}
  - : In majority of modern browsers, including recent versions of Firefox and Internet Explorer, this method does nothing.
- {{domxref("Document.close()")}}
  - : Closes a document stream for writing.
- {{domxref("Document.execCommand","Document.execCommand(String command[, Boolean showUI[, String value]])")}}
  - : On an editable document, executes a formating command.
- {{domxref("Document.getElementsByName","Document.getElementsByName(String name)")}}
  - : Returns a list of elements with the given name.
- {{domxref("Document.getSelection()")}}
  - : Returns a {{domxref("Selection")}} object related to text selected in the document.
- {{domxref("Document.hasFocus()")}}
  - : Returns `true` if the focus is currently located anywhere inside the specified document.
- {{domxref("Document.open()")}}
  - : Opens a document stream for writing.
- {{domxref("Document.queryCommandEnabled","Document.queryCommandEnabled(String command)")}}
  - : Returns true if the formating command can be executed on the current range.
- {{domxref("Document.queryCommandIndeterm","Document.queryCommandIndeterm(String command)")}}
  - : Returns true if the formating command is in an indeterminate state on the current range.
- {{domxref("Document.queryCommandState","Document.queryCommandState(String command)")}}
  - : Returns true if the formating command has been executed on the current range.
- {{domxref("Document.queryCommandSupported","Document.queryCommandSupported(String command)")}}
  - : Returns true if the formating command is supported on the current range.
- {{domxref("Document.queryCommandValue","Document.queryCommandValue(String command)")}}
  - : Returns the current value of the current range for a formatting command.
- {{domxref("Document.registerElement","Document.registerElement(String tagname[, Object options])")}}
  - : Registers a new custom element in the browser and returns a constructor for the new element.
- {{domxref("Document.write","Document.write(String text)")}}
  - : Writes text in a document.
- {{domxref("Document.writeln","Document.writeln(String text)")}}
  - : Writes a line of text in a document.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
