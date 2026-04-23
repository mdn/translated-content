---
title: API 建構子子頁面範本
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE]
> _發布前請將此整個說明性註解移除_
>
> ---
>
> **頁面前置資料：**
>
> 頁面頂部的前置資料用來定義「頁面元資料」。這些值應根據所使用的建構子進行適當更新。
>
> ```md
> ---
> title: NameOfTheParentInterface：NameOfTheConstructor() 建構子
> slug: Web/API/NameOfTheParentInterface/NameOfTheConstructor
> page-type: web-api-constructor
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheConstructor
> ---
> ```
>
> - **title**
>   - : 頁面頂部所顯示的標題。格式為 `NameOfTheParentInterface：NameOfTheConstructor() 建構子`。例如，[Request()](/zh-TW/docs/Web/API/Request/Request) 建構子的 _title_ 為 `Request：Request() 建構子`。
> - **slug**
>   - : URL 中 `https://developer.mozilla.org/zh-TW/docs/` 之後的部分。格式將為 `Web/API/NameOfTheParentInterface/NameOfTheConstructor`。注意，別名（slug）中的建構子函數名稱不包含括號（結尾為 `NameOfTheConstructor` 而非 `NameOfTheConstructor()`）。
> - **page-type**
>   - : 對於 Web/API 建構子，`page-type` 鍵始終為 `web-api-constructor`。
> - **status**
>   - : 描述此功能狀態的標誌。這是一個陣列，可能包含以下一個或多個值：`experimental`、`deprecated`、`non-standard`。此鍵不應手動設定，而是根據瀏覽器相容性資料中的值自動設定。請參閱[如何新增或更新功能狀態](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses)。
> - **browser-compat**
>   - : 將佔位符值 `path.to.feature.NameOfTheConstructor` 替換為[瀏覽器相容性資料倉庫](https://github.com/mdn/browser-compat-data)中該建構子的查詢字串。工具鏈會自動使用此鍵來填充相容性和規範部分（取代 `\{{Compat}}` 和 `\{{Specifications}}` 巨集）。
>
>     注意，你可能需要先在我們的[瀏覽器相容性資料倉庫](https://github.com/mdn/browser-compat-data)中建立或更新該 API 建構子的條目，且該 API 條目需包含規格資訊。請參閱我們的[如何執行此操作的指南](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)。
>
> ---
>
> **頁面頂部巨集**
>
> 內容區頂部（前置資料下方）會出現多個巨集呼叫。
>
> 這些巨集由工具鏈自動新增（無需手動新增或移除）：
>
> - `\{{SeeCompatTable}}`——此巨集會生成一個**這是實驗性技術**橫幅，表示該技術為[實驗性質](/zh-TW/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#實驗性質)。
>   如果該技術是實驗性的，且在 Firefox 中透過偏好設定隱藏，你還應在 [Firefox 實驗功能](/zh-TW/docs/Mozilla/Firefox/Experimental_features) 頁面中為其填寫條目。
> - `\{{Deprecated_Header}}`——此巨集會生成一個**已棄用**橫幅，表示該技術的使用已被[不建議](/zh-TW/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#已棄用)。
> - `\{{Non-standard_Header}}`——此巨集會生成一個**非標準**橫幅，表示該功能不屬於任何規範。
>
> 你應根據以下建議更新或移除下列巨集：
>
> - `\{{SecureContext_Header}}`——此巨集會生成一個**安全上下文**橫幅，表示該技術僅在[安全上下文](/zh-TW/docs/Web/Security/Defenses/Secure_Contexts)中可用。如果該技術非安全上下文專用，則可移除此巨集呼叫。如果是，則你還應在[受限於安全環境的功能](/zh-TW/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)頁面中為其新增條目。
> - `\{{AvailableInWorkers}}`——此巨集會生成一個 **Worker 可用**的註記，表示該技術在 [Worker 上下文](/zh-TW/docs/Web/API/Web_Workers_API)中可用。如果該技術僅在 window 上下文中可用，則可移除此巨集呼叫。如果該技術也或僅在 Worker 上下文中可用，則你可能需要傳遞參數以指明其可用性（請參閱 [\\{{AvailableInWorkers}} 巨集原始碼](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)了解所有可用值），並可能需在 [Worker 中可用的 Web API](/zh-TW/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#worker_中可用的_web_api) 頁面中為其新增條目。
> - `\{{APIRef("GroupDataName")}}`——此巨集會生成左側參考側邊欄，顯示與當前頁面相關的快速參考連結。例如，[WebVR API](/zh-TW/docs/Web/API/WebVR_API) 中的每個頁面都有相同的側邊欄，指向該 API 的其他頁面。若要為你的 API 生成正確的側邊欄，你需要在我們的 GitHub repo 中新增一個 `GroupData` 條目，並在巨集呼叫中以 _GroupDataName_ 替換該條目名稱。請參閱我們的 [API 參考側邊欄指南](/zh-TW/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars)以獲取更多資訊。
> - 複製此頁面時，請記得移除 `\{{MDNSidebar}}` 巨集。
>
> 請勿手動新增狀態標頭巨集。請參閱[如何新增或更新功能狀態](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Feature_status#如何新增或更新功能狀態)了解如何將這些狀態新增至頁面中。
>
> 以下展示了**安全上下文**、**Worker 可用**、**實驗性**、**已棄用**以及**非標準**橫幅的範例，這些橫幅將在此說明性註解區塊後顯示。
>
> _發布前請記得移除此整個說明性註解。_

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

在頁面內容開始處，撰寫一段簡介文字——首先點名建構子並說明其用途。這通常應該是一到兩個簡短的句子。你可以從相應 API 參考頁面的建構子摘要中複製大部分內容。

## 語法

根據我們的[語法部分](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections)指南的說明，填寫語法框。

### 參數

- `parameter1` {{optional_inline}}
  - : 在此提供該參數及其功能的簡短描述。每個參數請包含一個術語及其定義。若該參數非選用，請移除 \\{{optional_inline}} 巨集呼叫。
- `parameter2`
  - : 以此類推。

### 回傳值

提供建構子回傳值的描述，包括資料型別及其所代表的含義。通常僅為「一個 `\{{domxref("NameOfTheParentInterface")}}` 物件的實例」。

_使用此巨集時，請移除 markdown 文件中的反引號與反斜線。_

### 例外

列出該建構子可能引發的所有例外狀況。針對每個例外狀況，請提供一個術語及其定義。

- `Exception1`
  - : 說明該例外狀況如何被引發。
- `Exception2`
  - : 說明該例外狀況如何被引發。

請注意，我們有兩種例外狀況：{{domxref("DOMException")}} 物件以及一般的 JavaScript 例外狀況，例如 {{jsxref("TypeError")}} 與 {{jsxref("RangeError")}}。網頁開發者需要知道：

- 拋出的物件是什麼
- 對於屬於 `DOMException` 物件的例外狀況，其 `name` 屬性的值。

下面是一個範例，展示一個方法可能拋出 `DOMException`（其 `name` 為 `IndexSizeError`）、另一個 `DOMException`（其 `name` 為 `InvalidNodeTypeError`），以及一個型別為 `TypeError` 的 JavaScript 例外狀況：

- `IndexSizeError` {{domxref("DOMException")}}
  - : 拋出……
- `InvalidNodeTypeError` {{domxref("DOMException")}}
  - : 拋出……
- {{jsxref("TypeError")}}
  - : 拋出……

## 範例

### 描述性標題

每個範例必須有一個 H3 標題，標明該範例的名稱。該標題應能描述範例所執行的操作。例如，「一個簡單的範例」並未說明任何內容，因此並非理想的標題。標題應保持簡潔。若需進一步說明，請在標題下方以段落形式補充說明。

請參閱我們有關如何新增[程式碼範例](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Code_examples)的指南以獲取更多資訊。

> [!NOTE]
> 有時你可能會想連結到其他頁面上提供的範例。
>
> **情境 1**：如果你在此頁面上有部分範例，且在其他頁面上還有更多範例：
>
> 請為此頁面上的每個範例新增一個 H3 標題（`###`），然後再新增一個 H3 標題（`###`），內容為「更多範例」，在該標題下連結至其他頁面的範例。例如：
>
> ```md
> ## 範例
>
> ### 使用 fetch API
>
> fetch 的範例
>
> ### 更多範例
>
> 連結至其他頁面的更多範例
> ```
>
> **情境 2**：如果你僅在其他頁面上提供範例，而此頁面上沒有任何範例：
>
> 請不要新增任何 H3 標題；只需在 H2 標題「範例」下直接新增連結。例如：
>
> ```md
> ## 範例
>
> 有關此 API 的範例，請參見 [fetch() 頁面](https://example.org/)。
> ```

## 規範

`\{{Specifications}}`

_使用此巨集時，請移除 markdown 文件中的反引號與反斜線。_

## 瀏覽器相容性

`\{{Compat}}`

_使用此巨集時，請移除 markdown 文件中的反引號與反斜線。_

## 參見

新增與當前 API 相關的參考頁面與指南連結。有關更多指導，請參閱*寫作風格指南*中的[參見部分](/zh-TW/docs/MDN/Writing_guidelines/Writing_style_guide#參見部分)。

- 連結 1
- 連結 2
- 連結（年份）
