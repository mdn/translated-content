---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`entries()`** 메서드는 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새 [배열 반복자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator) 객체를 반환합니다.

{{InteractiveExample("JavaScript Demo: Array.entries()")}}

```js interactive-example
const array1 = ["a", "b", "c"];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
```

## 구문

```js-nolint
entries()
```

### 매개변수

없음.

### 반환 값

새 [순회 가능 반복자 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## 설명

[희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)이 사용되는 경우, `entries()` 메서드는 빈 슬롯에 `undefined`값이 있는것 처럼 순회합니다.

`entries()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods)입니다. `this` 값에는 `length` 속성과 정수 키 속성만 있을 것으로 예상합니다.

## 예시

### 인덱스와 요소 순회하기

```js
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

### for...of 루프 사용하기

```js
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

### 희소 배열 순회하기

`entries()`는 빈 슬롯을 `undefined`인 것처럼 접근합니다.

```js
for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']
```

### entries()를 배열이 아닌 객체에서 사용하기

`entries()` 메서드는 `this`의 `length` 속성을 읽은 다음 키가 `length`보다 작은 음수가 아닌 정수 속성에 각각 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d", // length가 3이므로 entries()에서 무시됩니다.
};
for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.entries` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스된 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- [`Array.prototype[@@iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
- {{jsxref("TypedArray.prototype.entries()")}}
- [Iteration protocols](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
