---
title: TypedArray.of()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/of
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

정적 메서드 **`TypedArray.of()`**는 다양한 수의 인자로부터 새로운
[형식화 배열](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)를 생성합니다.
이 메서드는 {{jsxref("Array.of()")}}와 거의 동일합니다.

{{InteractiveExample("JavaScript Demo: TypedArray.of()", "shorter")}}

```js interactive-example
const int16array = Int16Array.of("10", "20", "30", "40", "50");

console.log(int16array);
// Expected output: Int16Array [10, 20, 30, 40, 50]
```

## 구문

```js-nolint
TypedArray.of()
TypedArray.of(element1)
TypedArray.of(element1, element2)
TypedArray.of(element1, element2, /* …, */ elementN)
```

`TypedArray`는 아래 중 하나입니다.

- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float16Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}

### 매개변수

- `element1`, …, `elementN`
  - : 형식화 배열을 생성할 때 사용할 요소

### 반환 값

새로운 {{jsxref("TypedArray")}} 인스턴스.

## 설명

보다 자세한 설명은 {{jsxref("Array.of()")}}을 참고하시기 바랍니다.
{{jsxref("Array.of()")}}와 `TypedArray.of()`는 약간의 미묘한 차이가 있습니다.

- `TypedArray.of()`에 전달된 `this` 값이 생성자가 아닌 경우 `TypedArray.from()`은 {{jsxref("TypeError")}}를 발생시키고, `Array.of()`는 기본적으로 새 {{jsxref("Array")}}를 생성합니다.
- `TypedArray.of()`는 `[[Set]]`를 사용하는 반면 `Array.of()`는 `[[DefineOwnProperty]]`를 사용합니다. 따라서 {{jsxref("Proxy")}} 객체로 작업할 때 [`handler.set()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)을 호출하여 [`handler.defineProperty()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)가 아닌 새 요소를 생성합니다.

## 예제

### of() 사용하기

```js
Uint8Array.of(1); // Uint8Array [ 1 ]
Int8Array.of("1", "2", "3"); // Int8Array [ 1, 2, 3 ]
Float32Array.of(1, 2, 3); // Float32Array [ 1, 2, 3 ]
Int16Array.of(undefined); // Int16Array [ 0 ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `TypedArray.of` 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.of()")}}
