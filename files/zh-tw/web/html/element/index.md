---
title: HTML 元素
slug: Web/HTML/Element
---

{{HTMLSidebar("Elements")}}

本頁列出了所有 {{Glossary("HTML")}} 元素（{{Glossary("Element")}}），他們可以透過標籤（{{Glossary("Tags", "tags")}}）建立。這些元素會以功能來分組，讓你更容易尋找。在本頁及每一個元素的頁面的側邊欄都提供了以英文字母排序的所有元素清單。

> **備註：** 更多關於基本 HTML 元素及屬性（attribute）可參考[HTML 介紹一文中的元素小節](/zh-TW/docs/Web/Guide/HTML/Introduction#Elements_—_the_basic_building_blocks)。

## 主要根元素

{{HTMLRefTable("HTML Root Element")}}

## 文件詮釋資料（metadata）

Metadata 是一些外部資料，不會被使用者看到。Metadata 記錄了頁面的訊息給其他軟體利用，像是瀏覽器會讀取 metadata 去決定這個頁面應該要使用哪種編碼顯示以避免亂碼。另外，有時候一個網頁的原始碼會被分散的檔案中，所以一個網頁的 Metameta 可以被定義在別份檔案中。

{{HTMLRefTable("HTML Document Metadata")}}

## Sectioning root

{{HTMLRefTable("Sectioning Root Element")}}

## Content sectioning

Content sectioning elements allow you to organize the document content into logical pieces. Use the sectioning elements to create a broad outline for your page content, including header and footer navigation, and heading elements to identify sections of content.

{{HTMLRefTable("HTML Sections")}}

## 文字內容

使用 HTML 文字內容元素，來組織放在 {{HTMLElement("body")}} 與 `</body>` 之間的區塊或章節內容。這對 {{Glossary("Accessibility")}} 與 {{Glossary("SEO")}} 至關重要。這些元素確立了內容的目的或結構。

{{HTMLRefTable("HTML Grouping Content")}}

## 行內文字語義化

Use the HTML inline text semantic to define the meaning, structure, or style of a word, line, or any arbitrary piece of text.

{{HTMLRefTable("HTML Text-Level Semantics")}}

## 圖片與多媒體

HTML supports various multimedia resources such as images, audio, and video.

{{HTMLRefTable("multimedia")}}

## 嵌入內容

In addition to regular multimedia content, HTML can include a variety of other content, even if it's not always easy to interact with.

{{HTMLRefTable({"include":["HTML embedded content"], "exclude":["multimedia"]})}}

## 腳本

In order to create dynamic content and Web applications, HTML supports the use of scripting languages, most prominently JavaScript. Certain elements support this capability.

{{HTMLRefTable("HTML Scripting")}}

## Demarcating edits

These elements let you provide indications that specific parts of the text have been altered.

{{HTMLRefTable("HTML Edits")}}

## 表格

The elements here are used to create and handle tabular data.

{{HTMLRefTable("HTML tabular data")}}

## 表單

HTML provides a number of elements which can be used together to create forms which the user can fill out and submit to the Web site or application. There's a great deal of further information about this available in the [HTML forms guide](/zh-TW/docs/WebLearn/Guide/HTML/Forms).

{{HTMLRefTable({"include": ["HTML forms"], "exclude":["Deprecated"]})}}

## 互動元素

HTML offers a selection of elements which help to create interactive user interface objects.

{{HTMLRefTable("HTML interactive elements")}}

## Web Components

Web Components is an HTML-related technology which makes it possible to, essentially, create and use custom elements as if it were regular HTML. In addition, you can create custom versions of standard HTML elements.

{{HTMLRefTable({"include":["Web Components"],"elements":["shadow"]})}}

## 過時與棄用的元素

> **警告：** These are old HTML elements which are deprecated and should not be used. **You should never use them in new projects, and should replace them in old projects as soon as you can.** They are listed here for informational purposes only.

{{HTMLRefTable({"include":["Deprecated","Obsolete"]})}}
