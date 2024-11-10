---
title: 布局模式
slug: Web/CSS/Layout_mode
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **布局模式**，有时简称为布局，是一种基于盒子与其兄弟和祖辈盒子的交互方式来确定盒子的位置和大小的算法。有以下几种形式：

- **块布局**：用来布置文件。块布局包含以文档为中心的功能，例如 [浮动](/zh-CN/docs/Web/CSS/float)元素或将其放置在[多列](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)上的功能。
- **行内布局**：用来布置文本。
- **表格布局**：用来布置表格。
- **定位布局**：用来对那些与其他元素无交互的定位元素进行布置。
- [**弹性盒子布局**](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Using_CSS_flexible_boxes)：用来布置那些可以顺利调整大小的复杂页面。{{experimental_inline}}
- [**网格布局**](/zh-CN/docs/Web/CSS/CSS_grid_layout)：用来布置那些与一个固定网格相关的元素。{{experimental_inline}}

> [!NOTE]
> 并非所有 [CSS 属性](/zh-CN/docs/Web/CSS/Reference) 适用于所有*布局模式*。大多数属性适用于一到两种布局模式，如果将属性设置在参与其他（原文 another，指三者或三者以上。）布局模式的元素上则会不起作用。

## 参见

- CSS 重要概念：

  - [CSS 语法](/zh-CN/docs/Web/CSS/Syntax)
  - [@ 规则](/zh-CN/docs/Web/CSS/At-rule)
  - [注释](/zh-CN/docs/Web/CSS/Comments)
  - [优先级](/zh-CN/docs/Web/CSS/Specificity)
  - [继承](/zh-CN/docs/Web/CSS/inheritance)
  - [盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [布局模式](/zh-CN/docs/Web/CSS/Layout_mode)
  - [视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)
  - [外边距合并](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 值

    - [初始值](/zh-CN/docs/Web/CSS/initial_value)
    - [计算值](/zh-CN/docs/Web/CSS/computed_value)
    - [解析值](/zh-CN/docs/Web/CSS/resolved_value)
    - [指定值](/zh-CN/docs/Web/CSS/specified_value)
    - [应用值](/zh-CN/docs/Web/CSS/used_value)
    - [实际值](/zh-CN/docs/Web/CSS/actual_value)

  - [属性值定义语法](/zh-CN/docs/Web/CSS/Value_definition_syntax)
  - [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)
  - [可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)
