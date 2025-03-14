---
title: Array.prototype.toSorted()
slug: Web/JavaScript/Reference/Global_Objects/Array/toSorted
l10n:
  sourceCommit: e46c58e6ed948e8c35c206762eb14a2e68616ed1
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`toSorted()`** 메서드는 {{jsxref("Array/sort", "sort()")}}에 대응되는 [복사](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#복사_메서드와_변경_메서드) 버전의 메서드입니다. 이 메서드는 요소들을 오름차순으로 정렬한 새로운 배열을 반환합니다.

## 구문

```js-nolint
toSorted()
toSorted(compareFn)
```

### 매개변수

- `compareFn` {{optional_inline}}
  - : 요소 순서를 결정하는 함수입니다. 생략하면 배열 요소는 문자열로 변환되고 각 문자의 유니코드 코드 포인트 값에 따라 정렬됩니다. 자세한 정보는 {{jsxref("Array/sort", "sort()")}}를 참고하시기 바랍니다.

### 반환 값

요소들을 오름차순으로 정렬한 새로운 배열입니다.

## 설명

`compareFn` 매개변수에 대해 더 알아보려면 {{jsxref("Array/sort", "sort()")}}를 참조하세요.

[희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)에서 `toSorted()` 메서드는 빈 슬롯을 `undefined` 값으로 간주하고 순회합니다.

`toSorted()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드) 메서드 입니다. `this` 값이 `length` 속성과 정수 키 속성을 가지고 있다고 가정합니다.

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
  3: 3, // length가 3이기 때문에 toSorted()는 이를 무시합니다
};
console.log(Array.prototype.toSorted.call(arrayLike));
// [4, 5, undefined]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Array.prototype.toSorted` 폴리필](https://github.com/zloirock/core-js#change-array-by-copy)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 가이드
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
