---
title: 橫幅與通知
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: 359403526b7b802cdb09b90acf28577b959076d0
---

橫幅與通知會顯示在某些頁面中（特別是 API 參考文件），以突顯會影響描述內容使用方式的重要因素。例如，橫幅用於突顯某個介面、方法或屬性已被棄用、不應在產品程式碼中使用，或只能在安全上下文中使用。

橫幅透過頁面內容中的巨集呈現，部分橫幅巨集會自動加入頁面，而其他則需手動加入。

本文說明較重要的橫幅以及它們的加入方式。

## 橫幅巨集加入的位置

橫幅使用巨集加入，且通常插入在頁面後設資料下方與側邊欄巨集並列。例如，在下方區塊中，`\{{SecureContext_Header}}` 巨集用來表示 {{domxref("AudioDecoder")}} 介面僅能在[安全上下文](/zh-TW/docs/Web/Security/Defenses/Secure_Contexts)中使用、`\{{AvailableInWorkers}}` 巨集用來表示 {{domxref("AudioDecoder")}} 介面僅能在 [Window 上下文](/zh-TW/docs/Web/API/Window)與[專用 Worker 上下文](/zh-TW/docs/Web/API/DedicatedWorkerGlobalScope)中使用，而 `\{{SeeCompatTable}}` 則用來表示該介面為實驗性技術。

```md
---
title: AudioDecoder
slug: Web/API/AudioDecoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.AudioDecoder
---

\{{APIRef("WebCodecs API")}} \{{SeeCompatTable}} \{{SecureContext_Header}} \{{AvailableInWorkers("window_and_dedicated")}}
```

## 必須手動加入的橫幅

必須手動加入下列巨集：

- `\{{SecureContext_Header}}`——這會產生一個**安全上下文**橫幅，表示該技術僅能在[安全上下文](/zh-TW/docs/Web/Security/Defenses/Secure_Contexts)中使用。
- `\{{AvailableInWorkers}}`——這會產生一個**可在 Worker 使用**通知，表示該技術在 [Worker 上下文](/zh-TW/docs/Web/API/Web_Workers_API)中可用。

## 自動加入的橫幅

以下巨集會自動加入內容中，以符合儲存在[瀏覽器相容性](https://github.com/mdn/browser-compat-data)儲存庫中的狀態：

- `\{{SeeCompatTable}}`——產生一個**這是實驗性技術**橫幅，表示該技術為[實驗性技術](/zh-TW/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#實驗性技術)。
- `\{{Deprecated_Header}}`——產生一個**已棄用**橫幅，表示[不建議](/zh-TW/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#已棄用)使用該技術。
- `\{{Non-standard_Header}}`——產生一個**非標準**橫幅，表示該技術並非屬於任何形式規範的一部分，即使多個瀏覽器均有實作。

若要更改這些值，請[更新瀏覽器相容性儲存庫中的功能狀態](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Feature_status#功能狀態是如何新增或更新的)。

> [!NOTE]
> 雖然你可以在內容中手動更新這些巨集，但與瀏覽器相容性資料不符的值將會被取代或移除。

> [!NOTE]
> 擁有 `\{{SeeCompatTable}}`、`\{{Deprecated_Header}}` 或 `\{{Non-standard_Header}}` 橫幅的頁面，其頁面後設資料中也會有對應的 `experimental`、`deprecated` 與 `non-standard` 狀態值。後設資料會與橫幅同時自動更新。橫幅巨集不依賴於此狀態後設資料（但日後可能會從中產生）。

## 實驗性：『標準立場』橫幅

有時候，瀏覽器廠商對某項技術的發展存在分歧，有些甚至反對其現有形式。在極端情況下，MDN 會記錄處於此狀態的技術，以鼓勵網路社群進行實驗、提供回饋，並協助瀏覽器廠商達成共識。向讀者說明這些技術目前的標準化狀態非常重要。雖然代表此資訊的長期解決方案尚未確定，但我們對於特定高關注度的技術會採取以下措施以避免混淆：

- 在該技術的著陸頁（而非每個子頁面）上新增此橫幅：

  ```md
  > [!WARNING]
  > 此功能目前受到 <number> 家瀏覽器供應商的反對。請參閱下方的[標準立場](#標準立場) 部分以了解反對的詳細資訊。
  ```

- 在與上述橫幅相同的頁面中新增一個『標準立場』小節，作為標準『規範』小節的子節。

> [!NOTE]
> 請參閱[相關網站集](/zh-TW/docs/Web/API/Storage_Access_API/Related_website_sets)以了解『標準立場』章節的範例、內容應包含的資訊，以及著陸頁橫幅的範例。
