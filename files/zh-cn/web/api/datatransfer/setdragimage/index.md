---
title: DataTransfer.setDragImage()
slug: Web/API/DataTransfer/setDragImage
---

{{APIRef("HTML Drag and Drop API")}}

发生拖动时，从拖动目标 ([`dragstart`](/zh-CN/docs/Web/API/HTMLElement/dragstart_event)事件触发的元素) 生成半透明图像，并在拖动过程中跟随鼠标指针。这个图片是自动创建的，你不需要自己去创建它。然而，如果想要设置为自定义图像，那么 **`DataTransfer.setDragImage()`** 方法就能派上用场。

图像通常是一个 {{HTMLElement("image")}} 元素，但也可以是{{HTMLElement("canvas")}} 或任何其他图像元素。该方法的 x 和 y 坐标是图像应该相对于鼠标指针出现的偏移量。

坐标指定鼠标指针相对于图片的偏移量。例如，要使图像居中，请使用图像宽度和高度的一半。

通常在 [`dragstart`](/zh-CN/docs/Web/API/HTMLElement/dragstart_event) 事件处理程序中调用此方法。

## 语法

```js-nolint
setDragImage(imgElement, xOffset, yOffset)
```

### 参数

- _img |_ Element
  - : 用于拖曳反馈图像的图像 {{domxref("Element")}} 元素。

如果 Element 是一个 img 元素，则将拖动位图设置为该元素的图像（保持大小）；否则，将拖动数位图设置为从给定元素所生成的图片（[当前尚未指定执行此操作的确切机制](https://html.spec.whatwg.org/multipage/dnd.html#the-datatransfer-interface)）

- _xOffset_
  - : 使用 `long` 指示相对于图片的横向偏移量
- _yOffset_
  - : 使用 `long` 指示相对于图片的纵向偏移量

### 返回值

无

## 示例

这个例子展示如何使用 `setDragImage()` 方法。请注意，此例子引用了命名为 `example.gif` 的图片文件。如果此文件存在，它将被用作拖动图像，如果此文件不存在，浏览器会使用其默认的拖动图像。

```js
<!DOCTYPE html>
<html lang=en>
<title>Example of DataTransfer.setDragImage()</title>
<meta name="viewport" content="width=device-width">
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #source {
    color: blue;
    border: 1px solid black;
  }
  #target {
    border: 1px solid black;
  }
</style>
<script>
function dragstart_handler(ev) {
 console.log("dragStart");
 // 设置拖动的格式和数据。使用事件目标的 id 作为数据
 ev.dataTransfer.setData("text/plain", ev.target.id);
 // 创建一个图像并且使用它作为拖动图像
 // 请注意：改变 "example.gif" 为一个已经存在的图片
 // 或者，一个还没有创建出来的图片，那么浏览器将会使用默认的拖动图片
 // 译者注：默认的拖动图片与拖动对象没有联系。一般是一个小型文件图标
 var img = new Image();
 img.src = 'example.gif';
 ev.dataTransfer.setDragImage(img, 10, 10);
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
}

function drop_handler(ev) {
 console.log("Drop");
 ev.preventDefault();
 // 获取拖放目标的 id 数据
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
}
</script>
<body>
<h1>Example of <code>DataTransfer.setDragImage()</code></h1>
 <div>
   <p id="source" ondragstart="dragstart_handler(event);" draggable="true">
     Select this element, drag it to the Drop Zone and then release the selection to move the element.</p>
 </div>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
</body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖拽操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [使用拖拽数据存储](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
- [DataTransfer 测试——粘贴或拖拽](https://codepen.io/tech_query/pen/MqGgap)
