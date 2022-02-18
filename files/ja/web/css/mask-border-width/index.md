---
title: mask-border-width
slug: Web/CSS/mask-border-width
tags:
  - CSS
  - CSS マスク
  - CSS プロパティ
  - 実験的
  - NeedsCompatTable
  - NeedsExample
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.mask-border-width
translation_of: Web/CSS/mask-border-width
---
{{CSSRef}}

**`mask-border-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の[マスク境界](/ja/docs/Web/CSS/mask-border)の幅を設定します。

## 構文

```css
/* キーワード値 */
mask-border-width: auto;

/* <length> 値 */
mask-border-width: 1rem;

/* <percentage> 値 */
mask-border-width: 25%;

/* <number> 値 */
mask-border-width: 3;

/* 上下 | 左右 */
mask-border-width: 2em 3em;

/* 上 | 左右 | 下 */
mask-border-width: 5% 15% 10%;

/* 上 | 右 | 下 | 左 */
mask-border-width: 5% 2em 10% auto;

/* グローバル値 */
mask-border-width: inherit;
mask-border-width: initial;
mask-border-width: revert;
mask-border-width: unset;
```

`mask-border-width` プロパティは、以下の値のリストの中から 1 ～ 4 つの値を使って指定することができます。

- 値が **1 つ**指定された場合、**全 4 辺**に同じマージンが適用される。
- 値が **2 つ**指定された場合、1 つ目のマージンは**上下**、2 つ目は**左右**の辺に適用される。
- 値が **3 つ**指定された場合、1 つ目のマージンは**上**、2 つ目は**左右**、3 つ目は**下**の辺に適用される。
- 値が **4 つ**指定された場合、マージンはそれぞれ**上**、**右**、**下**、**左**の順 (時計回り) に適用される。

### 値

- `<length-percentage>`
  - : マスク境界の幅を、 {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で指定します。パーセント値は左右のオフセットについては境界領域の*幅*に対する相対値、上下のオフセットについては境界領域の*高さ*に対する相対値です。負の数であってはなりません。
- `<number>`
  - : マスク境界の幅を、対応する {{cssxref("border-width")}} の倍数で指定します。負の数であってはなりません。
- `auto`
  - : マスク境界の幅は、対応する {{cssxref("mask-border-slice")}} の固有の幅または高さ (適切な方) と等しくなります。画像が要求された固有の寸法を持っていない場合は、対応する `border-width` が代わりに使用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使用

このプロパティは、まだどこでも対応されていないようです。このプロパティが対応されるようになれば、境界マスクの幅を定義することになります。このプロパティを [`mask-border-slice`](/ja/docs/Web/CSS/mask-border-slice) と異なる値に設定すると、スライスは境界マスクに合わせて拡大縮小されます。

```css
mask-border-width: 30 fill;
```

Chromium ベースのブラウザーは、このプロパティの古い版 — `mask-box-image-width` — に接頭辞つきで対応しています。

```css
-webkit-mask-box-image-width: 20px;
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
- {{cssxref("mask-border-source")}}
