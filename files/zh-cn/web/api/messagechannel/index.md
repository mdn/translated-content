---
title: MessageChannel
slug: Web/API/MessageChannel
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

[Channel Messaging API](/zh-CN/docs/Web/API/Channel_Messaging_API) 的 **`MessageChannel`** 接口允许我们创建一个新的消息通道，并通过它的两个 {{domxref("MessagePort")}} 属性发送数据。

## 构造函数

- {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}}
  - : 返回一个新的 `MessageChannel` 对象，其中包含两个新的 {{domxref("MessagePort")}} 对象。

## 实例属性

- {{domxref("MessageChannel.port1")}} {{ReadOnlyInline}}
  - : 返回 channel 的 port1。
- {{domxref("MessageChannel.port2")}} {{ReadOnlyInline}}
  - : 返回 channel 的 port2。

## 示例

在以下的代码块中，你可以看到使用 {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} 构造函数创建的新 Channel。

当 IFrame 加载完成后，我们将为 {{domxref("MessageChannel.port1")}} 注册一个 {{domxref("MessagePort/message_event", "onmessage")}} 处理器，并使用 {{domxref("window.postMessage")}} 方法将 {{domxref("MessageChannel.port2")}} 和一条信息传输到 IFrame。

当收到 IFrame 返回的信息时，`onMessage` 函数会将信息输出到一个段落中。

```js
const channel = new MessageChannel();
const output = document.querySelector(".output");
const iframe = document.querySelector("iframe");

// 等待 iframe 加载
iframe.addEventListener("load", onLoad);

function onLoad() {
  // 在 port1 上监听消息
  channel.port1.onmessage = onMessage;

  // 将 port 2 传输到 iframe
  iframe.contentWindow.postMessage("来自主页的您好！", "*", [channel.port2]);
}

// 处理 port 1 收到的消息
function onMessage(e) {
  output.innerHTML = e.data;
}
```

有关完整的运行示例，请参阅我们在 GitHub 上的 [channel messaging 基础示例](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic)，[也可以实时运行它](https://mdn.github.io/dom-examples/channel-messaging-basic/)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
