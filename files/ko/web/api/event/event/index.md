---
title: Event()
slug: Web/API/Event/Event
---

{{APIRef("DOM")}}

**`Event()`** 생성자는 새로운 {{domxref("Event")}} 객체를 생성합니다. 생성자로 생성한 이벤트는 브라우저가 생성하는 이벤트와 구분해서 합성 이벤트(synthetic event)라고 부르며, [스크립트에서 발송할 수 있습니다](/ko/docs/Web/Events/Creating_and_triggering_events).

## 구문

```js
new Event(type);
new Event(type, options);
```

### 매개변수

- `type`
  - : 이벤트의 이름을 나타내는 문자열입니다.
- `options` {{optional_inline}}
  - : 다음 속성을 포함하는 객체입니다.
    - `bubbles` {{optional_inline}}
      - : 이벤트의 버블링 여부를 나타내는 불리언 값입니다. 기본 값은 `false`입니다.
    - `cancelable` {{optional_inline}}
      - : 이벤트를 취소할 수 있는지 나타내는 불리언 값입니다. 기본 값은 `false`입니다.
    - `composed` {{optional_inline}}
      - : 이벤트가 섀도 루트(shadow root) 바깥의 이벤트 수신기로도 전달될지 나타내는 불리언 값입니다. {{domxref("Event.composed")}}에서 자세한 정보를 확인하세요. 기본 값은 `false`입니다.

### 반환 값

새로운 {{domxref("Event")}} 객체.

## 예제

```js
// 버블링 가능하고 취소 불가능한 look 이벤트 생성

const evt = new Event("look", { bubbles: true, cancelable: false });
document.dispatchEvent(evt);

// document 외의 다른 요소에서도 이벤트 발송 가능
myDiv.dispatchEvent(evt);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Event")}}
- {{domxref("EventTarget.dispatchEvent()")}}
- [이벤트 생성 및 발동](/ko/docs/Web/Events/Creating_and_triggering_events)
