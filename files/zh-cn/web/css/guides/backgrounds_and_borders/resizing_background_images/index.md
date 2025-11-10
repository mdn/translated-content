---
title: 调整背景图片的大小
slug: Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images
---

CSS 属性 **{{cssxref("background-size")}}** 可以用于调整元素的背景图片大小，通过指定图像的宽度和/或高度，覆盖默认的以全尺寸平铺图像的行为。通过这样做，你可以根据需要放大或缩小图像。

## 铺开大图像

让我们考虑一张大图片，一张 2982x2808 的 Firefox 标志图片。我们想（由于某种原因，可能涉及到可怕的糟糕的网站设计）将这个图片的四个副本平铺到一个 300x300 像素的元素中。要做到这一点，我们可以使用一个固定的 150 像素的 `background-size` 值。

### HTML

```html
<div class="tiledBackground"></div>
```

### CSS

```css
.tiledBackground {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

### 结果

{{EmbedLiveSample("铺开大图像", 340, 340)}}

## 伸缩图像

你也可以像这样同时指定图像的水平和垂直尺寸：

```css
background-size: 300px 150px;
```

结果看起来像这样：

![现在 Firefox 图标被伸展开了](stretched_firefox_logo.png)

## 放大图像

你可以在背景中放大图像。在这里，我们将 32x32 像素大小的 favicon 放大到了 300x300 像素：

![放大的 MDN 徽标](scaled_mdn_logo.png)

```css
.square2 {
  background-image: url(favicon.png);
  background-size: 300px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
}
```

正如你所看到的，CSS 实际上基本上是相同的，除了图像文件的名称。

## 特殊值：“contain”和“cover”

除了 {{cssxref("&lt;length&gt;")}} 值，CSS 属性 {{ cssxref("background-size") }} 提供了两个特殊的尺寸值：`contain` 和 `cover`。让我们来看看这些。

### contain

`contain` 值指定，无论包含的盒子大小如何，背景图像都应该被缩放，使每一面都尽可能大，同时不超过容器相应一面的长度。试着调整下面这个例子的大小，观察 contain 值的效果。

#### HTML

```html
<div class="bgSizeContain">
  <p>试着缩放这个元素！</p>
</div>
```

#### CSS

```css
.bgSizeContain {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: contain;
  width: 160px;
  height: 160px;
  border: 2px solid;
  color: pink;
  resize: both;
  overflow: scroll;
}
```

#### 结果

{{ EmbedLiveSample('contain', 250, 250) }}

### cover

`cover` 值指定背景图片的大小，使其尽可能的小，同时确保两个尺寸都大于或等于容器的相应尺寸。试着调整下面这个例子的大小，观察 cover 值的效果。

#### HTML

```html
<div class="bgSizeCover">
  <p>试着缩放这个元素！</p>
</div>
```

#### CSS

```css
.bgSizeCover {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: cover;
  width: 160px;
  height: 160px;
  border: 2px solid;
  color: pink;
  resize: both;
  overflow: scroll;
}
```

#### 结果

{{ EmbedLiveSample('cover', 250, 250) }}

## 参见

- {{ cssxref("background-size") }}
- {{ cssxref("background") }}
- [缩放 SVG 背景](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds)
