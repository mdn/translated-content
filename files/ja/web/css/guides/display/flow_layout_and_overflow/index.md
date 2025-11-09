---
title: フローレイアウトとオーバーフロー
slug: Web/CSS/Guides/Display/Flow_layout_and_overflow
original_slug: Web/CSS/CSS_display/Flow_layout_and_overflow
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

コンテナーに収まりきらないコンテンツがある場合、オーバーフローが発生します。 CSSでサイズが制約される要素を扱う際には、オーバーフローの動作を理解することが重要です。 このガイドでは、通常のフローで作業する場合のオーバーフローの動作について説明します。
HTML はそれぞれの例で同じであるため、最初の節では表示していますが、他の節では簡潔にするために非表示にしています。

## オーバーフローとは

要素に固定された高さおよび幅を指定し、そのボックスに重要なコンテンツを追加することで、基本的なオーバーフローの例を作成します。

```html live-sample___overflow
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
</div>
<p>
  Their names were Stephen and Joseph Montgolfier. They were papermakers by
  trade, and were noted as possessing thoughtful minds and a deep interest in
  all scientific knowledge and new discovery.
</p>
<p>
  Before that night—a memorable night, as it was to prove—hundreds of millions
  of people had watched the rising smoke-wreaths of their fires without drawing
  any special inspiration from the fact.
</p>
```

```css live-sample___overflow
body {
  font: 1.2em / 1.5 sans-serif;
}

.box {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
}
```

{{EmbedLiveSample("overflow", "", "370px")}}

コンテンツがボックスに入ります。ボックスがいっぱいになると、ボックスからあふれ出し、ボックスの外にコンテンツが表示され、場合によっては、その下のコンテンツの下にも表示されます。オーバーフローの動作を制御するのは [`overflow`](/ja/docs/Web/CSS/Reference/Properties/overflow) プロパティであり、初期値は `visible` です。これが、あふれたコンテンツが見える理由です。

## オーバーフローの制御

あふれたコンテンツの動作を制御する他の値もあります。あふれたコンテンツを非表示にするには、`hidden` の値を使用します。これによって、コンテンツの一部が表示されなくなる場合があります。

```html hidden live-sample___hidden
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
</div>
<p>
  Their names were Stephen and Joseph Montgolfier. They were papermakers by
  trade, and were noted as possessing thoughtful minds and a deep interest in
  all scientific knowledge and new discovery.
</p>
<p>
  Before that night—a memorable night, as it was to prove—hundreds of millions
  of people had watched the rising smoke-wreaths of their fires without drawing
  any special inspiration from the fact.
</p>
```

```css live-sample___hidden
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
  overflow: hidden;
}
```

{{EmbedLiveSample("hidden", "", "370px")}}

`scroll` の値を使用すると、コンテンツがボックス内に収められ、スクロールバーが追加されて表示できるようになります。コンテンツがボックス内に収まる場合でも、スクロールバーは追加されます。

```html hidden live-sample___scroll
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
</div>
<p>
  Their names were Stephen and Joseph Montgolfier; they were papermakers by
  trade and were noted as possessing thoughtful minds and a deep interest in all
  scientific knowledge and new discoveries.
</p>
<p>
  Before that night—a memorable night, as it was to prove—hundreds of millions
  of people had watched the rising smoke-wreaths of their fires without drawing
  any special inspiration from the fact.
</p>
```

```css live-sample___scroll
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
  overflow: scroll;
}
```

{{EmbedLiveSample("scroll", "", "370px")}}

`auto` の値を使用すると、コンテンツがボックス内に収まる場合は、スクロールバーなしでコンテンツが表示されます。収まらない場合は、スクロールバーが追加されます。次の例を比較すると、上記の `overflow: scroll` の例では、縦方向のスクロールのみが必要であっても、水平および垂直のスクロールバーが現れていることが分かるでしょう。下記の `auto` の例では、スクロールが必要な方向にのみスクロールバーが現れます。

```html hidden live-sample___auto
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
</div>
<p>
  Their names were Stephen and Joseph Montgolfier, they were papermakers by
  trade, and were noted as possessing thoughtful minds and a deep interest in
  all scientific knowledge and new discovery.
</p>
<p>
  Before that night—a memorable night, as it was to prove—hundreds of millions
  of people had watched the rising smoke-wreaths of their fires without drawing
  any special inspiration from the fact.
</p>
```

```css live-sample___auto
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
  overflow: auto;
}
```

{{EmbedLiveSample("auto", "", "370px")}}

すでに学んだように、 `visible` という既定値以外のいずれかの値を使用すると、新しい[ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)が作成されます。

