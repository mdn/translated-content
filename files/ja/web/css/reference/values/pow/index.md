---
title: pow()
slug: Web/CSS/Reference/Values/pow
original_slug: Web/CSS/pow
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`pow()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、数値の累乗の値を返す指数関数です。

{{CSSxRef("exp")}} 関数は、基数の値が数学定数 [e](https://ja.wikipedia.org/wiki/ネイピア数) である `pow()` の特殊なケースです。

## 構文

```css
/* <number> 値 */
width: calc(10px * pow(5, 2)); /* 10px * 25 = 250px */
width: calc(10px * pow(5, 3)); /* 10px * 125 = 1250px */
width: calc(10px * pow(2, 10)); /* 10px * 1024 = 10240px */
```

### 引数

`pow(base, number)` 関数は、カンマで区切られた 2 つの値を引数として受け入れます。

- `base`
  - : 底を表す {{CSSxRef("&lt;number&gt;")}} に解決される計算式。
- `number`
  - : 指数を表す {{CSSxRef("&lt;number&gt;")}} に解決される計算式。

### 返値

{{CSSxRef("&lt;number&gt;")}} で、 base<sup>number</sup>、つまり `base` を `number` 乗した値を表します。

## 形式文法

{{CSSSyntax}}

## 例

### 見出しを固定比率で変倍する

`pow( )` 関数は、CSS モジュラースケールと同様の戦略に役立ちます。これは、ページ上のすべてのフォントサイズを、固定された比率で相互に関連付けます。

#### HTML

```html
<h1>見出し 1</h1>
<h2>見出し 2</h2>
<h3>見出し 3</h3>
<h4>見出し 4</h4>
<h5>見出し 5</h5>
<h6>見出し 6</h6>
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
