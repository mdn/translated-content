---
title: DataView.prototype.setBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setBigInt64
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

{{jsxref("DataView")}} 인스턴스의 **`setBigInt64()`** 메서드는 BigInt를 받아
이 `DataView`의 지정된 바이트 오프셋의 8 바이트의 공간에 64비트 부호 있는 정수로 저장합니다.
정렬 제약 조건은 없으며, 범위 내의 모든 오프셋에서 멀티바이트 값을 저장할 수 있습니다.

{{InteractiveExample("JavaScript Demo: DataView.setBigInt64()")}}

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
setBigInt64(byteOffset, value)
setBigInt64(byteOffset, value, littleEndian)
```

### 매개변수

- `byteOffset`
  - : 데이터를 저장할 데이터 뷰의 시작점으로부터의 바이트 단위의 오프셋.
- `value`
  - : {{jsxref("BigInt")}}로 설정할 값. 어떻게 값이 바이트로 인코딩되는지는 [값 인코딩 및 정규화](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization)를 보시기 바랍니다.
- `littleEndian` {{optional_inline}}
  - : {{Glossary("Endianness", "리틀 엔디언 혹은 빅 엔디언")}} 형식으로 데이터를 저장할지 여부를 나타냅니다. `false` 혹은 `undefined`이라면 빅 엔디언 값을 읽습니다.

### 반환 값

{{jsxref("undefined")}}.

### 예외

- {{jsxref("RangeError")}}
  - : 뷰의 끝을 넘어서 저장하려고 하는 `byteOffset`이 설정되면 발생합니다.

## 예제

### setBigInt64() 사용하기

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setBigInt64(0, 3n);
dataview.getBigInt64(1); // 768n
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
