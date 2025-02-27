---
title: RTCIceCandidate：tcpType 属性
slug: Web/API/RTCIceCandidate/tcpType
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 **`tcpType`** 只读属性是 TCP 候选者所包含的，表示候选者的额外类型信息。

`tcpType` 字段的值是从传递给 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} 构造函数的 `candidateInfo` 选项对象中设置的。你不能直接在选项对象中指定 `tcpType` 的值，如果对象的 `candidate` 属性行（a-line）格式正确，其值将自动从对象的候选属性行中提取。

## 值

如果 {{domxref("RTCIceCandidate.protocol","protocol")}} 的值是 `"tcp"`，`tcpType` 的值可以是：

- `"active"`
  - : 通信会尝试打开一个出站连接，但不会接收进站连接请求。
- `"passive"`
  - : 通信会尝试打开一个进站连接，但不会接收出站连接请求。
- `"so"`
  - : 尝试与其对等端同时打开连接。

{{Glossary("UDP")}} 候选者的 `tcpType` 值为 `null`。

## 示例

本例中，使用候选者的 {{domxref("RTCIceCandidate.protocol", "protocol")}} 和 `tcpType` 属性来判断 TCP 候选者用户端是否同时打开（simultaneous-open）。

```js
if (candidate.protocol === "tcp" && candidate.tcpType === "so") {
  adjustForSimultaneousOpen(candidate);
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
- {{domxref("RTCIceCandidate.protocol")}}
- {{domxref("RTCIceCandidate.type")}}
