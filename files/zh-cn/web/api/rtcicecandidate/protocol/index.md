---
title: RTCIceCandidate：protocol 属性
slug: Web/API/RTCIceCandidate/protocol
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 `protocol` 只读属性是一个用于指示候选者使用的传输协议是 {{Glossary("UDP")}} 还是 {{Glossary("TCP")}} 的字符串。

`protocol` 字段的值是通过传递给 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate(candidateInfo)")}} 构造函数的 `candidateInfo` 选项对象中设置的。你不能直接在选项对象中指定 `protocol` 的值，如果对象的 `candidate` 属性行（a-line）的格式正确，其值将自动从中提取。

如果在 `SDP` 中未正确指定 `protocol`，则 `protocol` 默认为 `null`。如果没有设置，在调用 {{domxref("RTCPeerConnection.addIceCandidate()")}} 时将抛出异常。

## 值

指示候选者使用的网络协议的字符串：

- `tcp`
  - : 如果选择 `tcp`，该候选者将使用 {{Glossary("TCP")}} 作为其数据的传输协议。{{domxref("RTCIceCandidate.tcpType", "tcpType")}} 属性提供有关对象表示的 TCP 候选者类型的附加信息。
- `udp`
  - : 该候选者将使用 {{Glossary("UDP")}} 传输协议进行数据传输。由于其更好的性能特点，是媒体交互的首选协议。

> [!NOTE]
> 如果 `protocol` 为 `null`，且{{Glossary("user agent","用户代理")}}支持 `protocol`，则将 `candidate` 传递给 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 将失败，抛出 `OperationError` 异常。

## 使用说明

以下是 ICE 发送的候选者属性行的示例：

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

第三个字段 `"udp"` 是协议类型，表示候选者将使用 UDP 传输协议。

## 示例

此代码片段检查 `protocol` 的值以决定是否应查看 {{domxref("RTCIceCandidate.tcpType", "tcpType")}} 的值，以查看它是否是**同时打开**（simultaneous-open，**S-O**）候选者。

```js
if (candidate.protocol === "tcp") {
  if (candidate.tcpType === "so") {
    adjustForSimultaneousOpen(candidate);
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
