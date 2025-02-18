---
title: DataView.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

{{jsxref("DataView")}} 인스턴스의 **`buffer`** 접근자 속성은 생성 시 이 뷰가 참조한
{{jsxref("ArrayBuffer")}} 또는 {{jsxref("SharedArrayBuffer")}}를 반환합니다.

{{InteractiveExample("JavaScript Demo: DataView.buffer")}}

```js interactive-example
// Create an ArrayBuffer
const buffer = new ArrayBuffer(123);

// Create a view
const view = new DataView(buffer);

console.log(view.buffer.byteLength);
// Expected output: 123
```

## 설명

`buffer` 속성은 설정된 접근자 함수가 `undefined`인 접근자 속성으로, 이 속성은 오직 읽을 수만 있습니다.
이 값은 `DataView`가 생성될 때 설정되며 변경할 수 없습니다.

## 예제

### buffer 속성 사용하기

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.buffer; // ArrayBuffer { byteLength: 8 }
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
