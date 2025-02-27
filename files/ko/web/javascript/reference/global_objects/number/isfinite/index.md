---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

**`Number.isFinite()`** 메서드는 주어진 값이 유한수인지 판별합니다.

**`Number.isFinite()`** 정적 메서드는 전달받은 값이 유한수인지 여부를 판별합니다. 즉, 주어진 값이 숫자이고 이 숫자가 양의 {{jsxref("Infinity")}}, 음의 `Infinity`, {{jsxref("NaN")}}이 아님을 확인합니다.

{{InteractiveExample("JavaScript Demo: Number.isFinite()")}}

```js interactive-example
console.log(Number.isFinite(1 / 0));
// Expected output: false

console.log(Number.isFinite(10 / 5));
// Expected output: true

console.log(Number.isFinite(0 / 0));
// Expected output: false
```

## 구문

```js-nolint
Number.isFinite(value)
```

### 매개변수

- `value`
  - : 유한수인지 판별할 값.

### 반환 값

주어진 값이 유한수라면 불리언 값 `true`를, 그렇지 않으면 `false`를 반환합니다.

## 예제

### isFinite() 사용하기

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true
```

### Number.isFinite()와 global isFinite()의 차이

전역 {{jsxref("isFinite()")}} 함수와의 차이는 이 메서드는 첫 번째 매개변수를 숫자로 변환시키지 않는다는 점입니다. 즉, 숫자이면서 유한수인 값에만 `true`를 반환하며 숫자가 아닌 값은 언제나 `false`를 반환합니다.

```js
isFinite("0"); // true; 숫자 0으로 강제 변환됨
Number.isFinite("0"); // false
isFinite(null); // true; 숫자 0으로 강제 변환됨
Number.isFinite(null); // false
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Number.isFinite` 폴리필](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("isFinite()")}}
