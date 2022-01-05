---
title: '-webkit-text-fill-color'
slug: Web/CSS/-webkit-text-fill-color
tags:
  - CSS
  - CSS プロパティ
  - 標準外
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.-webkit-text-fill-color
translation_of: Web/CSS/-webkit-text-fill-color
---
{{CSSRef}}{{Non-standard_header}}

`**-webkit-text-fill-color**` は CSS のプロパティで、テキストの文字の塗りつぶしの[色](/ja/docs/Web/CSS/color_value)を指定します。このプロパティが設定されていない場合、 {{cssxref("color")}} プロパティの値が使用されます。

```css
/* <color> 値 */
-webkit-text-fill-color: red;
-webkit-text-fill-color: #000000;
-webkit-text-fill-color: rgb(100, 200, 0);

/* グローバル値 */
-webkit-text-fill-color: inherit;
-webkit-text-fill-color: initial;
-webkit-text-fill-color: unset;
```

## 構文

### 値

- `<color>`
  - : 要素のテキストコンテンツの文字表面の塗りつぶし色。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 塗りつぶし色の変更

#### CSS

```css
p {
  margin: 0;
  font-size: 3em;
  -webkit-text-fill-color: green;
}
```

#### HTML

```html
<p>This text is green.</p>
```

#### 結果

{{EmbedLiveSample("Changing_the_fill_color", "380px", "60px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Surfin' Safari blog post announcing this feature](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [CSS-Tricks article explaining this feature](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke")}}
