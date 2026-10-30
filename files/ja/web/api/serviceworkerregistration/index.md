---
title: ServiceWorkerRegistration
slug: Web/API/ServiceWorkerRegistration
l10n:
  sourceCommit: 828ae6eee278f30c3fa3677a74915d28d9e338b2
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`ServiceWorkerRegistration`** は [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) のインターフェイスで、サービスワーカー登録を表します。 同じオリジンを共有している 1 つ以上のページを制御するサービスワーカーを登録します。

サービスワーカー登録の存続期間は、対応するサービスワーカークライアントの存続期間内でそれらを表す `ServiceWorkerRegistration` オブジェクトの存続期間を超えています。 ブラウザーは、アクティブな `ServiceWorkerRegistration` オブジェクトの永続的なリストを維持します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{domxref("EventTarget")}} から継承したプロパティもあります。_

- {{domxref("ServiceWorkerRegistration.active")}} {{ReadOnlyInline}}
  - : 状態がアクティブ化中 (`activating`) またはアクティブ化済み (`activated`) のサービスワーカーを返します。 これは最初は `null` に設定されています。 クライアントの URL が登録のスコープ内にある場合、アクティブワーカーは {{domxref("Client")}} を制御します（{{domxref("ServiceWorkerContainer.register")}} を最初に呼び出したときに設定した `scope` オプション）。
- {{domxref("ServiceWorkerRegistration.backgroundFetch")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : バックグラウンドフェッチ操作を管理する {{domxref("BackgroundFetchManager")}} オブジェクトへの参照を返します。
- {{domxref("ServiceWorkerRegistration.cookies")}} {{ReadOnlyInline}}
  - : {{domxref("CookieStoreManager")}} インターフェイスへの参照を返します。これにより、クッキーの変更イベントを登録したり解除したりすることができます。
- {{domxref("ServiceWorkerRegistration.index")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("ContentIndex")}} インターフェイスの参照を返し、これによってオフライン表示のコンテンツの索引付けを管理します。
- {{domxref("ServiceWorkerRegistration.installing")}} {{ReadOnlyInline}}
  - : 状態がインストール中 (`installing`) のサービスワーカーを返します。 これは最初は `null` に設定されています。
- {{domxref("ServiceWorkerRegistration.navigationPreload")}} {{ReadOnlyInline}}
  - : 現在のサービスワーカー登録に関連する {{domxref("NavigationPreloadManager")}} のインスタンスを返します。
- {{domxref("ServiceWorkerRegistration.paymentManager")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 決済アプリの様々な機能を管理するために使用する、決済アプリの {{domxref("PaymentManager")}} のインスタンスを返します。
- {{domxref("ServiceWorkerRegistration.periodicSync")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{domxref("PeriodicSyncManager")}} インターフェイスへの参照を返します。これにより、特定の間隔で実行されるタスクを登録することができます。
- {{domxref("ServiceWorkerRegistration.pushManager")}} {{ReadOnlyInline}}
  - : 購読申し込み、アクティブな購読の取得、プッシュの許可状況へのアクセスなど、プッシュの購読を管理するための {{domxref("PushManager")}} インターフェイスへの参照を返します。
- {{domxref("ServiceWorkerRegistration.scope")}} {{ReadOnlyInline}}
  - : サービスワーカーの登録範囲、つまりサービスワーカーが制御できる URL の範囲を定義する URL を表す文字列を返します。
- {{domxref("ServiceWorkerRegistration.sync")}} {{ReadOnlyInline}}
  - : バックグラウンド同期プロセスを管理する {{domxref("SyncManager")}} インターフェイスへの参照を返します。
- {{domxref("ServiceWorkerRegistration.updateViaCache")}} {{ReadOnlyInline}}
  - : サービスワーカーや、{{domxref("WorkerGlobalScope.importScripts", "importScripts()")}} を通じてインポートされたスクリプトを更新しようとする際、ブラウザーが HTTP キャッシュを参照する条件を決定するために使用される設定の値を返します。値は、`imports`、`all`、`none` のいずれかになります。
- {{domxref("ServiceWorkerRegistration.waiting")}} {{ReadOnlyInline}}
  - : 状態がインストール済み (`installed`) のサービスワーカーを返します。 これは最初は `null` に設定されています。

## インスタンスメソッド

_親インターフェイスである {{domxref("EventTarget")}} から継承したメソッドもあります。_

- {{domxref("ServiceWorkerRegistration.getNotifications()")}}
  - : 現在のオリジンから、現在のサービスワーカー登録を通じて作成された通知のリストを、作成された順に返します。
- {{domxref("ServiceWorkerRegistration.showNotification()")}}
  - : 要求したタイトルの通知を表示します。
- {{domxref("ServiceWorkerRegistration.unregister()")}}
  - : サービスワーカー登録を解除し、{{jsxref("Promise")}} を返します。 サービスワーカーは、登録が解除される前に進行中の操作を完了します。
- {{domxref("ServiceWorkerRegistration.update()")}}
  - : サービスワーカーの更新されたバージョンを、キャッシュを調べずに、サーバーでチェックします。

## イベント

- {{domxref("ServiceWorkerRegistration.updatefound_event", "updatefound")}}
  - : {{domxref("ServiceWorkerRegistration.installing")}} プロパティが新しいサービスワーカーを取得するたびに発生します。

## 例

この例では、コードはまずブラウザーがサービスワーカーに対応しているかどうかをチェックし、対応している場合はサービスワーカーを登録します。 次に、`updatefound` リスナーを追加します。 このリスナーでは、サービスワーカー登録を使用して、サービスワーカーの状態のさらなる変更を待ち受けします。 サービスワーカーが最後に登録されてから変更されていない場合、`updatefound` イベントは発生しません。

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      registration.addEventListener("updatefound", () => {
        // updatefound が発生した場合は、新しいサービスワーカーを
        // インストールしていることを意味します。
        const installingWorker = registration.installing;
        console.log(
          "新しいサービスワーカーをインストールしています:",
          installingWorker,
        );

        // インストール中のサービスワーカーの状態の変更を、
        // installingWorker.onstatechange を介して待ち受けできます
      });
    })
    .catch((error) => {
      console.error(`サービスワーカーの登録に失敗しました: ${error}`);
    });
} else {
  console.error("サービスワーカーに対応していません。");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) <sup>(英語)</sup>
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
