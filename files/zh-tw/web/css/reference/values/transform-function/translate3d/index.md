---
title: translate3d()
slug: Web/CSS/Reference/Values/transform-function/translate3d
---

**`translate3d()`** [CSS](/zh-TW/docs/Web/CSS) 函式以 3D 場境的方式定位元素。其結果為 {{cssxref("&lt;transform-function&gt;")}} 資料型別。

{{InteractiveExample("CSS Demo: translate3d()")}}

```css interactive-example-choice
transform: translate3d(0);
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
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

這個轉場的特徵是三維向量，其坐標則定義元素的方向該如何移動。

## 語法

```plain
translate3d(tx, ty, tz)
```

### 數值

- `tx`
  - : 其 {{cssxref("&lt;length&gt;")}} 代表平移向量的橫坐標。
- `ty`
  - : 其 {{cssxref("&lt;length&gt;")}} 代表平移向量的縱坐標。
- `tz`
  - : 其 {{cssxref("&lt;length&gt;")}} 代表平移向量的 z 分量。數值不能是 {{cssxref("&lt;percentage&gt;")}}：否則，此轉場的屬性無效。

<table>
  <thead>
    <tr>
      <th scope="col">ℝ<sup>2</sup> 上的笛卡兒座標（Cartesian coordinate）</th>
      <th scope="col">
        ℝℙ<sup>2</sup> 上的齊次坐標（homogeneous coordinates）
      </th>
      <th scope="col">ℝ<sup>3</sup> 上的笛卡兒座標</th>
      <th scope="col">ℝℙ<sup>3</sup> 上的齊次坐標</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" rowspan="2">
        <p>
          This transformation applies to the 3D space and can't be represented
          on the plane.
        </p>
      </td>
      <td colspan="1" rowspan="2">
        A translation is not a linear transformation in ℝ<sup>3</sup> and can't
        be represented using a Cartesian-coordinate matrix.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>tz</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## 示例

### 使用單軸平移

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
  /* Equivalent to perspective(500px) translateX(10px) */
  transform: perspective(500px) translate3d(10px, 0, 0px);
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("使用單軸平移", 250, 250)}}

### Combining z-axis and x-axis translation

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
  transform: perspective(500px) translate3d(10px, 0, 100px);
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("Combining_z-axis_and_x-axis_translation", 250, 250)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
