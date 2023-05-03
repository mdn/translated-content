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

一个 {{Glossary("HTML")}} 文档是一个 DOM 树，其中每个节点都是一个 HTML 元素，由 {{domxref("HTMLElement")}} 接口表示。 `HTMLElement` 类实现了 `Node`，因此每个元素也是一个节点（但反过来不成立）。这样，由 {{domxref("Node")}} 接口实现的结构特性也可用于 HTML 元素中，允许它们相互嵌套、创建和删除、移动等。

`HTMLElement` 接口是通用的，它仅提供所有 HTML 元素共有的功能，例如元素的 ID、坐标、构成元素的 HTML 代码、滚动位置等信息。

为了扩展核心 `HTMLElement` 接口的功能，以提供特定元素所需的功能，`HTMLElement` 类被子类化以添加所需的属性和方法。例如，{{HTMLElement("canvas")}} 元素由类型为 {{domxref("HTMLCanvasElement")}} 的对象表示。`HTMLElement` 通过添加诸如 {{domxref("HTMLCanvasElement.height", "height")}} 等属性和 {{domxref("HTMLCanvasElement.getContext", "getContext()")}} 等方法来增强 `HTMLElement` 类型，从而提供 canvas 特定的功能。

HTML 元素类的总体继承关系如下：

![HTML 元素的接口层次结构](html-dom-hierarchy.svg)

因此，元素继承其所有祖先的属性和方法。例如，考虑 {{HTMLElement("a")}} 元素，在 DOM 中由类型为 {{domxref("HTMLAnchorElement")}} 的对象表示。然后，该元素包括在该类文档中描述的特定于锚点的属性和方法，但也包括 {{domxref("HTMLElement")}} 和 {{domxref("Element")}} 定义的那些以及来自 {{domxref("Node")}}，最后是 {{domxref("EventTarget")}} 定义的内容。

每个级别定义了元素实用性的一个关键方面。从 `Node` 开始，该元素继承了有关该元素能否被另一个元素包含以及自身包含其他元素的概念。特别重要的是从 `EventTarget` 继承得到什么：接收和处理事件（如鼠标点击、播放和暂停事件等）的能力。

有一些元素具有共性，因此还有一个额外的中介类型。例如，{{HTMLElement("audio")}} 和 {{HTMLElement("video")}} 元素都呈现音视频媒体。相应的类型 {{domxref("HTMLAudioElement")}} 和 {{domxref("HTMLVideoElement")}} 都基于通用类型 {{domxref("HTMLMediaElement")}}，后者又基于 {{domxref("HTMLElement")}} 等等。`HTMLMediaElement` 定义了音频和视频元素之间共同拥有的方法和属性。

这些特定于元素的接口构成了大部分HTML DOM API，并且是本文的重点。要了解 [DOM](/zh-CN/docs/Web/API/Document_Object_Model) 的实际结构，请参阅 [DOM 概述](/zh-CN/docs/Web/API/Document_Object_Model/Introduction)。

## HTML DOM 的目标受众

HTML DOM 所暴露的特性是 Web 开发人员工具箱中最常用的API之一。除了最简单的 Web 应用程序外，几乎所有 Web 应用程序都会使用 HTML DOM 的某些功能。

## HTML DOM API 接口

HTML DOM API 中的大多数接口几乎一对一地映射到单个 HTML 元素，或者是具有类似功能的少量元素组。此外，HTML DOM API 还包括一些接口和类型来支持 HTML 元素接口。

### HTML 元素接口

这些接口代表特定的HTML元素（或具有与它们相关的相同属性和方法集合的元素）。

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

### Web 应用程序和浏览器集成接口

这些接口提供了访问包含 HTML 的浏览器窗口和文档的方式，以及访问浏览器状态、可用插件（如果有）和各种配置选项的方式。

- [`ApplicationCache`](/zh-CN/docs/Web/API/ApplicationCache) {{Deprecated_Inline}}
- [`BarProp`](/zh-CN/docs/Web/API/BarProp)
- [`External`](/zh-CN/docs/Web/API/External) {{deprecated_inline}}
- [`Navigator`](/zh-CN/docs/Web/API/Navigator)
- [`Plugin`](/zh-CN/docs/Web/API/Plugin) {{Deprecated_Inline}}
- [`PluginArray`](/zh-CN/docs/Web/API/PluginArray) {{Deprecated_Inline}}
- [`Window`](/zh-CN/docs/Web/API/Window)

### 表单支持接口

这些接口提供了创建和管理表单所需的结构和功能，包括 {{HTMLElement("form")}} 和 {{HTMLElement("input")}} 元素。

- [`FormDataEvent`](/zh-CN/docs/Web/API/FormDataEvent)
- [`HTMLFormControlsCollection`](/zh-CN/docs/Web/API/HTMLFormControlsCollection)
- [`HTMLOptionsCollection`](/zh-CN/docs/Web/API/HTMLOptionsCollection)
- [`RadioNodeList`](/zh-CN/docs/Web/API/RadioNodeList)
- [`ValidityState`](/zh-CN/docs/Web/API/ValidityState)

### Canvas 和图像接口

这些接口代表了 Canvas API 使用的对象，以及 {{HTMLElement("img")}} 元素和 {{HTMLElement("picture")}} 元素。

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

### 媒体接口

媒体接口提供HTML访问媒体元素：{{HTMLElement("audio")}} 和 {{HTMLElement("video")}} 的内容。

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

