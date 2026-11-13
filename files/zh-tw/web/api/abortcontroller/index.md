---
title: AbortController
slug: Web/API/AbortController
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`AbortController`** 介面表示一個控制器物件，允許你在需要時中止一個或多個 Web 請求。

你可以使用 {{domxref("AbortController.AbortController()", "AbortController()")}} 建構子來建立新的 `AbortController` 物件。與非同步操作的通訊是透過 {{domxref("AbortSignal")}} 物件完成的。

## 建構子

- {{domxref("AbortController.AbortController()", "AbortController()")}}
  - : 建立一個新的 `AbortController` 物件實例。

## 實例屬性

- {{domxref("AbortController.signal")}} {{ReadOnlyInline}}
  - : 回傳一個 {{domxref("AbortSignal")}} 物件實例，可用於與非同步操作進行通訊或中止操作。

## 實例方法

- {{domxref("AbortController.abort()")}}
  - : 在非同步操作完成之前中止該操作。這可以中止 [fetch 請求](/zh-TW/docs/Web/API/Window/fetch)、任何回應主體的消耗以及串流。

## 範例

> [!NOTE]
> 在 {{domxref("AbortSignal")}} 參考中有更多範例。

在以下範例中，我們嘗試使用 [Fetch API](/zh-TW/docs/Web/API/Fetch_API) 下載一個影片。

我們首先使用 {{domxref("AbortController.AbortController","AbortController()")}} 建構子建立一個控制器，然後使用 {{domxref("AbortController.signal")}} 屬性獲取其關聯的 {{domxref("AbortSignal")}} 物件。

當 [fetch 請求](/zh-TW/docs/Web/API/Window/fetch)初始化時，我們將 `AbortSignal` 作為選項的一部分（如下的 `{signal}`）傳遞到請求的選項物件中。這將信號和控制器與 fetch 請求關聯起來，並允許我們通過調用 {{domxref("AbortController.abort()")}} 來中止它，如以下第二個事件監聽器所示。

當 `abort()` 被調用時，`fetch()` 的 promise 會以名為 `AbortError` 的 `DOMException` 被拒絕。

```js
let controller;
const url = "video.mp4";

const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
    console.log("下載已中止");
  }
});

async function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch(url, { signal });
    console.log("下載完成", response);
    // 進一步處理回應
  } catch (err) {
    console.error(`下載錯誤：${err.message}`);
  }
}
```

如果在 `fetch()` 呼叫兌現後但在回應主體被讀取之前中止請求，那麼嘗試讀取回應主體將會以 `AbortError` 例外被拒絕。

```js
async function get() {
  const controller = new AbortController();
  const request = new Request("https://example.org/get", {
    signal: controller.signal,
  });

  const response = await fetch(request);
  controller.abort();
  // 下一行將拋出 `AbortError`
  const text = await response.text();
  console.log(text);
}
```

你可以在 [GitHub 上找到完整的範例](https://github.com/mdn/dom-examples/tree/main/abort-api)；你也可以[查看線上運行範例](https://mdn.github.io/dom-examples/abort-api/)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Fetch API](/zh-TW/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/)，来自 Jake Archibald
