---
title: "PaymentRequest: shippingaddresschange イベント"
slug: Web/API/PaymentRequest/shippingaddresschange_event
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

**`shippingaddresschange`** イベントは、ユーザーが配送先を選択したとき、または配送先の詳細を変更したときに {{domxref("PaymentRequest")}} オブジェクトに送られます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("shippingaddresschange", (event) => {});

onshippingaddresschange = (event) => {};
```

## イベント型

{{domxref("PaymentRequestUpdateEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## イベントプロパティ

_{{domxref("Event")}} から継承したプロパティのみを提供しています。_

## 使用上の注意

ブラウザーによっては、プライバシー保護のため、配送先情報が編集される場合があります。つまり、配送先住所を含む {{domxref("PaymentAddress")}} は、ユーザーの同意なしにユーザーを特定できないようにするために、そのコンテンツの一部が変更、不明瞭化、または完全に削除されることがあります（ユーザーが商品を発送することを選んだ場合は、その住所が必要になるため）。

## 例

この例では、`shippingaddresschange` イベントのハンドラーを設定して、住所がウェブアプリケーションが設定した要件を満たしているかどうかを検証しています。

```js
const paymentRequest = new PaymentRequest(methodData, details, options);

paymentRequest.addEventListener(
  "shippingaddresschange",
  (event) => {
    let detailsUpdate = checkAddress(paymentRequest.shippingAddress);
    event.updateWith(detailsUpdate);
  },
  false,
);

const checkAddress = (theAddress) => {
  let detailsUpdate = {};

  // Check the address, return an object with any changes or errors.

  return detailsUpdate;
};
```

`shippingaddresschange` のハンドラーは、`onshippingaddresschange` イベントハンドラープロパティを用いて確立することもできます。

```js
paymentRequest.onshippingaddresschange = (event) => {
  let detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
};
```

## ブラウザーの互換性

{{Compat}}
