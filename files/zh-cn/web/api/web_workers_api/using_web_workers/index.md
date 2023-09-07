---
title: 使用 Web Workers
slug: Web/API/Web_Workers_API/Using_web_workers
---

{{DefaultAPISidebar("Web Workers API")}}

Web Worker 为 Web 内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。此外，它们可以使用 [`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest)（尽管 `responseXML` 和 `channel` 属性总是为空）或 [`fetch`](/zh-CN/docs/Web/API/Fetch_API)（没有这些限制）执行 I/O。一旦创建，一个 worker 可以将消息发送到创建它的 JavaScript 代码，通过将消息发布到该代码指定的事件处理器（反之亦然）。

本文详细介绍了如何使用 web worker。

## Web Workers API

一个 worker 是使用一个构造函数创建的一个对象（例如 {{domxref("Worker.Worker", "Worker()")}}）运行一个命名的 JavaScript 文件——这个文件包含将在 worker 线程中运行的代码; worker 运行在另一个全局上下文中，不同于当前的{{domxref("window")}}。因此，在 {{domxref("Worker")}} 内通过 {{domxref("window")}} 获取全局作用域（而不是{{domxref("window.self","self")}}）将返回错误。

在专用 worker 的情况下，{{domxref("DedicatedWorkerGlobalScope")}} 对象代表了 worker 的上下文（专用 worker 是指标准 worker 仅在单一脚本中被使用；共享 worker 的上下文是 {{domxref("SharedWorkerGlobalScope")}} 对象）。一个专用 worker 仅能被首次生成它的脚本使用，而共享 worker 可以同时被多个脚本使用。

> **备注：** 参见 [Web Workers API 落地页](/zh-CN/docs/Web/API/Web_Workers_API)以获取 worker 的参考文档和更多指引。

在 worker 线程中你可以运行任何你喜欢的代码，不过有一些例外情况。比如：在 worker 内，不能直接操作 DOM 节点，也不能使用 {{domxref("window")}} 对象的默认方法和属性。但是你可以使用大量 `window` 对象之下的东西，包括 [WebSockets](/zh-CN/docs/Web/API/WebSockets_API)，以及 [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API) 等数据存储机制。查看 [Web Workers 可以使用的函数和类](/zh-CN/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) 获取详情。

workers 和主线程间的数据传递通过这样的消息机制进行——双方都使用 `postMessage()` 方法发送各自的消息，使用 `onmessage` 事件处理函数来响应消息（消息被包含在 [`message`](/zh-CN/docs/Web/API/BroadcastChannel/message_event) 事件的 data 属性中）。这个过程中数据并不是被共享而是被复制。

只要运行在同源的父页面中，worker 可以依次生成新的 worker；并且可以使用 [`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest) 进行网络 I/O，但是 `XMLHttpRequest` 的 `responseXML` 和 `channel` 属性总会返回 `null`。

## 专用 worker

如前文所述，一个专用 worker 仅能被生成它的脚本所使用。这一部分将探讨[专用 worker 基础示例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker)（[运行专用 worker](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)）中的 JavaScript 代码：将你输入的 2 个数字作乘法。输入的数字会发送给一个专用 worker，由专用 worker 作乘法后，再返回给页面进行展示。

这个例子很小，但是我们决定在保持简单的同时向你介绍基础的 worker 概念。更多的细节会在之后的文章中进行讲解。

### worker 特性检测

为了更好的错误处理控制以及向下兼容，将你的 worker 运行代码包裹在以下代码中是一个很好的想法（[main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)）：

```js
if (window.Worker) {
  // …
}
```

### 生成一个专用 worker

创建一个新的 worker 很简单。你需要做的是调用 {{domxref("Worker.Worker", "Worker()")}} 构造器，指定一个脚本的 URI 来执行 worker 线程（[main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js)）：

```js
const myWorker = new Worker("worker.js");
```

### 专用 worker 中消息的接收和发送

