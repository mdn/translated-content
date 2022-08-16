---
title: Range
slug: Web/API/Range
---
{{ ApiRef() }}

**`Range`** 接口表示一个包含节点与文本节点的一部分的文档片段。

可以用 {{domxref("Document")}} 对象的 {{domxref("Document.createRange")}} 方法创建 Range，也可以用 {{domxref("Selection")}} 对象的 {{domxref("Selection/getRangeAt", "getRangeAt")}} 方法获取 Range。另外，还可以通过 {{domxref("Document")}} 对象的构造函数 {{domxref("Range.Range()", "Range()")}} 来得到 Range。

## 属性

- {{domxref("Range.collapsed")}} {{readonlyInline}}
  - : 返回一个表示 `Range` 的起始位置和终止位置是否相同的{{domxref("Boolean", "布尔值")}}。
- {{domxref("Range.commonAncestorContainer")}} {{readonlyInline}}
  - : 返回完整包含 `startContainer` 和 `endContainer` 的、最深一级的{{ domxref("Node", "节点") }}。
- {{domxref("Range.endContainer")}} {{readonlyInline}}
  - : 返回包含 `Range` 终点的{{ domxref("Node", "节点") }}。
- {{domxref("Range.endOffset")}} {{readonlyInline}}
  - : 返回一个表示 `Range` 终点在 `endContainer` 中的位置的数字。
- {{domxref("Range.startContainer")}} {{readonlyInline}}
  - : 返回包含 `Range` 开始的{{ domxref("Node", "节点") }}。
- {{domxref("Range.startOffset")}} {{readonlyInline}}
  - : 返回一个表示 `Range` 起点在 `startContainer` 中的位置的数字。

## 构造器

- {{ domxref("Range.Range()", "Range()") }} {{experimental_inline}}
  - : 返回一个以全局（global）{{domxref("Document")}} 作为起点与终点的 `Range` 对象。

## 方法

_该接口没有继承的方法。_

### 定位方法

- {{ domxref("Range.setStart()")}}
  - : 设置 `Range` 的起点。
- {{ domxref("Range.setEnd()")}}
  - : 设置 `Range` 的终点。
- {{ domxref("Range.setStartBefore()")}}
  - : 以其它{{ domxref("Node", "节点") }}为基准，设置 `Range` 的起点。
- {{ domxref("Range.setStartAfter()")}}
  - : 以其它{{ domxref("Node", "节点") }}为基准，设置 `Range` 的起点。
- {{ domxref("Range.setEndBefore()")}}
  - : 以其它{{ domxref("Node", "节点") }}为基准，设置 `Range` 的终点。
- {{ domxref("Range.setEndAfter()")}}
  - : 以其它{{ domxref("Node", "节点") }}为基准，设置 `Range` 的终点。
- {{ domxref("Range.selectNode()")}}
  - : 使 `Range` 包含某个{{ domxref("Node", "节点") }}及其内容。
- {{ domxref("Range.selectNodeContents()")}}
  - : 使 `Range` 包含某个{{ domxref("Node", "节点") }}的内容。
- {{ domxref("Range.collapse()")}}
  - : 将 `Range` 折叠至其端点（boundary points，起止点，指起点或终点，下同）之一。

### 编辑方法

_通过以下方法，可以从 `Range` 中获得节点，改变 `Range` 的内容。_

- {{ domxref("Range.cloneContents()")}}
  - : 返回一个包含 `Range` 中所有节点的{{ domxref("DocumentFragment", "文档片段") }}。
- {{ domxref("Range.deleteContents()")}}
  - : 从{{ domxref("Document", "文档") }}中移除 `Range` 包含的内容。
- {{ domxref("Range.extractContents()")}}
  - : 把 `Range` 的内容从文档树移动到一个{{ domxref("DocumentFragment", "文档片段") }}中。
- {{ domxref("Range.insertNode()")}}
  - : 在 `Range` 的起点处插入一个{{ domxref("Node", "节点") }}。
- {{ domxref("Range.surroundContents()")}}
  - : 将 `Range` 的内容移动到一个新的{{ domxref("Node", "节点") }}中。

### 其他方法

- {{ domxref("Range.compareBoundaryPoints()")}}
  - : 比较两个 `Range` 的端点。
- {{ domxref("Range.cloneRange()")}}
  - : 返回拥有和原 `Range` 相同的端点的克隆 `Range` 对象。
- {{ domxref("Range.detach()")}}
  - : 将 `Range` 从使用状态中释放，改善性能。
- {{ domxref("Range.toString()")}}
  - : 把 `Range` 的内容作为字符串返回。

### Gecko 方法

_下面的是 Mozilla 独有的、不被包含在 W3C DOM 标准中的_ `Range` _方法。_

- {{ domxref("Range.compareNode()")}} {{Deprecated_Inline}}{{non-standard_inline}}
  - : 返回一个常量，表示{{ domxref("Node", "节点") }}是否在 `Range` 的前、后、中、外。
- {{ domxref("Range.comparePoint()")}} {{experimental_inline}}
  - : 返回 -1、0、1，分别表示指定点（point）位于 `Range` 的前、中、后。
- {{ domxref("Range.createContextualFragment()")}}{{experimental_inline}}
  - : 解析指定字符串（格式为 XML 或 HTML），并返回一个{{ domxref("DocumentFragment", "文档片段") }}。
- {{ domxref("Range.getBoundingClientRect()") }} {{experimental_inline}}
  - : 返回单个 {{ domxref("ClientRect") }} 对象，which bounds the entire contents of the`Range`; this would be the union of all the rectangles returned by {{ domxref("range.getClientRects()") }}.
- {{ domxref("Range.getClientRects()") }} {{experimental_inline}}
  - : 返回一个 {{ domxref("ClientRect") }} 对象的列表，that aggregates the results of {{ domxref("Element.getClientRects()") }} for all the elements in the `Range`.
- {{ domxref("Range.intersectsNode()")}} {{experimental_inline}}
  - : 返回{{domxref("Boolean", "布尔值")}}，表示指定{{ domxref("Node", "节点") }}是否横断 `Range`。
- {{ domxref("Range.isPointInRange()")}} {{experimental_inline}}
  - : 返回{{domxref("Boolean", "布尔值")}}，表示指定点是否位于 `Range` 之中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.Range")}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
