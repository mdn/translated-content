---
title: perspective()
slug: Web/CSS/transform-function/perspective
---

{{CSSRef}}

透视函数定义了到 z=0 的坐标轴，使用者能够得到 3D 定位元素的透视，每个 3D 元素在 Z 轴的位置大于零意味着离使用者更近，因此会变得更大，同理当元素 Z 周小于零时会变得 ge

T 更小，变化的幅度决定于属性值的变化大小

## 语法

```
perspective(l)
```

## 参数

- _l_
  - : 这个{{cssxref("&lt;length&gt;")}} 得到的是距离 0 坐标的距离。被用作提供一个透视渐变属性给某个元素。如果这个值是 0 或者不合法的值，将不会产生透视的变化。

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
        <p>这个属性变化提供了一个 3D 空间，并且不会变成平面类型</p>
      </td>
      <td colspan="1" rowspan="2">
        A perspective is not a linear transform in ℝ<sup>3</sup> and cannot be
        represented using a matrix in the Cartesian coordinates system.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd><mo>−</mo>1<mo>/</mo>d</mtd
                ><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

TBD

## 规范

{{Specifications}}
