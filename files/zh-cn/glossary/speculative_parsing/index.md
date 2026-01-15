---
title: 推测解析
slug: Glossary/Speculative_parsing
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

传统上，浏览器的 HTML 解析器运行于主线程之中，并且在遇到 `</script>` 标签后会被阻塞，直到脚本从网络中被获取和执行。Firefox 4 和后续的版本支持从主线程中分离的推测解析技术。在下载和执行脚本时，它会提前进行解析。HTML 解析器会对在数据流中提前找到的脚本、样式表和图片启动推测加载，并推测运行 HTML 树构建算法。这样做的好处是，当推测成功时，就无需重新解析已扫描过脚本、样式表和图像的传入文件部分。缺点是，当推测失败时，会损失更多的工作。

这篇文档旨在帮助你避免推测失败和页面加载变慢。

要想成功加载链接脚本、样式表和图片，请避免 {{domxref('document.write')}}。如果你使用 `<base>` 元素重载页面的基 URI，将这个元素放置到文档的非脚本部分。不要通过 `document.write()` 或者 {{domxref('document.createElement')}} 添加。

## 避免树构建器的输出丢失

当 `document.write()` 改变了文档树的状态，以至于当 `document.write()` 插入的所有内容都被解析后，`</script>` 标记后的推测状态不再保持时，推测树生成失败。然而，只有不寻常地使用 `document.write()` 才会产生问题。这些事情需要避免：

- 不要写不对称的文档树。`<script>document.write("<div>");</script>` 很糟糕。`<script>document.write("<div></div>");</script>` 则是可行的。
- 不要写未完成的标识。`<script>document.write("<div></div");</script>` 很糟糕。
- 不要以回车结束内容。`<script>document.write("Hello World!\r");</script>` 很糟糕。`<script>document.write("Hello World!\n");</script>` 则是可行的。
- 需要注意的是，对称的标签也可能导致文档的不对称。比如：`head` 元素中的 `<script>document.write("<div></div>");</script>` 会被解析成 `<script>document.write("</head><body><div></div>");</script>`，因此文档是不对称的。
- 不要仅格式化部分表格。`<table><script>document.write("<tr><td>Hello World!</td></tr>");</script></table>` 很糟糕。
