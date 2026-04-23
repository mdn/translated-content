---
title: 使用 HTML 注释 <!-- … -->
short-title: 注释
slug: Web/HTML/Guides/Comments
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

HTML **注释**主要用于为标记添加解释性说明，或防止浏览器解释文档的特定部分。

注释以字符串 `<!--` 开始，字符串 `-->` 结束，其中间是一些文本。这些文本不能以字符串 `>` 或 `->` 开头，不能包含字符串 `-->` 或 `--!>`，也不能以字符串 `<!-` 结束，但允许字符串 `<!` 出现。

当渲染代码时，浏览器会忽略注释。也就是说，它们在页面中不可见——只在代码中可见。HTML 注释是为代码或逻辑编写有用注释的一种方式。

上述情况同样适用于 [XML](/zh-CN/docs/Web/XML) 注释。此外，在 XML 中，例如在 [SVG](/zh-CN/docs/Web/SVG) 或 [MathML](/zh-CN/docs/Web/MathML) 标记中，注释不能包含字符序列 `--`。

注释可以在单行中使用，也可以跨越多行。它们可以在这些地方使用：

- 在 {{Glossary("Doctype")}} 之前或之后
- 在 {{HTMLElement("html")}} 元素之前或之后
- 在除了这些元素的内容之外：{{HTMLElement("script")}}、{{HTMLElement("style")}}、{{HTMLElement("title")}}、{{HTMLElement("textarea")}}，因为这些元素将其内容解释为原始文本

> [!NOTE]
> 虽然 `<script>` 元素不应使用 HTML 注释，而应使用 [JavaScript 注释](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#注释)，但有一种传统做法是将整个脚本内容包含在 HTML 注释中，这样不支持 JavaScript 的古老浏览器就不会将其渲染为文本。现在，这种做法已成为 [JavaScript 自身的遗留特性](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#html_注释)，不应再依赖它。

## 语法

```html
<!-- 注释 -->
```

## 示例

```html
<!-- 单行注释 -->

<!--
跨越
多行
的
注释
-->

<!-- 下方的注释禁用了其中包含的 HTML -->
<!--
<p>
   这行内容不会被渲染。
</p>
-->
```

## 备注

HTML 注释只能作为内容使用。不能在标签中使用，例如在 HTML [属性](/zh-CN/docs/Glossary/Attribute)之前使用。

与大多数使用 `<!-- ->` 注释语法的编程语言一样，注释不能嵌套。换句话说，`<!--` 之后的第一个 `-->` 会关闭注释。

虽然注释确实以 `<` 开始，以 `>` 结束，但注释不是 HTML 元素。

## 规范

{{Specifications}}

## 参见

- [JavaScript 中的注释](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#注释)
- [CSS 中的注释](/zh-CN/docs/Web/CSS/Guides/Syntax/Comments)
- {{domxref("Comment")}} API（`Comment` 继承自 {{domxref("Node")}}）
