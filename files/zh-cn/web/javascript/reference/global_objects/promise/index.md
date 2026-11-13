---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
---

**`Promise`** 对象表示异步操作最终的完成（或失败）以及其结果值。

若想了解 promise 的工作方式以及如何使用它们，我们建议你先阅读[使用 Promise](/zh-CN/docs/Web/JavaScript/Guide/Using_promises)。

## 描述

一个 **`Promise`** 是一个代理，它代表一个在创建 promise 时不一定已知的值。它允许你将处理程序与异步操作的最终成功值或失败原因关联起来。这使得异步方法可以像同步方法一样返回值：异步方法不会立即返回最终值，而是返回一个 _promise_，以便在将来的某个时间点提供该值。

一个 `Promise` 必然处于以下几种状态之一：

- _待定（pending）_：初始状态，既没有被兑现，也没有被拒绝。
- _已兑现（fulfilled）_：意味着操作成功完成。
- _已拒绝（rejected）_：意味着操作失败。

一个待定的 Promise *最终状态*可以是*已兑现*并返回一个值，或者是*已拒绝*并返回一个原因（错误）。当其中任意一种情况发生时，通过 Promise 的 `then` 方法串联的处理程序将被调用。如果绑定相应处理程序时 Promise 已经兑现或拒绝，这处理程序将被立即调用，因此在异步操作完成和绑定处理程序之间不存在竞态条件。

如果一个 Promise 已经被兑现或拒绝，即不再处于待定状态，那么则称之为已*敲定（settled）*。

![流程图展示了 Promise 状态在 `pending`、`fulfilled` 和 `rejected` 之间如何通过 `then()` 和 `catch()` 处理程序进行转换。一个待定的 Promise 可以变成已兑现或已拒绝的状态。如果 Promise 已经兑现，则会执行“on fulfillment”处理程序（即 `then()` 方法的第一个参数），并继续执行进一步的异步操作。如果 Promise 被拒绝，则会执行错误处理程序，可以将其作为 `then()` 方法的第二个参数或 `catch()` 方法的唯一参数来传递。](promises.png)

你还会听到使用*已解决*（resolved）这个术语来描述 Promise——这意味着该 Promise 已经敲定（settled），或为了匹配另一个 Promise 的最终状态而被“锁定（lock-in）”，进一步解决或拒绝它都没有影响。原始 Promise 提案中的 [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) 文档包含了更多关于 Promise 术语的细节。在口语中，“已解决”的 Promise 通常等价于“已兑现”的 Promise，但是正如“States and fates”所示，已解决的 Promise 也可以是待定或拒绝的。例如：

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

此 Promise 在创建时已经被解决（因为 `resolveOuter` 是同步调用的），但它是用另一个 Promise 解决的，因此在内部 Promise 兑现的 1 秒之后才会*被兑现*。在实践中，“解决”过程通常是在幕后完成的，不可观察，只有其兑现或拒绝是可观察的。

> [!NOTE]
> 其他几种语言也有一些机制来实现惰性求值和延迟计算，它们也称之为“promise”，例如 Scheme。在 JavaScript 中，Promise 代表已经在进行中的进程，而且可以通过回调函数实现链式调用。如果你想要实现惰性求值，考虑使用不带参数的函数，例如 `f = () => expression` 来创建惰性求值表达式，然后使用 `f()` 立即求值。

`Promise` 本身没有用于取消的一级协议，但你可能可以直接取消底层的异步操作，通常使用 [`AbortController`](/zh-CN/docs/Web/API/AbortController)。

### Promise 的链式调用

