---
title: 'Worker: message event'
slug: Web/API/Worker/message_event
---

{{APIRef}}当 worker 的父级接收到来自其 worker 的消息时，会在 {{domxref('Worker')}} 对象上触发 `message` 事件。例如：当 worker 通过 [`DedicatedWorkerGlobalScope.postMessage()`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) 发送了一条消息时。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">是否冒泡</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">是否可撤销</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">接口</th>
      <td>{{domxref("MessageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">对应事件处理属性</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/API/Worker/onmessage">onmessage</a></code
        >
      </td>
    </tr>
  </tbody>
</table>

## 例子

下面的代码创建了一个 worker 并使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 监听从 worker 发来的消息：

```js
const worker = new Worker("static/scripts/worker.js");

worker.addEventListener('message', (event) => {
    console.log(`Received message from worker: ${event.data}`)
});
```

另外，也可以使用 [`onmessage`](/zh-CN/docs/Web/API/Worker/onmessage) 事件处理属性进行监听：

```js
const worker = new Worker("static/scripts/worker.js");

worker.onmessage = (event) => {
    console.log(`Received message from worker: ${event.data}`)
};
```

worker 使用 [`self.postMessage()`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) 发出消息：

```js
// static/scripts/worker.js

self.postMessage('I\'m alive!');
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另请参阅

- 相关事件：[`messageerror`](/zh-CN/docs/Web/API/Worker/messageerror_event).
- [`DedicatedWorkerGlobalScope.postMessage()`](/zh-CN/docs/Web/API/DedicatedWorkerGlobalScope/postMessage).
