---
title: MessagePort
slug: Web/API/MessagePort
---

{{APIRef("HTML DOM")}}

[Channel Messaging API](/zh-CN/docs/Web/API/Channel_Messaging_API) 的 **`MessagePort`** 接口代表 {{domxref("MessageChannel")}} 的两个端口之一，它可以让你从一个端口发送消息，并在消息到达的另一个端口监听它们。

{{AvailableInWorkers}}

## 方法

_继承自父类 {{domxref("EventTarget")}} 的方法_

- {{domxref("MessagePort.postMessage")}}
  - : 从端口发送一条消息，并且可选是否将对象的所有权交给其他浏览器上下文。
- {{domxref("MessagePort.start")}}
  - : 开始发送该端口中的消息队列 (只有使用 {{domxref("EventTarget.addEventListener")}} 的时候才需要调用；当使用 {{domxref("MessagePort.onmessage")}} 时，是默认开始的。)
- {{domxref("MessagePort.close")}}
  - : 断开端口连接，它将不再是激活状态。

## 事件回调

_继承自父类 {{domxref("EventTarget")}} 的事件回调_

- {{domxref("MessagePort.onmessage")}}
  - : 是一个 {{domxref("EventListener")}}, 当类型为 `message` 的 {{domxref("MessageEvent")}} 在该端口触发时，它将会被调用 ── 也就是说，该端口收到了一条消息。
- {{domxref("MessagePort.onmessageerror","onmessageerror")}}
  - : 是一个 {{domxref("EventListener")}}, 当类型为 {{domxref("MessageError")}} 的 {{domxref("MessageEvent")}} 被触发时，它将会被调用 ── 这意味着，端口收到了一条无法被反序列化的消息。

## 事件

- {{domxref("MessagePort.message_event","message")}}
  - : 当 `MessagePort` 对象收到消息时会触发。
    也可以通过 {{domxref("MessagePort.onmessage","onmessage")}} 属性使用。
- {{domxref("MessagePort.messageerror_event","messageerror")}}
  - : 当 `MessagePort` 对象收到无法被反序列化的消息时触发。
    也可以通过 {{domxref("MessagePort.onmessageerror","onmessageerror")}} 属性使用。

## 例子

在下面的例子中，你可以看到一个使用 {{domxref("MessageChannel.MessageChannel","MessageChannel()")}} 构造函数创建出的新 channel.

当 IFrame 加载完成后，我们给 {{domxref("MessageChannel.port1")}} 注册了一个 {{domxref("MessagePort.onmessage","onmessage")}} 回调，并且使用 {{domxref("window.postMessage")}} 方法把 {{domxref("MessageChannel.port2")}} 和一条消息一起传给 IFrame.

当从 IFrame 收到消息时，`onMessage` 方法会把消息输出到一个段落里。

```plain
var channel = new MessageChannel();
var output = document.querySelector('.output');
var iframe = document.querySelector('iframe');

// 等待 iframe 加载
iframe.addEventListener("load", onLoad);

function onLoad() {
  // 监听 port1 的事件
  channel.port1.onmessage = onMessage;

  // 把 port2 传给 iframe
  iframe.contentWindow.postMessage('Hello from the main page!', '*', [channel.port2]);
}


// 处理 port1 收到的消息
function onMessage(e) {
  output.innerHTML = e.data;
}
```

要查看可运行的完整示例，参考我们在 Github 上的 [channel messaging basic demo](https://github.com/mdn/dom-examples/tree/master/channel-messaging-basic) ([也可以在线运行](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 使用 [channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
