---
title: CSS 组合器
short-title: 组合器
slug: Web/CSS/Reference/Selectors/Combinators
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

CSS **组合器**用于定义[选择器](/zh-CN/docs/Web/CSS/Reference/Selectors)之间的关系。它们允许你根据元素在文档树中与其他元素的关系来选择元素。

例如，要仅为直接位于 {{HTMLElement("div")}} 子元素的段落元素设置样式，可使用子元素组合器（`>`）：

```css
/* 设置 <div> 直接子元素 <p> 元素的顶部外边距 */
div > p {
  margin-top: 0;
}
```

## 语法

```css
/* 组合选择器以表达关系 */
selector1 combinator selector2 {
  property: value;
}
```

## 组合器索引

- [子元素组合器（`>`）](/zh-CN/docs/Web/CSS/Reference/Selectors/Child_combinator)
- [列组合器（`||`）](/zh-CN/docs/Web/CSS/Reference/Selectors/Column_combinator)
- [后代组合器（" "）](/zh-CN/docs/Web/CSS/Reference/Selectors/Descendant_combinator)
- [接续兄弟组合器（`+`）](/zh-CN/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)
- [后续兄弟组合器（`~`）](/zh-CN/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)

## 参见

- [CSS 选择器](/zh-CN/docs/Web/CSS/Guides/Selectors)模块
- [选择器与组合器](/zh-CN/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
