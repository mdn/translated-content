---
title: API event subpage template
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

> **注意：** _在發布前請刪除此整段說明文字。_
>
> ---
>
> **頁面前置內容（Front matter）：**
>
> 頁面頂部的前置內容用於定義「頁面元數據」。
> 這些值應根據特定事件適當更新。
>
> ```md
> ---
> title: "NameOfTheParentInterface: NameOfTheEvent event"
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
> - **title（標題）**
>   - : 顯示在頁面頂部的標題。
>     格式為「_父介面名稱_**:** _事件名稱_ **event**」。
>     例如，[animationcancel](/zh-TW/docs/Web/API/Element/animationcancel_event) 事件屬於 [Window](/zh-TW/docs/Web/API/Window) 介面，其 _title_ 為 `Window: animationcancel event`。
> - **slug（URL 路徑）**
>   - : `https://developer.mozilla.org/zh-TW/docs/` 之後的 URL 路徑。
>     格式為 `Web/API/父介面名稱/事件名稱_event`。
> - **page-type（頁面類型）**
>   - : Web/API 事件的 `page-type` 固定為 `web-api-event`。
> - **status（狀態）**
>   - : 描述此功能狀態的標記。這是一個陣列，可以包含以下一個或多個值：`experimental`（實驗性）、`deprecated`（已棄用）、`non-standard`（非標準）。
>     此鍵不應手動設定，而是根據 [瀏覽器相容性資料](https://github.com/mdn/browser-compat-data) 自動設置。
> - **browser-compat（瀏覽器相容性）**
>   - : 替換 `path.to.feature.事件名稱_event` 為 [瀏覽器相容性數據庫](https://github.com/mdn/browser-compat-data) 中的相應查詢字串。
>     該工具鏈會自動使用此鍵來填充相容性和規範部分（取代 `\{{Compat}}` 和 `\{{Specifications}}` 巨集）。
>
> ---
>
> **頁面頂部巨集**
>
> 內容部分的頂部（緊接著前置內容之後）會包含一些自動添加的巨集，無需手動添加或移除：
>
> - `\{{SeeCompatTable}}` — 顯示 **「這是一項實驗性技術」** 的橫幅，表示該技術是[實驗性](/zh-TW/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental)的。
> - `\{{Deprecated_Header}}` — 顯示 **「已棄用」** 的橫幅，表示該技術的使用[不被建議](/zh-TW/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated)。
> - `\{{Non-standard_Header}}` — 顯示 **「非標準」** 的橫幅，表示該功能不屬於任何規範。
>
> 需要根據以下建議更新或刪除這些巨集：
>
> - `\{{SecureContext_Header}}` — 若該技術僅可在[安全環境](/zh-TW/docs/Web/Security/Secure_Contexts)中使用，則保留此宏；否則請刪除。
> - `\{{AvailableInWorkers}}` — 若該技術可用於 [worker 環境](/zh-TW/docs/Web/API/Web_Workers_API)，則保留此宏；否則刪除。
> - `\{{APIRef("GroupDataName")}}` — 生成 API 參考側邊欄，確保 API 相關頁面具有一致的側邊導航欄。
>
> ---
>
> **父物件連結**
>
> 請從父物件的 **事件（Events）** 區段添加指向此頁面的連結，例如，[Element: wheel event](/zh-TW/docs/Web/API/Element/wheel_event) 是從 [`Element` 事件區段](/zh-TW/docs/Web/API/Element#events) 連結過來的。
>
> 若父物件沒有「事件」區段，請添加一個。
> 若這是一個新類別的事件，請在 [事件參考](/zh-TW/docs/Web/Events) 中加入該連結。
>
> _請記得刪除這整段說明文字後再發布。_

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

請在頁面內容開頭添加一個簡介段落——首先命名該事件，說明它屬於哪個介面，並描述它的功能。  
這部分應該儘量用一到兩個簡短的句子來表達。  
您可以從對應 API 參考頁面中該屬性的摘要中擷取大部分內容。

## 語法

可使用事件名稱搭配 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 方法，或設置事件處理屬性：

```js
addEventListener("事件名稱", (event) => {});

on事件名稱 = (event) => {};
```

## 事件類型

若該事件有特殊類型，請列出其繼承關係；否則，標註為通用事件：

_通用的 {{domxref("Event")}}。_

或者，例如：

_一個 {{domxref("XRSessionEvent")}}，繼承自 {{domxref("Event")}}。_

{{InheritanceDiagram("XRSessionEvent")}}

## 事件屬性

若該事件不是通用的 {{domxref("Event")}}，請列出額外的屬性：

_除了下列屬性外，該事件還繼承自 {{domxref("Event")}} 的屬性。_

- {{domxref("XRSessionEvent.session", "session")}} {{ReadOnlyInline}}
  - : 指向與此事件相關的 {{domxref("XRSession")}}。

## 描述

若需要提供額外的描述，可加入 **描述（Description）** 區段，包括：

### 觸發條件

描述該事件在何種情況下會被觸發。

### 使用案例

列出該事件的實際應用場景。

## 範例

即使只有一個範例，標題仍使用「範例（Examples）」。

### 範例標題

每個範例應包含 **H3 標題**（`###`），標題應簡明描述該範例的作用，而不是使用「簡單範例」這類模糊的標題。

有關如何添加程式碼範例，請參考 [如何撰寫程式碼範例](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Code_examples)。

> [!NOTE]
> 若範例存放於另一頁面，可依據以下情況處理：
>
> - 若該頁面同時包含範例，並且還有額外範例在另一頁面：
>
> ```md
> ## 範例
>
> ### 使用 fetch API
>
> 這是一個 fetch API 的範例
>
> ### 更多範例
>
> [前往更多範例](https://example.org/)
> ```
>
> - 若所有範例都位於其他頁面：
>
> ```md
> ## 範例
>
> 有關此 API 的範例，請參見 [fetch() 範例](https://example.org/)。
> ```

## 規範

`\{{Specifications}}`

_請移除反引號與反斜線來使用此巨集。_

## 瀏覽器相容性

`\{{Compat}}`

_請移除反引號與反斜線來使用此巨集。_

## 參見

請包含與當前 API 相關的參考頁面與指南，更多規範請參見 [參見區段寫作指南](/zh-TW/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section)。

- 相關連結1
- 相關連結2
- 外部連結（年份）
