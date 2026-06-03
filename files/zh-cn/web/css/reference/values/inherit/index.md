---
title: inherit
slug: Web/CSS/Reference/Values/inherit
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`inherit`** 关键字使得元素获取其父元素的[计算值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#计算值)。它可以应用于任何 CSS 属性，包括 CSS 简写 {{cssxref("all")}}。

对于[继承属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Inheritance#继承属性)，该关键字只是增强了属性的默认行为，通常只在覆盖原有的值的时候使用。

> [!NOTE]
> 继承始终来自文档树中的父元素，即使父元素不是包含区块。

## 示例

### 从规则中排除所选元素

```css
/* 设置二级标题的颜色为绿色 */
h2 {
  color: green;
}

/* 保留 sidebar 内二级标题元素的样式，使其继承父元素的颜色 */
#sidebar h2 {
  color: inherit;
}
```

在这个例子中，sidebar 中的 `h2` 元素可能有不同的颜色。如果某个 `h2` 元素的 `div` 匹配下面的规则：

```css
div#current {
  color: blue;
}
```

那它的颜色会变成蓝色。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [继承](/zh-CN/docs/Web/CSS/Guides/Cascade/Inheritance)
- 使用 {{cssxref("initial")}} 将属性设置为其初始值。
- 使用 {{cssxref("revert")}} 将属性重置为用户代理样式表指定的值（或用户样式，如果存在）。
- 使用 {{cssxref("revert-layer")}} 将属性重置为之前层叠层中设定的值。
- 使用 {{cssxref("unset")}} 将属性设置为：若可继承则使用继承值，否则使用初始值。
- {{cssxref("all")}} 属性允许你一次将所有属性重置为其初始、继承、恢复或未设置状态。
