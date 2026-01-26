---
title: Array.fromAsync()
short-title: fromAsync()
slug: Web/JavaScript/Reference/Global_Objects/Array/fromAsync
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`Array.fromAsync()`** 정적 메서드는 [비동기 순회 가능](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#비동기_순회자와_비동기_순회_가능_프로토콜), [순회 가능](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#순회_가능_프로토콜), 또는 [유사 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#유사_배열_객체_다루기) 객체에서 얕게 복사된 새로운 `Array` 인스턴스를 만듭니다.

## 구문

```js-nolint
Array.fromAsync(arrayLike)
Array.fromAsync(arrayLike, mapFn)
Array.fromAsync(arrayLike, mapFn, thisArg)
```

### 매개변수

- `arrayLike`
  - : 배열로 변환할 비동기 순회 가능, 순회 가능, 또는 유사 배열 객체입니다.
- `mapFn` {{optional_inline}}
  - : 배열의 모든 요소에 대해 호출할 함수입니다. 이 함수를 제공하면 배열에 추가할 모든 값이 이 함수로 먼저 전달되고, ([await](/ko/docs/Web/JavaScript/Reference/Operators/await)된 후) `mapFn`의 반환 값이 대신 배열에 추가됩니다. 이 함수는 다음 인수를 사용하여 호출됩니다.
    - `element`
      - : 배열에서 처리 중인 현재 요소입니다. 모든 요소가 먼저 [await](/ko/docs/Web/JavaScript/Reference/Operators/await) 되므로, 절대 [then](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables)을 사용할 수 있는 값이 될 수 없습니다.
    - `index`
      - : 배열에서 처리 중인 현재 요소의 인덱스입니다.
- `thisArg` {{optional_inline}}
  - : `mapFn`을 실행할 때 `this` 값으로 사용할 값입니다.

### 반환 값

이행 값이 새 {{jsxref("Array")}} 인스턴스인 새로운 {{jsxref("Promise")}}입니다.

## 설명

`Array.fromAsync()`은 다음으로부터 배열을 만들 수 있습니다.

- [비동기 순회 가능 객체](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#비동기_순회자와_비동기_순회_가능_프로토콜)({{domxref("ReadableStream")}}와 {{jsxref("AsyncGenerator")}} 같은 객체). 또는, 객체가 비동기 순회 가능이 아니라면,
- [순회 가능 객체](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#순회_가능_프로토콜)({{jsxref("Map")}}과 {{jsxref("Set")}} 같은 객체). 또는, 객체가 순회 가능이 아니라면
- 유사 배열 객체(`length` 속성과 인덱스된 요소가 있는 객체).

`Array.fromAsync()`는 {{jsxref("Statements/for-await...of", "for await...of")}}와 매우 유사한 방식으로 비동기 순회 가능을 순회합니다. `Array.fromAsync()`는 다음을 제외하고 동작 측면에서 `Array.from()`과 거의 동일합니다.

- `Array.fromAsync()`는 비동기 순회 가능 객체를 처리합니다.
- `Array.fromAsync()`는 배열 인스턴스에 이행하는 {{jsxref("Promise")}}를 반환합니다.
- 비동기 순회 가능 객체로 `Array.fromAsync()`를 호출하면 배열에 추가할 각 요소가 먼저 [await](/ko/docs/Web/JavaScript/Reference/Operators/await)됩니다.
- `mapFn`이 제공되면, 그 입력과 출력이 내부적으로 await 됩니다.

`Array.fromAsync()`와 `Promise.all()`은 모두 프로미스의 순회 가능을 배열의 프로미스로 변환할 수 있습니다. 하지만 두 가지 중요한 차이점이 있습니다.

- `Array.fromAsync()`는 객체에서 yield된 각 값을 순차적으로 await 합니다. `Promise.all()`은 모든 값을 동시에 await 합니다.
- `Array.fromAsync()`는 순회 가능을 지연(lazy) 순회하고, 현재 값이 확정될 때까지 다음 값을 가져오지 않습니다. `Promise.all()`은 모든 값을 미리 가져오고 모두 await 합니다.

## 예제

### 비동기 순회 가능에서 배열 만들기

```js
const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10 * i));
    yield i;
  }
})();

Array.fromAsync(asyncIterable).then((array) => console.log(array));
// [0, 1, 2, 3, 4]
```

### 동기 순회 가능에서 배열 만들기

```js
Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ]),
).then((array) => console.log(array));
// [[1, 2], [3, 4]]
```

### 프로미스를 yield하는 동기 순회 가능에서 배열 만들기

```js
Array.fromAsync(
  new Set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]),
).then((array) => console.log(array));
// [1, 2, 3]
```

### 프로미스 유사 배열 객체에서 배열 만들기

```js
Array.fromAsync({
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
}).then((array) => console.log(array));
// [1, 2, 3]
```

### mapFn 사용하기

`mapFn`의 입력과 출력은 모두 `Array.fromAsync()`에서 내부적으로 await 됩니다.

```js
function delayedValue(v) {
  return new Promise((resolve) => setTimeout(() => resolve(v), 100));
}

Array.fromAsync(
  [delayedValue(1), delayedValue(2), delayedValue(3)],
  (element) => delayedValue(element * 2),
).then((array) => console.log(array));
// [2, 4, 6]
```

### Promise.all()과 비교하기

`Array.fromAsync()`는 객체에서 yield 각 값을 순차적으로 await 합니다. `Promise.all()`은 모든 값을 동시에 await 합니다.

```js
function* makeAsyncIterable() {
  for (let i = 0; i < 5; i++) {
    yield new Promise((resolve) => setTimeout(resolve, 100));
  }
}

(async () => {
  console.time("Array.fromAsync() 시간");
  await Array.fromAsync(makeAsyncIterable());
  console.timeEnd("Array.fromAsync() 시간");
  // Array.fromAsync() 시간: 503.610ms

  console.time("Promise.all() 시간");
  await Promise.all(makeAsyncIterable());
  console.timeEnd("Promise.all() 시간");
  // Promise.all() 시간: 101.728ms
})();
```

### 동기 순회 가능에 대한 오류 처리 없음

[`for await...of`](/ko/docs/Web/JavaScript/Reference/Statements/for-await...of#동기_이터러블과_제너레이터_순회)의 경우와 마찬가지로, 순회되는 객체가 동기 순회 가능이고, 순회하는 동안 오류가 발생하면, 기본 반복자의 `return()` 메서드가 호출되지 않으므로 반복자가 종료되지 않습니다.

```js
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield Promise.reject(3);
  } finally {
    console.log("finally 호출");
  }
}

(async () => {
  try {
    await Array.fromAsync(generatorWithRejectedPromises());
  } catch (e) {
    console.log(e, "잡음");
  }
})();
// 3 잡음
// "finally 호출" 메시지 없음
```

반복자를 종료해야 하는 경우, {{jsxref("Statements/for...of", "for...of")}} 루프를 대신 사용하고, 각 값을 직접 await 해야 합니다.

```js
(async () => {
  const arr = [];
  try {
    for (const val of generatorWithRejectedPromises()) {
      arr.push(await val);
    }
  } catch (e) {
    console.log(e, "잡음");
  }
})();
// finally 호출
// 3 잡음
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.fromAsync` 폴리필](https://github.com/zloirock/core-js#arrayfromasync)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
