---
title: InstallEvent
slug: Web/API/InstallEvent
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("Service Workers API")}}

{{DOMxRef("ServiceWorkerGlobalScope.install_event", "install")}} イベントハンドラー関数に引数として渡される `InstallEvent` インターフェイスは、{{domxref("ServiceWorkerGlobalScope")}} の {{domxref("ServiceWorker")}} で配信されるインストールアクションを表します。{{domxref("ExtendableEvent")}} の子として、{{domxref("FetchEvent")}} のような機能イベントがインストール中に配信されないようにします。

このインターフェイスは {{domxref("ExtendableEvent")}} インターフェイスを継承しています。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("InstallEvent.InstallEvent", "InstallEvent()")}}
  - : 新しい `InstallEvent` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{domxref("ExtendableEvent")}} から継承したプロパティがあります_。

## インスタンスメソッド

_親である {{domxref("ExtendableEvent")}} から継承したメソッドがあります_。

- {{domxref("InstallEvent.addRoutes()", "addRoutes()")}}
  - : 1 つ以上の静的ルートを指定します。これらは、サービスワーカーの起動前であっても使用する、指定されたリソースを取得するためのルールを定義します。

## 例

このコードスニペットは、[サービスワーカーの先読みサンプル](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js)のものです（[先読みのライブ実行](https://googlechrome.github.io/samples/service-worker/prefetch/)を参照してください）。このコードは {{domxref("ServiceWorkerGlobalScope.install_event", "ServiceWorkerGlobalScope.oninstall") }} で {{domxref("ServiceWorkerRegistration.installing") }} ワーカーをインストールしたとみなすことを、渡されたプロミスが正常に解決するまで遅らせています。プロミスは、すべてのリソースのフェッチとキャッシュが完了したとき、または何らかの例外が発生したときに解決します。

このコードスニペットでは、サービスワーカーが使用するキャッシュをバージョン管理するためのベストプラクティスも示しています。この例ではキャッシュを 1 つしか保有していませんが、この手法を複数のキャッシュに使用することができます。このコードでは、キャッシュの一括指定と、バージョン管理された固有のキャッシュ名とを割り当てています。

> [!NOTE]
> Google Chromeでは、chrome://serviceworker-internals 経由でアクセスした関連サービスワーカーの "Inspect" インターフェイスでログ出力します。

```js
const CACHE_VERSION = 1;
const CURRENT_CACHES = {
  prefetch: `prefetch-cache-v${CACHE_VERSION}`,
};

self.addEventListener("install", (event) => {
  const urlsToPrefetch = [
    "./static/pre_fetched.txt",
    "./static/pre_fetched.html",
    "https://www.chromium.org/_/rsrc/1302286216006/config/customLogo.gif",
  ];

  console.log(
    "インストールイベントの処理中。事前取得するリソース:",
    urlsToPrefetch,
  );

  event.waitUntil(
    caches
      .open(CURRENT_CACHES["prefetch"])
      .then((cache) =>
        cache.addAll(
          urlsToPrefetch.map(
            (urlToPrefetch) => new Request(urlToPrefetch, { mode: "no-cors" }),
          ),
        ),
      )
      .then(() => {
        console.log("すべてのリソースが取得され、キャッシュされました。");
      })
      .catch((error) => {
        console.error("事前取得に失敗しました：", error);
      }),
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`install` イベント](/ja/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- {{domxref("NotificationEvent")}}
- {{jsxref("Promise")}}
- [フェッチ API](/ja/docs/Web/API/Fetch_API)
