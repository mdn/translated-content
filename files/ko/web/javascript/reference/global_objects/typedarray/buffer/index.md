---
title: TypedArray.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/buffer
tags:
  - JavaScript
  - Property
  - Prototype
  - TypedArray
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/buffer
browser-compat: javascript.builtins.TypedArray.buffer
---
{{JSRef}}

**`buffer`** 접근자(accessor) 속성(property)은 생성 시간에 *TypedArray*에 의해 참조되는 {{jsxref("ArrayBuffer")}}를 나타냅니다.

## 구문

    typedArray.buffer

## 설명

`buffer` 속성은 set 접근자 함수가 `undefined`인 접근자 속성입니다, 이 속성을 읽을 수만 있음을 뜻하는. 그 값은 *TypedArray*가 만들어질 때 수립되어 변경될 수 없습니다. *TypedArray*는 [TypedArray 객체 유형](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_객체) 중 하나입니다.

## 예

### `buffer` 속성 사용

```js
var buffer = new ArrayBuffer(8);
var uint16 = new Uint16Array(buffer);
uint16.buffer; // ArrayBuffer { byteLength: 8 }
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
