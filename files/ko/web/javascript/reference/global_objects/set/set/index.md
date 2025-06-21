---
title: Set() 생성자
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
l10n:
  sourceCommit: 84aaeee9a64e1bfe002837468eb798e5d5eb2bbe
---

{{JSRef}}

**`Set()`** 생성자는 {{jsxref("Set")}} 객체를 생성합니다.

{{InteractiveExample("JavaScript Demo: Set.prototype Constructor")}}

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
new Set()
new Set(iterable)
```

> **참고:** `Set()`은 오직 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)와 함께 생성할 수 있습니다. `new` 없이 생성을 시도하면 {{jsxref("TypeError")}}가 발생합니다.

### 매개변수

- `iterable` {{optional_inline}}

  - : [순회 가능한 객체](/ko/docs/Web/JavaScript/Reference/Statements/for...of)가 전달되면 모든 요소가 새로운 `Set`에 추가됩니다.

    이 매개변수를 지정하지 않거나 값이 `null`일 경우 새로운 `Set`은 비어있게 됩니다.

### 반환 값

새로운 `Set` 객체.

## 예제

### `Set` 객체 사용하기

```js
const mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 };
mySet.add(o);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Set` 폴리필](https://github.com/zloirock/core-js#set)
- {{jsxref("Set")}}
