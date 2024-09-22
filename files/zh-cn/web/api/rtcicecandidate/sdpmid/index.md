---
title: RTCIceCandidate：sdpMid 属性
slug: Web/API/RTCIceCandidate/sdpMid
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 **`sdpMid`** 只读属性是一个字符串，指定与候选关联的媒体组件的媒体流唯一标识。该 ID 唯一标识了与候选者相关联的组件的给定流。

可以通过在传递给 {{domxref("RTCIceCandidate.RTCIceCandidate","RTCIceCandidate()")}} 构造函数的 `candidateInfo` 选项对象中指定 `sdpMid` 属性的值来配置此属性。如果你使用媒体行（m-line）字符串代替选项对象的调用构造函数，则将从指定的候选媒体行字符串中提取 `sdpMid` 的值。

## 值

一个唯一标识候选者从中提取数据的源媒体组件的字符串，如果候选者不存在此类关联，则为 `null`。

> [!NOTE]
> 使用 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 添加候选者的 `sdpMid` 和 `sdpMLineIndex` 都为 `null` 时，将抛出 {{jsxref("TypeError")}} 异常。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
