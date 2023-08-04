---
title: animation-timing-function
slug: Web/CSS/animation-timing-function
---

{{CSSRef}}

**`animation-timing-function`** [CSS](/zh-CN/docs/Web/CSS) 属性设置动画在每个周期的持续时间内如何进行。

{{EmbedInteractiveExample("pages/css/animation-timing-function.html")}}

使用简写属性 {{cssxref("animation")}} 一次性设置所有动画属性通常很方便。

## 语法

```css
/* 关键字值 */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* 函数值 */
animation-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
animation-timing-function: steps(4, end);

/* Steps 函数关键字 */
animation-timing-function: steps(4, jump-start);
animation-timing-function: steps(10, jump-end);
animation-timing-function: steps(20, jump-none);
animation-timing-function: steps(5, jump-both);
animation-timing-function: steps(6, start);
animation-timing-function: steps(8, end);

/* 多个动画 */
animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);

/* 全局值 */
animation-timing-function: inherit;
animation-timing-function: initial;
animation-timing-function: revert;
animation-timing-function: revert-layer;
animation-timing-function: unset;
```

> **备注：** 当你在 `animation-*` 属性上指定多个以逗号分隔的值时，它们将根据值的数量以不同的方式分配给 {{cssxref("animation-name")}} 属性中指定的动画。有关更多信息，请参阅[设置多个动画属性值](/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values)。

### 值

- {{cssxref("&lt;easing-function&gt;")}}

  - : {{cssxref("animation-name")}} 确定动画对应的缓动函数。

    非阶跃（non-step）关键字值（如 ease、linear、ease-in-out 等）代表了固定的四点值的三次贝塞尔曲线，而 cubic-bezier() 函数允许使用非预定义值。而阶跃时间函数将输入时间分成一定数量相等的间隔，由步数和步骤位置定义。

- `ease`
  - : 等同于 `cubic-bezier(0.25, 0.1, 0.25, 1.0)`，即默认值，表示动画在中间加速，在结束时减速。。
- `linear`
  - : 等同于 `cubic-bezier(0.0, 0.0, 1.0, 1.0)`，表示动画以匀速运动。
- `ease-in`
  - : 等同于 `cubic-bezier(0.42, 0, 1.0, 1.0)`，表示动画一开始较慢，随着动画属性的变化逐渐加速，直至完成。
- `ease-out`
  - : 等同于 `cubic-bezier(0, 0, 0.58, 1.0)`，表示动画一开始较快，随着动画的进行逐渐减速。
- `ease-in-out`
  - : 等同于 `cubic-bezier(0.42, 0, 0.58, 1.0)`，表示动画属性一开始缓慢变化，随后加速变化，最后再次减速变化。
- `cubic-bezier(p1, p2, p3, p4)`
  - : 开发者自定义的三次贝塞尔曲线，其中 p1 和 p3 的值必须在 0 到 1 的范围内。
- `steps(n, <jumpterm>)`

  - : 按照 n 个定格在过渡中显示动画迭代，每个定格等长时间显示。例如，如果 n 为 5，则有 5 个步骤。动画是否在 0%、20%、40%、60% 和 80% 处或 20%、40%、60%、80% 和 100% 处暂停，或者在动画的 0% 和 100% 之间设置 5 个定格，又或是在包括 0% 和 100% 的情况下设置 5 个定格（在 0%、25%、50%、75% 和 100% 处）取决于使用以下跳跃项之一：

    - `jump-start`
      - : 表示一个左连续函数，因此第一个跳跃发生在动画开始时。
    - `jump-end`
      - : 表示一个右连续函数，因此最后一个跳跃发生在动画结束时。
    - `jump-none`
      - : 两端都没有跳跃。相反，在 0% 和 100% 标记处分别停留，每个停留点的持续时间为总动画时间的 1/n。
    - `jump-both`
      - : 在 0% 和 100% 标记处停留，有效地在动画迭代过程中添加一个步骤。
    - `start`
      - : 等同于 `jump-start`。
    - `end`
      - : 等同于 `jump-end`。
    - `step-start`
      - : 等同于 `steps(1, jump-start)`。
    - `step-end`
      - : 等同于 `steps(1, jump-end)`。

