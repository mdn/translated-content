---
title: "BroadcastChannel: messageerror event"
slug: Web/API/BroadcastChannel/messageerror_event
---

{{APIRef}}

当频道收到一条无法反序列化的消息时会在 {{domxref('BroadcastChannel')}} 对象上触发 `messageerror` 事件。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MessageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/API/BroadcastChannel/onmessageerror"
            >onmessageerror</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## 示例

以下代码使用 [`addEventListener`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 来监听消息和错误：

```js
const channel = new BroadcastChannel("example-channel");

channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});

channel.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

使用 [`onmessage`](/zh-CN/docs/Web/API/BroadcastChannel/onmessage) 和 [`onmessageerror`](/zh-CN/docs/Web/API/BroadcastChannel/onmessageerror) 事件处理程序来实现相同效果：

```js
const channel = new BroadcastChannel("example-channel");

channel.onmessage = (event) => {
  received.textContent = event.data;
};

channel.onmessageerror = (event) => {
  console.log(event);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- 相关事件：[`message`](/zh-CN/docs/Web/API/BroadcastChannel/message_event)
