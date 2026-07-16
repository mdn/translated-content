---
title: HTML：超文本標記語言
slug: Web/HTML
l10n:
  sourceCommit: f08eb478696946da474cf5c5ecdead4f5955f1b4
---

**HTML**（HyperText Markup Language，超文本標記語言）是 Web 最基本的構建塊。它定義了 Web 內容的意義和結構。除了 HTML 之外，通常還會使用其他技術來描述 Web 的外觀／呈現（[CSS](/zh-TW/docs/Web/CSS)）或功能／行為（[JavaScript](/zh-TW/docs/Web/JavaScript)）。

「超文本」（HyperText）指的是將 Web 相互連接的連結，可以在單個網站內部或網站之間進行連接。連結是 Web 的基本方面。通過將內容上傳到互聯網並將其連接到其他人創建的頁面，你成為了全球資訊網的積極參與者。

HTML 使用「標記」（Markup）來詮釋文本、圖像和其他內容，以便在 Web 瀏覽器中顯示。HTML 標記包括特殊的「元素」，例如 {{HTMLElement("head")}}、{{HTMLElement("title")}}、{{HTMLElement("body")}}、{{HTMLElement("header")}}、{{HTMLElement("footer")}}、{{HTMLElement("article")}}、{{HTMLElement("section")}}、{{HTMLElement("p")}}、{{HTMLElement("div")}}、{{HTMLElement("span")}}、{{HTMLElement("img")}}、{{HTMLElement("aside")}}、{{HTMLElement("audio")}}、{{HTMLElement("canvas")}}、{{HTMLElement("datalist")}}、{{HTMLElement("details")}}、{{HTMLElement("embed")}}、{{HTMLElement("nav")}}、{{HTMLElement("search")}}、{{HTMLElement("output")}}、{{HTMLElement("progress")}}、{{HTMLElement("video")}}、{{HTMLElement("ul")}}、{{HTMLElement("ol")}}、{{HTMLElement("li")}} 等等。

HTML 元素通過「標籤」與文件中的其他文本區分開來，標籤由元素名稱和 `<` 及 `>` 組成。標籤內的元素名稱不區分大小寫。也就是說，它可以用大寫、小寫或混合寫法。例如，`<title>` 標籤可以寫成 `<Title>`、`<TITLE>` 或其他任何方式。然而，慣例和推薦的做法是將標籤寫成小寫。

以下文章可以幫助你進一步了解 HTML。

## 初學者教程

