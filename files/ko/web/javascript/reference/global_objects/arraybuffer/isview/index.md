---
title: ArrayBuffer.isView()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`ArrayBuffer.isView()`** 정적 메서드는 주어진 값이 `ArrayBuffer` 뷰, 즉 [형식화 배열 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) 또는 {{jsxref("DataView")}} 중 하나인지 판별합니다.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.isView()", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

console.log(ArrayBuffer.isView(new Int32Array()));
// Expected output: true
```

## 구문

```js-nolint
ArrayBuffer.isView(value)
```

### 매개변수

- `value`
  - : 판별할 값.

### 반환 값

주어진 값이 {{jsxref("ArrayBuffer")}} 뷰라면 `true`, 아니면 `false`.

## 예제

### isView() 사용하기

```js
ArrayBuffer.isView(); // false
ArrayBuffer.isView([]); // false
ArrayBuffer.isView({}); // false
ArrayBuffer.isView(null); // false
ArrayBuffer.isView(undefined); // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array()); // true
ArrayBuffer.isView(new Float32Array()); // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

const buffer = new ArrayBuffer(2);
const dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 가이드
