---
title: 用于外边距、边框和内边距的逻辑属性
slug: Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding
---

{{CSSRef}}

[逻辑属性与逻辑值规范](https://drafts.csswg.org/css-logical/)为各种外边距、边框和内边距属性及其简写属性定义了相对于流的对应关系。本指南介绍这些对应关系。

如果你看过 [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)的汇总页面就会看到那里列了一大堆属性。这主要是因为外边距、边框和内边距每个都有四个全称属性，还有所有的简写属性。

## 外边距、边框和内边距的对应关系

规范详述了每个逻辑值到实体值的对应关系。假设用的是 `horizontal-tb` 的书写模式（{{CSSXref("writing-mode")}}）和从左到右的行内方向，我在下面的表格里给出了这些对应的属性。这时行向是水平方向——从左到右——而且 {{CSSXref("margin-inline-start")}} 会等价于 {{CSSXref("margin-left")}}。

如果你用了 `horizontal-tb` 的书写模式和从右到左的行内方向，那么 {{CSSXref("margin-inline-start")}} 会和 {{CSSXref("margin-right")}} 一样，而在竖排书写模式里 {{CSSXref("margin-inline-start")}} 会和用 {{CSSXref("margin-top")}} 一样。

| 逻辑属性                                 | 实体属性                                  |
| ---------------------------------------- | ----------------------------------------- |
| {{CSSXref("border-block-end")}}          | {{CSSXref("border-bottom")}}              |
| {{CSSXref("border-block-end-color")}}    | {{CSSXref("border-bottom-color")}}        |
| {{CSSXref("border-block-end-style")}}    | {{CSSXref("border-bottom-style")}}        |
| {{CSSXref("border-block-end-width")}}    | {{CSSXref("border-bottom-width")}}        |
| {{CSSXref("border-block-start")}}        | {{CSSXref("border-top")}}                 |
| {{CSSXref("border-block-start-color")}}  | {{CSSXref("border-top-color")}}           |
| {{CSSXref("border-block-start-style")}}  | {{CSSXref("border-top-style")}}           |
| {{CSSXref("border-block-start-width")}}  | {{CSSXref("border-top-width")}}           |
| {{CSSXref("border-inline-end")}}         | {{CSSXref("border-right")}}               |
| {{CSSXref("border-inline-end-color")}}   | {{CSSXref("border-right-color")}}         |
| {{CSSXref("border-inline-end-style")}}   | {{CSSXref("border-right-style")}}         |
| {{CSSXref("border-inline-end-width")}}   | {{CSSXref("border-right-width")}}         |
| {{CSSXref("border-inline-start")}}       | {{CSSXref("border-left")}}                |
| {{CSSXref("border-inline-start-color")}} | {{CSSXref("border-left-color")}}          |
| {{CSSXref("border-inline-start-style")}} | {{CSSXref("border-left-style")}}          |
| {{CSSXref("border-inline-start-width")}} | {{CSSXref("border-left-width")}}          |
| {{CSSXref("border-start-start-radius")}} | {{CSSXref("border-top-left-radius")}}     |
| {{CSSXref("border-end-start-radius")}}   | {{CSSXref("border-bottom-left-radius")}}  |
| {{CSSXref("border-start-end-radius")}}   | {{CSSXref("border-top-right-radius")}}    |
| {{CSSXref("border-end-end-radius")}}     | {{CSSXref("border-bottom-right-radius")}} |
| {{CSSXref("margin-block-end")}}          | {{CSSXref("margin-bottom")}}              |
| {{CSSXref("margin-block-start")}}        | {{CSSXref("margin-top")}}                 |
| {{CSSXref("margin-inline-end")}}         | {{CSSXref("margin-right")}}               |
| {{CSSXref("margin-inline-start")}}       | {{CSSXref("margin-left")}}                |
| {{CSSXref("padding-block-end")}}         | {{CSSXref("padding-bottom")}}             |
| {{CSSXref("padding-block-start")}}       | {{CSSXref("padding-top")}}                |
| {{CSSXref("padding-inline-end")}}        | {{CSSXref("padding-right")}}              |
| {{CSSXref("padding-inline-start")}}      | {{CSSXref("padding-left")}}               |

还有一些简写属性可以用于让我们同时设置盒子块向或者行向的两侧。这些简写属性没有等价的实体属性。

| 属性                               | 用途                                                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| {{CSSXref("border-block")}}        | 为两个块向边框设置 {{CSSXref("border-color")}}、{{CSSXref("border-style")}} 和 {{CSSXref("border-width")}}。 |
| {{CSSXref("border-block-color")}}  | 为两个块向边框设置 `border-color`。                                                                          |
| {{CSSXref("border-block-style")}}  | 为两个块向边框设置 `border-style`。                                                                          |
| {{CSSXref("border-block-width")}}  | 为两个块向边框设置 `border-width`。                                                                          |
| {{CSSXref("border-inline")}}       | 为两个行向边框设置 `border-color`、`border-style` 和 `border-width`。                                        |
| {{CSSXref("border-inline-color")}} | 为两个行向边框设置 `border-color`。                                                                          |
| {{CSSXref("border-inline-style")}} | 为两个行向边框设置 `border-style`。                                                                          |
| {{CSSXref("border-inline-width")}} | 为两个行向边框设置 `border-width`。                                                                          |
| {{CSSXref("margin-block")}}        | 设置所有块向外边距（{{CSSXref("margin")}}）。                                                                |
| {{CSSXref("margin-inline")}}       | 设置所有行向外边距（`margin`）。                                                                             |
| {{CSSXref("padding-block")}}       | 设置块向内边距（{{CSSXref("padding")}}）。                                                                   |
| {{CSSXref("padding-inline")}}      | 设置行向内边距（`padding`）。                                                                                |

## 外边距示例

有对应关系的外边距属性 {{CSSXref("margin-inline-start")}}、{{CSSXref("margin-inline-end")}}、{{CSSXref("margin-block-start")}} 和 {{CSSXref("margin-inline-end")}} 可用于替代对应的实体属性。

在下面的例子里我创建了两个盒子，给每条边加上了不同大小的外边距。为了让外边距更明显，我另外加上了带边框的容器。

一个盒子用的实体属性，另一个用的逻辑属性。试试把 {{CSSXref("direction")}} 属性改成 `rtl`，让盒子显示在从右到左的行内方向里，第一个盒子的外边距会保持不动，而第二个盒子行向的外边距会发生切换。

你也可以试试把 `writing-mode` 从 `horizontal-tb` 改成 `vertical-rl`。注意到第一个盒子的外边距还是保持不动，但是第二个的跟着文本的行内方向四处切换。

{{EmbedGHLiveSample("css-examples/logical/margin-longhands.html", "100%", 700)}}

### 外边距简写属性

既然我们现在可以同时设置盒子的两侧——要么行向要么块向的两侧——那就有新的简写属性 {{CSSXref("margin-inline")}} 和 {{CSSXref("margin-block")}} 可以接受两个值。第一个值会应用到那个方向的首侧，第二个应用到末侧。如果你只用一个值，那么这个值应用到两侧。

在横排书写模式里，这段 CSS 会给盒子上侧 5px 的外边距，下侧 10px 的外边距。

```css
.box {
  margin-block: 5px 10px;
}
```

## 内边距示例

有对应关系的内边距属性 {{CSSXref("padding-inline-start")}}、{{CSSXref("padding-inline-end")}}、{{CSSXref("padding-block-start")}} 和 {{CSSXref("padding-inline-end")}} 可用于替代对应的实体属性。

在下面的例子里我有两个盒子，一个用的实体内边距属性，而另一个用的逻辑内边距属性。在 `horizontal-tb` 的书写模式（`writing-mode`）里，两个盒子应该看起来一样。

试试把 `direction` 属性改成 `rtl`，让盒子显示在从右到左的行内方向里。第一个盒子的内边距会保持不动，而第二盒子行向的内边距会发生切换。

你也可以试试把 `writing-mode` 从 `horizontal-tb` 改成 `vertical-rl`。注意到第一个盒子的内边距还是保持不动，但是第二个的跟着文本的行内方向四处切换。

{{EmbedGHLiveSample("css-examples/logical/padding-longhands.html", "100%", 700)}}

### 内边距简写属性

和外边距一样，内边距也有二值简写属性——{{CSSXref("padding-inline")}} 和 {{CSSXref("padding-block")}}——可以让你分别设置行向和块向的两个内边距。

在横排书写模式里，这段 CSS 会给盒子上侧 5px 的内边距，下侧 10px 的内边距：

```css
.box {
  padding-block: 5px 10px;
}
```

## 边框示例

边框属性是导致逻辑属性与逻辑值规范有如此之多的属性的主要原因，盒子每侧边框的颜色、宽度和线型都有全称属性，每侧还有同时设置这三个的简写属性。和内外边距一样，每个实体属性都有对应的属性。

下面的演示用了几个全称属性和三个简写属性。和其他演示一样，试试把 `direction` 属性改成 `rtl`，让盒子显示在从右到左的行内方向里，或者把 `writing-mode` 从 `horizontal-tb` 改成 `vertical-rl`。

{{EmbedGHLiveSample("css-examples/logical/border-longhands.html", "100%", 700)}}

### 新的边框简写属性

有在块向或者行向上设置宽度、线型和颜色二值简写属性，也有在块向或者行向上同时设置三个值的简写属性。下面的代码在横排书写模式里会给盒子的上侧和下侧 2px 的绿色实线边框，左侧和右侧 4px 的点状紫色边框。

```css
.box {
  border-block: 2px solid green;
  border-inline-width: 4px;
  border-inline-style: dotted;
  border-inline-color: rebeccapurple;
}
```

### 相对于流的 border-radius 属性

规范为 {{CSSXref("border-radius")}} 全称属性提供了相对于流的等价属性。下列示例在横排书写模式（`writing-mode`）中会将右上角的边框半径设置为 1em，右下角的为 0，左下角的为 20px，左上角的为 40px。

```css
.box {
  border-end-start-radius: 1em;
  border-end-end-radius: 0;
  border-start-end-radius: 20px;
  border-start-start-radius: 40px;
}
```

## 为四值简写属性语法标示逻辑值

规范为 `margin` 属性等四值简写属性提出了相关建议，然而尚未最终确定如何标示逻辑值，讨论见[此议题](https://github.com/w3c/csswg-drafts/issues/1282)。

目前使用如 `margin`、`padding` 或 `border` 等任意四值简写属性将使用实体属性，因此若跟随文档的流向很重要，则暂时使用全称属性。
