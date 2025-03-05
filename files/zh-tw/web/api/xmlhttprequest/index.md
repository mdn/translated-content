---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
---

{{DefaultAPISidebar("XMLHttpRequest")}}

藉由 `XMLHttpRequest`（XHR）物件的方式來存取伺服器端的資料，可以讓你直接經由指定的 URL 擷取資料卻不用刷新整個網頁。這樣一來當想要更新網頁中的部分資料時，不再需要藉由刷新整個頁面的方法而中斷使用者的操作。在{{Glossary("AJAX")}}應用中 `XMLHttpRequest` 被大量的使用。

{{InheritanceDiagram(650, 150)}}

雖然 `XMLHttpRequest` 這個物件的命名包含了 XML 與 HTTP 等字眼，但實際上 `XMLHttpRequest` 可用來接收任何類型的資料，不限於 XML 類型而已。

如果在資料交換的時候，需要接收從伺服器端傳來的事件或訊息：可以考慮透過{{domxref("EventSource")}}介面使用[server-sent 事件](/zh-TW/docs/Web/API/Server-sent_events)。對於和伺服器全雙工的資訊交換，[WebSockets](/zh-TW/docs/Web/API/WebSockets_API) 可能是較佳的選擇。

## 建構式

- {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}
  - : 建構式用來初始化一個 `XMLHttpRequest` 物件。必須在其他任何所屬方法被呼叫之前被呼叫。

## 屬性

_此介面也繼承了 {{domxref("XMLHttpRequestEventTarget")}} 及 {{domxref("EventTarget")}} 的屬性。_

- {{domxref("XMLHttpRequest.onreadystatechange")}}
  - : 一個事件處理器函式，會於 `readyState` 屬性之狀態改變時被呼叫。
- {{domxref("XMLHttpRequest.readyState")}} {{readonlyinline}}
  - : 回傳一個無符號短整數（`unsigned short`）代表請求之狀態。
- {{domxref("XMLHttpRequest.response")}} {{readonlyinline}}
  - : 回傳的內容可能是 {{domxref("ArrayBuffer")}}、{{domxref("Blob")}}、{{domxref("Document")}}、JavaScript 物件或 {{domxref("DOMString")}}。完全根據 {{domxref("XMLHttpRequest.responseType")}} 的值決定回傳的內容為何種型態，資料為回應實體中的內容（response entity body）。
- {{domxref("XMLHttpRequest.responseText")}} {{readonlyinline}}
  - : 回傳一個 {{domxref("DOMString")}}，其內容為請求之回應的文字內容。如請求失敗或尚未發送，則為 `null`。
- {{domxref("XMLHttpRequest.responseType")}}
  - : 為一可列舉（enumerated）值，定義回應內容的資料類型（response type）。
- {{domxref("XMLHttpRequest.responseURL")}} {{readonlyinline}}
  - : 回傳一個回應（response）的序列化 URL，如 URL 為 null 則回傳空字串。
- {{domxref("XMLHttpRequest.responseXML")}} {{readonlyinline}}
  - : 回傳一個 {{domxref("Document")}}，其內容為請求之回應內容所解析成的文件物件。如請求失敗或尚未發送，又或是無法解析成 XML、HTML，則為 `null`。Not available in workers.
- {{domxref("XMLHttpRequest.status")}} {{readonlyinline}}
  - : 回傳一個無符號短整數（`unsigned short`）表示已發送請求之回應的狀態。
- {{domxref("XMLHttpRequest.statusText")}} {{readonlyinline}}
  - : 回傳一個 {{domxref("DOMString")}} 表示 HTTP 伺服器回應之字串。和 {{domxref("XMLHTTPRequest.status")}} 不同的是，`XMLHttpRequest.statusText` 包含了回應的整個文字訊息（如 "`200 OK`"）。

