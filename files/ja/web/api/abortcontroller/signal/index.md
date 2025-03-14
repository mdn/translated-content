---
title: "AbortController: signal プロパティ"
short-title: signal
slug: Web/API/AbortController/signal
l10n:
  sourceCommit: c0e43030605b6f12bc4d550c0d5b8bf8a633eff3
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`signal`** は {{domxref("AbortController")}} インターフェイスの読み取り専用プロパティで、求めに応じて非同期操作とやりとりしたり中止したりするために使用される {{domxref("AbortSignal")}} オブジェクトインスタンスを返します。

## 値

{{domxref("AbortSignal")}} オブジェクトインスタンスです。

## 例

次のコードでは、動画のダウンロードを[フェッチ API](/ja/docs/Web/API/Fetch_API) を使用して行おうとします。

最初に {{domxref("AbortController.AbortController", "AbortController()")}} コンストラクターを使用してコントローラーを作成し、関連する {{domxref("AbortSignal")}} オブジェクトへの参照を {{domxref("AbortController.signal")}} プロパティを使用して取り込みます。

[フェッチリクエスト](/ja/docs/Web/API/Window/fetch)が開始されると、 `AbortSignal` をリクエストのオプションオブジェクト（下記の `{signal}`）にオプションとして渡します。これにより、シグナルとコントローラーをそのフェッチリクエストと関連付け、 2 つ目のイベントリスナーで下記のように {{domxref("AbortController.abort()")}} を呼び出すことでフェッチを中断できるようになります。

```js
const controller = new AbortController();
const signal = controller.signal;

const url = "video.mp4";
const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  controller.abort();
  console.log("Download aborted");
});

function fetchVideo() {
  fetch(url, { signal })
    .then((response) => {
      console.log("Download complete", response);
    })
    .catch((err) => {
      console.error(`Download error: ${err.message}`);
    });
}
```

> **メモ:** `abort()` が呼び出されると、`fetch()` のプロミスは `AbortError` で拒否されます。

[GitHub に完全に動作する例](https://github.com/mdn/dom-examples/tree/main/abort-api)があります。また、[ライブでの実行](https://mdn.github.io/dom-examples/abort-api/)も確認してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
