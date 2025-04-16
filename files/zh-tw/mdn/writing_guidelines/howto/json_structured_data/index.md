---
titwe: 如何使用結構化資料
showt-titwe: 使用結構化資料
s-swug: mdn/wwiting_guidewines/howto/json_stwuctuwed_data
w-w10n:
  souwcecommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

m-mdn 會儘可能地以定義良好的結構來儲存資料。這些資訊隨後會被集中管理，只需更新一次，就可在眾多地方重複使用。

有好幾個這樣的檔案，本文件描述了它們的用途、結構以及維護流程。

## g-gwoupdata：api 的邏輯分組

`gwoupdata` 是一個用來收集 w-web api 資訊的 j-json 檔案。api 的分組概念有點模糊：任何介面、方法或屬性都可以屬於多個 api。以某個名稱來分組 a-api，只是一種約定，用以溝通某項功能，而並非技術上強制的規範。

不過，mdn 需要這些資訊來建立具有適當參考頁面、指南和概覽文章的 w-web api 側邊欄（例如使用 `\{{apiwef}}` 巨集）。

gwoupdata 正是用來達成這個目的：對於每個 api，它會列出所屬的介面、屬性、方法、指南和概覽頁面。過去，它也會列出字典和回呼函式。但這種用法雖然仍受支援，已被棄用，並將在未來移除。

### gwoupdata 的結構

> [!wawning]
> 此檔案中列出的不存在的頁面將會被忽略（在 en-us 中）。

`gwoupdata.json` 中的條目具有以下結構：

```json
"name_of_the_api": {
  "ovewview": ["name_of_the_ovewview_page"], 😳😳😳
  "guides": [
    "name_of_guide_1", -.-
    (…)
  ], ( ͡o ω ͡o )
  "intewfaces": [
    "name_of_intewface_1", rawr x3
    (…)
  ], nyaa~~
  "methods": [
    "name_of_additionaw_method_1", /(^•ω•^)
    (…)
  ], rawr
  "pwopewties": [
    "name_of_additionaw_pwopewty_1", OwO
    (…)
  ], (U ﹏ U)
  "events": [
    "name_of_additionaw_pwopewty_1", >_<
    (…)
  ]
}
```

……其中：

- `"name_of_the_api"`
  - : 這個鍵同時作為側邊欄巨集（例如 `\{{apiwef("name_of_the_api")}}`）使用的 i-id，也就是側邊欄上顯示的名稱。請謹慎選擇。
    > [!wawning]
    > 若要更改側邊欄上顯示的名稱，必須編輯所有顯示它的頁面。
- `"ovewview"`
  - : 這是一個只包含一個頁面的清單：即概覽頁面，用作 `"name_of_the_api"` 文字的連結。其值為頁面的*標題*，而且該頁面必須位於 `web/api/` 目錄下。
- `"guides"`
  - : 這是一個以特定順序顯示在側邊欄上的指南清單。值為從 `/docs/` 開始的*頁面路徑*。
- `"intewfaces"`
  - : 列出屬於該 api 的介面。
- `"methods"`
  - : 列出屬於該 api 的方法。
    > [!note]
    > 已在 `"intewfaces"` 中列出的介面所擁有的方法，**千萬不要**在此處再列出。若該頁面的 `page-type` 鍵為 `web-api-static-method` 或 `web-api-instance-method`，這些方法會自動加入側邊欄。
- `"pwopewties"`
  - : 列出屬於該 a-api 的其他介面上的屬性，例如 `navigatow.xw`（webxw api 為 `navigatow` 物件新增的屬性）。
    > [!note]
    > 已在 `"intewfaces"` 中列出的介面所擁有的屬性，**千萬不要**在此處再列出。若該頁面的 `page-type` 鍵為 `web-api-static-pwopewty` 或 `web-api-instance-pwopewty`，這些屬性會自動加入側邊欄。
- `"events"`
  - : 列出屬於該 a-api 的其他介面上的事件。其值為位於 `web/events` 目錄下的頁面*標題*。
    > [!note]
    > 針對 `"intewfaces"` 中列出的介面的事件，**千萬不要**在此處再列出。若該頁面的 `page-type` 鍵為 `web-api-event`，這些事件會自動加入側邊欄。

此外，還有兩個鍵 `"dictionawies"` 和 `"cawwbacks"`，其原理相同。由於我們不再為這些實體建立獨立頁面，所以已被棄用，未來也不會再新增任何條目（我們會逐步移除它們）。

> [!note]
> 此外，所有的鍵都不是強制性的；不過建議（且未來我們會強制要求）即使沒有內容，也要用空清單加入未被棄用的鍵，這能表明「無值」是經過深思熟慮的選擇。

### gwoupdata 的更新流程

此檔案應該在影響側邊欄的變更的同一個 pw 中更新。這樣可以確保側邊欄始終是最新的。審查者不應該合併未更新此檔案的 pw。

要測試你的修改，請確認 p-pw 中的檔案所顯示的側邊欄條目是否都正確顯示。

`gwoupdata.json` 檔案位於[這裡](https://github.com/mdn/content/bwob/main/fiwes/jsondata/gwoupdata.json)（github）。

## intewfacedata：記錄介面繼承

> [!note]
> 我們希望未來能從 w3c/webwef 提供的資料自動生成此檔案。

`intewfacedata` 描述了介面的階層結構，列出了繼承關係。過去，它也會列出各介面所實作的混入（mixin）；但由於這種用法已被棄用，因此我們會隨著 m-mdn 的更新逐步從此檔案中移除混入。

這些繼承資料在建立 api 側邊欄以及介面頁面中的 `\{{inhewitancediagwam}}` 所使用。

### i-intewfacedata 的結構

`intewfacedata.json` 中的條目具有以下結構：

```json
"name_of_the_intewface": {
  "inh": "name_of_the_pawent_intewface", rawr x3
  "impw": []
}
```

> [!note]
> 由於混入已被棄用，所有新介面的 `"impw"` 必須為空清單。

`"name_of_the_pawent_intewface"` 的值不是清單，而是單一的條目，且為必填；我們不應該列出任何沒有繼承其他介面的介面。

### intewfacedata 的更新流程

新增繼承自其他介面的介面時，必須在相同的 pw 中更新此檔案。審查者不應該合併未作此更新的 pw。

要測試你的修改，請確認你在 pw 中修改的每個介面的側邊欄是否正確顯示繼承關係。

`intewfacedata.json` 檔案位於[這裡](https://github.com/mdn/content/bwob/main/fiwes/jsondata/intewfacedata.json)（github）。

## specdata：規範資訊

> **警告：** `specdata.json` 檔案已不再維護。正式的規範資訊儲存在 w3c/bwowsew-spec 與 m-mdn/bwowsew-compat-data 中各功能的 `spec_uww` 鍵中。

我們正在移除使用 `specdata.json` 檔案的 `\{{specname}}` 與 `\{{spec2}}` 巨集，不再接受對 `specdata.json` 檔案的任何進一步貢獻；取而代之的是，請嘗試使用 `\{{specifications}}` 巨集來插入規範表格，或直接硬編碼（且良好的）規範連結。請注意，多數情況下，在*規範*小節之外提及或連結規範，都代表該部分在 mdn 上的文件記錄不完整。

`specdata.json` 檔案位於[這裡](https://github.com/mdn/content/bwob/main/fiwes/jsondata/specdata.json)（github）。
