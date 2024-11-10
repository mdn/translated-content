---
title: pow()
slug: Web/CSS/pow
---

{{CSSRef}}

**`pow()`** [CSS](/ja/docs/Web/CSS) [関数](/ja/docs/Web/CSS/CSS_Functions)は、基数を累乗した値を返す指数関数です。

{{CSSxRef("exp")}} 関数は `pow()` の特別なケースで、基数が数学定数 [e](<https://en.wikipedia.org/wiki/E_(mathematical_constant)>) になります。

## 構文

```css
/* <number> 値 */
width: calc(10px * pow(5, 2)); /* 10px * 25 = 250px */
width: calc(10px * pow(5, 3)); /* 10px * 125 = 1250px */
width: calc(10px * pow(2, 10)); /* 10px * 1024 = 10240px */
```

### 引数

`pow(base, number)` 関数は、カンマで区切られた 2 つの値を引数で受け取ります。

- `base`
  - : {{CSSxRef("&lt;number&gt;")}} に解決される計算式で、基数を表します。
- `number`
  - : {{CSSxRef("&lt;number&gt;")}} に解決される計算式で、指数を表します。

### 返値

返値は {{CSSxRef("&lt;number&gt;")}} で、base<sup>number</sup>、つまり `base` を `number` 乗した値になります。

## 形式文法

{{CSSSyntax}}

## 例

### 固定比率で見出しを拡大する

`pow()` 関数は、ページ上のすべてのフォントサイズを固定比率で関連付ける CSS モジュラースケールのような戦略に役立ちます。

#### HTML

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

#### CSS

```css
h1 {
  font-size: calc(1rem * pow(1.5, 4));
}
h2 {
  font-size: calc(1rem * pow(1.5, 3));
}
h3 {
  font-size: calc(1rem * pow(1.5, 2));
}
h4 {
  font-size: calc(1rem * pow(1.5, 1));
}
h5 {
  font-size: calc(1rem * pow(1.5, 0));
}
h6 {
  font-size: calc(1rem * pow(1.5, -1));
}
```

#### 結果

{{EmbedLiveSample('Scale headings by fixed ratio', '100%', '300px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("sqrt")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("exp")}}
- {{CSSxRef("log")}}
