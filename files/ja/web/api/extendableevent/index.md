---
title: ExtendableEvent
slug: Web/API/ExtendableEvent
l10n:
  sourceCommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{APIRef("Service Workers API")}}

**`ExtendableEvent`** インターフェイスは、サービスワーカーのライフサイクルの一部として、グローバルスコープに配信された [`install`](/ja/docs/Web/API/ServiceWorkerGlobalScope/install_event) および [`activate`](/ja/docs/Web/API/ServiceWorkerGlobalScope/activate_event) イベントの存続期間を延長します。これにより、データベーススキーマがアップグレードされて古いキャッシュエントリーが削除されるまで、機能イベント（{{domxref("FetchEvent")}} など）が送出されなくなります。

{{domxref("ExtendableEvent.waitUntil","waitUntil()")}} が `ExtendableEvent` ハンドラーの外で呼び出された場合、ブラウザーは `InvalidStateError` 例外を発生させます。 また、複数の呼び出しが積み重なり、その結果のプロミスが[存続期間延長プロミス](https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises)のリストに追加されることにも注意してください。

> **メモ:** 上記の段落で説明した振る舞いは、Firefox 43 で修正されました（[Firefox バグ 1180274](https://bugzil.la/1180274) を参照）。

このインターフェイスは、 {{domxref("Event")}} インターフェイスを継承しています。

{{InheritanceDiagram}}

> **メモ:** このインターフェイスは、グローバルスコープが {{domxref("ServiceWorkerGlobalScope")}} の場合にのみ使用できます。 {{domxref("Window")}} または別の種類のワーカーのスコープの場合は使用できません。

## コンストラクター

- {{domxref("ExtendableEvent.ExtendableEvent()", "ExtendableEvent()")}}
  - : 新しい `ExtendableEvent` オブジェクトを作成します。

## プロパティ

_特定のプロパティを実装していませんが、親である {{domxref("Event")}} からプロパティを継承しています。_

## メソッド

_親である {{domxref("Event")}} からメソッドを継承しています。_

- {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}}
  - : イベントの存続期間を延長します。 これは、インストール中 ({{domxref("ServiceWorkerRegistration.installing", "installing")}}) のワーカーの [`install`](/ja/docs/Web/API/ServiceWorkerGlobalScope/install) [イベントハンドラー](/ja/docs/Web/Events/Event_handlers) と、アクティブ ({{domxref("ServiceWorkerRegistration.active", "active")}}) ワーカーの [`activate`](/ja/docs/Web/API/ServiceWorkerGlobalScope/activate) [イベントハンドラー](/ja/docs/Web/Events/Event_handlers) で呼び出すためのものです。

## 例

このコードスニペットは、[サービスワーカーのプリフェッチの例](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js)からのものです（[プリフェッチの例をライブで](https://googlechrome.github.io/samples/service-worker/prefetch/)見る）。 コードは {{domxref("ServiceWorkerGlobalScope.install_event")}} で {{domxref("ExtendableEvent.waitUntil()")}} を呼び出し、インストール中（{{domxref("ServiceWorkerRegistration.installing")}}）のワーカーがインストール済み（installed）として扱われるのを、渡された Promise が正常に解決されるまで遅らせます。 Promise は、すべてのリソースがフェッチされてキャッシュされたとき、または例外が発生したときに解決します。

コードスニペットは、サービスワーカーが使用するキャッシュのバージョン管理のベストプラクティスも示しています。 この例ではキャッシュは 1 つしかありませんが、同じアプローチを複数のキャッシュに使用できます。 キャッシュの一括指定識別子を特定のバージョン管理されたキャッシュ名にマップします。

> **メモ:** Chrome では、ログ文は、chrome://serviceworker-internals を介してアクセスされる関連サービスワーカーの "Inspect" インターフェイスを介して表示されます。

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
            console.log("すべてのリソースをフェッチし、キャッシュしました。");
          });
      })
      .catch((error) => {
        console.error("プリフェッチに失敗:", error);
      }),
  );
});
```

> **メモ:** リソースをフェッチするとき、リソースが {{glossary("CORS")}} をサポートしていないサーバーから提供される可能性がある場合は、`{mode: 'no-cors'}` を使用することが非常に重要です。 この例では、 [www.chromium.org](https://www.chromium.org/) は CORS をサポートしていません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
