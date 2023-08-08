---
title: Worker.postMessage()
slug: Web/API/Worker/postMessage
---

{{APIRef("Web Workers API")}}

{{domxref("Worker")}} 接口的 **`postMessage()`** 方法可以向 worker 发送消息。第一个参数是要发送到 worker 的数据。该数据可以是任何可以被[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)处理的 JavaScript 对象。

{{domxref("Worker")}} 的 **`postMessage()`** 方法委托给 {{domxref("MessagePort")}} 的 {{domxref("MessagePort.postMessage", "postMessage()")}} 方法，该方法会在对应的用于接收 {{domxref("MessagePort")}} 的事件循环中添加一个任务。

Worker 可以使用 {{domxref("DedicatedWorkerGlobalScope.postMessage")}} 方法将信息发送回生成它的线程。

## 语法

```js-nolint
postMessage(message)
postMessage(message, transfer)
```

### 参数

- `message`

  - : 要传递给 worker 的对象；这将在传递给 {{domxref("DedicatedWorkerGlobalScope.message_event")}} 事件的 `data` 字段中。这可以是任何值或可以通过[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)处理的 JavaScript 对象（可以包含循环引用）。

    如果*未*提供 `message` 参数，则解析器将抛出 {{jsxref("SyntaxError")}}。如果要传递给 worker 的数据不重要，可以显式传递 `null` 或 `undefined`。

- `transfer` {{optional_inline}}

  - : 一个可选的、会被转移所有权的[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)[数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)。如果一个对象的所有权被转移，它将在发送它的上下文中变为不可用（中止），而仅在接收方的 worker 中可用。

    像 {{domxref("ArrayBuffer")}}、{{domxref("MessagePort")}} 或 {{domxref("ImageBitmap")}} 类的实例才是可转移对象，才能够被转移。不能将 `null` 作为 `transfer` 的值。

### 返回值

无 ({{jsxref("undefined")}})。

## 示例

下面的代码片段展示了使用 {{domxref("Worker.Worker", "Worker()")}} 构造函数创建一个 {{domxref("Worker")}} 对象。当两个表单输入框（`first` 和 `second`）的值发生改变时，{{domxref("HTMLElement/change_event", "change")}} 事件将调用 `postMessage()`，以将这两个输入框的值发送给当前的 worker。

```js
const myWorker = new Worker("worker.js");

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("消息已传递给 worker");
};

second.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("消息已传递给 worker");
};
```

有关完整的示例，请参阅我们的[简单 worker 示例](https://github.com/mdn/simple-web-worker)和（[运行示例](http://mdn.github.io/simple-web-worker/)）。

> **备注：** `postMessage()` 一次只能发送一个对象。如上所示，如果你想传递多个值，可以使用数组。

### 转移示例

这个最小化的例子中，`main` 中创建了一个 `ArrayBuffer`，并将其发送给 `myWorker`，然后让 `myWorker` 将其转移回 `main`，并在每个步骤中记录大小。

#### main.js 代码

```js
// 创建 worker
const myWorker = new Worker("myWorker.js");

// 监听 myWorker 将缓冲区传回 main
myWorker.addEventListener("message", function handleMessageFromWorker(msg) {
  console.log("message from worker received in main:", msg);

  const bufTransferredBackFromWorker = msg.data;

  console.log(
    "buf.byteLength in main AFTER transfer back from worker:",
    bufTransferredBackFromWorker.byteLength,
  );
});

// 创建 buffer
const myBuf = new ArrayBuffer(8);

console.log(
  "buf.byteLength in main BEFORE transfer to worker:",
  myBuf.byteLength,
);

// 发送 myBuf 给 myWorker 并转移底层 ArrayBuffer
myWorker.postMessage(myBuf, [myBuf]);

console.log(
  "buf.byteLength in main AFTER transfer to worker:",
  myBuf.byteLength,
);
```

#### myWorker.js 代码

```js
// 监听 main 并将缓冲区转移到 myWorker
self.onmessage = function handleMessageFromMain(msg) {
  console.log("message from main received in worker:", msg);

  const bufTransferredFromMain = msg.data;

  console.log(
    "buf.byteLength in worker BEFORE transfer back to main:",
    bufTransferredFromMain.byteLength,
  );

  // 将 buf 发送回 main 并转移底层 ArrayBuffer
  self.postMessage(bufTransferredFromMain, [bufTransferredFromMain]);

  console.log(
    "buf.byteLength in worker AFTER transfer back to main:",
    bufTransferredFromMain.byteLength,
  );
};
```

#### 输出日志

```bash
buf.byteLength in main BEFORE transfer to worker:        8                     main.js:19
buf.byteLength in main AFTER transfer to worker:         0                     main.js:27

message from main received in worker:                    MessageEvent { ... }  myWorker.js:3
buf.byteLength in worker BEFORE transfer back to main:   8                     myWorker.js:7
buf.byteLength in worker AFTER transfer back to main:    0                     myWorker.js:15

message from worker received in main:                    MessageEvent { ... }  main.js:6
buf.byteLength in main AFTER transfer back from worker:  8                     main.js:10
```

`ArrayBuffer` 在传输后，其 `byteLength` 将变为 0。要查看此 Firefox 演示插件的完整可运行示例，请参阅此处：[GitHub :: ChromeWorker - demo-transfer-arraybuffer](https://github.com/Noitidart/ChromeWorker/tree/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("Worker")}} 接口。
