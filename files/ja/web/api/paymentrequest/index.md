---
title: PaymentRequest
slug: Web/API/PaymentRequest
l10n:
  sourceCommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}

[決済リクエスト API](/ja/docs/Web/API/Payment_Request_API) の **`PaymentRequest`** インターフェイスは、この API への第一のアクセスポイントであり、ウェブコンテンツやアプリが、サイトのユーザーやアプリの公開者に代わって、エンドユーザーからの決済を受け入れることができます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref('PaymentRequest.PaymentRequest()','PaymentRequest()')}}
  - : 新しい `PaymentRequest` オブジェクトを作成します。

## インスタンスプロパティ

- {{domxref('PaymentRequest.id')}} {{ReadOnlyInline}}
  - : 特定の `PaymentRequest` に固有の識別子で、`details.id` で設定することができます。設定されていない場合は、UUID が既定値として設定されます。
- {{domxref('PaymentRequest.shippingAddress')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 決済オプションでリクエストされた場合、送料を計算するためにユーザーが選んだ配送先住所を返します。このプロパティは、コンストラクターが `requestShipping` フラグを設定した状態で呼び出された場合にのみ設定されます。さらに、一部のブラウザーでは、ユーザーが取引を完了する準備ができていることを示す（すなわち、「購入する」を押す）までは、プライバシーのために住所の一部が省略されることになります。
- {{domxref('PaymentRequest.shippingOption')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 選択された配送オプションの識別子を返します。このプロパティは、`requestShipping` フラグを true に設定してコンストラクターを呼び出した場合にのみ設定されます。
- {{domxref('PaymentRequest.shippingType')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 取引を履行するために使用する配送の種類を返します。これは `shipping`、`delivery`、`pickup` のいずれか、またはコンストラクターで値が提供されなかった場合は `null` となる。

## インスタンスメソッド

- {{domxref('PaymentRequest.canMakePayment()')}}
  - : `show()` を呼び出す前に `PaymentRequest` オブジェクトが決済を行うことができるかどうかを示します。
- {{domxref('PaymentRequest.show()')}}
  - : ユーザーエージェントに決済リクエストのためのユーザーとの対話を開始させます。
- {{domxref('PaymentRequest.abort()')}}
  - : ユーザーエージェントに決済リクエストを終わらせ、表示されている可能性のあるユーザーインターフェイスを除去させます。

## イベント

- {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} {{Deprecated_Inline}}
  - : 一部の決済ハンドラー（Apple Pay など）では、{{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} イベントを処理するためにこのイベントハンドラーが呼び出されます。このイベントは、ユーザーエージェントが、決済リクエストをする販売者またはベンダーが正当であるかどうかを検証する必要があると、販売者に要求する場合に配信されます。
- {{domxref("PaymentRequest.paymentmethodchange_event", "paymentmethodchange")}}
  - : 一部の決済ハンドラー（Apple Payなど）では、クレジットカードからデビットカードに切り替えるなど、ユーザーが決済手段を変更するたびに配信されます。
- {{domxref("PaymentRequest.shippingaddresschange_event", "shippingaddresschange")}}{{Deprecated_Inline}} {{Non-standard_Inline}}
  - : ユーザーが配送先を変更するたびに配信されます。
- {{domxref("PaymentRequest.shippingoptionchange_event", "shippingoptionchange")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : ユーザーが配送オプションを変更するたびに配信されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
