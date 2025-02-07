---
title: HTML：超文本標記語言
slug: Web/HTML
---

{{HTMLSidebar}}

**HTML**（HyperText Markup Language，超文本標記語言）是打造網頁的基石。它表述並定義網頁的*內容*。伴隨 HTML 而來的技術還有描述網頁外觀（[CSS](/zh-TW/docs/Web/CSS)）及功能性的程式語言（[JavaScript](/zh-TW/docs/Web/JavaScript)）。

「超文本」（HyperText）是指從某個網頁連到其他網頁的連結，不管它連結到站內抑或站外。連結連結 Web 的核心概念。藉由撰寫與上載網頁到網際網路中，你就積極參與了全球資訊網（World Wide Web)。

HTML 使用「標記」（markup）來詮釋文字、圖像、或是其他能在瀏覽器裡面顯示的內容。HTML 標記還包括一些特殊「元素」（element），例如：{{HTMLElement("head")}}、{{HTMLElement("title")}}、{{HTMLElement("body")}}、{{HTMLElement("header")}}、{{HTMLElement("footer")}}、{{HTMLElement("article")}}、{{HTMLElement("section")}}、{{HTMLElement("p")}}、{{HTMLElement("div")}}、{{HTMLElement("span")}}、{{HTMLElement("img")}}……等等。

HTML 文件中的元素和其他內容文字不同的地方，在於元素名稱本身用「<」與「>」包圍，稱作「標籤」。HTML 標籤不分英文大小寫。也就是說，它們可以寫成英文全大寫、全小寫、或是混在一起。像是 **\<title>** 能寫成 \<Title>,\<TiTlE>……等等。

以下這些文章將幫助你理解 HTML。

- HTML 介紹

  如果是網站開發的新手，請先閱讀我們的 [HTML 基礎](/zh-TW/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)文章以理解 HTML 是什麼還有它怎麼使用。

- HTML 教學

  有關如何使用 HTML、教學、完整範例，請參考我們的 [HTML 學習專區](/zh-TW/docs/Learn_web_development/Core/Structuring_content)。

- HTML 參考資料

  在我們廣泛的 [HTML 參考資料](/zh-TW/docs/Web/HTML/Reference)章節，你可以找到構成 HTML 每個元素和屬性的細節。

## 初學者教學

我們的[HTML 學習專區](/zh-TW/docs/Learn_web_development/Core/Structuring_content)提供數個從頭開始的 HTML 教學單元：你不需要任何先備知識。

- [HTML 介紹](/zh-TW/docs/Learn_web_development/Core/Structuring_content)
  - : 本單元會為你打下基礎，帶你熟悉重要概念和語法，像是如何把 HTML 套用到文本、如何建立超連結、還有如何使用 HTML 構建網頁。
- [多媒體與嵌入](/zh-TW/docs/Learn_web_development/Core/Structuring_content)
  - : 本模塊探究如何使用 HTML 在你的網頁裡置入多媒體，包含多種不同載入圖片的方式，如何嵌入影音，甚至是另外一整個網頁。
