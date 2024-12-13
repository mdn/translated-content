---
title: Fetch API
slug: Web/API/Fetch_API
---

{{DefaultAPISidebar("Fetch API")}}Fetch API 提供了一個能獲取包含跨網路資源在的資源介面。它有點像我們所熟悉的 {{domxref("XMLHttpRequest")}} ，但這個新的 API 提供了更強更彈性的功能。

## 概念與應用

Fetch 提供了 {{domxref("Request")}} 與 {{domxref("Response")}} 物件，還有其他牽涉網路請求的通用定義。這能讓他們在需要的時候被使用到，不管是 service worker、Cache API、還是其他處理或更動請求回應的相類事物、或是任何需要產生有序化產生回應的用例（use case）。

它也提供了諸如 CORS 與 HTTP origin 標頭語意的分散定義，能取代分散的定義。

要發動請求並取得資源的話，請使用 {{domxref("GlobalFetch.fetch")}} 方法。他實作了數種介面，並指定了 {{domxref("Window")}} 與 {{domxref("WorkerGlobalScope")}}，使它可以在任何想獲取資源的環境中使用。

`fetch()` 方法有一個強制性的參數，就是要取得資源的網址。該方法會回傳一個不論請求成敗，都會 resolve 的 promise {{domxref("Response","回應")}}。你也能選擇性地使用第二個稱為 `init` 的物件參數（請參見 {{domxref("Request")}}）。

當 {{domxref("Response")}} 檢索後，在請求體裡面會定義一些請求體為何，還有要如何處理的方法（請參見 {{domxref("Body")}}）。

你也可以直接用 {{domxref("Request.Request","Request()")}} 與 {{domxref("Response.Response","Response()")}} 建構子來建立請求與回應，不過你不太可能直接使用他，反而更可能是以其他 API 行動的結果為形式存在。（例如來自 service worker 的 {{domxref("FetchEvent.respondWith")}}）

> [!NOTE]
> 你可以在[使用 Fetch](/zh-TW/docs/Web/API/Fetch_API/Using_Fetch)深入理解 Fetch，並在[Fetch 的基本概念](/zh-TW/docs/Web/API/Fetch_API/Using_Fetch)文章內理解概念。

### 中斷一次 Fetch

各家瀏覽器已經開始加入 {{DOMxRef("AbortController")}} 與 {{DOMxRef("AbortSignal")}} 介面（也就是 Abort API）的實驗性支援，讓 Fetch 和 XHR 這類的操作在完成前可以被中斷。詳情請參閱相關介面的文件。

## Fetch 介面

- {{DOMxRef("fetch()")}}
  - : 用於取得資源的 `fetch()` 方法。
- {{domxref("Headers")}}
  - : 代表請求/回應標頭，讓你能 query 並針對結果不同，採取不同行動。
- {{domxref("Request")}}
  - : 代表資源請求。
- {{domxref("Response")}}
  - : 代表資源請求的回應。

## Fetch mixin

- {{domxref("Body")}}
  - : 提供請求/回應訊息體的相關方法，能宣告內容的類別為何，以及該如何處理。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 Fetch](/zh-TW/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/zh-TW/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/zh-TW/docs/Web/HTTP/CORS)
- [HTTP](/zh-TW/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/JakeChampion/fetch)
- [Fetch 基本概念](/zh-TW/docs/Web/API/Fetch_API/Using_Fetch)
