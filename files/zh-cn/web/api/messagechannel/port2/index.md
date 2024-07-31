---
title: MessageChannel：port2 属性
slug: Web/API/MessageChannel/port2
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

{{domxref("MessageChannel")}} 接口的 **`port2`** 只读属性返回消息 channel 的第二个端口——即连接到通道另一端上下文的端口，消息最初将发送到这个端口。

## 值

一个 {{domxref("MessagePort")}} 对象，它是 channel 的第二个端口，即连接到 channel 另一端上下文的端口。

## 示例

在以下的代码块中，你可以看到使用 {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} 构造函数创建的新 Channel。当 IFrame 加载完成后，我们使用 {{domxref("MessagePort.postMessage")}} 将 `port2` 传递给 IFrame，并附带一条消息。然后 `handleMessage` 处理程序响应从 IFrame 发送回来的消息（使用 {{domxref("MessagePort.message_event", "onmessage")}}），并将其放入一个段落中。同时监听 {{domxref("MessageChannel.port1", "port1")}} 以检查何时接收到消息。

```js
const channel = new MessageChannel();
const para = document.querySelector("p");

const ifr = document.querySelector("iframe");
const otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage("来自主页的问候！", "*", [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

有关完整的运行示例，请参阅我们在 GitHub 上的 [channel messaging 基础示例](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic)，[也可以实时运行它](https://mdn.github.io/dom-examples/channel-messaging-basic/)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
