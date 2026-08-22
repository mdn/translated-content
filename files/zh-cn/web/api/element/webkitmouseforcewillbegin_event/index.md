---
title: Element：webkitmouseforcewillbegin 事件
short-title: webkitmouseforcewillbegin
slug: Web/API/Element/webkitmouseforcewillbegin_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

非标准的 **`webkitmouseforcewillbegin`** 事件由 macOS 版 Safari 在初始 {{domxref("Element/mousedown_event", "mousedown")}} 事件之前于 {{domxref("Element")}} 上触发。

若点击随后变成 [Force Touch 事件](/zh-CN/docs/Web/API/Force_Touch_events)，可借此机会告知系统不要触发任何默认 Force Touch 操作。

如果用户施加足够压力激活 Force Touch 事件，为指示 macOS 不进行任何默认 Force Touch 操作，请对 `webkitmouseforcewillbegin` 事件对象调用 {{domxref("Event.preventDefault", "preventDefault()")}}。

**`webkitmouseforcewillbegin`** 是专属于 WebKit 的专有事件，属于 [Force Touch 事件](/zh-CN/docs/Web/API/Force_Touch_events)特性。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("webkitmouseforcewillbegin", (event) => { })

onwebkitmouseforcewillbegin = (event) => { }
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
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}}
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}
