---
title: IntersectionObserverEntry：rootBounds 属性
short-title: rootBounds
slug: Web/API/IntersectionObserverEntry/rootBounds
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserverEntry")}} 接口的 **`rootBounds`** 只读属性是一个对应于 {{domxref("IntersectionObserverEntry.target", "target")}} 的根相交矩形 {{domxref("DOMRectReadOnly")}}，并在指定了 {{domxref("IntersectionObserver.rootMargin")}} 时该矩形将按该值进行偏移。

## 值

用于描述根相交矩形的 {{domxref("DOMRectReadOnly")}}。对于根为 {{domxref("Document")}} 视口的情况，该矩形即为整个文档的边界矩形。否则，它将是根元素的边界。

该矩形会根据 {{domxref("IntersectionObserver.rootMargin")}} 中的值进行偏移。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
