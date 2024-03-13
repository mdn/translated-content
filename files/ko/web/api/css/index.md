---
title: CSS
slug: Web/API/CSS
---

{{APIRef("CSSOM")}}

**`CSS`** 인터페이스는 유용한 CSS 관련 메서드를 가집니다. `CSS` 인터페이스는 정적 속성과 메서드만 가지고 있으며 아무런 객체도 `CSS` 인터페이스를 구현하지 않습니다.

## 속성

_CSS 인터페이스는 유틸리티 인터페이스이며, 이러한 형식의 어떠한 객체도 만들수 없으며 오직 정적 속성으로만 정의할 수 있습니다._

### 정적 속성

- {{domxref("CSS.paintWorklet")}} {{experimental_inline}} {{SecureContext_Inline}}
  - : 페인팅(painting)에 관련된 모든 클래스를 지닌 워크렛(worklet)에 접근할 수 있습니다.

## 메서드

### 정적 메서드

- {{domxref("CSS.registerProperty()")}}
  - : [사용자 지정 CSS 속성](/ko/docs/Web/CSS/--*)을 등록하고 속성 자료형 검사, 기본값, 상속 여부 등을 설정할 수 있습니다.
- {{domxref("CSS.supports()")}}

  - : 매개변수로 주어진 속성-값 쌍 또는 조건의 지원 여부를 나타내는 {{jsxref("Boolean")}}을 반환합니다.

- {{domxref("CSS.escape()")}} {{experimental_inline}}
  - : CSS 선택자로 사용할 문자열을 이스케이프해서 반환합니다.
- {{domxref("CSS.factory_functions", "CSS 팩토리 함수", "", 1)}}
  - : 매개변수로 지정한 값을 담은 새로운 {{domxref("CSSUnitValue")}}를 생성합니다. 단위는 팩토리 함수의 이름입니다.
    `CSS.em(3) // CSSUnitValue {value: 3, unit: "em"}`

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
