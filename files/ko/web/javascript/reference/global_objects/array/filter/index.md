---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
---

{{JSRef}}

**`filter()`** 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

{{EmbedInteractiveExample("pages/js/array-filter.html")}}

## 구문

```js
    arr.filter(callback(element[, index[, array]])[, thisArg])
```

### 매개변수

- `callback`

  - : 각 요소를 시험할 함수. `true`를 반환하면 요소를 유지하고, `false`를 반환하면 버립니다.

    다음 세 가지 매개변수를 받습니다.

    - `element`
      - : 처리할 현재 요소.
    - `index` {{optional_inline}}
      - : 처리할 현재 요소의 인덱스.
    - `array` {{optional_inline}}
      - : `filter`를 호출한 배열.

- `thisArg` {{optional_inline}}
  - : `callback`을 실행할 때 `this`로 사용하는 값.

### 반환 값

테스트를 통과한 요소로 이루어진 새로운 배열. 어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환합니다.

## 설명

`filter()`는 배열 내 각 요소에 대해 한 번 제공된 `callback` 함수를 호출해, `callback`이 [`true`로 강제하는 값](/ko/docs/Glossary/Truthy)을 반환하는 모든 값이 있는 새로운 배열을 생성합니다. `callback`은 할당된 값이 있는 배열의 인덱스에 대해서만 호출됩니다; 삭제됐거나 값이 할당된 적이 없는 인덱스에 대해서는 호출되지 않습니다. `callback` 테스트를 통과하지 못한 배열 요소는 그냥 건너뛰며 새로운 배열에 포함되지 않습니다.

`callback`은 다음 세 인수와 함께 호출됩니다:

1. 요소값
2. 요소 인덱스
3. 순회(traverse)되는 배열 객체

`thisArg` 매개변수가 `filter`에 제공된 경우, 호출될 때 그 값은 `callback`의 `this` 값으로 전달됩니다. 그 이외에, `undefined`값도 `callback`의 `this` 값으로 쓰기 위해 전달됩니다. 결국 `callback`에 의해 관찰될 수 있는 `this` 값은 [`this`를 결정하는 함수의 평소 규칙](/ko/docs/Web/JavaScript/Reference/Operators/this)에 따라 결정됩니다.

`filter()`는 호출되는 배열을 변화시키지(mutate) 않습니다.

`filter()`에 의해 처리되는 요소의 범위는 `callback`의 첫 호출 전에 설정됩니다. `filter()` 호출 시작 이후로 배열에 추가된 요소는 `callback`에 의해 방문되지 않습니다. 배열의 기존 요소가 변경 또는 삭제된 경우, `callback`에 전달된 그 값은 `filter()`가 그 요소를 방문한 시점에 값이 됩니다; 삭제된 요소는 반영되지 않습니다.

## 예제

### 모든 작은 값 걸러내기

다음 예는 값이 10 이하인 모든 요소가 제거된 걸러진 배열을 만들기 위해 `filter()`를 사용합니다.

```js
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered 는 [12, 130, 44]
```

### JSON에서 무효한 항목 거르기

다음 예는 0이 아닌, 숫자 `id`인 모든 요소의 걸러진 json을 만들기 위해 `filter()`를 사용합니다.

```js
var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

var invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof obj === "number" && !isNaN(obj);
}

function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

var arrByID = arr.filter(filterByID);

console.log("Filtered Array\n", arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries = ", invalidEntries);
// Number of Invalid Entries = 5
```

### 배열 내용 검색

다음 예는 배열 내용을 조건에 따라 검색하기 위해 `filter()` 를 사용합니다.

```js
var fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * 검색 조건에 따른 배열 필터링(쿼리)
 */
function filterItems(query) {
  return fruits.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

console.log(filterItems("ap")); // ['apple', 'grapes']
console.log(filterItems("an")); // ['banana', 'mango', 'orange']
```

### ES2015로 구현

```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * 검색 조건에 따른 배열 필터링(쿼리)
 */
const filterItems = (query) => {
  return fruits.filter(
    (el) => el.toLowerCase().indexOf(query.toLowerCase()) > -1,
  );
};

console.log(filterItems("ap")); // ['apple', 'grapes']
console.log(filterItems("an")); // ['banana', 'mango', 'orange']
```

## 폴리필

`filter`는 ECMA-262 표준 제5판에 추가됐습니다. 따라서 어떤 표준 구현체에서는 사용할 수 없을 수도 있습니다. 다른 모든 코드 이전에 아래 코드를 포함하면 지원하지 않는 환경에서도 `filter`를 사용할 수 있습니다. 아래 알고리즘은 `fn.call`의 계산 값이 원래의 [`Function.prototype.call()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)과 같고, {{jsxref("Array.prototype.push()")}}가 변형되지 않은 경우 ECMA-262 제5판이 명시한 것과 동일합니다.

```js
if (!Array.prototype.filter) {
  Array.prototype.filter = function (func, thisArg) {
    "use strict";
    if (!((typeof func === "Function" || typeof func === "function") && this))
      throw new TypeError();

    var len = this.length >>> 0,
      res = new Array(len), // preallocate array
      t = this,
      c = 0,
      i = -1;
    if (thisArg === undefined) {
      while (++i !== len) {
        // checks to see if the key was set
        if (i in this) {
          if (func(t[i], i, t)) {
            res[c++] = t[i];
          }
        }
      }
    } else {
      while (++i !== len) {
        // checks to see if the key was set
        if (i in this) {
          if (func.call(thisArg, t[i], i, t)) {
            res[c++] = t[i];
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