你可以通过 {{domxref("Worker.postMessage", "postMessage()")}} 方法和 {{domxref("Worker.onmessage", "onmessage")}} 事件处理函数触发 worker 的方法。当你想要向一个 worker 发送消息时，你只需要这样做（[main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)）：

```js
first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

这段代码中变量 `first` 和 `second` 代表 2 个 {{htmlelement("input")}} 元素；它们当中任意一个的值发生改变时，`myWorker.postMessage([first.value,second.value])` 会将这 2 个值组成数组发送给 worker。你可以在消息中发送许多你想发送的东西。

在 worker 中接收到消息后，我们可以写这样一个事件处理函数代码作为响应（[worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js)）：

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

`onmessage` 处理函数允许我们在收到消息时运行一些代码，消息本身在 `message` 事件 `data` 属性进行使用。这里我们简单的对这 2 个数字作乘法处理并再次使用 `postMessage()` 方法，将结果回传给主线程。

回到主线程，我们再次使用 `onmessage` 以响应 worker 回传的消息：

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

在这里我们获取消息事件的数据，并且将它设置为显示结果段落的 `textContent`，所以用户可以直接看到运算的结果。

> **备注：** 在主线程中使用时，`onmessage` 和 `postMessage()` 必须挂在 `worker` 对象上，而在 worker 中使用时不用这样做。原因是，在 worker 内部，worker 是有效的全局作用域。

> **备注：** 当一个消息在主线程和 worker 之间传递时，它被复制或者转移了，而不是共享。请参阅[worker 中数据的接收与发送：详细介绍](#worker_中数据的接收与发送：详细介绍) 获取更详尽的解释。

### 终止 worker

如果你需要从主线程中立刻终止一个运行中的 worker，可以调用 worker 的 {{domxref("Worker", "terminate")}} 方法：

```js
myWorker.terminate();
```

worker 线程会被立即终止。

### 处理错误

当 worker 出现运行中错误时，它的 `onerror` 事件处理函数会被调用。它会收到一个扩展了 `ErrorEvent` 接口的名为 `error` 的事件。

该事件不会冒泡并且可以被取消；为了防止触发默认动作，worker 可以调用错误事件的 [`preventDefault()`](/zh-CN/docs/Web/API/Event/preventDefault) 方法。

错误事件有以下三个用户关心的字段：

- `message`
  - : 可读性良好的错误消息。
- `filename`
  - : 发生错误的脚本文件名。
- `lineno`
  - : 发生错误时所在脚本文件的行号。

### 生成 subworker

如果需要的话，worker 能够生成更多的 worker，这就是所谓的 subworker，它们必须托管在同源的父页面内。而且，subworker 解析 URI 时会相对于父 worker 的地址而不是自身页面的地址。这使得 worker 更容易记录它们之间的依赖关系。

### 引入脚本与库

Worker 线程能够访问一个全局函数 `importScripts()` 来引入脚本，该函数接受 0 个或者多个 URI 作为参数来引入资源；以下例子都是合法的：

```js
importScripts(); /* 什么都不引入 */
importScripts("foo.js"); /* 只引入 "foo.js" */
importScripts("foo.js", "bar.js"); /* 引入两个脚本 */
importScripts("//example.com/hello.js"); /* 你可以从其他来源导入脚本 */
```

浏览器加载并运行每一个列出的脚本。每个脚本中的全局对象都能够被 worker 使用。如果脚本无法加载，将抛出 `NETWORK_ERROR` 异常，接下来的代码也无法执行。而之前执行的代码（包括使用 {{domxref("setTimeout()")}} 异步执行的代码）依然能够运行。`importScripts()` **之后**的函数声明依然会被保留，因为它们始终会在其他代码之前运行。

> **备注：** 脚本的下载顺序不固定，但执行时会按照传入 `importScripts()` 中的文件名顺序进行。这个过程是同步完成的；直到所有脚本都下载并运行完毕，`importScripts()` 才会返回。

## 共享 worker

一个共享 worker 可以被多个脚本使用——即使这些脚本正在被不同的 window、iframe 或者 worker 访问。这一部分，我们会讨论[共享 worker 基础示例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker)（[运行共享 worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)）中的 JavaScript 代码：该示例与专用 worker 基础示例非常相像，只是有 2 个可用函数被存放在不同脚本文件中：两数相乘函数，以及求平方函数。这两个脚本使用同一个 worker 来完成实际需要的运算。

这里，我们关注一下专用 worker 和共享 worker 之间的区别。在这个示例中有 2 个 HTML 页面，每个页面所包含的 JavaScript 代码使用的是同一个 worker。

> **备注：** 如果共享 worker 可以被多个浏览上下文调用，所有这些浏览上下文必须属于同源（相同的协议，主机和端口号）。

> **备注：** 在 Firefox 中，共享 worker 不能被私有和非私有 window 对象的 document 所共享（[Firefox bug 1177621](https://bugzil.la/1177621)）。

### 生成一个共享 worker

生成一个新的共享 worker 与生成一个专用 worker 非常相似，只是构造器的名字不同（查看 [index.html](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker/index.html) 和 [index2.html](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker/index2.html)）——生成共享 worker 的代码如下：

```js
const myWorker = new SharedWorker("worker.js");
```

一个非常大的区别在于，与一个共享 worker 通信必须通过 `port` 对象——一个确切的打开的端口供脚本与 worker 通信（在专用 worker 中这一部分是隐式进行的）。

在传递消息之前，端口连接必须被显式的打开，打开方式是使用 `onmessage` 事件处理函数或者 `start()` 方法。只有一种情况下需要调用 `start()` 方法，那就是 `message` 事件被 `addEventListener()` 方法使用。

> **备注：** 在使用 `start()` 方法打开端口连接时，如果父级线程和 worker 线程需要双向通信，那么它们都需要调用该方法。

### 共享 worker 中消息的接收和发送

现在，消息可以像之前那样发送到 worker 了，但是 `postMessage()` 方法必须被端口对象调用（你会再一次看到 [multiply.js](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker/multiply.js) 和 [square.js](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker/square.js) 中相似的结构）：

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("Message posted to worker");
};
```

