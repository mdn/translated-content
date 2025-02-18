---
title: ArrayBuffer.prototype.resize()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("ArrayBuffer")}} 인스턴스의 **`resize()`** 메서드는 `ArrayBuffer`를 명시된 바이트 크기만큼 크기를 조절합니다.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.resize()")}}

```js interactive-example
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

console.log(buffer.byteLength);
// Expected output: 8

buffer.resize(12);

console.log(buffer.byteLength);
// Expected output: 12
```

## 구문

```js-nolint
resize(newLength)
```

### 매개변수

- `newLength`
  - : 크기를 조절할 `ArrayBuffer`의 새로운 바이트 단위의 길이.

### 반환 값

없음 ({{jsxref("undefined")}}).

### 예외

- {{jsxref("TypeError")}}
  - : `ArrayBuffer`가 분리되거나 크기 조절이 불가할 경우 발생합니다.
- {{jsxref("RangeError")}}
  - : `ArrayBuffer`의 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} 보다 `newLength`가 클 경우 발생합니다.

## 설명

`resize()` 메서드는 `ArrayBuffer`가 [resizable](/ko/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable)이고 새로운 크기가 `ArrayBuffer`의 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} 이하이면 `newLength` 매개변수에 지정된 크기로 `ArrayBuffer` 크기를 조정합니다. 새 바이트는 0으로 초기화됩니다.

`resize()`를 사용하여 `ArrayBuffer`를 축소하거나 늘릴 수 있습니다. 이는 `newLength`가 `ArrayBuffer`의 현재 {{jsxref("ArrayBuffer/byteLength", "byteLength")}}보다 작을 수 있습니다.

## 예제

### resize() 사용하기

이 예제에서 최대 길이가 16으로 크기 조절이 가능한 우리는 8바이트 버퍼를 만들고 이 버퍼의 `resizable` 속성을 체크하여 `resizable`이 `true`를 반환하면 크기를 조절합니다.

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
- {{jsxref("ArrayBuffer.prototype.resizable")}}
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
