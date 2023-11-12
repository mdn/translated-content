---
title: background-image
slug: Web/CSS/background-image
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`background-image`** 属性用于为一个元素设置一个或者多个背景图像。

{{EmbedInteractiveExample("pages/css/background-image.html")}}

在绘制时，图像以 z 方向堆叠的方式进行。先指定的图像会在之后指定的图像上面绘制。因此指定的第一个图像“最接近用户”。

然后元素的边框 [border](/zh-CN/CSS/border) 会在它们之上被绘制，而 {{cssxref("background-color")}} 会在它们之下绘制。图像的绘制与盒子以及盒子的边框的关系，需要在 CSS 属性{{cssxref("background-clip")}} 和 {{cssxref("background-origin")}} 中定义。

如果一个指定的图像无法被绘制 (比如，被指定的 URI 所表示的文件无法被加载)，浏览器会将此情况等同于其值被设为 `none`。

> **备注：** 即使图像是不透明的，背景色在通常情况下并不会被显示，web 开发者仍然应该指定 {{cssxref("background-color")}} 属性。如果图像无法被加载—例如，在网络连接断开的情况下—背景色就会被绘制。

## 语法

每个背景图像被明确规定为关键字 [`none`](#none) 或是一个 {{cssxref("&lt;image&gt;")}} 值。

可以提供由逗号分隔的多个值来指定多个背景图像：

```css
background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 0, 0.5),
    rgba(0, 0, 255, 0.5)
  ), url("catfront.png");
```

### 取值

- `none`
  - : 是一个表示无背景图的关键字。
- `<image>`
  - : {{cssxref("&lt;image&gt;")}} 用来标记将要显示的图片。支持[多背景](/zh-CN/docs/Web/CSS/CSS_Background_and_Borders/Using_CSS_multiple_backgrounds)设置，背景之间以逗号隔开。

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
  background-image: url("startransparent.gif"), url("catfront.png");
  background-color: transparent;
}
```

#### 结果

{{EmbedLiveSample('示例')}}

## 无障碍相关

浏览器不会向辅助技术提供有关背景图像的任何特殊信息。这对于屏幕阅读器来说非常重要，因为屏幕阅读器不会告知用户它的存在，因而不能向用户传达任何信息。如果图像包含对理解页面总体目的至关重要的信息，则最好在文档中作出语义性地描述（describe it semantically）。

- [MDN Understanding WCAG, Guideline 1.1 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

\[1] 如果 `about:config` 中 `browser.display.use_document_colors` 被设置为 `false`, 背景图像将不会展示。

\[2] 当前的 iOS Safari 版本 (5.0) CSS 背景属性对 SVG 的支持并不完善。iOS Safari (5.0) 之前的版本亦是如此。

## 参见

- [Implementing image sprites in CSS](/zh-CN/docs/Web/Guide/CSS/CSS_Image_Sprites)
- {{HTMLElement("img")}}
- 与图像相关的数据类型：{{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;gradient&gt;")}}
- 与图像相关的函数：{{cssxref("linear-gradient")}}, {{cssxref("radial-gradient")}}, {{cssxref("repeating-linear-gradient")}}, {{cssxref("repeating-radial-gradient")}}, {{cssxref("element")}}, {{cssxref("_image", "image()")}}, {{cssxref("image-set")}}, {{cssxref("url", "url()")}}
