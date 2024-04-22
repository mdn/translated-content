---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
---

{{JSRef}}

**`Number.MAX_SAFE_INTEGER`** 상수는 JavaScript에서 안전한 최대 정수값을 나타냅니다. (`2^53 - 1`).

{{EmbedInteractiveExample("pages/js/number-maxsafeinteger.html")}}{{js_property_attributes(0, 0, 0)}}

## 설명

`MAX_SAFE_INTEGER` 상수는 `9007199254740991`(9,007,199,254,740,991 또는 약 9000조)의 값을 갖고 있습니다. 이 값의 이유는 JavaScript가 [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point)에 기술된 [배정밀도 부동소숫점 형식 숫자체계](http://en.wikipedia.org/wiki/Double_precision_floating-point_format)를 사용하기 때문으로, 이로 인해 `-(2^53 - 1)`과 `2^53 - 1` 사이의 수만 안전하게 표현할 수 있습니다.

여기서의 안전함이란 정수를 정확하고 올바르게 비교할 수 있음을 의미합니다. 예를 들어 `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2`는 참으로 평가되며 이는 수학적으로 올바르지 않습니다. 더 자세한 내용은 {{jsxref("Number.isSafeInteger()")}}를 참고하세요.

`MAX_SAFE_INTEGER`는 {{jsxref("Number")}}의 정적 속성이기 때문에, 직접 생성한 {{jsxref("Number")}} 객체의 속성이 아니라 `Number.MAX_SAFE_INTEGER` 형식으로 사용해야 합니다.

## 예제

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MAX_SAFE_INTEGER * Number.EPSILON; // 2 because in floating points, the value is actually the decimal trailing "1"
// except for in subnormal precision cases such as zero
```

## 폴리필

```js
if (!Number.MAX_SAFE_INTEGER) {
  Number.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1; // 9007199254740991
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
