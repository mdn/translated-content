---
title: background-image
slug: Web/CSS/Reference/Properties/background-image
---

[CSS](/zh-CN/docs/Web/CSS) **`background-image`** 属性用于为一个元素设置一个或者多个背景图像。

{{InteractiveExample("CSS Demo: background-image")}}

```css interactive-example-choice
background-image: url("/shared-assets/images/examples/lizard.png");
```

```css interactive-example-choice
background-image:
  url("/shared-assets/images/examples/lizard.png"),
  url("/shared-assets/images/examples/star.png");
```

```css interactive-example-choice
background-image:
  url("/shared-assets/images/examples/star.png"),
  url("/shared-assets/images/examples/lizard.png");
```

```css interactive-example-choice
background-image:
  linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
  url("/shared-assets/images/examples/lizard.png");
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

在绘制时，图像以 z 方向堆叠的方式进行。先指定的图像会在之后指定的图像上面绘制。因此指定的第一个图像“最接近用户”。

然后元素的边框 [border](/zh-CN/docs/Web/CSS/Reference/Properties/border) 会在它们之上被绘制，而 {{cssxref("background-color")}} 会在它们之下绘制。图像的绘制与盒子以及盒子的边框的关系，需要在 CSS 属性{{cssxref("background-clip")}} 和 {{cssxref("background-origin")}} 中定义。

如果一个指定的图像无法被绘制 (比如，被指定的 URI 所表示的文件无法被加载)，浏览器会将此情况等同于其值被设为 `none`。

> [!NOTE]
> 即使图像是不透明的，背景色在通常情况下并不会被显示，web 开发者仍然应该指定 {{cssxref("background-color")}} 属性。如果图像无法被加载—例如，在网络连接断开的情况下—背景色就会被绘制。

## 语法

每个背景图像被明确规定为关键字 [`none`](#none) 或是一个 {{cssxref("&lt;image&gt;")}} 值。

可以提供由逗号分隔的多个值来指定多个背景图像：

```css
background-image:
  linear-gradient(to bottom, rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)),
  url("cat-front.png");
```

### 取值

- `none`
  - : 是一个表示无背景图的关键字。
- `<image>`
  - : {{cssxref("&lt;image&gt;")}} 用来标记将要显示的图片。支持[多背景](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)设置，背景之间以逗号隔开。

### 正规语法

{{csssyntax}}

## 示例

注意星星图片部分透明且位于猫图片上方。

#### HTML

```html
<div>
  <p class="catsandstars">This paragraph is full of cats<br />and stars.</p>
  <p>This paragraph is not.</p>
  <p class="catsandstars">Here are more cats for you.<br />Look at them!</p>
  <p>And no more.</p>
</div>
```

#### CSS

```css
p {
  font-size: 1.5em;
  color: #fe7f88;
  background-image: none;
  background-color: transparent;
}

div {
  background-image: url("mdn_logo_only_color.png");
}

.catsandstars {
  background-image: url("star-transparent.gif"), url("cat-front.png");
  background-color: transparent;
}
```

#### 结果

{{EmbedLiveSample('示例')}}

## 无障碍相关

浏览器不会向辅助技术提供有关背景图像的任何特殊信息。这对于屏幕阅读器来说非常重要，因为屏幕阅读器不会告知用户它的存在，因而不能向用户传达任何信息。如果图像包含对理解页面总体目的至关重要的信息，则最好在文档中作出语义性地描述（describe it semantically）。

- [MDN Understanding WCAG, Guideline 1.1 explanations](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 CSS 中实现图像合并](/zh-CN/docs/Web/CSS/Guides/Images/Implementing_image_sprites)
- {{HTMLElement("img")}}
- 与图像相关的数据类型：{{cssxref("&lt;image&gt;")}}、{{cssxref("&lt;gradient&gt;")}}
- 与图像相关的函数：
  - {{cssxref("cross-fade", "cross-fade()")}}
  - {{cssxref("element", "element()")}}
  - {{cssxref("image/image", "image()")}}
  - {{cssxref("image/image-set", "image-set()")}}
  - {{cssxref("gradient/linear-gradient", "linear-gradient()")}}
  - {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
  - {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
  - {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}
  - {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
  - {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
  - {{cssxref("image/paint", "paint()")}}
  - {{cssxref("url_value", "&lt;url&gt;")}}
