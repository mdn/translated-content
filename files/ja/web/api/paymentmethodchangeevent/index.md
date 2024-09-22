---
title: PaymentMethodChangeEvent
slug: Web/API/PaymentMethodChangeEvent
l10n:
  sourceCommit: eb11f0bd259ff4aa109067c7714bbe229285a499
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

**`PaymentMethodChangeEvent`** は[決済リクエスト API](/ja/docs/Web/API/Payment_Request_API) のインターフェイスで、ユーザーが支払方法を切り替えたとき (例えば、ユーザーが Apple Pay を使用する際に、「その店舗の」カードを選択する場合) に実行される一部の支払いハンドラーが発生する {{domxref("PaymentRequest/paymentmethodchange_event", "paymentmethodchange")}} イベントを説明します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("PaymentMethodChangeEvent.PaymentMethodChangeEvent", "PaymentMethodChangeEvent()")}}
  - : 新しい `PaymentMethodChangeEvent` オブジェクトを作成して返します。

## インスタンスプロパティ

_以下のプロパティに加えて、このインターフェイスは {{domxref("PaymentRequestUpdateEvent")}} から継承したプロパティを含みます。_

- {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} {{ReadOnlyInline}}
  - : 支払方法の変更時に利用できる支払方法に依存したデータを含むオブジェクトです。そのような情報が利用できない場合は、この値は `null` です。
- {{domxref("PaymentMethodChangeEvent.methodName", "methodName")}} {{ReadOnlyInline}}
  - : 文字列で、特定の支払方法を固有に識別する文字列である支払方法識別子が入ります。この識別子はふつう、支払い手続で使用される URL ですが、 `basic-card` のような標準化された文字列にすることもできます。既定値は空文字列、 `""` です。

## インスタンスメソッド

_このインターフェイスは {{domxref("PaymentRequestUpdateEvent")}} から継承したメソッドを含みます。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
