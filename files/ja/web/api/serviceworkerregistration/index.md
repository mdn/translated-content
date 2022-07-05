---
title: ServiceWorkerRegistration
slug: Web/API/ServiceWorkerRegistration
tags:
  - API
  - Interface
  - Offline
  - リファレンス
  - サービスワーカー
  - サービスワーカー API
  - ServiceWorkerRegistration
  - ワーカー
translation_of: Web/API/ServiceWorkerRegistration
---
{{APIRef("Service Workers API")}}

**`ServiceWorkerRegistration`** は [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) のインターフェイスで、サービスワーカー登録を表します。 同じオリジンを共有している 1 つ以上のページを制御するサービスワーカーを登録します。

サービスワーカー登録の存続期間は、対応するサービスワーカークライアントの存続期間内でそれらを表す `ServiceWorkerRegistration` オブジェクトの存続期間を超えています。 ブラウザーは、アクティブな `ServiceWorkerRegistration` オブジェクトの永続的なリストを維持します。

> **Note:** この機能は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で利用できます。

{{InheritanceDiagram}}

## プロパティ

_親インターフェイスである {{domxref("EventTarget")}} から継承したプロパティも実装しています。_

- {{domxref("ServiceWorkerRegistration.active")}} {{readonlyinline}}
  - : 状態がアクティブ化中 (`activating`) またはアクティブ化済み (`activated`) のサービスワーカーを返します。 これは最初は `null` に設定されています。 クライアントの URL が登録のスコープ内にある場合、アクティブワーカーは {{domxref("Client")}} を制御します（{{domxref("ServiceWorkerContainer.register")}} を最初に呼び出したときに設定した `scope` オプション）。
- {{domxref("ServiceWorkerRegistration.index")}} {{readonlyinline}}
  - : {{domxref("ContentIndex")}} インターフェイスの参照を返し、これによってオフライン表示のコンテンツの索引付けを管理します。
- {{domxref("ServiceWorkerRegistration.installing")}} {{readonlyinline}}
  - : 状態がインストール中 (`installing`) のサービスワーカーを返します。 これは最初は `null` に設定されています。
- {{domxref("ServiceWorkerRegistration.navigationPreload")}} {{readonlyinline}}
  - : 現在のサービスワーカー登録に関連する {{domxref("NavigationPreloadManager")}} のインスタンスを返します。
- {{domxref("ServiceWorkerRegistration.pushManager")}} {{readonlyinline}}
  - : 購読申し込み、アクティブな購読の取得、プッシュの許可状況へのアクセスなど、プッシュの購読を管理するための {{domxref("PushManager")}} インターフェイスへの参照を返します。
- {{domxref("ServiceWorkerRegistration.scope")}} {{readonlyinline}}
  - : サービスワーカー登録の一意の識別子を返します。 これは、{{domxref("ServiceWorker")}} を登録する文書と同じオリジンにある必要があります。
- {{domxref("ServiceWorkerRegistration.sync")}} {{non-standard_inline}} {{readonlyinline}}
  - : バックグラウンド同期プロセスを管理する {{domxref("SyncManager")}} インターフェイスへの参照を返します。
- {{domxref("ServiceWorkerRegistration.waiting")}} {{readonlyinline}}
  - : 状態がインストール済み (`installed`) のサービスワーカーを返します。 これは最初は `null` に設定されています。
- {{domxref("ServiceWorkerRegistration.updateViaCache")}} {{readonlyinline}}
  - : サービスワーカースクリプトを更新する際に使用するキャッシュ戦略を示す文字列を返します。 `imports`, `all`, `none` の何れかとなります。

## メソッド

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

- {{domxref("ServiceWorkerRegistration.onupdatefound")}} {{readonlyinline}}
  - : タイプが `updatefound` のイベントが発生するたびに呼び出される /ja/docs/Web/API/EventListener のプロパティ。 {{domxref("ServiceWorkerRegistration.installing")}} プロパティが新しいサービスワーカーを取得するたびに発生します。

<h2 id="Examples" name="Examples">例</h2>

この例では、コードはまずブラウザーがサービスワーカーをサポートしているかどうかをチェックし、サポートしている場合はそれを登録します。 次に、`updatefound` リスナーを追加します。 このリスナーでは、サービスワーカー登録を使用して、サービスワーカーの状態のさらなる変更をリッスンします。 サービスワーカーが最後に登録されてから変更されていない場合、`updatefound` イベントは発生しません。

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(registration) {
    registration.addEventListener('updatefound', function() {
      // updatefound が発生した場合は、新しいサービスワーカーを
      // インストールしていることを意味します。
      var installingWorker = registration.installing;
      console.log('新しいサービスワーカーをインストールしています:',
        installingWorker);

      // インストール中のサービスワーカーの状態の変更を、
      // installingWorker.onstatechange を介してリッスンできます
    });
  })
  .catch(function(error) {
    console.log('サービスワーカーの登録に失敗しました:', error);
  });
} else {
  console.log('サービスワーカーに対応していません。');
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test) (英語)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/) (英語)
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
