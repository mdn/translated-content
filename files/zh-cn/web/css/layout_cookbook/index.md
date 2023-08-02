---
title: CSS 布局手册
slug: Web/CSS/Layout_cookbook
---

{{CSSRef}}

CSS 布局手册旨在汇集常见的布局样式，这些布局你可能在自己的网站中会用到。这些布局样式不仅仅可以用来开始一个项目，而且提供了具体的使用方法，作为开发人员，你可以做出合适的选择。

> **备注：** 如果你是首次接触 CSS 布局，你可以先看一下 [CSS 布局学习模块](/zh-CN/docs/Learn/CSS/CSS_layout)，其中的基础知识有利于你更好的使用本书中的布局样式。

## 布局专题

| 专题                                                                             | 描述                                                                         | 布局方法                                                                                                                                                        |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [媒体对象](/zh-CN/docs/Web/CSS/Layout_cookbook/Media_objects)                    | 一个两栏的框，一边是图片，另一边是描述性文字，例如 facebook 上的帖子或推文。 | [CSS 网格](/zh-CN/docs/Web/CSS/CSS_grid_layout)、{{cssxref("float")}} 回落、{{cssxref("fit-content")}} 尺寸                                                     |
| [栏目布局](/zh-CN/docs/Web/CSS/Layout_cookbook/Column_layouts)                   | 多栏、弹性盒或网格布局的取舍                                                 | [CSS 网格](/zh-CN/docs/Web/CSS/CSS_grid_layout)、[多栏布局](/zh-CN/docs/Web/CSS/CSS_multicol_layout)、[弹性盒布局](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout) |
| [元素居中](/zh-CN/docs/Web/CSS/Layout_cookbook/Center_an_element)                | 如何水平或者垂直居中内容。                                                   | [弹性盒布局](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)、[盒子对齐](/zh-CN/docs/Web/CSS/CSS_box_alignment)                                                    |
| [粘性页脚](/zh-CN/docs/Web/CSS/Layout_cookbook/Sticky_footers)                   | 创建一个页脚，当内容较短时，该页脚位于容器或视图的底部。                     | [CSS 网格](/zh-CN/docs/Web/CSS/CSS_grid_layout)、[弹性盒](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)                                                          |
| [分离导航](/zh-CN/docs/Web/CSS/Layout_cookbook/Split_Navigation)                 | 一种导航模式，其中一些链接在视觉上与其他链接分开。                           | [弹性盒](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)、{{cssxref("margin")}}                                                                                    |
| [面包屑导航](/zh-CN/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation)          | 创建链接列表，允许访问者在页面层次结构中向上导航。                           | [弹性盒](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)                                                                                                           |
| [含有计数徽章的列表](/zh-CN/docs/Web/CSS/Layout_cookbook/List_group_with_badges) | 一个带有 count 计数的徽章的 items 列表。                                     | [弹性盒](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)、[盒子对齐](/zh-CN/docs/Web/CSS/CSS_box_alignment)                                                        |
| [分页](/zh-CN/docs/Web/CSS/Layout_cookbook/Pagination)                           | 链接到内容的某个页面（比如搜索结果）。                                       | [弹性盒](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)、[盒子对齐](/zh-CN/docs/Web/CSS/CSS_box_alignment)                                                        |
| [卡片](/zh-CN/docs/Web/CSS/Layout_cookbook/Card)                                 | 卡片组件，显示在卡片网格中                                                   | [CSS 网格](/zh-CN/docs/Web/CSS/CSS_grid_layout)                                                                                                                 |
| [网格包装器](/zh-CN/docs/Web/CSS/Layout_cookbook/Grid_wrapper)                   | 用于在一个中央包装器内对齐网格内容，同时也允许项目脱离。                     | [CSS 网格](/zh-CN/docs/Web/CSS/CSS_grid_layout)                                                                                                                 |

## 贡献布局专题

作为 MDN 的一员，我们希望你能贡献一份与上表所示相同格式的布局专题。[参见本页](/zh-CN/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe)以获得编写示例的模板和指南。
