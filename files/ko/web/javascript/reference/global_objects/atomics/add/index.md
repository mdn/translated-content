---
title: Atomics.add()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/add
l10n:
  sourceCommit: 3f0cd840cd9575701c65b8c6a1e172a2b0c3bd62
---

{{JSRef}}

**`Atomics.add()`** 정적 메서드는 배열의 지정된 위치에 지정된 값을 추가하고 해당 위치의 이전 값을 반환합니다.
이 아토믹 연산은 수정된 값 쓰기가 완료되기 전까지 다른 쓰기가 발생하지 않도록 보장합니다.

{{EmbedInteractiveExample("pages/js/atomics-add.html")}}

## 구문

```js-nolint
Atomics.add(typedArray, index, value)
```

### 매개변수

- `typedArray`
  - : 정수형 배열. {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}},
    {{jsxref("BigUint64Array")}} 중 하나.
- `index`
  - : `value`를 더할 `typedArray`내의 위치.
- `value`
  - : 더할 숫자.

### 반환 값

주어진 위치의 예전 값(`typedArray[index]`).

### 예외

- `typedArray`가 허용된 정수형이 아닐 경우 {{jsxref("TypeError")}}가 발생합니다.
- `index`가 `typedArray`의 범위를 벗어날 경우 {{jsxref("RangeError")}}가 발생합니다.

## 예제

### add() 사용하기

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12); // 예전 값인 0을 반환합니다.
Atomics.load(ta, 0); // 12
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.sub()")}}
