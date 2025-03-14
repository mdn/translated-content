---
title: RTCPeerConnection.remoteDescription
slug: Web/API/RTCPeerConnection/remoteDescription
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

只读属性 **`RTCPeerConnection.remoteDescription`** 返回一个 {{domxref("RTCSessionDescription")}} ，它描述了和远程对端之间的会话 (包括配置和媒体信息) ，如果还没有被设置过的话，它会是 `null`.

这个值通常是通过信令服务器接收的对端的会话描述（作为提议或应答），调用{{domxref("RTCPeerConnection.setRemoteDescription()")}}之后生效。

## 语法

```plain
 var sessionDescription = peerConnection.remoteDescription;
```

从更基础的层面上看，如果该属性不为`null`，则返回值为{{domxref("RTCPeerConnection.pendingRemoteDescription")}}的值，否则，返回{{domxref("RTCPeerConnection.currentRemoteDescription")}}的值。有关此算法的详细信息及其使用原因，请参阅[待定的和当前描述](/zh-CN/docs/Web/API/WebRTC_API/Connectivity#待定的和当前描述)。

## 示例

此示例查看`remoteDescription`并显示包含{{domxref("RTCSessionDescription")}}对象的 type 和`sdp`字段的警告。

```js
var pc = new RTCPeerConnection();
…
var sd = pc.remoteDescription;
if (sd) {
  alert("Remote session: type='" +
        sd.type + "'; sdp description='" +
        sd.sdp + "'");
}
else {
  alert("No remote session yet.");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("RTCPeerConnection.setRemoteDescription()")}}、{{domxref("RTCPeerConnection.pendingRemoteDescription")}}、{{domxref("RTCPeerConnection.currentRemoteDescription")}}
- {{domxref("RTCPeerConnection.setLocalDescription()")}}、{{domxref("RTCPeerConnection.pendingLocalDescription")}}、{{domxref("RTCPeerConnection.currentLocalDescription")}}、{{domxref("RTCPeerConnection.localDescription")}}
- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
