---
title: AbortController
slug: Web/API/AbortController
l10n:
  sourceCommit: c0e43030605b6f12bc4d550c0d5b8bf8a633eff3
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`AbortController`** インターフェイスは 1 つ以上のウェブリクエストをいつでも中断することを可能にするコントローラーオブジェクトを表します。

新しい `AbortController` オブジェクトは、 {{domxref("AbortController.AbortController()", "AbortController()")}} コンストラクターを使って新しく生成することができます。非同期操作の通信は、{{domxref("AbortSignal")}} オブジェクトを使って行われます。

## コンストラクター

- {{domxref("AbortController.AbortController()", "AbortController()")}}
  - : 新しい `AbortController` オブジェクトインスタンスを生成します。

## インスタンスプロパティ

- {{domxref("AbortController.signal")}} {{ReadOnlyInline}}
  - : {{domxref("AbortSignal")}} オブジェクトのインスタンスを返します。 このオブジェクトは、非同期操作の通信や中断に使用します。

## インスタンスメソッド

- {{domxref("AbortController.abort()")}}
  - : 非同期操作が完了する前に中断します。これは、[フェッチリクエスト](/ja/docs/Web/API/Window/fetch)や、あらゆるレスポンス本体やストリームを中断することができます。

## 例

> [!NOTE]
> 他の例が {{domxref("AbortSignal")}} のリファレンスにあります。

この後の短いコードで、[フェッチ API](/ja/docs/Web/API/Fetch_API) を使用して動画をダウンロードします。

まず {{domxref("AbortController.AbortController","AbortController()")}} コンストラクターを使ってコントローラーを生成し、 {{domxref("AbortController.signal")}} プロパティを使用して関連する {{domxref("AbortSignal")}} オブジェクトへの参照を取得します。

[フェッチリクエスト](/ja/docs/Web/API/Window/fetch)が行われると、リクエストのオプションオブジェクト（下記 `{signal}` を参照）の内部のオプションとして `AbortSignal` を渡します。これによりシグナルと読み込みリクエストのコントローラーは関連付き、 {{domxref("AbortController.abort()")}} を呼び出すことで下記の 2 つ目のイベントリスナーに見られるように中断が許可されます。

`abort()` が呼び出されると、`fetch()` のプロミスは `AbortError` という名前の `DOMException` で拒否されます。

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

async function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch(url, { signal });
    console.log("Download complete", response);
    // process response further
  } catch (err) {
    console.error(`Download error: ${err.message}`);
  }
}
```

`fetch()` が履行された後で、レスポンス本体を読み込む前にリクエストが中止された場合、レスポンス本体を読み込もうとすると `AbortError` 例外が発生して拒否されます。

```js
async function get() {
  const controller = new AbortController();
  const request = new Request("https://example.org/get", {
    signal: controller.signal,
  });

  const response = await fetch(request);
  controller.abort();
  // 次の行で `AbortError` が発生する
  const text = await response.text();
  console.log(text);
}
```

[GitHub に完全に動作する例](https://github.com/mdn/dom-examples/tree/main/abort-api)があります。また、[ライブでの実行](https://mdn.github.io/dom-examples/abort-api/)も確認してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) (Jake Archibald)（英語）
