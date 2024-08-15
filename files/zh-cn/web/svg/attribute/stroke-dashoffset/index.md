---
title: stroke-dashoffset
slug: Web/SVG/Attribute/stroke-dashoffset
---

{{SVGRef}}

**`stroke-dashoffset`** 是一种表现属性，它定义了虚线与路径起点之间的偏移量。

> [!NOTE]
> 作为一个表现属性，`stroke-dashoffset` 可以用作 CSS 属性。

## 用法

| 类别   | 显示属性                                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------------------- |
| 值     | [\<percentage>](/zh-CN/SVG/Content_type#Percentage) \| [\<length>](/zh-CN/SVG/Content_type#Length) \| inherit |
| 初始值 | 0                                                                                                             |
| 可动画化 | 是                                                                                                           |

偏移量的计算通常基于 {{SVGAttr('pathLength')}}，但如果使用 [\<percentage>](/zh-CN/docs/Web/SVG/Content_type#百分数) 值，那么将根据当前视口的百分比进行计算。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-3 0 33 10" xmlns="http://www.w3.org/2000/svg">
  <!-- No dash array -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- 没有设置偏移量 -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="3 1" />

  <!-- 虚线正向偏移了 3 个单位 -->
  <line
    x1="0"
    y1="5"
    x2="30"
    y2="5"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="3" />

  <!-- 虚线反向偏移了 3 个单位 -->
  <line
    x1="0"
    y1="7"
    x2="30"
    y2="7"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="-3" />

  <!-- 虚线正向偏移了 1 个单位，最终渲染结果和上一个例子相同 -->
  <line
    x1="0"
    y1="9"
    x2="30"
    y2="9"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="1" />

  <!-- 底下的红线突显了每行虚线的偏移量 -->
  <path d="M0,5 h-3 M0,7 h3 M0,9 h-1" stroke="rgb(255 0 0 / 50%)" />
</svg>
```

{{EmbedLiveSample("示例", '100%', 200)}}

## 元素

以下元素可以使用 `stroke-dashoffset` 属性

- [形状元素](/zh-CN/SVG/Element#形状元素) »
- [文本内容元素](/zh-CN/SVG/Element#文本内容元素) »

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
