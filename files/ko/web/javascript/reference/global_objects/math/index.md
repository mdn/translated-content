---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
---

{{JSRef}}

**`Math`** 는 수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체입니다. 함수 객체가 아닙니다.

`Math`는 {{jsxref("Number")}} 자료형만 지원하며 {{jsxref("BigInt")}}와는 사용할 수 없습니다.

## 설명

다른 전역 객체와 달리 `Math`는 생성자가 아닙니다. `Math`의 모든 속성과 메서드는 정적입니다. 파이 상수는 `Math.PI`로 참조할 수 있고, 사인 함수는 매개변수 `x`에 대해 `Math.sin(x)`와 같이 호출할 수 있습니다. 상수는 JavaScript에서 가능한 최대 실수 정밀도로 정의되어 있습니다.

## 속성

- {{jsxref("Math.E")}}
  - : 오일러의 상수이며 자연로그의 밑. 약 `2.718`.
- {{jsxref("Math.LN2")}}
  - : `2`의 자연로그. 약 `0.693`.
- {{jsxref("Math.LN10")}}
  - : `10`의 자연로그. 약 `2.303`.
- {{jsxref("Math.LOG2E")}}
  - : 밑이 `2`인 로그 E. 약 `1.443`.
- {{jsxref("Math.LOG10E")}}
  - : 밑이 `10`인 로그 E. 약 `0.434`.
- {{jsxref("Math.PI")}}
  - : 원의 둘레와 지름의 비율. 약 `3.14159`.
- {{jsxref("Math.SQRT1_2")}}
  - : ½의 제곱근. 약 `0.707`.
- {{jsxref("Math.SQRT2")}}
  - : `2`의 제곱근. 약 `1.414`.

## 메서드

