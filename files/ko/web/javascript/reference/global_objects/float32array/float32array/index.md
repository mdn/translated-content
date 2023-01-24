---
title: Float32Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/Float32Array/Float32Array
---

{{JSRef}}

**`Float32Array`** 형식화 배열(TypedArray) 생성자는 플랫폼의 바이트 순서를 따르는 32비트 부동 소수점(C의
`float` 데이터 타입에 대응) 배열을 생성합니다. 바이트 순서를 제어해야 하는 경우 대신 {{jsxref("DataView")}}를
사용합니다. 배열의 내용은 0으로 초기화됩니다. 배열이 생성되면 객체의 메서드를 사용하거나 표준 배열 인덱스 구문
(즉, 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수 있습니다.

## 구문

```js-nolint
new Float32Array()
new Float32Array(length)
new Float32Array(typedArray)
new Float32Array(object)

new Float32Array(buffer)
new Float32Array(buffer, byteOffset)
new Float32Array(buffer, byteOffset, length)
```

> **참고:** `Float32Array()`는 오직 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로만 생성할 수 있습니다. `new` 없이 호출을 시도하면 {{jsxref("TypeError")}} 예외가 발생합니다.

### 매개변수

[`TypedArray`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#parameters)를 참고하세요.

### 예외

[`TypedArray`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions)를 참고하세요.

## 예제

### Float32Array를 생성하기 위한 각기 다른 여러 방법

```js
// 길이로부터 생성
const float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32[0]); // 42
console.log(float32.length); // 2
console.log(float32.BYTES_PER_ELEMENT); // 4

// 배열로부터 생성
const x = new Float32Array([21, 31]);
console.log(x[1]); // 31

// 다른 TypedArray로부터 생성
const y = new Float32Array(x);
console.log(y[0]); // 21

// ArrayBuffer로부터 생성
const buffer = new ArrayBuffer(32);
const z = new Float32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// 순회로부터 생성
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float32FromIterable = new Float32Array(iterable);
console.log(float32FromIterable);
// Float32Array [1, 2, 3]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `Float32Array`의 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
