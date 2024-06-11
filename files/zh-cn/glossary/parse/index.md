---
title: 语法分析
slug: Glossary/Parse
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

语法分析就是将程序解析以及转换成能够在运行环境中运行的计算机内部格式，比如浏览器中的 {{glossary("JavaScript")}} 引擎。

[浏览器会语法分析 HTML](/en-US/docs/Learn/HTML) 为一个 {{glossary('DOM')}} 树。HTML 语法分析包括标记化和树结构构建。HTML 标记包括开始和结束标签，以及属性名和属性值。如果文档格式良好，语法分析过程就会简单且快速。语法分析器将标记化的输入语法分析为文档，构建文档树。

当 HTML 语法分析器发现非阻塞资源（如图片）时，浏览器会请求这些资源并继续语法分析。当遇到 CSS 文件时，语法分析可以继续进行，但 `<script>` 标签——尤其是那些没有 [`async`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 或 `defer` 属性的标签——会阻塞渲染并暂停 HTML 语法分析。

当浏览器遇到 CSS 样式时，它将文本语法分析为 CSS 对象模型（{{glossary('CSSOM')}}），一个用于样式布局和绘制的数据结构。浏览器随后会根据这两个结构创建一个渲染树，以便将内容绘制到屏幕上。JavaScript 也会被下载、语法分析并执行。

JavaScript 的语法分析过程一般在{{glossary("compile time", "编译时")}}中完成，或者是在任意{{glossary("parser", "语法分析器"")}}参与的时候完成。比如说在调用一个方法的过程中完成语法分析。

## 参见

- 维基百科上的[语法分析](https://en.wikipedia.org/wiki/语法分析)
