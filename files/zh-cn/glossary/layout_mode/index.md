---
title: 布局模式
slug: Glossary/Layout_mode
---

[CSS](/zh-CN/docs/Web/CSS) **布局模式**，有时简称为布局，是一种基于盒子与其兄弟和祖辈盒子的交互方式来确定盒子的位置和大小的算法。有以下几种形式：

- **块布局**：用来布置文件。块布局包含以文档为中心的功能，例如 [浮动](/zh-CN/docs/Web/CSS/Reference/Properties/float)元素或将其放置在[多列](/zh-CN/docs/Web/CSS/Guides/Multicol_layout/Using)上的功能。
- **行内布局**：用来布置文本。
- **表格布局**：用来布置表格。
- **定位布局**：用来对那些与其他元素无交互的定位元素进行布置。
- [**弹性盒子布局**](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)：用来布置那些可以顺利调整大小的复杂页面。{{experimental_inline}}
- [**网格布局**](/zh-CN/docs/Web/CSS/Guides/Grid_layout)：用来布置那些与一个固定网格相关的元素。{{experimental_inline}}

> [!NOTE]
> 并非所有 [CSS 属性](/zh-CN/docs/Web/CSS/Reference) 适用于所有*布局模式*。大多数属性适用于一到两种布局模式，如果将属性设置在参与其他（原文 another，指三者或三者以上。）布局模式的元素上则会不起作用。

## 参见

- CSS 重要概念：
  - [CSS 语法](/zh-CN/docs/Web/CSS/Guides/Syntax/Introduction)
  - [@ 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)
  - [注释](/zh-CN/docs/Web/CSS/Guides/Syntax/Comments)
  - [优先级](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity)
  - [继承](/zh-CN/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [盒模型](/zh-CN/docs/Web/CSS/Guides/Box_model/Introduction)
  - [布局模式](/zh-CN/docs/Glossary/Layout_mode)
  - [视觉格式化模型](/zh-CN/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - [外边距合并](/zh-CN/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - 值
    - [初始值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#初始值)
    - [计算值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#计算值)
    - [解析值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#解析值)
    - [指定值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#指定值)
    - [应用值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#应用值)
    - [实际值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#实际值)

  - [属性值定义语法](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - [简写属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{glossary("Replaced elements", "可替换元素")}}
