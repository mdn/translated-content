---
title: サービスワーカーの使用
slug: Web/API/Service_Worker_API/Using_Service_Workers
tags:
  - ガイド
  - サービス
  - ServiceWorker
  - ワーカー
  - basics
translation_of: Web/API/Service_Worker_API/Using_Service_Workers
---
{{ServiceWorkerSidebar}}

この記事はサービスワーカーを使い始めるための情報を提供するページです。基本的な構造、サービスワーカーの登録、新しいサービスワーカーのインストールと有効化のプロセス、サービスワーカーの更新、キャッシュや応答の操作を含めた、オフラインで動作するシンプルなアプリケーションの機能についてです。

## サービスワーカーの前提条件

ウェブユーザーが長年苦しめられてきた主要な問題の一つは、接続を失うことです。世界中の最高のウェブアプリは、ダウンロードできないときの使い勝手が最悪でした。これまでにも、この問題を解決するための技術を生み出す試みはさまざまに行われ、いくつかの問題は解決されてきました。しかし、一番の問題は、資産のキャッシュとカスタムネットワークリクエストのための優れた全体的な制御メカニズムがまだ存在しないことです。

以前の取り組み、 _AppCache_ は、キャッシュする資産をとても簡単に指定することができたため、良いアイディアに見えました。しかしながら、 利用において数多くの取り決めがあり、アプリケーションが完全に取り決めに従わない場合は壊れてしまいました。さらに詳しいことは Jake Archibald の [Application Cache is a Douchebag](http://alistapart.com/article/application-cache-is-a-douchebag) にをお読みください。

> **Note:** Firefox 84 以降では、 AppCache は取り除かれました（{{bug("1619673")}}）。 Chromium 90 でも削除が計画されており、 Safari でも非推奨になっています。

サービスワーカーは最終的にこれらの問題を解決するでしょう。サービスワーカーの構文は AppCache の構文と比べて複雑です。しかし、代わりに JavaScript を使用して AppCache で動作させていたような振る舞いをより細かく制御し、この問題やその他の多くのことを扱うことができるようになります。サービスワーカーを使用することで、アプリケーションがはじめにキャッシュされた資産を使用するよう簡単に設定することができます。そのため、一度ネットワークからデータを取得しておけば、オフラインでも既定の機能を提供できます（[オフラインファースト](http://offlinefirst.org/)として一般的に知られています）。このようなオフラインの機能はネイティブアプリでは既に使用可能であり、ネイティブアプリがウェブアプリを差し置いて選ばれる理由の一つです。

## サービスワーカーを実行するための設定

最近では、最近のブラウザーではすべて、サービスワーカーが既定で有効になっています。サービスワーカーを使用してコードを実行するには、コードを HTTPS で提供する必要があります。サービスワーカーは、セキュリティ上の理由から HTTPS での実行に制限されています。そのため、 HTTPS に対応している GitHub は実験をホストするのに適した場所です。ローカルでの開発を容易にするために、 `localhost` はブラウザーによって安全なオリジンとみなされます。

## 基本構造

サービスワーカーでは、基本的なセットアップの際に下記のステップが一般的に見られます。

1. サービスワーカーの URL が呼び出され、 {{ domxref("serviceWorker.register()")}} を通して登録されます。
2. 成功した場合、サービスワーカーは {{domxref("ServiceWorkerGlobalScope") }} で実行されます。これは根本的に特殊なワーカーコンテキストで、メインスレッドから独立しており、 DOM へのアクセスもありません。
3. サービスワーカーはイベントの処理ができる状態になります。
4. サービスワーカーにコントロールされたページが今後アクセスされた時、ワーカーのインストールが試みられます。インストールのイベントは常に最初にサービスワーカーへ送られます（このイベントは IndexedDB の設定やサイト資産のキャッシュに使用することができます）。これはネイティブアプリや Firefox OS アプリのインストールと全く同じ種類の - 全てをオフラインで使用できるようにするための - 処理です。
5. `oninstall` ハンドラーが完了すると、サービスワーカーはインストールされたと考えられます。
6. 次のステップは有効化です。サービスワーカーがインストールされると、次に有効化イベントを受け取ります。 `onactivate` の基本的な使用法は、以前のバージョンのサービスワーカースクリプトで使用したリソースのクリーンアップです。
7. 現在サービスワーカーはページを制御しているでしょう。しかし `register()` が成功した後に開かれたページのみです。例えば、文書はサービスワーカーがあろうとなかろうと実行され、実行されている間はその状態を保ちます。つまり、文書が実際に制御されるには、再読み込みされる必要があるでしょう。

![](sw-lifecycle.png)

以下の図は、利用可能なサービスワーカーのイベントの概要を示しています。

![インストール、起動、メッセージ、フェッチ、同期、プッシュ](sw-events.png)

### プロミス

サービスワーカーの登録とインストールのごく基本的なことを示すために、 [sw-test](https://github.com/mdn/sw-test) というシンプルなデモを作成しました。これは、シンプルなスターウォーズレゴの画像ギャラリーです。これは、プロミスを利用した関数で、 JSON オブジェクトから画像データを読み込み、 Ajax で画像を読み込んでから、ページの下に画像を並べて表示するものです。今のところ静的でシンプルなものにしています。また、サービスワーカーを登録、インストール、アクティブ化し、ブラウザーがより多くの仕様に対応するようになったら、必要なファイルをすべてキャッシュしてオフラインで動作するようにします。

![](demo-screenshot.png)

[GitHub 上のソースコード](https://github.com/mdn/sw-test/)を確認し、[例をライブで表示](https://mdn.github.io/sw-test/)してみましょう。

### ワーカーの登録

このアプリの JavaScript ファイルである `app.js` の最初のコードブロックは、以下の通りです。これは、サービスワーカーを使用するためのエントリーポイントです。

```js
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        '/sw-test/sw.js',
        {
          scope: '/sw-test/',
        }
      );
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

// ...

registerServiceWorker();
```

1. if ブロックは、登録を試みる前にサービスワーカーに対応しているか確認する機能検出試験を行います。
2. 次に、 {{domxref("ServiceWorkerContainer.register()") }} 関数を使って、アプリ内にある単なる JavaScript ファイルであるサービスワーカーをこのサイトに登録します（なお、これはオリジンからのファイルの相対 URL であって、それを参照している JS ファイルではありません）。
3. `scope` 引数はオプションで、サービスワーカーが制御するコンテンツのサブセットを指定することができます。このケースでは `'/sw-test/'` を指定しており、アプリのオリジン配下のすべてのコンテンツを意味しています。もしこれを指定しなくてもこの値が既定値になりますが、指定方法を示すために使用しています。

これは、ワーカーのコンテキストで実行されるサービスワーカーを登録しているため、 DOM にはアクセスしていません。続いて、通常ページの外側のサービスワーカーでロードを制御するためにコードを実行します。

1 つのサービスワーカーで、多数のページを制御することができます。スコープ内のページが読み込まれるたびに、サービスワーカーはそのページにインストールされて動作します。そのため、サービスワーカースクリプト内でのグローバル変数の扱いには注意が必要だということを心にとどめておいてください。各ページが固有のワーカーを持つわけではありません。

> **Note:** サービスワーカー関数は、プロキシサーバーのようにリクエストやレスポンスを書き換えたり、独自のキャッシュの項目で置き換えたりすることができます。

> **Note:** サービスワーカーの良いところは、以上で見てきたような機能の検出をすることで、サービスワーカーに対応していないブラウザーでもオンラインで期待通りの流儀でアプリを使用することができることです。さらに、同一のページで AppCache とサービスワーカーを使用すると、サービスワーカーに対応していないが AppCache に対応しているブラウザーは AppCache を使用し、両方に対応しているブラウザーは AppCache を無視してサービスワーカーを優先させることができます。

#### サービスワーカーの登録に失敗する理由

次の可能性が考えられます。

1. HTTPS を使用してアプリケーションを実行していない。
2. サービスワーカーファイルへのパスが正しく書かれていない。 — アプリのルートディレクトリではなく、アプリのオリジンからの相対パスで書く必要があります。上記の例では、ワーカーが `https://mdn.github.io/sw-test/sw.js` にあり、アプリのルートは `https://mdn.github.io/sw-test/` です。しかし、パスは `/sw-test/sw.js` と書く必要があり、 `/sw.js` ではありません。
3. 指定されているサービスワーカーがアプリとは異なるオリジンにある。これは許可されていません。

![](important-notes.png)

他のメモです。

- サービスワーカーはサービスワーカーのスコープ内にあるクライアントからのリクエストのみを取得します。
- サービスワーカーの最大スコープは、ワーカーのある場所です。
- サービスワーカーが `Service-Worker-Allowed` ヘッダーから提供されたクライアント上で起動する場合、そのワーカーの最大スコープのリストを指定することができます。
- Firefox では、ユーザーが[プライベートブラウジングモード](https://support.mozilla.org/ja/kb/private-browsing-use-firefox-without-history)にいるときは、サービスワーカー API は隠され使用することができません。

### インストールと起動: キャッシュの作成

サービスワーカーを登録した後、ブラウザーはページ/サイト上でサービスワーカーをインストールおよび起動しようとします。

インストールが成功裡に完了したとき、 install イベントが発行されます。通常、 install イベントはオフラインで実行する必要のある資産を、ブラウザーのオフラインキャッシュ領域に配置するために使われます。これをするために、サービスワーカーのストレージ API— {{domxref("cache")}} — を使用します。キャッシュはサービスワーカーのグローバルオブジェクトで、レスポンスによって配信された資産を、そのリクエストをキーにして保存することができます。この API はブラウザーの標準キャッシュと同じように動作しますが、そのドメインに特化しています。キャッシュが不要であることを再度伝えるまで持続します。これも、すべてを制御できます。

サービスワーカーが `install` イベントを扱う方法の例です。

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/sw-test/",
      "/sw-test/index.html",
      "/sw-test/style.css",
      "/sw-test/app.js",
      "/sw-test/image-list.js",
      "/sw-test/star-wars-logo.jpg",
      "/sw-test/gallery/bountyHunters.jpg",
      "/sw-test/gallery/myLittleVader.jpg",
      "/sw-test/gallery/snowTroopers.jpg",
    ])
  );
});
```

1. ここでは サービスワーカー（thisによって）にイベントリスナーを追加して、イベントに{{domxref("ExtendableEvent.waitUntil()") }} メソッドをチェーンしています ― これは `waitUntil()` の内部のコードが成功裡に実行されるまで、サービスワーカーがインストールされないことを保証します。
2. `addResourcesToCache` の内部で、 [`caches.open()`](/ja/docs/Web/API/CacheStorage/open) を使用して、 `v1` と呼ばれる新しいキャッシュを作成します。これはサイトリソースキャッシュのバージョン 1 となります。次に、作成されたキャッシュに対して `addAll()` を呼び出す関数を呼び出します。この関数の引数には、キャッシュしたいすべてのリソースのオリジンからの相対 URL の配列が渡されます。
3. プロミスが拒否された場合、インストールが失敗し、ワーカーは何もしません。これは、コードを修正し、次に登録が発生したときに再試行することができるので、問題ありません。
4. インストールに成功すると、サービスワーカーがアクティブになります。これは、サービスワーカーの初回インストール/アクティベーション時にはあまり明確な用途はありませんが、サービスワーカーが更新された時にはより大きな意味を持ちます（後の [サービスワーカーの更新](#サービスワーカーの更新)の節を参照してください）。

> **Note:** [localStorage](/ja/docs/Web/API/Web_Storage_API) はサービスワーカーキャッシュと同じように動作しますが、同期処理であるため、サービスワーカー内では許可されていません。

> **Note:** 必要であれば、 [IndexedDB](/ja/docs/Web/API/IndexedDB_API) をサービスワーカー内でデータ保存のために使用することができます。

### 要求に対するカスタム応答

サイトの資産がキャッシュされたので、サービスワーカーにキャッシュされたコンテンツを使って何かするように指示する必要があります。これは `fetch` イベントを使って簡単に実現できます。

![](sw-fetch.png)

`fetch` イベントが発行されるたび、指定されたスコープ内の文書とこれらの文書が参照するすべてのリソースを含む、サービスワーカーによって制御されたリソースの取得します（例えば、`index.html` が画像を埋め込むためにオリジン間要求を行うと、サービスワーカーを通過します）。

`fetch` イベントリスナーをサービスワーカーに割り当てると、そのイベント上で `respondWith()` を呼び出すことで、 HTTP レスポンスを乗っ取って更新するというマジックを行うことができます。

```js
self.addEventListener('fetch', (event) => {
  event.respondWith(
    // magic goes here
  );
});
```

それぞれのケースで、ネットワークリクエストの URL と一致するリソースで応答することから始めることができる。

```js
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
  );
});
```

`caches.match(event.request)` は、ネットワークから要求された各リソースを、キャッシュにある同等のリソースが利用可能であれば、マッチングさせることができるようにします。マッチングは、通常の HTTP リクエストと同様に、URL と様々なヘッダーを介して行われます。

マジックを定義するときに、他のいくつかのオプションを見てみましょう（{{domxref("Request") }} と {{domxref("Response") }} オブジェクトについての詳細な情報は、 [フェッチ API ドキュメント](/ja/docs/Web/API/Fetch_API) を参照してください）。

1. `{{domxref("Response.Response","Response()")}}` コンストラクターを使用すると、独自のレスポンスを作成することができます。この例では、単純なテキストデータを返却します。

    ```js
    new Response('Hello from your friendly neighborhood service worker!');
    ```

2. 以下のより複雑な `Response` は、オプションで標準的な HTTP レスポンスヘッダーを模したヘッダー群を渡すことができることを示しています。ここでは、合成レスポンスのコンテントタイプをブラウザーに伝えているだけです。

    ```js
    new Response('<p>Hello from your friendly neighborhood service worker!</p>', {
      headers: { 'Content-Type': 'text/html' }
    });
    ```

3. キャッシュに一致するものがなかった場合、そのリソースに対する既定のネットワークリクエストを {{domxref("fetch()")}} で読み取るようにブラウザーに指示し、新しいリソースが利用可能であればネットワークから取得するようにすることができます。

    ```js
    fetch(event.request);
    ```

4. もしキャッシュに一致するものが見つからず、ネットワークも利用できない場合は、 {{domxref("CacheStorage.match","match()")}} を使ってレスポンスとしてある種の既定の代替ページでリクエストに一致させればよいでしょう、例えばこのようにします。

    ```js
    caches.match('./fallback.html');
    ```

5. {{domxref("FetchEvent")}} が返す {{domxref("Request")}} オブジェクトの引数を呼び出すことで、それぞれのリクエストに関する多くの情報を取得することができます。

    ```js
    event.request.url
    event.request.method
    event.request.headers
    event.request.body
    ```

## 失敗した要求の復旧

では、 `caches.match(event.request)` はサービスワーカーのキャッシュに一致するものがある場合は良いのですが、一致しない場合はどうでしょうか？もし、何らかの失敗処理を提供しなければ、プロミスは `undefined` で解決され、何も返されないでしょう。

幸いなことに、サービスワーカーのプロミスベースの構造により、成功に向けた更なるオプションを提供することは些細なことです。こんなことができます。

```js
const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  return fetch(request);
};

