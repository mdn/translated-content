---
title: perspective()
slug: Web/CSS/transform-function/perspective
tags:
  - CSS
  - CSS 関数
  - CSS 座標変換
  - 関数
  - リファレンス
translation_of: Web/CSS/transform-function/perspective()
original_slug: Web/CSS/transform-function/perspective()
browser-compat: css.types.transform-function.perspective
---
{{CSSRef}}

**`perspective()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、ユーザーと z=0 平面との間の距離を定義し、閲覧者からの視点は二次元のインターフェイスが三次元であったかのようになります。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

{{EmbedInteractiveExample("pages/css/function-perspective.html")}}

`perspective()` 座標変換関数は {{cssxref('transform')}} 値の一部で、変形される要素に適用されます。これは {{cssxref('perspective')}} および {{cssxref('perspective-origin')}} の各プロパティが三次元空間に座標変換される子の親に付けられるのとは異なります。

## 構文

`perspective()` で使用する視点距離は、{{cssxref("&lt;length&gt;")}} 値でユーザーと z=0 平面との間の距離を指定するか、または `none` で指定します。
z=0 平面とは、二次元表示ですべてが見える平面、つまり画面のことです。
負の値は構文エラーになります。
`1px` より小さい値 (ゼロを含む) は `1px` になります。
値が `none` 以外の場合、 z が正の位置にある要素は大きく表示されます。また、z が負の位置にある要素は小さく表示されます。
z 位置が `perspective` の値と同じか大きい要素は、ユーザーの背後にあるかのようになり、非表示になります。
`perspective()` が大きいと、変形が小さいことを表します。`perspective()` の値が小さいと、変形が大きいことを表します。`perspective(none)` は無限の距離からの遠近感を表し、変形はありません。

```css
perspective(d)
```

### 値

- _d_
  - : {{cssxref("&lt;length&gt;")}} で、ユーザーと z=0 平面との間の距離を表します。 0 または負の数であった場合は、距離の変換は適用されません。

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
      <td colspan="2" rowspan="2">
        この変換は三次元空間に適用され、平面で表現することはできません。
      </td>
      <td colspan="1" rowspan="2">この変換は ℝ^3 では線形変換ではないので、デカルト座標行列を使用して表現することはできません。</td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd
                  ><mo>−</mo>
                  <mn>1</mn>
                  <mo>/</mo>
                  <mi>d</mi> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

<h2 id="Examples">例</h2>

### HTML

```html
<p>Without perspective:</p>
<div class="no-perspective-box">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>With perspective (9cm):</p>
<div class="perspective-box-far">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>With perspective (4cm):</p>
<div class="perspective-box-closer">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>
```

### CSS

```css
.face {
  position: absolute;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 100px;
  text-align: center;
}

p + div {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  margin-left: 100px;
}
.no-perspective-box {
  transform: rotateX(-15deg) rotateY(30deg);
}

.perspective-box-far {
  transform: perspective(9cm) rotateX(-15deg) rotateY(30deg);
}

.perspective-box-closer {
  transform: perspective(4cm) rotateX(-15deg) rotateY(30deg);
}

.top {
  background-color: skyblue;
  transform: rotateX(90deg) translate3d(0, 0, 50px);
}

.left {
  background-color: pink;
  transform: rotateY(-90deg) translate3d(0, 0, 50px);
}

.front {
  background-color: limegreen;
  transform: translate3d(0, 0, 50px);
}
```

### 結果

{{ EmbedLiveSample('Examples', '250', '350') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
