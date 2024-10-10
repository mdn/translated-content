---
title: "ServiceWorkerGlobalScope: canmakepayment イベント"
short-title: canmakepayment
slug: Web/API/ServiceWorkerGlobalScope/canmakepayment_event
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`canmakepayment`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、決済アプリのサービスワーカーで発生し、決済処理の準備ができているかどうかを確認します。具体的には、販売者ウェブサイトが {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}} コンストラクターを呼び出すと発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("canmakepayment", (event) => {});

oncanmakepayment = (event) => {};
```

## イベント型

{{domxref("CanMakePaymentEvent")}} です。{{domxref("ExtendableEvent")}} から継承しています。

{{InheritanceDiagram("CanMakePaymentEvent")}}

## 例

`canmakepayment` イベントは、決済アプリのサービスワーカーで発行され、決済処理の準備ができているかどうかを調べます。具体的には、販売者のウェブサイトが {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}} コンストラクターを呼び出すと発行されます。サービスワーカーは、次のように {{domxref("CanMakePaymentEvent.respondWith()")}} メソッドを使用して適切に応答することができます。

```js
self.addEventListener("canmakepayment", (e) => {
  e.respondWith(
    new Promise((resolve, reject) => {
      someAppSpecificLogic()
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    }),
  );
});
```

`respondWith()` は、サービスワーカーが決済リクエストを処理できる状態にある (`true`) またはそうでない (`false`) ことを示す論理値で解決するプロミス ({{jsxref("Promise")}}) を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Payment Handler API", "決済ハンドラー API", "", "nocode")}}
- [Web-based payment apps overview](https://web.dev/articles/web-based-payment-apps-overview)
- [Setting up a payment method](https://web.dev/articles/setting-up-a-payment-method)
- [Life of a payment transaction](https://web.dev/articles/life-of-a-payment-transaction)
- [決済リクエスト API の使用](/ja/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [決済処理の概念](/ja/docs/Web/API/Payment_Request_API/Concepts)
