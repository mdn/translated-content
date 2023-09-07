---
title: "PaymentRequest: shippingoptionchange イベント"
slug: Web/API/PaymentRequest/shippingoptionchange_event
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

配送情報を要求し、配送オプションが提供されている決済リクエストでは、ユーザーが利用できるオプションのリストから配送オプションを選ぶと、**`shippingoptionchange`** イベントが {{domxref("PaymentRequest")}} に送られます。

現在選択されている配送オプションを特定する文字列は、{{domxref("PaymentRequest.shippingOption", "shippingOption")}}プロパティで得ることができます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("shippingoptionchange", (event) => {});

onshippingoptionchange = (event) => {};
```

## イベント型

{{domxref("PaymentRequestUpdateEvent")}} です。{{domxref("Event")}} から継承しています。

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## イベントプロパティ

_{{domxref("Event")}} から継承したプロパティのみを提供しています。_

## 例

このコードでは、`shippingoptionchange` イベントに対するハンドラーを設定します。このコードは、選択された配送オプションに基づいて決済の合計料金を再計算します。例えば、3 つのオプション（"Free ground shipping", "2-day air", "Next day" など）がある場合、ユーザーがそれらのオプションを選ぶたびに、このイベントハンドラーが呼ばれて、変更された配送オプションに基づいて合計金額が再計算されます。

```js
paymentRequest.addEventListener(
  "shippingoptionchange",
  (event) => {
    const value = calculateNewTotal(paymentRequest.shippingOption);
    const total = {
      currency: "EUR",
      label: "Total due",
      value,
    };
    event.updateWith({ total });
  },
  false,
);
```

カスタム関数 `calculateNewTotal()` を呼び出して、{{domxref("PaymentRequest.shippingOption", "shippingOption")}} で指定した新しく選択された配送オプションに基づいて更新後の合計を算出した後。イベントの {{domxref("PaymentRequestUpdateEvent.updateWith", "updateWith()")}} メソッドを呼び出すことにより、改訂後の合計が決済リクエストに返されます。

`shippingoptionchange` のイベントハンドラーは、対応するイベントハンドラープロパティである `onshippingoptionchange` を使用して作成することもできます。

```js
paymentRequest.onshippingoptionchange = (event) => {
  const value = calculateNewTotal(paymentRequest.shippingOption);
  const total = {
    currency: "EUR",
    label: "Total due",
    value,
  };
  event.updateWith({ total });
};
```

## ブラウザーの互換性

{{Compat}}
