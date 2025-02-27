---
title: Map() 생성자
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

**`Map()`** 생성자는 {{jsxref("Map")}} 객체를 생성합니다.

## 구문

```js-nolint
new Map()
new Map(iterable)
```

> **참고:** `Map()`은 오직 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로만 생성할 수 있습니다. `new` 없이 호출하면 {{jsxref("TypeError")}}가 발생합니다.

### 매개변수

- `iterable` {{optional_inline}}
  - : 하나의 {{jsxref("Array")}} 혹은 키-값 쌍인 요소를 가진
    [반복 가능](/ko/docs/Web/JavaScript/Reference/Iteration_protocols) 객체. (예를 들어
    `[[ 1, 'one' ],[ 2, 'two' ]]`과 같이 2개의 요소를 가진 배열). 각각의 키-값 쌍은 새로운 `Map`에
    추가됩니다.

## 예제

### 새로운 Map 생성하기

```js
const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Map` 폴리필](https://github.com/zloirock/core-js#map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
