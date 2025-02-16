---
title: API 參考側邊欄
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

你可以在 API 參考頁面中加入自訂側邊欄，以顯示與該 API 相關的介面、教學文章及其它資源的連結。本篇文章說明如何操作。

## 建立側邊欄

要建立 API 側邊欄，你需要完成以下三個步驟：

1. 建立 API 參考頁面。
2. 在 [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) 檔案中新增該 API 的條目。
3. 使用 [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) 巨集，將側邊欄嵌入至你希望顯示的頁面中。

接下來，我們將逐步說明這些步驟。本篇文章以 [Fetch API](/zh-TW/docs/Web/API/Fetch_API) 為例。

### 新增條目到 GroupData.json

`GroupData.json` 檔案包含了 API 參考頁面側邊欄應顯示的所有連結資訊。當 `APIRef` 巨集被呼叫時，它會接收 API 名稱作為參數，在 `GroupData.json` 檔案中查找對應名稱，然後建立側邊欄並插入頁面中。

要在 `GroupData.json` 中新增條目，你需要完成以下步驟：

1. 確定你擁有 [GitHub](https://github.com/) 帳戶。
2. Fork MDN 內容倉儲，建立一個用來變更內容的新分支，並將倉儲複製到本機。
3. 開始變更內容前先切換到新分支，完成後將變更推送到遠端。
4. 建立 Pull Request，讓 MDN 團隊審核你的變更內容，會在必要時要求修改。

`GroupData.json` 檔案位於 `files/jsondata/` 目錄內。當你打開它，會看到一個龐大的 JSON 結構，其中每個 API 都有自己的對應條目。名稱是 API 名稱，值則是一個包含多個子成員的物件，用來定義要建立的側邊欄連結。

舉例來說，MDN 上的 [Fetch API](/zh-TW/docs/Web/API/Fetch_API) 頁面，在 `GroupData.json` 中的對應條目如下：

```json
"Fetch API": {
    "overview":   [ "Fetch API"],
    "interfaces": [ "Headers",
                    "Request",
                    "Response",
                    "FetchController",
                    "FetchObserver",
                    "FetchSignal",
                    "ObserverCallback" ],
    "methods":    [ "fetch()" ],
    "properties": [],
    "events":     []
},
```

如你所見，名稱使用 `"Fetch API"`，物件內則包含多個子成員，用來指定側邊欄應顯示的連結內容。

#### 納入 GroupData 條目下的子成員

本節列出 `GroupData` 條目中可包含的所有子成員。

請注意，大多數列出子成員中的值，同時用作連結的顯示文字，並作為附加到 API 主要索引頁（`https://developer.mozilla.org/<language-code>/docs/Web/API`）的路徑，以產生最終連結網址。例如，`"Response"` 會產生以下連結：

```html
<li><a href="/zh-TW/docs/Web/API/Response">Response</a></li>
```

但也有一些例外情況。例如 `"guides"` 子成員包含指向相關指南或教學的 URL。這些 URL 會附加在 MDN 文件根目錄（`https://developer.mozilla.org/<language-code>`）後，使得 MDN 內的任何文章皆可納入。

以下是可用的子成員。這些成員技術上都是非必填的，但強烈建議即使沒內容也應包含空陣列來維持結構完整性。

1. `"overview"`——陣列，包含 API 總覽頁的 slug（如果有的話）。`"Fetch API"` 會產生指向 [Fetch API](/zh-TW/docs/Web/API/Fetch_API) 的連結。

2. `"interfaces"`——陣列，應列出該 API 包含的所有介面。`"Response"` 會產生指向 [Response](/zh-TW/docs/Web/API/Response) 的連結。

3. `"methods"`——陣列，應包含該規範新增至其它 API 介面的任何方法，例如在 {{domxref("Navigator")}} 或 {{domxref("Window")}} 上定義的方法。若方法數量過多，可僅列出最常用的方法，或優先放在前面。`"fetch()"` 會產生指向 [fetch()](/zh-TW/docs/Web/API/Window/fetch) 的連結。**不要**列出已歸屬於 API 內部介面的成員方法。

4. `"properties"`——陣列，應包含與 API 相關的所有屬性。可包括 API 規範中定義的介面屬性，以及 API 在其它介面上定義的屬性。若屬性數量過多，可僅列出最常用的屬性，或優先放在前面。`"Headers.append"` 會產生指向 [Headers.append](/zh-TW/docs/Web/API/Headers/append) 的連結。

5. `"events"`——陣列，應包含該 API 內定義但不屬於該 API 內部介面的事件（`"interfaces"` 內的事件會自動納入）。若事件數量過多，可僅列出最常用的事件，或優先放在前面。例如，`"Document: selectionchange"` 屬於 [Selection API](/zh-TW/docs/Web/API/Selection_API)，但 `Document` 並不屬於該 API，因此應手動加入 `"events"` 陣列，以確保連結正確。

6. `"guides"`——陣列，應包含與 API 相關的教學或指南頁面路徑。這些字串應為指南 URL 中 `/docs/...` 之後的部分，例如，若 `"Using Fetch"` 的完整網址為 `https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch`，則 `"guides"` 陣列應包含 `"/docs/Web/API/Fetch_API/Using_Fetch"`。

7. `"dictionaries"`——陣列，應列出 API 內使用的所有字典（dictionaries）。通常，只有當字典被多個屬性或方法使用時，才應該在這裡列出，除非該字典特別重要，或可能在多個頁面被引用。`"CryptoKeyPair"` 會產生指向 [CryptoKeyPair](/zh-TW/docs/Web/API/CryptoKeyPair) 的連結。

   > [!NOTE]
   > MDN 正逐步減少使用獨立字典文件。
   > 在可能的情況下，這些字典會被描述為物件，直接整合至使用它們的文件。

8. `"types"`——陣列，應列出 API 定義的 `typedefs` 和枚舉型別（enumerated types）。為了保持列表簡潔，你可以僅列出特別重要或被多個頁面引用的型別。

   > [!NOTE]
   > MDN 正在逐步減少使用獨立 `typedefs` 文件。
   > 在可能的情況下，這些型別會被描述為值，直接整合至使用它們的文件。

9. `"callbacks"`——陣列，應包含 API 定義的所有回呼型別（callback types）。即使某些 API 包含回呼型別，也可能不需要特別記錄，因為這些回呼型別通常不需要獨立文件來說明。

## 側邊欄用的標籤

某些子成員會依照頁面標籤自動從子頁面中識別。每當側邊欄被渲染時，系統會爬取 API 頂層之下的頁面，並根據標籤自動建立方法（Method 標籤）、屬性（Property 標籤）及建構子（Constructor 標籤）的對應條目。

此外，子成員也會根據標籤自動加上警告圖示，例如**實驗性功能**（Experimental 標籤）、**非標準功能**（Non Standard 或 Non-standard 標籤）以及**已淘汰功能**（Deprecated 標籤）。

關於基於標籤的處理方式，請參閱 [`APIRef` 巨集的原始碼](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs)以獲取更多資訊。

## 插入側邊欄

當你已將 API 條目新增至 `GroupData.json`、提交 Pull Request，並已合併到主倉儲後，你可以使用 [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) 巨集，將側邊欄插入 API 參考頁面中。該巨集的參數為 `GroupData.json` 中 API 的名稱。

例如，[WebVR API](/zh-TW/docs/Web/API/WebVR_API) 的側邊欄，可以透過以下語法嵌入對應頁面：

```plain
\{{APIRef("WebVR API")}}
```
