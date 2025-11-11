---
title: "ServiceWorkerGlobalScope: paymentrequest イベント"
short-title: paymentrequest
slug: Web/API/ServiceWorkerGlobalScope/paymentrequest_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Payment Handler API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

**`paymentrequest`** は {{domxref("ServiceWorkerGlobalScope")}} インターフェイスのイベントで、{{domxref("PaymentRequest.show()")}} メソッドを介して販売者ウェブサイト上で決済フローが開始された場合に決済アプリ上で発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("paymentrequest", (event) => {});

onpaymentrequest = (event) => {};
```

## イベント型

{{domxref("PaymentRequestEvent")}} です。{{domxref("ExtendableEvent")}} から継承しています。

{{InheritanceDiagram("PaymentRequestEvent")}}

## 例

{{domxref("PaymentRequest.show()")}} メソッドが呼び出されると、決済アプリのサービスワーカーに決済リクエストイベントが発行されます。このイベントは、決済アプリのサービスワーカー内でリスニングされ、決済プロセスの次の段階に入ります。

```js
let payment_request_event;
let resolver;
let client;

// `self` is the global object in service worker
self.addEventListener("paymentrequest", async (e) => {
  if (payment_request_event) {
    // If there's an ongoing payment transaction, reject it.
    resolver.reject();
  }
  // Preserve the event for future use
  payment_request_event = e;

  // ...
});
```

`paymentrequest` イベントを受信すると、決済アプリは {{domxref("PaymentRequestEvent.openWindow()")}} を呼んで決済ハンドラーウィンドウを開くことができます。決済ハンドラーウィンドウには、顧客が認証をしたり、配送先住所やオプションを選べたり、決済を承認したりできる、決済アプリのインターフェイスが表示されます。

決済が処理されたら、{{domxref("PaymentRequestEvent.respondWith()")}} を使用して、決済結果を販売者のウェブサイトに渡します。

この段階の詳細については、 [Receive a payment request event from the merchant](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event) を参照してください。

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
- [決済処理の概要](/ja/docs/Web/API/Payment_Request_API/Concepts)
