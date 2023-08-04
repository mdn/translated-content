---
title: CSS 基础框盒模型
slug: Web/CSS/CSS_box_model
---

{{CSSRef}}

**CSS 基础框盒模型**是 CSS 规范的一个模块，它定义了一种长方形的盒子——包括它们各自的内边距（padding）与外边距（margin），并根据[视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)来生成元素，对其进行布置、编排、布局（lay out）。常被直译为盒子模型、盒模型或框模型。

CSS 基础框盒模型一般仅针对单个元素及其边距、内容进行布局，而非对多个元素进行综合的排版，即使[外边距合并](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)等特性涉及二个或二个以上元素之间部分属性的交互反馈。

## 参考

### 属性

#### 控制框盒中内容流的属性

- {{CSSxRef("overflow")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}

#### 控制框盒大小的属性

- {{CSSxRef("height")}}
- {{CSSxRef("width")}}
- {{CSSxRef("max-height")}}
- {{CSSxRef("max-width")}}
- {{CSSxRef("min-height")}}
- {{CSSxRef("min-width")}}

#### 控制外边距 Margin 的属性

- {{CSSxRef("margin")}}
- {{CSSxRef("margin-bottom")}}
- {{CSSxRef("margin-left")}}
- {{CSSxRef("margin-right")}}
- {{CSSxRef("margin-top")}}
- {{CSSxRef("margin-trim")}} {{Experimental_Inline}}

#### 控制内边距 Padding 的属性

- {{CSSxRef("padding")}}
- {{CSSxRef("padding-bottom")}}
- {{CSSxRef("padding-left")}}
- {{CSSxRef("padding-right")}}
- {{CSSxRef("padding-top")}}

#### 其他属性

- {{CSSxRef("visibility")}}

## 指南

- [CSS 基础框盒模型介绍](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - : 解释了 CSS 的根本概念之一：框盒模型。该模型定义了 CSS 如何对元素的各个组成进行布局（lays out），这些组成包括他们的内容 Content、内边距 Padding、边框 Border，和外边距 Margin。
- [掌握外边距合并](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - : 有时，两个相邻的外边距会折叠合并成一个。本文介绍了控制此特性的规则，比如合并何时发生、为何发生；以及应当如何控制它。
- [视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)
  - : 解释了视觉格式化模型（visual formatting model）是什么，以及它的作用。

## 规范

{{Specifications}}
