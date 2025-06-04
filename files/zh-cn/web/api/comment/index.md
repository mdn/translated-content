---
title: Comment
slug: Web/API/Comment
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ ApiRef("DOM") }}

**`Comment`** 接口表示标记中的文本注释；虽然这些注释通常不会在页面上显示出来，但它们可以在源代码视图中被查看和阅读。

注释在 HTML 和 XML 中表示为位于 `<!--` 和 `-->` 之间的内容。在 XML 中（例如在 SVG 或 MathML 标记中），注释中不能包含 `--` 字符序列。

{{InheritanceDiagram}}

## 实例属性

_该接口没有特定的属性，但继承自其父接口 {{domxref("CharacterData")}} 的属性，并间接继承自 {{domxref("Node")}} 的属性。_

## 构造函数

- {{ domxref("Comment.Comment()", "Comment()") }}
  - : 返回一个新的 `Comment` 对象，其文本内容为传入的参数。如果未提供参数，则默认值为一个空字符串 `''`。

## 实例方法

_该接口没有特定的方法，但继承自其父接口 {{domxref("CharacterData")}} 的方法，并间接继承自 {{domxref("Node")}} 的方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM API](/zh-CN/docs/Web/API/Document_Object_Model)
