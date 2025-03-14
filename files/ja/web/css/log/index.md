---
title: log()
slug: Web/CSS/log
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

**`log()`** [CSS](/ja/docs/Web/CSS) [関数](/ja/docs/Web/CSS/CSS_Functions) は、数値の対数を返す指数関数です。

[対数](https://ja.wikipedia.org/wiki/%E5%AF%BE%E6%95%B0)は、べき乗の逆演算です。これは、第 1 引数として渡された数を得るために、固定された底をどれだけべき乗しなければならないかを示す数値です。

CSS では、1 つの引数のみ渡された場合は自然対数の底 `e`、つまり約 `2.7182818` が使用されます。第 2 引数を使用することで、任意の値を底として設定できます。

## 構文

```css
/* <number> 値 */
width: calc(100px * log(7.389)); /* 200px */
width: calc(100px * log(8, 2)); /* 300px */
width: calc(100px * log(625, 5)); /* 400px */
```

### 引数

`log(value [, base]?)` 関数は、引数として 2 つのカンマ区切りの計算式を受け取ります。

- `value`

  - 0 以上の {{cssxref("&lt;number&gt;")}} に解決される計算式で、対数を取る値です。

- `base`
  - 省略可能。0 以上の {{cssxref("&lt;number&gt;")}} に解決される計算式で、対数の底です。指定されていない場合、自然対数の底 `e` が使用されます。

### 返値

`base` が指定されている場合、`value` の対数を返します。

`base` が指定されていない場合、`value` の自然対数 (底 `e`) を返します。

## 形式文法

{{CSSSyntax}}

## 例

### 対数スケールでの `log()` 関数の使用

この例では、[対数スケール](https://ja.wikipedia.org/wiki/%E5%AF%BE%E6%95%B0%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%AB) を用いてデータ値を視覚化するために、`log()` 関数をどのように使用できるかを示しています。この例では、それぞれの横棒の幅は、底 10 の対数スケール上のデータ値に対応しています。各要素において、それぞれの値は `--value` という名前の [CSS カスタムプロパティ](/ja/docs/Web/CSS/Using_CSS_custom_properties) に割り当てられ、`.bar` クラスによってその幅が計算されています。

#### HTML

```html
<div class="bar" style="--value: 50">50</div>
<div class="bar" style="--value: 100">100</div>
<div class="bar" style="--value: 500">500</div>
<div class="bar" style="--value: 10000">10,000</div>
<div class="bar" style="--value: 2000000">2,000,000</div>
```

#### CSS

```css
.bar {
  width: calc(log(var(--value), 10) * 2em);
}
```

```css hidden
.bar {
  height: 2em;
  background-color: tomato;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.25em 0;
}
```

#### 結果

{{EmbedLiveSample('Using the log() function on a logarithmic scale', '100%', '200px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("pow")}}
- {{CSSxRef("sqrt")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("exp")}}
