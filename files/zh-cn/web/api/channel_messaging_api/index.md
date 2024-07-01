---
title: Channel Messaging API
slug: Web/API/Channel_Messaging_API
---

{{DefaultAPISidebar("Channel Messaging API")}}

**Channel Messaging API** 允许两个不同的脚本运行在同一个文档的不同浏览器上下文（比如两个 iframe，或者文档主体和一个 iframe，使用 {{domxref("SharedWorker")}} 的两个文档，或者两个 worker）来直接通讯，在每端使用一个端口（port）通过双向频道（channel）向彼此传递消息。

{{AvailableInWorkers}}

## Channel 通信的概念和用法

使用 {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} 构造函数来创建通讯信道。一旦创建，信道的两个端口即可通过 {{domxref("MessageChannel.port1")}} 和 {{domxref("MessageChannel.port2")}} 属性进行访问（都会返回 {{domxref("MessagePort")}} 对象）。创建信道的应用程序使用 `port1`，在另一端的程序使用 `port2`——你向 `port2` 发送信息，然后携带 2 个参数（需要传递的消息，要传递所有权的对象，在这里是 port 自身）调用 {{domxref("window.postMessage")}} 方法将端口信息传递到另一个浏览器上下文。

当这些可传递的对象被传递后，他们就从之前所属的上下文中消失了。比如一个 port，一旦被发送，在原本的上下文中就再也不可用了。注意当前仅有 {{domxref("ArrayBuffer")}} 和 {{domxref("MessagePort")}} 对象可以被发送。

另一个浏览器上下文可以使用 {{domxref("MessagePort.onmessage")}} 监听信息，并使用事件的 `data` 属性获取消息内容。你可以通过 {{domxref("MessagePort.postMessage")}} 向原来的文档发送应答消息。

当你想要停止通过信道发送消息时，你可以调用来关闭 {{domxref("MessagePort.close")}} 端口。

更多使用这个 API 的资料参见：[Using channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging) 。

## Channel 通信接口

- {{domxref("MessageChannel")}}
  - : 创建一个新的发送消息的信道。
- {{domxref("MessagePort")}}
  - : 控制消息信道的端口，允许从一个端口发送消息，并监听另一端消息的到来。
- {{domxref("PortCollection")}}
  - : `MessagePort` 数组，一种同时向多个端口广播消息的实验性解决方案。

## 例子

- 我们在 Github 上发布了 [channel messaging 基本演示](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic)，在[这里](http://mdn.github.io/dom-examples/channel-messaging-basic/)直接尝试。这个例子展示了一次页面和嵌入 {{htmlelement("iframe")}} 间的真实而简易的消息传递。
- 你也可以参考[多个消息演示](https://github.com/mdn/dom-examples/tree/main/channel-messaging-multimessage)（[在线演示](http://mdn.github.io/dom-examples/channel-messaging-multimessage/)）。这个例子展示了稍微复杂些的设置，可以在主页面和 IFrame 之间传递多条消息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using channel messaging](/zh-CN/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
- [Web Workers API](/zh-CN/docs/Web/API/Web_Workers_API)
- [Broadcast Channel API](/zh-CN/docs/Web/API/Broadcast_Channel_API)
