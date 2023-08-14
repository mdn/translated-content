---
title: MessageChannel
slug: Web/API/MessageChannel
---

{{APIRef("HTML DOM")}}

Channel Messaging API 的 **`MessageChannel`** 接口允许我们创建一个新的消息通道，并通过它的两个 {{domxref("MessagePort")}} 属性发送数据。

{{AvailableInWorkers}}

## 属性

- {{domxref("MessageChannel.port1")}} {{readonlyInline}}
  - : 返回 channel 的 port1。
- {{domxref("MessageChannel.port2")}} {{readonlyInline}}
  - : 返回 channel 的 port2。

## 构造函数

- {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}}
  - : 返回一个带有两个 MessagePort 属性的 MessageChannel 新对象。

## 示例

在以下代码块中，您可以看到使用 MessageChannel 构造函数实例化了一个 channel 对象。当 iframe 加载完毕，我们使用 MessagePort.postMessage 方法把一条消息和 MessageChannel.port2 传递给 iframe。handleMessage 处理程序将会从 iframe 中（使用 MessagePort.onmessage 监听事件）接收到信息，将数据其放入 innerHTML 中。

```js
var channel = new MessageChannel();
var para = document.querySelector("p");

var ifr = document.querySelector("iframe");
var otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage("Hello from the main page!", "*", [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

有关更完整的运行示例，可以在 GitHub 上查看 [channel messaging 基本示例](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic)（[也可以在线运行示例](https://mdn.github.io/dom-examples/channel-messaging-basic/)）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
