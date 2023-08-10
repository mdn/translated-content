---
title: matrix()
slug: Web/CSS/transform-function/matrix
---

{{CSSRef}}

A função CSS **`matrix()`** define uma matriz de transformação 2D homogênea. Isso resulta em um dado do tipo {{cssxref("&lt;transform-function&gt;")}} .

> **Nota:** `matrix(a, b, c, d, tx, ty)` is a shorthand for `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)`.

## Syntax

The `matrix()` function is specified with six values. The constant values are implied and not passed as parameters; the other parameters are described in the column-major order.

> **Nota:** Until Firefox 16, Gecko accepted a {{cssxref("&lt;length&gt;")}} value for _tx_ and _ty_.

```
matrix(a, b, c, d, tx, ty)
```

### Values

- _a_ _b_ _c_ _d_
  - : Are {{cssxref("&lt;number&gt;")}}s describing the linear transformation.
- _tx_ _ty_
  - : Are {{cssxref("&lt;number&gt;")}}s describing the translation to apply.

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
              ><mtr><mtd>a</mtd><mtd>c</mtd></mtr>
              <mtr><mtd>b</mtd><mtd>d</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd><mtd>tx</mtd></mtr
              ><mtr><mtd>b</mtd><mtd>d</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd><mtd>tx</mtd></mtr
              ><mtr><mtd>b</mtd><mtd>d</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
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

The values represent the following functions:
`matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() )`

## Examples

### HTML

```html
<div>Normal</div>
<div class="changed">Changed</div>
```

### CSS

```css
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

### Result

{{EmbedLiveSample("Examples", 350, 350)}}

## Specifications

| Specification                                                            | Status                       | Comment            |
| ------------------------------------------------------------------------ | ---------------------------- | ------------------ |
| {{SpecName("CSS3 Transforms", "#funcdef-transform-matrix", "matrix()")}} | {{Spec2("CSS3 Transforms")}} | Initial definition |

## Compatibilidade com navegadores

Please see the [`<transform-function>`](/pt-BR/docs/Web/CSS/transform-function#Browser_compatibility) data type for compatibility info.

## See also

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [`matrix3d()`](/pt-BR/docs/Web/CSS/transform-function/matrix3d)
- [Understanding the CSS Transforms Matrix](https://dev.opera.com/articles/understanding-the-css-transforms-matrix/)
