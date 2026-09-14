---
title: 插入符
slug: Glossary/Caret
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

**插入符**（有时称为“文本光标”）是屏幕上显示的，用于指示文本输入将插入的位置的指示器。

大多数用户界面使用细长的，会闪烁的垂直线或字符大小的方框来表示插入符，但这可能也会有所不同。文本中的这一点称为**插入点**。单词“插入符”将文本插入点与鼠标光标区分开来。

在 Web 上，插入符用于表示 {{HTMLElement("input")}} 和 {{HTMLElement("textarea")}} 元素中的插入点，以及任何设置了 [`contenteditable`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#contenteditable) 属性，从而允许用户编辑元素的内容的元素。

## 参见

- 维基百科上的[插入符导航](https://en.wikipedia.org/wiki/Caret_navigation)

### 与插入符相关的 CSS

你可以通过将元素的 CSS {{cssxref("caret-color")}} 属性设置为适当的 {{cssxref("&lt;color&gt;")}} 值来设置给定元素可编辑内容的插入符的颜色。

### 可能显示插入符的 HTML 元素

这些元素提供文本输入字段或框，并因此使用插入符。

- [`<input type="text">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/text)
- [`<input type="password">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/password)
- [`<input type="search">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/search)
- [`<input type="date">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/date)、[`<input type="time">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/time) 以及 [`<input type="datetime-local">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="number">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/number)、[`<input type="range">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="email">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/email)、[`<input type="tel">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/tel) 以及 [`<input type="url">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/url)
- {{HTMLElement("textarea")}}
- 任何设置了 [`contenteditable`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#contenteditable) 属性的元素
