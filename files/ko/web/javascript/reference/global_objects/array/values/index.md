---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/values
---
{{JSRef}}

**`values()`** 메서드는 배열의 각 인덱스에 대한 값을 가지는 새로운 **`Array Iterator`** 객체를 반환합니다.

{{EmbedInteractiveExample("pages/js/array-values.html")}}

## 구문

```js
    arr.values()
```

### 반환 값

새로운 {{jsxref("Array")}} 반복기 객체.

## 예제

### `for...of` 루프를 통한 반복

```js
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr.values();
// your browser must support for..of loop
// and let-scoped variables in for loops
for (let letter of eArr) {
  console.log(letter);
}
```

### 다른 반복법

```js
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr.values();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
