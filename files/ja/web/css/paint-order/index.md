---
title: paint-order
slug: Web/CSS/paint-order
---

{{CSSRef}}{{SeeCompatTable}}

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
```

値が指定されない場合、既定の描画順序は `fill`, `stroke`, `markers` です。

一つの値で指定されると、それが最初に描画され、続いて他の二つが互いの既定の順序で描画されます。二つの値が指定されると、指定された順序で描画を行い、続いて指定されなかった一つが描画されます。

> [!NOTE]
> このプロパティの場合、マーカーは `marker-*` プロパティ (例えば [`marker-start`](/ja/docs/Web/SVG/Attribute/marker-start)) および [`<marker>`](/ja/docs/Web/SVG/Element/marker) 要素を使用した SVG 図形を描く場合のみ適用されます。 HTML テキストには適用されませんので、その場合は `stroke` および `fill` の順序のみが指定できます。

### 値

- `normal`
  - : 様々なアイテムを通常の描画順で描画します。
- `stroke` (輪郭),
  `fill` (塗りつぶし),
  `markers` (マーカー)
  - : これらの一部またはすべての値を用いて、描画したい順序を指定します。

### 形式文法

{{CSSSyntax}}

## 例

### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <text x="10" y="75">stroke in front</text>
  <text x="10" y="150" class="stroke-behind">stroke behind</text>
</svg>
```

### CSS

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

### 結果

{{EmbedLiveSample("Examples", "100%", 165)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
