---
title: <angle>
slug: Web/CSS/angle
l10n:
  sourceCommit: 48813be4b5187c6a17e744e7f9ba37a146302847
---

{{CSSRef}}

**`<angle>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)表示以度（degrees）、百分度（gradians）、弧度（radians）或圈数（turns）表示的角度值。例如，它在 {{cssxref("&lt;gradient&gt;")}} 和 {{cssxref("transform")}} 的某些函数中被使用。

{{EmbedInteractiveExample("pages/css/type-angle.html")}}

## 语法

`<angle>` 数据类型由 {{cssxref("&lt;number&gt;")}} 后跟以下列出的单位之一组成。与所有尺寸一样，数字与单位之间没有空格。数字 `0` 后的单位是可选的。

此外，它前面可以加上一个 `+` 或 `-` 号。正数表示顺时针角度，而负数表示逆时针角度。对于给定单位的静态属性，任何角度都可以用各种等价值来表示。例如，`90deg` 等于 `-270deg`，`1turn` 等于 `4turn`。对于动态属性，比如应用 {{cssxref("animation")}} 或 {{cssxref("transition")}} 时，效果却会有所不同。

### 单位

- `deg`
  - : 以[度（角）](<https://zh.wikipedia.org/wiki/度_(角)>)为单位表示角度。一个完整的圆是 `360deg`。例：`0deg`、`90deg`、`14.23deg`。
- `grad`
  - : 以[百分度](https://zh.wikipedia.org/wiki/百分度)为单位表示角度。一个完整的圆是 `400grad`。例：`0grad`、`100grad`、`38.8grad`。
- `rad`
  - : 以[弧度](https://zh.wikipedia.org/wiki/弧度)为单位表示角度。一个完整的圆是 2π 弧度，约等于 `6.2832rad`，`1rad` 是 180/π 度。例：`0rad`、`1.0708rad`、`6.2832rad`。
- turn
  - : 以圈数为单位表示角度。一个完整的圆是 `1turn`。例：`0turn`、`0.25turn`、`1.2turn`。

## 示例

### 设置顺时针的直角

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle90.png" alt="通过从最顶部点移动到最右侧点，沿圆顺时针旋转 90 度的示意图。" /></td>
      <td><code>90deg = 100grad = 0.25turn ≈ 1.5708rad</code></td>
    </tr>
  </tbody>
</table>

### 设置平角

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle180.png" alt="通过从最顶部点移动到最底部点，沿圆顺时针旋转 180 度的示意图。" /></td>
      <td><code>180deg = 200grad = 0.5turn ≈ 3.1416rad</code></td>
    </tr>
  </tbody>
</table>

### 设置逆时针直角

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angleminus90.png" alt="通过从最顶部点移动到最左侧点，沿圆逆时针旋转 90 度的示意图。" /></td>
      <td><code>-90deg = -100grad = -0.25turn ≈ -1.5708rad</code></td>
    </tr>
  </tbody>
</table>

### 设置零角

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle0.png" alt="显示 0 度旋转的示意图，没有转动。" /></td>
      <td><code>0 = 0deg = 0grad = 0turn = 0rad</code></td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 数据类型](/zh-CN/docs/Web/CSS/CSS_Types)
- [`<gradient>`](/zh-CN/docs/Web/CSS/gradient) 类型
- CSS 旋转变换：[`rotate()`](/zh-CN/docs/Web/CSS/transform-function/rotate)、[`rotate3d()`](/zh-CN/docs/Web/CSS/transform-function/rotate3d)、[`rotateX()`](/zh-CN/docs/Web/CSS/transform-function/rotateX)、[`rotateY()`](/zh-CN/docs/Web/CSS/transform-function/rotateY) 和 [`rotateZ()`](/zh-CN/docs/Web/CSS/transform-function/rotateZ)
- [CSS 变换](/zh-CN/docs/Web/CSS/CSS_transforms)
- [使用 CSS 变换](/zh-CN/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- [使用 CSS 渐变](/zh-CN/docs/Web/CSS/CSS_images/Using_CSS_gradients)
