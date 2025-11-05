---
title: border-image-source
slug: Web/CSS/Reference/Properties/border-image-source
original_slug: Web/CSS/border-image-source
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

**`border-image-source`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の[境界画像](/ja/docs/Web/CSS/Reference/Properties/border-image)に使われる元の画像を設定します。

{{InteractiveExample("CSS デモ: border-image-source")}}

```css interactive-example-choice
border-image-source: url("/shared-assets/images/examples/border-diamonds.png");
```

```css interactive-example-choice
border-image-source: url("/shared-assets/images/examples/border-stars.png");
```

```css interactive-example-choice
border-image-source: repeating-linear-gradient(
  45deg,
  transparent,
  #4d9f0c 20px
);
```

```css interactive-example-choice
border-image-source: none;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is a box with a border around it.</div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background: #fff3d4;
  color: #000;
  border: 30px solid;
  border-image: url("/shared-assets/images/examples/border-diamonds.png") 30
    round;
  font-size: 1.2em;
}
```

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
