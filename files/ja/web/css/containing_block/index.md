---
title: レイアウトと包含ブロック
slug: Web/CSS/Containing_block
---

{{CSSRef}}

要素の寸法や位置は、しばしば**包含ブロック** (containing block) に影響されます。多くの場合、包含ブロックは要素から見て直近の[ブロックレベル](/ja/docs/Web/HTML/Block-level_elements)の祖先の[コンテンツ領域](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area)ですが、常にそうとは限りません。この記事では、要素の包含ブロックが決まる要因を学びます。

ユーザーエージェント (ブラウザーなど) が文書をレイアウトする時、それぞれの要素にボックスを生成します。それぞれのボックスは４つの領域に分かれます。

1. コンテンツ領域
2. パディング領域
3. 境界領域
4. マージン領域

![ボックスモデルの図](box-model.png)

多くの開発者が、要素の包含ブロックは常に親要素のコンテンツ領域であると信じていますが、それは必ずしも正しくありません。要素の包含ブロックが何になるかを決定する要因を調べてみましょう。

## 包含ブロックの影響

何が要素の包含ブロックを決定するかを学習する前に、最初になぜそのようなことが起こるのかを知っておくと役立ちます。

要素の寸法と位置は、しばしば包含ブロックに影響されます。 {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} に適用されるパーセント値や、絶対位置指定要素 (つまり、 {{cssxref("position")}} が `absolute` または `fixed` に設定されている要素) のオフセットプロパティは、要素の包含ブロックから計算されます。

## 包含ブロックの識別

包含ブロックを識別するプロセスは、要素の {{cssxref("position")}} プロパティの値に全面的に依存します。

1. `position` プロパティが **`static`**, **`relative`**, **`sticky`** のいずれかの場合、包含ブロックは**ブロックコンテナー** (inline-block, block, list-item などの要素) または**整形コンテキストを確立する**要素 (表コンテナー、フレックスコンテナー、グリッドコンテナー、ブロックコンテナー自身など) である直近の祖先要素の<em>コンテンツボックス</em>の辺によって構成されます。
2. `position` プロパティが **`absolute`** の場合、包含ブロックは `position` の値が `static` 以外 (`fixed`, `absolute`, `relative`, `sticky`) の直近の祖先要素における<em>パディングボックス</em>の辺によって構成されます。
3. `position` プロパティが **`fixed`** の場合、包含ブロックは{{glossary("viewport", "ビューポート")}} (連続的なメディアの場合) またはページ領域 (ページメディアの場合) によって確立されます。
4. `position` プロパティが **`absolute`** または **`fixed`** の場合、包含ブロックは以下の条件を持った直近の祖先要素における<em>パディングボックス</em>の辺によって構成されることがあります。

   1. {{cssxref("transform")}} または {{cssxref("perspective")}} の値が `none` 以外である
   2. {{cssxref("will-change")}} の値が `transform` または `perspective` である
   3. {{cssxref("filter")}} の値が `none` 以外、または `will-change` の値が `filter` の場合 (Firefox のみで動作)。
   4. {{cssxref("contain")}} の値が `paint` の場合 (例 `contain: paint;`)

> **メモ:** ルート要素 ({{HTMLElement("html")}}) が包含ブロックである場合、**初期包含ブロック**と呼ばれる矩形になります。これはビューポート (連続的なメディアの場合) またはページ領域 (ページメディアの場合) の寸法を持ちます。

## 包含ブロックからのパーセント値の計算

前述の通り、特定のプロパティがパーセント値を与えられた場合、計算値は要素の包含ブロックに依存します。このように動するプロパティは**ボックスモデルプロパティ**及び**オフセットプロパティ**です。

1. {{cssxref("height")}}, {{cssxref("top")}}, {{cssxref("bottom")}} の各プロパティは、包含ブロックの `height` からパーセント値を計算します。
2. {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}}, {{cssxref("margin")}} の各プロパティは、包含ブロックの `width` からパーセント値を計算します。

## いくつかの例

すべての例の HTML コードは以下の通りです。

```html
<body>
  <section>
    <p>これは段落です。</p>
  </section>
</body>
```

