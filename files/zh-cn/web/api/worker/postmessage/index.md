---
title: Worker.postMessage()
slug: Web/API/Worker/postMessage
---

{{APIRef("Web Workers API")}}

{{domxref("Worker")}} 接口的 **`postMessage()`**方法向 worker 的内部作用域发送一个消息。这接受单个参数，这是要发送给 worker 的数据。数据可以是由[结构化克隆](/zh-CN/docs/Web/Guide/DOM/The_structured_clone_algorithm)算法处理的任何值或 JavaScript 对象，其包括循环引用。

工作者可以使用 {{domxref("DedicatedWorkerGlobalScope.postMessage")}} 方法将信息发送回生成它的线程。

## 语法

```js
myWorker.postMessage(aMessage, transferList);
```

### 参数

- _aMessage_
  - : The object to deliver to the worker; this will be in the data field in the event delivered to the {{domxref("DedicatedWorkerGlobalScope.onmessage")}} handler. This may be any value or JavaScript object handled by the [structured clone](/zh-CN/docs/Web/Guide/DOM/The_structured_clone_algorithm) algorithm, which includes cyclical references.
- _transferList_ {{optional_inline}}
  - : 一个可选的{{domxref("Transferable")}}对象的[数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)，用于传递所有权。如果一个对象的所有权被转移，在发送它的上下文中将变为不可用（中止），并且只有在它被发送到的 worker 中可用。
    可转移对象是如{{domxref("ArrayBuffer")}}，{{domxref("MessagePort")}}或{{domxref("ImageBitmap")}}的实例对象。transferList 数组中不可传入 null。

### Returns

Void.

## Example

以下代码显示了如何使用 {{domxref("Worker.Worker", "Worker()")}} 构造函数创建一个 Worker 对象。当两个表单输入 (`first`和`second)`中的其中一个的输入值改变时， {{event("change")}} 事件将调用`postMessage()`把两个 input 的值发送给当前 worker。

```js
var myWorker = new Worker('worker.js');

first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

second.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}
```

有关完整的示例，请参阅我们的[Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)).

> **备注：** `postMessage()` 一次只能发送一个对象。如上所示，如果你想传递多个值，可以使用数组。

### Transfer Example

This example shows a Firefox add-on that transfers an `ArrayBuffer` from the main thread to the `ChromeWorker`, and then the `ChromeWorker` transfers it back to the main thread.

#### Main thread code:

```js
var myWorker = new ChromeWorker(self.path + 'myWorker.js');

function handleMessageFromWorker(msg) {
    console.log('incoming message from worker, msg:', msg);
    switch (msg.data.aTopic) {
        case 'do_sendMainArrBuff':
            sendMainArrBuff(msg.data.aBuf)
            break;
        default:
            throw 'no aTopic on incoming message to ChromeWorker';
    }
}

myWorker.addEventListener('message', handleMessageFromWorker);

// Ok lets create the buffer and send it
var arrBuf = new ArrayBuffer(8);
console.info('arrBuf.byteLength pre transfer:', arrBuf.byteLength);

myWorker.postMessage(
    {
        aTopic: 'do_sendWorkerArrBuff',
        aBuf: arrBuf // The array buffer that we passed to the transferrable section 3 lines below
    },
    [
        arrBuf // The array buffer we created 9 lines above
    ]
);

console.info('arrBuf.byteLength post transfer:', arrBuf.byteLength);
```

#### Worker code

```js
self.onmessage = function (msg) {
    switch (msg.data.aTopic) {
        case 'do_sendWorkerArrBuff':
                sendWorkerArrBuff(msg.data.aBuf)
            break;
        default:
            throw 'no aTopic on incoming message to ChromeWorker';
    }
}

function sendWorkerArrBuff(aBuf) {
    console.info('from worker, PRE send back aBuf.byteLength:', aBuf.byteLength);

    self.postMessage({aTopic:'do_sendMainArrBuff', aBuf:aBuf}, [aBuf]);

    console.info('from worker, POST send back aBuf.byteLength:', aBuf.byteLength);
}
```

#### Output logged

```
arrBuf.byteLength pre transfer: 8                              bootstrap.js:40
arrBuf.byteLength post transfer: 0                             bootstrap.js:42

from worker, PRE send back aBuf.byteLength: 8                  myWorker.js:5:2

incoming message from worker, msg: message { ... }             bootstrap.js:20
got back buf in main thread, aBuf.byteLength: 8                bootstrap.js:12

from worker, POST send back aBuf.byteLength: 0                 myWorker.js:7:2
```

`byteLength` goes to 0 as it is transferred. To see a full working example of this Firefox demo add-on see here: [GitHub :: ChromeWorker - demo-transfer-arraybuffer](https://github.com/Noitidart/ChromeWorker/tree/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Worker")}} interface it belongs to.
