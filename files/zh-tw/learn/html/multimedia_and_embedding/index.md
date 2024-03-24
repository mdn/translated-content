---
title: Multimedia and Embedding
slug: Learn/HTML/Multimedia_and_embedding
---

{{LearnSidebar}}

到目前為止，我們已經看到了很多文字，但是只使用文字讓人感到無聊。讓我們開始研究如何透過更有趣的內容讓網絡變得活躍起來！本單元探討如何使用 HTML 在你的網頁中包增加媒體，包括可以嵌入圖像的不同方式，以及如何嵌入影片，音訊甚至整個網頁。

## 預備知識

在此單元開始之前，我們假設你對 HTML 基礎知識 (如[HTML 介紹](/zh-TW/docs/Learn/HTML/Introduction_to_HTML)) 已經有一定的了解，如果還沒有，建議你先預習該部分再回來。

> **備註：** 如果你所操作的電腦、平板或裝置環境不允許你建立自己的檔案，你可以在諸如 [JSBin](https://jsbin.com/) 或 [Glitch](https://glitch.com/) 這樣的網站上嘗試(多數的)範例程式碼。

## 導覽

本單元包含以下章節，它們將帶你了解在網頁上嵌入多媒體的所有基礎知識。

- [HTML 中的圖片](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - : 可以考慮到的多媒體種類很多，但是從用以將簡單圖像嵌入網頁中不起眼的{{htmlelement(" img")}}元素開始是很合乎邏輯的。在本文中，我們將研究如何更深入地使用它，包括基礎知識，使用{{htmlelement("figure")}}加上標題的註釋以及它與 CSS 背景圖像的關係。
- [視訊與音訊內容](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : 接著，我們將研究如何使用 HTML5 {{htmlelement("video")}}和{{htmlelement("audio")}} 元素在頁面上嵌入視訊和音訊，包括基本知識，以提供對不同頁面的訪問文件格式添加到不同的瀏覽器，添加標題和字幕，以及如何為舊版瀏覽器添加後備廣告。
- [從物件到 iframe — 其他嵌入技巧](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : 在這裡，我們想橫跨一步，著眼於幾個元素，這些元素可以使你將各種內容類型嵌入到網頁中：{{htmlelement("iframe")}}，{{htmlelement("embed")}}和 {{htmlelement("object")}}元素。 \<iframe>用於嵌入其他網頁，另外兩個允許你嵌入 PDF，SVG 甚至 Flash（一種即將消逝的技術，但你可能仍會定期看到它）。
- [為 Web 新增向量圖](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
  - : 向量圖形在某些情況下可能非常有用。 與 PNG / JPG 等常見格式不同，它們在放大時不會失真/像素化-在縮放時可以保持平滑。 本文向你介紹什麼是向量圖，以及如何在網頁中加入流行的{{glossary("SVG")}}格式。
- [適應性圖片](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : 在本文中，我們將學習適應性圖片 (又稱響應式圖片)的概念。適應性圖片在不同螢幕尺寸，解析度和其他類似功能差異很大的設備上都能很好地運作。我們還會研究 HTML 提供了哪些工具來幫助實現它們。 這有助於提高不同設備之間的性能。 響應式圖片只是響應式設計的一部分，在將來你學習 CSS 的單元中還會有響應式圖片的單元。

## 評量

以下評量中將測試你對以上指南中介紹的 HTML 基礎的理解：

- [Mozilla 啟動頁面](/zh-TW/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : 在此測驗中，我們將測試你對本區塊文章中討論的一些技術的了解，使你能夠向時髦的啟動頁面添加有關 Mozilla 的一些圖片和視訊！

## 另見

- [增加點擊映射到圖片上層](/zh-TW/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)
  - : 圖像映射提供了一種機制，可以使圖像的不同部分鏈接到不同的位置。（請試想在地圖上點擊每個不同國家/地區以取得更多資訊）此技術有時很有用。
- [網頁知識基礎 2](https://teach.mozilla.org/activities/web-lit-basics-two/)
  - : 一個出色的 Mozilla 基礎課程，探索和測試此多媒體和嵌入單元中討論的一些技能。 深入研究網頁組成，可訪問性設計，共享資源，使用線上媒體和開放性工作的基礎知識（這意味著你的內容可以免費獲得併可以由他人共享）。
