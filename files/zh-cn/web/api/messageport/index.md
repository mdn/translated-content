---
title: MessagePort
slug: Web/API/MessagePort
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

[Channel Messaging API](/zh-CN/docs/Web/API/Channel_Messaging_API) 的 **`MessagePort`** 接口代表 {{domxref("MessageChannel")}} 的两个端口之一，它可以让你从一个端口发送消息，并在消息到达的另一个端口监听它们。

`MessagePort` 是一个[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)。

{{InheritanceDiagram}}

## 实例方法

_继承父类 {{domxref("EventTarget")}} 的方法_。

- {{domxref("MessagePort.postMessage","postMessage()")}}
  - : 从端口发送一条消息，并且可选是否将对象的所有权交给其他浏览器上下文。
- {{domxref("MessagePort.start","start()")}}
  - : 开始发送该端口中的消息队列（仅在使用 {{domxref("EventTarget.addEventListener")}} 时需要；使用 {{domxref("MessagePort.message_event", "onmessage")}} 已隐含调用该方法）。
- {{domxref("MessagePort.close","close()")}}
  - : 断开端口连接，它将不再是激活状态。

## 事件

_继承父类 {{domxref("EventTarget")}} 的事件_。

- {{domxref("MessagePort.message_event","message")}}
  - : 当 `MessagePort` 对象收到消息时触发。
- {{domxref("MessagePort.messageerror_event","messageerror")}}
  - : 当 `MessagePort` 对象收到无法被反序列化的消息时触发。

## 示例

在下面的示例中，你可以看到一个使用 {{domxref("MessageChannel.MessageChannel","MessageChannel()")}} 构造函数创建出的新通道。

当 IFrame 加载完成后，我们给 {{domxref("MessageChannel.port1")}} 注册了一个 {{domxref("MessagePort/message_event","onmessage")}} 回调，并且使用 {{domxref("window.postMessage")}} 方法把 {{domxref("MessageChannel.port2")}} 和一条消息一起传给 IFrame。

当从 IFrame 收到消息时，`onMessage` 函数会把消息输出到一个段落里。

```js
const channel = new MessageChannel();
const output = document.querySelector(".output");
const iframe = document.querySelector("iframe");

// 等待 iframe 加载
iframe.addEventListener("load", onLoad);

function onLoad() {
  // 监听 port1 的消息
  channel.port1.onmessage = onMessage;

  // 把 port2 传给 iframe
  iframe.contentWindow.postMessage("Hello from the main page!", "*", [
    channel.port2,
  ]);
}

// 处理 port1 收到的消息
function onMessage(e) {
  output.innerHTML = e.data;
}
```

要查看可运行的完整示例，参考我们在 Github 上的 [channel messaging 基础演示](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic)（[也可以在线运行](https://mdn.github.io/dom-examples/channel-messaging-basic/)）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
