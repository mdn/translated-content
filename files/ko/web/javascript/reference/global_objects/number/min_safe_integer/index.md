---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
---

{{JSRef}}

**`Number.MIN_SAFE_INTEGER`** 상수는 JavaScript에서 안전한 최소 정수값을 나타냅니다. (`-(2^53 - 1)`)

{{EmbedInteractiveExample("pages/js/number-min-safe-integer.html")}}{{js_property_attributes(0, 0, 0)}}

## 설명

`MIN_SAFE_INTEGER` 상수는 `-9007199254740991`(-9,007,199,254,740,991 또는 약 -9000조)의 값을 갖고 있습니다. 이 값의 이유는 JavaScript가 [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point)에 기술된 [배정밀도 부동소숫점 형식 숫자체계](http://en.wikipedia.org/wiki/Double_precision_floating-point_format)를 사용하기 때문으로, 이로 인해 `-(2^53 - 1)`과 `2^53 - 1` 사이의 수만 안전하게 표현할 수 있습니다.

`MIN_SAFE_INTEGER`는 {{jsxref("Number")}}의 정적 속성이기 때문에, 직접 생성한 {{jsxref("Number")}} 객체의 속성이 아니라 `Number.MIN_SAFE_INTEGER` 형식으로 사용해야 합니다.

## 설명

```js
Number.MIN_SAFE_INTEGER // -9007199254740991
-(Math.pow(2, 53) - 1)  // -9007199254740991
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
