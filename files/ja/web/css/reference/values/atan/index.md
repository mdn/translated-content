---
title: atan()
slug: Web/CSS/Reference/Values/atan
original_slug: Web/CSS/atan
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`asin()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、`-∞` から `+∞` までの数値の逆正接を返す三角関数です。この関数には、 `-90deg` から `90deg` までの {{cssxref("&lt;angle&gt;")}} を表すラジアンの数を返す単一の計算が含まれています。

## 構文

```css
/* 単一の <number> 値 */
transform: rotate(atan(1));
transform: rotate(atan(4 * 50));

/* その他の値 */
transform: rotate(atan(pi / 2));
transform: rotate(atan(e * 3));
```

### 引数

`atan(number)` 関数は、引数として 1 つの値のみを受け入れます。

- `number`
  - : {{cssxref("&lt;number&gt;")}} に解決される数式で、 `-∞` と `+∞` の間です。

### 返値

`number` の逆正接で、常に {{cssxref("&lt;angle&gt;")}} であり、 `-90deg` と `90deg` の間です。

- `number` が `0⁻` の場合、結果は `0⁻` になります。
- `number` が `+∞` の場合、結果は `90deg` になります。
- `number` が `-∞` の場合、結果は `-90deg` になります。

すなわち、次の通りです。

- `atan(-infinity)` は `-90deg` になります。
- `atan(-1)` は `-45deg` になります。
- `atan(0)` は `0deg` になります。
- `atan(1)` は `45deg` になります。
- `atan(infinity)` は `90deg` になります。

## 形式文法

{{CSSSyntax}}

## 例

### 要素の回転

`atan()` 関数は {{cssxref("&lt;angle&gt;")}} を返すので、要素の回転 ({{cssxref("transform-function/rotate", "rotate")}}) に使用することができます。

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
  transform: rotate(atan(-99999));
}
div.box-2 {
  transform: rotate(atan(-1));
}
div.box-3 {
  transform: rotate(atan(0));
}
div.box-4 {
  transform: rotate(atan(1));
}
div.box-5 {
  transform: rotate(atan(99999));
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
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan2")}}
