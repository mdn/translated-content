---
title: Broadcast Channel API
slug: Web/API/Broadcast_Channel_API
---

{{DefaultAPISidebar("Broadcast Channel API")}}

**Broadcast Channel API** 可以实现同 {{glossary("origin", "源")}} 下浏览器不同窗口，Tab 页，frame 或者 iframe 下的 {{glossary("browsing context", "浏览器上下文")}} (通常是同一个网站下不同的页面) 之间的简单通讯。

{{AvailableInWorkers}}

广播频道会被命名和绑定到指定的源。

通过创建一个监听某个频道下的 {{domxref("BroadcastChannel")}} 对象，你可以接收发送给该频道的所有消息。一个有意思的点是，你不需要再维护需要通信的 iframe 或 worker 的索引。它们可以通过构造 {{domxref("BroadcastChannel")}} 来简单地“订阅”特定频道，并在它们之间进行全双工（双向）通信。

![The principle of the Broadcast Channel API](broadcastchannel.png)

## Broadcast Channel 接口

### 创建或加入某个频道

`BroadcastChannel` 接口非常简单。通过创建一个 {{domxref("BroadcastChannel")}} 对象，一个客户端就加入了某个指定的频道。只需要向 [构造函数](/zh-CN/docs/Web/API/BroadcastChannel/BroadcastChannel) 传入一个参数：频道名称。如果这是首次连接到该广播频道，相应资源会自动被创建。

```js
// 连接到广播频道
var bc = new BroadcastChannel("test_channel");
```

### 发送消息

现在发送消息就很简单了，只需要调用 BroadcastChannel 对象上的{{domxref("BroadcastChannel.postMessage", "postMessage()")}} 方法即可。该方法的参数可以是任意对象。最简单的例子就是发送 {{domxref("DOMString")}} 文本消息：

```js
// 发送简单消息的示例
bc.postMessage("This is a test message.");
```

不只是 {{domxref("DOMString")}}，任意类型的对象都可以被发送。此 API 不会将消息与任何的语义相关联，因此通道的参与者有必要知道预期的消息类型和消息的消费方式。

### 接收消息

当消息被发送之后，所有连接到该频道的 {{domxref("BroadcastChannel")}} 对象上都会触发 [`message`](/zh-CN/docs/Web/API/BroadcastChannel/message_event) 事件。该事件没有默认的行为，但是可以使用 {{domxref("BroadcastChannel.onmessage", "onmessage")}} 事件处理程序来定义一个函数来处理消息。

```js
// 简单示例，用于将事件打印到控制台
bc.onmessage = function (ev) {
  console.log(ev);
};
```

### 与频道断开连接

通过调用 BroadcastChannel 对象的 {{domxref("BroadcastChannel.close", "close()")}} 方法，可以离开频道。这将断开该对象和其关联的频道之间的联系，并允许它被垃圾回收。

```js
// 断开频道连接
bc.close();
```

## 总结

Broadcast Channel API 是一个非常简单的 API，内部包含了跨上下文通讯的接口。它可用于检测同源网站环境中其他浏览器选项卡下的用户操作，例如当用户登录到帐户时。没有定义消息传输协议，故不同上下文中的不同文档需要自己实现它：规范没有对此提出协议或要求。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- 接口实现：{{domxref("BroadcastChannel")}}。
