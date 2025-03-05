---
title: flex-basis
slug: Web/CSS/flex-basis
l10n:
  sourceCommit: c63daf697d8f22ba17d4633f018ad7dfa65e4770
---

{{CSSRef}}

**`flex-basis`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{glossary("flex item","フレックスアイテム")}}の主要部分の初期の寸法を設定します。 {{Cssxref("box-sizing")}} で設定していない限り、このプロパティはコンテンツボックスの寸法を定義します。

> **メモ:** {{cssxref("flex")}} 一括指定を使用する方が、個別に `flex-grow`、`flex-shrink`、`flex-basis` の宣言を使用するよりも推奨されます。この文書では、一括指定成分の一つである `flex-basis` プロパティについて説明していますので、ここではこれらを別個のものとしています。

{{EmbedInteractiveExample("pages/css/flex-basis.html")}}

この例では、3 つすべてのアイテムの {{cssxref("flex-grow")}} と {{cssxref("flex-shrink")}} プロパティがともに `1` に設定されており、フレックスアイテムが初期の `flex-basis` から伸長したり縮小したりできることを示しています。

このデモでは最初のフレックスアイテムに設定する `flex-basis` 値を変更し、利用できる空間いっぱいに伸長させたり縮小させたりします。他のフレックスアイテムもサイズが変更され、少なくとも `min-content` のサイズになります。例えば、最初のアイテムの `flex-basis` を `200px` に設定すると、始めは `200px` ですが、利用できる空間に合うように縮小されます。

もし `flex-basis` が `auto` 以外の値に設定されていて、同じフレックスアイテムに `width` （`flex-direction: column` の場合は `height`）が設定されている場合は、`flex-basis` の値が優先されます。

## 構文

```css
/* 幅を指定する */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: 50%;
flex-basis: auto;

/* 固有のサイズ指定キーワード */
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* フレックスアイテムの内容に基づいて自動設定する */
flex-basis: content;

/* グローバル値 */
flex-basis: inherit;
flex-basis: initial;
flex-basis: revert;
flex-basis: revert-layer;
flex-basis: unset;
```

`flex-basis` プロパティは、`content` キーワードまたは `<'width'>` で指定します。

### 値

- `<'width'>`

  - : 以下の単位のいずれかです。
    - {{cssxref("&lt;length&gt;")}} は絶対的な値を設定します。
    - {{cssxref("&lt;percentage&gt;")}} は包含ブロックのコンテンツ領域の幅または高さに対する割合を設定します。 `flex-basis` のパーセント値はフレックスコンテナーに対して解決されます。フレックスコンテナーのサイズが不定の場合、 `flex-basis` の使用する値は `content` となります。
    - `auto` は横書きモードでは {{cssxref("width")}} の値、縦書きモードでは {{cssxref("height")}} の値を使用します。対応する値も `auto` であった場合、代わりに `content` の値が使用されます。
    - {{cssxref("max-content")}} は幅の内在的な推奨値を設定します。
    - {{cssxref("min-content")}} は幅の内在的な最小値を設定します。
    - {{cssxref("fit-content")}} は、現在の要素のコンテンツに基づいて計算された、 `min-content` と `max-content` の値で囲まれた、包含ブロックのコンテンツ領域の使用可能な最大サイズを設定します。

- `content`

  - : フレックスアイテムの内容物に基づいて、自動的に大きさを決めます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスアイテムの初期の寸法の設定

#### HTML

```html live-sample___setting_flex_item_initial_sizes
<ul class="container">
  <li class="flex flex1">1: flex-basis test</li>
  <li class="flex flex2">2: flex-basis test</li>
  <li class="flex flex3">3: flex-basis test</li>
  <li class="flex flex4">4: flex-basis test</li>
  <li class="flex flex5">5: flex-basis test</li>
</ul>

<ul class="container">
  <li class="flex flex6">6: flex-basis test</li>
</ul>
```

#### CSS

```css live-sample___setting_flex_item_initial_sizes
.container {
  font-family: arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6ab6d8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2e86bb;
  color: white;
  font-size: 14px;
  text-align: center;
  position: relative;
}

.flex::after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333;
  font-size: 12px;
}

.flex1 {
  flex-basis: auto;
}

.flex1::after {
  content: "auto";
}

.flex2 {
  flex-basis: max-content;
}

.flex2::after {
  content: "max-content";
}

.flex3 {
  flex-basis: min-content;
}

.flex3::after {
  content: "min-content";
}

.flex4 {
  flex-basis: fit-content;
}

.flex4::after {
  content: "fit-content";
}

.flex5 {
  flex-basis: content;
}

.flex5::after {
  content: "content";
}
```

#### 結果

{{EmbedLiveSample('Setting_flex_item_initial_sizes', '', '360')}}

### flex-basis の `0` と `0%` の違い

この例は `flex-basis` が `0` の場合と `flex-basis` が `0%` の場合との違いを示します。 `flex-direction` が `column` に設定されており、フレックスコンテナーとフレックスアイテムに高さが設定されていない場合です。 `0` は絶対的な長さですが、パーセント値の flex-basis の値は [`content`](#content) の値に解決します。

#### HTML

同じ構造のフレックスコンテナーを 2 つ設置しています。これらのコンテナーは、 `flex-basis` の値以外は同じようにスタイル設定されています。コンテナーはそれぞれ見出しの `<div>` と `<section>` の 2 つの子要素を持っています。 `<section>` 要素はコンテンツとして `<div>` を持っていますが、これはフレックスアイテムとしては設定されませんが、高さは指定されます。

```html-nolint live-sample___flex_basis_0_vs_0
<div class="container basis-0">
  <div>見出し</div>
  <section>
    flex-basis: 0;
    <div class="content"></div>
  </section>
</div>
<div class="container basis-0-percent">
  <div>見出し</div>
  <section>
    flex-basis: 0%;
    <div class="content"></div>
  </section>
</div>
```

#### CSS

コンテナーを横に並んでいるインラインフレックスコンテナーとしてスタイル設定し、比較しやすくします。 `flex-direction` を `column` に設定します。最初のコンテナーのフレックスアイテムの `flex-basis` 値は `0`、 2 つ目のコンテナーのフレックスアイテムの `flex-basis` 値は `0%` です。どちらのフレックスコンテナーもそのフレックスアイテムも高さは明示的に設定されていませんが、 `section` 要素の高さは `200px` を超えることができず、子要素の高さは `300px` になります。

```css live-sample___flex_basis_0_vs_0
.container {
  width: 40vw;
  padding: 1rem;
  border: 1px dashed blue;

  display: inline-flex;
  flex-direction: column;
}

section {
  border: 1px solid red;

  overflow: auto;
  min-height: 200px;
}

.content {
  background: wheat;
  height: 300px;
}

.container.basis-0 > * {
  flex-basis: 0;
}
.container.basis-0-percent > * {
  flex-basis: 0%;
}
```

#### 結果

{{EmbedLiveSample('flex_basis_0_vs_0', '100%', '400')}}

最初のコンテナーの中には `flex-basis: 0` が設定されており、 `<section>` 要素の初期主要サイズはゼロで、高さ制限の `200px` まで伸長します。 2 つ目のコンテナーの中では、 `flex-basis: 0%`では、 `<section>` 要素は `300px` の初期主要サイズになります。なぜなら、フレックスコンテナーは高さを設定していないので、パーセント値の flex-basis の値が [`content`](#content) 値に解決されるからです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("flex")}} 一括指定
- {{cssxref("inline-size")}}
- [フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [主軸方向のフレックスアイテムの比率の制御](/ja/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/CSS_flexible_box_layout)モジュール
