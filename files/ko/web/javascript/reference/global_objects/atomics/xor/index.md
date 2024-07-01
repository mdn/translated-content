---
title: Atomics.xor()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/xor
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`Atomics.xor()`** 정적 메서드는 배열에서 주어진 위치에 주어진 값으로 XOR 비트 연산을 수행하고
해당 포지션의 기존 값을 반환합니다. 이 아토믹 연산은 수정된 값이 쓰이기 전까지 다른 쓰기 연산이 일어나지 않음을 보장합니다.

{{EmbedInteractiveExample("pages/js/atomics-xor.html")}}

## 구문

```js-nolint
Atomics.xor(typedArray, index, value)
```

### 매개 변수

- `typedArray`
  - : 정수형 형식화 배열. {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}},
    {{jsxref("BigUint64Array")}} 중 하나.
- `index`
  - : 비트 연산 XOR를 계산할 `typedArray`의 인덱스입니다.
- `value`
  - : 비트 연산 XOR와 같이 계산할 숫자입니다.

### 반환 값

주어진 위치(`typedArray[index]`)의 예전 값.

### 예외

- `typedArray`가 허용된 정수형이 아닐 경우 {{jsxref("TypeError")}}가 발생합니다.
- `index`가 `typedArray`의 범위를 벗어날 경우 {{jsxref("RangeError")}}가 발생합니다.

## 설명

비트 연산 XOR은 `a`와 `b` 이 다르면 1을 산출합니다. XOR 연산에 대한 진리표는 다음과 같습니다.

| `a` | `b` | `a ^ b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

예를 들어, `5 ^ 1`의 비트 연산 XOR의 값은 `0100`이며 10진수로 4입니다.

```plain
5  0101
1  0001
   ----
4  0100
```

## 예제

### xor 사용하기

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;
Atomics.xor(ta, 0, 1); // 이전 값인 5를 반환합니다
Atomics.load(ta, 0); // 4
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.and()")}}
- {{jsxref("Atomics.or()")}}