{{jsxref("Promise/then", "then()")}}、{{jsxref("Promise/catch", "catch()")}} 和 {{jsxref("Promise/finally", "finally()")}} 方法用于将进一步的操作与已敲定的 Promise 相关联。`.then()` 方法最多接受两个参数；第一个参数是 Promise 兑现时的回调函数，第二个参数是 Promise 拒绝时的回调函数。`.catch()` 和 `.finally()` 方法在内部调用 `.then()`，使错误处理更加简洁。例如，`.catch()` 实际上就是一个没有传递兑现处理器的 `.then()`。由于这些方法返回 Promise，因此它们可以被链式调用。例如：

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);
```

我们将使用以下术语：_初始 Promise_ 是调用 `then` 的 Promise；_新 Promise_ 是 `then` 返回的 Promise。传递给 `then` 的两个回调分别称为*兑现处理器*和*拒绝处理器*。

初始 Promise 的敲定状态决定了要执行哪个处理器。

- 如果初始 Promise 被兑现，则使用兑现值调用兑现处理器。
- 如果初始 Promise 被拒绝，则使用拒绝原因调用拒绝处理器。

处理器的完成情况决定了新 Promise 的敲定状态。

- 如果处理器返回一个 [thenable](#thenable) 值，新 Promise 将以与返回值相同的状态敲定。
- 如果处理器返回一个非 thenable 值，新 Promise 将以返回值兑现。
- 如果处理器抛出错误，新 Promise 将以抛出的错误拒绝。
- 如果初始 Promise 没有附加相应的处理器，新 Promise 将敲定为与初始 Promise 相同的状态——也就是说，没有拒绝处理器的情况下，被拒绝的 Promise 会保持拒绝状态和相同的原因。

例如，在上面的代码中，如果 `myPromise` 拒绝，将调用 `handleRejectedA`，如果 `handleRejectedA` 正常完成（不抛出错误或返回被拒绝的 Promise），第一个 `then` 返回的 Promise 将被兑现而不是保持拒绝状态。因此，如果必须立即处理错误，但我们希望在链中保持错误状态，我们必须在拒绝处理器中抛出某种类型的错误。另一方面，在没有迫切需要的情况下，我们可以将错误处理留到最终的 `.catch()` 处理器。

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

使用[箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)作为回调函数，实现 Promise 的链式调用的示例如下：

```js
myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });
```

> [!NOTE]
> 为了更快的执行，最好将所有同步操作都放在一个处理程序中，否则如果将它们拆分为多个处理程序，执行所有处理程序将需要几个时钟周期。

JavaScript 维护一个[作业队列](/zh-CN/docs/Web/JavaScript/Reference/Execution_model)。每次，JavaScript 从队列中选择一个作业并执行到完成。作业由 `Promise()` 构造函数的执行器、传递给 `then` 的处理器或任何返回 Promise 的平台 API 定义。链中的 Promise 表示这些作业之间的依赖关系。当 Promise 敲定时，与其关联的相应处理器会被添加到作业队列的后面。

一个 Promise 可以参与多个链。对于以下代码，`promiseA` 的兑现将导致 `handleFulfilled1` 和 `handleFulfilled2` 都被添加到作业队列中。因为 `handleFulfilled1` 首先注册，所以它将首先被调用。

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

可以为已经敲定的 Promise 分配操作。在这种情况下，操作会立即添加到作业队列的后面，并在所有现有作业完成后执行。因此，已经"敲定"的 Promise 的操作只会在当前同步代码完成并且至少经过一个循环周期后才会发生。这保证了 Promise 操作是异步的。

```js
const promiseA = new Promise((resolve, reject) => {
  resolve(777);
});
// 此时，“promiseA”已经敲定了
promiseA.then((val) => console.log("异步日志记录有值：", val));
console.log("立即记录");

// 按以下顺序产生输出：
// 立即记录
// 异步日志记录有值：777
```

### Thenable

在 Promise 成为 JavaScript 语言的一部分之前，JavaScript 生态系统已经有了多种 Promise 实现。尽管它们在内部的表示方式不同，但至少所有类 Promise 的对象都实现了 _Thenable_ 接口。thenable 对象实现了 [`.then()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 方法，该方法被调用时需要传入两个回调函数，一个用于 Promise 被兑现时调用，一个用于 Promise 被拒绝时调用。Promise 也是 thenable 对象。

为了与现有的 Promise 实现进行交互，JavaScript 语言允许在 Promise 的位置使用 thenable 对象。例如，[`Promise.resolve`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) 方法不仅可以解析 Promise 对象，还可以追踪 thenable 对象。

```js
const aThenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // thenable 对象被兑现为另一个 thenable 对象
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve(aThenable); // 一个兑现值为 42 的 Promise
```

### Promise 并发