### 拖放接口

这些接口被 [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API) 用于表示单个可拖动（或已拖动）项目、一组已拖动或可拖动的项目，并处理拖放过程。

- [`DataTransfer`](/zh-CN/docs/Web/API/DataTransfer)
- [`DataTransferItem`](/zh-CN/docs/Web/API/DataTransferItem)
- [`DataTransferItemList`](/zh-CN/docs/Web/API/DataTransferItemList)
- [`DragEvent`](/zh-CN/docs/Web/API/DragEvent)

### 页面历史接口

History API 接口允许您访问有关浏览器历史记录的信息，并通过该历史记录向前和向后移动浏览器的当前选项卡。

- [`BeforeUnloadEvent`](/zh-CN/docs/Web/API/BeforeUnloadEvent)
- [`HashChangeEvent`](/zh-CN/docs/Web/API/HashChangeEvent)
- [`History`](/zh-CN/docs/Web/API/History)
- [`Location`](/zh-CN/docs/Web/API/Location)
- [`PageTransitionEvent`](/zh-CN/docs/Web/API/PageTransitionEvent)
- [`PopStateEvent`](/zh-CN/docs/Web/API/PopStateEvent)

### Web 组件接口

这些接口被 [Web Components API](/zh-CN/docs/Web/API/Web_components) 用于创建和管理可用的 [自定义元素](/zh-CN/docs/Web/API/Web_components/Using_custom_elements)。

- [`CustomElementRegistry`](/zh-CN/docs/Web/API/CustomElementRegistry)

### 杂项和支持接口

这些支持对象类型在 HTML DOM API 中以各种方式使用；此外，{{domxref("PromiseRejectionEvent")}} 表示当 {{Glossary("JavaScript")}} {{jsxref("Promise")}} 被拒绝时传递的事件。

- [`DOMStringList`](/zh-CN/docs/Web/API/DOMStringList)
- [`DOMStringMap`](/zh-CN/docs/Web/API/DOMStringMap)
- [`ErrorEvent`](/zh-CN/docs/Web/API/ErrorEvent)
- [`HTMLAllCollection`](/zh-CN/docs/Web/API/HTMLAllCollection)
- [`MimeType`](/zh-CN/docs/Web/API/MimeType)
- [`MimeTypeArray`](/zh-CN/docs/Web/API/MimeTypeArray)
- [`PromiseRejectionEvent`](/zh-CN/docs/Web/API/PromiseRejectionEvent)

### 属于其他 API 的接口

有几个接口在 HTML 规范中被技术上定义，但实际上是其他 API 的一部分。

#### Web Storage 接口

[Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API) 提供了网站在用户设备上临时或永久存储数据以便后续重用的能力。

- [`Storage`](/zh-CN/docs/Web/API/Storage)
- [`StorageEvent`](/zh-CN/docs/Web/API/StorageEvent)

#### Web Workers 接口

这些接口被 [Web Workers API](/zh-CN/docs/Web/API/Web_Workers_API) 用于建立 Worker 与应用及其内容交互的能力，同时也支持窗口或应用之间的消息传递。

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

#### WebSocket 接口

这些接口由 HTML 规范定义，被 [WebSocket API](/zh-CN/docs/Web/API/WebSockets_API) 使用。

- [`CloseEvent`](/zh-CN/docs/Web/API/CloseEvent)
- [`WebSocket`](/zh-CN/docs/Web/API/WebSocket)

#### Server-sent 事件接口

{{domxref("EventSource")}} 接口表示发送或正在发送 [server-sent 事件](/zh-CN/docs/Web/API/Server-sent_events) 的源。

- [`EventSource`](/zh-CN/docs/Web/API/EventSource)

## 示例

在这个例子中，一个 {{HTMLElement("input")}} 元素的 {{domxref("HTMLInputElement.input_event", "input")}} 事件被监视，以便根据给定字段当前是否有值来更新表单的 “提交” 按钮状态。


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

这段代码使用 {{domxref("Document")}} 接口的 {{domxref("Document.getElementById", "getElementById()")}} 方法获取代表 ID 为 `userName` 和 `sendButton` 的 {{HTMLElement("input")}} 元素的 DOM 对象。通过这些对象，我们可以访问提供有关和控制这些元素信息的属性和方法。

“发送” 按钮的 {{domxref("HTMLInputElement")}} 对象的 {{domxref("HTMLInputElement.disabled", "disabled")}} 属性被设置为 `true`，这将禁用 “发送” 按钮，使其无法点击。此外，通过调用 {{domxref("HTMLElement")}} 继承的 {{domxref("HTMLElement.focus", "focus()")}} 方法，用户名输入字段成为活动焦点。

然后调用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 来为用户名输入添加一个 `input` 事件的处理程序。这段代码查看当前输入值的长度；如果它是零，则禁用 “发送” 按钮（如果尚未禁用）。否则，该代码确保按钮已启用。

有了这个设置，只要用户名输入框中有值，“发送” 按钮就会一直处于启用状态，当为空时则禁用。

#### HTML

表单的 HTML 如下：

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

#### 结果

{{EmbedLiveSample("Examples", 640, 300)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 元素参考](/zh-CN/docs/Web/HTML/Element)
- [HTML 属性参考](/zh-CN/docs/Web/HTML/Attributes)
- [文档对象模型 (DOM)](/zh-CN/docs/Web/API/Document_Object_Model) 参考
- [操作文档](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents): 操作 DOM 的入门指南。
