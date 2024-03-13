---
title: DataTransfer.clearData()
slug: Web/API/DataTransfer/clearData
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.clearData()`** 方法删除给定类型的拖动操作的 {{domxref("DataTransfer","drag data")}}。如果给定类型的数据不存在，则此方法不执行任何操作。

如果调用此方法时没有传入参数，或者参数为空{{domxref("DOMString","字符串")}}，则将删除所有类型的数据。

此方法不会从拖动操作中删除文件，因此如果有任何文件包含在对象的 {{domxref("DataTransfer.types")}} 列表中，仍然可能有一个类型为“Files”的条目在拖动。

> **备注：** 该方法只能在 [`dragstart`](/zh-CN/docs/Web/API/HTMLElement/dragstart_event) 事件的处理程序中使用，因为这是拖动操作的数据存储唯一能写入的时间。

## 语法

```js
DataTransfer.clearData([format]);
```

### 参数

- `format` {{optional_inline}}
  - : 一个 {{domxref("DOMString","string")}} 指定要删除的数据类型。如果此参数为空字符串或未提供，则将删除所有类型的数据。

## 示例

这个例子显示了使用 {{domxref("DataTransfer")}} 对象的 {{domxref("DataTransfer.getData()","getData()")}}、{{domxref("DataTransfer.setData()","setData()")}} 以及 {{domxref("DataTransfer.clearData()","clearData()")}} 方法。

### HTML

```html
<span class="tweaked" id="source" draggable="true">
  Select this element, drag it to the Drop Zone and then release the selection
  to move the element.
</span>
<span class="tweaked" id="target">Drop Zone</span>
<div>Status: <span id="status">Drag to start</span></div>
<div>Data is: <span id="data">uninitialized</span></div>
```

### CSS

```css
span.tweaked {
  display: inline-block;
  margin: 1em 0;
  padding: 1em 2em;
}
#source {
  color: blue;
  border: 1px solid black;
}
#target {
  border: 1px solid black;
}
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", function () {
  // Select HTML elements
  var draggable = document.getElementById("source");
  var dropable = document.getElementById("target");
  var status = document.getElementById("status");
  var data = document.getElementById("data");
  var dropped = false;
  // Register event handlers
  draggable.addEventListener("dragstart", dragStartHandler);
  draggable.addEventListener("dragend", dragEndHandler);
  dropable.addEventListener("dragover", dragOverHandler);
  dropable.addEventListener("dragleave", dragLeaveHandler);
  dropable.addEventListener("drop", dropHandler);
  function dragStartHandler(event) {
    status.textContent = "Drag in process";
    // Change target element's border to signify drag has started
    event.currentTarget.style.border = "1px dashed blue";
    // Start by clearing existing clipboards; this will affect all types since we
    // don't give a specific type.
    event.dataTransfer.clearData();
    // Set the drag's format and data (use event target's id for data)
    event.dataTransfer.setData("text/plain", event.target.id);
    data.textContent = event.dataTransfer.getData("text/plain");
  }
  function dragEndHandler(event) {
    if (!dropped) {
      status.textContent = "Drag canceled";
    }
    data.textContent = event.dataTransfer.getData("text/plain") || "empty";
    // Change border to signify drag is no longer in process
    event.currentTarget.style.border = "1px solid black";
    if (dropped) {
      // Remove all event listeners
      draggable.removeEventListener("dragstart", dragStartHandler);
      draggable.removeEventListener("dragend", dragEndHandler);
      dropable.removeEventListener("dragover", dragOverHandler);
      dropable.removeEventListener("dragleave", dragLeaveHandler);
      dropable.removeEventListener("drop", dropHandler);
    }
  }
  function dragOverHandler(event) {
    status.textContent = "Drop available";
    event.preventDefault();
  }
  function dragLeaveHandler(event) {
    status.textContent = "Drag in process (drop was available)";
    event.preventDefault();
  }
  function dropHandler(event) {
    dropped = true;
    status.textContent = "Drop done";
    event.preventDefault();
    // Get data linked to event format « text »
    var _data = event.dataTransfer.getData("text/plain");
    var element = document.getElementById(_data);
    // Append drag source element to event's target element
    event.target.appendChild(element);
    // Change CSS styles and displayed text
    element.style.cssText =
      "border: 1px solid black;display: block; color: red";
    element.textContent = "I'm in the Drop Zone!";
  }
});
```

{{EmbedLiveSample('示例', 300, 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Drag and drop](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Recommended Drag Types](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
