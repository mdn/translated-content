---
title: Force Touch events
slug: Web/API/Force_Touch_events
---

{{DefaultAPISidebar("Force Touch events")}}

{{Non-standard_header()}}

**Force Touch events** are a proprietary, Apple-specific feature which makes possible (where supported by the input hardware) new interactions based on how hard the user clicks or presses down on the touchscreen or trackpad.

## Events

- {{event("webkitmouseforcewillbegin")}} {{non-standard_inline}}
  - : This event is fired before the {{event("mousedown")}} event. Its main use is that it can be {{domxref("Event.preventDefault()")}}ed.
- {{event("webkitmouseforcedown")}} {{non-standard_inline}}
  - : This event is fired after the {{event("mousedown")}} event as soon as sufficient pressure has been applied for it to qualify as a "force click".
- {{event("webkitmouseforceup")}} {{non-standard_inline}}
  - : This event is fired after the {{event("webkitmouseforcedown")}} event as soon as the pressure has been reduced sufficiently to end the "force click".
- {{event("webkitmouseforcechanged")}} {{non-standard_inline}}
  - : This event is fired each time the amount of pressure changes. This event first fires after the {{event("mousedown")}} event and stops firing before the {{event("mouseup")}} event.

## Event properties

The following property is known to be available on the {{event("webkitmouseforcewillbegin")}}, {{event("mousedown")}}, {{event("webkitmouseforcechanged")}}, {{event("webkitmouseforcedown")}}, {{event("webkitmouseforceup")}}, {{event("mousemove")}}, and {{event("mouseup")}} event objects:

- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{readonlyinline}}
  - : 当前施加于触控板/触摸屏的压力量

## 常量

这些常数对于确定由{{domxref("MouseEvent.webkitForce")}}指示的压力的相对强度是有用的：

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}} {{readonlyinline}}
  - : 正常点击所需的最小力量
- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}} {{readonlyinline}}
  - : 强制点击所需的最小力量

## 产品规格

*不是任何规格的一部分。*苹果[在 Mac 开发者图书馆](https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html)有[一个描述](https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html)。
