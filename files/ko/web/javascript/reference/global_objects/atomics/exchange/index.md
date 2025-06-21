---
title: Atomics.exchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/exchange
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`Atomics.exchange()`** 정적 메서드는 배열의 지정된 위치에 지정된 값을 저장하고 해당 위치의 이전 값을 반환합니다.
이 아토믹 연산은 이전 값의 읽기와 새 값의 쓰기 사이에 다른 쓰기가 발생하지 않는 것을 보장합니다.

{{InteractiveExample("JavaScript Demo: Atomics.exchange()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(Atomics.load(uint8, 0));
// Expected output: 5

Atomics.exchange(uint8, 0, 2); // Returns 5
console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## 구문

```js-nolint
Atomics.exchange(typedArray, index, value)
```

### 매개변수

- `typedArray`
  - : 정수 타입의 배열. {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}},
    {{jsxref("BigUint64Array")}} 중 하나.
- `index`
  - : `value`를 교환할 `typedArray`의 위치.
- `value`
  - : 교환할 숫자.

### 반환 값

해당 위치의 예전 값(`typedArray[index]`).

### 예외

- `typedArray`가 허용하는 정수 타입이 아닐 경우 {{jsxref("TypeError")}}가 발생합니다.
- `index`가 해당 `typedArray`를 벗어나는 경우 {{jsxref("RangeError")}}가 발생합니다.

## 예제

### exchange() 사용하기

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
Atomics.exchange(ta, 0, 12); // returns 0, the old value
Atomics.load(ta, 0); // 12
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.compareExchange()")}}
