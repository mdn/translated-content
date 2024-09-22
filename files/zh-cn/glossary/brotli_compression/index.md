---
title: Brotli 压缩
slug: Glossary/Brotli_compression
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Brotli** 是一种通用的无损压缩算法。它结合使用 LZ77 算法的一个现代变体（[Lempel-Ziv 编码](https://zh.wikipedia.org/wiki/LZ77与LZ78#L277)）、[霍夫曼编码](https://rosettacode.org/wiki/Huffman_coding)和二阶上下文建模来压缩数据，提供了与当前最佳通用压缩方法相媲美的压缩比。

Brotli 提供比 {{glossary("GZip_compression", "gzip")}} 更好的压缩率，压缩速率也与 [deflate](https://zh.wikipedia.org/wiki/Deflate) 相当。但 brotli 压缩速度比 gzip 慢，因此 gzip 可能更适合于压缩不{{glossary("Cache", "可缓存")}}的内容。

Brotli 与大多数现代浏览器兼容，但同时仍需考虑回落机制。

## 参见

- 相关术语：
  - {{glossary("Lossless compression", "无损压缩")}}
  - {{glossary("Lossy compression", "有损压缩")}}
- [brotli.org](https://brotli.org/)
- [Brotli 的 Github 仓库](https://github.com/google/brotli)
- [RFC 7932：Brotli 压缩数据格式](https://datatracker.ietf.org/html/rfc7932)
- 维基百科上的 [Brotli](https://zh.wikipedia.org/wiki/Brotli)
- [Brotli on Caniuse](https://caniuse.com/#feat=brotli)
