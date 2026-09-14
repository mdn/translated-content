---
title: await
slug: Web/JavaScript/Reference/Operators/await
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Operators")}}

**`await`** 연산자는 {{jsxref("Promise")}}가 이행될 때까지 이행된 값을 반환받는 데 사용됩니다. 이 연산자는 [비동기 함수](/ko/docs/Web/JavaScript/Reference/Statements/async_function) 내부나 [모듈](/ko/docs/Web/JavaScript/Guide/Modules) 최상단 부분에서만 사용할 수 있습니다.

## 구문

```js-nolint
await expression
```

### 매개변수

- `expression`
  - : {{jsxref("Promise")}}, [thenable 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) 또는 대기할 수 있는 값.

### 반환 값

프로미스 또는 thenable 객체의 이행 값이거나, 표현식이 thenable이 아닌 경우 해당 표현식의 자체 값.

### 예외

프로미스 또는 thenable 객체가 거부되면, 해당 거부 사유를 던집니다.

## 설명

`await`는 일반적으로 {{jsxref("Promise")}}를 표현식으로 전달하여 해당 프로미스를 언랩하는 데 사용됩니다. `await`를 사용하면 해당 프로미스가 이행 또는 거부 처리될 때까지 `async` 함수의 실행이 일시 중단됩니다. 프로미스가 이행되면 실행이 재개되고, `await` 표현식의 값은 이행된 프로미스 값이 됩니다.

