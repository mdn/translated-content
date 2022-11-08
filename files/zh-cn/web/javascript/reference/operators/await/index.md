---
title: await
slug: Web/JavaScript/Reference/Operators/await
---

{{jsSidebar("Operators")}}

`await` 操作符用于等待一个 {{jsxref("Promise")}} 兑现并获取它兑现之后的值。它只能在异步函数（{{jsxref("Statements/async_function", "async function")}}）或者[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)顶层中使用。

## 语法

```js-nolint
await 表达式;
```

### 参数

- `表达式`
  - 要等待的 {{jsxref("Promise")}} 实例
  - Thenable 对象
  - 任意类型的值。

### 返回值

返回从 `Promise` 实例或 Thenable 对象取得的处理结果。如果等待的值不符合thenable，则返回该值本身。

### 异常

`reject` 的原因 (`reason`) 会被作为异常抛出。

## 描述

`await` 通常被用于从一个 {{jsxref("Promise")}} 中取出结果。
使用 `await` 总会暂停当前 {{jsxref("Statements/async_function", "async function")}} 的执行，在该 `Promise` 完成 (fulfilled 或 rejected) 后继续执行。
函数的执行恢复 (resume) 时，`await` 的返回值或抛出的异常将会是该 `Promise` 的处理结果。
- 若该 `Promise` 状态为 fulfilled（正常处理)，其回调的 `resolve` 的参数将作为 `await` 表达式的值，继续执行 {{jsxref("Statements/async_function", "async function")}}。
- 若该 `Promise` 状态为 rejected（出现异常)，`await` 表达式会把 reject 的原因抛出。

`await` 总会同步求表达式的值并处理，处理的行为与 {{jsxref("Promise.resolve()")}} 一致，不属于 `Promise` 实例的值全都会被隐式地包装成 `Promise` 实例。
- 值若是原生 `Promise` 实例，会被直接用于等待。
- 值若是 Thenable 对象（包括非原生的 `Promise` 实例），会被包装为 `Promise` 实例，以保证其行为符合原生 {{jsxref("Promise")}}。
- 值若不是 Thenable 对象，会创建一个已经兑现的 {{jsxref("Promise")}} 实例，其结果就是表达式的值。

## 示例

### 等待 Promise 的结果

当一个 `Promise` 被传递给 `await` 操作符，`await` 将等待该 `Promise` 兑现完成并返回其处理结果。

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
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

若表达式的值既不是 {{jsxref("Promise")}} 实例，又不是 Thenable 对象，`await` 会把该值转换为已兑现的 `Promise`，然后返回其结果。

```js
async function f2() {
  const y = await 20;
  console.log(y); // 20
}
f2();
```

如果该 `Promise` 的状态为 rejected（遇到异常），则抛出。

```js
async function f3() {
  try {
    let z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();
```

也可以用 `catch()` 提前处理异常。
请注意！该值必须是一个原生 `Promise`，否则可能出现不符合原生 {{jsxref("Promise")}} 的行为。

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
  return "default response";
});
// response will be "default response" if the promise is rejected
```

### 等待非 Promise 的表达式的结果

#### 等待正常处理的 Thenable 对象

```js
async function f() {
  const thenable = {
    then(resolve, _reject) {
      resolve("resolved!");
    },
  };
  console.log(await thenable); // "resolved!"
}

f();
```

#### 等待遇到异常的 Thenable 对象

```js
async function f() {
  const thenable = {
    then(resolve, reject) {
      reject(new Error("rejected!"));
    },
  };
  await thenable; // Throws Error: rejected!
}

f();
```

#### 等待其它类型的值

如果表达式的值不是 {{jsxref("Promise")}} 实例，也不是 Thenable 对象，函数恢复执行时 `await` 将直接返回该值。

```js
async function f3() {
  const y = await 20;
  console.log(y); // 20

  const obj = {};
  console.log((await obj) === obj); // true
}

f3();
```

### await对执行过程的影响

当函数执行到 `await` 时，被等待的表达式会立即（同步）被求值，并确定一个原生 {{jsxref("Promise")}}，然后函数的执行会暂停。
当该 `Promise` 完成 (fulfilled 或 rejected) 时，一个**新**的微任务(microtask)会被 push 进微任务队列 (microtask queue)，该微任务被执行时，函数执行会恢复。

若 {{jsxref("Statements/async_function", "async function")}} 到结束都没有执行任何 `await`，
整个函数都将被同步执行：

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

执行到 `await` 时，后面的代码就会整体被安排进一个新的微任务，函数的执行此后变为异步执行。
通常情况下，入队顺序就是执行顺序：

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

虽然这里的 `then()` 看起来很多余，其中的代码完全可以被合并到构造器的回调里，但不管该 `Promise` 的状态如何，`then()` 的回调**总会被异步执行**，`await` 的行为也一样。

因此，只要情况不是必须或可能需要等待 `Promise` 的结果，就应该避免使用 `await`。
其它微任务能在函数执行恢复之前执行：

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看更多

- {{jsxref("Statements/async_function", "async 函数")}}
- {{jsxref("Operators/async_function", "async 函数表达式")}}
- {{jsxref("AsyncFunction")}} 对象
- v8.dev 上的 [Top level await](https://v8.dev/features/top-level-await)
