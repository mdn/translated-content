---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
---

{{JSRef}}

**`byteLength`** 접근자 속성은 {{jsxref("ArrayBuffer")}}의 길이를 바이트 단위로 반환합니다.

{{EmbedInteractiveExample("pages/js/arraybuffer-bytelength.html")}}

## 구문

```js
arraybuffer.byteLength;
```

## 설명

`byteLength` 속성은 설정자 속성이 `undefined`인 접근자 속성으로, 오직 읽기만 가능합니다. `byteLength`는 배열 버퍼를 처음 생성할 때 정해지며 바꿀 수 없습니다. `ArrayBuffer`가 분리된 경우 0을 반환합니다.

## 예제

```js
var buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("ArrayBuffer")}}
