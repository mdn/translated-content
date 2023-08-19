---
title: margin-bottom
slug: Web/CSS/margin-bottom
---

{{CSSRef}}

**`margin-bottom`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の下側の[マージン領域](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#マージン領域)を設定します。正の数を指定すると、隣との間が遠くなるように配置され、負の数を指定すると、近くなるように配置します。

{{EmbedInteractiveExample("pages/css/margin-bottom.html")}}

![要素ボックスにおける CSS の margin-bottom プロパティの効果](margin-bottom.svg)

このプロパティは、 {{HTMLElement("span")}} または {{HTMLElement("code")}} のような非[置換](/ja/docs/Web/CSS/Replaced_element)のインライン要素には効果がありません。

## 構文

```css
/* <length> 値 */
margin-bottom: 10px; /* 絶対的な寸法 */
margin-bottom: 1em; /* 文字の寸法からの相対 */
margin-bottom: 5%; /* 直近のブロックコンテナーの幅からの相対 */

/* キーワード値 */
margin-bottom: auto;

/* グローバル値 */
margin-bottom: inherit;
margin-bottom: initial;
margin-bottom: revert;
margin-bottom: unset;
```

`margin-bottom` プロパティは `auto` キーワード、または `<length>` や `<percentage>` で指定されます。正の数、ゼロ、負の数が指定できます。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : マージンの寸法を固定値で表したものです。
- {{cssxref("&lt;percentage&gt;")}}
  - : マージンの寸法を包含ブロックの*幅*に対するパーセント値で表したものです。
- `auto`
  - : ブラウザ―が適切な値を選択して使用します。 {{cssxref("margin")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_positive_and_negative_bottom_margins">正および負の数の下側のマージンの設定</h3>

#### HTML

```html
<div class="container">
  <div class="box0">Box 0</div>
  <div class="box1">Box 1</div>
  <div class="box2">Box one's negative margin pulls me up</div>
</div>
```

#### CSS

div に margin-bottom と height を設定する CSS です。

```css
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

```css
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

- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-left")}} と {{cssxref("margin")}} 一括指定
- 対応する論理的プロパティ: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}} および一括指定の {{cssxref("margin-block")}} と {{cssxref("margin-inline")}}
