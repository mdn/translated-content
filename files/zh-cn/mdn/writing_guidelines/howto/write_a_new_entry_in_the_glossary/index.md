---
title: 如何撰写和引用一个术语表中的条目
slug: MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary
---

{{MDNSidebar}}

本文介绍了如何撰写或引用 [MDN Web 文档术语表](/zh-CN/docs/Glossary)中的条目，还提供了有关术语条目的布局和内容的指南。术语表提供了你在阅读有关 Web 和 Web 开发的 MDN 内容时会遇到的所有术语、行话和缩写的定义。

术语表并不一定完整，因为 Web 总是在发生变化。你可以通过贡献新的条目或修复问题，帮助我们更新术语表和填补缺失的内容。

对术语表做出贡献是使 Web 更易于理解的简单方法。你不需要高水平的技术技能来编写术语表条目，因为它们应该保持简洁明了。

## 如何编写条目

首先，请选择你需要编写的术语条目的主题。如果你正在寻找需要术语表条目的主题，请查看[术语表首页](/zh-CN/docs/Glossary)侧边栏中的列出的条目。

如果你有添加新的术语表条目的想法，请在[术语表首页](https://github.com/mdn/content/tree/main/files/en-us/glossary)下[新建一个页面](/zh-CN/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#新建一个页面)。

### 撰写概要

任何术语表页面的第一段是对该术语的简单和简短描述（最好不超过两个句子）。确保阅读说明的人能够立即了解定义的术语。

> **备注：** 请不要直接从其他地方复制和粘贴定义（尤其是维基百科，因为许可证版本范围较小，与 MDN 不兼容）。你的术语条目应该是自己撰写的内容。

#### 撰写一个良好的术语条目

如果需要的话，你可以添加少量额外的段落，但是这很容易导致你写了一整篇文章。写一篇完整的文章很棒，但是请不要把它们整个放在术语表中。如果你不确定这里是否适合放你的文章，请随时与我们[讨论](/zh-CN/docs/MDN/Community/Discussions)。

撰写良好的术语条目需要考虑一些简单的准则：

- 当你在术语的描述中使用其他术语或缩写时，你应该创建适当的链接。通常，这只涉及创建到术语表中其他页面的链接。
- 在术语表中使用适当的（带有链接的）相关术语，前提是这样做不会使得文章变得难以理解。带有相关且有用的链接将使得一个（或一组）页面更易于理解。
- 考虑你想要找到这个页面时会选用的搜索词。尝试在术语条目中使用你将用于搜索术语时所选用的所有词汇，但请不要让术语条目变得冗长和难以阅读。

### 扩展链接

术语条目应始终以*参见*（See Also）部分结尾。这个部分应该包含帮助读者更深入了解相关内容的链接：探索更多细节、学习使用相关技术等。

我们建议你将链接分为以下三个部分：

- 基础知识
  - : 提供更多一般信息的链接。如：到[维基百科](https://zh.wikipedia.org/)的链接是一个很棒的点。
- 技术参考
  - : 链接到更深入的技术信息，MDN 或其他地方的相关内容。
- 学习它
  - : 链接到教程、练习或任何其他材料，帮助读者深入学习。

## 消除歧义

有时，根据上下文，术语有几个含义。要消除歧义，你必须遵循以下准则：

- 该术语的主页面必须是一个包含了 [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) 宏的消歧页面；
- 该术语具有定义给定上下文的术语的子页面。

我们以一个例子来说明。_签名_（signature）条目在至少两种不同的语境中具有不同的含义：*安全*和*函数*。

1. [Glossary/Signature](/zh-CN/docs/Glossary/Signature) 页面是使用了 [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) 宏的消歧页面。
2. [Glossary/Signature/Security](/zh-CN/docs/Glossary/Signature/Security) 页面是定义安全上下文中签名的条目页面。
3. [Glossary/Signature/Function](/zh-CN/docs/Glossary/Signature/Function) 页面是定义函数签名的条目页面。
