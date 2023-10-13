---
title: PushManager
slug: Web/API/PushManager
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{ApiRef("Push API")}}

**`PushManager`** は[プッシュ API](/ja/docs/Web/API/Push_API) のインターフェイスで、サードパーティのサーバーからの通知だけではなく、プッシュ通知へのリクエスト URL を取得するための方法を提供します。

このインターフェイスは、{{domxref("ServiceWorkerRegistration.pushManager")}} プロパティを経由してアクセスできます。

## インスタンスプロパティ

- [`PushManager.supportedContentEncodings`](/ja/docs/Web/API/PushManager/supportedContentEncodings_static)
  - : プッシュメッセージのペイロードの暗号化でサポートされているコンテンツエンコーディングの配列を返します。

## インスタンスメソッド

- {{domxref("PushManager.getSubscription()")}}
  - : 既存のプッシュサブスクリプションを受け取ります。これは既存のプッシュサブスクリプションの詳細を含む {{domxref("PushSubscription")}} に解決される {{jsxref("Promise")}} を返します。既存のプッシュサブスクリプションが存在しない場合、`null` 値で解決されます。
- {{domxref("PushManager.permissionState()")}}
  - : 現在の {{domxref("PushSubscription")}} の許可状況で解決される {{jsxref("Promise")}} を返します。許可状況は `'granted'`、`'denied'`、`'prompt'` のいずれかです。
- {{domxref("PushManager.subscribe()")}}
  - : プッシュサービスに加入します。プッシュサブスクリプションの詳細を含む {{domxref("PushSubscription")}} オブジェクトで解決される {{jsxref("Promise")}} を返します。現在のサービスワーカーに既存のサブスクリプションがない場合、新しいプッシュサブスクリプションが生成されます。

### 非推奨のメソッド

- {{domxref("PushManager.hasPermission()")}} {{deprecated_inline}}
  - : リクエストしているウェブアプリの `PushPermissionStatus` で解決される {{jsxref("Promise")}} を返します。この値は `granted`、`denied`、`default` のいずれかです。{{domxref("PushManager.permissionState()")}} で置き換えられました。
- {{domxref("PushManager.register()")}} {{deprecated_inline}}
  - : プッシュサービスに加入します。 {{domxref("PushManager.subscribe()")}} で置き換えられました。
- {{domxref("PushManager.registrations()")}} {{deprecated_inline}}
  - : 既存のプッシュサブスクリプションを受け取ります。{{domxref("PushManager.getSubscription()")}} で置き換えられました。
- {{domxref("PushManager.unregister()")}} {{deprecated_inline}}
  - : 指定したサブスクリプションのエンドポイントを登録解除して削除します。API の更新後は、サブスクリプションは {{domxref("PushSubscription.unsubscribe()")}} メソッドを呼び出して登録解除することになりました。

## 例

```js
this.onpush = (event) => {
  console.log(event.data);
  // ここから、IndexedDB にデータを書き込んだり、いずれかのウィンドウに
  // それを送信したり、通知を表示したりできます。
};

navigator.serviceWorker
  .register("serviceworker.js")
  .then((serviceWorkerRegistration) => {
    serviceWorkerRegistration.pushManager.subscribe().then(
      (pushSubscription) => {
        console.log(pushSubscription.endpoint);
        // これでアプリケーションサーバーが使用できるプッシサブスクリプションの
        // 詳細が利用できるようになり、例えば XMLHttpRequest を使用してサーバーに
        // 送信することができます。
      },
      (error) => {
        console.error(error);
      },
    );
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [プッシュ API](/ja/docs/Web/API/Push_API)
- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
