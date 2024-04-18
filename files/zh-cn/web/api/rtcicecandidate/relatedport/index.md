---
title: RTCIceCandidate：relatedPort 属性
slug: Web/API/RTCIceCandidate/relatedPort
l10n:
  sourceCommit: 31fa0bbc78b87bf3ec7559906515fcd3dfde68de
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 **`relatedPort`** 只读属性是一个整数，指示中继候选者或反射候选者的 **关联端口**。

如果候选者是主机候选者（即其 {{domxref("RTCIceCandidate/address", "address")}} 实际上是远程对等方的真实 IP 地址），则 `relatedPort` 为 `null`。

`relatedPort` 字段的值是从传递给 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} 构造函数的 `candidateInfo` 选项对象中设置的。你不能直接在选项对象中指定 `relatedPort` 的值，如果对象的 `candidate` 属性行 (`a-line`) 格式正确，其值将自动从对象的 `candidate` 属性行中 `rel-port` 的字段提取。

{{Glossary("ICE")}} 本身根本不使用关联地址和关联端口 ({{domxref("RTCIceCandidate.relatedPort", "relatedPort")}})；它们仅用于分析和诊断的目的，并且可能会被安全系统阻止（获取），因此不要对它们的非空值 (non-`null`) 有所依赖。

## 值

一个无符号 16 位整数，表示候选者关联端口。对于对等端和服务器反射候选者，关联地址和关联端口是该服务器或对等端反射候选者的基础。对于中继候选者，关联地址和关联端口设置为 TURN 服务器选择的映射地址。

对于主机候选者，`relatedPort` 为 `null`，这意味着该字段未包含在候选者的属性行 (`a-line`) 中。

## 使用说明

ICE 本身不使用关联地址和关联端口，仅用于诊断和服务质量目的。实际上，出于安全原因，它们可能会被省略，但如果存在的话，在调试过程中可以成为一个有用的工具。查看 [示例](#examples)，其中展示了其中一部分。

下面是由 STUN 服务器发现的 ICE 候选者的 [SDP](/zh-CN/docs/Web/API/WebRTC_API/Protocols#sdp) 属性行（a-line）描述：

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 6502 typ srflx raddr 198.51.100.45 rport 32768 generation 0
```

远程关联端口 `relatedPort`，是文本 `"rport"` 后面的整数，本例中 `relatedPort` 的值为 `32768`。

## 示例

在这个例子中，首先检查了候选者的 {{domxref("RTCIceCandidate.type", "候选者类型")}}，然后基于候选者类型调试输出候选者类型、候选者地址（ `ip地址` 和 {{domxref("RTCIceCandidate.port", "端口")}} ）以及 `关联地址` ({{domxref("RTCIceCandidate.relatedAddress",
  "relatedAddress")}} 和 `relatedPort`）。

```js
const ip = candidate.ip;
const port = candidate.port;
const relIP = candidate.relatedAddress;
const relPort = candidate.relatedPort;

if (relIP && relPort) {
  console.log(
    `Candidate type '${type}' — contact address: ${ip} ${port}, related address: ${relIP} ${relPort}`,
  );
} else {
  console.log(`Host candidate address is ${ip} ${port}`);
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
- {{domxref("RTCIceCandidate.relatedAddress")}}
- {{domxref("RTCIceCandidate.address")}} 与 {{domxref("RTCIceCandidate.port")}}
