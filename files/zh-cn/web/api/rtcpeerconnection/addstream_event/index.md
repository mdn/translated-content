---
title: RTCPeerConnection.onaddstream
slug: Web/API/RTCPeerConnection/addstream_event
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

当类型为 {{domxref("MediaStreamEvent")}} 的 **`addstream`** 事件发生时，通过{{domxref("RTCPeerConnection")}} 触发 **`RTCPeerConnection.onaddstream`** 事件处理函数。当远程媒体流{{domxref("MediaStream")}} 添加到连接后发送事件。当{{domxref("RTCPeerConnection.setRemoteDescription()")}} 后此事件立即被调用而不需要等待 SDP 交换完成。

## 语法

```plain
peerconnection.onaddstream = function;
```

### 值

- `function` 是用户自定义的一个函数，写法上不带 `()` 和任何参数，也可以是一个匿名函数，例如 `function(event) {...}`。事件处理函数通常有个 event 做参数，类型为 {{domxref("MediaStreamEvent")}}.

## 示例

```js
pc.onaddstream = function (ev) {
  alert("onaddstream event detected!");
};
```

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.addStream()")}}
- {{domxref("MediaStreamEvent")}}
