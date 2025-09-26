---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`flatMap()`** 메서드는 배열의 각 요소에 주어진 콜백 함수를 적용한 다음 그 결과를 한 단계씩 평탄화하여 형성된 새 배열을 반환합니다. 이 메서드는 {{jsxref("Array.prototype.map","map()")}} 뒤에 깊이 1의 {{jsxref("Array.prototype.flat","flat()")}}을 붙이는 것(`arr.map(...args).flat()`)과 동일하지만, 두 메서드를 따로 호출하는 것보다 약간 더 효율적입니다.

{{InteractiveExample("JavaScript Demo: Array.flatMap()", "shorter")}}

```js interactive-example
const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]
```

## 구문

```js-nolint
flatMap(callbackFn)
flatMap(callbackFn, thisArg)
```

### 매개변수

- `callback`
  - : 배열의 각 요소에 대해 실행할 함수입니다. 새 배열의 새 요소를 포함하는 배열을 반환하거나, 새 배열에 추가할 배열이 아닌 단일 값을 반환해야 합니다. 이 함수는 다음 인수를 사용하여 호출됩니다.
    - `element`
      - : 배열에서 처리 중인 현재 요소.
    - `index`
      - : 배열에서 처리 중인 현재 요소의 인덱스.
    - `array`
      - : `flatMap()`이 호출된 배열.
- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용할 값입니다. [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)를 참조하세요.

### 반환 값

각 요소가 콜백 함수의 결과이고, 깊이 1로 평탄화된 새 배열입니다.

## 설명

`flatMap()` 메서드는 [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)입니다. 콜백 함수에 대한 자세한 설명은 {{jsxref("Array.prototype.map()")}}을 참조하세요. `flatMap()` 메서드는 각 요소에 대해 새로운 배열 요소를 생성하고, 결과 배열을 연결하여 새로운 배열을 형성하는 [`map(callbackFn, thisArg)`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 뒤에 [`flat(1)`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)이 붙은 것과 동일합니다.

`flatMap()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. 이 메서드는 `this` 값에 `length` 속성과 정수 키 속성만 있을 것으로 예상합니다. 그러나 `callbackFn`에서 반환되는 값은 반드시 배열이어야 평탄화할 수 있습니다.

### 대안

#### 사전 할당 및 명시적 순회

```js
const arr = [1, 2, 3, 4];

arr.flatMap((x) => [x, x * 2]);
// 는 다음과 같습니다.
const n = arr.length;
const acc = new Array(n * 2);
for (let i = 0; i < n; i++) {
  const x = arr[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}
// [1, 2, 2, 4, 3, 6, 4, 8]
```

이 특별한 경우는 가비지 컬렉션을해야 하는 임시 배열을 생성하고, 반환 배열의 크기를 자주 조정할 필요가 없기 때문에, `flatMap` 접근 방식이 for-loop 접근 방식보다 느리다는 점에 유의해야합니다. 그러나 유연성과 가독성이 필요한 경우에는 flatMap이 여전히 올바른 솔루션일 수 있습니다.

## 예제

### map()과 flatMap()

```js
const arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// 오직 한 단계만 평탄화됩니다.
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

위의 예제는 map을 사용해도 가능하겠지만, 다음은 `flatMap()`의 사용법을 더 잘 보여주는 예제입니다.

문장 목록에서 단어 목록을 생성해 보겠습니다.

```js
const arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

출력 목록 길이는 입력 목록 길이와 다를 수 있다는 점에 유의하세요.

### map() 도중 항목을 추가 및 제거하는 경우

`flatMap`은 `map` 도중에 항목을 추가하고 제거(항목 수 수정) 하는 방법으로 사용할 수 있습니다. 즉, 항상 일대일이 아닌 각 입력 항목을 개별적으로 처리하여 여러 항목을 여러 항목에 매핑할 수 있습니다. 이런 의미에서 [filter](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)의 반대 개념처럼 작동합니다.
항목을 유지하려면 1 요소 배열을, 항목을 추가하려면 다중 요소 배열을, 항목을 제거하려면 0 요소 배열을 반환합니다.

```js
// 음수를 모두 제거하고
// 홀수를 짝수와 1로 분할한다고 가정해 보겠습니다.
const a = [5, 4, -3, 20, 17, -33, -4, 18];
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

const result = a.flatMap((n) => {
  if (n < 0) {
    return [];
  }
  return n % 2 === 0 ? [n] : [n - 1, 1];
});
console.log(result); // [4, 1, 4, 20, 16, 1, 18]
```

### 희소 배열에 flatMap() 사용하기

`flat()`은 반환된 배열의 빈 슬롯을 무시하는 반면, `map()`은 소스 배열의 빈 슬롯에 대해 호출하지 않기 때문에 `callbackFn`은 호출되지 않습니다.

`map()`은 반환된 배열의 빈 슬롯을 무시하는 반면, `flat()`은 반환된 배열의 빈 슬롯을 무시하기 때문에 소스 배열의 빈 슬롯에 대해서는 `callbackFn`이 호출되지 않습니다.

```js
console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]
```

### 배열이 아닌 객체에 flatMap() 사용하기

`flatMap()` 메서드는 `this`의 `length` 속성을 읽은 다음 키가 `length`보다 작은 음수가 아닌 정수인 각 속성에 접근합니다. 콜백 함수의 반환값이 배열이 아닌 경우, 반환값은 항상 결과 배열에 바로 추가됩니다.

```js
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // length가 3이므로 flatMap()에 의해 무시됩니다.
};
console.log(Array.prototype.flatMap.call(arrayLike, (x) => [x, x * 2]));
// [1, 2, 2, 4, 3, 6]

// 콜백에서 반환된 유사 배열은 평탄화되지 않습니다.
console.log(
  Array.prototype.flatMap.call(arrayLike, (x) => ({
    length: 1,
    0: x,
  })),
);
// [ { '0': 1, length: 1 }, { '0': 2, length: 1 }, { '0': 3, length: 1 } ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.flatMap` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
