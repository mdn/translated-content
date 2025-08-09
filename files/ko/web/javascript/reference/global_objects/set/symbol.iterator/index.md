---
title: Set.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator
original_slug: Web/JavaScript/Reference/Global_Objects/Set/@@iterator
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

`Set` 객체의 **`@@iterator`** 메서드는
[Iteration 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)을 구현하며,
[전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax) 및
[`for...of`](/ko/docs/Web/JavaScript/Reference/Statements/for...of) 루프와 같이
순회를 예상하는 대부분의 구문에서 Set을 사용할 수 있도록 합니다. Set의 값을 산출하는 반복자를 반환합니다.

이 속성의 초기 값은 {{jsxref("Set.prototype.values")}} 속성의 초기 값과 동일한 함수 객체입니다.

{{InteractiveExample("JavaScript Demo: Set.prototype[Symbol.iterator]()")}}

```js interactive-example
const set1 = new Set();

set1.add(42);
set1.add("forty two");

const iterator1 = set1[Symbol.iterator]();

console.log(iterator1.next().value);
// Expected output: 42

console.log(iterator1.next().value);
// Expected output: "forty two"
```

## 구문

```js-nolint
set[Symbol.iterator]()
```

### 반환 값

{{jsxref("Set.prototype.values()")}}와 동일하게 set의 값을 산출하는 새로운 반복 가능한 반복자 객체를 반환합니다.

## 예제

### for...of 루프를 사용한 반복

이 메서드를 직접 호출할 필요는 거의 없습니다. `@@iterator` 메서드의 존재는 `Set` 객체가
[반복 가능](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)하게 해주며,
`for...of` 루프와 같은 반복 구문은 이 메서드를 자동으로 호출하여 루프를 돌릴 반복자를 얻게 됩니다.

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});
for (const v of mySet) {
  console.log(v);
}
```

### 반복자 수동으로 돌리기

반환된 반복자 객체의 `next()` 메서드를 수동으로 호출하여 반복 프로세스를 최대한 제어할 수 있습니다.

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

const setIter = mySet[Symbol.iterator]();
console.log(setIter.next().value); // "0"
console.log(setIter.next().value); // 1
console.log(setIter.next().value); // Object
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
