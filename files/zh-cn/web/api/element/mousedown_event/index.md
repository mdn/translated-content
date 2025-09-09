---
title: Element：mousedown 事件
slug: Web/API/Element/mousedown_event
---

{{APIRef}}

**`mousedown`** 事件在定点设备（如鼠标或触摸板）按钮在{{domxref("Element", "元素", "", 1)}}内按下时，会在该元素上触发。

> [!NOTE]
> 其与 {{domxref("Element/click_event", "click")}} 事件的区别是，`click` 事件在完整的单击操作完成后触发；也就是说，`click` 事件在按下并释放鼠标按钮后并且指针仍在同一元素内时触发。`mousedown` 事件在按下鼠标按钮的那一刻触发。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("mousedown", (event) => {});

onmousedown = (event) => {};
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
  - : 触发鼠标事件时，按下的按钮（如果存在）。
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
  - : 生成事件的设备类型（`MOZ_SOURCE_*` 常量之一）。例如，这允许你决定鼠标事件是否由实际的鼠标还是触摸事件生成（这可能会在一定程度影响你对事件相关坐标判断的准确性）。
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 单击时施加的压力大小。
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientX")}} 的别名。
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : {{domxref("MouseEvent.clientY")}} 的别名。

## 示例

参见 [`mousemove` 事件](/zh-CN/docs/Web/API/Element/mousemove_event#示例)的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [事件介绍](/zh-CN/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
