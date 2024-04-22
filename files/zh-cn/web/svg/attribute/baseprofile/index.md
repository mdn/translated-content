---
title: baseProfile
slug: Web/SVG/Attribute/baseProfile
---

{{SVGRef}}

`baseProfile` 特性描述了作者认为正确渲染内容所需要的最小的 SVG 语言概述。这个特性不会说明任何处理限制，可以把它看作是元数据。比如，这个特性的值可以被编辑工具用来在用户的修改超出所指定的基准概述范围时发出警告。

每个 SVG 概述应该为这个特性定义一个适合的文本。如果没有指定这个特性，效果就跟指定 `none` 一样。

## 使用背景

| 目录     | 无                                                                             |
| -------- | ------------------------------------------------------------------------------ |
| 值       | **none** \| full\| basic\| tiny                                                |
| 动画特性 | 无                                                                             |
| 规范文档 | [SVG 1.1 (第二版)](http://www.w3.org/TR/SVG11/text.html#BaselineShiftProperty) |

- none
  - : 代表了最小的 SVG 语言配置，没有描述作者关于正确渲染内容的观点。
- full
  - : 代表一个正常的概述，适用于 PC。
- basic
  - : 代表一个轻量级的概述，适用于 PDA。
- tiny
  - : 代表更轻量的概述，适用于手机。

## 例子

```html
<svg
  width="120"
  height="120"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  baseProfile="full">
  ...
</svg>
```

## 元素

以下元素会用到 `baseProfile` 特性

- {{ SVGElement("svg") }}
