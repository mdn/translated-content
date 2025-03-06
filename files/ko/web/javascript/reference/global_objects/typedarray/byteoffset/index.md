---
title: TypedArray.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

{{jsxref("TypedArray")}} 인스턴스의 **`byteOffset`** 접근자 속성은 이 형식화 배열의 {{jsxref("ArrayBuffer")}} 혹은 {{jsxref("SharedArrayBuffer")}} 시작점에서의 바이트 단위 오프셋을 반환합니다.

## 설명

`byteOffset` 속성은 설정된 접근자 함수가 `undefined`인 접근자 속성으로, 이 속성은 읽을 수만 있습니다. 이 값은 TypedArray가 생성될 때 설정되며 변경할 수 없습니다. TypedArray는 [TypedArray 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_객체) 중 하나입니다.

## 예제

### `byteOffset` 속성 사용

```js
const buffer = new ArrayBuffer(8);

const uint8array1 = new Uint8Array(buffer);
uint8array1.byteOffset; // 0 (지정된 오프셋이 없음)

const uint8array2 = new Uint8Array(buffer, 3);
uint8array2.byteOffset; // 3 (Uint8Array를 만들 때 지정된 대로)
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("TypedArray")}}
