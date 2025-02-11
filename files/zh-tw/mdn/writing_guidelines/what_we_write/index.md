---
title: 我們撰寫的內容
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: 07d0f18e4b2ad43185bcc98ce99b7080c6411b2a
---

{{MDNSidebar}}

MDN Web Docs 包含*中立於瀏覽器*的文件，讓 Web 開發者能夠撰寫*跨瀏覽器*的程式碼。在本文中，你將找到關於特定主題和／或內容類型是否應該包含在 MDN Web Docs 中的相關資訊。

## 編輯政策

本節說明由 Mozilla MDN 工作人員制定的政策，這些政策用於管理 MDN Web Docs 上的內容。所有 MDN Web Docs 的貢獻者都應遵守這些政策。

### 相關性

MDN Web Docs 上的所有內容必須與其所在技術區塊相關。垃圾內容（商業廣告）及其他無關內容將永遠不被接受。持續提交垃圾內容的貢獻者，可能會根據 Mozilla MDN 工作人員的判斷被禁止參與 MDN。

指向商業網站的外部連結（如果與主題相關）將根據具體情況進行判斷。這些連結在協助 Web 開發者方面的價值必須大於為所連結網站帶來的商業利益。

> [!NOTE]
> 在 MDN 的[學習 Web 開發](/zh-TW/docs/Learn_web_development)章節，你會看到指向商業網站的連結，但這些連結使用得很節制，且我們僅連結到受信任的教育合作夥伴。你可以在[學習 Web 開發寫作指南 > 外部連結和嵌入](/zh-TW/docs/MDN/Writing_guidelines/Learning_content#外部連結和嵌入)中閱讀更多關於這方面的內容。

### 中立性

MDN Web Docs 上的文章必須保持[中立的觀點](https://zh.wikipedia.org/wiki/Wikipedia:中立的观点)，在描述不同瀏覽器的差異時不得帶有偏見。任何關於瀏覽器或使用者代理的貶低性言論都是不可接受的。

### 標準化

在 MDN Web Docs 上記錄的 Web 技術應該處於標準化進程中，且必須至少由一個渲染引擎實作。瀏覽器支援的差異將在文章的[瀏覽器相容性](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)部分中進行記錄。

## 建議內容

如果你希望為 MDN Web Docs 提出內容建議，請在提交前閱讀本文，確保你的建議是合適的。

針對新的參考頁面或指南，請開啟一個[新議題](https://github.com/mdn/mdn/issues/new/choose)，詳細說明你所建議的內容及原因（請盡可能具體）。

若要建議涉及新內容區塊的大型專案，請參考[納入標準](/zh-TW/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion)頁面，其中也說明了申請流程。

## 適合在 MDN Web Docs 上的主題

一般來說，只要是開放 Web 技術，我們就會在 MDN Web Docs 上進行記錄。這包括任何可供 Web 開發者用於建立網站和應用程式的功能，無論是現在還是可預見的未來。

如果某個功能已被多個瀏覽器實作，並被接受為標準或正在標準化的進程中，那麼我們肯定會記錄它。如果某個功能仍處於非常實驗性的階段，尚未被多個瀏覽器實作，或可能會有所變動，則該功能仍適合納入，但可能不會被視為編寫團隊的優先事項。

換句話說，在 MDN Web Docs 上記錄的 Web 技術應符合以下所有標準：

- 處於標準化進程中。
- 由可靠的標準組織發佈規範文件。
- 至少由一個渲染引擎實作。
- 在穩定版的瀏覽器中發佈。

我們的主要重點是撰寫以下前端網頁技術的內容：

- [HTML](/zh-TW/docs/Web/HTML)
- [CSS](/zh-TW/docs/Web/CSS)
- [JavaScript](/zh-TW/docs/Web/JavaScript)
- [Web API](/zh-TW/docs/Web/API)
- [HTTP](/zh-TW/docs/Web/HTTP)

我們也記錄一些更廣泛的主題，例如 [SVG](/zh-TW/docs/Web/SVG)、[XML](/zh-TW/docs/Web/XML)、[WebAssembly](/zh-TW/docs/WebAssembly) 和[無障礙議題](/zh-TW/docs/Learn_web_development/Core/Accessibility)。此外，我們還提供這些技術的廣泛[學習指南](/zh-TW/docs/Learn_web_development)和[術語表](/zh-TW/docs/Glossary)。

> [!NOTE]
> 後端技術通常有其獨立的文件，MDN Web Docs 並不嘗試取代它們，儘管我們[有一些例外](/zh-TW/docs/Learn_web_development/Extensions/Server-side)。

MDN Web Docs 上的所有內容都必須與其所屬的技術類別相關。貢獻者應遵循這些 [MDN 撰寫指南](/zh-TW/docs/MDN/Writing_guidelines)，以確保在撰寫風格、程式碼範例和其他主題上保持一致性。

關於某項技術是否可以在 MDN Web Docs 上進行紀錄的標準，請參閱[納入標準](/zh-TW/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion)頁面以了解更多詳情。

### 我們何時記錄新技術

在 MDN Web Docs 上，我們不斷尋找合適的時機來記錄新的網頁標準技術。我們試圖在盡早發布文件，讓開發人員能在需要時立即學習新功能，以及等到技術成熟穩定、不需要頻繁更新或撤銷文件之間取得平衡。

一般來說，我們考慮記錄新技術的最早條件是：_當該功能已進入標準化流程，並在某處實作時。_

我們會考慮記錄新技術，如果該技術：

- 在由可靠的標準組織（例如 W3C、WHATWG、Khronos、IETF 等）發布的規範文件中有所描述，且已達到一定程度的穩定性（例如 W3C 工作草案、候選推薦標準，或根據提交的問題流程看起來相對穩定），並且
- 至少有一個瀏覽器已一致性地實作該技術，且其他瀏覽器開發者表現出興趣（例如有活躍的開發票證或已啟動「計劃實作」流程）。

我們不會記錄新技術，如果：

- 它沒有正式的規範，或該規範仍只是草稿，容易變動，
- 目前只有一個或沒有任何瀏覽器實作，且其他未支援的瀏覽器未表現出實作興趣。你可以透過詢問這些瀏覽器的工程師，或查看瀏覽器的錯誤追蹤系統和郵件清單來判斷，
- 它不是面向 Web 的技術，且／或是完全專有的，或
- 它已顯示出被棄用或將被類似功能取代的跡象。

## 不適合 MDN Web Docs 的主題

一般來說，任何非開放 Web 標準的內容都不適合在 MDN Web Docs 上發布。垃圾內容（商業廣告）及其他無關內容將永遠不被接受。持續嘗試提交垃圾內容的貢獻者可能會被 Mozilla MDN 團隊禁止。

以下是一些不適合 MDN Web Docs 的主題範例：

- 非公開於網頁、僅特定瀏覽器使用的技術。
- 與網頁無關的技術。
- 面向最終使用者的文件。例如，Mozilla 產品的使用者指南應發布在 [Mozilla 支援網站](https://support.mozilla.org/)。
- 自我連結或自我宣傳的外部連結。在添加外部連結之前，請參閱我們的[寫作風格指南](/zh-TW/docs/MDN/Writing_guidelines/Writing_style_guide#外部連結)。

### 我們何時移除文件

當某個頁面不再包含任何有用資訊、過時，且／或錯誤到可能產生誤導時，它將會從 MDN Web Docs 中刪除。

以下是可能刪除頁面／內容的情況範例：

- 文章包含從未被所有瀏覽器實作，且後來被撤銷的功能資訊（通常是實驗性功能，例如帶有前綴的功能）。
- 參考頁面描述的功能在任何瀏覽器實作之前就被從規範中移除。
- 文章涵蓋後來被證明是糟糕做法，並被更好的技術取代的技巧。
- 文章的資訊後來被其他品質更高的文章取代。
- 文章包含不適合 MDN Web Docs 的內容。
- MDN Web Docs 某些區段並未專注於開放網頁技術，且維護成本過高。

有關*如何*刪除文件的更多資訊，請參閱[建立、移動和刪除頁面](/zh-TW/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)指南。

## MDN Web Docs 上允許的文件類型

一般來說，我們的文件分為以下幾類：

- 參考文件
- 指南
- 術語
- 學習／教學

一般來說，MDN Web Docs 是用於*產品*文件，而不是*項目*或*流程*文件。因此，如果文件是關於「如何使用某個東西」或「某個東西如何運作」（其中「某個東西」屬於上述主題類別之一），那麼它可以發布在 MDN Web Docs 上。

如果文件是關於「誰在開發某個東西」或「開發某個東西的計劃」，那麼它不應該發布在 MDN Web Docs 上。

以下是一些*不*應該放置在 MDN Web Docs 上的文件範例：

- 規劃文件
- 設計文件
- 項目提案
- 規範或標準文件
- 宣傳材料、廣告或個人資訊
