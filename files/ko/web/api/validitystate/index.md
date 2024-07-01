---
title: ValidityState
slug: Web/API/ValidityState
---

{{APIRef("HTML DOM")}}

**`ValidityState`** 인터페이스는 제약 유효성 검사에 대해 요소가 가질 수 있는 유효성 상태를 나타내며, 요소의 값이 유효하지 않은 경우 그 이유에 대한 설명을 도와줍니다.

## 속성

각각의 {{jsxref("Boolean")}} 속성에 대해, `true` 값은 해당 이유로 인해 값의 유효성 검사를 실패했음을 나타냅니다. **`valid`** 속성은 예외로서 `true`는 모든 제약조건을 통과했음을 의미합니다.

- {{domxref("ValidityState.badInput", "badInput")}} {{ReadOnlyInline}}
  - : 사용자가 입력한 값을 브라우저가 변환하지 못했음을 나타내는 {{jsxref("Boolean")}} 값입니다.
- `customError` {{ReadOnlyInline}}
  - : {{domxref('HTMLObjectElement.setCustomValidity', 'setCustomValidity()')}} 메서드를 사용해 요소의 사용자 지정 유효성 메시지를 비어있지 않은 문자열로 설정했는지를 나타내는 {{jsxref("Boolean")}} 값입니다.
- {{domxref("ValidityState.patternMismatch", "patternMismatch")}} {{ReadOnlyInline}}
  - : 값이 주어진 [`pattern`](/ko/docs/Web/HTML/Element/input#pattern) 특성을 만족하지 못하는지 나타내는 {{jsxref("Boolean")}} 값입니다 참일 경우, CSS {{cssxref(":invalid")}} 의사 클래스를 만족합니다.
- {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}} {{ReadOnlyInline}}
  - : 값이 주어진 [`max`](/ko/docs/Web/HTML/Element/input#max) 특성보다 큰지 나타내는 {{jsxref("Boolean")}} 값입니다. 참일 경우, CSS {{cssxref(":invalid")}}와 {{cssxref(":out-of-range")}} 의사 클래스를 만족합니다.
- {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}} {{ReadOnlyInline}}
  - : 값이 주어진 [`min`](/ko/docs/Web/HTML/Element/input#min) 특성보다 작은지 나타내는 {{jsxref("Boolean")}} 값입니다. 참일 경우, CSS {{cssxref(":invalid")}}와 {{cssxref(":out-of-range")}} 의사 클래스를 만족합니다.
- {{domxref("ValidityState.stepMismatch", "stepMismatch")}} {{ReadOnlyInline}}
  - : 값이 주어진 [`step`](/ko/docs/Web/HTML/Element/input#step) 특성의 규칙을 만족하지 않는지 (즉, 값을 스텝 값으로 나눌 수 없는지) 나타내는 {{jsxref("Boolean")}} 값입니다. 참일 경우, CSS {{cssxref(":invalid")}}와 {{cssxref(":out-of-range")}} 의사 클래스를 만족합니다.
- {{domxref("ValidityState.tooLong", "tooLong")}} {{ReadOnlyInline}}
  - : 값이 {{domxref("HTMLInputElement")}} 또는 {{domxref("HTMLTextAreaElement")}} 객체의 `maxlength` 값보다 긴지 나타내는 {{jsxref("Boolean")}} 값입니다. 참일 경우, CSS {{cssxref(":invalid")}}와 {{cssxref(":out-of-range")}} 의사 클래스를 만족합니다.
- {{domxref("ValidityState.tooShort", "tooShort")}} {{ReadOnlyInline}}
  - : 값이 {{domxref("HTMLInputElement")}} 또는 {{domxref("HTMLTextAreaElement")}} 객체의 `minLength` 값보다 짧은지 나타내는 {{jsxref("Boolean")}} 값입니다. 참일 경우, CSS {{cssxref(":invalid")}}와 {{cssxref(":out-of-range")}} 의사 클래스를 만족합니다.
- {{domxref("ValidityState.typeMismatch", "typeMismatch")}} {{ReadOnlyInline}}
  - : 값이 입력 유형에서 요구하는 형식([`type`](/ko/docs/Web/HTML/Element/input#type)이 `email`이나 `url`인 경우)에 맞지 않는지 나타내는 {{jsxref("Boolean")}} 값입니다. 참일 경우, CSS {{cssxref(":invalid")}} 의사 클래스를 만족합니다.
- `valid` {{ReadOnlyInline}}
  - : 요소가 모든 유효성 제약을 만족하여 유효한 상태인지 나타내는 {{jsxref("Boolean")}} 값입니다. 참일 경우 CSS {{cssxref(":valid")}} 의사 클래스를, 거짓일 경우 {{cssxref(":invalid")}} 의사 클래스를 만족합니다.
- {{domxref("ValidityState.valueMissing", "valueMissing")}} {{ReadOnlyInline}}
  - : 요소가 [`required`](/ko/docs/Web/HTML/Element/input#required) 특성을 가지고 있지만 값은 없는 경우 참인 {{jsxref("Boolean")}} 값입니다. 참일 경우, CSS {{cssxref(":invalid")}} 의사 클래스를 만족합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Guide: Constraint validation](/ko/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [Tutorial: Form data validation](/ko/docs/Learn/HTML/Forms/Form_validation)
