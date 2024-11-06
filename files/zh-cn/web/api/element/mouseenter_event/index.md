---
title: Element：mouseenter 事件
slug: Web/API/Element/mouseenter_event
---

{{APIRef}}

**`mouseenter`** 事件在定点设备（通常指鼠标）首次移动到{{domxref("Element", "元素", "", 1)}}的激活区域内时，在该元素上触发。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("mouseenter", (event) => {});

onmouseenter = (event) => {};
```

## 事件类型

一个 {{domxref("MouseEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("MouseEvent")}}

## 事件属性

_这个接口也继承其父接口 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 的属性。_

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : 当鼠标事件被触发时，如果 <kbd>alt</kbd> 键已被按下，返回 `true`。
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : 触发鼠标事件时，按下按钮的编号（如果适用）。
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : 触发鼠标事件时按下的按钮（如果存在）。
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于局部 DOM 元素的 X 轴坐标。
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于局部 DOM 元素的 Y 轴坐标。
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : 当鼠标事件被触发时，如果 <kbd>control</kbd> 键已被按下，返回 `true`。
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 返回事件相对于当前层的水平坐标。
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 返回事件相对于当前层的垂直坐标。
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : 当鼠标事件被触发时，如果 <kbd>meta</kbd> 键已被按下，返回 `true`。
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于最后一次 {{domxref("Element/mousemove_event", "mousemove")}} 事件位置的 X 轴坐标。
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于最后一次 {{domxref("Element/mousemove_event", "mousemove")}} 事件位置的 Y 轴坐标。
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于目标节点的内填充边的 X 轴坐标。
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于目标节点的内填充边的 Y 轴坐标。
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于整个文档的 X 轴坐标。
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于整个文档的 Y 轴坐标。
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : 事件的次要目标（如果存在）。
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于屏幕的 X 轴坐标。
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于屏幕的 Y 轴坐标。
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : 当鼠标事件被触发时，如果 <kbd>shift</kbd> 键已被按下，返回 `true`。
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 生成事件的设备类型（`MOZ_SOURCE_*` 常量之一）。例如，这让你决定鼠标事件是否由实际的鼠标还是触摸事件生成（这可能会在一定程度影响你对事件相关坐标判断的准确性）。
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 单击时施加的压力。
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientX")}} 的别名。
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientY")}} 的别名。

## 使用说明

尽管与 {{domxref("Element/mouseover_event", "mouseover")}} 类似，但是 `mouseenter` 的不同之处在于当鼠标指针从它后代的物理空间移动到它自己的物理空间时，它不会[冒泡](/zh-CN/docs/Web/API/Event/bubbles)，也不会发送给它的任何后代。

### `mouseenter` 事件的行为

![鼠标移入行为图](mouseenter.png)
移入时，一个 `mouseenter` 事件会向层次结构中的每个元素发送一个鼠标输入事件。在这里，当指针到达文本时，四个事件被发送到层次结构中的四个元素。

### `mouseover` 事件的行为

![鼠标悬停行为图](mouseover.png)
单个 `mouseover` 事件被发送到 DOM 树最深的元素中，然后它会按层次结构冒泡，直到它被处理程序取消或者到达根元素。

由于层次结构很深，发送到 `mouseover` 事件可能相当多，并导致严重的性能问题。在这种情况下，最好是监听 `mouseenter` 事件。

结合相应的 `mouseleave`（当鼠标退出其内容区域时向元素触发），`mouseenter` 事件的作用与 CSS 伪类 {{cssxref(':hover')}} 非常相似。

## 示例

[`mouseover`](/zh-CN/docs/Web/API/Element/mouseover_event#示例) 文档有一个阐述了 `mouseover` 和 `mouseenter` 之间区别的示例。

### mouseenter

以下简单的示例展示了当鼠标进入分配给它的空间时，`mouseenter` 事件将改变 `div` 上的边框。然后它会将 `mouseenter` 或 `mouseleave` 事件触发次数的文本添加到列表中。

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

#### CSS

向 `div` 添加一些样式，使其更加可视化。

```css
#mouseTarget {
  box-sizing: border-box;
  width: 15rem;
  border: 1px solid #333;
}
```

#### JavaScript

```js
let enterEventCount = 0;
let leaveEventCount = 0;
const mouseTarget = document.getElementById("mouseTarget");
const unorderedList = document.getElementById("unorderedList");

mouseTarget.addEventListener("mouseenter", (e) => {
  mouseTarget.style.border = "5px dotted orange";
  enterEventCount++;
  addListItem(`This is mouseenter event ${enterEventCount}.`);
});

mouseTarget.addEventListener("mouseleave", (e) => {
  mouseTarget.style.border = "1px solid #333";
  leaveEventCount++;
  addListItem(`This is mouseleave event ${leaveEventCount}.`);
});

function addListItem(text) {
  // 使用提供的文本创建新的文本节点
  const newTextNode = document.createTextNode(text);

  // 创建一个新的 li 元素
  const newListItem = document.createElement("li");

  // 将文本节点添加到 li 元素
  newListItem.appendChild(newTextNode);

  // 将新创建的列表项添加到列表中
  unorderedList.appendChild(newListItem);
}
```

#### 结果

{{EmbedLiveSample('mouseenter')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [事件介绍](/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