- [你的第一個網站：創建內容](/zh-TW/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : 這篇文章提供了一個簡短的 HTML 簡介和使用方法，適合完全新手的 Web 開發者。
- [使用 HTML 建構內容](/zh-TW/docs/Learn_web_development/Core/Structuring_content)
  - : 我們的[學習 Web 開發](/zh-TW/docs/Learn_web_development)章節的 HTML 模塊從頭開始教授所有 HTML 基礎知識。

## 指南

[HTML 指南](/zh-TW/docs/Web/HTML/Guides)幫助你在 Web 上使用 HTML 建構，涵蓋的主題包括表單、CORS、內容預先載入以及響應式圖片等。

- [HTML 表單](/zh-TW/docs/Learn_web_development/Extensions/Forms)
  - : 表單是 Web 非常重要的一章節——它們提供了與網站互動所需的大章節功能，例如註冊和登錄、發送反饋、購買產品等。此模塊將幫助你開始創建表單的用戶端/前端部分。
- [啟用 CORS 的圖像](/zh-TW/docs/Web/HTML/How_to/CORS_enabled_image)
  - : [`crossorigin`](/zh-TW/docs/Web/HTML/Reference/Elements/img#crossorigin) 屬性與適當的 {{glossary("CORS")}} 標頭結合使用，允許由 {{HTMLElement("img")}} 元素定義的圖像從外部來源加載，並在 {{HTMLElement("canvas")}} 元素中使用，就像它們是從當前來源加載的一樣。
- [CORS 設定屬性](/zh-TW/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : 一些支援 [CORS](/zh-TW/docs/Web/HTTP/Guides/CORS) 的 HTML 元素，例如 {{HTMLElement("img")}} 或 {{HTMLElement("video")}}，具有 `crossorigin` 屬性（`crossOrigin` 屬性），允許你配置元素提取數據的 CORS 請求。
- [使用 rel="preload" 預加載內容](/zh-TW/docs/Web/HTML/Reference/Attributes/rel/preload)
  - : {{HTMLElement("link")}} 元素的 [`rel`](/zh-TW/docs/Web/HTML/Reference/Elements/link#rel) 屬性的 `preload` 值允許你在 HTML {{HTMLElement("head")}} 中編寫聲明式提取請求，指定頁面加載後不久將需要的資源，因此你希望在頁面加載生命週期的早期開始預加載它們，這樣可以確保它們更早可用，並且不太可能阻塞頁面的首次渲染，從而提高性能。這篇文章提供了 `preload` 的基本指南。
- [響應式圖像](/zh-TW/docs/Web/HTML/Guides/Responsive_images)
  - : 在這篇文章中，我們將學習響應式圖像的概念——在具有不同螢幕尺寸、分辨率和其他特徵的設備上良好顯示的圖像——並查看 HTML 提供的幫助實現它們的工具。這有助於提高不同設備上的性能。

## 參考

- [HTML 參考](/zh-TW/docs/Web/HTML/Reference)
  - : HTML 由**元素**組成，每個元素都可以由若干**屬性**修飾。HTML 文件通過**連結**相互連接。
- [HTML 元素參考](/zh-TW/docs/Web/HTML/Reference/Elements)
  - : 瀏覽所有 {{glossary("HTML")}} {{glossary("Element", "元素")}}的列表。
- [HTML 屬性參考](/zh-TW/docs/Web/HTML/Reference/Attributes)
  - : HTML 中的元素具有**屬性**。這些屬性是配置元素或以各種方式調整其行為的附加值。
- [全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)
  - : 全域屬性可以在所有 [HTML 元素](/zh-TW/docs/Web/HTML/Reference/Elements)上指定，_即使那些未在標準中指定的元素_。這意味著任何非標準元素仍然必須允許這些屬性，即使這些元素使文件不符合 HTML5 標準。
- [內聯級元素](/zh-TW/docs/Glossary/Inline-level_content)和[區塊級元素](/zh-TW/docs/Glossary/Block-level_content)
  - : HTML 元素通常是「內聯級」或「區塊級」元素。內聯級元素僅佔據由定義它的標籤界定的空間。區塊級元素佔據其父元素（容器）的整個空間，從而創建一個「區塊框」。
- [HTML 註釋](/zh-TW/docs/Web/HTML/Guides/Comments)
  - : HTML 註釋用於向標記添加說明性註釋或防止瀏覽器解釋文件的特定部分。
- [Web 上的媒體類型和格式指南](/zh-TW/docs/Web/Media/Guides/Formats)
  - : {{HTMLElement("audio")}} 和 {{HTMLElement("video")}} 元素允許你在內容中本地播放音訊和視訊媒體，而無需外部軟體支援。
- [HTML 內容類型](/zh-TW/docs/Web/HTML/Guides/Content_categories)
  - : HTML 由幾種內容組成，每種內容允許在某些上下文中使用，而在其他上下文中不允許使用。同樣，每個上下文都有一組它可以包含的其他內容類型以及可以或不能在其中使用的元素。這是這些類型的指南。
- [怪異模式和標準模式](/zh-TW/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
  - : 關於怪異模式和標準模式的歷史訊息。

## 相關主題

- [使用 CSS 為 HTML 元素應用顏色](/zh-TW/docs/Web/CSS/Guides/Colors/Applying_color)
  - : 這篇文章涵蓋了使用 CSS 為 HTML 內容添加顏色的的大部分方法，列出了 HTML 文件的哪些部分可以著色以及在進行著色時應使用哪些 CSS 屬性。
