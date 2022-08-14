---
title: TypedArray.BYTES_PER_ELEMENT
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
tags:
  - JavaScript
  - Property
  - Reference
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
---
{{JSRef}}

**`TypedArray.BYTES_PER_ELEMENT`** 속성은 각 형식화 배열 요소의 크기를 바이트로 나타냅니다.

{{EmbedInteractiveExample("pages/js/typedarray-bytes-per-element.html")}}{{js_property_attributes(0,0,0)}}

## 설명

TypedArray 객체는 요소 당 바이트 수 및 바이트가 해석되는 방법으로 서로 다릅니다. `BYTES_PER_ELEMENT` 상수는 주어진 TypedArray의 각 요소가 갖는 바이트 수를 포함합니다.

## 예제

```js
Int8Array.BYTES_PER_ELEMENT;         // 1
Uint8Array.BYTES_PER_ELEMENT;        // 1
Uint8ClampedArray.BYTES_PER_ELEMENT; // 1
Int16Array.BYTES_PER_ELEMENT;        // 2
Uint16Array.BYTES_PER_ELEMENT;       // 2
Int32Array.BYTES_PER_ELEMENT;        // 4
Uint32Array.BYTES_PER_ELEMENT;       // 4
Float32Array.BYTES_PER_ELEMENT;      // 4
Float64Array.BYTES_PER_ELEMENT;      // 8
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
