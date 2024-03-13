---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
---

{{CSSRef}}

**`radial-gradient()`** [CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions)创建一个图像，该图像由从原点辐射的两种或多种颜色之间的渐进过渡组成，其形状可以是圆形或椭圆形。函数的结果是 {{cssxref("&lt;gradient&gt;")}} 数据类型的对象，此对象是一种特殊的 {{cssxref("&lt;image&gt;")}} 类型。

{{EmbedInteractiveExample("pages/css/function-radial-gradient.html")}}

## 语法

```css
/* 在容器中心的渐变，从红色开始，变成蓝色，最后变成绿色 */
radial-gradient(circle at center, red 0, blue, green 100%)
```

径向渐变通过指定渐变的中心（0% 椭圆所在的位置）和*结束形状*（100% 椭圆）的大小和形状来指定。

## 值

- {{cssxref("&lt;position&gt;")}}
  - : 渐变的位置，和解析 {{cssxref("background-position")}} 或者 {{cssxref("transform-origin")}} 的方式相同。如果没有指定，默认为 `center`。
- `<ending-shape>`
  - : 渐变的结束形状。值可以是 `circle`（圆形，渐变的形状是一个半径不变的正圆）或 `ellipse`（椭圆，渐变形状是轴对称椭圆）。如果没有指定，默认为 `ellipse`。
- `<size>`

  - : 确定渐变结束形状的大小。如果省略，则默认为最远角（farthest-corner）。它可以显式给出，也可以通过关键字给出。就关键字定义而言，渐变框边缘应视为向两个方向无限延伸，而不是有限线段。

    对于它们的 `<size>`，圆形和椭圆渐变都接受以下关键字：

    | 关键字            | 描述                                                                                                               |
    | ----------------- | ------------------------------------------------------------------------------------------------------------------ |
    | `closest-side`    | 渐变结束形状如果是圆形，与容器距离渐变中心点最近的一边相切，如果是椭圆，则与距离渐变中心点最近的垂直和水平边相切。 |
    | `closest-corner`  | 渐变结束形状与容器距离渐变中心点最近的一个角相交。                                                                 |
    | `farthest-side`   | 类似于 `closest-side`，但是结束形状与容器距离渐变中心点最远的一边（或最远的垂直和水平边）相切。                    |
    | `farthest-corner` | 默认值，渐变的结束形状与容器距离渐变中心点最远的一个角相交。                                                       |

    如果 `<ending-shape>` 被指定为 `circle`，则可以为大小指定一个 [`<length>`](/zh-CN/docs/Web/CSS/length) 值，它明确了圆的半径。负值是无效的。

    如果 `<ending-shape>` 被指定为 `ellipse`，则可以使用带有两个值的 [`<length-percentage>`](/zh-CN/docs/Web/CSS/length-percentage) 来指定椭圆的大小。第一个值表示水平半径，第二个值表示垂直半径。百分比值是相对于渐变框在相应维度上的大小的。负值是无效的。

    如果 `<ending-shape>` 关键词被省略，渐变形状会由给定的大小决定。一个 `<length>` 产生圆，两个 `<length-percentage>` 单位的值产生椭圆。一个 `<percentage>` 值是无效的。

- `<linear-color-stop>`
  - : 色标（color stop）的 {{cssxref("&lt;color&gt;")}} 值，然后是一个或两个可选的色标位置（沿渐变轴的 {{cssxref("&lt;percentage&gt;")}} 或 {{cssxref("&lt;length&gt;")}}）。百分比值 `0%`，或者长度值 `0`，代表渐变的中心；值 `100%` 表示结束形状与虚拟渐变射线的交点。两者之间的百分比值线性定位在渐变射线上。包含两个色标位置相当于在两个位置上声明了两个颜色相同的色标。
- `<color-hint>`
  - : 颜色提示（color-hint）是一个插值提示，定义了渐变色在相邻色标之间的渐变方式。这个长度定义了渐变色应在两个色标之间的哪个点到达颜色过渡的中点。如果省略该值，颜色过渡的中点就是两个色标之间的中点。

## 描述

与其他渐变一样，径向渐变[没有内在尺寸](/zh-CN/docs/Web/CSS/image#描述)，也就是说，它没有固有或首选的尺寸，也没有首选的比例，其实际大小取决于所应用的元素的大小。

如要创建重复的径向渐变来填充容器，请使用 {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} 函数替代。

由于 `<gradient>` 属于 `<image>` 数据类型，因此只能用在能使用 `<image>` 的地方。因此，`radial-gradient()` 在 {{Cssxref("background-color")}} 及其他使用 {{cssxref("&lt;color&gt;")}} 数据类型的属性上不起作用。

## 径向渐变的合成

![解释径向渐变的图：虚拟辐射线从中点开始是水平的。椭圆渐变，及其结束形状，与所声明的框具有相同的长宽比。](radial_gradient.png)

径向渐变由其*中心点*、*结束形状*轮廓、*两个及以上色标*定义而成。

要创建平滑的渐变，`radial-gradient()` 函数绘制了一系列从中心点放射到*结束形状*（甚至可能超出范围）的同心轮廓。结束形状可以是圆形或椭圆形。

色标位于*虚拟渐变射线*（virtual gradient ray）上，该渐变射线从中心点水平向右延伸。基于百分比的色标位置是相对于结束形状和此渐变射线之间的交点（代表 `100％`）。每个形状都是单个颜色，并由其相交的渐变射线上的颜色确定。

## 形式语法

{{csssyntax}}

## 示例

### 简单的渐变

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 240px;
  height: 120px;
}
```

```css
.radial-gradient {
  background-image: radial-gradient(cyan 0%, transparent 20%, salmon 40%);
}
```

{{EmbedLiveSample('简单的渐变', 120, 120)}}

### 非居中渐变

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 240px;
  height: 120px;
}
```

```css
.radial-gradient {
  background-image: radial-gradient(
    farthest-corner at 40px 40px,
    #f35 0%,
    #43e 100%
  );
}
```

{{EmbedLiveSample('非居中渐变', 240, 120)}}

### 更多径向渐变示例

请参见 [CSS 渐变](/zh-CN/docs/Web/CSS/CSS_images/Using_CSS_gradients)获取更多示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 渐变](/zh-CN/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- 其他的渐变函数：{{cssxref("repeating-radial-gradient")}}、{{cssxref("linear-gradient")}}、{{cssxref("repeating-linear-gradient")}}、{{cssxref("conic-gradient")}}、{{cssxref("repeating-conic-gradient")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element")}}
- {{cssxref("image-set","image-set()")}}
- {{cssxref("cross-fade")}}
