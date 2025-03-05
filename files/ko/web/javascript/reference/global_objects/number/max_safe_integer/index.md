---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Number.MAX_SAFE_INTEGER`** 정적 데이터 속성은 JavaScript의 최대 안전 정수 값(2<sup>53</sup> – 1)을 나타냅니다.

더 큰 정수는 {{jsxref("BigInt")}}를 고려해보시기 바랍니다.

{{InteractiveExample("JavaScript Demo: Number.MAX_SAFE_INTEGER")}}

```js interactive-example
const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

console.log(Number.MAX_SAFE_INTEGER);
// Expected output: 9007199254740991

console.log(x);
// Expected output: 9007199254740992

console.log(x === y);
// Expected output: true
```

## 값

`9007199254740991` (9,007,199,254,740,991, or \~9천 조).

{{js_property_attributes(0, 0, 0)}}

## 설명

`MAX_SAFE_INTEGER` 상수는 `9007199254740991`(9,007,199,254,740,991 또는 약 9000조)의 값을 갖고 있습니다. 이 값의 이유는 JavaScript가 [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point)에 기술된 [배정밀도 부동소숫점 형식 숫자체계](http://en.wikipedia.org/wiki/Double_precision_floating-point_format)를 사용하기 때문으로, 이로 인해 `-(2^53 - 1)`과 `2^53 - 1` 사이의 수만 안전하게 표현할 수 있습니다.

여기서의 안전함이란 정수를 정확하고 올바르게 비교할 수 있음을 의미합니다. 예를 들어 `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2`는 참으로 평가되며 이는 수학적으로 올바르지 않습니다. 더 자세한 내용은 {{jsxref("Number.isSafeInteger()")}}를 참고하세요.

`MAX_SAFE_INTEGER`는 {{jsxref("Number")}}의 정적 속성이기 때문에, 직접 생성한 {{jsxref("Number")}} 객체의 속성이 아니라 `Number.MAX_SAFE_INTEGER` 형식으로 사용해야 합니다.

[배정밀도 부동 소수점 형식](https://en.wikipedia.org/wiki/Double_precision_floating-point_format)은 [가수부](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)를 표현하기 위해 오직 52비트만 사용할 수 있습니다. 그래서 -(2<sup>53</sup> – 1) 부터 2<sup>53</sup> – 1 까지의 정수만 안전하게 표현할 수 있습니다. 이 문맥에서 "안전"이라는 말은 정수를 정확하게 표현하고 이 정수들을 올바르게 비교할 수 있음을 의미합니다. 예를 들어 `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2`는 true로 평가되겠지만 수학적으로는 틀렸습니다. 보다 자세한 정보는 {{jsxref("Number.isSafeInteger()")}}를 참고하시기 바랍니다.

{{jsxref("Number")}}는 `MAX_SAFE_INTEGER`는 정적 속성이기 때문에 숫자 값의 속성보다는 언제나 `Number.MAX_SAFE_INTEGER` 형태로 사용하세요.

## 예제

### MAX_SAFE_INTEGER의 반환 값

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### MAX_SAFE_INTEGER와 EPSILON의 관계

{{jsxref("Number.EPSILON")}}는 2<sup>-52</sup>인데 반해 `MAX_SAFE_INTEGER`는 2<sup>53</sup> – 1 입니다. 두 값은 모두 53비트(가장 높은 비트는 언제나 1)인 가수부의 너비에서 파생됩니다. 이를 곱하면 2에 매우 가깝지만 같지는 않은 값이 나옵니다.

```js
Number.MAX_SAFE_INTEGER * Number.EPSILON; // 1.9999999999999998
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Number.MAX_SAFE_INTEGER` 폴리필](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