回到 worker 中，这里也有些复杂（[worker.js](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker/worker.js)）:

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

首先，当一个端口连接被创建时（例如：在父级线程中，设置 `onmessage` 事件处理函数，或者显式调用 `start()` 方法时），使用 `onconnect` 事件处理函数来执行代码。

使用事件的 `ports` 属性来获取端口并存储在变量中。

然后，为端口添加一个 `onmessage` 处理函数用来做运算并回传结果给主线程。在 worker 线程中设置此 `onmessage` 处理函数也会隐式的打开与主线程的端口连接，因此这里跟前文一样，对 `port.start()` 的调用也是不必要的。

最后，回到主脚本，我们处理消息（你会又一次看到 [multiply.js](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker/multiply.js) 和 [square.js](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker/square.js)中相似的结构）：

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("Message received from worker");
};
```

当一条消息通过端口回到 worker，我们将运算结果放入结果段落中合适的地方。

## 关于线程安全

{{domxref("Worker")}} 接口会生成真正的操作系统级别的线程，如果你不太小心，那么并发会对你的代码产生有趣的影响。

然而，对于 web worker 来说，与其他线程的通信点会被很小心的控制，这意味着你很难引起并发问题。你没有办法去访问非线程安全的组件或者是 DOM，此外你还需要通过序列化对象来与线程交互特定的数据。所以你要是不费点劲儿，还真搞不出错误来。

## 内容安全策略

有别于创建它的 document 对象，worker 有它自己的执行上下文。因此普遍来说，worker 并不受限于创建它的 document（或者父级 worker）的[内容安全策略](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)。我们来举个例子，假设一个 document 有如下头部声明：

```http
Content-Security-Policy: script-src 'self'
```

这个声明有一部分作用在于，禁止它内部包含的脚本代码使用 [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 方法。然而，如果脚本代码创建了一个 worker，在 worker 上下文中执行的代码却是可以使用 `eval()` 的。

为了给 worker 指定内容安全策略，必须为发送 worker 代码的请求本身设置 [Content-Security-Policy](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy) 响应标头。

有一个例外情况，即 worker 脚本的源如果是一个全局性的唯一的标识符（例如，它的 URL 协议为 data 或 blob），worker 则会继承创建它的 document 或者 worker 的 CSP。

## worker 中数据的接收与发送：详细介绍

在主页面与 worker 之间传递的数据是通过**拷贝**，而不是共享来完成的。传递给 `worker` 的对象需要经过序列化，接下来在另一端还需要反序列化。页面与 `worker` **不会共享同一个实例**，最终的结果就是在每次通信结束时生成了数据的**一个副本**。大部分浏览器使用[结构化克隆](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)来实现该特性。

在往下进行之前，出于教学的目的，让我们创建一个名为 `emulateMessage()` 的函数，它将模拟在从 `worker` 到主页面（反之亦然）的通信过程中，变量的“_拷贝而非共享_”行为：

```js
function emulateMessage(vVal) {
  return eval(`(${JSON.stringify(vVal)})`);
}

