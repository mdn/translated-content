---
title: CSS
slug: Glossary/CSS
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

**CSS** （Cascading Style Sheets，层叠样式表）是用来控制网页在{{glossary("browser", "浏览器")}}中的显示外观的声明式语言。

浏览器会根据 CSS 的样式定义将其选定的元素显示为恰当的形式。一条 CSS 的样式定义包括属性和属性值，它们共同决定网页的外观。

CSS 与 {{Glossary("HTML")}} 和 {{Glossary("JavaScript")}} 并称 Web 三大核心技术。一般用它来定义 {{Glossary("Element","HTML 元素")}} 的样式，但它也能用于其他标记语言，如 {{Glossary("SVG")}} 和 {{Glossary("XML")}}。

一条 CSS 规则由包含一组与 {{Glossary("CSS selector", "选择符")}} 关联的 {{Glossary("CSS Property","属性")}} 定义。下面这个例子用来将页面中的所有 HTML 段落标签显示为黑色背景和黄色文本：

```css
/* p 选择符用来指示页面中的所有 <p> 标签都会被规则所影响 */
p {
  /* color 属性用来定义文本颜色，这里为黄色 */
  color: yellow;

  /* background-color 属性用来定义元素的背景色，这里为黑色 */
  background-color: black;
}
```

CSS 中的第一个“C”（Cascading）表示“层叠的”，意为多个选择符之间具有特定的优先级。这一点非常重要，因为复杂网站可能会有非常多的 CSS 规则，因此必须规定好这些规则的优先级，以免乱套。

## 参见

- [CSS 教程](/zh-CN/docs/Learn/CSS)
- [MDN CSS 文档](/zh-CN/docs/Web/CSS)
- 维基百科上的 [CSS](https://zh.wikipedia.org/wiki/CSS)
- [CSS 工作组的当前工作](https://www.w3.org/Style/CSS/current-work)
