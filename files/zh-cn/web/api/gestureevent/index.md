---
title: GestureEvent
slug: Web/API/GestureEvent
---

{{APIRef("DOM Events")}}

{{Non-standard_header()}}

**`GestureEvent`** 是 WebKit 的专有接口，提供多点触控的信息。这个接口的事件包括 {{event("gesturestart")}}, {{event("gesturechange")}} 和 {{event("gestureend")}}.

`GestureEvent` 继承自 {{domxref("UIEvent")}}，后者又继承自{{domxref("Event")}}。

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

- {{event("gesturestart")}}
- {{event("gesturechange")}}
- {{event("gestureend")}}

## 规范

_不属于任何规范。苹果在[Safari Developer Library](https://developer.apple.com/library/iad/documentation/UserExperience/Reference/GestureEventClassReference/index.html)中描述了这个接口。_

## Browser compatibility

{{Compat}}

## 参见

- {{domxref("MSGestureEvent")}}
- {{event("MSGestureStart")}}
- {{event("MSGestureEnd")}}
- {{event("MSGestureTap")}}
- {{event("MSGestureHold")}}
- {{event("MSGestureChange")}}
- {{event("MSInertiaStart")}}
