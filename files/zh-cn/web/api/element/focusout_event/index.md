---
title: focusout
slug: Web/API/Element/focusout_event
---

当元素即将失去焦点时，focusout 事件被触发。focusout 事件和 [blur](/zh-CN/docs/Web/Events/blur) 事件之间的主要区别在于后者不会冒泡。

## 基本信息

- Specification
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusout)
- Interface
  - : {{domxref("FocusEvent")}}
- Bubbles
  - : Yes
- Cancelable
  - : No
- Target
  - : Element
- Default Action
  - : None.

## 属性

| Property                           | Type                                     | Description                                |
| ---------------------------------- | ---------------------------------------- | ------------------------------------------ |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}}               | Event target losing focus.                 |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}                 | The type of event.                         |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}                    | Whether the event normally bubbles or not. |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}                    | Whether the event is cancellable or not.   |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} (DOM element) | Event target receiving focus.              |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关事件

- [`focus`](/zh-CN/docs/Web/API/Element/focus_event)
- [`blur`](/zh-CN/docs/Web/API/Element/blur_event)
- [`focusin`](/zh-CN/docs/Web/API/Element/focusin_event)
- [`focusout`](/zh-CN/docs/Web/API/Element/focusout_event)
