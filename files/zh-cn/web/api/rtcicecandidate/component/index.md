---
title: RTCIceCandidate：component 属性
slug: Web/API/RTCIceCandidate/component
l10n:
  sourceCommit: 31fa0bbc78b87bf3ec7559906515fcd3dfde68de
---

{{APIRef("WebRTC")}}

**{{domxref("RTCIceCandidate")}}** 接口的 **`component`** 只读属性是一个字符串，指示候选者是 [RTP](/zh-CN/docs/Web/API/WebRTC_API/Intro_to_RTP) 还是 `RTCP` 候选者。如果一个候选者同时代表 `RTP` 和 `RTCP` 多路复用，它将被报告为 `RTP` 候选者。

## 值

它的值一个字符串，可以是以下之一：

- `rtp`

  - : 标识正在用于 [实时传输协议](/zh-CN/docs/Web/API/WebRTC_API/Intro_to_RTP) (RTP), 或与 RTP 控制协议（RTCP）多路复用的 ICE 传输。RTP 在 {{RFC(3550)}} 中定义。此值对应于候选者 `a-line` 中的组件 ID 字段，其值为 1。

- `rtcp`
  - : 标识用于 `RTCP` 的 ICE 传输，`RTCP` 在 {{RFC(3550, "", 6)}} 中定义。对应于组件 ID 其值为 2。

## 使用说明

考虑这个 {{Glossary("SDP")}} 属性行（a-line）：

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

这是一个 ICE 候选者属性行（a-line），其 {{domxref("RTCIceCandidate.foundation",
  "foundation")}} 值为 `4234997325`。属性行的下一个字段是`“1”`，就是组件 ID。值为 `“1”` 表示 `RTP`，记录在 `component` 属性中为 `“rtp”`。如果这个值是 `“2”`，那么属性行将描述一个 `RTCP` 候选者，`component` 的值将是 `“rtcp”`。

## 示例

此代码片段检查候选者的组件类型，并根据值将候选者分派给不同的处理程序。

```js
if (candidate.component === "rtp") {
  handleRTPCandidate(candidate);
} else if (candidate.component === "rtcp") {
  handleRTCPCandidate(candidate);
} else {
  handleUnknownCandidate(candidate);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
