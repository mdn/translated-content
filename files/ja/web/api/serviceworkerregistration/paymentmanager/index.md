---
title: ServiceWorkerRegistration.paymentManager
slug: Web/API/ServiceWorkerRegistration/paymentManager
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}

**`paymentManager`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスのプロパティで、決済アプリの {{domxref("PaymentManager")}} インスタンスを返します。これは決済アプリの様々な機能を管理するために使用されます。

## 値

{{domxref("PaymentManager")}} のオブジェクトインスタンスです。

## 例

```js
navigator.serviceWorker.register("serviceworker.js").then((registration) => {
  registration.paymentManager.userHint = "Card number should be 16 digits";

  registration.paymentManager
    .enableDelegations(["shippingAddress", "payerName"])
    .then(() => {
      // ...
    });

  // ...
});
```

- {{domxref("PaymentManager.userHint")}} は、決済ハンドラー UI で決済アプリの名前とアイコンと共に表示するブラウザー用のヒントを提供するために使用します。
- {{domxref("PaymentManager.enableDelegations()")}}は、必要な決済情報の様々な部分を、加盟店のウェブサイト内から収集するのではなく、決済アプリに提供する責任を委任するために使用します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Payment Handler API", "決済ハンドラー API", "", "nocode")}}
- [Web-based payment apps overview](https://web.dev/web-based-payment-apps-overview/)
- [Setting up a payment method](https://web.dev/setting-up-a-payment-method/)
- [Life of a payment transaction](https://web.dev/life-of-a-payment-transaction/)
- [決済リクエスト API の使用](/ja/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [決済処理の概要](/ja/docs/Web/API/Payment_Request_API/Concepts)
