---
title: rotate3d()
slug: Web/CSS/transform-function/rotate3d
---

{{CSSRef}}Функция [CSS](/ru/docs/Web/CSS) **`rotate3d()`** трансформирует элемент без деформации, вращая его в трёхмерном пространстве вокруг зафиксированной оси. Её результатом является тип {{cssxref ("&lt;transform-function&gt;")}}.{{EmbedInteractiveExample("pages/css/rotate3d.html")}}

In 3D space, rotations have three degrees of liberty, which together describe a single axis of rotation. The axis of rotation is defined by an \[x, y, z] vector and pass by the origin (as defined by the {{ cssxref("transform-origin") }} property). If, as specified, the vector is not _normalized_ (i.e., if the sum of the square of its three coordinates is not 1), the {{glossary("user agent")}} will normalize it internally. A non-normalizable vector, such as the null vector, \[0, 0, 0], will cause the rotation to be ignored, but without invaliding the whole CSS property.

> **Примечание:** Unlike rotations in the 2D plane, the composition of 3D rotations is usually not commutative. In other words, the order in which the rotations are applied impacts the result.

## Syntax

The amount of rotation created by `rotate3d()` is specified by three {{cssxref("&lt;number&gt;")}}s and one {{cssxref("&lt;angle&gt;")}}. The `<number>`s represent the x-, y-, and z-coordinates of the vector denoting the axis of rotation. The `<angle>` represents the angle of rotation; if positive, the movement will be clockwise; if negative, it will be counter-clockwise.

```
rotate3d(x, y, z, a)
```

### Values

- `x`
  - : Is a {{cssxref("&lt;number&gt;")}} describing the x-coordinate of the vector denoting the axis of rotation which could between 0 and 1.
- `y`
  - : Is a {{cssxref("&lt;number&gt;")}} describing the y-coordinate of the vector denoting the axis of rotation which could between 0 and 1.
- `z`
  - : Is a {{cssxref("&lt;number&gt;")}} describing the z-coordinate of the vector denoting the axis of rotation which could between 0 and 1.
- `a`
  - : Is an {{ cssxref("&lt;angle&gt;") }} representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Cartesian coordinates on ℝ<sup>2</sup></th>
      <td rowspan="2">
        This transformation applies to the 3D space and can't be represented on
        the plane.
      </td>
    </tr>
    <tr>
      <th scope="col">Homogeneous coordinates on ℝℙ<sup>2</sup></th>
    </tr>
    <tr>
      <th scope="col">Cartesian coordinates on ℝ<sup>3</sup></th>
      <td colspan="1">
        <a href="/@api/deki/files/5987/=transform-functions-rotate3d_cart.png"
          ><img
            src="/@api/deki/files/5987/=transform-functions-rotate3d_cart.png?size=webview"
            style="height: 47px; width: 510px" /></a
        ><math>
          <mfenced
            ><mtable
              ><mtr
                ><mtd
                  >1<mo>+</mo>(1<mo>-</mo>cos(<mi>a</mi>))(<msup
                    ><mi>x</mi><mn>2</mn></msup
                  ><mo>-</mo>1)</mtd
                ><mtd
                  ><mi>z</mi><mo>·</mo>sin(<mi>a</mi>)+<mi>x</mi
                  ><mi>y</mi>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ><mtd
                  ><mo>-</mo><mi>y</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo
                  ><mi>x</mi><mi>z</mi
                  ><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ></mtr
              ><mtr
                ><mtd
                  ><mo>-</mo><mi>z</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo
                  ><mi>x</mi><mi>y</mi
                  ><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ><mtd>1+(1-cos(a))(y2-1)</mtd
                ><mtd
                  ><mi>x</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo><mi>y</mi
                  ><mi>z</mi><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ><mtr
                  ><mtd>ysin(a) + xz(1-cos(a))</mtd
                  ><mtd>-xsin(a)+yz(1-cos(a))</mtd><mtd>1+(1-cos(a))(z2-1)</mtd
                  ><mtd>t</mtd></mtr
                ><mtr
                  ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
                ></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
    <tr>
      <th scope="col">Homogeneous coordinates on ℝℙ<sup>3</sup></th>
      <td colspan="1">
        <a href="/@api/deki/files/5986/=transform-functions-rotate3d_hom4.png"
          ><img
            src="/@api/deki/files/5986/=transform-functions-rotate3d_hom4.png?size=webview"
            style="height: 61px; width: 522px"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Rotating on the y-axis

#### HTML

```html
<div>Normal</div>
<div class="rotated">Rotated</div>
```

#### CSS

```css
body {
  perspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate3d(0, 1, 0, 60deg);
  background-color: pink;
}
```

#### Result

{{EmbedLiveSample("Rotating_on_the_y-axis", "auto", 180)}}

### Rotating on a custom axis

#### HTML

```html
<div>Normal</div>
<div class="rotated">Rotated</div>
```

#### CSS

```css
body {
  perspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate3d(1, 2, -1, 192deg);
  background-color: pink;
}
```

#### Result

{{EmbedLiveSample("Rotating_on_a_custom_axis", "auto", 180)}}

## Browser compatibility

Please see the [`<transform-function>`](/ru/docs/Web/CSS/transform-function#Browser_compatibility) data type for compatibility info.

## See also

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
