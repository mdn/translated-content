---
title: transition-property
slug: Web/CSS/transition-property
---

{{CSSRef}}

**`transition-property`** 指定应用过渡属性的名称。

{{EmbedInteractiveExample("pages/css/transition-property.html")}}

如果指定简写属性（比如 {{cssxref("background")}}），那么其完整版中所有可以动画的属性都会被应用过渡。

## 语法

```css
/* Keyword values */
transition-property: none;
transition-property: all;
transition-property: test_05;
transition-property: -specific;
transition-property: sliding-vertically;

transition-property: test1;
transition-property: test1, animation4;
transition-property: all, height, all;
transition-property:
  all,
  -moz-specific,
  sliding;

/* Global values */
transition-property: inherit;
transition-property: initial;
transition-property: unset;
```

### 取值

- `none`
  - : 没有过渡动画。
- `all`
  - : 所有可被动画的属性都表现出过渡动画。
- `IDENT`
  - : 属性名称。由小写字母 `a` 到 `z`，数字 `0` 到 `9`，下划线（`_`）和破折号（`-`）。第一个非破折号字符不能是数字。同时，不能以两个破折号开头。

## 形式定义

{{CSSInfo}}

### 形式语法

{{csssyntax}}

## 示例

在 [CSS 过渡](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)中有几个示例可以参考。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 过渡](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{domxref("TransitionEvent")}}
