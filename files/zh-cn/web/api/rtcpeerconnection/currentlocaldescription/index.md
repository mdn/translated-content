---
title: RTCPeerConnection.currentLocalDescription
slug: Web/API/RTCPeerConnection/currentLocalDescription
---

{{APIRef("WebRTC")}}

只读属性 **`RTCPeerConnection.currentLocalDescription`** 返回一个 {{domxref("RTCSessionDescription")}} 对象，该对象描述了 自上次 {{domxref("RTCPeerConnection")}} 完成协商与连接到远程端后，最近一次成功协商的连接的本地端。原文（describing the local end of the connection as it was most recently successfully negotiated since the last time the RTCPeerConnection finished negotiating and connecting to a remote peer）。也包括自 RTCSessionDescription 所代表的 offer 或 anwser 首次实例化以来，ICE 代理可能已经生成的任何 ICE 候选人的列表。

若想改变 `currentLocalDescription` ，则调用 {{domxref("RTCPeerConnection.setLocalDescription()")}} 。这将会触发引发该值被设置的一系列事件。如果希望详细了解策略与机制，查阅[待定的和当前描述](/zh-CN/docs/Web/API/WebRTC_API/Connectivity#待定的和当前描述)。

> [!NOTE]
> 与 {{domxref("RTCPeerConnection.localDescription")}} 不同，这个值代表了当前连接的本地端的事实当前状态； `localDescription` 也许指明了一个当前正在切换中的连接的 description。

## 值

连接本地端的当前 description 描述，如果成功设置了一个。否则返回 null。

## 示例

本例子查看 `currentLocalDescription` 并且显示了包含 {{domxref("RTCSessionDescription")}} 对象的 `type` 与 `sdp` 字段的 alert。

```js
var pc = new RTCPeerConnection();
…
var sd = pc.currentLocalDescription;
if (sd) {
  alert("Local session: type='" +
        sd.type + "'; sdp description='" +
        sd.sdp + "'");
}
else {
  alert("No local session yet.");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> The addition of `currentLocalDescription` and {{domxref("RTCPeerConnection.pendingLocalDescription", "pendingLocalDescription")}} to the WebRTC spec is relatively recent. In browsers which don't support them, just use {{domxref("RTCPeerConnection.localDescription", "localDescription")}}.

## 参见

- {{domxref("RTCPeerConnection.setLocalDescription()")}}、{{domxref("RTCPeerConnection.pendingLocalDescription")}}、{{domxref("RTCPeerConnection.localDescription")}}
- {{domxref("RTCPeerConnection.setRemoteDescription()")}}、{{domxref("RTCPeerConnection.remoteDescription")}}、{{domxref("RTCPeerConnection.pendingRemoteDescription")}}、{{domxref("RTCPeerConnection.currentRemoteDescription")}}
- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
