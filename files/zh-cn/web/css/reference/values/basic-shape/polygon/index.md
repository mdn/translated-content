---
title: polygon()
slug: Web/CSS/Reference/Values/basic-shape/polygon
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`polygon()`** [CSS](/zh-CN/docs/Web/CSS) 函数是 {{cssxref("&lt;basic-shape&gt;")}} [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)之一。它用于通过提供一个或多个坐标对（每一个坐标代表形状的一个顶点）来绘制[多边形](https://zh.wikipedia.org/wiki/多边形)。

{{InteractiveExample("CSS 演示：polygon()")}}

```css interactive-example-choice
clip-path: polygon(
  0% 20%,
  60% 20%,
  60% 0%,
  100% 50%,
  60% 100%,
  60% 80%,
  0% 80%
);
```

```css interactive-example-choice
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #fe9;
}

#example-element {
  background: linear-gradient(to bottom right, #f52, #05f);
  width: 100%;
  height: 100%;
}
```

## 语法

```css-nolint
/* 指定坐标列表 */
/* polygon(<length-percentage> <length-percentage>, ... )*/
polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%)
polygon(0px 0px, 200px 100px, 0px 200px)
polygon(0% 0px, 100% 100px, 0px 100%)
polygon(0 0, 50% 1rem, 100% 2vw, calc(100% - 20px) 100%, 0 100%)

/* 指定填充规则和坐标列表 */
/* polygon(<fill-rule> <length-percentage> <length-percentage>, ... )*/
polygon(nonzero, 0% 0%, 50% 50%, 0% 100%)
polygon(evenodd, 0% 0%, 50% 50%, 0% 100%)
```

`polygon()` 的参数用逗号和可选的空格分隔。第一个参数是一个可选的 [`<fill-rule>`](/zh-CN/docs/Web/SVG/Reference/Attribute/fill-rule) 值。其他参数是定义多边形的点。每个点是一对 x/y 坐标 {{cssxref("length-percentage")}} 值，用空格分隔，例如左/上角和右下角的“0 0”和“100% 100%”。

> [!NOTE]
> SVG [`<polygon>`](/zh-CN/docs/Web/SVG/Reference/Element/polygon) 元素有单独的属性用于 [`fill-rule`](/zh-CN/docs/Web/SVG/Reference/Attribute/fill-rule) 和 [`points`](/zh-CN/docs/Web/SVG/Reference/Attribute/points)，而 `points` 在使用空格和逗号分隔时是灵活的。CSS `polygon()` 规则对分隔符严格执行。

### 参数

- [`<fill-rule>`](/zh-CN/docs/Web/SVG/Reference/Attribute/fill-rule) {{optional_inline}}
  - : 一个可选的值，可以是 `nonzero`（默认值，当省略时）或 `evenodd`，指定填充规则。
- {{cssxref("length-percentage")}}
  - : 每个多边形的顶点由一对 `<length-percentage>` 值表示，给出了相对于形状的[参考盒子](/zh-CN/docs/Web/CSS/Guides/Shapes/Using_shape-outside#参考盒子)的顶点的 x/y 坐标。

### 返回值

返回一个 {{cssxref("basic-shape")}} 值。

## 描述

通过指定其点的坐标，你可以使用 `polygon()` 函数创建几乎任何形状。定义点的顺序很重要，可能会导致不同的形状。`polygon()` 函数至少需要 3 个点，这将创建一个三角形，但没有上限。

`polygon()` 函数接受逗号分隔的坐标或点作为其值。每个点由一对以空格分隔的 `x` 和 `y` 值表示，这些值指示多边形内的点的坐标。

<code>polygon(x<sub>1</sub> y<sub>1</sub>, x<sub>2</sub> y<sub>2</sub>, x<sub>3</sub> y<sub>3</sub>, x<sub>4</sub> y<sub>4</sub>, x<sub>n</sub> y<sub>n</sub>)</code>

给定上述内容，将容器的坐标映射为可视化：

| 轴  | 点 1 | 点 2 | 点 3 | 点 4 | 点 n          |
| --- | ---- | ---- | ---- | ---- | ------------- |
| x   | 0%   | 100% | 100% | 0%   | x<sub>n</sub> |
| y   | 0%   | 0%   | 100% | 100% | y<sub>n</sub> |

将这些坐标应用于使用 `polygon()` 函数的 CSS {{cssxref("clip-path")}} 属性：

```css
clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
```

这将创建一个矩形形状，其大小与其父内容相同，通过指定其四个角的坐标：左上角（`0% 0%`）、右上角（`100% 0%`）、右下角（`100% 100%`）和左下角（`0% 100%`）。

## 形式语法

{{csssyntax}}

## 示例

### 创建一个三角形

在此示例中，通过定义其三个点的坐标来形成一个三角形。

#### HTML

```html
<div class="triangle"></div>
```

#### CSS

```css
.triangle {
  width: 400px;
  height: 400px;
  background-color: magenta;
  clip-path: polygon(100% 0%, 50% 50%, 100% 100%);
}
```

#### 结果

{{EmbedLiveSample("创建一个三角形", '100%', 400)}}

三角形的坐标是容器的右上角（`100% 0%`）、中心点（`50% 50%`）和右下角（`100% 100%`）。

### 为 shape-outside 设置多边形

在此示例中，使用 {{cssxref("shape-outside")}} 属性创建一个形状，使文本遵循它。

```html
<div class="box">
  <div class="shape"></div>
  <p>
    据说，1782 年 11
    月的一个夜晚，在法国小城安诺内，有两兄弟坐在冬日的炉火旁，看着炉膛里灰色的烟圈沿着宽大的烟囱袅袅升起。他们的名字叫斯蒂芬·蒙哥菲尔和约瑟夫·蒙哥菲尔，职业是造纸工人，以心思缜密著称，对所有科学知识和新发现都有着浓厚的兴趣。在那个夜晚——一个值得纪念的夜晚——之前，数以亿计的人都在注视着自家炉火升起的烟圈，却没有从中得到任何特别的启发。
  </p>
</div>
```

```css
.box {
  width: 250px;
}

.shape {
  float: left;
  shape-outside: polygon(
    0 5%,
    15% 12%,
    30% 15%,
    40% 26%,
    45% 35%,
    45% 45%,
    40% 55%,
    10% 90%,
    10% 98%,
    8% 100%,
    0 100%
  );
  width: 300px;
  height: 320px;
}

p {
  font-size: 0.9rem;
}
```

{{EmbedLiveSample("为 shape-outside 设置多边形", '100%', 400)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 使用此数据类型的属性：{{cssxref("clip-path")}}、{{cssxref("shape-outside")}}
- [基本形状指南](/zh-CN/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
