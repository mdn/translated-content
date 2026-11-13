---
title: TypedArray.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/length
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

{{jsxref("TypedArray")}} 인스턴스의 **`length`** 접근자 속성은 이 형식화 배열의 요소의 수를 반환합니다.

{{InteractiveExample("JavaScript Demo: TypedArray.length", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer, 2);

console.log(uint8.length);
// Expected output: 6
```

## 설명

`length` 속성은 설정된 접근자 함수가 `undefined`인 접근자 속성으로, 이 속성을 읽을 수만 있습니다. 이 값은 TypedArray를 구성할 때 설정되며 변경할 수 없습니다. TypeArray에서 `byteOffset` 또는 `length`를 지정하지 않으면 참조된 {{jsxref("ArrayBuffer")}}의 길이가 반환됩니다. TypeArray는 [TypeArray 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypeArray#typedarray_객체) 중 하나입니다.

## 예제

### `length` 속성 사용하기

```js
const buffer = new ArrayBuffer(8);

let uint8 = new Uint8Array(buffer);
uint8.length; // 8 (버퍼의 길이와 일치)

uint8 = new Uint8Array(buffer, 1, 5);
uint8.length; // 5 (Uint8Array를 만들 때 지정된 대로)

uint8 = new Uint8Array(buffer, 2);
uint8.length; // 6 (만든 Uint8Array의 오프셋으로 인해)
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("TypedArray")}}
