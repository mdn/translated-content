---
title: border-image-source
slug: Web/CSS/border-image-source
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

**`border-image-source`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の[境界画像](/ja/docs/Web/CSS/border-image)に使われる元の画像を設定します。

{{EmbedInteractiveExample("pages/css/border-image-source.html")}}

元の画像を最終的な境界画像に動的に適用する上で、複数の領域に分割するために {{cssxref("border-image-slice")}} プロパティが使用されます。

## 構文

```css
/* キーワード値 */
border-image-source: none;

/* <image> 値 */
border-image-source: url(image.jpg);
border-image-source: linear-gradient(to top, red, yellow);

/* グローバル値 */
border-image-source: inherit;
border-image-source: initial;
border-image-source: revert;
border-image-source: revert-layer;
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
  border-image-source: url("image.png");
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
- {{cssxref("url_value", "&lt;url&gt;")}} データ型
- [Border images in CSS: A key focus area for Interop 2023](/en-US/blog/border-images-interop-2023/) (MDN blog, 2023)
