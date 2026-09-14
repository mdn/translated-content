---
title: margin-bottom
slug: Web/CSS/Reference/Properties/margin-bottom
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`margin-bottom`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の下側の[マージン領域](/ja/docs/Web/CSS/Guides/Box_model/Introduction#マージン領域)を設定します。正の数を指定すると、隣との間が遠くなるように配置され、負の数を指定すると、近くなるように配置します。

{{InteractiveExample("CSS デモ: margin-bottom")}}

```css interactive-example-choice
margin-bottom: 1em;
```

```css interactive-example-choice
margin-bottom: 10%;
```

```css interactive-example-choice
margin-bottom: 10px;
```

```css interactive-example-choice
margin-bottom: 0;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="row"></div>
    <div class="row transition-all" id="example-element"></div>
    <div class="row"></div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.row {
  height: 33.33%;
  display: inline-block;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
}
```

![要素ボックスにおける CSS の margin-bottom プロパティの効果](margin-bottom.svg)

このプロパティは、{{glossary("Replaced elements", "置換要素")}}ではないインライン要素、例えば {{HTMLElement("span")}} や {{HTMLElement("code")}} には効果がありません。

## 構文

```css
/* <length> 値 */
margin-bottom: 10px; /* 絶対的な寸法 */
margin-bottom: 1em; /* 文字の寸法からの相対 */
margin-bottom: 5%; /* 直近のブロックコンテナーの幅からの相対 */
margin-bottom: anchor-size(width);
margin-bottom: calc(anchor-size(--my-anchor self-block, 20px) / 3);

/* キーワード値 */
margin-bottom: auto;

/* グローバル値 */
margin-bottom: inherit;
margin-bottom: initial;
margin-bottom: revert;
margin-bottom: revert-layer;
margin-bottom: unset;
```

`margin-bottom` プロパティは `auto` キーワード、または `<length>` や `<percentage>` で指定されます。正の数、ゼロ、負の数が指定できます。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : マージンの寸法を固定値で表したものです。
    - アンカー位置指定要素に対して、{{cssxref("anchor-size()")}} 関数は、関連するアンカー要素のサイズに相対的な {{cssxref("&lt;length&gt;")}} 値が相対的に設定されます（関連付けられたアンカー要素の幅または高さに基づく（[アンカーサイズに基づく要素のマージンの設定](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using#アンカーサイズに基づく要素のマージンの設定)を参照）。

- {{cssxref("&lt;percentage&gt;")}}
  - : マージンの寸法を[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)のインラインサイズ（{{cssxref("writing-mode")}} で横書き言語と定義されている場合は _width_）に対するパーセント値で示したものです。
- `auto`
  - : ブラウザーが適切な値を選択して使用します。 {{cssxref("margin")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 正および負の数の下側のマージンの設定

#### HTML

```html-nolint live-sample___setting_positive_and_negative_bottom_margins
<div class="container">
  <div class="box0">ボックス 0</div>
  <div class="box1">ボックス 1</div>
  <div class="box2">ボックス 1 の負のマージンがこのボックスを引き上げています</div>
</div>
```

#### CSS

div に margin-bottom と height を設定する CSS です。

```css live-sample___setting_positive_and_negative_bottom_margins
.box0 {
  margin-bottom: 1em;
  height: 3em;
}
.box1 {
  margin-bottom: -1.5em;
  height: 4em;
}
.box2 {
  border: 1px dashed black;
  border-width: 1px 0;
  margin-bottom: 2em;
}
```

包含要素と div の定義の一部です。これによってマージンの効果がより明確に見えます。

```css live-sample___setting_positive_and_negative_bottom_margins
.container {
  background-color: orange;
  width: 320px;
  border: 1px solid black;
}
div {
  width: 320px;
  background-color: gold;
}
```

#### 結果

{{ EmbedLiveSample('Setting_positive_and_negative_bottom_margins',350,200) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-left")}}
- {{cssxref("margin")}} 一括指定
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}
- {{cssxref("margin-block")}} および {{cssxref("margin-inline")}} 一括指定
- [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)モジュール
