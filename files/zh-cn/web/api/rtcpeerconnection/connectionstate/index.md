---
title: RTCPeerConnection.connectionState
slug: Web/API/RTCPeerConnection/connectionState
translation_of: Web/API/RTCPeerConnection/connectionState
---
{{APIRef("WebRTC")}}

**`connectionState`** 只读属性表示了当前所有被使用的 ICE 连接的状态，其返回值为以下字符串之一：`new`、`connecting`、`connected`、`disconnected`、`failed` 或 `closed`。

该状态本质上表示所有使用的 ICE 连接（类型为 {{domxref("RTCIceTransport")}} 或 {{domxref("RTCDtlsTransport")}}）的聚合状态。

当属性值变化时，一个 {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}} 事件将被发送给 {{domxref("RTCPeerConnection")}} 对象实例。

## 语法

```js
var connectionState = RTCPeerConnection.connectionState;
```

## 返回值

一个用于表示当前连接状态的字符串，为以下列出的值之一：

- `new`
  - : 表示至少有一个 {{Glossary("ICE")}} 连接（{{domxref("RTCIceTransport")}} 或 {{domxref("RTCDtlsTransport")}} 对象）处于 `new` 状态，并且没有连接处于以下状态： `connecting`、`checking`、`failed`、`disconnected`，或者这些连接都处于 `closed` 状态。
- `connecting`
  - : 表示至少有一个 {{Glossary("ICE")}} 连接处于正在建立连接的状态；也就是说，它们的 {{DOMxRef("RTCPeerConnection.iceConnectionState", "iceConnectionState")}} 值为 `checking` 或 `connected`，并且没有连接处于 `failed` 状态。
- `connected`
  - : 表示每一个 {{Glossary("ICE")}} 连接要么正在使用（`connected` 或 `completed` 状态），要么已被关闭（`closed` 状态）；并且，至少有一个连接处于 `connected` 或 `completed` 状态。
- `disconnected`
  - : 表示至少有一个 {{Glossary("ICE")}} 连接处于 `disconnected` 状态，并且没有连接处于 `failed`、`connecting` 或 `checking` 状态。
- `failed`
  - : 表示至少有一个 {{Glossary("ICE")}} 连接处于 `failed` 的状态。
- `closed`
  - : 表示 {{DOMxRef("RTCPeerConnection")}} 已关闭。

## 示例

```js
var pc = new RTCPeerConnection(configuration);

/* ... */

var connectionState = pc.connectionState;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC 会话的生命周期](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
