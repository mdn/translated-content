---
title: Force Touch events
slug: Web/API/Force_Touch_events
---

{{DefaultAPISidebar("Force Touch events")}}

{{Non-standard_header()}}

**Force Touch events** are a proprietary, Apple-specific feature which makes possible (where supported by the input hardware) new interactions based on how hard the user clicks or presses down on the touchscreen or trackpad.

## 事件

- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}} {{non-standard_inline}}
  - : This event is fired before the {{domxref("Element/mousedown_event", "mousedown")}} event. Its main use is that it can be {{domxref("Event.preventDefault()")}}ed.
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} {{non-standard_inline}}
  - : This event is fired after the {{domxref("Element/mousedown_event", "mousedown")}} event as soon as sufficient pressure has been applied for it to qualify as a "force click".
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}} {{non-standard_inline}}
  - : This event is fired after the {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} event as soon as the pressure has been reduced sufficiently to end the "force click".
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}} {{non-standard_inline}}
  - : This event is fired each time the amount of pressure changes. This event first fires after the {{domxref("Element/mousedown_event", "mousedown")}} event and stops firing before the {{domxref("Element/mouseup_event", "mouseup")}} event.

## 事件属性

The following property is known to be available on the {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}}, {{domxref("Element/mousedown_event", "mousedown")}}, {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}, {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}, {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}}, {{domxref("Element/mousemove_event", "mousemove")}}, and {{domxref("Element/mouseup_event", "mouseup")}} event objects:

- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 当前施加于触控板/触摸屏的压力大小

## 常量

这些常数对于确定由 {{domxref("MouseEvent.webkitForce")}} 指示的压力的相对强度是有用的：

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}} {{readonlyinline}}
  - : 正常点击所需的最小力量
- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}} {{readonlyinline}}
  - : 强制点击所需的最小力量

## 规范

*不是任何规格的一部分。*苹果[在 Mac 开发者图书馆有一个描述](https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html)。
