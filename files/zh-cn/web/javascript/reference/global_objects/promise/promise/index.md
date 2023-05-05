---
title: Promise() 构造器
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
---

{{JSRef}}

**`Promise`** 构造器主要用于包装不支持 promise（返回值不是 `Promise`）的函数。

{{EmbedInteractiveExample("pages/js/promise-constructor.html")}}

## 语法

```plain
new Promise(executor)
```

### 参数

- `executor`

  - : 该函数将在构造这个新`Promise`对象过程中，被构造函数执行。该`executor`是一段将输出与 promise 联系起来的自定义代码。`executor`的函数签名应为：

    ```js
    function(resolutionFunc, rejectionFunc){
          // 通常是一些异步操作
        }

    ```

    `resolutionFunc`与`rejectionFunc`也是函数，可以使用任何名字。这两个函数的签名很简单：接受任何类型的单个参数。

    ```js
            resolutionFunc(value) // 当被敲定时调用
            rejectionFunc(reason) // 当被拒绝时调用

    ```

    当该 promise 动态插入[promise 链](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise%E7%9A%84%E9%93%BE%E5%BC%8F%E8%B0%83%E7%94%A8)的情况下，该 `resolutionFunc` 的 `value` 参数可能是另一个 promise 对象。

    关于 `executor`，需理解以下几点：

    - 该 `executor` 的返回值将被忽略。
    - 如果在该 `executor` 中抛出一个错误，该 promise 将被拒绝。

    因此，`executor` 的代码生效的原理如下：

    - 在构造函数生成新 `Promise` 对象时，构造函数也生成了一对相关的函数 `resolutionFunc` 与 `rejectionFunc`。他们被绑定在了 `Promise` 对象上。
    - `executor` 内的代码有机会执行一些操作，然后通过分别调用 `resolutionFunc` 或者 `rejectionFunc`，反应这些操作的结果（如果这些结果不是另一个 `Promise` 对象的话），要么为已敲定（resolved），要么为已拒绝（rejected）。
    - 换句话说，`executor`中的代码通过 `resolutionFunc` 或 `rejectionFunc` 产生的副作用进行通信。这里的副作用是指 `Promise` 对象变成已敲定（resolved），要么为已拒绝（rejected）。

    综上所述，对典型流程进行总结：

    1. `executor` 内的操作是异步的，并且提供一个回调（callback）。
    2. 该回调在 `executor` 内定义。
    3. 该回调通过调用 `resolutionFunc` 终止。
    4. `resolutionFunc` 的调用包含一个 `value` 参数。
    5. 该`value` 被返回给绑定的 `Promise` 对象上。
    6. 该`Promise` 对象（异步地）调用任何相关的 `.then(handleResolved)`。
    7. `.then(handleResolved)` 收到的 `value` 作为入参被传递给了 `handleResolved` 的调用。（参见[Promise 的链式调用](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise%E7%9A%84%E9%93%BE%E5%BC%8F%E8%B0%83%E7%94%A8)）

### 返回值

当通过 `new` 调用时，`Promise` 构造函数返回一个 promise 对象。当 `resolutionFunc` 或者 `rejectionFunc` 被调用时，该 promise 对象将会“被敲定”。注意，如果您调用 `resolutionFunc` 或者 `rejectionFunc` 时将另一个 Promise 对象作为参数，您可以称其“被敲定（resolved）”，但仍不能称其“被解决（settled）”。

## 示例

我们通过 `new` 关键字和 `Promise` 构造器创建它的对象。这个构造器接受一个名为 "executor function" 的函数。这个函数应当接受两个函数参数。当异步任务成功时，第一个函数（`resolve`）将被调用，并返回一个值代表成功。当其失败时，第二个函数（`reject`）将被调用，并返回失败原因（失败原因通常是一个 error 对象）。

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue)        // fulfilled
  // or
  //   reject("failure reason")  // rejected
});
```

为了提供一个拥有 promise 功能的函数，简单的返回一个 promise 即可：

```js
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onload = () => resolve(xhr.responseText)
    xhr.onerror = () => reject(xhr.statusText)
    xhr.send()
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using Promises](/zh-CN/docs/Web/JavaScript/Guide/Using_promises)
