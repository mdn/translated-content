---
title: mask-border
slug: Web/CSS/mask-border
tags:
  - CSS
  - CSS マスク
  - CSS プロパティ
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.mask-border
translation_of: Web/CSS/mask-border
---
{{CSSRef}}

**`mask-border`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、要素の境界の縁に沿ったマスクを生成することができます。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`mask-border-mode`](/ja/docs/Web/CSS/mask-border-mode)
- [`mask-border-outset`](/ja/docs/Web/CSS/mask-border-outset)
- [`mask-border-repeat`](/ja/docs/Web/CSS/mask-border-repeat)
- [`mask-border-slice`](/ja/docs/Web/CSS/mask-border-slice)
- [`mask-border-source`](/ja/docs/Web/CSS/mask-border-source)
- [`mask-border-width`](/ja/docs/Web/CSS/mask-border-width)

## 構文

```css
/* source | slice */
mask-border: url('border-mask.png') 25;

/* source | slice | repeat */
mask-border: url('border-mask.png') 25 space;

/* source | slice | width */
mask-border: url('border-mask.png') 25 / 35px;

/* source | slice | width | outset | repeat | mode */
mask-border: url('border-mask.png') 25 / 35px / 12px space alpha;

/* Global values */
mask-border: inherit;
mask-border: initial;
mask-border: revert;
mask-border: unset;
```

### 値

- `<'mask-border-source'>`
  - : ソース画像です。{{cssxref("mask-border-source")}} を参照してください。
- `<'mask-border-slice'>`
  - : ソース画像を複数の領域に分割する幅です。{{cssxref("mask-border-slice")}} を参照してください。
- `<'mask-border-width'>`
  - : 境界画像の幅です。4 つまでの値を指定することができます。{{cssxref("mask-border-width")}} を参照してください。
- `<'mask-border-outset'>`
  - : 要素の外側の辺から境界画像までの距離です。4 つまでの値を指定することができます。{{cssxref("mask-border-outset")}} を参照してください。
- `<'mask-border-repeat'>`
  - : ソース画像の辺の領域を、境界マスクの幅に合わせて調整する方法を定義します。2 つまでの値を指定することができます。{{cssxref("mask-border-repeat")}} を参照してください。
- `<'mask-border-mode'>`
  - : ソース画像を輝度マスクとして扱うか、アルファマスクとして扱うかを定義します。{{cssxref("mask-border-mode")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ビットマップに基づいたマスク境界の設定

この例では、要素の境界を菱形の模様でマスクします。このマスクのソースは ".png" ファイルで、 90 x 90 ピクセルであり、3つの菱形が垂直・水平に並んでいます。

![](mask-border-diamonds.png)

一つの菱形の寸法に合わせるため、 90 を 3 で割った値、すなわち '30' を使用して、画像を角と辺の領域に分割します。 repeat の値は `round` であり、マスクのスライスが均等に、すなわち切り取られたり隙間ができたりすることなく合わせられます。

{{EmbedGHLiveSample("css-examples/masking/mask-border.html", '100%', 800)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
