---
title: 双向文本
slug: Glossary/BiDi
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**双向文本**（BiDi，BiDirectional）指的是同时包含从右到左（RTL）和从左到右（LTR）文本的文档。

用户界面应正确显示双向文本内容，但很多界面却都做不到。比如，希伯来文对“Sarah”这个名字的翻译：שרה，从右到左应该拼写为 sin（ש）、resh（ר）、heh（ה）。然而，许多程序却会将这些字母按相反的顺序显示。

可以将从左到右的显示顺序翻转为从右到左的显示顺序，但这样做会牺牲正确显示双向文本的能力——至少会有一种文本显示不正确。支持双向文本后，就可以在同一页面上混合不同书写方向的字符。

Unicode 标准为完整的双向文本支持提供了基础，并详细规定了如何编码和显示左右混合的文本。

## 参见

- 相关术语：
  - {{glossary("Unicode", "统一码")}}
- 维基百科上的[双向文本](https://zh.wikipedia.org/wiki/雙向文稿)
- [UAX#9：Unicode 双向文本算法](https://www.unicode.org/reports/tr9)
