---
title: TypedArray.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`join()`** 메서드는 어떤 형식화 배열의 모든 요소를 하나의 문자열로 연결합니다. 이 메서드는
{{jsxref("Array.prototype.join()")}}와 같은 알고리즘을 가지고 있습니다. 형식화 배열(TypedArray)는
[형식화 배열의 타입](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) 중 하나입니다.

{{InteractiveExample("JavaScript Demo: TypedArray.join()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.join());
// Expected output: "10,20,30,40,50"

console.log(uint8.join(""));
// Expected output: "1020304050"

console.log(uint8.join("-"));
// Expected output: "10-20-30-40-50"
```

## 구문

```js-nolint
join()
join(separator)
```

### 매개변수

- `separator` {{optional_inline}}
  - : 배열의 각 요소를 구분할 문자열을 지정합니다. 이 `separator`는 필요한 경우 문자열로 변환됩니다.
    생략하면 배열의 요소들이 쉼표(",")로 구분됩니다.

### 반환 값

모든 배열 요소를 연결한 문자열.

## 예제

### join() 사용하기

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.join(); // '1,2,3'
uint8.join(" / "); // '1 / 2 / 3'
uint8.join(""); // '123'
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `TypedArray.prototype.join` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.join()")}}
