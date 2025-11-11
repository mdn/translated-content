---
title: Set.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Set/keys
l10n:
  sourceCommit: ffd57ae4eaab6cdd12560f60f0dadc119a22303e
---

{{JSRef}}

{{jsxref("Set")}} 인스턴스의 **`keys()`** 메서드는 [`values()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/values) 메서드의 별칭입니다.

## 구문

```js-nolint
keys()
```

### 매개변수

없음.

### 반환 값

새로운 [순회 가능한 반복자 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## 예제

### keys() 사용하기

`keys()` 메서드는 {{jsxref("Set/values", "values()")}}와 완벽하게 동일합니다.

```js
const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = mySet.keys();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.values()")}}
