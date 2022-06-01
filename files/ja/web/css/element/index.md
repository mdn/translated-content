---
title: element()
slug: Web/CSS/element
tags:
  - CSS
  - CSS 関数
  - CSS4-images
  - 関数
  - レイアウト
  - Reference
  - ウェブ
translation_of: Web/CSS/element()
original_slug: Web/CSS/element()
browser-compat: css.types.image.element
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

この例を[ライブで見る](https://media.prod.mdn.mozit.cloud/samples/cssref/moz-element.html)には、`-moz-element()` に対応している Firefox が必要です。

<h3 id="A_somewhat_realistic_example">いくらか現実的な例</h3>

この例では hidden 状態の {{HTMLElement("div")}} を背景に使います。背景要素はグラデーションを使うだけでなく、背景の一部として描画されるテキストも含んでいます。

```html
<div style="width:400px; height:400px; background:-moz-element(#myBackground1) no-repeat;">
  <p>This box uses the element with the #myBackground1 ID as its background!</p>
</div>

<div style="overflow:hidden; height:0;">
  <div id="myBackground1" style="width:1024px; height:1024px; background-image: linear-gradient(to right, red, orange, yellow, white);">
  <p style="transform-origin:0 0; transform: rotate(45deg); color:white;">This text is part of the background. Cool, huh?</p>
  </div>
</div>
```

"myBackground1" という ID を持つ {{HTMLElement("div")}} 要素が、"This box uses the element with the #myBackground1 ID as its background!" という段落を含むコンテンツの背景に使われています。

![](example1.png)

<h3 id="A_somewhat_more_bizarre_example">いくらか突飛な例</h3>

この例は hidden 状態の {{HTMLElement("button")}} 要素を、背景の繰り返しパターンとして使います。これは、好きな要素を背景として使うことができるという例ですが、すぐれたデザインとはいえないかもしれません。

```html
<div style="width:400px; height:100px; background:-moz-element(#myBackground2);">
</div>

<div style="overflow:hidden; height:0;">
  <button id="myBackground2" type="button">Evil button!</button>
</div>
```

![](example2.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("image/image()", "image()")}}
- {{cssxref("image/image-set()", "image-set()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("element()")}}
- {{cssxref("cross-fade()")}}
- {{domxref("document.mozSetImageElement()")}}
