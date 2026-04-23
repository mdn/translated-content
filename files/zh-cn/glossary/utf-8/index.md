---
title: UTF-8
slug: Glossary/UTF-8
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

UTF-8 (UCS 转换格式 8) 是万维网上最常用的{{Glossary("Character encoding", "字符编码")}}。每个字符由 1 到 4 个字节表示。UTF-8 与 {{Glossary("ASCII")}} 向后兼容，可以表示任何标准的 Unicode 字符。

前 128 个 UTF-8 字符会与前 128 个 ASCII 字符（编号为 0-127）精确匹配，意味着现有的 ASCII 文本已经是有效的 UTF-8。所有其他字符都使用 2 到 4 个字节。每个字节都有一些用于编码目的的保留位。由于非 ASCII 字符需要一个以上的字节来存储，如果字节被分隔而不重组，那么它们就会有损坏的风险。

## 参见

- 维基百科上的 [UTF-8](https://zh.wikipedia.org/wiki/UTF-8)
- [Unicode 网站上关于 UTF-8 的常见问答](https://www.unicode.org/faq/utf_bom.html#UTF8)
