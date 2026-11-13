---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{JSRef}}

**`catch()`** 메서드는 {{jsxref("Promise")}} 인스턴스의 메서드로, 프로미스가 거부될 때 호출될 함수를 예약합니다. 이 메서드는 즉시 다른 {{jsxref("Promise")}} 객체를 반환하여 다른 프로미스 메서드들을 [체이닝](/ko/docs/Web/JavaScript/Guide/Using_promises#chaining) 할 수 있게 합니다. 이는 {{jsxref("Promise/then", "then(undefined, onRejected)")}}의 단축 표현입니다.

{{InteractiveExample("JavaScript Demo: Promise.catch()")}}

```js interactive-example
const promise1 = new Promise((resolve, reject) => {
  throw new Error("Uh-oh!");
});

promise1.catch((error) => {
  console.error(error);
});
// Expected output: Error: Uh-oh!
```

## 구문

```js-nolint
promiseInstance.catch(onRejected)
```

### 매개변수

- `onRejected`
  - : 이 프로미스가 거부될 때 비동기적으로 실행될 함수입니다. 이 함수의 반환 값은 `catch()`가 반환하는 프로미스의 이행 값이 됩니다. 이 함수는 다음 인수와 함께 호출됩니다.
    - `reason`
      - : 프로미스가 거부된 값 입니다.

### 반환 값

새로운 {{jsxref("Promise")}}를 반환합니다. 이 새 프로미스는 반환 시 항상 대기 상태입니다. 현재 프로미스의 상태와 관계없이 말입니다. `onRejected`가 호출되면, 반환된 프로미스는 이 호출의 반환 값에 따라 이행되거나, 이 호출에서 발생한 오류로 인해 거부됩니다. 현재 프로미스가 이행되면, `onRejected`는 호출되지 않고 반환된 프로미스는 동일한 값으로 이행됩니다.

## 설명

`catch` 메서드는 프로미스 구성에서 오류 처리에 사용됩니다. {{jsxref("Promise")}}를 반환하기 때문에, 자매 메서드인 {{jsxref("Promise/then", "then()")}}과 같은 방식으로 [체이닝할 수 있습니다](/ko/docs/Web/JavaScript/Guide/Using_promises#chaining_after_a_catch).

프로미스가 거부되고, 호출할 거부 핸들러가 없는 경우(핸들러는 {{jsxref("Promise/then", "then()")}}, `catch()`, 또는 {{jsxref("Promise/finally", "finally()")}}를 통해 연결될 수 있습니다), 거부 이벤트는 호스트에 의해 표면화됩니다. 브라우저에서는 이로 인해 [`unhandledrejection`](/ko/docs/Web/API/Window/unhandledrejection_event) 이벤트가 발생합니다. 이미 처리되지 않은 거부 이벤트를 발생시킨 거부된 프로미스에 핸들러가 연결되면, 다른 [`rejectionhandled`](/ko/docs/Web/API/Window/rejectionhandled_event) 이벤트가 발생합니다.

`catch()`는 내부적으로 호출된 객체에 대해 `then()`을 호출하며, `undefined`와 `onRejected`를 인수로 전달합니다. 그 호출의 값이 직접 반환됩니다. 이는 메서드를 감싼다면 관찰할 수 있습니다.

```js
// 원본 Promise.prototype.then/catch 을 재정의하여 로그 약간을 추가
((Promise) => {
  const originalThen = Promise.prototype.then;
  const originalCatch = Promise.prototype.catch;

  Promise.prototype.then = function (...args) {
    console.log("Called .then on %o with arguments: %o", this, args);
    return originalThen.apply(this, args);
  };
  Promise.prototype.catch = function (...args) {
    console.error("Called .catch on %o with arguments: %o", this, args);
    return originalCatch.apply(this, args);
  };
})(Promise);

// 이미 이행된 프로미스에 catch 호출하기
Promise.resolve().catch(function XXX() {});

// Logs:
// Called .catch on Promise{} with arguments: Arguments{1} [0: function XXX()]
// Called .then on Promise{} with arguments: Arguments{2} [0: undefined, 1: function XXX()]
```

이는 `undefined`를 전달하면 여전히 반환된 프로미스가 거부되며, 최종 프로미스가 거부되는 것을 방지하려면 함수를 전달해야 한다는 것을 의미합니다.

`catch()`는 단순히 `then()`을 호출하기 때문에 하위 클래싱을 지원합니다.

> [!NOTE]
> 아래의 예제들은 [`Error`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Error) 인스턴스를 발생시킵니다. 동기적인 [`throw`](/ko/docs/Web/JavaScript/Reference/Statements/throw) 문과 마찬가지로, 이는 좋은 관행으로 간주됩니다. 그렇지 않으면 예외를 잡는 부분에서 인자가 문자열인지 오류인지 확인하는 작업을 수행해야 하며, 스택 추적과 같은 중요한 정보를 잃을 수 있습니다.

## 예제

### catch() 메서드 체이닝과 사용하기

```js
const p1 = new Promise((resolve, reject) => {
  resolve("Success");
});

p1.then((value) => {
  console.log(value); // "Success!"
  throw new Error("oh, no!");
})
  .catch((e) => {
    console.error(e.message); // "oh, no!"
  })
  .then(
    () => console.log("after a catch the chain is restored"), // "after a catch the chain is restored"
    () => console.log("Not fired due to the catch"),
  );

// 아래는 위와 동일하게 동작합니다
p1.then((value) => {
  console.log(value); // "Success!"
  return Promise.reject("oh, no!");
})
  .catch((e) => {
    console.error(e); // "oh, no!"
  })
  .then(
    () => console.log("after a catch the chain is restored"), // "after a catch the chain is restored"
    () => console.log("Not fired due to the catch"),
  );
```

### 에러 발생 가챠

대부분 오류 발생 시 `catch()`가 호출됩니다.

```js
const p1 = new Promise((resolve, reject) => {
  throw new Error("Uh-oh!");
});

p1.catch((e) => {
  console.error(e); // "Uh-oh!"
});
```

비동기 함수 내의 오류 발생은 처리하지 못한 오류와 같이 행동합니다.

```js
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("Uncaught Exception!");
  }, 1000);
});

p2.catch((e) => {
  console.error(e); // 절대 호출 안됨
});
```

`resolve`가 호출된 이후에 발생한 오류는 무시됩니다.

```js
const p3 = new Promise((resolve, reject) => {
  resolve();
  throw new Error("Silenced Exception!");
});

p3.catch((e) => {
  console.error(e); // 절대 호출 안됨
});
```

### 프로미스가 이행되었다면 catch()는 호출되지 않음

```js
// onReject를 호출하지 않을 프로미스 생성
const p1 = Promise.resolve("calling next");

const p2 = p1.catch((reason) => {
  // 절대 호출 안됨
  console.error("catch p1!");
  console.error(reason);
});

p2.then(
  (value) => {
    console.log("next promise's onFulfilled");
    console.log(value); // 다음을 호출
  },
  (reason) => {
    console.log("next promise's onRejected");
    console.log(reason);
  },
);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.finally()")}}
