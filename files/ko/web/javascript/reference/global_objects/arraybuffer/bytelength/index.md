---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

**`byteLength`** 접근자 속성은 {{jsxref("ArrayBuffer")}}의 길이를 바이트 단위로 반환합니다.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.byteLength")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);

// Use byteLength to check the size
const bytes = buffer.byteLength;

console.log(bytes);
// Expected output: 8
```

## 설명

`byteLength` 속성은 설정된 접근자 함수가 `undefined`인 접근자 속성으로, 이 속성은 읽을 수만 있습니다. 이 값은 `DataView`가 생성될 때 설정되며 변경할 수 없습니다. `DataView`가 오프셋이나 `byteLength`를 지정하지 않은 경우 참조된 `ArrayBuffer` 혹은 `SharedArrayBuffer`의 `byteLength`가 반환됩니다.

## 예제

### byteLength 속성 사용하기

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteLength; // 8 (버퍼의 byteLength와 일치합니다)

const dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (DataView 생성 시 명시된 값)

const dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (DataView 생성 시의 오프셋)
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
