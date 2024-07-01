---
title: ServiceWorkerRegistration
slug: Web/API/ServiceWorkerRegistration
l10n:
  sourceCommit: 49c552151144b2e61fc34a12586d4d0c40abfbe6
---

{{APIRef("Service Workers API")}}

**`ServiceWorkerRegistration`** は [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) のインターフェイスで、サービスワーカー登録を表します。 同じオリジンを共有している 1 つ以上のページを制御するサービスワーカーを登録します。

サービスワーカー登録の存続期間は、対応するサービスワーカークライアントの存続期間内でそれらを表す `ServiceWorkerRegistration` オブジェクトの存続期間を超えています。 ブラウザーは、アクティブな `ServiceWorkerRegistration` オブジェクトの永続的なリストを維持します。

> **メモ:** この機能は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で利用できます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{domxref("EventTarget")}} から継承したプロパティも実装しています。_

- {{domxref("ServiceWorkerRegistration.active")}} {{ReadOnlyInline}}
  - : 状態がアクティブ化中 (`activating`) またはアクティブ化済み (`activated`) のサービスワーカーを返します。 これは最初は `null` に設定されています。 クライアントの URL が登録のスコープ内にある場合、アクティブワーカーは {{domxref("Client")}} を制御します（{{domxref("ServiceWorkerContainer.register")}} を最初に呼び出したときに設定した `scope` オプション）。
- {{domxref("ServiceWorkerRegistration.backgroundFetch")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : バックグラウンドフェッチ操作を管理する {{domxref("BackgroundFetchManager")}} オブジェクトへの参照を返します。
- {{domxref("ServiceWorkerRegistration.index")}} {{ReadOnlyInline}}
  - : {{domxref("ContentIndex")}} インターフェイスの参照を返し、これによってオフライン表示のコンテンツの索引付けを管理します。
- {{domxref("ServiceWorkerRegistration.installing")}} {{ReadOnlyInline}}
  - : 状態がインストール中 (`installing`) のサービスワーカーを返します。 これは最初は `null` に設定されています。
- {{domxref("ServiceWorkerRegistration.navigationPreload")}} {{ReadOnlyInline}}
  - : 現在のサービスワーカー登録に関連する {{domxref("NavigationPreloadManager")}} のインスタンスを返します。
- {{domxref("ServiceWorkerRegistration.paymentManager")}} {{Experimental_Inline}}
  - : 決済アプリの様々な機能を管理するために使用する、決済アプリの {{domxref("PaymentManager")}} のインスタンスを返します。
- {{domxref("ServiceWorkerRegistration.pushManager")}} {{ReadOnlyInline}}
  - : 購読申し込み、アクティブな購読の取得、プッシュの許可状況へのアクセスなど、プッシュの購読を管理するための {{domxref("PushManager")}} インターフェイスへの参照を返します。
- {{domxref("ServiceWorkerRegistration.scope")}} {{ReadOnlyInline}}
  - : サービスワーカー登録の一意の識別子を返します。 これは、{{domxref("ServiceWorker")}} を登録する文書と同じオリジンにある必要があります。
- {{domxref("ServiceWorkerRegistration.sync")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : バックグラウンド同期プロセスを管理する {{domxref("SyncManager")}} インターフェイスへの参照を返します。
- {{domxref("ServiceWorkerRegistration.waiting")}} {{ReadOnlyInline}}
  - : 状態がインストール済み (`installed`) のサービスワーカーを返します。 これは最初は `null` に設定されています。
- {{domxref("ServiceWorkerRegistration.updateViaCache")}} {{ReadOnlyInline}}
  - : サービスワーカースクリプトを更新する際に使用するキャッシュ戦略を示す文字列を返します。 `imports`, `all`, `none` の何れかとなります。

## インスタンスメソッド

_親インターフェースである {{domxref("EventTarget")}} から継承したメソッドも実装しています。_

- {{domxref("ServiceWorkerRegistration.getNotifications()")}}
  - : {{domxref("Notification")}} オブジェクトの配列に解決される {{jsxref("Promise")}} を返します。
- {{domxref("ServiceWorkerRegistration.showNotification()")}}
  - : 要求したタイトルの通知を表示します。
- {{domxref("ServiceWorkerRegistration.unregister()")}}
  - : サービスワーカー登録を解除し、{{jsxref("Promise")}} を返します。 サービスワーカーは、登録が解除される前に進行中の操作を完了します。
- {{domxref("ServiceWorkerRegistration.update()")}}
  - : サービスワーカーの更新されたバージョンを、キャッシュを調べずに、サーバーでチェックします。

## イベント

- {{domxref("ServiceWorkerRegistration.updatefound_event", "updatefound")}}
  - : タイプが `updatefound` のイベントが発生するたびに呼び出される /ja/docs/Web/API/EventListener のプロパティ。 {{domxref("ServiceWorkerRegistration.installing")}} プロパティが新しいサービスワーカーを取得するたびに発生します。

## 例

この例では、コードはまずブラウザーがサービスワーカーをサポートしているかどうかをチェックし、サポートしている場合はそれを登録します。 次に、`updatefound` リスナーを追加します。 このリスナーでは、サービスワーカー登録を使用して、サービスワーカーの状態のさらなる変更をリッスンします。 サービスワーカーが最後に登録されてから変更されていない場合、`updatefound` イベントは発生しません。

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
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (英語)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/) (英語)
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
