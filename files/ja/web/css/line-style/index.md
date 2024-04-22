---
title: <line-style>
slug: Web/CSS/line-style
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

**`<line-style>`** {{glossary("enumerated", "列挙値")}}型は、線のスタイル、または線がないことを定義するキーワード値を表します。 `<line-style>` キーワード値は、[境界](/ja/docs/Web/CSS/CSS_backgrounds_and_borders)や[段組み](/ja/docs/Web/CSS/CSS_multicol_layout)の以下の個別指定プロパティで用いられます。

- {{cssxref("border")}}, {{cssxref("border-style")}}
- {{cssxref("border-block")}}, {{cssxref("border-block-style")}}
- {{cssxref("border-block-end")}}, {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-start")}}, {{cssxref("border-block-start-style")}}
- {{cssxref("border-bottom")}}, {{cssxref("border-bottom-style")}}
- {{cssxref("border-inline")}}, {{cssxref("border-inline-style")}}
- {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-style")}}
- {{cssxref("border-left")}}, {{cssxref("border-left-style")}}
- {{cssxref("border-right")}}, {{cssxref("border-right-style")}}
- {{cssxref("border-top")}}, {{cssxref("border-top-style")}}
- {{cssxref("column-rule")}}, {{cssxref("column-rule-style")}}

## 構文

```css
<line-style> = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
```

### 値

`<line-style>` 列挙型は、以下に挙げた値のうちの一つを使用して指定します。

- `none`
  - : 線を表示しません。幅の値を指定しても、線の幅の計算値は `0` です。表のセルと境界線が折りたたまれている場合、 `none` の値の優先順位が最も低くなります。他にも競合する境界線が設定されている場合は、それが表示されます。 `none` 値は `hidden` に似ています。
- `hidden`
  - : 線を表示しません。幅の値を指定しても、線の幅の計算値は `0` です。表のセルと境界線が折りたたまれている場合、 `hidden` 値が最も優先されます。他にも競合する境界線が設定されている場合、その境界線は表示されません。 `hidden` 値は `none` と似ていますが、 `hidden` は輪郭線スタイルには有効な値ではありません。
- `dotted`
  - : 連続した丸い点を表示します。ドットの半径は、線の幅の計算値の半分です。ドットの間隔は仕様では定義されておらず、実装によって異なります。
- `dashed`
  - : 一連の短く角ばったダッシュまたは線分を表示します。線分の正確なサイズと長さは仕様では定義されておらず、実装によって異なります。
- `solid`
  - : 単一のまっすぐな実線を表示します。
- `double`
  - : 2 本の直線を間隔を空けて表示します。線の長さは、線の幅で定義するピクセルサイズまで追加されます。
- `groove`
  - : 彫られたように見える境界線を表示します。この値は `ridge` の反対です。
- `ridge`
  - : 押し出された外観の境界を表示します。この値は `groove` の反対です。
- `inset`
  - : 要素が埋め込まれたように現れる境界線を表示します。この値は `outset` の反対です。表セルの枠線に適用され、 {{cssxref("border-collapse")}} が `collapsed` に設定されている場合、この値は `groove` のように動作します。
- `outset`
  - : 要素がエンボス加工されて現れるように境界線を表示します。この値は `inset` の反対です。 {{cssxref("border-collapse")}} を `collapsed` に設定した表セルに適用すると、この値は `ridge` のように動作します。

> **メモ:** `<outline-style>` は {{cssxref("outline")}} および {{cssxref("outline-style")}} プロパティの値の型として使用されます。 `<line-style>` と似ていますが、 `hidden` に対応しておらず、 `auto` 値を使用しません。 `auto` を設定すると、ユーザーエージェントが定義した `<line-style>` の値が使用されます。

## 例

1 つ目の例は `<line-style>` キーワードの値をすべて示しています。 2 つ目の例は、いくつかの線スタイル設定が予期しない方法で表示されることを示しています。

### 線スタイルの定義

この例では、すべての `<line-style>` 値を CSS の {{cssxref("border-style")}} と {{cssxref("column-rule-style")}} プロパティの値として表示させます。

#### HTML

この例では複数の {{HTMLElement( "div" )}} 要素を使用しており、クラスごとに `<line-style>` 値を表しています。

```html
<div class="<line-style>">
  <p><line-style></p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
```

```html hidden
<div class="none">
  <p>none</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="hidden">
  <p>hidden</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="dotted">
  <p>dotted</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="dashed">
  <p>dashed</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="solid">
  <p>solid</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="double">
  <p>double</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="groove">
  <p>groove</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="ridge">
  <p>ridge</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="inset">
  <p>inset</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
<div class="outset">
  <p>outset</p>
  <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
</div>
```

#### CSS

この例の CSS では、すべての `<p>` 要素の境界線と段間罫の幅を `7px` とし、スタイル値を `double` と定義しています。各段落に対して、 `border-style` と `column-rule-style` プロパティに様々な `<line-style>` 値を指定することで、その `double` 値が上書きされます。

```css hidden
div {
  display: flex;
  gap: 1em;
  list-style: none;
  align-items: center;
}
div:first-of-type {
  display: none;
}

p:first-of-type {
  text-align: center;
  line-height: 5em;
}
p {
  width: 10em;
  height: 5em;
  background-color: palegoldenrod;
}
```

```css
p {
  padding: 5px;
  border: double 7px #bada55;
}
p + p {
  columns: 3;
  column-gap: 20px;
  column-rule: double 7px;
  border-color: #000000;
}
.none p {
  border-style: none;
  column-rule-style: none;
}
.hidden p {
  border-style: hidden;
  column-rule-style: hidden;
}
.dotted p {
  border-style: dotted;
  column-rule-style: dotted;
}
.dashed p {
  border-style: dashed;
  column-rule-style: dashed;
}
.solid p {
  border-style: solid;
  column-rule-style: solid;
}
.double p {
  border-style: double;
  column-rule-style: double;
}
.groove p {
  border-style: groove;
  column-rule-style: groove;
}
.ridge p {
  border-style: ridge;
  column-rule-style: ridge;
}
.inset p {
  border-style: inset;
  column-rule-style: inset;
}
.outset p {
  border-style: outset;
  column-rule-style: outset;
}
```

#### 結果

{{EmbedLiveSample("Defining_line_styles", "500", "800")}}

黒枠は常に黒とは限らないことに注意してください。

### 線のスタイルと色の定義

この例では線のスタイルと色の指定について説明します。 `<line-style>` キーワードの値によっては、線の色が期待したものと異なる場合があります。 `groove`、`ridge`、`inset`、`outset` スタイルに要求される「3D」効果を生むために、これらの値を黒または白で表示するときにはユーザーエージェントが他の色の線の組み合わせとは異なる色の計算を使用します。

#### HTML

この例では、複数の {{HTMLElement( "div" )}} 要素を使用し、それぞれ異なる `border-color` をインラインの [`style`](/ja/docs/Web/HTML/Global_attributes/style) として設定しています。

```html-nolint hidden
<section>
```

```html
<div style="border-color: #000000"></div>
```

```html hidden
<div style="border-color: #000001"></div>
<div style="border-color: #ffffff"></div>

<div style="border-color: #ff00ff"></div>
<div style="border-color: #ffff00"></div>
<div style="border-color: #00ffff"></div>

<div style="border-color: #cc33cc"></div>
<div style="border-color: #cccc33"></div>
<div style="border-color: #33cccc"></div>

<div style="border-color: #ff0000"></div>
<div style="border-color: #00ff00"></div>
<div style="border-color: #0000ff"></div>

<div style="border-color: #cc3333"></div>
<div style="border-color: #33cc33"></div>
<div style="border-color: #3333cc"></div>

<div style="border-color: #993333"></div>
<div style="border-color: #339933"></div>
<div style="border-color: #333399"></div>
</section>
```

#### CSS

それぞれの `<div>` の 4 辺には異なる `<line-style>` 値があり、それぞれのリストアイテムは異なる {{cssxref("color_value", "&lt;color>")}} 値になっています。宣言された CSS をインラインで表示するために、[生成コンテンツ](/ja/docs/Web/CSS/content)を使用しています。

```css hidden
section {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  text-transform: uppercase;
  font-family: monospace;
}
```

```css
div {
  border-width: 10px;
  border-style: inset groove ridge outset;
  padding: 5px;
}
div::before {
  content: attr(style);
}
```

#### 結果

{{EmbedLiveSample("Line_style_colors", "500", "400")}}

黒に近い`#000001`の色は実際の黒とは異なる場合があり、明るい色を使用すると辺の明暗のコントラストがより目立つことに注意してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 背景と境界](/ja/docs/Web/CSS/CSS_backgrounds_and_borders)モジュール
- [CSS 基本ユーザーインターフェイス](/ja/docs/Web/CSS/CSS_basic_user_interface)モジュール
- [CSS 段組みレイアウト](/ja/docs/Web/CSS/CSS_multicol_layout)モジュール
