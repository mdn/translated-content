---
title: CSS 选择器
short-title: 选择器
slug: Web/CSS/Reference/Selectors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS 选择器**是 [CSS 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/Introduction#css_规则集)中定位并选取特定元素以应用样式的模式。

例如，为了给段落添加样式，需要使用[类型选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Type_selectors) `p` 以选择所有 {{HTMLElement("p")}} 元素并为它们应用样式：

```css
/* 对所有 <p> 元素设置字体大小 */
p {
  font-size: 12px;
  color: rebeccapurple;
}
```

## 语法

```css
/* 选择元素并应用样式 */
selector {
  property: value;
}
```

## 选择器索引

- [& 嵌套选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [属性选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [类选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Class_selectors)
- [ID 选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/ID_selectors)
- [伪类选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [伪元素选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [类型选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [通用选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Universal_selectors)

## 规范

{{Specifications}}

请查阅[伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes#规范)和[伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements#规范)页面，查看其各自的规范表。

## 参见

- [CSS 选择器](/zh-CN/docs/Web/CSS/Guides/Selectors)模块
- [CSS 选择器结构](/zh-CN/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [CSS 组合器](/zh-CN/docs/Web/CSS/Reference/Selectors/Combinators)
- [选择器列表](/zh-CN/docs/Web/CSS/Reference/Selectors/Selector_list)
- [选择器与组合器](/zh-CN/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [CSS 伪类](/zh-CN/docs/Web/CSS/Guides/Pseudo-elements)模块
- [CSS 嵌套](/zh-CN/docs/Web/CSS/Guides/Nesting)模块
- [优先级](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity)
