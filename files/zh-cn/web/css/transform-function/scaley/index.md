---
title: scaleY()
slug: Web/CSS/transform-function/scaleY
original_slug: Web/CSS/transform-function/scaleY()
---

{{CSSRef}}

The **`scaleY()`** [CSS](/zh-CN/docs/Web/CSS) function defines a transformation that resizes an element along the y-axis (vertically). Its result is a {{cssxref("&lt;transform-function&gt;")}} data type.

![](https://mdn.mozillademos.org/files/12119/scaleY.png)

It modifies the ordinate of each element point by a constant factor, except when the scale factor is 1, in which case the function is the identity transform. The scaling is not isotropic, and the angles of the element are not conserved. `scaleY(-1)` defines an [axial symmetry](http://en.wikipedia.org/wiki/Axial_symmetry), with a horizontal axis passing through the origin (as specified by the {{cssxref("transform-origin")}} property).

> **备注：** `scaleY(sy)` is equivalent to `scale(1, sy)` or `scale3d(1, sy, 1)`.
>
> `transform: rotateX(180deg);` === `transform: scaleY(-1);`

## Syntax

```
scaleY(s)
```

### Values

- `s`
  - : Is a {{cssxref("&lt;number&gt;")}} representing the scaling factor to apply on the ordinate of each point of the element.

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
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd></mtr>
              <mtr><mtd>0</mtd><mtd>s</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>s</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>s</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>s</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[1 0 0 s 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Examples

### HTML

```html
<div>Normal</div>
<div class="scaled">Scaled</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scaleY(0.6);
  background-color: pink;
}
```

### Result

{{EmbedLiveSample("Examples", 200, 200)}}

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
