---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - set
browser-compat: javascript.builtins.Set.entries
translation_of: Web/JavaScript/Reference/Global_Objects/Set/entries
---

{{JSRef}}

**`entries()`** 메소드는 `Set` 객체의 각각의 요소를 삽입순서대로 **`[값, 값]`의 형태로 가진 배열**의 새로운 [Iterator](/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators) 객체를 반환합니다. `Set`객체에는 `Map`객체의 `key`가 없습니다. 그러나, `Map` 객체의 API와 비슷하게 유지하기 위해, 각각의 "요소"는 "키"와 "값" 자리에 같은 값을 가지게 됩니다. 결과적으로 `[값, 값]` 형태의 배열이 반환되게 됩니다.

{{EmbedInteractiveExample("pages/js/set-prototype-entries.html")}}

## 구문

```js
entries();
```

### 반환 값

주어진 `Set`의 요소를 삽입순서대로 `[값, 값]`의 형태로 포함한 배열의 새로운 `iterator` 객체를 반환합니다.

## 예제

### `entries()` 사용하기

```js
var mySet = new Set();
mySet.add('foobar');
mySet.add(1);
mySet.add('baz');

var setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