// Tests

// test #1
const example1 = new Number(3);
console.log(typeof example1); // object
console.log(typeof emulateMessage(example1)); // number

// test #2
const example2 = true;
console.log(typeof example2); // boolean
console.log(typeof emulateMessage(example2)); // boolean

// test #3
const example3 = new String("Hello World");
console.log(typeof example3); // object
console.log(typeof emulateMessage(example3)); // string

// test #4
const example4 = {
  name: "Carina Anand",
  age: 43,
};
console.log(typeof example4); // object
console.log(typeof emulateMessage(example4)); // object

// test #5
function Animal(type, age) {
  this.type = type;
  this.age = age;
}
const example5 = new Animal("Cat", 3);
console.log(example5.constructor); // Animal
console.log(emulateMessage(example5).constructor); // Object
```

拷贝而并非共享的那个值称为*消息*（message）。再来谈谈 `worker`，你可以使用 `postMessage()` 将*消息*传递给主线程或从主线程传送回来。`message` 事件的 {{domxref("MessageEvent.data", "data")}} 属性就包含了从 worker 传回来的数据。

**example.html**（主页面）：

```js
const myWorker = new Worker("my_task.js");

myWorker.onmessage = (event) => {
  console.log(`Worker said : ${event.data}`);
};

myWorker.postMessage("ali");
```

**my_task.js**（worker 文件）：

```js
postMessage("I'm working before postMessage('ali').");

onmessage = (event) => {
  postMessage(`Hi, ${event.data}`);
};
```

[结构化克隆](/zh-CN/docs/Web/Guide/API/DOM/The_structured_clone_algorithm)算法可以接收 JSON 数据以及一些 JSON 不能表示的数据——比如循环引用。

### 传递数据的例子

#### 例子 1：传输 JSON 的高级方式和创建一个交换系统

如果你需要传输非常复杂的数据，还要同时在主页与 Worker 内调用多个方法，那么可以考虑创建一个类似下面的系统。

首先，我们创建一个 `QueryableWorker` 的类，它接收 worker 的 URL、一个默认侦听函数和一个错误处理函数作为参数，这个类将会记录所有的侦听的列表并且帮助我们与 worker 进行通信。

```js
function QueryableWorker(url, defaultListener, onError) {
  const instance = this;
  const worker = new Worker(url);
  const listeners = {};

  this.defaultListener = defaultListener ?? (() => {});

  if (onError) {
    worker.onerror = onError;
  }

  this.postMessage = (message) => {
    worker.postMessage(message);
  };

  this.terminate = () => {
    worker.terminate();
  };
}
```

紧接着，我们写出新增和删除侦听的方法。

```js
this.addListeners = (name, listener) => {
  listeners[name] = listener;
};

