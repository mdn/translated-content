---
title: FetchEvent.respondWith()
slug: Web/API/FetchEvent/respondWith
l10n:
  sourceCommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{APIRef("Service Workers API")}}

**`respondWith()`** は {{domxref("FetchEvent")}} インターフェイスのメソッドで、ブラウザー既定の fetch 処理を抑止して、自分自身で {{domxref("Response")}} 用のプロミスを提供できるようにします。

たいていの場合、受信者が理解できるどんなレスポンスでも提供できます。例えば、{{HTMLElement('img')}} がリクエストを開始した場合、レスポンス本体には画像データが必要です。セキュリティの理由から、グローバルルールが少しあります。

- {{domxref("Response.type", "type")}} が "`opaque`" （不透明）の {{domxref("Response")}} オブジェクトを返すことができるのは、 {{domxref("fetchEvent.request")}} オブジェクトの {{domxref("request.mode", "mode")}} が "`no-cors`" の場合だけです。これはプライベートなデータの漏洩を防ぎます。
- {{domxref("Response.type", "type")}} が "`opaqueredirect`" （不透明なリダイレクト）の {{domxref("Response")}} オブジェクトを返すことができるのは、{{domxref("fetchEvent.request")}} オブジェクトの {{domxref("request.mode", "mode")}} が "`manual`" の場合だけです。
- {{domxref("fetchEvent.request")}} オブジェクトの {{domxref("request.mode", "mode")}} が "`same-origin`" の場合、{{domxref("Response.type", "type")}} が "`cors`" の {{domxref("Response")}} オブジェクトを返すことはできません。

### リソースの最終 URL を指定する

Firefox 59 以降、サービスワーカーが {{domxref("FetchEvent.respondWith()")}} に {{domxref("Response")}} を提供すると、{{domxref("Response.url")}} 値は最終的に解決された URL として、ネットワークリクエストに介入する際に伝搬されるようになりました。{{domxref("Response.url")}} 値が空文字列の場合は、{{domxref("Request.url","FetchEvent.request.url")}} が最終的な URL として使用されます。

かつては {{domxref("Request.url","FetchEvent.request.url")}} がすべての場合に最終 URL として使われていました。与えられた {{domxref("Response.url")}} は実際には無視されていました。

つまり、例えば、サービスワーカーがスタイルシートやワーカースクリプトに介入すると、与えられた {{domxref("Response.url")}} が、サブリソースが読み込む相対的な {{cssxref("@import")}} や {{domxref("WorkerGlobalScope.importScripts()","importScripts()")}} の代わりに使われます ([Firefox バグ 1222008](https://bugzil.la/1222008))。

たいていのネットワークリクエストに対して、最終 URL を観測できないためこの変更は影響ありません。しかし、少しだけ関係する場合があります。

- {{domxref("fetch()")}} が介入された場合、結果の {{domxref("Response.url")}} で最終 URL を観測できます。
- [ワーカー](/ja/docs/Web/API/Web_Workers_API)スクリプトが介入された場合、最終 URL は [`self.location`](/ja/docs/Web/API/WorkerGlobalScope/location) をセットするのに使われ、ワーカースクリプトの相対 URL の代わりのベース URL として使われます。
- スタイルシートが介入された場合、最終 URL は相対的な {{cssxref("@import")}} 読み込みの代わりのベース URL として使われます。

{{domxref("Window","Window")}} と {{domxref("HTMLIFrameElement","iframe")}} のナビゲーションリクエストはこの最終 URL を使わ「ない」ことに注意してください。HTML 仕様のナビゲーションのリダイレクトの処理方法では、{{domxref("Window.location")}} のためにリクエスト URL を使います。これは、オフラインの時に、ユーザーに見える URL を変更することなくサイトが「代替の」ウェブページを提供できるということを意味します。

## 構文

```js-nolint
respondWith(response)
```

### 引数

- `response`
  - : {{domxref("Response")}} または `Response` に解決される {{jsxref("Promise")}}。それ以外の場合は、ネットワークエラーがフェッチ元に返されます。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `NetworkError` {{domxref("DOMException")}}
  - : 上記の「グローバルルール」にヒントがあるように、ネットワークエラーは {{domxref("Request.mode","FetchEvent.request.mode")}} と {{domxref("Response.type")}} の値の組み合わせで起動されます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : イベントが配信されていないか、`respondWith()` が既に呼び出されています。

## 例

この fetch イベントはキャッシュ API からのレスポンスを返そうとし、ない場合にはネットワークにフォールバックします。

```js
addEventListener("fetch", (event) => {
  // 既定の動作を抑止し、リクエストを自分で処理します。
  event.respondWith(
    (async () => {
      // キャッシュからレスポンスを取得しようとします。
      const cachedResponse = await caches.match(event.request);
      // 見つかったらそれを返します。
      if (cachedResponse) return cachedResponse;
      // キャッシュ内に一致するものが見つからなかった場合は、ネットワークを使用します。
      return fetch(event.request);
    })(),
  );
});
```

> **メモ:** {{domxref("CacheStorage.match()", "caches.match()")}} は便利なメソッドです。同等の機能は、{{domxref("cache.match()")}} をそれぞれのキャッシュに対して（{{domxref("CacheStorage.keys()", "caches.keys()")}} が返す順に）{{domxref("Response")}} が返ってくるまで呼び出すことです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [フェッチ API](/ja/docs/Web/API/Fetch_API)
