---
title: 用于浮动和定位的逻辑属性
slug: Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning
---

{{CSSRef}}

[逻辑属性与逻辑值规范](https://drafts.csswg.org/css-logical/)包含了 {{CSSXref("float")}} 和 {{CSSXref("clear")}} 的实体值的逻辑对应关系，以及用于[定位布局](/zh-CN/docs/Web/CSS/CSS_positioned_layout)的定位属性的逻辑对应关系。本指南介绍如何使用这些对应关系。

## 属性的和值的对应关系

下表详列了本指南所论述的属性和值，以及其实体对应关系。假设书写模式（{{CSSXref("writing-mode")}}）为横排，行内方向为从左到右。

| 逻辑属性或逻辑值                   | 实体属性或实体值                 |
| ---------------------------------- | -------------------------------- |
| {{CSSXref("float")}}: inline-start | {{CSSXref("float")}}: left       |
| {{CSSXref("float")}}: inline-end   | {{CSSXref("float")}}: right      |
| {{CSSXref("clear")}}: inline-start | {{CSSXref("clear")}}: left       |
| {{CSSXref("clear")}}: inline-end   | {{CSSXref("clear")}}: right      |
| {{CSSXref("inset-inline-start")}}  | {{CSSXref("left")}}              |
| {{CSSXref("inset-inline-end")}}    | {{CSSXref("right")}}             |
| {{CSSXref("inset-block-start")}}   | {{CSSXref("top")}}               |
| {{CSSXref("inset-block-end")}}     | {{CSSXref("bottom")}}            |
| {{CSSXref("text-align")}}: start   | {{CSSXref("text-align")}}: left  |
| {{CSSXref("text-align")}}: end     | {{CSSXref("text-align")}}: right |

除了这些有对应关系的属性，另有可以处理块向和行向尺度的简写属性。除 {{CSSXref("inset")}} 属性外，这些属性没有与实体属性的对应关系。

| 逻辑属性                    | 用途                                           |
| --------------------------- | ---------------------------------------------- |
| {{CSSXref("inset-inline")}} | 为行向尺度同时设置上述两个偏移值。             |
| {{CSSXref("inset-block")}}  | 为块向尺度同时设置上述两个偏移值。             |
| {{CSSXref("inset")}}        | 同时设置四个偏移值，多值语法使用实体对应关系。 |

## 浮动和清除浮动的示例

{{CSSXref("float")}} 和 {{CSSXref("clear")}} 属性所用的实体值为 `left`、`right` 和 `both`。逻辑属性规范定义 `inline-start` 和 `inline-end` 值对应于 `left` 和 `right`。

在下面的例子里，我有两个盒子——第一个用 `float: left` 设置了浮动，第二个用了 `float: inline-start`。如果把 `writing-mode` 改成 `vertical-rl` 或者把 `direction` 改成 `rtl`，你会看到浮动到左侧的盒子总是贴在左侧，而浮动到 `inline-start` 的元素随着 `direction` 和 `writing-mode` 变动。

{{EmbedGHLiveSample("css-examples/logical/float.html", "100%", 700)}}

## 示例：定位布局的偏移属性

定位通常可以让我们相对于元素的包含块放置元素——我们就是参照元素在正常流里的位置给元素设置偏移。过去我们用实体属性 {{CSSXref("top")}}、{{CSSXref("right")}}、{{CSSXref("bottom")}} 和 {{CSSXref("left")}} 做这件事。

这些属性的取值是长度或百分比，而且参照的是用户屏幕的尺度。

逻辑属性规范创造了新的属性，你可以用来在你的书写模式里参照文本的流向定位。这些属性有：{{CSSXref("inset-block-start")}}、{{CSSXref("inset-block-end")}}、{{CSSXref("inset-inline-start")}} 和 {{CSSXref("inset-inline-end")}}。

在下面的例子里，带灰色点状边框的区域设置了 `position: relative`。为了在这个区域里用绝对定位放置蓝色盒子，我用了 `inset-block-start` 和 `inset-inline-end` 属性。把 `writing-mode` 属性改成 `vertical-rl`，或者加上 `direction: rtl`，看看相对于流的盒子是怎么根据文本方向保持位置的。

{{EmbedGHLiveSample("css-examples/logical/positioning-inset.html", "100%", 700)}}

## 新的二值和四值简写属性

和规范里的其他属性一样，我们也有新的简写属性可以同时设置两个或者四个值。

- {{CSSXref("inset")}}——使用实体对应关系同时设置四边。
- {{CSSXref("inset-inline")}}——设置两个逻辑行向偏移。
- {{CSSXref("inset-block")}}——设置两个逻辑块向偏移。

## 示例：text-align 的逻辑值

{{CSSXref("text-align")}} 属性有参照文本方向的逻辑值——我们可以不用 `left` 和 `right` 而用 `start` 和 `end`。在下面的例子里，我在第一个块里设置了 `text-align: right`，在第二个里设置了 `text-align: end`。

如果把 `direction` 改成 `rtl`，你会看到第一个块还是右对齐的，但是第二个跑到了在左边的逻辑行末。

{{EmbedGHLiveSample("css-examples/logical/text-align.html", "100%", 700)}}

相比用实体方向对齐，在使用盒对齐的时候用首和末得到的效果更一致。
