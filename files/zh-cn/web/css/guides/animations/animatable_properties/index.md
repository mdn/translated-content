---
title: 动画性 CSS 属性
slug: Web/CSS/Guides/Animations/Animatable_properties
---

[CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations)和[过渡](/zh-CN/docs/Web/CSS/Guides/Transitions)依赖于**动画性**属性这一概念，且所有 CSS 属性除非另有规定否则均有动画性。每个属性的*动画类型*决定了此属性的值如何[结合](https://drafts.csswg.org/css-values/#combining-values)——插值、相加或累积。过渡仅涉及插值，而动画可能使用所有三种结合方法。

> [!NOTE]
> 每个 CSS 属性的动画类型列于其“形式定义”表格中（如 {{CSSXref("color", "", "#形式定义")}}）。

> [!NOTE]
> 每个 CSS 数据类型的插值方法描述于其“插值”一节中（如 {{CSSXref("&lt;length&gt;", "", "#插值")}}）。

## 动画类型

在 [Web 动画](https://drafts.csswg.org/web-animations-1/#animating-properties)规范中主要定义了四种动画类型：

- 无动画性
  - : 此属性无动画性。此属性在列于动画关键帧中时不被处理，且不受过渡影响。

    > [!NOTE]
    > 仅针对无动画性属性的动画效果仍将表现出动画效果的通常行为（如触发 {{DOMXref("Element/animationstart_event", "animationstart")}} 事件）。

- 离散
  - : 此属性的值不可加，且插值在 `50%` 处从开始值换为结束值。具体而言，记 `p` 为进度值：
    - 若 `p < 0.5`，则 `V_结果 = V_开始`；
    - 若 `p ≥ 0.5`，则 `V_结果 = V_结束`。

- 按计算值
  - : 计算值对应的各个分量使用其值类型所标示的流程相结合。若分量数量或对应分量的类型不符，或有任意分量值使用离散动画且两个对应值不符，则属性值按离散相结合。

- 可重复列表
  - : 与按计算值相同，但若两个列表有不同数量的元素，则先将两个列表重复至元素数量的最小公倍数，再将每个元素按计算值相结合。若某对值无法结合或有任意分量值使用离散动画，则属性值按离散相结合。

某些属性具有未被这四种类型所涵盖的特定的插值行为。在此情形下，请参照此属性的“插值”一节（如 {{CSSXref("visibility", "", "#插值")}}）。

## 为自定义属性赋予动画

对于使用 {{DOMXref("CSS/registerProperty", "registerProperty()")}} 方法所注册的自定义属性，其动画类型为按计算值，且其计算值类型由此属性的语法定义所[决定](https://drafts.css-houdini.org/css-properties-values-api/#calculation-of-computed-values)。

对于未注册的自定义属性，其动画类型为离散。

## 参见

- [使用 CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations/Using)
- [使用 CSS 过渡](/zh-CN/docs/Web/CSS/Guides/Transitions/Using)
