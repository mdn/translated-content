---
title: Fetch API
slug: Web/API/Fetch_API
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{DefaultAPISidebar("Fetch API")}}

Fetch API 提供了一個獲取資源（包括跨網路）的介面。它是 {{DOMxRef("XMLHttpRequest")}} 的一個更強大且更有彈性的替代品。

## 概念與用法

Fetch API 使用 {{DOMxRef("Request")}} 和 {{DOMxRef("Response")}} 物件（以及其他涉及網路請求的事物），也使用相關的概念像是 CORS 和 HTTP Origin 標頭語意。

若要發出請求並獲取資源，請使用 {{domxref("Window/fetch", "fetch()")}} 方法。它在 {{DOMxRef("Window")}} 和 {{DOMxRef("WorkerGlobalScope", "Worker")}} 上下文中都是全域方法。這使得它幾乎在你可能想要獲取資源的任何上下文中皆可用。

`fetch()` 方法接受一個強制性的引數，也就是你想要獲取的資源路徑。它會回傳一個 {{JSxRef("Promise")}}，該 Promise 會解析為該請求的 {{DOMxRef("Response")}}——只要伺服器回應了標頭——**即使伺服器回應是 HTTP 錯誤狀態**。你也可以選擇性地傳入一個 `init` 選項物件作為第二個引數（參見 {{DOMxRef("Request")}}）。

一旦檢索到 {{DOMxRef("Response")}}，就有許多可用的方法來定義本體內容是什麼，以及應該如何處理它。

你可以直接使用 {{DOMxRef("Request.Request", "Request()")}} 和 {{DOMxRef("Response.Response", "Response()")}} 建構子來建立請求和回應，但通常不常這麼做。取而代之的是，這些更有可能作為其他 API 動作的結果而建立（例如來自 service workers 的 {{DOMxRef("FetchEvent.respondWith()")}}）。

在[使用 Fetch](/zh-TW/docs/Web/API/Fetch_API/Using_Fetch) 中可以找到更多關於使用 Fetch API 功能的資訊。

### 延遲獲取

{{domxref("Window/fetchLater", "fetchLater()")}} API 讓開發者可以請求*延遲獲取*，它可以在指定的時間段後發送，或是當頁面關閉或導航離開時發送。參見[使用延遲獲取](/zh-TW/docs/Web/API/Fetch_API/Using_Deferred_Fetch)。

## 介面

- {{domxref("Window.fetch()")}} 和 {{domxref("WorkerGlobalScope.fetch()")}}
  - : 用於獲取資源的 `fetch()` 方法。
- {{domxref("Window.fetchLater()")}}
  - : 用於發出延遲獲取請求。
- {{domxref("DeferredRequestInit")}}
  - : 代表可用於組態延遲獲取請求的選項集合。
- {{domxref("FetchLaterResult")}}
  - : 代表請求延遲獲取的結果。
- {{DOMxRef("Headers")}}
  - : 代表回應／請求標頭，允許你查詢它們並根據結果採取不同的動作。
- {{DOMxRef("Request")}}
  - : 代表一個資源請求。
- {{DOMxRef("Response")}}
  - : 代表對請求的回應。

## HTTP 標頭

- {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}
  - : 控制 `fetchLater()` API 的[頂層配額](/zh-TW/docs/Web/API/Fetch_API/Using_Deferred_Fetch#配額)。
- {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}
  - : 控制 `fetchLater()` API 的[共享跨來源子框架配額](/zh-TW/docs/Web/API/Fetch_API/Using_Deferred_Fetch#配額)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 Fetch](/zh-TW/docs/Web/API/Fetch_API/Using_Fetch)
- [Service Worker API](/zh-TW/docs/Web/API/Service_Worker_API)
- [HTTP 存取控制（CORS）](/zh-TW/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-TW/docs/Web/HTTP)
