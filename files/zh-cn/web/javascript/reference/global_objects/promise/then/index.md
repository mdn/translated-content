---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
---

{{JSRef}}

**`then()`** 方法返回一个 {{domxref("Promise")}}。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。

{{EmbedInteractiveExample("pages/js/promise-then.html")}}

> **备注：** 如果忽略针对某个状态的回调函数参数，或者提供非函数 (nonfunction) 参数，那么 `then` 方法将会丢失关于该状态的回调函数信息，但是并不会产生错误。如果调用 `then` 的 `Promise` 的状态（fulfillment 或 rejection）发生改变，但是 `then` 中并没有关于这种状态的回调函数，那么 `then` 将创建一个没有经过回调函数处理的新 `Promise` 对象，这个新 `Promise` 只是简单地接受调用这个 `then` 的原 `Promise` 的终态作为它的终态。

## 语法

```plain
p.then(onFulfilled[, onRejected]);

p.then(value => {
  // fulfillment
}, reason => {
  // rejection
});
```

### 参数

- `onFulfilled` {{optional_inline}}
  - : 当 Promise 变成接受状态（fulfilled）时调用的{{jsxref("Function", "函数")}}。该函数有一个参数，即接受的最终结果（the fulfillment value）。如果该参数不是函数，则会在内部被替换为 `(x) => x`，即原样返回 promise 最终结果的函数
- `onRejected` {{optional_inline}}
  - : 当 Promise 变成拒绝状态（rejected）时调用的{{jsxref("Function", "函数")}}。该函数有一个参数，即拒绝的原因（`rejection reason`）。如果该参数不是函数，则会在内部被替换为一个 "Thrower" 函数 (it throws an error it received as argument)。

### 返回值

当一个 {{jsxref("Promise")}} 完成（fulfilled）或者失败（rejected）时，返回函数将被异步调用（由当前的线程循环来调度完成）。具体的返回值依据以下规则返回。如果 `then` 中的回调函数：

- 返回了一个值，那么 `then` 返回的 Promise 将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。
- 没有返回任何值，那么 `then` 返回的 Promise 将会成为接受状态，并且该接受状态的回调函数的参数值为 `undefined`。
- 抛出一个错误，那么 `then` 返回的 Promise 将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。
- 返回一个已经是接受状态的 Promise，那么 `then` 返回的 Promise 也会成为接受状态，并且将那个 Promise 的接受状态的回调函数的参数值作为该被返回的 Promise 的接受状态回调函数的参数值。
- 返回一个已经是拒绝状态的 Promise，那么 `then` 返回的 Promise 也会成为拒绝状态，并且将那个 Promise 的拒绝状态的回调函数的参数值作为该被返回的 Promise 的拒绝状态回调函数的参数值。
- 返回一个未定状态（`pending`）的 Promise，那么 `then` 返回 Promise 的状态也是未定的，并且它的终态与那个 Promise 的终态相同；同时，它变为终态时调用的回调函数参数与那个 Promise 变为终态时的回调函数的参数是相同的。

下面是一个演示 `then` 方法的异步性的例子。

```js
// using a resolved promise, the 'then' block will be triggered instantly,
// but its handlers will be triggered asynchronously as demonstrated by the console.logs
const resolvedProm = Promise.resolve(33);

let thenProm = resolvedProm.then(value => {
    console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
    return value;
});
// instantly logging the value of thenProm
console.log(thenProm);

// using setTimeout we can postpone the execution of a function to the moment the stack is empty
setTimeout(() => {
    console.log(thenProm);
});


// 上面的代码会依次返回：
// Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
// "this gets called after the end of the main stack. the value received and returned is: 33"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 33}
```

## 描述

