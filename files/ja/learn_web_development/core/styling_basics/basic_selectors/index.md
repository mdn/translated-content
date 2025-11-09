---
title: 基本的な CSS セレクター
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

{{Glossary("CSS")}} において、スタイル設定したいウェブページ上の {{glossary("HTML")}} 要素を対象とするためにセレクターを使用する方法については、すでに説明しました。 CSS セレクターにはさまざまな種類があり、スタイル設定する要素を選択する際にきめ細かい精度を実現できます。次のいくつかの記事では、さまざまなタイプについて詳しく見ていきます。この記事では、基本的なタイプ、クラスおよび ID セレクター、セレクターリストなど、セレクターの基本についておさらいします。また、全称セレクターについても紹介します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の基本（
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本的な HTML の構文</a
        >を学んでいること）。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>基本的なセレクター型（要素型、クラス、ID）。</li>
          <li>ID は文書内の固有であるため、特定の要素を 1 つ選択するには ID を使用すべきであることを理解すること。</li>
          <li>それぞれの要素に複数のクラスを指定することができ、必要に応じてスタイルのレイヤーとして使用することができること。</li>
          <li>セレクターリスト。</li>
          <li>全称セレクター。</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## セレクターとは

CSS セレクターは、CSS ルール (CSS Rule) の最初の部分です。CSS セレクターは要素やその他の用語の組み合わせで、どの HTML 要素を選択するかブラウザーに伝えます。選択された要素には CSS プロパティ値 (property value) が適用されます。セレクターによって選択された要素を、_選択対象_ (_subject of the selector_) と呼びます。

![多少のコードで、 h1 が強調されている。](selector.png)

以前の記事で、様々なセレクターに出会い、様々な方法で文書を対象とするセレクターがあることを知ることができたと思います。例えば、`h1` は HTML 要素で選択する一方 `.special` はクラスで選択します。

## 要素型セレクター

**要素型セレクター**は、文書内の HTML のタグや要素を選択するものであるため、タグ名セレクターまたは要素セレクターと呼ばれることもあります。例えば、下記では `span`、`em`、`strong` セレクターを使用しています。

CSS ルールを追加して、 `<h1>` 要素を選択し、その色を青に変更してみましょう。

```html live-sample___type
<h1>要素型セレクター</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki
  bean garlic.
</p>

<p>
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>

<p>
  Turnip greens yarrow ricebean rutabaga <em>endive cauliflower</em> sea lettuce
  kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
  purslane kale. Celery potato scallion desert raisin horseradish spinach
</p>
```

```css live-sample___type
body {
  font-family: sans-serif;
}

span {
  background-color: yellow;
}

strong {
  color: rebeccapurple;
}

em {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("type", "", "280px")}}

## クラスセレクター

クラスセレクターは大文字と小文字を区別し、ドット (`.`) 文字で始まります。文書内でそのクラスが適用されているすべての要素が選択されます。次のライブサンプルでは、 `highlight` というクラスを作成し、それを文書のいくつかの場所に適用しています。このクラスが適用されているすべての要素が強調表示されています。

```html live-sample___class
<h1 class="highlight">クラスセレクター</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span class="highlight">kohlrabi welsh onion</span> daikon amaranth tatsoi
  tomatillo melon azuki bean garlic.
</p>

<p class="highlight">
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
```

```css live-sample___class
body {
  font-family: sans-serif;
}

.highlight {
  background-color: yellow;
}
```

{{EmbedLiveSample("class", "", "220px")}}

### 特定の要素についたクラスを対象にする

クラスが適用された特定の要素を対象とするセレクターを作成することができます。例えば、次の例では、 `<span>` のうちクラス名が `highlight` であるものを、 `<h1>` 見出しでクラス名が `highlight` であるものとは異なる形で強調表示します。 対象とする要素型セレクターを使用し、クラス名の間にホワイトスペースを入れずにドットでつなげます。

```html live-sample___class-type
<h1 class="highlight">クラスセレクター</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span class="highlight">kohlrabi welsh onion</span> daikon amaranth tatsoi
  tomatillo melon azuki bean garlic.
</p>

<p class="highlight">
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
```

```css live-sample___class-type
body {
  font-family: sans-serif;
}

span.highlight {
  background-color: yellow;
}

h1.highlight {
  background-color: pink;
}
```

{{EmbedLiveSample("class-type", "", "200px")}}

この手法はルールの適用範囲を縮小します。ルールは、その具体的な要素とクラスとの組み合わせにのみ適用されます。ルールを他の要素にも適用したい場合は、別のセレクターを追加する必要があります。

### 要素に複数のクラスが適用されていた時の対象

要素に複数のクラスを適用し、それらを個別に対象にすることも、セレクター内のクラスがすべて存在する場合に要素だけを選択することもできます。これは、サイト上でさまざまな方法で結合できる部分を構築する際に役立つでしょう。

次の例では、メモを含む `<div>` があります。ボックスに `notebox` クラスが設定されている場合、灰色の境界線が適用されます。ボックスに `warning` または `danger` クラスが設定されている場合は、 {{cssxref("border-color")}} を変更します。

2 つのクラスがホワイトスペースなしで連結されている場合、要素が一致するようにブラウザーに指示することができます。最後の `<div>` には `danger` クラスしかないため、スタイル設定が適用されないことがお分かりいただけるでしょう。何らかのスタイル設定を取得するには、 `notebox` も必要です。

```html live-sample___class-many
<div class="notebox">これは情報のメモです。</div>

<div class="notebox warning">このメモは警告を表します。</div>

<div class="notebox danger">このメモは危険であることを表します。</div>

<div class="danger">
  これはスタイル設定されません。また、 notebox クラスを持つ必要があります。
</div>
```

```css live-sample___class-many
body {
  font-family: sans-serif;
}

