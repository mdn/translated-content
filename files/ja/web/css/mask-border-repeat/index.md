---
title: mask-border-repeat
slug: Web/CSS/mask-border-repeat
tags:
  - CSS
  - CSS マスク
  - CSS プロパティ
  - 実験的
  - NeedsCompatTable
  - NeedsExample
  - リファレンス
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

- **1 つ**の値が指定されると、**全 4 辺**に同じ動作が適用されます。
- **2 つ**の値が指定されると、最初の値は**上と下**の辺に、二番目の値は**左と右**の辺に適用されます。

### 値

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

### 基本的な使用

このプロパティは、まだどこでも対応されていないようです。このプロパティが対応されるようになれば、境界マスクのスライスが境界の周りでどのように繰り返されるかを定義することができるようになります。 — つまり、ただ繰り返すのか、スライスの全体数が収まるように少しだけ拡大縮小するのか、1 つのスライスが収まるように引き伸ばすのか、ということです。

```css
mask-border-repeat: round;
```

Chromium ベースのブラウザーは、このプロパティの古い版 — `mask-box-image-repeat` — に接頭辞つきで対応しています。

```css
-webkit-mask-box-image-repeat: round;
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
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
