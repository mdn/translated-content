---
title: border-width
slug: Web/CSS/border-width
---

{{CSSRef}}

## 概要

**`border-width`** 属性可以设置盒子模型的边框宽度。

{{EmbedInteractiveExample("pages/css/border-width.html")}}

它是{{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}} 和 {{cssxref("border-left-width")}}的简写;

## 语法

```css
/* 用法一：明确指定宽度值 */
/* 当给定一个宽度时，该宽度作用于选定元素的所有边框 */
border-width: 5px;
/* 当给定两个宽度时，该宽度分别依次作用于选定元素的横边与纵边 */
border-width: 2px 1.5em;
/* 当给定三个宽度时，该宽度分别依次作用于选定元素的上横边、纵边、下横边 */
border-width: 1px 2em 1.5cm;
/* 当给定四个宽度时，该宽度分别依次作用于选定元素的上横边、右纵边、下横边、左纵边（即按顺时针依次作用） */
border-width: 1px 2em 0 4rem;

/* 用法二：使用全局关键字 */
/* 可以使用的全局关键字有：inherit(继承),initial（初始值）,unset（不设置） */
border-width: inherit;

/* 用法三：使用作用于 border-width 的关键字 */
border-width: thin;
border-width: medium;
border-width: thick;
```

### 正式语法

{{csssyntax}}

| 关键字   | 实例 | 说明     |
| -------- | ---- | -------- |
| `thin`   |      | 细边线   |
| `medium` |      | 中等边线 |
| `thick`  |      | 宽边线   |

> **备注：** 规范并没有规定关键字的实际值故在不同浏览器效果是不一样的，但显然 thin≤medium≤thick，并且值在单个文档中是恒定的

## 示例

### A mix of values and lengths

HTML

```html
<p id="sval">one value: 6px wide border on all 4 sides</p>
<p id="bival">
  two different values: 2px wide top and bottom border, 10px wide right and left
  border
</p>
<p id="treval">
  three different values: 0.3em top, 9px bottom, and zero width right and left
</p>
<p id="fourval">
  four different values: "thin" top, "medium" right, "thick" bottom, and 1em
  right
</p>
```

#### CSS

```css
#sval {
  border: ridge #ccc;
  border-width: 6px;
}
#bival {
  border: solid red;
  border-width: 2px 10px;
}
#treval {
  border: dotted orange;
  border-width: 0.3em 0 9px;
}
#fourval {
  border: solid lightgreen;
  border-width: thin medium thick 1em;
}
p {
  width: auto;
  margin: 0.25em;
  padding: 0.25em;
}
```

#### 运行结果

{{ EmbedLiveSample('A_mix_of_values_and_lengths', 300, 180) }}

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- The border-related shorthand properties: {{Cssxref("border")}}, {{Cssxref("border-style")}}, {{Cssxref("border-color")}}
- The border-width-related properties: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}
