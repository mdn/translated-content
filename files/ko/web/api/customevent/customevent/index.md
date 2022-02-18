---
title: CustomEvent()
slug: Web/API/CustomEvent/CustomEvent
tags:
  - Constructor
  - Reference
browser-compat: api.CustomEvent.CustomEvent
translation_of: Web/API/CustomEvent/CustomEvent
---
{{APIRef("DOM")}}

**`CustomEvent()`** 생성자는 새로운 {{domxref("CustomEvent")}}를 생성합니다.

{{AvailableInWorkers}}

## 구문

```js
CustomEvent(typeArg);
CustomEvent(typeArg, options);
```

### 매개변수

- `typeArg`
  - : 이벤트의 이름을 나타내는 문자열입니다.
- `options` {{optional_inline}}
  - : 다음 속성을 포함하는 객체입니다.
    - `"detail"`: 이 이벤트 내에 포함할, 이벤트의 세부 정보를 나타내는 값입니다. 기본 값은 `null`입니다. 처리기에서 {{domxref("CustomEvent.detail")}} 속성을 통해 이 값에 접근할 수 있습니다.
    - {{domxref("Event.Event", "Event()")}} 생성자의 옵션에 지정할 수 있는 모든 속성.

## 예제

```js
// CustomEvent 생성
const catFound = new CustomEvent('animalfound', {
  detail: {
    name: 'cat'
  }
});
const dogFound = new CustomEvent('animalfound', {
  detail: {
    name: 'dog'
  }
});

// 적합한 이벤트 수신기 부착
obj.addEventListener('animalfound', (e) => console.log(e.detail.name));

// 이벤트 발송
obj.dispatchEvent(catFound);
obj.dispatchEvent(dogFound);

// 콘솔에 "cat"과 "dog"가 기록됨
```

[이벤트 생성 및 발동](/ko/docs/Web/Events/Creating_and_triggering_events) 문서에서 더 많은 예제를 확인하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{domxref("CustomEvent")}}
