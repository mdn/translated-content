---
title: Promise.any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
---

{{JSRef}}

`Promise.any()` 接收一个由 {{JSxRef("Promise")}} 所组成的可迭代对象，该方法会返回一个新的 `promise`，一旦可迭代对象内的任意一个 `promise` 变成了兑现状态，那么由该方法所返回的 `promise` 就会变成兑现状态，并且它的兑现值就是可迭代对象内的首先兑现的 `promise` 的兑现值。如果可迭代对象内的 `promise` 最终都没有兑现（即所有 `promise` 都被拒绝了），那么该方法所返回的 `promise` 就会变成拒绝状态，并且它的拒因会是一个 {{JSxRef("Global_Objects/AggregateError", "AggregateError")}} 实例，这是 {{JSxRef("Error")}} 的子类，用于把单一的错误集合在一起。

> **警告：** `Promise.any()` 方法依然是实验性的，尚未被所有的浏览器完全支持。它当前处于 [TC39 第四阶段草案（Stage 4）](https://github.com/tc39/proposal-promise-any)

## 语法

```plain
Promise.any(iterable);
```

### 参数

- `iterable`
  - : 一个[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)的对象，例如 [Array](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)。

### 返回值

- 如果传入了一个空的可迭代对象，那么就会返回一个已经被拒的 `promise`
- 如果传入了一个不含有 `promise` 的可迭代对象，那么就会返回一个异步兑现的 `promise`
- 其余情况下都会返回一个处于等待状态的 `promise`。如果可迭代对象中的任意一个 `promise` 兑现了，那么这个处于等待状态的 `promise` 就会异步地（调用栈为空时）切换至兑现状态。如果可迭代对象中的所有 `promise` 都被拒绝了，那么这个处于等待状态的 `promise` 就会异步地切换至被拒状态。

## 说明

该方法用于获取首个兑现的 `promise` 的值。只要有一个 `promise` 兑现了，那么此方法就会提前结束，而不会继续等待其他的 `promise` 全部敲定。

不像 {{JSxRef("Promise.all()")}} 会返回一组兑现值那样，我们只能得到一个兑现值（假设至少有一个 `promise` 兑现）。当我们只需要一个 `promise` 兑现，而不关心是哪一个兑现时此方法很有用的。

同时，也不像 {{JSxRef("Promise.race()")}} 总是返回第一个敲定值（兑现或拒绝）那样，这个方法返回的是第一个*兑现的*值。这个方法将会忽略掉所有的被拒绝的 `promise`，直到第一个 `promise` 兑现。

### 兑现（Fulfillment）

该方法所返回的 `promise` 会以可迭代对象内首个兑现的 `promise` 的兑现值来作为它自己的兑现值，或者会以可迭代对象内首个非 `promise` 值来作为它自己的兑现值，该方法不会关心其他的 `promise` 是兑现了还是被拒了。

- 如果传入的可迭代对象是非空的，那么当可迭代对象内的任意一个 `promise` 兑现后，或者当可迭代对象内存在非 `promise` 值时，该方法所返回的 `promise` 都会异步的变成兑现状态。

### 拒绝（Rejection）

如果可迭代对象内所有的 `promises` 都被拒绝了，那么该方法所返回的 `promise` 就会异步的切换至被拒状态，并用一个 {{JSxRef("AggregateError")}}（继承自 {{JSxRef("Error")}}）实例来作为它的拒因。它包含一个 `errors` 属性，该属性是一个用于存储拒因的数组。

- 如果传入了一个空的可迭代数组，那么该方法就会返回一个已经被拒 `promise`，其拒因是一个 `AggregateError` 实例，该实例的 `errors` 属性会是一个空数组。

## 示例

### First to fulfil

如果可迭代数组内的任意一个 `promise` 兑现了，那么该方法所返回的 `promise` 也会切换至兑现状态，哪怕首个敲定的 `promise` 是被拒的。不同的是，{{jsxref("Promise.race()")}} 所返回的 `promise` 的状态会跟随首个敲定的 `promise` 的状态。

```js
const pErr = new Promise((resolve, reject) => {
  reject("总是失败");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "最终完成");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "很快完成");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
  // pFast fulfils first
})
// 期望输出："很快完成"
```

### Rejections with AggregateError

如果没有 `promise` 被兑现，那么 `Promise.any()` 所返回的 `promise` 就会切换至被拒状态，并以 {{jsxref("AggregateError")}} 实例来作为拒因。

```js
const pErr = new Promise((resolve, reject) => {
  reject('总是失败');
});

Promise.any([pErr]).catch((err) => {
  console.log(err);
})
// 期望输出："AggregateError: No Promise in Promise.any was resolved"
```

### 显示第一张已加载的图片

在这个例子，我们有一个获取图片并返回 blob 的函数，我们使用 `Promise.any()` 来获取一些图片并显示第一张有效的图片（即最先 resolved 的那个 promise）。

```js
function fetchAndDecode(url) {
  return fetch(url).then(response => {
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      return response.blob();
    }
  })
}

let coffee = fetchAndDecode('coffee.jpg');
let tea = fetchAndDecode('tea.jpg');

Promise.any([coffee, tea]).then(value => {
  let objectURL = URL.createObjectURL(value);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e => {
  console.log(e.message);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{JSxRef("Promise")}}
- {{JSxRef("Promise.all()")}}
- {{JSxRef("Promise.race()")}}
