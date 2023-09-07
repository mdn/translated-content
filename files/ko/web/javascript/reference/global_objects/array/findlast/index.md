---
title: Array.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLast
---

{{JSRef}}

**`findLast()`** 메서드는 배열을 역순으로 반복하고 제공된 테스트 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 테스트 함수를 만족하는 요소가 없다면 {{jsxref("undefined")}}가 반환될 것입니다.

{{EmbedInteractiveExample("pages/js/array-findlast.html","shorter")}}

필요한 경우.

- 일치하는 _첫 번째_ 요소, {{jsxref("Array/find", "find()")}}를 사용하세요.
- 배열에서 일치하는 마지막 요소의 _색인_, {{jsxref("Array/findLastIndex", "findLastIndex()")}}를 사용하세요.
- _값의 색인_, {{jsxref("Array/indexOf", "indexOf()")}}를 사용하세요.
  ({{jsxref("Array/findIndex", "findIndex()")}}와 비슷합니다, 하지만 테스트 함수를 사용하는 대신에 각 요소가 값과 동일한지 확인합니다.)
- 배열 내에서 값이 _존재하는지_ 여부, {{jsxref("Array/includes", "includes()")}}를 사용하세요.
  다시, 이것은 테스트 함수를 사용하는 대신에 각 요소가 값과 동일한지 확인합니다.
- 제공된 테스트 함수를 만족하는 요소가 있는 경우, {{jsxref("Array/some", "some()")}}을 사용하세요.

## 구문

```js-nolint
// 화살표 함수
findLast((element) => { /* … */ })
findLast((element, index) => { /* … */ })
findLast((element, index, array) => { /* … */ })

// 콜백 함수
findLast(callbackFn)
findLast(callbackFn, thisArg)

// 인라인 콜백 함수
findLast(function (element) { /* … */ })
findLast(function (element, index) { /* … */ })
findLast(function (element, index, array) { /* … */ })
findLast(function (element, index, array) { /* … */ }, thisArg)
```

### 매개변수

- `callbackFn`

  - : 배열에서 각 요소에 실행하기 위한 함수. 이것은 일치하는 요소가 찾아졌다고 나타내는 [참 같은 값](/ko/docs/Glossary/Truthy)을 반환해야만 합니다.

    함수는 다음 인수로 호출됩니다.

    - `element`
      - : 배열에서 처리 중인 현재 요소.
    - `index`
      - : 배열에서 처리 중인 현재 요소의 색인.
    - `array`
      - : `findLast()` 배열이 호출되었습니다.

- `thisArg` {{optional_inline}}
  - : `callbackFn`이 처리 중일 때 `this`로 사용하는 값. [반복 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)를 참조하세요.

### 반환 값

배열 내에서 제공된 테스트 함수를 만족하는 제일 높은 색인 값을 가진 요소의 값입니다. 일치하는 요소를 찾을 수 없을 때는 {{jsxref("undefined")}}를 반환합니다.

## 설명

`findLast()` 메서드는 [반복 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)입니다. 이것은 [참 같은 값](/ko/docs/Glossary/Truthy)이 반환될 때까지 제공된 `callbackFn`을 배열 내에서 각 요소에 내림차순으로 한 번 호출합니다. `findLast()`는 요소를 반환하고 배열을 통한 반복을 그만합니다. `callbackFn`이 참 같은 값, 즉 `true`를 반환하지 않는다면, `findLast()`는 {{jsxref("undefined")}}를 반환합니다.

`callbackFn`은 할당된 값만이 아닌 _모든_ 배열의 색인에 호출됩니다. [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) 내의 빈 슬롯은 `undefined`와 동일하게 동작합니다.

`findLast()`는 호출된 배열을 변환하지 않습니다, 하지만 `callbackFn`와 같은 제공된 함수는 할 수 있습니다. 그러나 첫 번째 `callbackFn` _전에_ 배열의 길이는 저장됩니다. 그러므로.

