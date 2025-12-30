---
title: matrix()
slug: Web/CSS/Reference/Values/transform-function/matrix
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**`matrix()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、二次元同次変換行列を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

> [!NOTE]
> `matrix(a, b, c, d, tx, ty)` は `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)` の短縮形です。

{{InteractiveExample("CSS デモ: matrix()")}}

```css interactive-example-choice
transform: matrix(1.2, 0.2, -1, 0.9, 0, 20);
```

```css interactive-example-choice
transform: matrix(0.4, 0, 0.5, 1.2, 60, 10);
```

```css interactive-example-choice
transform: matrix(0, 1, 1, 0, 0, 0);
```

```css interactive-example-choice
transform: matrix(0.1, 1, -0.3, 1, 0, 0);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

## 構文

```css
matrix(a, b, c, d, tx, ty)
```

### 値

`matrix()` 関数は 6 つの値で指定されます。定数は内蔵されていて引数としては渡されず、その他の引数は列優先の順で記述されます。

- _a_ _b_ _c_ _d_
  - : {{cssxref("&lt;number&gt;")}} で、線形変換を記述します。
- _tx_ _ty_
  - : {{cssxref("&lt;number&gt;")}} で、適用する変換を記述します。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/ja/docs/Web/CSS/Reference/Values/transform-function#直交座標系">直交座標系</a> (<a href="https://ja.wikipedia.org/wiki/実数空間">ℝ^2</a>)</th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">同次座標系</a> (<a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a>)</th>
      <th scope="col">直交座標系 (<a href="https://ja.wikipedia.org/wiki/実数空間">ℝ^3</a>)</th>
      <th scope="col">同次座標系 (<a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a>)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} a & c \\ b & d \end{pmatrix}</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} a & c & tx \\ b & d & ty \\ 0 & 0 & 1 \\ \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} a & c & tx \\ b & d & ty \\ 0 & 0 & 1 \\ \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mn>0</mn></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mn>0</mn></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} a & c & 0 & tx \\ b & d & 0 & ty \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
    <tr>
      <td><code>[a b c d tx ty]</code></td>
    </tr>
  </tbody>
</table>

値は次の関数を表します。
`matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())`

## 形式文法

{{CSSSyntax}}

## 例

### HTML

```html
<div>通常</div>
<div class="changed">変更後</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.changed {
  transform: matrix(1, 2, -1, 1, 80, 80);
  background-color: pink;
}
```

### 結果

{{EmbedLiveSample("Examples", 350, 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- 独立した座標変換プロパティ:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [`matrix3d()`](/ja/docs/Web/CSS/Reference/Values/transform-function/matrix3d)
