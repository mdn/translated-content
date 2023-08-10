---
title: async 函数
slug: Web/JavaScript/Reference/Statements/async_function
---

{{jsSidebar("Statements")}}

async 函数是使用`async`关键字声明的函数。async 函数是 {{jsxref("Global_Objects/AsyncFunction","AsyncFunction")}} 构造函数的实例，并且其中允许使用 `await` 关键字。`async` 和 `await` 关键字让我们可以用一种更简洁的方式写出基于 {{jsxref("Promise")}} 的异步行为，而无需刻意地链式调用 `promise`。

async 函数还可以被{{jsxref("Operators/async_function", "作为表达式", "", 1)}}来定义。

{{EmbedInteractiveExample("pages/js/statement-async.html", "taller")}}

## 语法

```js-nolint
async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* … ,*/ paramN) {
  statements
}
```

### 参数

- `name`
  - : 函数名称。
- `param` {{optional_inline}}
  - : 要传递给函数的参数的名称。
- `statements` {{optional_inline}}
  - : 包含函数主体的表达式。可以使用 `await` 机制。

### 返回值

一个 {{jsxref("Promise")}}，这个 promise 要么会通过一个由 async 函数返回的值被解决，要么会通过一个从 async 函数中抛出的（或其中没有被捕获到的）异常被拒绝。

## 描述

async 函数可能包含 0 个或者多个 {{jsxref("Operators/await", "await")}} 表达式。await 表达式会暂停整个 async 函数的执行进程并出让其控制权，只有当其等待的基于 promise 的异步操作被兑现或被拒绝之后才会恢复进程。promise 的解决值会被当作该 await 表达式的返回值。使用 `async`/`await` 关键字就可以在异步代码中使用普通的 `try`/`catch` 代码块。

> **备注：** `await`关键字只在 async 函数内有效。如果你在 async 函数体之外使用它，就会抛出语法错误 {{jsxref("SyntaxError")}} 。

> **备注：** `async`/`await`的目的为了简化使用基于 promise 的 API 时所需的语法。`async`/`await` 的行为就好像搭配使用了生成器和 promise。

async 函数一定会返回一个 promise 对象。如果一个 async 函数的返回值看起来不是 promise，那么它将会被隐式地包装在一个 promise 中。

例如，如下代码：

```js
async function foo() {
  return 1;
}
```

等价于：

```js
function foo() {
  return Promise.resolve(1);
}
```

async 函数的函数体可以被看作是由 0 个或者多个 await 表达式分割开来的。从第一行代码直到（并包括）第一个 await 表达式（如果有的话）都是同步运行的。这样的话，一个不含 await 表达式的 async 函数是会同步运行的。然而，如果函数体内有一个 await 表达式，async 函数就一定会异步执行。

例如：

```js
async function foo() {
  await 1;
}
```

等价于

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}
```

在 await 表达式之后的代码可以被认为是存在在链式调用的 then 回调中，多个 await 表达式都将加入链式调用的 then 回调中，返回值将作为最后一个 then 回调的返回值。

在接下来的例子中，我们将使用 await 执行两次 promise，整个 `foo` 函数的执行将会被分为三个阶段。

1. `foo` 函数的第一行将会同步执行，await 将会等待 promise 的结束。然后暂停通过 `foo` 的进程，并将控制权交还给调用 `foo` 的函数。
2. 一段时间后，当第一个 promise 完结的时候，控制权将重新回到 foo 函数内。示例中将会将`1`（promise 状态为 fulfilled）作为结果返回给 await 表达式的左边即 `result1`。接下来函数会继续进行，到达第二个 await 区域，此时 `foo` 函数的进程将再次被暂停。
3. 一段时间后，同样当第二个 promise 完结的时候，`result2` 将被赋值为 `2`，之后函数将会正常同步执行，将默认返回`undefined` 。

```js
async function foo() {
  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve("1")),
  );
  const result2 = await new Promise((resolve) =>
    setTimeout(() => resolve("2")),
  );
}
foo();
```

注意：promise 链不是一次就构建好的，相反，promise 链是分阶段构造的，因此在处理异步函数时必须注意对错误函数的处理。

例如，在下面代码中，即使在 promise 链中进一步配置了 `.catch` 方法处理，也会抛出一个未处理的 promise 被拒绝的错误。这是因为 `p2` 直到控制从 `p1` 返回后才会连接到 promise 链。

```js
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
  const results = [await p1, await p2]; // 不推荐使用这种方式，请使用 Promise.all 或者 Promise.allSettled
}
foo().catch(() => {}); // 捕捉所有的错误...
```

## 示例

### 简单例子

```js
function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("==SEQUENTIAL START==");

  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds();
  console.log(slow); // 2. this runs 2 seconds after 1.

  const fast = await resolveAfter1Second();
  console.log(fast); // 3. this runs 3 seconds after 1.
}

