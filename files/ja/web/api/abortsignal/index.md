---
title: AbortSignal
slug: Web/API/AbortSignal
l10n:
  sourceCommit: c0e43030605b6f12bc4d550c0d5b8bf8a633eff3
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

**`AbortSignal`** インターフェイスは非同期操作（フェッチリクエストなど）とやりとりし、必要に応じて {{domxref("AbortController")}} オブジェクトを介して中止することを可能にするシグナルオブジェクトを表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{domxref("EventTarget")}} から継承しているプロパティもあります。_

- {{domxref("AbortSignal.aborted")}} {{ReadOnlyInline}}
  - : 論理値で、このシグナルが通信しているリクエスト（または複数のリクエスト）が中止されているか (`true`)、中止されていないか (`false`) を表します。
- {{domxref("AbortSignal.reason")}} {{ReadOnlyInline}}
  - : シグナルが中止されたとき、中止の理由を提供する JavaScript の値です。

## 静的メソッド

_親インターフェイスである {{domxref("EventTarget")}} から継承しているメソッドもあります。_

- {{domxref("AbortSignal/abort_static", "AbortSignal.abort()")}}
  - : 既に中止と設定された `AbortSignal` を返します。
- {{domxref("AbortSignal/any_static", "AbortSignal.any()")}}
  - : 指定された中止シグナルのいずれかが中止された時中止となる `AbortSignal` を返します。
- {{domxref("AbortSignal/timeout_static", "AbortSignal.timeout()")}}
  - : 指定された時間の後で自動的に中止となる `AbortSignal` インターフェイスを返します。

## インスタンスメソッド

_親インターフェイスである {{domxref("EventTarget")}} から継承しているメソッドもあります。_

- {{domxref("AbortSignal.throwIfAborted()")}}
  - : シグナルが中止された場合、シグナルの中止理由 ({{domxref("AbortSignal.reason", "reason")}}) で例外を発生させ、それ以外の場合は何もしません。

## イベント

_親インターフェイスである {{DOMxRef("EventTarget")}} から継承しているイベントもあります。_

{{domxref("EventTarget.addEventListener", "addEventListener()")}} を使うか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを割り当てるかして、このイベントを待ち受けしてください。

- {{domxref("AbortSignal/abort_event", "abort")}}
  - : このシグナルが通信している DOM リクエストが中断されたとき、呼び出されます。
    `onabort` プロパティを介しても利用可能です。

## 例

### 明示的なシグナルを使用したフェッチ操作の中止

次のコードでは、[フェッチ API](/ja/docs/Web/API/Fetch_API) を使用して動画をダウンロードします。

まず {{domxref("AbortController.AbortController","AbortController()")}} コンストラクターを使ってコントローラーを生成し、{{domxref("AbortController.signal")}} プロパティを使用して関連する {{domxref("AbortSignal")}} オブジェクトへの参照を取得します。

[フェッチリクエスト](/ja/docs/Web/API/Window/fetch) が初期化すると、 `AbortSignal` をリクエストのオプションオブジェクト（下記 `{signal}` を参照）の内部のオプションとして渡します。これによりシグナルと読み込みリクエストのコントローラーが関連付き、{{domxref("AbortController.abort()")}} を呼び出すことで下記の 2 つ目のイベントリスナーに見られるように中断が許可されます。
下記では、フェッチ処理が 2 つ目のイベントリスナーで中止されていることがわかります。このイベントリスナーは、中止ボタン (`abortBtn`) がクリックされたときに起動します。

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
    console.log("ダウンロードを中止しました");
  }
});

async function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch(url, { signal });
    console.log("ダウンロードが完了しました", response);
    // さらにレスポンスを処理
  } catch (err) {
    console.error(`ダウンロードエラー: ${err.message}`);
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

[GitHub に完全に動作する例](https://github.com/mdn/dom-examples/tree/main/abort-api)があります。[実行可能な例](https://mdn.github.io/dom-examples/abort-api/)を見ることもできます。

### タイムアウトによるフェッチ操作の中止

もしタイムアウトで処理を中断する必要がある場合は、静的な {{domxref("AbortSignal/timeout_static", "AbortSignal.timeout()")}} メソッドを使用することができます。
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

複数のシグナルから中止したい場合は、{{domxref("AbortSignal/any_static", "AbortSignal.any()")}}を使用して単一のシグナルに結合することができます。次の例では、 {{domxref("Window/fetch", "fetch")}} を使用してこの例を示しています。

```js
try {
  const controller = new AbortController();
  const timeoutSignal = AbortSignal.timeout(5000);
  const res = await fetch(url, {
    // どちらかのシグナルが中止されると、フェッチは中止される
    signal: AbortSignal.any([controller.signal, timeoutSignal]),
  });
  const body = await res.json();
} catch (e) {
  if (e.name === "AbortError") {
    // ユーザーに中止を通知
  } else if (e.name === "TimeoutError") {
    // ユーザーにタイムアウトを通知
  } else {
    // ネットワークエラー、またはその他の問題
    console.log(`Type: ${e.name}, Message: ${e.message}`);
  }
}
```

> **メモ:** {{domxref("AbortSignal/timeout_static", "AbortSignal.timeout()")}} を使用したときとは異なり、最終的な中止がタイムアウトによって発生したのかどうかを判断する方法はありません。

### 中止可能な API の実装

中止対応を必要とする API は `AbortSignal` オブジェクトを受け入れることができ、必要なときに中止シグナル処理を発生させるためにその状態を使用することができます。

{{jsxref("Promise")}} ベースの API は、`AbortSignal` の中止 {{domxref("AbortSignal.reason", "reason")}} で未確定のプロミスを拒否することで、中止シグナルに応答する必要があります。
例えば、次の `myCoolPromiseAPI` はシグナルを受け取ってプロミスを返します。
シグナルが既に中止されている場合、または中止イベントが検出された場合、プロミスは直ちに拒否されます。
そうでない場合は完全に完了し、プロミスを解決します。

```js
function myCoolPromiseAPI(/* …, */ { signal }) {
  return new Promise((resolve, reject) => {
    // シグナルがすでに中止されている場合は、プロミスを拒否するために直ちに例外を発生
    if (signal.aborted) {
      reject(signal.reason);
    }

    // API の主目的を実行
    // 終了したら resolve(result) を呼び出す。

    // 'abort' シグナルを監視
    signal.addEventListener("abort", () => {
      // 主な処理を停止
      // 中止される理由でプロミスを拒否する
      reject(signal.reason);
    });
  });
}
```

このAPIは、次のように使用します。
処理を中止するために {{domxref("AbortController.abort()")}} が呼び出されていることに注意しましょう。

```js
const controller = new AbortController();
const signal = controller.signal;

startSpinner();

myCoolPromiseAPI({ /* …, */ signal })
  .then((result) => {})
  .catch((err) => {
    if (err.name === "AbortError") return;
    showUserErrorMessage();
  })
  .then(() => stopSpinner());

controller.abort();
```

プロミスを返さない API も同じような反応をするかもしれません。
場合によっては、そのシグナルを吸収する意味があるかもしれません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [フェッチ API](/ja/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) (Jake Archibald) （英語）
