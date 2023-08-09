---
title: fill-rule
slug: Web/SVG/Attribute/fill-rule
---

{{SVGRef}}

**`fill-rule`** 是一个表现属性，它定义了用来确定一个多边形内部区域的算法。

> **备注：** 作为一个表现属性，fill-rule 可以被用于 CSS。

作为一个表现属性，它可以被应用于任何元素，但只会在以下元素中有效：

- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

如何判断一个路径组成的多边形的内部区域，从而给它上色，对于一个简单的、没有交错的路径来说，是很显然的；然而，对于一个更为复杂的路径，比如一条与自身相交的路径，或者是这条路径上的其中一段将另一段包围着，要解释什么是“内部”，就不再这么显然了。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 220 120" xmlns="http://www.w3.org/2000/svg">
  <!-- fill-rule 的默认值 -->
  <polygon
    fill-rule="nonzero"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  从这个形状的中心到无穷远处有两条路径段（红色部分），因此
  该区域被认为是形状外部，并且没有被填充。
  -->
  <polygon
    fill-rule="evenodd"
    stroke="red"
    points="150,0 121,90 198,35 102,35 179,90" />
</svg>
```

{{EmbedLiveSample('示例', '100%', 200)}}

## 用法

| 类别     | 外观属性                                                                         |
| -------- | -------------------------------------------------------------------------------- |
| 值       | nonzero \| evenodd                                                               |
| 默认值   | nonzero                                                                          |
| 可变性   | Yes                                                                              |
| 规范文档 | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/painting.html#FillRuleProperty) |

`fill-rule` 属性为如何确定一个形状的内部（即可以被填充的区域）提供了两个可选值：

### nonzero

这个值确定了某点属于该形状的“内部”还是“外部”：从该点向任意方向的无限远处绘制射线，然后检测形状与射线相交的位置。从 0 开始统计，路径上每一条从左到右（顺时针）跨过射线的线段都会让结果加 1，每条从右向左（逆时针）跨过射线的线段都会让结果减 1。当统计结束后，如果结果为 0，则点在外部；如果结果不为 0，则点在内部。

#### Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 320 120" xmlns="http://www.w3.org/2000/svg">
  <!-- nonzero 填充规则被用于路径段会相交的形状上的效果 -->
  <polygon
    fill-rule="nonzero"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  nonzero 填充规则被用于一个形状在另一形状内部的效果
  这两个正方形的路径段方向相同（都是顺时针）
  -->
  <path
    fill-rule="nonzero"
    stroke="red"
    d="M110,0  h90 v90 h-90 z
           M130,20 h50 v50 h-50 z" />

  <!--
  这个例子与第二个例子几乎相同，唯一的区别是：两个形状的路径段方向相反
  外面的正方形是顺时针，里面的正方形则是逆时针
  -->
  <path
    fill-rule="nonzero"
    stroke="red"
    d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z" />
</svg>
```

{{EmbedLiveSample('nonzero', '100%', 200)}}

### evenodd

这个值用确定了某点属于该形状的“内部”还是“外部”：从该点向任意方向无限远处绘制射线，并统计这个形状所有的路径段中，与射线相交的路径段的数量。如果有奇数个路径段与射线相交，则点在内部；如果有偶数个，则点在外部。

#### Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-10 -10 320 120" xmlns="http://www.w3.org/2000/svg">
  <!-- evenodd 填充规则被用于路径段会相交的形状上的效果 -->
  <polygon
    fill-rule="evenodd"
    stroke="red"
    points="50,0 21,90 98,35 2,35 79,90" />

  <!--
  evenodd 填充规则被用于一个形状在另一形状内部的效果
  这两个正方形的路径段方向相同（都是顺时针）
  -->
  <path
    fill-rule="evenodd"
    stroke="red"
    d="M110,0  h90 v90 h-90 z
           M130,20 h50 v50 h-50 z" />

  <!--
  这个例子与第二个例子几乎相同，唯一的区别是：两个形状的路径段方向相反
  外面的正方形是顺时针，里面的正方形则是逆时针
  -->
  <path
    fill-rule="evenodd"
    stroke="red"
    d="M210,0  h90 v90 h-90 z
           M230,20 v50 h50 v-50 z" />
</svg>
```

{{EmbedLiveSample('evenodd', '100%', 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