async function concurrentStart() {
  console.log("==CONCURRENT START with await==");
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second(); // starts timer immediately

  // 1. Execution gets here almost instantly
  console.log(await slow); // 2. this runs 2 seconds after 1.
  console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}

function concurrentPromise() {
  console.log("==CONCURRENT START with Promise.all==");
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
    (messages) => {
      console.log(messages[0]); // slow
      console.log(messages[1]); // fast
    },
  );
}

async function parallel() {
  console.log("==PARALLEL with await Promise.all==");

  // Start 2 "jobs" in parallel and wait for both of them to complete
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrentPromise, 7000); // same as concurrentStart

// wait again
setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"
```

#### await 和并行

在 `sequentialStart` 中，程序在第一个 `await` 停留了 2 秒，然后又在第二个 `await` 停留了 1 秒。直到第一个计时器结束后，第二个计时器才被创建。程序需要 3 秒执行完毕。

在 `concurrentStart` 中，两个计时器被同时创建，然后执行 `await`。这两个计时器同时运行，这意味着程序完成运行只需要 2 秒，而不是 3 秒，即最慢的计时器的时间。

但是 `await` 仍旧是顺序执行的，第二个 `await` 还是得等待第一个执行完。在这个例子中，这使得先运行结束的输出出现在最慢的输出之后。

如果你希望并行执行两个或更多的任务，你必须像在`parallel`中一样使用`await Promise.all([job1(), job2()])`。

#### async/await 和 Promise/then 对比以及错误处理

大多数 async 函数也可以使用 Promises 编写。但是，在错误处理方面，async 函数更容易捕获异常错误

上面例子中的`concurrentStart`函数和`concurrentPromise`函数在功能上都是等效的。在`concurrentStart`函数中，如果任一`await`ed 调用失败，它将自动捕获异常，async 函数执行中断，并通过隐式返回 Promise 将错误传递给调用者。

在 Promise 例子中这种情况同样会发生，该函数必须负责返回一个捕获函数完成的`Promise`。在`concurrentPromise`函数中，这意味着它从`Promise.all([]).then()`返回一个 Promise。事实上，在此示例的先前版本忘记了这样做！

但是，async 函数仍有可能错误地忽略错误。以 `parallel` async 函数为例。如果它没有等待 `await`（或返回）`Promise.all([])` 调用的结果，则不会传播任何错误。虽然 `parallelPromise` 函数示例看起来很简单，但它根本不会处理错误！这样做需要一个类似于 `return Promise.all([])` 处理方式。

### 使用 async 函数重写 promise 链

返回 {{jsxref("Promise")}}的 API 将会产生一个 promise 链，它将函数肢解成许多部分。例如下面的代码：

```js
function getProcessedData(url) {
  return downloadData(url) // 返回一个 promise 对象
    .catch((e) => {
      return downloadFallbackData(url); // 返回一个 promise 对象
    })
    .then((v) => {
      return processDataInWorker(v); // 返回一个 promise 对象
    });
}
```

可以重写为单个 async 函数：

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

注意，在上述示例中，`return` 语句中没有 `await` 运算符，因为 `async function` 的返回值将被隐式地传递给 {{jsxref("Promise.resolve")}}。

返回值隐式地传递给 {{jsxref("Promise.resolve")}}，并不意味着 `return await promiseValue;` 和 `return promiseValue;` 在功能上相同。

看下下面重写的上面代码，在 `processDataInWorker` 抛出异常时返回了 null：

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  try {
    return await processDataInWorker(v); // 注意 `return await` 和单独 `return` 的比较
  } catch (e) {
    return null;
  }
}
```

简单地写上`return processDataInworker(v);` 将导致在 `processDataInWorker(v)` 出错时 function 返回值为{{jsxref("Promise")}}而不是返回 `null`。`return foo;` 和 `return await foo;`，有一些细微的差异：`return foo;`不管`foo`是 promise 还是 rejects 都将会直接返回`foo`。相反地，如果`foo`是一个{{jsxref("Promise")}}，`return await foo;`将等待`foo`执行 (resolve) 或拒绝 (reject)，如果是拒绝，将会在返回前抛出异常。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("AsyncFunction")}} object
- {{jsxref("Operators/await", "await")}}
- ["Decorating Async Javascript Functions" on "innolitics.com"](http://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/)
