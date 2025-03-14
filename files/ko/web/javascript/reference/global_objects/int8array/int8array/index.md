---
title: Int8Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/Int8Array/Int8Array
---

{{JSRef}}

**`Int8Array()`** 형식화 배열(TypedArray)의 생성자는 2의 보수 8비트의 부호있는 정수의 배열을 생성합니다.
배열의 내용은 0으로 초기화됩니다. 배열이 생성되면 객체의 메서드를 사용하거나 표준 배열 인덱스 구문(즉, 대괄호 표기법 사용)을 사용하여
배열의 요소를 참조할 수 있습니다.

## 구문

```js-nolint
new Int8Array()
new Int8Array(length)
new Int8Array(typedArray)
new Int8Array(object)

new Int8Array(buffer)
new Int8Array(buffer, byteOffset)
new Int8Array(buffer, byteOffset, length)
```

> **참고:** `Int8Array()`는 오직 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)
> 로만 생성할 수 있습니다. `new` 없이 호출을 시도하면 {{jsxref("TypeError")}} 예외가 발생합니다.

### 매개변수

[`TypedArray`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#parameters)를 참고하세요.

### 예외

[`TypedArray`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions)를 참고하세요.

## 예제

### Int8Array를 생성하기 위한 각기 다른 여러 방법

```js
// 길이로부터 생성
const int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// 배열로부터 생성
const x = new Int8Array([21, 31]);
console.log(x[1]); // 31

// 다른 TypedArray로부터 생성
const y = new Int8Array(x);
console.log(y[0]); // 21

// ArrayBuffer로부터 생성
const buffer = new ArrayBuffer(8);
const z = new Int8Array(buffer, 1, 4);
console.log(z.byteOffset); // 1

// 순회로부터 생성
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int8FromIterable = new Int8Array(iterable);
console.log(int8FromIterable);
// Int8Array [1, 2, 3]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `Int8Array` 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