> [!NOTE]
> [オーバーフローレベル 3](https://www.w3.org/TR/css-overflow-3/) の草案では、 `overflow: clip` という追加の値があります。これは `overflow: hidden` のような動作をしますが、プログラムによるスクロールは許可されず、ボックスはスクロール不可能になります。さらに、ブロック整形コンテキストも作成されません。

`overflow` プロパティは、実際には [`overflow-x`](/ja/docs/Web/CSS/Reference/Properties/overflow-x) および [`overflow-y`](/ja/docs/Web/CSS/Reference/Properties/overflow-y) プロパティの一括指定です。 overflow に 1 つの値のみを指定した場合、この値は両方の軸に使用されます。しかし、どちらの値も指定することができます。その場合、最初の値は `overflow-x` （つまり水平方向）に使用され、 2 番目の値は `overflow-y` （つまり垂直方向）に使用されます。例えば、下記では `overflow-y: scroll` のみを指定しています。そのため、不要な水平スクロールバーは表示されません。

```html hidden live-sample___overflow-y
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>
</div>
<p>
  Their names were Stephen and Joseph Montgolfier, they were papermakers by
  trade, and were noted as possessing thoughtful minds and a deep interest in
  all scientific knowledge and new discovery.
</p>
<p>
  Before that night—a memorable night, as it was to prove—hundreds of millions
  of people had watched the rising smoke-wreaths of their fires without drawing
  any special inspiration from the fact.
</p>
```

```css live-sample___overflow-y
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
  overflow-y: scroll;
}
```

{{EmbedLiveSample("overflow-y", "", "370px")}}

## フローに相対的なプロパティ

[書字方向とフローレイアウト](/ja/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)のガイドでは、 `block-size` と `inline-size` のプロパティについて説明しました。これらは、画面の物理的な寸法にレイアウトを合わせるよりも、さまざまな書字方向で作業する際に意味をなすものです。 [CSS オーバーフローモジュール](/ja/docs/Web/CSS/Guides/Overflow)には、 overflow 用のフロー相対プロパティとして、 [`overflow-block`](/ja/docs/Web/CSS/Reference/At-rules/@media/overflow-block) と [`overflow-inline`](/ja/docs/Web/CSS/Reference/At-rules/@media/overflow-inline) も含んでいます。これらは、 `overflow-x` と `overflow-y` に対応しますが、対応付けは文書内の書字方向によって異なります。

## オーバーフローの指示

CSS オーバーフローモジュールには、あふれたコンテンツの見た目を改善するために役立つプロパティがいくつかあります。

### インライン軸のオーバーフロー

[`text-overflow`](/ja/docs/Web/CSS/Reference/Properties/text-overflow) プロパティは、インライン方向におけるテキストのオーバーフローを扱います。これは 2 つの値のうちの 1 つに `clip` があると、コンテンツがあふれたときにコンテンツが切り取られます。これが既定値であり、既定の動作です。また、 `ellipsis` という値もあり、これは省略記号を表示します。省略記号は、使用する言語や書字方向に適した別の文字に置き換えることができます。

```html hidden live-sample___text-overflow
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney.
  </p>

  <p>
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___text-overflow
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  width: 300px;
  border: 5px solid rebeccapurple;
  padding: 10px;
}

.box p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
```

{{EmbedLiveSample("text-overflow", "", "220px")}}

### ブロック軸のオーバーフロー

[オーバーフローレベル 3](https://www.w3.org/TR/css-overflow-3/) の仕様書では、 `block-ellipsis` プロパティが追加されました（[以前は `block-overflow` と呼ばれていました](https://github.com/w3c/csswg-drafts/commit/20b15b4d66b0fdfa8406f1ce28604128f02ee7bb)）。このプロパティにより、ブロック方向にテキストがオーバーフローした場合に、省略記号（またはカスタム文字列）を追加することができますが、執筆時点ではこのプロパティに対応しているブラウザーはありません。

例えば、記事の一覧があり、その一覧をテキストの量が制限された固定の高さのボックスに表示する場合に役立ちます。ボックスやタイトルをクリックすると、さらにコンテンツがあることが、読者にはわかりにくい場合が考えられます。省略記号は、さらにコンテンツがあることを明確に示します。この仕様では、コンテンツの文字列または通常の省略記号を挿入することができます。

## まとめ

ウェブ上の連続メディアでも、印刷や EPUB などのページメディア形式でも、コンテンツがどのようにあふれるのかを理解することは、どのようなレイアウトメソッドを扱う場合にも役立ちます。通常のフローでオーバーフローがどのように動作するのかを理解することで、グリッドやフレックスボックスなどのレイアウトメソッドでコンテンツがあふれた場合の影響を理解しやすくなります。

## 関連情報

- [コンテンツのオーバーフロー](/ja/docs/Learn_web_development/Core/Styling_basics/Overflow)ガイド
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS コンテナー](/ja/docs/Web/CSS/Guides/Containment)モジュール
