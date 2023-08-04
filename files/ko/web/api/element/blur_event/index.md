---
title: blur
slug: Web/API/Element/blur_event
---

`blur` 이벤트는 엘리먼트의 포커스가 해제되었을때 발생합니다. 이 이벤트와 [`focusout`](/ko/docs/Mozilla_event_reference/focusout) 이벤트의 가장 다른점은 [`focusout`](/ko/docs/Mozilla_event_reference/focusout) 은 이벤트 버블링이 발생합니다.

## General info

- Specification
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-blur)
- Interface
  - : {{domxref("FocusEvent")}}
- Bubbles
  - : No
- Cancelable
  - : No
- Target
  - : Element
- Default Action
  - : None.

> **Note:** 이 이벤트가 처리될때 {{domxref("Document.activeElement")}}의 값이 브라우저마다 다릅니다 ([Firefox bug 452307](https://bugzil.la/452307)): IE10은 이 값을 포커스가 옮겨가는 엘리먼트에 추가하지만, 파이어폭스와 크롬은 도큐먼트의 `body` 에 추가합니다.

## Properties

| Property                           | Type                                     | Description                                |
| ---------------------------------- | ---------------------------------------- | ------------------------------------------ |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}}               | Event target (DOM element)                 |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}                 | The type of event.                         |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}                    | Whether the event normally bubbles or not. |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}                    | Whether the event is cancellable or not.   |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} (DOM element) | null                                       |

## 이벤트 위임

이 이벤트에 이벤트 위임을 적용하는 방법은 두가지가 있습니다 : 브라우저가 지원한다면 `focusout` 이벤트를 사용하거나, [`addEventListener`](/ko/docs/DOM/element.addEventListener)의 "useCapture" 파라미터를 `true`로 설정하세요:

### HTML Content

```html
<form id="form">
  <input type="text" placeholder="text input" />
  <input type="password" placeholder="password" />
</form>
```

### JavaScript Content

```js
var form = document.getElementById("form");
form.addEventListener(
  "focus",
  function (event) {
    event.target.style.background = "pink";
  },
  true,
);
form.addEventListener(
  "blur",
  function (event) {
    event.target.style.background = "";
  },
  true,
);
```

#### 결과

{{EmbedLiveSample("Event_delegation", '100%', '50px')}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- The {{domxref("HTMLElement.blur()")}} method
- Related events: {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}}
- This event on `Window` targets: {{domxref("Window/blur_event", "blur")}} event
- [Focusing: focus/blur](https://javascript.info/focus-blur)
