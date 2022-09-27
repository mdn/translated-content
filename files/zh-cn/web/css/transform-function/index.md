---
title: transform-function
slug: Web/CSS/transform-function
---

{{CSSRef}}

**`<transform-function>`** CSS 数据类型用于对元素的显示做变换。通常，这种变换可以由矩阵表示，并且可以使用每个点上的矩阵乘法来确定所得到的图像。

## 2D 图形 的坐标系统

目前有多种用来描述转换坐标模型，最常用的是 [笛卡尔坐标系统](https://en.wikipedia.org/wiki/Cartesian_coordinate_system) 和 [齐次坐标](https://en.wikipedia.org/wiki/Homogeneous_coordinates)。

### 笛卡尔 坐标

[![](/files/3438/coord_in_R2.png)](/@api/deki/files/5796/=coord_in_R2.png)

在笛卡尔坐标系中，每个 [欧氏空间](https://en.wikipedia.org/wiki/Euclidean_geometry) 里的点都由横坐标和纵坐标这两个值来确定。在 CSS（和大部分的计算机图形学）中，原点 `(0, 0)` 在元素的左上角。每个点都使用数学上的向量符号 (x,y) 来描述。

每个线性函数使用 2 × 2 矩阵描述，如：

a c
b d

将矩阵乘法用于上述坐标系中的每个点，一个变换就形成了：

[![](/@api/deki/files/5799/=transform_functions_generic_transformation_cart.png?size=webview)](/@api/deki/files/5799/=transform_functions_generic_transformation_cart.png).

可以在一行中进行多次矩阵乘法进行变换：

[![](/@api/deki/files/5800/=transform_functions_transform_composition_cart.png?size=webview)](/@api/deki/files/5800/=transform_functions_transform_composition_cart.png).

有了这种方法，就可以描述大部分常见的变换并因此可以将他们组合起来，如：旋转、缩放或拉伸。（事实上，所有线性函数的变换都可以被描述。）组合的变换是从右到左生效的。然而，有一种常见的变换并不是线性的，所以当这种变换要用这种方法来表示时，应该被单独列出来：位移。位移的向量 `(tx, ty)` 必须单独表示，作为两个附加参数。

[奥古斯特·费迪南德·莫比乌斯](https://zh.wikipedia.org/wiki/%E5%A5%A5%E5%8F%A4%E6%96%AF%E7%89%B9%C2%B7%E8%B4%B9%E8%BF%AA%E5%8D%97%E5%BE%B7%C2%B7%E8%8E%AB%E6%AF%94%E4%B9%8C%E6%96%AF) 的 [齐次坐标系](http://en.wikipedia.org/wiki/Projective_geometry) 表示了一个 3 × 3 的变换矩阵，虽然它对于非专业的人来说更复杂和少见，这并不影响将它表示为线性函数，并且这样就不需要考虑额外的特例。

## 3D 图形的坐标

## 转换函数的定义

### `matrix()`

CSS 函数 `matrix()` 用六个指定的值来指定一个均匀的二维（2D）变换矩阵。这个矩形中的常量值是不作为参数进行传递的，其他的参数则在主要列的顺序中描述。

`matrix(a, b, c, d, tx, ty)` 是 `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)` 的简写

> **备注：** 直到火狐浏览器的 16 版本，Gecko 内核才为 **tx** 和 **ty** 兼容了 {{cssxref("&lt;length&gt;")}} 这个数据格式。

#### 语法

```
matrix(a, b, c, d, tx, ty)
```

#### 属性值

- _a_ _b_ _c_ _d_
  - : 以 {{cssxref("&lt;number&gt;")}} 的格式来描述线性变换
- _tx_ _ty_
  - : 以 {{cssxref("&lt;number&gt;")}} 的格式来描述变换的量

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><br /><sup>笛卡尔坐标系中用二阶矩阵表示的点坐标</sup></th>
      <th scope="col"><br /><sup>齐次坐标系中用三阶矩阵表示的点坐标</sup></th>
      <th scope="col"><br /><sup>笛卡尔坐标系中用三阶矩阵表示的点坐标</sup></th>
      <th scope="col"><br /><sup>齐次坐标系中用四阶矩阵表示的点坐标</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a </mtd><mtd>c</mtd></mtr></mtable
            ></mfenced
          ></math
        ><br /><mtr><mtd>b </mtd><mtd>d</mtd></mtr>
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a </mtd><mtd>c </mtd><mtd>ty</mtd></mtr></mtable
            ></mfenced
          ></math
        ><br /><mtr><mtd>b </mtd><mtd>d </mtd><mtd>tx</mtd></mtr
        ><br /><mtr><mtd>0 </mtd><mtd>0 </mtd><mtd>1</mtd></mtr>
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a </mtd><mtd>c </mtd><mtd>ty</mtd></mtr></mtable
            ></mfenced
          ></math
        ><br /><mtr><mtd>b </mtd><mtd>d </mtd><mtd>tx</mtd></mtr
        ><br /><mtr><mtd>0 </mtd><mtd>0 </mtd><mtd>1</mtd></mtr>
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd>a </mtd><mtd>c </mtd><mtd>0 </mtd><mtd>tx</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        ><br /><mtr><mtd>b </mtd><mtd>d </mtd><mtd>0 </mtd><mtd>ty</mtd></mtr
        ><br /><mtr><mtd>0 </mtd><mtd>0 </mtd><mtd>1 </mtd><mtd>0</mtd></mtr
        ><br /><mtr><mtd>0 </mtd><mtd>0 </mtd><mtd>0 </mtd><mtd>1</mtd></mtr>
      </td>
    </tr>
    <tr>
      <td><code>[a b c d tx ty]</code></td>
    </tr>
  </tbody>
</table>

### `matrix3d()`

CSS 函数 `matrix3d()` 用一个 4 × 4 的齐次矩阵来描述一个三维（3D）变换。16 个参数都在主要列的顺序中描述。

> **备注：** 直到火狐浏览器的 16 版本，Gecko 内核才为 **a4**、**b4** 和 **c4** 兼容了 {{cssxref("&lt;length&gt;")}} 这个数据格式。

#### 语法

```
matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)
```

#### 参数

- _a1 b1 c1 d1_ _a2 b2 c2 d2_ _a3 b3 c3 d3_ _d4_
  - : 以 {{cssxref("&lt;number&gt;")}} 的格式来描述线性变换
- _a4_ _b4 c4_
  - : 以 {{cssxref("&lt;number&gt;")}} 的格式来描述变换的量

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><br /><sup>笛卡尔坐标系中用二阶矩阵表示的点坐标</sup></th>
      <th scope="col"><br /><sup>齐次坐标系中用三阶矩阵表示的点坐标</sup></th>
      <th scope="col"><br /><sup>笛卡尔坐标系中用三阶矩阵表示的点坐标</sup></th>
      <th scope="col"><br /><sup>齐次坐标系中用四阶矩阵表示的点坐标</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" rowspan="2">
        <p>这个变换是属于 3D 空间的，并不适用于这两种情况。</p>
      </td>
      <td colspan="1" rowspan="2">
        笛卡尔坐标矩阵不允许由一般的三维仿射变换来作为平移，因为平移不是线性变换。
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr><mtd>a1 </mtd><mtd>a2 </mtd><mtd>a3 </mtd><mtd>a4</mtd></mtr
              ><mtr
                ><mtd>b1 </mtd><mtd>b2 </mtd><mtd>b3 </mtd><mtd>b4</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        ><br /><mtr><mtd>c1 </mtd><mtd>c2 </mtd><mtd>c3 </mtd><mtd>c4</mtd></mtr
        ><br /><mtr
          ><mtd>d1 </mtd><mtd>d2 </mtd><mtd>d3 </mtd><mtd>d4</mtd></mtr
        >
      </td>
    </tr>
  </tbody>
</table>

### `perspective()`

`perspective()` 这个 CSS 函数定义了 z=0 平面与用户之间的距离，以便给三维定位元素一定透视度。当每个 3D 元素的 z>0 时会显得比较大，而在 z<0 时会显得比较小。其影响的程度由这个属性的值来决定。

#### 语法

```
perspective(l)
```

#### 参数

- _l_
  - : 该参数是一个 {{cssxref("&lt;length&gt;")}} 给定从用户（显示屏）到 z = 0 平面的距离。它用于将透视图转换应用于元素。如果它是 0 或负值，则不应用透视变换。

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
        <p>这个变换是属于 3D 空间的，并不适用于这两种情况。</p>
      </td>
      <td colspan="1" rowspan="2">
        笛卡尔坐标矩阵不允许由一般的三维仿射变换来作为平移，因为平移不是线性变换。
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

![](/@api/deki/files/5976/=transform-functions-rotate_19.5.png)The `rotate()` CSS 函数 定义一个旋转属性，将元素在不变形的情况下旋转到不动点周围 (如 {{ Cssxref("transform-origin") }} 属性所指定) 。移动量由指定角度定义;如果为正值，则运动将为顺时针，如果为负值，则为逆时针。180° 的旋转称为点反射 (_point reflection_)。

#### 语法

```
rotate(a)
```

#### 参数

- _a_
  - : 该参数表示 {{ cssxref("&lt;angle&gt;") }} 代表旋转的角度。正角表示顺时针旋转，负角表示逆时针旋转。

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

`rotate3d()` 这个 CSS 函数定义一个 3D 旋转功能，该旋转使元素能够绕固定轴移动而不变形。其中移动量由指定角度定义；如果为正值，则运动将为顺时针，如果为负值，则为逆时针。

在三维空间中，旋转有三个自由度，各表示某条旋转轴。旋转轴由 \[x，y，z] 向量定义，且过原点（由 {{ cssxref("transform-origin") }} CSS 属性定义）。如果向量没有标准化，即它的三个坐标的平方之和不是 1，它将在内部被标准化。不可标准化的向量，如空向量 \[0,0,0]，将导致旋转不被应用，但不会影响整个 CSS 属性。

> **备注：** 相对于平面上的旋转，三维旋转的组成通常不是可交换位置顺序的，这意味着旋转的应用顺序是至关重要的。

#### 语法

```
rotate3d(x, y, z, a)
```

#### 参数

- _x_
  - : 该参数为 {{cssxref("&lt;number&gt;")}} 类型值，描述旋转轴向量的 x 坐标。
- _y_
  - : 该参数为 {{cssxref("&lt;number&gt;")}} 类型值，描述旋转轴向量的 y 坐标。
- _z_
  - : 该参数为 {{cssxref("&lt;number&gt;")}} 类型值，描述旋转轴向量的 z 坐标。
- _a_
  - : 该参数为 {{ cssxref("&lt;angle&gt;") }} 代表旋转的角度。正角度表示顺时针旋转，负角度表示逆时针旋转。

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
      <td colspan="2">这个变换是属于 3D 空间的，并不适用于这两种情况。</td>
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

`rotateX()` 这个 CSS 函数定义了将元素在横坐标上旋转而不使其变形的方法。其运动的程度由指定的角度来定义；如果是正的，则为顺时针旋转，如果是负的，则是逆时针旋转。

旋转所经过的原点，由 {{ cssxref("transform-origin") }} CSS 属性定义。.

`rotateX(a)`是 `rotate3D(1, 0, 0, a)`的简写形式。

> **备注：** 与平面上的旋转相反，3D 旋转的组成通常也是不可交换顺序的；这意味着旋转的应用顺序至关重要。

#### 语法

```
rotateX(a)
```

#### 参数

- _a_
  - : 该参数为 {{ cssxref("&lt;angle&gt;") }} 代表旋转的角度，正角表示顺时针旋转，负角表示逆时针旋转。

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
      <td colspan="2">这个变换是属于 3D 空间的，并不适用于这两种情况。</td>
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

`rotateY()` 这个 CSS 函数定义了将元素在纵坐标上旋转而不使其变形的方法。其运动的程度由指定的角度来定义；如果是正的，则为顺时针旋转，如果是负的，则是逆时针旋转。

旋转所经过的原点，由 {{ cssxref("transform-origin") }} CSS 属性定义。

`rotateY(a)` 是 `rotate3D(0, 1, 0, a)` 的简写形式。

> **备注：** 与平面上的旋转相反，3D 旋转的组成通常也是不可交换顺序的；这意味着旋转的应用顺序至关重要。

#### 语法

```css
rotateY(a)
```

#### 参数

- _a_
  - : 该参数为 {{ cssxref("&lt;angle&gt;") }} 代表旋转的角度，正角表示顺时针旋转，负角表示逆时针旋转。

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
      <td colspan="2">这个变换是属于 3D 空间的，并不适用于这两种情况。</td>
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

`rotateZ()`这个 CSS 函数定义了将元素在 z 轴上旋转而不使其变形的方法。其运动的程度由指定的角度来定义；如果是正的，则为顺时针旋转，如果是负的，则是逆时针旋转。

旋转所经过的原点，由 {{ cssxref("transform-origin") }} CSS 属性定义。

`rotateZ(a)` 是 `rotate3D(0, 0, 1, a)` 的简写形式。

> **备注：** 与平面上的旋转相反，3D 旋转的组成通常也是不可交换顺序的；这意味着旋转的应用顺序至关重要。

#### 语法

```
rotateZ(a)
```

#### 参数

- _a_
  - : 该参数为 {{ cssxref("&lt;angle&gt;") }} 代表旋转的角度，正角表示顺时针旋转，负角表示逆时针旋转。

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
        这个变换是属于 3D 空间的，并不适用于这两种情况。
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
  </tbody>
</table>

### `scale()`

![](/@api/deki/files/5804/=transform-functions-scale_2_2.png?size=webview)

The `scale()` CSS 函数可改变元素的大小。它可以增大或减小元素的大小，并且缩放量由矢量定义，并且它可以使在一个方向上比另一个方向更多。

这种变换的特点是矢量的坐标可定义在每个不同方向上各子完成一定比例缩放。如果矢量的两个坐标相等，则缩放是均匀的或各向同性的，并且元素的形状被保留。在这种情况下，缩放函数定义了一个同调变换。

当超出 `[-1, 1]`范围外时，缩放将在坐标方向上放大元素；当在该范围内时，它在该方向收缩元素。当等于 1 时，它什么也不做，当它为负时，它执行点反射和大小修改。

> **备注：** `scale()` 函数仅在欧几里德平面 (2D) 中应用转换。要在空间中进行缩放，必须使用 `scale3D()` 函数。

#### 语法

```
scale(sx) or
scale(sx, sy)
```

#### 参数

- _sx_
  - : 该参数为 {{cssxref("&lt;number&gt;")}} 类型值，代表缩放矢量的横坐标。
- _sy_
  - : 该参数为 {{cssxref("&lt;number&gt;")}} 类型值，代表缩放矢量的纵坐标。如果不存在，则其默认值为 _**sx**_，从而导致保持元素形状进行均匀缩放。

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

`scale3d()` CSS 函数可改变元素的大小。由于缩放的量由矢量定义，因此可以改变不同方向的尺寸。

这种变换的特点是矢量的坐标定义在每个方向上完成多少缩放。如果矢量的三个坐标都相等，则缩放是均匀的或各向同性的，并且保持元素形状。在这种情况下，这个缩放函数就是定义了一个同调变换。

当超出 \[-1，1] 的范围之外时，缩放比例将在坐标方向上放大元素；当在 \[-1，1] 范围内时，它在当前方向收缩元素。当等于 1 时，它什么也不做，当它为负时，它执行点反射和大小修改。

#### 语法

```
scale3d(sx, sy, sz)
```

#### 参数

- _sx_
  - : 该参数为 {{cssxref("&lt;number&gt;")}} 类型值，代表缩放矢量的横坐标。
- _sy_
  - : 该参数为 {{cssxref("&lt;number&gt;")}} 类型值，代表缩放矢量的纵坐标。
- _sz_
  - : 该参数为 {{cssxref("&lt;number&gt;")}} 类型值，代表缩放矢量的 z 轴坐标。

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
        这个变换是属于 3D 空间的，并不适用于这两种情况。
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

![](/@api/deki/files/5807/=transform-functions-scaleX_2.png?size=webview) `scaleX()` 这个 CSS 函数是用一个常数因子来修改每个单元点的横坐标，在比例因子是 1 的情况下该函数是恒等变换。缩放不是各向同性的，元素的角度也不守恒。

`scaleX(sx)` 是 `scale(sx, 1)` 和 `scale3d(sx, 1, 1)` 的简写形式。

`scaleX(-1)` 表示通过原点的垂直轴定义轴对称（由 [`transform-origin`](transform-origin) 属性指定）。

#### 语法

```
scaleX(s)
```

#### 参数

- _s_
  - : 该参数为 {{cssxref("&lt;number&gt;")}} 类型值，表示在元素的每个点的横坐标上应用的缩放因子。

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

`scaleY()` 这个 CSS 函数用一个常数因子修改每个元素点的纵坐标，在比例因子是 1 的情况下该函数是恒等变换。缩放不是各向同性的，元素的角度不守恒。

`scaleY(sy)` 是 `scale(1, sy)` 和 `scale3d(1, sy, 1)` 的简写形式。

`scaleY(-1)` 定义了通过原点的水平轴的轴对称（由 [`transform-origin`](transform-origin) 属性指定）。

#### 语法

```
scaleY(s)
```

#### 参数

- _s_
  - : 该参数为 {{cssxref("&lt;number&gt;")}} 类型值，表示在元素的每个点的纵坐标上应用的缩放因子。

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

### `scaleZ()`

`scaleZ()` 这个 CSS 函数是用一个常数因子来修改每个单元点的 z 轴坐标，在比例因子是 1 的情况下该函数是恒等变换。缩放不是各向同性的，元素的角度也不守恒。

`scaleZ(sz)` 是 `scale3d(1, 1, sz)` 的简写形式。

`scaleZ(-1)` 定义了通过原点的 z 轴的轴对称（由 [`transform-origin`](transform-origin) 属性指定）。

#### 语法

```
scaleZ(s)
```

#### 参数

- _s_
  - : 该参数为 {{cssxref("&lt;number&gt;")}} 类型值，表示在元素的每个点的 z 轴坐标上应用的缩放因子。

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
        这个变换是属于 3D 空间的，并不适用于这两种情况。
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

`skew()` 这个 CSS 函数是一种用于拉伸，或者说是平移，该函数会使得在每个方向上扭曲元素上的每个点以一定角度。这是通过将每个坐标增加一个与指定角度成比例的值和到原点的距离来完成的。离原点越远，拉伸的值就越大。

#### 语法

```
skew(ax)       或
skew(ax, ay)
```

#### 参数

- _ax_
  - : 该参数为一个角度 {{ cssxref("&lt;angle&gt;") }} ，表示用于沿着横坐标扭曲元素的角度。
- _ay_
  - : 该参数为一个角度 {{ cssxref("&lt;angle&gt;") }} ，表示用于沿纵坐标扭曲元素的角度。

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

`skewX()` 这个 CSS 函数是用于水平拉伸，它将元素的每个点在水平方向上扭曲一定角度。这是通过将横坐标增加一个与指定角度成比例的值以及到原点的距离来完成的。离原点越远，拉伸的值就越大。

#### 语法

```
skewX(a)
```

#### 参数

- _a_
  - : 该参数为一个角度 {{ cssxref("&lt;angle&gt;") }} ，表示用于沿着横坐标扭曲元素的角度。

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

`skewY()` 这个 CSS 函数是用于垂直拉伸，它将元素的每个点在垂直方向上扭曲一定角度。这是通过将纵坐标增加一个与指定角度成比例的值以及到原点的距离来完成的。离原点越远，拉伸的值就越大。

#### 语法

```
skewY(a)
```

#### 参数

- _a_
  - : 该参数为一个角度 {{ cssxref("&lt;angle&gt;") }} ，表示用于沿着纵坐标扭曲元素的角度。

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

![](/@api/deki/files/5970/=transform-functions-translate_2.png) `translate()` 这个 CSS 函数用于移动元素在平面上的位置。这种变换的特点是矢量的坐标定义了它在每个方向上的移动量。

#### 语法

```
translate(tx)       或
translate(tx, ty)
```

#### 参数

- _tx_
  - : 该参数为 {{cssxref("&lt;length&gt;")}} ，表示要移动矢量的横坐标。
- _ty_
  - : 该参数为 {{cssxref("&lt;length&gt;")}} ，表示要移动矢量的纵坐标。如果不写则默认为零，例如 `translate(2)` 表示 `translate(2, 0)`。

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
        <p>
          平移不是 ℝ<sup>2</sup> 中的线性变换，不能用笛卡尔坐标系中的矩阵表示。
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

`translate3d()` 这个 CSS 函数用于移动元素在 3D 空间中的位置。这种变换的特点是三维矢量的坐标定义了它在每个方向上的移动量。

#### 语法

```
translate3d(tx, ty, tz)
```

#### 参数

- _tx_
  - : 该参数为 {{cssxref("&lt;length&gt;")}} ，代表移动矢量的横坐标。
- _ty_
  - : 该参数为 {{cssxref("&lt;length&gt;")}} ，代表移动矢量的纵坐标。
- _tz_
  - : 该参数为 {{cssxref("&lt;length&gt;")}} 代表移动矢量的 z 轴坐标。该值不能使用百分比 {{cssxref("&lt;percentage&gt;")}} ；如果使用会被认为是无效属性。

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
        <p>这个变换是属于 3D 空间的，并不适用于这两种情况。</p>
      </td>
      <td colspan="1" rowspan="2">
        平移不是ℝ<sup>3</sup>中的线性变换，不能用笛卡尔坐标系中的矩阵表示。
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

![](/@api/deki/files/5972/=transform-functions-translateX_2.png) `translateX()` 这个 CSS 函数用于在平面上水平移动元素。这个转换的特点是 {{cssxref("&lt;length&gt;")}} 定义了它的水平移动量。

`translateX(tx)` 是 `translate(tx, 0)` 的简写形式。

#### 语法

```
translateX(t)
```

#### 参数

- _t_
  - : 该参数为 {{cssxref("&lt;length&gt;")}} ，代表移动矢量的横坐标。

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

![](/@api/deki/files/5971/=transform-functions-translateY_2.png) `translateY()` 这个 CSS 函数用于在平面上垂直移动元素。这个转换的特点是通过 {{cssxref("&lt;length&gt;")}} 定义了它的垂直移动量。

`translateY(ty)` 是 `translate(0, ty)`的简写形式。

#### 语法

```
translateY(t)
```

#### 参数

- _t_
  - : 该参数为 {{cssxref("&lt;length&gt;")}} 代表移动矢量的横坐标。该参数不能使用百分比 {{cssxref("&lt;percentage&gt;")}} ；如果使用百分比形式，会被认为是无效参数。

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

`translateZ()` 这个 CSS 函数用于 3D 空间的 z 轴方向移动元素，这个转换的特点是通过 {{cssxref("&lt;length&gt;")}} 定义了它的 z 轴方向移动量。

`translateZ(tz)` 是 `translate3d(0, 0, tz)` 的简写形式。

#### 语法

```js
translateZ(t)
```

#### 参数

- _t_
  - : 该参数是 {{cssxref("&lt;length&gt;")}} ，代表移动矢量的 z 轴坐标。

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
        这个变换是属于 3D 空间的，并不适用于这两种情况。
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

## 规范

{{Specifications}}
