---
title: asin()
slug: Web/CSS/Reference/Values/asin
original_slug: Web/CSS/asin
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`asin()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、`-1` から `1` までの数値の逆正弦を返す三角関数です。この関数には、 `-90deg` から `90deg` までの {{cssxref("&lt;angle&gt;")}} を表すラジアンの数を返す単一の計算が含まれています。

## 構文

```css
/* 単一の <number> 値 */
transform: rotate(asin(-0.2));
transform: rotate(asin(2 * 0.125));

/* その他の値 */
transform: rotate(asin(pi / 5));
transform: rotate(asin(e / 3));
```

### 引数

`asin(number)` 関数は、引数として 1 つの値のみを受け入れます。

- `number`
  - : {{cssxref("&lt;number&gt;")}} に解決される数式で、 `-1` と `1` の間です。

### 返値

`number` の逆正弦で、常に {{cssxref("&lt;angle&gt;")}} であり、 `-90deg` と `90deg` の間です。

- `number` が `-1` より小さいか `1` より大きい場合、結果は `NaN` になります。
- `number` がちょうど `1` の場合、結果は `0` になります。

## 形式文法

{{CSSSyntax}}

## 例

### 要素の回転

`asin()` 関数は {{cssxref("&lt;angle&gt;")}} を返すので、要素の回転 ({{cssxref("transform-function/rotate", "rotate")}}) に使用することができます。

#### HTML

```html
<div class="box box-1"></div>
<div class="box box-2"></div>
<div class="box box-3"></div>
<div class="box box-4"></div>
<div class="box box-5"></div>
```

#### CSS

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
```

```css
div.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(orange, red);
}
div.box-1 {
  transform: rotate(asin(1));
}
div.box-2 {
  transform: rotate(asin(0.5));
}
div.box-3 {
  transform: rotate(asin(0));
}
div.box-4 {
  transform: rotate(asin(-0.5));
}
div.box-5 {
  transform: rotate(asin(-1));
}
```

#### 結果

{{EmbedLiveSample('Rotate elements', '100%', '200px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("sin")}}
- {{CSSxRef("cos")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
