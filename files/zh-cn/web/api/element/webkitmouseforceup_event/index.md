---
title: Element：webkitmouseforceup 事件
short-title: webkitmouseforceup
slug: Web/API/Element/webkitmouseforceup_event
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("Force Touch Events")}}{{Non-standard_header}}

非标准的 **`webkitmouseforceup`** 事件由 Safari 在 {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} 事件之后的一段时间、当按钮压力已充分减小而结束“强制点按”时于 {{domxref("Element")}} 上触发。

**`webkitmouseforceup`** 是 WebKit 特有的专有事件，属于 [Force Touch 事件](/zh-CN/docs/Web/API/Force_Touch_events)功能。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("webkitmouseforceup", (event) => { })

onwebkitmouseforceup = (event) => { }
```

## 事件类型

{{domxref("MouseEvent")}}，继承自 {{domxref("UIEvent")}} 和 {{domxref("Event")}}。

{{InheritanceDiagram("MouseEvent")}}

## 事件属性

_此接口也从其父接口 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 继承属性。_

- {{domxref("MouseEvent.altKey")}}、{{domxref("MouseEvent.ctrlKey")}}、{{domxref("MouseEvent.metaKey")}}、{{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : 事件触发时，相应修饰键是否处于按下状态。
- {{domxref("MouseEvent.button")}}、{{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : 触发事件时按下的按钮编号或按钮集合。
- {{domxref("MouseEvent.clientX")}}、{{domxref("MouseEvent.clientY")}}、{{domxref("MouseEvent.screenX")}}、{{domxref("MouseEvent.screenY")}}、{{domxref("MouseEvent.pageX")}}、{{domxref("MouseEvent.pageY")}}、{{domxref("MouseEvent.offsetX")}}、{{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : 鼠标指针在视口、屏幕、文档或目标节点内填充边相对位置中的坐标。
- {{domxref("MouseEvent.layerX")}}、{{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 事件相对于当前图层的水平或垂直坐标。
- {{domxref("MouseEvent.movementX")}}、{{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : 鼠标指针相对于上一次 {{domxref("Element/mousemove_event", "mousemove")}} 事件的位置。
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : 事件的次要目标（如果有）。
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 生成事件的设备类型（`MOZ_SOURCE_*` 常量之一）。
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : 单击时施加的压力量。
- {{domxref("MouseEvent.x")}}、{{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : 分别是 {{domxref("MouseEvent.clientX")}} 和 {{domxref("MouseEvent.clientY")}} 的别名。

## 规范

_不属于任何规范_。Apple 在 [Mac 开发库](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html)中提供了说明。

## 浏览器兼容性

{{Compat}}

## 参见

- [学习：事件介绍](/zh-CN/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}}
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}
