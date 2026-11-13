---
title: サービスワーカーで PWA をオフライン動作させる
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

js13kPWA の構造と、基本シェルが起動し実行させる様子を見てきたので、サービスワーカーを使用したオフライン機能の実装方法を見てみましょう。 この記事では、 [js13kPWA の例](https://mdn.github.io/pwa-examples/js13kpwa/) ([ソースコードはこちら](https://github.com/mdn/pwa-examples/tree/master/js13kpwa)) で使用されている実現方法を見てみましょう。 どのようにオフライン機能を追加するのかを学習します。

## サービスワーカーの説明

サービスワーカーは、ブラウザーとネットワーク間の仮想プロキシーです。 これらはついにフロントエンド開発者が長年にわたって苦労してきた問題を修正します — 最も注目に値するのは、ウェブサイトの資産を適切にキャッシュし、ユーザーのデバイスがオフラインのときにそれらを利用できるようにする方法です。

これらは、ページのメインの JavaScript コードとは別のスレッドで実行され、DOM 構造にアクセスすることはできません。 これは、従来のウェブプログラミングとは異なるアプローチを取り入れています — API はノンブロッキングで、異なるコンテキスト間で通信を送受信できます。サービスワーカーに取り組むべき何かを与え、プロミス（[Promise](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)）ベースのアプローチを使用して準備ができているときはいつでも結果を受け取ることができます。

サービスワーカーは、オフライン機能の提供だけでなく、通知の処理や重い計算の実行など、複数の機能を提供することができます。サービスワーカーは、ネットワークリクエストを制御し、修正し、キャッシュから取得した独自のレスポンスを提供し、またはレスポンスを完全に合成することができるため、非常に強力です。

サービスワーカーについて詳しく知りたい場合は、[オフライン操作とバックグラウンド処理](/ja/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)を参照してください。

## js13kPWA アプリのサービスワーカー

js13kPWA アプリがサービスワーカーを使用してオフライン機能を提供している様子を見てみましょう。

### サービスワーカーの登録

app.js ファイルで、新しいサービスワーカーを登録するコードを見ることから始めます。

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./pwa-examples/js13kpwa/sw.js");
}
```

[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) をブラウザーがサポートしている場合は、{{domxref("ServiceWorkerContainer.register()")}} メソッドを使用してサイトに対して登録します。 その内容は `sw.js` ファイルにあり、登録が成功した後に実行できます。 これが app.js ファイルの中にある唯一のサービスワーカーのコードで、それ以外のサービスワーカー固有のものはすべて `sw.js` ファイル自体にあります。

### サービスワーカーのライフサイクル

登録が完了すると、`sw.js` ファイルが自動的にダウンロードされてからインストールされ、最後にアクティブになります。

#### インストール

API を使用すると、関心のある重要なイベントのイベントリスナーを追加できます — 最初のものは `install` イベントです。

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});
```

`install` リスナーで、キャッシュを初期化し、オフラインで使用するためにファイルをキャッシュに追加することができます。 js13kPWA アプリはまさにそれを行います。

まず、キャッシュ名を格納するための変数が作成され、アプリシェル（app shell）のファイルが 1 つの配列にリストされます。

```js
const cacheName = "js13kPWA-v1";
const appShellFiles = [
  "/pwa-examples/js13kpwa/",
  "/pwa-examples/js13kpwa/index.html",
  "/pwa-examples/js13kpwa/app.js",
  "/pwa-examples/js13kpwa/style.css",
  "/pwa-examples/js13kpwa/fonts/graduate.eot",
  "/pwa-examples/js13kpwa/fonts/graduate.ttf",
  "/pwa-examples/js13kpwa/fonts/graduate.woff",
  "/pwa-examples/js13kpwa/favicon.ico",
  "/pwa-examples/js13kpwa/img/js13kgames.png",
  "/pwa-examples/js13kpwa/img/bg.png",
  "/pwa-examples/js13kpwa/icons/icon-32.png",
  "/pwa-examples/js13kpwa/icons/icon-64.png",
  "/pwa-examples/js13kpwa/icons/icon-96.png",
  "/pwa-examples/js13kpwa/icons/icon-128.png",
  "/pwa-examples/js13kpwa/icons/icon-168.png",
  "/pwa-examples/js13kpwa/icons/icon-192.png",
  "/pwa-examples/js13kpwa/icons/icon-256.png",
  "/pwa-examples/js13kpwa/icons/icon-512.png",
];
```

次に、`data/games.js` ファイルからのコンテンツとともにロードされる画像へのリンクが 2 番目の配列に生成されます。 その後、両方の配列は {{jsxref("Array.prototype.concat()")}} 関数を使ってマージされます。

```js
const gamesImages = [];
for (let i = 0; i < games.length; i++) {
  gamesImages.push(`data/img/${games[i].slug}.jpg`);
}
const contentToCache = appShellFiles.concat(gamesImages);
```