this.removeListeners = (name) => {
  delete listeners[name];
};
```

这里我们让 worker 处理 2 个这样的简单操作：区别 2 个数字并在 3 秒后弹框提示。为了完成这个操作，我们首先实现一个 `sendQuery` 方法，该方法可以查询 worker 是否真正有我们所需要的对应方法。

```js
// 该函数至少需要一个参数，即我们想要查询的方法名称。
// 然后我们可以传入方法所需的参数。
this.sendQuery = (queryMethod, ...queryMethodArguments) => {
  if (!queryMethod) {
    throw new TypeError(
      "QueryableWorker.sendQuery takes at least one argument",
    );
  }
  worker.postMessage({
    queryMethod,
    queryMethodArguments,
  });
};
```

我们以 `onmessage` 方法作为 QueryableWorker 的结尾。如果 worker 有我们所需要的对应的方法，它就会返回相对应的侦听方法的名字以及所需要的参数，我们只需要在侦听列表 `listeners` 中找到它：

```js
worker.onmessage = (event) => {
  if (
    event.data instanceof Object &&
    Object.hasOwn(event.data, "queryMethodListener") &&
    Object.hasOwn(event.data, "queryMethodArguments")
  ) {
    listeners[event.data.queryMethodListener].apply(
      instance,
      event.data.queryMethodArguments,
    );
  } else {
    this.defaultListener.call(instance, event.data);
  }
};
```

现在回到 worker 中。首先我们需要一个能够完成这 2 个操作的方法：

```js
const queryableFunctions = {
  getDifference(a, b) {
    reply("printStuff", a - b);
  },
  waitSomeTime() {
    setTimeout(() => {
      reply("doAlert", 3, "seconds");
    }, 3000);
  },
};

function reply(queryMethodListener, ...queryMethodArguments) {
  if (!queryMethodListener) {
    throw new TypeError("reply - takes at least one argument");
  }
  postMessage({
    queryMethodListener,
    queryMethodArguments,
  });
}

// 当主页面直接调用 QueryWorker 的 postMessage 方法时，该方法被调用。
function defaultReply(message) {
  // 做点什么
}
```

`onmessage` 方法也就很简单了：

```js
onmessage = (event) => {
  if (
    event.data instanceof Object &&
    Object.hasOwn(event.data, "queryMethod") &&
    Object.hasOwn(event.data, "queryMethodArguments")
  ) {
    queryableFunctions[event.data.queryMethod].apply(
      self,
      event.data.queryMethodArguments,
    );
  } else {
    defaultReply(event.data);
  }
};
```

接下来给出一个完整的实现：

**example.html**（主页面）：

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN Example - Queryable worker</title>
    <script type="text/javascript">
      // QueryableWorker 实例的方法：
      //   * sendQuery(queryable function name, argument to pass 1, argument to pass 2, etc. etc.): 调用一个 Worker 的可查询函数
      //   * postMessage(string or JSON Data): 见 Worker.prototype.postMessage()
      //   * terminate(): 终止 Worker
      //   * addListener(name, function): 添加一个监听器
      //   * removeListener(name): 移除一个监听器
      // QueryableWorker 实例的属性：
      //   * defaultListener: 默认监听器只在 Worker 直接调用 postMessage() 函数时执行
      function QueryableWorker(url, defaultListener, onError) {
        const instance = this;
        const worker = new Worker(url);
        const listeners = {};

        this.defaultListener = defaultListener ?? (() => {});

        if (onError) {
          worker.onerror = onError;
        }

        this.postMessage = (message) => {
          worker.postMessage(message);
        };

        this.terminate = () => {
          worker.terminate();
        };

        this.addListener = (name, listener) => {
          listeners[name] = listener;
        };

        this.removeListener = (name) => {
          delete listeners[name];
        };

        // 这个函数至少需要一个参数，即我们想要查询的方法名称。
        // 然后我们可以传入方法所需的参数。
        this.sendQuery = (queryMethod, ...queryMethodArguments) => {
          if (!queryMethod) {
            throw new TypeError(
              "QueryableWorker.sendQuery takes at least one argument",
            );
          }
          worker.postMessage({
            queryMethod,
            queryMethodArguments,
          });
        };

        worker.onmessage = (event) => {
          if (
            event.data instanceof Object &&
            Object.hasOwn(event.data, "queryMethodListener") &&
            Object.hasOwn(event.data, "queryMethodArguments")
          ) {
            listeners[event.data.queryMethodListener].apply(
              instance,
              event.data.queryMethodArguments,
            );
          } else {
            this.defaultListener.call(instance, event.data);
          }
        };
      }

      // 你自定义的 "queryable" worker
      const myTask = new QueryableWorker("my_task.js");

      // 你自定义的 "listeners"
      myTask.addListener("printStuff", (result) => {
        document
          .getElementById("firstLink")
          .parentNode.appendChild(
            document.createTextNode(`The difference is ${result}!`),
          );
      });

      myTask.addListener("doAlert", (time, unit) => {
        alert(`Worker waited for ${time} ${unit} :-)`);
      });
    </script>
  </head>
  <body>
    <ul>
      <li>
        <a
          id="firstLink"
          href="javascript:myTask.sendQuery('getDifference', 5, 3);"
          >What is the difference between 5 and 3?</a
        >
      </li>
      <li>
        <a href="javascript:myTask.sendQuery('waitSomeTime');"
          >Wait 3 seconds</a
        >
      </li>
      <li>
        <a href="javascript:myTask.terminate();">terminate() the Worker</a>
      </li>
    </ul>
  </body>
</html>
```

