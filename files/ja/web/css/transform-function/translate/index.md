---
title: translate()
slug: Web/CSS/transform-function/translate
---

{{CSSRef}}

**`translate()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、要素を水平方向や垂直方向で再配置します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

![](translate.png)

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
  - : この値は {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で、変換ベクトルの横軸 (水平方向、X 座標) を表します。変換ベクトルの縦軸 (垂直方向、Y 座標) は `0` に設定されます。例えば、 `translate(2)` は `translate(2, 0)` と等価です。パーセント値の場合は、 {{cssxref("transform-box")}} で定義される参照ボックスの幅からの相対値です。
- 二つの `<length-percentage>` 値
  - : この値は 2 つの {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} 値で、変換ベクトルの横軸 (水平方向、X 座標) と縦軸 (垂直方向、Y 座標) を表します。1 つ目にパーセント値が使用された場合は、 {{cssxref("transform-box")}} で定義された参照ボックスの幅からの相対値で、2 つ目にパーセント値が使用された場合は、高さからの相対値です。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">ℝ^2 のデカルト座標</th>
      <th scope="col">ℝℙ^2 の同次座標</th>
      <th scope="col">ℝ^3 のデカルト座標</th>
      <th scope="col">ℝℙ^3 の同次座標</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <p>
          ℝ^2 では線形変換ではないので、デカルト座標の行列で表すことはできない。
        </p>
      </td>
      <td>
        <math
          ><mfenced
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
            ></mfenced
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mfenced
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
            ></mfenced
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mfenced
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
            ></mfenced
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
translate({{cssxref("&lt;length-percentage&gt;")}} , {{cssxref("&lt;length-percentage&gt;")}}?)
```

## 例

<h3 id="Using_a_single-axis_translation">単一軸を使用した変形</h3>

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
  transform: translate(
    10px
  ); /* translateX(10px) または translate(10px, 0) と同じ */
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("Using_a_single-axis_translation", 250, 250)}}

<h3 id="Combining_y-axis_and_x-axis_translation">Y 軸と X 軸の変換の組み合わせ</h3>

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

{{EmbedLiveSample("Combining_y-axis_and_x-axis_translation", 250, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
