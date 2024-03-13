---
title: ArrayBuffer() 생성자
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
---

{{JSRef}}

**`ArrayBuffer()`** 생성자는 {{jsxref("ArrayBuffer")}} 객체를 생성합니다.

{{EmbedInteractiveExample("pages/js/arraybuffer-constructor.html")}}

## 구문

```js
new ArrayBuffer(length);
```

### 매개변수

- `length`
  - : 생성할 `ArrayBuffer`의 바이트 크기.

### 반환 값

지정한 크기를 가진 새로운 `ArrayBuffer` 객체. 내용은 모두 0으로 초기화됩니다.

### 예외

`length`가 {{jsxref("Number.MAX_SAFE_INTEGER")}}보다 크거나, 음수면 {{jsxref("RangeError")}}.

## 예제

아래 예제 코드는 8바이트 버퍼를 생성한 후 {{jsxref("Int32Array")}} 뷰로 그 버퍼를 참조합니다.

```js
var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
