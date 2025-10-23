---
title: HTML 拖放 API
slug: Web/API/HTML_Drag_and_Drop_API
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

HTML 拖放介面能讓網頁應用程式於 Firefox 及其他瀏覽器中使用拖放功能。舉例來說，使用者可以利用此功能以滑鼠選擇*可拖曳（draggable）*元素，拖曳至一個*可放置（droppable）*元素上，並放開滑鼠按鍵來放置此元素。在拖曳操作時，一個半透明的*可拖曳（draggable）*元素會跟隨著滑鼠游標。

對於網站、擴充套件以及 XUL 應用程式來說，你可以自定義能成為*可拖曳（draggable）*的元素類型、*可拖曳（draggable）*元素產生的回鐀類型，以及*可放置（droppable）*的元素。

此文件為 HTML 拖放的概述，包含了相關介面的說明、在應用程式中加入拖放支援的基本步驟，以及相關介面使用簡介。

## 拖曳事件

HTML 拖放操作基於 {{domxref("Event","DOM 事件模型")}}並且使用繼承自{{domxref("MouseEvent","滑鼠事件")}}的*{{domxref("DragEvent","拖曳事件")}}*介面。一個典型的拖曳操作開始於使用者利用滑鼠選取了一個*可拖曳（draggable）*元素、移動滑鼠至一個*可放置（droppable）*元素並放開滑鼠按鍵。在操作的過程中，會觸發多種類型的事件，且一些事件類型可能會被觸發多次（如 [`drag`](/zh-TW/docs/Web/API/HTMLElement/drag_event) 及 [`dragover`](/zh-TW/docs/Web/API/HTMLElement/dragover_event) 事件類型）。

所有的[拖曳事件類型](/zh-TW/docs/Web/API/DragEvent#event_types)都有相關的[通用事件處理器](/zh-TW/docs/Web/API/DragEvent#globaleventhandlers)（global event handler）。每一種拖曳事件類型及拖曳通用事件處理器屬性都有說明此事件的參考文件。以下的表格提供了每一種事件的簡要說明，以及參考文件的連結。

| 事件                                                           | 事件處理器屬性                                               | 說明                                                                                                                                                               |
| -------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`drag`](/zh-TW/docs/Web/API/HTMLElement/drag_event)           | {{domxref('GlobalEventHandlers.ondrag','ondrag')}}           | 於一個元素或文字選取區塊被拖曳時觸發。                                                                                                                             |
| [`dragend`](/zh-TW/docs/Web/API/HTMLElement/dragend_event)     | {{domxref('GlobalEventHandlers.ondragend','ondragend')}}     | 於拖曳操作結束時觸發（如放開滑鼠按鍵或按下鍵盤的 escape 鍵）。（請參考[結束拖曳](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragend)。）           |
| [`dragenter`](/zh-TW/docs/Web/API/HTMLElement/dragenter_event) | {{domxref('GlobalEventHandlers.ondragenter','ondragenter')}} | 於一個元素或文字選取區塊被拖曳移動進入一個有效的放置目標時觸發。（請參考[指定拖曳目標](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets)。） |
| [`dragleave`](/zh-TW/docs/Web/API/HTMLElement/dragleave_event) | {{domxref('GlobalEventHandlers.ondragleave','ondragleave')}} | 於一個元素或文字選取區塊被拖曳移動離開一個有效的放置目標時觸發。                                                                                                   |
| [`dragover`](/zh-TW/docs/Web/API/HTMLElement/dragover_event)   | {{domxref('GlobalEventHandlers.ondragover','ondragover')}}   | 於一個元素或文字選取區塊被拖曳移動經過一個有效的放置目標時觸發（每幾百毫秒觸發一次）。                                                                             |
| [`dragstart`](/zh-TW/docs/Web/API/HTMLElement/dragstart_event) | {{domxref('GlobalEventHandlers.ondragstart','ondragstart')}} | 於使用者開始拖曳一個元素或文字選取區塊時觸發。（請參考[開始拖曳](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragstart)。）                         |
| [`drop`](/zh-TW/docs/Web/API/HTMLElement/drop_event)           | {{domxref('GlobalEventHandlers.ondrop','ondrop')}}           | 於一個元素或文字選取區塊被放置至一個有效的放置目標時觸發。（請參考[執行放置](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop)。）                  |

注意：`dragstart` 與 `dragend` 事件，在把檔案從作業系統拖放到瀏覽器時，並不會觸發。

## 介面

HTML 拖放介面有 {{domxref("DragEvent")}}、{{domxref("DataTransfer")}}、{{domxref("DataTransferItem")}} 以及 {{domxref("DataTransferItemList")}}。

