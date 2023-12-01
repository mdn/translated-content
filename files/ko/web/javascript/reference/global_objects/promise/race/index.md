---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
---

{{JSRef}}

**`Promise.race()`** 메소드는 Promise 객체를 반환합니다. 이 프로미스 객체는 iterable 안에 있는 프로미스 중에 가장 먼저 완료된 것의 결과값으로 그대로 이행하거나 거부합니다.

{{EmbedInteractiveExample("pages/js/promise-race.html")}}

## 구문

```js
Promise.race(iterable);
```

### 매개변수

- `iterable`
  - : {{jsxref("Array")}}와 같은 iterable 객체. [iterable](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)을 참고하세요.

### 반환값

주어진 iterable에서 처음으로 이행하거나 거부한 프로미스의 값을 **비동기적으로** 전달받는 **대기 중**인 {{jsxref("Promise")}}.

## 설명

`race` 함수는 인자로 주어진 iterable의 프로미스 중 가장 먼저 완료(settle)되는 것과 같은 방식으로 완료(이행/거부)되고, 같은 결과값을 전달하는 `Promise`를 반환합니다.

전달받은 iterable이 비어 있을 경우, 반환한 프로미스는 영원히 대기 상태가 됩니다.

Iterable에 프로미스가 아닌 값이나 이미 완료된 프로미스가 포함되어 있을 경우, `Promise.race`는 전달받은 iterable에서 처음으로 등장하는 이러한 값을 결과값으로 이행합니다.

## 예제

### `Promise.race`의 비동기성

다음 예제에서 `Promise.race`의 비동기성을 확인할 수 있습니다.

```js
// Promise.race를 최대한 빨리 완료시키기 위해
// 이미 이행된 프로미스로 배열을 만들어 인자로 전달
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.race(resolvedPromisesArray);
// 실행 즉시 p의 값을 기록
console.log(p);

// 호출 스택을 비운 다음 실행하기 위해 setTimeout을 사용
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(p);
});

// 로그 출력 결과 (순서대로):
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 33 }
```

비어 있는 iterable을 전달하면 반환한 프로미스는 영원히 대기 상태가 됩니다.

```js
var foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(foreverPendingPromise);
});

// 로그 출력 결과 (순서대로):
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "pending" }
```

Iterable에 프로미스가 아닌 값이나 이미 완료된 프로미스가 포함되어 있을 경우, `Promise.race`는 전달받은 iterable에서 처음으로 등장하는 이러한 값을 결과값으로 이행합니다.

```js
var foreverPendingPromise = Promise.race([]);
var alreadyFulfilledProm = Promise.resolve(666);

var arr = [foreverPendingPromise, alreadyFulfilledProm, "프로미스 아님"];
var arr2 = [foreverPendingPromise, "프로미스 아님", Promise.resolve(666)];
var p = Promise.race(arr);
var p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(p);
  console.log(p2);
});

// 로그 출력 결과 (순서대로):
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 666 }
// Promise { <state>: "fulfilled", <value>: "프로미스 아님" }
```

### `setTimeout`과 함께 `Promise.race` 사용 예

```js
var p1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("하나"), 500);
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("둘"), 100);
});

Promise.race([p1, p2]).then(function (value) {
  console.log(value); // "둘"
  // 둘 다 이행하지만 p2가 더 빠르므로
});

var p3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("셋"), 100);
});
var p4 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("넷")), 500);
});

Promise.race([p3, p4]).then(
  function (value) {
    console.log(value); // "셋"
    // p3이 더 빠르므로 이행함
  },
  function (reason) {
    // 실행되지 않음
  },
);

var p5 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("다섯"), 500);
});
var p6 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("여섯")), 100);
});

Promise.race([p5, p6]).then(
  function (value) {
    // 실행되지 않음
  },
  function (error) {
    console.log(error.message); // "여섯"
    // p6이 더 빠르므로 거부함
  },
);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
