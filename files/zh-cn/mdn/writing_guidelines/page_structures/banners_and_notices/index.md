---
title: 横幅和公告框
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
---

{{MDNSidebar}}

有时，如果一篇文章涵盖了过时的技术或其他不应该在生产代码中使用的材料，需要添加一个特别的通知。本文涵盖了最常见的情况以及该如何做。

## 如何添加通知框

在大多数情况下，可通过添加一个宏调用来应用这些通知，这会在页面内容中注入一个适当的横幅，并在页面的标签列表中添加一个标签。

要做到这一点，需要在文章的顶部插入宏调用，并将新标签添加到列表中。一旦完成，就可以提出拉取请求，并等待更改的审查和合并。从那时起，一个适当的横幅将出现在页面上，任何在寻找最新文章时参考页面标签的宏将知道你所更新的页面是否已被废弃，或是其他状态的改变。

> **备注：** 要学习更多有关编辑的内容，参见我们的 [content 仓库 README](https://github.com/mdn/content)。

有时，你可能想把项目列表中的一个项目或表格中的一个项目标记为过时的、废弃的，或其他状态。下面所提及的宏中，存在为以上需求准备的特殊版本：将宏名称末尾的“\_header”换为“\_inline”即可。

## 已废弃内容

已废弃内容（Deprecated content）是指涵盖一种正在被淘汰的技术或想法的内容。它不再被推荐，预计在相对较近的将来会从浏览器中删除。关于**废弃的**定义的更多信息，请参见[实验性、废弃的和过时的](/zh-CN/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)文档。

你可以使用 [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs) 宏将页面标记为已废弃。与过时的内容（Obseleted content）一样，如果该技术是 Gecko 特有的，你可以指定该技术被废弃的 Gecko 版本作为参数。

## 非标准内容

非标准内容（Non-standard content）是指尚未属于 Web 标准的任何内容；这包括任何甚至没有被提议为规范草案的技术，即使它已被多个浏览器实现。应该在这些页面上使用 [`non-standard_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Header.ejs) 宏。
