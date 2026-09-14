---
title: 累计布局偏移（CLS）
slug: Glossary/CLS
l10n:
  sourceCommit: fcd4f39485d740615c32ccaef63471bc27095fb0
---

**累计布局偏移**（CLS）是一种由 Google 设计为[核心 Web 要素](https://web.developers.google.cn/explore/learn-core-web-vitals)之一的网站的可用性指标。

它可以衡量用户遇到意外布局偏移的程度。这里元素的意外偏移指不是由用户操作（如点按按钮或动画的一部分）引起的偏移。

布局偏移可能是由于未给定 `width` 和 `height` 属性的 {{htmlelement("img")}} 或 {{htmlelement("video")}} 元素引起的，因此浏览器在加载它们之前不知道它们将占用多少空间。

{{domxref("LayoutShift")}} 接口（属于[性能 API](/zh-CN/docs/Web/API/Performance_API)）可用于测量单个布局偏移，然后用于计算网页的 CLS 分数。

## 参见

- web.developers.google.cn 上的 [CLS](https://web.developers.google.cn/articles/cls)
