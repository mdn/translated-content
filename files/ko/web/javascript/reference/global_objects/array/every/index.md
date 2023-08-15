---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
---

{{JSRef}}

**`every()`** 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값을 반환합니다.

{{EmbedInteractiveExample("pages/js/array-every.html", 'shorter')}}

## 구문

```js
// 화살표 함수
every((element) => { ... } )
every((element, index) => { ... } )
every((element, index, array) => { ... } )

// 콜백 함수
every(callbackFn)
every(callbackFn, thisArg)

// 인라인 콜백 함수
every(function callbackFn(element) { ... })
every(function callbackFn(element, index) { ... })
every(function callbackFn(element, index, array){ ... })
every(function callbackFn(element, index, array) { ... }, thisArg)
```

### 매개변수

- `callbackFn`
  - : 각 요소를 시험할 함수. 다음 세 가지 인수를 받습니다.
    - `element`
      - : 배열에서 처리되는 현재 요소
    - `index`
      - : 처리할 현재 요소의 인덱스
    - `array`
      - : `every`를 호출한 배열
- `thisArg` {{Optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용하는 값.

### 반환 값

`callbackFn`이 모든 배열 요소에 대해 참({{Glossary("truthy")}})인 값을 반환하는 경우
**`true`**, 그 외엔 **`false`** 를 반환합니다.

## 설명

`every`는 `callbackFn`이 {{glossary("falsy", "거짓")}}을 반환하는 요소를 찾을때까지 배열에 있는 각 요소에 대해 한 번씩 `callbackFn` 함수를 실행합니다. 해당하는 요소를 발견한 경우 `every`는 즉시 `false`를 반환합니다. 그렇지 않으면, 즉 모든 값에서 참을 반환하면 `true`를 반환합니다.

할당한 값이 있는 인덱스에서만 `callbackFn`을 호출합니다. [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)의 빈 슬롯에서는 호출되지 않습니다.

`callbackFn`은 요소의 값, 해당 요소의 인덱스 및 순회하고 있는 배열 세 가지 인수와 함께 호출됩니다.

`thisArg` 매개변수를 `every`에 제공한 경우 `callbackFn`의 `this`로 사용됩니다. 그 외엔 {{jsxref("undefined")}}값을 사용합니다. 최종적으로 `callbackFn`이 볼 수 있는 `this`의 값은 [함수가 볼 수 있는 `this`를 결정하는 평소 규칙](/ko/docs/Web/JavaScript/Reference/Operators/this)을 따릅니다.

`every`는 호출한 배열을 변형하지 않습니다.

`every`가 처리하는 요소의 범위는 `callbackFn`의 첫 호출 전에 설정됩니다. `every` 호출 이후로 배열에 추가하는 요소는 `callbackFn`이 방문하지 않습니다. 배열에 존재하는 요소가 변경된 경우, `callbackFn`에 `every`가 방문하는 시점의 값을 전달합니다. 삭제한 요소는 방문하지 않습니다.

`every`는 (이산)수학에서 전칭(∀) 정량자(quantifier, 한정자)처럼 행동합니다.
특히, 빈 배열에 대해서는 `true`를 반환합니다. (이는 [공집합](http://en.wikipedia.org/wiki/Empty_set#Common_problems)의 모든 요소가 어떠한 주어진 조건도 만족하는 [공허한 참](http://en.wikipedia.org/wiki/Vacuous_truth#Vacuous_truths_in_mathematics)입니다.)

## 예제

### 모든 배열 요소의 크기 테스트

다음 예는 배열의 모든 요소가 10보다 더 큰지 테스트합니다.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### 하나의 배열이 다른 배열의 부분 집합인지 체크하기

다음은 어떤 배열의 모든 요소가 또 다른 배열에 존재하는지 테스트를 하는 예제입니다.

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

아래 예제는 배열이 수정될 때 `every` 메서드의 행위를 테스트합니다.

```js
// ---------------
// 요소 수정
// ---------------
let arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr[index + 1] -= 1;
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 2;
});

// 3회 순회하지만 앞선 2회의 순회는 수정이 일어나지 않습니다.
//
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2

// ---------------
// 요소 추가
// ---------------
arr = [1, 2, 3];
arr.every((elem, index, arr) => {
  arr.push("new");
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// 새로운 요소가 추가된 후에도 3회 순회합니다.
//
// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

// ---------------
// 요소 삭제
// ---------------
arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr.pop();
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// 기존 요소가 `pop()` 됨에 따라 2회만 순회합니다.
//
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2
```

### 배열이 아닌 객체에서 every() 호출하기

`every()` 메서드는 `this`의 `length` 속성을 읽고 마지막 혹은 `callbackFn`이 `false`를 리턴할때까지 정수 인덱스에 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
console.log(
  Array.prototype.every.call(arrayLike, (x) => typeof x === "string"),
); // true
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `Array.prototype.every`의 폴리필은
  [`core-js`](https://github.com/zloirock/core-js#ecmascript-array)에서 가능합니다
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
