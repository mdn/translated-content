---
title: <transform-function>
slug: Web/CSS/transform-function
---

{{CSSRef}}

The **`<transform-function>`** [CSS](/pt-BR/docs/Web/CSS) [data type](/pt-BR/docs/Web/CSS/CSS_Types) represents a transformation that affects an element's appearance. Transformation functions can rotate, resize, distort, or move an element in 2D or 3D space. It is used in the {{cssxref("transform")}} property.

## Describing transformations mathematically

Various coordinate models can be used to describe an HTML element's size and shape, as well as any transformations applied to it. The most common is the [Cartesian coordinate system](https://en.wikipedia.org/wiki/Cartesian_coordinate_system), although [homogeneous coordinates](https://en.wikipedia.org/wiki/Homogeneous_coordinates) are also sometimes used.

### [![](/files/3438/coord_in_R2.png)](/@api/deki/files/5796/=coord_in_R2.png)Cartesian coordinates

In the Cartesian coordinate system, a two-dimensional point is described using two values: an x coordinate (abscissa) and a y coordinate (ordinate). This is represented by the vector notation `(x, y)`.

In CSS (and most computer graphics), the origin `(0, 0)` represents the _top-left_ corner of any element. Positive coordinates are down and to the right of the origin, while negative ones are up and to the left. Thus, a point that's 2 units to the right and 5 units down would be `(2, 5)`, while a point 3 units to the left and 12 units up would be `(-3, -12)`.

### Transformation functions

Transformation functions alter the appearance of an element by manipulating the values of its coordinates. A linear transformation function is described using a 2x2 matrix, like this:

<math><mfenced><mtable><mtr><mtd>a</mtd><mtd>c</mtd></mtr> <mtr><mtd>b</mtd><mtd>d</mtd></mtr></mtable></mfenced></math>

The function is applied to an element by using matrix multiplication. Thus, each coordinate changes based on the values in the matrix:

[![](/@api/deki/files/5799/=transform_functions_generic_transformation_cart.png?size=webview)](/@api/deki/files/5799/=transform_functions_generic_transformation_cart.png)

It is even possible to apply several transformations in a row:

[![](/@api/deki/files/5800/=transform_functions_transform_composition_cart.png?size=webview)](/@api/deki/files/5800/=transform_functions_transform_composition_cart.png)

With this notation, it is possible to describe, and therefore compose, most common transformations: rotations, scaling, or skewing. (In fact, all transformations that are linear functions can be described.) Composite transformations are effectively applied in order from right to left.

However, one major transformation is not linear, and therefore must be special-cased when using this notation: translation. The translation vector `(tx, ty)` must be expressed separately, as two additional parameters.

> **Nota:** Though trickier than Cartesian coordinates, [homogeneous coordinates](https://en.wikipedia.org/wiki/Homogeneous_coordinates) in [projective geometry](https://en.wikipedia.org/wiki/Projective_geometry) lead to 3x3 transformation matrices, and can simply express translations as linear functions.

## Syntax

The `<transform-function>` data type is specified using one of the transformation functions listed below. Each function applies a geometric operation in either 2D or 3D.

### Matrix transformation

- {{cssxref("transform-function/matrix","matrix()")}}
  - : Describes a homogeneous 2D transformation matrix.
- {{cssxref("transform-function/matrix3d","matrix3d()")}}
  - : Describes a 3D transformation as a 4x4 homogeneous matrix.

### Perspective

- {{cssxref("transform-function/perspective","perspective()")}}
  - : Sets the distance between the user and the z=0 plane.

### Rotation

- {{cssxref("transform-function/rotate","rotate()")}}
  - : Rotates an element around a fixed point on the 2D plane.
- {{cssxref("transform-function/rotate3d","rotate3d()")}}
  - : Rotates an element around a fixed axis in 3D space.
- {{cssxref("transform-function/rotateX","rotateX()")}}
  - : Rotates an element around the horizontal axis.
- {{cssxref("transform-function/rotateY","rotateY()")}}
  - : Rotates an element around the vertical axis.
- {{cssxref("transform-function/rotateZ","rotateZ()")}}
  - : Rotates an element around the z-axis.

### Scaling (resizing)

- {{cssxref("transform-function/scale","scale()")}}
  - : Scales an element up or down on the 2D plane.
- {{cssxref("transform-function/scale3d","scale3d()")}}
  - : Scales an element up or down in 3D space.
- {{cssxref("transform-function/scaleX","scaleX()")}}
  - : Scales an element up or down horizontally.
- {{cssxref("transform-function/scaleY","scaleY()")}}
  - : Scales an element up or down vertically.
- {{cssxref("transform-function/scaleZ","scaleZ()")}}
  - : Scales an element up or down along the z-axis.

### Skewing (distortion)

- {{cssxref("transform-function/skew","skew()")}}
  - : Skews an element on the 2D plane.
- {{cssxref("transform-function/skewX","skewX()")}}
  - : Skews an element in the horizontal direction.
- {{cssxref("transform-function/skewY","skewY()")}}
  - : Skews an element in the vertical direction.

### Translation (moving)

- {{cssxref("transform-function/translate","translate()")}}
  - : Translates an element on the 2D plane.
- {{cssxref("transform-function/translate3d","translate3d()")}}
  - : Translates an element in 3D space.
- {{cssxref("transform-function/translateX","translateX()")}}
  - : Translates an element horizontally.
- {{cssxref("transform-function/translateY","translateY()")}}
  - : Translates an element vertically.
- {{cssxref("transform-function/translateZ","translateZ()")}}
  - : Translates an element along the z-axis.

## Specifications

| Specification                                                       | Status                       | Comment             |
| ------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('CSS3 Transforms', '#transform-property', 'transform')}} | {{Spec2('CSS3 Transforms')}} | Initial definition. |

## Compatibilidade com navegadores

{{Compat("css.types.transform-function")}}

## See also

- CSS {{cssxref("transform")}} property
