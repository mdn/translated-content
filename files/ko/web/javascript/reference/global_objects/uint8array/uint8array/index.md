---
title: Uint8Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array
---

{{JSRef}}

**`Uint8Array()`** 생성자는 8비트 부호없는 정수의 형식화 배열(TypedArray)을 생성합니다. 배열의 내용은 0으로
초기화됩니다. 배열이 생성되면 객체의 메서드를 사용하거나 표준 배열 인덱스 구문(즉, 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수
있습니다.

## 문법

```js-nolint
new Uint8Array()
new Uint8Array(length)
new Uint8Array(typedArray)
new Uint8Array(object)

new Uint8Array(buffer)
new Uint8Array(buffer, byteOffset)
new Uint8Array(buffer, byteOffset, length)
```

> **참고:** `Uint8Array()`는 오직 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로만 생성할 수 있습니다. `new` 없이 호출을 시도하면 {{jsxref("TypeError")}} 예외가 발생합니다

### 매개변수

[`TypedArray`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#parameters)를 참고하세요.

### 예외

[`TypedArray`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions)를 참고하세요.

## 예제

### Uint8Array을 생성하기 위한 각기 다른 여러 방법

```js
// 길이로부터 생성
const uint8 = new Uint8Array(2);
uint8[0] = 42;
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1

// 배열로부터
const x = new Uint8Array([21, 31]);
console.log(x[1]); // 31

// 다른 TypedArray로부터
const y = new Uint8Array(x);
console.log(y[0]); // 21

// ArrayBuffer로부터
const buffer = new ArrayBuffer(8);
const z = new Uint8Array(buffer, 1, 4);
console.log(z.byteOffset); // 1

// 순회로부터
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint8FromIterable = new Uint8Array(iterable);
console.log(uint8FromIterable);
// Uint8Array [1, 2, 3]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `Uint8Array` 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
