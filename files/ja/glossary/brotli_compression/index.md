---
title: Brotli
slug: Glossary/Brotli_compression
l10n:
  sourceCommit: a0e987d407b31560bde1f982520ee10103db4ba0
---

**Brotli** は、汎用の可逆圧縮アルゴリズムです。

LZ77 アルゴリズムのモダンバリアント、ハフマン符号、2 次コンテキストモデリングの組み合わせを使用してデータを圧縮し、現在利用可能な最良の汎用圧縮方法に匹敵する圧縮率を提供します。Brotli は {{glossary("GZip_compression", "gzip")}} よりも優れた圧縮率を提供し、展開速度は同等ですが、 brotli 圧縮は Gzip 圧縮よりも処理が遅いため、{{glossary("Cache", "キャッシュできない")}}コンテンツの圧縮には gzip の方が適している場合があります。

Brotli は最新のほとんどのブラウザーと互換性がありますが、フォールバックを検討することをお勧めします。

## 関連項目

- [brotli.org](https://brotli.org/)
- [Brotli GitHub リポジトリー](https://github.com/google/brotli)
- Wikipedia の [Brotli](https://ja.wikipedia.org/wiki/Brotli)
- [Brotli on Caniuse](https://caniuse.com/#feat=brotli)
