---
title: "UIEvent: UIEvent() 생성자"
short-title: UIEvent()
slug: Web/API/UIEvent/UIEvent
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("UI Events")}}

**`UIEvent()`** 생성자는 새로운 {{domxref("UIEvent")}} 객체를 생성합니다.

> [!NOTE]
> 이 생성자로 생성한 인공 이벤트는 보안상의 이유로 신뢰되지 않습니다. 브라우저가 생성한 `UIEvent` 객체들만 신뢰되며 기본 동작을 유발할 수 있습니다.

## 구문

```js-nolint
new UIEvent(type)
new UIEvent(type, options)
```

### 매개변수

- `type`
  - : 이벤트 이름 문자열입니다. 대소문자를 구분하며 브라우저는 `load`, `unload`, `abort`, `error`, `select`를 사용합니다.
- `options` {{optional_inline}}
  - : {{domxref("Event/Event", "Event()")}}에서 사용할 수 있는 속성에 더해 다음 속성들도 포함하는 객체입니다.
    - `detail` {{optional_inline}}
      - : 이벤트 유형에 따라 의미가 다른 숫자 값입니다. 기본 값은 `0`으로, 이 값이 표준 이벤트들에서 갖는 뜻은 {{domxref("UIEvent.detail")}} 문서에서 확인할 수 있습니다.
    - `view` {{optional_inline}}
      - : 이벤트에 연관된 {{domxref("Window")}}입니다. 기본 값은 `null`입니다.
    - `sourceCapabilities` {{optional_inline}} {{non-standard_inline}}
      - : 터치 이벤트를 생성하는 물리적 장치에 대한 정보를 담고 있는 {{domxref("InputDeviceCapabilities")}} 객체입니다.

### 반환 값

새로운 {{domxref("UIEvent")}} 객체.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 생성자가 생성하는 객체의 인터페이스인 {{domxref("UIEvent")}}
