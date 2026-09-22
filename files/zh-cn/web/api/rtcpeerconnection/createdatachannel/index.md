---
title: RTCPeerConnection：createDataChannel() 方法
slug: Web/API/RTCPeerConnection/createDataChannel
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnection")}} 接口的 **`createDataChannel()`** 方法创建一个与远程对等方关联的新通道，可通过该通道传输任意类型的数据。这适用于辅助通道内容，例如图像、文件传输、文字聊天、游戏更新数据包等。

如果新的数据通道是添加到该连接的第一个数据通道，则会通过派发 {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} 事件启动重新协商。

## 语法

```js-nolint
createDataChannel(label)
createDataChannel(label, options)
```

### 参数

- `label`
  - : 人类可读的通道名称。该字符串长度不得超过 65,535 字节。
- `options` {{optional_inline}}
  - : 为数据通道提供配置选项的对象。它可以包含以下字段：
    - `ordered` {{optional_inline}}
      - : 指示通过 {{domxref("RTCDataChannel")}} 发送的消息是否必须按发送顺序到达目的地（`true`），还是允许乱序到达（`false`）。**默认值：`true`。**
    - `maxPacketLifeTime` {{optional_inline}}
      - : 在不可靠模式下，尝试传输一条消息所允许的最大毫秒数。虽然该值是 16 位无符号数，但每个用户代理可以将其限制到其认为合适的最大值。**默认值：`null`。**
    - `maxRetransmits` {{optional_inline}}
      - : 在不可靠模式下，用户代理对首次发送失败的消息应尝试重传的最大次数。虽然该值是 16 位无符号数，但每个用户代理可以将其限制到其认为合适的最大值。**默认值：`null`。**
    - `protocol` {{optional_inline}}
      - : {{domxref("RTCDataChannel")}} 上使用的子协议名称（若有）；否则为空字符串（`""`）。**默认值：空字符串（`""`）。** 该字符串长度不得超过 65,535 _字节_。
    - `negotiated` {{optional_inline}}
      - : 默认情况下（`false`），数据通道在带内协商：一方调用 `createDataChannel`，另一方通过 {{DOMxRef("RTCPeerConnection.datachannel_event", "ondatachannel")}} 事件处理器监听 {{domxref("RTCDataChannelEvent")}} 事件。或者（`true`），也可以在带外协商：双方使用事先约定的 ID 调用 `createDataChannel`。**默认值：`false`。**
    - `id` {{optional_inline}}
      - : 通道的 16 位数字 ID；允许的值为 0 到 65534。如果不包含此选项，用户代理将为你选择一个 ID。

> [!NOTE]
> 这些选项表示 {{domxref("RTCDataChannel")}} 接口上可由脚本设置的属性子集。

### 返回值

一个新的 {{domxref("RTCDataChannel")}} 对象，具有指定的 `label`；若包含了 `options` 参数，则按其中指定的选项进行配置，否则使用上文列出的默认值。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果 {{domxref("RTCPeerConnection")}} 已关闭则抛出。
- {{jsxref("TypeError")}}
  - : 在以下情况抛出：
    - `label` 和/或 `protocol` 字符串过长；它们不得超过 65,535 字节（是字节，而不是字符）。
    - `id` 为 65535。虽然这是有效的无符号 16 位值，但不是 `id` 的允许值。
- `SyntaxError` {{domxref("DOMException")}}
  - : 如果同时为 `maxPacketLifeTime` 和 `maxRetransmits` 选项指定了值则抛出。这两个选项中你只能为其中一个指定非 `null` 值。
- `ResourceInUse` {{domxref("DOMException")}}
  - : 如果指定了 `id`，但另一个 {{domxref("RTCDataChannel")}} 已在使用相同的值则抛出。
- `OperationError` {{domxref("DOMException")}}
  - : 如果指定的 `id` 已在使用，或者未指定 `id` 但 WebRTC 层因所有 ID 均已被占用而无法自动生成 ID，则抛出。

## 示例

本示例展示如何创建数据通道，并为 {{DOMxRef("RTCDataChannel/open_event", "open")}} 和 {{DOMxRef("RTCDataChannel/message_event", "message")}} 事件设置处理器，以便在其上发送和接收消息（为简洁起见，示例假定已设置 `onnegotiationneeded`）。

```js
// 提议方

const pc = new RTCPeerConnection(options);
const channel = pc.createDataChannel("chat");
channel.onopen = (event) => {
  channel.send("Hi you!");
};
channel.onmessage = (event) => {
  console.log(event.data);
};
```

```js
// 应答方

const pc = new RTCPeerConnection(options);
pc.ondatachannel = (event) => {
  const channel = event.channel;
  channel.onopen = (event) => {
    channel.send("Hi back!");
  };
  channel.onmessage = (event) => {
    console.log(event.data);
  };
};
```

或者，也可以使用约定好的 id（此处为 0）进行更对称的带外协商：

```js
// 双方

const pc = new RTCPeerConnection(options);
const channel = pc.createDataChannel("chat", { negotiated: true, id: 0 });
channel.onopen = (event) => {
  channel.send("Hi!");
};
channel.onmessage = (event) => {
  console.log(event.data);
};
```

更完整的连接与通道建立示例，请参见 [RTCDataChannel 简单示例](/zh-CN/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("RTCDataChannel")}}
- [RTCDataChannel 简单示例](/zh-CN/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- {{domxref("RTCPeerConnection")}}
