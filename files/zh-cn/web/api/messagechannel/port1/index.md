---
title: MessageChannel：port1 属性
slug: Web/API/MessageChannel/port1
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

{{domxref("MessageChannel")}} 接口的 **`port1`** 只读属性返回消息 channel 的第一个端口——即附加到发起 channel 的上下文的端口。

## 值

一个 {{domxref("MessagePort")}} 对象，它是 channel 的第一个端口，即连接到发起 channel 上下文的端口。

## 示例

在以下的代码块中，你可以看到使用 {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} 构造函数创建的新 Channel。当 {{HTMLElement("iframe")}} 加载完成后，我们使用 {{domxref("MessagePort.postMessage")}} 将 {{domxref("MessageChannel.port2", "port2")}} 传递给 {{HTMLElement("iframe")}}，并附带一条消息。然后 `handleMessage` 处理程序响应从 `<iframe>` 发送回来的消息（使用 {{domxref("MessagePort.message_event", "onmessage")}}），并将其放入一个段落中。同时监听 `port1` 以检查何时接收到消息。

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
