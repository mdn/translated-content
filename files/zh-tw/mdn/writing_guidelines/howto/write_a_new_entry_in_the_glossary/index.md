---
title: 如何建立術語表條目
slug: MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

本文說明如何在 [MDN Web Docs 術語表：與 Web 相關的術語定義](/zh-TW/docs/Glossary)中新增條目並建立連結，同時提供撰寫詞彙條目的格式與內容指引。

術語表用於定義所有在 MDN 內容中可能遇到的術語、行話、縮寫與首字母縮略詞，幫助讀者理解網路及網路開發相關概念。

基於網路技術不斷變化，術語表也許永遠無法涵蓋所有內容。透過貢獻新條目或修正現有問題，你能幫助我們持續更新術語表並填補闕漏。

參與術語表編輯是個讓網路資訊更易理解的簡單方式；你不用高深的技術能力。詞彙條目應該保持簡潔明瞭。

## 如何撰寫條目

首先，選擇你想撰寫詞彙條目的主題。如果你正在尋找需要新增的詞彙條目，請查看[MDN Web Docs 術語表：與 Web 相關的術語定義](/zh-TW/docs/Glossary)側邊欄的詞彙列表。

如果你有新詞彙條目的想法，請在[MDN Web Docs 術語表：與 Web 相關的術語定義](https://github.com/mdn/content/tree/main/files/zh-TW/glossary)下方[建立頁面](/zh-TW/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#creating_pages)。

### 撰寫摘要

詞彙頁面的**第一段**應為該術語的精簡描述，最好不超過**兩句話**。確保讀者能立即理解該術語的意思。

> [!NOTE]
> 請別直接複製貼上其它網站的內容（特別是維基百科，因為其授權版本範圍較小，且與 MDN 的授權不相容）。你的詞彙條目應為**原創內容**。

#### 撰寫優良術語表條目

如果需要，可以額外撰寫幾個段落，但請避免將詞彙條目寫成完整的文章。撰寫文章是可以的，但請不要在術語表內建立完整文章。

若不確定該將文章放在哪裡，歡迎隨時[聯繫我們](/zh-TW/docs/MDN/Community/Discussions)。

以下是撰寫詞彙條目的幾項簡單指引，能幫助你撰寫更好的內容：

- 在條目描述中使用詞彙或縮寫時，請建立適當連結。通常，這意味著將相關詞彙連結到術語表的其它頁面。
- 若不影響條目的可讀性，請加入適當的相關詞彙（並建立連結）。良好的相關連結網絡能讓單個頁面或一組頁面更容易使用。
- 思考如果你要查找這個條目，會使用哪些搜尋關鍵字。盡量包含所有你可能會用來搜尋該詞彙的字詞，但請避免使條目內容變得冗長、不易閱讀或語意不通順。

### 透過連結延伸

術語表的條目應始終以*參閱*（See also）段落作結。這個段落應包含連結，以幫助讀者深入探索細節，或學習如何使用相關技術。

最佳實踐是將這些連結分為三類：

- 基礎知識
  - ：這些連結提供關於該術語或主題的較高階資訊，例如指向相關的[維基百科](https://zh.wikipedia.org/)頁面的連結。
- 技術參考
  - ：這些連結提供深入技術資訊，可能來自 MDN Web 文件或其它網站。
- 進一步學習
  - ：這些連結指向教學、練習、範例，或其它幫助讀者學習的指導內容。

## 處理歧義問題

某些術語可能因語境不同而有多種含義。為了消除歧義，請遵循以下指南：

- 該術語的主頁應為消歧義頁面，並包含 [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) 巨集。
- 該術語應有子頁面，分別針對不同語境定義其含義。

我們來舉例說明。術語 _signature_ 在至少兩種不同的語境下具有不同的含義：安全性與函式。

1. 頁面 [Glossary/Signature](/zh-TW/docs/Glossary/Signature) 是包含 [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs) 巨集的消歧義頁面。
2. 頁面 [Glossary/Signature/Security](/zh-TW/docs/Glossary/Signature/Security) 用於定義「數位簽章」在安全性語境下的意義。
3. 頁面 [Glossary/Signature/Function](/zh-TW/docs/Glossary/Signature/Function) 用於定義「函式簽章」的概念。
