---
title: RTCIceCandidate：relatedAddress 属性
slug: Web/API/RTCIceCandidate/relatedAddress
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 **`relatedAddress`** 只读属性是一个指示中继候选者或反射候选者的**关联地址**的字符串。

如果候选者是主机候选者（即其 {{domxref("RTCIceCandidate/address", "address")}} 属性是远程对等方的真实 IP 地址），则 `relatedAddress` 为 `null`。

`relatedAddress` 字段的值是通过传递给 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} 构造函数的 `candidateInfo` 选项对象设置的。你不能直接在选项对象中指定 `relatedAddress` 的值，如果对象的 `candidate` 属性行（a-line）格式正确，该值将自动从其中的 `rel-address` 字段提取。

{{Glossary("ICE")}} 本身根本不使用关联地址和{{domxref("RTCIceCandidate.relatedPort", "关联端口", "", "nocode")}}；它们仅用于分析和诊断的目的，并且可能会被安全系统阻止（获取），因此不要对它们的非空值有所依赖。

## 值

一个包含候选者关联地址的字符串。对于对等端和服务器反射候选者，关联地址（和{{domxref("RTCIceCandidate.relatedPort", "关联端口", "", "nocode")}}）是该服务器或对等端反射候选者的基础。对于中继候选者，关联地址和关联端口设置为 TURN 服务器选择的映射地址（和端口）。

对于主机候选者，`relatedAddress` 为 `null`，这意味着该字段未包含在候选者的属性行中。

## 使用说明

尽管 ICE 本身不使用关联地址，但关联地址包含在 ICE 候选者中。通过观察各种类型的候选者及其地址和关联地址之间的关系 `relatedAddress` 可用于调试目的。`relatedAddress` 也可被服务质量（QoS）机制使用。

下面是由 STUN 服务器发现的 ICE 候选者的 [SDP](/zh-CN/docs/Web/API/WebRTC_API/Protocols#sdp) 属性行描述：

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 6502 typ srflx raddr 198.51.100.45 rport 32768 generation 0
```

远程地址，`relatedAddress`，是文本 `"raddr"` 后面的点分割的 32 位地址（IPv4）或冒号分隔的 64 位地址（IPv6），本例中 `relatedAddress` 的值为 `198.51.100.45`。

## 示例

在此示例中，检查了候选者的类型（{{domxref("RTCIceCandidate.type", "type")}}），然后根据候选者类型呈现了调试输出，包括候选者的 {{domxref("RTCIceCandidate/address", "ip")}} 和 `relatedAddress`。

```js
switch (candidate.type) {
  case "host":
    console.log(`主机候选者的 IP 地址为 ${candidate.ip}`);
    break;
  case "srflx":
    console.log(
      `服务器反射候选者的基地址为 ${candidate.relatedAddress}；可达 ${candidate.ip}`,
    );
    break;
  case "prflx":
    console.log(
      `对等端反射候选者基地址为 ${candidate.relatedAddress}；可达 ${candidate.ip}`,
    );
    break;
  case "relay":
    console.log(
      `由 TURN 服务器分配中继候选者地址 ${candidate.relatedAddress}；可达 ${candidate.ip}`,
    );
    break;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC 接口](/zh-CN/docs/Web/API/WebRTC_API)
- [WebRTC 协议介绍](/zh-CN/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC 连接性](/zh-CN/docs/Web/API/WebRTC_API/Connectivity)
- [WebRTC 会话的生命周期](/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCIceCandidate.relatedPort")}}
- {{domxref("RTCIceCandidate.address")}} 与 {{domxref("RTCIceCandidate.port")}}
