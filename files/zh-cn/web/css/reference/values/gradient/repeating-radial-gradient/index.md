---
title: repeating-radial-gradient()
slug: Web/CSS/Reference/Values/gradient/repeating-radial-gradient
---

[CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions) **`repeating-radial-gradient()`** 创建一个从原点辐射的重复渐变组成的 {{cssxref("&lt;image&gt;")}}，类似于 {{cssxref("gradient/radial-gradient", "radial-gradient()")}} 并且采用相同的参数，但是它会在所有方向上无限重复色标，以覆盖其整个容器，类似于 {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}。函数的结果是 {{cssxref("&lt;gradient&gt;")}} 数据类型的对象，此对象是一种特殊的 {{cssxref("&lt;image&gt;")}} 类型。

{{InteractiveExample("CSS Demo: repeating-radial-gradient()")}}

```css interactive-example-choice
background: repeating-radial-gradient(#e66465, #9198e5 20%);
```

```css interactive-example-choice
background: repeating-radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
```

```css interactive-example-choice
background: repeating-radial-gradient(
  circle at 100%,
  #333,
  #333 10px,
  #eee 10px,
  #eee 20px
);
```

```html interactive-example
<section class="display-block" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-height: 100%;
}
```

每次重复时，色标（color stop）的位置的偏移量都是基准径向渐变长度（最后一个色标和第一个之间的距离）的倍数。因此，最后色标的颜色应该与第一个颜色的颜色保持一致；如果不一致，会导致非常突兀的渐变效果，可以通过将第一个色标重复添加到最后一个中来解决。

与其他渐变一样，径向重复渐变[没有内在尺寸](/zh-CN/docs/Web/CSS/Reference/Values/image#描述)，也就是说，它没有固有或首选的尺寸，也没有首选的比例，其实际大小取决于所应用的元素的大小。

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
  - : 渐变的位置，和 {{cssxref("background-position")}} 或者 {{cssxref("transform-origin")}} 以相同方式解析。如果没有指定，默认为 `center`。
- `<shape>`
  - : 渐变的结束形状。值可以是 `circle`（圆形，渐变的形状是一个半径不变的正圆）或 `ellipse`（椭圆，形状为轴对称椭圆）。如果没有指定，默认为 `ellipse`。
- `<extent-keyword>`
  - : 关键字，描述结束形状应该有多大。可能的值包括：

    | 关键字            | 描述                                                                                                               |
    | ----------------- | ------------------------------------------------------------------------------------------------------------------ |
    | `closest-side`    | 渐变结束形状如果是圆形，与容器距离渐变中心点最近的一边相切，如果是椭圆，则与距离渐变中心点最近的垂直和水平边相切。 |
    | `closest-corner`  | 渐变结束形状与容器距离渐变中心点最近的一个角相交。                                                                 |
    | `farthest-side`   | 类似于 `closest-side`，结束形状与容器距离渐变中心点最远的一边（或最远的垂直和水平边）相切。                        |
    | `farthest-corner` | 渐变的结束形状与容器距离渐变中心点最远的一个角相交。                                                               |

    > [!NOTE]
    > 早期的函数实现中还包含其他关键字（`cover` 和 `contain`），分别相当于标准关键字 `farthest-corner` 和 `closest-side`。但因为在某些实现中丢弃了这些旧的关键字，所以请仅使用标准关键字。

- `<color-stop>`
  - : 色标（color stop）的 {{cssxref("&lt;color&gt;")}} 值，然后是一个或两个可选的色标位置（沿渐变轴的 {{cssxref("&lt;percentage&gt;")}} 或 {{cssxref("&lt;length&gt;")}}）。百分比值 `0%`，或者长度值 `0`，表示渐变中心点；百分比值 `100%` 表示渐变射线与结束形状相交的点。其间的百分比值线性对应渐变射线上的点。

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

{{EmbedLiveSample('Farthest-corner 渐变', 120, 120)}}

这个椭圆形渐变会位于左上角靠中心 20% 的位置，在中心和最远角（右下角）之间重复 10 次。支持多位置色标的浏览器会显示为红色和绿色条纹的椭圆形。不支持这个语法的浏览器仍会从红色到黑色再由蓝色到绿色的渐变。

> [!NOTE]
> 更多例子请见[使用 CSS 渐变](/zh-CN/docs/Web/CSS/Guides/Images/Using_gradients)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 渐变](/zh-CN/docs/Web/CSS/Guides/Images/Using_gradients)
- 其他渐变函数：{{cssxref("gradient/radial-gradient", "radial-gradient()")}}、{{cssxref("gradient/linear-gradient", "linear-gradient()")}}、{{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}、{{cssxref("gradient/conic-gradient", "conic-gradient()")}}、{{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
