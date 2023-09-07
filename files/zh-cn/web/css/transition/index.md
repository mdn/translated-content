---
title: transition
slug: Web/CSS/transition
---

{{CSSRef}}

**`transition`** [CSS](/zh-CN/docs/Web/CSS) 属性是 {{ cssxref("transition-property") }}、{{ cssxref("transition-duration") }}、{{ cssxref("transition-timing-function") }} 和 {{ cssxref("transition-delay") }} 的一个[简写属性](/zh-CN/docs/CSS/Shorthand_properties)。

{{EmbedInteractiveExample("pages/css/transition.html")}}

过渡可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。比如在不同的伪元素之间切换，像是 {{cssxref(":hover")}}，{{cssxref(":active")}} 或者通过 JavaScript 实现的状态变化。

## 语法

```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | timing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | timing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition:
  margin-right 4s,
  color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;

/* Global values */
transition: inherit;
transition: initial;
transition: unset;
```

`transition`属性可以被指定为一个或多个 CSS 属性的过渡效果，多个属性之间用逗号进行分隔。

每个单属性转换都描述了应该应用于单个属性的转换（或特殊值`all`和`none`）。这包括：

- 零或一个值，表示转换应适用的属性。这可能是以下任何一种：

  - 关键字`none`
  - 关键字`all`
  - 命名 CSS 属性的 {{cssxref("&lt;custom-ident&gt;")}} 。

- 零或一个 {{cssxref("&lt;single-transition-timing-function&gt;")}} 值表示要使用的过渡函数
- 零，一或两个 {{cssxref("&lt;time&gt;")}} 值。可以解析为时间的第一个值被分配给 {{cssxref("transition-duration")}}，并且可以解析为时间的第二个值被分配给{{cssxref("transition-delay")}}。

请查看“[如何处理](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#When_property_value_lists_are_of_different_lengths)”以了解当`transition`属性的值个数超过可以接收的值的个数时该如何处理。简而言之，当`transition`属性的值个数超过可以接收的值的个数时，多余的值都会被忽略掉，不再进行解析。

### 标准语法

{{csssyntax}}

## 示例

“[使用 CSS 过渡](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)”一文中还包含了几个 CSS 过渡示例。

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using CSS transitions](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}
