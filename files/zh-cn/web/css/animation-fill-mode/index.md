---
title: animation-fill-mode
slug: Web/CSS/animation-fill-mode
---

{{CSSRef}}

[CSS](/zh-CN/CSS) 属性 **`animation-fill-mode`** 设置 CSS 动画在执行之前和之后如何将样式应用于其目标。

{{EmbedInteractiveExample("pages/css/animation-fill-mode.html")}}

使用简写属性 {{cssxref("animation")}} 一次性设置所有动画属性通常很方便。

## 语法

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

### 值

- `none`
  - : 当动画未执行时，动画将不会将任何样式应用于目标，而是已经赋予给该元素的 CSS 规则来显示该元素。这是默认值。
- `forwards`

  - : 目标将保留由执行期间遇到的最后一个[关键帧](/zh-CN/docs/CSS/@keyframes)计算值。最后一个关键帧取决于{{cssxref("animation-direction")}}和{{cssxref("animation-iteration-count")}}的值：

    | `animation-direction` | `animation-iteration-count` | last keyframe encountered |
    | --------------------- | --------------------------- | ------------------------- |
    | `normal`              | even or odd                 | `100%` or `to`            |
    | `reverse`             | even or odd                 | `0%` or `from`            |
    | `alternate`           | even                        | `0%` or `from`            |
    | `alternate`           | odd                         | `100%` or `to`            |
    | `alternate-reverse`   | even                        | `100%` or `to`            |
    | `alternate-reverse`   | odd                         | `0%` or `from`            |

- `backwards`

  - : 动画将在应用于目标时立即应用第一个关键帧中定义的值，并在{{cssxref("animation-delay")}}期间保留此值。第一个关键帧取决于{{cssxref("animation-direction")}}的值：

    | `animation-direction`            | first relevant keyframe |
    | -------------------------------- | ----------------------- |
    | `normal` or `alternate`          | `0%` or `from`          |
    | `reverse` or `alternate-reverse` | `100%` or `to`          |

- `both`
  - : 动画将遵循`forwards`和`backwards`的规则，从而在两个方向上扩展动画属性。

> **备注：** 当您在`animation-*`属性上指定多个以逗号分隔的值时，它们将根据值的数量以不同的方式分配给 {{cssxref("animation-name")}} 属性中指定的动画。有关更多信息，请参阅[设置多个动画属性值](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations#Setting_multiple_animation_property_values)。

### 正式语法

{{csssyntax}}

## 示例

您可以在以下示例中看到 `animation-fill-mode` 的效果。它演示了如何对于运行无限时间的动画，可以使其保持最终状态而不是恢复到原始状态（这是默认状态）。

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

{{EmbedLiveSample('示例',700,300)}}

更多示例请查看 [CSS 动画](/zh-CN/CSS/CSS_animations) 。

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using CSS animations](/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
