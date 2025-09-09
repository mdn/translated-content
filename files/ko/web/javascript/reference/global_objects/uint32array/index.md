---
title: Uint32Array
slug: Web/JavaScript/Reference/Global_Objects/Uint32Array
---

{{JSRef}}

**`Uint32Array`** 형식화 배열(TypedArray)은 플랫폼의 바이트 순서를 따르는 32비트 부호 없는 정수의 배열입니다.
바이트 순서를 제어해야 하는 경우 대신 {{jsxref("DataView")}}를 사용합니다. 배열의 내용은 0으로 초기화됩니다.
배열이 생성되면 객체의 메서드를 사용하거나 표준 배열 인덱스 구문(즉, 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수 있습니다.

## 생성자

- {{jsxref("Global_Objects/Uint32Array/Uint32Array", "Uint32Array()")}}
  - : 새로운 `Uint32Array` 객체를 생성합니다.

## 정적 속성

부모 {{jsxref("TypedArray")}}에서 정적 속성을 상속합니다.

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint32Array.BYTES_PER_ELEMENT")}}
  - : 요소 크기를 숫자로 반환합니다. `Uint32Array`의 경우 `4` 입니다.
- {{jsxref("TypedArray.name", "Uint32Array.name")}}
  - : 생성자 이름을 문자열로 반환합니다. `Uint32Array` 타입의 경우 `"Uint32Array"`입니다.

## 정적 메서드

부모 {{jsxref("TypedArray")}}에서 정적 메서드를 상속합니다.

## 인스턴스 속성

부모 {{jsxref("TypedArray")}}에서 인스턴스 속성을 상속합니다.

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint32Array.prototype.BYTES_PER_ELEMENT")}}
  - : 요소 크기를 숫자 값으로 반환합니다. `Uint32Array`의 경우 `4`입니다.

## 인스턴스 메서드

부모 {{jsxref("TypedArray")}}에서 인스턴스 메서드를 상속합니다.

## 예제

### Uint32Array을 생성하기 위한 각기 다른 여러 방법

```js
// 길이로부터 생성
const uint32 = new Uint32Array(2);
uint32[0] = 42;
console.log(uint32[0]); // 42
console.log(uint32.length); // 2
console.log(uint32.BYTES_PER_ELEMENT); // 4

// 배열로부터
const x = new Uint32Array([21, 31]);
console.log(x[1]); // 31

// 다른 TypedArray로부터
const y = new Uint32Array(x);
console.log(y[0]); // 21

// ArrayBuffer로부터
const buffer = new ArrayBuffer(32);
const z = new Uint32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// 순회로부터
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint32FromIterable = new Uint32Array(iterable);
console.log(uint32FromIterable);
// Uint32Array [1, 2, 3]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `Uint32Array` 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
