---
title: TypedArray.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/length
---

{{JSRef}}

**`length`** 접근자(accessor) 속성(property)은 형식화 배열의 (요소) 길이를 나타냅니다.

## 설명

`length` 속성은 set 접근자 함수가 `undefined`인 접근자 속성입니다, 이 속성을 읽을 수만 있음을 뜻하는. 값은 *TypedArray*가 만들어질 때 수립되어 변경될 수 없습니다. *TypedArray*가 `byteOffset` 또는 `length`를 지정하지 않은 경우, 참조되는 {{jsxref("ArrayBuffer")}}의 길이가 반환됩니다. *TypedArray*는 [TypedArray 객체 유형](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_객체) 중 하나입니다.

## 예제

### `length` 속성 사용

```js
var buffer = new ArrayBuffer(8);

var uint8 = new Uint8Array(buffer);
uint8.length; // 8 (버퍼의 길이와 일치)

var uint8 = new Uint8Array(buffer, 1, 5);
uint8.length; // 5 (Uint8Array를 만들 때 지정된 대로)

var uint8 = new Uint8Array(buffer, 2);
uint8.length; // 6 (만든 Uint8Array의 오프셋으로 인해)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