- [HTML 表格](/zh-TW/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : 要以簡單易懂的方式將表格式的資訊呈現在網頁上會是一件挑戰。本模組涵蓋了基本的表格使用與更複雜的功能，例如標題和總結。
- [HTML 表單](/zh-TW/docs/Learn_web_development/Extensions/Forms)
  - : 表單是網頁相當重要的部分，能夠提供與網頁互動時所需的各式的功能性。例如：註冊和登入、發送回饋意見、購買產品以及更多實用的功能。這個單元將帶領你建立網頁端的表單功能。
- [用 HTML 解決常見問題](/zh-TW/docs/Learn_web_development/Howto/Solve_HTML_problems)
  - : 提供部分內容註釋連結。 當你建立一個網頁時，如何解決 HTML 中常見問題，例如 : 處理標題、增加圖片或影片、強調內文、建立基本表單等。

## 進階部份

- [CORS 圖像](/zh-TW/docs/Web/HTML/CORS_enabled_image)
  - : `當結合了一個適合的`[CORS](/zh-TW/docs/Glossary/CORS)，[`crossorigin`](/zh-TW/docs/Web/HTML/Element/img#crossorigin) 屬性允許 {{HTMLElement("img")}} 元素定義的圖像被從一個地方載入，並被使用於 {{HTMLElement("canvas")}}，即便載入的地方是原處也一樣。
- [設定 CORS 屬性](/zh-TW/docs/Web/HTML/Attributes/crossorigin)
  - : 有些 HTML 元素可以支援 [CORS](/zh-TW/docs/Web/HTTP/CORS),像 {{HTMLElement("img")}} 或者 {{HTMLElement("video")}},有著 `crossorigin` (`crossOrigin` property)的屬性, 讓你能直接使用 CORS 的元素。
- [管理 HTML 中的焦點](/zh-TW/docs/Web/API/Document/hasFocus)
  - : The [`activeElement`](/zh-TW/docs/Web/API/Document/activeElement) DOM attribute and the [`hasFocus()`](/zh-TW/docs/Web/API/Document/hasFocus) DOM method help you track and control a user's interactions with elements on a web page.
- [使用 application cache](/zh-TW/docs/Web/HTML/Using_the_application_cache)
  - : Application caching lets web-based applications run offline. You can use the **Application Cache** (_AppCache_) interface to specify resources that the browser should cache and make available to offline users. Applications that are cached load and work correctly even if users click the refresh button when they are offline.
- [使用 rel="preload" 來預載內容](/zh-TW/docs/Web/HTML/Attributes/rel/preload)
  - : The `preload` value of the {{htmlelement("link")}} element's [`rel`](/zh-TW/docs/Web/HTML/Element/link#rel) attribute allows you to write declarative fetch requests in your HTML {{htmlelement("head")}}, specifying resources that your pages will need very soon after loading, which you therefore want to start preloading early in the lifecycle of a page load, before the browser's main rendering machinery kicks in. This ensures that they are made available earlier and are less likely to block the page's first render, leading to performance improvements. This article provides a basic guide to how `preload` works.

## 參考資料

- [HTML 參考資料](/zh-TW/docs/Web/HTML/Reference)
  - : HTML 包含**元素**，每個元素都可以被幾個**屬性**修飾。HTML 文件透過[連結](/zh-TW/docs/Web/HTML/Attributes/rel)把彼此連結在一起。
- [HTML 元素參考](/zh-TW/docs/Web/HTML/Element)
  - : 瀏覽 [HTML](/zh-TW/docs/Glossary/HTML) 所有[元素](/zh-TW/docs/Glossary/Element)的清單。
- [HTML 屬性參考](/zh-TW/docs/Web/HTML/Attributes)
  - : HTML 元素都有**屬性**。這些額外屬性能透過數種方法設定元素、調整行為。
- [全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)
  - : [HTML 元素](/zh-TW/docs/Web/HTML/Element)能指定全域屬性，_就算它不是標準元素_。也就是說，即使是與 HTML5 標準不相容的非標準元素，依舊允許全域屬性。
- [行內元素](/zh-TW/docs/Glossary/Inline-level_content)與[塊級元素](/zh-TW/docs/Glossary/Block-level_content)
  - : HTML 元素通常為**行內**或**區塊**。行內元素佔據由標籤所定義的其餘空白位置，區塊元素則占據母元素的所有空白位置。
- [超連結類型](/zh-TW/docs/Web/HTML/Attributes/rel)
  - : 在 HTML 中有多種超連結類型能夠使用，並解定義兩個頁面間的關係，超連結元素包含了[`<a>`](/zh-TW/docs/Web/HTML/Element/a), [`<area>`](/zh-TW/docs/Web/HTML/Element/area), [`<link>`](/zh-TW/docs/Web/HTML/Element/link)
- [HTML audio 及 video 元素對媒體的支援程度](/zh-TW/docs/Web/Media/Guides/Formats)
  - : [`<audio>`](/zh-TW/docs/Web/HTML/Element/audio) 及 [`<video>`](/zh-TW/docs/Web/HTML/Element/video) 元素允許播放聲音和影像檔。這些元素提供了瀏覽器替代 Adobe Flash 和其它類似外掛功能的方案。
- [HTML 內容種類](/zh-TW/docs/Web/HTML/Content_categories)
  - : HTML 由多個不同類別的內容組合, 每種內容在特殊情況下在前後關係中有效，而在其它前後關系中無效。相似地，每一組內容，也指定了可以被包含在一起的類別，以及可以或不可以在其中使用的元素。此篇提供了這些類別的指南。
- [怪異模式與標準模式](/zh-TW/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
  - : 有關怪異模式與標準模式的歷史。

## 相關焦點

- [使用 CSS 把色彩套用到 HTML 元素](/zh-TW/docs/Web/CSS/CSS_colors/Applying_color)
  - : 本文章概括了把 CSS 加到 HTML 內容的方法，列出 HTML 文件的哪些部份可以套用色彩、而 CSS 有哪些屬性搬到這種事。裡面有示範、色彩選擇器的連結......等等。
