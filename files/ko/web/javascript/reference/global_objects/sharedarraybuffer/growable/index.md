---
title: SharedArrayBuffer.prototype.growable
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable
l10n:
  sourceCommit: 509fde687ed349da8017a546f9cf094163f24844
---

{{JSRef}}

{{jsxref("SharedArrayBuffer")}} 인스턴스의 **`growable`** 접근자 속성은 `SharedArrayBuffer` 크기가 커질 수 있는지 여부를 반환합니다.

## 설명

`growable` 속성은 설정 접근자 함수가 `undefined`인 접근자 속성으로, 읽기만 가능합니다. 이 값은 배열이 생성될 때 설정됩니다. 생성자에서 `maxByteLength` 옵션이 설정되면, `growable`은 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.

## 예제

### growable 사용하기

최대 16바이트까지 늘어날 수 있는 8바이트 버퍼를 생성하고 `growable` 속성을 확인해서 `growable`이 `true`라면 크기를 늘리는 예제입니다.

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

if (buffer.growable) {
  console.log("SAB is growable!");
  buffer.grow(12);
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
