---
title: RTCIceCandidate：foundation 属性
slug: Web/API/RTCIceCandidate/foundation
l10n:
  sourceCommit: 82344461ebcbee0e79d7af1400b43d203e9d5d2c
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 **`foundation`** 只读属性是一个用于在多个传输中标识唯一候选者的字符串。

因此，`foundation` 属性可用于关联出现在多个 {{domxref("RTCIceTransport")}} 对象上的候选者。

## 值

在所有可用的 {{domxref("RTCIceTransport")}} 对象上标识唯一候选者的字符串。

> [!NOTE]
> 如果候选者 `port`（端口）的值为 `null`，并且{{Glossary("user agent", "用户代理")}}支持 `port`，将这个候选者传递给 {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} 时将失败，并抛出 `OperationError` 异常。

## 使用说明

考虑描述 ICE 候选者的 {{Glossary("SDP")}} 属性行（a-line）如下：

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

字段 `"4234997325"` 为 foundation 属性。

## 示例

下面的代码片段使用两个候选者的 `foundation` 来确定它们是否实际上是同一个候选者

```js
if (candidate1.foundation === candidate2.foundation) {
  /* 即使是在不同的 transport（传输器）, 这也是相同的候选者 */
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
