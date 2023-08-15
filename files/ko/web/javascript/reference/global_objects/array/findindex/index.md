---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
l10n:
  sourceCommit: 34a34bee83fb4accf073ebc0c8cfc8eff956dc9b
---

{{JSRef}}

**`findIndex()`** 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.

판별 함수를 만족하는 첫번째 인덱스 대신 값을 반환하는 {{jsxref("Array.prototype.find", "find()")}} 메서드도 참고하세요.

{{EmbedInteractiveExample("pages/js/array-findindex.html","shorter")}}

## 구문

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### 매개변수

- `callbackFn`
  - : 배열의 각 요소마다 실행할 함수입니다. 일치하는 요소가 발견되었음을 나타내는 [참인 값](/ko/docs/Glossary/Truthy)을 반환하고 그렇지 않으면 [거짓인 값](/ko/docs/Glossary/Falsy)을 반환해야합니다. 함수는 다음과 같은 인수와 함께 호출됩니다.
    - `element`
      - : 배열에서 처리중인 현재 요소입니다.
    - `index`
      - : 배열에서 처리중인 현재 요소의 인덱스입니다.
    - `array`
      - : `findIndex()` 함수가 호출된 배열입니다.
- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용할 값입니다. [반복 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)를 참조하세요.

### 반환 값

테스트를 통과하는 첫 번째 요소의 인덱스입니다.
일치하는 요소가 없으면 -1을 반환합니다.

## 설명

`findIndex()`는 [반복 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)입니다. `callbackFn` 함수를 배열의 각 요소에 대해 오름차순 인덱스 순서로 한 번씩 호출하고, `callbackFn`이 [참인 값](/ko/docs/Glossary/Truthy)을 반환할 때까지 반복합니다. 그런 다음 `findIndex()`는 해당 요소의 인덱스를 반환하고 배열 반복을 중단합니다. `callbackFn`이 참인 값을 반환하지 않으면 `findIndex()`는 `-1`을 반환합니다.

`callbackFn`은 배열의 _모든_ 인덱스에 대해 호출되며, 할당된 값만이 아닙니다. [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)의 빈 슬롯은 `undefined`와 동일하게 동작합니다.

`findIndex()`는 호출된 배열을 변경하지 않지만, `callbackFn`으로 제공된 함수는 변경할 수 있습니다. 그러나 배열의 길이는 `callbackFn`의 첫 번째 호출 "전에" 저장됩니다. 따라서 다음과 같습니다.

- `callbackFn`은 `findIndex()` 호출이 시작된 배열의 초기 길이를 초과하여 추가된 요소를 방문하지 않습니다.

- 이미 방문한 인덱스에 대한 변경은 `callbackFn`이 다시 호출되지 않도록 합니다.

- `callbackFn`에 의해 배열의 아직 방문하지 않은 요소가 변경되었다면, `callbackFn`에 전달된 값은 해당 요소가 방문되는 시점의 값이 됩니다. [삭제된](/ko/docs/Web/JavaScript/Reference/Operators/delete) 요소는 `undefined`인 것처럼 방문됩니다.

> **경고:** 위에서 설명한 종류의 동시 수정은 종종 이해하기 어려운 코드로 이어지며, 일반적으로 피해야 합니다(특별한 경우를 제외하고).

`findIndex()` 메서드는 [일반적](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods)입니다. `length` 속성과 정수 키 속성을 가진 `this` 값을 기대합니다.

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

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
```

### 희소 배열에서 findIndex() 사용하기

희소 배열에서 `undefined`를 검색하고 빈 슬롯의 인덱스를 얻을 수 있습니다.

```js
console.log([1, , 3].findIndex((x) => x === undefined)); // 1
```

### findIndex()를 배열이 아닌 객체에 호출하기

`findIndex()`는 `this`의 `length` 속성을 읽은 다음 각 정수 인덱스에 액세스합니다.

```js
const arrayLike = {
  length: 3,
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

- [Polyfill of `Array.prototype.findIndex` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
