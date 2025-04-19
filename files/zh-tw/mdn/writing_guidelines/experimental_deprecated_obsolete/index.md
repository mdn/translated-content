---
title: 實驗性、已棄用與已廢止
slug: MDN/Writing_guidelines/Experimental_deprecated_obsolete
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

這些術語通常與技術和規範相關，並用於 MDN Web Docs 上標示技術的狀態。關於這些術語的定義，MDN Web Docs 與 [瀏覽器相容性資料（BCD）](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) 倉庫保持一致。以下將說明這些術語在 MDN Web Docs 上的使用情境。

## 實驗性

當某項技術在 MDN Web Docs 上標示為「實驗性」時，表示該技術仍處於新生且不成熟的階段，目前正「在被加入」網路平台的過程中（或正在考慮加入）。標示為實驗性意味著讀者在任何正式專案（即非僅為展示或實驗的專案）中使用該技術前，應仔細考慮。歡迎[嘗試實驗性功能](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)並向瀏覽器廠商及標準制定者提供回饋。

當技術標示為**實驗性**時，可能符合以下一項或多項條件：

- 僅有**一個**現代主流瀏覽器的排版引擎在正式版本中預設實作並啟用。
- 僅能透過組態變更（如偏好設定或旗標）啟用，無論支援的排版引擎數量為何。
- 其定義規範很可能會有重大且不相容的變動（即可能導致依賴該功能的現有程式碼失效）。

> [!NOTE]
> 若某功能僅於一個排版引擎釋出，即使在其他排版引擎的預覽版本（或透過設定偏好或旗標）可用，仍視為實驗性。

當技術的**實驗性**狀態不再適用時，通常會符合以下一項或多項條件：

- 於**兩個或以上**主流瀏覽器排版引擎中預設支援。
- 於單一瀏覽器排版引擎中預設支援已達兩年以上，且未有重大變動。
- 其定義規範不太可能再有破壞相容性的變動。

這些條件的範例可參見 [experimental 標記](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental) 的 BCD 文件。

通常，若某技術已獲多個主流瀏覽器支援，規範也會趨於穩定，但並非總是如此。另一方面，有些技術雖然規範穩定，但瀏覽器尚未原生支援。例如 [IMSC](/zh-TW/docs/Related/IMSC) 就是透過 JavaScript polyfill 使用。

屬於活躍規範或標準化流程中的功能，且未標示為**已棄用**，則稱為**標準化進程**中的技術。

## 已棄用

在 MDN Web Docs 上，**已棄用**用於標示不再建議使用的 API 或技術。已棄用的 API 或技術未來可能會被移除，或僅為相容性目的而保留，雖然目前仍可運作。我們建議避免使用標示為已棄用的功能。

關於**已棄用**的定義，請參見 [deprecated 標記](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated) 的 BCD 文件。

## 已廢止

在 MDN Web Docs 上，**已廢止**一詞過去用來表示某 API 或技術不僅不再建議使用，且瀏覽器也已不再實作。由於**已廢止**與**已棄用**的區別幫助不大，我們現已不再於 MDN Web Docs 使用「已廢止」一詞。

> [!NOTE]
> 若你發現有「已廢止」的用法，應將其移除或改為「已棄用」。

## 移除內容的指引

在新規範開發過程中，或像 HTML 這類持續演進的標準，有時會新增元素、方法、屬性等，並在一段時間後移除。有時這個過程很快，有時則需數月甚至數年。這會讓如何處理規範中移除項目的文件變得棘手。

以下是當某項目自規範移除時，協助你決定如何處理的指引。

> [!NOTE]
> 本段落中，「項目」泛指規範中的任何內容：元素或其屬性、介面或其方法、屬性或其他成員等。

### 若該項目從未被實作

若該項目**從未**在**任何**瀏覽器的正式版本中實作，即使是透過偏好設定或旗標，也未曾啟用，請將文件中所有相關內容刪除。

