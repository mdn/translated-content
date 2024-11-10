---
title: 見出しの直後に来た段落を強調表示するには
slug: Learn/CSS/Howto/Highlight_para_after_h1
l10n:
  sourceCommit: bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{LearnSidebar}}

このガイドでは、見出しの直後にある段落を強調表示する方法を紹介します。

## 見出しの後にある最初の段落のスタイル設定

よくあるパターンは、記事の最初の段落と、その後に続く段落を異なる形でスタイル設定することです。通常、この最初の段落は見出しの直後に来るので、もしこのようなデザインにするならば、その段落を対象とするためにその要素の組み合わせを使用することができます。

## 次兄弟結合子

CSS の [CSS セレクター](/ja/docs/Web/CSS/CSS_selectors) のグループには、複数のセレクターを組み合わせて選択することから**結合子**と呼ばれるものが存在します。この例では、[次兄弟結合子](/ja/docs/Web/CSS/Next-sibling_combinator)を使用することにします。この結合子は、ある要素が他の要素の隣にあることを基準に選択します。HTML は {{htmlelement("Heading_Elements", "h1")}} の後に {{htmlelement("p")}} が続いています。`<p>` は `<h1>` の隣接する兄弟要素なので、`h1 + p` で選択することができます。

{{EmbedGHLiveSample("css-examples/howto/highlight_h1_plus_para.html", '100%', 800)}}

## 関連情報

- [CSS の学習: セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)
- [CSS の学習: 結合子](/ja/docs/Learn/CSS/Building_blocks/Selectors/Combinators)
