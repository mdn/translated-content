---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
---

{{JSRef}}

**`toExponential()`** 메서드는 숫자를 지수 표기법으로 표기해 반환합니다.

{{EmbedInteractiveExample("pages/js/number-toexponential.html")}}

## 구문

```js
numObj.toExponential([fractionDigits]);
```

### 매개변수

- `fractionDigits` {{optional_inline}}
  - : 소수점 이하로 표현할 자릿수입니다. 기본값은 주어진 값을 나타내는데 필요한 자릿수입니다.

### 반환 값

주어진 {{jsxref("Number")}} 값을 숫자 한자리와 소수점, 소수점 이하 `fractionDigits` 자릿수만큼 반올림하여 지수 표기법으로 나타낸 문자열을 반환합니다.

### 예외

- {{jsxref("RangeError")}}
  - : `fractionDigits`가 너무 작거나 너무 크면 {{jsxref("RangeError")}} 에러가 발생합니다. `fractionDigits`가 0에서 20 사이의 값이면 {{jsxref("RangeError")}} 에러는 발생하지 않습니다. 구현에 따라 더 크거나 작은 값도 사용 할 수 있습니다.
- {{jsxref("TypeError")}}
  - : {{jsxref("Number")}}가 아닌 객체가 이 메서드를 실행시키면 {{jsxref("RangeError")}} 에러가 발생합니다.

## 설명

`fractionDigits` 매개변수를 생략하면, 기본적으로 주어진 값을 특정하기 위해 필요한 자릿수만큼이 소수점 이하 자릿수가 됩니다.

지수나 소수점이 없는 숫자 리터럴에 `toExponential()` 메서드를 사용하려면, 점 앞에 공백을 두어 점이 소수점으로 해석되는 것을 막도록 합니다.

주어진 값의 자릿수가 `fractionDigits` 매개변수보다 크다면, 주어진 값은 `fractionDigits`에 가까운 자릿수로 반올림되어 표현됩니다. {{jsxref("Number.prototype.toFixed", "toFixed()")}} 메서드의 반올림에 관한 설명이 `toExponential()` 메서드에도 마찬가지로 적용됩니다.

## 예제

### `toExponential` 사용하기

```js
var numObj = 77.1234;

console.log(numObj.toExponential()); // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log((77.1234).toExponential()); // logs 7.71234e+1
console.log((77).toExponential()); // logs 7.7e+1
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
