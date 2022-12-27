---
title: PaymentMethodChangeEvent
slug: Web/API/PaymentMethodChangeEvent
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

**`PaymentMethodChangeEvent`** は [Payment Request API](/ja/docs/Web/API/Payment_Request_API) のインターフェイスで、ユーザーが支払方法を切り替えたとき (例えば、ユーザーが Apple Pay を使用する際に、「その店舗の」カードを選択する場合) に実行される一部の支払いハンドラーが発生する {{domxref("PaymentRequest/paymentmethodchange_event", "paymentmethodchange")}} イベントを説明します。

## コンストラクター

- {{domxref("PaymentMethodChangeEvent.PaymentMethodChangeEvent", "PaymentMethodChangeEvent()")}}
  - : 新しい `PaymentMethodChangeEvent` オブジェクトを作成して返し、オプションで与えられた {{domxref("PaymentMethodChangeEventInit")}} 辞書から得た値で初期化します。

## プロパティ

_以下のプロパティに加えて、このインターフェイスは {{domxref("PaymentRequestUpdateEvent")}} から継承したプロパティを含みます。_

- {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : 支払方法の変更時に利用できる支払方法に依存したデータを含むオブジェクトです。そのような情報が利用できない場合は、この値は `null` です。
- {{domxref("PaymentMethodChangeEvent.methodName", "methodName")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : {{domxref("DOMString")}} で、特定の支払方法を固有に識別する文字列である支払方法識別子が入ります。この識別子はふつう、支払い手続で使用される URL ですが、 `basic-card` のような標準化された文字列にすることもできます。既定値は空文字列、 `""` です。

## メソッド

_このインターフェイスは {{domxref("PaymentRequestUpdateEvent")}} から継承したメソッドを含みます。_

## 仕様書

| 仕様書                                                                                                               | 状態                         | 備考     |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Payment','#paymentmethodchangeevent-interface','PaymentMethodChangeEvent')}} | {{Spec2('Payment')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.PaymentMethodChangeEvent")}}
