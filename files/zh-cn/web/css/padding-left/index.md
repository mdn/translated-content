---
title: padding-left
slug: Web/CSS/padding-left
---

{{CSSRef}}

CSS 属性 **`padding-left`** 是指一个元素在内边距区域（padding area）中左边的宽度。内边距（padding）是指一个元素的内容和边框之间的区域。

{{EmbedInteractiveExample("pages/css/padding-left.html")}}

元素的“填充区域”是其内容和边框之间的空间。

> **备注：** {{cssxref("padding")}} 属性可用于通过一个声明在元素的四个边（上、下、左、右）上设置填充。

## 语法

```css
/* 长度单位参数 */
padding-left: 0.5em;
padding-left: 0;
padding-left: 2cm;

/* 百分数参数 */
padding-left: 10%;

/* 全局参数 */
padding-left: inherit;
padding-left: initial;
padding-left: unset;
```

`padding left`属性指定为从下表中选择的单个值。与外边距（margins）不同，可以接受的值不允许是负数。

### 参数

- {{cssxref("&lt;length&gt;")}}
  - : 填充内边距的长度。它必须是非负的。
- {{cssxref("&lt;percentage&gt;")}}
  - : 以与父级盒子的百分比表示的填充大小。它也必须是非负的。

## 标准定义

{{cssinfo}}

## 标准语法

{{csssyntax}}

## 样例

### 使用“px”单位和百分比设置 padding-left 的样例

```css
.content {
  padding-left: 5%;
}
.sidebox {
  padding-left: 10px;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [Introduction to the CSS basic box model](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} and the {{cssxref("padding")}} shorthand
- The mapped logical properties: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, and {{cssxref("padding-inline-end")}} and the shorthands {{cssxref("padding-block")}} and {{cssxref("padding-inline")}}
