---
title: Float16Array
slug: Web/JavaScript/Reference/Global_Objects/Float16Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

**`Float16Array`** 형식화 배열은 플랫폼의 바이트 순서를 따르는 16비트 부동 소수점 배열입니다. 바이트 순서를 제어해야 하는 경우 대신 {{jsxref("DataView")}}를 사용하시기 바랍니다. 명시적으로 초기화 데이터를 제공하지 않으면 배열의 내용은 `0`으로 초기화됩니다. 배열이 생성되면 객체의 메서드를 사용하거나 표준 배열 인덱스 구문(즉, 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수 있습니다.

`Float16Array`는 숨겨진 {{jsxref("TypedArray")}} 클래스의 하위 클래스 입니다.

> [!NOTE]
> Float16 지원은 JavaScript API와 하위 CPU 아키텍처 모두에서 보편적으로 지원되지 않습니다. 이를 사용하면 일부 플랫폼에서 성능이 저하될 수 있습니다. 이 기능은 [float-backed canvases](https://github.com/w3c/ColorWeb-CG/blob/main/canvas_float.md), WebGPU, WebGL, [stable diffusion](https://github.com/huggingface/blog/blob/main/stable_diffusion.md)을 포함한 딥러닝 모델과 같이 고도로 최적화되고 성능에 민감한 시스템과 상호 작용하기 위한 것입니다.

## 생성자

- {{jsxref("Float16Array/Float16Array", "Float16Array()")}}
  - : 새로운 `Float16Array` 객체를 생성합니다.

## 정적 속성

부모 {{jsxref("TypedArray")}}에서 정적 속성을 상속합니다.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float16Array.BYTES_PER_ELEMENT")}}
  - : 요소 크기를 숫자 값으로 반환합니다. `Float16Array`의 경우 `2`입니다.

## 정적 메서드

부모 {{jsxref("TypedArray")}}에서 정적 메서드를 상속합니다.

## 인스턴스 속성

부모 {{jsxref("TypedArray")}}에서 인스턴스 속성을 상속합니다.

아래 속성은 `Float16Array.prototype`에 정의되어 있으며, 모든 `Float16Array` 인스턴스와 공유합니다.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float16Array.prototype.BYTES_PER_ELEMENT")}}
  - : 요소 크기를 숫자로 반환합니다. `Float16Array`의 경우 `2` 입니다.
- {{jsxref("Object/constructor", "Float16Array.prototype.constructor")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. `Float16Array` 인스턴스의 경우 초기 값은 {{jsxref("Float16Array/Float16Array", "Float16Array")}} 생성자 입니다.

## 인스턴스 메서드

부모 {{jsxref("TypedArray")}}에서 인스턴스 메서드를 상속합니다.

## 예제

### Float16Array를 생성하기 위한 각기 다른 여러 방법

```js
// 길이로부터 생성
const float16 = new Float16Array(2);
float16[0] = 42;
console.log(float16[0]); // 42
console.log(float16.length); // 2
console.log(float16.BYTES_PER_ELEMENT); // 2

// 배열로부터 생성
const x = new Float16Array([21, 31]);
console.log(x[1]); // 31

// 다른 TypedArray로부터 생성
const y = new Float16Array(x);
console.log(y[0]); // 21

// ArrayBuffer로부터 생성
const buffer = new ArrayBuffer(32);
const z = new Float16Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// 순회로부터 생성
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float16FromIterable = new Float16Array(iterable);
console.log(float16FromIterable);
// Float16Array [1, 2, 3]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
