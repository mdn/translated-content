---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
---

{{JSRef}}

**`Promise.all()`** 메서드는 순회 가능한 객체에 주어진 모든 프로미스가 이행한 후, 혹은 프로미스가 주어지지 않았을 때 이행하는 {{jsxref("Promise")}}를 반환합니다. 주어진 프로미스 중 하나가 거부하는 경우, 첫 번째로 거절한 프로미스의 이유를 사용해 자신도 거부합니다.

{{EmbedInteractiveExample("pages/js/promise-all.html")}}

## 구문

```js
Promise.all(iterable);
```

### 매개변수

- `iterable`
  - : {{jsxref("Array")}}와 같이 [순회 가능](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)한(iterable) 객체.

### 반환 값

- 매개변수로 주어진 순회 가능한 객체가 비어 있으면 **이미 이행한** {{jsxref("Promise")}}.
- 객체에 프로미스가 없으면, **비동기적으로 이행하는** {{jsxref("Promise")}}. 단, Google Chrome 58은 **이미 이행한** 프로미스를 반환합니다.
- 그렇지 않은 경우, **대기 중**인 {{jsxref("Promise")}}. 결과로 반환하는 프로미스는 인자의 모든 프로미스가 이행하거나 어떤 프로미스가 거부할 때 (호출 스택이 비는 즉시) **비동기적으로** 이행/거부합니다. "`Promise.all`의 동기성/비동기성" 예제를 참고하세요. 반환하는 프로미스의 이행 값은 매개변수로 주어진 프로미스의 순서와 일치하며, 완료 순서에 영향을 받지 않습니다.

## 설명

이 메서드는 여러 프로미스의 결과를 집계할 때 유용하게 사용할 수 있습니다. 일반적으로 다음 코드를 계속 실행하기 전에 서로 연관된 비동기 작업 여러 개가 모두 이행되어야 하는 경우에 사용됩니다.

입력 값으로 들어온 프로미스 중 **하나라도** 거부 당하면 `Promise.all()`은 즉시 거부합니다. 이에 비해, {{jsxref("Promise.allSettled()")}}가 반환하는 프로미스는 이행/거부 여부에 관계없이 주어진 프로미스가 모두 완료될 때까지 기다립니다. 결과적으로, 주어진 이터러블의 모든 프로미스와 함수의 결과 값을 최종적으로 반환합니다.

### 이행

반환한 프로미스의 이행 결과값은 (프로미스가 아닌 값을 포함하여) 매개변수로 주어진 순회 가능한 객체에 포함된 **모든** 값을 담은 배열입니다.

- 빈 객체를 전달한 경우, (동기적으로) 이미 이행한 프로미스를 반환합니다.
- 전달받은 모든 프로미스가 이미 이행되어 있거나 프로미스가 없는 경우, 비동기적으로 이행하는 프로미스를 반환합니다.

### 거부

주어진 프로미스 중 하나라도 거부하면, 다른 프로미스의 이행 여부에 상관없이 첫 번째 거부 이유를 사용해 거부합니다.

## 예제

### `Promise.all` 사용하기

`Promise.all`은 배열 내 모든 값의 이행(또는 첫 번째 거부)을 기다립니다.

```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
```

순회 가능한 객체에 프로미스가 아닌 값이 들어있다면 무시하지만, 이행 시 결과 배열에는 포함합니다.

```js
// 매개변수 배열이 빈 것과 동일하게 취급하므로 이행함
var p = Promise.all([1, 2, 3]);
// 444로 이행하는 프로미스 하나만 제공한 것과 동일하게 취급하므로 이행함
var p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// 555로 거부하는 프로미스 하나만 제공한 것과 동일하게 취급하므로 거부함
var p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// setTimeout()을 사용해 스택이 빈 후에 출력할 수 있음
setTimeout(function () {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// 출력
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }
```

### `Promise.all`의 동기성/비동기성

다음 예제는 `Promise.all`의 비동기성(주어진 인자가 빈 경우엔 동기성)을 보입니다.

```js
// Promise.all을 최대한 빨리 완료시키기 위해
// 이미 이행된 프로미스로 배열을 만들어 인자로 전달
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromisesArray);
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
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

`Promise.all()`이 거부하는 경우에도 동일한 일이 발생합니다:

```js
var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(p);
});

// 출력
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "rejected", <reason>: 44 }
```

그러나, `Promise.all`은 주어진 순회 가능한 객체가 비어있는 경우에만 동기적으로 이행됩니다.

```js
var p = Promise.all([]); // 즉시 이행함
var p2 = Promise.all([1337, "hi"]); // 프로미스가 아닌 값은 무시하지만 비동기적으로 실행됨
console.log(p);
console.log(p2);
setTimeout(function () {
  console.log("the stack is now empty");
  console.log(p2);
});

// 출력
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

### `Promise.all()` 실패 우선성

`Promise.all()`은 배열 내 요소 중 어느 하나라도 거부하면 즉시 거부합니다. 예를 들어, 일정 시간이 지난 이후 이행하는 네 개의 프로미스와, 즉시 거부하는 하나의 프로미스를 전달한다면 `Promise.all()`도 즉시 거부합니다.

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("하나"), 1000);
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("둘"), 2000);
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("셋"), 3000);
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("넷"), 4000);
});
var p5 = new Promise((resolve, reject) => {
  reject(new Error("거부"));
});

// .catch 사용:
Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error.message);
  });

// 콘솔 출력값:
// "거부"
```

발생할 수 있는 거부를 사전에 처리해 동작 방식을 바꿀 수 있습니다.

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1_지연_이행"), 1000);
});

var p2 = new Promise((resolve, reject) => {
  reject(new Error("p2_즉시_거부"));
});

Promise.all([
  p1.catch((error) => {
    return error;
  }),
  p2.catch((error) => {
    return error;
  }),
]).then((values) => {
  console.log(values[0]); // "p1_지연_이행"
  console.log(values[1]); // "Error: p2_즉시_거부"
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Promise")}}
- {{jsxref("Promise.race()")}}
