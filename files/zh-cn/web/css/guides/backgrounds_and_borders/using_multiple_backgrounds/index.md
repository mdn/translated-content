---
title: 使用多个背景
slug: Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

你可以应用**多个背景**到元素。这些图层彼此叠加，第一个提供的背景位于最上层，最后一个提供的背景位于最下层。只有最后一个背景可以包含背景颜色。

多个背景色以逗号分隔的列表形式指定，例如 `background: background1, background2, ...;`。除了 {{cssxref("background-color")}} 之外，你可以用简写 {{cssxref("background")}} 属性和它的各个属性来做到这一点：{{cssxref("background-attachment")}}、{{cssxref("background-clip")}}、{{cssxref("background-image")}}、{{cssxref("background-origin")}}、{{cssxref("background-position")}}、{{cssxref("background-repeat")}}、{{cssxref("background-size")}}。

## 示例

在这个例子中，三个背景叠加在一起：Firefox 徽标、气泡图像和[线性渐变](/zh-CN/docs/Web/CSS/Reference/Values/gradient/linear-gradient)：

### HTML

```html
<div class="multi-bg-example"></div>
```

### CSS

```css
.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image:
    url("firefox.png"), url("bubbles.png"),
    linear-gradient(to right, rgb(30 75 115 / 100%), transparent);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom right,
    left,
    right;
}
```

### 结果

{{EmbedLiveSample('示例','600','400')}}

正如你在这里看到的，Firefox 徽标（在 {{ cssxref("background-image") }} 中首先列出）位于气泡图形正上方，接着是位于所有先前“images”下方的渐变（最后列出）。每个后续的子属性（{{ cssxref("background-repeat") }} 和 {{ cssxref("background-position") }}）适用于相应的背景。因此，{{ cssxref("background-repeat") }} 的第一个列出的值适用于第一个（最前面的）背景，依此类推。

## 多个背景下的值重复

在使用多个背景时，如果某个与背景相关的属性所给定的以逗号分隔的值少于背景层的数量，则用户代理会重复该值列表，直到值数量足以覆盖所有背景层为止。

例如：

```css
.element {
  background-image: url("a.png"), url("b.png"), url("c.png");
  background-position: left top;
}
```

与下面的情况等价：

```css
.element {
  background-position:
    left top,
    left top,
    left top;
}
```

## 参见

- [CSS 背景与边框](/zh-CN/docs/Web/CSS/Guides/Backgrounds_and_borders)模块
- [使用 CSS 渐变](/zh-CN/docs/Web/CSS/Guides/Images/Using_gradients)