- 若該項目有專屬的文件頁面（如 {{domxref("RTCPeerConnection.close()")}}），請刪除該頁面。若移除的是介面，則需一併移除描述該介面屬性與方法的子頁面。
- 從屬性、方法等列表中移除該項目。例如，介面方法需從該介面總覽頁的「方法」區塊移除。
- 搜尋該介面、元素等總覽頁的文字內容，移除所有對該項目的提及，並確保語句通順無誤。這可能不僅是刪除文字，也可能需重寫句子或段落，甚至移除整個內容區塊。
- 同樣地，檢查相關 API 或技術的教學與指南，移除所有對該項目的討論，並確保語句通順無誤。這可能不僅是刪除文字，也可能需重寫句子或段落，甚至移除整個內容區塊。
- 搜尋 MDN Web Docs 其他地方是否有提及該項目。若有，也請一併移除。由於未曾實作，通常不會有太多討論。
- 若 [瀏覽器相容性資料倉庫](https://github.com/mdn/browser-compat-data) 的 JSON 檔案中有該項目的資料，請將相關物件從 JSON 程式碼中刪除，並提交 pull request，於提交訊息與說明中說明原因。請小心不要破壞 JSON 語法。

### 若該項目僅於瀏覽器以旗標啟用

若該項目曾於任何瀏覽器的正式版本中實作，但**僅**能透過偏好設定或旗標啟用，請勿立即從文件中刪除。請依下列方式將該項目標示為**已棄用**：

- 於瀏覽器相容性資料倉庫更新該項目的狀態資料，並[提交 pull request](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data)。
- 搜尋該介面、元素等總覽頁的說明文字，於適當位置加入警告框，內容如「[項目] 已自規範移除，且即將自瀏覽器移除。請參見 [連結] 以取得替代方案」。
- 同樣地，檢查相關 API 或技術的教學與指南，加入類似警告。
- 搜尋 MDN Web Docs 其他地方是否有提及該項目，並加入類似警告框。
- 未來某個時點，可能會決定將該項目自文件中移除；雖然通常不會這麼做，但若該項目極少被使用或缺乏價值，可能會這麼處理。
- 於 [瀏覽器相容性資料倉庫](https://github.com/mdn/browser-compat-data) 更新相關條目，反映該項目的廢止狀態。

### 若該項目於瀏覽器預設啟用

若該項目曾於一個或多個瀏覽器正式版本中預設啟用，請依下列方式將該項目標示為**已棄用**：

- 於瀏覽器相容性資料倉庫更新該項目的狀態資料，並[提交 pull request](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data)。
- 搜尋該介面、元素等總覽頁的說明文字，於適當位置加入警告框，內容如「[項目] 已自規範移除並已棄用。未來可能自瀏覽器移除，請勿再使用。請參見 [連結] 以取得替代方案」。
- 同樣地，檢查相關 API 或技術的教學與指南，加入類似警告。
- 搜尋 MDN Web Docs 其他地方是否有提及該項目，並加入類似警告框。
- 這類項目通常不會很快自文件中移除，甚至可能永遠保留。
- 於 [瀏覽器相容性資料倉庫](https://github.com/mdn/browser-compat-data) 更新相關條目，反映該項目的棄用狀態。

請依具體情境斟酌警告訊息與其他文字的措辭。不同項目可能需要不同的處理方式。如有疑問，歡迎於 [MDN Web Docs 聊天室](/zh-TW/docs/MDN/Community/Communication_channels#chat_rooms) 詢問。

## 規範衝突的文件撰寫指引

有時（雖然很少見），不同規範版本（通常是 W3C 與 WHATWG）之間會有衝突。例如，一個版本將某功能標示為已棄用，而另一版本則沒有。在這種情況下，請考量實際瀏覽器的行為，並以「重要」註記摘要目前狀態。例如，截至 2019 年 1 月，[`inputmode`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/inputmode) 全域屬性就有規範衝突，當時的摘要如下：

> [!WARNING]
> 規範衝突：WHATWG 規範列有 [`inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode)，且現代瀏覽器正逐步支援。
> [W3C HTML 5.2 規範](https://html.spec.whatwg.org/multipage/index.html#contents) 則已不再列出（即標示為已廢止）。
> 在達成共識前，建議以 WHATWG 的定義為準。

## 參見

- [功能狀態巨集](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
