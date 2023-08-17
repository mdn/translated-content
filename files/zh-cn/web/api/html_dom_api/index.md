---
title: HTML DOM API
slug: Web/API/HTML_DOM_API
---

{{DefaultAPISidebar("HTML DOM")}}

**HTML DOM API** 由一系列接口组成，它们定义了 {{Glossary("HTML")}} 中每个{{Glossary("element", "元素")}}的功能，以及它们所依赖的任何支持类型和接口。

HTML DOM API 的功能包括：

- 通过 {{Glossary("DOM")}} 访问和控制 HTML 元素。
- 访问和操作表单数据。
- 与 2D 图像的内容，以及 HTML {{HTMLElement("canvas")}} 元素的上下文进行交互，例如在其上绘制。
- 管理连接到 HTML 媒体元素的媒体（{{HTMLElement("audio")}} 和 {{HTMLElement("video")}}）。
- 在网页上拖放内容。
- 访问浏览器导航历史记录。
- 支持和关联其他 API 的接口，例如 [Web 组件](/zh-CN/docs/Web/API/Web_components)、{{DOMxRef("Web_Storage_API", "Web Storage", "", "1")}}、{{DOMxRef("Web_Workers_API", "Web Worker", "", "1")}}、{{DOMxRef("WebSockets_API", "WebSocket", "", "1")}} 和 {{DOMxRef("Server-sent_events", "Server-sent 事件", "", "1")}}。

## HTML DOM 概念和用法

在本文中，我们将重点关注与 HTML 元素交互的 HTML DOM 部分。其他领域的讨论，例如[拖放](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)、[WebSocket](/zh-CN/docs/Web/API/WebSockets_API)、[Web Storage](/zh-CN/docs/Web/API/Web_Storage_API) 等，可以在这些 API 的文档中找到。

### HTML 文档的结构

文档对象模型（{{Glossary("DOM")}}）是一种描述{{domxref("document", "文档", "", 1)}}结构的架构；每个文档都由 {{domxref("Document")}} 接口的实例表示。而一个文档则由**节点**层次树组成，其中每个节点，都代表文档中单个对象（如元素或文本节点）的基本记录。

节点可以组织文档结构，提供将其他节点分组，以及构建层级结构的点的方法。其他节点可能代表文档的可见组件。每个节点都基于 {{domxref("Node")}} 接口，该接口提供了获取有关节点信息，以及创建、删除和组织 DOM 中节点的方法。

节点本身不包含实际显示在文档中的内容，它们是空容器。节点呈现视觉内容的能力，是由 {{domxref("Element")}} 接口引入的。一个 `Element` 对象实例，代表着使用 HTML 或 {{glossary("SVG")}} 等 {{glossary("XML")}} 词汇创建的文档中的单个元素。

例如，考虑一个包含两个元素的文档，其中一个元素内嵌了另外两个元素：

![窗口中，内部包含元素的文档结构](dom-structure.svg)

虽然 {{domxref("Document")}} 接口是作为 [DOM](/zh-CN/docs/Web/API/Document_Object_Model) 规范的一部分定义的，但 HTML 规范显著增强了它，添加了特定于 Web 浏览器上下文中，使用 DOM 以及表示 HTML 文档的信息。

HTML 标准添加到 `Document` 中的内容包括：

- 在加载页面时，支持访问 {{Glossary("HTTP")}} 标头提供的各种信息，例如文档加载的{{DOMxRef("Document/location", "位置", "", "1")}}、{{DOMxRef("Document/cookie", "cookie", "", "1")}}、{{DOMxRef("Document/lastModified", "修改日期", "", "1")}}、{{DOMxRef("Document/referrer", "引用站点", "", "1")}}等。
- 可以访问文档 {{HTMLElement("head")}} 块和 {{DOMxRef("Document/body", "body", "", "1")}} 中元素的列表，以及包含在文档中的{{DOMxRef("Document/images", "图像", "", "1")}}、{{DOMxRef("Document/links", "链接", "", "1")}}、{{DOMxRef("Document/scripts", "脚本", "", "1")}}等列表。
- 支持通过检查{{DOMxRef("Document/hasFocus", "焦点", "", "1")}}和对[可编辑内容](/zh-CN/docs/Web/HTML/Global_attributes/contenteditable)执行命令来与用户交互。
- HTML 标准定义的文档事件处理器，允许访问{{DOMxRef("MouseEvent", "鼠标", "", "1")}}和{{DOMxRef("KeyboardEvent", "键盘", "", "1")}}事件、{{DOMxRef("HTML_Drag_and_Drop_API", "拖放", "", "1")}}、{{DOMxRef("HTMLMediaElement", "媒体控制", "", "1")}}等。
- 可以传递到元素和文档的事件处理器；目前仅包括{{DOMxRef("HTMLElement/copy_event", "复制", "", "1")}}、{{DOMxRef("HTMLElement/cut_event", "剪切", "", "1")}}和{{DOMxRef("HTMLElement/paste_event", "粘贴", "", "1")}}操作。

