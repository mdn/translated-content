---
title: rotate()
slug: Web/CSS/transform-function/rotate
---

{{CSSRef}}

CSS 的 **`rotate()`** 函数定义了一种将元素围绕一个定点（由{{ Cssxref("transform-origin") }}属性指定）旋转而不变形的转换。指定的角度定义了旋转的量度。若角度为正，则顺时针方向旋转，否则逆时针方向旋转。旋转 180° 也被称为点反射。

{{EmbedInteractiveExample("pages/css/function-rotate.html")}}

元素旋转的固定点 - 如上所述 - 也称为**变换原点**。这默认为元素的中心，但你可以使用{{ cssxref("transform-origin") }}属性设置自己的自定义变换原点。

## 语法

{{cssxref("&lt;angle&gt;")}} 指定了 `rotate()` 的旋转程度。参数为正时，顺时针旋转；参数为负时，逆时针旋转。180° 旋转称为*点反演*。

```
rotate(a)
```

### 值

- _a_
  - : 是一种{{ cssxref("&lt;angle&gt;") }}，表示旋转的角度。正角度表示了顺时针的旋转，负角度表示逆时针的旋转。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">
        <p>笛卡尔坐标系 on ℝ<sup>2</sup></p>
      </th>
      <th scope="col">齐次坐标系 on ℝℙ<sup>2</sup></th>
      <th scope="col">笛卡尔坐标系 on ℝ<sup>3</sup></th>
      <th scope="col">齐次坐标系 on ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd></mtr>
              <mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
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
              ><mtr
                ><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[cos(a) sin(a) -sin(a) cos(a) 0 0]</code></td>
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
  transform: rotate(45deg); /* Equal to rotateZ(45deg) */
  background-color: pink;
}
```

### 结果

{{EmbedLiveSample("示例","100%","200")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [`rotate3d()`](/zh-CN/docs/Web/CSS/transform-function/rotate3d)
