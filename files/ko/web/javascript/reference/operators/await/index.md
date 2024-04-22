---
title: await
slug: Web/JavaScript/Reference/Operators/await
---

{{jsSidebar("Operators")}}`await`연산자는 {{jsxref("Promise")}}를 기다리기 위해 사용됩니다. 연산자는 {{jsxref("Statements/async_function", "async function")}} 내부에서만 사용할 수 있습니다.

## 구문

```js
[rv] = await expression;
```

- `expression`
  - : {{jsxref("Promise")}} 혹은 기다릴 어떤 값입니다.
- `rv`
  - : {{jsxref("Promise")}}에 의해 만족되는 값이 반환됩니다. {{jsxref("Promise")}}가 아닌 경우에는 그 값 자체가 반환됩니다.

## 설명

`await` 문은 `Promise`가 fulfill되거나 `reject` 될 때까지 `async` 함수의 실행을 일시 정지하고, `Promise`가 fulfill되면 `async` 함수를 일시 정지한 부분부터 실행합니다. 이때 `await` 문의 반환값은 `Promise` 에서 fulfill된 값이 됩니다.

만약 `Promise`가 `reject`되면, `await` 문은 `reject`된 값을 `throw`합니다.

`await` 연산자 다음에 나오는 문의 값이 `Promise`가 아니면 해당 값을 [resolved Promise](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)로 변환시킵니다.

An `await` can split execution flow, allowing the caller of the `await`'s function to resume execution before the deferred continuation of the `await`'s function. After the `await` defers the continuation of its function, if this is the first `await` executed by the function, immediate execution also continues by returning to the function's caller a pending `Promise` for the completion of the `await`'s function and resuming execution of that caller.

## 예제

만약 `Promise`가 `await`에 넘겨지면, `await`은 `Promise`가 fulfill되기를 기다렸다가, 해당 값을 리턴합니다.

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();
```

{{jsxref("Global_Objects/Promise/then", "Thenable objects")}} will be fulfilled just the same.

```js
async function f2() {
  const thenable = {
    then: function (resolve, _reject) {
      resolve("resolved!");
    },
  };
  console.log(await thenable); // resolved!
}

f2();
```

만약 값이 `Promise`가 아니라면, 해당 값은 `resolve`된 `Promise`로 변환되며 이를 기다립니다.

```js
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();
```

만약 `Promise`가 `reject`되면, `reject`된 값이 `throw`됩니다.

```js
async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();
```

try블럭 없이 rejected `Promise`다루기

```js
var response = await promisedFunction().catch((err) => {
  console.error(err);
});
// response will be undefined if the promise is rejected
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("AsyncFunction")}} object