## 描述

在 {{cssxref("@keyframes")}} 规则中，可以在单个关键帧上指定时间函数。如果没有在关键帧上指定 `animation-timing-function`，则该关键帧将使用应用动画的元素的 `animation-timing-function` 属性相应的值。

在关键帧内，`animation-timing-function` 是一个 at-rule-specific 描述符，而不是同名的属性。时间并没有被动画化。相反，关键帧的时间函数会在逐个属性的基础上应用，从指定该函数的关键帧开始，直到下一个指定该属性的关键帧，或者直到动画结束（如果没有后续关键帧指定该属性）。因此，在 `100%` 或 `to` 关键帧上指定的 `animation-timing-function` 永远不会被使用。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 三次贝塞尔示例

```html hidden
<div class="parent">
  <div class="ease">ease</div>
  <div class="easein">ease-in</div>
  <div class="easeout">ease-out</div>
  <div class="easeinout">ease-in-out</div>
  <div class="linear">linear</div>
  <div class="cb">cubic-bezier(0.2,-2,0.8,2)</div>
</div>
```

```css hidden
.parent > div[class] {
  animation-name: changeme;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  margin-bottom: 4px;
}
@keyframes changeme {
  0% {
    min-width: 12em;
    width: 12em;
    background-color: black;
    border: 1px solid red;
    color: white;
  }
  100% {
    width: 90vw;
    min-width: 24em;
    background-color: magenta;
    color: yellow;
    border: 1px solid orange;
  }
}
```

```css
.ease {
  animation-timing-function: ease;
}
.easein {
  animation-timing-function: ease-in;
}
.easeout {
  animation-timing-function: ease-out;
}
.easeinout {
  animation-timing-function: ease-in-out;
}
.linear {
  animation-timing-function: linear;
}
.cb {
  animation-timing-function: cubic-bezier(0.2, -2, 0.8, 2);
}
```

{{EmbedLiveSample("三次贝塞尔示例", 600, 200)}}

### 阶跃动画示例

```html hidden
<div class="parent">
  <div class="jump-start">jump-start</div>
  <div class="jump-end">jump-end</div>
  <div class="jump-both">jump-both</div>
  <div class="jump-none">jump-none</div>
  <div class="start">start</div>
  <div class="end">end</div>
  <div class="step-start">step-start</div>
  <div class="step-end">step-end</div>
</div>
```

```css hidden
.parent > div[class] {
  animation-name: changeme;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  margin-bottom: 4px;
}
@keyframes changeme {
  0% {
    min-width: 12em;
    width: 12em;
    background-color: black;
    border: 1px solid red;
    color: white;
  }
  100% {
    width: 90vw;
    min-width: 24em;
    background-color: magenta;
    color: yellow;
    border: 1px solid orange;
  }
}
```

```css
.jump-start {
  animation-timing-function: steps(5, jump-start);
}
.jump-end {
  animation-timing-function: steps(5, jump-end);
}
.jump-none {
  animation-timing-function: steps(5, jump-none);
}
.jump-both {
  animation-timing-function: steps(5, jump-both);
}
.start {
  animation-timing-function: steps(5, start);
}
.end {
  animation-timing-function: steps(5, end);
}
.step-start {
  animation-timing-function: step-start;
}
.step-end {
  animation-timing-function: step-end;
}
```

{{EmbedLiveSample("阶跃动画示例", 600, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 动画](/zh-CN/docs/CSS/Tutorials/Using_CSS_animations)
- {{cssxref('easing-function')}}
- JavaScript {{domxref("AnimationEvent")}} API
- [cubic-bezier.com](https://cubic-bezier.com)
- 其他相关的动画属性：{{cssxref("animation")}}、{{cssxref("animation-composition")}}、{{cssxref("animation-delay")}}、{{cssxref("animation-direction")}}、{{cssxref("animation-duration")}}、{{cssxref("animation-fill-mode")}}、{{cssxref("animation-iteration-count")}}、{{cssxref("animation-name")}}、{{cssxref("animation-timeline")}}、{{cssxref("animation-play-state")}}
