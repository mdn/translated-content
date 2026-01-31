---
title: 外在尺寸
slug: Glossary/Extrinsic_size
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

在 CSS 中，一个元素的**外在尺寸**由其布局上下文决定，即由该元素外部施加的约束所决定，而与其内容无关。这与元素的{{glossary("intrinsic size", "内在尺寸")}}相反，后者由其内容所决定。

当你使用 [CSS 盒模型](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Box_model)属性（如 {{cssxref("width")}}、{{cssxref("height")}}、{{cssxref("block-size")}}、{{cssxref("inline-size")}}、{{cssxref("max-width")}} 和 {{cssxref("min-height")}}）显式设置或约束元素尺寸时，使用的就是外在尺寸。例如，当你设置 `width: 200px` 时，实际上就是在指定外在尺寸。

百分比值也属于外在尺寸；它们是相对于元素的[包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)计算得出的。
例如，`width: 50%` 表示该元素的宽度为其包含块宽度的 `50%`，而与其内部内容无关。

块级元素按外在方式确定尺寸。当未指定宽度时，块级元素的默认宽度为 `auto`，该值最终解析为包含块宽度的 `100%`。

## 参见

- 相关术语：
  - {{glossary("Intrinsic size", "内在属性")}}
- [CSS 盒子大小调整](/zh-CN/docs/Web/CSS/Guides/Box_sizing)模块
- [CSS 盒子大小设置模块第 3 版](https://drafts.csswg.org/css-sizing-3/#extrinsic)规范
