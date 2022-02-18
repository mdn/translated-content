---
title: mask-border-mode
slug: Web/CSS/mask-border-mode
tags:
  - CSS
  - CSS マスク
  - CSS プロパティ
  - 実験的
  - NeedsContent
  - NeedsExample
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.mask-border-mode
translation_of: Web/CSS/mask-border-mode
---
{{CSSRef}}

**`mask-border-mode`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[マスク境界](/ja/docs/Web/CSS/mask-border)の混合モードを指定します。

## 構文

```css
/* キーワード値 */
mask-border-mode: luminance;
mask-border-mode: alpha;

/* グローバル値 */
mask-border-mode: inherit;
mask-border-mode: initial;
mask-border-mode: repeat;
mask-border-mode: unset;
```

### 値

- `luminance`
  - : マスク境界画像の輝度値がマスク値として使用されます。
- `alpha`
  - : マスク境界画像のアルファ値がマスク値として使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使用

このプロパティは、まだどこでも対応されていないようです。このプロパティが対応されるようになれば、マスク境界に使用される混合モードの種類を、輝度値とアルファ値から指定することができるようになります。

```css
mask-border-mode: luminance;
mask-border-mode: alpha;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
