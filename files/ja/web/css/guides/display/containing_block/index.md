---
title: レイアウトと包含ブロック
slug: Web/CSS/Guides/Display/Containing_block
original_slug: Web/CSS/CSS_display/Containing_block
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

要素の寸法や位置は、しばしば**包含ブロック** (containing block) に影響されます。多くの場合、包含ブロックは要素から見て直近の[ブロックレベル](/ja/docs/Glossary/Block-level_content)の祖先の[コンテンツ領域](/ja/docs/Web/CSS/Guides/Box_model/Introduction#コンテンツ領域)ですが、常にそうとは限りません。この記事では、要素の包含ブロックが決まる要因を学びます。

ユーザーエージェント（ブラウザーなど）が文書をレイアウトする時、それぞれの要素にボックスを生成します。それぞれのボックスは 4 つの領域に分かれます。

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
3. `position` プロパティが **`fixed`** の場合、包含ブロックは{{glossary("Viewport", "ビューポート")}} （連続的なメディアの場合）またはページ領域（ページメディアの場合）によって確立されます。
4. `position` プロパティが **`absolute`** または **`fixed`** の場合、包含ブロックは以下の条件を持った直近の祖先要素におけるパディングボックスの辺によって構成されることがあります。
   - {{cssxref("filter")}}、{{cssxref("backdrop-filter")}}、{{cssxref("transform")}}、{{cssxref("perspective")}} の値が `none` 以外である。
   - {{cssxref("contain")}} の値が `layout`、`paint`、`strict`、`content` のいずれかである。（例 `contain: paint;`）
   - {{cssxref("container-type")}} の値が `normal` 以外である。
   - {{cssxref("will-change")}} 値で、包含ブロックを形成する初期値以外の値を持つプロパティ（`filter` や `transform` など）がある。
   - {{cssxref("content-visibility")}} の値が `auto` である。

> [!NOTE]
> ルート要素 ({{HTMLElement("html")}}) が包含ブロックである場合、**初期包含ブロック**と呼ばれる矩形になります。これはビューポート（連続的なメディアの場合）またはページ領域（ページメディアの場合）の寸法を持ちます。

> [!NOTE]
> 包含ブロックの形成に寄与する `perspective` と `filter` には、ブラウザー間の不整合があります。

## 包含ブロックからのパーセント値の計算

前述の通り、特定のプロパティがパーセント値を与えられた場合、計算値は要素の包含ブロックに依存します。このように動するプロパティは**ボックスモデルプロパティ**及び**オフセットプロパティ**です。

1. {{cssxref("height")}}, {{cssxref("top")}}, {{cssxref("bottom")}} の各プロパティは、包含ブロックの `height` からパーセント値を計算します。
2. {{cssxref("width")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("padding")}}, {{cssxref("margin")}} の各プロパティは、包含ブロックの `width` からパーセント値を計算します。

> [!NOTE]
> **ブロックコンテナー**（インラインブロック、ブロック、リストアイテムなどの要素など）は、インライン整形コンテキストに参加するインラインレベルボックスのみ、またはブロック整形コンテキストに参加するブロックレベルボックスのみを含みます。要素がブロックコンテナーとなるのは、ブロックレベルボックスまたはインラインレベルボックスを包含する場合のみです。

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

この例では、段落が静的に配置されているため、包含ブロックは {{HTMLElement("section")}} になります。直近の祖先がブロックコンテナーとなるためです（`display: block` など）。

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

この例では、段落の `position` が `fixed` なので、包含ブロックは初期包含ブロック（画面の場合はビューポート）になります。従って、段落の寸法はブラウザーウィンドウの寸法に基づいて変化します。

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

- {{cssxref("all")}} プロパティ
- {{cssxref("contain")}} プロパティ
- {{cssxref("aspect-ratio")}} プロパティ
- {{cssxref("box-sizing")}} プロパティ
- {{cssxref("min-content")}} および {{cssxref("max-content")}} のサイズ値
- [学習: CSS におけるアイテムのサイズ設定](/ja/docs/Learn_web_development/Core/Styling_basics/Sizing)
- [ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
- [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)モジュール
- [レイアウトモード](/ja/docs/Glossary/Layout_mode)
- [視覚整形モデル](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [マージンの相殺](/ja/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)、[計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)、[使用値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#使用値)、[実効値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#実効値)
- [置換要素](/ja/docs/Web/CSS/Guides/Images/Replaced_element_properties)
- {{glossary("Intrinsic Size", "内在サイズ")}}
