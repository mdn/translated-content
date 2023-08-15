---
title: animation-direction
slug: Web/CSS/animation-direction
---

{{CSSRef}}

**`animation-direction`** [CSS](/zh-CN/docs/Web/CSS) 属性设置动画是应正向播放、反向播放还是在正向和反向之间交替播放。

{{EmbedInteractiveExample("pages/css/animation-direction.html")}}

使用 {{cssxref("animation")}} 的简写属性通常非常方便，可以一次性设置所有动画属性。

## 语法

```css
/* 单个动画 */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* 多个动画 */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* 全局值 */
animation-direction: inherit;
animation-direction: initial;
animation-direction: revert;
animation-direction: revert-layer;
animation-direction: unset;
```

### 值

- `normal`
  - : 动画在每个循环中*正向*播放。换句话说，每次动画循环时，动画将重置为起始状态并重新开始。这是默认值。
- `reverse`
  - : 动画在每个循环中*反向*播放。换句话说，每次动画循环时，动画将重置为结束状态并重新开始。动画步骤将反向执行，并且时间函数也将被反转。例如，`ease-in` 时间函数变为 `ease-out`。
- `alternate`
  - : 动画在每个循环中正反交替播放，第一次迭代是*正向*播放。确定循环是奇数还是偶数的计数从 1 开始。
- `alternate-reverse`
  - : 动画在每个循环中正反交替播放，第一次迭代是*反向*播放。确定循环是奇数还是偶数的计数从 1 开始。

> **备注：** 当你在 `animation-*` 属性上指定多个逗号分隔的值时，它们将按照 {{cssxref("animation-name")}} 出现的顺序应用于动画。对于动画数量和 `animation-*` 属性值不匹配的情况，请参见[设置多个动画属性值](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values)。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 反转动画方向

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
  animation-direction: reverse;
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

{{EmbedLiveSample("反转动画方向","100%","250")}}

参见 [CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)以获取示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 动画](/zh-CN/docs/CSS/Tutorials/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- 其他相关的动画属性：{{cssxref("animation")}}、{{cssxref("animation-composition")}}、{{cssxref("animation-delay")}}、{{cssxref("animation-duration")}}、{{cssxref("animation-fill-mode")}}、{{cssxref("animation-iteration-count")}}、{{cssxref("animation-name")}}、{{cssxref("animation-play-state")}}、{{cssxref("animation-timeline")}}、{{cssxref("animation-timing-function")}}
