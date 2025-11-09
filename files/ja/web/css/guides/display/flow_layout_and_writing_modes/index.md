---
title: フローレイアウトと書字方向
slug: Web/CSS/Guides/Display/Flow_layout_and_writing_modes
original_slug: Web/CSS/CSS_display/Flow_layout_and_writing_modes
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

通常フローの動きについて詳細を説明している CSS 2.1 仕様書は、横書きを想定しています。[レイアウト](/ja/docs/Web/CSS/Guides/Display/Block_and_inline_layout)プロパティは縦書きモードでも同様に動作するべきです。このガイドでは、異なる文書の書字方向が使われた場合のフローレイアウトの動作を見てみましょう。

これは CSS での書字方向の使用に関する包括的なガイドではなく、ここでの目的は、フローレイアウトと書字方向の起こりうる相互作用が予想できないような領域を文書化することです。この文書の[関連情報](#関連情報)の節で、書字方向に関するより多くのリソースを紹介します。

## 書字方向の仕様書

CSS Writing Modes Level 3 仕様書では、フローレイアウトで文書の書字方向が変更された時の影響を定義しています。[仕様書](https://drafts.csswg.org/css-writing-modes-3/#text-flow)の書字方向の導入部では、以下のように書かれています。

> "CSS の書字方向は {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} プロパティによって決められます。これは主にインラインベース方向とブロックフロー方向から決まります。"

仕様書では「インラインベース方向」を、行内でコンテンツが並べられる方向として定義しています。ここでは、インライン方向の先頭と末尾を定義しています。先頭は文が始まるところであり、末尾はテキストの行が終わり、新しい行への折り返しが始まる前です。

「ブロックフロー方向」は、段落などのボックスが、その書字方向で積み重なる方向です。 CSS の `writing-mode` プロパティは、ブロックフロー方向を制御します。ページまたはページの一部を `vertical-lr` に変更したい場合、要素に `writing-mode: vertical-lr` と設定し、これがブロックの方向を変更して、従ってインライン方向も同様に変更します。

特定の言語では書字方向やテキストの方向が使用されますが、これらの方向を創造的な効果として、例えば見出しを縦書きにするために使用することができます。

```html live-sample___creative-use
<div class="box">
  <h1>A heading</h1>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___creative-use
body {
  font: 1.2em sans-serif;
}
h1 {
  writing-mode: vertical-lr;
  float: left;
}
```

{{EmbedLiveSample("creative-use", "", "220px")}}

## ブロックフローの方向

{{cssxref("writing-mode")}} プロパティは `horizontal-tb`, `vertical-rl`, `vertical-lr` の値を受け入れます。これらの値はページのブロックフローの方向を制御します。初期値は `horizontal-tb` で、ブロックフロー方向は上から下で、インライン方向は横書きとなります。英語のような左書きの言語、アラビア語のような右書きの言語は、すべて `horizontal-tb` です。

以下の例は `horizontal-tb` を使用したブロックを示しています。

```html live-sample___horizontal-tb
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___horizontal-tb
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: horizontal-tb;
}
```

{{EmbedLiveSample("horizontal-tb", "", "240px")}}

`vertical-rl` の値は、次の例に見られるように、ブロックフロー方向は右から左で、インライン方向は縦書きになります。

```html hidden live-sample___vertical-rl
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___vertical-rl
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("vertical-rl", "", "300px")}}

最後の例では `writing-mode` の第三の値である `vertical-lr` を紹介します。ブロックフロー方向は左から右で、インライン方向は縦書きになります。

```html hidden live-sample___vertical-lr
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___vertical-lr
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-lr;
}
```

{{EmbedLiveSample("vertical-lr", "", "300px")}}

## 書字方向が親と異なるボックス

親とは書字方向が異なる内部のボックスを作成した場合、インラインレベルボックスは `display: inline-block` であるかのように表示されます。

```html live-sample___inline-change-mode
<div class="box">
  <p>
    One <span>November</span> night in the year 1782, so the story runs, two
    brothers sat over their winter fire in the little French town of Annonay,
    watching the grey smoke-wreaths from the hearth curl up the wide chimney.
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___inline-change-mode
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-rl;
}
.box span {
  writing-mode: horizontal-tb;
  padding: 10px;
  border: 1px solid rebeccapurple;
}
```

{{EmbedLiveSample("inline-change-mode", "", "240px")}}

ブロックレベルボックスは新しいブロック整形コンテキストを生成し、つまり内部の display 種別が `flow` であれば、 display 種別の計算値は `flow-root` になります。次の例では、親が新しいブロック整形コンテキストを確立するため、 `horizontal-tb` で表示される浮動ボックスを含むボックスがどこに表示されるかを確認できます。

```html live-sample___block-change-mode
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>

  <div>
    <div class="float"></div>
    This box should establish a new BFC.
  </div>

  <p>
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___block-change-mode
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-rl;
}
.box > div {
  writing-mode: horizontal-tb;
  padding: 10px;
  border: 1px solid rebeccapurple;
}
.float {
  width: 100px;
  height: 150px;
  background-color: rebeccapurple;
  float: left;
}
```

{{EmbedLiveSample("block-change-mode", "", "500px")}}

## 置換要素

画像などの置換要素は、 `writing-mode` プロパティによって方向が変更されません。しかし、テキストを含むフォームコントロールのような置換要素は、使用中の書字方向に一致するでしょう。

```html live-sample___replaced
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>

  <img
    alt="a colorful hot air balloon against a clear sky"
    src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />

  <p>
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
</div>
```

```css live-sample___replaced
body {
  font: 1.2em sans-serif;
}
.box {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("replaced", "", "340px")}}

