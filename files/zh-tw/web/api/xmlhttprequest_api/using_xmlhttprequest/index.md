---
title: 使用 XMLHttpRequest
slug: Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

在本指南中，我們將探討如何使用 {{domxref("XMLHttpRequest")}} 來發出 [HTTP](/zh-TW/docs/Web/HTTP) 請求，以便在網站和伺服器之間交換資料。

本文包含了 `XMLHttpRequest` 的常見和較不常見的用例範例。

要發送一個 HTTP 請求：

1. 建立一個 `XMLHttpRequest` 物件
2. 開啟一個 URL
3. 發送請求。

在交易完成後，`XMLHttpRequest` 物件將包含有用的訊息，例如回應主體和結果的 [HTTP 狀態](/zh-TW/docs/Web/HTTP/Reference/Status)。

```js
function reqListener() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "http://www.example.org/example.txt");
req.send();
```

## 請求的類型

透過 `XMLHttpRequest` 發出的請求可以透過兩種方式之一來取得資料：非同步或同步。請求的類型由 {{domxref("XMLHttpRequest.open()")}} 方法上設定的選用 `async` 引數（第三個引數）決定。如果此引數為 `true` 或未指定，則 `XMLHttpRequest` 會以非同步方式處理，否則會以同步方式處理。關於這兩種請求類型的詳細討論和示範，可以在[同步與非同步請求](/zh-TW/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests)頁面中找到。你不能在 Web Worker 之外使用同步請求，因為它會凍結主介面。

> [!NOTE]
> `XMLHttpRequest` 建構子不僅限於 XML 文件。它以**「XML」**開頭，是因為在它被建立時，最初用於非同步資料交換的主要格式是 XML。

## 處理回應

{{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}} 建構子定義了幾種類型的[回應屬性](https://xhr.spec.whatwg.org/)。這些屬性告訴發出 `XMLHttpRequest` 的用戶端關於回應狀態的重要訊息。以下章節概述了一些處理非文字回應類型可能涉及一些操作和分析的情況。

### 分析和操作 responseXML 屬性

如果你使用 `XMLHttpRequest` 來取得遠端 XML 文件的內容，{{domxref("XMLHttpRequest.responseXML", "responseXML")}} 屬性將會是一個包含已解析 XML 文件的 DOM 物件。這可能會難以操作和分析。分析此 XML 文件主要有四種方法：

1. 使用 [XPath](/zh-TW/docs/Web/XML/XPath) 來定位（或指向）它的部分內容。
2. 手動[解析和序列化 XML](/zh-TW/docs/Web/XML/Guides/Parsing_and_serializing_XML) 為字串或物件。
3. 使用 {{domxref("XMLSerializer")}} 將 **DOM 樹序列化為字串或檔案**。
4. 如果你總是事先知道 XML 文件的內容，可以使用 {{jsxref("RegExp")}}。如果你使用 `RegExp` 進行掃描時需要考慮換行符，你可能會想要移除換行符。然而，這種方法是「最後的手段」，因為如果 XML 程式碼稍有變動，這個方法很可能會失敗。

> [!NOTE]
> `XMLHttpRequest` 現在可以使用 {{domxref("XMLHttpRequest.responseXML", "responseXML")}} 屬性為你解析 HTML。參見 [XMLHttpRequest 中的 HTML](/zh-TW/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)文章來了解如何做到這一點。

### 處理包含 HTML 文件的 responseText 屬性

如果你使用 `XMLHttpRequest` 來取得遠端 HTML 網頁的內容，{{domxref("XMLHttpRequest.responseText", "responseText")}} 屬性是一個包含原始 HTML 的字串。這可能會難以操作和分析。分析和解析這個原始 HTML 字串主要有三種方法：

1. 使用 `XMLHttpRequest.responseXML` 屬性，如 [XMLHttpRequest 中的 HTML](/zh-TW/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) 文章中所述。
2. 透過 `fragment.body.innerHTML` 將內容注入到[文件片段](/zh-TW/docs/Web/API/DocumentFragment)的主體中，並遍歷該片段的 DOM。
3. 如果你總是事先知道 HTML `responseText` 的內容，可以使用 {{jsxref("RegExp")}}。如果你使用 `RegExp` 進行掃描時需要考慮換行符，你可能會想要移除換行符。然而，這種方法是「最後的手段」，因為如果 HTML 程式碼稍有變動，這個方法很可能會失敗。

## 處理二進位資料

雖然 {{domxref("XMLHttpRequest")}} 最常用於發送和接收文字資料，但它也可以用來發送和接收二進位內容。有幾種經過充分測試的方法可以將 `XMLHttpRequest` 的回應強制轉換為二進位資料。這些方法涉及在 `XMLHttpRequest` 物件上使用 {{domxref("XMLHttpRequest.overrideMimeType", "overrideMimeType()")}} 方法，這是一個可行的解決方案。

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// 以二進位字串形式取得未經處理的資料
req.overrideMimeType("text/plain; charset=x-user-defined");
/* … */
```

然而，現在有更現代的技術可用，因為 {{domxref("XMLHttpRequest.responseType", "responseType")}} 屬性現在支援多種額外的內容類型，這使得發送和接收二進位資料變得更加容易。

例如，考慮這個程式碼片段，它使用 `"arraybuffer"` 的 `responseType` 將遠端內容擷取到一個 {{jsxref("ArrayBuffer")}} 物件中，該物件儲存原始的二進位資料。

```js
const req = new XMLHttpRequest();

req.onload = (e) => {
  const arraybuffer = req.response; // 不是 responseText
  /* … */
};
req.open("GET", url);
req.responseType = "arraybuffer";
req.send();
```

更多範例請參閱[發送和接收二進位資料](/zh-TW/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data)頁面。

## 監控進度

`XMLHttpRequest` 提供了監聽請求處理過程中可能發生的各種事件的能力。這包括定期的進度通知、錯誤通知等等。

對 `XMLHttpRequest` 傳輸的 DOM {{domxref("XMLHttpRequest/progress_event", "progress")}} 事件監控遵循[進度事件規範](https://xhr.spec.whatwg.org/#interface-progressevent)：這些事件實作了 {{domxref("ProgressEvent")}} 介面。你可以監控以確定正在進行的傳輸狀態的實際事件有：

- {{domxref("XMLHttpRequest/progress_event", "progress")}}
  - : 已擷取的資料量已變更。
- {{domxref("XMLHttpRequest/load_event", "load")}}
  - : 傳輸完成；所有資料現在都在 `response` 中

```js
const req = new XMLHttpRequest();

req.addEventListener("progress", updateProgress);
req.addEventListener("load", transferComplete);
req.addEventListener("error", transferFailed);
req.addEventListener("abort", transferCanceled);

req.open();

// …

// 從伺服器到用戶端的傳輸進度（下載）
function updateProgress(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
    // …
  } else {
    // 無法計算進度訊息，因為總大小未知
  }
}