**my_task.js**（worker 文件）：

```js
const queryableFunctions = {
  // 示例 1：得到两个数字的差值：
  getDifference(minuend, subtrahend) {
    reply("printStuff", minuend - subtrahend);
  },

  // 示例 2：等待三秒
  waitSomeTime() {
    setTimeout(() => {
      reply("doAlert", 3, "seconds");
    }, 3000);
  },
};

// 系统函数

function defaultReply(message) {
  // 你的默认 PUBLIC 函数只在主页面直接调用 queryableWorker.postMessage() 方法时执行。
  // 做点什么
}

function reply(queryMethodListener, ...queryMethodArguments) {
  if (!queryMethodListener) {
    throw new TypeError("reply - not enough arguments");
  }
  postMessage({
    queryMethodListener,
    queryMethodArguments,
  });
}

onmessage = (event) => {
  if (
    event.data instanceof Object &&
    Object.hasOwn(event.data, "queryMethod") &&
    Object.hasOwn(event.data, "queryMethodArguments")
  ) {
    queryableFunctions[event.data.queryMethod].apply(
      self,
      event.data.queryMethodArguments,
    );
  } else {
    defaultReply(event.data);
  }
};
```

这个实例中，可以对从主页面到 worker、以及 worker 到主页面之间传递的消息内容进行切换。而且属性名 "queryMethod"、"queryMethodListeners" 和 "queryMethodArguments" 可以是任何东西，只要它们在 `QueryableWorker` 和 `worker` 中保持一致。

### 通过转让所有权（可转移对象）来传递数据

