---
title: Number.prototype.toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
---

{{JSRef}}

**`toPrecision()`** 메서드는 {{jsxref("Number")}} 객체를 지정된 정밀도로 나타내는 문자열을 반환한다.

{{EmbedInteractiveExample("pages/js/number-toprecision.html")}}

## 문법

```js
numObj.toPrecision([precision]);
```

### 파라미터

- `precision`
  - : 선택적 파라미터. 유효 자릿수를 지정하는 정수.

### 반환 값

고정 소수점 또는 지수 표기법의 {{jsxref("Number")}} 객체를 정밀 유효 숫자로 반올림 한 문자열입니다. `toPrecision()`에도 적용되는 {{jsxref("Number.prototype.toFixed()")}} 메서드에 대한 설명에서 반올림에 대한 설명을 참조하세요.

`precision(정밀도)` 인수가 생략되면 {{jsxref("Number.prototype.toString()")}}처럼 작동합니다. `precision(정밀도)` 인수가 정수가 아닌 값이면 가장 가까운 정수로 반올림됩니다.

### 예외

- {{jsxref("Global_Objects/RangeError", "RangeError")}}
  - : `precision(정밀도)`가 1에서 100 사이가 아닌 경우 {{jsxref("RangeError")}}가 발생합니다. 구현은 더 큰 값과 더 작은 값을 지원할 수 있습니다. ECMA-262는 최대 21 자리의 정밀도 만을 요구합니다.

## 예제

### `toPrecision` 사용

```js
var numObj = 5.123456;

console.log(numObj.toPrecision()); // logs '5.123456'
console.log(numObj.toPrecision(5)); // logs '5.1235'
console.log(numObj.toPrecision(2)); // logs '5.1'
console.log(numObj.toPrecision(1)); // logs '5'

numObj = 0.000123;

console.log(numObj.toPrecision()); // logs '0.000123'
console.log(numObj.toPrecision(5)); // logs '0.00012300'
console.log(numObj.toPrecision(2)); // logs '0.00012'
console.log(numObj.toPrecision(1)); // logs '0.0001'

// 일부 상황에서는 지수 표기법이 반환 될 수 있습니다
console.log((1234.5).toPrecision(2)); // logs '1.2e+3'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toString()")}}
