---
title: CSS 注释
slug: Web/CSS/Guides/Syntax/Comments
---

CSS 注释用于为代码添加额外的解释，或者用于阻止浏览器解析特定区域内的 CSS 代码。注释对文档布局没有影响。

## 语法

注释可以写在样式表中任意允许空格的位置。注释可以写成一行，也可以写成多行。

```css
/* 注释 */
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

{{Specifications}}

## 参见

- [CSS 语法](/zh-CN/docs/Web/CSS/Guides/Syntax)模块
- [语法](/zh-CN/docs/Web/CSS/Guides/Syntax/Introduction)指南
- [CSS 错误处理](/zh-CN/docs/Web/CSS_syntax/Error_handling)
