---
title: RTCIceCandidateStats：localCandidateId 属性
short-title: localCandidateId
slug: Web/API/RTCIceCandidatePairStats/localCandidateId
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

{{domxref("RTCIceCandidatePairStats")}} 字典的 **`localCandidateId`** 属性是用于唯一标识本地 {{Glossary("ICE")}} 候选对的字符串。经分析，该候选对可以生成 {{domxref("RTCIceCandidateStats")}}，进而用于计算该候选者对的统计信息。

## 值

包含该 `RTCIceCandidatePairStats` 对象所描述连接的本地 {{domxref("RTCIceCandidate")}} 的唯一标识符的字符串。

该候选对是用于计算该 {{domxref("RTCIceCandidatePairStats")}} 对象内容的两个 {{domxref("RTCIceCandidateStats")}} 对象之一的来源。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
