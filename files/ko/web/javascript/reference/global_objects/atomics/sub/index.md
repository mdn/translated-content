---
title: Atomics.sub()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/sub
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`Atomics.sub()`** 정적 메서드는 배열에서 주어진 위치에 주어진 값으로 빼기 연산을 수행하고
해당 포지션의 기존 값을 반환합니다. 이 아토믹 연산은 수정된 값이 쓰이기 전까지 다른 쓰기 연산이 일어나지 않음을 보장합니다.

{{InteractiveExample("JavaScript Demo: Atomics.sub()")}}

```js interactive-example
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 - 2 = 5
console.log(Atomics.sub(uint8, 0, 2));
// Expected output: 7

console.log(Atomics.load(uint8, 0));
// Expected output: 5
```

## 구문

```js-nolint
Atomics.sub(typedArray, index, value)
```

### 매개변수

- `typedArray`
  - : 정수형 형식화 배열. {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}},
    {{jsxref("BigUint64Array")}} 중 하나.
- `index`
  - : `value`를 차감할 `typedArray`의 인덱스입니다.
- `value`
  - : 차감할 값(숫자)입니다.

### 반환 값

주어진 위치(`typedArray[index]`)의 예전 값.

### 예외

- `typedArray`가 허용된 정수형이 아닐 경우 {{jsxref("TypeError")}}가 발생합니다.
- `index`가 `typedArray`의 범위를 벗어날 경우 {{jsxref("RangeError")}}가 발생합니다.

## 예제

### sub 사용하기

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 48;
Atomics.sub(ta, 0, 12); // 이전 값 48을 반환합니다.
Atomics.load(ta, 0); // 36
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.add()")}}
