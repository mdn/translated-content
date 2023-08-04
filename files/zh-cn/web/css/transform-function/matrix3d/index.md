---
title: matrix3d()
slug: Web/CSS/transform-function/matrix3d
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 函数 **`matrix3d()`** 以 4x4 齐次矩阵的形式定义一个 3D 转换。其结果是一个 {{cssxref("&lt;transform-function&gt;")}} 数据类型。

## 语法

`matrix3d()` 函数由 16 个参数指定。这些参数以列为主的顺序进行描述。

```
matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)
```

### Values

- _a1_ _b1_ _c1_ _d1_ _a2_ _b2_ _c2_ _d2_ _a3_ _b3_ _c3_ _d3_
  - : Are {{cssxref("&lt;number&gt;")}}s describing the linear transformation.
- _a4_ _b4_ _c4 d4_
  - : Are {{cssxref("&lt;number&gt;")}}s describing the translation to apply.

> **备注：** Until Firefox 16, Gecko accepted a {{cssxref("&lt;length&gt;")}} value for _a4_, _b4_ and _c4_.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Cartesian coordinates on ℝ<sup>2</sup></th>
      <th scope="col">Homogeneous coordinates on ℝℙ<sup>2</sup></th>
      <th scope="col">Cartesian coordinates on ℝ<sup>3</sup></th>
      <th scope="col">Homogeneous coordinates on ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" rowspan="2">
        This transformation applies to the 3D space and can't be represented on
        the plane.
      </td>
      <td colspan="1" rowspan="2">
        A generic 3D
        <a href="https://en.wikipedia.org/wiki/Affine_transformation"
          >affine transformation</a
        >
        can't be represented using a Cartesian-coordinate matrix, as
        translations are not linear transformations.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a1</mtd><mtd>a2</mtd><mtd>a3</mtd><mtd>a4</mtd></mtr
              ><mtr><mtd>b1</mtd><mtd>b2</mtd><mtd>b3</mtd><mtd>b4</mtd></mtr
              ><mtr><mtd>c1</mtd><mtd>c2</mtd><mtd>c3</mtd><mtd>c4</mtd></mtr
              ><mtr
                ><mtd>d1</mtd><mtd>d2</mtd><mtd>d3</mtd><mtd>d4</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## Matrix translation and scale example

### HTML

```html
<div class="foo">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quaerat sit
  soluta, quisquam exercitationem delectus qui unde in facere necessitatibus aut
  quia porro dolorem nesciunt enim, at consequuntur aliquam esse?
</div>
```

### CSS

```css
html {
  width: 100%;
}
body {
  height: 100vh;
  /* Centering content */
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
  /* Setting up animation for better demonstration */
  animation: MotionScale 2s alternate linear infinite;
}

@keyframes MotionScale {
  from {
    /*
      Identity matrix is used as basis here.
      The matrix below describes the
      following transformations:
        Translates every X point by -50px
        Translates every Y point by -100px
        Translates every Z point by 0
        Scales down by 10%
    */
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -50, -100, 0, 1.1);
  }
  50% {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0.9);
  }
  to {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 100, 0, 1.1);
  }
}
```

### Result

{{EmbedLiveSample('Matrix_translation_and_scale_example', '100%', '400px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [Understanding the CSS Transforms Matrix](https://dev.opera.com/articles/understanding-the-css-transforms-matrix/)
