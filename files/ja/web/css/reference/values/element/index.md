---
title: element()
slug: Web/CSS/Reference/Values/element
l10n:
  sourceCommit: e253c3abaca1994b6b940699ea582091df5207f3
---

{{SeeCompatTable}}

**`element()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、任意の HTML 要素から生成された {{cssxref("&lt;image&gt;")}} 値を定義します。この画像は動的で、HTML 要素が変更されると、この関数の結果を使う CSS プロパティが自動的に更新されます。

特に便利な使い道としては、HTML の {{HTMLElement("canvas")}} 要素の画像を背景に使うというものです。

Gecko ブラウザーでは、標準外の {{domxref("document.mozSetImageElement()")}} メソッドで背景として使われる要素を既定の CSS の背景要素と取り替えることができます。

## 構文

```css
element(id)
```

ここで:

- _id_
  - : 背景として使う要素の ID です。要素の HTML 属性 #_id_ に定義されているものです。

## 形式文法

{{CSSSyntax}}

## 例

以下の例は、 `-moz-element()` に対応している Firefox のビルドが必要です。

### いくらか現実的な例

この例では hidden 状態の {{HTMLElement("div")}} を背景に使います。背景要素はグラデーションを使うだけでなく、背景の一部として描画されるテキストも含んでいます。

```html-nolint
<div id="target-box">
  <p>このボックスは、#my-background ID を付けている要素を背景として使用しています。</p>
</div>

<div id="background-container">
  <div id="my-background">
    <p>このテキストは背景の一部です。かっこいいでしょ？</p>
  </div>
</div>
```

```css
#target-box {
  width: 400px;
  height: 400px;
  background: -moz-element(#my-background) no-repeat;
}

#background-container {
  overflow: hidden;
  height: 0;
}

#my-background {
  width: 1024px;
  height: 1024px;
  background-image: linear-gradient(to right, red, orange, yellow, white);
}

#my-background p {
  transform-origin: 0 0;
  rotate: 45deg;
  color: white;
}
```

{{EmbedLiveSample("いくらか現実的な例")}}

"my-background" という ID を持つ {{HTMLElement("div")}} 要素が、「このボックスは、#my-background ID を付けている要素を背景として使用しています。」という段落を含むコンテンツの背景に使われています。

### ページプレビュー

この [Vincent De Oliveira の例に基づいた例](https://iamvdo.me/en/blog/css-element-function)は、 `<div id="css-source">` のプレビューを `<div id="css-result">` の中に生成します。

#### HTML

```html live-sample___page_preview
<div id="css-source">
  <h1>ページプレビュー</h1>
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
