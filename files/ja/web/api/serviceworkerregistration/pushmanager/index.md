---
title: "ServiceWorkerRegistration: pushManager プロパティ"
short-title: pushManager
slug: Web/API/ServiceWorkerRegistration/pushManager
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Service Workers API")}}

**`pushManager`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのプロパティで、プッシュサブスクリプションを管理するための {{domxref("PushManager")}} インターフェイスへの参照を返します。 これには、サブスクリプションへの参加、アクティブなサブスクリプションの取得、プッシュ通知の許可状況へのアクセスの対応が含まれます。

## 構文

{{domxref("PushManager")}} オブジェクトです。

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
        console.log(pushSubscription.subscriptionId);
        console.log(pushSubscription.endpoint);
        // アプリケーションサーバが必要としているプッシュサブスクリプションの
        // 詳細はここから使用できます。たとえば、XMLHttpRequest を使用して
        // これを送信できます。
      },
      (error) => {
        // 開発中は、コンソールにエラーを表示するのに役立ちます。
        // 本番環境では、アプリケーションサーバにエラー情報を送信
        // するためにも 役立ちます。
        console.error(error);
      },
    );
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プッシュ API](/ja/docs/Web/API/Push_API)
