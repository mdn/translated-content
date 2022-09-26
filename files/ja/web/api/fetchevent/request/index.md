---
title: FetchEvent.request
slug: Web/API/FetchEvent/request
---

{{APIRef("Service Workers API")}}

{{domxref("FetchEvent")}} インターフェイスの **`request`** 読み取り専用プロパティは、イベントハンドラーをトリガーした {{domxref("Request")}} を返します。

このプロパティは null 不可です（Firefox の場合、バージョン 46 以降）。 他の方法でリクエストが提供されない場合、コンストラクターの `init` オブジェクトに request を含める必要があります（{{domxref("FetchEvent.FetchEvent()")}} を参照）。

## 構文

```
var recentRequest = fetchEvent.request;
```

### 値

{{domxref("Request")}} オブジェクト。

## 例

このコードスニペットは、[サービスワーカーのフェッチの例](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js)からのものです（[フェッチの例をライブで実行](https://googlechrome.github.io/samples/service-worker/prefetch/)）。 {{domxref("ServiceWorkerGlobalScope.onfetch")}} イベントハンドラーは、`fetch` イベントをリッスンします。 起動したら、{{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} に、制御されたページに戻す Promise を渡します。 この Promise は、{{domxref("Cache")}} オブジェクトで最初に一致した URL リクエストに解決されます。 一致が見つからない場合、コードはネットワークからレスポンスをフェッチします。

このコードは、{{domxref("ServiceWorkerGlobalScope.fetch")}} 操作からスローされた例外も処理します。 HTTP エラーレスポンス（404 など）は例外をトリガーしないことに注意してください。 適切なエラーコードが設定された通常のレスポンスオブジェクトを返します。

```js
self.addEventListener('fetch', function(event) {
  console.log('フェッチイベントの処理:', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('キャッシュで見つかったレスポンス:', response);

        return response;
      }
      console.log('キャッシュにレスポンスが見つかりません。 ネットワークからフェッチします...');

      return fetch(event.request).then(function(response) {
        console.log('ネットワークからのレスポンス:', response);

        return response;
      }).catch(function(error) {
        console.error('フェッチ失敗:', error);

        throw error;
      });
    })
  );
});
```

## 仕様

| 仕様                                                                                     | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#fetch-event-request', 'request')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.FetchEvent.request")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [Web worker の使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
