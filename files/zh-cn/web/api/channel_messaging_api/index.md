---
title: Channel Messaging API
slug: Web/API/Channel_Messaging_API
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{DefaultAPISidebar("Channel Messaging API")}} {{AvailableInWorkers}}

**Channel Messaging API** 允许两个运行在同一个文档的不同浏览上下文（比如两个 iframe，或者文档主体和一个 iframe，使用 {{domxref("SharedWorker")}} 的两个文档，或者两个 worker）中的独立脚本直接进行通讯，在每端使用一个端口（port）通过双向频道（channel）或管道（pipe）向彼此传递消息。

## 概念和用法

使用 {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} 构造函数来创建消息频道。一旦创建，可以通过 {{domxref("MessageChannel.port1")}} 和 {{domxref("MessageChannel.port2")}} 属性访问频道的两个端口（这两个属性都会返回 {{domxref("MessagePort")}} 对象）。创建频道的应用程序使用 `port1`，在另一端的程序使用 `port2`——你向 `port2` 发送信息，然后携带 2 个参数（需要传递的消息，要传递所有权的对象，在这种情况下是端口自身）调用 {{domxref("window.postMessage")}} 方法将端口传递到另一个浏览器上下文。

当这些可转移的对象被传递后，它们就从之前所属的上下文中消失了。比如一个端口，一旦被发送，在原本的上下文中就再也不可用了。

另一个浏览器上下文可以使用 {{domxref("MessagePort.message_event", "onmessage")}} 监听信息，并使用事件的 `data` 属性获取消息内容。你可以通过 {{domxref("MessagePort.postMessage")}} 将消息发送回原始文档进行响应。

当你想要停止通过频道发送消息时，你可以调用 {{domxref("MessagePort.close")}} 来关闭端口。

请参阅[使用频道传递消息](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)，了解有关如何使用此 API 的更多信息。

## 接口

- {{domxref("MessageChannel")}}
  - : 创建一个新的消息频道来发送消息。
- {{domxref("MessagePort")}}
  - : 控制消息频道的端口，允许从一个端口发送消息，并监听到达另一个端口。

## 示例

- 我们在 Github 上发布了[频道消息传递基本演示](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic)，在[这里](https://mdn.github.io/dom-examples/channel-messaging-basic/)直接尝试。这个例子展示了一次页面和嵌入 {{htmlelement("iframe")}} 间的非常简单的消息传递。
- 你也可以参考[多个消息演示](https://github.com/mdn/dom-examples/tree/main/channel-messaging-multimessage)（[在线演示](https://mdn.github.io/dom-examples/channel-messaging-multimessage/)）。这个例子展示了稍微复杂些的设置，可以在主页面和 IFrame 之间传递多条消息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用频道传递消息](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
- [Web Workers API](/zh-CN/docs/Web/API/Web_Workers_API)
- [Broadcast Channel API](/zh-CN/docs/Web/API/Broadcast_Channel_API)
