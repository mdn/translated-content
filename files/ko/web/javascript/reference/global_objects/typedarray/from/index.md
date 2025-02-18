---
title: TypedArray.from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

**`TypedArray.from()`** 정적 메서드는 순회 가능한 객체 혹은 유사 배열로부터 새로운 [형식화 배열](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)을 생성합니다. 이 메서드는 {{jsxref("Array.from()")}}와 거의 같습니다.

{{InteractiveExample("JavaScript Demo: TypedArray.from()", "shorter")}}

```js interactive-example
const uint16 = Int16Array.from("12345");

console.log(uint16);
// Expected output: Int16Array [1, 2, 3, 4, 5]
```

## 구문

```js-nolint
TypedArray.from(arrayLike, mapFn)
TypedArray.from(arrayLike, mapFn, thisArg)
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

- `arrayLike`
  - : 형식화 배열로 변환할 순회 가능한 객체 혹은 유사 객체.
- `mapFn` {{optional_inline}}
  - : 입력된 배열의 모든 요소에 대해 호출할 함수입니다. 이 함수를 제공하면 배열에 추가할 모든 값이 먼저 이 함수를 통과하고 `mapFn`의 반환 값이 형식화 배열에 입력 값 대신 추가됩니다. 이 함수는 다음 인수를 사용하여 호출됩니다.
    - `element`
      - : 형식화 배열에서 처리 중인 현재 요소입니다.
    - `index`
      - : 형식화 배열에서 처리 중인 현재 요소의 인덱스입니다.
- `thisArg` {{optional_inline}}
  - : `mapFn`을 실행할 때 `this`로 사용할 값입니다.

### 반환 값

새로운 {{jsxref("TypedArray")}} 인스턴스입니다.

## 설명

자세한 내용은 {{jsxref("Array.from()")}}을 참고하시기 바랍니다.

{{jsxref("Array.from()")}}와 `TypedArray.from()` 사이에는 미묘한 차이가 있습니다(참고: 아래에 언급된 `this` 값은 `mapFn`을 호출하는 데 사용된 `thisArg` 인수가 아니라 `TypedArray.from()`가 호출된 `this` 값입니다).

- `TypedArray.from()`의 `this` 값이 생성자가 아닌 경우, `TypedArray.from()`는 {{jsxref("TypeError")}}를 발생시키고, `Array.from()`는 기본적으로 새 {{jsxref("Array")}}를 생성합니다.
- `this`가 생성하는 객체는 `TypedArray` 인스턴스여야 하며, `Array.from()`는 `this` 값을 어떤 객체로든 생성할 수 있습니다.
- `source` 매개변수가 반복자인 경우 `TypedArray.from()`은 먼저 반복자에서 모든 값을 수집한 다음 그 개수를 사용하여 `this`의 인스턴스를 생성하고 마지막으로 인스턴스에 값을 설정합니다. `Array.from()`은 반복자로부터 값을 받을 때마다 각 값을 설정한 다음 마지막에 `length`를 설정합니다.
- `TypedArray.from()`은 `[[Set]]`을 사용하는 반면 `Array.from()`은 `[[DefineOwnProperty]]`을 사용합니다. 따라서 {{jsxref("Proxy")}} 객체로 작업할 때는 [`handler.set()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) 대신 [`handler.defineProperty()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)를 호출하여 새 요소를 생성합니다.
- `Array.from()`이 반복자가 아닌 유사 배열을 가져올 때, 중간에 빠진 부분을 존중합니다. `TypedArray.from()`은 결과가 희소 배열이 안되도록 보장합니다.

## 예제

### 순회 가능한 객체(Set)으로부터

```js
const s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]
```

### 문자열로부터

```js
Int16Array.from("123");
// Int16Array [ 1, 2, 3 ]
```

### Map과 화살표 함수와 함께 사용

요소를 조작하는 Map 함수로서 화살표 함수 사용하기

```js
Float32Array.from([1, 2, 3], (x) => x + x);
// Float32Array [ 2, 4, 6 ]
```

### 일련의 번호 생성

```js
Uint8Array.from({ length: 5 }, (v, k) => k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
```

### TypeArray가 아닌 생성자에서 from() 호출하기

`from()`의 `this` 값은 `TypedArray` 인스턴스를 반환하는 생성자여야 합니다.

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

Int8Array.from.call({}, []); // TypeError: #<Object> is not a constructor
Int8Array.from.call(NotArray, []);
// NotArray는 length 0으로 호출되었습니다.
// TypeError: Method %TypedArray%.from called on incompatible receiver #<NotArray>
```

```js
function NotArray2(len) {
  console.log("NotArray2 called with length", len);
  return new Uint8Array(len);
}
console.log(Int8Array.from.call(NotArray2, [1, 2, 3]));
// NotArray2는 length 3으로 호출되었습니다.
// Uint8Array(3) [ 1, 2, 3 ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `TypedArray.from`의 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.of()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Array.from()")}}
