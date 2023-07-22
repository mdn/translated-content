---
title: Array.prototype.toSorted()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSorted
l10n:
  sourceCommit: a213cd90f4c97cb12befa38c3b2db193d9d286fc
---

{{JSRef}}

{{jsxref("Array")}}의 **`toSorted()`** 메서드는 {{jsxref("Array/sort", "sort()")}}에 대응되는 [복사](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) 메서드입니다. 이 메서드는 요소들을 오름차순으로 정렬한 새로운 배열을 반환합니다.

## 구문

```js-nolint
// 함수 없이 사용
toSorted()

// 화살표 함수
toSorted((a, b) => { /* … */ })

// 비교 함수
toSorted(compareFn)

// 인라인 비교 함수
toSorted(function compareFn(a, b) { /* … */ })
```

### 매개변수

- `compareFn` {{optional_inline}}

  - : 정렬 순서를 정의하는 함수를 지정합니다. 생략하면 배열 요소는 문자열로 변환되고 각 문자의 유니코드 포인트 값에 따라 정렬됩니다.

    - `a`
      - : 비교할 첫 번째 요소입니다.
    - `b`
      - : 비교할 두 번째 요소입니다.

### 반환 값

요소들을 오름차순으로 정렬한 새로운 배열입니다.

## 설명

`compareFn` 매개변수에 대해 더 알아보려면 {{jsxref("Array/sort", "sort()")}}를 참조하세요.

[희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)에서 `toSorted()` 메서드는 빈 슬롯을 `undefined` 값으로 간주하고 반복합니다.

`toSorted()` 메서드는 [일반화](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods)되어 있습니다. `this` 값이 `length` 속성과 정수 키 속성을 가지고 있다고 가정합니다.

## 예제

### 배열 정렬하기

```js
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]
```

더 많은 사용 예제는 {{jsxref("Array/sort", "sort()")}}를 참조하세요.

### 희소 배열에서 toSorted() 사용하기

빈 슬롯은 `undefined` 값으로 간주되어 정렬됩니다. 빈 슬롯은 항상 배열의 끝으로 정렬되며 `compareFn`은 호출되지 않습니다.

```js
console.log(["a", "c", , "b"].toSorted()); // ['a', 'b', 'c', undefined]
console.log([, undefined, "a", "b"].toSorted()); // ["a", "b", undefined, undefined]
```

### 배열이 아닌 객체에서 toSorted() 호출하기

`toSorted()` 메서드는 `this`의 `length` 속성을 읽습니다. 그런 다음 `0`부터 `length - 1`까지의 범위에 있는 모든 정수 키 속성을 수집하여 정렬하고 새 배열에 씁니다.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.toSorted.call(arrayLike));
// [4, 5, undefined]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Array.prototype.toSorted` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
