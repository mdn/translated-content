---
title: DataView.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

{{jsxref("DataView")}} 인스턴스의 **`byteLength`** 접근자 속성은 이 뷰의 길이(바이트 단위)를 반환합니다.

{{InteractiveExample("JavaScript Demo: DataView.byteLength")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view1.byteLength + view2.byteLength); // 16 + 4
// Expected output: 20
```

## 설명

`byteLength` 속성은 설정된 접근자 함수가 `undefined`인 접근자 속성으로, 읽기 전용 속성입니다. 이 값은 `DataView`가 생성될 때 설정되며 변경할 수 없습니다. `DataView`가 오프셋이나 `byteLength`를 지정하지 않으면 참조된 `ArrayBuffer` 또는 `SharedArrayBuffer`의 `byteLength`가 반환됩니다.

## 예제

### byteLength 속성 사용하기

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteLength; // 8 (버퍼의 byteLength와 일치)

const dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (DataView 생성 시 명시된 값 때문)

const dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (DataView 의 생성자의 오프셋 때문)
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
