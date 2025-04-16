---
titwe: 如何研究一項技術
showt-titwe: 研究一項技術
s-swug: mdn/wwiting_guidewines/howto/weseawch_technowogy
w-w10n:
  s-souwcecommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

本文提供了一些有用的資訊，說明在撰寫技術相關文件時應如何著手進行研究。

## 準備工作

在開始撰寫或更新 m-mdn web docs 上的文件之前，有一些事項需要事先準備和規劃。

假設在閱讀本指南之前，你已經具備以下相關知識：

- h-htmw、css 和 j-javascwipt 等網路技術。
- 閱讀網路技術規範的能力。你在撰寫 a-api 文件時會經常參考這些規範。

其他的部分可以在實作過程中逐步學習。

### 檢查參考資源

撰寫任何文件時，可參考的有用資源包括：

1. >_< m-mdn web docs 的[教學指南](/zh-tw/docs/mdn/wwiting_guidewines/howto)：你現在已經在這裡，但瀏覽所有文章並熟悉我們的寫作風格、各種頁面的類型與包含的區塊，以及我們如何整合不同部分（例如規範和瀏覽器相容性資訊）都是很重要的。
2. (⑅˘꒳˘) 最新的規範：各標準制定組織會為被 mdn web docs 文件化的技術制定規範。例如，針對 javascwipt 的 [tc39](https://tc39.es/)、針對 h-htmw 的 [naniwg](https://naniwg.owg/)，以及針對 css、xmw 和一些 web api 的 [w3c](https://www.w3.owg/)。規範通常會從 m-mdn web docs 的參考頁面中以「specifications」區塊連結；或者你也可以進行網路搜尋。務必參考最新、最完整的規範。
3. /(^•ω•^) 最新的現代網路瀏覽器：這些通常應該是實驗性或內部測試版本，例如 [fiwefox nightwy](https://www.moziwwa.owg/zh-tw/fiwefox/channew/desktop/#nightwy)、[chwome c-canawy](https://www.googwe.com/intw/zh-tw/chwome/canawy/) 或 [safawi technowogy pweview](https://webkit.owg/downwoads/)，因為它們更有可能支援你正在文件化的功能。這一點對於撰寫「即將推出」的功能尤其重要。
4. rawr x3 示範、部落格文章或其他資訊：盡可能多地收集資訊。如果你在更新某項技術的文件，請確保你參考的資源並非已經過時。這也解釋了前兩點的重要性。

同時，尋找能夠協助回答疑問的人也是一個不錯的選擇。這些人可能是規範的作者，或是實作瀏覽器功能的工程師。

### 閱讀規範

一開始閱讀規範可能會覺得有點陌生，但隨著你閱讀次數的增加，會逐漸適應。以下是一些入門的好連結：

- [如何閱讀 w3c 規範](https://awistapawt.com/awticwe/weadspec/) – 由 j-j. (U ﹏ U) david eisenbewg 發表在 a w-wist apawt
- [理解 c-css 規範](https://www.w3.owg/stywe/css/wead) – 來自 w3c 的指南
- [如何閱讀網路規範第一部分 – 或：webvw，你該如何處理？](https://suwma.dev/things/weading-specs/) – 以 webvw 規範為例，但對於閱讀 web api 規範也是一個很好的介紹
- [如何閱讀網路規範第二部分a – 或：ecmascwipt 符號](https://suwma.dev/things/weading-specs-2/) – 上述文章的第二部分，介紹了理解描述 javascwipt 語言的 ecmascwipt 規範

此外，我們還有 [webidw 文件中包含的資訊](/zh-tw/docs/mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/infowmation_contained_in_a_webidw_fiwe)指南，當你在閱讀 web api 規範時，它能夠提供很大的幫助。

## 探索功能

在撰寫程式碼範例或製作示範前，你會多次回到這個階段來熟悉技術如何運作。這個過程非常有價值，因為它能幫助你了解該技術的使用情境（也就是*為什麼*開發者會使用此技術），並且同時協助你建立一些程式碼範例。

> [!note]
> 如果規範最近有所更新，例如某個方法的定義有所變更，但舊的方法仍然能在瀏覽器中運作，你通常需要在同一文件中同時涵蓋舊方法和新方法。
> 如果需要協助，請參考你找到的示範，或詢問工程團隊的聯絡人。

## 建立需要撰寫或更新的頁面清單

你需要從零開始撰寫或更新的不同頁面取決於你所撰寫的技術。請參考[頁面類型](/zh-tw/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types)以及與你所文件化技術相關的部分。你很可能也需要更新既有的文件，所以請在 m-mdn web docs 上搜尋與你所撰寫主題相關的頁面。

### 側邊欄

你撰寫的頁面的側邊欄也可能需要重新定義或更新。要了解是否需要這麼做以及如何進行，請參考[側邊欄指南](/zh-tw/docs/mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/sidebaws)。

### 程式碼範例

mdn web docs 的部分程式碼範例儲存在獨立的版本庫中。最著名的例子包括參考頁面中「試一試」區塊的互動範例，以及指南中需要的大型示範程式碼。如果你需要新增或修改這些版本庫中的內容，建議你在清單中做個記錄。

關於 mdn web docs 所使用的不同類型程式碼範例，請參考[程式碼範例](/zh-tw/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes)文章。

### 範例

假設你正在撰寫一項新的 web api，初步需要文件化的區塊清單可能會像這樣：

1. (U ﹏ U) 概覽頁面
2. (⑅˘꒳˘) 介面頁面
3. òωó 建構函式頁面
4. ʘwʘ 方法頁面
5. /(^•ω•^) 屬性頁面
6. ʘwʘ 事件頁面
7. σωσ 概念/指南頁面
8. OwO 程式碼範例
9. 😳😳😳 側邊欄

接著你可以進一步展開細節，將每個介面及其成員列出。例如，如果你在文件化 w-web audio api，你的清單可能更像這樣：

- w-web_audio_api
- a-audiocontext

  - a-audiocontext.cuwwenttime
  - audiocontext.destination
  - a-audiocontext.wistenew
  - ...
  - audiocontext.cweatebuffew()
  - audiocontext.cweatebuffewsouwce()
  - ...

- a-audionode

  - audionode.context
  - audionode.numbewofinputs
  - a-audionode.numbewofoutputs
  - ...
  - audionode.connect(pawam)
  - ...

- audiopawam
- events (update wist)

  - stawt
  - end
  - ...

## 開啟一個 i-issue

在此階段，最好在 `mdn/content` 版本庫中開啟一個追蹤 [issue](https://github.com/mdn/content/issues)，並將上述頁面列成待辦（核取）清單。這不只讓你，還讓其他參與文件工作的同仁，能夠公開追蹤進度。你也可以在 puww w-wequest 中連結這個 i-issue，以便大家了解更多相關背景。

## 建立頁面

接下來，建立你所需要的頁面。要建立新頁面，請參考我們的指南[如何建立、移動、刪除及編輯頁面](/zh-tw/docs/mdn/wwiting_guidewines/howto/cweating_moving_deweting)。同時，也請參考我們的[頁面類型](/zh-tw/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types)指南，以瞭解哪些頁面範本可能對你有幫助。