> **참고:** **참고:** 삼각 함수(`sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, `atan2()`)는 매개변수와 반환값 모두 호도법(라디안)을 사용합니다.
>
> 라디안 값을 각도 값으로 변환하려면 `(Math.PI / 180)`으로 나누세요. 반대로 각도 값에 곱하면 라디안 값이 됩니다.

> **참고:** 많은 수의 `Math` 함수 정확도는 구현에 따라 다를 수 있습니다.
>
> 즉, 각 브라우저의 결과가 다를 수 있으며, 서로 같은 JS 엔진이라도 운영체제나 아키텍쳐에 따라서 불일치하는 값을 반환할 수 있습니다.

- {{jsxref("Global_Objects/Math/abs", "Math.abs(x)")}}
  - : 숫자의 절댓값을 반환합니다.
- {{jsxref("Global_Objects/Math/acos", "Math.acos(x)")}}
  - : 숫자의 아크코사인 값을 반환합니다.
- {{jsxref("Global_Objects/Math/acosh", "Math.acosh(x)")}}
  - : 숫자의 쌍곡아크코사인 값을 반환합니다.
- {{jsxref("Global_Objects/Math/asin", "Math.asin(x)")}}
  - : 숫자의 아크사인 값을 반환합니다.
- {{jsxref("Global_Objects/Math/asinh", "Math.asinh(x)")}}
  - : 숫자의 쌍곡아크사인 값을 반환합니다.
- {{jsxref("Global_Objects/Math/atan", "Math.atan(x)")}}
  - : 숫자의 아크탄젠트 값을 반환합니다.
- {{jsxref("Global_Objects/Math/atanh", "Math.atanh(x)")}}
  - : 숫자의 쌍곡아크탄젠트 값을 반환합니다.
- {{jsxref("Global_Objects/Math/atan2", "Math.atan2(y, x)")}}
  - : 인수 몫의 아크탄젠트 값을 반환합니다.
- {{jsxref("Global_Objects/Math/cbrt", "Math.cbrt(x)")}}
  - : 숫자의 세제곱근을 반환합니다.
- {{jsxref("Global_Objects/Math/ceil", "Math.ceil(x)")}}
  - : 인수보다 크거나 같은 수 중에서 가장 작은 정수를 반환합니다.
- {{jsxref("Global_Objects/Math/clz32", "Math.clz32(x)")}}
  - : 주어진 32비트 정수의 선행 0 개수를 반환합니다.
- {{jsxref("Global_Objects/Math/cos", "Math.cos(x)")}}
  - : 숫자의 코사인 값을 반환합니다.
- {{jsxref("Global_Objects/Math/cosh", "Math.cosh(x)")}}
  - : 숫자의 쌍곡코사인 값을 반환합니다.
- {{jsxref("Global_Objects/Math/exp", "Math.exp(x)")}}
  - : E^x 를 반환합니다. *x*는 인수이며 E 는 오일러 상수(`2.718`...) 또는 자연로그의 밑입니다.
- {{jsxref("Global_Objects/Math/expm1", "Math.expm1(x)")}}
  - : `exp(x)`에서 `1`을 뺀 값을 반환합니다.
- {{jsxref("Global_Objects/Math/floor", "Math.floor(x)")}}
  - : 인수보다 작거나 같은 수 중에서 가장 큰 정수를 반환합니다.
- {{jsxref("Global_Objects/Math/fround", "Math.fround(x)")}}
  - : 인수의 가장 가까운 단일 정밀도 표현을 반환합니다.
- {{jsxref("Global_Objects/Math/hypot", "Math.hypot([x[, y[, …]]])")}}
  - : 인수의 제곱합의 제곱근을 반환합니다.
- {{jsxref("Global_Objects/Math/imul", "Math.imul(x, y)")}}
  - : 두 32비트 정수의 곱을 반환합니다.
- {{jsxref("Global_Objects/Math/log", "Math.log(x)")}}
  - : 숫자의 자연로그(e를 밑으로 하는 로그, 즉 ln) 값을 반환합니다.
- {{jsxref("Global_Objects/Math/log1p", "Math.log1p(x)")}}
  - : 숫자 `x`에 대해 `1 + x`의 자연로그(e를 밑으로 하는 로그, ln) 값을 반환합니다.
- {{jsxref("Global_Objects/Math/log10", "Math.log10(x)")}}
  - : 숫자의 밑이 10인 로그를 반환합니다.
- {{jsxref("Global_Objects/Math/log2", "Math.log2(x)")}}
  - : 숫자의 밑이 2인 로그를 반환합니다.
- {{jsxref("Global_Objects/Math/max", "Math.max([x[, y[, …]]])")}}
  - : 0개 이상의 인수에서 제일 큰 수를 반환합니다.
- {{jsxref("Global_Objects/Math/min", "Math.min([x[, y[, …]]])")}}
  - : 0개 이상의 인수에서 제일 작은 수를 반환합니다.
- {{jsxref("Global_Objects/Math/pow", "Math.pow(x, y)")}}
  - : x의 y 제곱을 반환합니다.
- {{jsxref("Global_Objects/Math/random", "Math.random()")}}
  - : 0과 1 사이의 난수를 반환합니다.
- {{jsxref("Global_Objects/Math/round", "Math.round(x)")}}
  - : 숫자에서 가장 가까운 정수를 반환합니다.
- {{jsxref("Global_Objects/Math/sign", "Math.sign(x)")}}
  - : x의 양의 수인지 음의 수인지 나타내는 부호를 반환합니다.
- {{jsxref("Global_Objects/Math/sin", "Math.sin(x)")}}
  - : 숫자의 사인 값을 반환합니다.
- {{jsxref("Global_Objects/Math/sinh", "Math.sinh(x)")}}
  - : 숫자의 쌍곡사인 값을 반환합니다.
- {{jsxref("Global_Objects/Math/sqrt", "Math.sqrt(x)")}}
  - : 숫자의 제곱근을 반환합니다.
- {{jsxref("Global_Objects/Math/tan", "Math.tan(x)")}}
  - : 숫자의 탄젠트 값을 반환합니다.
- {{jsxref("Global_Objects/Math/tanh", "Math.tanh(x)")}}
  - : 숫자의 쌍곡탄젠트 값을 반환합니다.
- `Math.toSource()` {{non-standard_inline}}
  - : 문자열 `"Math"`를 반환합니다.
- {{jsxref("Global_Objects/Math/trunc", "Math.trunc(x)")}}
  - : 숫자의 정수 부분을 반환합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Number")}}
