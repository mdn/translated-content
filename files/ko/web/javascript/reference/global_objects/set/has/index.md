---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

{{jsxref("Set")}} 객체의 **`has()`** 메서드는
이 Set 객체에 주어진 요소가 존재하는지 여부를 판별해 반환합니다.

{{InteractiveExample("JavaScript Demo: Set.prototype.has()")}}

```js interactive-example
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// Expected output: true

console.log(set1.has(5));
// Expected output: true

console.log(set1.has(6));
// Expected output: false
```

## 구문

```js-nolint
has(value)
```

### 매개변수

- `value`
  - : `Set` 객체에서 존재 여부를 판별할 값.

### 반환 값

`Set` 객체에 값이 존재하면 `true`, 아니면 `false`.

## 예제

### `has()` 메서드 사용하기

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.has("foo")); // true
console.log(mySet.has("bar")); // false

const set1 = new Set();
const obj1 = { key1: 1 };
set1.add(obj1);

console.log(set1.has(obj1)); // true
console.log(set1.has({ key1: 1 })); // false, 형태만 같은 서로 다른 객체의 참조이기 때문
console.log(set1.add({ key1: 1 })); // set1의 요소가 2개로 늘어남
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
