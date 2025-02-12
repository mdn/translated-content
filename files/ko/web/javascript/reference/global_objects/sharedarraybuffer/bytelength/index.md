---
title: SharedArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

{{jsxref("SharedArrayBuffer")}} 인스턴스의 **`byteLength`** 접근자 속성은 이 `SharedArrayBuffer`의 바이트 단위 길이를 반환합니다.

{{InteractiveExample("JavaScript Demo: SharedArrayBuffer.byteLength", "shorter")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## 설명

`byteLength` 속성은 접근자 속성으로 설정 접근자 함수는 `undefined`입니다. 즉, 이 속성은 읽기 전용입니다. 이 값은 공유 배열이 생성될때 값이 설정되며, 변경할 수 없습니다.

## 예제

### byteLength 사용하기

```js
const sab = new SharedArrayBuffer(1024);
sab.byteLength; // 1024
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("SharedArrayBuffer")}}