self.addEventListener('fetch', (event) => {
  event.respondWith(cacheFirst(event.request));
});
```

キャッシュにないリソースは、ネットワークからリクエストされます。

もし本当に賢いのであれば、ネットワークからリソースをリクエストするだけでなく、キャッシュに保存して、そのリソースに対する後の要求がオフラインでも取得できるようにします つまり、 Star Wars のギャラリーに新しい画像が追加された場合、アプリは自動的にその画像を取得してキャッシュすることができるのです。以下のようになります。

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
}

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  const responseFromNetwork = await fetch(request);
  putInCache(request, responseFromNetwork.clone())
  return responseFromNetwork;
};

self.addEventListener('fetch', (event) => {
  event.respondWith(cacheFirst(event.request));
});
```

リクエスト URL がキャッシュにない場合、 `await fetch(request)` でネットワークリクエストからリソースをリクエストします。その後、レスポンスのクローンをキャッシュに格納します。 `putInCache` 関数は `caches.open('v1')` と `cache.put()` を使用して、リソースをキャッシュに追加します。本来のレスポンスはブラウザーに返され、それを呼び出したページに渡されます。

リクエストストリームとレスポンスストリームは一度しか読み込めないので、レスポンスの複製を作成する必要があります。ブラウザーにレスポンスを返してキャッシュに入れるには、それを複製する必要があります。つまり、オリジナルはブラウザーに返され、クローンはキャッシュに送られます。これらはそれぞれ一度だけ読み込まれます。

