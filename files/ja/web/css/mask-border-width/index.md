---
title: mask-border-width
slug: Web/CSS/mask-border-width
tags:
  - CSS
  - CSS Masking
  - CSS プロパティ
  - Experimental
  - NeedsCompatTable
  - NeedsExample
  - Reference
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

/* &lt;length&gt; 値 */
mask-border-width: 1rem;

/* &lt;percentage&gt; 値 */
mask-border-width: 25%;

/* &lt;number&gt; 値 */
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

### Basic usage

This property doesn't appear to be supported anywhere yet. When it eventually starts to be supported, it will serve to define the width of the border mask — setting this to a different value to [`mask-border-slice`](/ja/docs/Web/CSS/mask-border-slice) will cause the slices to be scaled to fit the border mask.

```css
mask-border-width: 30 fill;
```

Chromium-based browsers support an outdated version of this property — `mask-box-image-width` — with a prefix:

```css
-webkit-mask-box-image-width: 20px;
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
- {{cssxref("mask-border-source")}}
