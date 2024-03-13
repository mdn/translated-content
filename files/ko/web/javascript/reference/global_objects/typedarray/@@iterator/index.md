---
title: TypedArray.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator
---

{{JSRef}}

@@iterator 속성의 초기값은 {{jsxref("TypedArray.prototype.values()", "values")}} 속성의 초기값과 같은 함수 객체입니다.

## 구문

```js
arr[Symbol.iterator]();
```

## 예

### `for...of` 루프를 사용하는 반복

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
// 브라우저가 for..of 루프 및 for 루프에서
// let 스코프인 변수를 지원해야 합니다
for (let n of arr) {
  console.log(n);
}
```

### 대안 반복

```js
var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // 10
console.log(eArr.next().value); // 20
console.log(eArr.next().value); // 30
console.log(eArr.next().value); // 40
console.log(eArr.next().value); // 50
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.values()")}}
