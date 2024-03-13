---
title: "PaymentRequest: paymentmethodchange イベント"
slug: Web/API/PaymentRequest/paymentmethodchange_event
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef}}

**`paymentmethodchange`** は[決済リクエスト API](/ja/docs/Web/API/Payment_Request_API) のイベントで、ユーザーが指定された決済ハンドラーで決済手段を変更したときに {{domxref("PaymentRequest")}} オブジェクトに配信されます。

例えば、ユーザーが [Apple Pay](https://www.apple.com/apple-pay/) のアカウントでクレジットカードを別のものに切り替えた場合、その変更を知らせるために `paymentmethodchange` イベントが発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("paymentmethodchange", (event) => {});

onpaymentmethodchange = (event) => {};
```

## イベント型

{{domxref("PaymentMethodChangeEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("PaymentMethodChangeEvent")}}

## イベントプロパティ

_以下のプロパティに加えて、このインターフェイスは {{domxref("PaymentRequestUpdateEvent")}} からプロパティを継承しています。_

- {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : 決済方法の変更を処理する際に有益な、決済方法固有のデータを含むオブジェクト。そのような情報が利用できない場合、この値は `null` となります。
- {{domxref("PaymentMethodChangeEvent.methodName", "methodName")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : 決済手段識別子を格納した文字列で、具体的な決済手段を一意に識別するための文字列です。この識別子は通常、決済プロセスで使用する URL ですが、`basic-card` のような標準的な非 URL 文字列であってもかまいません。既定値は空文字列の `""` です。

## 例

例をみていきましょう。このコードでは、新しい {{domxref("PaymentRequest")}} を作成し、リクエストの {{domxref("EventTarget.addEventListener", "addEventListener()")}} を呼び出して `paymentmethodchange` イベントのハンドラーを追加し、次に {{domxref("PaymentRequest.show", "show")}} を呼び出してユーザーに決済インターフェイスを表示します。

このコードは、`detailsForShipping()` というメソッドが存在し、`ground` という配送方法の配送オプションを {{domxref("PaymentShippingOption")}} 辞書に得られる形式で格納したオブジェクトを返すことを想定しています。このようにすることで、決済フォームでは ground 配送手段が既定値となります。

```js
const options = {
  requestShipping: true,
};

const paymentRequest = new PaymentRequest(
  paymentMethods,
  detailsForShipping("ground"),
  options,
);

paymentRequest.addEventListener(
  "paymentmethodchange",
  handlePaymentChange,
  false,
);

paymentRequest
  .show()
  .then((response) => response.complete("success"))
  .catch((err) => console.error(`Error handling payment request: ${err}`));
```

イベントハンドラー関数そのものである `handlePaymentChange()` は、次のようなものです。

```js
handlePaymentChange = (event) => {
  const detailsUpdate = {};

  if (event.methodName === "https://apple.com/apple-pay") {
    const serviceFeeInfo = calculateServiceFee(event.methodDetails);
    Object.assign(detailsUpdate, serviceFeeInfo);
  }

  event.updateWith(detailsUpdate);
};
```

まず、イベントの {{domxref("PaymentMethodChangeEvent.methodName", "methodName")}} プロパティを見ます。ユーザーが Apple Pay を使用しようとしていることが示された場合、 {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} を `calculateServiceFee()` という関数に渡します。これは、Apple Pay リクエストをサービスするために用いられているクレジットカードなどの取引に関する情報を受け取るために作成される可能性があります。そして、決済手段が必要とするサービス料を追加するために {{domxref("PaymentRequest")}} に適用する変更を指定するオブジェクトを計算し、返します。

イベントハンドラーが返す前に、イベントの {{domxref("PaymentMethodChangeEvent.updateWith()")}} メソッドを呼び出して、リクエストに変更を統合します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [決済リクエスト API](/ja/docs/Web/API/Payment_Request_API)
- [決済リクエスト API の使用](/ja/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} イベント
- {{domxref("PaymentRequest.payerdetailchange_event", "payerdetailchange")}} イベント
- {{domxref("PaymentRequest.shippingaddresschange_event", "shippingaddresschange")}} イベント
- {{domxref("PaymentRequest.shippingoptionchange_event", "shippingoptionchange")}} イベント
