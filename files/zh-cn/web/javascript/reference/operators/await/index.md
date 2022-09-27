---
title: await
slug: Web/JavaScript/Reference/Operators/await
---

{{jsSidebar("Operators")}}

`await` 操作符用于等待一个{{jsxref("Promise")}} 对象。它只能在异步函数 {{jsxref("Statements/async_function", "async function")}} 中使用。

## 语法

```plain
[返回值] = await 表达式;
```

- 表达式
  - : 一个 {{jsxref("Promise")}} 对象或者任何要等待的值。
- 返回值
  - : 返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。

## 描述

await 表达式会暂停当前 {{jsxref("Statements/async_function", "async function")}} 的执行，等待 Promise 处理完成。若 Promise 正常处理 (fulfilled)，其回调的 resolve 函数参数作为 await 表达式的值，继续执行 {{jsxref("Statements/async_function", "async function")}}。

若 Promise 处理异常 (rejected)，await 表达式会把 Promise 的异常原因抛出。

另外，如果 await 操作符后的表达式的值不是一个 Promise，则返回该值本身。

## 例子

如果一个 Promise 被传递给一个 await 操作符，await 将等待 Promise 正常处理完成并返回其处理结果。

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
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

如果该值不是一个 Promise，await 会把该值转换为已正常处理的 Promise，然后等待其处理结果。

```js
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();
```

如果 Promise 处理异常，则异常值被抛出。

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看更多

- {{jsxref("Statements/async_function", "async 函数")}}
- {{jsxref("Operators/async_function", "async 函数表达式")}}
- {{jsxref("AsyncFunction")}} object
