---
title: repeating-radial-gradient()
slug: Web/CSS/gradient/repeating-radial-gradient
original_slug: Web/CSS/gradient/repeating-radial-gradient()
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/CSS_Functions) **`repeating-radial-gradient()`** 创建一个从原点辐射的重复渐变组成的 {{cssxref("&lt;image&gt;")}}，类似于 {{cssxref("radial-gradient")}} 并且采用相同的参数，但是它会在所有方向上无限重复颜色，以覆盖其整个容器，类似于 {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}。函数的结果是 {{cssxref("&lt;gradient&gt;")}} 数据类型的对象，这是一种特殊的 {{cssxref("&lt;image&gt;")}} 类型。

{{EmbedInteractiveExample("pages/css/function-repeating-radial-gradient.html")}}

每次重复时，颜色点的位置的偏移量都是基准渐变长度（最后一个颜色点和第一个之间的距离）的倍数。因此，最后颜色点的颜色应该与第一个颜色的颜色保持一致；如果不一致的话，会导致非常突兀的渐变效果，可以将第一个颜色点重复添加到最后一个中来解决。

与其他渐变一样，径向重复渐变[没有内在尺寸](/zh-CN/docs/Web/CSS/image#description)，也就是说没有固有或首选的尺寸，也没有首选的比例，其实际大小取决于所应用的元素的大小。

由于 `<gradient>` 属于 `<image>` 数据类型，因此只能用在可以使用 `<image>` 的地方。因此，`repeating-radial-gradient()` 在{{Cssxref("background-color")}} 以及其他使用 {{cssxref("&lt;color&gt;")}} 数据类型上不起作用。

## 语法

```css
/* 位于容器中间的渐变，
   由红色开始，改变为蓝色，以绿色结束，
   颜色每 30px 重复一次 */
repeating-radial-gradient(circle at center, red 0, blue, green 30px);

/* 接近容器左上角的椭圆形渐变，
   由红色开始，改变为绿色，然后再变回红色，
   在中心和右下角之之间重复五次，
   在中心和左上角之间只重复一次 */
repeating-radial-gradient(farthest-corner at 20% 20%, red 0, green, red 20%);
```

### 值

- {{cssxref("&lt;position&gt;")}}
  - : `position` 与 {{cssxref("background-position")}} 或者 {{cssxref("transform-origin")}} 类似。默认值为 `center`。
- `<shape>`
  - : 渐变的形状。圆形（渐变的形状是一个半径不变的正圆）或椭圆形（轴对称椭圆）。如果没有指定，默认为椭圆形，即 `ellipse`。
- `<extent-keyword>`

  - : 关键字用于描述边缘轮廓的具体位置。以下为关键字常量：

    | 关键字            | 描述                                                                                                             |
    | ----------------- | ---------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | 渐变的边缘形状与容器距离渐变中心点最近的一边相切（圆形）或者至少与距离渐变中心点最近的垂直和水平边相切（椭圆）。 |
    | `closest-corner`  | 渐变的边缘形状与容器距离渐变中心点最近的一个角相交。                                                             |
    | `farthest-side`   | 与 `closest-side` 相反，边缘形状与容器距离渐变中心点最远的一边相切（或最远的垂直和水平边）。                     |
    | `farthest-corner` | 渐变的边缘形状与容器距离渐变中心点最远的一个角相交。                                                             |

    > **备注：** 早期的草案中还包含其他关键字 (`cover` and `contain`) ，分别相当于标准关键字 `farthest-corner` 和 `closest-side`,。但因为在某些实现中丢弃了这些旧的关键字，所以请仅使用标准关键字。

- `<color-stop>`
  - : 颜色点的 {{cssxref("&lt;color&gt;")}} 值，随后是可选的停止位置（沿着渐变轴的 {{cssxref("&lt;percentage&gt;")}} 或 {{cssxref("&lt;length&gt;")}}）。百分比值 `0%`，或者长度值 `0`，表示渐变中心点；百分比值 `100%` 表示渐变射线与边缘形状相交的点。其间的百分比值线性对应渐变射线上的点。

### 形式语法

{{csssyntax}}

## 示例

### 黑白相间的渐变

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 120px;
  height: 120px;
}
```

```css
.radial-gradient {
  background: repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
}
```

{{EmbedLiveSample('黑白相间的渐变', '300px', '120px', '')}}

```css
background: repeating-radial-gradient(black, black 5px, white 5px, white 10px);
```

### Farthest-corner 渐变

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
  background: repeating-radial-gradient(
    ellipse farthest-corner at 20% 20%,
    red,
    black 5%,
    blue 5%,
    green 10%
  );
  background: repeating-radial-gradient(
    ellipse farthest-corner at 20% 20%,
    red 0 5%,
    green 5% 10%
  );
}
```

{{EmbedLiveSample('Farthest-corner 渐变', '300px', '120px', '')}}

这个椭圆形渐变会位于左上角靠中心 20% 的位置，在中心和最远角（右下角）之间重复 10 次。支持多位置颜色点的浏览器会显示为红色和绿色条纹的椭圆形。不支持这个语法的浏览器仍会从红色到黑色再由蓝色到绿色的渐变。

> **备注：** 更多例子请见[使用 CSS 渐变](/zh-CN/docs/Web/CSS/CSS_images/Using_CSS_gradients)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 渐变](/zh-CN/docs/Web/Guide/CSS/Using_CSS_gradients)
- 其他渐变函数：{{cssxref("gradient/radial-gradient", "radial-gradient()")}}、{{cssxref("gradient/linear-gradient", "linear-gradient()")}}、{{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}、{{cssxref("gradient/conic-gradient", "conic-gradient()")}}、{{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
