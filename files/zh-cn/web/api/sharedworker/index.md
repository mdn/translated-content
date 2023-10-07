---
title: SharedWorker
slug: Web/API/SharedWorker
---

{{APIRef("Web Workers API")}}

**`SharedWorker`** 接口代表一种特定类型的 worker，可以从几个浏览上下文中*访问*，例如几个窗口、iframe 或其他 worker。它们实现一个不同于普通 worker 的接口，具有不同的全局作用域，{{domxref("SharedWorkerGlobalScope")}} 。

> **备注：** 如果要使 **SharedWorker** 连接到多个不同的页面，这些页面必须是同源的（相同的协议、host 以及端口）。

## 构造函数

- {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}
  - : 创建一个执行指定 url 脚本的共享 web worker。

## 属性

_继承自其父类 {{domxref("EventTarget")}}，并实现 {{domxref("AbstractWorker")}} 中的属性。_

- {{domxref("AbstractWorker.onerror")}}
  - : 一个 {{domxref("EventListener")}}，当 {{domxref("ErrorEvent")}} 类型的 `error` 冒泡到 worker 时触发。
- {{domxref("SharedWorker.port")}} {{readonlyInline}}
  - : 返回一个 {{domxref("MessagePort")}} 对象，该对象可以用来进行通信和对共享 worker 进行控制。

## 方法

继承自其*父类 {{domxref("EventTarget")}}，并实现 {{domxref("AbstractWorker")}} 中的方法。*

## 示例

在这个[基本的共享型 worker 示例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) 中（[运行共享型 worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)），我们有两个 HTML 页面，每个页面中使用一些 JavaScript 来执行简单的计算。这些脚本使用相同的 worker 文件来执行计算——每个脚本都可以访问这个 worker 文件，即使脚本所处的页面在不同的窗口下。

下面的代码展示了如何通过 {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} 方法来创建一个共享进程对象。

```js
var myWorker = new SharedWorker("worker.js");
```

然后两个脚本都通过 {{domxref("MessagePort")}} 对象来访问 worker，这个对象用{{domxref("SharedWorker.port")}} 属性获得。如果已经用 addEventListener 监听了 onmessage 事件，则可以使用 `start()` 方法手动启动端口：

```js
myWorker.port.start();
```

当启动端口时，两个脚本都会向 worker 发送消息，然后使用 `port.postMessage()`和 `port.onmessage` 处理从 worker 返回的消息：

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

在 worker 中我们使用 {{domxref("SharedWorkerGlobalScope.onconnect")}} 处理程序连接到上面讨论的相同端口。可以在 {{domxref("SharedWorkerGlobalScope/connect_event", "connect")}} 事件的 `ports` 属性中获取到与该 worker 相关联的端口——然后我们使用 {{domxref("MessagePort")}} `start()` 方法来启动端口，然后 `onmessage` 处理程序处理来自主线程的消息。

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

## 更多

- {{domxref("Worker")}}
- [使用 web worker](/zh-CN/docs/Web/Guide/Performance/Using_web_workers)
