---
title: focus
slug: Web/API/Element/focus_event
---
focus 事件在元素获取焦点时触发。这个事件和 [`focusin`](/zh-CN/docs/Mozilla_event_reference/focusin) 最大的区别仅仅在于后者会事件冒泡。

## 基本信息

- 规范
  - [: DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-focus)
- 接口
  - : {{ domxref("FocusEvent") }}
- 是否冒泡
  - : 否
- 能否取消默认
  - : 否
- 事件目标
  - : Element
- 默认行为
  - : 无。

> **备注：** 这里的接口是指 {{ domxref("Event") }} prior to Gecko 24 {{ geckoRelease(24) }}. ({{ bug(855741) }})

## 属性

| Property                                 | Type                                               | Description                                |
| ---------------------------------------- | -------------------------------------------------- | ------------------------------------------ |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}}               | Event target (DOM element)                 |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}                   | The type of event.                         |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}                       | Whether the event normally bubbles or not. |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}                       | Whether the event is cancellable or not.   |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} (DOM element) | null                                       |

## 事件委托

此事件有两个可以实现事件委托的方法 : 通过在支持的浏览器上使用 `focusin` 事件 (除了 Firefox 之外的所有浏览器), 或者通过设置 [`addEventListener`](/zh-CN/docs/DOM/element.addEventListener) 的参数"useCapture" 值为 true:

{{ EmbedLiveSample('Event_delegation', '', '', '', 'Web/Events/blur') }}

(Sample code from [blur (event)](/zh-CN/docs/Web/Events/blur))

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.Element.focus_event")}}

## 相关事件

- {{event("focus")}}
- {{event("blur")}}
- {{event("focusin")}}
- {{event("focusout")}}
