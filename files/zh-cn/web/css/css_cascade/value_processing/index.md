---
title: CSS 属性值处理
slug: Web/CSS/CSS_cascade/Value_processing
---

{{CSSRef}}

## 处理阶段

### 初始值

属性的**初始值**（initial value）是其默认值，如其定义表中所列。初始值的使用取决于属性是否被继承：

- 对于[继承属性](/zh-CN/docs/Web/CSS/CSS_cascade/Inheritance#继承属性)，初始值只能被用于没有指定值的**根元素**上。
- 对于[非继承属性](/zh-CN/docs/Web/CSS/CSS_cascade/Inheritance#非继承属性)，初始值可以被用于**任意**没有指定值的元素上。

你可以使用 {{cssxref("initial")}} 关键字明确指定初始值。

> [!NOTE]
> 初始值可在每个 CSS 属性参考页面的正式语法部分找到。例如，[`font-size` 的初始值为 `medium`](/zh-CN/docs/Web/CSS/font-size#形式定义)。初始值不应与浏览器样式表指定的值相混淆。

### 指定值

属性的**指定值**（specified value）是 CSS 文件或 `style` 属性最初分配的值。给定属性的指定值根据以下规则确定：

1. 在当前文档的样式表中给这个属性赋的值，会被优先使用。
2. 如果在当前文档的样式表中没有给这个属性赋值，那么它会尝试从父元素那继承一个值。
3. 如果上面的两种途径都不可行，则使用元素的[初始值](#初始值)。

### 计算值

属性的**计算值**（computed value）是指这个属性在由父类转向子类的继承中的值。这是在将相对单位和自定义属性转换为绝对值等内容后，但在考虑特定布局信息之前得出的结果。

计算值由[指定值](#指定值)计算得出，计算方法是：

- 处理特殊值 {{cssxref("inherit")}}、{{cssxref("initial")}}、{{cssxref("unset")}}、{{cssxref("revert")}}、{{cssxref("revert-layer")}} 和 {{cssxref("unset")}}。
- 进行计算，以达到属性摘要中“计算值”中描述的值。

计算值所需要的计算通常包括将相对值转换成绝对值（如 `em` 单位或百分比）。例如，如一个元素的属性值为 `font-size:16px` 和 `padding-top:2em`，则 `padding-top` 的计算值为 `32px`（字体大小的 2 倍）。

然而，对于有些属性（这些元素的百分比与需要布局确定后才能知道的值有关，如 `width`、`margin-right`、`text-indent` 和 `top`），它们的“百分比值”会转换成“百分比的计算值”。另外，line-height 属性值如是没有单位的数字，则该值就是其计算值。这些计算值中的相对值会在[使用值](#使用值)确定后转换成绝对值。

### 使用值

属性的**应用值**（used value）是在对[计算值](#计算值)进行了所有计算，并根据布局的具体细节（例如，将百分比解析为实际像素值）对其进行细化后的属性值。

## 渲染值

渲染的值称为[实际值](#实际值)，而通过脚本获取的值称为[解析值](#解析值)。

### 实际值

属性的**实际值**（actual value）是应用值（used value）被应用后的近似值。例如，一个用户代理可能只能渲染一个整数像素值的边框（实际值），并且该值可能被强制近似于边框的计算宽度值。

### 解析值

属性的**解析值**（resolved value）是应用活动样式表并解析这些值可能包含的任何基本计算后的值。{{domxref("Window.getComputedStyle", "getComputedStyle()")}} 方法会返回一个实时的 {{domxref("CSSStyleDeclaration")}} 对象，其中包含应用到指定元素的所有 CSS 属性的解析值。每个解析值都是[计算值](#计算值)或[使用值](#使用值)，具体取决于属性。

## 参见

- 控制继承的 CSS 值：[`inherit`](/zh-CN/docs/Web/CSS/inherit)、[`initial`](/zh-CN/docs/Web/CSS/initial)、[`revert`](/zh-CN/docs/Web/CSS/revert)、[`revert-layer`](/zh-CN/docs/Web/CSS/revert-layer) 和 [`unset`](/zh-CN/docs/Web/CSS/unset)
- [CSS 层叠与继承](/zh-CN/docs/Web/CSS/CSS_cascade)模块
- [CSS 语法](/zh-CN/docs/Web/CSS/CSS_syntax)模块