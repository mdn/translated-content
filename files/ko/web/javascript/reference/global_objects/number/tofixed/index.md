---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
---

{{JSRef}}

**`toFixed()`** 메서드는 숫자를 고정 소수점 표기법(fixed-point notation)으로 표시합니다.

{{EmbedInteractiveExample("pages/js/number-tofixed.html")}}

## 구문

```js
numObj.toFixed([digits]);
```

### 매개변수

- `digits` {{optional_inline}}
  - : 소수점 뒤에 나타날 자릿수. 0 이상 20 이하의 값을 사용할 수 있으며, 구현체에 따라 더 넓은 범위의 값을 지원할 수도 있습니다. 값을 지정하지 않으면 0을 사용합니다.

### 반환 값

고정 소수점 표기법을 사용하여 나타낸 수를 문자열로 바꾼 값.

### 예외

- {{jsxref("RangeError")}}
  - : `digits`가 너무 작거나 너무 클 때. 값이 0과 100사이의 값이라면 {{jsxref("RangeError")}}를 유발하지 않습니다. 구현체에 따라 더 크거나 작은 값을 지원할 수 있습니다.
- {{jsxref("TypeError")}}
  - : {{jsxref("Number")}}가 아닌 객체에서 호출한 경우.

## 설명

`toFixed()`는 {{jsxref("Number")}} 객체를 주어진 `digits` 만큼의 소수점 이하 자리수를 정확하게 갖는 문자열 표현으로 반환합니다. 소수점 이하가 길면 숫자를 반올림하고, 짧아서 부족할 경우 뒤를 0으로 채울 수 있습니다. 메서드를 호출한 숫자의 크기가 1e+21보다 크다면 {{jsxref("Number.prototype.toString()")}}을 호출하여 받은 지수 표기법 결과를 대신 반환합니다.

## 예제

### `toFixed()` 사용하기

```js
var numObj = 12345.6789;

numObj.toFixed(); // Returns '12346': 반올림하며, 소수 부분을 남기지 않습니다.
numObj.toFixed(1); // Returns '12345.7': 반올림합니다.
numObj.toFixed(6); // Returns '12345.678900': 빈 공간을 0으로 채웁니다.
(1.23e20).toFixed(2); // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2); // Returns '0.00'
(2.34).toFixed(1); // Returns '2.3'
(2.35).toFixed(1); // Returns '2.4'. 이 경우에는 올림을 합니다.
-(2.34).toFixed(1); // Returns -2.3 (연산자의 적용이 우선이기 때문에, 음수의 경우 문자열로 반환하지 않습니다...)
(-2.34).toFixed(1); // Returns '-2.3' (...괄호를 사용할 경우 문자열을 반환합니다.)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
