---
title: ArrayBuffer.prototype.transferToFixedLength()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transferToFixedLength
l10n:
  sourceCommit: a0b5c6af9c854702d15ec800b529064fb7d297db
---

{{JSRef}}

{{jsxref("ArrayBuffer")}} 인스턴스의 **`transferToFixedLength()`** 메서드는 이 버퍼의 내용과 동일한 바이트의 크기 조절이 불가능한 `ArrayBuffer`를 새로 생성하고 이 버퍼를 분리합니다.

## 구문

```js-nolint
transferToFixedLength()
transferToFixedLength(newByteLength)
```

### 매개변수

- `newByteLength`
  - : 새 `ArrayBuffer`의 {{jsxref("ArrayBuffer/byteLength", "byteLength")}}입니다. 기본값은 이 `ArrayBuffer`의 `byteLength`입니다.
    - `newByteLength`가 이 `ArrayBuffer`의 `byteLength`보다 작으면 해당 버퍼에 담지못해 넘치는 바이트는 삭제됩니다.
    - `newByteLength`가 이 `ArrayBuffer`의 `byteLength`보다 크다면 남는 바이트는 0으로 채워집니다.

### 반환 값

새로운 {{jsxref("ArrayBuffer")}} 객체. 해당 객체의 내용은 이 `ArrayBuffer`의 내용으로 초기화되며, 여분의 바이트가 있다면 0으로 채워집니다. 새로운 `ArrayBuffer`는 언제나 크기 조절이 불가능합니다. 원본 `ArrayBuffer`는 분리됩니다.

### 예외

- {{jsxref("TypeError")}}
  - : 이 `ArrayBuffer`가 이미 분리되었다면 발생합니다.

## 설명

{{jsxref("ArrayBuffer/transfer", "transfer()")}}와 달리, `transferToFixedLength()`는 항상 크기 조정이 불가능한 `ArrayBuffer`를 생성합니다. 즉, 이 `ArrayBuffer`가 크기 조정이 가능하더라도 `newByteLength`가 `maxByteLength`보다 클 수 있습니다. 자세한 내용은 [ArrayBuffer 전송하기](/ko/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transfering_arraybuffers)를 참조하세요.

## 예제

### 고정 길이 버퍼에 크기 조정 가능한 ArrayBuffer 전송하기

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

const buffer2 = buffer.transferToFixedLength();
console.log(buffer2.byteLength); // 8
console.log(buffer2.resizable); // false
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4
```

`transferToFixedLength`를 사용하면 `newByteLength`는 원본 `ArrayBuffer`의 `maxByteLength`보다 클 수 있습니다.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

const buffer2 = buffer.transferToFixedLength(20);
console.log(buffer2.byteLength); // 20
console.log(buffer2.resizable); // false
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `ArrayBuffer.prototype.transferToFixedLength()` in `core-js`](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
