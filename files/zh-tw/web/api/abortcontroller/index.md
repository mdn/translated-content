---
title: AbortController
slug: Web/API/AbortController
---

{{APIRef("DOM")}}{{SeeCompatTable}}

**`AbortController`** 介面代表一個控制器物件，讓你可以在需要時中斷一個或多個 DOM 請求。

你可以使用 {{domxref("AbortController.AbortController()")}} 建立一個新的 `AbortController` 物件。與 DOM 請求溝通時則是使用 {{domxref("AbortSignal")}} 物件。

## 建構子

- {{domxref("AbortController.AbortController()")}}
  - : 建立一個新的 `AbortController` 物件實體。

## 屬性

- {{domxref("AbortController.signal")}} {{readonlyInline}}
  - : 回傳一個 {{domxref("AbortSignal")}} 物件實體，可以用來中斷一個 DOM 請求、或是與其溝通。

## 方法

- {{domxref("AbortController.abort()")}}
  - : 在一個 DOM 請求完成前中斷他。這可以用來中斷 [fetch 請求](/zh-TW/docs/Web/API/Window/fetch)、對任何 Response {{domxref("Body")}} 的讀取、或是資料流。

## 範例

在下面的程式碼片段中，我們要用 [Fetch API](/zh-TW/docs/Web/API/Fetch_API) 來下載一部影片。

我們首先用 {{domxref("AbortController.AbortController","AbortController()")}} 建立一個控制器，然後透過 {{domxref("AbortController.signal")}} 屬性取得他的 {{domxref("AbortSignal")}} 物件。

在初始化 [fetch 請求](/zh-TW/docs/Web/API/Window/fetch) 的時候，我們把 `AbortSignal` 作為選項傳入該請求的選項物件中（參考下方的 `{signal}`）。這樣會把剛才的中斷訊號與控制器跟 fetch 請求關聯起來，讓我們可以透過呼叫 {{domxref("AbortController.abort()")}} 來中斷該請求。請參考下方範例中第二個事件處理器。

```js
var controller = new AbortController();
var signal = controller.signal;

var downloadBtn = document.querySelector('.download');
var abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', function() {
  controller.abort();
  console.log('下載已中斷');
});

function fetchVideo() {
  ...
  fetch(url, {signal}).then(function(response) {
    ...
  }).catch(function(e) {
    reports.textContent = '下載錯誤: ' + e.message;
  })
}
```

> [!NOTE]
> 當 `abort()` 被呼叫的時候，`fetch()` 回傳的 Promise 會被以 `AbortError` 拒絕。

在 GitHub 有個完整的範例可供參考 — 請參見 [abort-api](https://github.com/mdn/dom-examples/tree/master/abort-api)（[或是也可以實際體驗看看](https://mdn.github.io/dom-examples/abort-api/)）。

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Fetch API](/zh-TW/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developers.google.com/web/updates/2017/09/abortable-fetch) by Jake Archibald
