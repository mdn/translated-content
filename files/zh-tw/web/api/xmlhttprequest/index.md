---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequest`（XHR）物件用於與伺服器互動。你可以從 URL 擷取資料，而無需重新整理整個頁面。這使得網頁能夠只更新頁面的一部分，而不會干擾使用者正在進行的操作。

{{InheritanceDiagram}}

儘管其名稱如此，`XMLHttpRequest` 可用於擷取任何類型的資料，而不僅僅是 XML。

如果你的通訊需求涉及從伺服器接收事件資料或訊息資料，請考慮透過 {{domxref("EventSource")}} 介面使用[伺服器發送事件](/zh-TW/docs/Web/API/Server-sent_events)。對於全雙工通訊，[WebSocket](/zh-TW/docs/Web/API/WebSockets_API) 可能是更好的選擇。

## 建構子

- {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}
  - : 此建構子會初始化一個 `XMLHttpRequest`。它必須在任何其他方法呼叫之前被呼叫。

## 實體屬性

_此介面也繼承了 {{domxref("XMLHttpRequestEventTarget")}} 和 {{domxref("EventTarget")}} 的屬性。_

- {{domxref("XMLHttpRequest.readyState")}} {{ReadOnlyInline}}
  - : 回傳一個數字，表示請求的狀態。
- {{domxref("XMLHttpRequest.response")}} {{ReadOnlyInline}}
  - : 回傳一個 {{jsxref("ArrayBuffer")}}、{{domxref("Blob")}}、{{domxref("Document")}}、JavaScript 物件或字串，其類型取決於 {{domxref("XMLHttpRequest.responseType")}} 的值，其中包含回應實體的主體。
- {{domxref("XMLHttpRequest.responseText")}} {{ReadOnlyInline}}
  - : 回傳一個字串，其中包含以文字形式呈現的請求回應，如果請求不成功或尚未發送，則回傳 `null`。
- {{domxref("XMLHttpRequest.responseType")}}
  - : 指定回應的類型。
- {{domxref("XMLHttpRequest.responseURL")}} {{ReadOnlyInline}}
  - : 回傳回應的序列化 URL，如果 URL 為 null，則回傳空字串。
- {{domxref("XMLHttpRequest.responseXML")}} {{ReadOnlyInline}}
  - : 回傳一個包含請求回應的 {{domxref("Document")}}，如果請求不成功、尚未發送或無法解析為 XML 或 HTML，則回傳 `null`。在 [Web Worker](/zh-TW/docs/Web/API/Web_Workers_API) 中不可用。
- {{domxref("XMLHttpRequest.status")}} {{ReadOnlyInline}}
  - : 回傳請求的 [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)。
- {{domxref("XMLHttpRequest.statusText")}} {{ReadOnlyInline}}
  - : 回傳一個字串，其中包含 HTTP 伺服器回傳的回應字串。與 {{domxref("XMLHttpRequest.status")}} 不同，這包含回應訊息的完整文字（例如 `"OK"`）。

    > [!NOTE]
    > 根據 HTTP/2 規範 {{RFC(7540, "Response Pseudo-Header Fields", "8.1.2.4")}}，HTTP/2 並未定義一種方法來攜帶 HTTP/1.1 狀態行中包含的版本或原因短語。

- {{domxref("XMLHttpRequest.timeout")}}
  - : 請求在自動終止前可以花費的時間（以毫秒為單位）。
- {{domxref("XMLHttpRequest.upload")}} {{ReadOnlyInline}}
  - : 一個 {{domxref("XMLHttpRequestUpload")}}，表示上傳過程。
- {{domxref("XMLHttpRequest.withCredentials")}}
  - : 如果跨站 `Access-Control` 請求應使用憑證（例如 Cookie 或授權標頭）發出，則回傳 `true`；否則回傳 `false`。

### 非標準屬性

- `XMLHttpRequest.mozAnon` {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 一個布林值。如果為真值，請求將在不帶 Cookie 和驗證標頭的情況下發送。
- `XMLHttpRequest.mozSystem` {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : 一個布林值。如果為真值，則不會對請求強制執行同源政策。

## 實體方法

- {{domxref("XMLHttpRequest.abort()")}}
  - : 如果請求已發送，則中止該請求。
- {{domxref("XMLHttpRequest.getAllResponseHeaders()")}}
  - : 回傳所有回應標頭，以 {{Glossary("CRLF")}} 分隔，作為一個字串；如果尚未收到回應，則回傳 `null`。
- {{domxref("XMLHttpRequest.getResponseHeader()")}}
  - : 回傳包含指定標頭文字的字串，如果尚未收到回應或回應中不存在該標頭，則回傳 `null`。
- {{domxref("XMLHttpRequest.open()")}}
  - : 初始化一個請求。
- {{domxref("XMLHttpRequest.overrideMimeType()")}}
  - : 覆寫伺服器回傳的 MIME 類型。
- {{domxref("XMLHttpRequest.send()")}}
  - : 發送請求。如果請求是異步的（這是預設值），此方法會在請求發送後立即回傳。
- {{domxref("XMLHttpRequest.setAttributionReporting()")}} {{securecontext_inline}} {{experimental_inline}}
  - : 表示你希望請求的回應能夠註冊歸因來源或觸發事件。
- {{domxref("XMLHttpRequest.setRequestHeader()")}}
  - : 設定 HTTP 請求標頭的值。你必須在呼叫 {{domxref("XMLHttpRequest.open", "open()")}} 之後、但在呼叫 {{domxref("XMLHttpRequest.send", "send()")}} 之前呼叫 `setRequestHeader()`。

## 事件

- {{domxref("XMLHttpRequest/abort_event", "abort")}}
  - : 當請求被中止時觸發，例如因為程式呼叫了 {{domxref("XMLHttpRequest.abort()")}}。也可透過 `onabort` 事件處理器屬性使用。
- {{domxref("XMLHttpRequest/error_event", "error")}}
  - : 當請求遇到錯誤時觸發。也可透過 `onerror` 事件處理器屬性使用。
- {{domxref("XMLHttpRequest/load_event", "load")}}
  - : 當 `XMLHttpRequest` 交易成功完成時觸發。也可透過 `onload` 事件處理器屬性使用。
- {{domxref("XMLHttpRequest/loadend_event", "loadend")}}
  - : 當請求完成時觸發，無論是成功（在 {{domxref("XMLHttpRequest/load_event", "load")}} 之後）還是不成功（在 {{domxref("XMLHttpRequest/abort_event", "abort")}} 或 {{domxref("XMLHttpRequest/error_event", "error")}} 之後）。也可透過 `onloadend` 事件處理器屬性使用。
- {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}
  - : 當請求開始載入資料時觸發。也可透過 `onloadstart` 事件處理器屬性使用。
- {{domxref("XMLHttpRequest/progress_event", "progress")}}
  - : 當請求接收到更多資料時定期觸發。也可透過 `onprogress` 事件處理器屬性使用。
- {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}}
  - : 每當 {{domxref("XMLHttpRequest.readyState", "readyState")}} 屬性變更時觸發。也可透過 `onreadystatechange` 事件處理器屬性使用。
- {{domxref("XMLHttpRequest/timeout_event", "timeout")}}
  - : 當進度因預設時間到期而終止時觸發。也可透過 `ontimeout` 事件處理器屬性使用。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("XMLSerializer")}}：將 DOM 樹序列化為 XML
- [使用 XMLHttpRequest](/zh-TW/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Fetch API](/zh-TW/docs/Web/API/Fetch_API)
