---
title: 代理通信与协调
slug: Web/JavaScript/Guide/Agent_communication_and_coordination
l10n:
  sourceCommit: edc9ab5479d1253d9edd93bfe90dd1d100605c26
---

**代理**（agent）是 JavaScript 中用于描述自主 JavaScript 执行器的正式术语。你编写的大部分 JavaScript 都在单个线程中执行，但你可以通过 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 等特定的平台 API 创建更多线程。

本指南解释与线程协调相关的一般计算机科学概念，以及 JavaScript 如何实现它们。它还介绍了用于实现跨线程通信的 API：{{domxref("Worker/postMessage", "postMessage()")}}、{{jsxref("SharedArrayBuffer")}} 和 {{jsxref("Atomics")}}。

建议在阅读本文之前先了解[类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)。之后，你可以继续阅读[执行模型](/zh-CN/docs/Web/JavaScript/Reference/Execution_model)参考文档以深入了解技术细节。

> [!NOTE]
> 在本文中，我们会交替使用“线程”和“代理”这两个术语。代理是 JavaScript 引擎层面的抽象，而线程是实现细节；一个代理可能运行在独立的操作系统线程中，也可能不是。从技术上讲，我们本应处处使用“代理”，因为在 JavaScript 中你只能与代理交互，但在讨论锁等一般计算机科学概念时，使用“线程”要自然得多。
>
> 另外，本指南与 [AI 智能体](https://en.wikipedia.org/wiki/AI_agent)无关。

## 两个代理之间的通信

JavaScript 语言规范并未提供用于创建代理、获取对另一个代理的引用或在代理之间交换数据的 API。尽管“worker”这一概念在 web 和 Node.js 中都存在，但两者的 API 有很大差异。本指南使用 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API)。

### 创建代理

父代理使用 {{domxref("Worker/Worker", "Worker()")}} 构造函数创建子代理并持有对它的引用：

```js
// -- main.js --
const worker = new Worker("./worker.js", { type: "module" });
```

父代理可以是一个 window，也可以是另一个 worker。例如，要在浏览器中运行此示例，你可以在 HTML 文件中引用 `main.js`：

```html
<script src="main.js" type="module"></script>
```

### 通过消息通信

两个代理通过*消息*进行通信。消息经由*消息通道*发送。父代理（这里的 `main.js`）与其子代理（这里的 `worker.js`）默认就有一条消息通道，该通道通向它们各自的默认端口：

- `main.js` 使用 {{domxref("Worker/postMessage", "worker.postMessage()")}} 发送消息，并通过 `worker` 对象上的 {{domxref("Worker/message_event", "message")}} 事件接收消息。
- `worker.js` 使用 {{domxref("DedicatedWorkerGlobalScope/postMessage", "self.postMessage()")}} 发送消息，并通过 `self` 上的 {{domxref("DedicatedWorkerGlobalScope/message_event", "message")}} 事件接收消息。

然而，这种方式仅限于创建者与其所创建代理之间的通信。当你希望任意两个代理相互通信时，需要使用专门的 {{domxref("MessageChannel")}}。你通过默认通道把它的一个 {{domxref("MessagePort")}} 对象传给 worker，然后专门使用该端口：

```js
// -- main.js --
const worker = new Worker("./worker.js", { type: "module" });
const { port1, port2 } = new MessageChannel();

// 我们很快就会解释 [port2] 参数
worker.postMessage({ hereIsYourPort: port2 }, [port2]);

// 将端口标记为可以接收消息
port1.start();
```

```js
// -- worker.js --
// 使用顶层 await（仅在模块中可用），这样其后的代码
// 只会在收到端口后才求值
const port = await new Promise((resolve, reject) => {
  self.addEventListener(
    "message",
    (e) => {
      const port = e.data.hereIsYourPort;
      if (!(port instanceof MessagePort)) {
        reject(new Error("我期望的是一个专用端口"));
        return;
      }
      resolve(port);
    },
    { once: true },
  );
});

// 将端口标记为可以接收消息
port.start();
```

> [!NOTE]
> 在后续所有示例中，我们都假定这些代码位于 `main.js` 和 `worker.js` 的顶部，不再重复。

现在，每个代理都可以调用 {{domxref("MessagePort/postMessage", "postMessage()")}} 并监听 `MessagePort` 对象上的 {{domxref("MessagePort/message_event", "message")}} 事件。

使用消息通道，你还可以连接两个并非父子关系的代理，例如由同一个线程创建的两个 worker：

```js
const { port1, port2 } = new MessageChannel();
const worker1 = new Worker("./worker1.js", { type: "module" });
const worker2 = new Worker("./worker2.js", { type: "module" });

worker1.postMessage({ hereIsYourPort: port1 }, [port1]);
worker2.postMessage({ hereIsYourPort: port2 }, [port2]);
```

作为一个实际示例，我们来实现一个猜数字游戏。`main.js` 定义一个秘密数字，`worker.js` 尝试猜出它。每次 `main.js` 都会告诉 `worker.js` 猜测是正确的、太小还是太大，worker 据此调整猜测。下面是 `main.js` 如何通过 {{domxref("MessageEvent.data")}} 接收 worker 的猜测，并使用 `port1.postMessage()` 给出反馈：

```js
// -- main.js --
const secretNumber = 63;

port1.addEventListener("message", (e) => {
  const workerGuess = e.data;
  console.log("worker 猜测：", workerGuess);
  if (workerGuess < secretNumber) {
    port1.postMessage("太小");
  } else if (workerGuess > secretNumber) {
    port1.postMessage("太大");
  } else {
    port1.postMessage("正确");
    console.log("worker 成功猜出了秘密数字！");
  }
});
```

下面是 worker 如何向 `main.js` 提交猜测，并根据来自 `main.js` 的反馈进行调整：

```js
// -- worker.js --
let low = 0;
let high = 100;
let lastGuess = Math.floor((low + high) / 2);

// 初始化后立即提交第一次猜测
port.postMessage(lastGuess);
port.addEventListener("message", (e) => {
  const feedback = e.data;
  if (feedback === "正确") {
    console.log("好耶！");
    return;
  }
  if (feedback === "太小") {
    low = lastGuess + 1;
  } else if (feedback === "太大") {
    high = lastGuess - 1;
  }
  if (low > high) {
    throw new Error("抱歉，来自 main.js 的反馈前后不一致，我怀疑 main 在作弊");
  }
  lastGuess = Math.floor((low + high) / 2);
  port.postMessage(lastGuess);
});

port.start();
```

