---
title: Document：timeline 属性
slug: Web/API/Document/timeline
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("Web Animations") }}

{{domxref("Document")}} 接口的 `timeline` 只读属性表示当前文档的默认时间轴。此时间轴是 {{domxref("DocumentTimeline")}} 的一个特殊实例。

此时间轴对于每个文档（`document`）来说都是唯一的，并在文档的生命周期中持续存在，包括调用了 {{domxref("Document.open()")}} 的情况。

此时间轴以毫秒为单位表示自 {{domxref("Performance.timeOrigin")}} 以来经过的时间。在时间原点（time origin）之前，时间轴为非活动状态，它的 {{domxref("AnimationTimeline.currentTime","currentTime")}} 值为 `null`。

> [!NOTE]
> 与非活动文档（未与 {{domxref("Window")}}、{{htmlelement("iframe")}} 或 {{htmlelement("frame")}} 关联的 {{domxref("Document")}}）关联的文档时间轴也被认为是非活动的。

## 值

一个 {{domxref("DocumentTimeline")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("AnimationTimeline.currentTime")}}
- {{domxref("DocumentTimeline")}}
