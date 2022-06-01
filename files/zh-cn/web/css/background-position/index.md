---
title: background-position
slug: Web/CSS/background-position
tags:
  - Background
  - CSS Background
  - CSS Property
  - Reference
translation_of: Web/CSS/background-position
browser-compat: css.properties.background-position
---

{{CSSRef}}

The **`background-position`** [CSS](/zh-CN/docs/Web/CSS) 属性为每一个背景图片设置初始位置。这个位置是相对于由 {{cssxref("background-origin")}} 定义的位置图层的。

{{EmbedInteractiveExample("pages/css/background-position.html")}}

## 语法

```css
/* Keyword values */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <percentage> values */
background-position: 25% 75%;

/* <length> values */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Multiple images */
background-position: 0 0, center;

/* Edge offsets values */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Global values */
background-position: inherit;
background-position: initial;
background-position: revert;
background-position: unset;
```

`background-position` 属性被指定为一个或多个 `<position>` 值，用逗号隔开。

### 值

- `<position>`

  - : 一个 {{cssxref("&lt;position&gt;")}} 定义一组 x/y 坐标（相对于一个元素盒子模型的边界），来放置项目（原文为 item）。它可以使用一到四个值进行定义。如果使用两个非关键字值，第一个值表示水平位置，第二个值表示垂直位置。如果仅指定一个值，则第二个值默认是 `center`。如果使用三个或四个值，则长度百分比值是前面关键字值的偏移量。

    **一个值的语法：** 值可能是：

    - 关键字 `center`，用来居中背景图片。
    - 关键字 `top`、`left`、`bottom`、`right` 中的一个。用来指定把这个项目（原文为 item）放在哪一个边界。另一个维度被设置成 50%，所以这个项目（原文为 item）被放在指定边界的中间位置。
    - {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}。指定相对于左边界的 x 坐标，y 坐标被设置成 50%。

    **两个值的语法：** 一个定义 x 坐标，另一个定义 y 坐标。每个值可以是：

    - 关键字 `top`、`left`、`bottom`、`right` 中的一个。如果这里给出 `left` 或 `right`，那么这个值定义 x 轴位置，另一个值定义 y 轴位置。如果这里给出 `top` 或 `bottom`，那么这个值定义 y 轴位置，另一个值定义 x 轴位置。
    - {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}。如果另一个值是 `left` 或 `right`，则该值定义相对于顶部边界的 Y。如果另一个值是 `top` 或 `bottom`，则该值定义相对于左边界的 X。如果两个值都是 `<length>` 或 `<percentage>` 值，则第一个定义 X，第二个定义 Y。
    - 注意：如果一个值是 `top` 或 `bottom`，那么另一个值不可能是 `top` 或 `bottom`。如果一个值是 `left` 或 `right`，那么另一个值不可能是 `left` 或 `right`。也就是说，例如，`top top` 和 `left right` 是无效的。
    - 排序：配对关键字时，位置并不重要，因为浏览器可以重新排序，写成 `top left` 或 `left top` 其产生的效果是相同的。使用 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}} 与关键字配对时顺序非常重要，定义 X 的值放在前面，然后是定义 Y 的值， `right 20px` 和 `20px right` 的效果是不相同的，前者有效但后者无效。`left 20%` 或 `20% bottom` 是有效的，因为 X 和 Y 值已明确定义且位置正确。
    - 默认值是 `left top` 或者 `0% 0%`。

    **三个值的语法：** 两个值是关键字值，第三个是前面值的偏移量：

    - 第一个值是关键字 `top`、`left`、`bottom`、`right`，或者 `center`。如果设置为 `left` 或 `right`，则定义了 X。如果设置为 `top` 或 `bottom`，则定义了 Y，另一个关键字值定义了 X。
    - {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}，如果是第二个值，则是第一个值的偏移量。如果是第三个值，则是第二个值的偏移量。
    - 单个长度或百分比值是其前面的关键字值的偏移量。一个关键字与两个 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}} 值的组合无效。

    **四个值的语法：** 第一个和第三个值是定义 X 和 Y 的关键字值。第二个和第四个值是前面 X 和 Y 关键字值的偏移量：

    - 第一个值和第三个值是关键字值 `top`、`left`、`bottom`、 `right` 之一。如果设置为 `left` 或 `right`，则定义了 X。如果设置为 `top` 或 `bottom`，则定义了 Y，另一个关键字值定义了 X。
    - 第二个和第四个值是 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}。第二个值是第一个关键字的偏移量。第四个值是第二个关键字的偏移量。

