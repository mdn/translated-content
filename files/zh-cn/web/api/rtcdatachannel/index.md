---
title: RTCDataChannel
slug: Web/API/RTCDataChannel
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

RTCDataChannel 接口代表在两者之间建立了一个双向数据通道的连接。

可以用 {{domxref("RTCDataChannel.createDataChannel()")}} 或者在现有的 {{domxref("RTCPeerConnection")}} 上用 {{domxref("RTCDataChannelEvent")}} 类型的 {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}} 事件接收，创建出 RTCDataChannel 类型的对象。

> [!NOTE]
> 这个 API 在 Gecko 中被称作 DataChannel 而不是标准的'RTCDataChannel'。

## 属性

- {{domxref("RTCDataChannel.label")}} {{readOnlyInline}}
  - : 返回一个包含有描述数据通道名字的{{domxref("DOMString")}}。这个字段没有唯一性要求。
- {{domxref("RTCDataChannel.ordered")}} {{readOnlyInline}}
  - : 返回一个{{domxref("Boolean")}}对象，表示传递信息的顺序是否有保证。
- {{domxref("RTCDataChannel.protocol")}} {{readOnlyInline}}
  - : 返回一个包含有正在使用的子协议的名称的 {{Domxref("DOMString")}}，如果没有这样的子协议，返回""
- {{domxref("RTCDataChannel.id")}} {{readOnlyInline}}
  - : 当{{domxref("RTCDataChannel")}}对象被创建出来的时候，返回一个无符号 short 类型的数据，作为通道的标识 id。
- {{domxref("RTCDataChannel.readyState")}} {{readOnlyInline}}

  - : 返回枚举类型的 RTCDataChannelState，表示数据连接的状态，有以下几种类型：

    - `"connecting"` 该状态表示底层链路还未建立和激活，该状态还是由{{domxref("RTCPeerConnection.createDataChannel()")}}生成的 datachannel 初始状态。
    - `"open"` 该状态表示底层链路已经连接成功并且运行。这个状态还是由{{domxref("RTCDataChannelEvent")}}分发的 datachannel 的初始状态。
    - `"closing"` 该状态表示底层链路已经在关闭的过程中。该状态下将不会接受新的发送任务，但是缓冲队列中的消息还是会被继续发送或者接收。
    - `"closed"` 该状态表示底层链路已经完全被关闭（或者无法处于 established 状态）。

- {{domxref("RTCDataChannel.bufferedAmount")}} {{readOnlyInline}}
  - : 返回一个`unsigned long`，表示缓冲队列中等待发送的字节数。这些数据是通过{{domxref("RTCDataChannel.send()")}}添加进缓冲队列但还未被发送的数据请求。注意：就算 channel 处于`closed`状态，队列中的缓存还会保持。
- {{domxref("RTCDataChannel.binaryType")}}
  - : 是一个{{domxref("DOMString")}} 类型，表示由链路发送的二进制数据的类型。该项的值应该为`"blob"`或者`"arraybuffer"`，默认值为`"blob"`。当值为`"blob"`的时候，使用{{domxref("Blob")}}对象，当值为`"arraybuffer"`时，使用{{domxref("ArrayBuffer")}}对象
- {{domxref("RTCDataChannel.maxPacketLifeType")}} {{readOnlyInline}}
  - : 是一个`unsigned short`类型，表示不可靠模式下的消息发送允许时间长度，单位为毫秒。
- {{domxref("RTCDataChannel.maxRetransmits")}} {{readOnlyInline}}
  - : 是一个`unsigned short`类型，表示不可靠模式下消息允许尝试重发的最大次数。
- {{domxref("RTCDataChannel.negotiated")}} {{readOnlyInline}}
  - : 是一个{{domxref("Boolean")}}类型，表示这个 channel 是否已经通过应用协商。
- {{domxref("DataChannel.reliable")}} {{non-standard_inline}} {{readOnlyInline}}
  - : 是一个{{domxref("Boolean")}}类型，表示这个链接能不能以非可靠模式发送消息。已经废弃的 api。
- {{domxref("DataChannel.stream")}} {{non-standard_inline}} {{readOnlyInline}}
  - : 和{{domxref("RTCDataChannel.id")}}等效，已经废弃的 api。

### 事件处理器

- {{domxref("RTCDataChannel.onopen")}}
  - : 当接收到 `open` 事件时的事件处理器，当底层链路数据传输成功，端口状态处于 established 的时候会触发该事件。
- {{domxref("RTCDataChannel.onmessage")}}
  - : 当接收到 `message` 事件时的事件处理器。当有数据被接收的时候会触发该事件。
- {{domxref("RTCDataChannel.onclose")}}
  - : 当接收到 `close` 事件时候的事件处理器。当底层链路被关闭的时候会触发该事件。
- {{domxref("RTCDataChannel.onerror")}}
  - : 当接收到 `error` 事件时候的事件处理器。当遇到错误的时候会触发该事件。

## 方法

- {{domxref("RTCDataChannel.close()")}}
  - : 关闭 channel 的方法。这个关闭动作不是直接生效的。这个方法会将 channel 的{{domxref("RTCDataChannel.readyState", "state")}} 属性设置为`"closing"`状态，在消息队列中的消息全部发送完毕之后，channel 才会被关闭。
- {{domxref("RTCDataChannel.send()")}}
  - : 将参数中的数据通过 channel 发送。这个数据可以是{{domxref("DOMString")}}, {{domxref("Blob")}}, {{domxref("ArrayBuffer")}}或者是 {{domxref("ArrayBufferView")}}类型。

## 示例

```js
var pc = new RTCPeerConnection();
var dc = pc.createDataChannel("my channel");

dc.onmessage = function (event) {
  console.log("received: " + event.data);
};

dc.onopen = function () {
  console.log("datachannel open");
};

dc.onclose = function () {
  console.log("datachannel close");
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