.notebox {
  border: 4px solid #666;
  padding: 0.5em;
  margin: 0.5em;
}

.notebox.warning {
  border-color: orange;
  font-weight: bold;
}

.notebox.danger {
  border-color: red;
  font-weight: bold;
}
```

{{EmbedLiveSample("class-many", "", "200px")}}

## ID セレクター

ID セレクターは大文字と小文字を区別し、ドット文字の代わりに `#` で始めますが、クラスセレクターと同じ方法で使用します。 ID はページごとに 1 度しか使用することができず、要素には 1 つしか `id` 値を適用できないという違いがあります。 ID は `id` を持つ要素を選択することができ、要素と ID が一致する場合にのみ要素をターゲットとするために、要素型セレクターを ID の前に置くことができます。次の例では、どちらの使用方法も見ることができます。

```html live-sample___id
<h1 id="heading">ID セレクター</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic.
</p>

<p id="one">
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
```

```css live-sample___id
body {
  font-family: sans-serif;
}

#one {
  background-color: yellow;
}

h1#heading {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("id", "", "200px")}}

> [!WARNING]
> 文書内で同じ ID を複数回使用すると、スタイル設定の目的では動作しているように見えるかもしれませんが、これは行わないでください。これは不正なコードとなり、多くの場所で奇妙な動作を引き起こすことになります。

## セレクターリスト

同じ CSS を使用する場合は、それぞれのセレクターを _セレクターリスト_ (_selector list_) にまとめてルールを適用できます。たとえば、`h1` と `.special` の CSS が同じ場合、2 つの個別のルールとして記述できます。

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

カンマ区切りでセレクターリストにもできます。

```css-nolint
h1, .special {
  color: blue;
}
```

カンマの前後にホワイトスペースを入れることもできます。改行したほうが読みやすいかもしれません。

```css
h1,
.special {
  color: blue;
}
```

以下のライブサンプルを使って、同じ宣言を持つ 2 つのセレクターを結合してみてください。作業の前後で見た目が変わらないはずです。

```html live-sample___selector-list
<h1>要素型セレクター</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki
  bean garlic.
</p>

<p>
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>

<p>
  Turnip greens yarrow ricebean rutabaga <em>endive cauliflower</em> sea lettuce
  kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
  purslane kale. Celery potato scallion desert raisin horseradish spinach
</p>
```

```css live-sample___selector-list
body {
  font-family: sans-serif;
}
span {
  background-color: yellow;
}

strong {
  color: rebeccapurple;
}

em {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("selector-list", "", "280px")}}

この方法でセレクターをまとめた場合、間違った構文で書かれたセレクターを 1 つでも含んでいると、ルール全体が無視されます。

次の例では、不正なクラスセレクターのルールは無視され、 `h1` がスタイル設定されます。

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

しかし、結合された場合、 `h1` もクラスもスタイル設定されず、ルール全体が不正なものとみなされます。

```css-nolint
h1, ..special {
  color: blue;
}
```

## 全称セレクター

全称セレクター (universal selector) はアスタリスク (`*`) で示します。これは文書内のすべての要素を選択します。 `*` が[子孫結合子](/ja/docs/Web/CSS/Reference/Selectors/Descendant_combinator)を使用して連結されている場合、その祖先要素内のすべてが選択されます。例えば、 `p *` は `<p>` 要素内のすべての子要素を選択します。

次の例では、全称セレクターを使用してすべての要素のマージンを削除します。 見出しや段落にマージンを設けて間隔を空けるブラウザーの既定のスタイルではなく、すべてが密接に配置されます。

```html live-sample___universal
<h1>全称セレクター</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki
  bean garlic.
</p>

<p>
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
```

```css live-sample___universal
body {
  font-family: sans-serif;
}

* {
  margin: 0;
}
```

{{EmbedLiveSample("universal")}}

この種の動作は、ブラウザーのスタイル設定をすべて削除する「リセットスタイルシート」で時折見られます。全称セレクターはグローバルな変更を行うため、下記に記述されているような特定の状況でのみ使用しています。

### 全称セレクターを使用して、セレクターを読みやすくする

全称セレクターの用途のひとつは、セレクターを読みやすく、また、何を行っているのかをより明確にすることです。例えば、記事 `<article>` 要素の子孫要素で、親の最初の子であるものすべてを選択し、太字にしたい場合、 {{cssxref(":first-child")}} 擬似クラスを使用することができます。この点については、[擬似クラスと擬似要素](/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)のレッスンで詳しく説明します。

```css
article :first-child {
  font-weight: bold;
}
```

しかし、この記事のセレクターは `article:first-child`、すうなわち他の要素の最初の子であるすべての `<article>` 要素を選択するセレクターと混同される可能性があります。

この混乱を避けるために、全称セレクターを `:first-child` 擬似クラスに追加すると、セレクターが何をしているのかがより明確になるようにします。これは、 `<article>` 要素の最初の子である、または `<article>` の任意の子孫要素の最初の子である、任意の要素を選択します。

```css
article *:first-child {
  font-weight: bold;
}
```

どちらも同じことをしていますが、読みやすさが大幅に改善されています。

## まとめ

この記事では、前回よりも少し掘り下げて、型、クラス、 ID セレクターに注目しながら、具体的な HTML 要素を対象とするための CSS セレクターについてまとめました。次の記事では、属性セレクターについて掘り下げていきます。

> [!NOTE]
> セレクターの完全なリストについては、 [CSS セレクターリファレンス](/ja/docs/Web/CSS/Guides/Selectors)を参照してください。

## 関連情報

- [CSS classes](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>_MDN カリキュラムパートナー_</sup>
  - : 対話型レッスンであり、 CSS クラスに関するいくつかのガイダンスを提供します。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
