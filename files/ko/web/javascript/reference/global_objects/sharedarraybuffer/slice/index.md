---
title: SharedArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
l10n:
  sourceCommit: a95a719c5d6549d78afcc77088994570259f1291
---

{{JSRef}}

{{jsxref("SharedArrayBuffer")}} 인스턴스의 **`slice()`** 메서드는 `start`이상 `end`미만 이 `SharedArrayBuffer`의 바이트의 복사본을 내용으로 하는 새로운 `SharedArrayBuffer`를 반환합니다. `start` 또는 `end`가 음수이면 배열의 시작이 아닌 끝부터의 인덱스를 참조합니다.

{{InteractiveExample("JavaScript Demo: SharedArrayBuffer.slice()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const int32View = new Int32Array(buffer); // Create the view
// Produces Int32Array [0, 0, 0, 0]

int32View[1] = 42;
const sliced = new Int32Array(buffer.slice(4, 12));

console.log(sliced);
// Expected output: Int32Array [42, 0]
```

## 구문

```js-nolint
slice()
slice(start)
slice(start, end)
```

### 매개변수

- `start` {{optional_inline}}
  - 추출을 시작할 0 기반 인덱스이며 [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion)됩니다.
    - 음수 인덱스는 버퍼의 끝부터 역산합니다. `-buffer.length <= start < 0`인 경우, `start + buffer.length`가 사용됩니다.
    - `start < -buffer.length` 혹은 `start`가 생력된다면 `0`이 사용됩니다.
    - `start >= buffer.length`이라면 빈 버퍼가 반환됩니다.
- `end` {{optional_inline}}
  - 추출을 종료할 0 기반 인덱스이며 [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion)됩니다. `slice()`는 `end`까지 추출하지만 `end`는 포함하지 않습니다.
    - 음수 인덱스는 버퍼의 끝부터 역산합니다. `-buffer.length <= end < 0`인 경우, `end + buffer.length`가 사용됩니다.
    - `end < -buffer.length`이라면 `0`0이 사용됩니다.
    - `end >= buffer.length` 또는 `end`가 생략된 경우, `buffer.length`가 사용되어 배열 끝까지 모든 요소가 추출됩니다.
    - 만약 `end`가 `start`가 암시하는 위치 이전 또는 해당 위치를 암시하는 경우 빈 버퍼가 반환됩니다.

### 반환 값

추출한 요소를 포함하고 있는 새로운 {{jsxref("SharedArrayBuffer")}}.

## 예제

### slice() 같이 보기

```js
const sab = new SharedArrayBuffer(1024);
sab.slice(); // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2); // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2); // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.slice()")}}
