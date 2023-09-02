---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
---

{{JSRef}}

**`some()`** 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트합니다. 만약 배열에서 주어진 함수가 true을 반환하면 true를 반환합니다. 그렇지 않으면 false를 반환합니다. 이 메서드는 배열을 변경하지 않습니다.

{{EmbedInteractiveExample("pages/js/array-some.html")}}

## 구문

```js-nolint
// 화살표 함수
some((element) => { /* … */ })
some((element, index) => { /* … */ })
some((element, index, array) => { /* … */ })

// 콜백 함수
some(callbackFn)
some(callbackFn, thisArg)

// 인라인 콜백 함수
some(function (element) { /* … */ })
some(function (element, index) { /* … */ })
some(function (element, index, array) { /* … */ })
some(function (element, index, array) { /* … */ }, thisArg)
```

### 매개변수

- `callbackFn`

  - : 배열의 각 요소에 대해 실행할 함수. 이 함수는 요소가 시험을 통과하면 [참 같은 값](/ko/docs/Glossary/Truthy)을 반환하며, 그렇지 않으면 거짓인 값을 반환합니다.

  다음의 인자와 함께 함수를 호출합니다.

  - `element`
    - : 처리할 배열 내 현재 요소
  - `index`
    - : 처리할 현재 요소의 인덱스
  - `array`
    - : `some`을 호출한 배열

- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용하는 값. [반복 메소드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)를 참고하세요.

### 반환 값

콜백 함수가 적어도 배열 중 하나의 요소에 대해 {{Glossary("truthy", "참인 값")}}을 반환하면 `true`를 반환하며, 그렇지 않으면 `false`를 반환합니다.

## 설명

`some` 메서드는 [반복 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)입니다. 이 메서드는 주어진 `callbackFn`함수가 [참 같은 값](/ko/docs/Glossary/Truthy)을 반환할 때까지 배열 안에 있는 각각의 요소마다 한 번씩 호출합니다. 만약 그러한 요소를 찾았으면 `some()` 메서드는 그 즉시 `true`를 반환하며 배열 순회를 멈춥니다. 그렇지 않고 `callbackFn`이 모든 요소에 대해 [거짓같은 값](/ko/docs/Glossary/Falsy)을 반환하면 `some()`은 `false`를 반환합니다.

`some()`은 수학에서 존재 한정자와 같은 역할을 합니다. 특히 빈 배열의 경우 모든 조건에 대해 `false`를 반환합니다.

`callbackFn`는 값이 할당된 배열 인덱스에서만 실행됩니다. [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)의 빈 슬롯에서는 실행되지 않습니다.

`some()`은 호출된 배열의 값을 변경하지 않지만, 제공된 `callbackFn`에서는 가능합니다. 그럼에도 배열의 길이는 `callbackFn`의 첫 실행 이전에 저정된다는 점을 명심하시기 바랍니다.

- `callbackFn`은 `some()` 호출되어 시작할 당시 배열의 초기 길이를 넘어서는 요소는 방문하지 않습니다.
- 이미 방문했던 인덱스를 변경해도 `callbackFn`은 해당 인덱스에 대해 `callbackFn`을 다시 실행하지 않습니다
- 만약 존재하나 아직 방문하지 않은 배열의 요소는 `callbackFn`이 변경시킬 수 있습니다. 이 값은 `callbackFn`이 요소에 방문하는 시점에 `callbackFn`에 넘겨지는 값입니다. [삭제한](/ko/docs/Web/JavaScript/Reference/Operators/delete) 요소는 방문하지 않습니다.

`some()` 메서드는 [제너릭](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods)입니다. `this` 값에 `length` 속성과 정수 키 속성만 있으면 됩니다.

## 예제

### 배열의 요소 테스트

다음 예제는 배열 내 요소 중 하나라도 10보다 큰지 판별합니다.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### 화살표 함수를 사용한 배열의 요소 테스트

[화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)는 같은 테스트에 대해 더 짧은 구문을 제공합니다.

```js
[2, 5, 8, 1, 4].some((x) => x > 10); // false
[12, 5, 8, 1, 4].some((x) => x > 10); // true
```

### 값이 배열 내 존재하는지 확인

`includes()` 메서드의 기능을 모방하기 위해 이 사용자 지정 함수는 요소가 배열에 있는 경우 `true` 반환합니다.

```js
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "kela"); // false
checkAvailability(fruits, "banana"); // true
```

### 어떠한 값이건 불리언으로 변환

```js
const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some((t) => t === value);
}

getBoolean(false); // false
getBoolean("false"); // false
getBoolean(1); // true
getBoolean("true"); // true
```

### 희소 배열에 some() 사용하기

`some()`은 빈 슬롯에 조건자를 실행하지 않습니다.

```js
console.log([1, , 3].some((x) => x === undefined)); // false
console.log([1, , 1].some((x) => x !== 1)); // false
console.log([1, undefined, 1].some((x) => x !== 1)); // true
```

### 배열이 아닌 객체에 some() 호출하기

`some()` 메서드는 `this`의 `length` 속성을 읽고 객체의 마지막에 도달하거나 `callbackFn`이 `true`를 반환할 때 까지 정수 인덱스로 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
console.log(Array.prototype.some.call(arrayLike, (x) => typeof x === "number"));
// false
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Array.prototype.some` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.some()")}}
