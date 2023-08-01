---
title: MessageChannel.port1
slug: Web/API/MessageChannel/port1
---

{{APIRef("HTML DOM")}}

{{domxref("MessageChannel")}} 的只读属性 **`port1`** 返回消息通道的第一个端口，此端口连接到源上下文通道。

{{AvailableInWorkers}}

## 语法

```
channel.port1;
```

### Value

一个 {{domxref("MessagePort")}} 对象，通道的第一个端口，此端口连接到源上下文通道。

## 示例

在以下代码块中，您可以看到使用 {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} 构造函数创建的新通道。当 {{HTMLElement("iframe")}} 加载完毕，我们使用 {{domxref("MessagePort.postMessage")}} 方法把一条消息和 {{domxref("MessageChannel.port2")}} 传递给 {{HTMLElement("iframe")}}。handleMessage 处理程序将会从 \<iframe> 中（使用 {{domxref("MessagePort.onmessage")}} 监听事件）接收到信息，将数据其放入一个段落。handleMessage 方法关联到 port1 用于监听收到的消息。

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

一个完整的运行示例，可以在 GitHub 上查看 [channel messaging basic demo](https://github.com/mdn/channel-messaging-basic-demo) ([run it live too](http://mdn.github.io/channel-messaging-basic-demo/)).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Using channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
