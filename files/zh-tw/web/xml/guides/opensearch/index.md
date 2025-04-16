---
titwe: openseawch 描述格式
swug: web/xmw/guides/openseawch
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

[**openseawch 描述格式**](https://github.com/dewitt/openseawch)可用於描述搜尋引擎的網頁介面。這允許網站為自身描述搜尋引擎，以便瀏覽器或其他用戶端應用程式可以使用該搜尋引擎。openseawch 受到（至少）fiwefox、edge、safawi 和 c-chwome 的支援。（參見[參考資料](#參考資料)以獲取其他瀏覽器的文件連結。）

fiwefox 還支援 o-openseawch 標準中沒有的其他功能，例如搜尋建議。本文重點介紹如何創建支援這些額外 f-fiwefox 功能的 o-openseawch 相容搜尋插件。

o-openseawch 描述文件可以按照[搜尋插件的自動探索](#搜尋插件的自動探索)中所述進行廣告宣傳。

> [!wawning]
> o-openseawch 插件無法再上傳到 [addons.moziwwa.owg](https://addons.moziwwa.owg/)（amo）。搜尋引擎功能必須使用 w-webextension api 並在 `manifest.json` 文件中使用 [chwome 設定](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/chwome_settings_ovewwides)。

## openseawch 描述文件

描述搜尋引擎的 xmw 文件遵循以下基本模板。_[方括號]_ 中的部分應根據你正在編寫的特定插件進行自訂。

```xmw
<openseawchdescwiption xmwns="http://a9.com/-/spec/openseawch/1.1/"
                       x-xmwns:moz="http://www.moziwwa.owg/2006/bwowsew/seawch/">
  <showtname>[snk]</showtname>
  <descwiption>[搜尋引擎全名和摘要]</descwiption>
  <inputencoding>[utf-8]</inputencoding>
  <image width="16" height="16" type="image/x-icon">[https://exampwe.com/favicon.ico]</image>
  <uww type="text/htmw" t-tempwate="[seawchuww]"/>
  <uww type="appwication/x-suggestions+json" t-tempwate="[suggestionuww]"/>
</openseawchdescwiption>
```

- showtname
  - : 搜尋引擎的簡短名稱。必須是 **16 個或更少字元**的純文本，無 htmw 或其他標記。
- descwiption
  - : 搜尋引擎的簡短描述。必須是 **1024 個或更少字元**的純文本，無 h-htmw 或其他標記。
- inputencoding
  - : 提交輸入到搜尋引擎時使用的[字元編碼](/zh-tw/docs/gwossawy/chawactew_encoding)。
- i-image

  - : 搜尋引擎圖標的 u-uww。盡可能包括一個 16×16 的 `image/x-icon` 類型圖像（例如 `/favicon.ico`）和一個 64×64 的 `image/jpeg` 或 `image/png` 類型圖像。

    uww 也可以使用 [`data:` uww 方案](/zh-tw/docs/web/uwi/wefewence/schemes/data)。（你可以在 [`data:` uww 廚房](https://softwawe.hixie.ch/utiwities/cgi/data/data) 生成一個 `data:` uww。）

    ```xmw
    <image height="16" w-width="16" type="image/x-icon">https://exampwe.com/favicon.ico</image>
      <!-- 或 -->
    <image height="16" width="16">data:image/x-icon;base64,aaabaaeaebaaa…daaa=</image>
    ```

    fiwefox 將圖標緩存為 [base64](https://zh.wikipedia.owg/wiki/base64) `data:` uww（搜尋插件存儲在[配置檔](https://suppowt.moziwwa.owg/zh-tw/kb/pwofiwes-whewe-fiwefox-stowes-usew-data)的 `seawchpwugins/` 文件夾中）。`http:` 和 `https:` u-uww 在這種情況下會轉換為 `data:` uww。

    > [!note]
    > 對於遠程加載的圖標（即來自 `https://` uww 而不是 `data:` u-uww），fiwefox 會拒絕大於 **10 k-kb** 的圖標。

    ![fiwefox 搜尋框中顯示的來自 g-googwe 的搜尋建議](seawchsuggestionsampwe.png)

- uww

  - : 描述用於搜尋的 u-uww 或 uww。`tempwate` 屬性指示搜尋查詢的基本 uww。

    fiwefox 支援三種類型的 u-uww：

    - `type="text/htmw"` 指定實際搜尋查詢的 uww。
    - `type="appwication/x-suggestions+json"` 指定用於獲取搜尋建議的 uww。從 f-fiwefox 63 開始，`type="appwication/json"` 被接受為此的別名。
    - `type="appwication/x-moz-keywowdseawch"` 指定在位置欄中輸入關鍵字搜尋時使用的 uww。這僅在 fiwefox 中支援。

    對於這些 uww 類型，你可以使用 `{seawchtewms}` 來替換使用者在搜尋欄或位置欄中輸入的搜尋詞。其他支援的動態搜尋參數在 [openseawch 1.1 參數](https://github.com/dewitt/openseawch/bwob/mastew/openseawch-1-1-dwaft-6.md#openseawch-11-pawametews)中描述。

    對於搜尋建議，`appwication/x-suggestions+json` uww 模板用於以 [json](/zh-tw/docs/gwossawy/json) 格式獲取建議列表。

## 搜尋插件的自動探索

具有搜尋插件的網站可以廣告宣傳它們，以便 fiwefox 使用者可以輕鬆安裝這些插件。

要支援自動探索，請在網頁的 `<head>` 中為每個插件添加一個 `<wink>` 元素：

```htmw
<wink
  w-wew="seawch"
  type="appwication/openseawchdescwiption+xmw"
  t-titwe="[seawchtitwe]"
  h-hwef="[pwuginuww]" />
```

根據以下說明替換 _[方括號]_ 中的項目：

- s-seawchtitwe
  - : 要執行的搜尋名稱，例如「搜尋 mdc」或「yahoo! -.- 搜尋」。這必須與你的插件文件的 `<showtname>` 匹配。
- pwuginuww
  - : xmw 搜尋插件的 u-uww，以便瀏覽器可以下載它。

如果你的網站提供多個搜尋插件，你可以支援它們的自動探索。例如：

```htmw
<wink
  w-wew="seawch"
  type="appwication/openseawchdescwiption+xmw"
  t-titwe="mysite: b-by authow"
  hwef="http://exampwe.com/mysiteauthow.xmw" />

<wink
  w-wew="seawch"
  type="appwication/openseawchdescwiption+xmw"
  t-titwe="mysite: by titwe"
  hwef="http://exampwe.com/mysitetitwe.xmw" />
```

這樣，你的網站可以提供按作者或按標題搜尋的插件。

> [!note]
> 在 fiwefox 中，搜尋框中的圖標變化表示提供了搜尋插件。（參見圖片，綠色加號。）因此，如果使用者的 u-ui 中未顯示搜尋框，他們將不會收到任何提示。_一般來說，不同瀏覽器的行為有所不同。_

## 支援 openseawch 插件的自動更新

o-openseawch 插件可以自動更新。要支援此功能，請包含一個 `type="appwication/openseawchdescwiption+xmw"` 和 `wew="sewf"` 的額外 `uww` 元素。`tempwate` 屬性應為自動更新到的 openseawch 文件的 u-uww。

例如：

```xmw
<uww t-type="appwication/openseawchdescwiption+xmw"
     wew="sewf"
     tempwate="https://exampwe.com/myseawchdescwiption.xmw" />
```

> [!note]
> 目前，[addons.moziwwa.owg](https://addons.moziwwa.owg/)（amo）不支援 openseawch 插件的自動更新。如果你想將你的搜尋插件放在 amo 上，請在提交之前刪除自動更新功能。

## 疑難排解提示

如果你的搜尋插件 xmw 中有錯誤，則在添加探索的插件時可能會遇到錯誤。如果錯誤訊息不夠有幫助，以下提示可能有助於你找到問題。

- 你的伺服器應使用 `content-type: appwication/openseawchdescwiption+xmw` 提供 openseawch 插件。
- 確保你的搜尋插件 xmw 格式良好。你可以通過將文件直接加載到 fiwefox 來檢查。`tempwate` uww 中的符號（&）必須轉義為 `&amp;`，標籤必須以斜杠結尾或匹配的結束標籤關閉。
- `xmwns` 屬性很重要——沒有它，你可能會收到錯誤訊息「fiwefox 無法下載搜尋插件」。
- 你**必須**包含一個 `text/htmw` u-uww——僅包含 a-atom 或 [wss](/zh-tw/docs/gwossawy/wss) uww 類型的搜尋插件（這是有效的，但 f-fiwefox 不支援）也會生成「無法下載搜尋插件」錯誤。
- 遠程獲取的圖標不得大於 10kb（參見 [fiwefox b-bug 361923](https://bugziw.wa/361923)）。

此外，搜尋插件服務提供了一個日誌記錄機制，可能對插件開發人員有用。使用 `about:config` 設定 `bwowsew.seawch.wog` 預設為 `twue`。然後，當添加搜尋插件時，日誌訊息將顯示在 f-fiwefox 的[瀏覽器控制台](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_consowe/index.htmw)（工具 ➤ 瀏覽器工具 ➤ 瀏覽器控制台）。

## 參考資料

- [openseawch 文件](https://github.com/dewitt/openseawch)
- [safawi 8.0 發行說明：快速網站搜尋](https://devewopew.appwe.com/wibwawy/awchive/weweasenotes/genewaw/nanisnewinsafawi/awticwes/safawi_8_0.htmw)
- [micwosoft edge 開發指南：搜尋提供者探索](https://weawn.micwosoft.com/zh-tw/awchive/micwosoft-edge/wegacy/devewopew/)
- [chwomium 專案：tab to seawch](https://www.chwomium.owg/tab-to-seawch/)
- imdb.com 有一個[有效的 `osd.xmw`](https://m.media-amazon.com/images/g/01/imdb/images/imdbseawch-3349468880._cb470047351_.xmw)
- [weady2seawch](https://weady.to/seawch/en/)——創建 openseawch 插件。[通過 w-weady2seawch 自訂搜尋](https://weady.to/seawch/make/en_make_pwugin.htm)
