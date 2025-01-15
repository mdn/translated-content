---
title: 元素
slug: Glossary/Element
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**元素**是网页的一部分。在 {{glossary("XML")}} 和 {{glossary("HTML")}} 中，一个元素可以包含一个数据项，或是一块文本，或是一张照片，亦或是什么也不包含。一个典型的元素包括一个具有一些{{glossary("attribute", "属性")}}的开始标签，中间的文本内容和一个结束标签。

![例子：在 <p class="nice">Hello world!</p> 中，“<p class="nice">”是开始标签，“class="nice"”是一个属性及其赋值，“Hello world!”是所包含的文本内容，“</p>”是结束标签。](anatomy-of-an-html-element.png)

元素和{{glossary("tag", "标签")}}*不是*同一种概念。源代码中的标签用来标识元素的开始或结束，而元素是文档对象模型（{{Glossary("DOM")}}）——一个会在{{glossary("browser", "浏览器")}}中显示为页面——的一部分。

## 参见

- [开始学习 HTML](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
- [自定义元素](/zh-CN/docs/Web/API/Web_components/Using_custom_elements)
- {{domxref("Element")}} 接口，在 DOM 中表示一个元素
