---
title: DataView.prototype.getInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt32
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

{{jsxref("DataView")}} 인스턴스의 **`getInt32()`** 메서드는 이 `DataView`의 지정된 바이트 오프셋에서
4바이트를 읽고 이를 32비트 부호 있는 정수로 해석합니다. 정렬 제약 조건은 없으며, 범위 내의 모든 오프셋에서
멀티바이트 값을 가져올 수 있습니다.

{{InteractiveExample("JavaScript Demo: DataView.getInt32()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt32(1, 2147483647); // Max signed 32-bit integer

console.log(view.getInt32(1));
// Expected output: 2147483647
```

## 구문

```js-nolint
getInt32(byteOffset)
getInt32(byteOffset, littleEndian)
```

### 매개변수

- `byteOffset`
  - : 데이터를 읽을 데이터 뷰의 시작점으로부터의 오프셋(바이트).
- `littleEndian` {{optional_inline}}
  - : [리틀 엔디언 혹은 빅 엔디언](/ko/docs/Glossary/Endianness) 형식으로 저장되는지 여부를
    나타냅니다. 만약 `false` 혹은 `undefined`라면 빅 엔디언 값을 읽습니다.

### 반환 값

-2147483648 이상 2147483647 이하의 정수

### 예외

- {{jsxref("RangeError")}}
  - : 데이터 뷰의 끝을 넘어서 읽을 수 있는 `byteOffset`이 설정된 경우 발생합니다.

## 예제

### getInt32() 메서드 사용하기

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getInt32(1)); // 16909060
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 가이드
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int32Array")}}
