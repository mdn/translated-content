---
title: element()
slug: Web/CSS/element
l10n:
  sourceCommit: 66944f622b6b51bc9c24bebbbea242138d910600
---

{{CSSRef}}{{SeeCompatTable}}

**`element()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、任意の HTML 要素から生成された {{cssxref("&lt;image&gt;")}} 値を定義します。この画像は動的で、HTML 要素が変更されると、この関数の結果を使う CSS プロパティが自動的に更新されます。

特に便利な使い道としては、HTML の {{HTMLElement("canvas")}} 要素の画像を背景に使うというものです。

Gecko ブラウザーでは、標準外の {{domxref("document.mozSetImageElement()")}} メソッドで背景として使われる要素を既定の CSS の背景要素と取り替えることができます。

## 構文

```css
element(id)
```

ここで:

- _id_
  - : 背景として使う要素の ID です。要素の HTML 属性 #_id_ に定義されているものです。

## 例

以下の例は、 `-moz-element()` に対応している Firefox のビルドが必要です。

### いくらか現実的な例

この例では hidden 状態の {{HTMLElement("div")}} を背景に使います。背景要素はグラデーションを使うだけでなく、背景の一部として描画されるテキストも含んでいます。

```html live-sample___a_somewhat_realistic_example
<div
  style="width:400px; height:400px; background:-moz-element(#myBackground1) no-repeat;">
  <p>This box uses the element with the #myBackground1 ID as its background!</p>
</div>

<div style="overflow:hidden; height:0;">
  <div
    id="myBackground1"
    style="width:1024px; height:1024px; background-image: linear-gradient(to right, red, orange, yellow, white);">
    <p style="transform-origin:0 0; rotate: 45deg; color:white;">
      This text is part of the background. Cool, huh?
    </p>
  </div>
</div>
```

{{EmbedLiveSample("A_somewhat_realistic_example")}}

"myBackground1" という ID を持つ {{HTMLElement("div")}} 要素が、"This box uses the element with the #myBackground1 ID as its background!" という段落を含むコンテンツの背景に使われています。

### ページプレビュー

この [Vincent De Oliveira の例に基づいた例](https://iamvdo.me/en/blog/css-element-function)は、 `<div id="css-source">` のプレビューを `<div id="css-result">` の中に生成します。

#### HTML

```html live-sample___page_preview
<div id="css-source">
  <h1>Page Preview</h1>
</div>
<div id="css-result"></div>
```

#### CSS

```css live-sample___page_preview
#css-result {
  background: -moz-element(#css-source) no-repeat;
  width: 256px;
  height: 32px;
  background-size: 80%;
  border: dashed;
}
```

#### 結果

{{EmbedLiveSample("Page_Preview")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("image/image", "image()")}}
- {{cssxref("image/image-set", "image-set()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("cross-fade", "cross-fade()")}}
- {{domxref("document.mozSetImageElement()")}}
