---
title: HTML：超文本標記語言
slug: Web/HTML
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

**HTML**（HyperText Markup Language，超文本標記語言）是 Web 最基本的構建塊。它定義了 Web 內容的意義和結構。除了 HTML 之外，通常還會使用其他技術來描述 Web 的外觀／呈現（[CSS](/zh-TW/docs/Web/CSS)）或功能／行為（[JavaScript](/zh-TW/docs/Web/JavaScript)）。

「超文本」（HyperText）指的是將 Web 相互連接的連結，可以在單個網站內部或網站之間進行連接。連結是 Web 的基本方面。通過將內容上傳到互聯網並將其連接到其他人創建的頁面，你成為了全球資訊網的積極參與者。

HTML 使用「標記」（Markup）來詮釋文本、圖像和其他內容，以便在 Web 瀏覽器中顯示。HTML 標記包括特殊的「元素」，例如 {{HTMLElement("head")}}、{{HTMLElement("title")}}、{{HTMLElement("body")}}、{{HTMLElement("header")}}、{{HTMLElement("footer")}}、{{HTMLElement("article")}}、{{HTMLElement("section")}}、{{HTMLElement("p")}}、{{HTMLElement("div")}}、{{HTMLElement("span")}}、{{HTMLElement("img")}}、{{HTMLElement("aside")}}、{{HTMLElement("audio")}}、{{HTMLElement("canvas")}}、{{HTMLElement("datalist")}}、{{HTMLElement("details")}}、{{HTMLElement("embed")}}、{{HTMLElement("nav")}}、{{HTMLElement("search")}}、{{HTMLElement("output")}}、{{HTMLElement("progress")}}、{{HTMLElement("video")}}、{{HTMLElement("ul")}}、{{HTMLElement("ol")}}、{{HTMLElement("li")}} 等等。

HTML 元素通過「標籤」與文件中的其他文本區分開來，標籤由元素名稱和 `<` 及 `>` 組成。標籤內的元素名稱不區分大小寫。也就是說，它可以用大寫、小寫或混合寫法。例如，`<title>` 標籤可以寫成 `<Title>`、`<TITLE>` 或其他任何方式。然而，慣例和推薦的做法是將標籤寫成小寫。

以下文章可以幫助你進一步了解 HTML。

## 初學者教程

- [你的第一個網站：創建內容](/zh-TW/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : 這篇文章提供了一個簡短的 HTML 簡介和使用方法，適合完全新手的 Web 開發者。
- [使用 HTML 結構化內容](/zh-TW/docs/Learn_web_development/Core/Structuring_content)
  - : 我們的[學習 Web 開發](/zh-TW/docs/Learn_web_development)章節的 HTML 模塊從頭開始教授所有 HTML 基礎知識。

## 指南

- [HTML 表單](/zh-TW/docs/Learn_web_development/Extensions/Forms)
  - : 表單是 Web 非常重要的一章節——它們提供了與網站互動所需的大章節功能，例如註冊和登錄、發送反饋、購買產品等。此模塊將幫助你開始創建表單的用戶端/前端章節。
- [啟用 CORS 的圖像](/zh-TW/docs/Web/HTML/CORS_enabled_image)
  - : [`crossorigin`](/zh-TW/docs/Web/HTML/Element/img#crossorigin) 屬性與適當的 {{glossary("CORS")}} 標頭結合使用，允許由 {{HTMLElement("img")}} 元素定義的圖像從外部來源加載，並在 {{HTMLElement("canvas")}} 元素中使用，就像它們是從當前來源加載的一樣。
- [CORS 設定屬性](/zh-TW/docs/Web/HTML/Attributes/crossorigin)
  - : 一些支援 [CORS](/zh-TW/docs/Web/HTTP/CORS) 的 HTML 元素，例如 {{HTMLElement("img")}} 或 {{HTMLElement("video")}}，具有 `crossorigin` 屬性（`crossOrigin` 屬性），允許你配置元素提取數據的 CORS 請求。
- [使用 rel="preload" 預加載內容](/zh-TW/docs/Web/HTML/Attributes/rel/preload)
  - : {{HTMLElement("link")}} 元素的 [`rel`](/zh-TW/docs/Web/HTML/Element/link#rel) 屬性的 `preload` 值允許你在 HTML {{HTMLElement("head")}} 中編寫聲明式提取請求，指定頁面加載後不久將需要的資源，因此你希望在頁面加載生命週期的早期開始預加載它們，這樣可以確保它們更早可用，並且不太可能阻塞頁面的首次渲染，從而提高性能。這篇文章提供了 `preload` 的基本指南。
- [響應式圖像](/zh-TW/docs/Web/HTML/Responsive_images)
  - : 在這篇文章中，我們將學習響應式圖像的概念——在具有不同螢幕尺寸、分辨率和其他特徵的設備上良好顯示的圖像——並查看 HTML 提供的幫助實現它們的工具。這有助於提高不同設備上的性能。

## 參考

- [HTML 參考](/zh-TW/docs/Web/HTML/Reference)
  - : HTML 由**元素**組成，每個元素都可以由若干**屬性**修飾。HTML 文件通過**連結**相互連接。
=======
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
