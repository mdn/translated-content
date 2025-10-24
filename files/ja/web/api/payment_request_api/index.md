---
title: 決済リクエスト API
slug: Web/API/Payment_Request_API
l10n:
  sourceCommit: 2d55f134b973850ecaa4ad01fe55c63bd3982576
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

決済リクエスト API (Payment Request API) は、販売者とユーザーの両方に、一貫したユーザー体験を提供します。これは新しい決済方法ではなく、ユーザーが自分の好きな決済方法を選択し、その情報を販売者が利用できるようにするための方法です。

## 決済リクエストの概念と利用方法

オンラインショッピングのカート放棄に関連する多くの問題は、チェックアウトフォームに起因する可能性があります。これは入力が難しく時間がかかり、完了するまでに複数の手順が必要になることがよくあるからです。**決済リクエスト API** はオンライン決済を完了するために必要な手順を減らし、チェックアウトフォームを廃止する可能性があることを意図しています。これは、ユーザーの詳細な情報を記憶し、 HTML フォームを必要とせずに販売者に渡されることで、チェックアウトプロセスを簡単にすることを目的としています。

決済をリクエストするには、ウェブページは、「購入」ボタンをクリックするなど、決済を開始するユーザー操作に応答して {{domxref("PaymentRequest")}} オブジェクトを作成します。`PaymentRequest` を使用すると、ユーザーが取引を完了するための入力を提供している間、ウェブページでユーザーエージェントと情報を交換できます。

完全なガイドは、[決済リクエスト API の使用](/ja/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)を参照してください。

> [!NOTE]
> オリジンを跨いだ {{htmlelement("iframe")}} 要素内では、[`allowpaymentrequest`](/ja/docs/Web/HTML/Reference/Elements/iframe#allowpaymentrequest) 属性が設定されている場合のみ、 API が利用可能です。

## インターフェイス

- {{domxref('PaymentAddress')}}
  - : 住所情報を含むオブジェクト。例えば、請求先住所や配送先住所に使用されます。
- {{domxref('PaymentRequest')}}
  - : {{Glossary("user agent", "ユーザーエージェント")}}の決済インターフェイスを作成および管理するための API を提供するオブジェクト。
- {{domxref('PaymentRequestEvent')}}
  - : {{domxref("PaymentRequest")}} が行われたときに決済ハンドラーに配信されるイベント。
- {{domxref('PaymentRequestUpdateEvent')}}
  - : ユーザーの操作に応じて、ウェブページが決済リクエストの詳細を更新できるようにします。
- {{domxref('PaymentMethodChangeEvent')}}
  - : ユーザーが決済手段を変更することを表します（例 : クレジットカードからデビットカードへの切り替え）。
- {{domxref('PaymentResponse')}}
  - : ユーザーが決済手段を選択し、決済リクエストを承認した後に返されるオブジェクト。
- {{domxref('MerchantValidationEvent')}}
  - : 販売者（ウェブサイト）が具体的な決済ハンドラー（例えば Apple Pay が使用できるものとして登録されているもの）の使用を許可されていることを検証することを要求するブラウザーを表します。

## 辞書

- {{domxref("AddressErrors")}}
  - : エラーのある {{domxref("PaymentAddress")}} 項目に、エラーの説明文を提供する文字列を含む辞書。
- {{domxref("PaymentRequestUpdateEvent.updateWith#parameters", "PaymentDetailsUpdate")}}
  - : 決済インターフェイスのインスタンス化の後で、ユーザーが対話を始める前、サーバーが情報を更新する必要がある場合に、決済の詳細に対して行われる必要がある変更を記述したオブジェクト。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [決済リクエスト API の使用](/ja/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [決済処理の概要](/ja/docs/Web/API/Payment_Request_API/Concepts)
- [Introducing the Payment Request API for Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
- [Samsung Pay Web Payments Integration Guide](https://developer.samsung.com/internet/android/web-payments-integration-guide.html)
- [W3C Payment Request API FAQ](https://github.com/w3c/payment-request-info/wiki/FAQ)
- 権限ポリシーディレクティブ {{httpheader("Permissions-Policy/payment", "payment")}}
