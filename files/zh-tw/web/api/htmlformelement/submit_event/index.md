---
title: submit
slug: Web/API/HTMLFormElement/submit_event
---

{{APIRef}}

`submit` 事件會在表單送出時觸發。

要注意的是，`submit` 事件**只會**在 [form element](/zh-TW/docs/Web/HTML/Element/form) 上觸發， [button](/zh-TW/docs/Web/HTML/Element/button) 或是 [submit input](/zh-TW/docs/Web/HTML/Element/input) 則不會觸發。（送出的是「表單」，而非「按鈕」）

## 基本資料

- 定義規範
  - : [HTML5](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-algorithm)
- Interface
  - : {{domxref("Event")}}
- Bubbles
  - : 是
    雖說在規範上這是個不 bubble 的事件
- Cancelable
  - : 是
- Target
  - : Element
- 默認行動
  - : 修改（傳送表單內容至伺服器）。

## 屬性

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |

## 規範

{{Specifications}}
