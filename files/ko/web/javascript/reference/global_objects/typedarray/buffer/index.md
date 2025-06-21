---
title: TypedArray.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/buffer
---

{{JSRef}}

**`buffer`** 접근자 속성은 생성 시 *TypedArray*에서 참조하는 {{jsxref("ArrayBuffer")}}를 나타냅니다.

{{InteractiveExample("JavaScript Demo: TypedArray.buffer", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);

console.log(uint16.buffer.byteLength);
// Expected output: 8
```

## 설명

`buffer` 속성은 set 접근자 함수가 `undefined`인 속성으로, 이 속성은 읽을수만 있습니다. 값은 *TypedArray*가 생성될 때 설정되어 변경할 수 없습니다. *TypedArray*는 [TypedArray 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_객체) 중 하나입니다.

## 예제

### buffer 속성 사용하기

```js
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
uint16.buffer; // ArrayBuffer { byteLength: 8 }
```

### 잘린 배열 보기에서 기반 버퍼에 액세스하기

```js
const buffer = new ArrayBuffer(1024);
const arr = new Uint8Array(buffer, 64, 128);
console.log(arr.byteLength); // 128
console.log(arr.buffer.byteLength); // 1024
console.log(arr.buffer === buffer); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
