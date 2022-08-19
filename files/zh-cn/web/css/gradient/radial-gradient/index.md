---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
original_slug: Web/CSS/gradient/radial-gradient()
---
{{CSSRef}}

`radial-gradient()` CSS 函数创建了一个图像，该图像是由从原点发出的两种或者多种颜色之间的逐步过渡组成。它的形状可以是圆形（circle）或椭圆形（ellipse）。这个方法得到的是一个 CSS{{cssxref("&lt;gradient&gt;")}}数据类型的对象，其是 {{cssxref("&lt;image&gt;")}} 的一种。

{{EmbedInteractiveExample("pages/css/function-radial-gradient.html")}}

与其它渐变相同，径向渐变是一个[不固定尺寸](/zh-CN/docs/Web/CSS/image#no_intrinsic)的图像，即，它没有首选的大小，也没有首选的比例。具体大小将由它所应用的元素的大小决定。

如要创建重复的径向渐变来填充容器，请使用 CSS 的{{ Cssxref("repeating-radial-gradient") }} 方法。

因为 `<gradient>` 属于 `<image>` 类型，所以它可以用于任何适用于 `<image>` 的地方。正是因为这样，`radial-gradient()` 不能用于 {{Cssxref("background-color")}} 和其他属性比如 {{cssxref("&lt;color&gt;")}} 数据类型。

## radial gradient 的组成

![](/files/3795/radial%20gradient.png)径向渐变 (Radial gradients) 由其*中心点*、*边缘形状*轮廓、*两个或多个色值结束点（color stops）*定义而成。

为了创建平滑的渐变，径向渐变函数绘制了一系列从中心点放射到边缘形状（甚至可能超出范围）的同心轮廓。边缘形状可以是圆形（circle）或椭圆形（ellipse）。

色彩结束点位于虚拟渐变射线（Virtual gradient ray）上，该渐变射线从中心点水平向右延伸。基于百分比的色彩结束位置是相对于边缘形状和此渐变射线之间的交点（代表 100％）。每个形状都是一种单色，并由其相交的渐变射线上的颜色确定。

## 语法

```
/* A gradient at the center of its container,
   starting red, changing to blue, and finishing green */
radial-gradient(circle at center, red 0, blue, green 100%)
```

### 值

- `{{cssxref("&lt;position&gt;")}}`
  - : {{ cssxref("&lt;position&gt;") }}与{{ Cssxref("background-position") }}或者{{ Cssxref("transform-origin") }}类似。如缺省，默认为中心点。
- `<shape>`
  - : 渐变的形状。圆形（渐变的形状是一个半径不变的正圆）或椭圆形（轴对称椭圆）。默认值为椭圆。
- `<size>`
  - : 渐变的尺寸大小。包含的值见下表。
- `<color-stop>`
  - : 表示某个确定位置的固定色值，包含一个{{cssxref("&lt;color&gt;")}}值加上可选的位置值（相对虚拟渐变射线的{{cssxref("&lt;percentage&gt;")}}或者{{cssxref("&lt;length&gt;")}}长度值）。百分比值`0%`，或者长度值`0`，表示渐变中心点；百分比值`100%`表示渐变射线与边缘形状相交的点。 其间的百分比值线性对应渐变射线上的点。
- `<extent-keyword>`

  - : 关键字用于描述边缘轮廓的具体位置。以下为关键字常量：

    | 常量              | 描述                                                                                                             |
    | ----------------- | ---------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | 渐变的边缘形状与容器距离渐变中心点最近的一边相切（圆形）或者至少与距离渐变中心点最近的垂直和水平边相切（椭圆）。 |
    | `closest-corner`  | 渐变的边缘形状与容器距离渐变中心点最近的一个角相交。                                                             |
    | `farthest-side`   | 与 closest-side 相反，边缘形状与容器距离渐变中心点最远的一边相切（或最远的垂直和水平边）。                       |
    | `farthest-corner` | 渐变的边缘形状与容器距离渐变中心点最远的一个角相交。                                                             |

    > **备注：** 该函数的早期实现还包含其他关键字（ `cover` 和 `contain`），分别相当于标准关键字 `farthest-corner` 和 `closest-side` 。但因为在某些实现中丢弃了这些旧的关键字，所以请仅使用标准关键字。

- `<linear-color-stop>`
  - : A color-stop's {{cssxref("&lt;color&gt;")}} value, followed by an one or two optional stop positions (either a {{cssxref("&lt;percentage&gt;")}} or a {{cssxref("&lt;length&gt;")}} along the gradient's axis). A percentage of `0%`, or a length of `0`, represents the center of the gradient; the value `100%` represents the intersection of the ending shape with the virtual gradient ray. Percentage values in between are linearly positioned on the gradient ray. Including two stop positions is equivalent to declaring two color stops with the same color at the two positions.