如果在浏览器中运行，worker 和主线程都会输出到同一个开发者工具控制台，因此你会看到如下输出：

<!-- autocorrect-disable -->

```plain
worker 猜测： 50                                main.js
worker 猜测： 75                                main.js
worker 猜测： 62                                main.js
worker 猜测： 68                                main.js
worker 猜测： 65                                main.js
worker 猜测： 63                                main.js
worker 成功猜出了秘密数字！                     main.js
好耶！                                          worker.js
```

<!-- autocorrect-enable -->

### 通过复制或转移发送消息

你可以向 `postMessage` 传递许多种 JavaScript 值。在猜数字示例中，我们传递数字作为猜测、字符串作为反馈，以及对象作为 `MessagePort`。默认情况下，每个代理都有自己的[内存空间](/zh-CN/docs/Web/JavaScript/Reference/Execution_model#代理执行模型)，因此当对象从一个堆发送到另一个堆时，会在目标堆中创建它的副本。复制使用[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)，该算法只支持固定的数据类型集合。当你尝试复制不受支持的对象时，会抛出 {{domxref("DOMException")}}。

![两个代理（一个 HTML 页面和一个 worker）各自包含一个堆，堆中有一个对象。标有 postMessage() 的箭头从页面的堆中的对象指向 worker 的堆中的对象。](message-copy-diagram.svg)

复制对象使发送方和接收方可以独立操作该对象而互不影响。缺点是该对象会在接收方的作用域中重新构造，这意味着：

- 它与最初的创建者不再关联，因此 {{domxref("MessagePort")}} 无法正常工作（事实上，如果你查看[可序列化对象](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#支持的类型)的列表，会发现 `MessagePort` 并不在其中）。
- 同一份数据存在两个副本，增加了内存占用。

为了解决这些问题，你可以改为*转移*对象，而不是复制。转移对象在目标域中构造它时使用略有不同的算法，并在源域中将其标记为*已分离*。源对象仍然存在，但其被转移的资源现在可以通过目标域中的新对象访问：

![一个 HTML 页面和一个 worker 各自包含一个堆。页面的堆中的原对象是灰色的、带有虚线边框，并标记为“已分离”。标有“转移”的箭头指向 worker 的堆中的绿色对象。](message-transfer-diagram.svg)

要转移对象，你仍然把它（或包含它的其他对象）传给 `postMessage()`。`postMessage()` 的第二个参数接收消息中应当转移而非复制的对象列表。这就解释了猜数字游戏中的下面这行代码：

```js
worker.postMessage({ hereIsYourPort: port2 }, [port2]);
```

整个对象 `{ hereIsYourPort: port2 }` 会照常被复制，并且可以在两个代理中使用；不过它在发送方没有赋给任何变量，因此会立即被丢弃。`port2` 资源由 worker 代理中的新对象接管，而源实例被标记为已分离。分离的影响取决于对象类型，但通常操作要么抛出错误，要么什么也不做。对于 `MessagePort`，原对象会失去与另一个端口的连接。

除 `MessagePort` 外，另一个广泛使用的可转移对象是 {{jsxref("ArrayBuffer")}}，它恰好既可复制也可转移。复制 `ArrayBuffer` 时，源和接收方各自持有一份独立副本，一侧的修改不会影响另一侧。转移 `ArrayBuffer` 时，它同样会被标记为*已分离*。已分离的数组缓冲区作为对象仍然存在，但不再提供对底层内存的访问。这意味着：

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}} 变为 `0`（缓冲区和关联的类型化数组视图都是如此）。
- 调用 {{jsxref("ArrayBuffer/resize", "resize()")}} 和 {{jsxref("ArrayBuffer/slice", "slice()")}} 等方法时会抛出 {{jsxref("TypeError")}}。关联的类型化数组视图的方法也会抛出 `TypeError`。

你可以通过 {{jsxref("ArrayBuffer/detached", "detached")}} 属性检查 `ArrayBuffer` 是否已分离。

在纯 JavaScript 中，你还可以使用 {{jsxref("ArrayBuffer/transfer", "transfer()")}} 或 {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} 方法，将内存的所有权从一个 `ArrayBuffer` 转移到另一个。

```js
const buffer1 = new ArrayBuffer(1024);
console.log(buffer1.detached); // false
console.log(buffer1.byteLength); // 1024

const buffer2 = buffer1.transfer();
console.log(buffer1.detached); // true
console.log(buffer1.byteLength); // 0
console.log(buffer2.byteLength); // 1024
```

## 使用 SharedArrayBuffer 共享内存

除了复制和转移之外，还有第三种数据传递模型：_共享_。在共享模式下，双方持有共享同一底层内存的对象。内存共享仅适用于 {{jsxref("SharedArrayBuffer")}} 对象。发送方和接收方仍然持有不同的 `SharedArrayBuffer` 对象实例，但它们是指向同一段内存的指针，一侧的修改对另一侧可见。

![一个 HTML 页面和一个 worker 各自包含一个堆，堆中有一个 SharedArrayBuffer 对象。标有“共享”的虚线双向箭头连接这两个对象，它们指向同一底层内存。](message-sharing-diagram.svg)

### 启用共享内存

内存共享本身并不危险；然而，它可以用来实现高精度时钟（这里不展开细节），而后者被发现可用于 [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>) 攻击。为此，浏览器将共享内存的访问限制为仅[跨源隔离](/zh-CN/docs/Web/API/Window/crossOriginIsolated)的网站。

> [!NOTE]
> 如果你使用的是 Node.js 来完成本教程（这意味着你一直将前面的示例适配为 Node 特有的 API），可以忽略本节，因为共享内存在 Node.js 中默认可用。

如果你使用本地 HTTP 服务器试验这些示例，必须让网站实现跨源隔离，例如发送以下标头：

