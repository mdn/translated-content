---
title: TypedArray.BYTES_PER_ELEMENT
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`TypedArray.BYTES_PER_ELEMENT`** 속성은 각 형식화 배열 요소의 바이트 크기입니다.

{{InteractiveExample("JavaScript Demo: TypedArray.BYTES_PER_ELEMENT", "shorter")}}

```js interactive-example
console.log(Float64Array.BYTES_PER_ELEMENT);
// Expected output: 8

console.log(Int8Array.BYTES_PER_ELEMENT);
// Expected output: 1
```

## 값

`TypedArray`의 타입에 따라 값이 달라지는 숫자입니다.

{{js_property_attributes(0,0,0)}}

## 설명

`TypedArray` 객체는 요소 당 바이트 수 및 바이트가 해석되는 방법이 서로 다릅니다.
`BYTES_PER_ELEMENT` 상수는 주어진 `TypedArray`의 각 요소가 갖는 바이트 수를 포함합니다.

`BYTES_PER_ELEMENT` 속성은 인스턴스 속성이자 정적 속성입니다.
해당 속성은 `TypedArray` 하위 클래스의 생성자와 해당 생성자의 인스턴스 모두에서 사용 가능합니다.

인스턴스 속성으로 `BYTES_PER_ELEMENT`는 생성자의 `prototype`에 정의됩니다.

```js
console.log(Object.hasOwn(Int8Array.prototype, "BYTES_PER_ELEMENT")); // true
```

## 예제

### BYTES_PER_ELEMENT 사용하기

정적 속성으로 사용하기

```js
Int8Array.BYTES_PER_ELEMENT; // 1
Uint8Array.BYTES_PER_ELEMENT; // 1
Uint8ClampedArray.BYTES_PER_ELEMENT; // 1
Int16Array.BYTES_PER_ELEMENT; // 2
Uint16Array.BYTES_PER_ELEMENT; // 2
Int32Array.BYTES_PER_ELEMENT; // 4
Uint32Array.BYTES_PER_ELEMENT; // 4
Float32Array.BYTES_PER_ELEMENT; // 4
Float64Array.BYTES_PER_ELEMENT; // 8
BigInt64Array.BYTES_PER_ELEMENT; // 8
BigUint64Array.BYTES_PER_ELEMENT; // 8
```

인스턴스 속성으로 사용하기

```js
new Int8Array([]).BYTES_PER_ELEMENT; // 1
new Uint8Array([]).BYTES_PER_ELEMENT; // 1
new Uint8ClampedArray([]).BYTES_PER_ELEMENT; // 1
new Int16Array([]).BYTES_PER_ELEMENT; // 2
new Uint16Array([]).BYTES_PER_ELEMENT; // 2
new Int32Array([]).BYTES_PER_ELEMENT; // 4
new Uint32Array([]).BYTES_PER_ELEMENT; // 4
new Float32Array([]).BYTES_PER_ELEMENT; // 4
new Float64Array([]).BYTES_PER_ELEMENT; // 8
new BigInt64Array([]).BYTES_PER_ELEMENT; // 8
new BigUint64Array([]).BYTES_PER_ELEMENT; // 8
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