- `<color-hint>`
  - : Th color-hint is an interpolation hint defining how the gradient progresses between adjacent color stops. The length defines at which point between two color stops the gradient color should reach the midpoint of the color transition. If omitted, the midpoint of the color transition is the midpoint between two color stops.

### Formal syntax

```
radial-gradient(
  [ [ circle || <length> ]                         [ at <position> ]? , |
    [ ellipse || [ <length> | <percentage> ]{2} ]  [ at <position> ]? , |
    [ [ circle | ellipse ] || <extent-keyword> ] [at <position> ]? , |
    at <position> ,
  ]?
  <color-stop-list> [ , <color-stop-list> ]+
)
where <extent-keyword> = closest-corner | closest-side | farthest-corner | farthest-side
   and <color-stop-list> = [ <linear-color-stop> [, <color-hint>? ]? ]#, <linear-color-stop>
   and <linear-color-stop> = <color> [ <color-stop-length> ]?
   and <color-stop-length> = [ <percentage> | <length> ]{1,2}
   and <color-hint> = [ <percentage> | <length> ]
```

> **警告：** Note that negative `<length>`'s are not allowed, however browsers had implemented negative lengths which are now being removed. [See the Firefox site compat note](https://www.fxsitecompat.dev/en-CA/docs/2019/css-radial-gradients-no-longer-accept-negative-radii/).

## 示例

### Simple gradient

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

{{EmbedLiveSample('Simple_gradient', 120, 120)}}

### Non-centered gradient

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
  background-image: radial-gradient(farthest-corner at 40px 40px,
      #f35 0%, #43e 100%);
}
```

{{EmbedLiveSample('Non-centered_gradient', 240, 120)}}

> **备注：** Please see [Using CSS gradients](/zh-CN/docs/Web/CSS/CSS_Images/Using_CSS_gradients) for more examples.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### Quantum CSS notes

Gecko used to have a long-standing bug whereby radial gradients like `radial-gradient(circle gold,red)` would work, even though they shouldn't because of the missing comma between `circle` and `gold`. Also, {{cssxref("calc")}} expressions were rejected — causing the value to be invalid — when used as the radius component of a `radial-gradient()` function ({{bug(1376019)}}). Firefox's new parallel CSS engine (also known as [Quantum CSS](https://wiki.mozilla.org/Quantum) or [Stylo](https://wiki.mozilla.org/Quantum/Stylo), released in Firefox 57) fixed these bugs.

## 另见

- [Using CSS gradients](/zh-CN/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- Other gradient functions: {{cssxref("repeating-radial-gradient")}}, {{cssxref("linear-gradient")}}, {{cssxref("repeating-linear-gradient")}}, {{cssxref("conic-gradient")}}, {{cssxref("repeating-conic-gradient")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("_image","image()")}}
- {{cssxref("element()")}}
- {{cssxref("image-set","image-set()")}}
- {{cssxref("cross-fade")}}