少し奇妙に見えるのは、 `putInCache` が返すプロミスが待ち状態でないことです。しかしその理由は、レスポンスクローンがキャッシュに追加されるまで、レスポンスを返すのを待ちたくないからです。

今ある唯一の問題は、リクエストがキャッシュに何も一致せず、ネットワークも利用できない場合、やはりリクエストは失敗してしまうということです。何が起こっても、ユーザーは少なくとも何かを得ることができるように、既定の代替処理を提供することにしましょう。

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Next try to get the resource from the network
  try {
    const responseFromNetwork = await fetch(request);
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // when even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object
    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
};

self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      fallbackUrl: "/sw-test/gallery/myLittleVader.jpg",
    })
  );
});
```

この代替画像を選択したのは、失敗する可能性のあるアップデートは新しい画像だけで、他のすべては先に見た `install` イベントのリスナーでのインストールに依存しているためです。

## サービスワーカーのナビゲーション先読み

有効にすると、[ナビゲーション先読み](/ja/docs/Web/API/NavigationPreloadManager)機能は、フェッチ要求がなされるとすぐに、サービスワーカーの起動と並行してリソースのダウンロードを開始します。
これにより、サービスワーカーが起動するまで待つ必要がなく、ページへのナビゲーションですぐにダウンロードが開始されるようになります。
この遅延は比較的稀にしか発生しませんが、発生した場合は避けられないものであり、重大なものになる可能性があります。

まず、サービスワーカー起動時に {{domxref("NavigationPreloadManager.enable()", "registration.navigationPreload.enable()")}} を使ってこの機能を有効にする必要があります。

```js
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // Enable navigation preloads!
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener('activate', (event) => {
  event.waitUntil(enableNavigationPreload());
});
```

そして、{{domxref("FetchEvent.preloadResponse", "event.preloadResponse")}} を使って `fetch` イベントハンドラーの中で先読みされたリソースのダウンロードが終了するのを待ちます。

前の節の例に引き続き、キャッシュチェックの後に先読みされたリソースを待機し、成功しなかった場合はネットワークから取得するコードを挿入します。

新しい処理は次の通りです。

1. キャッシュをチェック
2. `event.preloadResponse` を待ちます。これは `preloadResponsePromise` として `cacheFirst` 関数に渡されます。
   結果が返ってきたら、それをキャッシュします。
3. どちらも定義されていない場合は、ネットワークに行きます。

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v1');
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open('v1');
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Next try to use (and cache) the preloaded response, if it's there
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info('using preload response', preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  // Next try to get the resource from the network
  try {
    const responseFromNetwork = await fetch(request);
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // when even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object
    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
};

// Enable navigation preload
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // Enable navigation preloads!
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener('activate', (event) => {
  event.waitUntil(enableNavigationPreload());
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    addResourcesToCache([
      '/sw-test/',
      '/sw-test/index.html',
      '/sw-test/style.css',
      '/sw-test/app.js',
      '/sw-test/image-list.js',
      '/sw-test/star-wars-logo.jpg',
      '/sw-test/gallery/bountyHunters.jpg',
      '/sw-test/gallery/myLittleVader.jpg',
      '/sw-test/gallery/snowTroopers.jpg',
    ])
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      preloadResponsePromise: event.preloadResponse,
      fallbackUrl: '/sw-test/gallery/myLittleVader.jpg',
    })
  );
});
```