`Promise` 类提供了四个静态方法来促进异步任务的[并发](https://zh.wikipedia.org/wiki/并发计算)：

- {{jsxref("Promise.all()")}}
  - : 在**所有**传入的 Promise 都被兑现时兑现；在**任意一个** Promise 被拒绝时拒绝。
- {{jsxref("Promise.allSettled()")}}
  - : 在**所有**的 Promise 都被敲定时兑现。
- {{jsxref("Promise.any()")}}
  - : 在**任意一个** Promise 被兑现时兑现；仅在**所有**的 Promise 都被拒绝时才会拒绝。
- {{jsxref("Promise.race()")}}
  - : 在**任意一个** Promise 被敲定时敲定。换句话说，在**任意一个** Promise 被兑现时兑现；在**任意一个**的 Promise 被拒绝时拒绝。

所有这些方法都接受一个 Promise（确切地说是 [thenable](#thenable)）的[可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)，并返回一个新的 Promise。它们都支持子类化，这意味着它们可以在 `Promise` 的子类上调用，结果将是一个属于子类类型的 Promise。为此，子类的构造函数必须实现与 [`Promise()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) 构造函数相同的签名——接受一个以 `resolve` 和 `reject` 回调函数作为参数的单个 `executor` 函数。子类还必须有一个 `resolve` 静态方法，可以像 {{jsxref("Promise.resolve()")}} 一样调用，以将值解析为 Promise。

请注意，JavaScript 的本质上是[单线程的](/zh-CN/docs/Glossary/Thread)，因此在任何时刻，只有一个任务会被执行，尽管控制权可以在不同的 Promise 之间切换，从而使 Promise 的执行看起来是并发的。在 JavaScript 中，[并行执行](https://zh.wikipedia.org/wiki/并行计算)只能通过 [worker 线程](/zh-CN/docs/Web/API/Web_Workers_API)实现。

## 构造函数

- {{jsxref("Promise/Promise", "Promise()")}}
  - : 创建一个新的 `Promise` 对象。该构造函数主要用于封装还没有添加 promise 支持的函数。

## 静态属性

- [`Promise[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : 返回用于构造从 Promise 方法返回值的构造函数。

## 静态方法

- {{jsxref("Promise.all()")}}
  - : 接受一个 Promise 可迭代对象作为输入，并返回单个 `Promise`。返回的 Promise 在所有输入的 Promise 都兑现时（包括传入的可迭代对象为空时）被兑现，其值为一个包含所有兑现值的数组。如果输入的任何 Promise 被拒绝，返回的 Promise 也会被拒绝，并返回第一个拒绝的原因。
- {{jsxref("Promise.allSettled()")}}
  - : 接受一个 Promise 可迭代对象作为输入，并返回单个 `Promise`。返回的 Promise 在所有输入的 Promise 都敲定时兑现（包括传入的可迭代对象为空时），其值为一个描述每个 Promise 结果的对象数组。
- {{jsxref("Promise.any()")}}
  - : 接受一个 Promise 可迭代对象作为输入，并返回单个 `Promise`。返回的 Promise 在任何输入的 Promise 兑现时兑现，其值为第一个兑现的值。如果所有输入的 Promise 都被拒绝（包括传入的可迭代对象为空时），返回的 Promise 将以带有一个包含拒绝原因的数组的 {{jsxref("AggregateError")}} 拒绝。
- {{jsxref("Promise.race()")}}
  - : 接受一个 Promise 可迭代对象作为输入，并返回单个 `Promise`。返回的 Promise 与第一个敲定的 Promise 的最终状态保持一致。
- {{jsxref("Promise.reject()")}}
  - : 返回一个新的 `Promise` 对象，该对象以给定的原因拒绝。
- {{jsxref("Promise.resolve()")}}
  - : 返回一个新的 `Promise` 对象，该对象以给定的值兑现。如果值是一个 thenable 对象（即具有 `then` 方法），则返回的 Promise 对象会“跟随”该 thenable 对象，采用其最终的状态；否则，返回的 Promise 对象会以该值兑现。
- {{jsxref("Promise.try()")}}
  - : 接受任意类型的回调函数（无论是返回值还是抛出异常，同步或异步），并将其结果包装在一个 `Promise` 中。
- {{jsxref("Promise.withResolvers()")}}
  - : 返回一个对象，该对象包含一个新的 `Promise` 对象和两个用于解决或拒绝它的函数，这两个函数对应于传递给 {{jsxref("Promise/Promise", "Promise()")}} 构造函数的执行器的两个参数。

## 实例属性

这些属性定义在 `Promise.prototype` 上，由所有的 `Promise` 实例共享。

- {{jsxref("Object/constructor", "Promise.prototype.constructor")}}
  - : 创建实例对象的构造函数。对于 `Promise` 实例，初始值为 {{jsxref("Promise/Promise", "Promise")}} 构造函数。
- `Promise.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值为字符串 `"Promise"`。该属性用于 {{jsxref("Object.prototype.toString()")}}。

## 实例方法

- {{jsxref("Promise.prototype.catch()")}}
  - : 将一个拒绝处理回调函数附加到 Promise 上，并返回一个新的 Promise，如果回调被调用，则解决为回调的返回值，如果 Promise 被兑现，解决为其原始兑现值。
- {{jsxref("Promise.prototype.finally()")}}
  - : 将一个处理器附加到 Promise 上，并返回一个新的 Promise，当原始 Promise 被解决时解决。无论 Promise 是否被兑现还是被拒绝，处理器都会在 Promise 敲定时被调用。
- {{jsxref("Promise.prototype.then()")}}
  - : 将一个兑现处理器和拒绝处理器附加到 Promise 上，并返回一个新的 Promise，解决为调用处理器得到的返回值，或者如果 Promise 没有被处理（即相关处理器 `onFulfilled` 或 `onRejected` 不是函数），则以原始敲定值解决。

## 示例

### 基础示例

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // 当异步操作成功时，我们调用 resolve(...)，当其失败时，调用 reject(...)。
  // 在这个例子中，我们使用 setTimeout(...) 来模拟异步代码。
  // 在实际情况中，你可能会使用类似 XHR 或 HTML API 等。
  setTimeout(() => {
    resolve("成功！"); // 耶！一切顺利！
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage 是我们在上面的 resolve(...) 函数中传入的任何内容。
  // 它不一定是字符串，但如果它只是一个成功的消息，那么它大概率是字符串。
  console.log(`耶！${successMessage}`);
});
```

### 不同场景的示例

此示例展示了使用 promise 的多种方法，以及其可能发生的多种情况。要理解这一点，首先滚动到代码块的底部，然后查看 promise 调用链。在创建初始的 promise 后，可以接上一条 promise 调用链。该调用链由 `.then()` 组成，通常（但不一定）在末尾会有一个 `.catch()`，并可能会接上一个 `.finally()`。在本示例中，promise 调用链是由一个自定义的 `new Promise()` 构造并发起的；但在实践中，promise 调用链通常由一个 API 函数（由其他人编写的）返回的 promise 开始。

示例函数 `tetheredGetNumber()` 会在设置同步调用或者函数内部抛出异常时调用 `reject()`。函数 `promiseGetWord()` 展示了如何在 API 函数内部创建并返回一个 promise。

请注意，函数 `troubleWithGetNumber()` 以 `throw()` 结束。这是强制的做法，因为 ES6 的 promise 会遍历所有的 `.then()` promise，在遇到错误时，如果不使用 `throw()`，这个错误会被当作“已修复”。这很麻烦，因此，通常会在 `.then()` promise 调用链中忽略 `rejectionFunc`，而仅在最后的 `.catch()` 中保留一个 `rejectionFunc`。另一种方法是抛出一个特殊值（本例使用了 `-999`，但使用自定义错误类型更合适）。

此代码可在 NodeJS 下运行。通过看到错误的实际发生，可以加深理解。若要提高错误发生的概率，请更改 `threshold` 值。

```js
// 为了尝试错误处理，使用“阈值”值会随机地引发错误。
const THRESHOLD_A = 8; // 可以使用 0 使错误必现

function tetheredGetNumber(resolve, reject) {
  setTimeout(() => {
    const randomInt = Date.now();
    const value = randomInt % 10;
    if (value < THRESHOLD_A) {
      resolve(value);
    } else {
      reject(`太大了：${value}`);
    }
  }, 500);
}

function determineParity(value) {
  const isOdd = value % 2 === 1;
  return { value, isOdd };
}

function troubleWithGetNumber(reason) {
  const err = new Error("获取数据时遇到问题", { cause: reason });
  console.error(err);
  throw err;
}

function promiseGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;
    if (value >= THRESHOLD_A - 1) {
      reject(`还是太大了：${value}`);
    } else {
      parityInfo.wordEvenOdd = isOdd ? "奇数" : "偶数";
      resolve(parityInfo);
    }
  });
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`得到了：${info.value}, ${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.error("已经在前面处理过错误了");
    } else {
      console.error(`运行 promiseGetWord() 时遇到问题：${reason}`);
    }
  })
  .finally((info) => console.log("所有回调都完成了"));
```

### 高级示例

本例展示了 `Promise` 的一些机制。`testPromise()` 方法在每次点击 {{HTMLElement("button")}} 按钮时被调用，该方法会创建一个 promise 对象，使用 {{domxref("Window.setTimeout", "setTimeout()")}} 让 `Promise` 等待 1-3 秒不等的时间来兑现计数结果（从 1 开始的数字）。使用 `Promise` 构造函数来创建 promise。

通过使用 {{jsxref("Promise.prototype.then()","p1.then()")}} 设置兑现回调函数，并在其中记录 Promise 的兑现，这些日志显示了方法的同步代码是如何与 Promise 的异步完成是如何解耦的。

通过在短时间内多次点击按钮，你可以看到不同的 promise 被一个接一个地兑现。

#### HTML

```html
<button id="make-promise">Make a promise!</button>
<div id="log"></div>
```

#### JavaScript

```js
"use strict";

let promiseCount = 0;

function testPromise() {
  const thisPromiseCount = ++promiseCount;
  const log = document.getElementById("log");
  // 开始
  log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Started<br>`);
  // 我们创建一个新的 Promise：我们承诺在等待 3 秒后，兑现从 1 开始计数的数字
  const p1 = new Promise((resolve, reject) => {
    // 执行器函数被调用，并具有解决或拒绝该 Promise 的能力
    log.insertAdjacentHTML(
      "beforeend",
      `${thisPromiseCount}) Promise constructor<br>`,
    );
    // 这只是一个创建异步操作的示例
    setTimeout(
      () => {
        // We fulfill the promise
        resolve(thisPromiseCount);
      },
      Math.random() * 2000 + 1000,
    );
  });

  // 我们使用 then() 来定义 Promise 被解决时的操作，
  // 并使用 catch() 来定义 Promise 被拒绝时的操作
  p1.then((val) => {
    // 打印兑现值
    log.insertAdjacentHTML("beforeend", `${val}) Promise fulfilled<br>`);
  }).catch((reason) => {
    // 打印拒绝原因
    console.log(`Handle rejected promise (${reason}) here.`);
  });
  // 结束
  log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Promise made<br>`);
}

const btn = document.getElementById("make-promise");
btn.addEventListener("click", testPromise);
```

#### 结果

{{EmbedLiveSample("高级示例", "500", "200")}}

### 使用 XHR 加载图像

另一个使用 `Promise` 和 {{domxref("XMLHttpRequest")}} 加载图像的示例如下所示。每一步都有注释，可以让你详细了解 Promise 和 XHR 架构。

```html hidden live-sample___promises
<h1>Promise 示例</h1>
```

```js live-sample___promises
function imgLoad(url) {
  // 使用 Promise() 构造函数创建新的 promise；
  // 它的参数是一个有两个参数的函数：resolve 和 reject
  return new Promise((resolve, reject) => {
    // 使用 XHR 加载图像
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "blob";
    // 当请求加载时，检查它是否成功
    request.onload = () => {
      if (request.status === 200) {
        // 如果成功，通过传回请求响应来解决 promise
        resolve(request.response);
      } else {
        // 如果失败，用错误消息拒绝 promise
        reject(
          Error(
            `Image didn't load successfully; error code: + ${request.statusText}`,
          ),
        );
      }
    };
    // 处理网络错误
    request.onerror = () => reject(new Error("There was a network error."));
    // 发送请求
    request.send();
  });
}

