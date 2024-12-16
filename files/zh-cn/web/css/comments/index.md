---
title: CSS 注释
slug: Web/CSS/Comments
---

{{CSSRef}}

CSS 注释用于为代码添加额外的解释，或者用于阻止浏览器解析特定区域内的 CSS 代码。注释对文档布局没有影响。

## 语法

注释可以写在样式表中任意允许空格的位置。注释可以写成一行，也可以写成多行。

```plain
/* Comment */
```

## 示例

```css
/* 这是一行单行注释 */

/*
分为
几行
的
注释
*/

/* 下面的注释用于禁用特定的样式 */

/*
span {
  color: blue;
  font-size: 1.5em;
}
*/
```

## 说明

`/* */` 风格的注释语法可以用作单行注释，也可以用作多行注释。在外部独立的 CSS 文件中，没有其他声明注释的方法。不过，如果 CSS 代码写在 {{htmlelement("style")}} 标签中，在某些旧版浏览器中你还可以使用 `<!-- -->` 来注释 CSS 代码，虽然这样做是不推荐的。与其他大部分使用 `/* */` 语法进行注释的编程语言一样，注释无法嵌套。也就是说，`/*` 之后的第一个 `*/` 记号就会结束注释。

## 规范

- [CSS 2.1 Syntax and basic data types #comments](https://www.w3.org/TR/CSS21/syndata.html#comments)

## 参见

- CSS 重要概念：

  - [CSS 语法](/zh-CN/docs/Web/CSS/Syntax)
  - [@ 规则](/zh-CN/docs/Web/CSS/At-rule)
  - [注释](/zh-CN/docs/Web/CSS/Comments)
  - [优先级](/zh-CN/docs/Web/CSS/Specificity)
  - [继承](/zh-CN/docs/Web/CSS/Inheritance)
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
