---
title: 轴
slug: Web/XML/XPath/Reference/Axes
original_slug: Web/XPath/Axes
---

[XPath](/zh-CN/docs/Web/XML/XPath) 规范中定义了 13 种不同的轴（axes）。轴表示与上下文节点的关系，并用于定位树上相对于该节点的节点。

有关使用 XPath 表达式的更多信息，请参阅[使用 XSLT 转换 XML](/zh-CN/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)的[扩展阅读](/zh-CN/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT#扩展阅读)部分，以及 [xpath 规范的“axes”部分](https://www.w3.org/TR/xpath-30/#axes)。

- `ancestor`
  - : 表示上下文节点的所有祖先，从父节点开始，一直到根节点。
- `ancestor-or-self`
  - : 表示上下文节点及其所有祖先，包括根节点。
- `attribute`
  - : 表示上下文节点的属性。只有元素有属性。该轴可以用 at 符号（`@`）缩写。
- `child`
  - : 表示上下文节点的子节点。如果 XPath 表达式没有指定轴，则默认情况下会解释为该轴。由于只有根节点或元素节点有子节点，因此任何其他用法都不会选择任何内容。
- `descendant`
  - : 表示上下文节点的所有子节点，以及子节点的所有子节点，依此类推。**不**包括属性和命名空间节点——`attribute` 节点的 `parent` 是一个元素节点，但 `attribute` 节点不是其父节点的子节点。
- `descendant-or-self`
  - : 表示上下文节点及其所有子节点。**不**包括属性和命名空间节点——`attribute` 节点的 `parent` 是一个元素节点，但 `attribute` 节点不是其父节点的子节点。
- `following`
  - : 表示上下文节点之后出现的，除了任何 `descendant`、`attribute` 和 `namespace` 节点之外的所有节点。
- `following-sibling`
  - : 表示与上下文节点具有相同父节点并在源文档中出现在上下文节点之后的所有节点。
- `namespace`（_不支持_）
  - : 表示上下文节点的作用域内的所有节点。对于该轴，上下文节点必须是元素节点。
- `parent`
  - : 表示上下文节点的父节点。它可以缩写为两个句点（`..`）。
- `preceding`
  - : 表示文档中在上下文节点之前的，除了任何 `ancestor`、`attribute` 和 `namespace` 节点之外的所有节点。
- `preceding-sibling`
  - : 表示与上下文节点具有相同父节点并在源文档中出现在上下文节点之前的所有节点。
- `self`
  - : 表示上下文节点本身。它可以缩写为一个句点（`.`）。
