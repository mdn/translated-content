---
title: animation-delay
slug: Web/CSS/animation-delay
---

{{CSSRef}}

**`animation-delay`** [CSS](/zh-CN/docs/Web/CSS) 属性指定从应用动画到元素开始执行动画之前等待的时间量。动画可以稍后开始、立即从开头开始或立即开始并在动画中途播放。

{{EmbedInteractiveExample("pages/css/animation-delay.html")}}

使用 {{cssxref("animation")}} 的简写属性通常非常方便，可以一次性设置所有动画属性。

## 语法

```css
/* 单个动画 */
animation-delay: 3s;
animation-delay: 0s;
animation-delay: -1500ms;

/* 多个动画 */
animation-delay: 2.1s, 480ms;

/* 全局值 */
animation-delay: inherit;
animation-delay: initial;
animation-delay: revert;
animation-delay: revert-layer;
animation-delay: unset;
```

### 值

- {{cssxref("&lt;time&gt;")}}

  - : 动画应该开始的时间偏移量，从应用动画到元素的时刻开始计算。可以用秒（`s`）或毫秒（`ms`）指定。单位是必需的。

    正值表示动画应在指定的时间量过去后开始。默认值为 `0s`，表示动画应立即开始。

    负值会导致动画立即开始，但是从动画循环的某个时间点开始。例如，如果你将 `-1s` 作为动画延迟时间，则动画将立即开始，但是将在动画序列的第 1 秒开始。如果你为动画延迟指定负值，但起始值是隐含的，则起始值取自应用动画到元素的时刻。

> **备注：** 当你在 `animation-*` 属性上指定多个逗号分隔的值时，它们将按照 {{cssxref("animation-name")}} 出现的顺序应用于动画。对于动画数量和 `animation-*` 属性值不匹配的情况，请参见[设置多个动画属性值](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values)。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置动画延迟

这个动画有 2 秒的延迟。

#### HTML

```html
<div class="box"></div>
```

#### CSS

```css
.box {
  background-color: rebeccapurple;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.box:hover {
  animation-name: rotate;
  animation-duration: 0.7s;
  animation-delay: 2s;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

#### 结果

将鼠标悬停在矩形上来播放动画。

{{EmbedLiveSample("设置动画延迟","100%","250")}}

参见 [CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)以获取示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 动画](/zh-CN/docs/CSS/Tutorials/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- 其他相关的动画属性：{{cssxref("animation")}}、{{cssxref("animation-composition")}}、{{cssxref("animation-direction")}}、{{cssxref("animation-duration")}}、{{cssxref("animation-fill-mode")}}、{{cssxref("animation-iteration-count")}}、{{cssxref("animation-name")}}、{{cssxref("animation-play-state")}}、{{cssxref("animation-timeline")}}、{{cssxref("animation-timing-function")}}
