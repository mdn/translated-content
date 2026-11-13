---
title: 压缩字典传输
slug: Glossary/Compression_dictionary_transport
l10n:
  sourceCommit: 4c0588c10b4266b8a87a1f80d93e8f99eabc1a4e
---

**压缩字典传输**（Compression Dictionary Transport）是一种使用共享压缩字典（而不是 {{glossary("Brotli compression", "Brotli 压缩")}}或 {{glossary("Zstandard compression", "ZStandard 压缩")}}中定义的标准静态字典）来显著减少 HTTP 响应传输尺寸的方法。

例如，在下载 `app.v2.js` 时，如果客户端已经拥有 `app.v1.js`，那么它们可以将该文件作为字典进行引用，从而只需下载差异部分和对 `v1` 文件的小部分引用。

更多信息请参见[压缩字典传输指南](/zh-CN/docs/Web/HTTP/Guides/Compression_dictionary_transport)。

## 参见

- [压缩字典传输指南](/zh-CN/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- 相关术语：
  - {{Glossary("Brotli compression", "Brotli 压缩")}}
  - {{Glossary("Zstandard compression", "ZStandard 压缩")}}
- [`<link rel="compression-dictionary">`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [草案规范](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
