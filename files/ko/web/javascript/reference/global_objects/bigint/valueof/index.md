---
title: BigInt.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

{{jsxref("BigInt")}}의 **`valueOf()`** 메서드는 {{jsxref("BigInt")}} 객체의 감싸진 원시값을 반환합니다.

{{InteractiveExample("JavaScript Demo: BigInt.valueOf()", "shorter")}}

```js interactive-example
console.log(typeof Object(1n));
// Expected output: "object"

console.log(typeof Object(1n).valueOf());
// Expected output: "bigint"
```

## 구문

```js-nolint
valueOf()
```

### 매개변수

없음.

### 반환 값

지정된 {{jsxref("BigInt")}} 객체의 원시값을 나타내는 BigInt.

## 예제

### `valueOf` 사용하기

```js
typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 다시 보기

- {{jsxref("BigInt.prototype.toString()")}}