### HTML 元素接口

通过引入 {{domxref("HTMLElement")}} 接口，`Element` 接口被进一步调整为专门表示 HTML 元素，所有更具体的 HTML 元素类都继承自它。这扩展了 `Element` 类，以向元素节点添加了特定于 HTML 的通用特性。`HTMLElement` 添加的属性包括 {{domxref("HTMLElement.hidden", "hidden")}} 和 {{domxref("HTMLElement.innerText", "innerText")}} 等。

{{Glossary("HTML")}} 文档是 DOM 树，其中每个节点都是一个由 {{domxref("HTMLElement")}} 接口表示的 HTML 元素。`HTMLElement` 类实现了 `Node`，因此每个元素也是一个节点（但反过来不成立）。这样，由 {{domxref("Node")}} 接口实现的结构特性也可用于 HTML 元素中，允许它们相互嵌套、创建和删除、移动等。

`HTMLElement` 接口是通用的，但是它仅提供所有 HTML 元素共有的功能，例如元素的 ID、坐标、构成元素的 HTML 代码、滚动位置等信息。

为了扩展核心 `HTMLElement` 接口的功能，以提供特定元素所需的特性，`HTMLElement` 类被子类化以添加所需的属性和方法。例如，{{HTMLElement("canvas")}} 元素由类型为 {{domxref("HTMLCanvasElement")}} 的对象表示。`HTMLElement` 通过添加诸如 {{domxref("HTMLCanvasElement.height", "height")}} 等属性和 {{domxref("HTMLCanvasElement.getContext", "getContext()")}} 等方法来增强 `HTMLElement` 类型，从而提供特定于 canvas 的特性。

HTML 元素类的总体继承关系如下：

![HTML 元素的接口层次结构](html-dom-hierarchy.svg)

因此，元素继承其所有祖先的属性和方法。例如，考虑 {{HTMLElement("a")}} 元素，在 DOM 中由类型为 {{domxref("HTMLAnchorElement")}} 的对象表示。元素包括了该类文档中，`Anchor` 特定的属性和方法。但也包括 {{domxref("HTMLElement")}}、{{domxref("Element")}} 以及 {{domxref("Node")}} 定义的内容，最后是 {{domxref("EventTarget")}} 定义的内容。

每一层级都定义了元素实用性的一个关键方面。从 `Node` 开始，该元素继承了有关该元素能否被另一个元素包含，以及自身包含其他元素的概念。特别重要的是从 `EventTarget` 继承的：接收和处理事件（如鼠标点击、播放和暂停事件等）的能力。

有一些元素具有共性，因此还有一个额外的中介类型。例如，{{HTMLElement("audio")}} 和 {{HTMLElement("video")}} 元素都呈现音视频媒体。相应的 {{domxref("HTMLAudioElement")}} 和 {{domxref("HTMLVideoElement")}} 类型都基于通用类型 {{domxref("HTMLMediaElement")}}，后者又基于 {{domxref("HTMLElement")}} 等等。`HTMLMediaElement` 定义了音频和视频元素之间共同拥有的方法和属性。

这些特定于元素的接口构成了大部分 HTML DOM API，并且是本文的重点。要了解 {{DOMxRef("Document_Object_Model", "DOM", "", "1")}} 的实际结构，请参阅 {{DOMxRef("Document_Object_Model/Introduction", "DOM 概述", "", "1")}}。

## HTML DOM 的目标受众

HTML DOM 所暴露的特性是 web 开发人员工具箱中最常用的 API 之一。除了最简单的 web 应用程序外，几乎所有 web 应用程序都会使用 HTML DOM 的某些特性。

## HTML DOM API 接口

HTML DOM API 中的大多数接口，几乎一对一地映射到单个 HTML 元素，或是类似功能的少量元素组。此外，HTML DOM API 还包括一些接口和类型，以支持 HTML 元素接口。

