---
title: Promise.allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
---

{{JSRef}}

**`Promise.allSettled()`** 메서드는 주어진 모든 프로미스를 이행하거나 거부한 후, 각 프로미스에 대한 결과를 나타내는 객체 배열을 반환합니다.

일반적으로 서로의 성공 여부에 관련 없는 여러 비동기 작업을 수행해야 하거나, 항상 각 프로미스의 실행 결과를 알고 싶을 때 사용합니다.

그에 비해, {{jsxref("Promise.all()")}}이 반환한 프로미스는 서로 연관된 작업을 수행하거나, 하나라도 거부 당했을 때 즉시 거부하고 싶을 때 적합합니다.

{{EmbedInteractiveExample("pages/js/promise-allsettled.html")}}

## 문법

```js
Promise.allSettled(iterable);
```

### 인자

- `iterable`
  - : 멤버가 모두 `Promise`인, 배열({{jsxref("Array")}})과 같은 [이터러블](/ko/docs/Web/JavaScript/Reference/Iteration_protocols) 객체입니다.

### 반환 값

지정된 Promise 컬렉션의 모든 Promise가 성공적으로 이행되거나 거부되어 완료되면, **보류 중**인 Promise는 **비동기적**으로 이행됩니다. 그 때, 반환된 Promise의 핸들러는 원래 프로미스 집합에 있는 각 프로미스의 결과를 포함하는 배열을 입력으로 전달합니다.

단, `Promise.allSettled()`는 빈 이터러블 객체를 인자로 전달받았을 **경우에만** 빈 배열로써 **이미 이행된** 객체를 반환합니다.

반환된 각 객체별로 `status`를 확인할 수 있습니다. 만약 `fulfilled` 상태라면 `value`를, `rejected` 상태라면면 `reason` 속성을 확인할 수 있습니다. value나 reason을 통해 각 Promise가 어떻게 이행(또는 거부)됐는지 알 수 있습니다.

## 예제

### Promise.allSettled의 사용

#### {{jsxref("Promise.then", "Promise.prototype.then()")}}

```js
Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log(values));

// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]
```

#### {{jsxref("Operators/await", "await")}}

```js
const values = await Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]);
console.log(values);

// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [core-js](https://github.com/zloirock/core-js#ecmascript-promise)에서 사용가능한 `Promise.allSettled`의 폴리필
- [Promises](/ko/docs/Archive/Add-ons/Techniques/Promises)
- [Using promises](/ko/docs/Web/JavaScript/Guide/Using_promises)
- [Graceful asynchronous programming with promises](/ko/docs/Learn/JavaScript/Asynchronous/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
