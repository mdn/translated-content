---
title: Document
slug: Web/API/Document
tags:
  - DOM
  - Gecko
  - Gecko DOM Referenz
translation_of: Web/API/Document
---
{{ ApiRef("DOM") }}

## Zusammenfassung

Jede im Browswer geladene Webseite hat ihr eigenen `document` Objekt. Das `Document` Interface dient als Einstiegspunkt in den Inhalt der Webseite (der [DOM tree](/de/docs/Using_the_W3C_DOM_Level_1_Core "Using_the_W3C_DOM_Level_1_Core"), beinhaltet Elemente wie {{HTMLElement("body")}} und {{HTMLElement("table")}}) und unterstützt Funktionen, die global für das Dokument gelten(z.B. das Aufrufen der URL der Seite und das Erstellen neuer Elemente im Dokument).

Ein Dokument-Objekt kann von verschiedenen APIs bezogen werden:

- Meistens arbeiten Sie mit dem Dokument, in dem das Skript läuft, indem Sie `document` in den [scripts](/de/docs/HTML/Element/Script "HTML/Element/Script") des Dokuments verwenden. (Dasselbe Dokument kann auch als {{domxref("window.document")}} bezeichnet werden.)
- Das Dokument eines Iframes über die [`contentDocument`](/en-US/docs/Web/API/HTMLIFrameElement#Properties "DOM/HTMLIFrameElement#Properties") Eigenschaften des Iframes.
- Die [`responseXML` of an `XMLHttpRequest` object](/de/docs/Web/API/XMLHttpRequest#responseXML "XMLHttpRequest#responseXML").
- Das Dokument, zu dem ein bestimmter Knoten oder ein Element gehört, kann über die {{domxref("Node.ownerDocument","ownerDocument")}} -Eigenschaft des Knotens abgerufen werden.

Depending on the kind of the document (e.g. [HTML](/de/docs/HTML "HTML") or [XML](/de/docs/XML "XML")), different APIs may be available on the document object.

- All document objects implement the [`Document`](http://dom.spec.whatwg.org/#interface-document) interface (and hence the {{domxref("Node")}} and {{domxref("EventTarget")}} interfaces). Thus, the "core" properties and methods documented on this page are available for all kinds of documents.
- In contemporary browsers, some documents (e.g. those served with the `text/html` content type) also implement the {{domxref("HTMLDocument")}} interface.
- In heutigen Browsern, SVG Dokumente implementieren das {{domxref("SVGDocument")}} Interface.

In der Zukunft, alle diese Interfaces werden zusammengefasst zum `Document` Interface.

## Eigenschaften

> **Hinweis:** Das `Document` Interface erbt auch vom {{domxref("Node")}} und {{domxref("EventTarget")}} Interface.

- {{domxref("Document.all")}} {{Deprecated_inline}} {{non-standard_inline}}
  - : Provides access to all elements with an id. This is a legacy non-standard interface, you should use the {{domxref("Document.getElementById()")}} method instead.
- {{domxref("Document.async")}} {{Deprecated_inline}}
  - : Used with {{domxref("document.load")}} to indicate an asynchronous request.
- {{domxref("Document.characterSet")}} {{experimental_inline}}
  - : Returns the character set being used by the document.
- {{domxref("Document.compatMode")}} {{experimental_inline}}
  - : Indicates whether the document is rendered in Quirks or Strict mode.
- {{domxref("Document.contentType")}} {{experimental_inline}}
  - : Returns the Content-Type from the MIME Header of the current document.
- {{domxref("Document.doctype")}}
  - : Returns the Document Type Definition (DTD) of the current document.
- {{domxref("Document.documentElement")}}
  - : Returns the Element that is a direct child of the document. For HTML documents, this is normally the HTML element.
- {{domxref("Document.documentURI")}}
  - : Returns the document URL.
- {{domxref("Document.domConfig")}} {{Deprecated_inline}}
  - : Should return a {{domxref("DOMConfiguration")}} object.
- {{domxref("Document.implementation")}}
  - : Returns the DOM implementation associated with the current document.
- {{domxref("Document.inputEncoding")}} {{Deprecated_inline}}
  - : Returns the encoding used when the document was parsed.
- {{domxref("Document.lastStyleSheetSet")}}
  - : Returns the name of the style sheet set that was last enabled. Has the value `null` until the style sheet is changed by setting the value of {{domxref("Document.selectedStyleSheetSet","selectedStyleSheetSet")}}.
- {{domxref("Document.mozSyntheticDocument")}} {{non-standard_inline}} {{gecko_minversion_inline("8.0")}}
  - : `true` if this document is synthetic, such as a standalone image, video, audio file, or the like.
- {{domxref("Document.mozFullScreen")}} {{non-standard_inline}} {{gecko_minversion_inline("9.0")}}
  - : `true` when the document is in {{domxref("Using_full-screen_mode","full-screen mode")}}.
- {{domxref("Document.mozFullScreenElement")}} {{non-standard_inline}} {{gecko_minversion_inline("9.0")}}
  - : The element that's currently in full screen mode for this document.
- {{domxref("Document.mozFullScreenEnabled")}} {{non-standard_inline}} {{gecko_minversion_inline("9.0")}}
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
- {{domxref("Document.xmlStandalone")}} {{obsolete_inline("10.0")}}
  - : Returns `true` if the XML declaration specifies the document to be standalone (_e.g.,_ An external part of the DTD affects the document's content), else `false`.
- {{domxref("Document.xmlVersion")}} {{obsolete_inline("10.0")}}
  - : Returns the version number as specified in the XML declaration or `"1.0"` if the declaration is absent.

The `Document` interface is extended with the {{domxref("ParentNode")}} interface:

{{page("/en-US/docs/Web/API/ParentNode","Properties")}}

### Erweiterung für HTML Dokumente

Das `Document` Interface für HTML Dokumente erbt vom {{domxref("HTMLDocument")}} Interface oder, ist seit HTML5 erweitert für solche Dokumente:

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
- {{domxref("Document.height")}} {{non-standard_inline}} {{obsolete_inline}}
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
- {{domxref("Document.readyState")}} {{gecko_minversion_inline("1.9.2")}}
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
- {{domxref("Document.width")}} {{non-standard_inline}} {{obsolete_inline}}
  - : Returns the width of the current document.

### Event handlers

- {{domxref("Document.onpointerlockchange")}} {{experimental_inline}}
  - : Returns the event handling code for the {{event("pointerlockchange")}} event.
- {{domxref("Document.onpointerlockerror")}} {{experimental_inline}}
  - : Returns the event handling code for the {{event("pointerlockerror")}} event.
- {{domxref("Document.onreadystatechange")}} {{gecko_minversion_inline("1.9.2")}}
  - : Returns the event handling code for the `readystatechange` event.

## Methoden

> **Hinweis:** Das `Document` Interface erbt auch vom {{domxref("Node")}} und {{domxref("EventTarget")}} Interface.

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
- {{domxref("Document.createEntityReference","Document.createEntityReference(String name)")}} {{obsolete_inline}}
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
- {{domxref("document.mozSetImageElement")}} {{non-standard_inline}} {{gecko_minversion_inline("2.0")}}
  - : Allows you to change the element being used as the background image for a specified element ID.
- {{domxref("Document.normalizeDocument()")}} {{obsolete_inline}}
  - : Replaces entities, normalizes text nodes, etc.
- {{domxref("Document.releaseCapture()")}} {{non-standard_inline}} {{gecko_minversion_inline("2.0")}}
  - : Releases the current mouse capture if it's on an element in this document.
- {{domxref("Document.releaseEvents")}} {{non-standard_inline}} {{Deprecated_inline}}
  - : See {{domxref("window.releaseEvents")}}.
- {{domxref("document.routeEvent")}} {{non-standard_inline}} {{obsolete_inline(24)}}
  - : See {{domxref("window.routeEvent")}}.

The `Document` interface is extended with the {{domxref("ParentNode")}} interface:

- {{domxref("Document.getElementById","Document.getElementById(String id)")}}
  - : Returns an object reference to the identified element.
- {{domxref("Document.querySelector","Document.querySelector(String selector)")}} {{gecko_minversion_inline("1.9.1")}}
  - : Returns the first Element node within the document, in document order, that matches the specified selectors.
- {{domxref("Document.querySelectorAll","Document.querySelectorAll(String selector)")}} {{gecko_minversion_inline("1.9.1")}}
  - : Returns a list of all the Element nodes within the document that match the specified selectors.

The `Document` interface is extended with the {{domxref("XPathEvaluator")}} interface:

- {{domxref("Document.createExpression","Document.createExpression(String expression, XPathNSResolver resolver)")}}
  - : Compiles an [`XPathExpression`](/en-US/docs/XPathExpression "XPathExpression") which can then be used for (repeated) evaluations.
- {{domxref("Document.createNSResolver","Document.createNSResolver(Node resolver)")}}
  - : Creates an {{domxref("XPathNSResolver")}} object.
- {{domxref("Document.evaluate","Document.evaluate(String expression, Node contextNode, XPathNSResolver resolver, Number type, Object result)")}}
  - : Evaluates an XPath expression.

### Erweiterung für HTML Dokumente

Das `Document` Interface für HTML Dokumente erbt vom {{domxref("HTMLDocument")}} Interface oder ist seit HTML5 erweitert für solche Dokumente:

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

## Spezifikationen

{{Specifications}}

## Browser Kompatibilität

{{Comapt}}
