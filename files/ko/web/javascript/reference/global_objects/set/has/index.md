---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
---

{{JSRef}}

**`has()`** 메서드는 `Set` 객체에 주어진 요소가 존재하는지 여부를 판별해 반환합니다.

{{EmbedInteractiveExample("pages/js/set-prototype-has.html")}}

## 구문

```js
mySet.has(value);
```

### 매개변수

- `value`
  - : `Set` 객체에서 존재 여부를 판별할 값.

### 반환 값

`Set` 객체에 값이 존재하면 `true`, 아니면 `false`.

> **참고:** 기술적으로, `has()`는 [`sameValueZero`](/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness#등가0_같음) 알고리즘을 사용해 요소의 존재 여부를 판별합니다.

## 예제

### `has()` 사용하기

```js
var mySet = new Set();
mySet.add("foo");

mySet.has("foo"); // true
mySet.has("bar"); // false

var set1 = new Set();
var obj1 = { key1: 1 };
set1.add(obj1);

set1.has(obj1); // true
set1.has({ key1: 1 }); // false, 형태만 같은 서로 다른 객체의 참조이기 때문
set1.add({ key1: 1 }); // set1의 요소가 2개로 늘어남
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
