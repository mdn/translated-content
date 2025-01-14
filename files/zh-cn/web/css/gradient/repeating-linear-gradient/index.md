---
title: repeating-linear-gradient()
slug: Web/CSS/gradient/repeating-linear-gradient
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions) **`repeating-linear-gradient()`** 创建一个由重复线性渐变组成的 {{cssxref("&lt;image&gt;")}}，类似于 {{cssxref("linear-gradient")}}，并且采用相同的参数，但是它会在所有方向上重复渐变以覆盖其整个容器。这个函数的结果是 {{cssxref("&lt;gradient&gt;")}} 数据类型的对象，此对象是一种特殊的 {{cssxref("&lt;image&gt;")}} 类型。

{{EmbedInteractiveExample("pages/css/function-repeating-linear-gradient.html")}}

重复渐变的长度是第一个色标和最后一个色标之间的距离。如果第一种颜色没有色标长度，则色标长度默认为 0。每次重复时，色标的位置都会以基本线性渐变长度的倍数移动。因此，每个结束色标的位置都会与起始色标的位置重合；如果色值不同，就会产生鲜明的视觉过渡。可以通过重复第一种颜色值作为最后一种颜色值来改变这种情况。

与其他渐变一样，线性重复渐变[没有内在尺寸](/zh-CN/docs/Web/CSS/image#描述)，也就是说，它没有固有或首选的尺寸，也没有首选的比例，其实际大小取决于所应用的元素的大小。

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

  - : 渐变线的起始点位置。如果指定了，则包含 `to` 和两个关键字：一个指定水平位置（`left` 或 `right`），另一个指定竖直位置（`top` 或 `bottom`）。关键字的先后顺序无影响。如果没有指定，则默认为 `to bottom`。

    `to top`、`to bottom`、`to left` 和 `to right` 分别等价于 `0deg`、`180deg`、`270deg` 和 `90deg`。其余值会被转换为角度。

- {{cssxref("&lt;angle&gt;")}}
  - : 渐变线的方向的角度。`0deg` 等价于 `to top`，增加值相当于顺时针旋转。
- `<linear-color-stop>`
  - : 色标（color stop）的 {{cssxref("&lt;color&gt;")}} 值，然后是一个或两个可选的色标位置（沿渐变轴的 {{cssxref("&lt;percentage&gt;")}} 或 {{cssxref("&lt;length&gt;")}}）。百分比值 `0%`，或者长度值 `0`，代表渐变的开始，`100%` 代表 100% 的图像尺寸，也就是说渐变不会重复。
- `<color-hint>`
  - : 颜色提示（color-hint）是一种插值提示，定义了渐变色在相邻色标之间的渐变方式。长度定义了渐变色应在两个色标之间的哪个点到达颜色过渡的中点。如果省略此值，颜色过渡的中点就是两个色标之间的中点。

> **备注：** [CSS 渐变中的色标](#gradient_with_multiple_color_stops)的渲染与 [SVG 渐变](/zh-CN/docs/Web/SVG/Tutorial/Gradients)中的色标遵循相同的规则。

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
  /* 包括多个色标长度 */
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

由于最后一个色标是 10%，且渐变是竖直的，因此重复渐变中的每个渐变都是高度的 10%，正好满足 10 个水平线。

> [!NOTE]
> 更多示例请参见[使用 CSS 渐变](/zh-CN/docs/Web/CSS/CSS_images/Using_CSS_gradients)。

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
