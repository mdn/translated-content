---
title: mask-border-slice
slug: Web/CSS/mask-border-slice
tags:
  - CSS
  - CSS マスク
  - CSS プロパティ
  - 実験的
  - NeedsCompatTable
  - NeedsExample
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.mask-border-slice
translation_of: Web/CSS/mask-border-slice
---
{{CSSRef}}

**`mask-border-slice`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{cssxref("mask-border-source")}} で設定された画像を複数の領域に分割します。これらの領域は要素の[マスク境界](/ja/docs/Web/CSS/mask-border)の部品を構成するために使用されます。

## 構文

```css
/* すべての辺 */
mask-border-slice: 30%;

/* 垂直 | 水平 */
mask-border-slice: 10% 30%;

/* 上 | 水平 | 下 */
mask-border-slice: 30 30% 45;

/* 上 | 右 | 下 | 左 */
mask-border-slice: 7 12 14 5;

/* `fill` キーワードの使用 */
mask-border-slice: 10% fill 7 12;

/* グローバル値 */
mask-border-slice: inherit;
mask-border-slice: initial;
mask-border-slice: revert;
mask-border-slice: unset;
```

`mask-border-slice` プロパティは 1 ～ 4 つの `<number-percentage>` 値で指定し、それぞれの画像スライスの位置を表すことができます。負の数は無効です。対応する寸法よりも大きな値は `100%` に丸められます。

- 位置が **1 つ**指定された場合、全 4 本の分割線がそれぞれの辺から同じ距離で作成されます。
- 位置が **2 つ**指定された場合、1 つ目の値を**上下**の辺からの距離として、2 つ目を**左右**の辺からの距離として分割線を作成します。
- 位置が **3 つ**指定された場合、1 つ目の値を**上**の辺からの距離として、2 つ目を**左右**の辺からの距離、3 つ目は**下**の辺からの距離として分割線を作成します。
- 位置が **4 つ**指定された場合、**上**、**右**、**下**、**左**の順 (時計回り) でそれぞれの辺からの距離として分割線を作成します。

`fill` の値は任意であり、使用される場合は、宣言のどこにでも置くことができます。

### 値

- {{cssxref("&lt;number&gt;")}}
  - : 縁からのオフセットを、ラスター画像の場合はピクセル数で、ベクター画像の場合は座標で表します。ベクター画像の場合、数値は元の画像の寸法ではなく、要素の寸法に対する相対値になるので、この場合は一般にパーセント値の方が適しています。
- {{cssxref("&lt;percentage&gt;")}}
  - : 縁からのオフセットを、元の画像の寸法、つまり水平方向のオフセットであれば画像の幅、垂直方向のオフセットであれば画像の高さに対するパーセント値で表します。
- `fill`
  - : 中央の画像領域を維持します。幅と高さは、画像領域のそれぞれ上と左に一致するように拡縮されます。

## 解説

分割する過程で、4 つの角、4 つの辺、それに中央領域の計 9 つの領域を作成します。それぞれの辺からの距離で設定される 4 本の分割線が、領域の寸法を制御します。

[![border-image または border-image-slice プロパティで定義された 9 つの領域](border-image-slice.png)](border-image-slice.png)

上の図は、それぞれの領域の位置を説明しています。

- 1-4 の領域は角の領域です。それぞれが 1 回ずつ使用され、最終的な境界画像の中で四隅を形成します。
- 5-8 の領域は辺の領域です。これらは最終的な境界画像の中で、要素の寸法に合わせて[反復、拡縮、その他の加工](/ja/docs/Web/CSS/mask-border-repeat)が行われます。
- 9 の領域は中央領域です。既定では描画されませんが、キーワード `fill` が設定されていれば背景画像のように使用されます。

{{cssxref("mask-border-repeat")}}、{{cssxref("mask-border-width")}}、{{cssxref("mask-border-outset")}} の各プロパティは、最終的な境界画像を構成するためにこれらの領域が使用される方法を指定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使用

このプロパティは、まだどこでも対応されていないようです。このプロパティが対応されるようになれば、ソース画像から取られるスライスの大きさを定義する役割を果たし、境界マスクを生成するために使用されるようになります。

```css
mask-border-slice: 30 fill;
```

Chromium ベースのブラウザーは、このプロパティの古い版 — `mask-box-image-slice` — に接頭辞つきで対応しています。

```css
-webkit-mask-box-image-slice: 30 fill;
```

> **Note:** [`mask-border`](/ja/docs/Web/CSS/mask-border) ページでは動作する例を (Chromium で対応している古い接頭辞つきの境界マスクプロパティを使用して) 挙げていますので、効果について分かるでしょう。

> **Note:** fill キーワードは、要素の内容を表示したい場合には設定する必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("mask-border")}}
- {{cssxref("mask-border-mode")}}
- {{cssxref("mask-border-outset")}}
- {{cssxref("mask-border-repeat")}}
- {{cssxref("mask-border-source")}}
- {{cssxref("mask-border-width")}}
- [値 1 ～ 4 つの構文の説明](/ja/docs/Web/CSS/Shorthand_properties#tricky_edge_cases)
