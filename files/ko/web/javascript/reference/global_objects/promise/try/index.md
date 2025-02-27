---
title: Promise.try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{JSRef}}

**`Promise.try()`** 는 반환값이나 예외 발생, 동기나 비동기에 관계 없이 모든 종류의 콜백을 가지고, 그 결과를 {{jsxref("Promise")}} 내부에서 감싸는 정적 메서드입니다.

## 구문

```js-nolint
Promise.try(func)
Promise.try(func, arg1)
Promise.try(func, arg1, arg2)
Promise.try(func, arg1, arg2, /* …, */ argN)
```

### 파라미터

- `func`
  - : 주어진 인자 (`arg1`, `arg2`, …, `argN`) 를 동기적으로 호출되는 함수입니다. 이는 반환값이든, 예외를 발생시키든, 프로미스를 반환하든 그 어떤 것이든 수행할 수 있습니다.
- `arg1`, `arg2`, …, `argN`
  - : `func` 에 전달되는 인자입니다.

### 반환 값

{{jsxref("Promise")}} 는 다음 값들을 반환합니다.

- `func` 가 동기적으로 값을 반환한다면 이미 fulfilled 상태입니다.
- `func` 가 동기적으로 예외를 발생시킨다면 이미 rejected 상태입니다.
- `func` 이 프로미스를 반환한다면 비동기적으로 fulfilled 혹은 rejected 상태입니다.

## 설명

콜백을 취하는 API가 있다고 가정하겠습니다. 이 콜백은 동기적으로 동작할 수 있고 비동기로 동작할 수도 있습니다. 결과를 프로미스로 감싸서 모든 함수를 동일하게 동작하게 하고 싶을 때 가장 간단한 방법은 {{jsxref("Promise/resolve", "Promise.resolve(func())")}} 를 사용하는 것일 수 있습니다. 만일 `func()` 가 동기적으로 예외를 발생시킨다면 이 예외는 감지되지 않고 rejected 프로미스로 변환되지 않는다는 문제가 있을 수 있습니다.

일반적으로 함수를 fulfilled나 rejected 상태의 프로미스로 끌어올리기 위한 접근 방법은 아래와 같습니다.

```js
new Promise((resolve) => resolve(func()));
```

여기서는 `Promise.try()` 가 더욱 효과적입니다.

```js
Promise.try(func);
```

내장 `Promise()` 생성자는 실행자로부터 발생된 예외를 자동적으로 감지하고 거부됨으로 반환합니다. 따라서 이 두 접근 방법은 유사하지만 `Promise.try()` 가 더 간단하고 가독성이 좋습니다.

`Promise.try()` 가 이와 완전히 동일한 것이 아니라, 상당히 유사하다는 점을 기억해야 합니다.

```js
Promise.resolve().then(func);
```

{{jsxref("Promise/then", "then()")}} 에 전달된 콜백은 항상 동기적으로 실행되는 `Promise()` 생성자와는 다르게 항상 비동기적으로 호출된다는 점입니다. `Promise.try` 는 함수를 동기적으로도 호출하고 가능하다면 즉시 프로미스를 이행 상태로 만듭니다.

{{jsxref("Promise/catch", "catch()")}} 와 {{jsxref("Promise/finally", "finally()")}} 가 결합된 `Promise.try()` 는 동기와 비동기 처리를 하나로 묶어 처리할 수도 있습니다. 그리고 프로미스의 예외 처리를 마치 동기 예외 처리와 비슷한 것처럼 보이게 할 수 있습니다.

{{domxref("Window/setTimeout", "setTimeout()")}} 처럼, `Promise.try()` 는 콜백으로 전달되는 추가적인 인자들도 수용합니다. 이를 이해하기 위해 아래 예제를 확인해 보세요.

```js
Promise.try(() => func(arg1, arg2));
```

이렇게도 작성할 수 있습니다.

```js
Promise.try(func, arg1, arg2);
```

이들은 동일한 동작을 하지만 후자는 추가적인 클로저 생성을 방지할 수 있어 더 효율적입니다.

## 예제

### Promise.try() 사용하기

다음 예제는 콜백을 받아서 프로미스로 끌어올리고, 그 결과를 처리하며 오류 처리도 수행합니다.

```js
function doSomething(action) {
  return Promise.try(action)
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Done"));
}

doSomething(() => "Sync result");

doSomething(() => {
  throw new Error("Sync error");
});

doSomething(async () => "Async result");

doSomething(async () => {
  throw new Error("Async error");
});
```

async/await 구문에서는 같은 코드를 이렇게 표현할 수도 있습니다.

```js
async function doSomething(action) {
  try {
    const result = await action();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Done");
  }
}
```

### 프로미스가 아닌 생성자에서 try() 호출하기

`Promise.try()` 는 제너릭 메서드입니다. 이는 `Promise()` 생성자와 동일한 시그니처를 구현하는 모든 생성자에서 호출될 수 있습니다.

다음은 실제 `Promise.try()` 의 좀 더 충실한 근사치입니다. (하지만 폴리필로 사용해서는 안 됩니다.)

```js
Promise.try = function (func) {
  return new this((resolve, reject) => {
    try {
      resolve(func());
    } catch (error) {
      reject(error);
    }
  });
};
```

`Promise.try()` 의 (`try...catch` 를 이용한 것과 같은) 구현 방식 덕분에 어떤 커스텀 생성자에 `this` 를 설정하여 `Promise.try()` 를 안전하게 호출할 수 있고, 절대로 동기적으로 예외를 발생시키지 않습니다.

```js
class NotPromise {
  constructor(executor) {
    // "resolve" 와 "reject" 함수는 어떠한 동작도 하지 않습니다.
    // 그러나 프로미스의 Promise.try() 는 resolve 를 호출합니다.
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

const p = Promise.try.call(NotPromise, () => "hello");
// Logs: Resolved hello

const p2 = Promise.try.call(NotPromise, () => {
  throw new Error("oops");
});
// Logs: Rejected Error: oops
```

`Promise()` 와는 다르게 `NotPromise()` 생성자는 실행자가 동작하는 동안 어떠한 예외도 우아하게 처리하지 않습니다. 하지만 `throw` 와는 다르게 `Promise.try()` 는 예외를 감지하고, 이를 `reject()` 로 전달하여 로그를 출력하게 됩니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js` 의 `Promise.try` 폴리필](https://github.com/zloirock/core-js#promisetry)
- [Promise 사용](/ko/docs/Web/JavaScript/Guide/Using_promises) 안내서
- {{jsxref("Promise")}}
- [`Promise()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
