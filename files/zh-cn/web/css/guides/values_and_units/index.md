---
title: CSS 值和单位
slug: Web/CSS/Guides/Values_and_units
l10n:
  sourceCommit: 5c5ee35d66ac24bc6513c14f120750c74d779d20
---

每个 CSS 声明都由一个属性/值对组成。值的具体形式因属性而异，例如：单个整数、关键字、函数，或是不同元素的组合；部分值具有单位，而另一些则没有单位。所有属性都接受 CSS 全局值（CSS-wide value）。CSS 值和单位模块定义了 CSS 属性所接受的数据类型，包括各类值和单位。该模块还定义了 CSS 值定义语法（即形式语法），用于规范所有 CSS 属性和函数的有效取值范围。

## 参考

### 属性

- {{cssxref("interpolate-size")}}

### 函数

- {{cssxref("abs()")}}
- {{cssxref("acos()")}}
- {{cssxref("asin()")}}
- {{cssxref("atan()")}}
- {{cssxref("atan2()")}}
- {{cssxref("attr()")}}
- {{cssxref("calc()")}}
- {{cssxref("calc-size()")}}
- {{cssxref("clamp()")}}
- {{cssxref("cos()")}}
- {{cssxref("exp()")}}
- {{cssxref("hypot()")}}
- {{cssxref("ident()")}}
- {{cssxref("inherit()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url()")}}

规范中定义了包括 `calc-mix()`、`crossorigin()`、`first-valid()`、`if()`、`integrity()`、`progress()`、`random()`、`random-item()`、`referrerpolicy()`、`sibling-count()`、`sibling-index()`、`src()`、`type()` 和 `toggle()` 在内的额外函数，但这些函数目前尚未在浏览器中实现。

### 数据类型

