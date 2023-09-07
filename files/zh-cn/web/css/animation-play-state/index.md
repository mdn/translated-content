---
title: animation-play-state
slug: Web/CSS/animation-play-state
---

{{CSSRef}}

**`animation-play-state`** [CSS](/zh-CN/docs/CSS) 属性设置动画是运行还是暂停。

{{EmbedInteractiveExample("pages/css/animation-play-state.html")}}

恢复暂停的动画将从暂停时停止的位置开始播放，而不是从动画序列的开头重新开始播放。

## 语法

```css
/* 单个动画 */
animation-play-state: running;
animation-play-state: paused;

/* 多个动画 */
animation-play-state: paused, running, running;

/* 全局值 */
animation-play-state: inherit;
animation-play-state: initial;
animation-play-state: revert;
animation-play-state: revert-layer;
animation-play-state: unset;
```

### 值

- `running`
  - : 当前**动画**正在**运行**。
- `paused`
  - : 当前**动画**已被**停止**。

> **备注：** 当你在 `animation-*` 属性上指定多个逗号分隔的值时，它们将按照 {{cssxref("animation-name")}} 出现的顺序应用于动画。对于动画数量和 `animation-*` 属性值不匹配的情况，请参见[设置多个动画属性值](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values)。

## 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

### 暂停动画

这个动画被暂停了，但是当你将鼠标悬停在上面时会继续运行。

#### HTML

```html
<div class="box"></div>
```

```css
.box {
  background-color: rebeccapurple;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  animation-name: rotate;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-play-state: paused;
}

.box:hover {
  animation-play-state: running;
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

{{EmbedLiveSample("暂停动画","100%","250")}}

参见 [CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)以获取示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- 其他相关的动画属性：{{cssxref("animation")}}、{{cssxref("animation-composition")}}、{{cssxref("animation-delay")}}、{{cssxref("animation-direction")}}、{{cssxref("animation-duration")}}、{{cssxref("animation-fill-mode")}}、{{cssxref("animation-iteration-count")}}、{{cssxref("animation-name")}}、{{cssxref("animation-timeline")}}、{{cssxref("animation-timing-function")}}
