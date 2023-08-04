---
title: AbortController
slug: Web/API/AbortController
l10n:
  sourceCommit: a662e542a529a0f8c86b60d85abe0035093c86d1
---

{{APIRef("DOM")}}

**`AbortController`** インターフェイスは 1 つ以上のウェブリクエストをいつでも中断することを可能にするコントローラーオブジェクトを表します。

新しい `AbortController` オブジェクトを新しく生成するには、 {{domxref("AbortController.AbortController()", "AbortController()")}} コンストラクターを使うことができます。 DOM リクエストとの送信は、 {{domxref("AbortSignal")}} オブジェクトを使って行われます。

## コンストラクター

- {{domxref("AbortController()")}}
  - : 新しい `AbortController` オブジェクトインスタンスを生成します。

## プロパティ

- {{domxref("AbortController.signal")}} {{ReadOnlyInline}}
  - : {{domxref("AbortSignal")}} オブジェクトのインスタンスを返します。 このオブジェクトは、 DOM リクエストの送信や中断に使用します。

## メソッド

- {{domxref("AbortController.abort()")}}
  - : DOM リクエストが完了する前に中断します。これは、[フェッチリクエスト](/ja/docs/Web/API/fetch)、あらゆるレスポンス本体やストリームを中断することができます。

## 例

> **メモ:** 他の例が {{domxref("AbortSignal")}} のリファレンスにあります。

この後の短いコードで、[フェッチ API](/ja/docs/Web/API/Fetch_API) を使用して動画をダウンロードします。

まず {{domxref("AbortController.AbortController","AbortController()")}} コンストラクターを使ってコントローラーを生成し、 {{domxref("AbortController.signal")}} プロパティを使用して関連する {{domxref("AbortSignal")}} オブジェクトへの参照を取得します。

[フェッチリクエスト](/ja/docs/Web/API/fetch)が行われると、リクエストのオプションオブジェクト（下記 `{signal}` を参照）の内部のオプションとして `AbortSignal` を渡します。これによりシグナルと読み込みリクエストのコントローラーは関連付き、 {{domxref("AbortController.abort()")}} を呼び出すことで下記の 2 つ目のイベントリスナーに見られるように中断が許可されます。

```js
let controller;
const url = "video.mp4";

const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
    console.log("Download aborted");
  }
});

function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;
  fetch(url, { signal })
    .then((response) => {
      console.log("Download complete", response);
    })
    .catch((err) => {
      console.error(`Download error: ${err.message}`);
    });
}
```

> **メモ:** `abort()` が呼ばれると、`fetch()` のプロミスは `AbortError` と呼ばれる `DOMException` で失敗します。

[GitHub に完全に動作する例](https://github.com/mdn/dom-examples/tree/main/abort-api)があります。また、[ライブでの実行](https://mdn.github.io/dom-examples/abort-api/)も確認してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) (Jake Archibald)（英語）
