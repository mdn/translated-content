---
title: "`flex-line-count` プロパティ (CSS)"
short-title: flex-line-count
slug: Web/CSS/Reference/Properties/flex-line-count
l10n:
  sourceCommit: e5cd1cab36e2fdcf5dfe28e10b0a7cb235354e62
---

{{SeeCompatTable}}

**`flex-line-count`** [CSS](/ja/docs/Web/CSS) プロパティは、フレックスコンテナーの {{cssxref("flex-wrap")}} または {{cssxref("flex-flow")}} プロパティに `balance` キーワードが含まれる場合、フレックスアイテムが配置されるフレックス行の最小数を設定します。

{{InteractiveExample("CSS Demo: flex-line-count")}}

```css interactive-example-choice
flex-line-count: 1;
```

```css interactive-example-choice
flex-line-count: 3;
```

```css interactive-example-choice
flex-line-count: 4;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Item One</div>
    <div>Item Two</div>
    <div>Item Three</div>
    <div>Item Four</div>
    <div>Item Five</div>
    <div>Item Six</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  display: flex;
  flex-wrap: wrap balance;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

## 構文

```css
/* 整数値 */
flex-line-count: 1;
flex-line-count: 3;
flex-line-count: 12;

/* グローバル値 */
flex-line-count: inherit;
flex-line-count: initial;
flex-line-count: revert;
flex-line-count: revert-layer;
flex-line-count: unset;
```

### 値

このプロパティには、以下の値で指定します。

- {{cssxref("integer")}}
  - : バランス調整および折り返し処理が適用されたフレックスアイテムが配置されるフレックス行の最小数を設定する正の整数です。デフォルト値は `1` です。

## 解説

`flex-line-count` プロパティは、折り返しが行われるバランス型フレックスコンテナー（言い換えれば、`wrap` または `wrap-reverse` キーワードに加えて、`balance` キーワードが設定された {{cssxref("flex-wrap")}} または {{cssxref("flex-flow")}} プロパティを含むフレックスコンテナー）において、フレックスアイテムが配置されるフレックス行の最小数を設定します。

`flex-line-count` の主な用途は、リスト内のアイテム数にかかわらず、2 列（またはそれ以上）を均等に作成することです。このような場合、コンテンツの量が事前にわからないため、{{cssxref("height")}} や {{cssxref("max-height")}} を明示的に設定してもうまくいかず、意図した本数とは異なる列数になってしまう可能性があります。実装例については、[均等な列の作成](#均等な列の作成)を参照してください。

`balance` が設定されていない場合、またはフレックスアイテムが複数のフレックス行に折り返されるように設定されていない場合、`flex-line-count` プロパティは効果を持ちません。

`flex-line-count` の値がフレックスアイテムの数以上である場合、フレックス行ごとに 1 つのフレックスアイテムが配置されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 様々な `flex-line-count` 値の効果

この例では、4 つのボックスに対して `flex-line-count` の値を変化させた場合の効果を示しています。

#### HTML

4 つのコンテナー {{htmlelement("div")}} を配置します。それぞれのコンテナーには `class` 属性に `box` が指定されており、それぞれに 10 個の子要素 `<div>` があります。それぞれのコンテナー `<div>` には、それぞれ異なる `id` 値が割り当てられています。

```html
<div class="box" id="box-no-balance">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>

<div class="box" id="box1">...</div>
<div class="box" id="box2">...</div>
<div class="box" id="box3">...</div>
```

```html hidden live-sample___flex-line-count
<p><code>balance</code> なし</p>

<div class="box" id="box-no-balance">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>

<p><code>flex-line-count: 3</code></p>

<div class="box" id="box1">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>

<p><code>flex-line-count: 4</code></p>

<div class="box" id="box2">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>

<p><code>flex-line-count: 5</code></p>

<div class="box" id="box3">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

#### CSS

```css hidden live-sample___flex-line-count
* {
  box-sizing: border-box;
}

.box {
  width: 100%;
  border: 2px dotted gray;
  margin-bottom: 20px;
  gap: 10px;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: lightgray;
}
```

すべてのボックスに `display: flex` を適用してフレックスコンテナーにし、`flex-wrap` の値を `wrap balance` に設定することで、それらに含まれるすべての子要素が、バランスよく複数の行に折り返されるようにします。

```css live-sample___flex-line-count
.box {
  display: flex;
  flex-wrap: wrap balance;
}
```

同時に、フレックス子要素に {{cssxref("flex")}} の値として `1 1 150px` を設定しました。これにより、これらの要素の基本幅は `150px` となり、余った空間はそれぞれのフレックス行内のアイテムに均等に分配されます。

```css live-sample___flex-line-count
.box > * {
  flex: 1 1 150px;
}
```

