---
title: animation-iteration-count
slug: Web/CSS/animation-iteration-count
---

{{CSSRef}}

**`animation-iteration-count`** [CSS](/zh-CN/CSS) 属性设置动画序列在停止前应播放的次数

{{EmbedInteractiveExample("pages/css/animation-iteration-count.html")}}

使用动画的简写属性 {{cssxref("animation")}} 可以一次性设置所有动画属性，这通常非常方便。

## 语法

```css
/* 关键字值 */
animation-iteration-count: infinite;

/* 数字值 */
animation-iteration-count: 3;
animation-iteration-count: 2.4;

/* 多个值 */
animation-iteration-count: 2, 0, infinite;

/* 全局值 */
animation-iteration-count: inherit;
animation-iteration-count: initial;
animation-iteration-count: revert;
animation-iteration-count: revert-layer;
animation-iteration-count: unset;
```

`animation-iteration-count` 属性可以指定一个或多个以逗号分隔的值。

### 值

- `infinite`
  - : 无限循环播放动画。
- `{{cssxref("&lt;number&gt;")}}`
  - : 动画重复的次数；默认为 `1`。你可以指定非整数值以播放动画循环的一部分：例如，`0.5` 将播放动画循环的一半。负值是无效的。

> **备注：** 当你在 `animation-*` 属性上指定多个逗号分隔的值时，它们将按照 {{cssxref("animation-name")}} 出现的顺序应用于动画。对于动画数量和 `animation-*` 属性值不匹配的情况，请参见[设置多个动画属性值](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations#设置多个动画属性值)。

## 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

### 设置迭代次数

该动画将会播放 10 次。

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
  animation-iteration-count: 10;
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

{{EmbedLiveSample("设置迭代次数","100%","250")}}

参见 [CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- 其他相关的动画属性：{{cssxref("animation")}}、{{cssxref("animation-composition")}}、{{cssxref("animation-delay")}}、{{cssxref("animation-direction")}}、{{cssxref("animation-duration")}}、{{cssxref("animation-fill-mode")}}、{{cssxref("animation-iteration-count")}}、{{cssxref("animation-name")}}、{{cssxref("animation-timeline")}}、{{cssxref("animation-timing-function")}}
