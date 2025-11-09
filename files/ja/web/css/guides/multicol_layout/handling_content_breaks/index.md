---
title: 段組みにおけるコンテンツの分割の処理
short-title: コンテンツの分割の処理
slug: Web/CSS/Guides/Multicol_layout/Handling_content_breaks
original_slug: Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

段組みレイアウトでは、段ボックス間で、ページメディアのページ間と同様に内容が分割されます。どちらのコンテキストでも、 [CSS 断片化](/ja/docs/Web/CSS/Guides/Fragmentation)モジュールのプロパティを用いて、どのようにコンテンツを分割するかを制御します。このガイドでは、段組みで断片化がどのように動作するかを見てみます。

## 断片化の基本

CSS 断片化モジュールは、コンテンツが断片化コンテナー（またはフラグメンテナー）間でどのように分割されるかについて詳しく説明しています。一方、[段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)モジュールは、段内および段間で制御を行う {{cssxref("break-after")}}, {{cssxref("break-before")}}, {{cssxref("break-inside")}} プロパティを定義しています。段組みレイアウトでは、段ボックスは断片化コンテナーとなります。

段ボックスは他のマークアップを含むことができ、できれば分割したくない場所がたくさんあります。例えば、ふつうは画像のキャプションは参照する画像と別な段に分割されないほうが望ましく、見出しが段の最後にあるのも変です。断片化プロパティはこれをいくらか制御するための方法を提供します。

分割を制御する可能性がある場所には、様々なものがあります。

- ボックス内での分割。例えば、 figure 要素の内部など。
- ボックスの前後の分割。上記の見出しの例など。
- 行間の分割。

## ボックス内での分割

ボックス内での分割を制御するには、 {{cssxref("break-inside")}} プロパティを使用します。このプロパティは以下の値を取ります。

- `auto`
- `avoid`
- `avoid-page`
- `avoid-column`
- `avoid-region`

以下の例では、 break-inside を figure 要素に適用して、キャプションと画像が分割されることを防ぎます。

```html live-sample___break-inside
<div class="container">
  <figure>
    <img
      alt="Multiple hot air balloons in a clear sky, a crowd of spectators gather in the foreground."
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
    <figcaption>Balloons</figcaption>
  </figure>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
  </p>
</div>
```

```css live-sample___break-inside
body {
  font: 1.2em / 1.5 sans-serif;
}

img {
  max-width: 100%;
}
figure {
  margin: 0;
  break-inside: avoid;
}
figcaption {
  font-weight: bold;
  border-bottom: 2px solid #999;
}
.container {
  column-width: 200px;
}
```

{{EmbedLiveSample("break-inside", "", "230px")}}

## ボックスの前後の分割

{{cssxref("break-before")}} および {{cssxref("break-after")}} プロパティを使用して、要素の前後の分割を制御します。段組みのコンテキストでは、以下の値を取ります。

- auto
- avoid
- avoid-column
- column

次の例では、 `h2` 要素の前で強制的に改段しています。

```html live-sample___break-before
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon.
  </p>
  <h2>My heading</h2>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce.</p>
</div>
```

```css live-sample___break-before
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}

h2 {
  break-before: column;
}
```

{{EmbedLiveSample("break-before", "", "250px")}}

## 行間での分割

{{cssxref("orphans")}} および {{cssxref("widows")}} プロパティも便利です。 `orphans` プロパティは、断片の末尾に残る行数を制御します。 `widows` プロパティは、断片の先頭に残る行数を制御します。

`orphans` および `widows` プロパティは{{CSSXref("integer", "整数値")}}を取り、断片のそれぞれ末尾および先頭の行数に残す行数を表します。なお、これらのプロパティは段落などのブロックコンテナー内でのみ動作します。ブロックの行数が値で指定された数より少なかった場合、すべての行が一緒に保持されます。

以下の例では、 `orphans` プロパティを用いて段の末尾に残す行数を制御しています。値を変更すると、内容を分割する効果を確認できます。

```html live-sample___orphans
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce.</p>
</div>
```

```css live-sample___orphans
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
  orphans: 3;
}
```

{{EmbedLiveSample("orphans", "", "240px")}}

## 期待通りに動作しない場合

コンテンツの量が少なく、複数の要素の改行を制御しようとしている場合、コンテンツは必ずどこかで改行される必要があるので、意図したとおりの結果が常に得られるとは限りません。ある程度、断片化を使用することは、可能であればこの方法で改行を制御するよう、ブラウザーに提案することになります。意図した場所でコンテンツが改行されない場合、結果は乱雑になるかもしれませんが、コンテンツはユーザーに引き続き利用可能になります。
