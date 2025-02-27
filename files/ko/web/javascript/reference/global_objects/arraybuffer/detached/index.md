---
title: ArrayBuffer.prototype.detached
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/detached
l10n:
  sourceCommit: a0b5c6af9c854702d15ec800b529064fb7d297db
---

{{JSRef}}

{{jsxref("ArrayBuffer")}} 인스턴스의 **`detached`** 접근자 속성은 이 버퍼가 분리되었는지(전송되었는지) 여부를 가리키는 불리언을 반환합니다.

## 설명

`detached` 속성은 설정 접근자 함수가 `undefined`인 접근자 속성으로, 즉 이 속성만 오직 읽을 수만 있습니다. `ArrayBuffer`가 처음 생성될 때 값은 `false`입니다. 이 값은 인스턴스를 기본 메모리에서 분리하는 `ArrayBuffer`가 [transferred](/ko/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers)인 경우 `true`가 됩니다. 버퍼가 분리되면 더 이상 사용할 수 없습니다.

## 예제

### detached 사용하기

```js
const buffer = new ArrayBuffer(8);
console.log(buffer.detached); // false
const newBuffer = buffer.transfer();
console.log(buffer.detached); // true
console.log(newBuffer.detached); // false
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `ArrayBuffer.prototype.detached` in `core-js`](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
