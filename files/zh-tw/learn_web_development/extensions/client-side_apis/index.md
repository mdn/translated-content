---
title: 用戶端 Web API
slug: Learn_web_development/Extensions/Client-side_APIs
original_slug: Learn/JavaScript/Client-side_web_APIs
---

{{LearnSidebar}}

在為網站或應用程式編寫用戶端 JavaScript 時，你將很快遇到應用程式介面（API）。API 是應用程式介面，用於操作運行站點的瀏覽器和操作系統的不同方面，或操縱來自其他網站或服務的資料。在本單元中，我們將探討 API 是什麼，以及如何使用你在開發工作中經常遇到的一些最常見的 API。

## 必備知識

為了最有效學習本模組，你應該完成在此之前的一系列 JavaScript 模組（[JavaScript 第一步](/zh-TW/docs/Learn_web_development/Core/Scripting)、[JavaScript 基礎要件](/zh-TW/docs/Learn_web_development/Core/Scripting)與 [JavaScript 物件介紹](/zh-TW/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)）。那些模組皆涉略到 API 的簡單用法，因為寫前端 JavaScript 很難不用到。在本教學中，我們假設你對核心 JavaScript 語言已有相當程度的認識，而我們將更深入探索常見的 Web API。

了解 [HTML](/zh-TW/docs/Learn_web_development/Core/Structuring_content) 和 [CSS](/zh-TW/docs/Learn_web_development/Core/Styling_basics) 的基礎知識也會有所幫助。

> [!NOTE]
> 假如你正在使用 電腦/平板/其他裝置，你不需要建立自己的檔案，你可以嘗試線上程式撰寫系統來撰寫範例程式，像是 [JSBin](https://jsbin.com/) 或 [Glitch](https://glitch.com/)。

## 概觀

- [Web API 簡介](/zh-TW/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction)
  - : 首先，我們將從 API 的宏觀視角開始看起——它是什麼、如何運作、如何在程式碼裡運用，以及它是如何建構起來的？我們還將探討不同 API 主要類別分別是什麼，以及它們有什麼功能。
- [文件操作](/zh-TW/docs/Learn_web_development/Core/Scripting/DOM_scripting)
  - : 在撰寫網頁或應用程式時，你會想做的其中一件最常見的事情，是透過某個辦法操控網頁文件。這通常藉由使用文件物件模型（Document Object Model，簡稱 DOM）達成，這是一組 API，用來控制 HTML 與修飾大量使用 {{domxref("Document")}} 物件的訊息。這篇文章中，我們將深入探索如何使用 DOM，以及其它一些能把你的環境變得很有趣的好玩 API。
- [從伺服器獲取資料](/zh-TW/docs/Learn_web_development/Core/Scripting/Network_requests)
  - : 另一個在當今網站與應用程式非常常見的任務是從伺服器獲取個別資料來更新網頁的一部份而不用重新渲染整個網頁。這個似乎不起眼的小細節對網站效能與表現有著巨大影響。這篇文章中，我們將解釋概念，並看看讓這件事成真的技術，像是 {{domxref("XMLHttpRequest")}} 以及 [Fetch API](/zh-TW/docs/Web/API/Fetch_API)。
- [第三方 API](/zh-TW/docs/Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs)
  - : 我們到目前為止提到的 API 皆內建在瀏覽器裡，但並非所有 API 都是。許多像 Google 地圖、Twitter、Facebook、PayPal 等等的大型網站與服務皆提供 API 讓開發者能利用他們的資料（例如將 Twitter 貼文顯示在你的部落格上）或服務（例如將自訂 Google 地圖顯示在你的網站上、或讓你的使用者透過 Facebook 帳號登入）。這篇文章會看到瀏覽器 API 與第三方 API 的區別，以及後者的一些典型用法。
- [繪製圖形](/zh-TW/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
  - : 瀏覽器含有一些非常強大的圖形程式設計工具，從可縮放向量圖形（[SVG](/zh-TW/docs/Web/SVG)）語言，到用來在 HTML {{htmlelement("canvas")}} 元素與 [WebGL](/zh-TW/docs/Web/API/WebGL_API)) 上繪圖的 API。這篇文章介紹 Canvas API，並提供讓你能深入學習的資源。
- [視訊及音訊 API](/zh-TW/docs/Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs)
  - : HTML5 擁有將多媒體嵌入到文件中的元素——{{htmlelement("video")}} 及 {{htmlelement("audio")}}——並衍生出用來控制播放、查詢等等的它們自己的 API。這篇文章向你展示如何做到諸如創造自訂播放器等常見任務。
- [用戶端儲存](/zh-TW/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage)
  - : 當今網路瀏覽器提供很多不同技術，讓你能儲存網站相關的資料並在需要時取出，使你能長期保存資料、離線儲存網站，以及更多。這篇文章用最簡單的方式解釋這些如何運作。
