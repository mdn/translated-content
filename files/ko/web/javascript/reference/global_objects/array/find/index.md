---
title: Array.prototype.find()
short-title: find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
l10n:
  sourceCommit: 6589a6a25a5d2e9a359c3f02f37c670fb7c74259
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`find()`** 메서드는 제공된 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환합니다. 테스트 함수를 만족하는 값이 없으면 {{jsxref("undefined")}}가 반환됩니다.

- 배열에서 찾은 요소의 **인덱스**가 필요한 경우, {{jsxref("Array/findIndex", "findIndex()")}}를 사용하세요.
- **값의 인덱스**를 찾아야 하는 경우, {{jsxref("Array/indexOf", "indexOf()")}}를 사용하세요. ({{jsxref("Array/findIndex", "findIndex()")}}와 유사하지만, 테스트 함수를 사용하는 것 대신 각 요소가 값과 동일한지 확인합니다.)
- 배열에 값이 **존재**하는지 찾아야 하는 경우, {{jsxref("Array/includes", "includes()")}}를 사용하세요.
  이 역시 테스트 함수를 사용하는 것 대신 각 요소가 값과 동일한지 확인합니다.
- 제공된 테스트 함수를 만족하는 요소가 있는지 찾아야 하는 경우, {{jsxref("Array/some", "some()")}}을 사용하세요.
- 만약 주어진 테스트 함수를 만족하는 모든 요소를 찾고 싶으면 {{jsxref("Array/filter", "filter()")}}을 사용하세요.

{{InteractiveExample("JavaScript Demo: Array.prototype.find()", "shorter")}}

```js interactive-example
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
```

## 구문

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### 매개변수

- `callback`
  - : 배열의 각 요소에 대해 실행할 함수입니다. 일치하는 요소를 찾았으면 [참](/ko/docs/Glossary/Truthy) 값을 반환하고, 그렇지 않으면 [거짓](/ko/docs/Glossary/Falsy) 값을 반환해야 합니다. 함수는 다음 인수를 사용하여 호출됩니다.
    - `element`
      - : 배열에서 현재 처리되고 있는 요소.
    - `index`
      - : 배열에서 현재 처리되고 있는 요소의 인덱스.
    - `array`
      - : `find()`가 호출된 배열.
- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용할 값입니다. [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)를 참조하세요.

### 반환 값

제공된 테스트 함수를 만족하는 배열의 첫 번째 요소입니다. 테스트 함수를 만족하는 요소가 없으면, {{jsxref("undefined")}}가 반환됩니다.

## 설명

`find()` 메서드는 [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)입니다. 이 메서드는 `callbackFn`이 [참 같은](/ko/docs/Glossary/Truthy) 값을 반환할 때까지, 오름차순 인덱스로 순서로 배열의 각 요소에 대해 제공된 `callbackFn` 함수를 한 번씩 호출합니다. 그런 다음 `find()`는 해당 요소를 반환하고 배열 순회를 중지합니다. `callbackFn`이 [참 같은](/ko/docs/Glossary/Truthy) 값을 반환하지 않으면, `find()`는 {{jsxref("undefined")}}를 반환합니다. 더 자세한 정보는 [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드) 섹션을 보시기 바랍니다. 이 섹션에는 이러한 메서드가 일반적으로 어떻게 동작하는지 설명하고 있습니다.

`callbackFn`은 값이 할당된 인덱스뿐만 아니라 배열의 모든 인덱스에 대해 호출됩니다. [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)의 빈 슬롯은 `undefined`와 동일하게 동작합니다.

`find()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. `this` 값에는 `length` 속성과 정수 키 속성만 있을 것으로 예상합니다.

## 예제

### 배열에서 속성 중 하나로 객체 찾기

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
```

#### 화살표 함수 및 구조 분해 사용

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
```

### 배열에서 소수 찾기

다음 예제는 배열의 요소 중 소수인 요소를 찾습니다(소수가 없는 경우에는 {{jsxref("undefined")}}를 반환합니다.).

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, 소수 없음
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

### callbackFn의 세 번째 인수 사용하기

`array` 인수는 배열의 다른 요소에 접근하려는 경우, 특히 배열을 참조하는 기존 변수가 없는 경우에 유용합니다. 다음 예제에서는 먼저 `filter()`를 사용하여 양수 값을 추출한 다음 `find()`를 사용하여 이웃 요소보다 작은 첫 번째 요소를 찾습니다.

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = numbers
  .filter((num) => num > 0)
  .find((num, idx, arr) => {
    // arr 인수가 없으면 변수에 저장하지 않고는
    // 중간 배열에 쉽게 접근할 수 없습니다.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(firstTrough); // 1
```

### 희소 배열에서 find() 사용하기

희소 배열의 빈 슬롯은 `undefined`와 동일하게 동작합니다.

```js
// 2, 3, 4 인덱스에 요소가 없는 배열로 선언
const array = [0, 1, , , , 5, 6];

// 값이 있는 요소만이 아닌 모든 인덱스를 표시합니다.
array.find((value, index) => {
  console.log("방문 인덱스:", index, "값:", value);
});
// 방문 인덱스: 0 값: 0
// 방문 인덱스: 1 값: 1
// 방문 인덱스: 2 값: undefined
// 방문 인덱스: 3 값: undefined
// 방문 인덱스: 4 값: undefined
// 방문 인덱스: 5 값: 5
// 방문 인덱스: 6 값: 6

// 삭제된 요소를 포함한 모든 인덱스를 표시합니다.
array.find((value, index) => {
  // 첫 번째 순회에서 요소 5 삭제
  if (index === 0) {
    console.log(array[5], "값인 array[5] 삭제");
    delete array[5];
  }
  // 삭제된 요소 5를 포함하여 모든 인덱스를 방문합니다.
  console.log("방문 인덱스:", index, "값:", value);
});
// 5 값인 array[5] 삭제
// 방문 인덱스: 0 값: 0
// 방문 인덱스: 1 값: 1
// 방문 인덱스: 2 값: undefined
// 방문 인덱스: 3 값: undefined
// 방문 인덱스: 4 값: undefined
// 방문 인덱스: 5 값: undefined
// 방문 인덱스: 6 값: 6
```

### 배열이 아닌 객체에서 find() 호출하기

`find()` 메서드는 `this`의 `length` 속성을 읽은 다음 키가 `length`보다 작은 음수가 아닌 정수인 각 속성에 접근합니다.

```js
const arrayLike = {
  length: 3,
  "-1": 0.1, // -1 < 0 이므로 find()에서 무시됩니다.
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)));
// 7.3
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.find` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
