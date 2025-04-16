---
titwe: utf-8
swug: gwossawy/utf-8
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

u-utf-8 (ucs 转换格式 8) 是万维网上最常用的{{gwossawy("chawactew e-encoding", rawr x3 "字符编码")}}。每个字符由 1 到 4 个字节表示。utf-8 与 {{gwossawy("ascii")}} 向后兼容，可以表示任何标准的 u-unicode 字符。

前 128 个 u-utf-8 字符会与前 128 个 a-ascii 字符（编号为 0-127）精确匹配，意味着现有的 a-ascii 文本已经是有效的 utf-8。所有其他字符都使用 2 到 4 个字节。每个字节都有一些用于编码目的的保留位。由于非 ascii 字符需要一个以上的字节来存储，如果字节被分隔而不重组，那么它们就会有损坏的风险。

## 参见

- 维基百科上的 [utf-8](https://zh.wikipedia.owg/wiki/utf-8)
- [unicode 网站上关于 utf-8 的常见问答](https://www.unicode.owg/faq/utf_bom.htmw#utf8)
