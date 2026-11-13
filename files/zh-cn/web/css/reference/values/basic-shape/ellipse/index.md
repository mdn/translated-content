---
title: ellipse()
slug: Web/CSS/Reference/Values/basic-shape/ellipse
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`ellipse()`** [CSS](/zh-CN/docs/Web/CSS) 函数是 {{cssxref("&lt;basic-shape&gt;")}} [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)之一。

{{InteractiveExample("CSS 演示：ellipse()")}}

```css interactive-example-choice
clip-path: ellipse(20px 50px);
```

```css interactive-example-choice
clip-path: ellipse(4rem 50% at right center);
```

```css interactive-example-choice
clip-path: ellipse(closest-side closest-side at 5rem 6rem);
```

```css interactive-example-choice
clip-path: ellipse(closest-side farthest-side);
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
shape-outside: ellipse(40% 50% at left);
shape-outside: ellipse(closest-side farthest-side at 30%);
```

椭圆本质上是一个扁平的圆形，因此 `ellipse()` 的行为与 {{cssxref("basic-shape/circle","circle()")}} 非常相似，只是我们需要指定两个半径 x 和 y。

### 值

- `<shape-radius>`
  - : 两个半径，按顺序是 x 和 y。可以是 {{cssxref("length")}}、{{cssxref("percentage")}} 或值 `closest-side` 和 `farthest-side`。
    - `closest-side`
      - : 使用形状中心到参考框最近边缘的长度。对于椭圆来说，这是半径维度中最近的边缘。
    - `farthest-side`
      - : 使用形状中心到参考框最远边缘的长度。对于椭圆来说，这是半径维度中最远的边缘。

- `<position>`
  - : 移动椭圆的中心。可以是 {{cssxref("length")}}、 {{cssxref("percentage")}}，或者类似于 `left` 这样的值。如果省略 `<position>` 值，则默认为中心。

## 形式语法

{{csssyntax}}

## 示例

### 基本 ellipse() 示例

这个示例显示了一个 x 半径为 40%，y 半径为 50% 的椭圆，位置在左边。这意味着椭圆的中心位于框的左边缘，使我们的文本围绕其周围形成一个半椭圆形状。你可以更改这些值来查看椭圆如何变化。

```html live-sample___ellipse
<div class="box">
  <div class="shape"></div>
  <p>
    据说，1782 年 11
    月的一个夜晚，在法国小城安诺内，有两兄弟坐在冬日的炉火旁，看着炉膛里灰色的烟圈沿着宽大的烟囱袅袅升起。他们的名字叫斯蒂芬·蒙哥菲尔和约瑟夫·蒙哥菲尔，职业是造纸工人，以心思缜密著称，对所有科学知识和新发现都有着浓厚的兴趣。在那个夜晚——一个值得纪念的夜晚——之前，数以亿计的人都在注视着自家炉火升起的烟圈，却没有从中得到任何特别的启发。
  </p>
</div>
```

```css live-sample___ellipse
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(40% 50% at left);
  margin: 20px;
  width: 100px;
  height: 200px;
}
```

{{EmbedLiveSample("ellipse", "", "300px")}}

### 使用 closest-side / farthest-side 值

`closest-side` 和 `farthest-side` 的关键字值对于基于浮动元素参考框大小创建快速椭圆形状非常有用。

```html live-sample___ellipse-keywords
<div class="box">
  <div class="shape"></div>
  <p>
    据说，1782 年 11
    月的一个夜晚，在法国小城安诺内，有两兄弟坐在冬日的炉火旁，看着炉膛里灰色的烟圈沿着宽大的烟囱袅袅升起。他们的名字叫斯蒂芬·蒙哥菲尔和约瑟夫·蒙哥菲尔，职业是造纸工人，以心思缜密著称，对所有科学知识和新发现都有着浓厚的兴趣。在那个夜晚——一个值得纪念的夜晚——之前，数以亿计的人都在注视着自家炉火升起的烟圈，却没有从中得到任何特别的启发。
  </p>
</div>
```

```css live-sample___ellipse-keywords
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(closest-side farthest-side at 30%);
  margin: 20px;
  width: 100px;
  height: 140px;
}
```

{{EmbedLiveSample("ellipse-keywords", "", "300px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 使用该数据类型的属性：{{cssxref("clip-path")}}、{{cssxref("shape-outside")}}
- [基本形状指南](/zh-CN/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
