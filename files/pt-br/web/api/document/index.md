---
title: Document
slug: Web/API/Document
---

{{ ApiRef("DOM") }}

Para cada página carregada no browser, existe um objeto **`Document`**. A interface `Document` serve como um ponto de entrada para o conteúdo da Página ( a árvore DOM, incluindo elementos como {{HTMLElement("body")}} e {{HTMLElement("table")}}) e provê funcionalidades globais ao documento (como obter a URL da página e criar novos elementos no documento).

{{inheritanceDiagram}}

Um objeto document pode ser obtido por meio de várias APIs:

- A mais comum; você trabalha com o script do documento que está rodando o script com o objeto document. (O mesmo document também pode ser referenciado como {{domxref("window.document")}}.)
- O documento de um iframe através da propriedade `contentDocument.`
- O [`responseXML` de um objeto `XMLHttpRequest`](/pt-BR/docs/Web/API/XMLHttpRequest#responseXML).
- O documento ao qual um determinado node ou elemento pertence pode ser recuperado usando a propriedade do node {{domxref("Node.ownerDocument","ownerDocument")}}

Dependendo do tipo do documento (e.g. [HTML](/pt-BR/docs/HTML) ou [XML](/pt-BR/docs/XML)), diferentes APIs estarão disponívels no objeto **`Document`**.

Todo objeto **`Document`** implementa a interface [`Document`](http://dom.spec.whatwg.org/#interface-document) (e consequentemente as interfaces {{domxref("Node")}} e {{domxref("EventTarget")}}). Portanto, as principais propriedades e métodos documentados nesta página estarão disponíveis para todos os tipos de documents.

- Em navegadores mais atuais, alguns documentos (ex: aqueles que são servidos com o Content-Type `text/html`) também implementam a interface {{domxref("HTMLDocument")}}.
- Em navegadores mais atuais, documentos SVG implementam a interface {{domxref("SVGDocument")}}.

No futuro, todas essas interfaces irão ser divididas na interface `Document`.

## Propriedades

> **Nota:** A interface `Document` também herda das interfaces {{domxref("Node")}} e {{domxref("EventTarget")}}.

- {{domxref("Document.all")}} {{Deprecated_inline}} {{non-standard_inline}}
  - : Da acesso a todos os elementos do documento.È uma interface legada não padrão, voce deve usar o método {{domxref("Document.getElementById()")}} como alternativa.
- {{domxref("Document.async")}} {{Deprecated_inline}}
  - : Usado como {{domxref("document.load")}} que indica uma requisição asyncroma.
- {{domxref("Document.characterSet")}} {{experimental_inline}}
  - : Retorna a codificação de caracteres que está sendo usado pelo documento.
- {{domxref("Document.compatMode")}} {{experimental_inline}}
  - : indica se o documento é renderizado no modo Quirks ou Strict.
- {{domxref("Document.contentType")}} {{experimental_inline}}
  - : Retorna o tipo de conteúdo do cabeçalho MIME do documento atual.
- {{domxref("Document.doctype")}}
  - : Retorna o nome do tipo de conteudo do documento HTML.
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
- {{domxref("Document.mozSyntheticDocument")}} {{non-standard_inline}}
  - : `true` if this document is synthetic, such as a standalone image, video, audio file, or the like.
- {{domxref("Document.mozFullScreen")}} {{non-standard_inline}}
  - : `true` when the document is in {{domxref("Using_full-screen_mode","full-screen mode")}}.
- {{domxref("Document.mozFullScreenElement")}} {{non-standard_inline}}
  - : The element that's currently in full screen mode for this document.
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
- {{domxref("Document.xmlStandalone")}}
  - : Returns `true` if the XML declaration specifies the document to be standalone (_e.g.,_ An external part of the DTD affects the document's content), else `false`.
- {{domxref("Document.xmlVersion")}}
  - : Returns the version number as specified in the XML declaration or `"1.0"` if the declaration is absent.

The `Document` interface is extended with the {{domxref("ParentNode")}} interface:

{{page("/pt-BR/docs/Web/API/ParentNode","Properties")}}

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

> **Nota:** The `Document` interface also inherits from the {{domxref("Node")}} and {{domxref("EventTarget")}} interfaces.

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
  - : Compiles an [`XPathExpression`](/pt-BR/docs/XPathExpression) which can then be used for (repeated) evaluations.
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

## Specifications

| Specification                                                                   | Status                    | Comment                                                                     |
| ------------------------------------------------------------------------------- | ------------------------- | --------------------------------------------------------------------------- |
| {{SpecName('DOM1','#i-Document','Document')}}                                   | {{Spec2('DOM1')}}         | Initial definition for the interface                                        |
| {{SpecName('DOM2 Core','#i-Document','Document')}}                              | {{Spec2('DOM2 Core')}}    | Supersede DOM 1                                                             |
| {{SpecName('DOM3 Core','#i-Document','Document')}}                              | {{Spec2('DOM3 Core')}}    | Supersede DOM 2                                                             |
| {{SpecName('DOM WHATWG','#interface-document','Document')}}                     | {{Spec2('DOM WHATWG')}}   | Intend to supersede DOM 3                                                   |
| {{SpecName('HTML WHATWG','dom.html#the-document-object','Document')}}           | {{Spec2('HTML WHATWG')}}  | Turn the {{domxref("HTMLDocument")}} interface into a `Document` extension. |
| {{SpecName('DOM3 XPath','xpath.html#XPathEvaluator','XPathEvaluator')}}         | {{Spec2('DOM3 XPath')}}   | Define the {{domxref("XPathEvaluator")}} interface which extend `Document`. |
| {{SpecName('HTML Editing','#dom-document-getselection','Document')}}            | {{Spec2('HTML Editing')}} | Extend the `Document` interface                                             |
| {{SpecName('CSSOM View','#extensions-to-the-document-interface','Document')}}   | {{Spec2('CSSOM View')}}   | Extend the `Document` interface                                             |
| {{SpecName('CSSOM','#extensions-to-the-document-interface','Document')}}        | {{Spec2('CSSOM')}}        | Extend the `Document` interface                                             |
| {{SpecName('Pointer Lock','#extensions-to-the-document-interface','Document')}} | {{Spec2('Pointer Lock')}} | Extend the `Document` interface                                             |

## Compatibilidade com navegadores

### Firefox notes

Mozilla defines a set of non-standard properties made only for XUL content:

- {{domxref("document.currentScript")}}
  - : Returns the {{HTMLElement("script")}} element that is currently executing.
- {{domxref("document.documentURIObject")}}
  - : (**Mozilla add-ons only!**) Returns the `nsIURI` object representing the URI of the document. This property only has special meaning in privileged JavaScript code (with UniversalXPConnect privileges).
- {{domxref("document.popupNode")}}
  - : Returns the node upon which a popup was invoked.
- {{domxref("document.tooltipNode")}}
  - : Returns the node which is the target of the current tooltip.

Mozilla also define some non-standard methods:

- {{domxref("Document.execCommandShowHelp")}}
  - : This method never did anything and always threw an exception, so it was removed in Gecko 14.0.
- {{domxref("Document.getBoxObjectFor")}}
  - : Use the {{domxref("Element.getBoundingClientRect()")}} method instead.
- {{domxref("Document.loadOverlay")}}
  - : Loads a [XUL overlay](/pt-BR/docs/XUL_Overlays) dynamically. This only works in XUL documents.
- {{domxref("document.queryCommandText")}}
  - : This method never did anything but throw an exception, and was removed in Gecko 14.0.

### Internet Explorer notes

Microsoft defines some non-standard properties:

- {{domxref("document.fileSize")}}\* {{non-standard_inline}}
  - : Returns size in bytes of the document. Starting with Internet Explorer 11, that property is no longer supported. See [MSDN](http://msdn.microsoft.com/en-us/library/ms533752%28v=VS.85%29.aspx).Internet Explorer does not support all methods from the `Node` interface in the `Document` interface
- {{domxref("document.contains")}}
  - : As a work-around, `document.body.contains()` can be used.
