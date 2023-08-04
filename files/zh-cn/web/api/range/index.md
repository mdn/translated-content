---
title: Range
slug: Web/API/Range
---

{{APIRef("DOM")}}

**`Range`** 接口表示一个包含节点与文本节点的一部分的文档片段。

可以使用 {{domxref("Document.createRange")}} 方法创建 Range。也可以用 {{domxref("Selection")}} 对象的 {{domxref("Selection/getRangeAt", "getRangeAt()")}} 方法或者 {{domxref("Document")}} 对象的 {{domxref("Document/caretRangeFromPoint", "caretRangeFromPoint()")}} 方法获取 Range 对象。

还可以用 {{domxref("Range.Range()", "Range()")}} 构造函数。

## 属性

_没有继承的属性。_

- {{domxref("Range.collapsed")}} {{ReadOnlyInline}}
  - : 返回一个表示 `Range` 的起始位置和终止位置是否相同的{{domxref("Boolean", "布尔值")}}。
- {{domxref("Range.commonAncestorContainer")}} {{ReadOnlyInline}}
  - : 返回完整包含 `startContainer` 和 `endContainer` 的、最深一级的{{ domxref("Node", "节点") }}。
- {{domxref("Range.endContainer")}} {{ReadOnlyInline}}
  - : 返回包含 `Range` 终点的{{ domxref("Node", "节点") }}。
- {{domxref("Range.endOffset")}} {{ReadOnlyInline}}
  - : 返回一个表示 `Range` 终点在 `endContainer` 中的位置的数字。
- {{domxref("Range.startContainer")}} {{ReadOnlyInline}}
  - : 返回包含 `Range` 开始的{{ domxref("Node", "节点") }}。
- {{domxref("Range.startOffset")}} {{ReadOnlyInline}}
  - : 返回一个数字，表示 `Range` 在 `startContainer` 中的起始位置。

## 构造函数

- {{ domxref("Range.Range()", "Range()") }}
  - : 返回一个以全局（global）{{domxref("Document")}} 作为起点与终点的 `Range` 对象。

## 方法

_该接口没有继承的方法。_

- {{ domxref("Range.collapse()")}}
  - : 将 `Range` 折叠到其边界的端点。
- {{ domxref("Range.compareBoundaryPoints()")}}
  - : 将该 `Range` 的边界与另一个 `Range` 的边界进行比较
- {{ domxref("Range.compareNode()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 返回一个常量，表示{{ domxref("Node", "节点") }}是否在 `Range` 的前、后、中、外。
- {{ domxref("Range.comparePoint()")}}
  - : 返回 -1、0 或 1，分别表示端点在 `Range` 之前、内部还是之后。
- {{ domxref("Range.cloneContents()")}}
  - : 返回一个复制 `Range` 中所有节点的{{ domxref("DocumentFragment","文档片段") }}。
- {{ domxref("Range.cloneRange()")}}
  - : 返回一个拥有和原 `Range` 对象相同端点的克隆的 `Range` 对象。
- {{ domxref("Range.createContextualFragment()")}}
  - : 返回从给定的代码字符串创建的{{ domxref("DocumentFragment","文档片段") }}。
- {{ domxref("Range.deleteContents()")}}
  - : 从 {{ domxref("Document") }} 中移除 `Range` 内容。
- {{ domxref("Range.detach()")}}
  - : 将 `Range` 从使用状态释放，提高性能。
- {{ domxref("Range.extractContents()")}}
  - : 将 `Range` 的内容从文档树移动到一个{{ domxref("DocumentFragment","文档片段") }}。
- {{ domxref("Range.getBoundingClientRect()") }}
  - : 返回一个 {{ domxref("DOMRect") }} 对象，其绑定了 `Range` 的整个内容；这将是通过 {{ domxref("range.getClientRects()") }} 返回所有边界矩形集合的其中之一。
- {{ domxref("Range.getClientRects()") }}
  - : 返回一个 {{ domxref("DOMRect") }} 列表对象，该列表汇总了 `Range` 中所有元素的 {{ domxref("Element.getClientRects()") }} 返回结果。
- {{ domxref("Range.isPointInRange()")}}
  - : 返回一个 `boolean`，表示给点端点是否在 `Range` 中。
- {{ domxref("Range.insertNode()")}}
  - : 在 `Range` 开头插入一个{{ domxref("Node","节点") }}。
- {{ domxref("Range.intersectsNode()")}}
  - : 返回一个 `boolean`，表示给定的节点是否与 `Range` 相交。
- {{ domxref("Range.selectNode()")}}
  - : 设置 `Range` 包含某个{{ domxref("Node","节点") }}及其他的内容。
- {{ domxref("Range.selectNodeContents()")}}
  - : 设置 `Range` 包含某个{{ domxref("Node","节点") }}的内容。
- {{ domxref("Range.setEnd()")}}
  - : 设置 `Range` 的终点。
- {{ domxref("Range.setStart()")}}
  - : 设置 `Range` 的起点。
- {{ domxref("Range.setEndAfter()")}}
  - : 以另一个{{ domxref("Node","节点") }}为基准，设置 `Range` 的终点位置。
- {{ domxref("Range.setEndBefore()")}}
  - : 以另一个{{ domxref("Node","节点") }}为基准，设置 `Range` 的终点位置。
- {{ domxref("Range.setStartAfter()")}}
  - : 以另一个{{ domxref("Node","节点") }}为基准，设置 `Range` 的起点位置。
- {{ domxref("Range.setStartBefore()")}}
  - : 以另一个{{ domxref("Node","节点") }}为基准，设置 `Range` 的起点位置。
- {{ domxref("Range.surroundContents()")}}
  - : 将 `Range` 中的内容移动到一个新的{{ domxref("Node","节点") }}。
- {{ domxref("Range.toString()")}}
  - : 返回 `Range` 中的文本

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
