---
title: Atomics.isLockFree()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`Atomics.isLockFree()`** 정적 메서드는 지정된 요소 바이트 크기를 가진 유형화 배열에 적용될 때
`Atomics` 메서드가 잠금을 사용할지 아니면 아토믹 하드웨어 연산을 사용할지 결정하는 데 사용됩니다.
주어진 크기가 정수 타입의 형식화 배열의 [BYTES_PER_ELEMENT](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT)
속성 중 하나가 아닌 경우 `false`를 반환합니다.

{{InteractiveExample("JavaScript Demo: Atomics.isLockFree()")}}

```js interactive-example
console.log(Atomics.isLockFree(3));
// 3 is not one of the BYTES_PER_ELEMENT values
// Expected output: false

console.log(Atomics.isLockFree(4));
// 4 is one of the BYTES_PER_ELEMENT values
// Expected output: true
```

## 구문

```js-nolint
Atomics.isLockFree(size)
```

### 매개변수

- `size`
  - : 검사할 바이트 크기

### 반환 값

해당 연산이 락이 걸렸는지 여부를 가리키는 `true` 혹은 `false` 값

## 예제

### isLockFree 사용하기

```js
Atomics.isLockFree(1); // true
Atomics.isLockFree(2); // true
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true
Atomics.isLockFree(5); // false
Atomics.isLockFree(6); // false
Atomics.isLockFree(7); // false
Atomics.isLockFree(8); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Atomics")}}
