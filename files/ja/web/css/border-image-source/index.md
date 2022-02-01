---
title: border-image-source
slug: Web/CSS/border-image-source
tags:
  - CSS
  - CSS 背景と境界
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.border-image-source
translation_of: Web/CSS/border-image-source
---
{{CSSRef}}

**`border-image-source`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の[境界画像](/ja/docs/Web/CSS/border-image)に使われる元の画像を設定します。

{{EmbedInteractiveExample("pages/css/border-image-source.html")}}

元の画像を最終的な境界画像に動的に適用する上で、複数の領域に分割するために {{cssxref("border-image-slice")}} プロパティが使用されます。

## 構文

```css
/* キーワード値 */
border-image-source: none;

/* &lt;image&gt; 値 */
border-image-source: url(image.jpg);
border-image-source: linear-gradient(to top, red, yellow);

/* グローバル値 */
border-image-source: inherit;
border-image-source: initial;
border-image-source: revert;
border-image-source: unset;
```

### 値

- `none`
  - : 境界画像は使用されません。代わりに {{cssxref("border-style")}} で定義されたものが表示されます。
- {{cssxref("&lt;image&gt;")}}
  - : 境界に使用する画像への参照です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

```css
.box {
  border-image-source: url('image.png');
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("border")}}
- {{cssxref("outline")}}
- {{cssxref("box-shadow")}}
- {{cssxref("background-image")}}
- {{cssxref("url()", "url()")}} 関数
