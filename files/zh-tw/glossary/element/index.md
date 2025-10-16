---
title: 元素
slug: Glossary/Element
---

元素（element）是網頁結構的一部分。在 XML 與 HTML 中，元素可能包含資料清單、文字、圖片，或是也可能不包含東西。典型的元素會包含一個有些許屬性（attributes）的開始標籤（opening tag）、被包覆住的文字內容，以及一個結束標籤（closing tag）。
![Example: in <p class="nice">Hello world!</p>, '<p class="nice">' is an opening tag, 'class="nice"' is an attribute and its value, 'Hello world!' is enclosed text content, and '</p>' is a closing tag.](anatomy-of-an-html-element.png)

元素與標籤是不同的概念。在原始碼中，標籤用來標注元素開始與結束，而元素其實是 {{Glossary("DOM")}} 的一部分。DOM，指文件物件模型（document object model），會由 {{glossary("browser")}} 將 DOM 呈現為網頁。

## 瞭解更多

- The {{domxref("Element")}} interface, representing an element in the DOM.
- [More details about elements.](/zh-TW/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
- [Web_Components/Custom_Elements](/zh-TW/docs/Web/API/Web_components/Using_custom_elements)
