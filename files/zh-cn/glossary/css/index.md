---
title: CSS
slug: Glossary/CSS
---

{{GlossarySidebar}}

**CSS** （Cascading Style Sheets，层叠样式表）是用来控制网页在浏览器中的显示外观的声明式语言。浏览器会根据 CSS 的样式定义将其选定的元素显示为恰当的形式。一条 CSS 的样式定义包括属性和属性值，它们共同决定网页的外观。

CSS 与 {{Glossary("HTML")}} 和 {{Glossary("JavaScript")}} 并称 Web 三大核心技术。一般用它来定义 {{Glossary("Element","HTML 元素")}} 的样式，但它也能用于其他标记语言，如 {{Glossary("SVG")}} 和 {{Glossary("XML")}}。

一条 CSS 规则包含一个 {{Glossary("CSS selector", "选择符")}} 和一组 {{Glossary("CSS Property","属性")}} 定义。下面这个例子用来将页面中的所有 `<p>` 标签显示为黑色背景和黄色文本：

```css
/* p 选择符用来选择页面中的所有 <p> 标签 */
p {
  /* color 属性用来定义文本颜色，这里为黄色 */
  color: yellow;

  /* background-color 属性用来定义元素的背景色，这里为黑色 */
  background-color: black;
}
```

CSS 中的“C”表示“层叠的”，意为多个选择符之间具有特定的优先级。这一点非常重要，因为复杂网站可能会有非常多的 CSS 规则，因此必须规定好这些规则的优先级，以免乱套。

## 参见

- [CSS 教程](/zh-CN/docs/Learn/CSS)
- 维基百科 [CSS](https://zh.wikipedia.org/wiki/CSS) 词条
- [MDN CSS 文档](/zh-CN/docs/Web/CSS)
- [CSS 工作组的当前工作](https://www.w3.org/Style/CSS/current-work)
