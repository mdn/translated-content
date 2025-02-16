---
title: 如何撰寫 API 參考
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

本指南將帶你了解在 MDN 上撰寫 API 參考文件所須的一切知識。

## 做好準備

在開始記錄 API 之前，你應該先準備並規劃一些事項，以確保正式撰寫時能夠順利進行。

### 必備知識

在閱讀本指南之前，我們預設你已具備以下基本知識：

- Web 技術，例如 HTML、CSS 和 JavaScript，其中 JavaScript 最為重要。
- 閱讀 Web 技術規範文件，你將會頻繁參閱這些規範來記錄 API。

其餘知識可以在撰寫過程中逐步學習。

### 先備資源

在開始記錄 API 之前，你應該準備好以下資源：

1. **最新規範（spec）**：無論是 W3C 的正式建議（Recommendation）還是早期編輯草案（Editor's Draft），你應該參考涵蓋該 API 的最新可用草案。你可以透過網路找到最新版本，它通常會在所有歷史版本的規範中標示為「latest draft」或類似的名稱。
2. **最新現代網頁瀏覽器**：你應該使用實驗性或 alpha 版本的瀏覽器，例如 [Firefox Nightly](https://www.mozilla.org/zh-TW/firefox/channel/desktop/) 或 [Chrome Canary](https://www.google.com/intl/en/chrome/canary/)，因為這些版本較有可能支援你要記錄的功能。若你正在記錄一個新興或實驗性 API，這點尤其重要。
3. **Demo、部落格文章與其它相關資訊**：盡可能搜尋並收集更多有關 API 的資訊。
4. **相關工程師聯繫方式**：找到熟悉該 API 規範或瀏覽器實作的工程師，對於解答問題非常有幫助。你可以在以下地方找到這些專家：
   - 你的公司內部通訊錄（假設你在相關公司工作）。
   - 討論該 API 的公開郵件列表，例如 Mozilla 的 [dev-platform](https://groups.google.com/a/mozilla.org/g/dev-platform/) 或 W3C 的 [public-webapps](https://lists.w3.org/Archives/Public/public-webapps/)。
   - 該 API 的規範文件，例如 [Web Audio API 規範](https://webaudio.github.io/web-audio-api/)，通常會在文件開頭列出作者及聯絡方式。

### 花些時間體驗 API

在整個 API 記錄過程中，你會經常建立 Demo，因此在一開始先花點時間熟悉 API 的運作方式會很有幫助。了解主要的介面（interface）、屬性（property）、方法（method）、主要使用情境，以及如何編寫基本功能。

當 API 發生異動時，你應該確認你參考的 Demo 是否過時。檢查 Demo 中使用的主要結構是否符合最新規範。有時候，某些舊的 Demo 仍可在最新瀏覽器上運作，但這並不可靠，因為許多舊功能可能會為了向下兼容性而繼續支援。

> [!NOTE]
> 若規範近期更新了，例如某個方法的定義方式有變更，但舊方法仍能在瀏覽器中運作，你通常需要在同一個頁面內記錄新舊方法，以確保完整性。如有疑問，你可以參考找到的 Demo，或向熟悉的工程師聯繫。

### 列出需要撰寫或更新的文件清單

API 參考文件通常包含以下頁面。你可以在[頁面類型](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Page_types)文章中找到每種類型的詳細內容、範例及模板。在開始之前，應該先列出你需要建立的所有頁面：

1. 總覽頁面（Overview page）
2. 介面頁面（Interface pages）
3. 建構子頁面（Constructor pages）
4. 方法頁面（Method pages）
5. 屬性頁面（Property pages）
6. 事件頁面（Event pages）
7. 概念/指南頁面（Concept/guide pages）
8. 範例（Examples）

> [!NOTE]
> 本文範例將參考 [Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API)。

#### 總覽頁面

每個 API 會有一個總覽頁面，說明該 API 的用途、頂層介面、其它相關介面中功能以及其它高層級細節。該頁面的名稱與網址 slug 應該是 API 名稱加上「API」結尾，並放置在 API 參考文件的最上層，位於 [Web APIs](/zh-TW/docs/Web/API) 目錄之下。

範例：

- 標題：_Web Audio API_
- Slug：_Web_Audio_API_
- URL：[https://developer.mozilla.org/zh-TW/docs/Web/API/Web_Audio_API](/zh-TW/docs/Web/API/Web_Audio_API)

#### 介面頁面

每個介面都有自己的獨立頁面，描述該介面的用途、列出其成員（建構子、方法、屬性等），並標示瀏覽器相容性。頁面名稱與 slug 應該與規範中介面的名稱完全一致，並放置在 API 參考文件的最上層，位於 [Web APIs](/zh-TW/docs/Web/API) 目錄之下。

範例：

- 標題：_AudioContext_
- Slug：_AudioContext_
- URL：[https://developer.mozilla.org/zh-TW/docs/Web/API/AudioContext](/zh-TW/docs/Web/API/AudioContext)

<!---->

- 標題：_AudioNode_
- Slug：_AudioNode_
- URL：[https://developer.mozilla.org/zh-TW/docs/Web/API/AudioNode](/zh-TW/docs/Web/API/AudioNode)

> [!NOTE]
> 記錄介面時，應遵循以下規則：

- 記錄定義於物件原型上的方法（實例方法，instance method），以及定義於類別本身的靜態方法（static method）。若同一介面同時存在靜態方法與實例方法，應該在頁面上分開列出（分別標示為「靜態方法」與「實例方法」）；若該介面僅有實例方法，則可直接列在「方法」章節下。
- **不記錄**介面繼承的屬性與方法，這些應該列在對應父介面的頁面上，但可以在內容中簡要提及它們的存在。
- 記錄來自混入（mixin）的屬性與方法。詳細資訊請參閱[混入的貢獻指南](/zh-TW/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#mixins)。
- 若介面包含特殊方法，例如字串轉換方法 (`toString()`) 或 JSON 轉換方法 (`toJSON()`)，應該加以記錄。
- 若介面有具名建構子（named constructor），例如 `HTMLImageElement` 的 `Image()`，也應該列出。

#### 建構子頁面

每個介面最多只能有一個建構子（constructor），該建構子會在介面頁面的子頁面中記錄。該頁面描述建構子的用途，並展示其語法、使用範例、瀏覽器相容性資訊等。其網址 slug 與建構子名稱相同，並通常與介面名稱相同；標題格式為「介面名稱.建構子名稱()」。

範例：

- 標題：_AudioContext.AudioContext()_
- Slug：_AudioContext_
- URL：[https://developer.mozilla.org/zh-TW/docs/Web/API/AudioContext/AudioContext](/zh-TW/docs/Web/API/AudioContext/AudioContext)

#### 屬性頁面

每個介面可能擁有零個或多個屬性（property），這些屬性會記錄在介面頁面的子頁面中。每個頁面會描述該屬性的用途，並展示其語法、使用範例、瀏覽器相容性資訊等。其網址 slug 為屬性名稱，而標題格式為「介面名稱.屬性名稱」。

範例：

- 標題：_AudioContext.state_
- Slug：_state_
- URL：[https://developer.mozilla.org/zh-TW/docs/Web/API/AudioContext/state](/zh-TW/docs/Web/API/BaseAudioContext/state)

<!---->

#### 方法頁面

每個介面可能擁有零個或多個方法（method），這些方法會記錄在介面頁面的子頁面中。每個頁面會描述該方法的用途，並展示其語法、使用範例、瀏覽器相容性資訊等。其網址 slug 為方法名稱，而標題格式為「介面名稱.方法名稱()」。

範例：

- 標題：_AudioContext.close()_
- Slug：_close_
- URL：[https://developer.mozilla.org/zh-TW/docs/Web/API/AudioContext/close](/zh-TW/docs/Web/API/AudioContext/close)

<!---->

- 標題：_AudioContext.createGain()_
- Slug：_createGain_
- URL：[https://developer.mozilla.org/zh-TW/docs/Web/API/AudioContext/createGain](/zh-TW/docs/Web/API/BaseAudioContext/createGain)

#### 事件頁面

事件應作為其目標介面的子頁面來記錄，其網址 slug 應為 `_事件名稱_event`，標題格式則為 `介面名稱: 事件名稱 event`。

請**不要**為 `on` 事件處理器（event handler property）建立獨立頁面，應該在 `事件名稱_event` 頁面內一併說明如何透過 `addEventListener` 及 `on` 事件處理器來監聽該事件。

範例：

- 標題：_XRSession: end event_
- Slug：_end_event_
- URL：[https://developer.mozilla.org/zh-TW/docs/Web/XRSession/end_event](/zh-TW/docs/Web/API/XRSession/end_event)

#### 概念/指南頁面

大多數 API 參考文件至少會包含一篇指南，有時也會搭配概念頁面。基本上，每個 API 參考文件應至少包含一篇名為「使用 _API 名稱_」的指南，說明如何使用該 API；若 API 較為複雜，則可能需要多篇使用指南來分別介紹其不同面相。

如果需要，也可以新增名為「*API 名稱*概念」的文章，解釋該 API 背後的理論，幫助開發者更有效地使用它。

這些文章應作為 API 總覽頁面的子頁面。例如，Web Audio API 包含四篇指南及一篇概念文章：

- [https://developer.mozilla.org/zh-TW/docs/Web/API/Web_Audio_API/Using_Web_Audio_API](/zh-TW/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [https://developer.mozilla.org/zh-TW/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API](/zh-TW/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [https://developer.mozilla.org/zh-TW/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics](/zh-TW/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [https://developer.mozilla.org/zh-TW/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API](/zh-TW/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

#### 範例

你應該建立一些範例來展示該 API 最常見的使用情境。這些範例可以放置在任何你認為適當的位置，但還是建議上傳至 [MDN GitHub 倉儲](https://github.com/mdn/)。

#### 全部列出來

列出所有這些子頁面有助於追蹤它們。例如：

- **Web_Audio_API**
- **AudioContext**
  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - …
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - …
- **AudioNode**
  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - …
  - AudioNode.connect(Param)
  - …
- **AudioParam**
- **Events**（須更新清單）
  - start
  - end
  - …

清單中的每個介面都應該有獨立頁面，作為 `https://developer.mozilla.org/zh-TW/docs/Web/API` 的子頁面。例如，{{domxref("AudioContext")}} 的文件會位於 `https://developer.mozilla.org/zh-TW/docs/Web/API/AudioContext`。每個[介面頁面](#interface_pages)會說明該介面的功能，並列出所有方法與屬性，而每個方法與屬性則會各自擁有獨立子頁面。例如，{{domxref("BaseAudioContext/currentTime")}} 會記錄於 `https://developer.mozilla.org/zh-TW/docs/Web/API/AudioContext/currentTime`。

## 建立頁面

現在，你可以依照以下結構建立所需的頁面。我們 [MDN content 倉儲的 README](https://github.com/mdn/content#adding-a-new-document) 提供了建立新文件的指引，而[頁面類型](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Page_types)指南則包含更多範例與頁面模板，供你參考。

### 總覽頁面架構

API 總覽頁面的長度會因 API 規模而異，但基本結構大致相同。例如，你可以參考 [Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API) 這類較大的總覽頁面。

總覽頁面的主要結構如下：

1. **描述（Description）**：總覽頁面的首段應提供 API 的簡要描述說明核心用途。
2. **概念及使用方式（Concepts and usage）**：此章節應命名為「*API 名稱*的概念與使用」，概述 API 主要功能、解決的問題及基本使用方式。內容應保持簡潔，不用深入程式碼或具體實作細節。
3. **介面列表（List of interfaces）**：此章節應命名為「*API 名稱*介面」，列出組成 API 的所有介面，並提供連結至各自的參考頁面及附上簡要描述。你可以使用 `\\{{domxref}}` 巨集來快速建立這些頁面。
4. **範例（Examples）**：此章節應展示 API 的一至兩個常見使用範例。
5. **規範表格（Specifications table）**：須包含 API 的規範參考表格，詳細資訊請參閱「建立規範參考表格」章節。
6. **瀏覽器相容性（Browser compatibility）**：須提供 API 瀏覽器相容性表格，詳見[相容性表格](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)。
7. **參見（See also）**：此章節適合作為進一步學習的連結，包括 MDN 內外部的教學文件、範例、函式庫等。

### 介面頁面架構

現在你已準備好開始撰寫介面頁面了。每個介面參考頁面應遵循以下結構：

1. **`\\{{APIRef}}` 巨集**：首行應包含 `\\{{APIRef}}` 巨集，並以 API 名稱作為參數，例如 `\\{{APIRef("Web Audio API")}}`。此巨集會在介面頁面左側建立參考選單，包含屬性、方法及其它快速連結，這些內容由 [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) 巨集所定義（若你的 API 尚未列入 GroupData，請聯繫相關人員新增）。選單外觀類似於下方截圖。
   ![此截圖顯示了 OscillatorNode 介面的垂直導覽選單，內含方法與屬性的子清單，這是由 APIRef 巨集自動生成的](apiref-links.png)
2. **功能狀態（Feature status）**：若 API 屬於「非標準」、「實驗性」或「已棄用」，則會自動載入對應的狀態橫幅。如須新增或更新功能狀態，請參閱[如何新增或更新功能狀態](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses)。
3. **描述（Description）**：首段應提供該介面的簡短描述，說明核心用途。你也可以加入額外段落來補充更多資訊。若該介面實際上是字典（dictionary），則應使用「字典」這個術語，而非「介面」。
4. **繼承圖（Inheritance diagram）**：使用 [`\\{{InheritanceDiagram}}`](https://github.com/mdn/yari/blob/main/kumascript/macros/InheritanceDiagram.ejs) 巨集來嵌入該介面的 SVG 繼承圖。
5. **屬性與方法列表（List of properties, List of methods）**：這些章節應分別命名為「屬性」與「方法」，並使用 `\\{{domxref}}` 巨集連結至各自參考頁面及提供簡要描述。這些列表應使用[描述/定義列表](/zh-TW/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists) 來標記，每項描述應盡量簡潔（最好為一句話）。你可以參閱「使用 `\\{{domxref}}` 巨集來參照其它 API 功能」章節，以更快速地建立連結至其它頁面。

   在列出屬性或方法前，應標示該介面的繼承關係，格式如下（以斜體呈現）：

   - _此介面未實作任何專屬屬性，但自 `\\{{domxref("XYZ")}}` 和 `\\{{domxref("XYZ2")}}` 繼承屬性。_
   - _此介面也自 `\\{{domxref("XYZ")}}` 和 `\\{{domxref("XYZ2")}}` 繼承屬性。_
   - _此介面未實作任何專屬方法，但自 `\\{{domxref("XYZ")}}` 和 `\\{{domxref("XYZ2")}}` 繼承方法。_
   - _此介面也自 `\\{{domxref("XYZ")}}` 和 `\\{{domxref("XYZ2")}}` 繼承方法。_

   > [!NOTE]
   > 若屬性為唯讀（read-only），則應在 `\\{{domxref}}` 連結的同一行加入 `\\{{ReadOnlyInline}}` 巨集，以生成「唯讀（Read only）」標記。若屬性為實驗性、非標準或已棄用，應先使用 `\\{{experimentalInline}}`、`\\{{non-standard_Inline}}` 或 `\\{{deprecatedInline}}` 巨集進行標記。

6. **範例（Examples）**：提供一段程式碼範例，展示 API 主要功能的典型使用方式。不用列出完整程式碼，只須挑選其中較有價值的部分。若需要完整的程式碼，則可提供 [GitHub](https://github.com/) 倉儲的連結，其中包含完整範例，或使用 [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) 功能建立可在線上執行的範例（前提是僅使用客戶端程式碼）。如果範例具有視覺化效果，也可以使用 MDN 的[即時範例](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Live_samples)（Live Sample）功能，讓程式碼可在頁面上即時執行。
7. **規範表格（Specifications table）**：此處應包含 API 的規範表格，詳情請參閱「建立規範參考表格」章節。
8. **瀏覽器相容性（Browser compatibility）**：須提供 API 瀏覽器相容性表格，詳見[相容性表格](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)。
9. **Polyfill**：如果該 API 需要 Polyfill 以在未支援該功能的瀏覽器上可以使用，請在此處提供 Polyfill 章節；若不需要 Polyfill，則可省略。
10. **參見（See also）**：此章節適合作為進一步學習的連結，包括 MDN 內外部的教學、範例、函式庫等。我們對外部連結的政策相對寬鬆，但請留意以下事項：

    - **避免重覆資訊**：若 MDN 已有對應頁面，請直接連結至該頁面，而非新增相同內容的頁面。
    - **不用顯示作者名稱**：MDN 為中立文件平台，應僅連結文件，作者名稱會在那邊顯示。
    - **謹慎使用部落格文章**：部落格內容可能過時（例如舊語法或錯誤的相容性資訊），只有當該文章提供了維護文件無法涵蓋的重要價值時，才適合引用。
    - **避免使用指使句**：不要使用「參見……以獲取更多資訊」或「點擊……」，因為你無法確保讀者是否能夠「看到」或「點擊」該連結（例如在紙本文件中）。

#### 介面頁面範例

以下為介面頁面的範例：

- {{domxref("Request")}}（來自 [Fetch API](/zh-TW/docs/Web/API/Fetch_API)）
- {{domxref("SpeechSynthesis")}}（來自 [Web Speech API](/zh-TW/docs/Web/API/Web_Speech_API)）

### 屬性頁面架構

請將屬性頁面建立為其所屬介面的子頁面。你可以複製現有屬性頁面的結構作為新頁面的基礎。

請確保屬性頁面的名稱符合 `Interface.property_name` 命名規則。

屬性頁面應包含以下章節：

1. **標題（Title）**：頁面標題應為 **InterfaceName.propertyName**，其中介面名稱的字首須大寫。雖然 JavaScript 會在物件的原型鏈上實作介面，但與 [JavaScript 參考文件](/zh-TW/docs/Web/JavaScript/Reference)不同，我們**不**在標題中包含 `.prototype.`。
2. **`\\{{APIRef}}` 巨集**：每個屬性頁面的首行應包含 `\\{{APIRef}}` 巨集，並將 API 名稱作為參數，例如 `\\{{APIRef("Web Audio API")}}`。此巨集會在介面頁面左側建立參考選單，包含屬性、方法及其它快速連結，這些內容由 [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) 巨集所定義（若 API 尚未列入 GroupData，請聯繫相關人員新增）。
   ![此截圖顯示了 OscillatorNode 介面的垂直導覽選單，內含方法與屬性的子清單，這是由 APIRef 巨集自動產生的](apiref-links.png)
3. **功能狀態（Feature status）**：若屬性為「非標準」、「實驗性」或「已棄用」，則會自動載入對應的狀態橫幅。如須新增或更新功能狀態，請參閱[如何新增或更新功能狀態](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses)。

4. **描述（Description）**：屬性頁面的首段應提供該屬性的簡要說明，必要時可補充額外資訊，例如預設值（default/initial value）及是否為唯讀（read-only）。第一句應依以下格式撰寫：

   - **唯讀屬性**：
     - **`InterfaceName.property`** 唯讀屬性回傳一個 \\{{domxref("type")}}，它…
   - **其它屬性**：
     - **`InterfaceName.property`** 屬性是一個 \\{{domxref("type")}}，它…

   > **注意**：`InterfaceName.property` 應使用 `<code>` 包裹，且首次出現時應加上粗體 `<strong>` 強調。

5. **值（Value）**：此章節應描述該屬性的值，包括資料型態及用途。例如，請參考 {{domxref("SpeechRecognition.grammars")}}。

6. **範例（Examples）**：提供該屬性的典型使用範例。建議先展示簡單範例，說明如何建立物件及存取該屬性，再加入較進階的範例。若範例程式碼較長，請僅列出關鍵部分，完整範例可上傳至 [GitHub 倉儲](https://github.com/)，並透過 [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) 提供線上範例（前提是僅使用客戶端程式碼）。若範例具視覺效果，也可使用 MDN 的[即時範例](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Live_samples)（Live Sample）功能。
7. **規範表格（Specifications table）**：此處應包含 API 的規範表格，詳情請參閱「建立規範參考表格」章節。
8. **瀏覽器相容性（Browser compatibility）**：需要提供 API 瀏覽器相容性表格，詳見[相容性表格](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)。
9. **參見（See also）**：此章節適合作為進一步學習的連結，像是影響該屬性的方法或相關事件；此外，MDN 內外部的教學、範例與函式庫等連結也可加入，但建議優先考慮將這些資訊整合至介面參考頁面。

#### 屬性頁面範例

以下是屬性頁面的範例：

- {{domxref("Request.method")}}（來自 [Fetch API](/zh-TW/docs/Web/API/Fetch_API)）
- {{domxref("SpeechSynthesis.speaking")}}（來自 [Web Speech API](/zh-TW/docs/Web/API/Web_Speech_API)）

### 方法頁面架構

請將方法頁面建立為其所屬介面的子頁面。你可以複製現有方法頁面的結構作為新頁面的基礎。

方法頁面應包含以下章節：

1. **標題（Title）**：頁面標題應為 **InterfaceName.method()**（須包含括號 `()`），但網址 slug（頁面 URL 結尾部分）**不要**包含括號。此外，介面名稱字首須大寫。雖然 JavaScript 會在物件的原型鏈上實作介面，但與 [JavaScript 參考文件](/zh-TW/docs/Web/JavaScript/Reference)不同，我們**不**在標題中包含 `.prototype.`。
2. **`\\{{APIRef}}` 巨集**：每個方法頁面的首行應包含 `\\{{APIRef}}` 巨集，並將 API 名稱作為參數，例如 `\\{{APIRef("Web Audio API")}}`。此巨集會在介面頁面左側建立參考選單，包含屬性、方法及其它快速連結，這些內容由 [GroupData](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) 巨集所定義（若 API 尚未列入 GroupData，請聯繫相關人員新增）。
   ![此截圖顯示了 OscillatorNode 介面的垂直導覽選單，內含方法與屬性的子清單，這是由 APIRef 巨集自動產生的](apiref-links.png)
3. **功能狀態（Feature status）**：若方法為「非標準」、「實驗性」或「已棄用」，則會自動載入對應的狀態橫幅。如須新增或更新功能狀態，請參閱[如何新增或更新功能狀態](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses)。

4. **描述（Description）**：方法頁面的首段應簡要說明該方法的用途，必要時可補充額外資訊，例如預設參數值、該方法所依賴的理論以及參數值的作用。

   - 第一句應依以下格式撰寫：
     - **`InterfaceName.method()`** 方法介面…

   > **注意**：`InterfaceName.method()` 應使用 `<code>` 包裹，且首次出現時應加上粗體 `<strong>` 強調。

5. **語法（Syntax）**：語法章節應包含 2 到 3 行範例，通常是建立該介面後，呼叫該方法的範例。

   - 語法應符合以下格式：
     - `method(param1, param2, …)`

   語法章節應包含以下三個子章節（可參考 {{domxref("SubtleCrypto.sign()")}} 的範例）：

   - **「參數（Parameters）」**：應使用定義列表（或無序列表）列出方法的不同參數名稱及描述。對於可選參數，請在參數名稱旁加入 `{{optional_inline}}` 巨集；若無，則可省略。
   - **「回傳值（Return value）」**：描述該方法的回傳值，可能是原始型別的值（如 `double` 或 `boolean`），也可能是更複雜的介面物件。在此情況下，可使用 `\\{{domxref}}` 巨集連結至 MDN API 頁面（假如存在的話）。若無回傳值，則應標記為 `\\{{jsxref('undefined')}}`（顯示為 {{jsxref("undefined")}}）。
   - **「例外（Exceptions）」**：列出該方法可能拋出的例外類型及觸發條件。若無，則可省略。

6. **範例（Examples）**：提供該方法的典型使用範例。應先展示簡單範例，再加入較進階的範例。若範例程式碼較長，請僅列出關鍵部分，完整範例可上傳至 [GitHub 倉儲](https://github.com/)，並透過 [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) 提供線上範例（前提是僅使用客戶端程式碼）。若範例具視覺效果，也可使用 MDN 的[即時範例](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Live_samples)（Live Sample）功能。

7. **規範表格（Specifications table）**：此處應包含 API 的規範表格，詳情請參閱「建立規範參考表格」章節。

8. **瀏覽器相容性（Browser compatibility）**：需要提供 API 的瀏覽器相容性表格，詳見[相容性表格](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)。

#### 方法頁面範例

以下是方法頁面的範例：

- {{domxref("Document.getAnimations")}}（來自 [Web Animations API](/zh-TW/docs/Web/API/Web_Animations_API)）
- {{domxref("Window/fetch", "fetch()")}}（來自 [Fetch API](/zh-TW/docs/Web/API/Fetch_API)）

## 側邊欄

當你建立好 API 參考頁面後，你會想在頁面中插入合適的側邊欄，以便將這些頁面關聯起來。我們的 [API 參考側邊欄](/zh-TW/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars)指南解釋了具體作法。
