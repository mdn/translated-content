---
title: animation
slug: Web/CSS/animation
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **animation** 属性是 {{cssxref("animation-name")}}，{{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}，{{cssxref("animation-delay")}}，{{cssxref("animation-iteration-count")}}，{{cssxref("animation-direction")}}，{{cssxref("animation-fill-mode")}} 和 {{cssxref("animation-play-state")}} 属性的一个简写属性形式。

{{EmbedInteractiveExample("pages/css/animation.html")}}

## 语法

```css
/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | easing-function | delay | name */
animation: 3s linear 1s slidein;

/* two animations */
animation:
  3s linear slidein,
  3s ease-out 5s slideout;
```

`animation` 属性用来指定一组或多组动画，每组之间用逗号相隔。

每组动画规定的属性如下：

- 以下属性出现 0 次或 1 次：

  - {{cssxref("&lt;single-transition-timing-function&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-iteration-count&gt;", "#&lt;single-animation-iteration-count&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-direction&gt;", "#&lt;single-animation-direction&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-fill-mode&gt;", "#&lt;single-animation-fill-mode&gt;")}}
  - {{cssxref("animation", "&lt;single-animation-play-state&gt;", "#&lt;single-animation-play-state&gt;")}}

- animation 的 name 值可能是：none，{{cssxref("&lt;custom-ident&gt;")}}， {{cssxref("&lt;string&gt;")}}
- {{cssxref("&lt;time&gt;")}} 可能会出现 0、1 或 2 次

每个动画定义中的属性值的顺序很重要：可以被解析为 {{cssxref("&lt;time&gt;")}} 的第一个值被分配给{{cssxref("animation-duration")}}，第二个分配给 {{cssxref("animation-delay")}}。

每个动画定义中的值的顺序，对于区分 {{cssxref("animation-name")}} 值与其他关键字也很重要。解析时，对于除 {{cssxref("animation-name")}} 之外的有效的关键字，必须被前面的简写中没有找到值的属性所接受。此外，在序列化时，{{cssxref("animation-name")}} 与以及其他属性值做区分等情况下，必须输出其他属性的默认值。

### Values

- `<single-animation-iteration-count>`
  - : 动画播放的次数。该值必须是{{cssxref("animation-iteration-count")}}可用的值之一。
- `<single-animation-direction>`
  - : 动画播放的方向。该值必须是{{cssxref("animation-direction")}}可用的值之一。
- `<single-animation-fill-mode>`
  - : 确定动画在执行之前和之后这两个阶段应用的样式。该值必须是{{cssxref("animation-fill-mode")}}可用的值之一。
- `<single-animation-play-state>`
  - : 确定动画是否正在播放。该值必须是{{cssxref("animation-play-state")}}中可用的值之一。

### 语法

{{csssyntax("animation")}}

## 示例

### 赛隆人之眼

```html
<div class="view_port">
  <div class="polling_message">Listening for dispatches</div>
  <div class="cylon_eye"></div>
</div>
```

```css
.polling_message {
  color: white;
  float: left;
  margin-right: 2%;
}

.view_port {
  background-color: black;
  height: 25px;
  width: 100%;
  overflow: hidden;
}

.cylon_eye {
  background-color: red;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.9) 25%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.9) 75%
  );
  color: white;
  height: 100%;
  width: 20%;

  -webkit-animation: 4s linear 0s infinite alternate move_eye;
  animation: 4s linear 0s infinite alternate move_eye;
}

@-webkit-keyframes move_eye {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}
@keyframes move_eye {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}
```

{{EmbedLiveSample('赛隆人之眼')}}

更多示例请参阅[使用 CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations#Examples)。

## 潜在的问题

眨眼和闪烁的动画对于有认知问题的人来说是有问题的，比如注意力缺陷多动障碍 (ADHD)。此外，某些动画效果可以触发前庭神经紊乱、癫痫、偏头痛和暗点敏感性。

考虑提供一种暂停或禁用动画的机制，以及使用 [Reduced Motion Media Query](/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion)（简约运动媒体查询），为那些表示不喜欢动画的用户创建一个良好的体验。

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.2_%E2%80%94_Enough_Time_Provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using CSS animations](/zh-CN/docs/CSS/Tutorials/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
