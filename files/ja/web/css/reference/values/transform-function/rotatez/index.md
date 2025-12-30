---
title: rotateZ()
slug: Web/CSS/Reference/Values/transform-function/rotateZ
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**`rotateZ()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、要素の形を変化させずに Z 軸の周りを回転させる座標変換を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

{{InteractiveExample("CSS デモ: rotateZ()")}}

```css interactive-example-choice
transform: rotateZ(0);
```

```css interactive-example-choice
transform: rotateZ(90deg);
```

```css interactive-example-choice
transform: rotateZ(-0.25turn);
```

```css interactive-example-choice
transform: rotateZ(3.142rad);
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

回転軸は、 {{ cssxref("transform-origin") }} CSS プロパティで定義される原点を通ります。

> [!NOTE]
> `rotateZ(a)` は `rotate(a)` または `rotate3d(0, 0, 1, a)` と等価です。

> [!NOTE]
> 2D 平面での回転とは異なり、 3D での回転はふつう交換可能ではありません。言い換えれば、回転の順番が結果に影響を与えます。

## 構文

```css
rotateZ(a)
```

### 値

- `a`
  - : {{ cssxref("&lt;angle&gt;") }} で、回転する角度を表します。正の数の角度は時計回りの回転を、負の数の角度は反時計回りの回転を表します。

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
        この変換は 3D 空間に適用され、平面で表すことはできません。
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>-</mo><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} \cos(a) & -\sin(a) & 0 \\ \sin(a) & \cos(a) & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>-</mo><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} \cos(a) & -\sin(a) & 0 & 0 \\ \sin(a) & \cos(a) & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## 形式文法

{{CSSSyntax}}

## 例

### HTML

```html
<div>通常</div>
<div class="rotated">回転</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotateZ(45deg);
  background-color: pink;
}
```

### 結果

{{EmbedLiveSample("Examples", "auto", 180)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}} プロパティ
- {{cssxref("rotate")}} プロパティ
- {{cssxref("&lt;transform-function&gt;")}}
