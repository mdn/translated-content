---
title: API 事件子頁面範本
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

> [!NOTE]
> _在發布前請刪除此整段說明文字。_
>
> ---
>
> **頁面前置資料：**
>
> 頁面頂部的前置內容用於定義「頁面元資料」。這些值應根據特定事件適當更新。
>
> ```md
> ---
> title: "NameOfTheParentInterface：NameOfTheEvent 事件"
> slug: Web/API/NameOfTheParentInterface/NameOfTheEvent_event
> page-type: web-api-event
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheEvent_event
> ---
> ```
>
> - **title**
>   - : 顯示在頁面頂部的標題。格式為「_父介面名稱_**：**_事件名稱_ **事件**」。例如，[animationcancel](/zh-TW/docs/Web/API/Element/animationcancel_event) 事件屬於 [Window](/zh-TW/docs/Web/API/Window) 介面，其*標題*為 `Window：animationcancel 事件`。
> - **slug**
>   - : `https://developer.mozilla.org/zh-TW/docs/` 之後的 URL 路徑。格式為 `Web/API/父介面名稱/事件名稱_event`。
> - **page-type**
>   - : Web/API 事件的 `page-type` 固定為 `web-api-event`。
> - **status**
>   - : 描述此功能狀態的標記。這是一個陣列，可以包含以下一個或多個值：`experimental`（實驗性）、`deprecated`（已棄用）、`non-standard`（非標準）。此鍵不應手動設定，而是根據[瀏覽器相容性資料](https://github.com/mdn/browser-compat-data)自動設置。
> - **browser-compat**
>   - : 替換 `path.to.feature.事件名稱_event` 為 [瀏覽器相容性數據庫](https://github.com/mdn/browser-compat-data) 中的相應查詢字串。該工具鏈會自動使用此鍵來填充相容性和規範部分（取代 `\{{Compat}}` 和 `\{{Specifications}}` 巨集）。
>
> ---
>
> **頁面頂部巨集**
>
> 內容部分的頂部（緊接著前置內容之後）會包含一些自動添加的巨集，無需手動添加或移除：
>
> - `\{{SeeCompatTable}}`——此巨集會生成一個**這是實驗性技術**橫幅，表示該技術為[實驗性質](/zh-TW/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#實驗性質)。
>   如果該技術是實驗性的，且在 Firefox 中透過偏好設定隱藏，你還應在 [Firefox 實驗功能](/zh-TW/docs/Mozilla/Firefox/Experimental_features) 頁面中為其填寫條目。
> - `\{{Deprecated_Header}}`——此巨集會生成一個**已棄用**橫幅，表示該技術的使用已被[不建議](/zh-TW/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#已棄用)。
> - `\{{Non-standard_Header}}`——此巨集會生成一個**非標準**橫幅，表示該功能不屬於任何規範。
>
> 需要根據以下建議更新或刪除這些巨集：
>
> - `\{{SecureContext_Header}}`——這會產生一個**安全上下文**橫幅，指示該技術僅在[安全性上下文](/zh-TW/docs/Web/Security/Defenses/Secure_Contexts)中可用。如果不是，則可以刪除巨集呼叫。如果是，則也應在[僅限安全性上下文的功能](/zh-TW/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)頁面中填入該巨集所呼叫的條目。
> - `\{{AvailableInWorkers}}`——這會產生一個 **Worker 可用**註釋，表示該技術在 [Worker 上下文](/zh-TW/docs/Web/API/Web_Workers_API)中可用。如果它僅在 Window 上下文中可用，則可以刪除此巨集呼叫。如果它也可用或僅在 Worker 上下文中可用，那麼由於它的可用性，你可能還需要向其傳遞參數（有關所有可用值，請參閱 [\\{{AvailableInWorkers}} 巨集原始碼](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)），你可能還需要在 [Worker 中可用的 Web API](/zh-TW/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#worker_中可用的_web_api) 頁面中為其填入項目。
> - `\{{APIRef("GroupDataName")}}`——這將產生左側參考側邊欄，顯示與目前頁面相關的快速參考連結。例如，[WebVR API](/zh-TW/docs/Web/API/WebVR_API) 中的每個頁面都有相同的側邊欄，指向 API 中的其他頁面。若要為你的 API 產生正確的側邊欄，你需要在我們的 GitHub 倉庫中新增一個 GroupData 條目，並在巨集呼叫中包含該條目的名稱來取代 _GroupDataName_。有關如何操作的信息，請參閱我們的 [API 參考側邊欄](/zh-TW/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars)指南。
>
> 請勿手動新增狀態標頭巨集。請參閱[如何新增或更新功能狀態](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Feature_status#如何新增或更新功能狀態)了解如何將這些狀態新增至頁面中。
>
> 以下展示了**安全上下文**、**Worker 可用**、**實驗性**、**已棄用**以及**非標準**橫幅的範例，這些橫幅將在此說明性註解區塊後顯示。
>
> ---
>
> **父物件連結**
>
> 請從父物件的*事件*區段添加指向此頁面的連結，例如，[Element：wheel 事件](/zh-TW/docs/Web/API/Element/wheel_event) 是從 [`Element` 事件](/zh-TW/docs/Web/API/Element#事件)連結過來的。
>
> 若父物件沒有*事件*區段，請添加一個。如果這是一個新的事件「類別」，則應在 [DOM 事件](/zh-TW/docs/Web/API/Document_Object_Model/Events#事件索引)指南中新增指向父物件此部分的連結。
>
> _請記得刪除這整段說明文字後再發布。_

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

請在頁面內容開頭添加一個簡介段落——首先命名該事件，說明它屬於哪個介面，並描述它的功能。這部分應該儘量用一到兩個簡短的句子來表達。你可以從對應 API 參考頁面中該屬性的摘要中擷取大部分內容。

## 語法

可使用事件名稱搭配 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 方法，或設置事件處理屬性：

```js-nolint
addEventListener("NameOfTheEvent", (event) => { })

onNameOfTheEvent = (event) => { }
```

## 事件類型

若該事件有特殊類型，請列出其繼承關係；否則，標註為通用事件：

_通用的 {{domxref("Event")}}。_

或者，例如：

_{{domxref("XRSessionEvent")}}。繼承自 {{domxref("Event")}}。_

{{InheritanceDiagram("XRSessionEvent")}}

## 事件屬性

若該事件不是通用的 {{domxref("Event")}}，請列出額外的屬性：

_除了下列屬性外，還可以使用父介面 {{domxref("Event")}} 的屬性。_

- {{domxref("XRSessionEvent.session", "session")}} {{ReadOnlyInline}}
  - : 指向與此事件相關的 {{domxref("XRSession")}}。

## 描述

如果你想新增額外的文字（放摘要裡面太長），可加入**描述**區段，包括：

### 觸發條件

描述該事件在何種情況下會被觸發。

### 使用案例

列出該事件的實際應用場景。

## 範例

即使只有一個範例，標題仍使用「範例」。

### 範例標題

每個範例都必須有一個 H3 標題（`###`）來命名該範例。標題應該描述範例的功能。例如，「一個簡單的範例」並沒有說明該範例的任何內容，因此不是一個好的標題。標題應該簡潔明了。如果需要更長的描述，請使用標題後面的段落。

有關如何添加程式碼範例，請參考[如何撰寫程式碼範例](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Code_examples)。

> [!NOTE]
> 有時你會想要連結到另一個頁面上給出的範例。
>
> **情境 1**：如果你在本頁面上有一些範例，而在另一個頁面上也有一些範例：
>
> 為本頁面上的每個範例新增一個 H3 標題（`###`），並在最後一個 H3 標題（`###`）下新增文字「更多範例」，以便你連結到其他頁面上的範例。例如：
>
> ```md
> ## 範例
>
> ### 使用 fetch API
>
> Fetch 的範例
>
> ### 更多範例
>
> 指向其他頁面上的更多範例的鏈接
> ```
>
> **情境 2**：如果你只有其他頁面上的範例，而此頁面上沒有範例：
>
> 請勿新增任何 H3 標題；只需在 H2 標題「範例」下直接新增連結即可。例如：
>
> ```md
> ## 範例
>
> 有關此 API 的範例，請參見 [fetch() 的頁面](https://example.org/)。
> ```

## 規範

`\{{Specifications}}`

_請移除反引號與反斜線來使用此巨集。_

## 瀏覽器相容性

`\{{Compat}}`

_請移除反引號與反斜線來使用此巨集。_

## 參見

請包含與當前 API 相關的參考頁面與指南。有關更多指導，請參閱*寫作風格指南*中的[參見部分](/zh-TW/docs/MDN/Writing_guidelines/Writing_style_guide#參見部分)。

- 相關連結1
- 相關連結2
- 外部連結（年份）
