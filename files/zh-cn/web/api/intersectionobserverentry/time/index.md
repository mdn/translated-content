---
title: IntersectionObserverEntry：time 属性
short-title: time
slug: Web/API/IntersectionObserverEntry/time
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserverEntry")}} 接口的 **`time`** 只读属性是用于指示相交变化发生的时间（相对于文档创建时间）的 {{domxref("DOMHighResTimeStamp")}}。

## 值

{{domxref("DOMHighResTimeStamp")}}，用于指示 {{domxref("IntersectionObserverEntry.target", "target")}} 元素发生 `IntersectionObserverEntry` 所描述的相交变化的时间。该时间以毫秒为单位，自包含该元素的文档创建起开始计算。

## 示例

参见 [使用交叉观察者 API 测量元素可见性时长](/zh-CN/docs/Web/API/Intersection_Observer_API/Timing_element_visibility) 一文。文中给出了演示了如何利用 `time` 属性来跟踪元素对用户可见的时长的完整示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
