---
title: Array.prototype.every()
short-title: every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`every()`** 메서드는 제공된 테스트 함수를 만족시키지 못한 배열 내 요소를 하나 찾으면 `false`를 반환합니다. 그렇지 않으면 `true`를 반환합니다.

{{InteractiveExample("JavaScript Demo: Array.prototype.every()", "shorter")}}

```js interactive-example
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// 예상 출력: true
```

## 구문

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### 매개변수

- `callbackFn`
  - : 배열의 각 요소에 대해 실행할 함수입니다. 요소가 테스트를 통과하면 [참](/ko/docs/Glossary/Truthy) 값을 반환하고, 그렇지 않으면 [거짓](/ko/docs/Glossary/Falsy) 값을 반환해야 합니다. 함수는 다음 인자를 사용하여 호출됩니다.
    - `element`
      - : 배열에서 처리되는 현재 요소.
    - `index`
      - : 처리되는 현재 요소의 인덱스.
    - `array`
      - : `every()`를 호출한 배열.
- `thisArg` {{Optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용하는 값. [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)를 참조하세요.

### 반환 값

`callbackFn`이 {{Glossary("falsy", "거짓")}}을 반환하는 경우 `false`를 즉시 반환하며, 그렇지 않으면 `true`를 반환합니다.

## 설명

`every()` 메서드는 [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)입니다. 배열의 각 요소에 대해 제공된 `callbackFn` 함수를 한 번씩 호출하고, `callbackFn`이 [거짓](/ko/docs/Glossary/Falsy) 값을 반환할 때까지 호출을 반복합니다. [거짓](/ko/docs/Glossary/Falsy) 요소가 발견되면 `every()`는 즉시 `false`를 반환하고 배열 순회를 중지합니다. 그렇지 않고 `callbackFn`이 모든 요소에 대해 [참](/ko/docs/Glossary/Truthy) 값을 반환하면, `every()`는 `true`를 반환합니다.

`every`는 수학의 "모든 ~에 대해(for all)" 양화사처럼 작동합니다. 특별히 빈 배열은 `true`를 반환합니다. ([빈 집합](https://en.wikipedia.org/wiki/Empty_set#Properties)의 모든 요소가 주어진 조건을 만족하는 것은 [공허 참](https://en.wikipedia.org/wiki/Vacuous_truth)입니다.)

`callbackFn`은 값이 할당된 배열의 인덱스에 대해서만 호출됩니다. [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)의 빈 슬롯에는 호출되지 않습니다.

`every()`는 호출되는 배열을 변경하지 않지만, `callbackFn`으로 제공된 함수는 변경할 수 있습니다. 그러나 배열의 length는 `callbackFn`을 처음 호출하기 전에 저장된다는 점에 유의하세요. 따라서,

- `callbackFn`은 `every()` 호출이 시작되었을 때 배열의 초기 length 값을 초과하여 추가된 요소를 방문하지 않습니다.
- 이미 방문한 인덱스를 변경해도 `callbackFn`이 다시 호출되지 않습니다.
- 배열의 아직 방문하지 않은 기존 요소가 `callbackFn`에 의해 변경되는 경우, `callbackFn`에 전달된 값은 해당 요소가 방문될 당시의 값이 됩니다. [삭제된](/ko/docs/Web/JavaScript/Reference/Operators/delete) 요소는 방문되지 않습니다.

> [!WARNING]
> 위에서 설명한 종류의 동시 수정은 이해하기 어려운 코드를 만드는 경우가 많으므로 일반적으로 지양해야 합니다(특별한 경우 제외).

`every()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. `this` 값에는 `length` 속성과 정수 키 속성만 있을 것으로 예상합니다.

## 예제

### 모든 배열 요소의 크기 테스트

다음 예제는 배열의 모든 요소가 9보다 더 큰지 테스트합니다.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### 한 배열이 다른 배열의 부분 집합인지 확인

다음 예제는 배열의 모든 요소가 다른 배열에 존재하는지 테스트합니다.

```js
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### 희소 배열에 every() 사용하기

`every()` 는 빈 슬롯에 콜백 함수를 실행하지 않습니다.

```js
console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true
```

### 초기 배열에 영향주기(수정, 추가, 삭제)

다음 예제는 배열이 수정되었을 때 `every` 메서드의 동작을 테스트합니다.

```js
// ---------
// 항목 수정
// ---------
let arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr[index + 1]--;
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 2;
});

// 루프는 3번 순회하지만,
// 수정이 없었다면 2번만 순회했을 것입니다.
//
// 첫 번째 순회: [1,1,3,4][0] -> 1
// 두 번째 순회: [1,1,2,4][1] -> 1
// 세 번째 순회: [1,1,2,3][2] -> 2

// ---------
// 항목 추가
// ---------
arr = [1, 2, 3];
arr.every((elem, index, arr) => {
  arr.push("new");
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// 새로운 요소가 추가된 후에도 3번만 순회합니다.
//
// 첫 번째 순회: [1, 2, 3, new][0] -> 1
// 두 번째 순회: [1, 2, 3, new, new][1] -> 2
// 세 번째 순회: [1, 2, 3, new, new, new][2] -> 3

// ---------
// 항목 삭제
// ---------
arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr.pop();
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// 기존 요소가 `pop()` 되어 2번만 순회합니다.
//
// 첫 번째 순회: [1,2,3][0] -> 1
// 두 번째 순회: [1,2][1] -> 2
```

### 배열이 아닌 객체에서 every() 호출하기

`every()` 메서드는 `this`의 `length` 속성을 읽은 다음, `length`보다 작은 음수가 아닌 정수 키의 각 속성에 모두 접근하거나 `callbackFn`이 `false`를 반환할 때까지 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: 345, // length가 3이므로 every()에 의해 무시됩니다.
};
console.log(
  Array.prototype.every.call(arrayLike, (x) => typeof x === "string"),
); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.every` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스된 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
