---
title: Array.prototype.findIndex()
short-title: findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
l10n:
  sourceCommit: 4074fc09b07902a560b9b321c1f966452b5afc7c
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`findIndex()`** 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다.
만족하는 요소가 없으면 -1을 반환합니다.

판별 함수를 만족하는 첫번째 인덱스 대신 값을 반환하는 {{jsxref("Array.prototype.find", "find()")}} 메서드도 참고하시기 바랍니다.

{{InteractiveExample("JavaScript Demo: Array.prototype.findIndex()", "shorter")}}

```js interactive-example
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
```

## 구문

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### 매개변수

- `callbackFn`
  - : 배열의 각 요소마다 실행할 함수입니다. 일치하는 요소가 발견되었음을 나타내는 [참 같은 값](/ko/docs/Glossary/Truthy)을 반환하고 그렇지 않으면 [거짓같은 값](/ko/docs/Glossary/Falsy)을 반환해야합니다. 함수는 다음과 같은 인수와 함께 호출됩니다.
    - `element`
      - : 배열에서 처리 중인 현재 요소입니다.
    - `index`
      - : 배열에서 처리 중인 현재 요소의 인덱스입니다.
    - `array`
      - : `findIndex()` 함수가 호출된 배열입니다.
- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용할 값입니다. [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)를 참고하세요.

### 반환 값

테스트를 통과하는 첫 번째 요소의 인덱스입니다. 일치하는 요소가 없으면 `-1`을 반환합니다.

## 설명

`findIndex()`는 [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)입니다. `callbackFn` 함수를 배열의 각 요소에 대해 오름차순 인덱스 순서로 한 번씩 호출하고, `callbackFn`이 [참 같은 값](/ko/docs/Glossary/Truthy)을 반환할 때까지 반복합니다. 그런 다음 `findIndex()`는 해당 요소의 인덱스를 반환하고 배열 반복을 중단합니다. `callbackFn`이 참 같은 값을 반환하지 않으면 `findIndex()`는 `-1`을 반환합니다. 보편적으로 이들 메서드가 동작하는 방법을 알고 싶으시다면 [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods) 섹션을 읽어보시기 바랍니다.

`callbackFn`은 배열의 값이 할당된 인덱스 뿐만이 아닌 모든 인덱스에 대해 호출됩니다. [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)의 빈 슬롯은 `undefined`와 동일하게 동작합니다.

`findIndex()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods)메서드 입니다. `this` 값에 `length` 속성과 정수 키 속성 만을 기대합니다.

## 예제

### 배열에서 소수의 색인 찾기

다음 예제에서는 배열에서 소수인 첫번째 요소의 인덱스를 찾습니다. 소수가 없으면 -1을 반환합니다.

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, 찾을 수 없음
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
```

### callbackFn의 세 번째 인수 사용하기

`array` 인수는 배열의 다른 요소에 접근하려는 경우, 특히 배열을 참조하는 기존 변수가 없는 경우에 유용합니다. 다음 예제에서는 먼저 `filter()`를 사용하여 양수 값을 추출한 다음 `findIndex()`를 사용하여 이웃 요소보다 작은 첫 번째 요소를 찾습니다.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = numbers
  .filter((num) => num > 0)
  .findIndex((num, idx, arr) => {
    // arr 인수가 없으면 변수로 저장하지 않고 중간에 생성된
    // 배열에 쉽게 접근할 수 있는 방법은 없습니다.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(firstTrough); // 1
```

### 희소 배열에서 findIndex() 사용하기

희소 배열에서 `undefined`를 검색하고 빈 슬롯의 인덱스를 얻을 수 있습니다.

```js
console.log([1, , 3].findIndex((x) => x === undefined)); // 1
```

### 배열이 아닌 객체에 findIndex() 호출하기

`findIndex()`는 `this`의 `length` 속성을 읽은 다음 음수가 아니면서 `length`보다 작은 각 정수 속성에 접근합니다.

```js
const arrayLike = {
  length: 3,
  "-1": 0.1, // -1 < 0 이기 때문에 findIndex() 가 이를 무시합니다.
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findIndex.call(arrayLike, (x) => !Number.isInteger(x)),
); // 1
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Array.prototype.findIndex` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
