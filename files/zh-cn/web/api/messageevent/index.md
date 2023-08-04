---
title: MessageEvent
slug: Web/API/MessageEvent
---

{{APIRef("HTML DOM")}}

**`MessageEvent`** 是接口代表一段被目标对象接收的消息。

用来代表下列情况的消息

- [Server-sent events](/zh-CN/docs/Web/API/Server-sent_events) (参见{{domxref("EventSource.onmessage")}}).
- [Web sockets](/zh-CN/docs/Web/API/WebSockets_API) (参见 [WebSocket](/zh-CN/docs/Web/API/WebSocket) 接口的 `onmessage` 属性).
- Cross-document messaging (参见 {{domxref("Window.postMessage()")}} 和 {{domxref("Window.onmessage")}}).
- [Channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API) (参见 {{domxref("MessagePort.postMessage()")}} 和{{domxref("MessagePort.onmessage")}}).
- Cross-worker/document messaging (参见上面两个入口，还有 {{domxref("Worker.postMessage()")}}, {{domxref("Worker.onmessage")}}, {{domxref("ServiceWorkerGlobalScope.onmessage")}}, 等等.)
- [Broadcast channels](/zh-CN/docs/Web/API/Broadcast_Channel_API) (参见 {{domxref("Broadcastchannel.postMessage()")}}) 和 {{domxref("BroadcastChannel.onmessage")}}).
- WebRTC data channels (参见 {{domxref("RTCDataChannel.onmessage")}}).

通过这个事件触发的动作被定义为一个函数，该函数作为相关[`message`](/zh-CN/docs/Web/API/BroadcastChannel/message_event)事件 (例如使用前文所列的`onmessage` 处理器) 的事件处理器。

{{AvailableInWorkers}}

## 构造函数

- {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}}
  - : 创建一个新的 **消息事件** 。

## 属性

_继承其父类 {{domxref("Event")}} 的属性。_

- {{domxref("MessageEvent.data")}} {{ReadonlyInline}}
  - : 返回 {{domxref("DOMString")}}, {{domxref("Blob")}} 或者 {{domxref("ArrayBuffer")}}，包含来自发送者的数据。
- {{domxref("MessageEvent.origin")}}
  - : 返回一个表示消息发送者来源的{{domxref("USVString")}}
- {{domxref("MessageEvent.lastEventId")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} representing a unique ID for the event.
- {{domxref("MessageEvent.source")}}
  - : `MessageEventSource` (可以是 {{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, 或 {{domxref("ServiceWorker")}} 对象) 代表消息发送者。
- {{domxref("MessageEvent.ports")}}
  - : {{domxref("MessagePort")}}对象数组，表示消息正通过特定通道（数据通道）发送的相关端口（适用于通道消息传输或者向一个共享线程（shared work）发送消息时）。

## 方法

_继承父类 {{domxref("Event")}} 的方法。_

- {{domxref("MessageEvent.initMessageEvent()")}} {{deprecated_inline}}
  - : **不要再使用**: 使用 {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}}。

## 示例

在我们的基础共享线程示例 [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](http://mdn.github.io/simple-shared-worker/)) 中，我们有两个 HTML 页，每一页都用简单的 js 代码去执行简单的计算。不同的脚本使用同一个 worker 文件去执行计算 — 它们都可以访问那个 worker 文件，即使它们（scripts）运行在不同的窗口。

下面的代码片段展示了使用{{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}构造器创建一个 `SharedWorker`对象。

```js
var myWorker = new SharedWorker("worker.js");
```

接下来两份脚本通过一个{{domxref("SharedWorker.port")}}方法创建的{{domxref("MessagePort")}}对象访问 worker。如果 onmessage 事件通过 addEventListener 被绑定，端口可以用`start()`方法手动开启：

```js
myWorker.port.start();
```

当端口被打开，两份脚本各自都可用 `port.postMessage()` 向 worker 传消息并用 `port.onmessage`处理它（worker）传来的消息：

```js
first.onchange = function () {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = function () {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

myWorker.port.onmessage = function (e) {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

在 worker 内部我们使用 {{domxref("SharedWorkerGlobalScope.onconnect")}} 处理器来连接前文说到相同端口。与 worker 相关联的端口可以在 {{domxref("SharedWorkerGlobalScope/connect_event", "connect")}} 事件的 `ports` 属性中访问到——接着我们使用 {{domxref("MessagePort")}} `start()` 方法打开端口，`onmessage` 处理器来处理主线程传来的消息。

```js
onconnect = function (e) {
  var port = e.ports[0];

  port.addEventListener("message", function (e) {
    var workerResult = "Result: " + e.data[0] * e.data[1];
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
