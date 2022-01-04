---
title: Number() 생성자
slug: Web/JavaScript/Reference/Global_Objects/Number/Number
tags:
  - Constructor
  - JavaScript
  - Number
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Number.Number
---

{{JSRef}}

**`Number()` 생성자**는 {{jsxref("Number")}} 객체를 생성합니다.

## 구문

```js
new Number(value);
```

### 매개변수

- `value`
  - : 만들어질 객체의 숫자 값.

## 예제

### Number 객체 만들기

```js
const a = new Number('123'); // a === 123 은 거짓
const b = Number('123'); // b === 123 은 참
a instanceof Number; // 참
b instanceof Number; // 참
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 최신 `Number` 동작(2진수와 8진수를 지원하는)의 폴리필은 [`core-js`](https://github.com/zloirock/core-js#ecmascript-number)를 참고하세요
- {{jsxref("NaN")}}
- {{jsxref("Math")}} 전역 객체
- 임의 정밀도 정수: {{jsxref("BigInt")}}
