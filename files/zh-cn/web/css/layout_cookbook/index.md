---
title: CSS Layout cookbook
slug: Web/CSS/Layout_cookbook
---

{{CSSRef}}

CSS layout cookbook 这本书旨在汇集常见的布局样式，这些布局你可能在自己的网站中会用到。这些布局样式不仅仅可以可以用来开始一个项目，而且提供了具体的使用方法，作为开发人员，你可以做出合适的选择。

> **备注：** 如果你是首次接触 CSS 布局，你可以先看一下[CSS layout learning module](/zh-CN/docs/Learn/CSS/CSS_layout)，书中的基础知识有利于你更好的使用本书中的布局样式。

## 布局样式

| Recipe                                                                               | Description                                                                                 | Layout Methods                                                                                                                                       |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Media objects](/zh-CN/docs/Web/CSS/Layout_cookbook/Media_objects)                   | 一个两栏的框，一边是图片，另一边是描述性文字，例如 facebook 上的帖子或推特                  | [CSS Grid](/zh-CN/docs/Web/CSS/CSS_Grid_Layout), {{cssxref("float")}} fallback, {{cssxref("fit-content")}} sizing                  |
| [Columns](/zh-CN/docs/Web/CSS/Layout_cookbook/Column_layouts)                        | 在什么时候选择 multi-column layout,flexbox 或者 grid                                        | [CSS Grid](/zh-CN/docs/Web/CSS/CSS_Grid_Layout), [Multicol](/zh-CN/docs/Web/CSS/CSS_Columns), [Flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout) |
| [Center an element](/zh-CN/docs/Web/CSS/Layout_cookbook/Center_an_element)           | 如何水平或者垂直居中一个 item                                                               | [Flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout), [Box Alignment](/zh-CN/docs/Web/CSS/CSS_Box_Alignment)                                       |
| [Sticky footers](/zh-CN/docs/Web/CSS/Layout_cookbook/Sticky_footers)                 | 创建一个页脚，当内容较短时，该页脚位于容器或视图的底部                                      | [CSS Grid](/zh-CN/docs/Web/CSS/CSS_Grid_Layout), [Flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)                                              |
| [Split navigation](/zh-CN/docs/Web/CSS/Layout_cookbook/Split_Navigation)             | 一种导航模式，里面的一些 links 显示的区分于其他                                             | [Flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout), {{cssxref("margin")}}                                                                 |
| [Breadcrumb navigation](/zh-CN/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation)   | 创建链接列表，允许访问者在页面层次结构中向上导航                                            | [Flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)                                                                                               |
| [List group with badges](/zh-CN/docs/Web/CSS/Layout_cookbook/List_group_with_badges) | 一个带有 count 计数的徽章的 items 列表                                                      | [Flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout), [Box Alignment](/zh-CN/docs/Web/CSS/CSS_Box_Alignment)                                       |
| [Pagination](/zh-CN/docs/Web/CSS/Layout_cookbook/Pagination)                         | 链接到内容页面 (比如搜索结果).                                                              | [Flexbox](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout), [Box Alignment](/zh-CN/docs/Web/CSS/CSS_Box_Alignment)                                       |
| [Card](/zh-CN/docs/Web/CSS/Layout_cookbook/Card)                                     | 卡片组件，显示在卡片网格中                                                                  | [Grid Layout](/zh-CN/docs/Web/CSS/CSS_Grid_Layout)                                                                                                   |
| [Grid wrapper](/zh-CN/docs/Web/CSS/Layout_cookbook/Grid_wrapper)                     | For aligning grid content within a central wrapper, while also allowing items to break out. | [CSS Grid](/zh-CN/docs/Web/CSS/CSS_Grid_Layout)                                                                                                      |

## Contribute a Recipe

As with all of MDN we would love you to contribute a recipe in the same format as the ones shown above. [See this page](/zh-CN/docs/user:chrisdavidmills/Layout_Cookbook_Home/Contribute_a_recipe) for a template and guidelines for writing your own example.
