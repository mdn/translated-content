---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
---

{{jsSidebar("Statements")}}

**`async function`** 선언은 {{jsxref("Global_Objects/AsyncFunction","AsyncFunction")}}객체를 반환하는 하나의 비동기 함수를 정의합니다. 비동기 함수는 이벤트 루프를 통해 비동기적으로 작동하는 함수로, 암시적으로 {{jsxref("Promise")}}를 사용하여 결과를 반환합니다. 그러나 비동기 함수를 사용하는 코드의 구문과 구조는, 표준 동기 함수를 사용하는것과 많이 비슷합니다.

또한 {{jsxref("Operators/async_function", "async function expression", "", 1)}}을 사용해서 async function을 선언할 수 있습니다.

{{EmbedInteractiveExample("pages/js/statement-async.html", "taller")}}

## Syntax

```js
    async function name([param[, param[, ... param]]]) {
        statements
    }
```

### 매개변수

- `name`
  - : 함수의 이름.
- `param` {{optional_inline}}
  - : 함수에게 전달되기 위한 인자의 이름.
- `statements` {{optional_inline}}
  - : 함수 본문을 구성하는 내용. await 메커니즘이 사용될 수 있다.

## Description

`async` 함수에는 {{jsxref ( "Operators / await", "await")}}식이 포함될 수 있습니다. 이 식은 `async` 함수의 실행을 일시 중지하고 전달 된 `Promise`의 해결을 기다린 다음 `async` 함수의 실행을 다시 시작하고 완료후 값을 반환합니다.

> **Note:** `await` 키워드는 `async` 함수에서만 유효하다는 것을 기억하십시오. `async` 함수의 본문 외부에서 사용하면 [SyntaxError](/ko/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)가 발생합니다.

> **Note:** async/await함수의 목적은 사용하는 여러 promise의 동작을 동기스럽게 사용할 수 있게 하고, 어떠한 동작을 여러 promise의 그룹에서 간단하게 동작하게 하는 것이다. promise가 구조화된 callback과 유사한 것 처럼 `async/await` 또한 제네레이터(generator)와 프로미스(promise)를 묶는것과 유사하다.

`async` 함수는 항상 promise를 반환합니다. 만약 `async` 함수의 반환값이 명시적으로 promise가 아니라면 암묵적으로 promise로 감싸집니다.

예를 들어

```js
async function foo() {
  return 1;
}
```

위 코드는 아래와 같습니다.

```js
function foo() {
  return Promise.resolve(1);
}
```

`async` 함수의 본문은 0개 이상의 `await` 문으로 분할된 것으로 생각할 수 있습니다. 첫번째 `await` 문을 포함하는 최상위 코드는 동기적으로 실행됩니다. 따라서 `await` 문이 없는 `async` 함수는 동기적으로 실행됩니다. 하지만 `await` 문이 있다면 `async` 함수는 항상 비동기적으로 완료됩니다.

예를 들어

```js
async function foo() {
  await 1;
}
```

위 코드는 아래와 같습니다.

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}
```

## Examples

### Simple example

```js
var resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(20);
      console.log("slow promise is done");
    }, 2000);
  });
};

var resolveAfter1Second = function () {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(10);
      console.log("fast promise is done");
    }, 1000);
  });
};

var sequentialStart = async function () {
  console.log("==SEQUENTIAL START==");

  // If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.
  const slow = await resolveAfter2Seconds();
  console.log(slow);

  const fast = await resolveAfter1Second();
  console.log(fast);
};

var concurrentStart = async function () {
  console.log("==CONCURRENT START with await==");
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second();

  console.log(await slow);
  console.log(await fast); // waits for slow to finish, even though fast is already done!
};

var stillConcurrent = function () {
  console.log("==CONCURRENT START with Promise.all==");
  Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
    (messages) => {
      console.log(messages[0]); // slow
      console.log(messages[1]); // fast
    },
  );
};

var parallel = function () {
  console.log("==PARALLEL with Promise.then==");
  resolveAfter2Seconds().then((message) => console.log(message));
  resolveAfter1Second().then((message) => console.log(message));
};

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
// wait above to finish
setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"
// wait again
setTimeout(stillConcurrent, 7000); // same as concurrentStart
// wait again
setTimeout(parallel, 10000); // trully parallel: after 1 second, logs "fast", then after 1 more second, "slow"
```

> **Warning:** `await` 와 `Promise#then`을 혼동하지 마세요. `sequentialStart` 에서, 첫 번째 `await`는 2초의 대기 시간을 갖고, 다시 두 번째 `await`에서 1초의 대기 시간을 갖습니다. 두 번째 타이머는 첫 번째 타이머가 완료될 때 까지 생성되지 않습니다. `concurrentStart` 에서, 두 타이머 모두 생성 된 다음 `await` 합니다. 타이머가 동시에 실행되고 있지만, `await` 호출은 여전히 연속적 실행중이므로, 두 번째 `await` 는 첫 번째 호출이 끝날 때 까지 대기합니다. 이렇게하면 3초가 아니라, 가장 느린 타이머에 필요한 2초가 필요합니다. `stillConcurrent` 에서도 `Promise.all` 을 사용하여 같은 일이 발생합니다. 두 개 이상의 프러미스를 동시에 wait 하고 싶다면, `Promise#then`을 사용하여 예제와 같이 `parallel` 를 수행할 수 있습니다.

### `async`함수를 사용한 promise chain 재작성

{{jsxref("Promise")}} 를 반환하는 API는 promise chain을 만들며 여러 파트의 함수로 나뉜다.
아래 코드를 보자.

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch((e) => {
      return downloadFallbackData(url); // returns a promise
    })
    .then((v) => {
      return processDataInWorker(v); // returns a promise
    });
}
```

위의 코드는 하나의 async함수로 아래와 같이 쓰여질 수도 있다.

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

위 예제에서는 return 구문에 await 구문이 없다는 것에 주목하자. 이는 async function의 반환값이 암묵적으로 {{jsxref("Promise.resolve")}}로 감싸지기 때문이다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("AsyncFunction")}} object
- {{jsxref("Operators/await", "await")}}
- ["Decorating Async Javascript Functions" on "innolitics.com"](http://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/)
