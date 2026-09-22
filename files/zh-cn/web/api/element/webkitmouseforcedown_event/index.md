---
title: Element：webkitmouseforcedown 事件
short-title: webkitmouseforcedown
slug: Web/API/Element/webkitmouseforcedown_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

元素收到 {{domxref("Element/mousedown_event", "mousedown")}} 事件后，如果鼠标或触控板按钮施加的压力达到“强制点击”的阈值，Safari 会开始向元素发送 **`webkitmouseforcedown`** 事件。

**`webkitmouseforcedown`** 是专属于 WebKit 的专有事件，属于 [Force Touch 事件](/zh-CN/docs/Web/API/Force_Touch_events)特性。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("webkitmouseforcedown", (event) => { })

onwebkitmouseforcedown = (event) => { }
```

## 事件类型

{{domxref("MouseEvent")}}。继承自 {{domxref("UIEvent")}} 和 {{domxref("Event")}}。

{{InheritanceDiagram("MouseEvent")}}

## 规范

_不属于任何规范_。Apple 在 [Mac 开发者库中提供了说明](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html)。

## 浏览器兼容性

{{Compat}}

## 参见

- [学习：事件介绍](/zh-CN/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}}
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}}
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}