### HTML 元素接口

这些接口代表特定的 HTML 元素（或者属性、方法与它们相关、相同的元素）。

- {{DOMxRef("HTMLAnchorElement")}}
- {{DOMxRef("HTMLAreaElement")}}
- {{DOMxRef("HTMLAudioElement")}}
- {{DOMxRef("HTMLBaseElement")}}
- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLBRElement")}}
- {{DOMxRef("HTMLButtonElement")}}
- {{DOMxRef("HTMLCanvasElement")}}
- {{DOMxRef("HTMLDataElement")}}
- {{DOMxRef("HTMLDataListElement")}}
- {{DOMxRef("HTMLDetailsElement")}}
- {{DOMxRef("HTMLDialogElement")}}
- {{DOMxRef("HTMLDirectoryElement")}}
- {{DOMxRef("HTMLDivElement")}}
- {{DOMxRef("HTMLDListElement")}}
- {{DOMxRef("HTMLElement")}}
- {{DOMxRef("HTMLEmbedElement")}}
- {{DOMxRef("HTMLFieldSetElement")}}
- {{DOMxRef("HTMLFormElement")}}
- {{DOMxRef("HTMLHRElement")}}
- {{DOMxRef("HTMLHeadElement")}}
- {{DOMxRef("HTMLHeadingElement")}}
- {{DOMxRef("HTMLHtmlElement")}}
- {{DOMxRef("HTMLIFrameElement")}}
- {{DOMxRef("HTMLImageElement")}}
- {{DOMxRef("HTMLInputElement")}}
- {{DOMxRef("HTMLLabelElement")}}
- {{DOMxRef("HTMLLegendElement")}}
- {{DOMxRef("HTMLLIElement")}}
- {{DOMxRef("HTMLLinkElement")}}
- {{DOMxRef("HTMLMapElement")}}
- {{DOMxRef("HTMLMediaElement")}}
- {{DOMxRef("HTMLMenuElement")}}
- {{DOMxRef("HTMLMetaElement")}}
- {{DOMxRef("HTMLMeterElement")}}
- {{DOMxRef("HTMLModElement")}}
- {{DOMxRef("HTMLObjectElement")}}
- {{DOMxRef("HTMLOListElement")}}
- {{DOMxRef("HTMLOptGroupElement")}}
- {{DOMxRef("HTMLOptionElement")}}
- {{DOMxRef("HTMLOutputElement")}}
- {{DOMxRef("HTMLParagraphElement")}}
- {{DOMxRef("HTMLPictureElement")}}
- {{DOMxRef("HTMLPreElement")}}
- {{DOMxRef("HTMLProgressElement")}}
- {{DOMxRef("HTMLQuoteElement")}}
- {{DOMxRef("HTMLScriptElement")}}
- {{DOMxRef("HTMLSelectElement")}}
- {{DOMxRef("HTMLSlotElement")}}
- {{DOMxRef("HTMLSourceElement")}}
- {{DOMxRef("HTMLSpanElement")}}
- {{DOMxRef("HTMLStyleElement")}}
- {{DOMxRef("HTMLTableCaptionElement")}}
- {{DOMxRef("HTMLTableCellElement")}}
- {{DOMxRef("HTMLTableColElement")}}
- {{DOMxRef("HTMLTableElement")}}
- {{DOMxRef("HTMLTableRowElement")}}
- {{DOMxRef("HTMLTableSectionElement")}}
- {{DOMxRef("HTMLTemplateElement")}}
- {{DOMxRef("HTMLTextAreaElement")}}
- {{DOMxRef("HTMLTimeElement")}}
- {{DOMxRef("HTMLTitleElement")}}
- {{DOMxRef("HTMLTrackElement")}}
- {{DOMxRef("HTMLUListElement")}}
- {{DOMxRef("HTMLUnknownElement")}}
- {{DOMxRef("HTMLVideoElement")}}

#### 废弃的 HTML 元素接口

- {{DOMxRef("HTMLMarqueeElement")}} {{deprecated_inline}}

#### 过时的 HTML 元素接口

- {{DOMxRef("HTMLFontElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLFrameElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLFrameSetElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLIsIndexElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLMenuItemElement")}} {{deprecated_inline}}

### Web 应用程序和浏览器集成接口

