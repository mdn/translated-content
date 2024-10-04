---
title: キャッシュ
slug: Web/Progressive_web_apps/Guides/Caching
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{PWASidebar}}

ユーザーがウェブサイトを開いて操作するとき、ウェブサイトが必要とするすべてのリソース（HTML、JavaScript、CSS、画像、フォント、およびアプリが明示的にリクエストされたデータを含む）は、HTTP(S) リクエストによって取得されます。PWA の最も基本的な機能の 1 つは、アプリのリソースの一部を端末に明示的にキャッシュする機能です。これは、ネットワークにリクエストを送信する必要なく、リソースを取得できるということです。

リソースをローカルにキャッシュすることには、主に 2 つの好ましいことがあります： **オフライン操作**と**応答性**です。

- **オフライン操作**: キャッシュにより、端末がネットワークに接続していない間でも、PWA が多かれ少なかれ機能することができます。
- **応答性**: 端末がオンラインであっても、ユーザーインターフェイスがネットワークではなくキャッシュから取得される場合、PWA は通常はるかに応答性が良くなります。

もちろん、主な欠点は**鮮度** です。キャッシュは最新である必要があるリソースにはあまり適していません。また、[POST](/ja/docs/Web/HTTP/Methods/POST) リクエストのようなリクエストの型によっては、キャッシュは決して適切ではありません。

これは、リソースをキャッシュすべきかどうか、そしていつキャッシュすべきかは、問題のリソースに強く依存し、PWA は通常、さまざまなリソースに対して異なる戦略を採用するということを意味しています。このガイドでは、PWA 向けの一般的なキャッシュ戦略を見ていき、どの戦略がどのリソースに対して意味があるのかを見ていきます。

## キャッシュ技術の概要

PWA がキャッシュ戦略を構築できる主な技術は、[フェッチ API](/ja/docs/Web/API/Fetch_API)、[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)、[キャッシュ API](/ja/docs/Web/API/Cache) です。

### フェッチ API

フェッチ API は、ネットワークリソースを取得するためのグローバル関数 {{domxref("WorkerGlobalScope/fetch", "fetch()")}} と、ネットワークリクエストとレスポンスを表すインターフェイス {{domxref("Request")}} と {{domxref("Response")}} を定義します。`fetch()` 関数は `Request` または URL を引数として取り、`Response` を解決する {{jsxref("Promise")}} を返します。

`fetch()` 関数はメインスレッドだけでなくサービスワーカーも利用できます。

### サービスワーカー API

サービスワーカーは PWA の一部で、アプリのメインスレッドとは別の、自分自身で実行するスクリプトです。

サービスワーカーがアクティブになると、アプリがサービスワーカーが制御するネットワークリソースをリクエストするたびに、ブラウザーはサービスワーカーのグローバルスコープで {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} というイベントを呼び出します。このイベントは、メインスレッドからの `fetch()` の明示的な呼び出しだけでなく、ブラウザーがページナビゲーションに従うことで行う、ページやサブリソース（JavaScript、CSS、画像など）を読み込むための暗黙的なネットワークリクエストに対しても発生します。

`fetch` イベントを待ち受けすることで、サービスワーカーはリクエストを介入し、カスタマイズしたレスポンス (`Response`) を返すことができます。具体的には、常にネットワークにアクセスする代わりにローカルにキャッシュされたレスポンスを返したり、端末がオフラインの場合にローカルにキャッシュされたレスポンスを返したりすることができます。

### キャッシュ API

{{domxref("Cache")}} インターフェイスは `Request`/`Response` ペアの永続的なストレージを提供します。これは `Request`/`Response` のペアを追加したり削除したり、指定された `Request` に一致するキャッシュされた `Response` を参照するメソッドを提供します。キャッシュはメインスレッドとサービスワーカーの両方で利用できます。あるスレッドでレスポンスを追加し、別のスレッドでそれを取得することが可能です。

ほとんどの場合、サービスワーカーは `install` または `fetch` イベントハンドラーでキャッシュにリソースを追加します。

## いつリソースをキャッシュするか

PWA はいつでもリソースをキャッシュできますが、実際には、ほとんどの PWA がリソースをキャッシュすることを選ぶ時点がいくつかあります。

