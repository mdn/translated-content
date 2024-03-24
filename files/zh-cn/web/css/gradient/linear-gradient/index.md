---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
---

{{CSSRef}}

**`linear-gradient()`** [CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions)创建一个由两种或多种颜色沿一条直线进行线性过渡的图像，其结果是 {{cssxref("&lt;gradient&gt;")}} 数据类型的对象，此对象是一种特殊的 {{cssxref("&lt;image&gt;")}} 数据类型。

{{EmbedInteractiveExample("pages/css/function-linear-gradient.html")}}

## 语法

```css
/* 渐变轴为 45 度，从蓝色渐变到红色 */
linear-gradient(45deg, blue, red);

/* 从右下到左上、从蓝色渐变到红色 */
linear-gradient(to left top, blue, red);

/* 色标：从下到上，从蓝色开始渐变，到高度 40% 位置是绿色渐变开始，最后以红色结束 */
linear-gradient(0deg, blue, green 40%, red);

/* 颜色提示：从左到右的渐变，由红色开始，沿着渐变长度到 10% 的位置，然后在剩余的 90% 长度中变成蓝色 */
linear-gradient(.25turn, red, 10%, blue);

/* 多位置色标：45% 倾斜的渐变，左下半部分为红色，右下半部分为蓝色，中间有一条硬线，在这里渐变由红色转变为蓝色 */
linear-gradient(45deg, red 0 50%, blue 50% 100%);
```

### 值

- `<side-or-corner>`
  - : 渐变线的起始点位置。如果指定了，则包含 `to` 和最多两个关键字：一个指定水平位置（`left` 或 `right`），另一个指定竖直位置（`top` 或 `bottom`）。关键词的先后顺序无影响。如果没有指定，则默认为 `to bottom`。
    `to top`、`to bottom`、`to left` 和 `to right` 分别等价于 `0deg`、`180deg`、`270deg` 和 `90deg`。其余值会被转换为角度。
- {{CSSxRef("&lt;angle&gt;")}}
  - : 渐变线的方向的角度。`0deg` 等价于 `to top`，增加值相当于顺时针旋转。
- `<linear-color-stop>`
  - : 色标（color stop）的 {{cssxref("&lt;color&gt;")}} 值，然后是一个或两个可选的色标位置（沿渐变轴的 {{cssxref("&lt;percentage&gt;")}} 值或 {{cssxref("&lt;length&gt;")}} 值）。
- `<color-hint>`
  - : 插值提示，定义渐变色在相邻色标之间的渐变过程。其中的长度定义了渐变色应在两个色标之间的哪个点到达颜色过渡的中点。如果省略该值，颜色过渡的中点就是两个色标之间的中点。

> **备注：** [CSS 渐变中的色标](#线性渐变的构成) 的渲染与 [SVG 渐变](/zh-CN/docs/Web/SVG/Tutorial/Gradients)中的色标遵循相同的规则。

## 描述

和其他渐变一样，线性渐变[没有内在尺寸](/zh-CN/docs/Web/CSS/image#描述)，也就是说，它没有固有或首选的尺寸，也没有首选的比例，其实际大小取决于所应用的元素的大小。

要创建一个能够重复填满容器的线性渐变，请使用 {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} 函数。

由于 `<gradient>` 属于 `<image>` 数据类型，因此只能用在能使用 [`<image>`](/zh-CN/docs/Web/CSS/image) 的地方。因此，`linear-gradient()` 在 {{CSSxRef("background-color")}} 以及其他使用 {{CSSxRef("&lt;color&gt;")}} 数据类型的属性上不起作用。

### 线性渐变的合成

线性渐变是在一个轴——*渐变线*和两个或者更多个*色标*构成的。轴上的每个点都是一个单独的颜色，要创建平滑的渐变，`linear-gradient()` 函数会绘制出一系列与渐变线垂直的彩色线，每条线都匹配与渐变线相交点的颜色。

![linear-gradient.png](linear-gradient.png)

渐变线由包含渐变图形的容器的中心点和一个角度来定义的。渐变线上的颜色值是由不同的点来定义，包括起始点、终点，以及两者之间的可选的中间点（中间点可以有多个）。

*起点*是渐变线上代表起始颜色值的点。*终点*是渐变线上代表最终颜色值的点。这两个点都是由渐变线和从最近的顶点发出的垂直线之间的交叉点定义的，然而从起点的对称点来定义终点是更容易理解的一种方式，因为终点是起点关于容器的中心点的反射点。这一复杂的定义导致了一个有趣的效果，有时称为 _magic corners_：起点附近的点具有跟起点相同的颜色值，终点附近的点具有跟终点相同的颜色值。

#### 自定义渐变

通过提供额外的色标，可以在多种颜色之间创建高度个性化的过渡效果。色标的位置可以由 {{CSSxRef("&lt;length&gt;")}} 值或 {{CSSxRef("&lt;percentage&gt;")}} 值清晰地指定。如果你不指定颜色的位置，那么将会位于前面和后面两点的中点。以下两个渐变是等价的：

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

默认情况下，颜色会从一个色标的颜色到后续的色标的颜色平滑过渡，颜色的中点是颜色过渡中的中间点。你可以将这个中点移动到两个色标之间的任何位置，方法就是在两个颜色之间的中点所在的位置添加一个没有加标签的 % 颜色提示。下面这个例子中，起始点到 10% 是纯红色，90% 到结束点是纯蓝色。10% 和 90% 之间是颜色从红色过渡到蓝色的地方，但是，过渡的中点是 30% 的位置，假如没有这个 30% 的颜色提示，就会是 50% 的位置。

```css
linear-gradient(red 10%, 30%, blue 90%);
```

如果两个及以上色标位于同一个位置，那么过渡会在这个位置的第一个和最后一个颜色之间产生一条硬线。

色标应该以递增的顺序列出。后面的更低值的色标会覆盖前面的值并创建硬过渡线。下面的渐变在 40% 处由红色变为黄色，然后在 25% 处由黄色变为蓝色：

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

允许有多个位置的色标。一个颜色可以声明为多个相邻的色标，方法就是在 CSS 声明中包括这两个位置。以下的三个渐变是等价的：

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

默认情况下，如果 `0%` 的地方没有颜色，那么那里就是声明的第一个颜色。类似地，最后一个颜色也会持续到 `100%` 的位置，或者如果最后一个色标没有声明长度，那么就是在 `100%` 的位置。

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

### 有多位置色标的渐变

这个示例使用了多位置的色标，两个相邻的颜色有相同的色标值，形成了条纹效果。

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

{{EmbedLiveSample("有多位置色标的渐变", 120, 120)}}

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
- MDN 博客中的文章 [CSS 颜色中的新功能、渐变和色调（级别 4）](/en-US/blog/css-color-module-level-4/)（2023 年）
