---
title: initial
slug: Web/CSS/initial
---

{{CSSRef}}

CSS 关键字 **`initial`** 将属性的初始（或默认）值应用于元素。不应将初始值与浏览器样式表指定的值混淆。它可以应用于任何 CSS 属性。这包括 CSS 简写 {{cssxref("all")}}，initial 可用于将所有 CSS 属性恢复到其初始状态。

> [!NOTE]
> 在继承的属性上，初始值可能是意外的。你应该考虑使用 {{cssxref("inherit")}}, {{cssxref("unset")}}，或{{cssxref("revert")}} 关键字代替。

## 示例

#### HTML

```html
<p>
  <span>This text is red.</span>
  <em>This text is in the initial color (typically black).</em>
  <span>This is red again.</span>
</p>
```

#### CSS

```css
p {
  color: red;
}

em {
  color: initial;
}
```

{{EmbedLiveSample('示例')}}

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Use {{cssxref("unset")}} to set a property to its inherited value if it inherits, or to its initial value if not.
- Use {{cssxref("revert")}} to reset a property to the value established by the user-agent stylesheet (or by user styles, if any exist).
- Use {{cssxref("inherit")}} to make an element's property the same as its parent.
- The {{cssxref("all")}} property lets you reset all properties to their initial, inherited, reverted, or unset state at once.