{{domxref("DragEvent")}} 介面擁有一個建構式及一個屬性－{{domxref("DragEvent.dataTransfer","dataTransfer")}} 屬性為一個 {{domxref("DataTransfer")}} 物件。{{domxref("DataTransfer")}} 物件包含了拖放事件的狀態，如正在進行的拖放事件類型（例如 `copy` 或 `move`）、拖放中的資料（一或多個項目）以及每一個*拖放項目（drag item）*的檔案類型（MIME type）。{{domxref("DataTransfer")}} 物件也擁有加入及移除拖放資料項目的方法。{{domxref("DragEvent")}} 與 {{domxref("DataTransfer")}} 介面應該是唯一須要加至應用程式中的 HTML 拖放功能。另外，請留意 Firefox 支援了一些 [Gecko-specific 擴充](#gecko-specific_interfaces)予 {{domxref("DataTransfer")}} 物件使用，雖然這些擴充只能在 Firefox 上作用。

每個 {{domxref("DataTransfer")}} 物件都包含了 {{domxref("DataTransfer.items","items")}} 屬性。此屬性乃 {{domxref("DataTransferItem")}} 物件的 {{domxref("DataTransferItemList","list")}}。而每個 {{domxref("DataTransferItem")}} 物件，則代表著一個*拖放單元*，每個拖放單元則擁有代表該資料*種類*的 {{domxref("DataTransferItem.kind","kind")}} 屬性（`string` 或 `file`）、還有表示該單元檔案類型（如 MIME）的{{domxref("DataTransferItem.type","type")}} 屬性。另外，{{domxref("DataTransferItem")}} 物件能取得拖放單元的資料。

{{domxref("DataTransferItemList")}} 物件為 {{domxref("DataTransferItem")}} 的列表。該物件列表擁有以下方法：給列表增加拖放單元、從列表刪除拖放單元、還有清除列表內所有的拖放單元。

{{domxref("DataTransfer")}} 與 {{domxref("DataTransferItem")}} 介面的最大不同，就是前者使用同步的 {{domxref("DataTransfer.getData","getData()")}} 方法訪問拖放單元的資料；後者則使用非同步的 {{domxref("DataTransferItem.getAsString","getAsString()")}} 方法訪問。

注意：{{domxref("DragEvent")}} 與 {{domxref("DataTransfer")}} 介面受廣泛的桌面瀏覽器支援。但只有少數瀏覽器支援 {{domxref("DataTransferItem")}} 與 {{domxref("DataTransferItemList")}} 介面。請參見 [Interoperability](#interoperability) 以取得有關拖放功能互通性的資訊。

### Gecko-specific interfaces

Mozilla and Firefox support some features not in the standard drag and drop model. These are _convenience functions_ to facilitate dragging multiple items and dragging non-string data (such as files). For more information, see [Dragging and Dropping Multiple Items](/zh-TW/docs/DragDrop/Dragging_and_Dropping_Multiple_Items). Additionally, see the {{domxref("DataTransfer")}} reference page for all of the [Gecko-specific properties](/zh-TW/docs/Web/API/DataTransfer#Gecko_properties) and [Gecko-specific methods](/zh-TW/docs/Web/API/DataTransfer#Gecko_methods).

## 基本用法

This section provides a summary of the basic steps to add drag and drop functionality to an application. Each section includes a description of the step, a short code example, and links to additional information.

### Identify what is _draggable_

To make an element _draggable_ requires adding the [`draggable`](/zh-TW/docs/Web/HTML/Reference/Global_attributes#draggable) attribute plus the {{domxref("GlobalEventHandlers.ondragstart","ondragstart")}} global event handler, as shown in the following code sample

```js
function dragstart_handler(ev) {
  console.log("dragStart");
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("text/plain", ev.target.id);
}

<body>
  <p id="p1" draggable="true" ondragstart="dragstart_handler(event);">
    This element is draggable.
  </p>
</body>;
```

See the [draggable attribute reference](/zh-TW/docs/Web/HTML/Reference/Global_attributes/draggable) and the [Drag operations guide](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#draggableattribute) for more information.

### Define the drag's data

The application is free to include any number of data items in a drag operation. Each data item is a {{domxref("DOMString","string")}} of a particular `type`, typically a MIME type such as `text/html`.

Each {{domxref("DragEvent","drag event")}} has a {{domxref("DragEvent.dataTransfer","dataTransfer")}} property that _holds_ the event's data. This property (which is a {{domxref("DataTransfer")}} object) also has methods to _manage_ drag data. The {{domxref("DataTransfer.setData","setData()")}} method is used to add an item to the drag data, as shown in the following example.

```js
function dragstart_handler(ev) {
  // Add the drag data
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.setData("text/html", "<p>Example paragraph</p>");
  ev.dataTransfer.setData("text/uri-list", "http://developer.mozilla.org");
}
```

For a list of common data types used for drag and drop (such as text, HTML, links, and files), see [Recommended Drag Types](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types) and for more information about drag data, see [Drag Data](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragdata).

### Define the drag image

By default, the browser supplies an image that appears beside the mouse pointer during a drag operation. However, an application may define a custom image by using the {{domxref("DataTransfer.setDragImage","setDragImage()")}} method as shown in the following example.

```js
function dragstart_handler(ev) {
  // Create an image and then use it for the drag image.
  // NOTE: change "example.gif" to an existing image or the image
  // will not be created and the default drag image will be used.
  var img = new Image();
  img.src = "example.gif";
  ev.dataTransfer.setDragImage(img, 10, 10);
}
```

To learn more about drag feedback images, see [Setting the Drag Feedback Image](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragfeedback).

### Define the drag _effect_

The {{domxref("DataTransfer.dropEffect","dropEffect")}} property is used to control the feedback (typically visual) the user is given during a drag and drop operation. It affects which cursor the browser displays while dragging. For example, when the user hovers over a target drop element, the browser's cursor may indicate the type of operation that will occur.

Three effects may be defined:

`copy` indicates that the data being dragged will be copied from its present location to the drop location.

`move` indicates that the data being dragged will be moved

`link` indicates that some form of relationship or connection will be created between the source and drop locations.

During the drag operation, the drag effects may be modified to indicate that certain effects are allowed at certain locations. If allowed, a drop may occur at that location.

The following example shows how to use this property.

```js
function dragstart_handler(ev) {
  // Set the drag effect to copy
  ev.dataTransfer.dropEffect = "copy";
}
```

See [Drag Effects](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drageffects) for more details.

### Define a _drop zone_

By default, the browser prevents anything from happening when dropping something onto the HTML element. To change that behavior so that an element becomes a _drop zone_ or is _droppable_, the element must have both {{domxref("GlobalEventHandlers.ondragover","ondragover")}} and {{domxref("GlobalEventHandlers.ondrop","ondrop")}} event handler attributes. The following example shows how to use those attributes and includes basic event handlers for each attribute.

```js
function dragover_handler(ev) {
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
<body>
  <div
    id="target"
    ondrop="drop_handler(event);"
    ondragover="dragover_handler(event);">
    Drop Zone
  </div>
</body>;
```

Note each handler calls {{domxref("Event.preventDefault","preventDefault()")}} to prevent additional event processing for this prevent (such as touch events or pointer events).

For more information, see [Specifying Drop Targets](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets).

### Handle the drop _effect_

The handler for the [`drop`](/zh-TW/docs/Web/API/HTMLElement/drop_event) event is free to process the drag data in an application specific way. Typically, an application will use the {{domxref("DataTransfer.getData","getData()")}} method to retrieve drag items and process them accordingly. Additionally, application semantics may differ depending on the value of the {{domxref("DataTransfer.dropEffect","dropEffect")}} and/or the state of modifier keys.

The following example shows a drop handler getting the source element's id from the drag data and then using the id to move the source element to the drop element.

```js
function dragstart_handler(ev) {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dropEffect = "move";
}
function dragover_handler(ev) {
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
<body>
  <p id="p1" draggable="true" ondragstart="dragstart_handler(event);">
    This element is draggable.
  </p>
  <div
    id="target"
    ondrop="drop_handler(event);"
    ondragover="dragover_handler(event);">
    Drop Zone
  </div>
</body>;
```

For more information, see [Performing a Drop](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop).

### Drag end

At the end of a drag operation, the [`dragend`](/zh-TW/docs/Web/API/HTMLElement/dragend_event) event fires at the _source_ element - the element that was the target of the drag start. This event fires whether the drag completed or was canceled. The [`dragend`](/zh-TW/docs/Web/API/HTMLElement/dragend_event) event handler can check the value of the {{domxref("DataTransfer.dropEffect","dropEffect")}} property to determine if the drag operation succeeded or not.

For more information about handling the end of a drag operation, see [Finishing a Drag](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragend).

## Interoperability

As can be seen in the [DataTransferItem interface's Browser Compatibility table](/zh-TW/docs/Web/API/DataTransferItem#Browser_compatibility), drag-and-drop interoperability is relatively broad among desktop browsers (except the {{domxref("DataTransferItem")}} and {{domxref("DataTransferItemList")}} interfaces have less support). This data also indicates drag and drop support among mobile browsers is very low.

## Examples and demos

- [Copying and moving elements with the `DataTransfer` interface](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Copying and moving elements with the `DataTransferListItem` interface](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- Dragging and dropping files; Firefox only: <https://jsfiddle.net/9C2EF/>
- Dragging and dropping files; All browsers: [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)
- A parking project using the Drag and Drop API: <https://park.glitch.me/> (You can edit [here](https://glitch.com/edit/#!/park))

## 規範

{{Specifications}}

## 參見

- [Drag Operations](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Dragging and Dropping Multiple Items](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [Recommended Drag Types](/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag and Drop interoperability data from CanIUse](https://caniuse.com/#search=draganddrop)
