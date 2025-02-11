---
title: DataView.prototype.getBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

{{jsxref("DataView")}} 인스턴스의 **`getBigInt64()`** 메서드는 이 `DataView`의 지정된 바이트 오프셋에서
8바이트를 읽고 이를 부호있는 64비트 정수로 해석합니다. 정렬 제약 조건은 없으며, 범위 내의 모든 오프셋에서 멀티바이트 값을 가져올 수 있습니다.

{{InteractiveExample("JavaScript Demo: DataView.getBigInt64()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Highest possible BigInt value that fits in a signed 64-bit integer
const max = 2n ** (64n - 1n) - 1n;

const view = new DataView(buffer);
view.setBigInt64(1, max);

console.log(view.getBigInt64(1));
// Expected output: 9223372036854775807n
```

## 구문

```js-nolint
getBigInt64(byteOffset)
getBigInt64(byteOffset, littleEndian)
```

### 매개변수

- `byteOffset`
  - : 데이터를 읽을 데이터 뷰의 시작점으로부터의 오프셋(바이트).
- `littleEndian` {{optional_inline}}
  - : [리틀 엔디언 혹은 빅 엔디언](/ko/docs/Glossary/Endianness) 형식으로 저장할지
    여부를 나타냅니다. `false` 혹은 `undefined`이라면 빅 엔디안 값을 읽습니다.

### 반환 값

-2<sup>63</sup> 이상 2<sup>63</sup>-1 이하의 {{jsxref("BigInt")}}

### 예외

- {{jsxref("RangeError")}}
  - : `byteOffset`이 이 뷰의 끝을 넘어 읽을 수 있는 값이 설정될 경우 발생합니다.

## 예제

### getBigInt64() 사용하기

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getBigInt64(1)); // 72623859790382856n
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 가이드
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt64Array")}}
