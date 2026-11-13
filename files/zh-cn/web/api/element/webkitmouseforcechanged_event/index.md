---
title: Element：webkitmouseforcechanged 事件
short-title: webkitmouseforcechanged
slug: Web/API/Element/webkitmouseforcechanged_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

非标准的 **`webkitmouseforcechanged`** 事件由 Safari 在触控板或触摸屏上的压力每次变化时触发。

**`webkitmouseforcechanged`** 是 Apple 为支持其 [Force Touch 事件](/zh-CN/docs/Web/API/Force_Touch_events)功能引入的专属于 WebKit 的专有事件。

该事件首次在 {{domxref("Element/mousedown_event", "mousedown")}} 事件之后触发，并在 {{domxref("Element/mouseup_event", "mouseup")}} 事件之前停止触发。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("webkitmouseforcechanged", (event) => { })

onwebkitmouseforcechanged = (event) => { }
```

## 事件类型

{{domxref("MouseEvent")}}，继承自 {{domxref("UIEvent")}} 和 {{domxref("Event")}}。

{{InheritanceDiagram("MouseEvent")}}

## 规范

_不属于任何规范_。Apple 在 [Mac 开发者库中提供了说明](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html)。

## 浏览器兼容性

{{Compat}}

## 参见

- [学习：事件介绍](/zh-CN/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}}
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}}
