---
title: RTCIceCandidate：sdpMLineIndex 属性
slug: Web/API/RTCIceCandidate/sdpMLineIndex
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 **`sdpMLineIndex`** 只读属性是一个用于描述与候选者相关联的媒体的从零开始的媒体行（m-line）索引。

可以通过在传递给 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} 构造函数的 `candidateInfo` 选项对象中指定 `sdpMLineIndex` 属性的值来配置此属性。如果你使用媒体行（m-line）字符串而不是选项对象调用构造函数，则 `sdpMLineIndex` 的值将从指定的候选者媒体行字符串中提取。

## 值

包含指向提供媒体描述的媒体行集合的从零开始的索引，表明哪个媒体源与候选者相关联；如果没有这样的关联，则为 `null`。

> [!NOTE]
> 使用 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 添加一个 `sdpMid` 和 `sdpMLineIndex` 都为 `null` 的候选者时，将抛出 {{jsxref("TypeError")}} 异常。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