프로미스가 거부되면, `await` 표현식은 거부된 값을 던집니다. `await` 표현식을 포함하는 함수는 오류의 [스택 트레이스](#improving_stack_trace)에 표시됩니다. 반면, 거부된 프로미스를 await 하지 않거나 즉시 반환하면 호출 함수는 스택 트레이스에 나타나지 않습니다.

`expression`은 {{jsxref("Promise.resolve()")}}와 동일한 방식으로 처리됩니다. 항상 기본 `Promise`로 변환한 뒤, 순서를 기다립니다. `expression`은 다음과 같은 값일 수 있습니다.

- 기본 `Promise`: `expression`이 `Promise` 또는 하위 클래스에 속하고 `expression.constructor === Promise`이면, 해당 프로미스는 `then()`을 호출하지 않고 직접 사용되어 await 됩니다.
- [Thenable 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables): 비내장 프로미스, 폴리필, 프록시, 하위 클래스 등을 포함한 해당 객체의 `then()` 메서드를 호출하면서 `resolve` 콜백을 호출하는 처리기를 전달하여, 기본 [`Promise()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) 생성자로 새로운 프로미스를 구성합니다.
- thenable 아닌 값: 이미 이행된 `Promise`로 래핑되어 사용됩니다.

프로미스가 이미 이행된 경우에도, 비동기 함수 실행은 다음 틱까지 일시 중단됩니다. 그 사이에 해당 비동기 함수를 호출한 곳에서는 실행이 계속 진행됩니다. [아래에서 예제를 참고하세요.](#control_flow_effects_of_await)

`await`는 비동기 함수나 모듈 내부에서만 사용할 수 있으며, 이들은 비동기적이고 프로미스를 반환합니다. 따라서 `await` 표현식은 메인 스레드를 차단하지 않으며, 결과에 의존하는 코드만 실행을 지연시킵니다. 즉, `await` 표현식 이후의 코드만이 영향을 받습니다.

## 예제

### 이행될 프로미스 기다리기

`Promise`가 `await` 표현식에 전달되면, 해당 `Promise`가 이행될 때까지 기다린 뒤 이행된 값을 반환합니다.

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  const x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();
```

### Thenable 객체

[Thenable 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables)는 실제 `Promise` 객체와 동일한 방식으로 처리됩니다.

```js
async function f2() {
  const thenable = {
    then(resolve) {
      resolve("resolved!");
    },
  };
  console.log(await thenable); // "resolved!"
}

f2();
```

거부될 수도 있습니다.

```js
async function f2() {
  const thenable = {
    then(_, reject) {
      reject(new Error("rejected!"));
    },
  };
  await thenable; // Throws Error: rejected!
}

f2();
```

### 프로미스 변환하기

값이 `Promise`가 아닌 경우, `await`는 해당 값을 이행된 `Promise`로 변환하고 기다립니다. 이때 `then` 속성이 호출 가능한 형태가 아니라면, 해당 값 자체는 변하지 않습니다.

```js
async function f3() {
  const y = await 20;
  console.log(y); // 20

  const obj = {};
  console.log((await obj) === obj); // true
}

f3();
```

### 거부된 프로미스 처리하기

`Promise`가 거부된 경우, 거부된 값은 던져집니다.

```js
async function f4() {
  try {
    const z = await Promise.reject(30);
  } catch (e) {
    console.error(e); // 30
  }
}

f4();
```

거부된 프로미스는 await 하기 전에 [`catch()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) 처리기를 체이닝 하여 `try` 블록 없이 처리할 수 있습니다.

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
  return "default response";
});
// 프로미스가 거부되면 응답은 "default response"가 됩니다.
```

이는 `promisedFunction()`이 동기적으로 오류를 던지지 않고, 항상 거부된 프로미스를 반환한다는 전제에 기반합니다. 대부분의 적절하게 설계된 프로미스 기반 함수들은 이와 같은 특성을 가지며, 일반적으로 다음과 같은 형태로 작성됩니다.

```js
function promisedFunction() {
  // 오류가 발생할 가능성을 줄이기 위해 프로미스를 즉시 반환합니다.
  return new Promise((resolve, reject) => {
    // 비동기 작업 수행
  });
}
```

하지만, `promisedFunction()`이 동기적으로 오류를 던지는 경우, `catch()` 처리기로는 오류를 포착할 수 없습니다. 이러한 경우에는 `try...catch` 문이 필요합니다.

### 최상위 await

`await` 키워드는 비동기 함수 외부와 [모듈](/ko/docs/Web/JavaScript/Guide/Modules)의 최상위에서 사용할 수 있습니다. 이는 `await`를 사용하는 하위 모듈이 있을 경우, 해당 모듈이 실행되기 전에 하위 모듈 실행을 기다리게 함을 의미합니다. 이 과정에서 다른 하위 모듈의 로딩은 차단되지 않습니다.

[Fetch API](/ko/docs/Web/API/Fetch_API)를 사용하고 [`export`](/ko/docs/Web/JavaScript/Reference/Statements/export)문 내에서 await를 명시한 모듈의 예제입니다. 이 모듈을 가져오는 다른 모듈은 어떤 코드도 실행되기 전에 해당 패치 이행을 기다립니다.

```js
// fetch 요청
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

### await가 제어 흐름에 미치는 영향

비동기 함수나 모듈에서 `await`를 만나면, 해당 await 표현식은 즉시 실행되며 그 값에 의존하는 나머지 코드는 일시 중단됩니다. 실행 흐름은 함수에서 빠져나와 호출자에게 반환됩니다. await 표현식의 값이 이행되면, 중단된 코드를 실행하기 위한 또 다른 [마이크로태스크](/ko/docs/Web/JavaScript/Reference/Execution_model)가 스케줄에 등록됩니다. 이는 await 값이 이미 이행된 프로미스이거나 프로미스가 아닌 경우에도 마찬가지입니다. 이러한 경우, 현재 함수는 이미 예약된 모든 마이크로태스크가 처리되기 전까지 다시 실행되지 않습니다. 다음 코드를 살펴보세요.

```js
async function foo(name) {
  console.log(name, "start");
  console.log(name, "middle");
  console.log(name, "end");
}

foo("First");
foo("Second");

// First start
// First middle
// First end
// Second start
// Second middle
// Second end
```

이러한 경우, `foo` 함수는 `await` 표현을 포함하지 않기 때문에 동기적으로 동작합니다. 세 문장 모두 동일한 틱에서 동작합니다. 따라서, 두 함수 호출은 모든 문장을 순차적으로 실행하게 됩니다. 프로미스 관점에서 보면, 이 함수는 다음과 같이 표현할 수 있습니다.

```js
function foo(name) {
  return new Promise((resolve) => {
    console.log(name, "start");
    console.log(name, "middle");
    console.log(name, "end");
    resolve();
  });
}
```

하지만 `await`가 하나라도 포함되면, 해당 함수는 비동기가 되며 이후 문장들의 실행은 다음 틱으로 연기됩니다.

```js
async function foo(name) {
  console.log(name, "start");
  await console.log(name, "middle");
  console.log(name, "end");
}

foo("First");
foo("Second");

// First start
// First middle
// Second start
// Second middle
// First end
// Second end
```

이는 다음과 같은 코드가 될 수 있습니다.

```js
function foo(name) {
  return new Promise((resolve) => {
    console.log(name, "start");
    resolve(console.log(name, "middle"));
  }).then(() => {
    console.log(name, "end");
  });
}
```

추가된 `then()` 처리기는 어떤 비동기 동작도 기다리지 않기 때문에 생성자에 전달되는 실행기와 병합될 수 있습니다. 그러나, 이 처리기가 존재함으로써 `foo`를 한 번 호출할 때마다 추가적인 마이크로태스크가 생성되어 코드가 분할됩니다. 이러한 마이크로태스크는 얽힌 방식으로 등록되고 실행되어, 코드 진행 속도를 느리게 하거나 불필요한 경쟁 조건을 유발할 수 있습니다. 따라서 `await`는 오직 프로미스를 값으로 풀어야 할 때에만 사용해야 합니다.

마이크로태스크는 프로미스가 해결될 때뿐만 아니라 웹 API에 의해서도 등록되며, 모두 동일한 우선순위로 실행됩니다. 이번 예제에서 {{domxref("Window.queueMicrotask()", "queueMicrotask()")}}를 사용하며 각 `await` 표현식을 만났을 때 마이크로테스크 큐가 어떻게 처리되는지 설명합니다.

```js
let i = 0;

queueMicrotask(function test() {
  i++;
  console.log("microtask", i);
  if (i < 3) {
    queueMicrotask(test);
  }
});

(async () => {
  console.log("async function start");
  for (let i = 1; i < 3; i++) {
    await null;
    console.log("async function resume", i);
  }
  await null;
  console.log("async function end");
})();

queueMicrotask(() => {
  console.log("queueMicrotask() after calling async function");
});

console.log("script sync part end");

// Logs:
// async function start
// script sync part end
// microtask 1
// async function resume 1
// queueMicrotask() after calling async function
// microtask 2
// async function resume 2
// microtask 3
// async function end
```

이번 예제에서, `test()` 함수는 항상 비동기 함수가 재개되기 전에 호출되므로, 이들이 각각 등록하는 마이크로태스크는 얽혀 있는 방식으로 실행됩니다. 한편, `await`와 `queueMicrotask()`는 모두 마이크로태스크에 등록되기 때문에 실행 순서는 등록된 순서에 따라 결정됩니다. 비동기 함수가 처음 재개된 이후에 "비동기 함수를 호출한 다음에 queueMicrotask()" 로그가 동작하는 이유입니다.

### 스택 트레이스 향상시키기

때때로, 비동기 함수에서 프로미스가 직접 반환될 경우 `await`는 생략되기도 합니다.

```js
async function noAwait() {
  // 일부 동작 수행...

  return /* await */ lastAsyncTask();
}
```

하지만, `lastAsyncTask`가 비동기적으로 오류를 던지는 경우도 고려해보세요.

```js
async function lastAsyncTask() {
  await null;
  throw new Error("failed");
}

async function noAwait() {
  return lastAsyncTask();
}

noAwait();

// Error: failed
//    at lastAsyncTask
```

`noAwait`에서 프로미스가 이미 반환된 뒤에 거부되기 때문에 스택 트레이스에서는 `lastAsyncTask`만 나타납니다. 어떤 의미에서는, 이 프로미스가 `noAwait`와 관련이 없다고 불 수 있습니다. 스택 트레이스를 개선하려면, 해당 프로미스를 `await`로 감싸 예외가 현재 함수 안에서 발생하도록 만들 수 있습니다. 이렇게 하면 예외는 즉시 거부된 새로운 프로미스로 감싸지지만, 오류가 생성되는 시점에서 호출자가 스택 트레이스에 포함됩니다.

```js
async function lastAsyncTask() {
  await null;
  throw new Error("failed");
}

async function withAwait() {
  return await lastAsyncTask();
}

withAwait();

// Error: failed
//    at lastAsyncTask
//    at async withAwait
```

일부 대중적인 믿음과는 달리, 스펙과 엔진을 기본적인 프로미스의 이행을 최적화하는 방식 덕분에 `return await promise`는 최소한 `return promise` 만큼 빠릅니다. [`return promise`를 더 빠르게 만들기](https://github.com/tc39/proposal-faster-promise-adoption)를 위한 제안이 있으며, [V8의 비동기 함수 최적화](https://v8.dev/blog/fast-async)에 대해서도 확인해볼 수 있습니다. 스타일상의 이유를 제외하면, 대부분의 경우 `return await`를 사용하는 것이 바람직합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/async_function", "async function")}}
- [`async function` 표현식](/ko/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("AsyncFunction")}}
- [최상단 await](https://v8.dev/features/top-level-await) (v8.dev, 2019)
- [typescript-eslint 규칙: `return-await`](https://typescript-eslint.io/rules/return-await/)
