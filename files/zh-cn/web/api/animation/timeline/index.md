---
title: Animation：timeline 属性
short-title: timeline
slug: Web/API/Animation/timeline
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

{{domxref("Animation")}} 接口的 **`Animation.timeline`** 属性返回或设置与此动画关联的{{domxref("AnimationTimeline", "时间线", "", 1)}}。时间线是基于 {{domxref("AnimationTimeline")}}，用于同步的时间值源的对象。默认情况下，动画的时间线和 {{domxref("Document")}} 的时间线是相同的。

## 值

一个用作动画的时间源的{{domxref("AnimationTimeline", "时间线对象", "", 1)}}；或者表示使用默认时间线（即 {{domxref("Document")}} 的时间线）的 `null` 值。

## 示例

以下代码将动画的时间线设置为与文档的时间线相同（另外，这是所有动画的默认时间线）：

```js
animation.timeline = document.timeline;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("AnimationTimeline")}} 是所有时间线继承的父对象。
- {{domxref("DocumentTimeline")}} 是目前唯一可用的时间线对象类型。
- {{domxref("Document.timeline")}} 是所有动画分配的默认时间线。
