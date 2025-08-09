---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
l10n:
  sourceCommit: b15c892914bbaa51a8c8f288426ebc6d5c1d57f8
---

**`async function`** 声明创建一个{{Glossary("binding", "绑定")}}到给定名称的新异步函数。函数体内允许使用 `await` 关键字，这使得我们可以更简洁地编写基于 promise 的异步代码，并且避免了显式地配置 promise 链的需要。

你也可以使用 [`async function` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function)来定义异步函数。

{{InteractiveExample("JavaScript Demo: Statement - Async", "taller")}}

```js interactive-example
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();
```

## 语法

```js-nolint
async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> `async` 和 `function` 之间不能有行终止符，否则 JavaScript 会[自动插入](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#自动分号补全)分号，导致 `async` 成为标识符，而剩余部分成为 `function` 声明。

### 参数

- `name`
  - : 函数名称。
- `param` {{optional_inline}}
  - : 函数的形参名称。有关参数的语法，请参阅[函数参数](/zh-CN/docs/Web/JavaScript/Guide/Functions#函数参数)。
- `statements` {{optional_inline}}
  - : 包含函数主体的表达式。可以使用 `await` 机制。

## 描述

`async function` 声明创建一个 {{jsxref("AsyncFunction")}} 对象。每次调用异步函数时，都会返回一个新的 {{jsxref("Promise")}} 对象，该对象将会被解决为异步函数的返回值，或者被拒绝为异步函数中未捕获的异常。

异步函数可以包含零个或者多个 {{jsxref("Operators/await", "await")}} 表达式。await 表达式通过暂停执行使返回 promise 的函数表现得像同步函数一样，直到返回的 promise 被兑现或拒绝。返回的 promise 的解决值会被当作该 await 表达式的返回值。使用 `async`/`await` 关键字就可以使用普通的 `try`/`catch` 代码块捕获异步代码中的错误。

> [!NOTE]
> `await` 关键字只在常规 JavaScript 代码中的异步函数内有效。如果你在异步函数体之外使用它，则会抛出 {{jsxref("SyntaxError")}}。
>
> `await` 可以单独与 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)一起使用。

> [!NOTE]
> `async`/`await` 的目的在于简化使用基于 promise 的 API 时所需的语法。`async`/`await` 的行为就好像搭配使用了[生成器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)和 promise。

异步函数总是返回一个 promise。如果一个异步函数的返回值看起来不是 promise，那么它将会被隐式地包装在一个 promise 中。

例如，请看以下代码：

```js
async function foo() {
  return 1;
}
```

类似于：

```js
function foo() {
  return Promise.resolve(1);
}
```

> [!NOTE]
>
> 即使异步函数的返回值看起来像是被包装在了一个 `Promise.resolve` 中，但它们不是等价的。
>
> 如果给定的值是一个 promise，异步函数会返回一个不同的*引用*，而 `Promise.resolve` 会返回相同的引用，
>
> 当你想要检查一个 promise 和一个异步函数的返回值是否等价时，这可能是一个麻烦。
>
> ```js
> const p = new Promise((res, rej) => {
>   res(1);
> });
>
> async function asyncReturn() {
>   return p;
> }
>
> function basicReturn() {
>   return Promise.resolve(p);
> }
>
> console.log(p === basicReturn()); // true
> console.log(p === asyncReturn()); // false
> ```

异步函数的函数体可以被看作是由零个或者多个 await 表达式分割开来的。从顶层代码直到（并包括）第一个 await 表达式（如果有的话）都是同步运行的。因此，不包含 await 表达式的异步函数是同步运行的。然而，如果函数体内包含 await 表达式，则异步函数就一定会异步完成。

例如：

```js
async function foo() {
  await 1;
}
```

等价于：

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}
```

每个 await 表达式之后的代码可以被认为存在于 `.then` 回调中。通过这种方式，可以通过函数的每个可重入步骤来逐步构建 promise 链。而返回值构成了链中的最后一个环。

在接下来的示例中，我们依次 await 两个 promise，整个 `foo` 函数的执行将会被分为三个阶段。

1. `foo` 函数的第一行将会同步执行，其中 await 配置了待定的 promise。然后 `foo` 的进程将被暂停，并将控制权交还给调用 `foo` 的函数。
2. 一段时间后，当第一个 promise 被兑现或拒绝的时候，控制权将重新回到 `foo` 内。第一个 promise 的兑现结果（如果没有被拒绝的话）将作为 await 表达式的返回值。在这里 `1` 被赋值给 `result1`。程序继续执行，并计算第二个 await 表达式。同样的，`foo` 的进程将被暂停，并交出控制权。
3. 一段时间后，当第二个 promise 被兑现或拒绝的时候，控制权将重新回到 `foo`。第二个 promise 的兑现结果将作为第二个 await 表达式的返回值。在这里 `2` 被赋值给 `result2`。程序继续执行到返回表达式（如果有的话）。默认的返回值 `undefined` 将作为当前 promise 的兑现值被返回。

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

注意：promise 链不是一次就构建好的，相反，promise 链是随着控制权依次在异步函数中交出并返回而分阶段构建的。因此在处理并发异步操作时，我们必须小心错误处理。

例如，在下面代码中，即使在 promise 链中进一步配置了 `.catch` 处理方法，也会抛出一个未处理的 promise 被拒绝的错误。这是因为 `p2` 直到控制从 `p1` 返回后才会连接到 promise 链。

