---
title: mask-border-repeat
slug: Web/CSS/mask-border-repeat
tags:
  - CSS
  - CSS プロパティ
  - CSS マスク
  - Experimental
  - NeedsCompatTable
  - NeedsExample
  - Reference
  - recipe:css-property
browser-compat: css.properties.mask-border-repeat
translation_of: Web/CSS/mask-border-repeat
---
{{CSSRef}}

**`mask-border-repeat`** は [CSS](/ja/docs/Web/CSS) のプロパティで、どのように元の画像の[辺の領域](/ja/docs/Web/CSS/border-image-slice#edge-regions)を要素の[マスク境界](/ja/docs/Web/CSS/mask-border)の寸法に合うように調整するかを設定します。

## 構文

```css
/* キーワード値 */
mask-border-repeat: stretch;
mask-border-repeat: repeat;
mask-border-repeat: round;
mask-border-repeat: space;

/* 上下 | 左右 */
mask-border-repeat: round stretch;

/* グローバル値 */
mask-border-repeat: inherit;
mask-border-repeat: initial;
mask-border-repeat: revert;
mask-border-repeat: unset;
```

`mask-border-repeat` プロパティは、以下の値のリストから 1 つまたは 2 つの値を使用して指定します。

- **1 つ**の値が指定されると、**全四辺**に同じ動作が適用されます。
- **2 つ**の値が指定されると、最初の値は**上と下**の辺に、二番目の値は**左と右**の辺に適用されます。

<h3 id="Values" name="Values">値</h3>

- `stretch`
  - : 元の画像の辺の領域は、それぞれの境界の間の溝を埋めるように引き伸ばされます。
- `repeat`
  - : 元の画像の辺の領域は、それぞれの境界の間の溝を埋めるようにタイル配置 (繰り返し) されます。タイルは正しく合うように切り取られることがあります。
- `round`
  - : 元の画像の辺の領域は、それぞれの境界の間の溝を埋めるようにタイル配置 (繰り返し) されます。タイルは正しく合うように引き伸ばされることがあります。
- `space`
  - : 元の画像の辺の領域は、それぞれの境界の間の溝を埋めるようにタイル配置 (繰り返し) されます。正しく合うように間隔が配布されることがあります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### Basic usage

This property doesn't appear to be supported anywhere yet. When it eventually starts to be supported, it will serve to define how the border mask slice will repeat around the border — i.e. will it just repeat, or be scaled slightly so a whole number of slices fits, or be stretched so one slice fits?

```css
mask-border-repeat: round;
```

Chromium-based browsers support an outdated version of this property — `mask-box-image-repeat` — with a prefix:

```css
-webkit-mask-box-image-repeat: round;
```

> **Note:** The [`mask-border`](/ja/docs/Web/CSS/mask-border) page features a working example (using the out-of-date prefixed border mask properties supported in Chromium), so you can get an idea of the effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
