---
title: background-origin
slug: Web/CSS/background-origin
tags:
  - CSS
  - CSS 背景
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.background-origin
translation_of: Web/CSS/background-origin
---
{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の **`background-origin`** プロパティは、背景配置領域を境界の開始位置、境界の内部、パディングの内部から設定します。

{{EmbedInteractiveExample("pages/css/background-origin.html")}}

{{cssxref("background-attachment")}} が `fixed` のときは `background-origin` が無視されることに注意してください。

## 構文

```css
/* キーワード値 */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

/* グローバル値 */
background-origin: inherit;
background-origin: initial;
background-origin: revert;
background-origin: unset;
```

`background-origin` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

- `border-box`
  - : 背景は境界ボックスからの相対位置になります。
- `padding-box`
  - : 背景はパディングボックスからの相対位置になります。
- `content-box`
  - : 背景はコンテンツボックスからの相対位置になります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 背景画像の原点を設定

```css
.example {
  border: 10px double;
  padding: 10px;
  background: url('image.jpg');
  background-position: center left;
  background-origin: content-box;
}
```

```css
#example2 {
  border: 4px solid black;
  padding: 10px;
  background: url('image.gif');
  background-repeat: no-repeat;
  background-origin: border-box;
}
```

```css
div {
  background-image: url('logo.jpg'), url('mainback.png'); /* 背景に 2 つの画像を適用 */
  background-position: top right, 0px 0px;
  background-origin: content-box, padding-box;
}
```

<h3 id="Using_two_gradients">2 つのグラデーションの使用</h3>

この例では、ボックスに太い点線の境界線が付いています。最初のグラデーションでは、 `padding-box` を `background-origin` として使用しているため、背景は境界線の内側に表示されます。2 つ目のグラデーションは、`content-box`を使用しているため、コンテンツの後ろにのみ表示されます。

```css
.box {
  margin: 10px 0;
  color: #fff;
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.6) 60%, rgba(252,176,69,1) 100%),
  radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 28%);
  border: 20px dashed black;
  padding: 20px;
  width: 400px;
  background-origin: padding-box, content-box;
  background-repeat: no-repeat;
}
```

```html
<div class="box">Hello!</div>
```

{{EmbedLiveSample('Using_two_gradients', 420, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("background-clip")}}
