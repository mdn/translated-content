---
title: Array.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLast
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`findLast()`** 메서드는 배열을 역순으로 순회하며 제공된 테스트 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 테스트 함수를 만족하는 요소가 없으면 {{jsxref("undefined")}}가 반환됩니다.

- 일치하는 첫 번째 요소를 찾으려면 {{jsxref("Array/find", "find()")}}를 사용하세요.
- 배열에서 마지막으로 일치하는 요소의 인덱스를 찾으려면 {{jsxref("Array/findLastIndex", "findLastIndex()")}}를 사용하세요.
- 값의 인덱스를 찾으려면 {{jsxref("Array/indexOf", "indexOf()")}}를 사용하세요.
  ({{jsxref("Array/findIndex", "findIndex()")}}와 비슷하지만, 테스트 함수를 사용하는 것 대신 각 요소가 값과 동일한지 확인합니다.)
- 값이 배열에 존재하는지 확인하려면 {{jsxref("Array/includes", "includes()")}}를 사용합니다.
  이 역시 테스트 함수를 사용하는 것 대신 각 요소가 값과 동일한지 확인합니다.
- 제공된 테스트 함수를 만족하는 요소가 있는지 찾아야 하는 경우, {{jsxref("Array/some", "some()")}}을 사용하세요.

{{EmbedInteractiveExample("pages/js/array-findlast.html","shorter")}}

## 구문

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### 매개변수

- `callbackFn`
  - : 배열의 각 요소에 대해 실행할 함수입니다. 일치하는 요소를 찾았으면 [참](/ko/docs/Glossary/Truthy) 값을 반환하고, 그렇지 않으면 [거짓](/ko/docs/Glossary/Falsy) 값을 반환해야 합니다. 함수는 다음 인수를 사용하여 호출됩니다.
    - `element`
      - : 배열에서 현재 처리되고 있는 요소.
    - `index`
      - : 배열에서 현재 처리되고 있는 요소의 인덱스.
    - `array`
      - : `findLast()`가 호출된 배열.
- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용할 값입니다. [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)를 참조하세요.

### 반환 값

제공된 테스트 함수를 만족하는 가장 높은 인덱스 값을 가진 배열의 요소 값. 일치하는 요소를 찾을 수 없으면 {{jsxref("undefined")}}를 반환합니다.

## 설명

`findlast()` 메서드는 [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)입니다. 이 메서드는 `callbackFn`이 [참](/ko/docs/Glossary/Truthy) 값을 반환할 때까지, 내림차순 인덱스로 순서로 배열의 각 요소에 대해 제공된 `callbackFn` 함수를 한 번씩 호출합니다. 그런 다음 `findlast()`는 해당 요소를 반환하고 배열 순회를 중지합니다. `callbackFn`이 [참](/ko/docs/Glossary/Truthy) 값을 반환하지 않으면, `findlast()`는 {{jsxref("undefined")}}를 반환합니다.

`callbackFn`은 값이 할당된 인덱스뿐만 아니라 배열의 모든 인덱스에 대해 호출됩니다. [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)의 빈 슬롯은 `undefined`와 동일하게 동작합니다.

`findlast()`는 호출되는 배열을 변경하지 않지만, `callbackFn`으로 제공된 함수는 변경할 수 있습니다. 그러나 배열의 length는 `callbackFn`을 처음 호출하기 전에 저장된다는 점에 유의하세요. 따라서,

- `callbackFn`은 `findlast()` 호출이 시작되었을 때 배열의 초기 length 값을 초과하여 추가된 요소는 방문하지 않습니다.
- 이미 방문한 인덱스를 변경해도 `callbackFn`이 해당 인덱스에 대해 다시 호출되지 않습니다.
- 배열의 아직 방문하지 않은 기존 요소가 `callbackFn`에 의해 변경되는 경우, `callbackFn`에 전달된 값은 해당 요소가 방문될 당시의 값이 됩니다. [삭제된](/ko/docs/Web/JavaScript/Reference/Operators/delete) 요소는 `undefined`가 있는것 처럼 방문됩니다.

> **경고:** 위에서 설명한 종류의 동시 수정은 이해하기 어려운 코드를 만드는 경우가 많으므로 일반적으로 지양해야 합니다(특별한 경우 제외).

`find()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. `this` 값에는 `length` 속성과 정수 키 속성만 있을 것으로 예상합니다.

## 예제

### 배열에서 요소 속성을 기준으로 일치하는 마지막 객체 찾기

이 예제는 배열 요소의 속성을 기반으로 테스트를 만드는 방법을 보여줍니다.

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

// inventory의 재고가 부족하면 true를 반환합니다.
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

다음 예제는 배열의 마지막 요소 중 소수인 요소를 반환하거나, 소수가 없는 경우 {{jsxref("undefined")}}를 반환합니다.

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

### 희소 배열에서 findLast() 사용

희소 배열의 빈 슬롯은 방문되며, `undefined`와 동일하게 취급됩니다.

```js
// 2, 3, 4 인덱스에 요소가 없는 배열로 선언
const array = [0, 1, , , , 5, 6];

// 값이 있는 요소만이 아닌 모든 인덱스를 표시합니다.
array.findLast((value, index) => {
  console.log(`방문 인덱스: ${index} 값: ${value}`);
});
// 방문 인덱스: 6 값: 6
// 방문 인덱스: 5 값: 5
// 방문 인덱스: 4 값: undefined
// 방문 인덱스: 3 값: undefined
// 방문 인덱스: 2 값: undefined
// 방문 인덱스: 1 값: 1
// 방문 인덱스: 0 값: 0

// 삭제된 요소를 포함하여 모든 인덱스를 표시합니다.
array.findLast((value, index) => {
  // 첫 번째 순회에서 요소 5 삭제
  if (index === 6) {
    console.log(`값이 ${array[5]}인 array[5] 삭제`);
    delete array[5];
  }
  // 요소 5가 삭제되어도 여전히 방문됩니다.
  console.log(`방문 인덱스: ${index} 값: ${value}`);
});
// 값이 5인  array[5] 삭제
// 방문 인덱스: 6 값: 6
// 방문 인덱스: 5 값: undefined
// 방문 인덱스: 4 값: undefined
// 방문 인덱스: 3 값: undefined
// 방문 인덱스: 2 값: undefined
// 방문 인덱스: 1 값: 1
// 방문 인덱스: 0 값: 0
```

### 배열이 아닌 객체에서 findLast() 호출

`findlast()` 메서드는 `this`의 `length` 속성을 읽은 다음 키가 `length`보다 작은 음수가 아닌 정수인 각 속성에 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
  3: 3, // length가 3이므로 findlast()에서 무시됩니다.
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

- [`core-js`의 `Array.prototype.findLast` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
