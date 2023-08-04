---
title: MessageChannel.port2
slug: Web/API/MessageChannel/port2
---

{{APIRef("HTML DOM")}}

{{domxref("MessageChannel")}}接口的 **`port2`** 是一个只读属性，返回消息通道的第二个端口，该端口连接到通道另一端的上下文，也就是发送消息时的目的地。

{{AvailableInWorkers}}

## 语法

```plain
channel.port2;
```

### 值

表示通道第二个端口的一个{{domxref("MessagePort")}}对象，该端口附加到通道另一端的上下文。

## 示例

如下代码所示，通过{{domxref("MessageChannel()", "MessageChannel.MessageChannel")}}构造函数创建了一个新的通道。当 IFrame 加载完毕，我们使用{{domxref("MessagePort.postMessage")}}将一条消息以及 port2 传递给 IFrame。handleMessage 处理程序响应从 IFrame 发回的消息（使用 {{domxref("MessagePort.onmessage")}}），将其放入段落中。{{domxref("MessageChannel.port1")}}已经监听，以检测消息何时到达。

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

有关完整的运行示例，请参阅我们在 GitHub 的 [channel messaging basic demo](https://github.com/mdn/channel-messaging-basic-demo) ([run it live too](http://mdn.github.io/channel-messaging-basic-demo/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
