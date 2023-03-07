---
title: 对页面预解析进行优化
slug: Glossary/Speculative_parsing
---

在传统的浏览器中，HTML 解析器运行于主线程之中，并且在遇到 `</script>` 标签后会被阻塞，直到脚本从网络中被获取和执行。Firefox 4 和后续的版本支持从主线程中分离的预解析技术。当脚本在获取和执行的过程中，预解析技术能提前解析 HTML 文档。在 Firefox 3.5 和 3.6 中，HTML 解析器能够在文档流中预先加载脚本、层叠样式表和图片。然而，在 Firefox 4 和后续的版本中 HTML 解析器也预先运行 HTML 树构建算法。这一举措的优点是当预解析成功后，就没有必要再重新解析已经扫描过并且成功下载的脚本，层叠样式表和图片；缺点就是当预解析失败之后，有很多工作需要去做。

这篇文档旨在帮助你避免预解析失败和页面加载变慢。

## 使预加载成功

让脚本、层叠样式表和图片预加载成功的规则只有一条：

- 如果你使用 `<base>` 元素重载页面的基 URI，将这个元素放置到文档的非脚本部分。不要通过 `document.write()` 或者 `document.createElement()` 添加。

## 避免树构建器的输出丢失

当 `document.write()` 改变了文档树的状态时，树构建器的预构建过程会失败。例如，当所有被 `document.write()` 插入的内容被解析之后 `</script>` 标签后的预处理状态不再持有。然而，只有不寻常地使用 `document.write()` 才会产生问题。这些事情需要避免：

- 不要写不对称的文档树。`<script>document.write("<div>");</script>` 很糟糕。`<script>document.write("<div></div>");</script>` 则是可行的。
- 不要写未完成的标识。 `<script>document.write("<div></div");</script>` 很糟糕。
- 不要以回车结束内容。 `<script>document.write("Hello World!\r");</script>` 很糟糕。 `<script>document.write("Hello World!\n");</script>` 则是可行的。
- 注意即使对称的标签也可能导致文档的不对称。比如：`head` 元素中的`<script>document.write("<div></div>");</script>` i 会被解析成 `<script>document.write("</head><body><div></div>");</script>` 因次文档是不对称的。
- 不要仅格式化部分表格。 `<table><script>document.write("<tr><td>Hello World!</td></tr>");</script></table>` 很糟糕。然而， `<script>document.write("<table><tr><td>Hello World!</td></tr></table>");</script>` 则是可行的。
- TODO: 在其它格式化元素中使用 document.write。
