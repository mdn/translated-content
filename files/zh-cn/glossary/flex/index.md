---
title: 弹性
slug: Glossary/Flex
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

`flex` 是一个 CSS 的 {{cssxref("display")}} 属性中新添加一个值。与 `inline-flex` 一起，它将使它适用的元素成为一个 {{glossary("flex container", "弹性容器")}}，而这个元素的每个子元素将成为 {{glossary("flex item", "弹性项目")}}。弹性项目参与在弹性布局中，所有由 CSS 弹性盒子布局模块定义的属性都能被它们使用。

`flex` 属性是 `flex-grow`, `flex-shrink` 和 `flex-basis` 属性的简写。

此外，`<flex>` 可以作为[弹性长度](/zh-CN/docs/Web/CSS/flex_value)被引用在 CSS Grid（栅格）布局中。

## 参见

### 属性参考

- {{cssxref("align-content")}} 堆栈弹性行
- {{cssxref("align-items")}} 侧轴上项目对齐方式
- {{cssxref("align-self")}} 侧轴上单个项目对齐方式
- {{cssxref("flex")}} 弹性性
- {{cssxref("flex-basis")}} 弹性 - 基准值
- {{cssxref("flex-direction")}} 弹性流方向
- {{cssxref("flex-flow")}}弹性流的方向与换行
- {{cssxref("flex-grow")}}弹性 - 扩展基数
- {{cssxref("flex-shrink")}} 弹性 - 收缩比率
- {{cssxref("flex-wrap")}} 弹性 - 换行
- {{cssxref("justify-content")}} 主轴对齐
- {{cssxref("order")}} 弹性 - 顺序

### 延伸阅读

- _[CSS 弹性盒布局模型一级规范](https://www.w3.org/TR/css-flexbox-1/)_
- CSS 弹性盒子指南：
  - _[弹性盒子的基本概念](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
  - _[弹性盒子与其他布局方法的关系](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)_
  - _[对齐弹性容器中的弹性项目](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)_
  - _[排序弹性项目](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)_
  - _[控制主轴上弹性项目的比率](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)_
  - _[掌握如何包装弹性项目](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)_
  - _[弹性盒子的典型用例](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)_
