---
title: ArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

{{jsxref("ArrayBuffer")}} 인스턴스의 **`maxByteLength`** 접근자 속성은 배열 버퍼의 크기 조절이 가능한 바이트 단위의 최대 길이를 반환합니다.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.maxByteLength")}}

```js interactive-example
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

console.log(buffer.byteLength);
// Expected output: 8

console.log(buffer.maxByteLength);
// Expected output: 16
```

## 설명

`maxByteLength` 접근자 속성은 설정 접근자 함수가 `undefined`으로, 이 속성은 읽을 수만 있습니다. 이 값은 배열이 생성될 때 설정되며, {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} 생성자의 `maxByteLength` 옵션을 통해 설정되며 변경할 수 없습니다.

이 `ArrayBuffer`가 분리된 경우 이 속성은 0을 반환합니다. `maxByteLength` 값을 지정하지 않고 `ArrayBuffer`가 생성된 경우 이 속성은 `ArrayBuffer`의 {{jsxref("ArrayBuffer/byteLength", "byteLength")}}의 값과 같은 값을 반환합니다.

## 예제

### maxByteLength 사용하기

이 예제에서 최대 크기가 16바이트까지 크기 조절이 가능한 8바이트 버퍼를 만들고 이 버퍼의 `maxByteLength`를 반환합니다.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.maxByteLength; // 16
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.byteLength")}}
- {{jsxref("ArrayBuffer.prototype.resize()")}}
