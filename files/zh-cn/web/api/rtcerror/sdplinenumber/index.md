---
title: RTCError：sdpLineNumber 属性
short-title: sdpLineNumber
slug: Web/API/RTCError/sdpLineNumber
l10n:
  sourceCommit: ca5cf1046e4619808440e4505d9fa579a1309ead
---

{{APIRef("WebRTC")}}

{{domxref("RTCError")}} 接口的 **`sdpLineNumber`** 只读属性指定在解析 {{Glossary("SDP")}} 时发生语法错误的行号。

## 值

表示 SDP 中发生由 `RTCError` 对象描述的语法错误的行号的无符号整数值（行号从 1 开始编号）。

除非 {{domxref("RTCError.errorDetail", "errorDetail")}} 的值为 `sdp-syntax-error`，否则该属性为 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