现代浏览器包含另一种性能更高的方法来将特定类型的对象传递给一个 worker 或从 worker 传回。[可转移对象](http://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)从一个上下文转移到另一个上下文而不会经过任何拷贝操作。这意味着当传递大型数据集时会获得极大的性能提升。

例如，当你将一个 {{jsxref("ArrayBuffer")}} 对象从主应用转让到 Worker 中，原始的 {{jsxref("ArrayBuffer")}} 被清除并且无法使用。它包含的内容会（完整无差的）传递给 Worker 上下文。

```js
// 创建一个 32MB 的“文件”，用从 0 到 255 的连续数值填充它——32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

> **备注：** 获取更多该方法相关的可转让对象、性能及特性检测等方法，请参阅 HTML5 Rocks 中的[Transferable Objects: Lightning Fast!](http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast) 。

## 嵌入式 worker

目前没有一种“官方”的方法能够像 {{ HTMLElement("script") }} 元素一样将 worker 的代码嵌入道到网页中。但是如果一个 {{ HTMLElement("script") }} 元素没有 `src` 属性，并且它的 `type` 属性没有指定成一个可运行的 MIME type，那么它就会被认为是一个数据块元素，并且能够被 JavaScript 使用。“数据块”是 HTML5 中一个十分常见的特性，它可以携带几乎任何文本类型的数据。所以，你能够以如下方式嵌入一个 worker：

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN Example - Embedded worker</title>
    <script type="text/js-worker">
      // 该脚本不会被 JS 引擎解析，因为它的 mime-type 是 text/js-worker。
      const myVar = 'Hello World!';
      // 剩下的 worker 代码写到这里。
    </script>
    <script>
      // 该脚本会被 JS 引擎解析，因为它的 mime-type 是 text/javascript。
      function pageLog(sMsg) {
        // 使用 fragment：这样浏览器只会进行一次渲染/重排。
        const frag = document.createDocumentFragment();
        frag.appendChild(document.createTextNode(sMsg));
        frag.appendChild(document.createElement("br"));
        document.querySelector("#logDisplay").appendChild(frag);
      }
    </script>
    <script type="text/js-worker">
      // 该脚本不会被 JS 引擎解析，因为它的 mime-type 是 text/js-worker。
      onmessage = (event) => {
        postMessage(myVar);
      };
      // 剩下的 worker 代码写到这里。
    </script>
    <script>
      // 该脚本会被 JS 引擎解析，因为它的 mime-type 是 text/javascript。

      // 过去存在 blob builder，但现在我们使用 Blob
      const blob = new Blob(
        Array.prototype.map.call(
          document.querySelectorAll("script[type='text\/js-worker']"),
          (script) => script.textContent,
          { type: "text/javascript" },
        ),
      );

      // 创建一个新的 document.worker 属性，包含所有 "text/js-worker" 脚本。
      document.worker = new Worker(window.URL.createObjectURL(blob));

      document.worker.onmessage = (event) => {
        pageLog(`Received: ${event.data}`);
      };

      // 启动 worker。
      window.onload = () => {
        document.worker.postMessage("");
      };
    </script>
  </head>
  <body>
    <div id="logDisplay"></div>
  </body>
</html>
```

现在，嵌入式 worker 已经嵌套进了一个自定义的 `document.worker` 属性中。

这样也不足为奇，你仍然可以将一个函数转换为 blob，然后为这个 blob 生成 URL 对象。比如：

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## 更多示例

本节提供了几个如何使用 web worker 的例子。

### 在后台执行运算

worker 的一个优势在于能够执行处理器密集型的运算而不会阻塞 UI 线程。在下面的例子中，worker 用于计算斐波那契数。

#### JavaScript 代码

下面的 JavaScript 代码保存在“fibonacci.js”文件中，与下一节的 HTML 文件关联。

```js
self.onmessage = (e) => {
  const userNum = Number(e.data);
  fibonacci(userNum);
};

function fibonacci(num) {
  let a = 1;
  let b = 0;
  while (num >= 0) {
    [a, b] = [a + b, a];
    num--;
  }

  self.postMessage(b);
}
```

worker 将属性 `onmessage` 设置为一个函数，当 worker 对象调用 `postMessage()` 时该函数会接收到发送过来的信息（注意，这么使用并不等同定义一个同名的*函数*。`var onmessage`、`let onmessage` 与 `function onmessage` 将会定义与该名字相同的全局属性，但是它们不会注册能够接收从创建 worker 的网页发送过来的消息的函数）。这将执行数学运算，并最终将结果返回到主线程。

#### HTML 代码

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Fibonacci number generator</title>
    <style>
      body {
        width: 500px;
      }

      div,
      p {
        margin-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <form>
      <div>
        <label for="number"
          >Enter a number that is an index position in the fibonacci sequence to
          see what number is in that position (e.g. enter 5 and you'll get a
          result of 8 — fibonacci index position 5 is 8).</label
        >
        <input type="number" id="number" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>

    <p id="result"></p>

    <script>
      const form = document.querySelector("form");
      const input = document.querySelector('input[type="number"]');
      const result = document.querySelector("p#result");
      const worker = new Worker("fibonacci.js");

      worker.onmessage = (event) => {
        result.textContent = event.data;
        console.log(`Got: ${event.data}`);
      };

      worker.onerror = (error) => {
        console.log(`Worker error: ${error.message}`);
        throw error;
      };

      form.onsubmit = (e) => {
        e.preventDefault();
        worker.postMessage(input.value);
        input.value = "";
      };
    </script>
  </body>
</html>
```

网页创建了一个 ID 为 `result` 的用于显示运算结果的 `<div>` 元素，然后生成 worker。在生成 worker 后，`onmessage` 处理函数配置为通过设置 `div` 元素的内容来显示运算结果，然后 `onerror` 处理函数被设置为将错误消息记录到 devtools 控制台。

最后，向 worker 发送一条消息来启动它。

[运行这个示例](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/)。

### 划分任务给多个 worker

当多核系统流行开来，将复杂的运算任务分配给多个 worker 来运行已经变得十分有用，这些 worker 会在多处理器内核上运行这些任务。

## 其他类型的 worker

除了专用和共享的 web worker，还有一些其他类型的 worker：

- [ServiceWorkers](/zh-CN/docs/Web/API/Service_Worker_API) 基本上是作为代理服务器，位于 web 应用程序、浏览器和网络（如果可用）之间。它们的目的是（除开其他方面）创建有效的离线体验，拦截网络请求，以及根据网络是否可用采取合适的行动并更新驻留在服务器上的资源。它们还将允许访问推送通知和后台同步 API。
- [Audio Worklet](/zh-CN/docs/Web/API/Web_Audio_API#使用_javascript_处理音频) 提供了在 worklet（轻量级的 web worker）上下文中直接完成脚本化音频处理的可能性。

## 调试 worker 线程

大多数浏览器都允许你在 JavaScript 调试器中调试 Web Worker，其方式与调试主线程*完全相同*！例如，Firefox 和 Chrome 都列出了主线程和活动 worker 线程的 JavaScript 源文件，所有这些文件都可以打开以设置断点和日志点。

要了解如何调试 Web Worker，请参阅每个浏览器的 JavaScript 调试器的文档：

- [Chrome Sources panel](https://developer.chrome.com/docs/devtools/javascript/sources/)
- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

## worker 中可用的函数和接口

你可以在 web worker 中使用大多数的标准 JavaScript 特性，包括：

- {{domxref("Navigator")}}
- {{domxref("XMLHttpRequest")}}
- {{jsxref("Global_Objects/Array", "Array")}}、{{jsxref("Global_Objects/Date", "Date")}}、{{jsxref("Global_Objects/Math", "Math")}} 和 {{jsxref("Global_Objects/String", "String")}}
- {{domxref("setTimeout()")}} 和 {{domxref("setInterval()")}}

在一个 worker 中最主要的你*不能*做的事情就是直接影响父页面。包括操作父页面的节点以及使用页面中的对象。你只能间接地实现，通过 {{domxref("DedicatedWorkerGlobalScope.postMessage")}} 回传消息给主脚本，然后从主脚本那里执行操作或变化。

> **备注：** 你可以使用网站测试一个方法是否对 worker 可用： <https://worker-playground.glitch.me/>。例如，如果你在 Firefox 84 的网站上输入 [EventSource](/zh-CN/docs/Web/API/EventSource)，你会发现在 service worker 不支持这个方法，但在专用和共享 worker 中支持。

> **备注：** 获取 worker 中完整的方法列表，请参阅 [worker 可用的方法和接口](/zh-CN/docs/Web/Reference/Functions_and_classes_available_to_workers)。

## 规范

{{Specifications}}

## 相关链接

- [`Worker`](/zh-CN/docs/Web/API/Worker) 接口
- [`SharedWorker`](/zh-CN/docs/Web/API/SharedWorker) 接口
- [worker 可用的方法](/zh-CN/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
- [`OffscreenCanvas`](/zh-CN/docs/Web/API/OffscreenCanvas) 接口
