---
title: Uint16Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/Uint16Array/Uint16Array
---

{{JSRef}}

**`Uint16Array`** 형식화 배열(TypedArray)의 생성자는 플랫폼의 바이트 순서를 따르는 16비트 부호 없는 정수
배열을 생성합니다.

## 문법

```js-nolint
new Uint16Array()
new Uint16Array(length)
new Uint16Array(typedArray)
new Uint16Array(object)

new Uint16Array(buffer)
new Uint16Array(buffer, byteOffset)
new Uint16Array(buffer, byteOffset, length)
```

> [!NOTE]
> `Uint16Array()`는 오직 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로만 생성할 수 있습니다. `new` 없이 호출을 시도하면 {{jsxref("TypeError")}} 예외가 발생합니다.

### 매개변수

[`TypedArray`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#parameters)를 참고하세요.

### 예외

[`TypedArray`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions)를 참고하세요.

## 예제

### Uint16Array를 생성하기 위한 각기 다른 여러 방법

```js
// 길이로부터 생성
const uint16 = new Uint16Array(2);
uint16[0] = 42;
console.log(uint16[0]); // 42
console.log(uint16.length); // 2
console.log(uint16.BYTES_PER_ELEMENT); // 2

// 배열로부터
const x = new Uint16Array([21, 31]);
console.log(x[1]); // 31

// 다른 TypedArray로부터
const y = new Uint16Array(x);
console.log(y[0]); // 21

// ArrayBuffer로부터
const buffer = new ArrayBuffer(16);
const z = new Uint16Array(buffer, 2, 4);
console.log(z.byteOffset); // 2

// 순회로부터
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint16FromIterable = new Uint16Array(iterable);
console.log(uint16FromIterable);
// Uint16Array [1, 2, 3]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `Uint16Array` 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
