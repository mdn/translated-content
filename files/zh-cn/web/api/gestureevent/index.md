---
title: GestureEvent
slug: Web/API/GestureEvent
---

{{APIRef("UI Events")}}{{Non-standard_header}}

**`GestureEvent`** 是 WebKit 的专有接口，提供多点触控的信息。这个接口的事件包括 {{domxref("Element/gesturestart_event", "gesturestart")}}、{{domxref("Element/gesturechange_event", "gesturechange")}} 和 {{domxref("Element/gestureend_event", "gestureend")}}.

`GestureEvent` 继承自 {{domxref("UIEvent")}}，后者又继承自 {{domxref("Event")}}。

## 构造函数

- {{domxref("GestureEvent.GestureEvent", "GestureEvent()")}}
  - : Creates a `GestureEvent` object.

## 属性

_This interface also inherits properties of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("GestureEvent.rotation")}} {{readonlyinline}}
  - : Change in rotation (in degrees) since the event's beginning. Positive values indicate clockwise rotation; negative values indicate anticlockwise rotation. Initial value: `0.0`
- {{domxref("GestureEvent.scale")}} {{readonlyinline}}
  - : Distance between two digits since the event's beginning. Expressed as a floating-point multiple of the initial distance between the digits at the beginning of the gesture. Values below 1.0 indicate an inward pinch (zoom out). Values above 1.0 indicate an outward unpinch (zoom in). Initial value: `1.0`

## 方法

_This interface also inherits methods of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("GestureEvent.initGestureEvent()")}}
  - : Initializes the value of an `GestureEvent`. If the event has already being dispatched, this method does nothing.

## 手势事件类型

- {{domxref("Element/gesturestart_event", "gesturestart")}}
- {{domxref("Element/gesturechange_event", "gesturechange")}}
- {{domxref("Element/gestureend_event", "gestureend")}}

## 规范

_不属于任何规范_。苹果在 [Safari Developer Library 中描述了这个接口](https://developer.apple.com/library/iad/documentation/UserExperience/Reference/GestureEventClassReference/index.html)。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MSGestureEvent")}}
- {{domxref("Element/MSGestureStart_event", "MSGestureStart")}}
- {{domxref("Element/MSGestureEnd_event", "MSGestureEnd")}}
- {{domxref("Element/MSGestureTap_event", "MSGestureTap")}}
- {{domxref("Element/MSGestureHold_event", "MSGestureHold")}}
- {{domxref("Element/MSGestureChange_event", "MSGestureChange")}}
- {{domxref("Element/MSInertiaStart_event", "MSInertiaStart")}}
