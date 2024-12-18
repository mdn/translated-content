---
title: Uint8ClampedArray
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
---

{{JSRef}}

**`Uint8ClampedArray`** 형식화 배열(TypedArray)은 0-255로 고정된 8비트 부호 없는 정수의 배열입니다.
\[0,255] 범위를 벗어나는 값을 지정하면 대신 0 또는 255가 대신 설정됩니다. 정수가 아닌 값을 지정하면 그 값과 가장 가까운 정수가
설정됩니다. 배열의 내용은 0으로 초기화됩니다. 배열이 생성되면 객체의 메서드를 사용하거나 표준 배열 인덱스 구문(즉, 대괄호 표기법 사용)을
사용하여 배열의 요소를 참조할 수 있습니다.

## 생성자

- {{jsxref("Global_Objects/Uint8ClampedArray/Uint8ClampedArray", "Uint8ClampedArray()")}}
  - : 새로운 `Uint8ClampedArray` 객체를 생성합니다.

## 정적 속성

부모 {{jsxref("TypedArray")}}에서 정적 속성을 상속합니다.

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint8ClampedArray.BYTES_PER_ELEMENT")}}
  - : 요소 크기를 숫자 값으로 반환합니다. `Uint8ClampedArray`의 경우 `1` 입니다.
- {{jsxref("TypedArray.name", "Uint8ClampedArray.name")}}
  - : 생성자 이름을 문자열로 반환합니다. `Uint8ClampedArray` 타입의 경우 `"Uint8ClampedArray"`입니다.

## 정적 메서드

부모 {{jsxref("TypedArray")}}에서 정적 메서드를 상속합니다.

## 인스턴스 속성

부모 {{jsxref("TypedArray")}}에서 인스턴스 속성을 상속합니다.

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Uint8ClampedArray.prototype.BYTES_PER_ELEMENT")}}
  - : 요소 크기를 숫자 값으로 반환합니다. `Uint8ClampedArray`의 경우 `1`입니다.

## 인스턴스 메서드

부모 {{jsxref("TypedArray")}}에서 인스턴스 메서드를 상속합니다.

## 예제

### Uint8ClampedArray 를 생성하기 위한 각기 다른 여러 방법

```js
// 길이로부터 생성
const uintc8 = new Uint8ClampedArray(2);
uintc8[0] = 42;
uintc8[1] = 1337;
console.log(uintc8[0]); // 42
console.log(uintc8[1]); // 255 (clamped)
console.log(uintc8.length); // 2
console.log(uintc8.BYTES_PER_ELEMENT); // 1

// 배열로부터 생성
const x = new Uint8ClampedArray([21, 31]);
console.log(x[1]); // 31

// 다른 TypedArray로부터 생성
const y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// ArrayBuffer로부터 생성
const buffer = new ArrayBuffer(8);
const z = new Uint8ClampedArray(buffer, 1, 4);
console.log(z.byteOffset); // 1

// 순회로부터 생성
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uintc8FromIterable = new Uint8ClampedArray(iterable);
console.log(uintc8FromIterable);
// Uint8ClampedArray [1, 2, 3]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `Uint8ClampedArray`의 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
