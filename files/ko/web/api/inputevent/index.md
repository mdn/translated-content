---
title: InputEvent
slug: Web/API/InputEvent
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("UI Events")}}

**`InputEvent`** 인터페이스는 편집 가능한 콘텐츠의 변경 이벤트를 나타냅니다.

{{InheritanceDiagram}}

## 생성자

- {{DOMxRef("InputEvent.InputEvent", "InputEvent()")}}
  - : `InputEvent` 객체를 생성합니다.

## 인스턴스 속성

{{domxref("UIEvent")}}와 {{domxref("Event")}} 인터페이스의 속성을 상속합니다.

- {{DOMxRef("InputEvent.data")}} {{ReadOnlyInline}}
  - : 삽입한 문자들로 구성된 문자열을 반환합니다. 문자를 삭제하는 등, 텍스트를 삽입하지 않는 변경 사항에서는 빈 문자열일 수 있습니다.
- {{DOMxRef("InputEvent.dataTransfer")}} {{ReadOnlyInline}}
  - : 편집 가능한 콘텐츠에 추가나 제거 중인 서식 텍스트 또는 평문 데이터의 정보가 포함된 {{DOMxRef("DataTransfer")}} 객체를 반환합니다.
- {{DOMxRef("InputEvent.inputType")}} {{ReadOnlyInline}}
  - : 편집 가능한 콘텐츠의 변경 유형을 반환합니다. 속성 문서에서 가능한 유형의 목록을 확인할 수 있습니다.
- {{DOMxRef("InputEvent.isComposing")}} {{ReadOnlyInline}}
  - : 이 이벤트가 {{domxref("Element/compositionstart_event", "compositionstart")}} 이후, {{domxref("Element/compositionend_event", "compositionend")}} 이전에 발생했는지 나타내는 {{jsxref("Boolean")}}을 반환합니다.

## 인스턴스 메서드

{{domxref("UIEvent")}}와 {{domxref("Event")}} 인터페이스의 메서드를 상속합니다.

- {{DOMxRef('InputEvent.getTargetRanges()')}}
  - : 이 이벤트를 취소하지 않으면 영향을 받는 DOM 범위들의 배열을 반환합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`beforeinput` 이벤트](/ko/docs/Web/API/Element/beforeinput_event)
- [`input` 이벤트](/ko/docs/Web/API/Element/input_event)
