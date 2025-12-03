---
title: atan2()
slug: Web/CSS/Reference/Values/atan2
original_slug: Web/CSS/atan2
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`atan2()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、 `-infinity` から `infinity` までの 2 つの値の逆タンジェントを返す三角関数です。この関数は 2 つの引数を受け入れ、`-180deg` から `180deg` までの {{cssxref("&lt;angle&gt;")}} を表すラジアン数を返します。

## 構文

```css
/* 2 つの <number> 値 */
transform: rotate(atan2(3, 2));

/* 2 つの <dimension> 値 */
transform: rotate(atan2(1rem, -0.5rem));

/* 2 つの <percentage> 値 */
transform: rotate(atan2(20%, -30%));

/* その他の値 */
transform: rotate(atan2(pi, 45));
transform: rotate(atan2(e, 30));
```

### 引数

`atan2(y, x)` 関数は、カンマで区切られた 2 つの値を引数として受け入れます。それぞれの値は、 {{cssxref("&lt;number&gt;")}}、{{cssxref("&lt;dimension&gt;")}}、{{cssxref("&lt;percentage&gt;")}} のいずれかです。両方の値は同じ型である必要がありますが、{{cssxref("&lt;dimension&gt;")}} の場合は、単位が異なっていてもかまいません (例: `atan2(100px, 5vw)` は有効です)。

- `y`
  - : この点の y 座標。 {{cssxref("&lt;number&gt;")}}、{{cssxref("&lt;dimension&gt;")}}、{{cssxref("&lt;percentage&gt;")}} のいずれかに解決される計算式。
- `x`
  - : この点の x 座標。 {{cssxref("&lt;number&gt;")}}、{{cssxref("&lt;dimension&gt;")}}、{{cssxref("&lt;percentage&gt;")}} のいずれかに解決される計算式。

### 返値

2 つの値 `x` および `y` が指定された場合、関数 `atan2(y, x)` は、正の x 軸と原点から点 `(x, y)` までの光線の間の {{cssxref("&lt;angle&gt;")}} を計算して返します。

## 形式文法

{{CSSSyntax}}

## 例

### 要素の回転

`atan2()` 関数は {{cssxref("&lt;angle&gt;")}} を返すので、要素の回転 ({{cssxref("transform-function/rotate", "rotate")}}) に使用することができます。

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
  transform: rotate(atan2(3, 2));
}
div.box-2 {
  transform: rotate(atan2(3%, -2%));
}
div.box-3 {
  transform: rotate(atan2(-1, 0.5));
}
div.box-4 {
  transform: rotate(atan2(1, 0.5));
}
div.box-5 {
  transform: rotate(atan2(1rem, -0.5rem));
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
- {{CSSxRef("atan")}}
