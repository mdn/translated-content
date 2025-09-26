---
title: Touch
slug: Web/API/Touch
---

{{ ApiRef("Touch Events") }}

**`Touch`** 对象表示在触控设备上的触摸点。通常是指手指或者触控笔在触屏设备或者触摸板上的操作。

对象属性 {{ domxref("Touch.radiusX") }}, {{ domxref("Touch.radiusY") }}, 和 {{ domxref("Touch.rotationAngle") }} 表示用户触摸操作所作用的区域，即*触摸区域*。这些属性对于处理类似于手指触摸之类的不精确操作很有帮助。这些属性可以表示出一个尽可能匹配触控区域的椭圆形（例如用户的指尖触控）。 {{experimental_inline}}

> [!NOTE]
> 以下很多属性的值需要依赖硬件设备去获取，例如，如果设备本身不支持侦测压感，那么 `force` 属性的值将始终是 0，对于 `radiusX` 和 `radiusY` 来说同样可能有这种情况，如果设备认为触点只是一个点而不是一个面，它们始终为 1。

## 构造函数

- {{domxref("Touch.Touch", "Touch()")}} {{experimental_inline}}
  - : 创建一个 Touch 对象。

## 属性

_这个接口没有父类，不继承任何属性。_

### 基本属性

- {{ domxref("Touch.identifier") }}{{readonlyInline}}
  - : 此 `Touch` 对象的唯一标识符。一次触摸动作 (例如手指触摸) 在平面上移动的整个过程中，该标识符不变。可以根据它来判断跟踪的是否是同一次触摸过程。
- **{{ domxref("Touch.screenX") }}**{{readonlyInline}}
  - : 触点相对于屏幕左边缘的 X 坐标。
- **{{ domxref("Touch.screenY") }}**{{readonlyInline}}
  - : 触点相对于屏幕上边缘的 Y 坐标。
- **{{ domxref("Touch.clientX") }}**{{readonlyInline}}
  - : 触点相对于可见视区 ([visual viewport](https://www.quirksmode.org/mobile/viewports2.html)) 左边缘的 X 坐标。不包括任何滚动偏移。
- **{{ domxref("Touch.clientY") }}**{{readonlyInline}}
  - : 触点相对于可见视区 ([visual viewport](https://www.quirksmode.org/mobile/viewports2.html)) 上边缘的 Y 坐标。不包括任何滚动偏移。
- {{ domxref("Touch.pageX") }}{{readonlyInline}}
  - : 触点相对于 HTML 文档左边缘的 X 坐标。当存在水平滚动的偏移时，这个值包含了水平滚动的偏移。
- {{ domxref("Touch.pageY") }}{{readonlyInline}}
  - : 触点相对于 HTML 文档上边缘的 Y 坐标。当存在垂直滚动的偏移时，这个值包含了垂直滚动的偏移。
- {{ domxref("Touch.target") }}{{readonlyInline}}
  - : 返回触摸点最初接触的 {{ domxref("Element")}}，即使这个触摸点已经移出那个元素的交互区域。需要注意的是，如果这个元素在触摸过程中被移除，这个事件仍然会指向它，因此这个事件也不会冒泡到 `window` 或 `document` 对象。因此，如果有元素在触摸过程中可能被移除，最佳实践是将触摸事件的监听器绑定到这个元素本身，防止元素被移除后，无法再从它的上一级元素上侦测到从该元素冒泡的事件。

### 触摸区域

{{SeeCompatTable}}

- {{ domxref("Touch.radiusX") }}{{readonlyInline}}{{experimental_inline}}
  - : 返回能够包围接触区域的最小椭圆的水平轴 (X 轴) 半径。这个值的单位和 `screenX` 相同**。**
- {{ domxref("Touch.radiusY") }}{{readonlyInline}}{{experimental_inline}}
  - : 返回能够包围接触区域的最小椭圆的垂直轴 (Y 轴) 半径。这个值的单位和 `screenY` 相同。
- {{ domxref("Touch.rotationAngle") }}{{readonlyInline}}{{experimental_inline}}
  - : 返回一个角度值，表示上述由`radiusX` 和 `radiusY` 描述的椭圆为了尽可能精确地覆盖用户与平面之间的接触区域而需要顺时针旋转的角度。
- {{ domxref("Touch.force") }}{{readonlyInline}}{{experimental_inline}}
  - : 返回用户对触摸平面的压力大小，是一个从 0.0(没有压力) 到 1.0(最大压力) 的浮点数。

## Methods

_这个接口没有方法，也没有父类，不继承任何方法。_

## 示例

请看 [example on the main Touch events article](/zh-CN/docs/Web/API/Touch_events#example)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Touch events](/zh-CN/docs/Web/API/Touch_events)
- {{domxref("Touch_events","Touch Events Overview")}}
- {{ domxref("Document.createTouch()") }}
- {{ domxref("Touch") }}
- {{ domxref("TouchList") }}
- {{ domxref("TouchEvent") }}