- [`<angle-percentage>`](/zh-CN/docs/Web/CSS/Reference/Values/angle-percentage)
- [`<angle>`](/zh-CN/docs/Web/CSS/Reference/Values/angle)
- [`<animation-timeline>`](/zh-CN/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`<attr-name>`](/zh-CN/docs/Web/CSS/Reference/Values/attr#attr-name)
- [`<attr-type>`](/zh-CN/docs/Web/CSS/Reference/Values/attr#attr-type)
- {{CSSxRef("&lt;calc-keyword&gt;")}}（`e`、`pi`、`infinity`、{{glossary("NaN")}}）
- [`<calc-size-basis>`](/zh-CN/docs/Web/CSS/Reference/Values/calc-size#calc-size-basis)
- [`<calc-sum>`](/zh-CN/docs/Web/CSS/Reference/Values/calc-sum)
- [`<custom-ident>`](/zh-CN/docs/Web/CSS/Reference/Values/custom-ident)
- [`<dashed-ident>`](/zh-CN/docs/Web/CSS/Reference/Values/dashed-ident)
- [`<dimension>`](/zh-CN/docs/Web/CSS/Reference/Values/dimension)
- [`<easing-function>`](/zh-CN/docs/Web/CSS/Reference/Values/easing-function)
- [`<first-valid()>`](/zh-CN/docs/Web/CSS)
- [`<frequency>`](/zh-CN/docs/Web/CSS/Reference/Values/frequency)
- [`<frequency-percentage>`](/zh-CN/docs/Web/CSS/Reference/Values/frequency-percentage)
- [`<ident>`](/zh-CN/docs/Web/CSS/Reference/Values/ident)
- [`<integer>`](/zh-CN/docs/Web/CSS/Reference/Values/integer)
- [`<length-percentage>`](/zh-CN/docs/Web/CSS/Reference/Values/length-percentage)
- [`<length>`](/zh-CN/docs/Web/CSS/Reference/Values/length)
- [`<number>`](/zh-CN/docs/Web/CSS/Reference/Values/number)
- [`<percentage>`](/zh-CN/docs/Web/CSS/Reference/Values/percentage)
- [`<position>`](/zh-CN/docs/Web/CSS/Reference/Properties/position)
- [`<ratio>`](/zh-CN/docs/Web/CSS/Reference/Values/ratio)
- [`<resolution>`](/zh-CN/docs/Web/CSS/Reference/Values/resolution)
- [`<rounding-strategy>`](/zh-CN/docs/Web/CSS/Reference/Values/round#rounding-strategy)（`down`、`up`、`to-zero`）
- [`<string>`](/zh-CN/docs/Web/CSS/Reference/Values/string)
- [`<syntax>`](/zh-CN/docs/Web/CSS/Guides/Syntax/Introduction)
- [`<time-percentage>`](/zh-CN/docs/Web/CSS/Reference/Values/time-percentage)
- [`<time>`](/zh-CN/docs/Web/CSS/Reference/Values/time)
- [`<url>`](/zh-CN/docs/Web/CSS/Reference/Values/url_value)
- [`<url-modifier>`](/zh-CN/docs/Web/CSS/Reference/Values/url_function#url-modifier)
- [`<view-timeline-name>`](/zh-CN/docs/Web/CSS/Reference/Properties/view-timeline-name)

#### 单位

- [`%`（百分比）](/zh-CN/docs/Web/CSS/Reference/Values/length#cap)
- [`cap`](/zh-CN/docs/Web/CSS/Reference/Values/length#cap)
- [`ch`](/zh-CN/docs/Web/CSS/Reference/Values/length#ch)
- [`cm`](/zh-CN/docs/Web/CSS/Reference/Values/length#cm)
- [`deg`](/zh-CN/docs/Web/CSS/Reference/Values/angle#deg)
- [`dpcm`](/zh-CN/docs/Web/CSS/Reference/Values/resolution#dpcm)
- [`dpi`](/zh-CN/docs/Web/CSS/Reference/Values/resolution#dpi)
- [`dppx`](/zh-CN/docs/Web/CSS/Reference/Values/resolution#dppx)
- [`dvb`](/zh-CN/docs/Web/CSS/Reference/Values/length#vb)
- [`dvh`](/zh-CN/docs/Web/CSS/Reference/Values/length#vh)
- [`dvi`](/zh-CN/docs/Web/CSS/Reference/Values/length#vi)
- [`dvmax`](/zh-CN/docs/Web/CSS/Reference/Values/length#vmax)
- [`dvmin`](/zh-CN/docs/Web/CSS/Reference/Values/length#vmin)
- [`dvw`](/zh-CN/docs/Web/CSS/Reference/Values/length#vw)
- [`em`](/zh-CN/docs/Web/CSS/Reference/Values/length#em)
- [`ex`](/zh-CN/docs/Web/CSS/Reference/Values/length#ex)
- [`grad`](/zh-CN/docs/Web/CSS/Reference/Values/angle#grad)
- [`Hz`](/zh-CN/docs/Web/CSS/Reference/Values/frequency#hz)
- [`ic`](/zh-CN/docs/Web/CSS/Reference/Values/length#ic)
- [`in`](/zh-CN/docs/Web/CSS/Reference/Values/length#in)
- [`kHz`](/zh-CN/docs/Web/CSS/Reference/Values/frequency#khz)
- [`lh`](/zh-CN/docs/Web/CSS/Reference/Values/length#lh)
- [`lvb`](/zh-CN/docs/Web/CSS/Reference/Values/length#vb)
- [`lvh`](/zh-CN/docs/Web/CSS/Reference/Values/length#vh)
- [`lvi`](/zh-CN/docs/Web/CSS/Reference/Values/length#vi)
- [`lvmax`](/zh-CN/docs/Web/CSS/Reference/Values/length#vmax)
- [`lvmin`](/zh-CN/docs/Web/CSS/Reference/Values/length#vmin)
- [`lvw`](/zh-CN/docs/Web/CSS/Reference/Values/length#vw)
- [`mm`](/zh-CN/docs/Web/CSS/Reference/Values/length#mm)
- [`ms`](/zh-CN/docs/Web/CSS/Reference/Values/time#ms)
- [`pc`](/zh-CN/docs/Web/CSS/Reference/Values/length#pc)
- [`pt`](/zh-CN/docs/Web/CSS/Reference/Values/length#pt)
- [`px`](/zh-CN/docs/Web/CSS/Reference/Values/length#px)
- [`Q`](/zh-CN/docs/Web/CSS/Reference/Values/length#q)
- [`rad`](/zh-CN/docs/Web/CSS/Reference/Values/angle#rad)
- [`rcap`](/zh-CN/docs/Web/CSS/Reference/Values/length#rcap)
- [`rch`](/zh-CN/docs/Web/CSS/Reference/Values/length#rch)
- [`rem`](/zh-CN/docs/Web/CSS/Reference/Values/length#rem)
- [`rex`](/zh-CN/docs/Web/CSS/Reference/Values/length#rex)
- [`ric`](/zh-CN/docs/Web/CSS/Reference/Values/length#ric)
- [`rlh`](/zh-CN/docs/Web/CSS/Reference/Values/length#rlh)
- [`s`](/zh-CN/docs/Web/CSS/Reference/Values/time#s)
- [`svb`](/zh-CN/docs/Web/CSS/Reference/Values/length#vb)
- [`svh`](/zh-CN/docs/Web/CSS/Reference/Values/length#vh)
- [`svi`](/zh-CN/docs/Web/CSS/Reference/Values/length#vi)
- [`svmax`](/zh-CN/docs/Web/CSS/Reference/Values/length#vmax)
- [`svmin`](/zh-CN/docs/Web/CSS/Reference/Values/length#vmin)
- [`svw`](/zh-CN/docs/Web/CSS/Reference/Values/length#vw)
- [`turn`](/zh-CN/docs/Web/CSS/Reference/Values/angle#turn)
- [`vb`](/zh-CN/docs/Web/CSS/Reference/Values/length#vb)
- [`vh`](/zh-CN/docs/Web/CSS/Reference/Values/length#vh)
- [`vi`](/zh-CN/docs/Web/CSS/Reference/Values/length#vi)
- [`vmax`](/zh-CN/docs/Web/CSS/Reference/Values/length#vmax)
- [`vmin`](/zh-CN/docs/Web/CSS/Reference/Values/length#vmin)
- [`vw`](/zh-CN/docs/Web/CSS/Reference/Values/length#vw)
- [`x`](/zh-CN/docs/Web/CSS/Reference/Values/resolution#x)

[弹性单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#弹性单位)（`fr`）和[容器单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#容器单位)（`cqb`、`cqh`、`cqi`、`cqmax`、`cqmin`、`cqw`）分别定义于 [CSS 网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout) 和 [CSS 条件规则](/zh-CN/docs/Web/CSS/Guides/Conditional_rules)模块。

#### 单位分类

- [绝对长度单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#绝对长度单位)（`cm`、`in`、`mm`、`pc`、`pt`、`px`、`Q`）
- [角度单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#角度单位)（`deg`、`grad`、`rad`、`turn`）
- [默认视口单位](/zh-CN/docs/Web/CSS/Reference/Values/length#默认视口单位)（`vb` , `vh`、`vi` , `vmax`、`vmin`、`vw`）
- [动态视口单位](/zh-CN/docs/Web/CSS/Reference/Values/length#动态视口单位)（`dvb`、`dvh`、`dvi`、`dvmax`、`dvmin`、`dvw`）
- [频率单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#频率单位)（`Hz`、`kHz`）
- [大视口百分比单位](/zh-CN/docs/Web/CSS/Reference/Values/length#大视口单位)（`lvb`、`lvh`、`lvi`、`lvmax`、`lvmin`、`lvw`）
- [本地字体相对长度单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#本地字体相对长度单位)（`cap`、`ch`、`em`、`ex`、`ic`、`lh`）
- [物理单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#绝对长度单位)（`cm`、`in`、`mm`、`pc`、`pt`、`Q`）
- [相对长度单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)（`cap`、`ch`、`em`、`ex`、`ic`、`lh`、`rem`、`rlh`、`vb`、`vh`、`vi`、`vmax`、`vmin`、`vw`）
- [分辨率单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#分辨率单位)（`dpcm`、`dpi` , `dppx`、`x`）
- [根字体相对长度单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#根字号相关长度单位)（`rcap`、`rch`、`rem`、`rex`、`ric`、`rlh`）
- [小视口百分比单位](/zh-CN/docs/Web/CSS/Reference/Values/length#小视口单位)（`svb`、`svh`、`svi`、`svmax`、`svmin`、`svw`）
- [时间单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#时间单位)（`ms`、`s`）
- [视口单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#视口单位)（`dvh`、`dvw`、`lvh`、`lvw`、`svh`、`svw`、`vb` , `vh`、`vi` , `vmax`、`vmin`、`vw`）
- [视觉角度单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#绝对长度单位)（`px`）

### 关键概念

- {{glossary("Advance measure", "步进尺寸")}}
- [方括号表示法](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#方括号表示法（minmax）)
- [组件值组合符](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#组件值组合符)
- [CSS 全局关键字](/zh-CN/docs/Web/CSS/Reference/Values/Data_types#css_全局关键字)
- {{glossary("Device pixel", "设备像素")}}
- [函数表示法](/zh-CN/docs/Web/CSS/Reference/Values/Functions)
- {{glossary("Identifier", "标识符")}}
- {{glossary("Interpolation", "插值")}}
- {{glossary("Keyword", "关键词")}}
- [数学函数](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
- [数值数据类型](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- {{glossary("Origin", "源")}}
- {{glossary("Pixel", "像素")}}
- [文本数据类型](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
- {{glossary("URL")}}
- [值定义语法](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)

## 指南

- [CSS 数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)
  - : CSS 数据类型的简介，这些数据类型定义了 CSS 属性和函数接受的典型值。

- [数值数据类型](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
  - : 数值数据类型的概述，包括整数、数字、百分比和尺寸，以及相对与绝对长度、角度和时间单位。

- [文本数据类型](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
  - : 文本数据类型的概述，包括预定义关键字值、全局 CSS 关键字值以及 URL。

- [CSS 值函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions)
  - : 概述那些通过特殊数据处理或计算来返回 CSS 属性值的 CSS 语句。

- [使用 CSS 数学函数](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
  - : CSS 数学函数允许将属性值写成数学表达式的形式。

- [值定义语法](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - : 用于定义 CSS 属性和函数的有效值集合的形式语法。

- [学习：值和单位](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : 了解一些最常用的值类型，它们是什么，以及它们是如何工作的。

## 相关

- [CSS 层叠与继承](/zh-CN/docs/Web/CSS/Guides/Cascade)模块
  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- [CSS 网格布局](/zh-CN/docs/Web/CSS/Guides/Grid_layout)模块
  - {{cssxref("&lt;flex&gt;")}}
  - [弹性单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#弹性单位)（`fr`）

- [CSS 条件规则](/zh-CN/docs/Web/CSS/Guides/Conditional_rules)模块
  - [容器单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#容器单位)（`cqb`、`cqh`、`cqi`、`cqmax`、`cqmin`、`cqw`）

- [CSS 颜色](/zh-CN/docs/Web/CSS/Guides/Colors)模块
  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/color-mix)

- [CSS 图像](/zh-CN/docs/Web/CSS/Guides/Images)模块
  - {{cssxref("&lt;image&gt;")}}
  - {{cssxref("&lt;gradient&gt;")}}

## 规范

{{Specifications}}

## 参见

- [CSS 语法](/zh-CN/docs/Web/CSS/Guides/Syntax)模块
- [CSS 选择器](/zh-CN/docs/Web/CSS/Guides/Selectors)模块
