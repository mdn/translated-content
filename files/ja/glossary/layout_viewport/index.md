---
title: Layout viewport (レイアウトビューポート)
slug: Glossary/Layout_viewport
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

**レイアウトビューポート**は、ブラウザーがウェブページを描画する{{glossary("viewport", "ビューポート")}}のことです。基本的に、これは利用できる領域を表すのに対し、{{Glossary("visual viewport", "視覚的ビューポート")}}は、レイアウトビューポートのうち、ユーザーの端末上で現在表示されている部分、つまりレイアウトビューポートの現在表示されている領域を表します。

これは、例えばモバイル端末において重要になります。モバイル端末では通常、ピンチジェスチャーを使用してサイトのコンテンツを拡大・縮小することができます。レンダリングされた文書自体には何の変化も生じないため、ユーザーがズームレベルを調整しても、レイアウトビューポートは変わりません。代わりに、視覚的ビューポートが更新され、ユーザーが閲覧できるページの領域が示されます。

## 関連情報

- {{glossary("Viewport", "ビューポート")}}
- {{Glossary("Visual viewport", "視覚的ビューポート")}}
- [ビューポートの概念](/ja/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [CSSOM ビュー](/ja/docs/Web/CSS/Guides/CSSOM_view)モジュール
- [CSSOM ビュー API](/ja/docs/Web/API/CSSOM_view_API)
- [Viewport](https://en.wikipedia.org/wiki/Viewport) - Wikipedia
- [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html) (Quirksmode)