- **サービスワーカーの `install` イベントハンドラー （事前キャッシュ）**: サービスワーカーがインストールされると、ブラウザーはサービスワーカーのグローバルスコープで {{domxref("ServiceWorkerGlobalScope.install_event", "install")}} というイベントを呼び出します。この点で、サービスワーカーはリソースを事前キャッシュすることができ、ネットワークからフェッチしてキャッシュに格納することができます。

  > [!NOTE]
  > サービスワーカーのインストール時点は、PWA のインストール時点とは異なります。サービスワーカーの `install` イベントは、サービスワーカーがダウンロードされ、実行されるとすぐに発生します。
  >
  > ユーザーがサイトを PWA としてインストールしなくても、サービスワーカーはインストールされ、有効化されます。

- **サービスワーカーの `fetch` イベントハンドラーで**: サービスワーカーの `fetch` イベントが発行されると、サービスワーカーはリクエストをネットワークに転送し、キャッシュにまだレスポンスが格納されていない場合、またはキャッシュされたレスポンスをより新しいものに更新するために、結果のレスポンスをキャッシュします。

- **ユーザーのリクエストへの応答**: PWA は、端末がオフラインの場合に、後で使用するリソースをダウンロードするようユーザーを明示的に促すことがあります。例えば、音楽プレーヤーは、後で再生するためにトラックをダウンロードするようユーザーを促すかも しれません。この場合、メインアプリのスレッドがリソースを取得し、レスポンスをキャッシュに追加する可能性があります。特にリクエストされたリソースが大きい場合、PWA は[バックグラウンド API](/ja/docs/Web/API/Background_Fetch_API) を使用し、この場合レスポンスはサービスワーカーによって処理され、キャッシュに追加されます。

- **定期的に**： [定期バックグラウンド同期 API](/ja/docs/Web/API/Web_Periodic_Background_Synchronization_API) を使用することができます。サービスワーカーは定期的にリソースを取得してレスポンスをキャッシュし、端末がオフラインの間でも PWA が適度に新鮮なレスポンスを提供できるようにします。

## キャッシュ戦略

キャッシュ戦略とは、いつリソースをキャッシュするか、いつキャッシュされたリソースを提供するか、いつネットワークからリソースを取得するかのアルゴリズムです。この節では、一般的な戦略をいくつかまとめます。

これは網羅的なリストではなく、PWA が取り得る手法の種類を示すためのものです。

キャッシュ戦略はオフライン操作、レスポンス、鮮度のバランスを取ります。例えば、アプリの基本的な UI は相対的に静的である可能性が高い一方で、商品リストを表示する際には新鮮なデータを持つことができることが不可欠かもしれません。このことは、PWA がリソースごとに異なる戦略を採用するのが一般的であり、単一の PWA がここで記述する戦略をすべて使用する可能性があるということを意味しています。

### キャッシュ優先

この戦略では、いくつかのリソースを事前にキャッシュし、それらのリソースに対してのみ「キャッシュ優先」戦略を実装します。つまり、

- 事前キャッシュされたリソースについては、
  - キャッシュからリソースを探して、得られたらリソースを返します。
  - そうでない場合は、ネットワークに移動します。ネットワークリクエストが成功した場合は、次回に備えてリソースをキャッシュします。
- 他のリソースについては、常にネットワークにアクセスします。

事前キャッシュは、PWA が確実に必要とし、このバージョンのアプリでは変更されず、可能な限りすばやく取得する必要があるリソースに対して適切な戦略です。これには例えばアプリの基本ユーザーインターフェイスが含まれます。これが事前にキャッシュされていれば、アプリの UI は起動時にネットワークリクエストを必要とせずにレンダリングできます。

最初に、サービスワーカーは `install` イベントハンドラーで静的リソースを事前キャッシュします。

```js
const cacheName = "MyCache_1";
const precachedResources = ["/", "/app.js", "/style.css"];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});
```

`install` イベントハンドラーでは、キャッシュ操作の結果をイベントの {{domxref("ExtendableEvent.waitUntil", "waitUntil()")}} メソッドに渡します。これは、キャッシュが何らかの理由で失敗した場合、サービスワーカーのインストールが失敗するということです。逆に、インストールが成功した場合、サービスワーカーはリソースがキャッシュに追加されたことを確認することができます。

`fetch` イベントハンドラーは次のようになります。

```js
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  if (precachedResources.includes(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  }
});
```

イベントの {{domxref("FetchEvent.respondWith()", "respondWith()")}} メソッドを呼び出してリソースを返します。指定されたリクエストに対して `respondWith()` を呼び出さなかった場合、そのリクエストはサービスワーカーが介入しなかったかのようにネットワークに送られます。つまり、プリキャッシュされていないリクエストは、そのままネットワークに送られます。

