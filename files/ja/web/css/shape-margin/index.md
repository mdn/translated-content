---
title: shape-margin
slug: Web/CSS/shape-margin
tags:
  - 境界
  - CSS
  - CSS プロパティ
  - CSS シェイプ
  - 浮動領域
  - プロパティ
  - Reference
  - シェイプ
  - float
  - マージン
  - recipe:css-property
  - shape-margin
browser-compat: css.properties.shape-margin
translation_of: Web/CSS/shape-margin
---
{{CSSRef}}

**`shape-margin`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{cssxref("shape-outside")}} を使用して作成された CSS シェイプのマージンを設定します。

{{EmbedInteractiveExample("pages/css/shape-margin.html")}}

マージンで、シェイプ (**浮動要素**) の縁と周囲のコンテンツとの間隔を調整することができます。

## 構文

```css
/* <length> 値 */
shape-margin: 10px;
shape-margin: 20mm;

/* <percentage> 値 */
shape-margin: 60%;

/* グローバル値 */
shape-margin: inherit;
shape-margin: initial;
shape-margin: revert;
shape-margin: unset;
```

### 値

- `<length-percentage>`
  - : シェイプのマージンを {{cssxref("&lt;length&gt;")}} 値または要素の包含ブロックの幅に対する {{cssxref("&lt;percentage&gt;")}} で設定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Adding_a_margin_to_a_polygon">多角形にマージンを追加</h3>

#### HTML

```html
<section>
<div class="shape"></div>
We are not quite sure of any one thing in biology; our knowledge of geology
is relatively very slight, and the economic laws of society are
uncertain to every one except some individual who attempts to set them
forth; but before the world was fashioned the square on the hypotenuse
was equal to the sum of the squares on the other two sides of a right
triangle, and it will be so after this world is dead; and the inhabitant
of Mars, if one exists, probably knows its truth as we know it.</section>
```

#### CSS

```css
section {
  max-width: 400px;
}

.shape {
  float: left;
  width: 150px;
  height: 150px;
  background-color: maroon;
  clip-path: polygon(0 0, 150px 150px, 0 150px);
  shape-outside: polygon(0 0, 150px 150px, 0 150px);
  shape-margin: 20px;
}
```

#### 結果

{{EmbedLiveSample("Adding_a_margin_to_a_polygon", 500, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS シェイプ](/ja/docs/Web/CSS/CSS_Shapes)
- [CSS シェイプの概要](/ja/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes)
- {{cssxref("shape-outside")}}
- {{cssxref("shape-image-threshold")}}
- {{cssxref("&lt;basic-shape&gt;")}}
