---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
l10n:
  sourceCommit: 910a6fedb299488ba7e94b884da7bcd71e79ec1a
---

**`Math.ceil()`** 정적 메서드는 언제나 올림하여 주어진 숫자보다 크거나 같은 가장 작은 정수를 반환합니다.

{{InteractiveExample("JavaScript Demo: Math.ceil()")}}

```js interactive-example
console.log(Math.ceil(0.95));
// Expected output: 1

console.log(Math.ceil(4));
// Expected output: 4

console.log(Math.ceil(7.004));
// Expected output: 8

console.log(Math.ceil(-7.004));
// Expected output: -7
```

## 구문

```js-nolint
Math.ceil(x)
```

### 매개변수

- `x`
  - : 숫자

### 반환 값

`x`보다 크거나 같은 가장 작은 정수를 반환합니다. [`-Math.floor(-x)`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)와 동일한 값입니다.

## 설명

`ceil()`은 `Math`의 정적 메소드이므로, 생성한 `Math` 객체(`Math` 는 생성자가 아닙니다)의 메서드로 사용하지 않고, 언제나 `Math.ceil()`으로 사용하세요.

## 예제

### Math.ceil() 사용하기

```js
Math.ceil(-Infinity); // -Infinity
Math.ceil(-7.004); // -7
Math.ceil(-4); // -4
Math.ceil(-0.95); // -0
Math.ceil(-0); // -0
Math.ceil(0); // 0
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(Infinity); // Infinity
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
