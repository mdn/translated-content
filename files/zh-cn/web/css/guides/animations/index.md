---
title: CSS 动画
slug: Web/CSS/Guides/Animations
---

CSS 动画模块（CSS Animation）可以让你通过使用关键帧对 CSS 属性的值进行动画处理，例如背景位置和变换。每个关键帧都描述了动画元素在动画序列中的某个特定时间应该如何呈现。你可以使用动画模块中的属性来控制动画的持续时间、重复次数、延迟启动等方面。

### 正在运行的动画

要查看下面方框中的动画，请点击复选框“Play the animation”或将光标悬停在方框上。当动画激活时，顶部的云会改变形状，雪花会落下，底部的雪量会上升。要暂停动画，请取消复选框或将你的光标从盒子上移开。

```html hidden live-sample___animation
<!-- See aria-label: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label -->
<input
  type="checkbox"
  id="animate"
  aria-label="Toggle the play state of the animation" />
<label for="animate">the animation</label>
<div class="root">
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <div class="cloud"></div>
  <div class="ground"></div>
</div>
```

```css hidden live-sample___animation
i {
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  animation: falling 3s linear 0s infinite backwards;
  /* Snowflakes are made with CSS linear gradients (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients) */
  background-image:
    linear-gradient(180deg, transparent 40%, white 40% 60%, transparent 60%),
    linear-gradient(90deg, transparent 40%, white 40% 60%, transparent 60%),
    linear-gradient(45deg, transparent 43%, white 43% 57%, transparent 57%),
    linear-gradient(135deg, transparent 43%, white 43% 57%, transparent 57%);
}
i:nth-of-type(4n) {
  /* Using tree structural pseudo-classes to create randomness - https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type */
  height: 30px;
  width: 30px;
  transform-origin: right -30px;
}
i:nth-of-type(4n + 1) {
  height: 24px;
  width: 24px;
  transform-origin: left 30px;
}
i:nth-of-type(4n + 2) {
  height: 10px;
  width: 10px;
  transform-origin: -30px 0;
}
i:nth-of-type(4n + 3) {
  height: 40px;
  width: 40px;
  transform-origin: -50px 0;
}
i:nth-of-type(4n) {
  animation-duration: 5.3s;
  animation-iteration-count: 12;
  transform-origin: -10px -20px;
}
i:nth-of-type(4n + 1) {
  animation-duration: 3.1s;
  animation-iteration-count: 20;
  transform-origin: 10px -20px;
}
i:nth-of-type(4n + 2) {
  animation-duration: 1.7s;
  animation-iteration-count: 35;
  transform-origin: right -20px;
}
i:nth-of-type(3n) {
  animation-delay: 2.3s;
}
i:nth-of-type(3n + 1) {
  animation-delay: 1.5s;
}
i:nth-of-type(3n + 2) {
  animation-delay: 3.4s;
}
i:nth-of-type(5n) {
  animation-timing-function: ease-in-out;
}
i:nth-of-type(5n + 1) {
  animation-timing-function: ease-out;
}
i:nth-of-type(5n + 2) {
  animation-timing-function: ease;
}
i:nth-of-type(5n + 3) {
  animation-timing-function: ease-in;
}
i:nth-of-type(5n + 4) {
  animation-timing-function: linear;
}
i:nth-of-type(11n) {
  animation-timing-function: cubic-bezier(0.2, 0.3, 0.8, 0.9);
}
i:nth-of-type(7n) {
  opacity: 0.5;
}
i:nth-of-type(7n + 2) {
  opacity: 0.3;
}
i:nth-of-type(7n + 4) {
  opacity: 0.7;
}
i:nth-of-type(7n + 6) {
  opacity: 0.6;
  animation-timing-function: ease-in;
  transform-origin: left 10px;
}
i:nth-of-type(7n + 1) {
  opacity: 0.8;
}

.root {
  height: 580px;
  background-color: skyblue;
  border: 1px solid darkgrey;
  position: relative;
  overflow: hidden;
}
.ground,
.cloud {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-repeat: no-repeat;
}
.cloud {
  width: 100%;
  height: 150px;
  background: #ffffff;
  border-radius: 0 0 90px 33% / 0 0 45px 50px;
  box-shadow:
    5px 15px 15px white,
    -5px 15px 15px white,
    0 20px 20px rgb(125 125 125 / 0.5);
  animation:
    clouds ease 5s alternate infinite 0.2s,
    wind ease-out 4s alternate infinite;
}
.ground {
  bottom: 0;
  background-image: linear-gradient(to top, #fff 97%, 99%, #bbb 100%);
  background-position: center 580px;
  animation: snowfall linear 300s forwards;
  border: 1px solid grey;
  /* Put the ground into a 3D rendering context (because the snow flakes are in a 3d rendering context) */
  transform: translate3d(0, 0, 0);
}

@keyframes snowfall {
  from {
    background-position: center 580px;
  }
  to {
    background-position: center 280px;
  }
}

@keyframes clouds {
  from {
    border-radius: 0 0 90px 33% / 0 0 45px 50px;
  }
  to {
    border-radius: 0 0 40px 50% / 0 0 55px 80px;
  }
}

@keyframes wind {
  from {
    height: 150px;
  }
  to {
    height: 100px;
  }
}

@keyframes falling {
  from {
    transform: translate(0, -50px) rotate(0deg) scale(0.9, 0.9);
  }
  to {
    transform: translate(30px, 600px) rotate(360deg) scale(1.1, 1.1);
  }
}

/* By default, the animations are paused. */
i,
div[class] {
  animation-play-state: paused;
}
/* When the div is hovered, the animation plays. Also,
when the input is checked, the animation coming after the checked checkbox plays */
div:hover *,
input:checked ~ div * {
  animation-play-state: running;
}

/* Change the content of the label that comes right after the input. Included aria-label on the label to improve accessibility. */
input + label::before {
  content: "Play ";
}
input:checked + label::before {
  content: "Pause ";
}
```

