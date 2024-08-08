---
title: SharedArrayBuffer.prototype.grow()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow
l10n:
  sourceCommit: 509fde687ed349da8017a546f9cf094163f24844
---

{{JSRef}}

{{jsxref("SharedArrayBuffer")}} 인스턴스의 **`grow()`** 메서드는 `SharedArrayBuffer`를 바이트 단위의 명시된 크기까지 늘립니다.

## 구문

```js-nolint
grow(newLength)
```

### 매개변수

- `newLength`
  - : 크기를 재조정할 `SharedArrayBuffer`의 바이트 단위의 새로운 길이.

### 반환 값

없음 ({{jsxref("undefined")}}).

### 예외

- {{jsxref("TypeError")}}
  - : `SharedArrayBuffer`가 커질 수가 없을 때 발생합니다.
- {{jsxref("RangeError")}}
  - : `newLength`가 `SharedArrayBuffer`의 {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}보다 크거나 {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}}보다 작은 경우 발생합니다.

## 설명

`grow()` 메서드는 `SharedArrayBuffer`가 [성장 가능](/ko/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable)하며 새로운 크기가 `SharedArrayBuffer`의 {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}보다 작거나 같은 경우 `newLength` 매개변수로 지정된 크기까지 `SharedArrayBuffer`를 늘립니다. 새로운 바이트는 0으로 초기화됩니다.

## 예제

### grow() 사용하기

이 예제에서는 최대 길이 16바이트까지 늘릴 수 있는 8바이트 버퍼를 생성한 다음 {{jsxref("SharedArrayBuffer/growable", "growable")}} 속성을 확인하여 `growable`이 `true`를 반환하면 버퍼를 늘립니다.

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
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
