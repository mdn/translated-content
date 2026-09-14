---
title: OpenSearch 描述格式
slug: Web/XML/Guides/OpenSearch
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

[**OpenSearch 描述格式**](https://github.com/dewitt/opensearch)可用於描述搜尋引擎的網頁介面。這允許網站為自身描述搜尋引擎，以便瀏覽器或其他用戶端應用程式可以使用該搜尋引擎。OpenSearch 受到（至少）Firefox、Edge、Safari 和 Chrome 的支援。（參見[參考資料](#參考資料)以獲取其他瀏覽器的文件連結。）

Firefox 還支援 OpenSearch 標準中沒有的其他功能，例如搜尋建議。本文重點介紹如何創建支援這些額外 Firefox 功能的 OpenSearch 相容搜尋插件。

OpenSearch 描述文件可以按照[搜尋插件的自動探索](#搜尋插件的自動探索)中所述進行廣告宣傳。

> [!WARNING]
> OpenSearch 插件無法再上傳到 [addons.mozilla.org](https://addons.mozilla.org/)（AMO）。搜尋引擎功能必須使用 WebExtension API 並在 `manifest.json` 文件中使用 [chrome 設定](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)。

## OpenSearch 描述文件

描述搜尋引擎的 XML 文件遵循以下基本模板。_[方括號]_ 中的部分應根據你正在編寫的特定插件進行自訂。

```xml
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>[SNK]</ShortName>
  <Description>[搜尋引擎全名和摘要]</Description>
  <InputEncoding>[UTF-8]</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">[https://example.com/favicon.ico]</Image>
  <Url type="text/html" template="[searchURL]"/>
  <Url type="application/x-suggestions+json" template="[suggestionURL]"/>
</OpenSearchDescription>
```

- ShortName
  - : 搜尋引擎的簡短名稱。必須是 **16 個或更少字元**的純文本，無 HTML 或其他標記。
- Description
  - : 搜尋引擎的簡短描述。必須是 **1024 個或更少字元**的純文本，無 HTML 或其他標記。
- InputEncoding
  - : 提交輸入到搜尋引擎時使用的[字元編碼](/zh-TW/docs/Glossary/Character_encoding)。
- Image
  - : 搜尋引擎圖標的 URL。盡可能包括一個 16×16 的 `image/x-icon` 類型圖像（例如 `/favicon.ico`）和一個 64×64 的 `image/jpeg` 或 `image/png` 類型圖像。

    URL 也可以使用 [`data:` URL 方案](/zh-TW/docs/Web/URI/Reference/Schemes/data)。（你可以在 [`data:` URL 廚房](https://software.hixie.ch/utilities/cgi/data/data) 生成一個 `data:` URL。）

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- 或 -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA…DAAA=</Image>
    ```

    Firefox 將圖標緩存為 [base64](https://zh.wikipedia.org/wiki/Base64) `data:` URL（搜尋插件存儲在[配置檔](https://support.mozilla.org/zh-TW/kb/profiles-where-firefox-stores-user-data)的 `searchplugins/` 文件夾中）。`http:` 和 `https:` URL 在這種情況下會轉換為 `data:` URL。

    > [!NOTE]
    > 對於遠程加載的圖標（即來自 `https://` URL 而不是 `data:` URL），Firefox 會拒絕大於 **10 KB** 的圖標。

    ![Firefox 搜尋框中顯示的來自 Google 的搜尋建議](searchsuggestionsample.png)

- Url
  - : 描述用於搜尋的 URL 或 URL。`template` 屬性指示搜尋查詢的基本 URL。

    Firefox 支援三種類型的 URL：
    - `type="text/html"` 指定實際搜尋查詢的 URL。
    - `type="application/x-suggestions+json"` 指定用於獲取搜尋建議的 URL。從 Firefox 63 開始，`type="application/json"` 被接受為此的別名。
    - `type="application/x-moz-keywordsearch"` 指定在位置欄中輸入關鍵字搜尋時使用的 URL。這僅在 Firefox 中支援。

    對於這些 URL 類型，你可以使用 `{searchTerms}` 來替換使用者在搜尋欄或位置欄中輸入的搜尋詞。其他支援的動態搜尋參數在 [OpenSearch 1.1 參數](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters)中描述。

    對於搜尋建議，`application/x-suggestions+json` URL 模板用於以 [JSON](/zh-TW/docs/Glossary/JSON) 格式獲取建議列表。

## 搜尋插件的自動探索

具有搜尋插件的網站可以廣告宣傳它們，以便 Firefox 使用者可以輕鬆安裝這些插件。

要支援自動探索，請在網頁的 `<head>` 中為每個插件添加一個 `<link>` 元素：

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="[searchTitle]"
  href="[pluginURL]" />
```

根據以下說明替換 _[方括號]_ 中的項目：

- searchTitle
  - : 要執行的搜尋名稱，例如「搜尋 MDC」或「Yahoo! 搜尋」。這必須與你的插件文件的 `<ShortName>` 匹配。
- pluginURL
  - : XML 搜尋插件的 URL，以便瀏覽器可以下載它。

如果你的網站提供多個搜尋插件，你可以支援它們的自動探索。例如：

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: By Author"
  href="http://example.com/mysiteauthor.xml" />

<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: By Title"
  href="http://example.com/mysitetitle.xml" />
```

這樣，你的網站可以提供按作者或按標題搜尋的插件。

> [!NOTE]
> 在 Firefox 中，搜尋框中的圖標變化表示提供了搜尋插件。（參見圖片，綠色加號。）因此，如果使用者的 UI 中未顯示搜尋框，他們將不會收到任何提示。_一般來說，不同瀏覽器的行為有所不同。_

## 支援 OpenSearch 插件的自動更新

OpenSearch 插件可以自動更新。要支援此功能，請包含一個 `type="application/opensearchdescription+xml"` 和 `rel="self"` 的額外 `Url` 元素。`template` 屬性應為自動更新到的 OpenSearch 文件的 URL。

例如：

```xml
<Url type="application/opensearchdescription+xml"
     rel="self"
     template="https://example.com/mysearchdescription.xml" />
```

> [!NOTE]
> 目前，[addons.mozilla.org](https://addons.mozilla.org/)（AMO）不支援 OpenSearch 插件的自動更新。如果你想將你的搜尋插件放在 AMO 上，請在提交之前刪除自動更新功能。

## 疑難排解提示

如果你的搜尋插件 XML 中有錯誤，則在添加探索的插件時可能會遇到錯誤。如果錯誤訊息不夠有幫助，以下提示可能有助於你找到問題。

- 你的伺服器應使用 `Content-Type: application/opensearchdescription+xml` 提供 OpenSearch 插件。
- 確保你的搜尋插件 XML 格式良好。你可以通過將文件直接加載到 Firefox 來檢查。`template` URL 中的符號（&）必須轉義為 `&amp;`，標籤必須以斜杠結尾或匹配的結束標籤關閉。
- `xmlns` 屬性很重要——沒有它，你可能會收到錯誤訊息「Firefox 無法下載搜尋插件」。
- 你**必須**包含一個 `text/html` URL——僅包含 Atom 或 [RSS](/zh-TW/docs/Glossary/RSS) URL 類型的搜尋插件（這是有效的，但 Firefox 不支援）也會生成「無法下載搜尋插件」錯誤。
- 遠程獲取的圖標不得大於 10KB（參見 [Firefox bug 361923](https://bugzil.la/361923)）。

此外，搜尋插件服務提供了一個日誌記錄機制，可能對插件開發人員有用。使用 `about:config` 設定 `browser.search.log` 預設為 `true`。然後，當添加搜尋插件時，日誌訊息將顯示在 Firefox 的[瀏覽器控制台](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html)（工具 ➤ 瀏覽器工具 ➤ 瀏覽器控制台）。

## 參考資料

- [OpenSearch 文件](https://github.com/dewitt/opensearch)
- [Safari 8.0 發行說明：快速網站搜尋](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge 開發指南：搜尋提供者探索](https://learn.microsoft.com/zh-tw/archive/microsoft-edge/legacy/developer/)
- [Chromium 專案：Tab to Search](https://www.chromium.org/tab-to-search/)
- imdb.com 有一個[有效的 `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/)——創建 OpenSearch 插件。[通過 Ready2Search 自訂搜尋](https://ready.to/search/make/en_make_plugin.htm)
