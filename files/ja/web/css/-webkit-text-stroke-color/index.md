---
title: "-webkit-text-stroke-color"
slug: Web/CSS/-webkit-text-stroke-color
---

{{CSSRef}}{{Non-standard_header}}

**`-webkit-text-stroke-color`** は CSS のプロパティで、テキストの文字の線の[色](/ja/docs/Web/CSS/color_value)を示します。このプロパティが設定されない場合、 {{cssxref("color")}} プロパティの値が使用されます。

```css
/* <color> 値 */
-webkit-text-stroke-color: red;
-webkit-text-stroke-color: #e08ab4;
-webkit-text-stroke-color: rgb(200, 100, 0);

/* グローバル値 */
-webkit-text-stroke-color: inherit;
-webkit-text-stroke-color: initial;
-webkit-text-stroke-color: unset;
```

## 構文

### 値

- `<color>`
  - : 線の色。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 角の色を変化させる

#### HTML

```html
<p>Text with stroke</p>
<input type="color" value="#ff0000" />
```

#### CSS

```css
p {
  margin: 0;
  font-size: 4em;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #ff0000; /* ライブサンプルで変更可能 */
}
```

```js hidden
var colorPicker = document.querySelector("input");
colorPicker.addEventListener("change", function (evt) {
  document.querySelector("p").style.webkitTextStrokeColor = evt.target.value;
});
```

#### 結果

{{EmbedLiveSample("Varying_the_stroke_color", "500px", "100px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Surfin' Safari blog post announcing this feature](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [CSS-Tricks article explaining this feature](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-fill-color")}}
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke")}}
