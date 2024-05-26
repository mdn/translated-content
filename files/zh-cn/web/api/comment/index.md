---
title: Comment
slug: Web/API/Comment
---

{{ ApiRef("DOM") }}

**`Comment`** 接口代表标签（markup）之间的文本符号（textual notations）。尽管它通常不会显示出来，但是在查看源码时可以看到它们。在 HTML 和 XML 里，注释（Comments）为 '`<!--`' 和 '`-->`' 之间的内容。在 XML 里，注释中不能出现字符序列 '`--`'。

## 属性

_该接口没有特定的属性，但是从其父类 {{domxref("CharacterData")}} 继承属性，以及间接从 {{domxref("Node")}} 继承部分属性。_

## 构造函数

- {{ domxref("Comment.Comment()", "Comment()") }} {{experimental_inline}}
  - : 使用文本内容作为参数，返回一个 `Comment` 对象。

## 方法

该接口没有特定的方法，但从其父类 {{domxref("CharacterData")}} 继承方法，以及间接从 {{domxref("Node")}} 继承部分方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model#dom_接口)
