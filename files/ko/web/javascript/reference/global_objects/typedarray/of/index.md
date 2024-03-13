---
title: TypedArray.of()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/of
---

{{JSRef}}

<code><strong><em>TypedArray</em>.of()</strong></code>

는 가변적으로 인수를 전달 할수 있는 새로운 형식화 배열([typed array](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects))를 만들어내는 메소드입니다.

이 메소드는 {{jsxref("Array.of()")}}와 거의 같습니다.

## 문법

```
TypedArray.of(element0[, element1[, ...[, elementN]]])
```

where TypedArray is one of:

- Int8Array
- Uint8Array
- Uint8ClampedArray
- Int16Array
- Uint16Array
- Int32Array
- Uint32Array
- Float32Array
- Float64Array

### 매개변수

- `elementN`
  - : 형식화 된 배열을 만들 요소입니다.

### 반환 값

생성된 {{jsxref("TypedArray")}} 인스턴스

## 설명

{{jsxref("Array.of()")}}와 `TypedArray.of()` 사이의 약간의 차이점은 다음과 같습니다.

- `TypedArray.of`에 전달된 값이 생성자가 아닌 경우 `TypedArray.of`는 {{jsxref ( "TypeError")}}를 발생시킵니다. `Array.of`는 기본적으로 새로운 {{jsxref ( "Array")}}를 생성합니다.
- `TypedArray.of` uses `[[Put]]` where `Array.of` uses `[[DefineProperty]]`. Hence, when working with {{jsxref("Proxy")}} objects, it calls {{jsxref("Global_Objects/Proxy/handler/set", "handler.set")}} to create new elements rather than {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty")}}.
- `TypedArray.of`는 `Array.of`가 `[[DefineProperty]]`를 사용하는 것처럼 `[[Put]]`을 사용합니다. 따라서 {{jsxref("Proxy")}} 객체로 작업 할 때 새로운 요소를 생성하기 위해 {{jsxref("Global_Objects/Proxy/handler/set", "handler.set")}}대신 {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty")}}를 호출합니다.

## 예제

```js
Uint8Array.of(1); // Uint8Array [ 1 ]
Int8Array.of("1", "2", "3"); // Int8Array [ 1, 2, 3 ]
Float32Array.of(1, 2, 3); // Float32Array [ 1, 2, 3 ]
Int16Array.of(undefined); // IntArray [ 0 ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.of()")}}
