---
title: Atomics.and()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/and
l10n:
  sourceCommit: 3f0cd840cd9575701c65b8c6a1e172a2b0c3bd62
---

{{JSRef}}

**`Atomics.and()`** 정적 메서드는 배열의 지정된 위치에서 지정된 값으로 비트 연산 AND를 계산한 후 해당 위치의
이전 값을 반환합니다. 이 아토믹 연산은 수정된 값이 다시 쓰여질 때까지 다른 쓰기가 발생하지 않도록 보장합니다.

{{EmbedInteractiveExample("pages/js/atomics-and.html")}}

## 구문

```js-nolint
Atomics.and(typedArray, index, value)
```

### 매개변수

- `typedArray`
  - : 정수형 형식화 배열. {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}},
    {{jsxref("BigUint64Array")}} 중 하나.
- `index`
  - : 비트 연산 AND를 계산할 `typedArray`의 인덱스입니다.
- `value`
  - : 비트 연산 AND와 같이 계산할 숫자입니다.

### 반환 값

주어진 위치(`typedArray[index]`)의 예전 값.

### 예외

- `typedArray`가 허용된 정수형이 아닐 경우 {{jsxref("TypeError")}}가 발생합니다.
- `index`가 `typedArray`의 범위를 벗어날 경우 {{jsxref("RangeError")}}가 발생합니다.

## 설명

비트 AND 연산은 `a`와 `b`가 모두 1인 경우에만 1을 산출합니다. AND 연산에 대한 진리 테이블은 다음과 같습니다.

| `a` | `b` | `a & b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

예를 들어, `5 & 1`의 비트 연산 AND는 `0001`, 10진수로 1입니다.

```plain
5  0101
1  0001
   ----
1  0001
```

## 예제

### and() 사용하기

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.and(ta, 0, 1); // 이전 값인 5를 반환합니다
Atomics.load(ta, 0); // 1
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.or()")}}
- {{jsxref("Atomics.xor()")}}
