---
title: The HTML DOM API
slug: Web/API/HTML_DOM_API
---

{{DefaultAPISidebar("HTML DOM")}}

The **HTML DOM API** is made up of the interfaces that define the functionality of each of the {{Glossary("element", "elements")}} in {{Glossary("HTML")}}, as well as any supporting types and interfaces they rely upon.

The functional areas included in the HTML DOM API include:

- Access to and control of HTML elements via the {{Glossary("DOM")}}.
- Access to and manipulation of form data.
- Interacting with the contents of 2D images and the context of an HTML {{HTMLElement("canvas")}}, for example to draw on top of them.
- Management of media connected to the HTML media elements ({{HTMLElement("audio")}} and {{HTMLElement("video")}}).
- Dragging and dropping of content on webpages.
- Access to the browser navigation history
- Supporting and connective interfaces for other APIs such as [Web Components](/zh-CN/docs/Web/Web_Components), [Web Storage](/zh-CN/docs/Web/API/Web_Storage_API), [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API), [WebSocket](/zh-CN/docs/Web/API/WebSockets_API), and [Server-sent events](/zh-CN/docs/Web/API/Server-sent_events).

## HTML DOM concepts and usage

In this article, we'll focus on the parts of the HTML DOM that involve engaging with HTML elements. Discussion of other areas, such as [Drag and Drop](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API), [WebSockets](/zh-CN/docs/Web/API/WebSockets_API), [Web Storage](/zh-CN/docs/Web/API/Web_Storage_API), etc. can be found in the documentation for those APIs.

### Structure of an HTML document

The Document Object Model ({{Glossary("DOM")}}) is an architecture that describes the structure of a {{domxref("document")}}; each document is represented by an instance of the interface {{domxref("Document")}}. A document, in turn, consists of a hierarchical tree of **nodes**, in which a node is a fundamental record representing a single object within the document (such as an element or text node).

Nodes may be strictly organizational, providing a means for grouping other nodes together or for providing a point at which a hierarchy can be constructed; other nodes may represent visible components of a document. Each node is based on the {{domxref("Node")}} interface, which provides properties for getting information about the node as well as methods for creating, deleting, and organizing nodes within the DOM.

Nodes don't have any concept of including the content that is actually displayed in the document. They're empty vessels. The fundamental notion of a node that can represent visual content is introduced by the {{domxref("Element")}} interface. An `Element` object instance represents a single element in a document created using either HTML or an {{glossary("XML")}} vocabulary such as {{glossary("SVG")}}.

For example, consider a document with two elements, one of which has two more elements nested inside it:

![Structure of a document with elements inside a document in a window](dom-structure.svg)

While the {{domxref("Document")}} interface is defined as part of the [DOM](/zh-CN/docs/Web/API/Document_Object_Model) specification, the HTML specification significantly enhances it to add information specific to using the DOM in the context of a web browser, as well as to using it to represent HTML documents specifically.

Among the things added to `Document` by the HTML standard are:

- Support for accessing various information provided by the {{Glossary("HTTP")}} headers when loading the page, such as the [location](/zh-CN/docs/Web/API/Document/location) from which the document was loaded, [cookies](/zh-CN/docs/Web/API/Document/cookie), [modification date](/zh-CN/docs/Web/API/Document/lastModified), [referring site](/zh-CN/docs/Web/API/Document/referrer), and so forth.
- Access to lists of elements in the document's {{HTMLElement("head")}} block and [body](/zh-CN/docs/Web/API/Document/body), as well as lists of the [images](/zh-CN/docs/Web/API/Document/images), [links](/zh-CN/docs/Web/API/Document/links), [scripts](/zh-CN/docs/Web/API/Document/scripts), etc. contained in the document.
- Support for interacting with the user by examining [focus](/zh-CN/docs/Web/API/Document/hasFocus) and by executing commands on [editable content](/zh-CN/docs/Web/HTML/Global_attributes/contenteditable).
- Event handlers for document [events defined by the HTML standard](/zh-CN/docs/Web/API/GlobalEventHandlers) to allow access to [mouse](/zh-CN/docs/Web/API/MouseEvent) and [keyboard](/zh-CN/docs/Web/API/KeyboardEvent) events, [drag and drop](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API), [media control](/zh-CN/docs/Web/API/HTMLMediaElement), and more.
- Event handlers for events that can be delivered to both elements and documents; these presently include only [copy](/zh-CN/docs/Web/API/HTMLElement/oncopy), [cut](/zh-CN/docs/Web/API/HTMLElement/oncut), and [paste](/zh-CN/docs/Web/API/HTMLElement/onpaste) actions.

