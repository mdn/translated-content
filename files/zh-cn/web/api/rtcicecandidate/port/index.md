---
title: RTCIceCandidate：port 属性
slug: Web/API/RTCIceCandidate/port
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 `port` 只读属性是 {{domxref("RTCIceCandidate.address")}} 给出的地址所包含的候选对等端可以到达的端口。

`port` 字段的值是从传递给 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate(candidateInfo)")}} 构造函数的 `candidateInfo` 选项对象中设置的。你不能直接在选项对象中指定 `port` 的值，如果对象的 `candidate` 属性行（a-line）格式正确，其值将自动从中提取。

## 值

一个 16 位整数，指示候选对等端可以到达的 {{domxref("RTCIceCandidate/address", "address")}} 所指定的设备上的端口号。如果在 `candidate` 中未指定 `port`，或者 `candidate` 字符串无法正确解析，则将端口初始化为 `null`。

> [!NOTE]
> 如果 `port` 值为 `null`，则将该候选者传递给 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 时将失败，抛出 `OperationError` 异常。只有当候选者实现 `port` 时才适用此规则。

## 使用说明

考虑描述 ICE 候选者的 {{Glossary("SDP")}} 属性行如下所示：

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

端口号位于第六个字段中，即 `"44323"`。在这种情况下，`port` 的值将为 44323。

## 示例

此代码片段获取候选的 IP 地址和端口号，并将它们存储到对象中以供将来使用。

```js
const candidateLoc = {
  address: candidate.ip,
  port: candidate.port,
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