```http
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

完成上述配置后，你可以执行以下检查来确认共享内存已启用：

```js
console.log(window.crossOriginIsolated); // true
console.log("SharedArrayBuffer" in window); // true
```

现在你可以共享内存了，但仅限于一个[代理集群](/zh-CN/docs/Web/JavaScript/Reference/Execution_model#代理集群与内存共享)内——即使代理之间建立了消息通道，你也无法与集群之外的代理共享内存。一个 window 及其专用 worker 位于同一集群，因此我们的示例可以正常工作。

### 使用共享缓冲区

`SharedArrayBuffer`（SAB）接口与 `ArrayBuffer` 大致相同。你可以构造一个 `SharedArrayBuffer`，它会分配指定字节数的内存。

```js
const sab = new SharedArrayBuffer(1024);
```

你可以通过构造[视图](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays#视图)（例如 {{jsxref("Int8Array")}}）来读写内存内容。

```js
const int8 = new Int8Array(sab);
int8[0] = 63;
```

你可以创建 SAB 的[切片](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice)，它会分配一段新的共享内存并复制其内容。

```js
const sab2 = sab.slice();
// 整个 sab 都被复制了
const int82 = new Int8Array(sab2);
console.log(int82[0]); // 63
```

`SharedArrayBuffer` 与 `ArrayBuffer` 之间有一些差异（当然，除了内存共享行为之外）：

- 可调整大小的 SAB 只能*增长*，而普通可调整大小的缓冲区既可以增长也可以缩小。
- SAB 无法被转移/分离。

要创建可调整大小/可增长的 SAB，请传入 `maxByteLength` 选项，指定它允许增长到的最大长度。然后，你可以使用 [`grow()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow)。

```js
const sabResizable = new SharedArrayBuffer(1024, { maxByteLength: 2048 });
console.log(sabResizable.byteLength); // 1024

sabResizable.grow(2000);
console.log(sabResizable.byteLength); // 2000
```

### 发送 SharedArrayBuffer

`SharedArrayBuffer` 对象传给 `postMessage()` 时总是共享的（只要满足安全要求），无需额外选项。双方都可以修改这段内存并观察到对方的修改。你也可以直接传递 `SharedArrayBuffer` 的视图——视图和 `buffer` 对象都会被复制，但底层内存仍然是共享的。

在下面的示例中，我们将在 `main.js` 和 `worker.js` 之间共享一个缓冲区，并同时传递消息端口。把 `main.js` 中的这一行：

```js
worker.postMessage({ hereIsYourPort: port2 }, [port2]);
```

替换为：

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage({ hereIsYourPort: port2, andHereIsOurSAB: sab }, [port2]);
```

并在 `worker.js` 中，把最初的接收代码替换为：

```js
const { port, sab } = await new Promise((resolve, reject) => {
  self.addEventListener(
    "message",
    (e) => {
      const port = e.data.hereIsYourPort;
      if (!(port instanceof MessagePort)) {
        reject(new Error("我期望的是一个专用端口"));
        return;
      }
      const sab = e.data.andHereIsOurSAB;
      if (!(sab instanceof SharedArrayBuffer)) {
        reject(new Error("我期望的是一个共享数组缓冲区"));
        return;
      }
      resolve({ port, sab });
    },
    { once: true },
  );
});
```

要验证这套设置是否有效，可以尝试通过消息协调一次简短的写入—读取交换。worker 立即更新 `SharedArrayBuffer` 并向主线程发送一条消息。主线程收到该消息后读取新值。稍后我们会讨论更高效的通信方式。

```js
// -- main.js --
const int8 = new Int8Array(sab);

port1.addEventListener("message", (e) => {
  console.log(int8[0]); // 63
});
```

```js
// -- worker.js --
const int8 = new Int8Array(sab);
int8[0] = 63;
port.postMessage("我已修改内存，请检查");
```

## 使用 Atomics 访问共享内存

在上面的示例中，我们用一条消息来强制以下顺序：

1. Worker 写入内存
2. Worker 发送消息
3. 主代理接收消息并运行事件监听器
4. 主代理读取内存

基于事件的协调的问题在于事件是异步的：步骤 2 和 3 之间的时间取决于浏览器的事件循环。在这种情况下，你完全可以直接来回传递值而不依赖共享内存。共享内存的优势恰恰在于你可以（在大多数情况下）同步通信，而不必把作业队列让给其他异步任务。

在单个代理中，[运行至完毕](/zh-CN/docs/Web/JavaScript/Reference/Execution_model#“运行至完毕”)语义确保了多个同步作业之间良好的效果顺序：

```js
const promise = Promise.resolve();
let i = 0;
promise.then(() => {
  i += 1;
  console.log(i);
});
promise.then(() => {
  i += 1;
  console.log(i);
});
```

这里的总体顺序始终是 `i += 1; console.log(i); i += 1; console.log(i);`，而绝不会是 `i += 1; i += 1; console.log(i); console.log(i);`。

当同步作业属于不同代理时，就没有这样的保证了。在下面的示例中，worker 向主代理发送一条 `started` 消息，并立即开始在循环中递增共享整数。收到消息后，主代理同时运行相同的循环。当 worker 完成时，它发送一条 `finished` 消息，主代理记录最终值。

```js
// -- main.js --
const i = new Int32Array(sab, 0, 1);

port1.addEventListener("message", ({ data }) => {
  if (data === "started") {
    for (let n = 0; n < 10_000_000; n++) {
      i[0] += 1;
    }
  } else if (data === "finished") {
    console.log(i[0]); // 通常小于 20000000
  }
});
```

```js
// -- worker.js --
const i = new Int32Array(sab, 0, 1);

