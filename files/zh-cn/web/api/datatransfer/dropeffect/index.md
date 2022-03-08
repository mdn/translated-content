---
title: DataTransfer.dropEffect
slug: Web/API/DataTransfer/dropEffect
tags:
  - API
  - HTML DOM
  - Property
  - Reference
  - drag and drop
translation_of: Web/API/DataTransfer/dropEffect
---
{{APIRef("HTML Drag and Drop API")}}

**`DataTransfer.dropEffect`** 属性控制在拖放操作中给用户的反馈（通常是视觉上的）。它会影响在拖拽过程中光标的手势。例如，当用户 hover 在一个放置目标元素上，浏览器的光标可能会预示了将会发生什么操作。

当 {{domxref("DataTransfer")}} 被创建时，`dropEffect` 被设置为一个字符串。读这个值时会返回它的当前值。设置这个值时，如果这个新的值是下面列出的值中的一个，这个属性的值就会被设置为这个新的值，其他的值都会被忽略。

对于 {{event("dragenter")}} 和 {{event("dragover")}} 事件，`dropEffect` 会根据用户的请求的行为进行初始化。具体如何初始化和浏览器平台有关，但是通常来讲，用户可以通过按住修改键，比如 alt 键来修改想要的行为。当我们期望得到一个指定的行为时而不是用户的请求行为时，可以通过 {{event("dragenter")}} 和 {{event("dragover")}} 事件处理修改 `dropEffect` 的值。

对于 {{event("drop")}} 和 {{event("dragend")}} 事件，`dropEffect` 会被设置为想要得到的值，即最后一次 {{event("dragenter")}} 或 {{event("dragover")}} 事件后 `dropEffect` 的值。例如，在一个 {{event("dragend")}} 事件中，如果期望得到的 dropEffect 是 “move”，那么被拖拽的数据会从源中移除。

## 语法

```js
dataTransfer.dropEffect;
```

### 值

一个代表拖动操作效果的 {{domxref("DOMString")}}，可能的值有：

- `copy`
  - : 在新位置生成源项的副本
- `move`
  - : 将项目移动到新位置
- `link`
  - : 在新位置建立源项目的链接
- `none`
  - : 项目可能禁止拖放（译者注：还与effectAllowed设置的值相关）

将任何其他值赋给 `dropEffect` 都没有效果，这种情况下会保留旧值。

## 示例

这个例子演示了 `dropEffect` 和 {{domxref("DataTransfer.effectAllowed","effectAllowed")}} 属性的用法

### HTML

```html
<div>
  <p id="source" ondragstart="dragstart_handler(event);" draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection to move the element.
  </p>
</div>
<div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
```

### CSS

```css
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
```

### JavaScript

```js
function dragstart_handler(ev) {
  console.log("dragStart: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function drop_handler(ev) {
  console.log("drop: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
  ev.preventDefault();

  // Get the id of the target and add the moved element to the target's DOM
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragover_handler(ev) {
  console.log("dragOver: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move"
}
```

{{EmbedLiveSample('示例', 300, 250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 拖放 API](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)
- [拖拽操作](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [推荐拖拽类型](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [拖拽和放置多个项目](/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
