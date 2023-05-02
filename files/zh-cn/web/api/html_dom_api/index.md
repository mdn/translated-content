---
title: The HTML DOM API
slug: Web/API/HTML_DOM_API
---

{{DefaultAPISidebar("HTML DOM")}}

**HTML DOM API** 由一系列接口组成，它们定义了 HTML 中每个元素的功能，以及它们所依赖、所支持的任何类型和接口。

HTML DOM API 的功能区包括：

- 通过 {{Glossary("DOM")}} 访问和控制 HTML 元素。
- 访问和操作表单数据
- 与 2D 图像的内容，以及 HTML {{HTMLElement("canvas")}} 的上下文进行交互，例如在其上绘制。
- 管理连接到 HTML 媒体元素的媒体 ({{HTMLElement("audio")}} 和 {{HTMLElement("video")}})。
- 在网页上拖放内容。
- 访问浏览器导航历史记录。
- 支持和连接其他API的接口，例如 [Web Components](/zh-CN/docs/Web/API/Web_components)、[Web Storage](/zh-CN/docs/Web/API/Web_Storage_API)、[Web Workers](/zh-CN/docs/Web/API/Web_Workers_API)、[WebSocket](/zh-CN/docs/Web/API/WebSockets_API) 和 [Server-sent events](/zh-CN/docs/Web/API/Server-sent_events)。

## HTML DOM 概念和用法

在本文中，我们将重点关注与 HTML 元素交互的 HTML DOM 部分。其他领域的讨论，例如 [拖放](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)、[WebSockets](/zh-CN/docs/Web/API/WebSockets_API)、[Web Storage](/zh-CN/docs/Web/API/Web_Storage_API) 等，可以在这些 API 的文档中找到。

### HTML 文档的结构

文档对象模型（{{Glossary("DOM")}}）是一种描述文档 ({{domxref("document")}}) 结构的架构；每个文档都由接口 {{domxref("Document")}} 的实例表示。而一个文档则由**节点**层次树组成，其中一个节点是代表文档中单个对象（如元素或文本节点）的基本记录。

节点可以是严格的组织形式，提供将其他节点分组或提供构建层次结构的点；其他节点可能代表文档的可见组件。每个节点都基于 {{domxref("Node")}} 接口，该接口提供了获取有关节点信息以及创建、删除和组织 DOM 中节点的方法。

节点本身并不包含实际显示在文档中的内容。它们是空容器。节点可以表示视觉内容的基本概念是由 {{domxref("Element")}} 接口引入的。一个 `Element` 对象实例，代表着使用 HTML 或 {{glossary("SVG")}} 等 {{glossary("XML")}} 词汇创建的文档中的单个元素。

例如，考虑一个包含两个元素的文档，其中一个元素内嵌了另外两个元素：

![Structure of a document with elements inside a document in a window](dom-structure.svg)

虽然 {{domxref("Document")}} 接口是作为 [DOM](/zh-CN/docs/Web/API/Document_Object_Model) 规范的一部分定义的，但 HTML 规范显着增强了它，以添加特定于在 Web 浏览器上下文中使用 DOM 以及用于表示 HTML 文档的信息。

HTML 标准添加到 `Document` 中的内容包括：

- 在加载页面时，支持访问 {{Glossary("HTTP")}} 头部提供的各种信息，例如文档加载的 [位置](/zh-CN/docs/Web/API/Document/location)、[cookies](/zh-CN/docs/Web/API/Document/cookie)、[修改日期](/zh-CN/docs/Web/API/Document/lastModified)、[引用站点](/zh-CN/docs/Web/API/Document/referrer) 等。
- 可以访问文档 {{HTMLElement("head")}} 块和 [body](/zh-CN/docs/Web/API/Document/body) 中元素的列表，以及包含在文档中的 [图像](/zh-CN/docs/Web/API/Document/images)、[链接](/zh-CN/docs/Web/API/Document/links)、[脚本](/zh-CN/docs/Web/API/Document/scripts) 等列表。
- 支持通过检查 [焦点](/zh-CN/docs/Web/API/Document/hasFocus) 和对 [可编辑内容](/zh-CN/docs/Web/HTML/Global_attributes/contenteditable) 执行命令来与用户交互。
- [HTML 标准定义事件](/zh-CN/docs/Web/API/GlobalEventHandlers) 的文档事件处理程序，允许访问 [鼠标](/zh-CN/docs/Web/API/MouseEvent) 和 [键盘](/zh-CN/docs/Web/API/KeyboardEvent) 事件、[拖放](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)、[媒体控制](/zh-CN/docs/Web/API/HTMLMediaElement) 等。
- 可以传递到元素和文档的事件处理程序；目前仅包括 [复制](/zh-CN/docs/Web/API/HTMLElement/oncopy)、[剪切](/zh-CN/docs/Web/API/HTMLElement/oncut) 和 [粘贴](/zh-CN/docs/Web/API/HTMLElement/onpaste) 操作。

### HTML 元素接口

`Element` 接口已经进一步适应了 HTML 元素的表示，通过引入 {{domxref("HTMLElement")}} 接口来实现，所有更具体的 HTML 元素类都继承自它。这扩展了 `Element` 类以向元素节点添加特定于 HTML 的通用功能。 `HTMLElement` 添加的属性包括 {{domxref("HTMLElement.hidden", "hidden")}} 和 {{domxref("HTMLElement.innerText", "innerText")}} 等。`HTMLElement` 还添加了所有 [全局事件处理程序](/zh-CN/docs/Web/API/GlobalEventHandlers) 。

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

These interfaces are used by the [Web Components API](/zh-CN/docs/Web/API/Web_components) to create and manage the available [custom elements](/zh-CN/docs/Web/API/Web_components/Using_custom_elements).

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
