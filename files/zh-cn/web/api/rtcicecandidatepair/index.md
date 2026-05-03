---
title: RTCIceCandidatePair
slug: Web/API/RTCIceCandidatePair
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("WebRTC")}}

**`RTCIceCandidatePair`** 字典描述共同构成了两个 WebRTC 端点之间可行连接的描述的一对 ICE 候选项。它可由 {{domxref("RTCIceTransport.getSelectedCandidatePair()")}} 方法返回，可以用于标识 ICE 代理当前选定的候选项对。

## 实例属性

- {{domxref("RTCIceCandidatePair.local", "local")}}
  - ：描述连接本地端配置的 {{domxref("RTCIceCandidate")}}。
- {{domxref("RTCIceCandidatePair.remote", "remote")}}
  - ：描述连接远端配置的 **`RTCIceCandidate`**。

## 示例

有关示例代码，参见 [`RTCIceTransport.onselectedcandidatepairchange`](/zh-CN/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event#示例)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
