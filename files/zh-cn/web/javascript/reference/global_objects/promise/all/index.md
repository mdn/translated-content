---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
---

{{JSRef}}

**`Promise.all()`** 静态方法接受一个 Promise 可迭代对象作为输入，并返回一个 {{jsxref("Promise")}}。当所有输入的 Promise 都被兑现时，返回的 Promise 也将被兑现（即使传入的是一个空的可迭代对象），并返回一个包含所有兑现值的数组。如果输入的任何 Promise 被拒绝，则返回的 Promise 将被拒绝，并带有第一个被拒绝的原因。

{{EmbedInteractiveExample("pages/js/promise-all.html")}}

## 语法

```js-nolint
Promise.all(iterable)
```

### 参数

- `iterable`
  - : 一个[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)，例如 {{jsxref("Array")}} 或 {{jsxref("String")}}。

### 返回值

一个 {{jsxref("Promise")}}，其状态为：

- **已兑现（already fulfilled）**，如果传入的 `iterable` 为空。
- **异步兑现（asynchronously fulfilled）**，如果给定的 `iterable` 中所有的 promise 都已兑现。兑现值是一个数组，其元素顺序与传入的 promise 一致，而非按照兑现的时间顺序排列。如果传入的 `iterable` 是一个非空但不包含待定的（pending）promise，则返回的 promise 依然是异步兑现，而非同步兑现。
- **异步拒绝（asynchronously rejected）**，如果给定的 `iterable` 中的任意 promise 被拒绝。拒绝原因是第一个拒绝的 promise 的拒绝原因。

## 描述

`Promise.all()` 方法是 [promise 并发](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_并发)方法之一。它可用于聚合多个 Promise 的结果。通常在有多个相关的异步任务并且整个代码依赖于这些任务成功完成时使用，我们希望在代码执行继续之前完成所有任务。

`Promise.all()` 方法会在**任何一个**输入的 Promise 被拒绝时立即拒绝。相比之下，{{jsxref("Promise.allSettled()")}} 方法返回的 Promise 会等待所有输入的 Promise 完成，不管其中是否有 Promise 被拒绝。如果你需要获取输入可迭代对象中每个 Promise 的最终结果，则应使用 `allSettled()` 方法。

## 示例

### 使用 Promise.all()

`Promise.all` 等待所有兑现（或第一个拒绝）的结果。

```js
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
```

如果 `iterable` 包含非 promise 值，这些值将被忽略，但仍包含在返回的 promise 数组值中（如果该 promise 得到了兑现）：

```js
// 所有的值都不是 Promise，因此返回的 Promise 将被兑现
const p = Promise.all([1, 2, 3]);
// 输入中唯一的 Promise 已经被兑现，因此返回的 Promise 将被兑现
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// 一个（也是唯一的一个）输入 Promise 被拒绝，因此返回的 Promise 将被拒绝
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// 使用 setTimeout，我们可以在队列为空后执行代码
setTimeout(() => {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// 打印：
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }
```

### Promise.all 的异步性和同步性

以下示例演示了在传递非空的 `iterable` 时 `Promise.all` 的异步性：

```js
// 传入一个已经 resolved 的 Promise 数组，以尽可能快地触发 Promise.all
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.all(resolvedPromisesArray);
// 立即打印 p 的值
console.log(p);

// 使用 setTimeout，我们可以在队列为空后执行代码
setTimeout(() => {
  console.log("队列现在为空");
  console.log(p);
});

// 按顺序打印：
// Promise { <state>: "pending" }
// 队列现在为空
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

如果 `Promise.all` 失败，也是一样的：

```js
const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
const p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(() => {
  console.log("队列现在为空");
  console.log(p);
});

// Logs:
// Promise { <state>: "pending" }
// 队列现在为空
// Promise { <state>: "rejected", <reason>: 44 }
```

只有当传递给 `Promise.all` 的 `iterable` 为空时，`Promise.all` 才会同步解决。

```js
const p = Promise.all([]); // 将会立即解决
const p2 = Promise.all([1337, "hi"]); // 非 promise 值将被忽略，但求值是异步进行的
console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("队列现在为空");
  console.log(p2);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// 队列现在为空
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

### 将 Promise.all() 与异步函数一起使用

在 [async 函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)中，“过度 await”代码非常普遍。例如，给定以下函数：

```js
function promptForDishChoice() {
  return new Promise((resolve, reject) => {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
<form method="dialog">
  <p>What would you like to eat?</p>
  <select>
    <option value="pizza">Pizza</option>
    <option value="pasta">Pasta</option>
    <option value="salad">Salad</option>
  </select>
  <menu>
    <li><button value="cancel">Cancel</button></li>
    <li><button type="submit" value="ok">OK</button></li>
  </menu>
</form>
    `;
    dialog.addEventListener("close", () => {
      if (dialog.returnValue === "ok") {
        resolve(dialog.querySelector("select").value);
      } else {
        reject(new Error("User cancelled dialog"));
      }
    });
    document.body.appendChild(dialog);
    dialog.showModal();
  });
}

async function fetchPrices() {
  const response = await fetch("/prices");
  return await response.json();
}
```

你可能会写一个像下面这样的函数：

```js example-bad
async function getPrice() {
  const choice = await promptForDishChoice();
  const prices = await fetchPrices();
  return prices[choice];
}
```

然而，请注意，`promptForDishChoice` 和 `fetchPrices` 的执行不依赖于彼此的结果。当用户选择他们的菜肴时，可以在后台获取价格，但是在上面的代码中，[`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await) 运算符会导致异步函数暂停，直到选择完成，然后再次暂停，直到获取到价格。我们可以使用 `Promise.all` 并发地运行它们，以便用户在结果给出之前不必等待获取价格：

```js example-good
async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice(),
    fetchPrices(),
  ]);
  return prices[choice];
}
```

`Promise.all` 在这里是[并发方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_并发)中的最佳选择，因为错误处理很直观——如果有任何一个 Promise 被拒绝，结果将不再可用，整个 `await` 表达式会抛出异常。

`Promise.all` 接受一个 Promise 可迭代对象，因此如果要使用它来并行执行多个异步函数，你需要调用这些异步函数并使用返回的 Promise。直接将函数传递给 `Promise.all` 是不起作用的，因为它们不是 Promise。

```js example-bad
async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice,
    fetchPrices,
  ]);
  // `choice` 和 `prices` 仍然是原始的异步函数；
  // Promise.all() 对非 Promise 不起作用
}
```

### Promise.all 的快速失败行为

`Promise.all` 在任意一个传入的 promise 失败时返回失败。例如，如果你传入四个超时后解决的 promise 和一个立即拒绝的 promise，那么 `Promise.all` 将立即被拒绝。

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("一"), 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("二"), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("三"), 3000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("四"), 4000);
});
const p5 = new Promise((resolve, reject) => {
  reject(new Error("拒绝"));
});

// 使用 .catch:
Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error.message);
  });

// 打印：
// "拒绝"
```

通过处理可能的拒绝，可以更改此行为：

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 延迟解决"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  reject(new Error("p2 立即拒绝"));
});

Promise.all([p1.catch((error) => error), p2.catch((error) => error)]).then(
  (values) => {
    console.log(values[0]); // "p1 延迟解决"
    console.error(values[1]); // "Error: p2 立即拒绝"
  },
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
