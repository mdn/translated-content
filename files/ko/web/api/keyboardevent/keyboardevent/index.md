---
title: "KeyboardEvent: KeyboardEvent() constructor"
slug: Web/API/KeyboardEvent/KeyboardEvent
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("UI Events")}}

**`KeyboardEvent()`** 생성자는 새로운 {{domxref("KeyboardEvent")}} 객체를 생성합니다.

## 구문

```js-nolint
new KeyboardEvent(type)
new KeyboardEvent(type, options)
```

### 매개 변수

- `type`
  - : 문자열 형식의 이벤트 이름입니다.
    대소문자를 구별하며 브라우저에서는 `keydown`, `keyup`, 그리고 `keypress` 로 설정합니다.
- `options` {{optional_inline}}
  - : {{domxref("UIEvent/UIEvent", "UIEvent()")}} 에 정의된 속성들과 더불어, 다음 속성들을 가질 수 있는 객체입니다.
    - `key` {{optional_inline}}
      - : `""` 를 기본값으로 가지는 문자열 형태이며, {{domxref("KeyboardEvent.key")}} 의 키를 설정합니다.
    - `code` {{optional_inline}}
      - : `""` 를 기본값으로 가지는 문자열 형태이며, {{domxref("KeyboardEvent.code")}} 의 값을 설정합니다.
    - `location` {{optional_inline}}
      - : `0` 을 기본값으로 가지는 문자열 형태이며, {{domxref("KeyboardEvent.location")}} 의 값을 설정합니다.
    - `repeat` {{optional_inline}}
      - : `false` 를 기본값으로 가지는 불리언 형태이며, {{domxref("KeyboardEvent.repeat")}} 의 값을 설정합니다.
    - `isComposing` {{optional_inline}}
      - : `false` 를 기본값으로 가지는 불리언 형태이며, {{domxref("KeyboardEvent.isComposing")}} 의 값을 설정합니다.
    - `charCode` {{optional_inline}} {{deprecated_inline}}
      - : `0` 을 기본값으로 가지는 숫자 형태이며, 사용이 중단된 {{domxref("KeyboardEvent.charCode")}} 의 값을 설정합니다.
    - `keyCode` {{optional_inline}} {{deprecated_inline}}
      - : `0` 을 기본값으로 가지는 숫자 형태이며, 사용이 중단된 {{domxref("KeyboardEvent.keyCode")}} 의 값을 설정합니다.
    - `which` {{optional_inline}} {{deprecated_inline}}
      - : `0` 을 기본값으로 가지는 숫자 형태이며, 사용이 중단된 {{domxref("UIEvent.which")}} 의 값을 설정합니다.
    - `ctrlKey` {{optional_inline}}
      - : `false` 를 기본값으로 가지는 불리언 형태이며, {{domxref("KeyboardEvent.ctrlKey")}} 의 값을 설정합니다.
    - `shiftKey` {{optional_inline}}
      - : `false` 를 기본값으로 가지는 불리언 형태이며, {{domxref("KeyboardEvent.shiftKey")}} 의 값을 설정합니다.
    - `altKey` {{optional_inline}}
      - : `false` 를 기본값으로 가지는 불리언 형태이며, {{domxref("KeyboardEvent.altKey")}} 의 값을 설정합니다.
    - `metaKey` {{optional_inline}}
      - : `false` 를 기본값으로 가지는 불리언 형태이며, {{domxref("KeyboardEvent.metaKey")}} 의 값을 설정합니다.

### 반환 값

새로운 {{domxref("KeyboardEvent")}} 객체를 반환합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("KeyboardEvent")}}, 이 생성자가 구성하는 객체의 인터페이스입니다.
