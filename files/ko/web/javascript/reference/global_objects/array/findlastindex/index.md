---
title: Array.prototype.findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`findLastIndex()`** 메서드는 배열을 역순으로 순회하며 주어진 판별 함수를 만족하는 배열의 첫번째 요소의 인덱스를 반환합니다.
만족하는 요소가 없으면 -1을 반환합니다.

인덱스 대신 판별 함수를 만족하는 마지막 값을 반환하는 {{jsxref("Array/findLast", "findLast()")}} 메서드도 참고하세요.

{{InteractiveExample("JavaScript Demo: Array.findLastIndex()", "shorter")}}

```js interactive-example
const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130
```

## 구문

```js-nolint
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)
```

### 매개변수

- `callbackFn`
  - : 배열의 각 요소에 대해 실행할 함수입니다. 이 함수는 매칭된 요소가 발견되었음을 나타내기 위해 [참 같은 값](/ko/docs/Glossary/Truthy)을 반환해야하며, 그렇지 않으면 [거짓 같은 값](/ko/docs/Glossary/Falsy)을 반환해야 합니다. 이 함수는 다음과 같은 인수와 함께 호출됩니다.
    - `element`
      - : 배열에서 처리 중인 현재 요소입니다.
    - `index`
      - : 배열에서 처리 중인 현재 요소의 인덱스입니다.
    - `array`
      - : `findLastIndex()`가 호출된 배열입니다.
- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용할 객체입니다. 자세한 내용은 [순회 가능 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)를 참고하시기 바랍니다.

### 반환 값

테스트를 통과하는 배열에서 마지막 요소(가장 높은 인덱스)의 인덱스입니다.
만약 일치하는 요소가 없다면 `-1`을 반환합니다.

## 설명

`findLastIndex()` 메서드는 [순회 가능 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)입니다. 이 메서드는 배열의 각 요소마다 제공된 `callbackFn` 함수를 역순으로 한 번씩 호출하며, `callbackFn`이 [참 같은 값](/ko/docs/Glossary/Truthy)을 반환할 때까지 반복합니다. 참 같은 값이 반환되면 `findLastIndex()`는 해당 요소의 인덱스를 반환하고 배열 순회를 중단합니다. 만약 `callbackFn`이 참 같은 값을 반환하지 않으면, `findLastIndex()`는 `-1`을 반환합니다.

`callbackFn`는 배열의 모든 인덱스에 대해 호출됩니다. 할당된 값이 있는 인덱스뿐만 아니라 [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)의 비어있는 슬롯도 `undefined`와 동일하게 동작합니다.

`findLastIndex()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods) 메서드입니다. `this` 값에 `length` 속성과 정수 키 속성 만을 기대합니다.

## 예제

### 배열에서 마지막 소수의 인덱스 찾기

다음 예제는 배열에서 마지막으로 나오는 소수(prime number)의 인덱스를 반환하며, 소수가 없는 경우 `-1`을 반환합니다.

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

console.log([4, 6, 8, 12].findLastIndex(isPrime)); // -1, 찾을 수 없음
console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime)); // 5
```

### callbackFn의 세 번째 인수 사용하기

`array` 인수는 배열의 다른 요소에 접근하려는 경우, 특히 배열을 참조하는 기존 변수가 없는 경우에 유용합니다. 다음 예제에서는 먼저 `filter()`를 사용하여 양수 값을 추출한 다음 `findLastIndex()`를 사용하여 이웃 요소보다 작은 마지막 요소를 찾습니다.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const lastTrough = numbers
  .filter((num) => num > 0)
  .findLastIndex((num, idx, arr) => {
    // arr 인수가 없으면 변수로 저장하지 않고 중간에 생성된
    // 배열에 쉽게 접근할 수 있는 방법은 없습니다.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(lastTrough); // 6
```

### 희소 배열에서 findLastIndex() 사용

희소 배열에서 `undefined`를 찾아 빈 슬롯의 인덱스를 알아낼 수 있습니다.

```js
console.log([1, , 3].findLastIndex((x) => x === undefined)); // 1
```

### 배열이 아닌 객체에서 findLastIndex() 사용

`findLastIndex()` 메서드는 `this`의 `length` 속성을 읽은 다음 각 정수 인덱스에 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findLastIndex.call(arrayLike, (x) => Number.isInteger(x)),
); // 2
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Array.prototype.findIndex` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
