---
title: animation-name
slug: Web/CSS/animation-name
---

{{CSSRef}}

**`animation-name`** [CSS](/zh-CN/docs/Web/CSS) 属性指定一个或多个 {{cssxref("@keyframes")}} at-rule 的名称，这些 at-rule 描述了要应用于元素的动画。多个 `@keyframes` at-rule 以逗号分隔的名称列表的形式指定。如果指定的名称不匹配任何 `@keyframes` at-rule，则不会对任何属性进行动画处理。

{{EmbedInteractiveExample("pages/css/animation-name.html")}}

使用简写属性 {{cssxref("animation")}} 一次性设置所有动画属性通常很方便。

## 语法

```css
/* 单个动画 */
animation-name: none;
animation-name: test_05;
animation-name: -specific;
animation-name: sliding-vertically;

/* 多个动画 */
animation-name: test1, animation4;
animation-name:
  none,
  -moz-specific,
  sliding;

/* 全局值 */
animation-name: inherit;
animation-name: initial;
animation-name: revert;
animation-name: revert-layer;
animation-name: unset;
```

### 取值

- `none`
  - : 一个特殊的关键字，表示没有关键帧。它可用于禁用动画，而不改变其他标识符的顺序，或禁用级联的动画。
- {{cssxref("&lt;custom-ident&gt;")}}
  - : 一个标识动画的名称。该标识符由区分大小写的字母 `a` 到 `z`、数字 `0` 到 `9`、下划线（`_`）和/或破折号（`-`）组成。第一个非破折号字符必须是一个字母。此外，在标识符开头不能有两个破折号。此外，标识符不能为 `none`、`unset`、`initial` 或 `inherit`。

> **备注：** 当你在 `animation-*` 属性上指定多个以逗号分隔的值时，它们将根据值的数量以不同的方式分配给 {{cssxref("animation-name")}} 属性中指定的动画。有关更多信息，请参阅[设置多个动画属性值](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values)。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 为动画命名

此动画的 `animation-name` 为 `rotate`。

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

#### 结果

将鼠标悬停在矩形上来播放动画。

{{EmbedLiveSample("为动画命名","100%","250")}}

参见 [CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)以获取示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 动画](/zh-CN/docs/CSS/Tutorials/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- 其他相关的动画属性：{{cssxref("animation")}}、{{cssxref("animation-composition")}}、{{cssxref("animation-delay")}}、{{cssxref("animation-direction")}}、{{cssxref("animation-duration")}}、{{cssxref("animation-fill-mode")}}、{{cssxref("animation-iteration-count")}}、{{cssxref("animation-play-state")}}、{{cssxref("animation-timeline")}}、{{cssxref("animation-timing-function")}}