由于 `then` 和 {{jsxref("Promise.prototype.catch()")}} 方法都会返回 promise，它们可以被[链式调用](/zh-CN/docs/Web/JavaScript/Guide/Using_promises#Chaining)——这同时也是一种被称为**复合**（_composition）_ 的操作。

## 示例

### 使用 `then` 方法

```js
var p1 = new Promise((resolve, reject) => {
  resolve('成功！');
  // or
  // reject(new Error("出错了！"));
});

p1.then(value => {
  console.log(value); // 成功！
}, reason => {
  console.error(reason); // 出错了！
});
```

### 链式调用

`then` 方法返回一个 `Promise` 对象，其允许方法链。

你可以传递一个匿名函数给 `then`，并且，如果它返回一个 `Promise`，一个等价的 `Promise` 将暴露给后续的方法链。下面的代码片段使用 `setTimout` 函数来模拟异步代码操作。

```js
Promise.resolve("foo")
  // 1. 接收 "foo" 并与 "bar" 拼接，并将其结果做为下一个 resolve 返回。
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'bar';
        resolve(string);
      }, 1);
    });
  })
  // 2. 接收 "foobar", 放入一个异步函数中处理该字符串
  // 并将其打印到控制台中，但是不将处理后的字符串返回到下一个。
  .then(function(string) {
    setTimeout(function() {
      string += 'baz';
      console.log(string);
    }, 1)
    return string;
  })
  // 3. 打印本节中代码将如何运行的帮助消息，
  // 字符串实际上是由上一个回调函数之前的那块异步代码处理的。
  .then(function(string) {
    console.log("Last Then:  oops... didn't bother to instantiate and return " +
                "a promise in the prior then so the sequence may be a bit " +
                "surprising");

    // 注意 `string` 这时不会存在 'baz'。
    // 因为这是发生在我们通过 setTimeout 模拟的异步函数中。
    console.log(string);
  });

// logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
```

当一个值只是从一个 `then` 内部返回时，它将等价地返回 `Promise.resolve(<由被调用的处理程序返回的值>)`。

```js
var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});

p2.then(function(value) {
  console.log(value); // 1
  return value + 1;
}).then(function(value) {
  console.log(value + ' - A synchronous value works');
});

p2.then(function(value) {
  console.log(value); // 1
});
```

如果函数抛出错误或返回一个拒绝的 Promise，则 `then` 将返回一个拒绝的 Promise。

```js
Promise.resolve()
  .then(() => {
    // 使 .then() 返回一个 rejected promise
    throw new Error('Oh no!');
  })
  .then(() => {
    console.log('Not called.');
  }, error => {
    console.error('onRejected function called: ' + error.message);
  });
```

在其他情况下，一个 resolving Promise 会被返回。在下面的例子里，第一个 `then()` 会返回一个用 resolving Promise 包装的 `42`，即使之前的 Promise 是 rejected 的。

```js
Promise.reject()
  .then(() => 99, () => 42) // onRejected returns 42 which is wrapped in a resolving Promise
  .then(solution => console.log('Resolved with ' + solution)); // Resolved with 42
```

实际上，捕获 rejected promise 的需求经常大于使用 `then` 的两种情况语法，比如下面这样的：

```js
Promise.resolve()
  .then(() => {
    // 使 .then() 返回一个 rejected promise
    throw new Error('Oh no!');
  })
  .catch(error => {
    console.error('onRejected function called: ' + error.message);
  })
  .then(() => {
    console.log("I am always called even if the prior then's promise rejects");
  });
```

你也可以在另一个顶层函数上使用链式去实现基于 Promise API 的函数。

```js
function fetch_current_data() {
  // fetch() API 返回了一个 Promise.
  // 这个函数提供了类似的 API，
  // 这个函数除了实现 Promise，它还能够完成更多的工作。
  return fetch('current-data.json').then(response => {
    if (response.headers.get('content-type') != 'application/json') {
      throw new TypeError();
    }
    var j = response.json();
    // maybe do something with j
    return j; // fulfillment value given to user of
              // fetch_current_data().then()
  });
}
```

如果 `onFulfilled` 返回了一个 promise，`then` 的返回值就会被 Promise resolved 或者 rejected。

```js
function resolveLater(resolve, reject) {
  setTimeout(function() {
    resolve(10);
  }, 1000);
}
function rejectLater(resolve, reject) {
  setTimeout(function() {
    reject(new Error('Error'));
  }, 1000);
}

var p1 = Promise.resolve('foo');
var p2 = p1.then(function() {
  // Return promise here, that will be resolved to 10 after 1 second
  return new Promise(resolveLater);
});
p2.then(function(v) {
  console.log('resolved', v);  // "resolved", 10
}, function(e) {
  // not called
  console.error('rejected', e);
});

var p3 = p1.then(function() {
  // Return promise here, that will be rejected with 'Error' after 1 second
  return new Promise(rejectLater);
});
p3.then(function(v) {
  // not called
  console.log('resolved', v);
}, function(e) {
  console.error('rejected', e); // "rejected", 'Error'
});
```

### 基于 promise 的 {{domxref("window.setImmediate")}} polyfill

Using a {{jsxref("Function.prototype.bind()")}} `Reflect.apply` ({{jsxref("Reflect.apply()")}}) method to create a (non-cancellable) setImmediate-style function.

```js
const nextTick = (() => {
  const noop = () => {}; // literally
  const nextTickPromise = () => Promise.resolve().then(noop);

  const rfab = Reflect.apply.bind; // (thisArg, fn, thisArg, [...args])
  const nextTick = (fn, ...args) => (
    fn !== undefined
    ? Promise.resolve(args).then(rfab(null, fn, null))
    : nextTickPromise(),
    undefined
  );
  nextTick.ntp = nextTickPromise;

  return nextTick;
})();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
