---
title: "-webkit-text-stroke-width"
slug: Web/CSS/-webkit-text-stroke-width
---

{{CSSRef}}{{Non-standard_header}}

**`-webkit-text-stroke-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキストの線の太さを指定します。

## 構文

```css
/* キーワード値 */
-webkit-text-stroke-width: thin;
-webkit-text-stroke-width: medium;
-webkit-text-stroke-width: thick;

/* <length> 値 */
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-width: 0.1em;
-webkit-text-stroke-width: 1mm;
-webkit-text-stroke-width: 5pt;

/* グローバル値 */
-webkit-text-stroke-width: inherit;
-webkit-text-stroke-width: initial;
-webkit-text-stroke-width: unset;
```

### 値

- `<line-width>`
  - : 線の太さ。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 線の幅を変更

#### CSS

```css
p {
  margin: 0;
  font-size: 4em;
  -webkit-text-stroke-color: red;
}

#thin {
  -webkit-text-stroke-width: thin;
}

#medium {
  -webkit-text-stroke-width: 3px;
}

#thick {
  -webkit-text-stroke-width: 1.5mm;
}
```

#### HTML

```html
<p id="thin">Thin stroke</p>
<p id="medium">Medium stroke</p>
<p id="thick">Thick stroke</p>
```

#### 結果

{{EmbedLiveSample("Varying_stroke_widths", "450px", "230px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Surfin' Safari blog post announcing this feature](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [CSS-Tricks article explaining this feature](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke")}}
- {{cssxref("-webkit-text-fill-color")}}
