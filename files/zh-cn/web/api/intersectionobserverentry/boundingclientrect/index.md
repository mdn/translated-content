---
title: IntersectionObserverEntry：boundingClientRect 属性
short-title: boundingClientRect
slug: Web/API/IntersectionObserverEntry/boundingClientRect
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserverEntry")}} 接口的 **`boundingClientRect`** 只读属性返回一个 {{domxref("DOMRectReadOnly")}}，该对象本质上描述了一个包含整个目标元素的最小矩形。

## 值

用于描述完全包含目标元素（当前正要描述相交状态变化的元素）的最小矩形的 {{domxref("DOMRectReadOnly")}}。该值与 {{domxref("Element.getBoundingClientRect()")}} 使用相同的算法生成结果，因此请参见相应文档以了解求得该矩形的确切步骤，以及该矩形边界内包含和不包含的内容。

不过，在一般情况下，你可以安全地将该值视作目标元素的边界矩形。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
