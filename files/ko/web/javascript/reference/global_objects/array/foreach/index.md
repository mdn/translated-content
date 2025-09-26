---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`forEach()`** 메서드는 각 배열 요소에 대해 제공된 함수를 한 번씩 실행합니다.

{{InteractiveExample("JavaScript Demo: Array.forEach()")}}

```js interactive-example
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## 구문

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### 매개변수

- `callbackFn`
  - : 배열의 각 요소에 대해 실행할 함수입니다. 반환값은 사용되지 않습니다. 함수는 다음 인수를 사용하여 호출됩니다.
    - `element`
      - : 배열에서 처리 중인 현재 요소.
    - `index`
      - : 배열에서 처리 중인 현재 요소의 인덱스.
    - `array`
      - : `forEach()`를 호출한 배열.
- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this` 값으로 사용할 값입니다. [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)를 참조하세요.

### 반환 값

없음 ({{jsxref("undefined")}}).

## 설명

`forEach()` 메서드는 [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)입니다. 이 메서드는 배열의 각 요소에 대해 제공된 `callbackFn` 함수를 오름차순 인덱스 순서로 한 번씩 호출합니다. {{jsxref("Array.prototype.map()", "map()")}}과 달리 `forEach()`는 항상 {{jsxref("undefined")}}를 반환하므로 체이닝할 수 없습니다. 일반적인 사례로 체인의 끝에서 배열을 변경하려는 시도가 있습니다.

`callbackFn`은 값이 할당된 배열 인덱스에 대해서만 호출됩니다. [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)의 빈 슬롯에는 호출되지 않습니다.

`forEach()`는 호출되는 배열을 변경하지 않지만, `callbackFn`으로 제공되는 함수는 변경할 수 있습니다. 그러나 배열의 length는 `callbackFn`을 처음 호출하기 전에 저장된다는 점에 유의하세요. 따라서,

- `callbackFn`은 `forEach()` 호출이 시작되었을 때 배열의 초기 length 값을 초과하여 추가된 요소는 방문하지 않습니다.
- 이미 방문한 인덱스를 변경해도 `callbackFn`이 해당 인덱스에 대해 다시 호출되지 않습니다.
- 배열의 아직 방문하지 않은 기존 요소가 `callbackFn`에 의해 변경되는 경우, `callbackFn`에 전달된 값은 해당 요소가 방문될 당시의 값이 됩니다. [삭제된](/ko/docs/Web/JavaScript/Reference/Operators/delete) 요소는 방문되지 않습니다.

> [!WARNING]
> 위에서 설명한 종류의 동시 수정은 이해하기 어려운 코드를 만드는 경우가 많으므로 일반적으로 지양해야 합니다(특별한 경우 제외).

