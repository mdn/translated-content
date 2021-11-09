---
title: mask
slug: Web/CSS/mask
tags:
  - CSS
  - CSS マスク
  - CSS プロパティ
  - Layout
  - リファレンス
  - SVG
  - Web
  - recipe:css-shorthand-property
browser-compat: css.properties.mask
translation_of: Web/CSS/mask
---
{{CSSRef}}

**`mask`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、指定された位置での画像のマスクまたは切り取りによって要素を (部分的または全体的に) 隠します。

> **Note:** 以下のプロパティに加えて、`mask` 一括指定は {{cssxref("mask-border")}} を初期値にリセットします。そのため、カスケード内の初期のマスク設定を上書きするには、他の一括指定や個々のプロパティではなく、`mask` 一括指定を使用することをお勧めします。これにより、`mask-border` もリセットされ、新しいスタイルが適用されるようになります。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`mask-clip`](/ja/docs/Web/CSS/mask-clip)
- [`mask-composite`](/ja/docs/Web/CSS/mask-composite)
- [`mask-image`](/ja/docs/Web/CSS/mask-image)
- [`mask-mode`](/ja/docs/Web/CSS/mask-mode)
- [`mask-origin`](/ja/docs/Web/CSS/mask-origin)
- [`mask-position`](/ja/docs/Web/CSS/mask-position)
- [`mask-repeat`](/ja/docs/Web/CSS/mask-repeat)
- [`mask-size`](/ja/docs/Web/CSS/mask-size)

## 構文

```css
/* キーワード値 */
mask: none;

/* 画像値 */
mask: url(mask.png);                       /* マスクとして使用されるピクセル画像 */
mask: url(masks.svg#star);                 /* マスクとして使用されるSVGグラフィック内の要素 */

/* 組み合わせ値 */
mask: url(masks.svg#star) luminance;       /* 輝度マスクとして使用される SVG グラフィック内の要素 */
mask: url(masks.svg#star) 40px 20px;       /* マスクとして使用される SVG グラフィック内の要素が、上から 40px、左から 20px の位置に配置されている */
mask: url(masks.svg#star) 0 0/50px 50px;   /* 幅と高さが 50px のマスクとして使用される SVG グラフィック内の要素 */
mask: url(masks.svg#star) repeat-x;        /* 水平方向に繰り返されるマスクとして使用される SVG グラフィック内の要素 */
mask: url(masks.svg#star) stroke-box;      /* ストロークで囲まれたボックスに拡張するマスクとして使用される SVG グラフィック内の要素 */
mask: url(masks.svg#star) exclude;         /* SVGグラフィック内の要素をマスクとして使用し、非重複部分を使用して背景と組み合わせる */

/* グローバル値 */
mask: inherit;
mask: initial;
mask: revert;
mask: unset;

/* 複数のマスク */
mask: url(masks.svg#star) left / 16px repeat-y,    /* SVG グラフィック内の要素が、幅 16px の左端のマスクとして使用されている */
      url(masks.svg#circle) right / 16px repeat-y; /* SVG グラフィック内の要素が、幅 16px の右端のマスクとして使用されている */
```

### 値

- `<mask-reference>`
  - : マスク画像のソースを設定します。 {{cssxref("mask-image")}} を参照してください。
- `<masking-mode>`
  - : マスク画像のマスクモードを設定します。 {{cssxref("mask-mode")}} を参照してください。
- `<position>`
  - : マスク画像の位置を設定します。 {{cssxref("mask-position")}} を参照してください。
- `<bg-size>`
  - : マスク画像の大きさを設定します。 {{cssxref("mask-size")}} を参照してください。
- `<repeat-style>`
  - : マスク画像の反復を設定します。 {{cssxref("mask-repeat")}} を参照してください。
- `<geometry-box>`
  - : `<geometry-box>` 値が 1 つのみが与えられた場合は、{{cssxref("mask-origin")}} と {{cssxref("mask-clip")}} の両方が設定されます。2 つの `<geometry-box>` 値が存在する場合、1 つ目値は {{cssxref("mask-origin")}} を設定し、2 つ目の値は {{cssxref("mask-clip")}} を設定します。
- `<geometry-box> | no-clip`
  - : マスク画像の影響を受ける範囲を設定します。 {{cssxref("mask-clip")}} を参照してください。
- `<compositing-operator>`
  - : 現在のマスクレイヤーに使用する合成操作を設定します。 {{cssxref("mask-composite")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 画像のマスク

```css
.target {
  mask: url(#c1) luminance;
}

.anothertarget {
  mask: url(resources.svg#c1) 50px 30px/10px 10px repeat-x exclude;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("clip-path")}}, {{Cssxref("filter")}}
- [CSS Shapes, clipping and masking – and how to use them](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
- [HTML コンテンツへ SVG 効果を適用する](/ja/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- [SVG](/ja/docs/Web/SVG)
