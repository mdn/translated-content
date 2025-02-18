---
title: TypedArray.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength
---

{{JSRef}}

**`byteLength`** 접근자 속성은 형식화 배열의 길이(바이트)를 나타냅니다.

{{InteractiveExample("JavaScript Demo: TypedArray.byteLength", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer, 2);

console.log(uint8.byteLength);
// Expected output: 6
```

## 설명

`byteLength` 속성은 접근자 설정 함수가 `undefined`인 접근자 속성으로 이 속성은 읽을 수만 있습니다. 값은 *TypedArray*가 생성될 때 설정되며 변경할 수 없습니다. *TypedArray*가 `byteOffset` 또는 `length`를 지정하지 않으면 참조된 `ArrayBuffer`의 `length`가 반환됩니다. *TypedArray*는 [TypedArray 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_객체) 중 하나입니다.

## 예제

### byteLength 속성 사용하기

```js
const buffer = new ArrayBuffer(8);

const uint8 = new Uint8Array(buffer);
uint8.byteLength; // 8 (buffer의 byteLength와 일치)

const uint8newLength = new Uint8Array(buffer, 1, 5);
uint8newLength.byteLength; // 5 (Uint8Array를 만들 때 지정된 대로)

const uint8offSet = new Uint8Array(buffer, 2);
uint8offSet.byteLength; // 6 (생성된 Uint8Array의 오프셋으로 인해)
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
