---
title: サービスワーカーで PWA をオフラインで動作させる
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
---

{{PreviousMenuNext("Web/Progressive_web_apps/App_structure", "Web/Progressive_web_apps/Installable_PWAs", "Web/Progressive_web_apps")}}

js13kPWA の構造と、基本シェルが起動し実行させる様子を見てきたので、サービスワーカーを使用したオフライン機能の実装方法を見てみましょう。 この記事では、 [js13kPWA の例](https://mdn.github.io/pwa-examples/js13kpwa/) ([ソースコードはこちら](https://github.com/mdn/pwa-examples/tree/master/js13kpwa)) で使用されている実現方法を見てみましょう。 どのようにオフライン機能を追加するのかを学習します。

## サービスワーカーの説明

サービスワーカー（Service Workers）は、ブラウザーとネットワーク間の仮想プロキシです。 これらはついにフロントエンド開発者が長年にわたって苦労してきた問題を修正します — 最も注目に値するのは、ウェブサイトのアセットを適切にキャッシュし、ユーザーのデバイスがオフラインのときにそれらを利用できるようにする方法です。

これらは、ページのメインの JavaScript コードとは別のスレッドで実行され、DOM 構造にアクセスすることはできません。 これは、従来のウェブプログラミングとは異なるアプローチを取り入れています — API はノンブロッキングで、異なるコンテキスト間で通信を送受信できます。 あなたはサービスワーカーに取り組むべき何かを与え、約束（[Promise](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)）ベースのアプローチを使用して準備ができているときはいつでも結果を受け取ることができます。

通知の処理、別のスレッドでの大量の計算など、オフライン機能を提供するだけではありません。 サービスワーカーは、ネットワーク要求を制御したり、それらを変更したり、キャッシュから取得したカスタム応答を提供したり、応答を完全に合成したりできるので、非常に強力です。

### セキュリティ

サービスワーカーは非常に強力であるため、安全なコンテキスト（HTTPS を意味する）でしか実行できません。 コードを本番環境に移行する前に最初に試してみたい場合は、いつでも localhost でテストするか GitHub Pages を設定することができます。 どちらも HTTPS をサポートしています。

## オフライン優先

「オフライン優先」または「キャッシュ優先」のパターンは、コンテンツをユーザーに提供するための最も一般的な戦略です。 リソースがキャッシュされてオフラインで利用可能な場合は、サーバーからダウンロードする前に最初にそれを返します。 まだキャッシュに入っていない場合は、ダウンロードして将来の使用に備えてキャッシュします。

## PWA における「プログレッシブ」

プログレッシブエンハンスメントとして適切に実装されている場合、サービスワーカーは、オフラインサポートを提供することで API をサポートする最新のブラウザーを使用しているユーザーにメリットをもたらすことができますが、従来のブラウザを使用しているユーザーにとっては何もだめになりません。

## js13kPWA アプリのサービスワーカー

十分な理論 — いくつかのソースコードを見てみましょう！

### サービスワーカーの登録

app.js ファイルで、新しいサービスワーカーを登録するコードを見ることから始めます。

**注** : ここでは [es6](http://es6-features.org/) の**アロー関数**の構文をサービスワーカーの実装に使用しています。

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./pwa-examples/js13kpwa/sw.js");
}
```

[Service Worker API](/ja/docs/Web/API/Service_Worker_API) をブラウザーがサポートしている場合は、{{domxref("ServiceWorkerContainer.register()")}} メソッドを使用してサイトに対して登録します。 その内容は `sw.js` ファイルにあり、登録が成功した後に実行できます。 これが `app.js` ファイルの中にある唯一のサービスワーカーのコードで、それ以外のサービスワーカー固有のものはすべて `sw.js` ファイル自体にあります。

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
var cacheName = "js13kPWA-v1";
var appShellFiles = [
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
var gamesImages = [];
for (var i = 0; i < games.length; i++) {
  gamesImages.push("data/img/" + games[i].slug + ".jpg");
}
var contentToCache = appShellFiles.concat(gamesImages);
```

それから、`install` イベント自体を管理できます。

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("[Service Worker] Caching all: app shell and content");
      return cache.addAll(contentToCache);
    }),
  );
});
```

ここで説明が必要なことが 2 つあります — {{domxref("ExtendableEvent.waitUntil")}} が行うことと、{{domxref("Cache","caches")}} オブジェクトとは何か。

サービスワーカーは、`waitUntil` 内のコードが実行されるまでインストールされません。 それは約束（promise）を返します — インストールにはしばらく時間がかかるかもしれないので完了するまで待つこのアプローチが必要です。

`caches` は特定のサービスワーカーの範囲内でデータの保存を可能にする特別な {{domxref("CacheStorage")}} オブジェクトです — [ウェブストレージ](/ja/docs/Web/API/Web_Storage_API)は同期的であるため、ウェブストレージへの保存は機能しません。 サービスワーカーでは、代わりに Cache API を使用します。

ここでは、指定した名前でキャッシュを開き、アプリが使用するすべてのファイルをキャッシュに追加するので、次回のロード時に利用可能になります（要求 URL で識別されます）。

#### アクティベーション

`activate` イベントもあり、これは `install` と同じ方法で使用されます。 このイベントは通常、不要になったファイルを削除し、一般的にアプリの後にクリーンアップするために使用されます。 私たちのアプリでそれをする必要はないので、それをスキップします。

### フェッチへの応答

また、自由に使える `fetch` イベントもあり、これは HTTP 要求がアプリから発するたびに発生します。 これは要求を傍受してカスタム応答でそれらに応答することを可能にするので非常に便利です。 これは簡単な使用例です。

```js
self.addEventListener("fetch", (e) => {
  console.log("[Service Worker] Fetched resource " + e.request.url);
});
```

応答は望むものなら何でも構いません — 要求されたファイル、そのキャッシュされたコピー、または特定のことを実行する JavaScript コードの一部 — 可能性は無限大です。

このサンプルアプリでは、リソースが実際にキャッシュ内にある限り、ネットワークではなくキャッシュからコンテンツを提供します。 アプリがオンラインかオフラインかに関係なく、これを行います。 ファイルがキャッシュにない場合、アプリはそれを提供する前にまずそこに追加します。

```js
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
      console.log("[Service Worker] Fetching resource: " + e.request.url);
      return (
        r ||
        fetch(e.request).then((response) => {
          return caches.open(cacheName).then((cache) => {
            console.log(
              "[Service Worker] Caching new resource: " + e.request.url,
            );
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    }),
  );
});
```

ここでは、キャッシュ内のリソースを見つけ、存在する場合は応答を返そうとする関数を使用して、`fetch` イベントに応答します。 存在しない場合は、別のフェッチ要求を使用してネットワークからそれをフェッチし、次に応答がキャッシュに格納されるので、次に要求されたときに応答が使用可能になります。

{{domxref("FetchEvent.respondWith")}} メソッドが制御を引き継ぎます — これは、アプリとネットワークの間のプロキシサーバーとして機能する部分です。 これにより、すべての要求に対して、必要な応答を返すことができます — サービスワーカーによって準備され、キャッシュから取得され、必要に応じて変更された。

それでおしまい！ 私たちのアプリはインストール時にそのリソースをキャッシュしてキャッシュからのフェッチでそれらを提供しているので、ユーザーがオフラインであっても機能します。 追加されるたびに新しいコンテンツもキャッシュします。

## 更新

まだカバーしておくべき 1 つのポイントがあります — 新しいアセットを含むアプリの新しいバージョンが利用可能になったときにどのようにサービスワーカーをアップグレードするのでしょうか？ これには、キャッシュ名のバージョン番号が重要です。

```js
var cacheName = "js13kPWA-v1";
```

これが v2 に更新されるとき、新しいキャッシュに（新しいファイルを含む）すべてのファイルを追加することができます。

```js
contentToCache.push("/pwa-examples/js13kpwa/icons/icon-32.png");

