---
title: ArrayBuffer.isView()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
---

{{JSRef}}

**`ArrayBuffer.isView()`** 메서드는 주어진 값이 `ArrayBuffer` 뷰, 즉 [형식화 배열 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) 또는 {{jsxref("DataView")}}인지 판별합니다..

{{EmbedInteractiveExample("pages/js/arraybuffer-isview.html")}}

## 구문

```js
ArrayBuffer.isView(value);
```

### 매개변수

- `value`
  - : 판별할 값.

### 반환 값

주어진 값이 {{jsxref("ArrayBuffer")}} 뷰라면 `true`, 아니면 `false`.

## 예제

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

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