### 关于百分比：

给定背景图像位置的百分比偏移量是相对于容器的。值 0% 表示背景图像的左（或上）边界与容器的相应左（或上）边界对齐，或者说图像的 0% 标记将位于容器的 0% 标记上。值为 100% 表示背景图像的 _右_（或 _下_）边界与容器的 _右_（或 _下_）边界对齐，或者说图像的 100% 标记将位于容器的 100% 标记上。因此 50% 的值表示水平或垂直居中背景图像，因为图像的 50% 将位于容器的 50% 标记处。类似的，`background-position: 25% 75%` 表示图像上的左侧 25% 和顶部 75% 的位置将放置在距容器左侧 25% 和距容器顶部 75% 的容器位置。

基本上发生的情况是从相应的容器尺寸中 _减去_ 背景图像尺寸，然后将结果值的百分比用作从左（或顶部）边界的直接偏移量。

```
(container width - image width) * (position x%) = (x offset value)
(container height - image height) * (position y%) = (y offset value)
```

以 X 轴为例，假设我们有一个 300px 宽的图像，我们在一个 100px 宽的容器中使用它，`background-size` 设置为 `auto`：

```
100px - 300px = -200px (container & image difference)
```

因此，位置百分比为 -25%、0%、50%、100%、125%，我们得到这些图像到容器边界偏移值：

```
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

因此，对于我们的示例，使用这些结果值，让**图像**的**左边界**从**容器**的**左边界**偏移：

- \+ 50px（将图像左边界放在 100px 宽容器的中心）
- 0px（图像左边界与容器左边界重合）
- \-100px (将图片相对容器左移 100px，这意味着图片中部的 100px 内容将出现在容器中)
- \-200px (将图片相对容器左移 200px，这意味着图片右部分的 100px 内容将出现在容器中)
- \-250px (将图片相对容器左移 250px，这意味着图片的右边界对齐容器的中线)

值得一提的是，如果您的 `background-size` 等于给定轴的容器大小，那么该轴的 _百分比_ 位置将不起作用，因为“容器图像差异”将为零。您将需要使用绝对值进行偏移。

## 正式定义

{{cssinfo}}

## 正式语法

{{csssyntax}}

## 例子

### 定位背景图像

下面三个例子每一个都使用 {{cssxref("background")}} 来创建一个包含一个星星的黄色长方形元素。每个例子中，星星的位置是不一样的。第三个例子阐明了如何为两个不同的背景图片指定位置。

#### HTML

```html
<div class="exampleone">Example One</div>
<div class="exampletwo">Example Two</div>
<div class="examplethree">Example Three</div>
```

#### CSS

```css
/* 被所有 div 共享 */
div {
  background-color: #ffee99;
  background-repeat: no-repeat;
  width: 300px;
  height: 80px;
  margin-bottom: 12px;
}

/* 这些例子使用 `background` 缩写 */
.exampleone {
  background: url("startransparent.gif") #ffee99 2.5cm bottom no-repeat;
}
.exampletwo {
  background: url("startransparent.gif") #ffee99 left 4em bottom 1em no-repeat;
}

/* 多背景图片：每个图片依次和相应的 `background-position` 匹配 */
.examplethree {
  background-image: url("startransparent.gif"), url("catfront.png");
  background-position: 0px 0px, right 3em bottom 2em;
}
```

#### 效果

{{EmbedLiveSample('定位背景图像', 420, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- [Using multiple backgrounds](/zh-CN/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
- {{cssxref("transform-origin")}}
