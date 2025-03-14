---
title: DataView.prototype.getUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint8
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

{{jsxref("DataView")}} 인스턴스의 **`getUint8()`** 메서드는 이 `DataView`의 지정된 바이트 오프셋에서
1바이트를 읽고 이를 8비트 부호 없는 정수로 해석합니다.

{{InteractiveExample("JavaScript Demo: DataView.getUint8()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint8(1, 255); // Max unsigned 8-bit integer

console.log(view.getUint8(1));
// Expected output: 255
```

## 구문

```js-nolint
getUint8(byteOffset)
```

### 매개변수

- `byteOffset`
  - : 데이터를 읽을 뷰의 시작 부분으로부터의 오프셋(바이트 단위)입니다.

### 반환 값

0 이상 255 이하의 정수.

### 예외

- {{jsxref("RangeError")}}
  - : 뷰의 끝을 넘어 읽는 수도 있는 `byteOffset`이 설정된 경우 발생합니다.

## 설명

정렬 제약 조건은 없으며, 임의의 오프셋에서 멀티바이트 값을 가져올 수 있습니다.

## 예제

### getUint8() 메서드 사용하기

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getUint8(1)); // 1
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 가이드
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint8Array")}}
