---
title: CSS `-webkit-text-fill-color` プロパティ
short-title: -webkit-text-fill-color
slug: Web/CSS/Reference/Properties/-webkit-text-fill-color
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`-webkit-text-fill-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキストの文字の塗りつぶしの[色](/ja/docs/Web/CSS/Reference/Values/color_value)を指定します。このプロパティが設定されていない場合、 {{cssxref("color")}} プロパティの値が使用されます。

## 構文

```css
/* <color> 値 */
-webkit-text-fill-color: red;
-webkit-text-fill-color: #123456;
-webkit-text-fill-color: rgb(100 200 0);

/* グローバル値 */
-webkit-text-fill-color: inherit;
-webkit-text-fill-color: initial;
-webkit-text-fill-color: revert;
-webkit-text-fill-color: revert-layer;
-webkit-text-fill-color: unset;
```

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
<p>このテキストは緑色です。</p>
```

#### 結果

{{EmbedLiveSample("Changing_the_fill_color", "380px", "60px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Introducing Text-Stroke](https://webkit.org/blog/85/introducing-text-stroke/) - webkit.org (2006)
- [CSS-Tricks article explaining this feature](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke")}}
