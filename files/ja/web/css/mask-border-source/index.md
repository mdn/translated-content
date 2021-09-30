---
title: mask-border-source
slug: Web/CSS/mask-border-source
tags:
  - CSS
  - CSS Masking
  - CSS プロパティ
  - Experimental
  - NeedsCompatTable
  - NeedsExample
  - Reference
  - recipe:css-property
browser-compat: css.properties.mask-border-source
translation_of: Web/CSS/mask-border-source
---
{{CSSRef}}

**`mask-border-source`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の[マスク境界](/ja/docs/Web/CSS/mask-border)を生成するのに使われる元の画像を設定します。

{{cssxref("mask-border-slice")}} プロパティは、元の画像を最終的なマスク境界に動的に適用する上で、複数の領域に分割するために使用されます。

## 構文

```css
/* Keyword 値 */
mask-border-source: none;

/* <image> 値 */
mask-border-source: url(image.jpg);
mask-border-source: linear-gradient(to top, red, yellow);

/* グローバル値 */
mask-border-source: inherit;
mask-border-source: initial;
mask-border-source: revert;
mask-border-source: unset;
```

### 値

- `none`
  - : マスク境界は使用されません。
- {{cssxref("&lt;image&gt;")}}
  - : マスク境界に使用する画像への参照です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### Basic usage

This property doesn't appear to be supported anywhere yet. When it eventually starts to be supported, it will serve to define the source of the border mask.

```css
mask-border-source: url(image.jpg);
```

Chromium-based browsers support an outdated version of this property — `mask-box-image-source` — with a prefix:

```css
-webkit-mask-box-image-source: url(image.jpg);
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
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-width")}}
