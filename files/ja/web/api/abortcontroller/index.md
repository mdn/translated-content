---
title: AbortController
slug: Web/API/AbortController
tags:
  - API
  - AbortController
  - 実験的
  - インターフェース
  - リファレンス
translation_of: Web/API/AbortController
browser-compat: api.AbortController
---
{{APIRef("DOM")}}

**`AbortController`** インターフェースは一つ以上のリクエストをいつでも中断することを可能にするコントローラーオブジェクトを表します。

{{domxref("AbortController.AbortController()")}} コンストラクターを使うことで `AbortController` オブジェクトを新しく作ることができます。 DOM リクエストとの送信は、 AbortSignal オブジェクトを使って行われます。

## コンストラクター

- {{domxref("AbortController()")}}
  - : 新しい `AbortController` オブジェクトインスタンスを生成します。

## プロパティ

- {{domxref("AbortController.signal")}} {{readonlyInline}}
  - : {{domxref("AbortSignal")}} オブジェクトのインスタンスを返します。 このオブジェクトは、 DOM リクエストの送信や中断に使用します。

## メソッド

- {{domxref("AbortController.abort()")}}
  - : DOM リクエストが完了する前に中断します。 これは、 [fetch リクエスト](/ja/docs/Web/API/fetch) 、あらゆるレスポンスボディの消費、およびストリームを中断できます。

## 例

この後の短いコードで、[Fetch API](/ja/docs/Web/API/Fetch_API) を使用してビデオをダウンロードします。

まず {{domxref("AbortController.AbortController","AbortController()")}} コンストラクターを使ってコントローラーを生成し、 {{domxref("AbortController.signal")}} プロパティを使用して関連する {{domxref("AbortSignal")}} オブジェクトへの参照を取得します。

[読み込みリクエスト](/ja/docs/Web/API/fetch) が初期化すると、リクエストのオプションオブジェクト (下記 `{signal}` を参照) の内部のオプションとして `AbortSignal` を渡します。これによりシグナルと読み込みリクエストのコントローラーは関連付き、 {{domxref("AbortController.abort()")}} を呼び出すことで下記の 2 つ目のイベントリスナーに見られるように中断が許可されます。

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

> **Note:** `abort()` が呼ばれると、`fetch()` promise は `AbortError` と呼ばれる `DOMException` で失敗します。

GitHub で完全に動作する例を見ることができます — [abort-api](https://github.com/mdn/dom-examples/tree/master/abort-api) (または、[実際に動作する様子](https://mdn.github.io/dom-examples/abort-api/)) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Fetch API](/ja/docs/Web/API/Fetch_API)
- Jake Archibald による [Abortable Fetch](https://developers.google.com/web/updates/2017/09/abortable-fetch)
