---
title: InputEvent
slug: Web/API/InputEvent
---

{{APIRef("DOM Events")}}

{{SeeCompatTable}}<

**`InputEvent`** 接口用来构造和字符输入相关的事件对象。

## 构造函数

- {{domxref("InputEvent.InputEvent", "InputEvent()")}}
  - : 创建一个 `InputEvent` 对象。

## 属性

除继承自 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 接口的属性外，还有以下属性：

- {{domxref("InputEvent.data")}} {{readOnlyInline}}
  - : 返回当前输入的字符串，如果是删除操作，则该值为空字符串。
- {{domxref("InputEvent.isComposing")}}{{readOnlyInline}}
  - : 返回一个布尔值，表明该事件是在触发 [`compositionstart`](/zh-CN/docs/Web/API/Element/compositionstart_event) 事件之后且触发 [`compositionend`](/zh-CN/docs/Web/API/Element/compositionend_event) 事件之前触发的，也就是表明当前输入的字符是输入法的中途输入。

## 方法

除继承自 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 接口的方法外，没有其他自身方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`beforeinput` 事件](/zh-CN/docs/Web/API/HTMLElement/beforeinput_event)
- [`input` 事件](/zh-CN/docs/Web/API/HTMLElement/input_event)
