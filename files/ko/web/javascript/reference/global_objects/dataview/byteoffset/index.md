---
title: DataView.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

{{jsxref("DataView")}} 인스턴스의 **`byteOffset`** 접근자 속성은 이 뷰의 오프셋(바이트 단위)을 {{jsxref("ArrayBuffer")}} 또는 {{jsxref("SharedArrayBuffer")}}의 시작 부분으로부터 반환합니다.

{{InteractiveExample("JavaScript Demo: DataView.byteOffset")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view.byteOffset);
// Expected output: 12
```

## 설명

`byteOffset` 속성은 설정된 접근자 함수가 `undefined`인 접근자 속성으로, 읽기 전용 속성입니다. 이 값은 `DataView`가 생성될 때 설정되며 변경할 수 없습니다. `DataView`가 생성될 때 이 값이 설정되기 때문에 변경할 수 없습니다.

## 예제

### byteOffset 속성 사용하기

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteOffset; // 0 (오프셋이 명시되지 않음)

const dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (DataView 생성시 명시된 숫자)
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
