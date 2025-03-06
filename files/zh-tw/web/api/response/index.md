---
title: Response
slug: Web/API/Response
---

{{APIRef("Fetch API")}}

[Fetch API](/zh-TW/docs/Web/API/Fetch_API) 的 **`Response`** 介面代表了一個請求會返回的回應。

你可以用 {{domxref("Response.Response()")}} 建構子創建一個新的 `Response`物件。但實務上碰到 Response 物件的時機，比較常出現在進行了一個 API 操作後，得到返回的 Response 物件。舉例而言，使用 service worker {{domxref("Fetchevent.respondWith")}} 或是使用單純的{{domxref("GlobalFetch.fetch()")}}。

## 建構子

- {{domxref("Response.Response","Response()")}}
  - : 創建一個新的 `Response` 物件。

## 屬性

- {{domxref("Response.headers")}} {{readonlyinline}}
  - : 包含與此 response 相關的 {{domxref("Headers")}} 物件。
- {{domxref("Response.ok")}} {{readonlyinline}}
  - : 無論此 response 是不是成功 ( 狀態碼 200-299 ) 都會包含一個 boolean 狀態。
- {{domxref("Response.redirected")}} {{ReadOnlyInline}}
  - : 指出此 response 是不是個重新導向的結果，如果是的話，代表此 URL 具有一個以上的入口。
- {{domxref("Response.status")}} {{readonlyinline}}
  - : 包含此 response 的狀態碼(例如：成功時為 `200` )。
- {{domxref("Response.statusText")}} {{readonlyinline}}
  - : 包含狀態碼所對應的狀態文字 (例如： `OK` 對應 `200`)。
- {{domxref("Response.type")}} {{readonlyinline}}
  - : 包含此 response 的類型 (例如： `basic`, `cors`)。
- {{domxref("Response.url")}} {{readonlyinline}}
  - : 包含此 response 的 URL。
- {{domxref("Response.useFinalURL")}}
  - : 包含一個 boolean 狀態，指出此 URL 是否為此 response 的最後一步。

`Response` 實做了{{domxref("Body")}}, 所以它另有以下可用的屬性：

- {{domxref("Body.body")}} {{readonlyInline}}
  - : A simple getter used to expose a {{domxref("ReadableStream")}} of the body contents.
- {{domxref("Body.bodyUsed")}} {{readonlyInline}}
  - : Stores a {{domxref("Boolean")}} that declares whether the body has been used in a response yet.

## 方法

- {{domxref("Response.clone()")}}
  - : 建立一份 `Response` 的複製物件。
- {{domxref("Response.error()")}}
  - : Returns a new `Response` object associated with a network error.
- {{domxref("Response.redirect()")}}
  - : Creates a new response with a different URL.

`Response` implements {{domxref("Body")}}, so it also has the following methods available to it:

- {{domxref("Body.arrayBuffer()")}}
  - : Takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise that resolves with an {{domxref("ArrayBuffer")}}.
- {{domxref("Body.blob()")}}
  - : Takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise that resolves with a {{domxref("Blob")}}.
- {{domxref("Body.formData()")}}
  - : Takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise that resolves with a {{domxref("FormData")}} object.
- {{domxref("Body.json()")}}
  - : Takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as {{jsxref("JSON")}}.
- {{domxref("Body.text()")}}
  - : Takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise that resolves with a {{domxref("USVString")}} (text).

## 範例

在[基本 fetch 範例](https://github.com/mdn/dom-examples/tree/main/fetch/basic-fetch) ([run example live](https://mdn.github.io/dom-examples/fetch/basic-fetch/)) 中，我們使用 `fetch()` 呼叫來得到圖片，並使用 {{htmlelement("img")}} tag 顯示。 這裡的`fetch()` 呼叫返回了一個 promise，它使用與資源 fetch 操作有關的 `Response` 進行解析。你可能有發現，由於我們要求的是一張圖片，所以需要用 {{domxref("Body.blob")}} ({{domxref("Response")}} 時做了 body) 讓 response 有正確的 MIME 類型。

```js
const image = document.querySelector(".my-image");
fetch("flowers.jpg")
  .then(function (response) {
    return response.blob();
  })
  .then(function (blob) {
    const objectURL = URL.createObjectURL(blob);
    image.src = objectURL;
  });
```

除此之外，你也能用 {{domxref("Response.Response()")}} 建構子去建立自己的客製化 `Response` 物件：

```js
const response = new Response();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參考

- [ServiceWorker API](/zh-TW/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/zh-TW/docs/Web/HTTP/CORS)
- [HTTP](/zh-TW/docs/Web/HTTP)
