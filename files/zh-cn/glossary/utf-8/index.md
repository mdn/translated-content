---
title: UTF-8
slug: Glossary/UTF-8
---

UTF-8 (UCS Transformation Format 8) 是万维网上最常用的{{Glossary("Character encoding", "字符编码")}}。每个字符由 1 到 4 个字节表示。UTF-8 与 {{Glossary("ASCII")}} 向后兼容，可以表示任何标准的 Unicode 字符。

前 128 个 UTF-8 字符与前 128 个 ASCII 字符 (编号为 0-127) 精确匹配，这意味着现有的 ASCII 文本已经是有效的 UTF-8。所有其他字符都使用 2 到 4 个字节。每个字节都有一些用于编码目的的保留位。由于非 ASCII 字符需要一个以上的字节来存储，如果字节被分隔而不重组，那么它们就会有损坏的风险。

## 了解更多

### General knowledge

- [UTF-8](https://zh.wikipedia.org/wiki/UTF-8) on Wikipedia
- [FAQ about UTF-8 on Unicode website](https://www.unicode.org/faq/utf_bom.html#UTF8)
