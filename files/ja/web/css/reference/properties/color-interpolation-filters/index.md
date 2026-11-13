---
title: "`color-interpolation-filters` プロパティ"
short-title: color-interpolation-filters
slug: Web/CSS/Reference/Properties/color-interpolation-filters
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

**`color-interpolation-filters`** は [CSS](/ja/docs/Web/CSS) のプロパティで、SVG フィルター効果によって行われる画像処理における色空間を指定します。この CSS プロパティの値が明示的に宣言された場合、その値は要素の {{SVGAttr("color-interpolation-filters")}} 属性で指定された値よりも優先されます。

> [!NOTE]
> {{SVGAttr("color-interpolation-filters")}} プロパティは、SVG フィルター操作にのみ影響します。{{SVGElement("feOffset")}}, {{SVGElement("feImage")}}, {{SVGElement("feTile")}}, {{SVGElement("feFlood")}} などのフィルタープリミティブには影響しませんが、各種フィルター効果要素（{{SVGElement('feBlend')}} など）には適用されます。完全な一覧については、SVG {{SVGAttr('color-interpolation-filters')}} のページを参照してください。

> [!NOTE]
> SVG の {{SVGAttr('color-interpolation')}} 属性の初期値は `sRGB` であるのに対し、`color-interpolation-filters` の初期値は `linearRGB` であることに留意することが重要です。つまり、デフォルトの場合、フィルター効果による補間処理は、他のすべての色補間とは異なる色空間で行われることになります。

## 構文

```css
color-interpolation-filters: auto;
color-interpolation-filters: linearRGB;
color-interpolation-filters: sRGB;

/* グローバル値 */
color-interpolation-filters: inherit;
color-interpolation-filters: initial;
color-interpolation-filters: revert;
color-interpolation-filters: revert-layer;
color-interpolation-filters: unset;
```

### 値

このプロパティは、以下のキーワード値のいずれかとして指定します。

- `linearRGB`
  - : [sRGB 仕様書](https://webstore.iec.ch/en/publication/6169)で説明されているように、線形化された RGB 色空間で色補間処理が行われることを示します。これがデフォルトのプロパティ値です。
- `sRGB`
  - : ガンマ補正された sRGB 色空間で色補間処理を行うことを示します。
- `auto`
  - : ユーザーエージェントが、色の補間処理において `sRGB` または `linearRGB` のどちらかの色空間を選べることを示します。この選択肢は、作成者が色の補間処理を特定の色空間で行うことを要求しないこと示しています。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("color-interpolation")}}
- SVG {{SVGAttr("color-interpolation-filters")}} 属性
- [sRGB 仕様書](https://webstore.iec.ch/en/publication/6169)
