---
title: inherit
slug: Web/CSS/inherit
---

{{CSSRef}}

**`inherit`** 关键字使得元素获取其父元素的[计算值](/zh-CN/docs/Web/CSS/computed_value)。它可以应用于任何 CSS 属性，包括 CSS 简写 {{cssxref("all")}}。

对于[继承](/zh-CN/docs/Web/CSS/inheritance#inherited_properties)属性，inherit 关键字只是增强了属性的默认行为，通常只在覆盖原有的值的时候使用。

继承始终来自文档树中的父元素，即使父元素不是包含块。

## 示例

```css
/* 设置二级标题的颜色为绿色 */
h2 {
  color: green;
}

/* ...but leave those in the sidebar alone so they use their parent's color */
#sidebar h2 {
  color: inherit;
}
```

在下面这个例子中，如果 sidebar 中`h2`元素的 div 匹配下面的规则的话，颜色会变成蓝色。

```css
div#current {
  color: blue;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Inheritance](/zh-CN/docs/CSS/inheritance)
- Use {{cssxref("initial")}} to set a property to its initial value.
- Use {{cssxref("unset")}} to set a property to its inherited value if it inherits, or to its initial value if not.
- Use {{cssxref("revert")}} to reset a property to the value established by the user-agent stylesheet (or by user styles, if any exist).
- The {{cssxref("all")}} property lets you reset all properties to their initial, inherited, reverted, or unset state at once.
