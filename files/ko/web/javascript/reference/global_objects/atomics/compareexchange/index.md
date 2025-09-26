---
title: Atomics.compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`Atomics.compareExchange()`** 정적 메서드는 주어진 예상 값이 이전 값과 같으면 배열의 지정된 위치에서
지정된 대체 값을 교환합니다. 예상 값이 이전 값과 같을 경우, 배열의 지정된 위치에서 지정된 대체 값을 교환합니다.
이 메서드는 해당 위치의 이전 값이 해당 위치의 이전 값을 반환합니다. 이 아토믹 연산은 수정된 값이 반환될 때까지 다른 쓰기가
발생하지 않음을 보장합니다.

{{InteractiveExample("JavaScript Demo: Atomics.compareExchange()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

Atomics.compareExchange(uint8, 0, 5, 2); // Returns 5
console.log(Atomics.load(uint8, 0));
// Expected output: 2

Atomics.compareExchange(uint8, 0, 5, 4); // Returns 2
console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## 구문

```js-nolint
Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)
```

### 매개변수

- `typedArray`
  - : 정수형 형식화 배열. {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}},
    {{jsxref("BigUint64Array")}} 중 하나.
- `index`
  - : 값을 불러올 `typedArray`의 인덱스
- `expectedValue`
  - : 동일성을 확인하기 위한 값
- `replacementValue`
  - : 교환할 숫자

### 반환 값

주어진 위치(`typedArray[index]`)의 예전 값.

### 예외

- `typedArray`가 허용된 정수형이 아닐 경우 {{jsxref("TypeError")}}가 발생합니다.
- `index`가 `typedArray`의 범위를 벗어날 경우 {{jsxref("RangeError")}}가 발생합니다.

## 예제

### compareExchange() 사용하기

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 7;
Atomics.compareExchange(ta, 0, 7, 12); // 이전 값 7을 반환합니다
Atomics.load(ta, 0); // 12
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}
