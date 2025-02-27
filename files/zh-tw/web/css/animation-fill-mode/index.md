---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
---

{{CSSRef}}

**`animation-fill-mode`** [CSS](/zh-TW/docs/Web/CSS) 属性指定 CSS 动画应该如何在其执行前后的样式展示情况。

```css
/* Single animation */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Multiple animations */
animation-fill-mode: none, backwards;
animation-fill-mode: both, forwards, none;
```

使用提示 `animation` 来一次设置所有动画属性通常很方便。

## 语法

### 属性值

- `none`
  - : 不执行动画时，动画不会应用任何样式。该元素会使用其 **`keyframes`** 关键动画帧规则来显示动画。这是默认值。
- `forwards`

  - : 动画执行后停留到最后一个关键帧动画的计算值，简单来说执行结束动画会停留到结束时候的状态，不会是动画执行之前的效果。比如一个元素从左往右运动，添加当前属性值 **`forwards`** 元素会停留到动画执行结束后的右边而不是最初的左边。

    当然最后动画停留显示的关键帧会取决于 `"animation-direction"` 和 `"animation-iteration-count"` 这两个属性 运行方向和运行次数:

    | `animation-direction` | `animation-iteration-count` | last keyframe encountered |
    | --------------------- | --------------------------- | ------------------------- |
    | `normal`              | 偶数或奇数值                | `100%` 或 `to`            |
    | `reverse`             | 偶数或奇数值                | `0%` 或 `from`            |
    | `alternate`           | 偶数值                      | `0%` 或 `from`            |
    | `alternate`           | 奇数值                      | `100%` 或 `to`            |
    | `alternate-reverse`   | 偶数值                      | `100%` 或 `to`            |
    | `alternate-reverse`   | 奇数值                      | `0%` 或 `from`            |

- `backwards`

  - : 与上面 **`forwards`** 值效果相反，动画执行后停留到第一个关键帧动画，准确说是没有执行动画之前的初始状态。

    【（the animation will apply the values defined in the first relevant [keyframe](/zh-TW/docs/Web/CSS/@keyframes) as soon as it is applied to the target, and retain this during the `"animation-delay"` period.）原文大概意思是会停留第一个关键帧，并会保留 `"animation-delay"` 延迟属性的所设定周期。】

    会在延迟之后才开始执行关键帧动画，而不是一开始使用第一帧进行停留，具体可以结合 **`both`** 的例子进行尝试。

    第一个相关关键帧会取决于 `"animation-direction"` 方向属性:

    | `animation-direction`            | `first relevant keyframe` |
    | -------------------------------- | ------------------------- |
    | `normal` 或 `alternate`          | `0%` 或 `from`            |
    | `reverse` 或 `alternate-reverse` | `100%` 或 `to`            |

- `both`

  - : 动画将遵循开始和结束后的帧动画进行停留，也就是说会从第一帧开始停留显示，动画执行之后会停留到动画结束时的状态。

    与上面两个值的差别是，如果元素使用 **`forwards`**、**`backwards`** 两个值会在没有添加动画之前的展示状态进行停留，执行动画的时候才会开始执行关键帧，有这么一些细小的差别。

> [!NOTE]
> 当你在一个 `animation-*` 属性上指定多个逗号分隔的值时，它们将被分配给 `"animationname"` 属性中指定的动画，这取决于有多少动画。有关更多信息，请参见[设置多个动画属性值](/zh-TW/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values)。

## Example

You can see the effect of `animation-fill-mode` in the following example. It demonstrates how, for an animation that runs for an infinite time, you can cause it to remain in its final state rather than reverting to the original state (which is the default).

### HTML

```html
<p>Move your mouse over the gray box!</p>
<div class="demo">
  <div class="growsandstays">This grows and stays big.</div>
  <div class="grows">This just grows.</div>
</div>
```

### CSS

```css
.demo {
  border-top: 100px solid #ccc;
  height: 300px;
}

@keyframes grow {
  0% {
    font-size: 0;
  }
  100% {
    font-size: 40px;
  }
}

.demo:hover .grows {
  animation-name: grow;
  animation-duration: 3s;
}

.demo:hover .growsandstays {
  animation-name: grow;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}
```

查看 [CSS animations](/zh-TW/docs/Web/CSS/CSS_animations/Using_CSS_animations) 更多有關的例子

## 相關鏈接

- [Using CSS animations](/zh-TW/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