`forEach()` 메서드는 [범용](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. `this` 값에는 `length` 속성과 정수 키 속성만 있을 것으로 예상합니다.

예외를 발생시키는 것 외에는 `forEach()` 루프를 중지하거나 중단할 수 있는 방법이 없습니다. 루프를 중지하는 동작이 필요하다면, `forEach()` 메서드는 적절한 도구가 아닐 수 있습니다.

[`for`](/ko/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/ko/docs/Web/JavaScript/Reference/Statements/for...of), [`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in)과 같은 반복문을 사용하여 조기 종료를 수행할 수 있습니다. {{jsxref("Array/every", "every()")}}, {{jsxref("Array/some", "some()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}와 같은 배열 메서드도 추가 순회가 필요하지 않은 경우 즉시 순회를 중지할 수있습니다.

`forEach()`는 동기 함수를 기대하며 프로미스를 기다리지 않습니다. 프로미스(또는 비동기 함수)를 `forEach` 콜백으로 사용할 때는 그 의미를 알고 있어야 합니다.

```js
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// 순진하게 예상한 출력: 14
// 실제 출력: 0
```

일련의 비동기 연산을 순차적으로 또는 동시에 실행하려면 [프로미스 구성](/ko/docs/Web/JavaScript/Guide/Using_promises#composition)을 참조하세요.

## 예제

### 희소 배열에 forEach() 사용하기

```js-nolint
const arraySparse = [1, 3, /* 빈 슬롯 */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }
```

콜백 함수는 인덱스 2에 있는 빈 요소에 대해 호출되지 않습니다.

### for 루프를 forEach()로 바꾸기

```js
const items = ["item1", "item2", "item3"];
const copyItems = [];

// 전
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// 후
items.forEach((item) => {
  copyItems.push(item);
});
```

### 배열 콘텐츠 출력

> [!NOTE]
> 배열의 내용을 콘솔에 표시하려면,
> 배열의 포멧된 버전을 출력하는 {{domxref("console/table", "console.table()")}}을 사용할 수 있습니다.
>
> 다음 예제는 `forEach()`를 사용하는 또다른 접근 방식을 보여줍니다.

다음 코드는 배열의 각 요소를 한 줄씩 기록합니다.

```js
const logArrayElements = (element, index /*, array */) => {
  console.log(`a[${index}] = ${element}`);
};

// 배열에서 해당 위치에 항목이 없으므로
// 인덱스 2가 건너뛰어진 것을 확인할 수 있습니다.
[2, 5, , 9].forEach(logArrayElements);
// 로그:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### thisArg 사용하기

다음 (인위적인) 예제는 배열의 각 항목에서 객체의 속성을 업데이트합니다.

```js
class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    // 오직 함수 표현식만 자신의 this 바인딩을 가집니다.
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16
```

`thisArg` 매개변수(`this`)는 `forEach()`에 제공되므로 호출될 때마다 콜백에 전달됩니다. 콜백은 이를 `this` 값으로 사용합니다.

> [!NOTE]
> 콜백 함수를 전달할 때
> [화살표 함수 표현식](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)을 사용하는 경우,
> 모든 화살표 함수가 이 값을 문법적으로(lexical) 바인딩하므로
> {{jsxref("Operators/this", "this")}} 매개 변수를 생략할 수 있습니다.

### 객체 복사 함수

다음 코드는 주어진 객체의 복사본을 생성합니다.

객체의 복사본을 생성하는 방법에는 여러 가지가 있습니다. 다음은 한 가지 방법일 뿐이며 `Object.*` 유틸리티 함수를 사용하여 `Array.prototype.forEach()`가 어떻게 작동하는지 설명하기 위해 제시된 것입니다.

```js
const copy = (obj) => {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
};

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1); // obj2는 이제 obj1과 같습니다.
```

### 순회 중 배열 변경

다음 예는 `one`, `two`, `four`를 기록합니다.

값 `two`가 포함된 항목에 도달하면, 전체 배열의 첫 번째 항목이 이동되어 나머지 모든 항목이 한 위치 앞으로 이동합니다. 이제 요소 `four`가 배열의 이전 위치에 있으므로 요소 `three`은 건너뛰게 됩니다.

`forEach()`는 순회하기 전에 배열의 복사본을 만들지 않습니다.

```js
const words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift(); //'one'은 배열에서 삭제됩니다.
  }
}); // one // two // four

console.log(words); // ['two', 'three', 'four']
```

### 배열 평탄화

다음 예제는 학습 목적으로만 사용합니다. 내장 메서드를 {{jsxref("Array.prototype.flat()")}}을 사용하여 배열을 평평하게 만들 수 있습니다.

```js
const flatten = (arr) => {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

// 사용법
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 배열이 아닌 객체에 forEach() 사용하기

`forEach()` 메서드는 `this`의 `length` 속성을 읽은 다음 키가 `length`보다 작은 음수가 아닌 정수인 각 속성에 접근합니다.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // length가 3이므로 forEach()에서 무시됩니다.
};
Array.prototype.forEach.call(arrayLike, (x) => console.log(x));
// 2
// 3
// 4
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.forEach` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