port.postMessage("started");
for (let n = 0; n < 10_000_000; n++) {
  i[0] += 1;
}
port.postMessage("finished");
```

由于发往某个端口的消息按顺序投递，`finished` 处理程序总是在主代理自己的循环完成后才运行，因此在记录该值时，两个代理都已完成计数。然而，记录的值可能小于 `20000000`，而且每次运行都不同。这是因为 `i[0] += 1` 并不是单一步骤：它读取 `i[0]`，加 1，再把结果写回。至少有两种可能的顺序；第一种不会丢失递增：

1. `main.js` 把 `i[0]` 读为 `currentI`
2. `main.js` 写入 `i[0] = currentI + 1`
3. `worker.js` 把 `i[0]` 读为 `currentI + 1`
4. `worker.js` 写入 `i[0] = currentI + 2`

第二种会丢失一次递增：

1. `main.js` 把 `i[0]` 读为 `currentI`
2. `worker.js` 把 `i[0]` 读为 `currentI`
3. `main.js` 写入 `i[0] = currentI + 1`
4. `worker.js` 写入 `i[0] = currentI + 1`

要解决这个问题，我们必须使用某种机制来确保跨代理的执行顺序，使得 `worker.js` 中的语句在 `main.js` 中的语句完成且其效果可被观察之前不会执行，反之亦然。{{jsxref("Atomics")}} 命名空间中的方法提供了这种能力。

### 读取和写入

最基本的 `Atomics` 原语是 {{jsxref("Atomics.load()")}} 和 {{jsxref("Atomics.store()")}}，它们分别在特定索引处读取和写入。它们可用于任何有符号或无符号整数数组（`Uint8ClampedArray` 除外）。

索引读写语法的问题在于，写入的效果不被要求立即对其他代理可见。考虑下面的索引读写：

```js
// -- main.js --
const a = new Int32Array(sab);
a[0] = 63;
console.log("主线程：", a[1]);
```

```js
// -- worker.js --
const a = new Int32Array(sab);
a[1] = 15;
console.log("worker 线程：", a[0]);
```

理论上，无论这些操作如何排序，只要每个代理按顺序执行自己的代码，至少有一条日志必须非 `0`（试着列出这四条语句所有可能的顺序，约束条件是 `a[0] = 63` 在 `console.log(a[1])` 之前，`a[1] = 15` 在 `console.log(a[0])` 之前！）。然而在现实中，两条日志可能都打印 0。这可能是由以下顺序造成的：

1. `main.js` 把 `a[1]` 读为 `0`。
2. `worker.js` 把 `a[0]` 读为 `0`。
3. `main.js` 写入 `a[0] = 63`。
4. `worker.js` 写入 `a[1] = 15`。
5. `main.js` 和 `worker.js` 分别使用已经取到的 `a[1]` 和 `a[0]` 值执行各自的 `console.log`。

注意，位于源代码靠后位置的读取 `a[1]` 和 `a[0]` 的表达式，是如何被重排到 `a[0] = 63` 和 `a[1] = 15` 语句之前执行的。这种指令重排可能发生在 JavaScript 编译器和 CPU 中，目的是优化连续的内存操作。在单个代理内部，这种重排完全保持了你所期望的顺序执行保证。例如对于 `main.js`，`a[0] = 63` 的写入从未被读回，因此把它重排到 `a[1]` 读取之后完全没有问题。然而，在多代理情况下这就会引发问题。

使用 `Atomics.load()` 和 `Atomics.store()`，你明确告诉编译器和 CPU 不允许这种重排，内存读写的顺序必须与 JavaScript 代码的执行顺序一致。

```js
// -- main.js --
const a = new Int32Array(sab);
Atomics.store(a, 0, 63);
console.log("主线程：", Atomics.load(a, 1));
```

```js
// -- worker.js --
const a = new Int32Array(sab);
Atomics.store(a, 1, 15);
console.log("worker 线程：", Atomics.load(a, 0));
```

在这里，虽然其中一条日志仍可能显示 `0`（例如因为主线程的 `load` 发生在 worker 的 `store` 之前），但可以保证两者绝不会同时为 `0`。

> [!NOTE]
> 如果你想更进一步，保证两个新值都被观察到，就需要让两个代理在调用 `Atomics.load()` 之前[等待](#等待和通知)，例如使用 `while (Atomics.load(a, 1) === 0);` 循环。

此外，原子 load/store 操作会为其他*非原子*读写操作建立偏序关系。具体来说，如果代理 A 执行 `Atomics.store()`，随后代理 B 用 `Atomics.load()` 读取同一个值，那么 A 在原子存储之前执行的所有非原子写入，也必须对 B 在原子加载之后执行的所有非原子读取可见。这在本质上于两个线程之间创建了一个“同步点”，很像 `message` 事件。例如：

```js
// -- main.js --
a[0] = 63;
// 在 a[1] 中设置“就绪”标志；假定它最初不是 1。
Atomics.store(a, 1, 1);
```

```js
// -- worker.js --
// 自旋，直到 a[1] 收到“就绪”标志
while (Atomics.load(a, 1) !== 1);
console.log(a[0]); // 63
```

> [!NOTE]
> 在单个代理内部，`worker.js` 中的代码肯定是个 bug，因为如果循环从不更新该值，`a[1]` 不可能在循环中发生变化。许多同步无限循环只有在共享内存的场景下才有意义！
>
> 在[等待和通知](#等待和通知)中，我们会看到如何让这段代码性能稍好一些，也更不像一个 bug。

唯一可能的顺序如下：

1. `main.js` 写入 `a[0] = 63`。`worker.js` 因为 `a[1]` 不是期望的值而在 `while` 循环中持续自旋。
2. `main.js` 把 `a[1]` 存储为 `1`。
3. `worker.js` 加载新的 `a[1]` 值并退出 `while` 循环。
4. `worker.js` 把 `a[0]` 读为 `63`。

借助 store/load 这一对操作，我们成功地在步骤 1 到 4 之间建立了顺序，因此 `worker.js` 能够观察到 `main.js` 写入的 `a[0]` 新值，尽管它并没有使用原子操作。

### 原子更新

下一组操作直接替代了几个[复合赋值](/zh-CN/docs/Web/JavaScript/Reference/Operators#赋值运算符)运算符。正如我们已经演示的，`+=` 运算符不是原子的：其他指令可能在读取和写入之间执行，导致最终的写入不是你期望的值。要解决这个问题，可以将其替换为 {{jsxref("Atomics.add()")}}：

```js
// -- main.js --
const i = new Int32Array(sab, 0, 1);

port1.addEventListener("message", ({ data }) => {
  if (data === "started") {
    for (let n = 0; n < 10_000_000; n++) {
      Atomics.add(i, 0, 1);
    }
  } else if (data === "finished") {
    console.log(i[0]); // 保证为 20000000
  }
});
```

```js
// -- worker.js --
const i = new Int32Array(sab, 0, 1);

