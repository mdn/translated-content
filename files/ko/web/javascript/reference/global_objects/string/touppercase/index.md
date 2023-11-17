---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
---

{{JSRef}}

**`toUpperCase()`** 메서드는 문자열을 대문자로 변환해 반환합니다.

{{EmbedInteractiveExample("pages/js/string-touppercase.html")}}

## 구문

```js
str.toUpperCase();
```

### 반환 값

대문자로 변환한 새로운 문자열.

### 예외

- {{jsxref("TypeError")}}
  - : {{jsxref("Function.prototype.call()")}} 등을 사용해 {{jsxref("null")}}이나 {{jsxref("undefined")}}에서 호출 시.

## 설명

`toUpperCase()` 메서드는 문자열을 대문자로 변환한 값을 반환합니다. JavaScript의 문자열은 불변하므로 원본 문자열에는 영향을 주지 않습니다.

## 예제

### 기본 사용법

```js
console.log("alphabet".toUpperCase()); // 'ALPHABET'
```

### 문자열이 아닌 `this`의 문자열 변환

`toUpperCase()`의 `this`가 문자열이 아니고, `undefined`와 `null`도 아니면 자동으로 문자열로 변환합니다.

```js
const a = String.prototype.toUpperCase.call({
  toString: function toString() {
    return "abcdef";
  },
});

const b = String.prototype.toUpperCase.call(true);

// prints out 'ABCDEF TRUE'.
console.log(a, b);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
