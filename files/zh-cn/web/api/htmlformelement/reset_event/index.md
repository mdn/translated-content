---
title: reset
slug: Web/API/HTMLFormElement/reset_event
---

当表单被重置时触发`reset`事件。

## 综合信息

- Specification
  - : [HTML5](https://html.spec.whatwg.org/multipage/indices.html#event-reset)
- Interface
  - : {{domxref("Event")}}
- Bubbles
  - : 是（可以指定不发生冒泡的简单事件）
- Cancelable
  - : 是
- Target
  - : Element
- 默认行为
  - : 重置父表单元素所有的值。

## 属性

| Property                        | Type                       | Description                        |
| ------------------------------- | -------------------------- | ---------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | 事件的目标（DOM 树最顶端的元素）。 |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | 事件的类型。                       |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | 是否指定事件冒泡。                 |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | 事件是否可以被取消。               |

## 规范

{{Specifications}}
