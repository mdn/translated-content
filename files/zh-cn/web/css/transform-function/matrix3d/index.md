---
title: matrix3d()
slug: Web/CSS/transform-function/matrix3d
l10n:
  sourceCommit: 802978f38824a4132b4f9b3d3c23fb6970beba74
---

{{CSSRef}}

**`matrix3d()`** [CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions)以 4x4 齐次矩阵的形式定义一个 3D 变换。其结果是一个 {{cssxref("&lt;transform-function&gt;")}} 数据类型。

{{EmbedInteractiveExample("pages/css/function-matrix3d.html")}}

## 语法

`matrix3d()` 函数由 16 个值指定，这些值以列优先顺序进行描述。

```css
matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)
```

### 值

- _a1_ _b1_ _c1_ _d1_ _a2_ _b2_ _c2_ _d2_
  _a3_ _b3_ _c3_ _d3_
  - : 描述线性变换的 {{cssxref("&lt;number&gt;")}} 值。
- _a4_ _b4_ _c4 d4_
  - : 描述要应用的平移的 {{cssxref("&lt;number&gt;")}} 值。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="https://zh.wikipedia.org/wiki/实坐标空间">ℝ^2</a> 上的<a href="/zh-CN/docs/Web/CSS/transform-function#笛卡尔坐标">笛卡尔坐标</a></th>
      <th scope="col"><a href="https://zh.wikipedia.org/zh-cn/实射影平面">ℝℙ^2</a> 上的<a href="https://zh.wikipedia.org/zh-cn/齐次坐标">齐次坐标</a></th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3</a> 上的笛卡尔坐标</th>
      <th scope="col"><a href="https://zh.wikipedia.org/zh-cn/实射影空间">ℝℙ^3</a> 上的齐次坐标</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        此变换适用于 3D 空间，无法在平面上表示。
      </td>
      <td>
        通用的 3D <a href="https://zh.wikipedia.org/zh-cn/仿射变换">仿射变换</a>无法使用笛卡尔坐标矩阵表示，因为平移不是线性变换。
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>a1</mi></mtd><mtd><mi>a2</mi></mtd><mtd><mi>a3</mi></mtd><mtd><mi>a4</mi></mtd></mtr><mtr><mtd><mi>b1</mi></mtd><mtd><mi>b2</mi></mtd><mtd><mi>b3</mi></mtd><mtd><mi>b4</mi></mtd></mtr><mtr><mtd><mi>c1</mi></mtd><mtd><mi>c2</mi></mtd><mtd><mi>c3</mi></mtd><mtd><mi>c4</mi></mtd></mtr><mtr><mtd><mi>d1</mi></mtd><mtd><mi>d2</mi></mtd><mtd><mi>d3</mi></mtd><mtd><mi>d4</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} a1 & a2 & a3 & a4 \\ b1 & b2 & b3 & b4 \\ c1 & c2 & c3 & c4 \\ d1 & d2 & d3 & d4 \\ \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## 形式语法

{{CSSSyntax}}

## 示例

### 立方体压缩示例

以下示例展示了一个由 DOM 元素和变换创建的 3D 立方体，可以通过悬停或聚焦来应用 `matrix3d()` 变换。

#### HTML

```html
<section id="example-element" tabindex="0">
  <div class="face front">1</div>
  <div class="face back">2</div>
  <div class="face right">3</div>
  <div class="face left">4</div>
  <div class="face top">5</div>
  <div class="face bottom">6</div>
</section>
```

#### CSS

```css
#example-element {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: transform 1.5s;
  transform: rotate3d(1, 1, 1, 30deg);
  margin: 50px auto;
}

#example-element:hover,
#example-element:focus {
  transform: rotate3d(1, 1, 1, 30deg)
    matrix3d(1, 0, 0, 0, 0, 1, 6, 0, 0, 0, 1, 0, 50, 100, 0, 1.1);
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
  color: #fff;
}

.front {
  background: rgb(90 90 90 / 70%);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 70%);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 70%);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 70%);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 70%);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 70%);
  transform: rotateX(-90deg) translateZ(50px);
}
```

#### 结果

{{EmbedLiveSample('立方体压缩示例', '100%', '300px')}}

### 矩阵平移和缩放示例

另一个 `transform3d()` 示例，演示了结合平移和缩放的动画效果。

#### HTML

```html
<div class="foo">
  那时候他认为必需与重要的是接触大自然，接触曾经生活过、思想过、接触过的前人（如接触哲学、诗歌），现在认为必需、与重要的是人为的规章制度，与跟同事们交往。——列夫·托尔斯泰《复活》
</div>
```

#### CSS

```css-nolint
html {
  width: 100%;
}
body {
  height: 100vh;
  /* 内容居中 */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
.foo {
  width: 50%;
  padding: 1em;
  color: white;
  background: #ff8c66;
  border: 2px dashed black;
  text-align: center;
  font-family: system-ui, sans-serif;
  font-size: 14px;
  /* 设置动画以便更好地演示 */
  animation: MotionScale 2s alternate linear infinite;
}

@keyframes MotionScale {
  from {
    /*
      这里使用了单位矩阵作为基础。
      下列矩阵描述了以下变换：
        将每个 X 坐标平移 -50px
        将每个 Y 坐标平移 -100px
        将每个 Z 坐标平移 0
        将每个坐标缩小 10%
    */
    transform: matrix3d(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      -50, -100, 0, 1.1
    );
  }
  50% {
    transform: matrix3d(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 0.9
    );
  }
  to {
     transform: matrix3d(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      50, 100, 0, 1.1
    )
  }
}
```

#### 结果

{{EmbedLiveSample('矩阵平移和缩放示例', '100%', '400px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("transform")}}
- 单独的变换属性：
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
- {{cssxref("&lt;transform-function&gt;")}}
