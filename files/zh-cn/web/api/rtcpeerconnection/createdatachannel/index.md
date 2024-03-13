---
title: RTCPeerConnection.createDataChannel()
slug: Web/API/RTCPeerConnection/createDataChannel
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

{{domxref("RTCPeerConnection")}} 的 `createDataChannel()` 方法创建一个可以发送任意数据的数据通道 (data channel)。常用于后台传输内容，例如：图像，文件传输，聊天文字，游戏数据更新包，等等。

基于某个连接创建第一个 data channel 时，会通过发送一个 {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} 事件来开始重新谈判（renegotiation）。

## 语法

```
dataChannel = RTCPeerConnection.createDataChannel(label[, options]);
```

### 参数

- `label`
  - : 一个便于理解的通道名。该字符串不能长于 65,535 _字节_.
- `options` {{optional_inline}}
  - : 提供 data channel 设置的一个 [`RTCDataChannelInit` dictionary](#RTCDataChannelInit_dictionary)

### RTCDataChannelInit dictionary

`RTCDataChannelInit` 字典提供以下字段，用以构造可选的 options 参数来设置 data channel 以满足你的需求：

- `ordered` {{optional_inline}}
  - : 表示通过 {{domxref("RTCDataChannel")}} 的信息的到达顺序需要和发送顺序一致 (`true`), 或者到达顺序不需要和发送顺序一致 (`false`). **默认：`true`.**
- **`maxPacketLifeTime` {{optional_inline}}**
  - : The maximum number of milliseconds that attempts to transfer a message may take in unreliable mode. While this value is a 16-bit unsigned number, each user agent may clamp it to whatever maximum it deems appropriate. **Default: `null`.**
- `maxRetransmits` {{optional_inline}}
  - : The maximum number of times the user agent should attempt to retransmit a message which fails the first time in unreliable mode. While this value is a16-bit unsigned number, each user agent may clamp it to whatever maximum it deems appropriate. **Default: `null`.**
- `protocol` {{optional_inline}}
  - : The name of the sub-protocol being used on the {{domxref("RTCDataChannel")}}, if any; otherwise, the empty string (""). **Default: empty string, `""`.** This string may not be longer than 65,535 _bytes_.
- `negotiated` {{optional_inline}}
  - : By default (`false`), data channels are negotiated in-band, where one side calls `createDataChannel`, and the other side listens to the {{domxref("RTCDataChannelEvent")}} event using the `ondatachannel` `EventHandler` . Alternatively (`true`), they can be negotiated out of-band, where both sides call `createDataChannel` with an agreed-upon id. **Default: `false`.**
- `id` {{optional_inline}}
  - : An 16-bit numeric ID for the channel; permitted values are 0-65534. If you don't include this option, the user agent will select an ID for you.

> **备注：** The options which can be configured using the `RTCDataChannelInit` dictionary represent the script-settable subset of the properties on the {{domxref("RTCDataChannel")}} interface.

### Return value

A new {{domxref("RTCDataChannel")}} object with the specified `label`, configured using the options specified by `options` if that parameter is included; otherwise, the defaults listed above are established.

### Exceptions

- `InvalidStateError`
  - : The {{domxref("RTCPeerConnection")}} is closed.
- `TypeError`

  - : This can happen in a couple of situations:

    - The label and/or protocol string is too long; these cannot be longer than 65,535 bytes (bytes, rather than characters).
    - The `id` is 65535. While this is a valid unsigned 16-bit value, it's not a permitted value for `id`.

- `SyntaxError`
  - : Values were specified for both the `maxPacketLifeTime` and `maxRetransmits` options. You may only specify a non-`null` value for one of these.
- `ResourceInUse`
  - : An `id` was specified, but another {{domxref("RTCDataChannel")}} is already using the same value.
- `OperationError`
  - : Either the specified `id` is already in use or, if no `id` was specified, the WebRTC layer was unable to automatically generate an ID because all IDs are in use.

## Examples

This example shows how to create a data channel and set up handlers for the {{DOMxRef("RTCDataChannel/open_event", "open")}} and [`message`](/zh-CN/docs/Web/API/BroadcastChannel/message_event) events to send and receive messages on it (For brievity, the example assumes onnegotiationneeded is set up).

```js
// Offerer side

var pc = new RTCPeerConnection(options);
var channel = pc.createDataChannel("chat");
channel.onopen = function (event) {
  channel.send("Hi you!");
};
channel.onmessage = function (event) {
  console.log(event.data);
};
```

```js
// Answerer side

var pc = new RTCPeerConnection(options);
pc.ondatachannel = function (event) {
  var channel = event.channel;
  channel.onopen = function (event) {
    channel.send("Hi back!");
  };
  channel.onmessage = function (event) {
    console.log(event.data);
  };
};
```

Alternatively, more symmetrical out-of-band negotiation can be used, using an agreed-upon id (0 here):

```js
// Both sides

var pc = new RTCPeerConnection(options);
var channel = pc.createDataChannel("chat", { negotiated: true, id: 0 });
channel.onopen = function (event) {
  channel.send("Hi!");
};
channel.onmessage = function (event) {
  console.log(event.data);
};
```

For a more thorough example showing how the connection and channel are established, see [A simple RTCDataChannel sample](/zh-CN/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCDataChannel")}}
- [A simple RTCDataChannel sample](/zh-CN/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- {{domxref("RTCPeerConnection")}}
