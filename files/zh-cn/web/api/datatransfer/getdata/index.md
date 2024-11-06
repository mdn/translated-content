---
title: DataTransfer.getData()
slug: Web/API/DataTransfer/getData
---

{{APIRef("HTML DOM")}}

**`DataTransfer.getData()`** 方法接受指定类型的拖放（以{{domxref("DOMString")}}的形式）数据。如果拖放行为没有操作任何数据，会返回一个空字符串。

数据类型有：`text/plain`，`text/uri-list`。

## 语法

```plain
DOMString dataTransfer.getData(format);
```

### 参数

- _format_
  - : {{domxref("DOMString")}}类型

### 返回值

- {{domxref("DOMString")}}
  - : 返回一个给定类型的{{domxref("DOMString")}}格式的数据。如果没有操作数据或者没有指定操作数据的类型，都会返回一个空字符串。

### 注意

[HTML5 拖放规范](https://www.w3.org/TR/2011/WD-html5-20110113/dnd.html#drag-data-store-mode) 规定了一个 `drag data store mode`。这可能会导致预期外的结果，即 **`DataTransfer.getData()`** 没有返回预期值。

## 示例

这个例子展示了 {{domxref("DataTransfer")}}对象的{{domxref("DataTransfer.getData()","getData()")}}和{{domxref("DataTransfer.setData()","setData()")}}方法。

### HTML

```html
<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
  <span id="drag" draggable="true" ondragstart="drag(event)"
    >drag me to the other box</span
  >
</div>
<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
```

### CSS

```css
#div1,
#div2 {
  width: 100px;
  height: 50px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
```

### JavaScript

```js
function allowDrop(allowdropevent) {
  allowdropevent.target.style.color = "blue";
  allowdropevent.preventDefault();
}

function drag(dragevent) {
  dragevent.dataTransfer.setData("text", dragevent.target.id);
  dragevent.target.style.color = "green";
}

function drop(dropevent) {
  dropevent.preventDefault();
  var data = dropevent.dataTransfer.getData("text");
  dropevent.target.appendChild(document.getElementById(data));
  document.getElementById("drag").style.color = "black";
}
```

### 结果

{{ EmbedLiveSample('示例', 600) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖拽操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推荐的拖拽类型](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer 测试——粘贴或拖拽](https://codepen.io/tech_query/pen/MqGgap)
