---
title: clamp()
slug: Web/CSS/clamp
---

{{CSSRef}}

**`clamp()`** 函数的作用是把一个值限制在一个上限和下限之间，当这个值超过最小值和最大值的范围时，在最小值和最大值之间选择一个值使用。它接收三个参数：最小值、首选值、最大值。 `clamp()` 被用在 {{CSSxRef("&lt;length&gt;")}}、{{CSSxRef("&lt;frequency&gt;")}}、{{CSSxRef("&lt;angle&gt;")}}、{{CSSxRef("&lt;time&gt;")}}、{{CSSxRef("&lt;percentage&gt;")}}、{{CSSxRef("&lt;number&gt;")}}、{{CSSxRef("&lt;integer&gt;")}} 中都是被允许的。

`clamp(MIN, VAL, MAX)` 其实就是表示 `{{CSSxRef("max", "max")}}(MIN, {{CSSxRef("min", "min")}}(VAL, MAX))`

{{EmbedInteractiveExample("pages/css/function-clamp.html")}}

示例中 `clamp()` 用来设置随窗口大小改变的字体大小，但是无论窗口怎么改变，字体大小不会小于设置的最小值，也不会超过设置的最大值。这个效果和 [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/) 一致，但只用了一行代码，且不需要媒体查询语句。

## 语法

`clamp()` 函数接收三个用逗号分隔的表达式作为参数，按最小值、首选值、最大值的顺序排列。

当首选值比最小值要小时，则使用最小值。

当首选值介于最小值和最大值之间时，用首选值。

当首选值比最大值要大时，则使用最大值。

这个表达式可以是数学函数 (参看 {{CSSxRef("calc")}} )、字面量或其他计算为有效的参数类型 (如{{CSSxRef("&lt;length&gt;")}}) 表达式，如 {{CSSxRef("attr", "attr()")}}，或嵌套的 {{CSSxRef("min")}} 和 {{CSSxRef("max")}} 。作为数学表达式，你可以使用加减乘除运算而无需使用 `calc()` 函数。你也可以用括号来确定计算顺序。

表达式中的每一个值都可以用不同的单位。

### 注意

- 在自动和固定布局表格中，涉及到列、列组、行、行组、单元格的宽度和高度中如果有百分比数学表达式，*也许*会被视为指定了 `auto` 。
- 允许设置表达式的值为 `max()` 和 `min()` 。这些表达式是数学表达式，所以你可以进行加减乘除运算。
- 表达式可以是使用标准运算符优先规则组合 `+` 、`-` 、`*`、`/` 等运算符的值，确保在 `+` 、`-` 两侧各有一个空格。表达式中的操作数可以是 {{CSSxRef("&lt;length&gt;")}} 语法值。你可以给每一个值设置不同的单位。你还可以用括号来确定计算顺序。
- Oftentimes you will want to use {{CSSxRef("min")}} and {{CSSxRef("max")}} within a `clamp()` function.你可能经常会在 `clamp()` 中使用 {{CSSxRef("min")}} 和 {{CSSxRef("max")}} 。

### 形式语法

{{CSSSyntax}}

## 示例

### min, max, and clamp comparison

这个示例中，我们用 `min()`、[`max()`](/zh-CN/docs/Web/CSS/max) 和 `clamp()` 实现一个简单的响应式效果。

[`<body>`](/zh-CN/docs/Web/HTML/Element/body) 元素的 [`width`](/zh-CN/docs/Web/CSS/width) 设置为 `min(1000px, calc(70% + 100px))`。其含义是宽度设置为 `1000px`，当 `calc(70% + 100px)` 比 `1000px` 小时，宽度为 `calc(70% + 100px)` 。 `min()` 允许你设置一个上限值。

[`<p>`](/zh-CN/docs/Web/HTML/Element/p) 元素的 [`font-size`](/zh-CN/docs/Web/CSS/font-size) 设置为 `max(1.2rem, 1.2vw)`。其含义是 `font-size` 是 `1.2rem`，当计算出 `1.2vw` 比 `1.2rem` 大时，则 `font-size` 为 `1.2vw` 。 `max()` 允许你设置一个下限值。

[`<h1>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements) 元素的 `font-size` 设置为 `clamp(1.8rem, 2.5vw, 2.8rem)`.。其含义是 `font-size` 为 `1.8rem`，当计算出 `2.5vw` 比 `1.8rem` 大时，`font-size` 为 `2.5vw`，同时，当 `2.5vw` 计算出来的值比 `2.8rem` 大时，`font-size` 为 `2.8rem`。`clamp()` 允许你设置一个上限值和下限值。

感兴趣可以在 [GitHub](https://mdn.github.io/css-examples/min-max-clamp/) 上查看源码

#### HTML

```html
<h1>Simple responsive test</h1>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci orci,
  eleifend id risus nec, mattis rutrum velit. Suspendisse fringilla egestas erat
  eu convallis. Phasellus eu velit ut magna dapibus elementum cursus at ligula.
  Ut tempus varius nibh, nec auctor sapien iaculis sit amet. Fusce iaculis,
  libero quis elementum viverra, nulla ante accumsan lectus, sit amet convallis
  lacus ipsum vel est. Curabitur et urna non est consectetur pulvinar vel id
  risus. Ut vestibulum, sem in semper aliquet, felis arcu euismod sapien, ac
  imperdiet massa nisl quis sem. Vestibulum ac elementum felis, in tempor velit.
  Pellentesque purus ex, mattis at ornare quis, porta condimentum mi. Donec
  vestibulum ligula vel nulla blandit, quis euismod nulla vestibulum.
  Suspendisse potenti. Nunc neque mauris, tempor sed facilisis at, ultrices eget
  nulla. Pellentesque convallis ante nec augue porttitor, id tempus ante luctus.
</p>

<p>
  Integer rutrum sollicitudin tellus, quis cursus nulla scelerisque nec. Nunc eu
  facilisis lorem. Maecenas faucibus sapien eleifend, semper tellus at, pharetra
  quam. Cras feugiat vulputate tortor at rhoncus. Class aptent taciti sociosqu
  ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non felis
  quis sem lobortis sodales vel id libero. Phasellus sit amet placerat lorem.
</p>
```

#### CSS

```css
html {
  font-family: sans-serif;
}

body {
  margin: 0 auto;
  width: min(1000px, calc(70% + 100px));
}

h1 {
  letter-spacing: 2px;
  font-size: clamp(1.8rem, 2.5vw, 2.8rem);
}

p {
  line-height: 1.5;
  font-size: max(1.2rem, 1.2vw);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 继续阅读

- {{CSSxRef("calc")}}
- {{CSSxRef("max")}}
- {{CSSxRef("min")}}
- [CSS Values](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)
