---
title: RTCTrackEvent()
slug: Web/API/RTCTrackEvent/RTCTrackEvent
---

{{APIRef("WebRTC")}}

**`RTCTrackEvent()`** 构造函数创建并返回一个新的 {{domxref("RTCTrackEvent")}} 对象，用于描述已经被添加到 {{domxref("RTCPeerConnection")}} 的轨道。

通常，你不需要使用这个构造函数，例如 `RTCTrackEvent` 这样的对象会由 WebRTC 创建，并根据需要传递到 `RTCPeerConnector` 的 {{domxref("RTCPeerConnection.ontrack", "ontrack")}} 事件处理器上。

## 语法

```js-nolint
new RTCTrackEvent(type, options)
```

### 参数

- `type`
  - : 一个表示事件名称的字符串。大小写敏感，且浏览器始终将其设置为 `track`。
- `options`
  - : 一个对象，_除了 {{domxref("Event/Event", "Event()")}} 中定义的对象_，还可以使用以下属性：
    - `receiver`
      - : 一个 {{domxref("RTCRtpReceiver")}}，用于接收轨道的媒体。
    - `streams` {{optional_inline}}
      - : 一个 {{domxref("MediaStream")}} 对象的数组，表示构成事件对应的轨道的流。它默认为一个空数组。
        It defaults to an empty array.
    - `track`
      - : 一个与事件关联的 {{domxref("MediaStreamTrack")}}。
    - `transceiver`
      - : 一个与事件关联的 {{domxref("RTCRtpTransceiver")}}。

### 返回值

一个新的 {{domxref("RTCTrackEvent")}}，用于描述已经被添加到 `RTCPeerConnection` 的轨道。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
