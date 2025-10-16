---
title: 如何使用結構化資料
short-title: 使用結構化資料
slug: MDN/Writing_guidelines/Howto/JSON_Structured_data
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

MDN 會儘可能地以定義良好的結構來儲存資料。這些資訊隨後會被集中管理，只需更新一次，就可在眾多地方重複使用。

有好幾個這樣的檔案，本文件描述了它們的用途、結構以及維護流程。

## GroupData：API 的邏輯分組

`GroupData` 是一個用來收集 Web API 資訊的 JSON 檔案。API 的分組概念有點模糊：任何介面、方法或屬性都可以屬於多個 API。以某個名稱來分組 API，只是一種約定，用以溝通某項功能，而並非技術上強制的規範。

不過，MDN 需要這些資訊來建立具有適當參考頁面、指南和概覽文章的 Web API 側邊欄（例如使用 `\{{APIRef}}` 巨集）。

GroupData 正是用來達成這個目的：對於每個 API，它會列出所屬的介面、屬性、方法、指南和概覽頁面。過去，它也會列出字典和回呼函式。但這種用法雖然仍受支援，已被棄用，並將在未來移除。

### GroupData 的結構

> [!WARNING]
> 此檔案中列出的不存在的頁面將會被忽略（在 en-US 中）。

`GroupData.json` 中的條目具有以下結構：

```json
"Name_of_the_API": {
  "overview": ["name_of_the_overview_page"],
  "guides": [
    "name_of_guide_1",
    (…)
  ],
  "interfaces": [
    "name_of_interface_1",
    (…)
  ],
  "methods": [
    "name_of_additional_method_1",
    (…)
  ],
  "properties": [
    "name_of_additional_property_1",
    (…)
  ],
  "events": [
    "name_of_additional_property_1",
    (…)
  ]
}
```

……其中：

- `"Name_of_the_API"`
  - : 這個鍵同時作為側邊欄巨集（例如 `\{{APIRef("Name_of_the_API")}}`）使用的 ID，也就是側邊欄上顯示的名稱。請謹慎選擇。
    > [!WARNING]
    > 若要更改側邊欄上顯示的名稱，必須編輯所有顯示它的頁面。
- `"overview"`
  - : 這是一個只包含一個頁面的清單：即概覽頁面，用作 `"Name_of_the_API"` 文字的連結。其值為頁面的*標題*，而且該頁面必須位於 `web/api/` 目錄下。
- `"guides"`
  - : 這是一個以特定順序顯示在側邊欄上的指南清單。值為從 `/docs/` 開始的*頁面路徑*。
- `"interfaces"`
  - : 列出屬於該 API 的介面。
- `"methods"`
  - : 列出屬於該 API 的方法。
    > [!NOTE]
    > 已在 `"interfaces"` 中列出的介面所擁有的方法，**千萬不要**在此處再列出。若該頁面的 `page-type` 鍵為 `web-api-static-method` 或 `web-api-instance-method`，這些方法會自動加入側邊欄。
- `"properties"`
  - : 列出屬於該 API 的其他介面上的屬性，例如 `navigator.xr`（WebXR API 為 `navigator` 物件新增的屬性）。
    > [!NOTE]
    > 已在 `"interfaces"` 中列出的介面所擁有的屬性，**千萬不要**在此處再列出。若該頁面的 `page-type` 鍵為 `web-api-static-property` 或 `web-api-instance-property`，這些屬性會自動加入側邊欄。
- `"events"`
  - : 列出屬於該 API 的其他介面上的事件。其值為位於 `Web/Events` 目錄下的頁面*標題*。
    > [!NOTE]
    > 針對 `"interfaces"` 中列出的介面的事件，**千萬不要**在此處再列出。若該頁面的 `page-type` 鍵為 `web-api-event`，這些事件會自動加入側邊欄。

此外，還有兩個鍵 `"dictionaries"` 和 `"callbacks"`，其原理相同。由於我們不再為這些實體建立獨立頁面，所以已被棄用，未來也不會再新增任何條目（我們會逐步移除它們）。

> [!NOTE]
> 此外，所有的鍵都不是強制性的；不過建議（且未來我們會強制要求）即使沒有內容，也要用空清單加入未被棄用的鍵，這能表明「無值」是經過深思熟慮的選擇。

### GroupData 的更新流程

此檔案位於 [`files/jsondata/GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json)，應該在影響側邊欄的變更的同一個 PR 中更新。這樣可以確保側邊欄始終是最新的。審查者不應該合併未更新此檔案的 PR。

要測試你的修改，請確認 PR 中的檔案所顯示的側邊欄條目是否都正確顯示。

## InterfaceData：記錄介面繼承

> [!NOTE]
> 我們希望未來能從 w3c/webref 提供的資料自動生成此檔案。

`InterfaceData` 描述了介面的階層結構，列出了繼承關係。過去，它也會列出各介面所實作的混入（mixin）；但由於這種用法已被棄用，因此我們會隨著 MDN 的更新逐步從此檔案中移除混入。

這些繼承資料在建立 API 側邊欄以及介面頁面中的 `\{{InheritanceDiagram}}` 所使用。

### InterfaceData 的結構

`InterfaceData.json` 中的條目具有以下結構：

```json
"Name_of_the_interface": {
  "inh": "Name_of_the_parent_interface",
  "impl": []
}
```

> [!NOTE]
> 由於混入已被棄用，所有新介面的 `"impl"` 必須為空清單。

`"Name_of_the_parent_interface"` 的值不是清單，而是單一的條目，且為必填；我們不應該列出任何沒有繼承其他介面的介面。

### InterfaceData 的更新流程

新增繼承自其他介面的介面時，必須在相同的 PR 中更新此檔案，其位於 [`files/jsondata/InterfaceData.json`](https://github.com/mdn/content/blob/main/files/jsondata/InterfaceData.json)。審查者不應該合併未作此更新的 PR。

要測試你的修改，請確認你在 PR 中修改的每個介面的側邊欄是否正確顯示繼承關係。

## SpecData：規範資訊

> [!WARNING]
> [`SpecData.json`](https://github.com/mdn/content/blob/main/files/jsondata/SpecData.json) 檔案已不再維護。正式的規範資訊儲存在 [w3c/browser-specs](https://github.com/w3c/browser-specs) 與 [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) 中各功能所定義的 `spec_url` 鍵中。

我們不再接受對 `SpecData.json` 檔案的任何進一步貢獻；取而代之的是，請使用 `\{{Specifications}}` 巨集來插入規範表格，或在內文中連結至規範。請注意，多數情況下，在*規範*小節之外提及或連結規範，都代表該部分在 MDN 上的文件記錄不完整。