- `callbackFn`은 `findLast()` 호출이 시작될 때 배열의 초기 길이를 넘어서 추가된 요소를 방문하지 않습니다.
- 이미 방문된 색인들을 바꿔도 `callbackFn`을 다시 소환하지 않습니다.
- 존재한다면, 배열의 아직 방문하지 않은 요소는 `callbackFn`에 의해 바뀔것입니다, `callbackFn`을 통과한 요소의 값은 요소가 방문되는 시간 값이 될 것입니다. [Deleted](/ko/docs/Web/JavaScript/Reference/Operators/delete) 요소는 `undefined`이었던 것처럼 방문됩니다.

> **경고:** 위에서 설명한 종류의 동시 수정은 종종 이해하기 어려운 코드로 이어지며 일반적으로 피해야 합니다 (특별한 경우를 제외하고).

`findLast()` 메서드는 [제네릭](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods)입니다. 이것은 오직 `length` 특성과 정수 키 특성을 가질 것으로 예상합니다.

## 예제

### 요소 특성에 일치하는 배열 속 마지막 객체 찾기

배열 요소의 특성을 기반으로 테스트를 어떻게 생성할 수 있는지 보여주는 예제입니다.

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

// 재고 물품 양이 적을 때 true 반환
function isNotEnough(item) {
  return item.quantity < 2;
}

console.log(inventory.findLast(isNotEnough));
// { name: "fish", quantity: 1 }
```

#### 화살표 함수와 구조 분해 사용

이전 예제는 화살표 함수와 [구조 분해 할당](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring)을 사용하여 작성할 수 있습니다.

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.findLast(({ quantity }) => quantity < 2);

console.log(result);
// { name: "fish", quantity: 1 }
```

### 배열에서 마지막 소수 찾기

다음 예제는 배열에서 소수인 마지막 요소를 찾습니다 (소수가 존재하지 않을 경우 {{jsxref("undefined")}}를 반환합니다).

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

console.log([4, 6, 8, 12].findLast(isPrime)); // undefined, 찾지 못함
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)); // 11
```

### 성긴 배열에서의 findLast() 사용

성긴 배열에서 빈 슬롯이 방문되며, `undefined`와 동일하게 처리됩니다.

```js
// 색인 2, 3, 4에서 배열에 요소가 없음을 선언
const array = [0, 1, , , , 5, 6];

// 할당된 값 뿐만이 아닌 모든 색인 보여주기
array.findLast((value, index) => {
  console.log(`Visited index ${index} with value ${value}`);
});
// 값이 6인 색인 6 방문
// 값이 5인 색인 5 방문
// 값이 undefined인 색인 4 방문
// 값이 undefined인 색인 3 방문
// 값이 undefined인 색인 2 방문
// 값이 1인 색인 1 방문
// 값이 0인 색인 0 방문

// 삭제된 것을 포함한 모든 색인 보여주기
array.findLast((value, index) => {
  // 첫 번째 반복에서 요소 5 삭제하기
  if (index === 6) {
    console.log(`Deleting array[5] with value ${array[5]}`);
    delete array[5];
  }
  // 요소 5는 삭제되었을지라도 여전히 방문되었습니다.
  console.log(`Visited index ${index} with value ${value}`);
});
// 값이 5인 array[5] 삭제
// 값이 6인 색인 6 방문
// 값이 undefined인 색인 5 방문
// 값이 undefined인 색인 4 방문
// 값이 undefined인 색인 3 방문
// 값이 undefined인 색인 2 방문
// 값이 1인 색인 1 방문
// 값이 0인 색인 0 방문
```

### 배열이 아닌 객체에서 findLast()를 호출

`findLast()` 메서드는 `this` 특성의 `length`를 읽고, 각 정수 색인에 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findLast.call(arrayLike, (x) => Number.isInteger(x)),
); // 4
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `Array.prototype.findLast`의 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.findLastIndex()")}} – 마지막 요소를 찾고 색인을 반환합니다
- {{jsxref("Array.prototype.includes()")}} – 배열에 값이 존재하는지 여부를 테스트합니다
- {{jsxref("Array.prototype.filter()")}} – 일치하지 않는 모든 요소를 제거합니다
- {{jsxref("Array.prototype.every()")}} – 모든 요소를 테스트합니다
- {{jsxref("Array.prototype.some()")}} – 한 요소가 일치할 때까지 테스트합니다
