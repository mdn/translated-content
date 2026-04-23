---
title: translate3d()
slug: Web/CSS/Reference/Values/transform-function/translate3d
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**`translate3d()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、要素を三次元空間内で再配置します。返値は {{cssxref("&lt;transform-function&gt;")}} データ型です。

{{InteractiveExample("CSS デモ: translate3d()")}}

```css interactive-example-choice
transform: translate3d(0, 0, 0);
```

```css interactive-example-choice
transform: translate3d(42px, -62px, -135px);
```

```css interactive-example-choice
transform: translate3d(-2.7rem, 0, 1rem);
```

```css interactive-example-choice
transform: translate3d(5ch, 0.4in, 5em);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 800px;
  perspective-origin: 150% 150%;
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgb(90 90 90 / 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

この座標変換は三次元ベクトルであることが特徴です。座標は要素がそれぞれの方向にどれだけ移動するかを定義します。

## 構文

```css
translate3d(tx, ty, tz)
```

### 値

- `tx`
  - : {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で、移動ベクトル [tx, ty, tz] の横軸（水平、X 成分）を表します。
- `ty`
  - : {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で、移動ベクトル [tx, ty, tz] の縦軸（垂直、Y 成分）を表します。
- `tz`
  - : {{cssxref("&lt;length&gt;")}} で、移動ベクトルの z 成分を表します。
    {{cssxref("&lt;percentage&gt;")}} 値は指定できません。この場合、これを含む座標変換 [tx, ty, tz] は無効とされます。

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
      <td colspan="2">
        <p>
          この変換は 3D 空間に適用され、平面上では表せません。
        </p>
      </td>
      <td>
        ℝ^3 では線形変換ではないので、直交座標の行列で表すことはできません。
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>tz</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & tx \\ 0 & 1 & 0 & ty \\ 0 & 0 & 1 & tz \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## 形式文法

{{CSSSyntax}}

## 例

### 単一軸の座標変換の使用

#### HTML

```html
<div>静的</div>
<div class="moved">移動</div>
<div>静的</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  /* perspective(500px) translateX(10px) と等価 */
  transform: perspective(500px) translate3d(10px, 0, 0px);
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("単一軸の座標変換の使用", 250, 250)}}

### z 軸と x 軸を組み合わせた座標変換

#### HTML

```html
<div>静的</div>
<div class="moved">移動</div>
<div>静的</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: perspective(500px) translate3d(10px, 0, 100px);
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("z_軸と_x_軸を組み合わせた座標変換", 250, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("translate")}}