// 获取对 body 元素的引用，并创建一个新的图像对象
const body = document.querySelector("body");
const myImage = new Image();
const imgUrl =
  "https://mdn.github.io/shared-assets/images/examples/round-balloon.png";

// 使用我们想要加载的 URL 调用函数，然后链式调用
// promise then() 方法和两个回调
imgLoad(imgUrl).then(
  (response) => {
    // 第一个在 promise 解决时运行，使用在 resolve() 方法中指定的 request.response。
    const imageURL = URL.createObjectURL(response);
    myImage.src = imageURL;
    body.appendChild(myImage);
  },
  (error) => {
    // 第二个在 promise 被拒绝时运行，
    // 并记录用 reject() 方法指定的错误。
    console.log(error);
  },
);
```

{{embedlivesample("promises", "", "240px")}}

### 追踪现有设置对象

设置对象（settings object）是 JavaScript 代码运行时用于提供附加信息的[环境](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object)。它包含了领域（realm）和模块映射（module map），以及 HTML 的特定信息，如来源（origin）等。对现有设置对象的追踪保证了浏览器知道用户给定的哪些代码片段需要使用。

为了更好地说明这一点，我们在这里进一步探讨领域是如何引发问题的。我们可以粗略地认为**领域**是一个全局对象。其独特之处在于，它拥有运行 JavaScript 代码所需的所有信息。这包括像 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 和 [`Error`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error) 这样的对象。每一个设置对象都有自己的“副本”，而且它们与副本之间是不共享的。这可能会导致一些与 promise 相关的意外行为。为了解决这个问题，我们需要追踪**现有设置对象**（incumbent settings object）。它表示负责用户某个函数调用工作的特定信息。

我们可以尝试在文档中嵌入 [`<iframe>`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe)，并让其与父级上下文通信。由于所有的 web API 都有现有设置对象，下面的代码能够在所有的浏览器中运行：

```html
<!doctype html> <iframe></iframe>
<!-- 在这里有一个 realm -->
<script>
  // 这里也有一个 realm
  const bound = frames[0].postMessage.bind(frames[0], "一些数据", "*");
  // bound 是一个内置函数，栈中没有用户代码，因此我们应该使用哪个 realm 呢？
  setTimeout(bound);
  // 这仍然可以工作，因为我们在栈上使用最新的 realm（即现有的 realm）
