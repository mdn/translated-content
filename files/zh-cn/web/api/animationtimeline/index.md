---
title: AnimationTimeline
slug: Web/API/AnimationTimeline
---

{{ SeeCompatTable() }} {{ APIRef("Web Animations", "Web 动画")}}

[Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)的`AnimationTimeline`接口表示动画的时间轴。这个接口用于定义时间轴功能（被{{ domxref("DocumentTimeline", "文档时间线") }}和未来的时间轴类型所继承），但本身并不能被开发人员直接使用。无论何处当你要用`AnimationTimeline`，都应该使用`DocumentTimeline`或其他时间轴类型来实例化。

## 属性

- {{domxref("AnimationTimeline.currentTime")}} {{readonlyInline}}
  - : 返回此时间轴的时间值（以毫秒为单位），若此时间轴未激活则返回`null`。

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [网页动画 API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("DocumentTimeline")}}
- {{domxref("Document.timeline")}}
