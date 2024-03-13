---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
---

{{JSRef}}

**`slice()`** 메서드는 현재 `ArrayBuffer`를 주어진 시작과 끝점에 맞춰 자른 새로운 `ArrayBuffer`를 반환합니다.

{{EmbedInteractiveExample("pages/js/arraybuffer-slice.html")}}

## 구문

```js
    arraybuffer.slice(begin[, end])
```

### 매개변수

- `begin`

  - : 자르기 시작할 지점을 나타내는 0 기반 인덱스.

- `end` {{optional_inline}}
  - : 자르기 끝낼 지점을 나타내는 바이트 인덱스. 지정하지 않은 경우 새로운 `ArrayBuffer`는 지정한 시작점부터 현재 `ArrayBuffer`의 끝까지 가지게 됩니다.

### 반환 값

새로운 {{jsxref("ArrayBuffer")}} 객체.

## 설명

`slice()` 메서드는 `end` 매개변수로 지정한 바이트 위치 바로 앞까지 현재 배열 버퍼를 복사합니다. `begin`과 `end`는 음의 값인 경우 배열의 시작부터 위치를 세지 않고 끝에서부터 셉니다.

`end` 값이 유효한 범위를 벗어날 경우 버퍼 길이에 맞춰 잘라냅니다. 또한 새로운 ArrayBuffer의 길이가 음의 값이 나올 경우 0으로 처리합니다.

## 예제

### `ArrayBuffer` 복사하기

```js
const buf1 = new ArrayBuffer(8);
const buf2 = buf1.slice(0);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("ArrayBuffer")}}