这些接口提供了访问包含 HTML 的浏览器窗口和文档的方式，以及访问浏览器状态、可用插件（如果有）和各种配置选项的方式。

- {{DOMxRef("BarProp")}}
- {{DOMxRef("Navigator")}}
- {{DOMxRef("Window")}}

#### 废弃的 Web 应用程序和浏览器集成接口

- {{DOMxRef("External")}} {{deprecated_inline}}

#### 过时的 Web 应用程序和浏览器集成接口

- {{DOMxRef("ApplicationCache")}} {{deprecated_inline}}
- {{DOMxRef("Plugin")}} {{deprecated_inline}}
- {{DOMxRef("PluginArray")}} {{deprecated_inline}}

### 表单支持接口

这些接口提供了创建和管理表单所需的结构和功能，包括 {{HTMLElement("form")}} 和 {{HTMLElement("input")}} 元素。

- {{DOMxRef("FormDataEvent")}}
- {{DOMxRef("HTMLFormControlsCollection")}}
- {{DOMxRef("HTMLOptionsCollection")}}
- {{DOMxRef("RadioNodeList")}}
- {{DOMxRef("ValidityState")}}

### Canvas 和图像接口

这些接口代表了 Canvas API 以及 {{HTMLElement("img")}} 元素和 {{HTMLElement("picture")}} 元素使用的对象。

- {{DOMxRef("CanvasGradient")}}
- {{DOMxRef("CanvasPattern")}}
- {{DOMxRef("CanvasRenderingContext2D")}}
- {{DOMxRef("ImageBitmap")}}
- {{DOMxRef("ImageBitmapRenderingContext")}}
- {{DOMxRef("ImageData")}}
- {{DOMxRef("OffscreenCanvas")}}
- {{DOMxRef("OffscreenCanvasRenderingContext2D")}}
- {{DOMxRef("Path2D")}}
- {{DOMxRef("TextMetrics")}}

### 媒体接口

媒体接口提供对媒体元素（{{HTMLElement("audio")}} 和 {{HTMLElement("video")}}）内容的 HTML 访问。

