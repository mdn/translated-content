---
title: 行距
slug: Glossary/Leading
l10n:
  sourceCommit: b6dacb9087010826a5a7d5b2d7c428e89d8135cf
---

在排版学中，**行距**（leading）是指在文本上下方添加的空间，用于在行间增加垂直距离。历史上，在物理活字排版中，会使用实际的[铅](https://zh.wikipedia.org/wiki/铅)块来实现这种间距，这也是该术语的由来。

在 CSS 中，排版行距是内容高度与行高（line-height）之间的差值，通常通过 {{cssxref("line-height")}} 属性设置。通过 `line-height` 设置的行距为行之间提供了间隔，这个间隔可以为负值。该空间会在文本的上方和下方平均分配，这被称为**半行距**。

字体在大写字母基线之上的区域称为*上边缘*，在{{glossary("/Baseline/Typography", "字母基线")}}之下的区域称为*下边缘*。同样，行上方和下方的半行距分别称为*上行距*和*下行距*。

可以通过 {{cssxref("text-box")}} 属性，从文本元素块容器的 block-start 和 block-end 边缘裁剪掉半行距。

## 参见

- {{cssxref("line-height")}}
- {{cssxref("text-box")}}
- [CSS 行内布局](/zh-CN/docs/Web/CSS/Guides/Inline_layout)模块
- 维基百科上的[行距](https://zh.wikipedia.org/wiki/行距)
- matthiasott.com 上的 [CSS 中的行距](https://matthiasott.com/notes/the-thing-with-leading-in-css)（2022）
