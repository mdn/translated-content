---
title: await
slug: Web/JavaScript/Reference/Operators/await
---

{{jsSidebar("Operators")}}

`await` 操作符用于等待一个 {{jsxref("Promise")}} 兑现并获取它兑现之后的值。它只能在{{jsxref("Statements/async_function", "异步函数", "", 1)}}或者[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)顶层中使用。

## 语法

```js-nolint
await expression;
```

### 参数

- `expression`
  - : 要等待的 {{jsxref("Promise")}} 实例，Thenable 对象，或任意类型的值。

### 返回值

返回从 `Promise` 实例或 thenable 对象取得的处理结果。如果等待的值不符合 thenable，则返回表达式本身的值。

### 异常

拒绝（reject）的原因会被作为异常抛出。

## 描述

`await` 通常用于拆开 promise 的包装，使用方法是传递一个 {{jsxref("Promise")}} 作为 `expression`。使用 `await` 总会暂停当前异步函数的执行，在该 `Promise` 敲定（settled，指兑现或拒绝）后继续执行。函数的执行恢复（resume）时，`await` 表达式的值已经变成了 `Promise` 兑现的值。

若该 `Promise` 被拒绝（rejected），`await` 表达式会把拒绝的原因（reason）抛出。当前函数（`await` 所在的函数）会出现在抛出的错误的[栈追踪](#改善栈追溯)（stack trace），否则当前函数就不会在栈追踪出现。

`await` 总会同步地对表达式求值并处理，处理的行为与 {{jsxref("Promise.resolve()")}} 一致，不属于原生 `Promise` 的值全都会被隐式地转换为 `Promise` 实例后等待。处理的规则为，若表达式：

- 是一个原生 `Promise`（原生{{jsxref("Promise")}} 的实例或其派生类的实例，且满足 `expression.constructor === Promise`），会被直接用于等待，等待由原生代码实现，该对象的 `then()` 不会被调用。
- 是 thenable 对象（包括非原生的 `Promise` 实例、polyfill、Proxy、派生类等），会构造一个新 `Promise` 用于等待，构造时会调用该对象的 `then()` 方法。
- 不是 thenable 对象，会被包装进一个已兑现的 `Promise` 用于等待，其结果就是表达式的值。

## 示例

### 等待 Promise 的兑现

当一个 `Promise` 被传递给 `await` 操作符，`await` 将等待该 `Promise` 兑现，并在兑现后返回该 `Promise` 兑现的值。

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  let x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();
```

### 转换为 promise

若表达式的值不是 `Promise`，`await` 会把该值转换为已兑现的 `Promise`，然后返回其结果。

```js
async function f3() {
  const y = await 20;
  console.log(y); // 20

  const obj = {};
  console.log((await obj) === obj); // true
}

f3();
```

### promise 被拒绝

如果 `Promise` 被拒绝，则抛出拒绝的原因。

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

### 处理被拒绝的 promise

你可以链式调用 [`catch()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)（而不是使用 `try`）以在等待 promise 兑现之前处理被拒绝的 promise。

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
  return "default response";
});
// response will be "default response" if the promise is rejected
```

### 在顶层使用 await

在[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)的顶层，你可以单独使用关键字 `await`（异步函数的外面）。也就是说一个模块如果包含用了 `await` 的子模块，该模块就会等待该子模块，这一过程并不会阻塞其他子模块。

下面是一个在 [`export`](/zh-CN/docs/Web/JavaScript/Reference/Statements/export) 表达式中使用了 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 的例子。任何文件只要导入这个模块，后面的代码就会等待，直到 fetch 完成。

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

### await 对执行过程的影响

当函数执行到 `await` 时，被等待的表达式会立即执行，所有依赖该表达式的值的代码会被暂停，并推送进[微任务队列（microtask queue）](/zh-CN/docs/Web/JavaScript/Event_loop)。然后主线程被释放出来，用于事件循环中的下一个任务。即使等待的值是已经敲定的 promise 或不是 promise，也会发生这种情况。例如，考虑以下代码：

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

对应到 `Promise` 的写法是：

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

执行到 `await` 时，后面的代码就会整体被安排进一个新的微任务，此后的函数体变为异步执行。

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

对应的 `Promise` 写法是：

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

虽然这里的 `then()` 看起来很多余，其中的代码完全可以被合并到构造器的回调里，但不管该 `Promise` 的状态如何，`then()` 的回调**总会被异步执行**，`await` 的行为也一样。因此，只要情况不是必须或可能需要等待 `Promise` 的结果，就应该避免使用 `await`。

其他微任务能在函数执行恢复之前执行：

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

此案例中，`test()` 总会在异步函数恢复执行前被调用，呈现轮流的调度。微任务被执行的顺序通常就是入队的先后顺序，而 `console.log("queueMicrotask() after calling async function");` 比 `await` 晚入队，因此 `"queueMicrotask() after calling async function"` 在异步函数第一次恢复之后才输出。

### 改善栈追踪

有时，当异步函数直接返回一个 `Promise` 时我们会省略 `await`。

```js
async function noAwait() {
  // Some actions...

  return /* await */ lastAsyncTask();
}
```

但是假如这个 `Promise` 的由来是调用了异步函数，且该异步函数的异步部分抛出了错误：

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

栈追踪中只出现了 `lastAsyncTask`，这是因为抛出错误时 `noAwait` 已经返回——某种意义上该 `Promise` 已经与 `noAwait` 无关。若要改善栈追踪，你可以用 `await` 提前等待，错误就会在函数体结束前抛出，接着该错误会被包装进一个新的 `Promise`，因错误被 `await` 在主调函数的函数体抛出，主调函数将会出现在栈追踪。

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

但是，这样会有一点性能牺牲，毕竟 `Promise` 会被拆装了又再次包装。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/async_function", "async 函数")}}
- {{jsxref("Operators/async_function", "async 函数表达式")}}
- {{jsxref("AsyncFunction")}} 对象
- v8.dev 上的 [Top level await](https://v8.dev/features/top-level-await)
