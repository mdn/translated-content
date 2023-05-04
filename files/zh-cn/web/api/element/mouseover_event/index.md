---
title: 元素：mouseover 事件
slug: Web/API/Element/mouseover_event
---

{{APIRef}}

当一个定点设备（通常指鼠标）在该元素本身或者其子元素上移动时，**`mouseover`** 事件在该 {{domxref("Element")}} 中触发。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("mouseover", (event) => {});

onmouseover = (event) => {};
```

## 事件类型

一个 {{domxref("MouseEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("MouseEvent")}}

## 事件属性

_这个接口也继承其父 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 的属性。_

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : 当鼠标事件被触发时，如果按着 <kbd>alt</kbd> 键，返回 `true`。
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : 触发鼠标事件时，按下按钮的编号。
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : 触发鼠标事件时按下的按钮（如果有的话）。
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于局部 DOM 元素的 X 轴坐标。
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于局部 DOM 元素的 Y 轴坐标。
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : 当鼠标事件被触发时，如果按着 <kbd>control</kbd> 键，返回 `true`。
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 返回事件相对于当前层的水平坐标。
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 返回事件相对于当前层的垂直坐标。
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : 当鼠标事件被触发时，如果按着 <kbd>meta</kbd> 键，返回 `true`。
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
  - : 事件的次要目标（如果有的话）。
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于屏幕的 X 轴坐标。
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于屏幕的 Y 轴坐标。
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : 当鼠标事件被触发时，如果按着 <kbd>shift</kbd> 键，返回 `true`。
- {{domxref("MouseEvent.mozPressure")}} {{non-standard_inline()}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : 产生事件时施加到触摸或平板电脑设备的压力量；该值在 0.0（最小压力）和 1.0（最大压力）之间。你应该使用 {{domxref("PointerEvent")}} 并查看 {{domxref("PointerEvent.pressure", "pressure")}} 属性，而不是使用此废弃的（和非标准）属性。
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 生成事件的设备类型（`MOZ_SOURCE_*` 常量之一）。例如，这让你决定鼠标事件是否由实际的鼠标还是触摸事件生成（这可能会在一定程度影响你对事件相关坐标判断的准确性）。
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 单击时施加的压力。
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientX")}} 的别名。
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientY")}} 的别名。

## 示例

以下的示例阐述了 `mouseover` 和 {{domxref("Element/mouseenter_event", "mouseenter")}} 之间的区别。

### HTML

```html
<ul id="test">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

### JavaScript

```js
const test = document.getElementById("test");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener(
  "mouseenter",
  (event) => {
    // highlight the mouseenter target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false
);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener(
  "mouseover",
  (event) => {
    // highlight the mouseover target
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false
);
```

### 结果

{{EmbedLiveSample('Examples')}}

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

