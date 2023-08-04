---
title: Worker
slug: Web/API/Worker
---

{{APIRef("Web Workers API")}}

Worker 接口是 [Web Workers API](/zh-CN/docs/Web/API/Web_Workers_API) 的一部分，指的是一种可由脚本创建的后台任务，任务执行中可以向其创建者收发信息。要创建一个 Worker，只须调用 `Worker(URL)` 构造函数，函数参数 `URL` 为指定的脚本。

Worker 也可以创建新的 Worker，当然，所有 Worker 必须与其创建者[同源](/zh-CN/docs/Web/Security/Same-origin_policy)（注意：[Blink](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/5R3B4RN4GHU)暂时不支持嵌套 Worker）。

需要注意的是，不是所有函数和构造函数 (或者说…类) 都可以在 Worker 中使用。具体参考页面 [Worker 所支持的函数和类](/zh-CN/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)。Worker 可以使用 [`XMLHttpRequest`](/zh-CN/DOM/XMLHttpRequest) 发送请求，但是请求的 `responseXML` 与 `channel` 两个属性值始终返回 `null` （`fetch` 仍可正常使用，没有类似的限制）。

> **备注：** 如果你要在火狐浏览器的扩展使用 Worker 访问 [js-ctypes](/zh-CN/docs/Mozilla/js-ctypes)，应使用 {{ domxref("ChromeWorker") }} 对象来替代。(译者注：这里没有看懂，希望有人能驳正，或添加说明)

## 构造函数

- {{domxref("Worker.Worker", "Worker()")}}
  - : 创建一个专用 Web worker，它只执行 URL 指定的脚本。使用 [Blob URL](/zh-CN/docs/Web/API/Blob) 作为参数亦可。

## 属性

*继承*父对象*{{domxref("EventTarget")}} 的属性，以及实现对象 {{domxref("AbstractWorker")}}的属性。*

### _事件句柄_

- {{domxref("AbstractWorker.onerror")}}
  - : 当{{domxref("ErrorEvent")}} 类型的事件冒泡到 worker 时，事件监听函数 {{ domxref("EventListener") }} 被调用。它继承于 {{domxref("AbstractWorker")}}.
- {{domxref("Worker.onmessage")}}
  - : 当{{domxref("MessageEvent")}}类型的事件冒泡到 worker 时，事件监听函数 {{ domxref("EventListener") }} 被调用。例如，一个消息通过 {{domxref("DedicatedWorkerGlobalScope.postMessage")}}，从执行者发送到父页面对象，消息保存在事件对象的 {{domxref("MessageEvent.data", "data")}} 属性中。
- {{domxref("Worker.onmessageerror")}}
  - : 当[`messageerror`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event) 类型的事件发生时，对应的事件处理器代码被调用。

## 方法

*继承*父对象*{{domxref("EventTarget")}} 的方法，以及实现对象 {{domxref("AbstractWorker")}}的方法。*

- {{domxref("Worker.postMessage()")}}
  - : 发送一条消息到最近的外层对象，消息可由任何 JavaScript 对象组成。
- {{domxref("Worker.terminate()")}}
  - : 立即终止 worker。该方法不会给 worker 留下任何完成操作的机会；就是简单的立即停止。Service Woker 不支持这个方法。

## 示例

下面的代码通过构造函数 {{domxref("Worker.Worker", "Worker()")}} 创建了一个 {{domxref("Worker")}} 对象。

```js
var myWorker = new Worker("worker.js");
var first = document.querySelector("#number1");
var second = document.querySelector("#number2");

first.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

完整的示例，请查阅 [Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)).

## 规范

{{Specifications}}

## 浏览器兼容性

不同类型的 worker 兼容度不一致，详细参考具体定义的页面。

{{Compat}}

### 跨域行为的错误事件

浏览器的早期版本中，加载跨域的执行者脚本导致 `SecurityError`事件。根据规范的变更，而新版本的浏览器只有[`error`](/zh-CN/docs/Web/API/Element/error_event)事件发生

## 相关链接

- [Using web workers](/En/Using_web_workers)
- [Functions available to workers](/En/DOM/Worker/Functions_available_to_workers)
- Other kind of workers: {{ domxref("SharedWorker") }} and [ServiceWorker](/zh-CN/docs/Web/API/ServiceWorker_API).
- Non-standard, Gecko-specific workers: {{ domxref("ChromeWorker") }}, used by extensions.