`#box-no-balance` フレックスコンテナーについては、元の `flex-wrap: wrap balance` の値を `wrap` で上書きすることで、バランス調整が除去され、行数がゼロになります。それぞれのフレックスコンテナーに異なる `flex-line-count` の値を適用し、その値を段階的に増加することで、子要素が徐々に多くのフレックス行に配置されるようにします。

```css live-sample___flex-line-count
#box-no-balance {
  flex-line-count: 6;
  flex-wrap: wrap;
}

#box1 {
  flex-line-count: 3;
}

#box2 {
  flex-line-count: 4;
}

#box3 {
  flex-line-count: 5;
}
```

簡潔にするため、残りのCSSは省略しています。

#### 結果

{{ EmbedLiveSample("flex-line-count", "100%", "700") }}

以下の点に注意してください。

- 1 つ目のフレックスコンテナーでは、`balance` キーワードが `flex-wrap` 値に設定されていないため、その子要素は均等に配置されず、`flex-line-count` の値は無視されます。
- 2 つ目のフレックスコンテナーの `flex-line-count: 3` という宣言は、フレックス子要素のレイアウトに影響を与えません。フレックスアイテムはデフォルトで 4 つのフレックス行に分散されるため、`4` 以下の値を設定しても何の効果もありません。

### 均等な列の作成

この例では、`flex-line-count` を使用して、2 列のバランスが取れたレイアウトを作成する方法を示しています。

#### HTML

10 個の {{htmlelement("li")}} 要素を含む {{htmlelement("ol")}} 要素を挿入します。

```html
<ol>
  <li>
    <a href="#">The Silent Cartographer</a>, published by Meridian House,
    released March 12, 2014.
  </li>
  <li>
    <a href="#">Echoes of the Fallow Field</a>, published by Northbridge Press,
    released July 4, 2009.
  </li>

  ...
</ol>
```

```html hidden live-sample___balanced-columns
<ol>
  <li>
    <a href="#">The Silent Cartographer</a>, published by Meridian House,
    released March 12, 2014.
  </li>
  <li>
    <a href="#">Echoes of the Fallow Field</a>, published by Northbridge Press,
    released July 4, 2009.
  </li>
  <li>
    <a href="#">A Ledger of Small Regrets</a>, published by Ashwood & Kline,
    released November 21, 2017.
  </li>
  <li>
    <a href="#">The Clockmaker's Daughter's Shadow</a>, published by Hollow Pine
    Publishing, released February 8, 2011.
  </li>
  <li>
    <a href="#">Salt and Signal</a>, published by Redcliffe Editions, released
    September 30, 2019.
  </li>
  <li>
    <a href="#">Under a Borrowed Sky</a>, published by Fenwick & Marsh, released
    May 16, 2006.
  </li>
  <li>
    <a href="#">The Last Cartel of Winter</a>, published by Graywolf Bindery,
    released January 2, 2021.
  </li>
  <li>
    <a href="#">Notes from an Unfinished Atlas</a>, published by Coastline
    Books, released June 27, 2013.
  </li>
  <li>
    <a href="#">The Weight of Empty Rooms</a>, published by Draymoor House,
    released October 15, 2008.
  </li>
  <li>
    <a href="#">A Brief History of Almost Everyone</a>, published by Ferngate
    Press, released April 9, 2022.
  </li>
</ol>
```

#### CSS

リストの {{cssxref("display")}} を `flex` に設定します。{{cssxref("flex-direction")}} の値を `column`、{{cssxref("flex-wrap")}} の値を `balance` に、{{cssxref("flex-flow")}} 一括指定を用いて設定しました。これにより、フレックス行は列ごとに配置され、折り返し時にはバランスが取れるようになります。{{cssxref("gap")}}の値 `10px 40px` は、それぞれの列内のフレックスアイテム間の間隔を `10px`、フレックス行間の間隔を `40px` に指定します。

最後に、`flex-line-count` の値を `2` に設定しました。これにより、リストに固定の高さが設定されていなくても、たとえコンテンツの量がどれだけ多かろうとも、その内容は常に 2 つの均等な列に分割されて表示されます。

```css live-sample___balanced-columns
ol {
  display: flex;
  gap: 10px 40px;
  flex-flow: column balance;
  flex-line-count: 2;
}
```

```css hidden live-sample___flex-line-count live-sample___balanced-columns
* {
  box-sizing: border-box;
}

body {
  padding: 10px 30px;
}

@supports not (flex-line-count: 3) {
  body::before {
    content: "このブラウザーは flex-line-count プロパティに対応していません。";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

簡潔にするため、残りのCSSは省略しています。

#### 結果

{{ EmbedLiveSample("balanced-columns", "100%", "350") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXRef("flex-wrap")}}
- {{CSSXRef("flex-flow")}} 一括指定
- [フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [フレックスアイテムの折り返しをマスターする > 均等な折り返し](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items#均等な折り返し)
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)モジュール
