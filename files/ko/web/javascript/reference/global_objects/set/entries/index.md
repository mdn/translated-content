---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("Set")}} 인스턴스의 **`entries()`** 메소드는 `Set` 객체의 각각의 요소를 삽입 순서대로 **`[값, 값]`의 형태로 가진 배열**의 새로운 [반복자](/ko/docs/Web/JavaScript/Guide/Iterators_and_generators) 객체를 반환합니다. `Set`객체에는 `Map`객체의 `key`가 없습니다. 그러나, `Map` 객체의 API와 비슷하게 유지하기 위해, 각각의 "요소"는 "키"와 "값" 자리에 같은 값을 가지게 됩니다. 결과적으로 `[값, 값]` 형태의 배열이 반환되게 됩니다.

{{InteractiveExample("JavaScript Demo: Set.prototype.entries()")}}

```js interactive-example
const set1 = new Set();
set1.add(42);
set1.add("forty two");

const iterator1 = set1.entries();

for (const entry of iterator1) {
  console.log(entry);
  // Expected output: Array [42, 42]
  // Expected output: Array ["forty two", "forty two"]
}
```

## 구문

```js-nolint
entries()
```

### 매개변수

없음.

### 반환 값

새로운 [순회 가능한 반복자 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## 예제

### entries() 사용하기

```js
const mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

const setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
