---
title: TypedArray.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
---

{{JSRef}}

**`byteOffset`** 접근자(accessor) 속성(property)은 그 {{jsxref("ArrayBuffer")}}의 시작점에서 형식화 배열의 오프셋(단위 바이트)을 나타냅니다.

## 구문

```js
typedarray.byteOffset;
```

## 설명

`byteOffset` 속성은 set 접근자 함수가 `undefined`인 접근자 속성입니다, 이 속성을 읽을 수만 있음을 뜻하는. 그 값은 *TypedArray*가 만들어질 때 수립되어 변경될 수 없습니다. *TypedArray*는 [TypedArray 객체 유형](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_객체) 중 하나입니다.

## 예

### `byteOffset` 속성 사용

```js
var buffer = new ArrayBuffer(8);

var uint8 = new Uint8Array(buffer);
uint8.byteOffset; // 0 (지정된 오프셋이 없음)

var uint8 = new Uint8Array(buffer, 3);
uint8.byteOffset; // 3 (Uint8Array를 만들 때 지정된 대로)
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
