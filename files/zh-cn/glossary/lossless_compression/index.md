---
title: 无损压缩
slug: Glossary/Lossless_compression
l10n:
  sourceCommit: 6f55a0897b5511a2a78bbd70dc611c76eae911ff
---

{{GlossarySidebar}}

**无损压缩**是一类允许从压缩数据完美地重构原始数据的数据压缩算法。无损压缩方法是可逆的。无损压缩的例子包括 {{glossary("gzip_compression", "gzip")}}、{{glossary("Brotli_compression", "brotli")}}、{{glossary("Zstandard compression", "Zstandard")}}、{{glossary("WebP")}} 和 {{glossary("PNG")}}。

另一方面，{{glossary("Lossy compression", "有损压缩")}}使用不精确的近似值（从原始文件中丢弃一些数据），使其成为一种不可逆转的压缩方法。像 {{glossary("WebP")}} 这样的压缩方法可以根据压缩级别或在编码过程中使用的选项进行[无损和有损压缩](https://developers.google.cn/speed/webp/docs/compression)。

## 参见

- {{glossary("Lossy compression", "有损压缩")}}