### HTML element interfaces

The `Element` interface has been further adapted to represent HTML elements specifically by introducing the {{domxref("HTMLElement")}} interface, which all more specific HTML element classes inherit from. This expands the `Element` class to add HTML-specific general features to the element nodes. Properties added by `HTMLElement` include for example {{domxref("HTMLElement.hidden", "hidden")}} and {{domxref("HTMLElement.innerText", "innerText")}}. `HTMLElement` also adds all the [global event handlers](/zh-CN/docs/Web/API/GlobalEventHandlers).

An {{Glossary("HTML")}} document is a DOM tree in which each of the nodes is an HTML element, represented by the {{domxref("HTMLElement")}} interface. The `HTMLElement` class, in turn, implements `Node`, so every element is also a node (but not the other way around). This way, the structural features implemented by the {{domxref("Node")}} interface are also available to HTML elements, allowing them to be nested within each other, created and deleted, moved around, and so forth.

The `HTMLElement` interface is generic, however, providing only the functionality common to all HTML elements such as the element's ID, its coordinates, the HTML making up the element, information about scroll position, and so forth.

In order to expand upon the functionality of the core `HTMLElement` interface to provide the features needed by a specific element, the `HTMLElement` class is subclassed to add the needed properties and methods. For example, the {{HTMLElement("canvas")}} element is represented by an object of type {{domxref("HTMLCanvasElement")}}. `HTMLCanvasElement` augments the `HTMLElement` type by adding properties such as {{domxref("HTMLCanvasElement.height", "height")}} and methods like {{domxref("HTMLCanvasElement.getContext", "getContext()")}} to provide canvas-specific features.

The overall inheritance for HTML element classes looks like this:

![Hierarchy of interfaces for HTML elements](html-dom-hierarchy.svg)

As such, an element inherits the properties and methods of all of its ancestors. For example, consider a {{HTMLElement("a")}} element, which is represented in the DOM by an object of type {{domxref("HTMLAnchorElement")}}. The element, then, includes the anchor-specific properties and methods described in that class's documentation, but also those defined by {{domxref("HTMLElement")}} and {{domxref("Element")}}, as well as from {{domxref("Node")}} and, finally, {{domxref("EventTarget")}}.

Each level defines a key aspect of the utility of the element. From `Node`, the element inherits concepts surrounding the ability for the element to be contained by another element, and to contain other elements itself. Of special importance is what is gained by inheriting from `EventTarget`: the ability to receive and handle events such as mouse clicks, play and pause events, and so forth.

