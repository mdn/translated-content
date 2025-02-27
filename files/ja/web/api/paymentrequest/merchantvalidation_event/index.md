---
title: "PaymentRequest: merchantvalidation イベント"
short-title: merchantvalidation
slug: Web/API/PaymentRequest/merchantvalidation_event
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}

**`merchantvalidation`** イベントは[決済リクエスト API](/ja/docs/Web/API/Payment_Request_API) によって、決済ハンドラーが、購入をリクエストされた販売者が、決済ハンドラーを使用することが許可されていることを確認することを要求する場合に {{domxref("PaymentRequest")}} オブジェクトへ配信されます。

どのように[販売者検証](/ja/docs/Web/API/Payment_Request_API/Concepts#販売者検証)のプロセスが動作するのかを知ってください。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("merchantvalidation", (event) => {});

onmerchantvalidation = (event) => {};
```

## イベント型

{{domxref("MerchantValidationEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("MerchantValidationEvent")}}

## イベントプロパティ

- {{domxref("MerchantValidationEvent.methodName")}}
  - : 検証を必要とする決済ハンドラーの固有の決済手段識別子を提供する文字列です。これは標準の決済ハンドラーの識別子文字列か、`https://apple.com/apple-pay` のような決済ハンドラーを識別しリクエストを処理するURLのいずれかである可能性があります。
- {{domxref("MerchantValidationEvent.validationURL")}}
  - : サイトやアプリが決済ハンドラー固有の検証情報を取得するための URL を指定する文字列です。このデータを取得したら、そのデータ（または検証データを解決するプロミス）を {{domxref("MerchantValidationEvent.complete", "complete()")}} に渡して、決済リクエストが認可された販売者から来ていることを検証しなければなりません。

## 例

この例では、`mercantvalidation` イベントに対してイベントハンドラーを確立している。これは {{domxref("Window/fetch", "fetch()")}} を用いて、イベントの {{domxref("MerchantValidationEvent.validationURL", "validationURL")}} プロパティから取得した決済手段の検証用 URL を引数に持つリクエストを自分自身でサーバーに送信します。販売者サーバーは、決済手段のドキュメント内の検証 URL にアクセスする必要があります。通常、クライアントは検証 URL にアクセスすべきではありません。

```js
request.addEventListener("merchantvalidation", (event) => {
  event.complete(async () => {
    const merchantServerUrl = `${
      window.location.origin
    }/validate?url=${encodeURIComponent(event.validationURL)}`;
    // get validation data, and complete validation;
    return await fetch(merchantServerUrl).then((response) => response.text());
  }, false);
});

const response = await request.show();
```

販売者サーバーがどのように検証を処理するかは、サーバーの実装と決済手段のドキュメントに依存します。検証サーバーから配信されたコンテンツは販売者サーバーに転送され、`fetch()` 呼び出しの履行ハンドラーからイベントの {{domxref("MerchantValidationEvent.complete", "complete()")}} メソッドに返されます。このレスポンスにより、決済ハンドラーは販売者が検証されたかどうかを知ることができます。

また、`onmerchantvalidation` イベントハンドラープロパティを使用して、このイベントのハンドラーを設定することができます。

```js
request.onmerchantvalidation = (event) => {
  event.complete(async () => {
    const merchantServerUrl = `${
      window.location.origin
    }/validate?url=${encodeURIComponent(event.validationURL)}`;
    // get validation data, and complete validation;
    return await fetch(merchantServerUrl).then((response) => response.text());
  });
};

const response = await request.show();
```

詳しくは、[販売者検証](/ja/docs/Web/API/Payment_Request_API/Concepts#販売者検証)を参照してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [決済リクエスト API](/ja/docs/Web/API/Payment_Request_API)
- [決済リクエスト API の使用](/ja/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- `onmerchantvalidation` イベントハンドラープロパティ
- [販売者検証](/ja/docs/Web/API/Payment_Request_API/Concepts#販売者検証)
- {{domxref("PaymentRequest.paymentmethodchange_event", "paymentmethodchange")}} イベント
- {{domxref("PaymentRequest.shippingaddresschange_event", "shippingaddresschange")}} イベント
- {{domxref("PaymentRequest.shippingoptionchange_event", "shippingoptionchange")}} イベント
