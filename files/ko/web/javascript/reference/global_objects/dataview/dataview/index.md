---
title: DataView() 생성자
slug: Web/JavaScript/Reference/Global_Objects/DataView/DataView
---

{{JSRef}}

**`DataView()`** 생성자는 새로운 {{jsxref("DataView")}} 객체를 생성합니다.

{{InteractiveExample("JavaScript Demo: DataView Constructor")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Create a couple of views
const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes
view1.setInt8(12, 42); // Put 42 in slot 12

console.log(view2.getInt8(0));
// Expected output: 42
```

## 구문

```js
    new DataView(buffer [, byteOffset [, byteLength]])
```

### 매개변수

- `buffer`
  - : 새로운 `DataView` 객체의 저장소로 사용할 {{jsxref("ArrayBuffer")}} 또는 {{jsxref("SharedArrayBuffer")}} {{experimental_inline}}.
- `byteOffset` {{optional_inline}}
  - : 새로운 뷰가 참조할 첫 번째 바이트로의 바이트 단위 오프셋. 지정하지 않을 경우 버퍼 뷰는 첫 번째 바이트부터 시작합니다.
- `byteLength` {{optional_inline}}
  - : 바이트 배열의 요소 수. 지정하지 않을 경우 뷰의 길이는 버퍼의 길이와 같아집니다.

### 반환 값

지정한 데이터 버퍼를 나타내는 새로운 `DataView` 객체.

`DataView` 객체는 배열 버퍼의 "인터프리터"라고 생각하면 좀 더 쉽습니다. `DataView`는 읽기와 쓰기 모두에서 버퍼에 잘 맞도록 숫자를 올바르게 변환하는 법, 즉 정수/부동소수점 실수 변환, 엔디언 등 이진 형식으로 나타낸 숫자의 처리법을 알고 있습니다.

### 예외

- {{jsxref("RangeError")}}
  - : `byteOffset` 또는 `byteLength` 매개변수가 버퍼의 끝을 벗어남.예를 들어, 버퍼가 16바이트 길이인데 `byteOffset`을 8로, `byteLength`를 10으로 설정할 경우 총 길이 18로서 2바이트를 초과하므로 오류가 발생합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("DataView")}}
