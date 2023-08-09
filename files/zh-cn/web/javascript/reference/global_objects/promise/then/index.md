---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
---

{{JSRef}}

{{jsxref("Promise")}} 实例的 **`then()`** 方法最多接受两个参数：用于 `Promise` 兑现和拒绝情况的回调函数。它立即返回一个等效的 {{jsxref("Promise")}} 对象，允许你链接到其他 Promise 方法，从而实现[链式调用](/zh-CN/docs/Web/JavaScript/Guide/Using_promises#链式调用)。

{{EmbedInteractiveExample("pages/js/promise-then.html")}}

## 语法

```js-nolint
then(onFulfilled)
then(onFulfilled, onRejected)
```

### 参数

- `onFulfilled` {{optional_inline}}

  - : 一个在此 Promise 对象被兑现时异步执行的函数。它的返回值将成为 `then()` 返回的 Promise 对象的兑现值。此函数被调用时将传入以下参数：

    - `value`
      - : Promise 对象的兑现值。

    如果 `onFulfilled` 不是一个函数，则内部会被替换为一个*恒等*函数（`(x) => x`），它只是简单地将兑现值向前传递。

- `onRejected` {{optional_inline}}

  - : 一个在此 Promise 对象被拒绝时异步执行的函数。它的返回值将成为 `catch()` 返回的 Promise 对象的兑现值。此函数被调用时将传入以下参数：

    - `reason`
      - : Promise 对象被拒绝的原因。

    如果 `onRejected` 不是一个函数，则内部会被替换为一个*抛出器*函数（`(x) => { throw x; }`），它会抛出它收到的拒绝原因。

### 返回值

立即返回一个新的 {{jsxref("Promise")}} 对象，该对象始终处于待定状态，无论当前 Promise 对象的状态如何。

`onFulfilled` 和 `onRejected` 处理函数之一将被执行，以处理当前 Promise 对象的兑现或拒绝。即使当前 Promise 对象已经敲定，这个调用也总是异步发生的。返回的 Promise 对象（称之为 `p`）的行为取决于处理函数的执行结果，遵循一组特定的规则。如果处理函数：

- 返回一个值：`p` 以该返回值作为其兑现值。
- 没有返回任何值：`p` 以 `undefined` 作为其兑现值。
- 抛出一个错误：`p` 抛出的错误作为其拒绝值。
- 返回一个已兑现的 Promise 对象：`p` 以该 Promise 的值作为其兑现值。
- 返回一个已拒绝的 Promise 对象：`p` 以该 Promise 的值作为其拒绝值。
- 返回另一个待定的 Promise 对象：`p` 保持待定状态，并在该 Promise 对象被兑现/拒绝后立即以该 Promise 的值作为其兑现/拒绝值。

## 描述

`then()` 方法用于为 Promise 对象的完成（兑现或拒绝）设置回调函数。它是 Promise 的基本方法：[thenable](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable) 协议要求所有类 Promise 对象都提供一个 `then()` 方法，并且 `catch()` 和 `finally()` 方法都会通过调用该对象的 `then()` 方法来工作。

有关 `onRejected` 处理函数的更多信息，请参阅 {{jsxref("Promise/catch", "catch()")}} 参考文档。

`then()` 方法返回一个新的 Promise 对象。如果在同一 Promise 对象上两次调用 `then()` 方法（而不是链式调用），则该 Promise 对象将具有两对处理方法。附加到同一 Promise 对象的所有处理方法总是按照它们添加的顺序调用。此外，每次调用 `then()` 方法返回的两个 Promise 对象开始了独立的链，不会等待彼此的敲定。

沿着 `then()` 链产生的 [thenable](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable) 对象总是会被[解决](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#resolver_函数)——`onFulfilled` 处理函数永远不会收到 thenable 对象，并且任何由处理函数返回的 thenable 对象在传递给下一个处理函数之前总是被解决。这是因为在构造新的 Promise 对象时，由 `executor` 传递的 `resolve` 和 `reject` 函数被保存下来，在当前 Promise 对象敲定时，相应的函数将被调用，并传递兑现值或拒绝原因。解决逻辑来自 {{jsxref("Promise/Promise", "Promise()")}} 构造函数传递的解决函数。

`then()` 方法支持子类化，这意味着它可以在 `Promise` 子类的实例上调用，并且结果将是子类类型的 Promise 对象。你可以通过 [`@@species`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/@@species) 属性自定义返回值类型。

## 示例

### 使用 then() 方法

```js
const p1 = new Promise((resolve, reject) => {
  resolve("成功！");
  // 或
  // reject(new Error("错误!"));
});

p1.then(
  (value) => {
    console.log(value); // 成功！
  },
  (reason) => {
    console.error(reason); // 错误！
  },
);
```

### 传入非函数作为参数

```js
Promise.resolve(1).then(2).then(console.log); // 1
Promise.reject(1).then(2, 2).then(console.log, console.log); // 1
```

### 链式调用

`then` 方法返回一个新的 `Promise`，从而允许链式调用。

如果作为 `then()` 方法的处理函数传递的函数返回一个 `Promise`，则相应的 `Promise` 对象将被暴露给方法链中的后续 `then()` 方法。下面的代码段使用 `setTimeout` 函数来模拟异步代码操作。

```js
Promise.resolve("foo")
  // 1. 接收 "foo" 并与 "bar" 拼接，并将其结果做为下一个 resolve 返回。
  .then(
    (string) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          string += "bar";
          resolve(string);
        }, 1);
      }),
  )
  // 2. 接收 "foobar", 放入一个异步函数中处理该字符串
  // 并将其打印到控制台中，但是不将处理后的字符串返回到下一个。
  .then((string) => {
    setTimeout(() => {
      string += "baz";
      console.log(string); // foobarbaz
    }, 1);
    return string;
  })
  // 3. 打印本节中代码将如何运行的帮助消息，
  // 字符串实际上是由上一个回调函数之前的那块异步代码处理的。
  .then((string) => {
    console.log(
      "最后一个 then：哎呀……之前懒得实例化并返回一个 Promise，所以顺序可能有点令人惊讶",
    );

    // 注意 `string` 这时不会存在 'baz'。
    // 因为这是发生在我们通过 setTimeout 模拟的异步函数中。
    console.log(string); // foobar
  });

// 按顺序打印：
// 最后一个 then：哎呀……之前懒得实例化并返回一个 Promise，所以顺序可能有点令人惊讶
// foobar
// foobarbaz
```

`then()` 方法返回的值的解决方式与 {{jsxref("Promise.resolve()")}} 相同。这意味着该方法支持 [thenable 对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable)，如果返回值不是一个 Promise 对象，则会隐式地将其包装在 `Promise` 中，然后解决。

```js
const p2 = new Promise((resolve, reject) => {
  resolve(1);
});

p2.then((value) => {
  console.log(value); // 1
  return value + 1;
}).then((value) => {
  console.log(value, "- A synchronous value works"); // 2 - A synchronous value works
});

p2.then((value) => {
  console.log(value); // 1
});
```

如果函数抛出错误或返回一个被拒绝的 Promise，则 `then` 返回的 Promise 最终将被拒绝。

```js
Promise.resolve()
  .then(() => {
    // 令 .then() 返回一个被拒绝的 promise
    throw new Error("Oh no!");
  })
  .then(
    () => {
      console.log("不会被调用。");
    },
    (error) => {
      console.error(`onRejected 函数被调用：${error.message}`);
    },
  );
```

在实践中，通常更希望使用 [`catch()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) 方法来捕获被拒绝的 Promise，而不是使用 `then()` 方法传入两个处理器的语法，如下例所示。

```js
Promise.resolve()
  .then(() => {
    // 令 .then() 返回一个被拒绝的 promise
    throw new Error("噢，不！");
  })
  .catch((error) => {
    console.error(`onRejected 函数被调用：${error.message}`);
  })
  .then(() => {
    console.log("即使前面的 Promise 被拒绝，我也总是会被调用");
  });
```

在其他所有情况下，返回的 Promise 最终都会被兑现。在下面的示例中，即使链中的前一个 Promise 被拒绝，第一个 `then()` 返回一个包装着 `42` 的已兑现的 Promise。

```js
Promise.reject()
  .then(
    () => 99,
    () => 42,
  ) // onRejected 返回 42，它被封装在已兑现的 Promise 中
  .then((solution) => console.log(`兑现为：${solution}`)); // 兑现为：42
```

如果 `onFulfilled` 返回一个 Promise，那么 `then` 的返回值将根据该 Promise 的最终状态被兑现或被拒绝。

```js
function resolveLater(resolve, reject) {
  setTimeout(() => {
    resolve(10);
  }, 1000);
}
function rejectLater(resolve, reject) {
  setTimeout(() => {
    reject(new Error("错误"));
  }, 1000);
}

const p1 = Promise.resolve("foo");
const p2 = p1.then(() => {
  // 此处返回一个 Promise，将在 1 秒后解决为 10
  return new Promise(resolveLater);
});
p2.then(
  (v) => {
    console.log("已解决", v); // "已解决", 10
  },
  (e) => {
    // 不会被调用
    console.error("已拒绝", e);
  },
);

const p3 = p1.then(() => {
  // 此处返回一个 Promise，将在 1 秒后以 '错误' 被拒绝
  return new Promise(rejectLater);
});
p3.then(
  (v) => {
    // 不会被调用
    console.log("已解决", v);
  },
  (e) => {
    console.error("已拒绝", e); // "已拒绝", '错误'
  },
);
```

你可以使用链式调用，在一个函数上实现基于 Promise 的 API，在另一个函数之上。

```js
function fetchCurrentData() {
  // fetch() API 返回一个 Promise。
  // 这个函数提供了一个类似的 API，但是它对 Promise 的兑现值进行了更多处理
  return fetch("current-data.json").then((response) => {
    if (response.headers.get("content-type") !== "application/json") {
      throw new TypeError();
    }
    const j = response.json();
    // 可以对 j 进行一些处理

    // 兑现值将会传递给 fetchCurrentData().then() 中的处理函数
    return j;
  });
}
```

### then() 的异步性

以下是一个示例，用于演示 `then` 方法的异步性。

```js
// 用一个已解决的 Promise——“resolvedProm”为例，
// 函数调用“resolvedProm.then(...)”立即返回一个新的 Promise，
// 但是其中的处理器“(value) => {...}”将被异步调用，正如打印输出所示。
// 新的 Promise 被赋值给“thenProm”，
// 并且 thenProm 将被解决为处理函数返回的值。
const resolvedProm = Promise.resolve(33);
console.log(resolvedProm);

const thenProm = resolvedProm.then((value) => {
  console.log(
    `在主堆栈结束后被调用。收到的值是：${value}，返回的值是：${value + 1}`,
  );
  return value + 1;
});
console.log(thenProm);

// 使用 setTimeout，我们可以将函数的执行推迟到调用栈为空的时刻。
setTimeout(() => {
  console.log(thenProm);
});

// 按顺序打印：
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 33}
// Promise {[[PromiseStatus]]: "pending", [[PromiseResult]]: undefined}
// "在主堆栈结束后被调用。收到的值是：33，返回的值是：34"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 34}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