```js
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
  const results = [await p1, await p2]; // 不要这么写！请使用 Promise.all 或者 Promise.allSettled。
}
foo().catch(() => {}); // 尝试捕捉所有的错误...
```

`async function` 声明的行为类似于 {{jsxref("Statements/function", "function")}} 声明，它会被[提升](/zh-CN/docs/Glossary/Hoisting)到其作用域的顶部，并且可以在其作用域的任何位置被调用，并且只能在其他上下文中被重新声明。

## 示例

### 异步函数和执行顺序

```js
function resolveAfter2Seconds() {
  console.log("开始较慢兑现的 promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("较慢兑现的 promise 完成了");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("开始较快兑现的 promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("较快兑现的 promise 完成了");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("== sequentialStart 开始 ==");

  // 1. 启动一个计时器，并在计时器完成后打印结果
  const slow = resolveAfter2Seconds();
  console.log(await slow);

  // 2. 等待前一个计时器完成后，启动下一个计时器
  const fast = resolveAfter1Second();
  console.log(await fast);

  console.log("== sequentialStart 结束 ==");
}

async function sequentialWait() {
  console.log("== sequentialWait 开始 ==");

  // 1. 启动两个计时器，互不等待
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  // 2. 等待较慢的计时器完成后，打印结果
  console.log(await slow);
  // 3. 等待较快的计时器完成后，打印结果
  console.log(await fast);

  console.log("== sequentialWait 结束 ==");
}

async function concurrent1() {
  console.log("== concurrent1 开始 ==");

  // 1. 并发启动两个计时器，并等待它们完成
  const results = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second(),
  ]);
  // 2. 同时打印两个计时器的结果
  console.log(results[0]);
  console.log(results[1]);

  console.log("== concurrent1 完成 ==");
}

async function concurrent2() {
  console.log("== concurrent2 开始 ==");

  // 1. 并发启动两个计时器，并在其中任意一个完成后立即打印对应结果
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
  console.log("== concurrent2 结束 ==");
}

sequentialStart(); // 2 秒后，打印“slow”，然后再过 1 秒，打印“fast”

// 等待上面的代码执行完毕
setTimeout(sequentialWait, 4000); // 2 秒后，打印“slow”，然后打印“fast”

// 再次等待
setTimeout(concurrent1, 7000); // 跟 sequentialWait 一样

// 再次等待
setTimeout(concurrent2, 10000); // 1 秒后，打印“fast”，然后过 1 秒，打印“slow”
```

#### await 和并发执行

在 `sequentialStart` 中，程序执行第一个 `await` 时暂停 2 秒，然后又为第二个 `await` 暂停了 1 秒。直到第一个计时器结束后，第二个计时器才被创建，因此程序需要 3 秒执行完毕。

在 `sequentialWait` 中，两个计时器都被创建并用 `await` 进行等待。这两个计时器并行运行，这意味着代码运行时间缩短到 2 秒，而不是 3 秒，即较慢的计时器的时间。然而，`await` 调用仍旧是顺序执行的，这意味着第二个 `await` 会等待第一个执行完。在这个例子中，较快的计时器的结果会在较慢的计时器之后被处理。

在 `concurrentStart` 中，两个计时器被同时创建，然后执行 `await`。这两个计时器同时运行，这意味着程序完成运行只需要 2 秒，而不是 3 秒，即较慢的计时器的时间。

如果你希望在并发执行的两个或多个任务完成后安全地执行其他任务，那么在这些任务开始前，你必须等待对 {{jsxref("Promise.all()")}} 或 {{jsxref("Promise.allSettled()")}} 的调用。

> [!WARNING]
> 函数 `sequentialWait` 和 `concurrent1` 在功能上并非等价的。
>
> 在 `sequentialWait` 中，如果较快的 promise 先于较慢的 promise 兑现前拒绝，则会出现未处理的 promise 拒绝错误，无论调用者是否配置了 catch 子句。
>
> 在 `concurrent1` 中，`Promise.all` 一次性将 promise 链连接起来，这意味着操作将会立即失败，无论这些 promise 的拒绝顺序如何，错误都将在配置的 promise 链中发生，并可以按照正常的方式捕获。

### 使用异步函数重写 promise 链

返回 {{jsxref("Promise")}}的 API 将会产生一个 promise 链，它将函数肢解成许多部分。例如下面的代码：

```js
function getProcessedData(url) {
  return downloadData(url) // 返回一个 promise
    .catch((e) => downloadFallbackData(url)) // 返回一个 promise
    .then((v) => processDataInWorker(v)); // 返回一个 promise
}
```

可以使用单个异步函数重写，如下所示：

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

或者，你可以使用 `catch()` 链式调用 promise：

```js
async function getProcessedData(url) {
  const v = await downloadData(url).catch((e) => downloadFallbackData(url));
  return processDataInWorker(v);
}
```

以上两个重写版本中，请注意在 `return` 关键字之后没有 `await` 语句，尽管这也是有效的：异步函数的返回值隐式地被包装在 {{jsxref("Promise.resolve")}} 中——如果它本身不是一个 promise 的话（正如上面的示例所示）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)指南
- [promise 使用](/zh-CN/docs/Web/JavaScript/Guide/Using_promises)指南
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncFunction")}}
- [`async function` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Operators/await", "await")}}
- {{jsxref("Promise")}}
- [装饰 async JavaScript 函数](https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/)，发表于 innolitics.com（2016）