// ...

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("js13kPWA-v2").then((cache) => {
      return cache.addAll(contentToCache);
    }),
  );
});
```

新しいサービスワーカーがバックグラウンドでインストールされ、前のバージョン（v1）はそれを使用するページがなくなるまで正しく動作します — 新しいサービスワーカーがアクティブになり、古いページからページの管理を引き継ぎます。

## キャッシュのクリア

スキップした `activate` イベントを覚えていますか？ これは、不要になった古いキャッシュを消去するために使用できます。

```js
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});
```

これにより、必要なファイルだけがキャッシュに保存されるので、ゴミが残ることはありません — [ブラウザーで利用可能なキャッシュスペースは限られている](/ja/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria)ので、後で自分でクリーンアップすることをお勧めします。

## その他のユースケース

サービスワーカーが提供する機能は、キャッシュからファイルを提供することだけではありません。 大量の計算が必要な場合は、メインスレッドからそれらをオフロードしてワーカーで実行し、使用可能になったらすぐに結果を受け取ることができます。 パフォーマンス面では、今は必要ではないが近い将来にある可能性があるリソースをプリフェッチすることができるため、実際にそれらのリソースが必要な場合はアプリの速度が速くなります。

## まとめ

この記事では、PWA をサービスワーカーとオフラインで連携させる方法について簡単に説明しました。 [Service Worker API](/ja/docs/Web/API/Service_Worker_API) の背後にある概念と、それをより詳細に使用する方法についてもっと知りたい場合は、さらに詳しい資料をチェックしてください。

[プッシュ通知](/ja/docs/Web/API/Push_API)を処理するときにもサービスワーカーを使用します — これについては後の記事で説明します。

{{PreviousMenuNext("Web/Progressive_web_apps/App_structure", "Web/Progressive_web_apps/Installable_PWAs", "Web/Progressive_web_apps")}}

{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/")}}