## 論理的プロパティと値

書字方向を `horizontal-tb` 以外にして作業をすると、画面の物理的な寸法に合わせられた多くのプロパティと値はおかしく見えます。例えば、 `horizontal-tb` の中でボックスの幅を 100px に設定すると、インライン方向の寸法を制御することになります。 `vertical-lr` では、ブロック方向の寸法を制御することになり、テキストに合わせて回転するわけではありません。

```html live-sample___width
<div class="box">
  <div class="box1">ボックス１</div>
  <div class="box2">ボックス２</div>
</div>
```

```css live-sample___width
body {
  font: 1.2em sans-serif;
}
.box1 {
  writing-mode: horizontal-tb;
  border: 5px solid rebeccapurple;
  width: 100px;
  margin: 10px;
}
.box2 {
  writing-mode: vertical-lr;
  border: 5px solid rebeccapurple;
  width: 100px;
  margin: 10px;
}
```

{{EmbedLiveSample("width")}}

従って、新しいプロパティ {{cssxref("block-size")}} および {{cssxref("inline-size")}} ができました。ブロックの `inline-size` を 100px に設定すると、書字方向が横書きか縦書きかに関わらず、 `inline-size` は常にインライン方向の寸法を意味します。

```html live-sample___inline-size
<div class="box">
  <div class="box1">ボックス１</div>
  <div class="box2">ボックス２</div>
</div>
```

```css live-sample___inline-size
body {
  font: 1.2em sans-serif;
}
.box1 {
  writing-mode: horizontal-tb;
  border: 5px solid rebeccapurple;
  inline-size: 100px;
  margin: 10px;
}
.box2 {
  writing-mode: vertical-lr;
  border: 5px solid rebeccapurple;
  inline-size: 100px;
  margin: 10px;
}
```

{{EmbedLiveSample("inline-size", "", "200px")}}

[CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)の仕様書は、マージン、パディング、境界の制御や、その他の通常は物理的な方向を使用して指定するものの論理バージョンのプロパティを含んでいます。

## まとめ

多くの場合、フローレイアウトは文書や文書の一部の書字方向を変更したときに、期待通りに動作するでしょう。これはふつう、縦書きの言語や創造的な理由で使用することができます。 CSS は論理的プロパティと値を導入することで、縦書き時にインラインやブロック方向に基づいて寸法を決めやすくしています。これはどの書字方向でも動作するコンポーネントを作成するのに便利です。

## 関連情報

- [書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)
- [Writing modes and CSS layout](https://www.smashingmagazine.com/2019/08/writing-modes-layout/) - Smashing Magazine (2019)
- [CSS writing modes](https://24ways.org/2016/css-writing-modes/) - 24ways.org (2016)
