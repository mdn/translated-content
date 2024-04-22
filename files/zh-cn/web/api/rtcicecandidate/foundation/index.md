---
title: RTCIceCandidate：foundation 属性
slug: Web/API/RTCIceCandidate/foundation
l10n:
  sourceCommit: 063ac8fa2390c6b8776a654c0746de6acef548c4
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 **`foundation`** 只读属性是一个字符串，用于在多个传输中候选者的唯一标识。
因此，`foundation` 属性可以用于关联存在于多个{{domxref("RTCIceTransport","传输器")}}对象上的候选者。

## 值

一个字符串，用于在该候选者所在所有可用的{{domxref("RTCIceTransport")}}上的候选者的唯一标识。

> **备注：** 如果候选者 `port` (端口) 的值为 `null`，并且{{Glossary("user agent", "用户代理")}}支持 `port` (端口)，将这个候选者传递给{{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}时将失败，并抛出`OperationError`异常。

## 使用说明

考虑描述 ICE 候选者的{{Glossary("SDP")}}属性行（a-line）如下：

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

这个 ICE 候选者的{{domxref("RTCIceCandidate.foundation", "foundation")}}的属性值为 `4234997325`。

## 示例

下面的代码片段使用两个候选者的 `foundation` 来确定它们是否实际上是同一个候选者

```js
if (candidate1.foundation === candidate2.foundation) {
  /* 即使是在不同的 transports（传输器）, 这也是相同的候选者 */
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
