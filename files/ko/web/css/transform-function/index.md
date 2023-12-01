---
title: <transform-function>
slug: Web/CSS/transform-function
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`<transform-function>`** [자료형](/ko/docs/Web/CSS/CSS_Types)은 요소의 외형에 영향을 주는 변형을 나타냅니다. 변형 함수는 2D 또는 3D 공간 내에서 요소를 회전하고, 크기를 바꾸고, 왜곡하고, 이동할 수 있습니다. {{cssxref("transform")}} 속성에서 사용합니다.

## 변형을 수학적으로 표현하기

HTML요소의 크기와 형태, 그리고 요소에 가해진 변형을 표현할 땐 다양한 좌표계를 사용할 수 있습니다. 가장 흔히 사용하는건 [직교좌표계](https://ko.wikipedia.org/wiki/%EC%A7%81%EA%B5%90_%EC%A2%8C%ED%91%9C%EA%B3%84)이나, 가끔 [동차좌표계](https://ko.wikipedia.org/wiki/%EB%8F%99%EC%B0%A8%EC%A2%8C%ED%91%9C)도 쓰입니다.

### 직교좌표계

직교좌표계 평면 위의 점은 X 좌표(가로 좌표)와 Y 좌표(세로 좌표)를 사용해 표현하며, 벡터 표현 `(x, y)`를 사용해 나타냅니다.

![직교 좌표계](coord_in_R2.png)

CSS (및 다른 대부분의 컴퓨터 그래픽)에서, 원점 `(0, 0)`은 요소의 좌상단 꼭짓점을 가리킵니다. 양의 좌표는 원점의 오른쪽과 아래로 진행하고, 음의 좌표는 왼쪽과 위로 진행합니다. 따라서 오른쪽으로 2단위, 아래쪽으로 5단위에 위치한 점은 `(2, 5)`이고 왼쪽으로 3단위, 위쪽으로 12단위 나아간 점은 `(-3, -12)`입니다.

### 변형 함수

Transformation functions alter the appearance of an element by manipulating the values of its coordinates. A linear transformation function is described using a 2×2 matrix, like this:

<math><mfenced><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtr> <mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtr></mtable></mfenced></math>

The function is applied to an element by using matrix multiplication. Thus, each coordinate changes based on the values in the matrix:

<math><mfenced><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd></mtr> <mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd></mtr> </mtable></mfenced><mfenced><mtable><mtr><mtd><mi>x</mi></mtd></mtr><mtr><mtd><mi>y</mi></mtd></mtr> </mtable></mfenced><mo>=</mo> <mfenced><mtable><mtr><mtd><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi></mtd> </mtr><mtr><mtd><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi></mtd></mtr></mtable></mfenced></math>

It is even possible to apply several transformations in a row:

<math><mfenced><mtable><mtr><mtd><msub><mi>a</mi><mn>1</mn></msub></mtd> <mtd><msub><mi>c</mi><mn>1</mn></msub></mtd> </mtr><mtr><mtd><msub><mi>b</mi><mn>1</mn></msub></mtd> <mtd><msub><mi>d</mi><mn>1</mn></msub></mtd> </mtr></mtable></mfenced><mfenced><mtable><mtr><mtd><msub><mi>a</mi><mn>2</mn></msub></mtd> <mtd><msub><mi>c</mi><mn>2</mn></msub></mtd> </mtr><mtr><mtd><msub><mi>b</mi><mn>2</mn></msub></mtd> <mtd><msub><mi>d</mi><mn>2</mn></msub></mtd> </mtr></mtable></mfenced><mo>=</mo> <mfenced><mtable><mtr><mtd><msub><mi>a</mi><mn>1</mn></msub> <msub><mi>a</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>c</mi><mn>1</mn></msub> <msub><mi>b</mi><mn>2</mn></msub> </mtd><mtd><msub><mi>a</mi><mn>1</mn></msub> <msub><mi>c</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>c</mi><mn>1</mn></msub> <msub><mi>d</mi><mn>2</mn></msub> </mtd></mtr><mtr><mtd><msub><mi>b</mi><mn>1</mn></msub> <msub><mi>a</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>d</mi><mn>1</mn></msub> <msub><mi>b</mi><mn>2</mn></msub> </mtd><mtd><msub><mi>b</mi><mn>1</mn></msub> <msub><mi>c</mi><mn>2</mn></msub> <mo>+</mo> <msub><mi>d</mi><mn>1</mn></msub> <msub><mi>d</mi><mn>2</mn></msub></mtd></mtr></mtable></mfenced></math>

With this notation, it is possible to describe, and therefore compose, most common transformations: rotations, scaling, or skewing. (In fact, all transformations that are linear functions can be described.) Composite transformations are effectively applied in order from right to left.

However, one major transformation is not linear, and therefore must be special-cased when using this notation: translation. The translation vector `(tx, ty)` must be expressed separately, as two additional parameters.

> **참고:** Though trickier than Cartesian coordinates, [homogeneous coordinates](https://en.wikipedia.org/wiki/Homogeneous_coordinates) in [projective geometry](https://en.wikipedia.org/wiki/Projective_geometry) lead to 3×3 transformation matrices, and can simply express translations as linear functions.

## 구문

The `<transform-function>` data type is specified using one of the transformation functions listed below. Each function applies a geometric operation in either 2D or 3D.

### 행렬 변형

- [`matrix()`](/ko/docs/Web/CSS/transform-function/matrix)
  - : Describes a homogeneous 2D transformation matrix.
- [`matrix3d()`](/ko/docs/Web/CSS/transform-function/matrix3d)
  - : Describes a 3D transformation as a 4×4 homogeneous matrix.

### 원근

- [`perspective()`](/ko/docs/Web/CSS/transform-function/perspective)
  - : Sets the distance between the user and the z=0 plane.

### 회전

- [`rotate()`](/ko/docs/Web/CSS/transform-function/rotate)
  - : Rotates an element around a fixed point on the 2D plane.
- [`rotate3d()`](/ko/docs/Web/CSS/transform-function/rotate3d)
  - : Rotates an element around a fixed axis in 3D space.
- [`rotateX()`](/ko/docs/Web/CSS/transform-function/rotateX)
  - : Rotates an element around the horizontal axis.
- [`rotateY()`](/ko/docs/Web/CSS/transform-function/rotateY)
  - : Rotates an element around the vertical axis.
- [`rotateZ()`](/ko/docs/Web/CSS/transform-function/rotateZ)
  - : Rotates an element around the z-axis.

### 크기 조절

- [`scale()`](/ko/docs/Web/CSS/transform-function/scale)
  - : Scales an element up or down on the 2D plane.
- [`scale3d()`](/ko/docs/Web/CSS/transform-function/scale3d)
  - : Scales an element up or down in 3D space.
- [`scaleX()`](/ko/docs/Web/CSS/transform-function/scaleX)
  - : Scales an element up or down horizontally.
- [`scaleY()`](/ko/docs/Web/CSS/transform-function/scaleY)
  - : Scales an element up or down vertically.
- [`scaleZ()`](/ko/docs/Web/CSS/transform-function/scaleZ)
  - : Scales an element up or down along the z-axis.

### 기울이기 (왜곡)

- [`skew()`](/ko/docs/Web/CSS/transform-function/skew)
  - : Skews an element on the 2D plane.
- [`skewX()`](/ko/docs/Web/CSS/transform-function/skewX)
  - : Skews an element in the horizontal direction.
- [`skewY()`](/ko/docs/Web/CSS/transform-function/skewY)
  - : Skews an element in the vertical direction.

### 이동

- [`translate()`](/ko/docs/Web/CSS/transform-function/translate)
  - : Translates an element on the 2D plane.
- [`translate3d()`](/ko/docs/Web/CSS/transform-function/translate3d)
  - : Translates an element in 3D space.
- [`translateX()`](/ko/docs/Web/CSS/transform-function/translateX)
  - : Translates an element horizontally.
- [`translateY()`](/ko/docs/Web/CSS/transform-function/translateY)
  - : Translates an element vertically.
- [`translateZ()`](/ko/docs/Web/CSS/transform-function/translateZ)
  - : Translates an element along the z-axis.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS {{cssxref("transform")}} 속성
