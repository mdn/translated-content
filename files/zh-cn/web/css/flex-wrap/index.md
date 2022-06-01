---
title: flex-wrap
slug: Web/CSS/flex-wrap
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Property
  - Reference
  - recipe:css-property
translation_of: Web/CSS/flex-wrap
---
{{CSSRef}}

## 概述

[CSS](/zh-CN/docs/Web/CSS) 的 **`flex-wrap`** 属性指定 flex 元素单行显示还是多行显示。如果允许换行，这个属性允许你控制行的堆叠方向。

{{EmbedInteractiveExample("pages/css/flex-wrap.html")}}

参考 [flex 布局的基本概念](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) 查看更多的属性和信息。

## 语法

```css
flex-wrap: nowrap; /* Default value */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Global values */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: unset;
```

`flex-wrap` 属性可指定为以下取值列表中的任意一个关键字。

### 取值

`flex-wrap` 属性接受以下取值：

- `nowrap`
  - : flex 的元素被摆放到到一行，这可能导致 flex 容器溢出。**cross-start** 会根据 {{cssxref("flex-direction")}} 的值等价于 **start** 或 **before**。为该属性的默认值。
- wrap
  - : flex 元素 被打断到多个行中。**cross-start** 会根据 {{cssxref("flex-direction")}} 的值等价于 **start** 或**before**。**cross-end** 为确定的 **cross-start** 的另一端。
- `wrap-reverse`
  - : 和 wrap 的行为一样，但是 **cross-start** 和 **cross-end** 互换。

### 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

### 设置 flex 容器堆叠形式

#### HTML

```html
<h4>这是一个关于 flex-wrap:wrap 的例子</h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>这是一个关于 flex-wrap:nowrap 的例子</h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>这是一个关于 flex-wrap:wrap-reverse 的例子</h4>
<div class="content2">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
```

#### CSS

```css
/* Common Styles */
.content,
.content1,
.content2 {
  color: #fff;
  font: 100 24px/100px sans-serif;
  height: 150px;
  width: 897px;
  text-align: center;
}

.content div,
.content1 div,
.content2 div {
  height: 50%;
  width: 300px;
}
.red {
  background: orangered;
}
.green {
  background: yellowgreen;
}
.blue {
  background: steelblue;
}

/* Flexbox Styles */
.content {
  display: flex;
  flex-wrap: wrap;
}
.content1 {
  display: flex;
  flex-wrap: nowrap;
}
.content2 {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

#### 结果

{{EmbedLiveSample('设置_flex_容器堆叠形式', '700px', '700px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- CSS 弹性盒子指南：[flex 布局的基本概念](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- CSS 弹性盒子指南：[掌握弹性物件的包装](/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
