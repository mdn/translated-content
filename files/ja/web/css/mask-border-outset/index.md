---
title: mask-border-outset
slug: Web/CSS/mask-border-outset
tags:
  - CSS
  - CSS マスク
  - CSS プロパティ
  - 実験的
  - NeedsCompatTable
  - NeedsExample
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.mask-border-outset
translation_of: Web/CSS/mask-border-outset
---
{{CSSRef}}

**`mask-border-outset`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の[マスク境界](/ja/docs/Web/CSS/mask-border)の境界ボックスからの距離を指定します。

## 構文

```css
/* <length> 値 */
mask-border-outset: 1rem;

/* <number> 値 */
mask-border-outset: 1.5;

/* 上下 | 左右 */
mask-border-outset: 1 1.2;

/* 上 | 左右 | 下 */
mask-border-outset: 30px 2 45px;

/* 上 | 右 | 下 | 左 */
mask-border-outset: 7px 12px 14px 5px;

/* グローバル値 */
mask-border-outset: inherit;
mask-border-outset: initial;
mask-border-outset: revert;
mask-border-outset: unset;
```

`mask-border-outset` プロパティは 1 ～ 4 つの値で指定します。それぞれの値は {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;number&gt;")}} です。負の値は無効です。

- 位置が **1 つ**指定された場合、**全 4 辺**に同じ距離が適用されます。
- 位置が **2 つ**指定された場合、1 つ目の距離は**上下**に、2 つ目は**左右**に適用されます。
- 位置が **3 つ**指定された場合、1 つ目の距離はを**上**に、2 つ目は**左右**に、3 つ目は**下**に適用されます。
- 位置が **4 つ**指定された場合、**上**、**右**、**下**、**左**の順 (時計回り) で適用されます。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : マスク境界の辺からの距離を長さで表します。
- {{cssxref("&lt;number&gt;")}}
  - : マスク境界の辺からの距離を、対応する {{cssxref("border-width")}} の倍数で表します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使用

このプロパティは、まだどこでも対応されていないようです。このプロパティが対応されるようになれば、要素の境界ボックスからマスクをどれだけ内側に離すかを示します。 — この機能を使用すると、マスクの端の位置を境界のすぐ内側ではなく、境界の途中にすることができるようになります。

```css
mask-border-outset: 1rem;
```

Chromium ベースのブラウザーは、このプロパティの古い版 — `mask-box-image-outset` — に接頭辞つきで対応しています。

```css
-webkit-mask-box-image-outset: 1rem;
```

> **Note:** [`mask-border`](/ja/docs/Web/CSS/mask-border) ページでは動作する例を (Chromium で対応している古い接頭辞つきの境界マスクプロパティを使用して) 挙げていますので、効果について分かるでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
