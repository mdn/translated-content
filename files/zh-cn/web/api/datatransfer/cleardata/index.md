---
title: DataTransfer：clearData() 方法
short-title: clearData()
slug: Web/API/DataTransfer/clearData
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.clearData()`** 方法删除给定类型拖拽操作的[拖拽数据](/zh-CN/docs/Web/API/DataTransfer)。如果给定类型的数据不存在，则此方法将不执行任何操作。

如果调用此方法时没有传入参数，或者参数为空字符串，则将删除所有类型的数据。

此方法*不会*从拖拽操作中删除文件，因此如果在拖拽文件，则可能会在 {{domxref("DataTransfer.types")}} 列表中存在类型为 `"Files"` 的条目。

> [!NOTE]
> 因为拖拽操作的数据存储只在 {{domxref("HTMLElement/dragstart_event", "dragstart")}} 的处理器中可写，你只能在此事件的处理器中调用此方法。

## 语法

```js-nolint
clearData()
clearData(format)
```

### 参数

- `format` {{optional_inline}}
  - : 指定要删除的数据类型的字符串。如果此参数为空字符串或未提供，则将删除所有类型的数据。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

这个例子显示了使用 {{domxref("DataTransfer")}} 对象的 {{domxref("DataTransfer.getData()","getData()")}}、{{domxref("DataTransfer.setData()","setData()")}} 以及 {{domxref("DataTransfer.clearData()","clearData()")}} 方法。

### HTML

```html
<span class="tweaked" id="source" draggable="true">
  选择该元素，拖拽它到放置区域，然后释放选择以移动该元素。
</span>
<span class="tweaked" id="target">放置区域</span>
<div>状态：<span id="status">开始拖拽</span></div>
<div>数据：<span id="data">未初始化</span></div>
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
// 选择 HTML 元素
const draggable = document.getElementById("source");
const droppable = document.getElementById("target");
const status = document.getElementById("status");
const data = document.getElementById("data");
let dropped = false;

// 注册事件处理器
draggable.addEventListener("dragstart", dragStartHandler);
draggable.addEventListener("dragend", dragEndHandler);
droppable.addEventListener("dragover", dragOverHandler);
droppable.addEventListener("dragleave", dragLeaveHandler);
droppable.addEventListener("drop", dropHandler);

function dragStartHandler(event) {
  status.textContent = "拖拽中";

  // 修改目标元素的边框以表示已开始拖拽
  event.currentTarget.style.border = "1px dashed blue";

  // 首先清除现有的剪贴板内容；这将影响所有类型，因为我们没有指定特定类型。

  event.dataTransfer.clearData();

  // 设置拖拽的格式和数据（使用事件目标的 id 作为数据）
  event.dataTransfer.setData("text/plain", event.target.id);

  data.textContent = event.dataTransfer.getData("text/plain");
}

function dragEndHandler(event) {
  if (!dropped) {
    status.textContent = "取消拖拽";
  }
  data.textContent = event.dataTransfer.getData("text/plain") || "空";
  // 修改边框以表示不再继续拖拽
  event.currentTarget.style.border = "1px solid black";
  if (dropped) {
    // 移除所有事件监听器
    draggable.removeEventListener("dragstart", dragStartHandler);
    draggable.removeEventListener("dragend", dragEndHandler);
    dropable.removeEventListener("dragover", dragOverHandler);
    dropable.removeEventListener("dragleave", dragLeaveHandler);
    dropable.removeEventListener("drop", dropHandler);
  }
}

function dragOverHandler(event) {
  status.textContent = "可放下";
  event.preventDefault();
}

function dragLeaveHandler(event) {
  status.textContent = "拖拽中（可释放）";
  event.preventDefault();
}

function dropHandler(event) {
  dropped = true;

  status.textContent = "已放下";

  event.preventDefault();

  // 获取与事件格式 « text » 关联的数据
  const _data = event.dataTransfer.getData("text/plain");
  const element = document.getElementById(_data);

  // 将拖拽源元素附加到事件的目标元素
  event.target.appendChild(element);

  // 更改 CSS 样式和显示的文本
  element.style.cssText = "border: 1px solid black;display: block; color: red";
  element.textContent = "我在可放下的区域内！";
}
```

{{EmbedLiveSample('示例', 300, 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖拽操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [使用拖拽数据存储](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
