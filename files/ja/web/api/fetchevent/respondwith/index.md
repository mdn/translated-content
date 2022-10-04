---
title: FetchEvent.respondWith()
slug: Web/API/FetchEvent/respondWith
---

{{APIRef("Service Workers API")}}

{{domxref("FetchEvent")}} インターフェイスの **`respondWith()`** メソッドは、ブラウザー既定の fetch ハンドリングを抑止して、あなたが {{domxref("Response")}} 用の Promise を提供できるようにします。

たいていの場合、あなたは受け手が理解できるどんなレスポンスでも提供できます。例えば、{{HTMLElement('img')}} がリクエストを開始する場合、レスポンスボディには画像データが必要です。セキュリティの理由から、少しのグローバルルールがあります:

- {{domxref("fetchEvent.request")}} オブジェクトの {{domxref("request.mode", "mode")}} が "`no-cors`" の場合にだけ、"`opaque`" {{domxref("Response.type", "type")}} (不透明型) の {{domxref("Response")}} オブジェクトを返すことができます。これはプライベートなデータの漏えいを防ぎます。
- {{domxref("fetchEvent.request")}} オブジェクトの {{domxref("request.mode", "mode")}} が "`manual`" の場合にだけ "`opaqueredirect`" {{domxref("Response.type", "type")}} (不透明なリダイレクト型) の {{domxref("Response")}} オブジェクトを返すことができます。
- {{domxref("fetchEvent.request")}} オブジェクトの {{domxref("request.mode", "mode")}} が "`same-origin`" の場合、"`cors`" {{domxref("Response.type", "type")}} の {{domxref("Response")}} オブジェクトを返すことはできません。

### リソースの最終 URL を指定する

Firefox 59 以降では、サービスワーカーが {{domxref("FetchEvent.respondWith()")}} に {{domxref("Response")}} を渡すとき、その {{domxref("Response.url")}} の値がインターセプトされたネットワークリクエストの最終 URL として伝搬します。{{domxref("Response.url")}} の値が空文字の場合は、{{domxref("Request.url","FetchEvent.request.url")}} が最終 URL として利用されます。

かつては {{domxref("Request.url","FetchEvent.request.url")}} がすべての場合に最終 URL として使われていました。与えられた {{domxref("Response.url")}} は実際には無視されていました。

つまり、例えば、サービスワーカーがスタイルシートや Worker スクリプトをインターセプトすると、与えられた {{domxref("Response.url")}} が、サブリソースが読み込む相対的な {{cssxref("@import")}} や {{domxref("WorkerGlobalScope.importScripts()","importScripts()")}} の代わりに使われます ({{bug(1222008)}})。

たいていのネットワークリクエストに対して、最終 URL を観測できないためこの変更は影響ありません。しかし、少しだけ関係する場合があります:

- {{domxref("WindowOrWorkerGlobalScope.fetch()", "fetch()")}} がインターセプトされた場合、結果の {{domxref("Response.url")}}で最終 URL を観測できます。
- [Worker](/ja/docs/Web/API/Web_Workers_API) スクリプトがインターセプトされた場合、最終 URL は [`self.location`](/ja/docs/Web/API/WorkerGlobalScope/location) をセットするのに使われ、Worker スクリプトの相対 URL の代わりのベース URL として使われます。
- スタイルシートがインターセプトされた場合、最終 URL は相対的な {{cssxref("@import")}} 読み込みの代わりのベース URL として使われます。

{{domxref("Window","Window")}} と {{domxref("HTMLIFrameElement","iframe")}} のナビゲーションリクエストはこの最終 URL を使わ「ない」ことに注意してください。HTML 仕様のナビゲーションのリダイレクトの処理方法では、{{domxref("Window.location")}} のためにリクエスト URL を使います。これは、オフラインの時に、ユーザーに見える URL を変更することなくサイトが「代替の」ウェブページを提供できるということを意味します。

## 構文

```js
fetchEvent.respondWith(
  // Response に解決される Promise。
​);
```

### パラメーター

{{domxref("Response")}} または `Response` に解決される {{jsxref("Promise")}}。それ以外の場合は、ネットワークエラーが Fetch に返されます。

### 返り値

`undefined`。

### 例外

| 例外                | 注記                                                                                                                                                                                                                       |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NetworkError`      | 上記の "グローバルルール" にヒントがあるように、ネットワークエラーは {{domxref("Request.mode","FetchEvent.request.mode")}} と {{domxref("Response.type")}} の値の組み合わせでトリガーされます。 |
| `InvalidStateError` | イベントがディスパッチされていないか、`respondWith()` が既に呼び出されています。                                                                                                                                           |

## 例

この fetch イベントはキャッシュ API からのレスポンスを返そうとし、ない場合にはネットワークにフォールバックします。

```js
addEventListener('fetch', event => {
  // デフォルトを抑止し、リクエストを自分で処理します。
  event.respondWith(async function() {
    // キャッシュからレスポンスを取得しようとします。
    const cachedResponse = await caches.match(event.request);
    // 見つかったらそれを返します。
    if (cachedResponse) return cachedResponse;
    // キャッシュ内に一致するものが見つからなかった場合は、ネットワークを使用します。
    return fetch(event.request);
  }());
});
```

## 仕様

| 仕様                                                                                                             | 状態                                 | コメント   |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------- |
| {{SpecName('Service Workers', '#fetch-event-respondwith-method', 'respondWith()')}} | {{Spec2('Service Workers')}} | 初期定義。 |

## ブラウザー実装状況

{{Compat("api.FetchEvent.respondWith")}}

## 関連項目

- [Service Worker の使用](/ja/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [Fetch API](/ja/docs/Web/API/Fetch_API)
