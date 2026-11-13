---
title: ArrayBuffer.prototype.resizable
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

{{jsxref("ArrayBuffer")}} 인스턴스의 **`resizable`** 접근자 속성은 배열 버퍼가 크기 조정이 가능한지 불가한지 여부를 반환합니다.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.resizable")}}

```js interactive-example
const buffer1 = new ArrayBuffer(8, { maxByteLength: 16 });
const buffer2 = new ArrayBuffer(8);

console.log(buffer1.resizable);
// Expected output: true

console.log(buffer2.resizable);
// Expected output: false
```

## 설명

`resizeable` 속성은 설정 접근자 함수가 `undefined`인 접근자 속성으로 이 속성은 읽을 수 만 있습니다. 이 값은 배열이 생성될 때 설정됩니다. 생성자에서 `maxByteLength` 옵션을 설정했다면 `resizeable`은 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.

## 예제

### resizable 사용하기

이 예제에서는 최대 16바이트 길이로 크기를 조정할 수 있는 8바이트 버퍼를 만든 다음 `resizable` 속성을 확인하고 `resizable`이 `true`를 반환하면 크기를 조정합니다.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("Buffer is resizable!");
  buffer.resize(12);
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
- {{jsxref("ArrayBuffer.prototype.resize()")}}
