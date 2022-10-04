---
title: <var>
slug: Web/HTML/Element/var
---

{{HTMLRef}}HTML Variable 元素（\<var>）表示数学表达式或编程上下文中的变量名称。尽管该行为取决于浏览器，但通常使用当前字体的斜体形式显示。

## 概述

**\<var> 标签**表示变量的名称，或者由用户提供的值。

<table class="standard-table">
 <tbody>
  <tr>
   <td>允许内容</td>
   <td>Phrasing content</td>
  </tr>
  <tr>
   <td>标签闭合</td>
   <td>Both start and end tags are required</td>
  </tr>
  <tr>
   <td>允许的父级元素</td>
   <td>Any element that accepts <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#短语元素（phrasing content）">phrasing content</a>.</td>
  </tr>
  <tr>
   <td>规范元素</td>
   <td><a href="https://www.whatwg.org/html/#the-var-element">HTML, "The <code>var</code> element"</a></td>
  </tr>
 </tbody>
</table>

## 属性

本元素仅支持 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes).

## DOM 接口

本元素支持 [`HTMLElement`](/zh-CN/docs/Web/API/Element) 接口

> **备注：** Gecko 1.9.2 开始，Firefox 支持本元素使用 [HTMLSpanElement](/zh-CN/docs/Web/API/HTMLSpanElement) 接口。

## 默认样式

```css
var {
  font-style: italic;
}
```

## 示例

```html
<p> A simple equation: <var>x</var> = <var>y</var> + 2 </p>
```

A simple equation: _x_ = _y_ + 2

The output:

{{EmbedLiveSample("Basic_example", 650,80)}}

### Overriding the default style

Using CSS, you can override the default style for the `<var>` element. In this example, variable names are rendered using bold Courier if it's available, otherwise it falls back to the default monospace font.

#### CSS

```css
var {
  font: bold 15px "Courier", "Courier New", monospace;
}
```

#### HTML

```html
<p>The variables <var>minSpeed</var> and <var>maxSpeed</var> control
   the minimum and maximum speed of the apparatus in revolutions
   per minute (RPM).</p>
```

This HTML uses `<var>` to enclose the names of two variables.

#### Result

{{EmbedLiveSample("Overriding_the_default_style", 650, 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
