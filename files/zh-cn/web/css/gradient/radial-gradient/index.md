---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
---

{{CSSRef}}

**`radial-gradient()`** [CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions)创建一个图像，该图像由从原点辐射的两种或多种颜色之间的渐进过渡组成。它的形状可以是圆形或椭圆形。函数的结果是 {{cssxref("&lt;gradient&gt;")}} 数据类型的对象。这是一种特别的 {{cssxref("&lt;image&gt;")}}。

{{EmbedInteractiveExample("pages/css/function-radial-gradient.html")}}

## 语法

```css
/* 在容器中心的渐变，从红色开始，变成蓝色，最后变成绿色 */
radial-gradient(circle at center, red 0, blue, green 100%)
```

径向渐变通过指定渐变的中心（0% 椭圆所在的位置）和*结束形状*（100% 椭圆）的大小和形状来指定。

## 值

- `{{cssxref("&lt;position&gt;")}}`
  - : {{cssxref("&lt;position&gt;") }} 与 {{cssxref("background-position")}} 或者 {{ Cssxref("transform-origin")}} 类似。如果没有指定，默认为中心点。
- `<ending-shape>`
  - : 渐变结束时的形状。圆形（渐变的形状是一个半径不变的正圆）或椭圆形（轴对称椭圆）。默认值为椭圆。
- `<size>`

  - : 确定渐变结束形状的大小。如果省略，则默认为最远角。它可以显式给出，也可以通过关键字给出。出于关键字定义的目的，将梯度框边缘视为在两个方向上无限延伸，而不是有限线段。

    对于它们的 `<size>`，圆形和椭圆渐变都接受以下关键字：

    | 关键字            | 描述                                                                                                                 |
    | ----------------- | -------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | 渐变结束的边缘形状与容器距离渐变中心点最近的一边相切（圆形）或者至少与距离渐变中心点最近的垂直和水平边相切（椭圆）。 |
    | `closest-corner`  | 渐变结束的边缘形状与容器距离渐变中心点最近的一个角相交。                                                             |
    | `farthest-side`   | 与 `closest-side` 相反，边缘形状与容器距离渐变中心点最远的一边相切（或最远的垂直和水平边）。                         |
    | `farthest-corner` | 渐变结束的边缘形状与容器距离渐变中心点最远的一个角相交。                                                             |

    如果 `<ending-shape>` 被指定为圆形，则可以为大小指定一个 [`<length>`](/zh-CN/docs/Web/CSS/length)，它明确了圆的半径。

    如果 `<ending-shape>` 被指定为椭圆，或者被忽略，则可以使用 [`<length-percentage>`](/zh-CN/docs/Web/CSS/length-percentage) 用两个值来指定椭圆的大小。第一个值表示水平半径，第二个值表示垂直半径。百分比值是相对于渐变框的相应尺寸的。负值无效。

- `<linear-color-stop>`
  - : 色值结束点（color stop）的 {{cssxref("&lt;color&gt;")}} 值，后跟一个或两个可选的停止位置（沿渐变轴的 {{cssxref("&lt;percentage&gt;")}} 或 {{cssxref("&lt;length&gt;")}}）。`0%` 的百分比，或者 `0` 的长度，代表渐变的中心；值 `100%` 表示结束形状与虚拟渐变射线的交点。两者之间的百分比值线性定位在梯度射线上。包括两个停止位置相当于在两个位置声明了两个颜色相同的色值结束点。
- `<color-hint>`
  - : color-hint 是一个插值提示，定义了相邻色标之间的渐变如何进行。长度定义了两种颜色之间的哪个点渐变颜色应该到达颜色过渡的中点。如果省略，颜色过渡的中点是两个色值结束点之间的中点。

## 描述

与其他渐变相同，径向渐变是一个[不固定尺寸](/zh-CN/docs/Web/CSS/image#no_intrinsic)的图像，即它没有首选的大小，也没有首选的比例。具体大小将由它所应用的元素的大小决定。

如要创建重复的径向渐变来填充容器，请使用 CSS 的 {{cssxref("repeating-radial-gradient")}} 方法。

因为 `<gradient>` 属于 `<image>` 类型，所以它可以用于任何适用于 `<image>` 的地方。正是因为这样，`radial-gradient()` 不能用于 {{Cssxref("background-color")}} 和其他属性比如 {{cssxref("&lt;color&gt;")}} 数据类型。

## 径向渐变的组成

![解释径向梯度的图：虚拟辐射线从中点开始水平。椭圆渐变，以及最终的形状，与声明它的框具有相同的纵横比](radial_gradient.png)

径向渐变由其*中心点*、*边缘形状*轮廓、*两个或多个色值结束点*定义而成。

为了创建平滑的渐变，径向渐变函数绘制了一系列从中心点放射到边缘形状（甚至可能超出范围）的同心轮廓。边缘形状可以是圆形（circle）或椭圆形（ellipse）。

色值结束点位于虚拟渐变射线（Virtual gradient ray）上，该渐变射线从中心点水平向右延伸。基于百分比的色值结束位置是相对于边缘形状和此渐变射线之间的交点（代表 100％）。每个形状都是一种单色，并由其相交的渐变射线上的颜色确定。

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

- [CSS 渐变](/zh-CN/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- 其他的渐变函数：{{cssxref("repeating-radial-gradient")}}、{{cssxref("linear-gradient")}}、{{cssxref("repeating-linear-gradient")}}、{{cssxref("conic-gradient")}}、{{cssxref("repeating-conic-gradient")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("_image","image()")}}
- {{cssxref("element")}}
- {{cssxref("image-set","image-set()")}}
- {{cssxref("cross-fade")}}
