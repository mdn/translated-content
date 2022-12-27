---
title: transform-function
slug: Web/CSS/transform-function
---

{{ CSSRef("CSS Transforms") }}The `<transform-function>` CSS data type denotes a function applied to an element's representation in order to modify it. Usually such transform may be expressed by matrices and the resulting images can be determined using matrix multiplication on each point.

## Coordinates for 2D graphics

There are several coordinate models used when describing transformation. The most common are the Cartesian coordinate system and homogeneous coordinates.

### 笛卡兒坐標系

[![](/files/3438/coord_in_R2.png)](/@api/deki/files/5796/=coord_in_R2.png)

In [Cartesian coordinates](http://en.wikipedia.org/wiki/Cartesian_coordinate_system) each point of the [Euclidian space](http://en.wikipedia.org/wiki/Euclidean_geometry) is described using two values, the abscissa and the ordinate. The origin, the `(0, 0)` is the top-left corner of the element. Unlike the usual geometric convention, and like most cases in computer graphics, the y-axis goes to the bottom. Each point is mathematically described using the vector notation `(x,y)`.

Each linear function is described using a 2x2 matrix like:

<math><mfenced><mtable><mtr><mtd>a</mtd><mtd>c</mtd></mtr> <mtr><mtd>b</mtd><mtd>d</mtd></mtr></mtable></mfenced></math>

Applying the transformation consists in doing, for each point, the matrix multiplication between both:

[![](/@api/deki/files/5799/=transform_functions_generic_transformation_cart.png?size=webview)](/@api/deki/files/5799/=transform_functions_generic_transformation_cart.png).

It is possible to apply several transformations in a row:

[![](/@api/deki/files/5800/=transform_functions_transform_composition_cart.png?size=webview)](/@api/deki/files/5800/=transform_functions_transform_composition_cart.png).

With this notation, it is possible to describe, and therefore composite, most usual transformations: rotations, scaling, or skewing. In fact all transformations that are linear functions can be described. One major transformation is not linear and therefore must be special-cased when using this notation: translation. The translation vector (tx, ty) must be expressed separately, as two more parameters.

[Möbius](http://en.wikipedia.org/wiki/August_Ferdinand_M%C3%B6bius)' [homogeneous coordinates](http://en.wikipedia.org/wiki/Homogeneous_coordinates) in [projective geometry](http://en.wikipedia.org/wiki/Projective_geometry) leading to 3x3 transformation matrices, though more complex and unusual for non-specialists, doesn't suffer from the translation limitation as these can be expressed as linear functions in this algebra, removing the need for special cases.

## Coordinates for 3D graphics

## Functions defining transformations

### `matrix()`

The `matrix()` CSS function specifies a homogeneous 2D transformation matrix comprised of the specified six values. The constant values of such matrices are implied and not passed as parameters; the other parameters are described in the column-major order.

`matrix(a, b, c, d, tx, ty)` is a shorthand for `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)`.

> **備註：** Until Firefox 16, Gecko accepted a {{cssxref("&lt;length&gt;")}} value for **tx** and **ty**.

#### 表達式

```plain
matrix(a, b, c, d, tx, ty)
```

#### 值

- _a_ _b_ _c_ _d_
  - : Are {{cssxref("&lt;number&gt;")}} describing the linear transformation.
- _tx_ _ty_
  - : Are {{cssxref("&lt;number&gt;")}} describing the translation to apply.

<table>
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
              ><mtr><mtd>a</mtd><mtd>c</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>b</mtd><mtd>d</mtd><mtd>tx</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a</mtd><mtd>c</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>b</mtd><mtd>d</mtd><mtd>tx</mtd></mtr
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

### `matrix3d()`

The `matrix3d()` CSS function describes a 3D transform as a 4x4 homogeneous matrix. The 16 parameters are described in the column-major order.

> **備註：** Until Firefox 16, Gecko accepted a {{cssxref("&lt;length&gt;")}} value for **a4**, **b4** and **c4**.

#### 表達式

```plain
matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)
```

#### 值

- _a1 b1 c1 d1_ _a2 b2 c2 d2_ _a3 b3 c3 d3_ _d4_
  - : Are {{cssxref("&lt;number&gt;")}} describing the linear transformation.
- _a4_ _b4 c4_
  - : Are {{cssxref("&lt;number&gt;")}} describing the translation to apply.

<table>
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
        This transform applies to the 3D space and cannot be represented on the
        plan.
      </td>
      <td colspan="1" rowspan="2">
        Cartesian-coordinate matrix doesn't allow to represent a generic 3d
        affine transforms as translations are not linear transforms.
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

### `perspective()`

The `perspective()` CSS function defines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.

#### 表達式

```plain
perspective(l)
```

#### 值

- _l_
  - : Is a {{cssxref("&lt;length&gt;")}} giving the distance from the user to the z=0 plane. It is used to apply a perspective transform to the element. If it is 0 or a negative value, no perspective transform is applied.

<table>
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
        <p>
          This transform applies to the 3D space and cannot be represented on
          the plan.
        </p>
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

### `rotate()`

![](/@api/deki/files/5976/=transform-functions-rotate_19.5.png)The `rotate()` CSS function defines a transformation that moves the element around a fixed point (as specified by the {{ Cssxref("transform-origin") }} property) without deforming it. The amount of movement is defined by the specified angle; if positive, the movement will be clockwise, if negative, it will be counter-clockwise. A rotation by 180° is called _point reflection_.

#### 表達式

```plain
rotate(a)
```

#### 值

- _a_
  - : Is an {{ cssxref("&lt;angle&gt;") }} representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.

<table>
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
      <td>
        <code>[cos(a) </code>sin(<em>a</em>)<code>
          -sin(a) cos(<em>a</em>) 0 0]</code
        >
      </td>
    </tr>
  </tbody>
</table>

### `rotate3d()`

The `rotate3d()`CSS function defines a transformation that moves the element around a fixed axis without deforming it. The amount of movement is defined by the specified angle; if positive, the movement will be clockwise, if negative, it will be counter-clockwise.

In the 3D space, rotations have three degrees of liberty, describing an axis of rotation. The axis of rotation is defined by an \[x, y, z] vector and pass by the origin (as defined by the {{ cssxref("transform-origin") }} CSS property. If the vector is not _normalized_, that is the sum of the square of its three coordinates is not 1, it will be normalized internally. A non-normalizable vector, like the null vector, \[0, 0, 0], will cause the rotation not to be applied, without invaliding the whole CSS property.

> **備註：** In opposition to rotations in the plane, the composition of 3D rotations is usually not commutative; it means that the order in which the rotations are applied is crucial.

#### 表達式

```plain
rotate3d(x, y, z, a)
```

#### 值

- _x_
  - : Is a {{cssxref("&lt;number&gt;")}} describing the x-coordinate of the vector denoting the axis of rotation.
- _y_
  - : Is a {{cssxref("&lt;number&gt;")}} describing the y-coordinate of the vector denoting the axis of rotation.
- _z_
  - : Is a {{cssxref("&lt;number&gt;")}} describing the z-coordinate of the vector denoting the axis of rotation.
- _a_
  - : Is an {{ cssxref("&lt;angle&gt;") }} representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.

<table>
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
      <td colspan="2">
        This transform applies to the 3D space and cannot be represented on the
        plane.
      </td>
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

### `rotateX()`

The `rotateX()`CSS function defines a transformation that moves the element around the abscissa without deforming it. The amount of movement is defined by the specified angle; if positive, the movement will be clockwise, if negative, it will be counter-clockwise.

The axis of rotation passes by the origin, defined by {{ cssxref("transform-origin") }} CSS property.

`rotateX(a)`is a shorthand for `rotate3D(1, 0, 0, a)`.

> **備註：** In opposition to rotations in the plane, the composition of 3D rotations is usually not commutative; it means that the order in which the rotations are applied is crucial.

#### 表達式

```plain
rotateX(a)
```

#### 值

- _a_
  - : Is an {{ cssxref("&lt;angle&gt;") }} representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.

<table>
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
      <td colspan="2">
        This transform applies to the 3D space and cannot be represented on the
        plane.
      </td>
      <td colspan="1">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>cos(a)</mtd><mtd>-sin(a)</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>sin(a)</mtd><mtd>cos(a)</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>1</mtd><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>cos(a)</mtd><mtd>-sin(a)</mtd
                ><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

### `rotateY()`

The `rotateY()`CSS function defines a transformation that moves the element around the ordinate without deforming it. The amount of movement is defined by the specified angle; if positive, the movement will be clockwise, if negative, it will be counter-clockwise.

The axis of rotation passes by the origin, defined by {{ cssxref("transform-origin") }} CSS property.

`rotateY(a)`is a shorthand for `rotate3D(0, 1, 0, a)`.

> **備註：** In opposition to rotations in the plane, the composition of 3D rotations is usually not commutative; it means that the order in which the rotations are applied is crucial.

#### 表達式

```plain
rotateY(a)
```

#### 值

- _a_
  - : Is an {{ cssxref("&lt;angle&gt;") }} representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.

<table>
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
      <td colspan="2">
        This transform applies to the 3D space and cannot be represented on the
        plane.
      </td>
      <td colspan="1">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>cos(a)</mtd><mtd>0</mtd><mtd>sin(a)</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>-sin(a)</mtd><mtd>0</mtd><mtd>cos(a)</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1">
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd>cos(a)</mtd><mtd>0</mtd><mtd>sin(a)</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>-sin(a)</mtd><mtd>0</mtd><mtd>cos(a)</mtd
                ><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

### `rotateZ()`

The `rotateZ()`CSS function defines a transformation that moves the element around the z-axis without deforming it. The amount of movement is defined by the specified angle; if positive, the movement will be clockwise, if negative, it will be counter-clockwise.

The axis of rotation passes by the origin, defined by {{ cssxref("transform-origin") }} CSS property.

`rotateZ(a)`is a shorthand for `rotate3D(0, 0, 1, a)`.

> **備註：** In opposition to rotations in the plane, the composition of 3D rotations is usually not commutative; it means that the order in which the rotations are applied is crucial.

#### 表達式

```plain
rotateZ(a)
```

#### 值

- _a_
  - : Is an {{ cssxref("&lt;angle&gt;") }} representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.

<table>
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
        This transform applies to the 3D space and cannot be represented on the
        plane.
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
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

### `scale()`

![](/@api/deki/files/5804/=transform-functions-scale_2_2.png?size=webview)

The `scale()` CSS function modifies the size of the element. It can either augment or decrease its size and as the amount of scaling is defined by a vector, it can do so more in one direction than in another one.

This transformation is characterized by a vector whose coordinates define how much scaling is done in each direction. If both coordinates of the vector are equal, the scaling is uniform, or isotropic, and the shape of the element is preserved. In that case, the scaling function defines a homothetic transformation.

When outside the `]-1, 1[` range, the scaling enlarges the element in the direction of the coordinate; when inside the range, it shrinks the element in that direction. When equal to `1` it does nothing and when negative it performs a _point reflection_ and the size modification.

> **備註：** The ` scale``() ` function only applies the transformation in the Euclidian plane (in 2D). To scale in the space, the `scale3D()` function has to be used.

#### 表達式

```plain
scale(sx) or
scale(sx, sy)
```

#### 值

- _sx_
  - : Is a {{cssxref("&lt;number&gt;")}} representing the abscissa of the scaling vector.
- _sy_
  - : Is a {{cssxref("&lt;number&gt;")}} representing the ordinate of the scaling vector. If not present, its default value is _**sx**_, leading to a uniform scaling preserving the shape of the element.

<table>
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
              ><mtr><mtd>sx</mtd><mtd>0</mtd></mtr>
              <mtr><mtd>0</mtd><mtd>sy</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>sy</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>sy</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>sy</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[sx 0 0 sy 0 0]</code></td>
    </tr>
  </tbody>
</table>

### `scale3d()`

The `scale3d()` CSS function modifies the size of an element. Because the amount of scaling is defined by a vector, it can resize different dimensions at different scales.

This transformation is characterized by a vector whose coordinates define how much scaling is done in each direction. If all three coordinates of the vector are equal, the scaling is uniform, or isotropic, and the shape of the element is preserved. In that case, the scaling function defines a homothetic transformation.

When outside the `[-1, 1]` range, the scaling enlarges the element in the direction of the coordinate; when inside the range, it shrinks the element in that direction. When equal to `1` it does nothing and when negative it performs a _point reflection_ and the size modification.

#### 表達式

```plain
scale3d(sx, sy, sz)
```

#### 值

- _sx_
  - : Is a {{cssxref("&lt;number&gt;")}} representing the abscissa of the scaling vector.
- _sy_
  - : Is a {{cssxref("&lt;number&gt;")}} representing the ordinate of the scaling vector.
- _sz_
  - : Is a {{cssxref("&lt;number&gt;")}} representing the z-component of the scaling vector.

<table>
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
        This transform applies to the 3D space and cannot be represented on the
        plane.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>sy</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>sz</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>sx<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>sy</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>sz</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

### `scaleX()`

![](/@api/deki/files/5807/=transform-functions-scaleX_2.png?size=webview)The `scaleX()` CSS function modifies the abscissa of each element point by a constant factor, except if this scale factor is `1`, in which case the function is the identity transform. The scaling is not isotropic and the angles of the element are not conserved.

`scaleX(sx)` is a shorthand for `scale(sx, 1)` or for `scale3d(sx, 1, 1)`.

`scaleX(-1)` defines an [axial symmetry](http://en.wikipedia.org/wiki/Axial_symmetry) with a vertical axis passing by the origin (as specified by the [`transform-origin`](transform-origin) property).

#### 表達式

```plain
scaleX(s)
```

#### 值

- _s_
  - : Is a {{cssxref("&lt;number&gt;")}} representing the scaling factor to apply on the abscissa of each point of the element.

<table>
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
              ><mtr><mtd>s</mtd><mtd>0</mtd></mtr>
              <mtr><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>s<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>s<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>s<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[s 0 0 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

### `scaleY()`

![](/@api/deki/files/5967/=transform-functions-scaleY_2.png)

The `scaleY()` CSS function modifies the ordinate of each element point by a constant factor except if this scale factor is `1`, in which case the function is the identity transform. The scaling is not isotropic and the angles of the element are not conserved.

`scaleY(sy)` is a shorthand for `scale(1, sy)` or for `scale3d(1, sy, 1)`.

`scaleY(-1)` defines an [axial symmetry](http://en.wikipedia.org/wiki/Axial_symmetry) with a horizontal axis passing by the origin (as specified by the [`transform-origin`](transform-origin) property).

#### 表達式

```plain
scaleY(s)
```

#### 值

- _s_
  - : Is a {{cssxref("&lt;number&gt;")}} representing the scaling factor to apply on the ordinate of each point of the element.

<table>
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

### `scaleZ()`

The `scaleZ()` CSS function modifies the z-coordinate of each element point by a constant factor, except if this scale factor is `1`, in which case the function is the identity transform. The scaling is not isotropic and the angles of the element are not conserved.

`scaleZ(sz)` is a shorthand for `scale3d(1, 1, sz)`.

`scaleZ(-1)` defines an [axial symmetry](http://en.wikipedia.org/wiki/Axial_symmetry) along the z-axis passing by the origin (as specified by the [`transform-origin`](transform-origin) property).

#### 表達式

```plain
scaleZ(s)
```

#### 值

- _s_
  - : Is a {{cssxref("&lt;number&gt;")}} representing the scaling factor to apply on the z-coordinate of each point of the element.

<table>
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
        This transform applies to the 3D space and cannot be represented on the
        plane.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>s</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>s</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

### `skew()`

The `skew()` CSS function is a shear mapping, or transvection, distorting each point of an element by a certain angle in each direction. It is done by increasing each coordinate by a value proportionate to the specified angle and to the distance to the origin. The more far from the origin, the more away the point is, the greater will be the value added to it.

#### 表達式

```plain
skew(ax)       or
skew(ax, ay)
```

#### 值

- _ax_
  - : Is an {{ cssxref("&lt;angle&gt;") }} representing the angle to use to distort the element along the abscissa.
- _ay_
  - : Is an {{ cssxref("&lt;angle&gt;") }} representing the angle to use to distort the element along the ordinate.

<table>
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
              ><mtr>1<mtd>tan(ax)</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ><mtr></mtr></mtable></mfenced
        ></math>
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[1 tan(ay) tan(ax) 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

### `skewX()`

The `skewX()` CSS function is a horizontal shear mapping distorting each point of an element by a certain angle in the horizontal direction. It is done by increasing the abscissa coordinate by a value proportionate to the specified angle and to the distance to the origin. The more far from the origin, the more away the point is, the greater will be the value added to it.

#### 表達式

```plain
skewX(a)
```

#### 值

- _a_
  - : Is an {{ cssxref("&lt;angle&gt;") }} representing the angle to use to distort the element along the abscissa.

<table>
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
              ><mtr>1<mtd>tan(ay)</mtd></mtr
              ><mtr>0<mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ay)</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ay)</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>tan(ay)</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[1 0 tan(a) 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

### `skewY()`

The `skewY()` CSS function is a vertical shear mapping distorting each point of an element by a certain angle in the vertical direction. It is done by increasing the ordinate coordinate by a value proportionate to the specified angle and to the distance to the origin. The more far from the origin, the more away the point is, the greater will be the value added to it.

#### 表達式

```plain
skewY(a)
```

#### 值

- _a_
  - : Is an {{ cssxref("&lt;angle&gt;") }} representing the angle to use to distort the element along the ordinate.

<table>
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
              ><mtr>1<mtd>0</mtd></mtr
              ><mtr>tan(ax)<mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>tan(ax)<mtd>1</mtd><mtd>0</mtd></mtr
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
              ><mtr>tan(ax)<mtd>1</mtd><mtd>0</mtd></mtr
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
              ><mtr>tan(ax)<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[1 tan(a) 0 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

### `translate()`

![](/@api/deki/files/5970/=transform-functions-translate_2.png)The `translate()` CSS function moves the position of the element on the plane. This transformation is characterized by a vector whose coordinates define how much it moves in each direction.

#### Syntax

```plain
translate(tx)       or
translate(tx, ty)
```

#### 值

- _tx_
  - : Is a {{cssxref("&lt;length&gt;")}} representing the abscissa of the translating vector.
- _ty_
  - : Is a {{cssxref("&lt;length&gt;")}} representing the ordinate of the translating vector. If missing, it is assumed to be equals to **tx** : `translate(2)` means `translate(2, 2)`.

<table>
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
        <p>
          A translation is not a linear transform in ℝ<sup>2</sup> and cannot be
          represented using a matrix in the cartesian coordinates system.
        </p>
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtr
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
      <td><code>[1 0 0 1 tx ty]</code></td>
    </tr>
  </tbody>
</table>

### `translate3d()`

The `translate3d()` CSS function moves the position of the element in the 3D space. This transformation is characterized by a 3-dimension vector whose coordinates define how much it moves in each direction.

#### 表達式

```plain
translate3d(tx, ty, tz)
```

#### 值

- _tx_
  - : Is a {{cssxref("&lt;length&gt;")}} representing the abscissa of the translating vector.
- _ty_
  - : Is a {{cssxref("&lt;length&gt;")}} representing the ordinate of the translating vector.
- _tz_
  - : Is a {{cssxref("&lt;length&gt;")}} representing the z component of the translating vector. It can't be a {{cssxref("&lt;percentage&gt;")}} value; in that case the property containing the transform is considered invalid.

<table>
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
        <p>
          This transform applies to the 3D space and cannot be represented on
          the plane.
        </p>
      </td>
      <td colspan="1" rowspan="2">
        A translation is not a linear transform in ℝ<sup>3</sup> and cannot be
        represented using a matrix in the Cartesian coordinates system.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>tz</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

### `translateX()`

![](/@api/deki/files/5972/=transform-functions-translateX_2.png)The `translateX()` CSS function moves the element horizontally on the plane. This transformation is characterized by a {{cssxref("&lt;length&gt;")}} defining how much it moves horizontally.

`translateX(tx)` is a shortcut for `translate(tx, 0)`.

#### 表達式

```plain
translateX(t)
```

#### 值

- _t_
  - : Is a {{cssxref("&lt;length&gt;")}} representing the abscissa of the translating vector.

<table>
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
        <p>
          A translation is not a linear transform in ℝ<sup>2</sup> and cannot be
          represented using a matrix in the cartesian coordinates system.
        </p>
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>t</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>t</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>t</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
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
      <td><code>[1 0 0 1 t 0]</code></td>
    </tr>
  </tbody>
</table>

### `translateY()`

![](/@api/deki/files/5971/=transform-functions-translateY_2.png)The `translateY()` CSS function moves the element vertically on the plane. This transformation is characterized by a {{cssxref("&lt;length&gt;")}} defining how much it moves vertically.

`translateY(ty)` is a shortcut for `translate(0, ty)`.

#### Syntax

```plain
translateY(t)
```

#### 值

- _t_
  - : Is a {{cssxref("&lt;length&gt;")}} representing the ordinate of the translating vector.

<table>
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
        <p>
          A translation is not a linear transform in ℝ<sup>2</sup> and cannot be
          represented using a matrix in the cartesian coordinates system.
        </p>
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>t</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><math
            ><mfenced
              ><mtable
                ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
                ><mtr>0<mtd>1</mtd><mtd>t</mtd></mtr
                ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
              ></mfenced
            ></math
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>t</mtd></mtr
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
      <td><code>[1 0 0 1 0 t]</code></td>
    </tr>
  </tbody>
</table>

### `translateZ()`

The `translateZ()` CSS function moves the element along the z-axis of the 3D space. This transformation is characterized by a {{cssxref("&lt;length&gt;")}} defining how much it moves.

`translateZ(tz)` is a shorthand for `translate3d(0, 0, tz)`.

#### 表達式

```plain
translateZ(t)
```

#### 值

- _t_
  - : Is a {{cssxref("&lt;length&gt;")}} representing the z-component of the translating vector. It can't be a {{cssxref("&lt;percentage&gt;")}} value; in that case the property containing the transform is considered invalid.

<table>
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
        This transform applies to the 3D space and cannot be represented on the
        plane.
      </td>
      <td colspan="1" rowspan="2">
        A translation is not a linear transform in ℝ<sup>3</sup> and cannot be
        represented using a matrix in the Cartesian coordinates system.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>t</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>