`networkResponse` をキャッシュに追加するときは、レスポンスを複製してコピーをキャッシュに追加し、オリジナルを返さなければなりません。これは `Response` オブジェクトはストリーム可能なので、一度しか読み取れないからです。

なぜキャッシュされたリソースをネットワークにフォールバックするのか不思議に思うかもしれません。もしキャッシュされているのであれば、確実にキャッシュにあるはずでは ないでしょうか？その理由は、ブラウザーやユーザーによってキャッシュがクリアされる可能性があるからです。その可能性は低いですが、ネットワークにフォールバックできない限り、PWA は使えなくなります。[キャッシュされたデータの削除](#キャッシュされたデータの削除)を参照してください。

### キャッシュ更新付きのキャッシュ優先

「キャッシュ優先」の欠点は、一度レスポンスがキャッシュに入ると、 サービスワーカーの新しいバージョンがインストールされるまで更新されないことです。

「キャッシュ更新付きのキャッシュ優先」戦略は、キャッシュがヒットした後でも常にリクエストをネットワークに送り、キャッシュを更新するためにレスポンスを使用することを除けば「キャッシュ優先」戦略と似ています。これは、「キャッシュ優先」の応答性を得ながら、（リクエストが適度に多い場合に）かなり新鮮なレスポンスを取得できるということです。

これは、レスポンスが重要であり、新鮮さが多少重要であるが必須ではない場合に良い選択です。

このバージョンでは、JSON を除くすべてのリソースに対して「キャッシュ更新付きのキャッシュ優先」を実装しています。

```js
function isCacheable(request) {
  const url = new URL(request.url);
  return !url.pathname.endsWith(".json");
}

async function cacheFirstWithRefresh(request) {
  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });

  return (await caches.match(request)) || (await fetchResponsePromise);
}

self.addEventListener("fetch", (event) => {
  if (isCacheable(event.request)) {
    event.respondWith(cacheFirstWithRefresh(event.request));
  }
});
```

非同期で（`then()` ハンドラーの中で）キャッシュを更新しているので、アプリはキャッシュされたレスポンスを使用することができるようになる前にネットワークレスポンスを受信するのを待つ必要はないことに注意してください。

### ネットワーク優先

最後の「ネットワーク優先」は、キャッシュ優先の逆で、ネットワークからリソースを取得しようとします。ネットワークリクエストが成功したら、レスポンスを返してキャッシュを更新します。失敗した場合は、キャッシュを試します。

これは、可能な限り新鮮なレスポンスを取得することが重要だが、キャッシュされたリソースはないよりはましというリクエストに有益です。メッセージングアプリの最近のメッセージのリストがこのカテゴリーに入るかもしれません。

この例では、アプリの "inbox" パスの下にあるすべてのリソースを読み取るリクエストに「ネットワーク優先」を使用しています。

```js
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname.match(/^\/inbox/)) {
    event.respondWith(networkFirst(event.request));
  }
});
```

古くなる可能性のあるレスポンスより、レスポンスがない方が良いリクエストや、「ネットワークのみ」戦略が適切なリクエストもあります。例えば、アプリが利用できる商品のリストを表示させている場合、そのリストが古いとユーザーはイライラするでしょう。

## キャッシュされたデータの削除

キャッシュが持つストレージ空間の大きさには制限があり、制限を超えるとブラウザーはアプリのキャッシュデータを削除することができます。具体的な制限値と動作はブラウザーによって異なります。詳細は[ストレージ制限と削除基準](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)を参照してください。実際には、キャッシュされたデータが消去されることは非常に稀なことです。ユーザーはいつでもアプリのキャッシュをクリアできます。

PWA はサービスワーカーの {{domxref("ServiceWorkerGlobalScope.activate_event", "activate")}} イベントで古いバージョンのキャッシュを一掃する必要があります。このイベントが発行されると、サービスワーカーは前回実行したバージョンのサービスワーカーがないことを確認できるので、古いキャッシュデータはできなくなります。

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [フェッチ API](/ja/docs/Web/API/Fetch_API)
- [ストレージ制限と削除基準](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [Strategies for service worker caching](https://developer.chrome.com/docs/workbox/caching-strategies-overview) (developer.chrome.com, 2021)
- [The Offline Cookbook](https://web.dev/articles/offline-cookbook) (web.dev, 2020)
