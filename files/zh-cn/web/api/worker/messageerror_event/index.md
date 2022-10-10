---
title: 'Worker: messageerror event'
slug: Web/API/Worker/messageerror_event
---

{{APIRef}}

当 {{domxref('Worker')}} 对象接收到一条无法被反序列化的消息时， `messageerror` 事件将在该对象上被触发。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">是否冒泡</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">是否可取消</th>
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
          ><a href="/zh-CN/docs/Web/API/Worker/onmessageerror"
            >onmessageerror</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## 例子

创建一个 worker，使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 监听 `message` 和 `messageerror` 事件：

```js
// inside main.js

const worker = new Worker("static/scripts/worker.js");

worker.addEventListener("message", (event) => {
    console.error(`Received message from worker: ${event}`);
});

worker.addEventListener("messageerror", (event) => {
    console.error(`Error receiving message from worker: ${event}`);
});
```

同样，可以使用 [`onmessageerror`](/zh-CN/docs/Web/API/Window/messageerror_event) 事件处理属性监听事件：

```js
// inside main.js

const worker = new Worker("static/scripts/worker.js");

worker.onmessage = (event) => {
    console.error(`Received message from worker: ${event}`);
};

worker.onmessageerror = (event) => {
    console.error(`Error receiving message from worker: ${event}`);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另请参阅

- [`Worker.postMessage()`](/zh-CN/docs/Web/API/Worker/postMessage)
- 相关事件：[`message`](/zh-CN/docs/Web/API/Worker/message_event).
