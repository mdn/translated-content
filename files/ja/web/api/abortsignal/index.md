---
title: AbortSignal
slug: Web/API/AbortSignal
---

{{APIRef("DOM")}}{{SeeCompatTable}}

**`AbortSignal`** インターフェイスは DOM 要求 (Fetch など) と通信し、必要に応じて {{domxref("AbortController")}} オブジェクトを介して中断することを可能にするシグナルオブジェクトを表します。

## プロパティ

_AbortSignal インターフェイスはまた、親のインターフェースである、 {{domxref("EventTarget")}} からプロパティを継承しています。_

- {{domxref("AbortSignal.aborted")}} {{readonlyInline}}
  - : シグナルが通信しているリクエスト(複数回も)が中断しているかを示す {{domxref("Boolean")}} で、(`true`) が中断している 、(`false`) は中断していないを表します。

## イベント

[`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使うかこのインターフェースの `oneventname` プロパティにイベントリスナーを割り当てることでこのイベントへのアクセスに待機します。

- [`abort`](/ja/docs/Web/API/AbortSignal/abort_event)
  - : シグナルが通信している DOM リクエスト (複数回も) の中断を呼び出す。
    また [`onabort`](/ja/docs/Web/API/AbortSignal/onabort) プロパティを介して利用可能です。

## メソッド

_AbortSignal インターフェースは親インタフェースである、{{domxref("EventTarget")}} からメソッドを継承します。_

## 例

この後の短いコードで、[Fetch API](/ja/docs/Web/API/Fetch_API) を使用してビデオをダウンロードします。

まず {{domxref("AbortController.AbortController","AbortController()")}} コンストラクターを使ってコントローラーを生成し、{{domxref("AbortController.signal")}} プロパティを使用して関連する {{domxref("AbortSignal")}} オブジェクトへの参照を取得します。

[読み込みリクエスト](/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch) が初期化すると、リクエストのオプションオブジェクト (下記 `{signal}` を参照) の内部のオプションとして `AbortSignal` を渡します。これによりシグナルと読み込みリクエストのコントローラーは関連付き、{{domxref("AbortController.abort()")}} を呼び出すことで下記の 2 つ目のイベントリスナーに見られるように中断が許可されます。

```js
var controller = new AbortController();
var signal = controller.signal;

var downloadBtn = document.querySelector('.download');
var abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', function() {
  controller.abort();
  console.log('Download aborted');
});

function fetchVideo() {
  ...
  fetch(url, {signal}).then(function(response) {
    ...
  }).catch(function(e) {
    reports.textContent = 'Download error: ' + e.message;
  })
}
```

> **メモ:** `abort()` が呼ばれると、`fetch()` promise は `AbortError` で失敗します。

> **警告:** 現在のバージョンの Firefox は、`DOMException` で失敗します。

GitHub で完全に動作する例を見ることができます — [abort-api](https://github.com/mdn/dom-examples/tree/master/abort-api) (または [実際に動作する様子](https://mdn.github.io/dom-examples/abort-api/) を参照) を参照してください。

## 仕様

| 仕様書                                                                                   | ステータス                       | コメント |
| ---------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('DOM WHATWG', '#interface-AbortSignal', 'AbortSignal')}} | {{Spec2('DOM WHATWG')}} | 初回定義 |

## ブラウザの実装状況

{{Compat("api.AbortSignal")}}

## 関連情報

- [Fetch API](/ja/docs/Web/API/Fetch_API)
- Jake Archibald による [Abortable Fetch](https://developers.google.com/web/updates/2017/09/abortable-fetch)
