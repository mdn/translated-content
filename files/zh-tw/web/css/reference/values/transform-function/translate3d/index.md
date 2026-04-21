---
title: translate3d()
slug: Web/CSS/Reference/Values/transform-function/translate3d
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**`translate3d()`** [CSS](/zh-TW/docs/Web/CSS) [函式](/zh-TW/docs/Web/CSS/Reference/Values/Functions)用於在 3D 空間中重新定位元素。其結果為 {{cssxref("&lt;transform-function&gt;")}} 資料型別。

{{InteractiveExample("CSS Demo: translate3d()")}}

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

此變形的特徵為一個三維向量 [tx, ty, tz]。其座標定義了元素在各個方向移動的量。

## 語法

```css
translate3d(tx, ty, tz)
```

### 值

- `tx`
  - : 為一個代表平移向量 [tx, ty, tz] 橫坐標（水平、x 分量）的 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}。
- `ty`
  - : 為一個代表平移向量 [tx, ty, tz] 縱坐標（垂直、y 分量）的 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}。
- `tz`
  - : 為一個代表平移向量 z 分量的 {{cssxref("&lt;length&gt;")}}。它不能是 {{cssxref("&lt;percentage&gt;")}} 值；如果是百分比值，則包含該變形的屬性將被視為無效。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/zh-TW/docs/Web/CSS/Reference/Values/transform-function#cartesian_coordinates">笛卡兒座標</a>於 <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2</a></th>
      <a href="https://zh.wikipedia.org/wiki/实射影平面">ℝℙ^2</a> 中的<th scope="col"><a href="https://zh.wikipedia.org/wiki/齐次坐标">齊次座標</a></th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3</a> 中的笛卡兒座標</th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a> 中的齊次座標</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        <p>
          此變形適用於 3D 空間，無法在平面上表示。
        </p>
      </td>
      <td>
        平移在 ℝ^3 中不是線性變形，無法使用笛卡兒座標矩陣表示。
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>tz</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & tx \\ 0 & 1 & 0 & ty \\ 0 & 0 & 1 & tz \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## 形式語法

{{CSSSyntax}}

## 範例

### 使用單軸平移

#### HTML

```html
<div>靜態</div>
<div class="moved">移動後</div>
<div>靜態</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  /* 等同於 perspective(500px) translateX(10px) */
  transform: perspective(500px) translate3d(10px, 0, 0px);
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("使用單軸平移", 250, 250)}}

### 結合 z 軸與 x 軸平移

#### HTML

```html
<div>靜態</div>
<div class="moved">移動後</div>
<div>靜態</div>
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

{{EmbedLiveSample("結合_z_軸與_x_軸平移", 250, 250)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("translate")}}
