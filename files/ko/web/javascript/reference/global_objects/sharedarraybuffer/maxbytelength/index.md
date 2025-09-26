---
title: SharedArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/maxByteLength
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

{{jsxref("SharedArrayBuffer")}} 인스턴스의 **`maxByteLength`** 접근자 속성은 `SharedArrayBuffer`의 크기 조절이 가능한 바이트 단위의 최대 길이를 반환합니다.

## 설명

`maxByteLength` 접근자 속성은 설정 접근자 함수가 `undefined`으로, 이 속성은 읽을 수만 있습니다. 이 값은 shared array가 생성될 때 설정되며, {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}} 생성자의 `maxByteLength` 옵션을 통해 설정되며 변경할 수 없습니다.

`SharedArrayBuffer` 값을 지정하지 않고 `SharedArrayBuffer`가 생성된 경우 이 속성은 `SharedArrayBuffer`의 {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}}의 값과 같은 값을 반환합니다.

## 예제

### maxByteLength 사용하기

이 예제에서 최대 크기가 16바이트까지 크기 조절이 가능한 8바이트 버퍼를 만들고 이 버퍼의 `maxByteLength`를 반환합니다.

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.maxByteLength; // 16
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("SharedArrayBuffer")}}