{{EmbedLiveSample("animation", "", "610px")}}

这个动画示例使用 {{cssxref("animation-iteration-count")}} 来使雪片反复落下，{{cssxref("animation-direction")}} 使云层来回移动，{{cssxref("animation-fill-mode")}} 根据云层的移动来提高雪层，以及{{cssxref("animation-play-state")}}来暂停动画。

要查看这个动画示例的源码，[请查看 GitHub 仓库上的源码](https://github.com/mdn/css-examples/blob/main/modules/animation.html)。

## 参考

### 属性

- {{cssxref("animation")}} 简写属性
- {{cssxref("animation-composition")}} {{Experimental_Inline}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-name")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timing-function")}}
- {{cssxref("animation-timeline")}}

### At 规则

- {{cssxref("@keyframes")}}

### 函数

- [`scroll()`](/zh-CN/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)

### 事件

所有动画，包括时间长度为 0 的动画，都会触发动画事件。

- {{domxref("Element/animationstart_event", "animationstart")}}
- {{domxref("Element/animationend_event", "animationend")}}
- {{domxref("Element/animationcancel_event", "animationcancel")}}
- {{domxref("Element/animationiteration_event", "animationiteration")}}

### 接口

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEvent")}}
- {{domxref("CSSKeyframeRule")}}
- {{domxref("CSSKeyframesRule")}}

## 指南

- [使用 CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations/Using)
  - : 关于如何使用 CSS 创建动画的分步教程，本文介绍每个相关的 CSS 属性和规则，并解释它们如何交互。
- [CSS 动画提示和技巧](/zh-CN/docs/Web/API/Web_Animations_API/Tips)
  - : 帮助你充分利用 CSS 动画的技巧和窍门。

## 相关概念

- {{cssxref("will-change")}} CSS 属性
- [`<easing-function>`](/zh-CN/docs/Web/CSS/Reference/Values/easing-function) 数据类型
- [`prefers-reduced-motion`](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) 媒体查询
- 术语{{glossary("Bézier curve", "贝塞尔曲线")}}

## 规范

{{Specifications}}

## 参见

- {{Experimental_Inline}} CSS 滚动时间线 {{cssxref('scroll-timeline-name')}} 和 {{cssxref('scroll-timeline-axis')}} 属性，以及 {{cssxref('scroll-timeline')}} 简写属性，创建与滚动容器的滚动偏移相关的动画。
- [CSS 变换](/zh-CN/docs/Web/CSS/Guides/Transitions)模块中的属性根据用户的动作触发动画。
- HTML {{htmlelement("canvas")}} 元素与 [canvas API](/zh-CN/docs/Web/API/Canvas_API) 和 [WebGL API](/zh-CN/docs/Web/API/WebGL_API)一起用来绘制图形和动画。
- 所有动画相关元素的 {{domxref("SVGAnimationElement")}} 接口，包括 {{domxref("SVGAnimateElement")}}、{{domxref("SVGSetElement")}}、{{domxref("SVGAnimateColorElement")}}、{{domxref("SVGAnimateMotionElement")}} 以及 {{domxref("SVGAnimateTransformElement")}}。
