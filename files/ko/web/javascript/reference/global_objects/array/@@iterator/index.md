---
title: Array.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
---

{{JSRef}}

**`@@iterator`** 속성의 초기 값은 {{jsxref("Array.prototype.values()", "values()")}} 속성의 초기 값과 같은 함수 객체입니다.

## 구문

```js
arr[Symbol.iterator]();
```

### 반환 값

{{jsxref("Array.prototype.values()", "values()")}} 반복기가 반환하는 초기 값. `arr[Symbol.iterator]`의 기본값은 {{jsxref("Array.prototype.values()", "values()")}} 입니다.

## 예제

### `for…of` 반복문을 이용한 순회

```js
var arr = ["w", "y", "k", "o", "p"];
var eArr = arr[Symbol.iterator]();
// your browser must support for..of loop
// and let-scoped variables in for loops
// const and var could also be used
for (let letter of eArr) {
  console.log(letter);
}
```

### 다른 방법

```js
var arr = ["w", "y", "k", "o", "p"];
var eArr = arr[Symbol.iterator]();
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
- {{jsxref("Array.prototype.values()")}}
