---
title: CSS `paint-order` プロパティ
short-title: paint-order
slug: Web/CSS/Reference/Properties/paint-order
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`paint-order`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキストコンテンツやシェイプが描画されるときの塗りつぶしと輪郭 (およびマーカーの描画) の順序を制御することができます。

## 構文

```css
/* 通常 */
paint-order: normal;

/* 単一の値 */
paint-order: stroke; /* 最初に輪郭、それから塗りつぶしとマーカーを描画 */
paint-order: markers; /* 最初にマーカー、それから塗りつぶしと輪郭 */

/* 複数の値 */
paint-order: stroke fill; /* 最初に輪郭を、それから塗りつぶしを、そしてマーカーを描く */
paint-order: markers stroke fill; /* マーカー、輪郭、塗りつぶしの順に描く */

/* グローバル値 */
paint-order: inherit;
paint-order: initial;
paint-order: revert;
paint-order: revert-layer;
paint-order: unset;
```

値が指定されない場合、デフォルトの描画順序は `fill`, `stroke`, `markers` です。

1 つの値で指定されると、それが最初に描画され、続いて他の 2 つが互いのデフォルトの順序で描画されます。2 つの値で指定されると、指定された順序で描画を行い、続いて指定されなかった 1 つが描画されます。

> [!NOTE]
> このプロパティの場合、マーカーは `marker-*` プロパティ (例えば [`marker-start`](/ja/docs/Web/SVG/Reference/Attribute/marker-start)) および [`<marker>`](/ja/docs/Web/SVG/Reference/Element/marker) 要素を使用した SVG 図形を描く場合のみ適用されます。 HTML テキストには適用されませんので、その場合は `stroke` および `fill` の順序のみが指定できます。

### 値

- `normal`
  - : 様々なアイテムを通常の描画順で描画します。
- `stroke` (輪郭),
  `fill` (塗りつぶし),
  `markers` (マーカー)
  - : これらの一部またはすべての値を用いて、描画したい順序を指定します。

## 公式定義

{{cssinfo}}

### 形式文法

{{csssyntax}}

## 例

### ストロークと塗りつぶしの描画順序を逆にする

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <text x="10" y="75">前面ストローク</text>
  <text x="10" y="150" class="stroke-behind">背後ストローク</text>
</svg>
```

#### CSS

```css
text {
  font-family: sans-serif;
  font-size: 50px;
  font-weight: bold;
  fill: black;
  stroke: red;
  stroke-width: 4px;
}

.stroke-behind {
  paint-order: stroke fill;
}
```

#### 結果

{{EmbedLiveSample("Reversing_the_paint_order_of_stroke_and_fill", "100%", 165)}}

### HTML を使用して、線と塗りつぶしの描画順序を逆にする

HTML で塗りつぶしとストロークの順序を制御するには、{{cssxref("-webkit-text-stroke-color")}} および {{cssxref("-webkit-text-stroke-width")}} という CSS プロパティが使用できます。

#### HTML

```html
<div>前面ストローク</div>
<div class="stroke-behind">背後ストローク</div>
```

#### CSS

```css
div {
  font-family: sans-serif;
  font-size: 50px;
  font-weight: bold;
  fill: black;
  padding-top: 10px;
  padding-bottom: 10px;
  -webkit-text-stroke-color: red;
  -webkit-text-stroke-width: 4px;
}

.stroke-behind {
  paint-order: stroke fill;
}
```

#### 結果

{{EmbedLiveSample("Reversing_the_paint_order_of_stroke_and_fill_using_HTML", "100%", 165)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS Tricks: paint-order](https://css-tricks.com/almanac/properties/p/paint-order/)
