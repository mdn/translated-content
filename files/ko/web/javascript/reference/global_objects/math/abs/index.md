---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Math.abs()`** 정적 메서드는 숫자의 절대 값을 반환합니다.

{{InteractiveExample("JavaScript Demo: Math.abs()")}}

```js interactive-example
function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// Expected output: 2

console.log(difference(5, 3));
// Expected output: 2

console.log(difference(1.23456, 7.89012));
// Expected output: 6.6555599999999995
```

## 구문

```js-nolint
Math.abs(x)
```

### 매개변수

- `x`
  - : 숫자.

### 반환 값

`x`의 절대 값. `x`가 음수라면(`-0` 포함) `-x`를 반환합니다. 그렇지 않으면 `x`를 반환합니다. 따라서 결과는 언제나 양수 혹은 `0`입니다.

## 설명

`abs()`는 `Math`의 정적 메서드이기 때문에, 생성한 `Math` 객체(`Math`는 생성자가 아닙니다)의 메서드 대신 언제나 `Math.abs()`를 사용해야 합니다.

## 예제

### Math.abs() 사용하기

```js
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity
```

### 매개변수의 강제 변환

`Math.abs()` [매개변수를 숫자로 강제 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)시킵니다. 변환할 수 없는 값은 `NaN`이 되며, `Math.abs()`도 `NaN`을 반환합니다.

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
