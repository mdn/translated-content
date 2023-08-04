---
title: rotateZ()
slug: Web/CSS/transform-function/rotateZ
---

{{CSSRef}}

**`rotateZ()`** 函数定义了一个转换，它可以让一个元素围绕横 Z 轴旋转，而不会对其进行变形。它的结果是一个{{cssxref("&lt;transform-function&gt;")}}数据类型。

{{EmbedInteractiveExample("pages/css/function-rotateZ.html")}}

旋转轴围绕原点旋转，而这个原点通过{{cssxref("transform-origin")}} 属性来定义。

> **备注：** `rotateZ(a)` 相当于 `rotate(a)` or `rotate3d(0, 0, 1, a)`。

> **备注：** 与二维平面上的旋转不同，三维旋转的组合通常是不可交换的。换句话说，三维旋转的应用顺序，将会影响最终结果。

## 语法

**`rotateZ()`** 引起的旋转量由{{cssxref("&lt;angle&gt;")}}指定。如果为正，则顺时针方向移动；如果为负，则逆时针方向移动。

```
rotateZ(a)
```

### 参数值

- `a`
  - : `a` 是一个{{cssxref("&lt;angle&gt;")}} ，表示旋转的角度。正数角度表示顺时针旋转，负数则表示逆时针旋转。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">笛卡儿坐标 ℝ<sup>2</sup></th>
      <th scope="col">齐次坐标 ℝℙ<sup>2</sup></th>
      <th scope="col">笛卡儿坐标 ℝ<sup>3</sup></th>
      <th scope="col">齐次坐标 ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" rowspan="2">
        This transformation applies to the 3D space and can't be represented on
        the plane.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd
                ><mtd>0</mtd></mtr
              >
              <mtr
                ><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              >
              <mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr>
              <mtr
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

### HTML

```html
<div>Normal</div>
<div class="rotated">Rotated</div>
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

### 结果

{{EmbedLiveSample("示例", "auto", 180)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