- {{DOMxRef("AudioTrack")}}
- {{DOMxRef("AudioTrackList")}}
- {{DOMxRef("MediaError")}}
- {{DOMxRef("TextTrack")}}
- {{DOMxRef("TextTrackCue")}}
- {{DOMxRef("TextTrackCueList")}}
- {{DOMxRef("TextTrackList")}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TrackEvent")}}
- {{DOMxRef("VideoTrack")}}
- {{DOMxRef("VideoTrackList")}}

### 拖放接口

这些接口被 [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API) 用于表示单个或一组可拖动（或已拖动）元素，并处理拖放过程。

- {{DOMxRef("DataTransfer")}}
- {{DOMxRef("DataTransferItem")}}
- {{DOMxRef("DataTransferItemList")}}
- {{DOMxRef("DragEvent")}}

### 页面历史接口

History API 接口允许你访问有关浏览器历史记录的信息，并通过历史记录将浏览器的当前标签页向前或向后跳转。

- {{DOMxRef("BeforeUnloadEvent")}}
- {{DOMxRef("HashChangeEvent")}}
- {{DOMxRef("History")}}
- {{DOMxRef("Location")}}
- {{DOMxRef("PageTransitionEvent")}}
- {{DOMxRef("PopStateEvent")}}

### Web 组件接口

这些接口被 [Web 组件 API](/zh-CN/docs/Web/API/Web_components) 用于创建和管理可用的[自定义元素](/zh-CN/docs/Web/API/Web_components/Using_custom_elements)。

- {{DOMxRef("CustomElementRegistry")}}

### 杂项和支持接口

这些支持对象类型在 HTML DOM API 中以各种方式被使用。此外，{{domxref("PromiseRejectionEvent")}} 表示当 {{Glossary("JavaScript")}} {{jsxref("Promise")}} 被拒绝时传递的事件。

- {{DOMxRef("DOMStringList")}}
- {{DOMxRef("DOMStringMap")}}
- {{DOMxRef("ErrorEvent")}}
- {{DOMxRef("HTMLAllCollection")}}
- {{DOMxRef("MimeType")}}
- {{DOMxRef("MimeTypeArray")}}
- {{DOMxRef("PromiseRejectionEvent")}}

### 属于其他 API 的接口

有几个接口在 HTML 规范中在技术上被定义，但实际上是其他 API 的一部分。

#### Web Storage 接口

{{DOMxRef("Web_Storage_API", "Web Storage API", "", "1")}} 提供了网站在用户设备上临时或永久存储数据以便后续复用的能力。

- {{DOMxRef("Storage")}}
- {{DOMxRef("StorageEvent")}}

#### Web Worker 接口

这些接口被 {{DOMxRef("Web_Workers_API", "Web Worker API", "", "1")}} 用于建立 Worker 与应用及其内容交互的能力，同时也支持窗口或应用之间的消息传递。

- {{DOMxRef("BroadcastChannel")}}
- {{DOMxRef("DedicatedWorkerGlobalScope")}}
- {{DOMxRef("MessageChannel")}}
- {{DOMxRef("MessageEvent")}}
- {{DOMxRef("MessagePort")}}
- {{DOMxRef("SharedWorker")}}
- {{DOMxRef("SharedWorkerGlobalScope")}}
- {{DOMxRef("Worker")}}
- {{DOMxRef("WorkerGlobalScope")}}
- {{DOMxRef("WorkerLocation")}}
- {{DOMxRef("WorkerNavigator")}}

#### WebSocket 接口

这些接口由 HTML 规范定义，被 {{DOMxRef("WebSockets_API", "WebSocket API", "", "1")}} 使用。

- {{DOMxRef("CloseEvent")}}
- {{DOMxRef("WebSocket")}}

#### Server-sent 事件接口

{{domxref("EventSource")}} 接口表示发送或正在发送 {{DOMxRef("Server-sent_events", "server-sent 事件", "", "1")}}的源。

- {{DOMxRef("EventSource")}}

## 示例

在这个示例中，{{HTMLElement("input")}} 元素的 {{domxref("HTMLElement/input_event", "input")}} 事件被监听，以便根据给定字段当前是否有值，来更新表单“提交”按钮的状态。

### JavaScript

```js
const nameField = document.getElementById("userName");
const sendButton = document.getElementById("sendButton");

sendButton.disabled = true;
// [提示：这是被禁用的，因为它会导致文章始终加载此示例，并将其聚焦和滚动到视图中]
//nameField.focus();

nameField.addEventListener("input", (event) => {
  const elem = event.target;
  const valid = elem.value.length != 0;

  if (valid && sendButton.disabled) {
    sendButton.disabled = false;
  } else if (!valid && !sendButton.disabled) {
    sendButton.disabled = true;
  }
});
```

这段代码使用 {{domxref("Document")}} 接口的 {{domxref("Document.getElementById", "getElementById()")}} 方法，获取 ID 为 `userName` 和 `sendButton` 的 {{HTMLElement("input")}} 元素的 DOM 对象。通过这些对象，我们可以访问提供信息的属性和方法，并获得对这些元素的控制权。

“发送”按钮的 {{domxref("HTMLInputElement")}} 对象的 {{domxref("HTMLInputElement.disabled", "disabled")}} 属性被设置为 `true`，这将禁用“发送”按钮，使其无法点击。此外，通过调用继承自 {{domxref("HTMLElement")}} 的 {{domxref("HTMLElement/focus", "focus()")}} 方法，用户名输入字段成为活动焦点。

然后调用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 来为用户名输入添加一个 `input` 事件的处理器。这段代码检测当前输入值的长度；如果它是零，则禁用“发送”按钮（如果尚未禁用）。否则，该代码确保按钮已启用。

有了这个设置，只要用户名输入框中有值，“发送”按钮就会一直处于启用状态，当为空时则禁用。

### HTML

表单的 HTML 如下：

```html
<p>请提供以下信息。标有“*”的项目为必填项。</p>
<form action="" method="get">
  <p>
    <label for="userName" required>用户名：</label>
    <input type="text" id="userName" /> (*)
  </p>
  <p>
    <label for="email">邮箱：</label>
    <input type="email" id="userEmail" />
  </p>
  <input type="submit" value="发送" id="sendButton" />
</form>
```

### 结果

{{EmbedLiveSample("示例", 640, 300)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

### 参考

- [HTML 元素参考](/zh-CN/docs/Web/HTML/Element)
- [HTML 属性参考](/zh-CN/docs/Web/HTML/Attributes)
- {{DOMxRef("Document_Object_Model", "文档对象模型（DOM）", "", "1")}}参考

### 指南

- [操作文档](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)：操作 DOM 的入门指南。
