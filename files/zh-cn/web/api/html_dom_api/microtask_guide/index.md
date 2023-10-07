---
title: 在 JavaScript 中通过 queueMicrotask() 使用微任务
slug: Web/API/HTML_DOM_API/Microtask_guide
---

{{APIRef("HTML DOM")}}

一个**微任务**（microtask）就是一个简短的函数，当创建该微任务的函数执行之后，*并且*只有当 Javascript 调用栈为空，而控制权尚未返还给被{{Glossary("user agent", "用户代理")}}用来驱动脚本执行环境的事件循环之前，该微任务才会被执行。事件循环既可能是浏览器的主事件循环也可能是被一个 [web worker](/zh-CN/docs/Web/API/Web_Workers_API) 所驱动的事件循环。这使得给定的函数在没有其他脚本执行干扰的情况下运行，也保证了微任务能在用户代理有机会对该微任务带来的行为做出反应之前运行。

JavaScript 中的 [promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 和 [Mutation Observer API](/zh-CN/docs/Web/API/MutationObserver) 都使用微任务队列去运行它们的回调函数，但当能够推迟工作直到当前事件循环过程完结时，也是可以执行微任务的时机。为了允许第三方库、框架、polyfill 能使用微任务，在 {{domxref("Window")}} 和 {{domxref("Worker")}} 接口上暴露了 {{domxref("queueMicrotask()")}} 方法。

## 任务 vs 微任务

为了正确地讨论微任务，首先最好知道什么是一个 JavaScript 任务以及微任务如何区别于任务。这里是一个快速、简单的解释，但若你想了解更多细节，可以阅读这篇文章中的信息 [In depth: Microtasks and the JavaScript runtime environment](/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth).

### 任务（Tasks）

一个**任务**就是由执行诸如从头执行一段程序、执行一个事件回调或一个 interval/timeout 被触发之类的标准机制而被调度的任意 JavaScript 代码。这些都在**任务队列**（task queue）上被调度。

在以下时机，任务会被添加到任务队列：

- 一段新程序或子程序被直接执行时（比如从一个控制台，或在一个 {{HTMLElement("script")}} 元素中运行代码）。
- 触发了一个事件，将其回调函数添加到任务队列时。
- 执行到一个由 {{domxref("setTimeout()")}} 或 {{domxref("setInterval()")}} 创建的 timeout 或 interval，以致相应的回调函数被添加到任务队列时。

事件循环驱动你的代码按照这些任务排队的顺序，一个接一个地处理它们。在当前迭代轮次中，只有那些当事件循环过程开始时 _已经处于任务队列中_ 的任务会被执行。其余的任务不得不等待到下一次迭代。

### 微任务（Microtasks）

起初微任务和任务之间的差异看起来不大。它们很相似；都由位于某个队列的 JavaScript 代码组成并在合适的时候运行。但是，只有在迭代开始时队列中存在的任务才会被事件循环一个接一个地运行，这和处理微任务队列是殊为不同的。

有两点关键的区别。

首先，每当一个任务存在，事件循环都会检查该任务是否正把控制权交给其他 JavaScript 代码。如若不然，事件循环就会运行微任务队列中的所有微任务。接下来微任务循环会在事件循环的每次迭代中被处理多次，包括处理完事件和其他回调之后。

其次，如果一个微任务通过调用 {{domxref("queueMicrotask()")}}, 向队列中加入了更多的微任务，则那些新加入的微任务 _会早于下一个任务运行_。这是因为事件循环会持续调用微任务直至队列中没有留存的，即使是在有更多微任务持续被加入的情况下。

> **警告：** 因为微任务自身可以入列更多的微任务，且事件循环会持续处理微任务直至队列为空，那么就存在一种使得事件循环无尽处理微任务的真实风险。如何处理递归增加微任务是要谨慎而行的。

## 使用微任务

在谈论更多之前，再次注意到一点是重要的，那就是如果可能的话，大部分开发者并不应该过多的使用微任务。在基于现代浏览器的 JavaScript 开发中有一个高度专业化的特性，那就是允许你调度代码跳转到其他事情之前，而那些事情原本是处于用户计算机中一大堆等待发生的事情集合之中的。滥用这种能力将带来性能问题。

### 入列微任务

就其本身而言，应该使用微任务的典型情况，要么只有在没有其他办法的时候，要么是当创建框架或库时需要使用微任务达成其功能。虽然在过去要使得入列微任务成为可能有可用的技巧（比如创建一个立即 resolve 的 promise），但新加入的 {{domxref("queueMicrotask()")}} 方法增加了一种标准的方式，可以安全的引入微任务而避免使用额外的技巧。

通过引入 `queueMicrotask()`，由晦涩地使用 promise 去创建微任务而带来的风险就可以被避免了。举例来说，当使用 promise 创建微任务时，由回调抛出的异常被报告为 rejected promises 而不是标准异常。同时，创建和销毁 promise 带来了事件和内存方面的额外开销，这是正确入列微任务的函数应该避免的。

简单的传入一个 JavaScript {{jsxref("Function")}} ，以在 `queueMicrotask()` 方法中处理微任务时供其上下文调用即可；取决于当前执行上下文， `queueMicrotask()` 以定义的形式被暴露在 {{domxref("Window")}} 或 {{domxref("Worker")}} 接口上。

```js
queueMicrotask(() => {
  /* 微任务中将运行的代码 */
});
```

微任务函数本身没有参数，也不返回值。

### 何时使用微任务

在本章节中，我们来看看微任务特别有用的场景。通常，这些场景关乎捕捉或检查结果、执行清理等；其时机晚于一段 JavaScript 执行上下文主体的退出，但早于任何事件处理函数、timeouts 或 intervals 及其他回调被执行。

何时是那种有用的时候？

使用微任务的最主要原因简单归纳为：确保任务顺序的一致性，即便当结果或数据是同步可用的，也要同时减少操作中用户可感知到的延迟而带来的风险。

#### 保证条件性使用 promises 时的顺序

微任务可被用来确保执行顺序总是一致的一种情形，是当 promise 被用在一个 `if...else` 语句（或其他条件性语句）中、但并不在其他子句中的时候。考虑如下代码：

```js
customElement.prototype.getData = url => {
  if (this.cache[url]) {
    this.data = this.cache[url];
    this.dispatchEvent(new Event("load"));
  } else {
    fetch(url).then(result => result.arrayBuffer()).then(data => {
      this.cache[url] = data;
      this.data = data;
      this.dispatchEvent(new Event("load"));
    )};
  }
};
```

这段代码带来的问题是，通过在 `if...else` 语句的其中一个分支（此例中为缓存中的图片地址可用时）中使用一个任务而 promise 包含在 `else` 子句中，我们面临了操作顺序可能不同的局势；比方说，像下面看起来的这样：

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data...");
element.getData();
console.log("Data fetched");
```

连续执行两次这段代码会形成下表中的结果：

<table class="standard-table">
  <caption>
    数据未缓存的结果（左）vs. 缓存中有数据的结果
  </caption>
  <thead>
    <tr>
      <th scope="col">数据未缓存</th>
      <th scope="col">数据已缓存</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <pre>
Fetching data
Data fetched
Loaded data
</pre
        >
      </td>
      <td>
        <pre>
Fetching data
Loaded data
Data fetched
</pre
        >
      </td>
    </tr>
  </tbody>
</table>

甚至更糟的是，有时元素的 `data`

属性会被设置，还有时当这段代码结束运行时却不会被设置。

我们可以通过在 `if` 子句里使用一个微任务来确保操作顺序的一致性，以达到平衡两个子句的目的：

```js
customElement.prototype.getData = url => {
  if (this.cache[url]) {
    queueMicrotask(() => {
      this.data = this.cache[url];
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url).then(result => result.arrayBuffer()).then(data => {
      this.cache[url] = data;
      this.data = data;
      this.dispatchEvent(new Event("load"));
    )};
  }
};
```

通过在两种情况下各自都通过一个微任务（`if` 中用的是 `queueMicrotask()` 而 `else` 子句中通过 {{domxref("fetch()")}} 使用了 promise）处理了设置 `data` 和触发 `load` 事件，平衡了两个子句。

#### 批量操作

也可以使用微任务从不同来源将多个请求收集到单一的批处理中，从而避免对处理同类工作的多次调用可能造成的开销。

下面的代码片段创建了一个函数，将多个消息放入一个数组中批处理，通过一个微任务在上下文退出时将这些消息作为单一的对象发送出去。

```js
const messageQueue = [];

let sendMessage = (message) => {
  messageQueue.push(message);

  if (messageQueue.length === 1) {
    queueMicrotask(() => {
      const json = JSON.stringify(messageQueue);
      messageQueue.length = 0;
      fetch("url-of-receiver", json);
    });
  }
};
```

当 `sendMessage()`

被调用时，指定的消息首先被推入消息队列数组。接着事情就变得有趣了。

如果我们刚加入数组的消息是第一条，就入列一个将会发送一个批处理的微任务。照旧，当 JavaScript 执行路径到达顶层，恰在运行回调之前，那个微任务将会执行。这意味着之后的间歇期内造成的对 `sendMessage()` 的任何调用都会将其各自的消息推入消息队列，但囿于入列微任务逻辑之前的数组长度检查，不会有新的微任务入列。

当微任务运行之时，等待它处理的可能是一个有若干条消息的数组。微任务函数先是通过 {{jsxref("JSON.stringify()")}} 方法将消息数组编码为 JSON。其后，数组中的内容就不再需要了，所以清空 `messageQueue` 数组。最后，使用 {{domxref("fetch()")}} 方法将编码后的 JSON 发往服务器。

这使得同一次事件循环迭代期间发生的每次 `sendMessage()` 调用将其消息添加到同一个 `fetch()` 操作中，而不会让诸如 timeouts 等其他可能的定时任务推迟传递。

服务器将接到 JSON 字符串，然后大概会将其解码并处理其从结果数组中找到的消息。

## 例子

### 简单微任务示例

在这个简单的例子中，我们将看到入列一个微任务后，会引起其回调函数在顶层脚本完毕后运行。

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
let logElem = document.getElementById("log");
let log = (s) => (logElem.innerHTML += s + "<br>");
```

在下面的代码中，我们看到对 {{domxref("queueMicrotask()")}} 的一次调用被用来调度一个微任务以使其运行。这次调用包含了 `log()`，一个简单的向屏幕输出文字的自定义函数。

```js
log("Before enqueueing the microtask");
queueMicrotask(() => {
  log("The microtask has run.");
});
log("After enqueueing the microtask");
```

#### 结果

{{EmbedLiveSample("简单微任务示例", 640, 80)}}

### timeout 和微任务的示例

在这个例子中，一个 timeout 在 0 毫秒后被触发（或者 "尽可能快"）。这演示了当调用一个新任务（如通过使用 `setTimeout()`）时的“尽可能快”意味着什么，以及比之于使用一个微任务的不同。

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
let logElem = document.getElementById("log");
let log = (s) => (logElem.innerHTML += s + "<br>");
```

在下面的代码中，我们看到对 {{domxref("queueMicrotask()")}} 的一次调用被用来调度一个微任务以使其运行。这次调用包含了 `log()`，一个简单的向屏幕输出文字的自定义函数。

以下代码调度了一个 0 毫秒后触发的 timeout，而后入列了一个微任务。前后被对 `log()` 的调用包住，输出附加的信息。

```js
let callback = () => log("Regular timeout callback has run");

let urgentCallback = () => log("*** Oh noes! An urgent callback has run!");

log("Main program started");
setTimeout(callback, 0);
queueMicrotask(urgentCallback);
log("Main program exiting");
```

#### 结果

{{EmbedLiveSample("timeout_和微任务的示例", 640, 100)}}

可以注意到，从主程序体中输出的日志首先出现，接下来是微任务中的输出，其后是 timeout 的回调。这是因为当处理主程序运行的任务退出后，微任务队列先于 timeout 回调所在的任务队列被处理。要记住任务和微任务是保持各自独立的队列的，且微任务先执行有助于保持这一点。

### 来自函数的微任务

这个例子通过增加一个完成同样工作的函数，略微地扩展了前一个例子。该函数使用 `queueMicrotask()` 调度一个微任务。此例的重要之处是微任务不在其所处的函数退出时，而是在主程序退出时被执行。

```html hidden
<pre id="log"></pre>
```

#### JavaScript

```js hidden
let logElem = document.getElementById("log");
let log = (s) => (logElem.innerHTML += s + "<br>");
```

以下是主程序代码。这里的 `doWork()` 函数调用了 `queueMicrotask()`，但微任务仍在整个程序退出时才触发，因为那才是任务退出而执行栈上为空的时刻。

```js
let callback = () => log("Regular timeout callback has run");

let urgentCallback = () => log("*** Oh noes! An urgent callback has run!");

let doWork = () => {
  let result = 1;

  queueMicrotask(urgentCallback);

  for (let i = 2; i <= 10; i++) {
    result *= i;
  }
  return result;
};

log("Main program started");
setTimeout(callback, 0);
log(`10! equals ${doWork()}`);
log("Main program exiting");
```

#### 结果

{{EmbedLiveSample("来自函数的微任务", 640, 100)}}

## 参见

- [In depth: Microtasks and the JavaScript runtime environment](/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
- {{domxref("queueMicrotask()")}}
- [Asynchronous JavaScript](/zh-CN/docs/Learn/JavaScript/Asynchronous)

  - [General asynchronous programming concepts](/zh-CN/docs/Learn/JavaScript/Asynchronous/Concepts)
  - [Introducing asynchronous JavaScript](/zh-CN/docs/Learn/JavaScript/Asynchronous/Introducing)
  - [Cooperative asynchronous JavaScript: Timeouts and intervals](/zh-CN/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
  - [Graceful asynchronous programming with Promises](/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises)
  - [Choosing the right approach](/zh-CN/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
