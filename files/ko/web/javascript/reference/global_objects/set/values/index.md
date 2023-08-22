---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
---

{{JSRef}}

**`values()`** method는 `Set` 객체에 요소가 삽입된 순서대로 각 요소의 값을 순환할 수 있는 새로운 [Iterator](/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators) 객체를 반환합니다.

> **참고:** **`keys()`** 메소드는 이 메소드의 별칭입니다({{jsxref("Map")}} 객체와 유사성을 위해).
> 따라서, `key()` 페이지는 이곳으로 리다이렉트 됩니다.
> 그것은 정확히 동일하게 작동하며 `Set` 요소의 **값**을 반환합니다.

{{EmbedInteractiveExample("pages/js/set-prototype-values.html")}}

## 구문

```js
values();
```

### 반환 값

주어진 `Set`의 각 요소의 값을 삽입 순서대로 포함하는 새로운 iterator 객체

## 예시

### `values()` 사용하기

```js
var mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");
var setIter = mySet.values();
console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set.prototype.entries()")}}
