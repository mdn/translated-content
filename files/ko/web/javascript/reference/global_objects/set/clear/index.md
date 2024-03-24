---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
---

{{JSRef}}

**`clear()`** 메서드는 `Set` 객체를 비웁니다.

{{EmbedInteractiveExample("pages/js/set-prototype-clear.html")}}

## 구문

```js
mySet.clear();
```

## 예제

### `clear()` 사용하기

```js
var mySet = new Set();
mySet.add(1);
mySet.add("foo");

mySet.size; // 2
mySet.has("foo"); // true

mySet.clear();

mySet.size; // 0
mySet.has("bar"); // false
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
