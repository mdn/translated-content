---
title: await
slug: Web/JavaScript/Reference/Operators/await
tags:
  - Function
  - JavaScript
  - Language feature
  - Operator
  - Primary Expression
translation_of: Web/JavaScript/Reference/Operators/await
browser-compat: javascript.operators.await
---
{{jsSidebar("Operators")}}

`await`연산자는 {{jsxref("Promise")}}를 기다리기 위해 사용됩니다. 이 연산자는 {{jsxref("Statements/async_function", "async function")}} 내부에서만 사용할 수 있습니다. 하지만 [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules)과 함께 `await`를 단독으로 사용할 수 있습니다.

## 구문

```js
[rv] = await expression
```

- `expression`
  - : {{jsxref("Promise")}} 혹은 기다릴 어떤 값입니다.
- `rv`
  - : {{jsxref("Promise")}}에 의해 만족되는 값이 반환됩니다. {{jsxref("Promise")}}가 아닌 경우에는 그 값 자체가 반환됩니다.

## 설명

`await` 문은 `Promise`가 처리(즉, 이행되거나 거부됨)될 때까지 `async` 함수의 실행을 일시 정지하고, `Promise`가 이행되면 `async` 함수를 일시 정지한 부분부터 실행합니다. 이때 `await` 문의 반환값은 `Promise` 에서 이행된 값이 됩니다.

만약 `Promise`가 거부되면, `await` 문은 거부된 값을 `throw`합니다.

`await` 연산자 다음에 나오는 표현식의 값이 `Promise`가 아니면 해당 값을 [resolved Promise](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)로 변환시킵니다.

`await`은 실행 흐름을 분할하고 `await` 함수의 호출자가 `await` 함수의 지연된 지속 전에 실행을 재개할 수 있게 합니다. `await`가 `await` 함수를 연기한 후, 이것이 함수에 의해 실행된 첫 번째 `await`이라면 즉시 실행은 함수 호출자에게 `await` 함수의 완료에 대한 대기(pending) 중인 `Promise`를 반환하고 그 호출자의 실행을 재개함으로써 계속 이어갑니다.

## 예제

### Awaiting a promise to be fulfilled

만약 `Promise`가 `await`에 넘겨지면, `await`는 `Promise`가 이행되기를 기다렸다가, 해당 값을 반환합니다.

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

### Thenable objects

{{jsxref("Global_Objects/Promise/then", "Thenable objects")}} 도 동일하게 이행됩니다.

```js
async function f2() {
  const thenable = {
    then(resolve, _reject) {
      resolve('resolved!')
    }
  };
  console.log(await thenable); // resolved!
}

f2();
```

### Conversion to promise

만약 값이 `Promise`가 아니라면, 해당 값은 이행된 `Promise`로 변환되며 이를 기다립니다.

```js
async function f3() {
  const y = await 20;
  console.log(y); // 20
}

f3();
```

### Promise rejection

만약 `Promise`가 거부되면, 거부된 값이 `throw`됩니다.

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

### Handling rejected promises

try블럭 없이 거부된 `Promise`다루기

```js
const response = await promisedFunction()
  .catch((err) => { console.error(err); });
// promise가 거부된다면 response는 undefined일 것이다.
```

### Top level await

[JavaScript module](/en-US/docs/Web/JavaScript/Guide/Modules)안에서 `await` 키워드를 사용할 수 있습니다. 이것은 `await`를 사용하는 하위 모듈이 있는 모듈이 실행되기 전에 다른 하위 모듈이 로드되는 것을 막지 않으면서 모든 하위 모듈이 실행될 때까지 기다립니다.

아래 [Fetch API](/en-US/docs/Web/API/Fetch_API)를 사용하고 [`export statement`](/en-US/docs/Web/JavaScript/Reference/Statements/export)에 `await`를 지정한 간단한 모듈의 예입니다. 이 모듈을 포함하는 모든 모듈은 코드를 실행하기 전에 `fetch`를 이행할 때까지 기다립니다.

```js
// fetch request
const colors = fetch('../data/colors.json')
  .then((response) => response.json());

export default await colors;
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("AsyncFunction")}} object
- [Top level await](https://v8.dev/features/top-level-await) on v8.dev
