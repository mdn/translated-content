---
title: translate()
slug: Web/CSS/Reference/Values/transform-function/translate
original_slug: Web/CSS/transform-function/translate
l10n:
  sourceCommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

**`translate()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、要素を水平方向や垂直方向で再配置します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

{{InteractiveExample("CSS デモ: translate()")}}

```css interactive-example-choice
transform: translate(0);
```

```css interactive-example-choice
transform: translate(42px, 18px);
```

```css interactive-example-choice
transform: translate(-2.1rem, -2ex);
```

```css interactive-example-choice
transform: translate(3ch, 3mm);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="static-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

```css interactive-example
#static-element {
  opacity: 0.4;
  position: absolute;
}

#example-element {
  position: absolute;
}
```

この変換は、二次元ベクトルであることが特徴です。それぞれの方向にどれだけ要素が移動するかの座標を定義します。

## 構文

```css
/* 単一の <length-percentage> 値 */
transform: translate(200px);
transform: translate(50%);

/* 二つの <length-percentage> 値 */
transform: translate(100px, 200px);
transform: translate(100px, 50%);
transform: translate(30%, 200px);
transform: translate(30%, 50%);
```

### 値

- 単一の `<length-percentage>` values
  - : この値は {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で、変換ベクトルの横軸 (水平方向、X 座標) を表します。変換ベクトルの縦軸 (垂直方向、Y 座標) は `0` に設定されます。例えば、 `translate(2px)` は `translate(2px, 0)` と等価です。パーセント値の場合は、 {{cssxref("transform-box")}} で定義される参照ボックスの幅からの相対値です。
- 二つの `<length-percentage>` 値
  - : この値は 2 つの {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} 値で、変換ベクトルの横軸 (水平方向、X 座標) と縦軸 (垂直方向、Y 座標) を表します。1 つ目にパーセント値が使用された場合は、 {{cssxref("transform-box")}} で定義された参照ボックスの幅からの相対値で、2 つ目にパーセント値が使用された場合は、高さからの相対値です。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/ja/docs/Web/CSS/transform-function#直交座標系">直交座標系</a> (<a href="https://ja.wikipedia.org/wiki/実数空間">ℝ^2</a>)</th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">同次座標系</a> (<a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a>)</th>
      <th scope="col">直交座標系 (<a href="https://ja.wikipedia.org/wiki/実数空間">ℝ^3</a>)</th>
      <th scope="col">同次座標系 (<a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a>)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <p>
          ℝ^2 では線形変換ではないので、直交座標の行列で表すことはできません。
        </p>
      </td>
      <td>
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>tx</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mi>ty</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>tx</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mi>ty</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mi>tx</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mi>ty</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[1 0 0 1 tx ty]</code></td>
    </tr>
  </tbody>
</table>

### 形式文法

```css
translate({{cssxref("&lt;length-percentage&gt;")}}, {{cssxref("&lt;length-percentage&gt;")}}?)
```

## 例

### 単一軸を使用した移動

#### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  /* translateX(10px) または translate(10px, 0) と同じ */
  transform: translate(10px);
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("単一軸を使用した移動", 250, 250)}}

### Y 軸と X 軸の移動の組み合わせ

#### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px, 10px);
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("y_軸と_x_軸の移動の組み合わせ", 250, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("translate")}}