There are elements that share commonalities and thus have an additional intermediary type. For example, the {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements both present audiovisual media. The corresponding types, {{domxref("HTMLAudioElement")}} and {{domxref("HTMLVideoElement")}}, are both based upon the common type {{domxref("HTMLMediaElement")}}, which in turn is based upon {{domxref("HTMLElement")}} and so forth. `HTMLMediaElement` defines the methods and properties held in common between audio and video elements.

These element-specific interfaces make up the majority of the HTML DOM API, and are the focus of this article. To learn more about the actual structure of the [DOM](/zh-CN/docs/Web/API/Document_Object_Model), see [Introduction to the DOM](/zh-CN/docs/Web/API/Document_Object_Model/Introduction).

## HTML DOM target audience

The features exposed by the HTML DOM are among the most commonly-used APIs in the web developer's arsenal. All but the most simple web applications will use some features of the HTML DOM.

## HTML DOM API interfaces

The majority of the interfaces that comprise the HTML DOM API map almost one-to-one to individual HTML elements, or to a small group of elements with similar functionality. In addition, the HTML DOM API includes a few interfaces and types to support the HTML element interfaces.

### HTML element interfaces

These interfaces represent specific HTML elements (or sets of related elements which have the same properties and methods associated with them).

- [`HTMLAnchorElement`](/zh-CN/docs/Web/API/HTMLAnchorElement)
- [`HTMLAreaElement`](/zh-CN/docs/Web/API/HTMLAreaElement)
- [`HTMLAudioElement`](/zh-CN/docs/Web/API/HTMLAudioElement)
- [`HTMLBRElement`](/zh-CN/docs/Web/API/HTMLBRElement)
- [`HTMLBaseElement`](/zh-CN/docs/Web/API/HTMLBaseElement)
- [`HTMLBaseFontElement`](/zh-CN/docs/Web/API/HTMLBaseFontElement) {{Deprecated_Inline}}
- [`HTMLBodyElement`](/zh-CN/docs/Web/API/HTMLBodyElement)
- [`HTMLButtonElement`](/zh-CN/docs/Web/API/HTMLButtonElement)
- [`HTMLCanvasElement`](/zh-CN/docs/Web/API/HTMLCanvasElement)
- [`HTMLDListElement`](/zh-CN/docs/Web/API/HTMLDListElement)
- [`HTMLDataElement`](/zh-CN/docs/Web/API/HTMLDataElement)
- [`HTMLDataListElement`](/zh-CN/docs/Web/API/HTMLDataListElement)
- [`HTMLDetailsElement`](/zh-CN/docs/Web/API/HTMLDetailsElement)
- [`HTMLDialogElement`](/zh-CN/docs/Web/API/HTMLDialogElement)
- [`HTMLDirectoryElement`](/zh-CN/docs/Web/API/HTMLDirectoryElement)
- [`HTMLDivElement`](/zh-CN/docs/Web/API/HTMLDivElement)
- [`HTMLElement`](/zh-CN/docs/Web/API/HTMLElement)
- [`HTMLEmbedElement`](/zh-CN/docs/Web/API/HTMLEmbedElement)
- [`HTMLFieldSetElement`](/zh-CN/docs/Web/API/HTMLFieldSetElement)
- [`HTMLFontElement`](/zh-CN/docs/Web/API/HTMLFontElement) {{Deprecated_Inline}}
- [`HTMLFormElement`](/zh-CN/docs/Web/API/HTMLFormElement)
- [`HTMLFrameElement`](/zh-CN/docs/Web/API/HTMLFrameElement) {{Deprecated_Inline}}
- [`HTMLFrameSetElement`](/zh-CN/docs/Web/API/HTMLFrameSetElement) {{Deprecated_Inline}}
- [`HTMLHRElement`](/zh-CN/docs/Web/API/HTMLHRElement)
- [`HTMLHeadElement`](/zh-CN/docs/Web/API/HTMLHeadElement)
- [`HTMLHeadingElement`](/zh-CN/docs/Web/API/HTMLHeadingElement)
- [`HTMLHtmlElement`](/zh-CN/docs/Web/API/HTMLHtmlElement)
- [`HTMLIFrameElement`](/zh-CN/docs/Web/API/HTMLIFrameElement)
- [`HTMLImageElement`](/zh-CN/docs/Web/API/HTMLImageElement)
- [`HTMLInputElement`](/zh-CN/docs/Web/API/HTMLInputElement)
- [`HTMLIsIndexElement`](/zh-CN/docs/Web/API/HTMLIsIndexElement) {{Deprecated_Inline}}
- [`HTMLLIElement`](/zh-CN/docs/Web/API/HTMLLIElement)
- [`HTMLLabelElement`](/zh-CN/docs/Web/API/HTMLLabelElement)
- [`HTMLLegendElement`](/zh-CN/docs/Web/API/HTMLLegendElement)
- [`HTMLLinkElement`](/zh-CN/docs/Web/API/HTMLLinkElement)
- [`HTMLMapElement`](/zh-CN/docs/Web/API/HTMLMapElement)
- [`HTMLMarqueeElement`](/zh-CN/docs/Web/API/HTMLMarqueeElement) {{deprecated_inline}}
- [`HTMLMediaElement`](/zh-CN/docs/Web/API/HTMLMediaElement)
- [`HTMLMenuElement`](/zh-CN/docs/Web/API/HTMLMenuElement)
- [`HTMLMenuItemElement`](/zh-CN/docs/Web/API/HTMLMenuItemElement) {{Deprecated_Inline}}
- [`HTMLMetaElement`](/zh-CN/docs/Web/API/HTMLMetaElement)
- [`HTMLMeterElement`](/zh-CN/docs/Web/API/HTMLMeterElement)
- [`HTMLModElement`](/zh-CN/docs/Web/API/HTMLModElement)
- [`HTMLOListElement`](/zh-CN/docs/Web/API/HTMLOListElement)
- [`HTMLObjectElement`](/zh-CN/docs/Web/API/HTMLObjectElement)
- [`HTMLOptGroupElement`](/zh-CN/docs/Web/API/HTMLOptGroupElement)
- [`HTMLOptionElement`](/zh-CN/docs/Web/API/HTMLOptionElement)
- [`HTMLOutputElement`](/zh-CN/docs/Web/API/HTMLOutputElement)
- [`HTMLParagraphElement`](/zh-CN/docs/Web/API/HTMLParagraphElement)
- [`HTMLParamElement`](/zh-CN/docs/Web/API/HTMLParamElement)
- [`HTMLPictureElement`](/zh-CN/docs/Web/API/HTMLPictureElement)
- [`HTMLPreElement`](/zh-CN/docs/Web/API/HTMLPreElement)
- [`HTMLProgressElement`](/zh-CN/docs/Web/API/HTMLProgressElement)
- [`HTMLQuoteElement`](/zh-CN/docs/Web/API/HTMLQuoteElement)
- [`HTMLScriptElement`](/zh-CN/docs/Web/API/HTMLScriptElement)
- [`HTMLSelectElement`](/zh-CN/docs/Web/API/HTMLSelectElement)
- [`HTMLSlotElement`](/zh-CN/docs/Web/API/HTMLSlotElement)
- [`HTMLSourceElement`](/zh-CN/docs/Web/API/HTMLSourceElement)
- [`HTMLSpanElement`](/zh-CN/docs/Web/API/HTMLSpanElement)
- [`HTMLStyleElement`](/zh-CN/docs/Web/API/HTMLStyleElement)
- [`HTMLTableCaptionElement`](/zh-CN/docs/Web/API/HTMLTableCaptionElement)
- [`HTMLTableCellElement`](/zh-CN/docs/Web/API/HTMLTableCellElement)
- [`HTMLTableColElement`](/zh-CN/docs/Web/API/HTMLTableColElement)
- [`HTMLTableElement`](/zh-CN/docs/Web/API/HTMLTableElement)
- [`HTMLTableRowElement`](/zh-CN/docs/Web/API/HTMLTableRowElement)
- [`HTMLTableSectionElement`](/zh-CN/docs/Web/API/HTMLTableSectionElement)
- [`HTMLTemplateElement`](/zh-CN/docs/Web/API/HTMLTemplateElement)
- [`HTMLTextAreaElement`](/zh-CN/docs/Web/API/HTMLTextAreaElement)
- [`HTMLTimeElement`](/zh-CN/docs/Web/API/HTMLTimeElement)
- [`HTMLTitleElement`](/zh-CN/docs/Web/API/HTMLTitleElement)
- [`HTMLTrackElement`](/zh-CN/docs/Web/API/HTMLTrackElement)
- [`HTMLUListElement`](/zh-CN/docs/Web/API/HTMLUListElement)
- [`HTMLUnknownElement`](/zh-CN/docs/Web/API/HTMLUnknownElement)
- [`HTMLVideoElement`](/zh-CN/docs/Web/API/HTMLVideoElement)

### Web app and browser integration interfaces

These interfaces offer access to the browser window and document that contain the HTML, as well as to the browser's state, available plugins (if any), and various configuration options.

- [`ApplicationCache`](/zh-CN/docs/Web/API/ApplicationCache) {{Deprecated_Inline}}
- [`BarProp`](/zh-CN/docs/Web/API/BarProp)
- [`External`](/zh-CN/docs/Web/API/External) {{deprecated_inline}}
- [`Navigator`](/zh-CN/docs/Web/API/Navigator)
- [`Plugin`](/zh-CN/docs/Web/API/Plugin) {{Deprecated_Inline}}
- [`PluginArray`](/zh-CN/docs/Web/API/PluginArray) {{Deprecated_Inline}}
- [`Window`](/zh-CN/docs/Web/API/Window)

### Form support interfaces

These interfaces provide structure and functionality required by the elements used to create and manage forms, including the {{HTMLElement("form")}} and {{HTMLElement("input")}} elements.

- [`FormDataEvent`](/zh-CN/docs/Web/API/FormDataEvent)
- [`HTMLFormControlsCollection`](/zh-CN/docs/Web/API/HTMLFormControlsCollection)
- [`HTMLOptionsCollection`](/zh-CN/docs/Web/API/HTMLOptionsCollection)
- [`RadioNodeList`](/zh-CN/docs/Web/API/RadioNodeList)
- [`ValidityState`](/zh-CN/docs/Web/API/ValidityState)

### Canvas and image interfaces

These interfaces represent objects used by the Canvas API as well as the {{HTMLElement("img")}} element and {{HTMLElement("picture")}} elements.

- [`CanvasGradient`](/zh-CN/docs/Web/API/CanvasGradient)
- [`CanvasPattern`](/zh-CN/docs/Web/API/CanvasPattern)
- [`CanvasRenderingContext2D`](/zh-CN/docs/Web/API/CanvasRenderingContext2D)
- [`ImageBitmap`](/zh-CN/docs/Web/API/ImageBitmap)
- [`ImageBitmapRenderingContext`](/zh-CN/docs/Web/API/ImageBitmapRenderingContext)
- [`ImageData`](/zh-CN/docs/Web/API/ImageData)
- [`OffscreenCanvas`](/zh-CN/docs/Web/API/OffscreenCanvas)
- [`OffscreenCanvasRenderingContext2D`](/zh-CN/docs/Web/API/OffscreenCanvasRenderingContext2D)
- [`Path2D`](/zh-CN/docs/Web/API/Path2D)
- [`TextMetrics`](/zh-CN/docs/Web/API/TextMetrics)

### Media interfaces

The media interfaces provide HTML access to the contents of the media elements: {{HTMLElement("audio")}} and {{HTMLElement("video")}}.

- [`AudioTrack`](/zh-CN/docs/Web/API/AudioTrack)
- [`AudioTrackList`](/zh-CN/docs/Web/API/AudioTrackList)
- [`MediaError`](/zh-CN/docs/Web/API/MediaError)
- [`TextTrack`](/zh-CN/docs/Web/API/TextTrack)
- [`TextTrackCue`](/zh-CN/docs/Web/API/TextTrackCue)
- [`TextTrackCueList`](/zh-CN/docs/Web/API/TextTrackCueList)
- [`TextTrackList`](/zh-CN/docs/Web/API/TextTrackList)
- [`TimeRanges`](/zh-CN/docs/Web/API/TimeRanges)
- [`TrackEvent`](/zh-CN/docs/Web/API/TrackEvent)
- [`VideoTrack`](/zh-CN/docs/Web/API/VideoTrack)
- [`VideoTrackList`](/zh-CN/docs/Web/API/VideoTrackList)

### Drag and drop interfaces

These interfaces are used by the [HTML Drag and Drop API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API) to represent individual draggable (or dragged) items, groups of dragged or draggable items, and to handle the drag and drop process.

- [`DataTransfer`](/zh-CN/docs/Web/API/DataTransfer)
- [`DataTransferItem`](/zh-CN/docs/Web/API/DataTransferItem)
- [`DataTransferItemList`](/zh-CN/docs/Web/API/DataTransferItemList)
- [`DragEvent`](/zh-CN/docs/Web/API/DragEvent)

### Page history interfaces

The History API interfaces let you access information about the browser's history, as well as to shift the browser's current tab forward and backward through that history.

- [`BeforeUnloadEvent`](/zh-CN/docs/Web/API/BeforeUnloadEvent)
- [`HashChangeEvent`](/zh-CN/docs/Web/API/HashChangeEvent)
- [`History`](/zh-CN/docs/Web/API/History)
- [`Location`](/zh-CN/docs/Web/API/Location)
- [`PageTransitionEvent`](/zh-CN/docs/Web/API/PageTransitionEvent)
- [`PopStateEvent`](/zh-CN/docs/Web/API/PopStateEvent)

### Web Components interfaces

These interfaces are used by the [Web Components API](/zh-CN/docs/Web/Web_Components) to create and manage the available [custom elements](/zh-CN/docs/Web/Web_Components/Using_custom_elements).

- [`CustomElementRegistry`](/zh-CN/docs/Web/API/CustomElementRegistry)

### Miscellaneous and supporting interfaces

These supporting object types are used in a variety of ways in the HTML DOM API; in addition, {{domxref("PromiseRejectionEvent")}} represents the event delivered when a {{Glossary("JavaScript")}} {{jsxref("Promise")}} is rejected.

- [`DOMStringList`](/zh-CN/docs/Web/API/DOMStringList)
- [`DOMStringMap`](/zh-CN/docs/Web/API/DOMStringMap)
- [`ErrorEvent`](/zh-CN/docs/Web/API/ErrorEvent)
- [`HTMLAllCollection`](/zh-CN/docs/Web/API/HTMLAllCollection)
- [`MimeType`](/zh-CN/docs/Web/API/MimeType)
- [`MimeTypeArray`](/zh-CN/docs/Web/API/MimeTypeArray)
- [`PromiseRejectionEvent`](/zh-CN/docs/Web/API/PromiseRejectionEvent)

### Interfaces belonging to other APIs

There are several interfaces which are technically defined in the HTML specification while actually being part of other APIs.

#### Web storage interfaces

The [Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API) provides the ability for web sites to store data either temporarily or permanently on the user's device for later re-use.

- [`Storage`](/zh-CN/docs/Web/API/Storage)
- [`StorageEvent`](/zh-CN/docs/Web/API/StorageEvent)

#### Web Workers interfaces

These interfaces are used by the [Web Workers API](/zh-CN/docs/Web/API/Web_Workers_API) both to establish the ability for workers to interact with an app and its content, but also to support messaging between windows or apps.

- [`BroadcastChannel`](/zh-CN/docs/Web/API/BroadcastChannel)
- [`DedicatedWorkerGlobalScope`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope)
- [`MessageChannel`](/zh-CN/docs/Web/API/MessageChannel)
- [`MessageEvent`](/zh-CN/docs/Web/API/MessageEvent)
- [`MessagePort`](/zh-CN/docs/Web/API/MessagePort)
- [`SharedWorker`](/zh-CN/docs/Web/API/SharedWorker)
- [`SharedWorkerGlobalScope`](/zh-CN/docs/Web/API/SharedWorkerGlobalScope)
- [`Worker`](/zh-CN/docs/Web/API/Worker)
- [`WorkerGlobalScope`](/zh-CN/docs/Web/API/WorkerGlobalScope)
- [`WorkerLocation`](/zh-CN/docs/Web/API/WorkerLocation)
- [`WorkerNavigator`](</zh-CN/docs/Web/API/WorkerNavigator >)

#### WebSocket interfaces

These interfaces, defined by the HTML specification, are used by the [WebSocket API](/zh-CN/docs/Web/API/WebSockets_API).

- [`CloseEvent`](/zh-CN/docs/Web/API/CloseEvent)
- [`WebSocket`](/zh-CN/docs/Web/API/WebSocket)

#### Server-sent events interfaces

The {{domxref("EventSource")}} interface represents the source which sent or is sending [server-sent events](/zh-CN/docs/Web/API/Server-sent_events).

- [`EventSource`](/zh-CN/docs/Web/API/EventSource)

## Examples

In this example, an {{HTMLElement("input")}} element's {{domxref("HTMLInputElement.input_event", "input")}} event is monitored in order to update the state of a form's "submit" button based on whether or not a given field currently has a value.

#### JavaScript

```js
const nameField = document.getElementById("userName");
const sendButton = document.getElementById("sendButton")

sendButton.disabled = true;
// [note: this is disabled since it causes this article to always load with this example focused and scrolled into view]
//nameField.focus();

nameField.addEventListener("input", event => {
  const elem = event.target;
  const valid = elem.value.length != 0;

  if (valid && sendButton.disabled) {
    sendButton.disabled = false;
  } else if (!valid && !sendButton.disabled) {
    sendButton.disabled = true;
  }
});
```

This code uses the {{domxref("Document")}} interface's {{domxref("Document.getElementById", "getElementById()")}} method to get the DOM object representing the {{HTMLElement("input")}} elements whose IDs are `userName` and `sendButton`. With these, we can access the properties and methods that provide information about and grant control over these elements.

The {{domxref("HTMLInputElement")}} object for the "Send" button's {{domxref("HTMLInputElement.disabled", "disabled")}} property is set to `true`, which disables the "Send" button so it can't be clicked. In addition, the user name input field is made the active focus by calling the {{domxref("HTMLElement.focus", "focus()")}} method it inherits from {{domxref("HTMLElement")}}.

Then {{domxref("EventTarget.addEventListener", "addEventListener()")}} is called to add a handler for the `input` event to the user name input. This code looks at the length of the current value of the input; if it's zero, then the "Send" button is disabled if it's not already disabled. Otherwise, the code ensures that the button is enabled.

With this in place, the "Send" button is always enabled whenever the user name input field has a value, and disabled when it's empty.

#### HTML

The HTML for the form looks like this:

```html
<p>Please provide the information below. Items marked with "*" are required.</p>
<form action="" method="get">
  <p>
    <label for="userName" required>Your name:</label>
    <input type="text" id="userName"> (*)
  </p>
  <p>
    <label for="email">Email:</label>
    <input type="email" id="userEmail">
  </p>
  <input type="submit" value="Send" id="sendButton">
</form>
```

#### Result

{{EmbedLiveSample("Examples", 640, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML elements reference](/zh-CN/docs/Web/HTML/Element)
- [HTML attribute reference](/zh-CN/docs/Web/HTML/Attributes)
- [Document Object Model (DOM)](/zh-CN/docs/Web/API/Document_Object_Model) reference
- [Manipulating documents](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents): A beginner's guide to manipulating the DOM.
