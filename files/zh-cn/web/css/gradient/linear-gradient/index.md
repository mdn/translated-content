---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
original_slug: Web/CSS/gradient/linear-gradient()
---

{{CSSRef}}

**`linear-gradient()`** [CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions) 用于创建一个表示两种或多种颜色沿一条直线进行线性过渡的像，其结果属于 {{cssxref("&lt;gradient&gt;")}} 数据类型，这是一种特别的 {{cssxref("&lt;image&gt;")}} 数据类型。

{{EmbedInteractiveExample("pages/css/function-linear-gradient.html")}}

## 语法

```css
/* 渐变轴为45度，从蓝色渐变到红色 */
linear-gradient(45deg, blue, red);

/* 从右下到左上、从蓝色渐变到红色 */
linear-gradient(to left top, blue, red);

/* 从下到上，从蓝色开始渐变、到高度 40% 位置是绿色渐变开始、最后以红色结束 */
linear-gradient(0deg, blue, green 40%, red);

/* 颜色提示：从左到右的渐变，由红色开始，沿着渐变长度到 10% 的位置，然后剩下的长度中变成蓝色 */
linear-gradient(.25turn, red, 10%, blue);

/* 多位置颜色点：45% 倾斜的渐变，左下半部分为红色，右下半部分为蓝色，中间有一条硬，在这里渐变由红色转变为蓝色 */
linear-gradient(45deg, red 0 50%, blue 50% 100%);
```

### 值

- `<side-or-corner>`
  - : 描述渐变线的起始点位置。它包含 `to` 和两个关键词：第一个指出水平位置（`left` 或 `right`），第二个指出垂直位置（`top` 或 `bottom`）。关键词的先后顺序无影响，且都是可选的。如果没有指定，则默认为 `to bottom`。
    `to top`、`to bottom`、`to left` 和 `to right` 这些值分别会被转换成角度 `0deg`、`180deg`、`270deg` `90deg`。其余值会被转换为一个以向顶部中央方向为起点顺时针旋转的角度。渐变线的结束点与其起点中心对称。
- {{CSSxRef("&lt;angle&gt;")}}
  - : 用角度值指定渐变的方向。值 `0deg` 相当于 `to right`。角度顺时针增加。
- `<linear-color-stop>`
  - : 由一个颜色点的 {{cssxref("&lt;color&gt;")}} 值组成，并且跟随着一个可选的终点位置（可以是一个百分比值或者是沿着渐变轴的{{cssxref("&lt;length&gt;")}}）。CSS 渐变的颜色渲染采取了与 SVG 相同的规则。
- `<color-hint>`
  - : 颜色中转点是一个插值提示，它定义了在相邻颜色之间渐变如何进行。长度定义了在两种颜色之间的哪个点停止渐变颜色应该达到颜色过渡的中点。如果省略，颜色转换的中点是两个颜色停止之间的中点。

> **备注：** [CSS 渐变中的颜色点](#Gradient_with_multiple_color_stops) 的渲染与 [SVG 渐变](/zh-CN/docs/Web/SVG/Tutorial/Gradients) 在一致的规则。

## 描述

和其他渐变一样，线性渐变[没有内在尺寸](/zh-CN/docs/Web/CSS/image#no_intrinsic)；即，它不具备固有的或首选的尺寸，也不具备首选的比率。该函数的具体尺寸将与其适用的元素尺寸匹配。

要创建一个能够填满窗口的渐变，请使用 {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} 函数。

由于 `<gradient>` 属于 `<image>` 数据类型，因此只能在使用 [`<image>`](/zh-CN/docs/Web/CSS/image) 的地方使用。因此，`linear-gradient()` 不会用于 {{CSSxRef("background-color")}} 以及其他使用 {{CSSxRef("&lt;color&gt;")}} 数据类型的属性。

### 线性渐变的构成

线性渐变是在一个轴——*渐变线*和两个或者更多个*颜色点*构成的。轴上的每个点都是一个单独的颜色，要创建平滑的渐变，`linear-gradient()` 函数会绘制出一系列与渐变线垂直的彩色线，每条线都匹配与渐变线相交点的颜色。

![linear-gradient.png](linear-gradient.png)

渐变线由包含渐变图形的容器的中心点和一个角度来定义的。渐变线上的颜色值是由不同的点来定义，包括起始点、终点，以及两者之间的可选的中间点（中间点可以有多个）。

*起始点*是渐变线上代表起始颜色值的点。*终点*是渐变线上代表最终颜色值的点。这两个点都是由渐变线和从最近的顶点发出的垂直线之间的交叉点定义的，然而从起始点的对称点来定义终点是更容易理解的一种方式，因为终点是起点关于容器的中心点的反射点。这一复杂的定义导致了一个有趣的效果，有时称为 _magic colors_：起点附近的点具有跟起点相同的颜色值，终点附近的点具有跟终点相同的颜色值。

#### 自定义渐变

通过提供额外的颜色点，你可以创建多个颜色之间的高度自定义的过渡。颜色点的位置可以由 {{CSSxRef("&lt;length&gt;")}} 清晰地指定，也可以使用 {{CSSxRef("&lt;percentage&gt;")}} 指定。如果你不指定颜色的位置，那么将会位于前面的点和后面的点的中间。以及两个渐变是等价的。

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

如果两个或者多个颜色点位于同一个位置，那么过渡会在这个位置的第一个和最后一个颜色之间产生一条硬线。

颜色点应该以递增的顺序列出。后面的更低值的颜色点会覆盖前面的值并创建硬线。两面这个儒 40% 的位置将红色变成黄色，然后在渐变的 25% 的范围内由黄色墨迹为蓝色。

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

允许有多个位置的颜色点。一个颜色可以声明为多个相邻的颜色点，方法就是在 CSS 声明中包括这两个位置。以下的三个渐变是等价的：

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

默认情况下，如果 `0%` 的地方没有颜色，那么那里就是声明的第一个颜色。类似地，最后一个颜色也会持续到 `100%` 的位置，或者如果最后一个颜色点没有声明长度，那么就是在 `100%` 的位置。

## 形式语法

{{csssyntax}}

## 示例

### 45 度渐变

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(45deg, red, blue);
}
```

{{EmbedLiveSample("45 度渐变",120,120)}}

### 从渐变线 60% 处开始的渐变

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(135deg, orange 60%, cyan);
}
```

{{EmbedLiveSample("从渐变线 60% 处开始的渐变", 120, 120)}}

### 有多位置颜色点的渐变

这个例子使用了多位置的颜色点，两个相邻的颜色有相同的颜色点值，创建一个条纹效果。

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(
    to right,
    red 20%,
    orange 20% 40%,
    yellow 40% 60%,
    green 60% 80%,
    blue 80%
  );
}
```

{{EmbedLiveSample("有多位置颜色点的渐变", 120, 120)}}

### 更多线性渐变示例

更多示例请见[使用 CSS 渐变](/zh-CN/docs/Web/CSS/CSS_images/Using_CSS_gradients)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 渐变](/zh-CN/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- 其他渐变函数：{{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}、{{cssxref("gradient/radial-gradient", "radial-gradient()")}}、{{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}、{{cssxref("gradient/conic-gradient", "conic-gradient()")}}、{{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{CSSxRef("&lt;image&gt;")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
- [CSS 图像模块](/zh-CN/docs/Web/CSS/CSS_images)
- [新函数、和 CSS 颜色中的色相（级别 4）](/zh-CN/blog/css-color-module-level-4/) on MDN blog (2023)
