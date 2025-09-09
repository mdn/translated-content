---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
l10n:
  sourceCommit: 57375b77984037c614982a9327bc96101824db89
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 `filter()` 메서드는 주어진 배열의 일부에 대한 [얕은 복사본](/ko/docs/Glossary/Shallow_copy)을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 합니다.

{{InteractiveExample("JavaScript Demo: Array.filter()", "shorter")}}

```js interactive-example
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

## 구문

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

### 매개변수

- `callbackFn`
  - : 배열의 각 요소에 대해 실행할 함수입니다. 결과 배열에 요소를 유지하려면 [참](/ko/docs/Glossary/Truthy) 값을 반환하고 그렇지 않으면 [거짓](/ko/docs/Glossary/Falsy) 값을 반환해야 합니다. 이 함수는 다음 인수를 사용하여 호출됩니다.
    - `element`
      - : 배열에서 처리 중인 현재 요소.
    - `index`
      - : 배열에서 처리 중인 현재 요소의 인덱스.
    - `array`
      - : `filter()`가 호출된 배열.
- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this` 값으로 사용할 값입니다. [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)를 참조하세요.

### 반환 값

주어진 배열에서 테스트를 통과한 요소만 포함하는 해당 배열의 [얕은 복사본](/ko/docs/Glossary/Shallow_copy) 배열입니다. 테스트를 통과한 요소가 없으면 빈 배열이 반환됩니다.

## 설명

`filter()` 메서드는 [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)입니다. 이 메서드는 배열의 각 요소에 대해 제공된 `callbackFn` 함수를 한 번씩 호출하고, `callbackFn`이 [참](/ko/docs/Glossary/Truthy) 값을 반환하는 모든 값으로 새 배열을 구성합니다. `callbackFn` 테스트를 통과하지 못한 배열 요소는 새 배열에 포함되지 않습니다.

`callbackFn`은 값이 할당된 배열 인덱스에 대해서만 호출됩니다. [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)의 빈 슬롯에는 호출되지 않습니다.

`filter()` 메서드는 [복사 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#복사_메서드와_변경_메서드)입니다. 이 메서드는 `this`를 변경하지 않는 대신 원래 배열의 요소와 동일한 요소를 포함하는 [얕은 복사본](/ko/docs/Glossary/Shallow_copy)을 반환합니다(일부 필터링 된 요소 제외). 하지만, `callbackFn`으로 제공된 함수는 배열을 변경할 수 있습니다. 그러나 배열의 length는 `callbackFn`을 처음 호출하기 전에 저장된다는 점에 유의하세요. 따라서,

- `callbackFn`은 `filter()` 호출이 시작되었을 때 배열의 초기 length 값을 초과하여 추가된 요소는 방문하지 않습니다.
- 이미 방문한 인덱스를 변경해도 `callbackFn`이 해당 인덱스에 대해 다시 호출되지 않습니다.
- 배열의 아직 방문하지 않은 기존 요소가 `callbackFn`에 의해 변경되는 경우, `callbackFn`에 전달된 값은 해당 요소가 방문될 당시의 값이 됩니다. [삭제된](/ko/docs/Web/JavaScript/Reference/Operators/delete) 요소는 방문되지 않습니다.

> [!WARNING]
> 위에서 설명한 종류의 동시 수정은 이해하기 어려운 코드를 만드는 경우가 많으므로 일반적으로 지양해야 합니다(특별한 경우 제외).

`filter()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. `this` 값에는 `length` 속성과 정수 키 속성만 있을 것으로 예상합니다.

## 예제

### 모든 작은 값 걸러내기

다음 예제는 `filter()`를 사용하여 값이 10 미만인 요소가 모두 제거된 필터링된 배열을 만듭니다.

```js
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// 필터링된 값은 [12, 130, 44]
```

### 배열의 모든 소수 찾기

다음 예제는 배열의 모든 소수를 반환합니다.

```js
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
```

### JSON에서 유효하지 않은 항목 걸러내기

다음 예제는 `filter()`를 사용하여 모든 요소의 `id`가 0이 아닌 숫자인 필터링된 JSON을 생성합니다.

```js
const arr = [
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

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrByID = arr.filter(filterByID);

console.log("필터링된 배열\n", arrByID);
// 필터링된 배열
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("유효하지 않은 항목의 수 =", invalidEntries);
// 유효하지 않은 항목의 수 = 5
```

### 배열 검색

다음 예제는 `filter()`를 사용하여 검색 조건에 따라 배열 콘텐츠를 필터링합니다.

```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * 검색 조건에 따른 배열 필터링(쿼리)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
```

### callbackFn의 세 번째 인수 사용하기

`array` 인수는 배열의 다른 요소에 접근하려는 경우, 특히 배열을 참조하는 기존 변수가 없는 경우에 유용합니다. 다음 예제에서는 먼저 `map()`을 사용하여 각 이름에서 숫자 ID를 추출한 다음 `filter()`를 사용하여 인접한 이름보다 큰 이름을 선택합니다.

```js
const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
const greatIDs = names
  .map((name) => parseInt(name.match(/[0-9]+/)[0], 10))
  .filter((id, idx, arr) => {
    // arr 인수가 없으면 변수에 저장하지 않고는
    // 중간 배열에 쉽게 접근할 수 없습니다.
    if (idx > 0 && id <= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
    return true;
  });
console.log(greatIDs); // [132, 96]
```

`array` 인수는 작성 중인 배열이 아닙니다. 따라서 콜백 함수에서 작성 중인 배열에 접근할 수 없습니다.

### 희소 배열에 filter() 사용

`filter()`는 빈 슬롯을 건너뜁니다.

```js
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]
```

### 배열이 아닌 객체에서 filter() 호출하기

`filter()` 메서드는 `this`의 `length` 속성을 읽은 다음, 키가 `length`보다 작은 음수가 아닌 정수 키의 각 속성에 모두 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "a", // length가 3이므로 filter에 의해 무시됩니다.
};
console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b"));
// [ 'a', 'b' ]
```

### 초기 배열에 영향주기(수정, 추가, 삭제)

다음 예제는 배열이 수정되었을 때 `filter` 메서드의 동작을 테스트합니다.

```js
// 각 단어 수정
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 6;
});

console.log(modifiedWords);
// 길이 6 아래에 세 단어가 있지만, 수정되었으므로 한 단어가 반환됩니다.
// ["spray"]

// 새 단어 추가
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words.filter((word, index, arr) => {
  arr.push("new");
  return word.length < 6;
});

console.log(appendedWords);
// 이제 `words` 자체에는 문자 길이가 6자 미만인 단어가 훨씬 더 많음에도 불구하고 조건에 맞는 단어는 3개뿐입니다.
// ["spray" ,"limit" ,"elite"]

// 단어 삭제
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

console.log(deleteWords);
// filter가 'elite'에 도달하기도 전에 'words'가 pop되기 때문에 'elite'는 표시되지 않습니다.
// ["spray" ,"limit"]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.filter` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 가이드
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
