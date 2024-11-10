---
title: Float32Array
slug: Web/JavaScript/Reference/Global_Objects/Float32Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

**`Float32Array`** 형식화 배열(TypedArray)은 플랫폼의 바이트 순서를 따르는 32비트 부동 소수점 배열입니다. 바이트 순서를 제어해야 하는 경우 대신 {{jsxref("DataView")}}를 사용하시기 바랍니다. 명시적으로 초기화 데이터를 제공하지 않으면 배열의 내용은 `0`으로 초기화됩니다. 배열이 생성되면 객체의 메서드를 사용하거나 표준 배열 인덱스 구문(즉, 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수 있습니다.

## 생성자

- {{jsxref("Float32Array/Float32Array", "Float32Array()")}}
  - : 새로운 `Float32Array` 객체를 생성합니다.

## 정적 속성

부모 {{jsxref("TypedArray")}}에서 정적 속성을 상속합니다.

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Float32Array.BYTES_PER_ELEMENT")}}
  - : 요소 크기를 숫자 값으로 반환합니다. `Float32Array`의 경우 `4`입니다.

## 정적 메서드

부모 {{jsxref("TypedArray")}}에서 정적 메서드를 상속합니다.

## 인스턴스 속성

부모 {{jsxref("TypedArray")}}에서 인스턴스 속성을 상속합니다.

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Float32Array.prototype.BYTES_PER_ELEMENT")}}
  - : 요소 크기를 숫자 값으로 반환합니다. `Float32Array`의 경우 `4`입니다.
- {{jsxref("Object/constructor", "Float32Array.prototype.constructor")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. `Float32Array` 인스턴스의 경우 초기 값은 {{jsxref("Float32Array/Float32Array", "Float32Array")}} 생성자 입니다.

## 인스턴스 메서드

부모 {{jsxref("TypedArray")}}에서 인스턴스 메서드를 상속합니다.

## 예제

### `Float32Array`를 생성하기 위한 각기 다른 여러 방법

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
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays) 가이드
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
