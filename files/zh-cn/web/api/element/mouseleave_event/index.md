---
title: 元素：mouseleave 事件
slug: Web/API/Element/mouseleave_event
---

{{APIRef}}

**`mouseleave`** 事件在定点设备（通常是鼠标）的指针移出某个{{domxref("Element", "元素", "", 1)}}时被触发。

`mouseleave` 和 {{domxref("Element/mouseout_event", "mouseout")}} 是相似的，但是两者的不同在于 `mouseleave` 不会冒泡而 `mouseout` 会冒泡。这意味着当指针离开元素*及*其所有后代时，会触发 `mouseleave`，而当指针离开元素*或*离开元素的后代（即使指针仍在元素内）时，会触发 `mouseout`。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("mouseleave", (event) => {});

onmouseleave = (event) => {};
```

## 事件类型

{{domxref("MouseEvent")}}，继承自 {{domxref("Event")}}。

{{InheritanceDiagram("MouseEvent")}}

## 事件属性

_此接口也从其父接口 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 继承属性。_

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : 在鼠标事件触发时，如果 <kbd>alt</kbd> 键被按下，则返回 `true`。
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : 在鼠标事件触发时，按下的按钮编号（如果适用）。
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : 在鼠标事件触发时，按下的按钮。
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : 鼠标指针在本地（DOM 内容）坐标系中的 X 坐标。
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : 鼠标指针在本地（DOM 内容）坐标系中的 Y 坐标。
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : 在鼠标事件触发时，如果 <kbd>control</kbd> 键被按下，则返回 `true`。
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 返回与事件相对于当前图层的水平坐标。
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 返回与事件相对于当前图层的垂直坐标。
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : 在鼠标事件触发时，如果 <kbd>meta</kbd> 键被按下，则返回 `true`。
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于上一次 {{domxref("Element/mousemove_event", "mousemove")}} 事件的 X 坐标。
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于上一次 {{domxref("Element/mousemove_event", "mousemove")}} 事件的 Y 坐标。
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于目标节点的内填充边的 X 坐标。
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于目标节点的内填充边的 Y 坐标。
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于整个文档的 X 坐标。
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于整个文档的 Y 坐标。
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : 事件的次要目标（如果适用）。
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : 鼠标指针在全局（屏幕）坐标系中的 X 坐标。
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : 鼠标指针在全局（屏幕）坐标系中的 Y 坐标。
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : 在鼠标事件触发时，如果 <kbd>shift</kbd> 键被按下，则返回 `true`。
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 产生该事件的设备类型（`MOZ_SOURCE_*` 常量之一）。例如，你可以确定鼠标事件是由实际的鼠标还是由触摸事件生成的（这可能会影响你判断与事件关联的坐标时的准确度）。
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 点击时施加的压力量。
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientX")}} 的别名。
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientY")}} 的别名。

### `mouseleave` 事件的行为

![mouseleave 的行为](mouseleave.png)

在指针离开层次结构时，`mouseleave` 事件将被发送到层次结构的每一个元素。当指针从文本（Text）移动到最外层的 div 之外的区域时，会有四个事件分别被发送到层次结构的四个元素。

### `mouseout` 事件的行为

![mouseout 的行为](mouseout.png)

单个 `mouseout` 事件被发送到 DOM 树中最深的元素，然后其在层次结构中逐层向上冒泡，直至其被事件处理器取消或到达根元素。

## 示例

[`mouseout`](/zh-CN/docs/Web/API/Element/mouseout_event#示例) 文档有一个示例，说明了 `mouseout` 和 `mouseleave` 之间的区别。

### mouseleave

以下示例使用 `mouseenter` 事件，在鼠标进入委派了该事件的 `<div>` 的空间时，改变该元素的边框。然后在列表中添加一条带有 `mouseenter` 和 `mouseleave` 事件编号的记录。

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>还没有事件！</li>
  </ul>
</div>
```

#### CSS

向 `<div>` 添加一些样式，使其更加可视化。

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
  addListItem(`这是 mouseenter 事件 ${enterEventCount}.`);
});

mouseTarget.addEventListener("mouseleave", (e) => {
  mouseTarget.style.border = "1px solid #333";
  leaveEventCount++;
  addListItem(`这是 mouseleave 事件 ${leaveEventCount}.`);
});

function addListItem(text) {
  // 使用提供的文本创建一个新的文本节点
  const newTextNode = document.createTextNode(text);

  // 创建一个新的 li 元素
  const newListItem = document.createElement("li");

  // 将文本节点添加到 li 元素中
  newListItem.appendChild(newTextNode);

  // 将新创建的列表元素添加到列表中
  unorderedList.appendChild(newListItem);
}
```

#### 结果

{{EmbedLiveSample('mouseleave')}}

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
