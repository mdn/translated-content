---
title: repeating-linear-gradient()
slug: Web/CSS/gradient/repeating-linear-gradient
original_slug: Web/CSS/gradient/repeating-linear-gradient()
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions) **`repeating-linear-gradient()`** 创建一个由重复线性渐变组成的 {{cssxref("&lt;image&gt;")}}，类似于 {{cssxref("linear-gradient")}}，并且采用相同的参数，但是它会在所有方向上重复渐变以覆盖其整个容器。这个函数的结果是 {{cssxref("&lt;gradient&gt;")}} 数据类型的对象，这是一种特殊的 {{cssxref("&lt;image&gt;")}} 类型。

{{EmbedInteractiveExample("pages/css/function-repeating-linear-gradient.html")}}

每次重复时，颜色点位置的偏移量都是基准渐变长度（最后一个颜色点和第一个之间的距离）的倍数。因此，最后颜色点的颜色应该与第一个颜色点的颜色保持一致；如果不一致的话，会导致非常突兀的渐变效果。这可以通过将第一个颜色值重复添加到最后一个颜色值中来修改。

与其他渐变一样，线形重复渐变[没有内在尺寸](/zh-CN/docs/Web/CSS/image#description)，也就是说没有固有或首选的尺寸，也没有首选的比例，其实际大小取决于所应用的元素的大小。

由于 `<gradient>` 属于 `<image>` 数据类型，因此只能用在可以使用 `<image>` 的地方。因此，`repeating-linear-gradient()` 在{{Cssxref("background-color")}} 以及其他使用 {{cssxref("&lt;color&gt;")}} 数据类型上不起作用。

## 语法

```css
/* 一个倾斜 45 度的重复线性渐变，
   从蓝色开始渐变到红色 */
repeating-linear-gradient(45deg, blue, red);

/* 一个从右下角到左上角的重复线性渐变，
   从蓝色开始渐变到红色 */
repeating-linear-gradient(to left top, blue, red);

/* 一个由下至上的重复线性渐变，
   从蓝色开始，40% 后变绿，
   最后渐变到红色 */
repeating-linear-gradient(0deg, blue, green 40%, red);

/* 从左到右重复五次的渐变，从红色开始，然后变绿，再变回红色 */
repeating-linear-gradient(to right, red 0%, green 10%, red 20%);
```

### 值

- `<side-or-corner>`
  - : 描述渐变线的起始点位置。它包含两个关键词：第一个指出垂直位置 left or right，第二个指出水平位置 top or bottom。关键词的先后顺序无影响，且都是可选的。
    to top, to bottom, to left 和 to right 这些值会被转换成角度 0 度、180 度、270 度和 90 度。其余值会被转换为一个以向顶部中央方向为起点顺时针旋转的角度。渐变线的结束点与其起点中心对称。
- {{cssxref("&lt;angle&gt;")}}
  - : 用角度值指定渐变的方向（或角度）。角度顺时针增加。
- `<linear-color-stop>`
  - : 颜色点的 {{CSSxRef("&lt;color&gt;")}} 值，随后是一个或者两个可选的停止点位置（每个都是沿着渐变轴上的一个 {{CSSxRef("&lt;percentage&gt;")}} 或者一个 {{CSSxRef("&lt;length&gt;")}}）。`0%` 的百分比，或者 `0` 的长度，代表渐变的开始，`100%` 代表 100% 的图像尺寸，也就是说渐变不会重复。
- `<color-hint>`
  - : color-hint 是插值提示，定义了两个相邻的颜色点之间的渐变如何进行。长度定义了两个颜色点之间的渐变颜色应该在哪里到达颜色过渡过程的中点。如果省略，那么颜色过渡的中点就是两个颜色点之间的中点。

> **备注：** [CSS 渐变中的颜色点](#Gradient_with_multiple_color_stops) 的渲染与 [SVG 渐变](/zh-CN/docs/Web/SVG/Tutorial/Gradients)中的颜色点遵循相同的规则。

### 形式语法

{{csssyntax}}

## 示例

### 斑马条纹

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 20px,
    black 20px,
    black 40px
  );
  /* with multiple color stop lengths */
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 20px,
    black 20px 40px
  );
}
```

{{EmbedLiveSample('斑马条纹', 120, 120)}}

### 十个重复的水平线

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(26, 198, 204),
    rgb(26, 198, 204) 7%,
    rgb(100, 100, 100) 10%
  );
}
```

{{EmbedLiveSample('十个重复水平线', 120, 120)}}

因为最后一个颜色点是 10%，且渐变是竖直的，因为重复渐变的每个渐变都是高度的 10%，正好满足 10 个水平线。

> **备注：** 更多示例请参见[使用 CSS 渐变](/zh-CN/docs/Web/CSS/CSS_images/Using_CSS_gradients)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 渐变](/zh-CN/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- 其他渐变函数：{{cssxref("gradient/linear-gradient", "linear-gradient()")}}、{{cssxref("gradient/radial-gradient", "radial-gradient()")}}、{{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}、{{cssxref("gradient/conic-gradient", "conic-gradient()")}}、{{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
