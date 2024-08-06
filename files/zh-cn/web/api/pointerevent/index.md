---
title: PointerEvent
slug: Web/API/PointerEvent
---

{{ APIRef("Pointer Events") }}

**PointerEvent** 接口代表了由 _指针_ 引发的 DOM 事件的状态，包括接触点的位置，引发事件的设备类型，接触表面受到的压力等。

_指针_ 是输入设备的硬件层抽象（比如鼠标，触摸笔，或触摸屏上的一个触摸点）_。指针 能指向一个具体表面（如屏幕）上的一个（或一组）坐标。_

指针的 _击中检测_ 指浏览器用来检测 指针事件的目标元素的过程。大多数情况下，这个目标元素是由 指针的位置和元素在文章中的位置和分层共同决定的。

## Constructors

- {{domxref("PointerEvent.PointerEvent", "PointerEvent()")}}
  - : 创建一个合成的且不可信的 PointerEvent。

## Properties

_该接口属性继承自 {{domxref("MouseEvent")}} 和 {{domxref("Event")}}._

- {{ domxref('PointerEvent.pointerId')}} {{readonlyInline}}
  - : 触发事件的 pointer 的唯一标识符。
- {{ domxref('PointerEvent.width')}} {{readonlyInline}}
  - : Pointer 的接触面的 CSS 像素宽度（X 轴上的大小）。
- {{ domxref('PointerEvent.height')}} {{readonlyInline}}
  - : Pointer 的接触面的 CSS 像素高度（Y 轴上的大小）。
- {{ domxref('PointerEvent.pressure')}} {{readonlyInline}}
  - : 归一化后的 pointer 压力值，范围在 \[0,1] 区间。其中 0 和 1 分别代表硬件能够检测的最小和最大压力。
- {{ domxref('PointerEvent.tangentialPressure')}} {{readonlyInline}}
  - : 归一化后的切向压力值（也称为桶压或[cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)），范围在 \[-1, 1] 区间，0 表示控制设备中立状态时的值。
- {{ domxref('PointerEvent.tiltX')}} {{readonlyInline}}
  - : 由输入设备（如手写笔）与 Y 轴构成的平面，和 Y-Z 平面之间的夹角（取值在 \[-90, 90] 区间）。
- {{ domxref('PointerEvent.tiltY')}} {{readonlyInline}}
  - : 由输入设备（如手写笔）与 X 轴构成的平面，和 X-Z 平面之间的夹角（取值在 \[-90, 90] 区间）。
- {{ domxref('PointerEvent.twist')}} {{readonlyInline}}
  - : 输入设备（如手写笔）围绕自身主轴顺时针旋转的角度，取值范围是 \[0, 359] 度。
- {{ domxref('PointerEvent.pointerType')}} {{readonlyInline}}
  - : 表示触发事件的设备类型（鼠标，触控笔，触摸板等）。
- {{ domxref('PointerEvent.isPrimary')}} {{readonlyInline}}
  - : 标识一个 pointer 是否是当前设备类型的主 pointer。

## Pointer event types

The `PointerEvent` interface has several event types. To determine which event fired, look at the event's {{ domxref("Event.type", "type") }} property.

> [!NOTE]
> It's important to note that in many cases, both pointer and mouse events get sent (in order to let non-pointer-specific code still interact with the user). If you use pointer events, you should call {{ domxref("event.preventDefault()") }} to keep the mouse event from being sent as well.

- {{domxref('Element/pointerover_event', 'pointerover')}}
  - : This event is fired when a pointing device is moved into an element's hit test boundaries.
- {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - : This event is fired when a pointing device is moved into the hit test boundaries of an element or one of its descendants, including as a result of a `pointerdown` event from a device that does not support hover (see `pointerdown`). This event type is similar to `pointerover`, but differs in that it does not bubble.
- {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - : The event is fired when a pointer becomes _active_. For mouse, it is fired when the device transitions from no buttons depressed to at least one button depressed. For touch, it is fired when physical contact is made with the digitizer. For pen, it is fired when the stylus makes physical contact with the digitizer.
- {{domxref('Element/pointermove_event', 'pointermove')}}
  - : This event is fired when a pointer changes coordinates.
- {{domxref('HTMLElement/pointerrawupdate_event', 'pointerrawupdate')}} {{Experimental_Inline}}
  - : This event is fired when any of a pointer's properties change.
- {{domxref('Element/pointerup_event', 'pointerup')}}
  - : This event is fired when a pointer is no longer _active_.
- {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - : A browser fires this event if it concludes the pointer will no longer be able to generate events (for example the related device is deactivated).
- {{domxref('Element/pointerout_event', 'pointerout')}}
  - : This event is fired for several reasons including: pointing device is moved out of the hit test boundaries of an element; firing the `pointerup` event for a device that does not support hover (see `pointerup`); after firing the `pointercancel` event (see `pointercancel`); when a pen stylus leaves the hover range detectable by the digitizer.
- {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - : This event is fired when a pointing device is moved out of the hit test boundaries of an element. For pen devices, this event is fired when the stylus leaves the hover range detectable by the digitizer.
- {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}
  - : This event is fired when an element receives pointer capture.
- {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}
  - : This event is fired after pointer capture is released for a pointer.

## 示例

An Example of each property, event type and global event handler is included in their respective reference page.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("Touch_events","Touch Events") }}
- {{ domxref("GestureEvent") }}
- {{ domxref("MSGestureEvent") }}
- {{cssxref("touch-action")}}
