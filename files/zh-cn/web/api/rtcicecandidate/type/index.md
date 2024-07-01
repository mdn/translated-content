---
title: RTCIceCandidate：type 属性
slug: Web/API/RTCIceCandidate/type
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 **`type`** 只读属性指定当前对象代表的候选者的类型。

`type` 字段的值是从传递给 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate(candidateInfo)")}} 构造函数的 `candidateInfo` 选项对象中设置的。你不能直接在选项对象中指定 `type` 的值，如果对象的 `candidate` 属性行（`cand-type` 字段）格式正确，其值将自动从中提取。

## 值

一个字符串，其值为以下定义之一。这些候选者类型按优先级顺序列出；它们在列表中的位置越高，则其效率越高。

- `host`
  - : 主机候选者；其 {{domxref("RTCIceCandidate.address")}} 属性中指定的 IP 地址是真实的远程对等端的地址。
- `srflx`
  - : 服务器反射候选者；`ip` 和端口是由 NAT 为一个代理分配绑定的，当代理通过 NAT 向服务器发送数据包时。它们可以被 {{Glossary("STUN")}} 服务器和 {{Glossary("TURN")}} 服务器学习，以匿名表示候选者的对等端。
- `prflx`
  - : 对等端反射候选；`ip` 和端口是 NAT 发送 STUN 请求时分配的绑定，以匿名表示候选者的对等端。
- `relay`
  - : 中继候选者；中继候选者的 IP 地址是 TURN 服务器用于在两个对等方之间转发媒体的地址。

在调用 {{domxref("RTCPeerConnection.addIceCandidate()")}} 时，如果 `type` 为 `null`，则 {{domxref("RTCIceCandidate.candidate", "candidate")}} 的属性行中缺少该信息，将会抛出 `OperationError` 异常。

## 示例

在此示例中，候选者的 {{domxref("RTCIceCandidate.type", "type")}} 用于为主机候选者（其中 {{domxref("RTCIceCandidate/address", "ip")}} 直接指向远程对等端而不是中间人的情况）呈现修改后的用户界面。

```js
if (candidate.type === "host") {
  showHostControls();
} else {
  hideHostControls();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
- [WebRTC 协议介绍](/zh-CN/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC 连接性](/zh-CN/docs/Web/API/WebRTC_API/Connectivity)
- {{domxref("RTCIceCandidate.tcpType")}}
