---
title: rotate3d()
slug: Web/CSS/transform-function/rotate3d
---

{{CSSRef}}

**`rotate3d()`** CSS 函数定义一个变换，它将元素围绕固定轴移动而不使其变形。运动量由指定的角度定义; 如果为正，运动将为顺时针，如果为负，则为逆时针。

{{EmbedInteractiveExample("pages/css/rotate3d.html")}}

在 3D 空间之中，旋转有 3 个自由维度，描述了旋转轴。旋转轴由一组 \[x, y, z] 矢量定义，并且通过变换源点传递（即通过 {{ cssxref("transform-origin") }} CSS 属性定义）。如果这些矢量被赋予非标准值，即 3 个坐标值的平方和不等于 1 时，它将会被内部隐式标准化。非标准矢量，例如空值和 \[0, 0, 0]，将会使旋转不起作用，但是不影响整个 CSS 属性的其他效果（译者注：如 transform 中的多项变换）。

> **备注：** 与平面旋转相反的是，3D 旋转的组合通常是不可交换的；这意味着定义旋转规则的值的顺序是严格控制的。

## 语法

```
rotate3d(x, y, z, a)
```

### 值

- _x_
  - : {{cssxref("&lt;number&gt;")}} 类型，可以是 0 到 1 之间的数值，表示旋转轴 X 坐标方向的矢量。
- _y_
  - : {{cssxref("&lt;number&gt;")}} 类型，可以是 0 到 1 之间的数值，表示旋转轴 Y 坐标方向的矢量。
- _z_
  - : {{cssxref("&lt;number&gt;")}} 类型，可以是 0 到 1 之间的数值，表示旋转轴 Z 坐标方向的矢量。
- _a_
  - : {{ cssxref("&lt;angle&gt;") }} 类型，表示旋转角度。正的角度值表示顺时针旋转，负值表示逆时针旋转。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">在ℝ<sup>2</sup>上的笛卡尔坐标</th>
      <td rowspan="2">这种变换应用于 3D 空间，不可用于平面空间</td>
    </tr>
    <tr>
      <th scope="col">在ℝℙ<sup>2</sup>上的齐次坐标</th>
    </tr>
    <tr>
      <th scope="col">在ℝ<sup>3</sup>上的笛卡尔坐标</th>
      <td colspan="1">
        <a href="/zh-CN/docs/Web/CSS/transform-function/rotate3d()/transform-functions-rotate3d_cart.png"
          ><img
            src="transform-functions-rotate3d_cart.png"
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
      <th scope="col">在ℝℙ<sup>3</sup>上的齐次坐标</th>
      <td colspan="1">
        <a href="/zh-CN/docs/Web/CSS/transform-function/rotate3d/transform-functions-rotate3d_hom4.png"
          ><img
            src="transform-functions-rotate3d_hom4.png"
            style="height: 61px; width: 522px"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

## 示例

### 绕 Y 轴旋转

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

#### 效果

{{EmbedLiveSample("绕 Y 轴旋转","100%","200")}}

### 围绕自定义轴旋转

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

#### 效果

{{EmbedLiveSample("围绕自定义轴旋转","100%","200")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
