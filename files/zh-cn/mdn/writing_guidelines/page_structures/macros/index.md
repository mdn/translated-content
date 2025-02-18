---
title: 使用宏
slug: MDN/Writing_guidelines/Page_structures/Macros
---

为了自动化执行某些工作，[Yari](https://github.com/mdn/yari) 平台提供了一个强大的宏系统——[KumaScript](https://github.com/mdn/yari/tree/main/docs/kumascript)。本文提供了一些相关信息，方便你在参与编辑 MDN 时使用这些宏。

本文只是简要介绍了相关内容，[KumaScript 指南](https://github.com/mdn/yari/blob/main/docs/kumascript/README.md)提供了更深入的内容。

## 宏是如何实现的

MDN 使用的宏基于运行于服务器上的 [JavaScript](/zh-CN/docs/Web/JavaScript) 代码来实现的，并由 [Node.js](https://nodejs.org/zh-cn) 解释执行。在此之上，我们已经实现了一个丰富的工具库，让宏可以与这个平台以及其中的内容进行交互。

## 在文章中使用宏

要在文章中实际使用宏，只需将对宏的调用和可能需要的参数写在一对双括号中，如下：

```plain
\{{macroname(parameter-list)}}
```

关于宏调用的一些注意事项：

- 宏的名称区分大小写，但一些常见的大小写错误也可以在执行时被纠正。比如将某个名称中含有大写的宏，全部使用小写字母，或者将某些名字以小写开头的宏大写。
- 参数以逗号分隔。
- 如果没有参数，括号可以省略：`\{{macroname()}}` 和 `\{{macroname}}` 的作用是相同的。
- 数字参数是否放在引号中，一般没有区别。但是，像版本号（如 1.2.3）这类可能被识别成小数的参数，则需包含在引号中。
- 如果遇到错误，请先仔细检查代码。如果仍然无法弄清楚发生了什么，请参阅[排查 KumaScript 的错误](https://github.com/mdn/yari/blob/main/docs/kumascript/troubleshooting-errors.md)以获取帮助。

宏的几乎所有执行结果都会被缓存，以便被重用并加快执行速度。这意味着宏仅在输入发生变化时才实际运行，包括调用时的参数以及环境值（例如调用这个宏的文章所在的路径）。

宏既可以用来做一些简单的工作，比如插入更大的文本块或用 MDN 的替换文章中的内容。也可以通过搜索站点的各个部分，设置输出样式和添加链接来构建整个内容索引。

你可以在[常用的宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)页面看到一些我们最常用到的宏，还可以在我们 Github 的仓库中，浏览[所有的宏的完整源代码](https://github.com/mdn/yari/tree/main/kumascript/macros)。大多数宏顶部的注释中，都有内置的文档帮助你了解它的作用。