それから、`install` イベント自体を管理できます。

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[Service Worker] Caching all: app shell and content");
      await cache.addAll(contentToCache);
    })(),
  );
});
```

ここで説明が必要なことが 2 つあります — {{domxref("ExtendableEvent.waitUntil")}} が行うことと、{{domxref("Cache","caches")}} オブジェクトとは何か。

サービスワーカーは、`waitUntil` 内のコードが実行されるまでインストールされません。これはプロミス (promise) を返します。ンストールにはしばらく時間がかかるかもしれないので完了するまで待つこのアプローチが必要です。

`caches` は特定のサービスワーカーの範囲内でデータの保存を可能にする特別な {{domxref("CacheStorage")}} オブジェクトです。[ウェブストレージ](/ja/docs/Web/API/Web_Storage_API)は同期的であるため、ウェブストレージへの保存は機能しません。 サービスワーカーでは、代わりにキャッシュ API を使用します。

ここでは、指定した名前でキャッシュを開き、アプリが使用するすべてのファイルをキャッシュに追加するので、次回の読み込み時に利用可能になります。リソースはリクエスト URL がワーカーの{{domxref("WorkerGlobalScope.location", "位置", "", 1)}}からの相対 URL で識別されます。

game.js がキャッシュされていないことに気づくかもしれません。これは、ゲームを表示する際に使用するデータを含むファイルです。実際には、このデータは API エンドポイントまたはデータベースから取得される可能性が高く、データをキャッシュするということは、ネットワーク接続がある場合に定期的にデータを更新するという意味になります。ここではこれ以上説明しませんが、このトピックについては、[定期バックグラウンド同期 API](/ja/docs/Web/API/Web_Periodic_Background_Synchronization_API) が良い参考になります。

#### アクティベーション

`activate` イベントもあり、これは `install` と同じ方法で使用されます。 このイベントは通常、不要になったファイルを削除し、一般的にアプリの後にクリーンアップするために使用されます。 このアプリでそれをする必要はないので、スキップします。

### フェッチへの応答

また、自由に使える `fetch` イベントもあり、これは HTTP リクエストがアプリから発生するたびに呼び出されます。 これはリクエストを傍受してカスタムレスポンスで応答できるようにするのでとても便利です。 これは簡単な使用例です。

```js
self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
```

レスポンスは何でも好きなものにすることができます。リクエストされたファイル、そのキャッシュされたコピー、または特定のことを実行する JavaScript コードの一部 — 可能性は無限大です。

このサンプルアプリでは、リソースが実際にキャッシュ内にある限り、ネットワークではなくキャッシュからコンテンツを提供します。 アプリがオンラインかオフラインかに関係なく、これを行います。 ファイルがキャッシュにない場合、アプリはそれを提供する前にまずそこに追加します。

```js
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })(),
  );
});
```

ここでは、キャッシュ内のリソースを見つけ、存在する場合はレスポンスを返す関数を使用して、`fetch` イベントに応答します。 存在しない場合は、別のフェッチリクエストを使用してネットワークからそれを取得し、次にレスポンスがキャッシュに格納されるので、次にリクエストされたときにレスポンスが使用可能になります。

{{domxref("FetchEvent.respondWith")}} メソッドが制御を引き継ぎます。これは、アプリとネットワークの間のプロキシーサーバーとして機能する部分です。これは、それぞれのリクエストに対して、好きなレスポンスを返すことができます。サービスワーカーが用意したもの、キャッシュから取得したもの、必要に応じて変更したものなどです。

以上です！ このアプリはインストール時にリソースをキャッシュし、キャッシュから取得したものを提供します。そのため、ユーザーがオフラインでも動作します。また、新しいコンテンツが追加されるたびに、そのコンテンツもキャッシュされます。

## 更新

まだカバーしておくべき 1 つのポイントがあります — 新しい資産を含むアプリの新しいバージョンが利用可能になったときにどのようにサービスワーカーをアップグレードするのでしょうか？ これには、キャッシュ名のバージョン番号が重要です。

```js
const cacheName = "js13kPWA-v1";
```

これが v2 に更新されたとき、新しいキャッシュに（新しいファイルを含む）すべてのファイルを追加することができます。

```js
contentToCache.push("/pwa-examples/js13kpwa/icons/icon-32.png");

// ...

self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(contentToCache);
    })(),
  );
});
```

新しいサービスワーカーがバックグラウンドでインストールされ、前のバージョン (v1) はそれを使用するページがなくなるまで正しく動作します。新しいサービスワーカーがアクティブになり、古いページからページの管理を引き継ぎます。

## キャッシュのクリア

スキップした `activate` イベントを覚えていますか？ これは、不要になった古いキャッシュを消去するために使用できます。

```js
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key === cacheName) {
            return;
          }
          return caches.delete(key);
        }),
      );
    }),
  );
});
```

これにより、必要なファイルだけがキャッシュに保存されるので、ゴミが残ることはありません — [ブラウザーで利用可能なキャッシュ容量は限られている](/ja/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)ので、後で自分でクリーンアップすることをお勧めします。

## その他の用途

サービスワーカーが提供する機能は、キャッシュからファイルを提供することだけではありません。 大量の計算が必要な場合は、メインスレッドからそれらをオフロードしてワーカーで実行し、使用可能になったらすぐに結果を受け取ることができます。 パフォーマンス面では、今は必要ではないが近い将来にある可能性があるリソースを事前読み込みすることができるため、実際にそれらのリソースが必要な場合はアプリの速度が速くなります。

## まとめ

この記事では、PWA をサービスワーカーとオフラインで連携させる方法について簡単に説明しました。[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)の背景にある概念と、それをより詳細に使用する方法についてもっと知りたい場合は、さらに詳しい資料をチェックしてください。

[プッシュ通知](/ja/docs/Web/API/Push_API)を処理するときにもサービスワーカーを使用します。これについては後の記事で説明します。

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
