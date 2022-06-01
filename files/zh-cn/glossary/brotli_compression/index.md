---
title: Brotli
slug: Glossary/brotli_compression
tags:
  - Brotli
  - Glossary
  - Reference
  - Web Performance
  - compression
translation_of: Glossary/brotli_compression
---
**Brotli** 是一种通用的无损压缩算法。

它结合使用 LZ77 算法的一个现代变体、霍夫曼编码编码和二阶上下文建模来压缩数据，提供与目前可用的最佳通用压缩算法相当的压缩率。Brotli 提供比 {{glossary("GZip_compression", "gzip")}} 更好（小）的压缩率，并具有与 deflate 相当的压缩速度。但 brotli 压缩速度比 Gzip 压缩慢，因此 gzip 可能更适合于压缩不{{glossary("Cache", "可缓存")}}的内容。

Brotli 与大多数现代浏览器兼容，但同时仍需考虑回落机制。

## 参见

- [brotli.org](https://brotli.org/)
- [Brotli 的 Github 仓库](https://github.com/google/brotli)
- 维基百科上的 {{interWiki("wikipedia", "Brotli")}}
- [Brotli on Caniuse](https://caniuse.com/#feat=brotli)