</script>
```

同样的概念也适用于 promise。如果我们稍加修改上面的示例，我们就能得到这个：

```html
<!doctype html> <iframe></iframe>
<!-- 在这里有一个领域 -->
<script>
  // 这里也有一个领域
  const bound = frames[0].postMessage.bind(frames[0], "一些数据", "*");
  // bound 是一个内置函数，栈中没有用户代码，所以我们应该使用哪个领域？
  Promise.resolve(undefined).then(bound);
  // 这仍然可以工作，因为我们在栈上使用最新的领域（即现有领域）
</script>
```

如果我们修改代码，使用文档中的 `<iframe>` 来监听发送的消息，我们可以观察到现有设置对象的影响：

```html
<!-- y.html -->
<!doctype html>
<iframe src="x.html"></iframe>
<script>
  const bound = frames[0].postMessage.bind(frames[0], "一些数据", "*");
  Promise.resolve(undefined).then(bound);
</script>
```

```html
<!-- x.html -->
<!doctype html>
<script>
  window.addEventListener(
    "message",
    (event) => {
      document.querySelector("#text").textContent = "hello";
      // 此代码将仅在跟踪现有设置对象的浏览器中运行
      console.log(event);
    },
    false,
  );
</script>
```

在上面的示例中，`<iframe>` 仅在现有设置对象被追踪时才会被更新。这是因为在不追踪的情况下，我们可能会使用错误的环境发送消息。

> [!NOTE]
> 目前，Firefox 完全实现了现有领域追踪，Chrome 和 Safari 仅部分实现。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Promise` 的 Polyfill](https://github.com/zloirock/core-js#ecmascript-promise)
- [使用 promise](/zh-CN/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ 规范](https://promisesaplus.com/)
- [JavaScript Promise：简介](https://web.developers.google.cn/articles/promises)
- Domenic Denicola 的幻灯片演示（2011）：[回调、Promise 和协程——JavaScript 中的异步编程模式](https://www.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript)
