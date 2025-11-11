---
title: inset()
slug: Web/CSS/Reference/Values/basic-shape/inset
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`inset()`** [CSS](/zh-CN/docs/Web/CSS) 函数定义了一个矩形，其位于参考框的每一边内侧的指定的距离处。它是用于定义 {{cssxref("&lt;basic-shape&gt;")}} [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)之一的基本形状函数。

{{InteractiveExample("CSS 演示：inset()")}}

```css interactive-example-choice
clip-path: inset(30px);
```

```css interactive-example-choice
clip-path: inset(1rem 2rem 3rem 4rem);
```

```css interactive-example-choice
clip-path: inset(20% 30% round 20px);
```

```css interactive-example-choice
clip-path: inset(4rem 20% round 1rem 2rem 3rem 4rem);
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

```css
shape-outside: inset(20px 50px 10px 0 round 50px);
```

### 值

- `<length-percentage>{1,4}`
  - : 当提供了四个参数时，它们分别表示从参考框的上侧、右侧、下侧和左侧向内的偏移量，这些偏移量定义了内嵌矩形边缘的位置。这些参数遵循边距简写的语法，它允许你定义具有一个、两个或四个值的 inset。

  如果一个维度的一对内嵌值相加超过了该维度的 100%，则两个值都会按比例缩小，使其总和等于 100%。例如，数值 `inset(90% 10% 60% 10%)` 的上嵌套为 `90%`，下嵌套为 `60%`。这些值按比例缩小为 `inset(60% 10% 40% 10%)`。像这样不包含任何区域且没有 {{cssxref("shape-margin")}} 的形状不会影响换行。

- `<border-radius>`
  - : 可选的 [`<border-radius>`](/zh-CN/docs/Web/CSS/Reference/Properties/border-radius) 参数使用边框半径简写语法为内嵌矩形定义圆角。

## 形式语法

{{csssyntax}}

## 示例

### 基本 inset 示例

在下面的示例中，我们使用了一个 `inset()` 形状来将内容拉到浮动元素上。更改偏移值以查看形状如何变化。

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
  width: 400px;
  margin: 0 auto;
}

.shape {
  float: left;
  width: 150px;
  height: 100px;
  clip-path: inset(45px 50px 15px 0 round 50px);
  shape-outside: inset(40px 40px 10px 0 round 50px);
  background-color: coral;
  border-radius: 20px;
  margin: 0;
  padding: 20px;
}
```

{{EmbedLiveSample("基本 inset 示例", '100%', 280)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 使用该数据类型的属性：{{cssxref("clip-path")}}、{{cssxref("shape-outside")}}
- [CSS 形状](/zh-CN/docs/Web/CSS/Guides/Shapes)模块
- [基本形状指南](/zh-CN/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
