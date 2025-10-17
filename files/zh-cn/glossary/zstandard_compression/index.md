---
title: Zstandard 压缩
slug: Glossary/Zstandard_compression
l10n:
  sourceCommit: 6f55a0897b5511a2a78bbd70dc611c76eae911ff
---

**Zstandard** 是一种通用的无损压缩算法。

Zstandard（简称 `zstd`）是一种快速无损压缩算法，针对 zlib 级别的实时压缩场景提供更好的压缩比。它采用了[Huff0 和 FSE 库](https://github.com/Cyan4973/FiniteStateEntropy)提供的高效熵编码阶段。在相同的 CPU 开销下，它通常比 {{glossary("Brotli_compression", "brotli")}} 提供更好的压缩比，或者在相同的压缩比下提供更低的 CPU 开销。

关于浏览器兼容性，请参考 [Content-Encoding：浏览器兼容性](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Encoding#浏览器兼容性)。

## 参见

- {{glossary("Lossless compression", "无损压缩")}}
- {{glossary("Lossy compression", "有损压缩")}}
- [Zstandard RFC](https://tools.ietf.org/html/rfc8878)
- [Zstandard 主页](https://facebook.github.io/zstd/)
- [Zstandard GitHub 仓库](https://github.com/facebook/zstd)
- 维基百科上的 [Zstandard](https://zh.wikipedia.org/zh-cn/Zstandard)
- [Caniuse 中的 Zstandard](https://caniuse.com/#feat=zstandard)