function transferComplete(evt) {
  console.log("傳輸已完成。");
}

function transferFailed(evt) {
  console.log("傳輸檔案時發生錯誤。");
}

function transferCanceled(evt) {
  console.log("傳輸已被使用者取消。");
}
```

我們為使用 `XMLHttpRequest` 執行資料傳輸時發送的各種事件新增事件監聽器。

> [!NOTE]
> 你需要在請求上呼叫 `open()` 之前新增事件監聽器。否則 `progress` 事件將不會觸發。

進度事件處理程式（在此範例中由 `updateProgress()` 函式指定）在事件的 `total` 和 `loaded` 欄位中接收要傳輸的總位元組數以及到目前為止已傳輸的位元組數。然而，如果 `lengthComputable` 欄位為 false，則總長度未知，將為零。

進度事件同時存在於下載和上傳傳輸中。下載事件在 `XMLHttpRequest` 物件本身上觸發，如上例所示。上傳事件在 `XMLHttpRequest.upload` 物件上觸發，如下所示：

```js
const req = new XMLHttpRequest();

req.upload.addEventListener("progress", updateProgress);
req.upload.addEventListener("load", transferComplete);
req.upload.addEventListener("error", transferFailed);
req.upload.addEventListener("abort", transferCanceled);

req.open();
```

> [!NOTE]
> 進度事件不適用於 `file:` 協定。

每收到一個資料區塊就會觸發進度事件，包括在進度事件觸發前就收到最後一個封包並關閉連線的情況下的最後一個區塊。在這種情況下，當該封包的 load 事件發生時，會自動觸發進度事件。這讓你現在可以僅透過監看「progress」事件來可靠地監控進度。

也可以使用 `loadend` 事件來偵測所有三種載入結束的條件（`abort`、`load` 或 `error`）：

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log("傳輸已結束（雖然我們不知道它是否成功）。");
}
```

