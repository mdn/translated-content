---
title: PaymentRequestUpdateEvent
slug: Web/API/PaymentRequestUpdateEvent
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

**`PaymentRequestUpdateEvent`** インターフェイスは、待機中の {{domxref("PaymentRequest")}} インスタンスの配送関連情報に変更が加えられたときに {{domxref("PaymentRequest")}} に送られるイベント用に使用します。それらのイベントは以下の通りです。

- {{domxref("PaymentRequest.shippingaddresschange_event", "shippingaddresschange")}} {{securecontext_inline}}
  - : ユーザーが配送先を変更するたびに配信されます。
- {{domxref("PaymentRequest.shippingoptionchange_event", "shippingoptionchange")}} {{securecontext_inline}}
  - : ユーザーが配送オプションを変更するたびに配信されます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("PaymentRequestUpdateEvent.PaymentRequestUpdateEvent()","PaymentRequestUpdateEvent()")}} {{securecontext_inline}}
  - : 新しい `PaymentRequestUpdateEvent` オブジェクトを生成します。

## インスタンスプロパティ

_親インターフェイスである {{domxref("Event")}} から継承されたプロパティのみを提供しています。_

## インスタンスメソッド

_親インターフェイスである {{domxref("Event")}} から継承されたプロパティに加え、`PaymentRequestUpdateEvent` は以下のメソッドを提供しています。_

- {{domxref("PaymentRequestUpdateEvent.updateWith()")}} {{securecontext_inline}}
  - : イベントハンドラーは、決済リクエストに含める情報を変更する必要があると判断した場合、または新しい情報を追加する必要があると判断した場合、置換または追加する必要がある情報を指定して `updateWith()` を呼び出します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [決済リクエスト API の使用](/ja/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