この例では、リソースを「通常」ダウンロードしても先読みしても、同じデータをダウンロードしてキャッシュすることに注意してください。
代わりに、先読み時に別のリソースをダウンロードし、キャッシュするように選択することもできます。
詳細については、[`NavigationPreloadManager` > カスタムレスポンス](/ja/docs/Web/API/NavigationPreloadManager#カスタムレスポンス)を参照してください。

## サービスワーカーの更新

サービスワーカーが以前にインストールされているが、ページの更新や読み込みの時に新しいバージョンのワーカーが利用できる場合、新しいバージョンはバックグラウンドでインストールされますが、まだ起動しません。まだ古いサービスワーカーを使用している読み込まれたページがなくなったら、新しいサービスワーカーが起動します。

新しいサービスワーカーで、 `install` イベントリスナーをこのようなもの（新しいバージョン番号を通知するもの）に更新したくなるでしょう。

```js
const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v2')
  await cache.addAll(resources);
}

self.addEventListener('install', (event) => {
  event.waitUntil(addResourcesToCache(
    [
      './sw-test/',
      './sw-test/index.html',
      './sw-test/style.css',
      './sw-test/app.js',
      './sw-test/image-list.js',

      …

       // 新しいバージョンのための新しい他のリソースを入れてください...
    ]
  ));
});
```

これが発生している間、以前のバージョンはまだ fetch に対して応答します。新しいバージョンは、バックグラウンドでインストールされています。以前の `v1` キャッシュを妨げないように、新しいキャッシュを `v2` と呼んでいます。

どのページも現在のバージョンを使用していないとき、新しいワーカーが有効化し、 fetch に応答するようになります。

### 古いキャッシュの削除

`activate` イベントを取得することもできます。これは一般的に、実行中の以前のバージョンを破壊するために使われます。たとえば、古いキャッシュを取り除きます。これはディスクスペースがいっぱいになることを防ぐために、もはや不要なデータを削除するのにも役立ちます — それぞれのブラウザーはサービスワーカーが使うために与えられたキャッシュストレージの容量に対して厳しい制限があります。ブラウザーはディスクスペースを管理するために最善を尽くしていますが、オリジンのためのキャッシュストレージを削除するかもしれません。 一般的にブラウザーはオリジンのためのデータをすべて削除するか、オリジンのためのデータを持っていません。

`waitUntil()` に渡されたプロミスは、完了するまで他のイベントをブロックするので、新しいキャッシュ上で初めての `fetch` イベントを取得するときには、クリーンアップ操作が完了していると確信できます。

```js
const deleteCache = async key => {
  await caches.delete(key)
}

const deleteOldCaches = async () => {
   const cacheKeepList = ['v2'];
   const keyList = await caches.keys()
   const cachesToDelete = keyList.filter(key => !cacheKeepList.includes(key))
   await Promise.all(cachesToDelete.map(deleteCache));
}

self.addEventListener('activate', (event) => {
  event.waitUntil(deleteOldCaches());
});
```

## 開発ツール

Chrome には、現在サービスワーカーのアクティビティや端末上のストレージを示す `chrome://inspect/#service-workers` があり、また、より詳細な情報の表示や、ワーカープロセスを開始/停止/デバッグできる `chrome://serviceworker-internals` があります。将来的には、不良または存在しない接続をエミュレートするスロットリング/オフラインモードを実装する予定です。これは本当に素晴らしい機能です。

Firefox もサービスワーカーに関する便利なツールを実装し始めています。

- [`about:debugging`](/ja/docs/Tools/about:debugging) を開くと、サービスワーカーで何が登録されているかを見たり、更新/削除したりすることができます。
- テストを行う場合、 [Firefox 開発者ツール設定](/ja/docs/Tools/Settings)で、"HTTP による Service Worker を有効化 (ツールボックスを開いたとき)" をチェックすることで、 HTTPS 制約を回避できます。
- Firefox のカスタマイズオプションで利用できる "Forget" ボタンで、サービスワーカーおよびそのキャッシュを消去することができます ({{bug(1252998)}})。

> **Note:** ローカルでの開発のために、 `http://localhost` から（例えば `me@localhost:/my/app$ python -m SimpleHTTPServer` を使用して）アプリのサービスを行うことができます。[セキュリティの考慮事項](https://www.w3.org/TR/service-workers/#security-considerations)を参照してください。

## 関連情報

- [Understanding Service Workers](http://blog.88mph.io/2017/07/28/understanding-service-workers/) (英語)
- [The Service Worker Cookbook](https://github.com/mozilla/serviceworker-cookbook) (英語)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/) (英語)
- [Service Workers 101 cheatsheet](sw101.png) をダウンロード (英語)
- [プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
