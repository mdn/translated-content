---
title: perspective()
slug: Web/CSS/Reference/Values/transform-function/perspective
---

**`perspective()`** [CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions)用于定义一个变换，设置用户与 z=0 平面之间的距离，即二维界面变为三维时用户的观看视角。其结果是一个 {{cssxref("&lt;transform-function&gt;")}} 数据类型。

{{InteractiveExample("CSS Demo: perspective()")}}

```css interactive-example-choice
transform: perspective(0);
```

```css interactive-example-choice
transform: perspective(none);
```

```css interactive-example-choice
transform: perspective(800px);
```

```css interactive-example-choice
transform: perspective(23rem);
```

```css interactive-example-choice
transform: perspective(6.5cm);
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

`perspective()` 变换函数是应用于被变换元素的 {{cssxref('transform')}} 值的一部分。这与 {{cssxref('perspective')}} 和 {{cssxref('perspective-origin')}} 属性不同，后者是附加到在三维空间中变换的子元素的父元素上的。

## 语法

`perspective()` 使用的视距由一个 {{cssxref("&lt;length&gt;")}} 值指定，表示用户与 z=0 平面之间的距离，或者使用 `none`。z=0 平面是所有内容在二维视图中显示的平面，即屏幕。负值会导致语法错误。小于 `1px` 的值（包括零）将被钳制为 `1px`。除 `none` 外的值会导致 z 值为正的元素看起来更大，z 值为负的元素看起来更小。z 值等于或大于视距值的元素将消失，就好像它们在用户身后一样。较大的视距值表示较小的变换；较小的 `perspective()` 值表示较大的变换；`perspective(none)` 表示从无限远的视角观察，没有变换。

```css
perspective(d)
```

## 参数

- _d_
  - : 这个{{cssxref("&lt;length&gt;")}} 得到的是距离 0 坐标的距离。被用作提供一个透视渐变属性给某个元素。如果这个值是 0 或者不合法的值，将不会产生透视的变化。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2</a> <a href="/zh-CN/docs/Web/CSS/Reference/Values/transform-function#笛卡尔坐标">笛卡尔坐标</a></th>
      <th scope="col"><a href="https://zh.wikipedia.org/wiki/实射影平面">ℝℙ^2</a> <a href="https://zh.wikipedia.org/wiki/齐次坐标">齐次坐标</a></th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3</a> 笛卡尔坐标</th>
      <th scope="col"><a href="https://zh.wikipedia.org/wiki/实射影空间">ℝℙ^3</a> 齐次坐标</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" rowspan="2">
        <p>此变换适用于 3D 空间，无法在平面上表示。</p>
      </td>
      <td colspan="1" rowspan="2">
        此变换不是 ℝ^3 中的线性变换，且不能使用笛卡尔坐标矩阵表示。
      </td>
      <td colspan="1" rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mo>−</mo><mn>1</mn><mo>/</mo><mi>d</mi></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & -\frac{1}{d} & 1 \\ \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## 形式语法

{{CSSSyntax}}

## 示例

### HTML

```html
<p>没有 perspective：</p>
<div class="no-perspective-box">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>具有 perspective (9cm)：</p>
<div class="perspective-box-far">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>具有 perspective (4cm)：</p>
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

### 结果

{{ EmbedLiveSample('示例', '250', '350') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- 单独的变换属性：
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
