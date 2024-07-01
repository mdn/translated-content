---
title: matrix()
slug: Web/CSS/transform-function/matrix
---

{{CSSRef}}

CSS 函数 `matrix()` 指定了一个由指定的 6 个值组成的 2D 变换矩阵。这种矩阵的常量值是隐含的，而不是由参数传递的；其他的参数是以列优先的顺序描述的。

`matrix(a, b, c, d, tx, ty)` 是 `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)` 的简写。

> **备注：** 直到 Firefox 16, Gecko 才接受对于 **tx** 和 **ty** 的 {{cssxref("&lt;length&gt;")}} 值。

## 语法

```
matrix(a, b, c, d, tx, ty)
```

## 参数值

- _a_ _b_ _c_ _d_
  - : 描述线性变换的 {{cssxref("&lt;number&gt;")}} 。
- _tx_ _ty_
  - : 描述如何应用这个变换的 {{cssxref("&lt;number&gt;")}} 。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">
        ℝ<sup>2 </sup>下的<a
          href="https://zh.wikipedia.org/wiki/%E7%AC%9B%E5%8D%A1%E5%B0%94%E5%9D%90%E6%A0%87%E7%B3%BB"
          >笛卡尔坐标</a
        >
      </th>
      <th scope="col">
        ℝℙ<sup>2 </sup>下<a
          href="https://zh.wikipedia.org/wiki/%E9%BD%90%E6%AC%A1%E5%9D%90%E6%A0%87"
          >齐次坐标</a
        >
      </th>
      <th scope="col">
        ℝ<sup>3</sup>下的<a
          href="https://zh.wikipedia.org/wiki/%E7%AC%9B%E5%8D%A1%E5%B0%94%E5%9D%90%E6%A0%87%E7%B3%BB"
          >笛卡尔坐标</a
        >
      </th>
      <th scope="col">
        ℝℙ<sup>3</sup>下的<a
          href="https://zh.wikipedia.org/wiki/%E9%BD%90%E6%AC%A1%E5%9D%90%E6%A0%87"
          >齐次坐标</a
        >
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd></mtr>
              <mtr><mtd>b</mtd><mtd>d</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr><mtd></mtd></mtr></mtable></mfenced></math
          ><br />a c tx<br />b d ty<br />0 0 1
        </p>
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd></mtd></mtr>a c tx</mtable
            ></mfenced
          ></math
        ><br />b d ty<br />0 0 1<mtr><mtd></mtd></mtr>
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd><mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr><mtd>b</mtd><mtd>d</mtd><mtd>0</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[a b c d tx ty]</code></td>
    </tr>
  </tbody>
</table>

这些值表示以下函数：

matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() )

## 示例

### HTML

```
<div>Normal</div>
<div class="changed">Changed</div>
```

### CSS

```
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.changed {
  transform: matrix(1, 2, -1, 1, 80, 80);
  background-color: pink;
}
```

### 结果

请看英文版案例 [/zh-CN/docs/Web/CSS/transform-function/matrix#Result](/zh-CN/docs/Web/CSS/transform-function/matrix#Result)

## 规范

{{Specifications}}
