---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`flat()`** 메서드는 모든 하위 배열 요소가 지정된 깊이까지 재귀적으로 연결된 새 배열을 생성합니다.

{{InteractiveExample("JavaScript Demo: Array.flat()")}}

```js interactive-example
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
```

## 구문

```js-nolint
flat()
flat(depth)
```

### 매개변수

- `depth` {{optional_inline}}
  - : 중첩된 배열 구조를 얼마나 깊이 평탄화 할지를 지정하는 깊이 수준입니다.
    기본값은 1입니다.

### 반환 값

하위 배열 요소가 연결된 새 배열입니다.

## 설명

`flat()` 메서드는 [복사 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#복사_메서드와_변경_메서드)입니다. 이 메서드는 `this`를 변경하지 않는 대신 원래 배열의 요소와 동일한 요소를 포함하는 [얕은 복사본](/ko/docs/Glossary/Shallow_copy)을 반환합니다.

`flat()` 메서드는 평탄화할 배열이 [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)인 경우 빈 슬롯을 무시합니다. 예를 들어 `depth`가 1이면, 루트 배열과 중첩 배열의 첫 번째 수준에 있는 빈 슬롯은 모두 무시되지만 중첩된 배열의 빈 슬롯은 배열 자체와 함께 보존됩니다.

`flat()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. `this`에는 length 속성과 정수 키 속성만 있을 것으로 예상합니다. 그러나 요소를 평탄화하려면 해당 요소는 배열이어야 합니다.

## 예제

### 중첩 배열 평탄화

```js
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 희소 배열에 flat() 사용하기

`flat()` 메서드는 배열의 빈 슬롯을 제거합니다.

```js
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]
```

### 배열이 아닌 객체에서 flat() 호출

`flat()` 메서드는 `this`의 `length` 속성을 읽은 다음 키가 `length`보다 작은 음수가 아닌 정수인 속성에 각각 접근합니다. 요소가 배열이 아니면, 요소는 결괏값에 직접 추가됩니다. 요소가 배열인 경우 `depth` 매개변수에 따라 평탄화됩니다.

```js
const arrayLike = {
  length: 3,
  0: [1, 2],
  // 유사 배열은 평탄화되지 않습니다.
  1: { length: 2, 0: 3, 1: 4 },
  2: 5,
  3: 3, // length가 3이므로 flat()에서 무시됩니다.
};
console.log(Array.prototype.flat.call(arrayLike));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.flat` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
