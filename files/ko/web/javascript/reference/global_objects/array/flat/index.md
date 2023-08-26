---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
---

{{JSRef}}

**`flat()`** 메서드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성합니다.

## 구문

```js
const newArr = arr.flat([depth]);
```

### 매개변수

- `depth` {{optional_inline}}
  - : 중첩 배열 구조를 평탄화할 때 사용할 깊이 값. 기본값은 1입니다.

### 반환 값

하위 배열을 이어붙인 새로운 배열.

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

### 배열 구멍 제거

`flat` 메서드는 배열의 구멍도 제거합니다.

```js
const arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]
```

## 대안

### `reduce`와 `concat`

```js
const arr = [1, 2, [3, 4]];

// To flat single level array
arr.flat();
// is equivalent to
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]

// or with decomposition syntax
const flattened = (arr) => [].concat(...arr);
```

### `reduce` + `concat` + `isArray` + 재귀

```js
const arr = [1, 2, [3, 4, [5, 6]]];

// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        [],
      )
    : arr.slice();
}

flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]
```

### 스택

```js
// non recursive flatten deep using a stack
// note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
// also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // reverse to restore input order
  return res.reverse();
}

const arr = [1, 2, [3, 4, [5, 6]]];
flatten(arr);
// [1, 2, 3, 4, 5, 6]
```

### `Generator` 함수

```js
function* flatten(array, depth) {
  if (depth === undefined) {
    depth = 1;
  }
  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      yield* flatten(item, depth - 1);
    } else {
      yield item;
    }
  }
}

const arr = [1, 2, [3, 4, [5, 6]]];
const flattened = [...flatten(arr, Infinity)];
// [1, 2, 3, 4, 5, 6]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
