---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Number.MIN_SAFE_INTEGER`** 정적 데이터 속성은 JavaScript에서 안전한 최소 정수값 혹은 (-(2<sup>53</sup> - 1))을 나타냅니다.

이보다 더 작은 정수값을 표현하기 위해서는 {{jsxref("BigInt")}} 사용을 고려하시기 바랍니다.

{{InteractiveExample("JavaScript Demo: Number.MIN_SAFE_INTEGER")}}

```js interactive-example
const x = Number.MIN_SAFE_INTEGER - 1;
const y = Number.MIN_SAFE_INTEGER - 2;

console.log(Number.MIN_SAFE_INTEGER);
// Expected output: -9007199254740991

console.log(x);
// Expected output: -9007199254740992

console.log(x === y);
// Expected output: true
```

## 값

`-9007199254740991` (-9,007,199,254,740,991, or about -9 quadrillion).

{{js_property_attributes(0, 0, 0)}}

## 설명

[배정밀도 부동소수점 형식](https://en.wikipedia.org/wiki/Double_precision_floating-point_format)
은 소수점을 나타내는 비트가 52비트밖에 없으므로 -(2<sup>53</sup> – 1) 와 2<sup>53</sup> – 1 사이의 정수만 안전하게 표현할 수 있습니다. 여기서 안전하다는 것은 정수를 정확하게 표현하고 정확하게 비교할 수 있는 능력을 의미합니다.

예를 들어 `Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2`는 수학적으로는 맞지 않지만 참으로 평가됩니다. 자세한 내용은 {{jsxref("Number.isSafeInteger()")}}를 참조하세요.

`MIN_SAFE_INTEGER`는 {{jsxref("Number")}}의 정적 속성이기 때문에, 직접 생성한 {{jsxref("Number")}} 객체의 속성이 아니라 `Number.MIN_SAFE_INTEGER` 형식으로 사용해야 합니다.

## 예제

### MIN_SAFE_INTEGER 사용하기

```js
Number.MIN_SAFE_INTEGER; // -9007199254740991
-(2 ** 53 - 1); // -9007199254740991
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Number.MIN_SAFE_INTEGER` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
