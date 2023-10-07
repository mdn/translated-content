---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
---

{{JSRef}}

**`Promise.race()`** 静态方法接受一个 promise 可迭代对象作为输入，并返回一个 {{jsxref("Promise")}}。这个返回的 promise 会随着第一个 promise 的敲定而敲定。

{{EmbedInteractiveExample("pages/js/promise-race.html", "taller")}}

## 语法

```js-nolint
Promise.race(iterable)
```

### 参数

- `iterable`
  - : 一个 promise [可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)（例如{{jsxref("Array", "数组", "", 1)}}）。

### 返回值

一个 {{jsxref("Promise")}}，会以 `iterable` 中第一个敲定的 promise 的状态**异步敲定**。换句话说，如果第一个敲定的 promise 被兑现，那么返回的 promise 也会被兑现；如果第一个敲定的 promise 被拒绝，那么返回的 promise 也会被拒绝。如果传入的 `iterable` 为空，返回的 promise 就会一直保持待定状态。如果传入的 `iterable` 非空但其中没有任何一个 promise 是待定状态，返回的 promise 仍会异步敲定（而不是同步敲定）。

## 描述

`Promise.race()` 方法是 [Promise 并发](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_并发)方法之一。当你想要第一个异步任务完成时，但不关心它的最终状态（即它既可以成功也可以失败）时，它就非常有用。

如果可迭代对象中包含一个或多个非 promise 值和/或已敲定的 promise，则 `Promise.race()` 将以可迭代对象中找到的第一个此类值敲定。

## 示例

### 使用 Promise.race()

这个例子展示了如何使用 `Promise.race()` 来比较多个使用 [`setTimeout()`](/zh-CN/docs/Web/API/setTimeout) 实现的计时器。计时时间最短的计时器总是赢得竞态，并成为返回的 promise 状态。

```js
function sleep(time, value, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "兑现") {
        return resolve(value);
      } else {
        return reject(new Error(value));
      }
    }, time);
  });
}

const p1 = sleep(500, "一", "兑现");
const p2 = sleep(100, "二", "兑现");

Promise.race([p1, p2]).then((value) => {
  console.log(value); // “二”
  // 两个都会兑现，但 p2 更快
});

const p3 = sleep(100, "三", "兑现");
const p4 = sleep(500, "四", "拒绝");

Promise.race([p3, p4]).then(
  (value) => {
    console.log(value); // “三”
    // p3 更快，所以它兑现
  },
  (error) => {
    // 不会被调用
  },
);

const p5 = sleep(500, "五", "兑现");
const p6 = sleep(100, "六", "拒绝");

Promise.race([p5, p6]).then(
  (value) => {
    // 不会被调用
  },
  (error) => {
    console.error(error.message); // “六”
    // p6 更快，所以它拒绝
  },
);
```

### Promise.race 的异步性

以下示例演示了 `Promise.race` 的异步性。与其他 promise 并发方法不同，`Promise.race` 总是异步的：即使 `iterable` 为空，它也永远不会同步地完成。

```js
// 传入一个已经解决的 Promise 数组，以尽快触发 Promise.race。
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.race(resolvedPromisesArray);
// 立即打印 p 的值
console.log(p);

// 使用 setTimeout，我们可以在堆栈为空后执行代码
setTimeout(() => {
  console.log("堆栈现在为空");
  console.log(p);
});

// 按顺序打印：
// Promise { <state>: "pending" }
// 堆栈现在为空
// Promise { <state>: "fulfilled", <value>: 33 }
```

一个空的可迭代对象会导致返回的 Promise 一直处于待定状态：

```js
const foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(() => {
  console.log("堆栈现在为空");
  console.log(foreverPendingPromise);
});

// 按顺序打印：
// Promise { <state>: "pending" }
// 堆栈现在为空
// Promise { <state>: "pending" }
```

如果可迭代对象包含一个或多个非 Promise 值和/或一个已经敲定的 Promise，则 `Promise.race` 会以数组中找到的第一个这样的值敲定：

