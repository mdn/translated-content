---
title: MessagePort：postMessage() 方法
slug: Web/API/MessagePort/postMessage
l10n:
  sourceCommit: e0310b3f565d3147fa80d9e63ace41e0fc244fa6
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

{{domxref("MessagePort")}} 接口的 **`postMessage()`** 方法从端口发送一条消息，可以将对象所有权转移给其他浏览上下文。

## 语法

```js-nolint
postMessage(message)
postMessage(message, transfer)
postMessage(message, options)
```

### 参数

- `message`
  - : 需要通过 channel 发送的消息。可以是任何基本数据类型。多个数据项可以作为数组发送。
- `transfer` {{optional_inline}}
  - : 一个包含要转让所有权的[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)的可选的[数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)。这些对象的所有权将转移到接收方，发送方将不能再使用它们。这些可转移对象应附加到消息中；否则它们将被转移，但实际上在接收方无法访问。
- `options` {{optional_inline}}
  - : 包含以下属性的可选对象：
    - `transfer` {{optional_inline}}
      - : 与 `transfer` 参数含义相同。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

在以下代码块中，你可以看到使用 {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} 构造函数创建了一个新的 `channel`。当 IFrame 加载完成后，我们使用 {{domxref("window.postMessage")}} 中的 {{domxref("MessageChannel.port2")}} 以及一条消息传递给 IFrame。IFrame 接收消息，并使用 `MessageChannel` 中的 `postMessage()` 上发送回上一条消息。

`handleMessage` 处理程序使用 `onmessage` 对从 iframe 发回的消息作出响应，并将其放入段落中；{{domxref("MessageChannel.port1")}} 监听了 `onmessage` 事件，以检查消息何时到达。

```js
const channel = new MessageChannel();
const para = document.querySelector("p");

const ifr = document.querySelector("iframe");
const otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage("传输信息端口", "*", [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}

// 在 iframe 中...

window.addEventListener("message", (event) => {
  const messagePort = event.ports?.[0];
  messagePort.postMessage("你好，来自 iframe！");
});
```

要查看可运行的完整示例，参考我们在 Github 上的 [channel messaging 基础演示](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic)（[也可以在线运行](https://mdn.github.io/dom-examples/channel-messaging-basic/)）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
