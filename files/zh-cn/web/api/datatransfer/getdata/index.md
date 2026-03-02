---
title: DataTransfer：getData() 方法
short-title: getData()
slug: Web/API/DataTransfer/getData
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML DOM")}}

**`DataTransfer.getData()`** 方法查询指定类型的拖放数据（字符串形式）。如果拖放操作没有包含任何数据，此方法会返回一个空字符串。

数据类型示例包括 `text/plain` 和 `text/uri-list`。

## 语法

```js-nolint
getData(format)
```

### 参数

- `format`
  - : 表示要获取的数据类型的字符串。

### 返回值

表示指定 `format` 的拖放数据的字符串。如果拖放操作没有数据，或者指定 `format` 没有数据，则该方法返回一个空字符串。

需要注意，因为只允许在指定事件中读取和写入数据，`DataTransfer.getData()` 可能不会返回预期的值。在 `dragstart` 和 `drop` 事件期间，你可以安全地访问数据。在其他所有事件中，数据均应被视为不可用。尽管如此，你仍然可以枚举项目及其格式。

## 示例

下述示例展示了 {{domxref("DataTransfer")}} 对象的 `getData()` 和 {{domxref("DataTransfer.setData()","setData()")}} 方法。

### HTML

```html
<div id="div1">
  <span id="drag" draggable="true">将我拖动到另一个盒子中</span>
</div>
<div id="div2"></div>
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
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const dragElement = document.getElementById("drag");

dragElement.addEventListener("dragstart", drag);
div1.addEventListener("dragover", allowDrop);
div2.addEventListener("dragover", allowDrop);
div1.addEventListener("drop", drop);
div2.addEventListener("drop", drop);

function allowDrop(allowDropEvent) {
  allowDropEvent.target.style.color = "blue";
  allowDropEvent.preventDefault();
}

function drag(dragEvent) {
  dragEvent.dataTransfer.setData("text", dragEvent.target.id);
  dragEvent.target.style.color = "green";
}

function drop(dropEvent) {
  dropEvent.preventDefault();
  const data = dropEvent.dataTransfer.getData("text");
  dropEvent.target.appendChild(document.getElementById(data));
  dragElement.style.color = "black";
}
```

### 结果

{{ EmbedLiveSample('示例', 600) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [拖放](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖拽操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [使用拖拽数据存储](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
