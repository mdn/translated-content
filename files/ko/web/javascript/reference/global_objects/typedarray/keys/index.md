---
title: TypedArray.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/keys
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{JSRef}}

**`keys()`** 메서드는 배열의 각 인덱스의 키를 포함하는 새로운 배열 반복자 객체를 반환합니다.

{{InteractiveExample("JavaScript Demo: TypedArray.keys()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);
const keys = uint8.keys();

keys.next();
keys.next();

console.log(keys.next().value);
// Expected output: 2
```

## 구문

```js-nolint
keys()
```

### 반환 값

새로운 배열 반복자 객체.

## 예제

### for...of 루프를 사용한 반복

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const arrKeys = arr.keys();
for (const n of arrKeys) {
  console.log(n);
}
```

### 다른 반복 방법

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const arrKeys = arr.keys();
console.log(arrKeys.next().value); // 0
console.log(arrKeys.next().value); // 1
console.log(arrKeys.next().value); // 2
console.log(arrKeys.next().value); // 3
console.log(arrKeys.next().value); // 4
```

## 명새서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `TypedArray.prototype.keys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/ko/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.values()")}}
- {{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}
- [for...of](/ko/docs/Web/JavaScript/Reference/Statements/for...of)
- [Iteration protocols](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
