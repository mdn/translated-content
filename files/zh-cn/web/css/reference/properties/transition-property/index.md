---
title: transition-property
slug: Web/CSS/Reference/Properties/transition-property
---

**`transition-property`** 指定应用过渡属性的名称。

{{InteractiveExample("CSS Demo: transition-property")}}

```css interactive-example-choice
transition-property: margin-right;
```

```css interactive-example-choice
transition-property: margin-right, color;
```

```css interactive-example-choice
transition-property: all;
```

```css interactive-example-choice
transition-property: none;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Hover to see<br />the transition.</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #e4f0f5;
  color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #909;
  color: #fff;
  margin-right: 40%;
}
```

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

在 [CSS 过渡](/zh-CN/docs/Web/CSS/Guides/Transitions/Using)中有几个示例可以参考。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 过渡](/zh-CN/docs/Web/CSS/Guides/Transitions/Using)
- {{domxref("TransitionEvent")}}
