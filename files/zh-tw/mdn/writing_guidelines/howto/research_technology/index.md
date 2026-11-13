---
title: 如何研究一項技術
short-title: 研究一項技術
slug: MDN/Writing_guidelines/Howto/Research_technology
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

本文提供了一些有用的資訊，說明在撰寫技術相關文件時應如何著手進行研究。

## 準備工作

在開始撰寫或更新 MDN Web Docs 上的文件之前，有一些事項需要事先準備和規劃。

假設在閱讀本指南之前，你已經具備以下相關知識：

- HTML、CSS 和 JavaScript 等網路技術。
- 閱讀網路技術規範的能力。你在撰寫 API 文件時會經常參考這些規範。

其他的部分可以在實作過程中逐步學習。

### 檢查參考資源

撰寫任何文件時，可參考的有用資源包括：

1. MDN Web Docs 的[教學指南](/zh-TW/docs/MDN/Writing_guidelines/Howto)：你現在已經在這裡，但瀏覽所有文章並熟悉我們的寫作風格、各種頁面的類型與包含的區塊，以及我們如何整合不同部分（例如規範和瀏覽器相容性資訊）都是很重要的。
2. 最新的規範：各標準制定組織會為被 MDN Web Docs 文件化的技術制定規範。例如，針對 JavaScript 的 [TC39](https://tc39.es/)、針對 HTML 的 [WHATWG](https://whatwg.org/)，以及針對 CSS、XML 和一些 Web API 的 [W3C](https://www.w3.org/)。規範通常會從 MDN Web Docs 的參考頁面中以「Specifications」區塊連結；或者你也可以進行網路搜尋。務必參考最新、最完整的規範。
3. 最新的現代網路瀏覽器：這些通常應該是實驗性或內部測試版本，例如 [Firefox Nightly](https://www.mozilla.org/zh-TW/firefox/channel/desktop/#nightly)、[Chrome Canary](https://www.google.com/intl/zh-TW/chrome/canary/) 或 [Safari Technology Preview](https://webkit.org/downloads/)，因為它們更有可能支援你正在文件化的功能。這一點對於撰寫「即將推出」的功能尤其重要。
4. 示範、部落格文章或其他資訊：盡可能多地收集資訊。如果你在更新某項技術的文件，請確保你參考的資源並非已經過時。這也解釋了前兩點的重要性。

同時，尋找能夠協助回答疑問的人也是一個不錯的選擇。這些人可能是規範的作者，或是實作瀏覽器功能的工程師。

### 閱讀規範

一開始閱讀規範可能會覺得有點陌生，但隨著你閱讀次數的增加，會逐漸適應。以下是一些入門的好連結：

- [如何閱讀 W3C 規範](https://alistapart.com/article/readspec/) – 由 J. David Eisenberg 發表在 A List Apart
- [理解 CSS 規範](https://www.w3.org/Style/CSS/read) – 來自 W3C 的指南
- [如何閱讀網路規範第一部分 – 或：WebVR，你該如何處理？](https://surma.dev/things/reading-specs/) – 以 WebVR 規範為例，但對於閱讀 Web API 規範也是一個很好的介紹
- [如何閱讀網路規範第二部分a – 或：ECMAScript 符號](https://surma.dev/things/reading-specs-2/) – 上述文章的第二部分，介紹了理解描述 JavaScript 語言的 ECMAScript 規範

此外，我們還有 [WebIDL 文件中包含的資訊](/zh-TW/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file)指南，當你在閱讀 Web API 規範時，它能夠提供很大的幫助。

## 探索功能

在撰寫程式碼範例或製作示範前，你會多次回到這個階段來熟悉技術如何運作。這個過程非常有價值，因為它能幫助你了解該技術的使用情境（也就是*為什麼*開發者會使用此技術），並且同時協助你建立一些程式碼範例。

> [!NOTE]
> 如果規範最近有所更新，例如某個方法的定義有所變更，但舊的方法仍然能在瀏覽器中運作，你通常需要在同一文件中同時涵蓋舊方法和新方法。
> 如果需要協助，請參考你找到的示範，或詢問工程團隊的聯絡人。

## 建立需要撰寫或更新的頁面清單

你需要從零開始撰寫或更新的不同頁面取決於你所撰寫的技術。請參考[頁面類型](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Page_types)以及與你所文件化技術相關的部分。你很可能也需要更新既有的文件，所以請在 MDN Web Docs 上搜尋與你所撰寫主題相關的頁面。

### 側邊欄

你撰寫的頁面的側邊欄也可能需要重新定義或更新。要了解是否需要這麼做以及如何進行，請參考[側邊欄指南](/zh-TW/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars)。

### 程式碼範例

MDN Web Docs 的部分程式碼範例儲存在獨立的版本庫中。最著名的例子包括參考頁面中「試一試」區塊的互動範例，以及指南中需要的大型示範程式碼。如果你需要新增或修改這些版本庫中的內容，建議你在清單中做個記錄。

關於 MDN Web Docs 所使用的不同類型程式碼範例，請參考[程式碼範例](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Code_examples)文章。

### 範例

假設你正在撰寫一項新的 Web API，初步需要文件化的區塊清單可能會像這樣：

1. 概覽頁面
2. 介面頁面
3. 建構函式頁面
4. 方法頁面
5. 屬性頁面
6. 事件頁面
7. 概念/指南頁面
8. 程式碼範例
9. 側邊欄

接著你可以進一步展開細節，將每個介面及其成員列出。例如，如果你在文件化 Web Audio API，你的清單可能更像這樣：

- Web_Audio_API
- AudioContext
  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - ...
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - ...

- AudioNode
  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - ...
  - AudioNode.connect(Param)
  - ...

- AudioParam
- Events (update list)
  - start
  - end
  - ...

## 開啟一個 issue

在此階段，最好在 `mdn/content` 版本庫中開啟一個追蹤 [issue](https://github.com/mdn/content/issues)，並將上述頁面列成待辦（核取）清單。這不只讓你，還讓其他參與文件工作的同仁，能夠公開追蹤進度。你也可以在 pull request 中連結這個 issue，以便大家了解更多相關背景。

## 建立頁面

接下來，建立你所需要的頁面。要建立新頁面，請參考我們的指南[如何建立、移動、刪除及編輯頁面](/zh-TW/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)。同時，也請參考我們的[頁面類型](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Page_types)指南，以瞭解哪些頁面範本可能對你有幫助。
