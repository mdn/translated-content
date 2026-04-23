---
title: CSS 背景和边框
slug: Web/CSS/Guides/Backgrounds_and_borders
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

**CSS 背景和边框**模块为元素提供了添加边框、圆角和阴影的属性。

你可以为元素添加各种类型的边框样式，涵盖从光栅图像到 CSS 渐变在内的任意类型图片作为边框素材。边框可以设置为方形或圆角，且每个角均可独立指定不同的圆角半径。无论元素是否有可见边框，均支持对其进行圆角化处理。

box-shadow 包括内阴影和外阴影、单个或多个阴影，以及实心或允许渐变为透明的阴影。外部 box-shadow 会投射出一种阴影，就好像元素的 border-box 是不透明的。内部 box-shadow 会投射出一种阴影，就好像填充边缘之外的所有内容都是不透明的。阴影可以是实心的，也可以包括过渡到透明的阴影颜色的扩散距离。

此模块中的属性还允许你定义 {{HTMLElement("table")}} 中的单元格应具有共享边框还是单独边框。

### 背景、边框和盒子阴影的实际应用

此边框、背景和阴影示例由线性渐变和径向渐变组成的居中背景图像组成。一系列框阴影使边框看起来像是“弹出”的。左侧元素设置了边框图像。右侧元素具有圆角虚线边框。

```html hidden live-sample___backgrounds
<article>
  <div></div>
  <div></div>
</article>
```

```css hidden live-sample___backgrounds
article {
  display: flex;
  gap: 10px;
}
div {
  color: #58ade3;
  height: 320px;
  width: 240px;
  padding: 20px;
  margin: 10px;
  border: dotted 15px; /* defaults to `currentcolor` */
  border-radius: 100px 0;
  background-image:
    radial-gradient(
      circle,
      transparent 60%,
      currentcolor 60% 70%,
      transparent 70%
    ),
    linear-gradient(45deg, currentcolor, white),
    linear-gradient(transparent, transparent);
  /* the third transparent background image was added to provide space for the background color to show through */
  background-color: currentcolor;
  background-position: center;
  background-size:
    60px 60px,
    120px 120px;
  background-clip: content-box, content-box, padding-box;
  box-shadow:
    inset 5px 5px 5px rgb(0 0 0 / 0.4),
    inset -5px -5px 5px rgb(0 0 0 / 0.4),
    5px 5px 5px rgb(0 0 0 / 0.4),
    -5px -5px 5px rgb(0 0 0 / 0.4);
}
div:first-of-type {
  border-radius: 0;
  border-image-source: repeating-conic-gradient(
    from 3deg at 25% 25%,
    currentColor 0 3deg,
    transparent 3deg 6deg
  );
  border-image-slice: 30;
}
```

{{EmbedLiveSample("backgrounds", "", "450px")}}

背景图像使用 {{cssxref("background-image")}} 定义。图像使用 {{cssxref("background-position")}} 居中。为多个背景图像使用 {{cssxref("background-clip")}} 属性的不同值，使背景图像保持在内容框内。背景颜色被裁剪到填充框，防止背景通过 {{cssxref("border-image")}} 和 {{cssxref("border-style", "dotted")}} {{cssxref("border")}} 的透明部分显示出来。右侧元素中的圆角使用 {{cssxref("border-radius")}} 属性创建。使用单个 {{cssxref("box-shadow")}} 声明设置所有阴影，包括内阴影和外阴影。

要查看此示例的代码，请在 [GitHub 上查看源代码](https://github.com/mdn/css-examples/blob/main/modules/backgrounds.html)。

## 参考

### 属性

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}
- {{cssxref("background")}} 简写
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}

- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-bottom")}} 简写
- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-left")}} 简写
- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-right")}} 简写
- {{cssxref("border-top-color")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}
- {{cssxref("border-top")}} 简写
- {{cssxref("border-color")}} 简写
- {{cssxref("border-style")}} 简写
- {{cssxref("border-width")}} 简写
- {{cssxref("border")}} 简写

- {{cssxref("border-collapse")}}

- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-radius")}} 简写

- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}
- {{cssxref("border-image")}} 简写

- {{cssxref("box-shadow")}}

### 数据类型

- {{cssxref("line-style")}} 枚举类型

## 指南

- [学习 CSS：背景与边框](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : 解释如何使用 CSS 背景图像实现装饰性图像。
- [多个背景的应用](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
  - : 解释如何在元素上设置一个或多个背景。
- [调整背景图片的大小](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
  - : 描述如何更改背景图像的大小和重复行为。
- [学习 CSS：盒模型](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : 解释边框以及其他模型属性如何影响 CSS 盒模型。
- [使用 CSS 渐变](/zh-CN/docs/Web/CSS/Guides/Images/Using_gradients)
  - : 解释如何创建 CSS 渐变背景图像。

## 相关概念

- {{cssxref("border-block-end-color")}} 属性
- {{cssxref("border-block-start-color")}} 属性
- {{cssxref("border-inline-end-color")}} 属性
- {{cssxref("border-inline-start-color")}} 属性
- {{cssxref("border-block-end-style")}} 属性
- {{cssxref("border-block-start-style")}} 属性
- {{cssxref("border-inline-end-style")}} 属性
- {{cssxref("border-inline-start-style")}} 属性
- {{cssxref("border-block-end-width")}} 属性
- {{cssxref("border-block-start-width")}} 属性
- {{cssxref("border-inline-end-width")}} 属性
- {{cssxref("border-inline-start-width")}} 属性

- {{cssxref("border-start-start-radius")}} 属性
- {{cssxref("border-start-end-radius")}} 属性
- {{cssxref("border-end-start-radius")}} 属性
- {{cssxref("border-end-end-radius")}} 属性

- {{cssxref("box-sizing")}} 属性
- {{cssxref("box-decoration-break")}} 属性
- {{cssxref("text-shadow")}} 属性

- {{cssxref("url_value", "&lt;url&gt;")}} CSS 类型
- [`<color>`](/zh-CN/docs/Web/CSS/Reference/Properties/color) 数据类型
- [`<image>`](/zh-CN/docs/Web/CSS/Reference/Values/image) 数据类型
- [`<position>`](/zh-CN/docs/Web/CSS/Reference/Properties/position) 数据类型

- [`currentcolor`](/zh-CN/docs/Web/CSS/Reference/Values/color_value#currentcolor_关键字) 关键字

## 规范

{{Specifications}}

## 参见

- 可以让你直观创建边框、圆角和阴影效果的交互工具：
  - [Border-image 生成器](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - [Border-radius 生成器](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
  - [Box-shadow 生成器](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator)
- [使用 CSS 为 HTML 元素添加颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Applying_color)，包括边框。
- [`drop-shadow()`](/zh-CN/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) 过滤函数将下拉阴影效果应用于输入图像。该函数由 {{cssxref("filter")}} 和 {{cssxref("backdrop-filter")}} 属性使用。