> [!NOTE]
> The HTTP/2 specification ([8.1.2.4](https://http2.github.io/http2-spec/#rfc.section.8.1.2.4) [Response Pseudo-Header Fields](https://http2.github.io/http2-spec/#HttpResponse)), HTTP/2 does not define a way to carry the version or reason phrase that is included in an HTTP/1.1 status line.

- {{domxref("XMLHttpRequest.timeout")}}
  - : 為一無符號長整數（`unsigned long`），代表一個請求在逾時而被自動中止前的可等待時間（毫秒）。
- {{domxref("XMLHttpRequestEventTarget.ontimeout")}}
  - : 為一 event handler 物件，會於請求逾時時被呼叫。
- {{domxref("XMLHttpRequest.upload")}} {{readonlyinline}}
  - : 為一 {{domxref("XMLHttpRequestUpload")}} 物件，代表上傳的進度。
- {{domxref("XMLHttpRequest.withCredentials")}}
  - : {{domxref("Boolean","布林值")}}。表示是否允許在跨站存取（cross-site `Access-Control`）之請求當中，發送如 cookies 或 authorization headers 等憑證資訊（credentials）。

### 非標準屬性

- {{domxref("XMLHttpRequest.channel")}}{{ReadOnlyInline}}
  - : 是一個 `nsIChannel`。當執行要求時，物件使用的頻道（Channel）。
- {{domxref("XMLHttpRequest.mozAnon")}}{{ReadOnlyInline}}
  - : 為一個布林值。如果為真，請求就會以沒有 cookie 及 authentication headers 的方式送出。
- {{domxref("XMLHttpRequest.mozSystem")}}{{ReadOnlyInline}}
  - : 這是一個布林值。If true, the same origin policy will not be enforced on the request.
- {{domxref("XMLHttpRequest.mozBackgroundRequest")}}
  - : 這是一個布林值。指出該物件是否為一個背景型態的服務要求。
- {{domxref("XMLHttpRequest.mozResponseArrayBuffer")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Is an [`ArrayBuffer`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). The response to the request, as a JavaScript typed array.
- {{domxref("XMLHttpRequest.multipart")}} {{Deprecated_Inline}}
  - : **This Gecko-only feature, a boolean, was removed in Firefox/Gecko 22.** Please use [Server-Sent Events](/zh-TW/docs/Web/API/Server-sent_events), [Web Sockets](/zh-TW/docs/Web/API/WebSockets_API), or `responseText` from progress events instead.

### 事件處理器

所有瀏覽器都支援 `XMLHttpRequest` 物件實體的 `onreadystatechange` 屬性。

之後，各個瀏覽器實作了多種額外的事件處理器（如 `onload`、`onerror`、`onprogress` 等）。請參考[使用 XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)。

除了以 `on*` 屬性來設定事件處理函式，更多現代覽瀏器（包括 Firefox）也支援使用標準的 [`addEventListener()`](/zh-TW/docs/Web/API/EventTarget/addEventListener) API 註冊監聽 `XMLHttpRequest` 的事件。

## 方法

- {{domxref("XMLHttpRequest.abort()")}}
  - : 中止已發出的請求。
- {{domxref("XMLHttpRequest.getAllResponseHeaders()")}}
  - : 回傳所有的回應標頭（response headers），為一以斷行字元（[CRLF](/zh-TW/docs/Glossary/CRLF)）分行的字串，如未接收到回應則為 `null`。
- {{domxref("XMLHttpRequest.getResponseHeader()")}}
  - : 回傳指定標頭文字之字串，假如回應尚未被接收或是標頭不存在於回應中則為 `null`。
- {{domxref("XMLHttpRequest.open()")}}
  - : 初始化一個請求。此方法用於 JavaScript 中；若要在 native code 中初始化請求，請以 [`openRequest()`](</zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIXMLHttpRequest#openRequest()>) 作為替代。
- {{domxref("XMLHttpRequest.overrideMimeType()")}}
  - : 覆寫伺服器回傳的 MIME type。
- {{domxref("XMLHttpRequest.send()")}}
  - : 發送請求。如果為非同步請求（預設值），此方法將在發出請求後便立即回傳（return）。
- {{domxref("XMLHttpRequest.setRequestHeader()")}}
  - : 設定 HTTP 請求標頭（request header）值。`setRequestHeader()` 可被呼叫的時間點必須於 [`open()`](#open) 之後、在 `send()` 之前。

### 非標準方法

- {{domxref("XMLHttpRequest.init()")}}

  - : 使用 C++ 程式時，用來初始化這個物件。

    > [!WARNING]
    > 請勿在 JavaScript 中呼叫這個方法。

- {{domxref("XMLHttpRequest.openRequest()")}}
  - : 初始化請求。這方法是用於原生程式，若想在 JavaScript 中初始化一個請求，請使用 [`open()`](</zh-TW/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIXMLHttpRequest#open()>) 這個方法來代替。請參照 `open()` 的相關文件。
- {{domxref("XMLHttpRequest.sendAsBinary()")}}{{deprecated_inline()}}
  - : 另一種 `send()` 方法，用來送出二進位資料。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("XMLSerializer")}}：將 DOM 樹解析為 XML 物件
- [使用 XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Fetch API](/zh-TW/docs/Web/API/Fetch_API)
