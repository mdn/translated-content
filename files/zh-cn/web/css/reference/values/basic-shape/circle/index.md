---
title: circle()
slug: Web/CSS/Reference/Values/basic-shape/circle
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`circle()`** CSS [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions)定义了一个圆形，使用半径和位置来描述。它是 {{cssxref("&lt;basic-shape&gt;")}} 数据类型之一。

{{InteractiveExample("CSS 演示：circle()")}}

```css interactive-example-choice
clip-path: circle(50px);
```

```css interactive-example-choice
clip-path: circle(6rem at right center);
```

```css interactive-example-choice
clip-path: circle(10% at 2rem 90%);
```

```css interactive-example-choice
clip-path: circle(closest-side at 5rem 6rem);
```

```css interactive-example-choice
clip-path: circle(farthest-side);
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
shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
```

## 值

- `<shape-radius>`
  - : 这可以是一个 {{cssxref("length")}} 值，或者是一个 {{cssxref("percentage")}} 值，或者是 `closest-side` 和 `farthest-side` 关键字值。
    - `closest-side`
      - : 使用从形状中心到参照盒子的最近边缘的长度。对于圆形来说，这是任何维度中最近的边缘。
    - `farthest-side`
      - : 使用从形状中心到参照盒子的最远边缘的长度。对于圆形来说，这是任何维度中最远的边缘。

- `<position>`
  - : 移动圆的中心。可以是一个 {{cssxref("length")}} 值，或者是一个 {{cssxref("percentage")}} 值，或者是类似 `left` 的值。如果省略了 `<position>` 值，则默认为中心。

## 形式语法

{{csssyntax}}

## 示例

### 基本圆形

在下面的示例中，{{cssxref("shape-outside")}} 属性的值为 `circle(50%)`，用于在浮动元素周围使文本环绕成圆形。

```html live-sample___circle
<div class="box">
  <img
    alt="一个热气球"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    据说，1782 年 11
    月的一个夜晚，在法国小城安诺内，有两兄弟坐在冬日的炉火旁，看着炉膛里灰色的烟圈沿着宽大的烟囱袅袅升起。他们的名字叫斯蒂芬·蒙哥菲尔和约瑟夫·蒙哥菲尔，职业是造纸工人，以心思缜密著称，对所有科学知识和新发现都有着浓厚的兴趣。在那个夜晚——一个值得纪念的夜晚——之前，数以亿计的人都在注视着自家炉火升起的烟圈，却没有从中得到任何特别的启发。
  </p>
</div>
```

```css live-sample___circle
body {
  font: 1.2em / 1.5 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "300px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 使用该数据类型的属性：{{cssxref("clip-path")}}、{{cssxref("shape-outside")}}
- [基本形状指南](/zh-CN/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
