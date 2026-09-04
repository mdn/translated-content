---
title: Leading (行送り)
slug: Glossary/Leading
l10n:
  sourceCommit: b6dacb9087010826a5a7d5b2d7c428e89d8135cf
---

{{GlossarySidebar}}

組版では、**行送り**は、行間の間隔を確保するために、テキストの上下に記載される空間の大きさです。過去には、物理的な組版では、この間隔を確保するために実際の[鉛片](https://ja.wikipedia.org/wiki/鉛)が使用されていました。

CSS では、組版における行送りは、コンテンツの高さと行の高さの差であり、通常は {{cssxref("line-height")}} プロパティで設定します。 `line-height` で設定された行送りは、行間の間隔を指定し、負の値も指定できます。この空間は、テキストの上と下に均等に分配され、**半行送り**と呼ばれています。

フォントの大文字のベースラインより上の領域は、上端と呼ばれます。{{glossary("/Baseline/Typography", "アルファベットベースライン")}}より下の領域は、下端と呼ばれます。同様に、行の上下の半行送りは、それぞれ上行送りおよび下行送りと呼ばれます。

半行送りは、テキスト要素のブロックコンテナーのブロックの先頭端およびブロックの末尾端から、 {{cssxref("text-box")}} プロパティを使用して切り取ることができます。

## 関連情報

- {{cssxref("line-height")}}
- {{cssxref("text-box")}}
- [CSS インラインレイアウト](/ja/docs/Web/CSS/Guides/Inline_layout)モジュール
- [鉛](https://ja.wikipedia.org/wiki/鉛) （ウィキペディア）
- [The Thing With Lead­ing in CSS](https://matthiasott.com/notes/the-thing-with-leading-in-css) (matthiasott.com, 2022)
