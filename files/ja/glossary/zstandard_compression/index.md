---
title: Zstandard 圧縮
slug: Glossary/Zstandard_compression
l10n:
  sourceCommit: 84673e170bd930bb92a0a271855e3d68b605e000
---

{{GlossarySidebar}}

**Zstandard** は、汎用の可逆圧縮アルゴリズムです。

Zstandard (略称: `zstd`) は、zlib レベル以上の圧縮率でのリアルタイム圧縮用途を対象とした、高速な可逆圧縮アルゴリズムです。[Huff0 and FSE ライブラリー](https://github.com/Cyan4973/FiniteStateEntropy) が提供する非常に高速なエントロピー処理段階によって支えられています。同等の CPU コストで {{glossary("Brotli_compression", "Brotli")}} よりも高い圧縮率を実現したり、同等の圧縮率でより低い CPU コストを実現したりすることがよくあります。

ブラウザーの対応状況については、[`Content-Encoding` のブラウザーの互換性](/ja/docs/Web/HTTP/Reference/Headers/Content-Encoding#browser_compatibility) を参照してください。

## 関連情報

- 関連する用語集の項目:
  - {{glossary("Lossless compression", "可逆圧縮")}}
  - {{glossary("Lossy compression", "非可逆圧縮")}}
  - {{glossary("Brotli compression", "Brotli 圧縮")}}
  - {{glossary("Gzip compression", "Gzip 圧縮")}}
- [Zstandard RFC](https://datatracker.ietf.org/doc/html/rfc8878)
- [Zstandard ホームページ](https://facebook.github.io/zstd/)
- [Zstandard GitHub リポジトリー](https://github.com/facebook/zstd)
- [ウィキペディアの Zstandard](https://en.wikipedia.org/wiki/Zstandard)
- [Can I use の Zstandard](https://caniuse.com/#feat=zstandard)
