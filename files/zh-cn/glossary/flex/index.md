---
title: 伸缩性
slug: Glossary/Flex
---

`flex` 是一个 CSS 的{{cssxref("display")}} 属性中新添加一个值。随着`inline-flex`的使用，它将使它适用的元素成为一个{{glossary("flex container")}}（伸缩容器），而这个元素的每个子元素将成为 {{glossary("flex item")}}（伸缩项目）。伸缩项目将参与到 flex 布局中，所有由 CSS Flexible Box Layout Module（CSS 伸缩盒布局模型）定义的属性都能被它们使用。

`flex` 属性是`flex-grow`, `flex-shrink` 和 `flex-basis` 属性的简写。

此外，`<flex>` 可以作为[弹性长度](/zh-CN/docs/Web/CSS/flex_value)被引用在 CSS Grid（栅格）布局中。

## 了解更多

### 属性参考

- {{cssxref("align-content")}} 堆栈伸缩行
- {{cssxref("align-items")}} 侧轴上项目对齐方式
- {{cssxref("align-self")}} 侧轴上单个项目对齐方式
- {{cssxref("flex")}} 伸缩性
- {{cssxref("flex-basis")}} 伸缩 - 基准值
- {{cssxref("flex-direction")}} 伸缩流方向
- {{cssxref("flex-flow")}}伸缩流的方向与换行
- {{cssxref("flex-grow")}}伸缩 - 扩展基数
- {{cssxref("flex-shrink")}} 伸缩 - 收缩比率
- {{cssxref("flex-wrap")}} 伸缩 - 换行
- {{cssxref("justify-content")}} 主轴对齐
- {{cssxref("order")}} 伸缩 - 顺序

### 延伸阅读

- _[CSS Flexible Box Layout Module Level 1 Specification](https://www.w3.org/TR/css-flexbox-1/)（CSS 盒布局模型一级规范）_
- CSS Flexbox Guide（CSS 伸缩盒子指南）: _[Basic Concepts of Flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)（伸缩）_
- CSS Flexbox Guide（CSS 伸缩盒子指南）: _[Relationship of flexbox to other layout methods](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)（伸缩盒子与其他布局方法的关系）_
- CSS Flexbox Guide（CSS 伸缩盒子指南）: _[Aligning items in a flex container](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)（伸缩容器中项的对齐）_
- CSS Flexbox Guide（CSS 伸缩盒子指南）: _[Ordering flex items](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)（伸缩项的顺序）_
- CSS Flexbox Guide（CSS 伸缩盒子指南）: _[Controlling Ratios of flex items along the main axis](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)（控制主轴上伸缩项的比率）_
- CSS Flexbox Guide（CSS 伸缩盒子指南）: _[Mastering wrapping of flex items](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)（掌握如何包装伸缩项）_
- CSS Flexbox Guide（CSS 伸缩盒子指南）: _[Typical use cases of flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)（伸缩盒子的典型用例）_
