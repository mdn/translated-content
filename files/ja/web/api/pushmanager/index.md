---
title: PushManager
slug: Web/API/PushManager
---

{{SeeCompatTable}}{{ApiRef("Push API")}}

[Push API](/ja/docs/Web/API/Push_API) の `PushManager` インターフェースは、3rd パーティーのサーバーからの通知だけではなく、プッシュ通知へのリクエスト URL を取得するための方法を提供します。

このインターフェースは、{{domxref("ServiceWorkerRegistration.pushManager")}} プロパティを経由してアクセスできます。

> **メモ:** このインターフェースは、廃止された {{domxref("PushRegistrationManager")}}で以前に提案されていた機能をリプレースしています。

## プロパティ

- {{domxref("PushManager.supportedContentEncodings")}}
  - : プッシュメッセージのペイロードの暗号化でサポートされているコンテンツエンコーディングの配列を返します。

## メソッド

- {{domxref("PushManager.getSubscription()")}}
  - : 既存のプッシュサブスクリプションを受け取ります。これは既存のプッシュサブスクリプションの詳細を含む {{domxref("PushSubscription")}} を解決する {{jsxref("Promise")}} を返します。既存のプッシュサブスクリプションが存在しない場合、`null` 値で解決されます。
- {{domxref("PushManager.permissionState()")}}
  - : 現在の {{domxref("PushSubscription")}} の許可状況で解決される {{jsxref("Promise")}} を返します。許可状況は `'granted'`、`'denied'`、`'prompt'` のいずれかです。
- {{domxref("PushManager.subscribe()")}}
  - : プッシュサービスを提供します。プッシュサブスクリプションの詳細を含む {{domxref("PushSubscription")}} オブジェクトで解決される {{jsxref("Promise")}} を返します。現在の service worker に既存のサブスクリプションがない場合、新しいプッシュサブスクリプションが生成されます。

### 非推奨のメソッド

- {{domxref("PushManager.hasPermission()")}} {{deprecated_inline}}
  - : リクエストしている Web アプリの`PushPermissionStatus` で解決される {{jsxref("Promise")}} を返します。この値は `granted`、`denied`、`default` のいずれかです。{{domxref("PushManager.permissionState()")}} で置き換えられました。
- {{domxref("PushManager.register()")}} {{deprecated_inline}}
  - : プッシュサービスを提供します。 {{domxref("PushManager.subscribe()")}} で置き換えられました。
- {{domxref("PushManager.registrations()")}} {{deprecated_inline}}
  - : 既存のプッシュサブスクリプションを受け取ります。{{domxref("PushManager.getSubscription()")}} で置き換えられました。
- {{domxref("PushManager.unregister()")}} {{deprecated_inline}}
  - : 指定のサブスクリプションエンドポイントを解除して削除します。API のアップデートで、サブスクリプションは、{{domxref("PushSubscription.unsubscribe()")}} メソッドを呼び出して解除することになりました。

## 例

```js
this.onpush = function(event) {
  console.log(event.data);
  // ここから、IndexedDB にデータを書き込んだり、いずれかのウィンドウに
  // それを送信したり、通知を表示したりできます。
}

navigator.serviceWorker.register('serviceworker.js').then(
  function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe().then(
      function(pushSubscription) {
        console.log(pushSubscription.subscriptionId);
        console.log(pushSubscription.endpoint);
        // ここから、IndexedDB にデータを書き込んだり、いずれかのウィンドウに
        // それを送信したり、通知を表示したりできます。
      }, function(error) {
        // 開発中は、コンソールにエラーを表示するのに役立ちます。
        // 本番環境では、アプリケーションサーバにエラー情報を送信
        // するためにも 役立ちます。
        console.log(error);
      }
    );
  });
```

## 仕様

| 仕様                                                                                 | 状態                         | コメント   |
| ------------------------------------------------------------------------------------ | ---------------------------- | ---------- |
| {{SpecName('Push API','#pushmanager-interface','PushManager')}} | {{Spec2('Push API')}} | 初期定義。 |

## ブラウザー実装状況

{{Compat("api.PushManager")}}

## 関連項目

- [Push API](/ja/docs/Web/API/Push_API)
- [Service Worker API](/ja/docs/Web/API/Service_Worker_API)