```js
const foreverPendingPromise = Promise.race([]);
const alreadyFulfilledProm = Promise.resolve(100);

const arr = [foreverPendingPromise, alreadyFulfilledProm, "非 Promise 值"];
const arr2 = [foreverPendingPromise, "非 Promise 值", Promise.resolve(100)];
const p = Promise.race(arr);
const p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("堆栈现在为空");
  console.log(p);
  console.log(p2);
});

// 按顺序打印：
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// 堆栈现在为空
// Promise { <state>: "fulfilled", <value>: 100 }
// Promise { <state>: "fulfilled", <value>: "非 Promise 值" }
```

### 使用 Promise.race() 实现请求超时

你可以使用一个定时器来与一个可能持续很长时间的请求进行竞争，以便超出时间限制时，返回的 Promise 自动拒绝。

```js
const data = Promise.race([
  fetch("/api"),
  new Promise((resolve, reject) => {
    // 5 秒后拒绝
    setTimeout(() => reject(new Error("请求超时")), 5000);
  }),
])
  .then((res) => res.json())
  .catch((err) => displayError(err));
```

如果 `data` Promise 被兑现，它将包含从 `/api` 获取的数据；否则，如果 `fetch` 保持待定状态并输给 `setTimeout` 定时器，这个 Promise 将在 5 秒后被拒绝。

### 使用 Promise.race() 检测 Promise 的状态

由于 `Promise.race()` 解决的可迭代对象中第一个非待定状态的 Promise，我们可以检查一个 Promise 的状态，包括它是否处于待定状态。这个示例是从 [`promise-status-async`](https://github.com/kudla/promise-status-async/blob/master/lib/promiseState.js) 改编而来的。

```js
function promiseState(promise) {
  const pendingState = { status: "待定" };

  return Promise.race([promise, pendingState]).then(
    (value) => (value === pendingState ? value : { status: "已兑现", value }),
    (reason) => ({ status: "已拒绝", reason }),
  );
}
```

在这个函数中，如果 `promise` 是待定状态，非 Promise 类型的第二个值 `pendingState` 将成为这个 `race` 的结果；否则，如果 `promise` 已经敲定，我们可以通过 `onFulfilled` 和 `onRejected` 处理函数来知道它的状态。例如：

```js
const p1 = new Promise((res) => setTimeout(() => res(100), 100));
const p2 = new Promise((res) => setTimeout(() => res(200), 200));
const p3 = new Promise((res, rej) => setTimeout(() => rej(300), 100));

async function getStates() {
  console.log(await promiseState(p1));
  console.log(await promiseState(p2));
  console.log(await promiseState(p3));
}

console.log("开始状态：");
getStates();
setTimeout(() => {
  console.log("等待 100ms 后：");
  getStates();
}, 100);

// 打印：
// 开始状态：
// { status: '待定' }
// { status: '待定' }
// { status: '待定' }
// 等待 100ms 后：
// { status: '已兑现', value: 100 }
// { status: '待定' }
// { status: '已拒绝', reason: 300 }
```

> **备注：** `promiseState` 函数仍然是异步执行的，因为没有办法同步地获取 Promise 的值（即不使用 `then()` 或 `await`），即使它已经敲定。但是，`promiseState()` 总是在一次事件循环内就会完成，并且实际上从不等待任何 Promise 的敲定。

### 与 Promise.any() 的比较

`Promise.race` 方法以可迭代对象中第一个敲定的 {{jsxref("Promise")}} 作为敲定值。

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "一");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "二");
});

Promise.race([promise1, promise2])
  .then((value) => {
    console.log("成功，值为：", value);
  })
  .catch((reason) => {
    // 只有 promise1 成功兑现，但 promise2 更快
    console.error("失败，原因为：", reason);
  });
// 失败，原因为：二
```

{{jsxref("Promise.any")}} 方法以可迭代对象中第一个被兑现的 {{jsxref("Promise")}} 作为兑现值。

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "一");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "二");
});

Promise.any([promise1, promise2])
  .then((value) => {
    // 只有 promise1 成功兑现，即使 promise2 更快敲定
    console.log("成功，值为：", value);
  })
  .catch((reason) => {
    console.error("失败，原因为：", reason);
  });
// 成功，值为：一
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.any()")}}
