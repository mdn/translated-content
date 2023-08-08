---
title: 多个背景的应用
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
---

{{CSSRef}}

你可以应用多个背景到元素，这些背景在你添加的第一个背景的上方和最后一个背景的下方分层叠加，只有最后的背景可以包含背景颜色。

指定多个背景很简单：

```css
.myclass {
  background:
    background1,
    background 2,
    ...,
    backgroundN;
}
```

除了{{ cssxref("background-color") }}之外，你可以用简写{{ cssxref("background") }} 属性和它的各个属性来做到这一点。也就是说，以下背景属性可以被指定为一个列表，每个背景一个： {{ cssxref("background") }}, {{ cssxref("background-attachment") }}, {{ cssxref("background-clip") }}, {{ cssxref("background-image") }}, {{ cssxref("background-origin") }}, {{ cssxref("background-position") }}, {{ cssxref("background-repeat") }}, {{ cssxref("background-size") }}.

## 示例

在这个例子中，三个背景叠加在一起：Firefox 标志，气泡图像和线性渐变：

### HTML

```html
<div class="multi-bg-example"></div>
```

### CSS

```css
.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image: url(firefox.png), url(bubbles.png), linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom right,
    left,
    right;
}
```

### 结果

（如果在 CodePen 中图像没有出现，点击 CSS 模块的 TIdy 按钮）

{{EmbedLiveSample('示例','600','400')}}

正如您在这里看到的，Firefox 徽标（在{{ cssxref("background-image") }}中首先列出）位于气泡图形正上方，接着是位于所有先前“images”下方的渐变（最后列出）。每个后续的子属性（{{ cssxref("background-repeat") }}和{{ cssxref("background-position") }}）适用于相应的背景。因此，background-repeat 的第一个列出的值适用于第一个（最前面的）背景，依此类推。

## 参见

- [Using CSS gradients](/zh-CN/docs/CSS/Using_CSS_gradients)