以下のそれぞれの例では、 CSS のみが異なります。`

### 例 1

この例では、段落が静的に配置されているため、包含ブロックはブロックコンテナーである直近の祖先である {{HTMLElement("section")}} になります。

```html hidden
<body>
  <section>
    <p>これは段落です。</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  display: block;
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  width: 50%; /* == 400px * .5 = 200px */
  height: 25%; /* == 160px * .25 = 40px */
  margin: 5%; /* == 400px * .05 = 20px */
  padding: 5%; /* == 400px * .05 = 20px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_1','100%','300')}}

### 例 2

この例では、段落の包含ブロックは {{HTMLElement("body")}} 要素になります。 `<section>` が (`display: inline` であるため) ブロックコンテナーではなく、整形コンテキストを確立しないからです。

```html hidden
<body>
  <section>
    <p>これは段落です。</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  display: inline;
  background: lightgray;
}

p {
  width: 50%; /* == half the body's width */
  height: 200px; /* Note: a percentage would be 0 */
  background: cyan;
}
```

{{EmbedLiveSample('Example_2','100%','300')}}

### 例 3

この例では、 `<section>` の `position` が `absolute` であるため、段落の包含ブロックは `<section>` になります。段落のパーセント値は、包含ブロックの `padding` に影響されますが、 {{cssxref("box-sizing")}} の値が `border-box` である場合はそのようにはなりません。

```html hidden
<body>
  <section>
    <p>これは段落です。</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 400px;
  height: 160px;
  padding: 30px 20px;
  background: lightgray;
}

p {
  position: absolute;
  width: 50%; /* == (400px + 20px + 20px) * .5 = 220px */
  height: 25%; /* == (160px + 30px + 30px) * .25 = 55px */
  margin: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  padding: 5%; /* == (400px + 20px + 20px) * .05 = 22px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_3','100%','300')}}

### 例 4

この例では、段落の `position` が `fixed` なので、包含ブロックは初期包含ブロック (画面の場合はビューポート) になります。従って、段落の寸法はブラウザーウィンドウの寸法に基づいて変化します。

```html hidden
<body>
  <section>
    <p>これは段落です。</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  width: 400px;
  height: 480px;
  margin: 30px;
  padding: 15px;
  background: lightgray;
}

p {
  position: fixed;
  width: 50%; /* == (50vw - (width of vertical scrollbar)) */
  height: 50%; /* == (50vh - (height of horizontal scrollbar)) */
  margin: 5%; /* == (5vw - (width of vertical scrollbar)) */
  padding: 5%; /* == (5vw - (width of vertical scrollbar)) */
  background: cyan;
}
```

{{EmbedLiveSample('Example_4','100%','300')}}

### 例 5

この例では、段落の `position` が `absolute` なので、包含ブロックは {{cssxref("transform")}} プロパティが `none` ではない直近の祖先である `<section>` になります。

```html hidden
<body>
  <section>
    <p>これは段落です。</p>
  </section>
</body>
```

```css
body {
  background: beige;
}

section {
  transform: rotate(0deg);
  width: 400px;
  height: 160px;
  background: lightgray;
}

p {
  position: absolute;
  left: 80px;
  top: 30px;
  width: 50%; /* == 200px */
  height: 25%; /* == 40px */
  margin: 5%; /* == 20px */
  padding: 5%; /* == 20px */
  background: cyan;
}
```

{{EmbedLiveSample('Example_5','100%','300')}}

## 関連情報

- {{cssxref("all")}} プロパティは、すべての CSS 宣言を初期状態に初期化します
- CSS の主要概念:
  - [CSS の構文](/ja/docs/Web/CSS/Syntax)
  - [アットルール](/ja/docs/Web/CSS/At-rule)
  - [コメント](/ja/docs/Web/CSS/Comments)
  - [詳細度](/ja/docs/Web/CSS/Specificity)
  - [継承](/ja/docs/Web/CSS/inheritance)
  - [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [レイアウトモード](/ja/docs/Web/CSS/Layout_mode)
  - [視覚整形モデル](/ja/docs/Web/CSS/Visual_formatting_model)
  - [マージンの相殺](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - 値
    - [初期値](/ja/docs/Web/CSS/initial_value)
    - [計算値](/ja/docs/Web/CSS/computed_value)
    - [使用値](/ja/docs/Web/CSS/used_value)
    - [実効値](/ja/docs/Web/CSS/actual_value)
  - [値の定義構文](/ja/docs/Web/CSS/Value_definition_syntax)
  - [一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)
  - [置換要素](/ja/docs/Web/CSS/Replaced_element)
