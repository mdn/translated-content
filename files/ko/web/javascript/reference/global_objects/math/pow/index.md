---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
---

{{JSRef}}**`Math.pow()`**함수는`base^exponent`처럼
`base` 에 `exponent`를 제곱한 값을 반환합니다.{{EmbedInteractiveExample("pages/js/math-pow.html")}}

## 문법

```js
Math.pow(base, exponent);
```

### 매개변수

- `base`
  - : 밑 값.
- `exponent`
  - : `밑`
    을 제곱하기 위해 사용하는 지수.

### 반환 값

주어진 밑 값을 주어진 지수 값으로 거듭제곱한 숫자 값.

## 설명

**`Math.pow()`**함수는 `base`의 `exponent`
곱, 즉 `base^exponent`를 반환합니다.
`base`와 `exponent`는 10진수입니다.

`pow()`는 `Math`의 정적 메서드이므로 `Math`객체를 생성하여 그 메서드로 사용하지 말고, 항상
`Math.pow()`로 사용하십시오. (`Math`에는 생성자가 없습니다).
만약 밑(base) 값이 음수이고 지수(exponent)가 정수가 아닌 경우 결과는 NaN입니다.

## 예제

### Math.pow()사용하기

```js
// 간단한 예
Math.pow(7, 2); // 49
Math.pow(7, 3); // 343
Math.pow(2, 10); // 1024
// 분수 지수
Math.pow(4, 0.5); // 2 (4의 제곱근)
Math.pow(8, 1 / 3); // 2 (8의 세제곱근)
Math.pow(2, 0.5); // 1.4142135623730951 (2의 제곱근)
Math.pow(2, 1 / 3); // 1.2599210498948732 (2의 세제곱근)
// 양의 지수
Math.pow(7, -2); // 0.02040816326530612 (1/49)
Math.pow(8, -1 / 3); // 0.5
// 양의 밑
Math.pow(-7, 2); // 49 (제곱의 결과값은 양수입니다.)
Math.pow(-7, 3); // -343 (세제곱은 음수가 될 수 있습니다.)
Math.pow(-7, 0.5); // NaN (음수는 실제 제곱근을 가지지 않습니다.)
// "짝수"와 "홀수" 근이 서로 가깝게 놓여 있고
// 부동소수점 정밀도의 한계로 인해,
// 밑이 음수이며 지수가 분수라면 언제나 NaN을 반환합니다.
Math.pow(-7, 1 / 3); // NaN
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
- [멱승연산](/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation)
