---
title: Box-shadow 生成器
slug: Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator
---

这个可视化工具可以帮助你生成一个元素的 CSS {{cssxref("box-shadow")}} 相关代码，添加 box shadow 效果到你的 CSS 对象上。

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", '100%', 900)}}

Box-shadow 生成器可以向一个元素上添加一至多个 box shadow。

启动工具以后，你可以在顶侧右部找到一个长方形，那是要应用阴影效果的元素。当该元素被选择（首次加载页面时即如此）时你可以应用一些基本的样式：

- 使用颜色选择器设置元素的颜色（{{cssxref("color")}}）。
- 使用“border”复选框给予元素一个边框（{{cssxref("border")}}）。
- 使用滑轨设置元素的 {{cssxref("top")}}、{{cssxref("left")}}、{{cssxref("width")}} 和 {{cssxref("height")}} 属性。

要添加一个阴影，点击左上侧的“+”按钮，这就增加了一个阴影，并将其列在左边的栏里。现在你可以设置新阴影的值：

- 使用颜色选择器设置阴影的颜色（{{cssxref("color")}}）。
- 使用“inset”复选框设置阴影是否嵌入元素。
- 使用滑轨设置阴影元素的位置、模糊和扩展大小。

要添加另一个阴影，再次点击“+”。现在你设置的任何数值都将应用于这个新的阴影。用左上方的 ↑ 和 ↓ 按钮改变这两个阴影的应用顺序。再次选择第一个阴影，在左边的栏目中点击它。要更新元素本身的样式，请点击顶部标有“element”的按钮来选择它。

你可以为该元素添加 {{cssxref("::before")}} 和 {{cssxref("::after")}} 伪元素，并给它们加上盒状阴影。要在元素和它的伪元素之间进行切换，可以使用顶部标有“element”、“:before”和“:after”的按钮。

右下角的方框包含该元素的 CSS 和任何 `before::` 或 `::after` 伪元素。

## 参见

- [Border-image 生成器](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - : 该交互性工具可以让你可视化地创建边框图片（{{cssxref("border-image")}} 属性）。
- [Border-radius 生成器](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
  - : 该交互性工具可以让你可视化地创建圆角（{{cssxref("border-radius")}} 属性）。
