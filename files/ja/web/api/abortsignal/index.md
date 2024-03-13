---
title: AbortSignal
slug: Web/API/AbortSignal
l10n:
  sourceCommit: a662e542a529a0f8c86b60d85abe0035093c86d1
---

{{APIRef("DOM")}}

**`AbortSignal`** インターフェイスは DOM リクエスト（フェッチなど）と通信し、必要に応じて {{domxref("AbortController")}} オブジェクトを介して中止することを可能にするシグナルオブジェクトを表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_AbortSignal インターフェイスには、親インターフェイスである {{domxref("EventTarget")}} から継承しているプロパティもあります。_

- {{domxref("AbortSignal.aborted")}} {{ReadOnlyInline}}
  - : 論理値で、シグナルが通信しているリクエスト（または複数のリクエスト）が中止されているか (`true`)、中止されていないか (`false`) を表します。
- {{domxref("AbortSignal.reason")}} {{ReadOnlyInline}}
  - : シグナルが中止されると、中止の理由を提供する JavaScript の値です。

## 静的メソッド

- {{domxref("AbortSignal.abort()")}}
  - : 既に中止と設定された **`AbortSignal`** を返します。
- {{domxref("AbortSignal.timeout()")}}
  - : 指定された時間の後で自動的に中止となる **`AbortSignal`** インターフェイスを返します。

## インスタンスメソッド

_**`AbortSignal`** インターフェイスには、親インターフェイスである {{domxref("EventTarget")}} から継承しているメソッドもあります。_

- {{domxref("AbortSignal.throwIfAborted()")}}
  - : シグナルが中止された場合、シグナルの中止理由 ({{domxref("AbortSignal.reason", "reason")}}) で例外を発生させ、それ以外の場合は何もしません。

## イベント

[`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使うか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを割り当てるかして、このイベントを待ち受けしてください。

- [`abort`](/ja/docs/Web/API/AbortSignal/abort_event)
  - : このシグナルが通信している DOM リクエストが中断されたとき、呼び出されます。
    `onabort` プロパティを介しても利用可能です。

## 例

### 明示的なシグナルを使用したフェッチ操作の中止

次のコードでは、[フェッチ API](/ja/docs/Web/API/Fetch_API) を使用して動画をダウンロードします。

まず {{domxref("AbortController.AbortController","AbortController()")}} コンストラクターを使ってコントローラーを生成し、{{domxref("AbortController.signal")}} プロパティを使用して関連する {{domxref("AbortSignal")}} オブジェクトへの参照を取得します。

[読み込みリクエスト](/ja/docs/Web/API/fetch) が初期化すると、 `AbortSignal` をリクエストのオプションオブジェクト（下記 `{signal}` を参照）の内部のオプションとして渡します。これによりシグナルと読み込みリクエストのコントローラーが関連付き、{{domxref("AbortController.abort()")}} を呼び出すことで下記の 2 つ目のイベントリスナーに見られるように中断が許可されます。
下記では、フェッチ処理が 2 つ目のイベントリスナーで中止されていることがわかります。このイベントリスナーは、中止ボタン (`abortBtn`) がクリックされたときに起動します。

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

> **メモ:** `abort()` が呼び出されると、`fetch()` のプロミスは `AbortError` で失敗します。

You can find a [full working example on GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); you can also see it [running live](https://mdn.github.io/dom-examples/abort-api/).

### タイムアウトによるフェッチ操作の中止

もしタイムアウトで処理を中断する必要がある場合は、静的な {{domxref("AbortSignal.timeout()") }} メソッドを使用することができます。
これは、指定のミリ秒後に自動的にタイムアウトする `AbortSignal` を返すものです。

下記のコードでは、ファイルのダウンロードに成功するか、 5 秒後にタイムアウトエラーが発生した場合にどのように処理するかを示しています。
タイムアウトが発生した場合、`fetch()` のプロミスは "`TimeoutError`" `DOMException` で拒否されることに注意してください。
これにより、タイムアウト(おそらくユーザーへの通知が必要)とユーザーによる中止をコードで区別することができます。

```js
const url = "video.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    console.error("Timeout: It took more than 5 seconds to get the result!");
  } else if (err.name === "AbortError") {
    console.error(
      "Fetch aborted by user action (browser stop button, closing tab, etc.",
    );
  } else if (err.name === "TypeError") {
    console.error("AbortSignal.timeout() method is not supported");
  } else {
    // A network error, or some other problem.
    console.error(`Error: type: ${err.name}, message: ${err.message}`);
  }
}
```

### タイムアウトまたは明示的な中止を伴うフェッチの中止

`fetch()` は複数のシグナルを組み合わせられるようには設計されていないので、 {{domxref("AbortController.abort()")}} の呼び出しまたは `AbortSignal` のタイムアウトのどちらかでダウンロードを中止することは「直接」はできません（ただし、前の例のように、停止ボタンなどのブラウザー内蔵の仕組みからタイムアウトシグナルを中止することができます）。

複数のシグナルに対してトリガーを発生させるには、デイジーチェーン接続する必要があります。
次のコードは、別個のタイマーのハンドラーで {{domxref("AbortController.abort()")}} を呼び出す方法を示しています。

```js
try {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);
  const res = await fetch(url, { signal: controller.signal });
  const body = await res.json();
} catch (e) {
  if (e.name === "AbortError") {
    // Notify the user of abort.
    // Note this will never be a timeout error!
  } else {
    // A network error, or some other problem.
    console.log(`Type: ${e.name}, Message: ${e.message}`);
  }
} finally {
  clearTimeout(timeoutId);
}
```

> **メモ:** {{domxref("AbortSignal.timeout()")}} を使用したときとは異なり、最終的な中止がタイムアウトによって発生したのかどうかを判断する方法はありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) (Jake Archibald) （英語）
