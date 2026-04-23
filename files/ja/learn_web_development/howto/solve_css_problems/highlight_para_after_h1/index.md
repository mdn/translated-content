---
title: 見出しの直後に来た段落を強調表示するには
slug: Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

このガイドでは、見出しの直後にある段落を強調表示する方法を紹介します。

## 見出しの後にある最初の段落のスタイル設定

よくあるパターンは、記事の最初の段落と、その後に続く段落を異なる形でスタイル設定することです。通常、この最初の段落は見出しの直後に来るので、もしこのようなデザインにするならば、その段落を対象とするためにその要素の組み合わせを使用することができます。

## 次兄弟結合子

CSS の [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors) のグループには、複数のセレクターを組み合わせて選択することから**結合子**と呼ばれるものが存在します。この例では、[次兄弟結合子](/ja/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)を使用することにします。この結合子は、ある要素が他の要素の隣にあることを基準に選択します。HTML は {{htmlelement("Heading_Elements", "h1")}} の後に {{htmlelement("p")}} が続いています。`<p>` は `<h1>` の隣接する兄弟要素なので、`h1 + p` で選択することができます。

```html live-sample___highlight_h1_plus_para
<div class="wrapper">
  <h1>A heading</h1>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___highlight_h1_plus_para
.wrapper h1 + p {
  font-weight: bold;
  font-size: 130%;
  color: rebeccapurple;
}
```

{{EmbedLiveSample("highlight_h1_plus_para", "", "220px")}}

## 関連情報

- [CSS の学習: セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
- [CSS の学習: 結合子](/ja/docs/Learn_web_development/Core/Styling_basics/Combinators)