port.postMessage("started");
for (let n = 0; n < 10_000_000; n++) {
  Atomics.add(i, 0, 1);
}
port.postMessage("finished");
```

与之前的数据竞争示例相比，唯一的区别是我们把两处 `i[0] += 1` 语句都替换成了 `Atomics.add(i, 0, 1)`。但现在，它不仅具有与 `load`/`store` 相同的“顺序一致”保证，每个读取—修改—写入序列块也被保证是原子的，因此有两个原子块，它们可以自由排序但绝不会交错：

1. 原子块：
   1. `main.js` 把 `i[0]` 读为 `currentI`
   2. `main.js` 写入 `i[0] = currentI + 1`
2. 原子块：
   1. `worker.js` 把 `i[0]` 读为 `currentI + 1`
   2. `worker.js` 写入 `i[0] = currentI + 2`

其他几个复合赋值运算符也有各自的 `Atomics` 方法：

| 运算符                                                                        | 方法                        |
| ----------------------------------------------------------------------------- | --------------------------- |
| [`+=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition_assignment)    | {{jsxref("Atomics.add()")}} |
| [`-=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment) | {{jsxref("Atomics.sub()")}} |
| [`&=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment) | {{jsxref("Atomics.and()")}} |
| [`\|=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment) | {{jsxref("Atomics.or()")}}  |
| [`^=`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment) | {{jsxref("Atomics.xor()")}} |

如果你的操作没有对应的上述方法，仍然可以使用通用的 {{jsxref("Atomics.compareExchange()")}} 方法。该方法可替代以下序列：

```js
const oldValue = array[index];
if (oldValue === expectedValue) {
  array[index] = newValue;
}
return oldValue;
```

例如，如果你有操作 `array[index] *= multiplier`，可以用下面的代码使其原子化：

```js
function atomicMultiply(array, index, multiplier) {
  let oldValue = Atomics.load(array, index);

  while (true) {
    const observed = Atomics.compareExchange(
      array,
      index,
      oldValue,
      oldValue * multiplier,
    );

    if (observed === oldValue) {
      return oldValue;
    }

    oldValue = observed;
  }
}
```

这个函数在循环中自旋。每次它都尝试写入 `oldValue * multiplier`，前提是在执行其原子块时该索引处的值仍是 `oldValue`。如果值已改变，就用新的 `oldValue` 重试。

还有一个无条件的交换方法 {{jsxref("Atomics.exchange()")}}。该方法可替代以下序列：

```js
const oldValue = array[index];
array[index] = newValue;
return oldValue;
```

当你想要重置某些内存，同时获取重置时的值时，可以使用该方法。例如，它可以用于实现时钟：

```js
// -- worker.js --
while (true) {
  Atomics.add(a, 0, 1);
}
```

```js
// -- main.js --
const ticksSinceLastCheck = Atomics.exchange(a, 0, 0);
// ticksSinceLastCheck 记录了 worker 自旋了多少次。
```

如果把它拆成 `load` 和 `store` 两个操作，那么 worker 可能在此期间又执行了一次 `add`，这次递增会被悄悄丢弃。

## 等待和通知

在上面的示例中，凡是代理等待另一个代理完成操作的地方，我们都使用了无限循环，例如 `while (Atomics.load(a, 1) !== 1);`。这称为[忙等待](https://en.wikipedia.org/wiki/Busy_waiting)。本质上，它会阻塞整个线程执行其他作业，直到其他某个线程写入它期望的值。你可以在 `while` 循环中调用 {{jsxref("Atomics.pause()")}} 来稍微提高效率。该方法可能会告诉 CPU 分配更少的资源，因为它只是在等待而并没有真正进行计算，同时又不要求立即把 CPU 让给其他线程。

```js
// -- worker.js --
while (Atomics.load(a, 1) !== 1) {
  Atomics.pause();
}
```

或者，你可以把它改为显式的基于通知的系统，同时保持同步。{{jsxref("Atomics.wait()")}} 和 {{jsxref("Atomics.notify()")}} 方法可以做到这一点——等待的线程不必持续检查值；写入线程在写入完成时通知它。

> [!NOTE]
> 与前面介绍的方法不同，`wait()`、`waitAsync()` 和 `notify()` 只能操作 `Int32Array` 和 `BigInt64Array` 视图。

这里，如果 `a[1] === 0`，`worker.js` 线程就会暂停执行。

```js
// -- worker.js --
Atomics.wait(a, 1, 0);
console.log(a[0]);
```

它会一直暂停，直到另一个线程——在我们的例子中是 `main.js`——通知它：

```js
// -- main.js --
a[0] = 63;
Atomics.store(a, 1, 1);
Atomics.notify(a, 1);
```

需要特别指出的几点：

- `Atomics.wait()` 也会阻塞线程执行其他作业。在 web 上，主线程不能被阻塞，因此在那里调用 `Atomics.wait()` 会抛出错误。
- `Atomics.wait()` 在被通知时就会返回，无论 `a[1]` 是否真的发生了变化。
- 除了检查初始值之外，`store` 和 `wait` 操作的内存索引完全是任意的：它们不关心该值实际代表什么。该索引充当等待代理列表的 ID。初始值检查确保：如果 worker 的 `wait` 发生在 `notify` 已被调用之后，`wait` 会立即继续，而不是永远休眠，因此你应当在调用 `notify` 之前立即把 `a[1]` 设为 `1`（在我们的例子中表示“就绪”），并且只在这里设置它。

你还可以指定 `timeout`，超时后线程即使未收到通知也会恢复执行：

```js
// -- worker.js --
const result = Atomics.wait(a, 1, 0, 100); // 等待约 100 毫秒
if (result === "timed-out") {
  // 在这里决定要做什么：再次等待？抛出错误？
  // 还是改为异步等待？
} else {
  // result 可以是 "not-equal"——即 a[1] 已经是“就绪”状态
  // 无需等待；或者是 "ok"——即其他线程通知了它
  console.log(a[0]);
}
```

{{jsxref("Atomics.waitAsync()")}} 方法提供与 `wait()` 相同的功能，但以 promise 的形式呈现，从而允许其他异步作业在此期间继续进行。

```js
// -- main.js --
const result = Atomics.waitAsync(a, 1, 0, 100); // 等待约 100 毫秒
if (!result.async) {
  // 已经就绪
  //（注意：因为 timeout 不为 0，result.value 总是 "not-equal"）
  console.log(a[0]);
} else {
  const resultValue = await result.value;
  if (resultValue === "ok") {
    console.log(a[0]);
  } else {
    // 这里 resultValue 是 "timed-out"；决定要做什么
  }
}
```

你必须仔细权衡这三种等待机制的影响：

- 忙等待会在不让出 CPU 的情况下阻塞线程。当它结束时，CPU 无需[上下文切换](https://en.wikipedia.org/wiki/Context_switch)即可立即恢复，但在它自旋期间，这个核心被占用，无法处理其他作业（尽管如果当前线程占用 CPU 时间过长，操作系统可能会决定调度其他线程）。当你预计等待时间非常短、甚至短于两次上下文切换的时间时，这是最快的机制。
- 同步的 `Atomics.wait()` 阻塞线程但会让出 CPU。CPU 核心可以处理其他线程，当该线程继续时可能需要上下文切换。当你预计等待时间长于两次上下文切换、最好让其他线程在此期间使用 CPU，但又希望保持代码同步时，这是最高效的机制。
- 异步的 `Atomics.waitAsync()` 使用普通的 promise 语义：等待其完成的代码会作为代理中的另一个作业返回，但同一线程中的其他代码会继续执行。当当前线程还有其他同等重要、必须同时推进的作业时（例如需要渲染页面并响应用户交互的主线程），这很有用。

## 有用的共享内存模式

我们来看看一些用于确保多线程性能和正确性的常见技术和概念。

共享内存协议需要回答以下问题：

- 谁可以访问内存的每个部分？
- 哪些操作必须一起发生，不能与其他线程的操作交错？
- 代理如何知道数据已准备好读取或可以安全覆盖？
- 当一个代理独自工作时，该协议需要多少开销？当多个代理竞争访问时又会怎样？

### 锁和互斥量

[_锁_](<https://en.wikipedia.org/wiki/Lock_(computer_science)>)，也称为*互斥量*（mutex，即“互斥”），是一种机制，确保当某个线程访问特定资源时，其他线程无法访问同一资源。每个线程在访问受保护数据之前获取锁，之后释放锁。获取与释放之间的代码称为*临界区*。

> [!NOTE]
> [_futex_](https://en.wikipedia.org/wiki/Futex) 是“快速用户空间互斥量”（fast user-space mutex）的缩写，但有点令人困惑的是，它并不是互斥量——它是一种可用于实现互斥量的等待机制。在 JavaScript 中，futex 是唯一的内置等待机制，由 `Atomics.wait()`/`Atomics.waitAsync()` 和 `Atomics.notify()` 提供；我们的互斥量示例正是建立在这一机制之上。

互斥量只是一种协议，并不会从物理上阻止其他线程访问内存。只要遵守该协议，不同线程的临界区就永远不会重叠，从而在不使每个单独读写原子化的情况下保护整个操作序列。

例如，创建一个为锁和一个值预留空间的缓冲区。在我们的协议中，每个参与的代理都会创建一个 `Int32Array` 视图，其中第一个元素表示锁（`1` 表示未加锁，`0` 表示已加锁），第二个元素存放受保护的数据。

```js
const sab = new SharedArrayBuffer(8);
const shared = new Int32Array(sab);
shared[0] = 1;
```

下面是一个参与的代理实现该协议的方式。当代理调用 `lock()` 尝试获取锁时：

- 调用 `Atomics.compareExchange()`，尝试把第一个元素设为 `0`（已加锁），但仅当它当前为 `1`（可用）时才这样做。
- 如果失败——也就是它已经是 `0`，因为另一个代理持有锁——则 `Atomics.wait()` 会让调用者休眠，前提是锁中仍为 `0`（锁可能在 `compareExchange()` 和 `wait()` 之间已被释放）。
- 只有当当前持有锁的代理调用 `unlock()` 时，该代理才会被唤醒；`unlock()` 会把锁元素重置为 `1`，并用 `Atomics.notify()` 唤醒队列中最早的等待者。
- 唤醒后，该代理会再次尝试获取锁，但如果有一个新来的代理（例如释放锁的代理立即再次调用 `lock()`）先拿到了锁，它仍可能失败，此时该代理会因 `while()` 循环再次进入休眠。
- 只有当成功获取锁时，循环才会退出。

```js
function lock() {
  while (Atomics.compareExchange(shared, 0, 1, 0) !== 1) {
    Atomics.wait(shared, 0, 0);
  }
}

function unlock() {
  Atomics.store(shared, 0, 1);
  Atomics.notify(shared, 0, 1);
}
```

下面是调用这组加锁/解锁函数的方式。临界区必须包裹在 {{jsxref("Statements/try...catch", "try...finally")}} 块中，并在 `finally` 中调用 `unlock()`，这样即使临界区抛出异常，锁也会被释放：

```js
lock();
try {
  shared[1] *= 2;
  shared[1] += 1;
} finally {
  unlock();
}
```

尽管临界区使用普通的索引读写，其他代理也绝不会观察到陈旧的值，因为 `lock()`/`unlock()` 中的原子操作建立了顺序一致的排序。

用一个互斥量保护所有共享数据是简单的起点，但它会把所有受保护的工作串行化。如果各代理可以操作相互独立的区域，为这些区域分配各自的锁——或者把每个区域分配给单一写入者——就能获得更高的并发度。

这个简单的互斥量有多处可以改进：

- 如果代理在并未持有锁的情况下误调用 `unlock()` 会怎样？
  - : 可以把布尔标志替换为每个代理的唯一 ID 来解决，这样只有当锁中的 ID 与代理 ID 匹配时，`unlock()` 才会继续执行。
- 如果代理在已持有锁的情况下误调用 `lock()`（这称为*重入*）会怎样？这会导致它永远等待自己，而所有其他等待该锁的代理也永远拿不到锁。
  - : 可以让 `lock()` 仅在锁中的所有者 ID 与当前 ID 不匹配时才等待，以此解决。

    > [!NOTE]
    > 重入常见于嵌套函数调用；例如某个临界区调用了另一个函数，而后者也尝试用同一把锁建立临界区。如果锁不可重入（未实现该机制），那么每个代理都必须确保临界区不会被重入。

- 如果重入锁的代理调用了 `unlock()` 会怎样？这会导致锁被提前释放，尽管还有另一个 `lock()` 调用期望锁仍被持有。
  - : 需要添加一个计数器，每次 `lock()` 时递增、每次 `unlock()` 时递减，只有当计数器归零时才真正释放锁。
- 如果等待的代理总是输给新来的代理，永远拿不到锁怎么办？
  - : 需要某种调度机制来确保新来的代理不会插队。

### 自旋锁

在上面的示例中，等待锁的代理会进入休眠，并需要其他代理通过 `unlock()` 通知它。这在竞争激烈时很高效，因为锁可能不会很快获得，最好把 CPU 让给不需要该锁的其他进程。但在竞争不激烈时，与在等待时直接占用 CPU 相比，把线程调度进和调度出 CPU 会带来额外开销。

*自旋锁*使用忙等待，而不是让竞争者休眠。要把前面的互斥量改造成自旋锁，只需把它的函数替换为：

```js
function lock() {
  while (Atomics.compareExchange(shared, 0, 1, 0) !== 1) {
    Atomics.pause();
  }
}

function unlock() {
  Atomics.store(shared, 0, 1);
}
```

这里的 `Atomics.pause()` 只是给 CPU 的性能提示。你可以删掉它而保持相同的功能。

> [!WARNING]
> 不建议在主线程上使用自旋锁，因为它会冻结整个页面。一般来说，除非经过非常仔细的设计，自旋锁实际上可能并不比常规等待更快。

有时，竞争是高是低并不是你在编写代码时能决定的。同一段代码可能只在有两个竞争者时运行（此时忙等待更高效），也可能在有上千个竞争者时运行（此时必须使用常规等待）。在这种情况下，你可以采用混合方法：先自旋一小段时间（比如 10 次迭代），如果仍未获得锁，再调用 `Atomics.wait()`。{{jsxref("Atomics.pause()")}} 页面上有一个示例。

### 信号量

互斥量一次只允许一个代理访问资源；而[_信号量_](<https://en.wikipedia.org/wiki/Semaphore_(programming)>)则对此进行推广，允许最多指定数量的代理同时访问。

为此，共享内存维护一个可用*许可*的计数：获取许可使计数递减，释放许可使计数递增，如果没有可用许可，代理就会等待。

```js
const sab = new SharedArrayBuffer(4);
const permits = new Int32Array(sab);
permits[0] = 3;
```

每个 worker 各自创建该缓冲区的视图，并使用以下函数：

```js
const permits = new Int32Array(sab);

function acquire() {
  while (true) {
    const available = Atomics.load(permits, 0);
    if (available === 0) {
      Atomics.wait(permits, 0, 0);
    } else if (
      Atomics.compareExchange(permits, 0, available, available - 1) ===
      available
    ) {
      return;
    }
  }
}

function release() {
  Atomics.add(permits, 0, 1);
  Atomics.notify(permits, 0, 1);
}

acquire();
try {
  // 执行需要占用一个许可的任务。
} finally {
  release();
}
```

你可能会注意到，如果我们把最大许可数设为 `1`，得到的代码与互斥量示例基本相同——事实上，我们那个简单的互斥量就是一个*二元信号量*（最多 1 个许可）。

有多个许可的信号量（称为*计数信号量*）在并发代理试图访问同一资源时仍会遇到问题。信号量的目标是调节对有限资源池的访问（例如只有 4 个可用缓冲区）。你仍然需要单独的机制把这些资源分配给各个代理，以避免同时访问。

### 避免死锁

*死锁*发生在代理相互循环等待时，导致谁都无法继续推进。例如：

1. 代理 A 获取锁 X。
2. 代理 B 获取锁 Y。
3. 代理 A 在仍持有 X 的情况下等待获取 Y。
4. 代理 B 在仍持有 Y 的情况下等待获取 X。

```js
// -- a.js --
lockX.lock();
try {
  lockY.lock(); // 正在等待 b.js 中的 lockY.unlock()……
  try {
    // 需要同时持有两把锁的工作
  } finally {
    lockY.unlock();
  }
} finally {
  lockX.unlock();
}
```

```js
// -- b.js --
lockY.lock();
try {
  lockX.lock(); // 正在等待 a.js 中的 lockX.unlock()……
  try {
    // 需要同时持有两把锁的工作
  } finally {
    lockX.unlock();
  }
} finally {
  lockY.unlock();
}
```

两个代理都无法到达释放自己锁的代码。

等待锁只是进入死锁的一种方式：两个代理也可能互相等待对方的消息，等等。

防止死锁需要每个代理内部高度自律。例如，当某个操作需要多把锁时，协议必须规定这些锁的获取顺序。每个代理都必须确保锁最终会被释放，尤其是在发生错误时（通过使用 `try...finally`）。如何在编译器或静态检查器层面强制执行此类协议，是一个活跃的研究领域。

### 无锁算法

锁（在正确实现时）功能强大且方便，但它们也有些重，尤其是在没有竞争的时候。对于每个临界区——它可能短到只是一次读写操作——上面的互斥量都要承担一次 `Atomics.compareExchange()`、一次 `Atomics.store()`，以及（除使用自旋锁外）一次 `Atomics.notify()` 的开销。

事实上，即使像 `Atomics.load(uint16, 0)` 这样简单的操作，也可能需要内部锁！想一想，`Uint16Array` 中的一个元素由两个字节组成。如果一台极简的 CPU 只允许逐字节读取内存，它看起来会像下面这样（假设小端字节序）：

```js
const firstByte = uint8[0]; // uint8 是同一段内存作为 Uint8Array 的视图
const secondByte = uint8[1];

const value = firstByte + (secondByte << 8);
```

如果另一个代理在第一条和第二条语句之间写入了新的两字节值，最终的读取可能混合了旧值和新值的字节，而不是一个连贯的 `uint16` 值。这称为*撕裂读取*。对同一元素的原子读写永远不会撕裂，因为引擎要么对相关字节加锁，要么使用能提供所需原子性的原生 CPU 指令。加锁涉及两个额外步骤（获取和释放），可能比无锁实现慢得多；究竟使用哪一种，取决于操作系统、CPU 架构、JavaScript 引擎等，以及操作的字节大小。要了解当前环境中特定字节大小的原子操作是否以无锁方式实现，可以使用 {{jsxref("Atomics.isLockFree()")}}。

```js
Atomics.isLockFree(4); // true：这是 4 字节原子操作所必需的
Atomics.isLockFree(7); // false：不是受支持的原子元素大小
```

并非所有操作都是*无撕裂*的。`Int16`、`Uint16`、`Int32`、`Uint32` 类型的读写永远不会撕裂，无论使用 `Atomics` 还是索引访问。其他数据类型如果使用索引访问则可能撕裂，因此你需要使用 `Atomics` 来避免撕裂，或者——对于浮点数等不受支持的类型——自行实现锁。`Atomics.isLockFree` 会告诉你这种无撕裂保证是来自锁还是原生指令。

你也可以在自己的代码中避免使用锁。回想一下上面的原子乘法代码：

```js
function atomicMultiply(array, index, multiplier) {
  let oldValue = Atomics.load(array, index);

  while (true) {
    const observed = Atomics.compareExchange(
      array,
      index,
      oldValue,
      oldValue * multiplier,
    );

    if (observed === oldValue) {
      return oldValue;
    }

    oldValue = observed;
  }
}
```

这里没有显式的锁。代理并不主动强制临界区；它只是反复重试读写序列，直到期间没有竞争者为止。这使无竞争的情况尽可能快，但在竞争激烈时可能会重试很多次。

### 生产者—消费者交接

两个线程需要访问同一内存的常见情形是：一个是*生产者*，另一个是*消费者*。使用普通的锁时，每次两个代理都要竞争同一把锁；如果数据尚未就绪（例如生产者发现消费者还没读取，或消费者发现生产者还没写入；你还需要单独的就绪标志来跟踪这一点），该代理就会重新休眠，让另一个代理获取锁；这很低效。*交接*模式让两个代理轮流执行，把锁和就绪标志合并到同一个协议中。

同样，我们从一段包含两个元素的共享内存开始。第一个元素是状态标志：`0` 表示空，`1` 表示满。第二个元素存放一个值。

```js
const sab = new SharedArrayBuffer(8);
const shared = new Int32Array(sab);
```

当值槽为“满”（即消费者尚未读取）时，生产者等待。当槽为“空”时，它写入新值并通知消费者。

```js
// -- producer.js --
function produce(value) {
  while (Atomics.load(shared, 0) !== 0) {
    Atomics.wait(shared, 0, 1);
  }

  shared[1] = value;
  Atomics.store(shared, 0, 1);
  Atomics.notify(shared, 0, 1);
}

produce(63);
produce(64);
```

反之，当值槽为“空”时，消费者等待，并在其变为“满”时读取新值。

```js
// -- consumer.js --
function consume() {
  while (Atomics.load(shared, 0) !== 1) {
    Atomics.wait(shared, 0, 0);
  }

  const value = shared[1];
  Atomics.store(shared, 0, 0);
  Atomics.notify(shared, 0, 1);
  return value;
}

console.log(consume()); // 63
console.log(consume()); // 64
```

该协议依赖于恰好有一个生产者和一个消费者。如果有多个生产者，两个代理可能都看到空槽并互相覆盖数据，因此你仍然需要在生产者之间使用互斥量。消费者也是如此。不过，相比在所有生产者和消费者之间共享一把锁，这仍是一种改进：它让控制权在*生产者组*和*消费者组*之间无竞争地交替。

## 使用共享内存的猜数字游戏

在本指南的最后，我们用这个交接模式重新实现[猜数字游戏](#通过消息通信)。两个代理在生产和消费之间交替：worker 生产一个猜测，主线程消费它并生产反馈。它们共享两个整数：

- `shared[0]` 表示轮到谁：`0` 表示 worker，`1` 表示主线程。
- `shared[1]` 存放猜测或反馈，取决于轮到谁。反馈的取值是：`-1` 表示“太小”，`1` 表示“太大”，`0` 表示“正确”。

```js
// -- main.js --
const worker = new Worker("./worker.js", { type: "module" });
const sab = new SharedArrayBuffer(8);
const shared = new Int32Array(sab);
const secretNumber = 63;

// 轮次标志初始为 0，因此 worker 先行动
worker.postMessage(sab);

// 等待 worker 启动。在主线程返回事件循环之前，
// 浏览器可能不会启动 worker。
await new Promise((resolve) => {
  worker.addEventListener("message", resolve, { once: true });
});

while (true) {
  // 等待 worker 结束它的回合
  while (Atomics.load(shared, 0) !== 1) {
    // 这里使用忙等待，因为我们预期 worker 会很快返回，
    // 而主线程不能使用 Atomics.wait()。
    // 在更复杂的场景中，你大概会想用 Atomics.waitAsync()
    // 来避免阻塞主线程。
    Atomics.pause();
  }

  const workerGuess = shared[1];
  console.log("worker 猜测：", workerGuess);
  const feedback =
    workerGuess < secretNumber ? -1 : workerGuess > secretNumber ? 1 : 0;

  shared[1] = feedback;
  Atomics.store(shared, 0, 0);
  Atomics.notify(shared, 0, 1);

  if (feedback === 0) {
    console.log("worker 成功猜出了秘密数字！");
    break;
  }
}
```

```js
// -- worker.js --
const sab = await new Promise((resolve) => {
  self.addEventListener("message", (e) => resolve(e.data), { once: true });
});
const shared = new Int32Array(sab);
let low = 0;
let high = 100;

// 告诉主线程 worker 已启动
self.postMessage("ready");

while (true) {
  const lastGuess = Math.floor((low + high) / 2);
  // worker 在这里通过给出猜测发起交接
  shared[1] = lastGuess;
  Atomics.store(shared, 0, 1);
  Atomics.notify(shared, 0, 1);

  // 等待主代理写入反馈
  while (Atomics.load(shared, 0) !== 0) {
    Atomics.wait(shared, 0, 1);
  }

  const feedback = shared[1];
  if (feedback === 0) {
    console.log("好耶！");
    break;
  }
  if (feedback === -1) {
    low = lastGuess + 1;
  } else if (feedback === 1) {
    high = lastGuess - 1;
  }
  if (low > high) {
    throw new Error("抱歉，来自 main.js 的反馈前后不一致，我怀疑 main 在作弊");
  }
}
```

这实现了相同的功能，注意两个循环都是同步的——这应该比来回传递消息高效得多！

## 参见

- [JavaScript 执行模型](/zh-CN/docs/Web/JavaScript/Reference/Execution_model)
- [Web Worker API](/zh-CN/docs/Web/API/Web_Workers_API)
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("Atomics")}}
- {{domxref("Worker.postMessage()")}}
