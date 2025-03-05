---
title: InstallEvent
slug: Web/API/InstallEvent
l10n:
  sourceCommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{APIRef("Service Workers API")}}{{Deprecated_Header}}{{Non-standard_Header}}

{{domxref("ServiceWorkerGlobalScope.install_event", "oninstall")}} ハンドラーに引数として渡される `InstallEvent` インターフェイスは、{{domxref("ServiceWorkerGlobalScope")}} の {{domxref("ServiceWorker")}} で配信されるインストールアクションを表します。{{domxref("ExtendableEvent")}} の子として、{{domxref("FetchEvent")}} のような機能イベントがインストール中に配信されないようにします。

このインターフェイスは {{domxref("ExtendableEvent")}} インターフェイスを継承しています。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("InstallEvent.InstallEvent", "InstallEvent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 新しい `InstallEvent` オブジェクトを生成します。

## インスタンスプロパティ

_祖先である {{domxref("Event")}} からプロパティを継承しています_。

- {{domxref("InstallEvent.activeWorker")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 現在ページを制御している {{domxref("ServiceWorker")}} を返します。

## インスタンスメソッド

_祖先である {{domxref("Event")}} からメソッドを継承しています_。

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
    "Handling install event. Resources to pre-fetch:",
    urlsToPrefetch,
  );

  event.waitUntil(
    caches
      .open(CURRENT_CACHES["prefetch"])
      .then((cache) => {
        return cache
          .addAll(
            urlsToPrefetch.map((urlToPrefetch) => {
              return new Request(urlToPrefetch, { mode: "no-cors" });
            }),
          )
          .then(() => {
            console.log("All resources have been fetched and cached.");
          });
      })
      .catch((error) => {
        console.error("Pre-fetching failed:", error);
      }),
  );
});
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("NotificationEvent")}}
- {{jsxref("Promise")}}
- [フェッチ API](/ja/docs/Web/API/Fetch_API)