請注意，從 `loadend` 事件收到的訊息中，無法確定是哪個條件導致操作終止；但是，你可以用它來處理在所有傳輸結束情境下都需要執行的任務。

## 取得最後修改日期

```js
function getHeaderTime() {
  console.log(this.getResponseHeader("Last-Modified")); // 一個有效的 GMTString 日期或 null
}

const req = new XMLHttpRequest();
req.open(
  "HEAD", // 當你只需要標頭時使用 HEAD
  "your-page.html",
);
req.onload = getHeaderTime;
req.send();
```

### 當最後修改日期變更時執行某些操作

讓我們建立兩個函式：

```js
function getHeaderTime() {
  const lastVisit = parseFloat(
    window.localStorage.getItem(`lm_${this.filepath}`),
  );
  const lastModified = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(lastVisit) || lastModified > lastVisit) {
    window.localStorage.setItem(`lm_${this.filepath}`, Date.now());
    isFinite(lastVisit) && this.callback(lastModified, lastVisit);
  }
}

function ifHasChanged(URL, callback) {
  const req = new XMLHttpRequest();
  req.open("HEAD" /* 使用 HEAD - 我們只需要標頭！ */, URL);
  req.callback = callback;
  req.filepath = URL;
  req.onload = getHeaderTime;
  req.send();
}
```

以及測試：

```js
// 讓我們測試檔案 "your-page.html"
ifHasChanged("your-page.html", function (modified, visit) {
  console.log(
    `頁面 '${this.filepath}' 已在 ${new Date(
      modified,
    ).toLocaleString()} 變更！`,
  );
});
```

如果你想知道目前頁面是否已變更，請參閱關於 {{domxref("document.lastModified")}} 的文章。

## 跨站 XMLHttpRequest

現代瀏覽器透過實作[跨來源資源共享](/zh-TW/docs/Web/HTTP/Guides/CORS)（CORS）標準來支援跨站請求。只要伺服器組態為允許來自你的 Web 應用程式來源的請求，`XMLHttpRequest` 就能運作。否則，會拋出一個 `INVALID_ACCESS_ERR` 例外。

## 繞過快取

一種跨瀏覽器相容的繞過快取的方法是在 URL 後面附加一個時間戳，並確保適當地包含「?」或「&」。例如：

```plain
http://example.com/bar.html -> http://example.com/bar.html?12345
http://example.com/bar.html?foobar=baz -> http://example.com/bar.html?foobar=baz&12345
```

由於本地快取是按 URL 索引的，這會使每個請求都變得獨一無二，從而繞過快取。

你可以使用以下程式碼自動調整 URL：

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## 安全性

啟用跨站腳本的建議方法是在對 XMLHttpRequest 的回應中使用 `Access-Control-Allow-Origin` HTTP 標頭。

### XMLHttpRequest 被停止

如果你遇到 XMLHttpRequest 收到 `status=0` 和 `statusText=null` 的情況，這表示請求不被允許執行。它處於 [`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent) 狀態。一個可能的原因是當 `XMLHttpRequest` 隨後 `open()` 時，`XMLHttpRequest` 的來源（在建立 XMLHttpRequest 時）發生了變化。舉例來說，這種情況可能發生在：一個 `XMLHttpRequest` 在視窗的 `onunload` 事件中觸發，它在要關閉的視窗還存在時被建立，但卻在該視窗失去焦點、另一個視窗取得焦點後才發送請求（也就是呼叫 `open()`）。避免這個問題最有效的方法是，在新視窗的 {{domxref("Element/DOMActivate_event", "DOMActivate")}} 事件上設定一個監聽器，該事件在被終止的視窗觸發其 {{domxref("Window/unload_event", "unload")}} 事件後就會被設定。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 Fetch API](/zh-TW/docs/Web/API/Fetch_API/Using_Fetch)
- [XMLHttpRequest 中的 HTML](/zh-TW/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- [HTTP 存取控制](/zh-TW/docs/Web/HTTP/Guides/CORS)
- [XMLHttpRequest——REST 與豐富使用者體驗](https://www.peej.co.uk/articles/rich-user-experience.html)
- [`XMLHttpRequest` 物件：WHATWG 規範](https://xhr.spec.whatwg.org/)
