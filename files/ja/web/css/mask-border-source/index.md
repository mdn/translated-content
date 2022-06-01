---
title: mask-border-source
slug: Web/CSS/mask-border-source
tags:
  - CSS
  - CSS マスク
  - CSS プロパティ
  - 実験的
  - NeedsCompatTable
  - NeedsExample
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.mask-border-source
translation_of: Web/CSS/mask-border-source
---
{{CSSRef}}

**`mask-border-source`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の[マスク境界](/ja/docs/Web/CSS/mask-border)を生成するのに使われる元の画像を設定します。

{{cssxref("mask-border-slice")}} プロパティは、元の画像を最終的なマスク境界に動的に適用する上で、複数の領域に分割するために使用されます。

## 構文

```css
/* キーワード値 */
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

### 基本的な使用

このプロパティは、まだどこでも対応されていないようです。このプロパティが対応されるようになれば、境界マスクのソースを定義する役割を果たすことになります。

```css
mask-border-source: url(image.jpg);
```

Chromium ベースのブラウザーは、このプロパティの古い版 — `mask-box-image-source` — に接頭辞つきで対応しています。

```css
-webkit-mask-box-image-source: url(image.jpg);
```

> **Note:** [`mask-border`](/ja/docs/Web/CSS/mask-border) ページでは動作する例を (Chromium で対応している古い接頭辞つきの境界マスクプロパティを使用して) 挙げていますので、効果について分かるでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-width")}}
