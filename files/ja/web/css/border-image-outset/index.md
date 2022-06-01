---
title: border-image-outset
slug: Web/CSS/border-image-outset
tags:
  - CSS
  - CSS 背景と境界
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.border-image-outset
translation_of: Web/CSS/border-image-outset
---
{{CSSRef}}

**`border-image-outset`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の[境界画像](/ja/docs/Web/CSS/border-image)が境界ボックスからはみ出す幅を設定します。

境界画像のうち、 `border-image-outset` によって要素の境界ボックスの外に表示された部分は、はみ出した際にスクロールバーを表示させたり、マウスイベントを受け取ったりすることはありません。

{{EmbedInteractiveExample("pages/css/border-image-outset.html")}}

## 構文

```css
/* <length> 値 */
border-image-outset: 1rem;

/* <number> 値 */
border-image-outset: 1.5;

/* 上下 | 左右 */
border-image-outset: 1 1.2;

/* 上 | 左右 | 下 */
border-image-outset: 30px 2 45px;

/* 上 | 右 | 下 | 左 */
border-image-outset: 7px 12px 14px 5px;

/* グローバル値 */
border-image-outset: inherit;
border-image-outset: initial;
border-image-outset: revert;
border-image-outset: unset;
```

`border-image-outset` プロパティは、1 つから 4 つの値を使用して指定することができます。それぞれの値は {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;number&gt;")}} です。負の値は無効であり、指定すると `border-image-outset` の宣言が無効になります。

1.  値が **1 つ**指定された場合は、**全四辺**に適用されます。
2.  値が **2 つ**指定された場合は、1 つ目が**上下**に、2 つ目が**左右**に適用されます。
3.  値が **3 つ**指定された場合は、1 つ目が**上**に、2 つ目が**左右**に、3 つ目が**下**に適用されます。
4.  値が **4 つ**指定された場合は、**上**、**右**、**下**、**左**の順 (時計回り) で適用されます。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : `border-image` がはみ出す寸法を長さ — 数値と単位で指定します。
- {{cssxref("&lt;number&gt;")}}
  - : `border-image` がはみ出す寸法を、要素の対応する {{cssxref("border-width")}} の倍数で指定します。例えば、要素が `border-width: 1em 2px 0 1.5rem` で、 `border-image-outset: 2` であると、最終的な `border-image-outset` は `2em 4px 0 3rem` として計算されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Outsetting_a_border_image">境界画像をはみ出させる</h3>

#### HTML

```html
<div id="outset">この要素の境界画像ははみ出しています。</div>
```

#### CSS

```css
#outset {
  width: 10rem;
  background: #cef;
  border: 1.4rem solid;
  border-image: radial-gradient(#ff2, #55f) 40;
  border-image-outset: 1.5;  /* 1.5 × 1.4rem = 2.1rem */
  margin: 2.1rem;
}
```

#### 例

{{EmbedLiveSample("Outsetting_a_border_image", "auto", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [背景と境界](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders)
- [CSS の学習: 背景と境界](/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
