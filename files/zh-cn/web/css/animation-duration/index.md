---
title: animation-duration
slug: Web/CSS/animation-duration
---

{{CSSRef}}

**`animation-duration`** [CSS](/zh-CN/docs/CSS) 属性设置动画完成一个动画周期所需的时间。

{{EmbedInteractiveExample("pages/css/animation-duration.html")}}

使用动画的简写属性 {{cssxref("animation")}} 可以一次性设置所有动画属性，这通常非常方便。

## 语法

```css
/* 单个动画 */
animation-duration: 6s;
animation-duration: 120ms;

/* 多个动画 */
animation-duration: 1.64s, 15.22s;
animation-duration: 10s, 35s, 230ms;

/* 全局值 */
animation-duration: inherit;
animation-duration: initial;
animation-duration: revert;
animation-duration: revert-layer;
animation-duration: unset;
```

### 值

- `{{cssxref("&lt;time&gt;")}}`

  - : 动画完成一个周期所需的时间。可以用秒（`s`）或毫秒（`ms`）指定。值必须是正数或零，单位是必需的。

    如果未提供值，则使用默认值 `0s`，此时动画仍会执行（会触发 [`animationStart`](/zh-CN/docs/Web/API/Element/animationstart_event) 和 [`animationEnd`](/zh-CN/docs/Web/API/Element/animationend_event) 事件）。如果 `animation-duration` 为 `0s` 时，动画是否可见取决于 [`animation-fill-mode`](/zh-CN/docs/Web/CSS/animation-fill-mode) 的值，如下所述：

    - 如果 `animation-fill-mode` 设置为 `backwards` 或者 `both`，则在 [`animation-delay`](/zh-CN/docs/Web/CSS/animation-delay) 倒计时期间将显示由 `animation-direction` 定义的动画的第一帧。
    - 如果 `animation-fill-mode` 设置为 `forwards` 或者 `both`，在 `animation-delay` 结束后，将显示由 `animation-direction` 定义的动画的最后一帧。
    - 如果 `animation-fill-mode` 设置为 `none`，动画将不会有任何的视觉效果。

> **备注：** 负值是无效的，会导致声明被忽略。一些早期的、有前缀的实现可能将其视为与 `0s` 相同。

> **备注：** 当你在 `animation-*` 属性上指定多个逗号分隔的值时，它们将按照 {{cssxref("animation-name")}} 出现的顺序应用于动画。对于动画数量和 `animation-*` 属性值不匹配的情况，请参见[设置多个动画属性值](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values)。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置动画持续时间

此动画有 0.7 秒的动画持续时间。

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

将鼠标悬停在矩形上来播放动画。

{{EmbedLiveSample("设置动画持续时间","100%","250")}}

参见 [CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)以获取示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 动画](/zh-CN/docs/CSS/Tutorials/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- 其他相关的动画属性：{{cssxref("animation")}}、{{cssxref("animation-composition")}}、{{cssxref("animation-delay")}}、{{cssxref("animation-direction")}}、{{cssxref("animation-fill-mode")}}、{{cssxref("animation-iteration-count")}}、{{cssxref("animation-name")}}、{{cssxref("animation-play-state")}}、{{cssxref("animation-timeline")}}、{{cssxref("animation-timing-function")}}
