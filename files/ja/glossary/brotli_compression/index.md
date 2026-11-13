---
title: Brotli compression (Brotli 圧縮)
slug: Glossary/Brotli_compression
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Brotli** は、汎用の可逆圧縮アルゴリズムです。
この方式は、[Lempel-Ziv 符号化](https://ja.wikipedia.org/wiki/LZ77)の現行版である LZ77 アルゴリズム、[ハフマン符号化](https://rosettacode.org/wiki/Huffman_coding)<sup>(英語)</sup>、二次コンテキストモデリングを組み合わせてデータを圧縮し、現在利用できる汎用圧縮手法の中でも最高水準の圧縮率を提供しています。

Brotli は {{glossary("GZip_compression", "gzip")}} よりも高い圧縮率を提供し、[deflate](https://en.wikipedia.org/wiki/Deflate) と同等の処理速度を誇ります。
ただし、Brotli 圧縮は gzip による圧縮よりも処理に時間がかかるため、{{glossary("Cache", "キャッシュ不可")}}のコンテンツを圧縮する際には、gzip の方が適している場合があります。

Brotli は最新のほとんどのブラウザーと互換性がありますが、フォールバックを検討することをお勧めします。

## 関連情報

- 関連用語:
  - {{glossary("Lossless compression", "可逆圧縮")}}
  - {{glossary("Lossy compression", "非可逆圧縮")}}
  - {{Glossary("Gzip compression", "Gzip 圧縮")}}
  - {{Glossary("Zstandard compression", "Zstandard 圧縮")}}
- [brotli.org](https://brotli.org/)
- [Brotli GitHub リポジトリー](https://github.com/google/brotli)
- [RFC 7932: Brotli Compressed Data Format](https://datatracker.ietf.org/doc/html/rfc7932)
- [Brotli](https://ja.wikipedia.org/wiki/Brotli) - ウィキペディア
- [Brotli - Caniuse](https://caniuse.com/#feat=brotli)
