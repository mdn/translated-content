---
title: MessageChannel：MessageChannel() 构造函数
slug: Web/API/MessageChannel/MessageChannel
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

{{domxref("MessageChannel")}} 接口的 **`MessageChannel()`** 构造函数返回一个新的 {{domxref("MessageChannel")}} 对象，其中包含两个新的 {{domxref("MessagePort")}} 对象。

## 语法

```js-nolint
new MessageChannel()
```

### 参数

无（{{jsxref("undefined")}}）。

### 返回值

一个新的 {{domxref("MessageChannel")}} 对象。

## 示例

在以下的代码块中，你可以看到使用 `MessageChannel()` 构造函数创建的新 Channel。当 {{HTMLElement("iframe")}} 加载完成后，我们使用 {{domxref("MessagePort.postMessage")}} 将 {{domxref("MessageChannel.port2", "port2")}} 传递给 `<iframe>`，并附带一条消息。然后 `handleMessage` 处理程序响应从 `<iframe>` 发送回来的消息（使用 {{domxref("MessagePort.message_event", "onmessage")}}），并将其放入一个段落中。同时监听 {{domxref("MessageChannel.port1", "port1")}} 以检查何时接收到消息。

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
