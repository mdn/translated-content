---
title: DataView.prototype.getFloat16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat16
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

{{jsxref("DataView")}} 인스턴스의 **`getFloat16()`** 메서드는 이 `DataView`의 지정된 바이트 오프셋에서 2바이트를 읽고 이를 16비트 부동소수점 숫자로 해석합니다. 정렬 제약 조건은 없으며, 범위 내의 모든 오프셋에서 멀티바이트 값을 가져올 수 있습니다.

{{InteractiveExample("JavaScript Demo: DataView.getFloat16()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setFloat16(1, Math.PI);

console.log(view.getFloat16(1));
// Expected output: 3.140625
```

## 구문

```js-nolint
getFloat16(byteOffset)
getFloat16(byteOffset, littleEndian)
```

### 매개변수

- `byteOffset`
  - : 데이터를 읽을 뷰의 시작 부분으로부터의 오프셋(바이트 단위)입니다.
- `littleEndian` {{optional_inline}}
  - : [리틀 엔디언 혹은 빅 엔디언](/ko/docs/Glossary/Endianness) 형식으로 저장되는지 여부를 나타냅니다. 만약 `false` 혹은 `undefined`라면 빅 엔디언 값을 읽습니다.

### 반환 값

`-65504`부터 `65504`까지의 부동 소수점 숫자.

### 예외

- {{jsxref("RangeError")}}
  - : 데이터 뷰의 끝을 넘어서 읽을 수 있는 `byteOffset`이 설정된 경우 발생합니다.

## 예제

### getFloat16() 사용하기

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getFloat16(1)); // 0.00001537799835205078
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `DataView.prototype.getFloat16` 폴리필](https://github.com/zloirock/core-js#float16-methods)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float16Array")}}
