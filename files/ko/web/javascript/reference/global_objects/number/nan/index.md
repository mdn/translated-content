---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
tags:
  - JavaScript
  - Number
  - Property
browser-compat: javascript.builtins.Number.NaN
---

{{JSRef}}

**`Number.NaN`** 속성은 Not-A-Number(숫자가 아님)를 나타냅니다. {{jsxref("NaN")}}과 같습니다.

{{EmbedInteractiveExample("pages/js/number-nan.html")}}

정적 속성이므로 접근하기 위해 {{jsxref("Number")}} 객체를 생성할 필요는 없습니다. (`Number.NaN` 사용)

{{js_property_attributes(0, 0, 0)}}

## 예제

### 값이 숫자형인지 확인하기

```js
function sanitise(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}
```

### NaN에 대한 테스트

`NaN` 페이지에서 [NaN에 대한 테스트](/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN#testing_against_nan) 를 참고하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이보기

- 전역 {{jsxref("NaN")}} 객체.
- 본 속성이 속한 {{jsxref("Number")}} 객체.
